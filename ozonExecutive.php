<?php


namespace Ozon;
require_once("tools.php");
require 'OzonToB24Send.php';
require 'FromB24ToOzonUpdate.php';
use Ozon\OzonToB24Send;
use Ozon\FromB24ToOzonUpdate;

class ozonExecutive
{
    /**
     * @param string $domain
     * @return void
     */
    static public function getNewOrders(string $domain): void {
        global $db;
        $ozonM = new OzonToB24Send($domain, $db);
        $settings = $ozonM->accessToSettings();
        ozonExecutive::isModuleActive($settings, $domain);
        if(ozonExecutive::checkTime(1, $domain, $settings['EXECUTION_FREQUENCY_NEW_TRADES'])){
            ozonExecutive::setStart(1, $domain);
            $params = $ozonM->prepareQueryForOzon('awaiting_packaging', 50);
            $ozonM->sendOrdersToB24($params);
            $params = $ozonM->prepareQueryForOzon('awaiting_deliver', 50);
            $ozonM->sendOrdersToB24($params);
            ozonExecutive::setFinish(1, $domain);
        }
        else{
            die('Interval is not reached');
        }
    }

    /**
     * @param string $domain
     * @return void
     */
    static public function dealUpdate(string $domain, $data): void {
        global $db;
        $ozonM = new FromB24ToOzonUpdate($domain, $db);
        $orderId = $data['data']['FIELDS']['ID'];
        $query = $ozonM->findByIdQuery($orderId);
        $ozonM->sendWaititngOrdersToOzon($query);
    }

    /**
     * @param string $domain
     * @return void
     */
    static public function sendProcessedOrdersToB24(string $domain){
        global $db;
        $ozonM = new OzonToB24Send($domain, $db);
        $settings = $ozonM->accessToSettings();
        ozonExecutive::isModuleActive($settings, $domain);
        if(ozonExecutive::checkTime(2, $domain, $settings['ozon_delivering'])) {
            ozonExecutive::setStart(2, $domain);
            $params = $ozonM->prepareQueryForOzon('awaiting_deliver', 50);
            $ozonM->sendOrdersToB24($params);
            $params = $ozonM->prepareQueryForOzon('arbitration', 50);
            $ozonM->sendOrdersToB24($params);
            $params = $ozonM->prepareQueryForOzon('not_accepted ', 50);
            $ozonM->sendOrdersToB24($params);
            $params = $ozonM->prepareQueryForOzon('delivering', 50);
            $ozonM->sendOrdersToB24($params);
            ozonExecutive::setFinish(2, $domain);
        }
        else{
            die('Interval is not reached');
        }
    }

    static public function sendDeliveredOrdersToB24(string $domain){
        global $db;
        $ozonM = new OzonToB24Send($domain, $db);
        $settings = $ozonM->accessToSettings();
        ozonExecutive::isModuleActive($settings, $domain);
        if(ozonExecutive::checkTime(3, $domain, $settings['EXECUTION_FREQUENCY_DELIVERIED'])){
            ozonExecutive::setStart(3, $domain);
            $params = $ozonM->prepareQueryForOzon('cancelled', 50);
            $ozonM->sendOrdersToB24($params);
            $params = $ozonM->prepareQueryForOzon('delivered', 50);
            $ozonM->sendOrdersToB24($params);
            $params = $ozonM->prepareQueryForOzon('driver_pickup', 50);
            $ozonM->sendOrdersToB24($params);
            ozonExecutive::setFinish(3, $domain);
        }
    }

    /**
     * @param int $actionId
     * @return bool
     */
    static private function checkTime(int $actionId, string $domain, string $time) : bool {
        global $db;
        $lastExecution = $db->select('SELECT * FROM b24_action_table WHERE PORTAL="'.$domain.'" AND ACTION_ID="'.$actionId.'"')[0]['LAST_EXECUTION'];
        $lastExecution = strtotime($lastExecution);
        $newDate = ozonExecutive::getNewExecutionTime($time, $lastExecution);
        $currentDate = date('Y-m-d H:i:s');
        if (strtotime($currentDate) > strtotime($newDate)){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Проверяет активность модуля и прекращает выполнение процесса, если модуль неактивен
     * @param array $settings
     * @param string $domain
     */
    static private function isModuleActive(array $settings, string $domain) : void {
        if($settings['MODULE_IS_ACTIVE'] === 'false'){
            die($domain.' - module is disabled');
        }
    }

    /**
     * Преобразует дату последнего выполнения, прибавляя тайминги из настроек модуля
     * @param string $time
     * @param $lastExecution
     * @return string
     */
    static private function getNewExecutionTime(string $time, $lastExecution) : string {
        $multiplier = 60;
        $k = preg_replace('/[^0-9]/', '', $time);
        $hourOrMinute = str_replace('-', '', stristr($time, '-'));
        switch ($hourOrMinute){
            case 'hour':
                $multiplier = 60;
                break;
            case 'min':
                $multiplier = 1;
                break;
        }
        $newDate = $lastExecution + (60 * $k * $multiplier);
        $newDate = date('Y-m-d H:i:s', $newDate);
        return  $newDate;
    }

    static private function setStart(int $actionId, string $domain): void {
        global $db;
        $res = $db->update('UPDATE b24_action_table SET LAST_EXECUTION="'.date('Y-m-d H:i:s').'" WHERE PORTAL="'.$domain.'" AND ACTION_ID='.$actionId);
    }

    static private function setFinish(int $actionId, string $domain): void {
        global $db;
        $res = $db->update('UPDATE b24_action_table SET IS_RUNNING=0, FINISH="'.date('Y-m-d H:i:s').'" WHERE PORTAL="'.$domain.'" AND ACTION_ID='.$actionId);
    }
}