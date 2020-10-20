<?php
$_SERVER['DOCUMENT_ROOT'] = '/home/bitrix/www/';

require_once 'ozonExecutive.php';
use Ozon\ozonExecutive;
print_r($_REQUEST);
writeToLog($_REQUEST, 'incoming');
/**
 * Write data to log file.
 *
 * @param mixed $data
 * @param string $title
 *
 * @return bool
 */
function writeToLog($data, $title = '') {
    if(\DEBUG){
        $log = "\n------------------------\n";
        $log .= date("Y.m.d G:i:s") . "\n";
        $log .= (strlen($title) > 0 ? $title : 'DEBUG') . "\n";
        $log .= print_r($data, 1);
        $log .= "\n------------------------\n";
        file_put_contents('/var/www/html/logs//hook.log', $log, FILE_APPEND);
    }
    ozonExecutive::dealUpdate($data['auth']['domain'], $data);
//    $ozonLib = new OzonIntegration();
//    $orderId = $data['data']['FIELDS']['ID'];
//    $query = http_build_query(array(
//        'filter' => [
//            'ID' => $orderId
//        ],
//        'select' => [
//            'ID',
//            'STAGE_ID',
//            'TITLE',
//            'UF_CRM_1591263396670',
//        ]
//    ));
//    if(DEBUG)file_put_contents(getcwd() . '/hook.log', $orderId, FILE_APPEND);
//    $response = $ozonLib->sendWaititngOrdersToOzon($query);
//
//    $response = json_decode($response);
//
//    if(json_last_error() !== JSON_ERROR_NONE){
//        file_put_contents('ozoncheck.txt', 'false');
//    }
//    else{
//        file_put_contents('ozoncheck.txt', 'true');
//    }
    return true;
}