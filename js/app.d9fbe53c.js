(function(e){function t(t){for(var i,o,l=t[0],r=t[1],E=t[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);c&&c(t);while(u.length)u.shift()();return a.push.apply(a,E||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var E=0;E<l.length;E++)t(l[E]);var c=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",[n("v-alert",{attrs:{border:"bottom","colored-border":"",type:"warning",elevation:"2"}},[e._v(" На данный момент модуль находится в альфа-версии, по поводу замечаний и предложений по доработкам обращайтесь на почту "),n("a",{attrs:{href:"mailto:mp@usstudio.ru"}},[e._v("mp@usstudio.ru")])]),n("h1",[e._v("Настройки модуля интеграции Битрикс24 с Ozon")]),n("OzoneSettings")],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Активность модуля"},model:{value:e.fields.MODULE_IS_ACTIVE,callback:function(t){e.$set(e.fields,"MODULE_IS_ACTIVE",t)},expression:"fields.MODULE_IS_ACTIVE"}})],1),n("div",{staticClass:"main-wrap"},[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-5"},[e._v("Соответствие статусов в ozon и в сделках Битрикс24")]),n("v-simple-table",[[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[n("v-toolbar-title",[e._v(" OZON ")])],1),n("th",{staticClass:"text-left"},[n("v-toolbar-title",[e._v(" Битрикс24 ")])],1)])]),n("tbody",[n("tr",[n("td",[e._v("Ожидает упаковки →")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},model:{value:e.fields.OZON_AWAITING_CONFIRMATION,callback:function(t){e.$set(e.fields,"OZON_AWAITING_CONFIRMATION",t)},expression:"fields.OZON_AWAITING_CONFIRMATION"}})],1)]),n("tr",[n("td",[e._v("Ожидает отгрузки←")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_AWAITING_SHIPMENT,callback:function(t){e.$set(e.fields,"OZON_AWAITING_SHIPMENT",t)},expression:"fields.OZON_AWAITING_SHIPMENT"}})],1)]),n("tr",[n("td",[e._v("Отменено←")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_CANCELED,callback:function(t){e.$set(e.fields,"OZON_CANCELED",t)},expression:"fields.OZON_CANCELED"}})],1)]),n("tr",[n("td",[e._v("Доставляется→")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_DELIVERING_STATUS,callback:function(t){e.$set(e.fields,"OZON_DELIVERING_STATUS",t)},expression:"fields.OZON_DELIVERING_STATUS"}})],1)]),n("tr",[n("td",[e._v("У водителя→")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.AT_THE_DRIVER,callback:function(t){e.$set(e.fields,"AT_THE_DRIVER",t)},expression:"fields.AT_THE_DRIVER"}})],1)]),n("tr",[n("td",[e._v("Доставлено→")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_DELIVERED,callback:function(t){e.$set(e.fields,"OZON_DELIVERED",t)},expression:"fields.OZON_DELIVERED"}})],1)]),n("tr",[n("td",[e._v("Ожидает решения спора→")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.CONTROVERSIAL,callback:function(t){e.$set(e.fields,"CONTROVERSIAL",t)},expression:"fields.CONTROVERSIAL"}})],1)]),n("tr",[n("td",[e._v("Не принят в сортировочном центре→")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.PENDING_DECISION,callback:function(t){e.$set(e.fields,"PENDING_DECISION",t)},expression:"fields.PENDING_DECISION"}})],1)])])]],2),n("a",{staticStyle:{"margin-top":"10px",display:"inline-block"},attrs:{target:"_blank",href:"https://usstudio.ru/ozon/schema.png"}},[e._v("Схема обмена заказа по статусам")])],1),n("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Не изменять статус в Б24 пока не изменится в ozon"},model:{value:e.fields.CHANGE_STATUS,callback:function(t){e.$set(e.fields,"CHANGE_STATUS",t)},expression:"fields.CHANGE_STATUS"}})],1)],1),n("div",{staticClass:"main-wrap"},[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{staticClass:"has-cursor",attrs:{label:"API key Ozon"},model:{value:e.fields.OZON_API_KEY,callback:function(t){e.$set(e.fields,"OZON_API_KEY",t)},expression:"fields.OZON_API_KEY"}})],1),n("v-col",{staticClass:"vert-center",attrs:{cols:"3"}},[n("a",{attrs:{href:"https://usstudio.ru/ozon/apiKey/",target:"_blank"}},[n("span",[e._v("Статья, где взять ApiKey")])])]),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{staticClass:"has-cursor",attrs:{label:"ClientId"},on:{keyup:e.enterOnlyNumber},model:{value:e.fields.CLIENT_ID,callback:function(t){e.$set(e.fields,"CLIENT_ID",t)},expression:"fields.CLIENT_ID"}})],1),n("v-col",{staticClass:"vert-center",attrs:{cols:"3"}},[n("a",{attrs:{href:"https://usstudio.ru/ozon/clientID/",target:"_blank"}},[n("span",[e._v("Статья, где взять ClientID")])])])],1)],1),n("v-row",[n("div",{staticClass:"main-wrap"},[n("v-col",{attrs:{cols:"12"}},[n("h2",[e._v("Частота выполнения скриптов")])]),n("v-col",{staticClass:"d-flex align-center justify-space-between",attrs:{cols:"5"}},[n("span",[e._v('Статусы "Ожидает упаковки", "Ожидает отгрузки"')]),n("span",[e._v("каждые")])]),n("v-col",{staticClass:"has-cursor",attrs:{cols:"1"}},[n("v-text-field",{attrs:{"hide-details":"","single-line":""},on:{blur:function(t){return e.checkTime("EXECUTION_FREQUENCY_NEW_TRADES")}},model:{value:e.fields.EXECUTION_FREQUENCY_NEW_TRADES,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_NEW_TRADES",t)},expression:"fields.EXECUTION_FREQUENCY_NEW_TRADES"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-select",{attrs:{items:e.time,"item-text":"name","item-value":"id"},on:{change:function(t){return e.checkTime("EXECUTION_FREQUENCY_NEW_TRADES")}},model:{value:e.fields.EXECUTION_FREQUENCY_NEW_TRADES_TIME,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_NEW_TRADES_TIME",t)},expression:"fields.EXECUTION_FREQUENCY_NEW_TRADES_TIME"}})],1),n("v-col",{staticClass:"d-flex align-center justify-space-between",attrs:{cols:"5"}},[n("span",[e._v('Статусы "У водителя", "Доставлено", "Не принят в сортировочном центре", "Отменено"')]),n("span",[e._v("каждые")])]),n("v-col",{staticClass:"has-cursor",attrs:{cols:"1"}},[n("v-text-field",{attrs:{"hide-details":"","single-line":""},on:{change:function(t){return e.checkTime("EXECUTION_FREQUENCY_DELIVERIED")}},model:{value:e.fields.EXECUTION_FREQUENCY_DELIVERIED,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_DELIVERIED",t)},expression:"fields.EXECUTION_FREQUENCY_DELIVERIED"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-select",{attrs:{items:e.time,"item-text":"name","item-value":"id"},model:{value:e.fields.EXECUTION_FREQUENCY_DELIVERIED_TIME,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_DELIVERIED_TIME",t)},expression:"fields.EXECUTION_FREQUENCY_DELIVERIED_TIME"}})],1),n("v-col",{staticClass:"d-flex align-center justify-space-between",attrs:{cols:"5"}},[n("span",[e._v('Статусы "Ожидает решения спора", "Доставляется"')]),n("span",[e._v("каждые")])]),n("v-col",{staticClass:"has-cursor",attrs:{cols:"1"}},[n("v-text-field",{attrs:{"hide-details":"","single-line":""},on:{change:function(t){return e.checkTime("ozon_delivering")}},model:{value:e.fields.ozon_delivering,callback:function(t){e.$set(e.fields,"ozon_delivering",t)},expression:"fields.ozon_delivering"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-select",{attrs:{items:e.time,"item-text":"name","item-value":"id"},model:{value:e.fields.ozon_delivering_TIME,callback:function(t){e.$set(e.fields,"ozon_delivering_TIME",t)},expression:"fields.ozon_delivering_TIME"}})],1),n("p",[e._v("*Минимальное время обмена 5 минут")])],1)]),n("v-row",[n("div",{staticClass:"main-wrap"},[n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("h3",[e._v("Ответственный за сделки")])]),n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:e.people,label:"Ответственный","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.RESPONSIBLE,callback:function(t){e.$set(e.fields,"RESPONSIBLE",t)},expression:"fields.RESPONSIBLE"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("h3",[e._v("Свойство товара в Б24, по которому будет сопоставление товаров из ozon с помощью артикула")])]),n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:e.productFields,label:"Свойство товара в Б24, по которому будет сопоставление товаров из ozon с помощью артикула","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.PRODUCT_FIELD_CODE,callback:function(t){e.$set(e.fields,"PRODUCT_FIELD_CODE",t)},expression:"fields.PRODUCT_FIELD_CODE"}})],1)],1)]),n("v-row",[n("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Создавать товар при отсутствии товара с нужным артикулом"},model:{value:e.fields.CREATE_PRODUCT,callback:function(t){e.$set(e.fields,"CREATE_PRODUCT",t)},expression:"fields.CREATE_PRODUCT"}})],1),n("v-col",{staticClass:"pt-0 pb-0 d-flex justify-center",attrs:{cols:"12"}},[n("div",{staticClass:"pa-5"},[n("v-btn",{attrs:{depressed:"",large:"",color:"primary",loading:this.isLoad,disabled:this.isLoad},on:{click:e.saveSettings}},[e._v(" Сохранить "),this.success?n("v-icon",[e._v("mdi-checkbox-marked-circle")]):e._e()],1)],1)])],1)],1)},l=[],r=(n("99af"),n("4160"),n("45fc"),n("d3b7"),n("ac1f"),n("466d"),n("5319"),n("159b"),n("b85c")),E=(n("96cf"),n("1da1")),c={beforeCreate:function(){var e=this,t=[];this.$loadScript("//api.bitrix24.com/api/v1/").then(Object(E["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.getCategory().then(function(){var n=Object(E["a"])(regeneratorRuntime.mark((function n(i){var s,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=Object(r["a"])(i),n.prev=1,s.s();case 3:if((a=s.n()).done){n.next=9;break}return o=a.value,n.next=7,e.getStatuses(o,t);case 7:n.next=3;break;case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),s.e(n.t0);case 14:return n.prev=14,s.f(),n.finish(14);case 17:e.category=t;case 18:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}()).then((function(){e.category.unshift({id:"empty",name:"Выберите стадию сделки"})})),e.getUserList(),e.getProductsFields(),e.getEntity(),i=window.BX24.getScrollSize(),window.BX24.resizeWindow(i.scrollWidth,i.scrollHeight);case 6:case"end":return n.stop()}}),n)}))))},data:function(){return{category:[],time:[{name:"час.",id:"hour"},{name:"мин.",id:"min"}],people:[],productFields:[],fields:{MODULE_IS_ACTIVE:!0,OZON_AWAITING_CONFIRMATION:"",OZON_AWAITING_SHIPMENT:"",OZON_DELIVERED:"",OZON_DELIVERING_STATUS:"",OZON_CANCELED:"",OZON_API_KEY:"",EXECUTION_FREQUENCY_NEW_TRADES:"5",EXECUTION_FREQUENCY_NEW_TRADES_TIME:"min",EXECUTION_FREQUENCY_STATUSES:"1",EXECUTION_FREQUENCY_STATUSES_TIME:"hour",EXECUTION_FREQUENCY_DELIVERIED:"24",EXECUTION_FREQUENCY_DELIVERIED_TIME:"hour",ozon_delivering:"24",ozon_delivering_TIME:"hour",RESPONSIBLE:"",PRODUCT_FIELD_CODE:"",CREATE_PRODUCT:"",NOTIFY_OZON_DROP:"",CHANGE_STATUS:"",CLIENT_ID:"",CONTROVERSIAL:"",PENDING_DECISION:"",AT_THE_DRIVER:""},isLoad:!1,success:!1}},name:"OzoneSettins",methods:{cl:function(){},getCategory:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.abrupt("return",new Promise((function(e,n){window.BX24.callMethod("crm.dealcategory.default.get",{},(function(e){e.error()?console.error(e.error()):t.push(e.data())})),window.BX24.callMethod("crm.dealcategory.list",{order:{SORT:"ASC"},select:[]},(function(i){i.error()?n(i.error()):(i.data().forEach((function(e){t.push(e)})),e(t))}))})));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getStatuses:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:new Promise((function(e,i){window.BX24.callMethod("crm.dealcategory.stage.list",{id:t.ID},(function(s){if(s.error())i(s.error());else{var a=n.some((function(e){return e.id==t.ID}));a||n.push({header:"Направление сделки: "+t.NAME,id:t.ID});var o=s.data();o.forEach((function(e){n.push({name:e.NAME,id:e.STATUS_ID})})),e(o)}}))}));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getUserList:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[],window.BX24.callMethod("user.get",{},(function(e){var n=e.data();n.forEach((function(e){t.push({name:"".concat(e.LAST_NAME," ").concat(e.NAME),id:e.ID})}))})),this.people=t;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getProductsFields:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[{name:"Внешний код",id:"XML_ID"},{name:"Символьный код",id:"CODE"}],window.BX24.callMethod("crm.product.property.list",{order:{SORT:"ASC"},filter:{}},(function(e){if(e.error())console.error(e.error());else{var n=e.data();n.forEach((function(e){t.push({name:e.NAME,id:"PROPERTY_"+e.ID})}))}})),this.productFields=t;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),saveSettings:function(){var e=this;this.isLoad=!this.isLoad;var t=Object.assign({},this.fields),n="ozonEntity";t.EXECUTION_FREQUENCY_STATUSES="".concat(this.fields.EXECUTION_FREQUENCY_STATUSES,"-").concat(this.fields.EXECUTION_FREQUENCY_STATUSES_TIME),t.EXECUTION_FREQUENCY_NEW_TRADES="".concat(this.fields.EXECUTION_FREQUENCY_NEW_TRADES,"-").concat(this.fields.EXECUTION_FREQUENCY_NEW_TRADES_TIME),t.EXECUTION_FREQUENCY_DELIVERIED="".concat(this.fields.EXECUTION_FREQUENCY_DELIVERIED,"-").concat(this.fields.EXECUTION_FREQUENCY_DELIVERIED_TIME),t.ozon_delivering="".concat(this.fields.ozon_delivering,"-").concat(this.fields.ozon_delivering_TIME);var i=new Promise((function(e){window.BX24.callMethod("entity.item.get",{ENTITY:n,SORT:{DATE_ACTIVE_FROM:"ASC",ID:"ASC"},FILTER:{}},(function(i){var s=i.data();if(1==s.length){var a=s[0].ID;window.BX24.callMethod("entity.item.update",{ENTITY:n,ID:a,PROPERTY_VALUES:t},(function(){e()}))}else window.BX24.callMethod("entity.item.add",{ENTITY:n,DATE_ACTIVE_FROM:new Date,NAME:"settings",PROPERTY_VALUES:t},(function(){e()}))}))}));i.then((function(){e.isLoad=!1,e.success=!0}))},getEntity:function(){var e="ozonEntity",t="",n=this;return window.BX24.callMethod("entity.item.get",{ENTITY:e,SORT:{DATE_ACTIVE_FROM:"ASC",ID:"ASC"},FILTER:{}},(function(e){var i=["EXECUTION_FREQUENCY_STATUSES","EXECUTION_FREQUENCY_NEW_TRADES","EXECUTION_FREQUENCY_DELIVERIED","ozon_delivering"],s=["NOTIFY_OZON_DROP","CHANGE_STATUS","CREATE_PRODUCT","MODULE_IS_ACTIVE"];t=e.data(),0!=t.length&&(console.log(t),t=t[0].PROPERTY_VALUES,i.forEach((function(e){var n=t[e].match(/min|hour/),i=t[e].match(/\d+/);t[e]=i[0],t[e+"_TIME"]=n[0]})),s.forEach((function(e){var n="true"==t[e];t[e]=n})),n.fields=t)}))},createEntity:function(){var e="ozonEntity",t=[{ENTITY:e,PROPERTY:"MODULE_IS_ACTIVE",NAME:"Активность модуля",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_AWAITING_CONFIRMATION",NAME:"Ожидает подтверждение",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_AWAITING_SHIPMENT",NAME:"Ожидается отгрузка",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_DELIVERED",NAME:"Доставлен",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_DELIVERING_STATUS",NAME:"Доставляется",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_CANCELED",NAME:"Отменен",TYPE:"S"},{ENTITY:e,PROPERTY:"CONTROVERSIAL",NAME:"Спорный",TYPE:"S"},{ENTITY:e,PROPERTY:"PENDING_DECISION",NAME:"Ожидает решения спора",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_API_KEY",NAME:"OZON API KEY",TYPE:"S"},{ENTITY:e,PROPERTY:"AT_THE_DRIVER",NAME:"У водителя",TYPE:"S"},{ENTITY:e,PROPERTY:"EXECUTION_FREQUENCY_NEW_TRADES",NAME:"Частота выполнения новые сделки",TYPE:"S"},{ENTITY:e,PROPERTY:"EXECUTION_FREQUENCY_STATUSES",NAME:"Частота выполнения статусы",TYPE:"S"},{ENTITY:e,PROPERTY:"EXECUTION_FREQUENCY_DELIVERIED",NAME:"Частота выполнения доставлены",TYPE:"S"},{ENTITY:e,PROPERTY:"ozon_delivering",NAME:"Частота выполнения доставляется",TYPE:"S"},{ENTITY:e,PROPERTY:"RESPONSIBLE",NAME:"Ответственный",TYPE:"S"},{ENTITY:e,PROPERTY:"PRODUCT_FIELD_CODE",NAME:"Свойство товара Артикул-ozon",TYPE:"S"},{ENTITY:e,PROPERTY:"CREATE_PRODUCT",NAME:"Создавать товар при отсутствии",TYPE:"S"},{ENTITY:e,PROPERTY:"NOTIFY_OZON_DROP",NAME:"Уведомлять при падении ozon",TYPE:"S"},{ENTITY:e,PROPERTY:"CLIENT_ID",NAME:"Клиент ID",TYPE:"S"},{ENTITY:e,PROPERTY:"CHANGE_STATUS",NAME:"Не изменять статус в Б24 пока не изменится в ozon",TYPE:"S"}];window.BX24.callMethod("entity.add",{ENTITY:e,NAME:e,ACCESS:{U1:"X",AU:"X"}}),setTimeout((function(){window.BX24.callMethod("entity.section.add",{ENTITY:e,NAME:"Разрел настроек",ACTIVE:"Y"})}),1e3),setTimeout((function(){t.forEach((function(e){window.BX24.callMethod("entity.item.property.add",e)}))}),3e3)},checkTime:function(e){var t=this.fields["".concat(e,"_TIME")],n=this.fields[e];"min"==t&&n<5&&(this.fields[e]=5)},enterOnlyNumber:function(e){var t=e.target,n=t.value,i=n.replace(/[^0-9]/gim,"");this.fields.CLIENT_ID=i}}},d=c,u=(n("729e"),n("2877")),T=n("6544"),_=n.n(T),f=n("c6a6"),N=n("8336"),I=n("62ad"),m=n("132d"),v=n("5d23"),O=n("0fd9"),p=n("b974"),R=n("1f4f"),C=n("b73d"),S=n("8654"),A=n("2a7f"),h=Object(u["a"])(d,o,l,!1,null,null,null),D=h.exports;_()(h,{VAutocomplete:f["a"],VBtn:N["a"],VCol:I["a"],VIcon:m["a"],VListItemContent:v["a"],VListItemTitle:v["b"],VRow:O["a"],VSelect:p["a"],VSimpleTable:R["a"],VSwitch:C["a"],VTextField:S["a"],VToolbarTitle:A["a"]});var P={name:"App",components:{OzoneSettings:D},data:function(){return{}}},Y=P,U=n("0798"),g=n("7496"),b=n("a523"),M=n("f6c4"),L=Object(u["a"])(Y,s,a,!1,null,null,null),w=L.exports;_()(L,{VAlert:U["a"],VApp:g["a"],VContainer:b["a"],VMain:M["a"]});var y=n("f309");i["a"].use(y["a"]);var x=new y["a"]({}),V=n("67b0");i["a"].use(V["a"]),i["a"].config.productionTip=!1,new i["a"]({vuetify:x,render:function(e){return e(w)}}).$mount("#app")},"729e":function(e,t,n){"use strict";var i=n("b1c3"),s=n.n(i);s.a},b1c3:function(e,t,n){}});
//# sourceMappingURL=app.d9fbe53c.js.map