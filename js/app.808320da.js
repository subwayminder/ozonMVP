(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);E&&E(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var E=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",[n("h1",[e._v("Настройки модуля интеграции Битрикс24 с Ozon")]),n("OzoneSettings")],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Активность модуля"},model:{value:e.fields.MODULE_IS_ACTIVE,callback:function(t){e.$set(e.fields,"MODULE_IS_ACTIVE",t)},expression:"fields.MODULE_IS_ACTIVE"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-simple-table",[[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[n("v-toolbar-title",[e._v(" OZON ")])],1),n("th",{staticClass:"text-left"},[n("v-toolbar-title",[e._v(" Битрикс24 ")])],1)])]),n("tbody",[n("tr",[n("td",[e._v("Ожидает подтверждение")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},model:{value:e.fields.OZON_AWAITING_CONFIRMATION,callback:function(t){e.$set(e.fields,"OZON_AWAITING_CONFIRMATION",t)},expression:"fields.OZON_AWAITING_CONFIRMATION"}})],1)]),n("tr",[n("td",[e._v("Ожидается отгрузка")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_AWAITING_SHIPMENT,callback:function(t){e.$set(e.fields,"OZON_AWAITING_SHIPMENT",t)},expression:"fields.OZON_AWAITING_SHIPMENT"}})],1)]),n("tr",[n("td",[e._v("Доставлен")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_DELIVERED,callback:function(t){e.$set(e.fields,"OZON_DELIVERED",t)},expression:"fields.OZON_DELIVERED"}})],1)]),n("tr",[n("td",[e._v("Отменен")]),n("td",[n("v-autocomplete",{attrs:{items:e.category,label:"Стадия сделки","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.OZON_CANCELED,callback:function(t){e.$set(e.fields,"OZON_CANCELED",t)},expression:"fields.OZON_CANCELED"}})],1)])])]],2)],1),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"API key Ozon"},model:{value:e.fields.OZON_API_KEY,callback:function(t){e.$set(e.fields,"OZON_API_KEY",t)},expression:"fields.OZON_API_KEY"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",[e._v("Частота выполнения скриптов")])]),n("v-col",{staticClass:"d-flex align-center justify-space-between",attrs:{cols:"5"}},[n("span",[e._v("Новые сделки")]),n("span",[e._v("каждые")])]),n("v-col",{attrs:{cols:"1"}},[n("v-text-field",{attrs:{"hide-details":"","single-line":""},model:{value:e.fields.EXECUTION_FREQUENCY_NEW_TRADES,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_NEW_TRADES",t)},expression:"fields.EXECUTION_FREQUENCY_NEW_TRADES"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-select",{attrs:{items:e.time,"item-text":"name","item-value":"id"},model:{value:e.fields.EXECUTION_FREQUENCY_NEW_TRADES_TIME,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_NEW_TRADES_TIME",t)},expression:"fields.EXECUTION_FREQUENCY_NEW_TRADES_TIME"}})],1)],1),n("v-row",[n("v-col",{staticClass:"d-flex align-center justify-space-between",attrs:{cols:"5"}},[n("span",[e._v('Статусы "Доставляется" и "Спорные"')]),n("span",[e._v("каждые")])]),n("v-col",{attrs:{cols:"1"}},[n("v-text-field",{attrs:{"hide-details":"","single-line":""},model:{value:e.fields.EXECUTION_FREQUENCY_STATUSES,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_STATUSES",t)},expression:"fields.EXECUTION_FREQUENCY_STATUSES"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-select",{attrs:{items:e.time,"item-text":"name","item-value":"id"},model:{value:e.fields.EXECUTION_FREQUENCY_STATUSES_TIME,callback:function(t){e.$set(e.fields,"EXECUTION_FREQUENCY_STATUSES_TIME",t)},expression:"fields.EXECUTION_FREQUENCY_STATUSES_TIME"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{items:e.people,label:"Ответственный","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.RESPONSIBLE,callback:function(t){e.$set(e.fields,"RESPONSIBLE",t)},expression:"fields.RESPONSIBLE"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{items:e.productFields,label:"Свойство товара Артикул-ozon(для соответствия )","item-text":"name","item-value":"id",dense:"","single-line":""},scopedSlots:e._u([{key:"item",fn:function(t){return[[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.fields.PRODUCT_FIELD_CODE,callback:function(t){e.$set(e.fields,"PRODUCT_FIELD_CODE",t)},expression:"fields.PRODUCT_FIELD_CODE"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Создавать товар при отсутствии товара с нужным артикулом (создается в папку “Товары из ozon”)"},model:{value:e.fields.CREATE_PRODUCT,callback:function(t){e.$set(e.fields,"CREATE_PRODUCT",t)},expression:"fields.CREATE_PRODUCT"}})],1),n("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Уведомлять при падении ozon"},model:{value:e.fields.NOTIFY_OZON_DROP,callback:function(t){e.$set(e.fields,"NOTIFY_OZON_DROP",t)},expression:"fields.NOTIFY_OZON_DROP"}})],1),n("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[n("v-switch",{attrs:{label:"Не изменять статус в Б24 пока не изменится в ozon"},model:{value:e.fields.CHANGE_STATUS,callback:function(t){e.$set(e.fields,"CHANGE_STATUS",t)},expression:"fields.CHANGE_STATUS"}})],1),n("v-col",{staticClass:"pt-0 pb-0 d-flex justify-center",attrs:{cols:"12"}},[n("div",{staticClass:"pa-5"},[n("v-btn",{attrs:{depressed:"",large:"",color:"primary"},on:{click:e.saveSettings}},[e._v("Сохранить")])],1),n("div",{staticClass:"pa-5"},[n("v-btn",{attrs:{depressed:"",large:"",color:"error"}},[e._v("Отменить")])],1)]),n("v-col",{staticClass:"pt-0 pb-0 d-flex justify-center",attrs:{cols:"12"}},[n("div",{staticClass:"pa-5"},[n("v-btn",{attrs:{depressed:"",large:""},on:{click:e.createEntity}},[e._v("Создать хранилище")])],1),n("div",{staticClass:"pa-5"},[n("v-btn",{attrs:{depressed:"",large:""},on:{click:e.getEntity}},[e._v("Получить данные")])],1)])],1)],1)},o=[],l=(n("99af"),n("4160"),n("45fc"),n("d3b7"),n("159b"),n("b85c")),c=(n("96cf"),n("1da1")),E={beforeCreate:function(){var e=this,t=[];this.$loadScript("//api.bitrix24.com/api/v1/").then(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.getCategory().then(function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(i){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=Object(l["a"])(i),n.prev=1,a.s();case 3:if((r=a.n()).done){n.next=9;break}return s=r.value,n.next=7,e.getStatuses(s,t);case 7:n.next=3;break;case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a.e(n.t0);case 14:return n.prev=14,a.f(),n.finish(14);case 17:e.category=t;case 18:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}()),e.getUserList(),e.getProductsFields();case 3:case"end":return n.stop()}}),n)}))))},data:function(){return{category:[],time:[{name:"час.",id:"hour"},{name:"мин.",id:"min"}],people:[],productFields:[],fields:{MODULE_IS_ACTIVE:!0,OZON_AWAITING_CONFIRMATION:"NEW",OZON_AWAITING_SHIPMENT:"NEW",OZON_DELIVERED:"NEW",OZON_CANCELED:"NEW",OZON_API_KEY:"",EXECUTION_FREQUENCY_NEW_TRADES:"",EXECUTION_FREQUENCY_NEW_TRADES_TIME:"",EXECUTION_FREQUENCY_STATUSES:"",EXECUTION_FREQUENCY_STATUSES_TIME:"",RESPONSIBLE:"",PRODUCT_FIELD_CODE:"",CREATE_PRODUCT:"",NOTIFY_OZON_DROP:"",CHANGE_STATUS:""}}},name:"OzoneSettins",methods:{getCategory:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.abrupt("return",new Promise((function(e,n){window.BX24.callMethod("crm.dealcategory.default.get",{},(function(e){e.error()?console.error(e.error()):t.push(e.data())})),window.BX24.callMethod("crm.dealcategory.list",{order:{SORT:"ASC"},select:[]},(function(i){i.error()?n(i.error()):(i.data().forEach((function(e){t.push(e)})),e(t))}))})));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getStatuses:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:new Promise((function(e,i){window.BX24.callMethod("crm.dealcategory.stage.list",{id:t.ID},(function(a){if(a.error())i(a.error());else{var r=n.some((function(e){return e.id==t.ID}));r||n.push({header:t.NAME,id:t.ID});var s=a.data();s.forEach((function(e){n.push({name:e.NAME,id:e.STATUS_ID})})),e(s)}}))}));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getUserList:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[],window.BX24.callMethod("user.get",{},(function(e){var n=e.data();n.forEach((function(e){t.push({name:"".concat(e.LAST_NAME," ").concat(e.NAME),id:e.ID})}))})),this.people=t;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getProductsFields:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[{name:"Внешний код",id:"XML_ID"},{name:"Символьный код",id:"CODE"}],window.BX24.callMethod("crm.product.property.list",{order:{SORT:"ASC"},filter:{}},(function(e){if(e.error())console.error(e.error());else{var n=e.data();n.forEach((function(e){t.push({name:e.NAME,id:"PROPERTY_"+e.ID})})),console.log(t)}})),this.productFields=t;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),saveSettings:function(){var e=this.fields,t="ozonEntity";e.EXECUTION_FREQUENCY_STATUSES="".concat(this.fields.EXECUTION_FREQUENCY_STATUSES,"-").concat(this.fields.EXECUTION_FREQUENCY_STATUSES_TIME),e.EXECUTION_FREQUENCY_NEW_TRADES="".concat(this.fields.EXECUTION_FREQUENCY_NEW_TRADES,"-").concat(this.fields.EXECUTION_FREQUENCY_NEW_TRADES_TIME),window.BX24.callMethod("entity.item.get",{ENTITY:t,SORT:{DATE_ACTIVE_FROM:"ASC",ID:"ASC"},FILTER:{}},(function(n){var i=n.data();if(1==i.length){var a=i[0].ID;window.BX24.callMethod("entity.item.update",{ENTITY:t,ID:a,PROPERTY_VALUES:e})}else window.BX24.callMethod("entity.item.add",{ENTITY:t,DATE_ACTIVE_FROM:new Date,NAME:"settings",PROPERTY_VALUES:e})}))},getEntity:function(){var e="ozonEntity";window.BX24.callMethod("entity.item.get",{ENTITY:e,SORT:{DATE_ACTIVE_FROM:"ASC",ID:"ASC"},FILTER:{}},(function(e){var t=e.data();console.log(t)}))},createEntity:function(){var e="ozonEntity",t=[{ENTITY:e,PROPERTY:"MODULE_IS_ACTIVE",NAME:"Активность модуля",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_AWAITING_CONFIRMATION",NAME:"Ожидает подтверждение",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_AWAITING_SHIPMENT",NAME:"Ожидается отгрузка",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_DELIVERED",NAME:"Доставлен",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_CANCELED",NAME:"Отменен",TYPE:"S"},{ENTITY:e,PROPERTY:"OZON_API_KEY",NAME:"OZON API KEY",TYPE:"S"},{ENTITY:e,PROPERTY:"EXECUTION_FREQUENCY_NEW_TRADES",NAME:"Частота выполнения новые сделки",TYPE:"S"},{ENTITY:e,PROPERTY:"EXECUTION_FREQUENCY_STATUSES",NAME:"Частота выполнения статусы",TYPE:"S"},{ENTITY:e,PROPERTY:"RESPONSIBLE",NAME:"Ответственный",TYPE:"S"},{ENTITY:e,PROPERTY:"PRODUCT_FIELD_CODE",NAME:"Свойство товара Артикул-ozon",TYPE:"S"},{ENTITY:e,PROPERTY:"CREATE_PRODUCT",NAME:"Создавать товар при отсутствии",TYPE:"S"},{ENTITY:e,PROPERTY:"NOTIFY_OZON_DROP",NAME:"Уведомлять при падении ozon",TYPE:"S"},{ENTITY:e,PROPERTY:"CHANGE_STATUS",NAME:"Не изменять статус в Б24 пока не изменится в ozon",TYPE:"S"}];window.BX24.callMethod("entity.add",{ENTITY:e,NAME:e,ACCESS:{U1:"X",AU:"X"}}),setTimeout((function(){window.BX24.callMethod("entity.section.add",{ENTITY:e,NAME:"Разрел настроек",ACTIVE:"Y"})}),1e3),setTimeout((function(){t.forEach((function(e){window.BX24.callMethod("entity.item.property.add",e)}))}),3e3)}}},u=E,d=(n("729e"),n("2877")),T=n("6544"),f=n.n(T),_=n("c6a6"),O=n("8336"),N=n("62ad"),p=n("5d23"),v=n("0fd9"),m=n("b974"),I=n("1f4f"),S=n("b73d"),C=n("8654"),R=n("2a7f"),A=Object(d["a"])(u,s,o,!1,null,null,null),P=A.exports;f()(A,{VAutocomplete:_["a"],VBtn:O["a"],VCol:N["a"],VListItemContent:p["a"],VListItemTitle:p["b"],VRow:v["a"],VSelect:m["a"],VSimpleTable:I["a"],VSwitch:S["a"],VTextField:C["a"],VToolbarTitle:R["a"]});var h={name:"App",components:{OzoneSettings:P},data:function(){return{}}},U=h,b=n("7496"),Y=n("a523"),D=n("f6c4"),g=Object(d["a"])(U,a,r,!1,null,null,null),M=g.exports;f()(g,{VApp:b["a"],VContainer:Y["a"],VMain:D["a"]});var w=n("f309");i["a"].use(w["a"]);var y=new w["a"]({}),x=n("67b0");i["a"].use(x["a"]),i["a"].config.productionTip=!1,new i["a"]({vuetify:y,render:function(e){return e(M)}}).$mount("#app")},"729e":function(e,t,n){"use strict";var i=n("b1c3"),a=n.n(i);a.a},b1c3:function(e,t,n){}});
//# sourceMappingURL=app.808320da.js.map