<?php


namespace Ozon;

require 'OzonIntegration.php';
use Ozon\OzonIntegration;

class OzonToB24Send extends OzonIntegration
{

    /**
     * @param string $params
     * @return void
     */
    public function sendOrdersToB24($params): void
    {
        $response = json_decode($this->sendRequestToOzon($params, 'v2/posting/fbs/list'))->result;
        foreach ($response as $item) {
            $isExists = $this->isNewOrderExists($item->posting_number);
            if (!$isExists && $this->settings['CREATE_PRODUCT'] === 'true') {
                $query = $this->prepareQueryForB24($item, 'crm.deal.add');
                $return = \bitrix24::callMethod($this->domain,'crm.deal.add', $query, $this->accessToken)['result'];

                foreach ($item->products as $product) {
                    $arGetProduct = $this->prepareQueryForB24($item, 'crm.product.list');

                    $productId = \bitrix24::callMethod($this->domain,'crm.product.list', $arGetProduct, $this->accessToken)['result'][0]['ID'];
                    if ($productId) {
                        $this->setProduct($product, $return, $productId);
                    }
                    if(!$productId) {
                        $this->createAndSetProduct($product, $return, $productId);
                    }
                }
            }
            if ($isExists) {
                $updateData = $this->prepareQueryForB24($item, 'crm.deal.update', $this->getB24Id($item->posting_number));
                \bitrix24::callMethod($this->domain,'crm.deal.update', $updateData, $this->accessToken);
            }
            sleep(2);
        }
    }
    public function test($params){
        $response = json_decode($this->sendRequestToOzon($params, 'v2/posting/fbs/list'))->result;
        var_dump($response);
    }

    /**
     * @param object $product
     * @param int $b24Id
     * @param int $productId
     */
    private function setProduct($product, $b24Id, $productId) : void {
        $productAr = $this->prepareQueryForB24($product, 'crm.deal.productrows.set', $b24Id, $productId);
        \bitrix24::callMethod($this->domain,'crm.deal.productrows.set', $productAr, $this->accessToken);
    }

    /**
     * @param object $product
     * @param int $b24Id
     * @param int $productId
     */
    private function createAndSetProduct($product, $b24Id, $productId) : void {
        $arOzonProduct = json_encode(array(
            "offer_id" => $product->offer_id,
            "sku" => $product->sku
        ));
        $b24ProductQuery = $this->prepareQueryForB24Products(json_decode($this->sendRequestToOzon($arOzonProduct, 'v1/product/info'))->result);
        \bitrix24::callMethod($this->domain,'crm.product.add', $b24ProductQuery, $this->accessToken);
        $this->setProduct($product, $b24Id, $productId);
    }

    /**
     * @return array
     */
    public function accessToSettings() : array {
        return $this->settings;
    }
}