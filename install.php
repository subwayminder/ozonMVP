<?header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');?>
<!doctype html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Установка "Рейтинг" (пример 18)</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="//oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

	<!-- Include roboto.css to use the Roboto web font, material.css to include the theme and ripples.css to style the ripple effect -->
	<link href="css/roboto.min.css" rel="stylesheet">
	<link href="css/material.min.css" rel="stylesheet">
	<link href="css/ripples.min.css" rel="stylesheet">

    <link href="css/application.css" rel="stylesheet">

</head>
<body>
<div id="app" class="container-fluid">
	<div class="alert alert-dismissable alert-warning hidden" id="error"></div>
<!--	<div>-->
<!--		<a  href="javascript:void(0);" onclick="app.addRatingUsers();"  class="btn btn-primary btn-raised"><i class="fa fa-user"></i> добавить<div class="ripple-wrapper"></div></a>-->
<!--	</div>-->
<!--	<div class="row">-->
<!--		<div class="col-md-8 col-sm-12">-->
<!--			<ul id="users" class="list-unstyled hidden">-->
<!--			</ul>-->
<!--		</div>-->
<!--	</div>-->
    <div>
        <label for="funnel"></label>
        <!--<input name="funnel" type="checkbox">-->
    </div>
	<div class="row-c">
		<!--<a href="javascript:void(0);" id="save-btn" onclick="install()" class="btn btn-success btn-raised"><i class="fa fa-check"></i> сохрани и спаси<div class="ripple-wrapper"></div>
        </a>-->
        <div class="success"></div>
        <div class="preloader"></div>
	</div>




</div>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/tempusjs.min.js"></script>
<script src="js/ripples.min.js"></script>
<script src="js/material.min.js"></script>
<script type="text/javascript" src="js/application.js"></script>
<script src="//api.bitrix24.com/api/v1/"></script>


<script>
    $(document).ready(function () {
        $.material.init();

        BX24.init(function(){

            app.saveFrameWidth();
            install();
            // app.displayCurrentUser('#user-name');
            // app.displayUserClosedDeals(1);

        });

    });
    function install() {

        function createPropsDeals() {
            dealsProperties = [
                {fields:
                        {
                            "FIELD_NAME": "OZON_BARCODE",
                            "EDIT_FORM_LABEL": "Маркировка из OZON",
                            "LIST_COLUMN_LABEL": "Маркировка из OZON",
                            "USER_TYPE_ID": "file",
                            "XML_ID": "OZON_BARCODE",
                            "SETTINGS": { }
                        }
                },
                {fields:
                        {
                            "FIELD_NAME": "OZON_POSTING_NUMBER",
                            "EDIT_FORM_LABEL": "Номер отправления",
                            "LIST_COLUMN_LABEL": "Номер отправления",
                            "USER_TYPE_ID": "string",
                            "XML_ID": "OZON_POSTING_NUMBER",
                            "SETTINGS": { }
                        }
                },
                {fields:
                        {
                            "FIELD_NAME": "OZON_STATUS",
                            "EDIT_FORM_LABEL": "Текущий статус в Ozon",
                            "LIST_COLUMN_LABEL": "Текущий статус в Ozon",
                            "USER_TYPE_ID": "string",
                            "XML_ID": "OZON_STATUS",
                            "SETTINGS": { }
                        }
                },
                {fields:
                        {
                            "FIELD_NAME": "OZON_SHIPMENT_DATE",
                            "EDIT_FORM_LABEL": "Время отправки заказа",
                            "LIST_COLUMN_LABEL":  "Время отправки заказа",
                            "USER_TYPE_ID": "datetime",
                            "XML_ID": "OZON_SHIPMENT_DATE",
                            "SETTINGS": { }
                        }
                },
                {fields:
                        {
                            "FIELD_NAME": "OZON_IS",
                            "EDIT_FORM_LABEL": "Заказ из OZON",
                            "LIST_COLUMN_LABEL":  "Заказ из OZON",
                            "USER_TYPE_ID": "boolean",
                            "XML_ID": "OZON_IS",
                            "SETTINGS": { }
                        }
                }
            ];
            dealsProperties.forEach(elem=>{
                window.BX24.callMethod(
                'crm.deal.userfield.add',
                elem
                    , function(result){
                        if(result.error())
                        {
                            console.log('Ошибка запроса: ' + result.error());
                        }
                        else
                        {
                            console.log(result.data());
                        }
                    }
            );
            });
        }
        createPropsDeals();


        $('.preloader').addClass('visible')
        function createProps (areaProperties) {
            areaProperties.forEach(elem=>{
                window.BX24.callMethod(
                    'entity.item.property.add',
                    elem
                    , function(result){
                        if(result.error())
                        {
                            console.log('Ошибка запроса: ' + result.error());
                        }
                        else
                        {
                            console.log('entity.item.property.add success ');

                            console.log(result.data());
                        }
                    }
                );
            })
        }
        function createEntity () {
            const entityName = 'ozonEntity',
                areaProperties = [
                    {ENTITY: entityName, PROPERTY: 'MODULE_IS_ACTIVE', NAME: 'Активность модуля', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'OZON_AWAITING_CONFIRMATION', NAME: 'Ожидает подтверждение', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'OZON_AWAITING_SHIPMENT', NAME: 'Ожидается отгрузка', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'OZON_DELIVERED', NAME: 'Доставлен', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'OZON_DELIVERING_STATUS', NAME: 'Доставляется', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'OZON_CANCELED', NAME: 'Отменен', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'CONTROVERSIAL', NAME: 'Спорный', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'PENDING_DECISION', NAME: 'Ожидает решения спора', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'OZON_API_KEY', NAME: 'OZON API KEY', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'AT_THE_DRIVER', NAME: 'У водителя', TYPE: 'S'},
                    {
                        ENTITY: entityName,
                        PROPERTY: 'EXECUTION_FREQUENCY_NEW_TRADES',
                        NAME: 'Частота выполнения новые сделки',
                        TYPE: 'S'
                    },
                    {
                        ENTITY: entityName,
                        PROPERTY: 'EXECUTION_FREQUENCY_STATUSES',
                        NAME: 'Частота выполнения статусы',
                        TYPE: 'S'
                    },
                    {
                        ENTITY: entityName,
                        PROPERTY: 'EXECUTION_FREQUENCY_DELIVERIED',
                        NAME: 'Частота выполнения доставлены',
                        TYPE: 'S'
                    },
                    {
                        ENTITY: entityName,
                        PROPERTY: 'ozon_delivering',
                        NAME: 'Частота выполнения доставляется',
                        TYPE: 'S'
                    },
                    {ENTITY: entityName, PROPERTY: 'RESPONSIBLE', NAME: 'Ответственный', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'PRODUCT_FIELD_CODE', NAME: 'Свойство товара Артикул-ozon', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'CREATE_PRODUCT', NAME: 'Создавать товар при отсутствии', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'NOTIFY_OZON_DROP', NAME: 'Уведомлять при падении ozon', TYPE: 'S'},
                    {ENTITY: entityName, PROPERTY: 'CLIENT_ID', NAME: 'Клиент ID', TYPE: 'S'},
                    {
                        ENTITY: entityName,
                        PROPERTY: 'CHANGE_STATUS',
                        NAME: 'Не изменять статус в Б24 пока не изменится в ozon',
                        TYPE: 'S'
                    },
                ]

            window.BX24.callMethod(
                'entity.add',
                {
                    'ENTITY': entityName,
                    'NAME': entityName,
                    'ACCESS': {
                        U1: 'X',
                        AU: 'X'
                    },
                }, function () {
                    setTimeout(createProps(areaProperties), 1000)
                }
            )
        }
        /*function getEntity() {
            const entityName = 'ozonEntity'

            window.BX24.callMethod(
                'entity.item.get',
                {
                    ENTITY: entityName,
                    SORT: {DATE_ACTIVE_FROM: 'ASC', ID: 'ASC'},
                    FILTER: {}
                },
                function (result) {
                    const item = result.data();

                    if (item)
                        console.log(item)
                    else {
                        console.log(item)
                        createEntity()
                    }
                }
            );
        }*/
        createEntity();


        var funnelOption = $("input[type='checkbox']").val();
        var authParams = BX24.getAuth();
        console.log(authParams);
        var params = array_merge({operation: 'install'}, authParams);

        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: params,
            function (data)
            {
                var answer = JSON.parse(data);
                if (answer.status == 'error') {
                    curapp.displayErrorMessage('Error',
                        ['#error']);
                }
                else {

                    //BX24.callBind('ONAPPUNINSTALL', 'http://www.b24go.com/rating/application.php?operation=uninstall');
                    //BX24.installFinish();
                }
            }
        });
        console.log(BX24.callBind('ONCRMDEALUPDATE', 'https://ozon.usdev.ru/update.php'));
        $('.success').html('Установка завершена, через пару секунд вы попадете на страницу настроек модуля');
        setTimeout(function(){ window.BX24.installFinish()},10000)


        //console.log(BX24.callBind('ONCRMDEALADD', 'https://ozon.usdev.ru/logfile.php'));

    }

    // params = array_merge({sales_funnel:},{operation: 'create'}, authParams);
    // $.ajax({
    //     type: "POST",
    //     url: "ajax.php",
    //     data: params,
    // });
    //BX24.callBind('ONAPPUNINSTALL', 'http://www.b24go.com/rating/application.php?operation=uninstall');
    //BX24.installFinish();


</script>

</body>
</html>