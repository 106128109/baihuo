(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-bargain_process-bargain_process~pages-bundle-goods_logistics-goods_logistics~pages-bund~c04619b7"],{"0325":function(t,e,i){"use strict";i.r(e);var s=i("a24da"),a=i("6081");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("99c6");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"0ed3e06c",null,!1,s["a"],r);e["default"]=c.exports},"07c6":function(t,e,i){"use strict";i.r(e);var s=i("89cf"),a=i("e816");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("df5a");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"d7f27a88",null,!1,s["a"],r);e["default"]=c.exports},"07f9":function(t,e,i){"use strict";i.r(e);var s=i("adda"),a=i("a1cc");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("597f");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"60f6159f",null,!1,s["a"],r);e["default"]=c.exports},"083c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{type:{type:String,default:"double"},list:{type:Array,default:function(){return[]}},isBargain:{type:Boolean,default:!1}},data:function(){return{}}};e.default=s},1578:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:{type:Boolean,default:!0},useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"scaleToFill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},customStyle:{type:Object,default:function(){}}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,i=this.radius,s={};t&&(s.width=t),e&&(s.height=e),i&&(s["overflow"]="hidden",s["border-radius"]=i),this.viewStyle=s,this.customStyle&&(this.viewStyle=Object.assign(this.viewStyle,this.customStyle))},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onErrored:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=s},"23be":function(t,e,i){var s=i("f96f");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("50deb798",s,!0,{sourceMap:!1,shadowMode:!1})},4323:function(t,e,i){var s=i("6c70");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("25353854",s,!0,{sourceMap:!1,shadowMode:!1})},"4b6c":function(t,e,i){"use strict";i("a9e3"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:[String,Number],default:28},secondSize:{type:[String,Number],default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:[String,Number],default:28},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&""!==t&&void 0!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}};e.default=s},5746:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-list .goods-double[data-v-0ed3e06c]{-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?20?%;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.goods-list .goods-double .item[data-v-0ed3e06c]{width:%?347?%;border-radius:%?10?%}.goods-list .goods-double .item .goods-info[data-v-0ed3e06c]{padding:%?10?%}.goods-list .goods-hot.goods-home-hot .item[data-v-0ed3e06c]{padding:0}.goods-list .goods-hot.goods-home-hot .item .paixu[data-v-0ed3e06c],\n.goods-list .goods-hot.goods-home-hot .item .number[data-v-0ed3e06c]{left:%?10?%}.goods-list .goods-hot .item[data-v-0ed3e06c]{position:relative;padding:%?30?% %?20?%;border-radius:%?10?%}.goods-list .goods-hot .item .goods-info[data-v-0ed3e06c]{width:%?450?%}.goods-list .goods-hot .item .goods-info .sale[data-v-0ed3e06c]{padding:%?4?% %?18?%;color:#f79c0c;background-color:rgba(247,156,12,.1)}.goods-list .goods-hot .item .paixu[data-v-0ed3e06c],\n.goods-list .goods-hot .item .number[data-v-0ed3e06c]{position:absolute;top:0;left:%?27?%;width:%?50?%;height:%?54?%;line-height:%?60?%;text-align:center;color:#621e09}.goods-list .goods-one .item[data-v-0ed3e06c]{padding:%?20?%}.goods-list .goods-one .item[data-v-0ed3e06c]:not(:last-of-type){margin-bottom:%?20?%}.goods-list .goods-new .item[data-v-0ed3e06c]{-webkit-box-shadow:0 0 10px rgba(0,0,0,.16);box-shadow:0 0 10px rgba(0,0,0,.16);border-radius:%?10?%}',""]),t.exports=e},"574b":function(t,e,i){var s=i("5746");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("5fb2900a",s,!0,{sourceMap:!1,shadowMode:!1})},"597f":function(t,e,i){"use strict";var s=i("4323"),a=i.n(s);a.a},6081:function(t,e,i){"use strict";i.r(e);var s=i("083c"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},"6c70":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".price-format[data-v-60f6159f]{font-family:Avenir,SourceHanSansCN,PingFang SC,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif}",""]),t.exports=e},"89cf":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var s={uIcon:i("239c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():i("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrored.apply(void 0,arguments)}}}),t.loading&&t.showLoading?i("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):i("u-icon",{attrs:{color:"#aaa",name:"photo-fill",size:"45"}})],2):t._e(),t.error&&t.showError?i("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):i("u-icon",{attrs:{color:"#aaa",name:"error-circle-fill",size:"45"}}),i("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},o=[]},"99c6":function(t,e,i){"use strict";var s=i("574b"),a=i.n(s);a.a},a1cc:function(t,e,i){"use strict";i.r(e);var s=i("4b6c"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},a24da:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var s={customImage:i("07c6").default,priceFormat:i("07f9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-list"},["double"===t.type?i("v-uni-view",{staticClass:"goods-double row-between"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+(t.isBargain?e.goods_id:e.id)}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"347rpx",height:"347rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"347rpx",height:"347rpx",radius:"10rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name line2"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price||e.activity_price}})],1)],1)],1)})),1):t._e(),"hot"===t.type?i("v-uni-view",{staticClass:"goods-hot"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"180rpx",height:"180rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"180rpx",height:"180rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"sale br60 xxs"},[t._v("已有"+t._s(e.sales_sum)+"人购买")]),i("v-uni-view",{staticClass:"row-between  mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1),i("v-uni-image",{staticClass:"icon-md",attrs:{src:"/static/images/icon_go_red.png"}})],1)],1),i("v-uni-image",{staticClass:"paixu",attrs:{src:"/static/images/No."+(s<3?s:3)+".png"}}),i("v-uni-view",{staticClass:"number xxs"},[t._v(t._s(s+1))])],1)})),1):t._e(),"home-hot"===t.type?i("v-uni-view",{staticClass:"goods-home-hot goods-hot"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mb20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img"},[i("custom-image",{attrs:{"lazy-load":!0,width:"240rpx",height:"240rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20 mr20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"sale br60 xxs"},[t._v("已有"+t._s(e.sales_sum)+"人购买")]),i("v-uni-view",{staticClass:"row-between  mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1),i("v-uni-button",{staticClass:"br60",attrs:{type:"primary",size:"xs"}},[t._v("去购买")])],1)],1),i("v-uni-image",{staticClass:"paixu",attrs:{src:"/static/images/No."+(s<3?s:3)+".png"}}),i("v-uni-view",{staticClass:"number"},[t._v(t._s(s+1))])],1)})),1):t._e(),"new"===t.type?i("v-uni-view",{staticClass:"goods-new"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img"},[i("custom-image",{attrs:{"lazy-load":!0,width:"240rpx",height:"240rpx",radius:"10rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20 mr20 flex1"},[i("v-uni-view",{staticClass:"goods-name line2 mb20"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row-between muted xxs "},[i("v-uni-view",{staticClass:"line-through"},[i("v-uni-text",[t._v("原价")]),i("price-format",{attrs:{"second-size":22,"first-size":22,"subscript-size":22,price:e.market_price}})],1),i("v-uni-view",[t._v(t._s(e.sales_sum)+"人购买")])],1),i("v-uni-view",{staticClass:"row-between  mt10"},[i("price-format",{attrs:{color:"#FF2C3C","first-size":38,"subscript-size":26,"second-size":26,price:e.price,weight:500}}),i("v-uni-button",{staticClass:"br60",attrs:{type:"primary",size:"xs"}},[t._v("立即抢购")])],1)],1)],1)})),1):t._e(),"one"===t.type?i("v-uni-view",{staticClass:"goods-one mt20"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"200rpx",height:"200rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"200rpx",height:"200rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row-between mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1)],1)],1)],1)})),1):t._e()],1)},o=[]},adda:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{class:(t.lineThrough?"line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?i("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),i("v-uni-text",{style:{"font-size":t.firstSize+"rpx","margin-right":"1rpx"}},[t._v(t._s(t.priceSlice.first))]),t.priceSlice.second?i("v-uni-text",{style:{"font-size":t.secondSize+"rpx"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()],1)},o=[]},df5a:function(t,e,i){"use strict";var s=i("23be"),a=i.n(s);a.a},e816:function(t,e,i){"use strict";i.r(e);var s=i("1578"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},f96f:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.custom-image[data-v-d7f27a88]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-d7f27a88]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-d7f27a88]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-d7f27a88],\n.custom-image .error-wrap[data-v-d7f27a88]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e}}]);