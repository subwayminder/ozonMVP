<?php

namespace Ozon;
require_once("tools.php");
require 'b24class.php';
require 'config.php';

class OzonIntegration
{
    /**
     * @var string
     */
    protected string $domain;
    /**
     * @var string
     */
    protected string $accessToken;
    /**
     * @var object
     */
    protected object $db;
    /**
     * @var array
     */
    protected array $settings;
    /**
     * @var string[]
     */
    protected $arOzonStatuses = [];

    /**
     * OzonIntegration constructor.
     * @param string $domain
     * @param string $accessToken
     * @param object $db
     */
    public function __construct(string $domain, object $db)
    {
        $this->domain = $domain;
        $this->db = $db;
        $this->refreshAuthData();
        $this->checkLicense();
        $this->getSettings();
    }

    /**
     * @return void
     */
    private function getSettings() :void{
        $settings = \bitrix24::callMethod($this->domain,  'entity.item.get', http_build_query(
            [
                'ENTITY' => 'ozonEntity',
                'SORT' => [
                    'ID' => 'ASC'
                ]
            ]
        ), $this->accessToken);
        if (!$settings){
            die('Settings query returns NULL');
        }
        var_dump($settings);
        $this->settings = $settings['result'][0]['PROPERTY_VALUES'];
        $this->arOzonStatuses = [
            "awaiting_packaging" => $this->settings['OZON_AWAITING_CONFIRMATION'],
            "delivering" => $this->settings['OZON_DELIVERING_STATUS'],
            "delivered" => $this->settings['OZON_DELIVERED'],
            "cancelled" => $this->settings['OZON_CANCELED'],
            "awaiting_deliver" => $this->settings['OZON_AWAITING_SHIPMENT'],
            "driver_pickup " => $this->settings['AT_THE_DRIVER'],
            "arbitration" => $this->settings['PENDING_DECISION'],
            "not_accepted" => $this->settings['CONTROVERSIAL']
        ];
        if(DEBUG)var_dump($this->settings);
        if(DEBUG)var_dump($this->settings['MODULE_IS_ACTIVE']);
    }


    /**
     * Получает текущий oauth-токен
     * @return array
     */
    private function getCurrentToken(){
        $result = $this->db->select('SELECT * FROM b24_portal_reg WHERE PORTAL="'.$this->domain.'"')[0];
        $currentAuthParams = [
            'access_token' => $result['ACCESS_TOKEN'],
            'refresh_token' => $result['REFRESH_TOKEN']
        ];
        return $currentAuthParams;
    }

    /**
     * Проверяет авторизацию
     * @return object
     */
    private function checkAuth(){
        $currentAuthParams = $this->getCurrentToken();
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://b24-ijv00v.bitrix24.ru/rest/crm.deal.fields?auth=".$currentAuthParams['access_token'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Cookie: BITRIX_SM_SALE_UID=0; PHPSESSID=yEuCKv3J07YWlYFdFdlOpKXGhbPk1TXo; qmb=."
            ),
        ));
        $response = json_decode(curl_exec($curl));
        var_dump('$response');
        var_dump($response);
        curl_close($curl);
        return $response;
    }

    /**
     * @return string
     */
    protected function refreshAuthData(){
        $response = $this->checkAuth();
        $curAuthParams = $this->getCurrentToken();
        if ($response->error == 'expired_token'){
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://oauth.bitrix.info/oauth/token/?grant_type=refresh_token&client_id='.APP_ID.
                    '&client_secret='.APP_SECRET_CODE.'&refresh_token='.$curAuthParams['refresh_token'],
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Cookie: PHPSESSID=z47f7f8gcdvcheNz1F1IFpj2HXSsmPOb"
                ),
            ));

            $response = json_decode(curl_exec($curl));
            curl_close($curl);
            if($response->access_token == null){
                die('Refreshing auth data has been failed');
            }
            $this->accessToken = $response->access_token;
            $this->db->select('UPDATE b24_portal_reg 
            SET `ACCESS_TOKEN`='.$this->accessToken.'
            `REFRESH_TOKEN`='.$response->refresh_token.'
            WHERE `PORTAL=`'.$this->domain);
            return $response;
        }
        else{
            $this->accessToken = $curAuthParams['access_token'];
            return $curAuthParams['access_token'];
        }
    }

    /**
     * @param string $params
     * @param string $method
     * @return bool|string
     */
    protected function sendRequestToOzon($params, $method)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://" . HOST_TEST . $method,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $params,
            CURLOPT_HTTPHEADER => array(
                "Client-Id: ".$this->settings['CLIENT_ID'],
                "Api-Key: ".$this->settings['OZON_API_KEY'],
                "Content-Type: application/json",
                "Content-Type: text/plain",
                "Cookie: visid_incap_1285159=UXQVSCEmRGSCzHfl7Vy+Pj4WvV4AAAAAQUIPAAAAAACX0T6/FzKmxP63+UcRkjDe; nlbi_1285159=LEKyDi1xK2uW4YCB9taiIQAAAABCzxv8xD1VglnbCqSA2xMe; incap_ses_800_1285159=ObTsauwLJwQB2teuziwaCz4WvV4AAAAAjXRPLoBpXujISsjuZnV9Gw=="
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }


    /**
     * @param $orderId
     * @return bool
     */
    protected function isNewOrderExists($orderId)
    {
        var_dump($orderId);
        $dealQuery = http_build_query(array(
            'filter' => [
                'UF_CRM_OZON_POSTING_NUMBER' => $orderId
            ],
            'select' => [
                'ID'
            ]
        ));

        $dealId = \bitrix24::callMethod($this->domain,'crm.deal.list', $dealQuery, $this->accessToken);
        $dealId = $dealId['result'][0]['ID'];
        var_dump($dealId);
        return $dealId > 0;
    }

    /**
     * @param $item
     * @param $method
     * @param string $b24Id
     * @param string $productId
     * @return string
     */
    protected function prepareQueryForB24($item, $method, $b24Id = '', $productId = ''): string
    {
        var_dump($item);
        $queryData = '';
        switch ($method) {
            case 'crm.deal.add':
                $queryData = $this->CrmDealAdd($item);
                break;
            case 'crm.deal.update':
                $queryData = $this->CrmDealUpdate($item, $b24Id);
                break;
            case 'crm.product.list':
                $queryData = $this->CrmDealList($item);
                break;
            case 'crm.deal.productrows.set':
                $queryData = $this->CrmDealProductrowsSet($item, $b24Id, $productId);
                break;
        }
        //var_dump($this->CrmDealAdd($item));
        return $queryData;
    }

    /**
     * @param object $item
     * @return string
     */
    private function CrmDealList($item) : string
    {
        return http_build_query(array(
            "filter" => [
                "NAME" => $item->name
            ],
            "select" => [
                "ID"
            ]
        ));
    }

    /**
     * @param object $item
     * @param int $b24Id
     * @param int $productId
     * @return string
     */
    private function CrmDealProductrowsSet($item, $b24Id, $productId) : string {
        return http_build_query(array(
                'id' => $b24Id,
                'rows' => [
                    array(
                        "CATEGORY_ID" => 1039,
                        "PRODUCT_ID" => $productId,
                        "PRICE" => $item->price,
                        "QUANTITY" => $item->quantity
                    )
                ]
            )
        );
    }

    /**
     * @param object $item
     * @param int $b24Id
     * @return string
     */
    private function CrmDealUpdate ($item, $b24Id) :string {
        return http_build_query(array(
            'id' => $b24Id,
            'fields' => [
                'STAGE_ID' => $this->arOzonStatuses[$item->status],
                'CATEGORY_ID' => 1,
                'UF_CRM_OZON_BARCODE' => [
                    'fileData' => [
                        'OzonLabel.pdf',
                        base64_encode($this->getPackageLabel($item->posting_number))
                    ]
                ],
            ]
        ));
    }

    /**
     * @param object $item
     * @return string
     */
    private function CrmDealAdd($item) :string {
        $query = '';
        switch ($item->status){
            case 'awaiting_deliver':
                $query =  http_build_query(array(
                    'fields' => [
                        'ID' => $item->order_id,
                        'TITLE' => 'OZON '.$item->posting_number,
                        'STAGE_ID' => $this->arOzonStatuses[$item->status],
                        'CATEGORY_ID' => 1,
                        'UF_CRM_OZON_IS' => true,
                        'UF_CRM_OZON_POSTING_NUMBER' => $item->posting_number,
                        'UF_CRM_OZON_STATUS' => $item->status,
                        'UF_CRM_OZON_SHIPMENT_DATE' => str_replace('Z', '', $item->shipment_date),
                        'UF_CRM_OZON_BARCODE' => [
                            'fileData' => [
                                'OZON'.$item->posting_number.'.pdf',
                                base64_encode($this->getPackageLabel($item->posting_number))
                            ]
                        ],
                    ]
                ));
                break;
            default:
                $query =  http_build_query(array(
                    'fields' => [
                        'ID' => $item->order_id,
                        'TITLE' => 'OZON '.$item->posting_number,
                        'STAGE_ID' => $this->arOzonStatuses[$item->status],
                        'CATEGORY_ID' => 1,
                        'UF_CRM_OZON_IS' => true,
                        'UF_CRM_OZON_POSTING_NUMBER' => $item->posting_number,
                        'UF_CRM_OZON_STATUS' => $item->status,
                        'UF_CRM_OZON_SHIPMENT_DATE' => str_replace('Z', '', $item->shipment_date)
                    ]
                ));
        }
        return $query;
    }

    /**
     * @param string $status
     * @param int $limit
     * @return string
     */
    public function prepareQueryForOzon($status, $limit): string
    {
        return json_encode(array(
            "dir" => "asc",
            "filter" => array(
                "status" => $status,
            ),
            "limit" => $limit,
            "offset" => 0
        ));
    }



    /**
     * @param int $postingNumber
     * @return bool|string
     */
    protected function getPackageLabel($postingNumber): string
    {
        $query = json_encode(array(
            'posting_number' => array(
                $postingNumber
            )
        ));
        $result = $this->sendRequestToOzon($query, 'v2/posting/fbs/package-label');
        return $result;
    }

    /**
     * @param object $ozonItem
     * @return bool|string
     */
    protected function prepareQueryForB24Products($ozonItem): string
    {
        $res = http_build_query(array('fields' => [
            'NAME' => $ozonItem->name,
            'CURRENCY_ID' => 'RUB',
            'PRICE' => $ozonItem->price,
            'PROPERTY_249' => $ozonItem->offer_id
        ]
        ));
        return $res;
    }

    /**
     * @param int $orderId
     * @return string
     */
    protected function getB24Id($orderId): string
    {
        $b24Deal = http_build_query(array(
            'filter' => [
                'UF_CRM_OZON_POSTING_NUMBER' => $orderId
            ],
            'select' => [
                'ID'
            ]
        ));

        $dealId = \bitrix24::callMethod($this->domain,'crm.deal.list', $b24Deal, $this->accessToken);
        //var_dump($dealId);
        return $dealId['result'][0]['ID'];
    }

    /**
     * @param int $orderId
     * @return string
     */
    public function findByIdQuery($orderId): string
    {
        return http_build_query(array(
            'filter' => [
                'ID' => $orderId
            ],
            'select' => [
                'ID',
                'STAGE_ID',
                'TITLE'
            ]
        ));
    }

    private function checkLicense () : void {

        $appLicenseResponse = \bitrix24::callMethod($this->domain, 'app.info', '', $this->accessToken);
        if(DEBUG)var_dump($appLicenseResponse);
        switch ($appLicenseResponse['PAYMENT_EXPIRED']){
            case 'Y':
                die('License expired');
        }
    }
}