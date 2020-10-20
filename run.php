<?php
require_once 'ozonExecutive.php';
use Ozon\ozonExecutive;
$domain = $argv[1];
file_put_contents('/var/www/html/logs/cronTest.log', 'start', FILE_APPEND);
ozonExecutive::getNewOrders($domain);
ozonExecutive::sendDeliveredOrdersToB24($domain);
ozonExecutive::sendProcessedOrdersToB24($domain);
