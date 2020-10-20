<?php
namespace Ozon;
use Ozon\OzonIntegration;

class FromB24ToOzonUpdate extends OzonIntegration
{
    /**
     * @param string $query
     * @return void
     */
    public function sendWaititngOrdersToOzon($query): void
    {
        $b24Order = \bitrix24::callMethod($this->domain, 'crm.deal.list', $query, $this->accessToken)['result'];
        $stage = $b24Order[0]['STAGE_ID'];
        $ozonStatus = array_search($stage, $this->arOzonStatuses);
        switch ($ozonStatus) {
            case 'awaiting_deliver':
                $this->sendAwaitingDeliveryOrders($b24Order);
                break;
            case 'cancelled':
                $this->cancelOrder($b24Order);
                break;
        }
    }

    /**
     * @param array $b24Order
     * @return bool|string
     */
    protected function sendAwaitingDeliveryOrders($b24Order): string
    {
//        $arProducts = \bitrix24::callMethod('crm.deal.productrows.get', http_build_query(array(
//            'id' => $b24Order[0]['ID'])))['result'];
        $params = json_encode([
            'posting_number' => $b24Order[0]['TITLE']
        ]);
        $ozonProducts = json_decode($this->sendRequestToOzon($params, 'v2/posting/fbs/get'))->result->products;
        foreach ($ozonProducts as $value) {
            $productQuery = $this->prepareProductsQuery($value, $b24Order[0]['TITLE']);
            return $this->sendRequestToOzon($productQuery, 'v2/posting/fbs/ship');
        }
    }

    /**
     * @param array $b24Order
     * @return string
     */
    protected function cancelOrder($b24Order): string
    {
        $params = json_encode(array(
            'cancel_reason_id' => 402,
            'cancel_reason_message' => 'Отменен из CRM',
            'posting_number' => $b24Order[0]['TITLE']
        ));
        $response = $this->sendRequestToOzon($params, 'v2/posting/fbs/cancel');
        return $response;
    }

    private function prepareProductsQuery($value, $postingNumber): string {
        return json_encode([
            'packages' => array(
                [
                    'items' => [
                        [
                            'quantity' => $value->quantity,
                            'sku' => $value->sku
                        ]
                    ],
                ],
            ),
            'posting_number' => $postingNumber
        ]);
    }
}