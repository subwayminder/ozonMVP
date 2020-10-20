<?php
require_once("tools.php");
require 'OzonToB24Send.php';
use Ozon\OzonToB24Send;

global $db;
$accessToken = $db->select('SELECT * FROM b24_portal_reg WHERE PORTAL="'.$_REQUEST['DOMAIN'].'"')[0]['ACCESS_TOKEN'];
//var_dump($accessToken);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="/css/chunk-vendors.2854e548.css">
    <link rel="stylesheet" href="/css/app.a3536717.css">
    <title>Настройки модуля Ozon</title>
</head>
<!--<body>-->
<div id="app"></div>
<!-- built files will be auto injected -->


<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/tempusjs.min.js"></script>
<script type="text/javascript" src="js/accounting.min.js"></script>
<script src=/js/chunk-vendors.3c012134.js></script>
<!--<script src=/js/app.3091c4d8.js></script>-->
<script src="/js/app.3e0a8c00.js"></script>
<script src="js/ripples.min.js"></script>
<script src="js/material.min.js"></script>
<script type="text/javascript" src="js/application.js"></script>
<script src="//api.bitrix24.com/api/v1/"></script>
</body>
</html>
