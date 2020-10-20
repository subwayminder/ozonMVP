<?php
require_once 'ozonExecutive.php';
use Ozon\ozonExecutive;
ozonExecutive::getNewOrders('b24-wjitl5.bitrix24.ru');
//ozonExecutive::sendDeliveredOrdersToB24('b24-ijv00v.bitrix24.ru');
//ozonExecutive::sendProcessedOrdersToB24('b24-ijv00v.bitrix24.ru');

//require_once("tools.php");
//global $db;
//$lastExecution = $db->select('SELECT LAST_EXECUTION FROM b24_action_table WHERE PORTAL="b24-ijv00v.bitrix24.ru" AND ACTION_ID=1')[0]['LAST_EXECUTION'];
//$lastExecution = strtotime($lastExecution);
//$time = "6-min";
//$multiplier = 60;
//$k = preg_replace('/[^0-9]/', '', $time);
//var_dump($k);
//$hourOrMinute = str_replace('-', '', stristr($time, '-'));
//switch ($hourOrMinute){
//    case 'hour':
//        $multiplier = 60;
//        break;
//    case 'min':
//        $multiplier = 1;
//        break;
//}
//$newDate = $lastExecution+(60 * $k * $multiplier);
//$newDate = date('Y-m-d H:i:s', $newDate);
//var_dump($newDate);
//$currentDate = date('Y-m-d H:i:s');
//if (strtotime($currentDate) > strtotime($newDate)){
//    var_dump('pognali ebat');
//}
//else{
//    var_dump('poshel nahui');
//}

//$cronString = '
//*/5 * * * * root php /var/www/html/run.php >/dev/null 2>&1 b24-ijv00v.bitrix24.ru
//';
//var_dump($cronString);
//file_put_contents('/etc/crontab', $cronString, FILE_APPEND);

//namespace Ozon;
//require_once("tools.php");
//require 'OzonToB24Send.php';
//require 'FromB24ToOzonUpdate.php';
//use Ozon\OzonToB24Send;
//use Ozon\FromB24ToOzonUpdate;
//
//global $db;
//$ozonM = new OzonToB24Send('b24-ijv00v.bitrix24.ru', $db);
