(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/subPages/change-nickName/change-nickName"],{"03a5":function(n,e,t){"use strict";var r=t("0d9d"),o=t.n(r);o.a},"0d9d":function(n,e,t){},"1f25":function(n,e,t){"use strict";t.r(e);var r=t("b7f2"),o=t("4d03");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("03a5");var a=t("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"576ba7cd",null);e["default"]=c.exports},"4d03":function(n,e,t){"use strict";t.r(e);var r=t("9224"),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e["default"]=o.a},9224:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t("a34a")),o=(t("c360"),t("2f62")),u=t("25d2");function a(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,r,o,u,a){try{var c=n[u](a),i=c.value}catch(f){return void t(f)}c.done?e(i):Promise.resolve(i).then(r,o)}function i(n){return function(){var e=this,t=arguments;return new Promise(function(r,o){var u=n.apply(e,t);function a(n){c(u,r,o,a,i,"next",n)}function i(n){c(u,r,o,a,i,"throw",n)}a(void 0)})}}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){s(n,e,t[e])})}return n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var l=function(){return t.e("components/input-cell").then(t.bind(null,"b545"))},d={name:"",data:function(){return{nickName:""}},onLoad:function(){this.nickName=this.user_info.username||"昵称"},computed:f({},(0,o.mapState)(["user_info"])),methods:f({},(0,o.mapActions)(["reqGetUserInfo"]),{onConfirmClick:function(){var e=i(r.default.mark(function e(){var t,o;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,""!=this.nickName){e.next=4;break}return n.showToast({title:"昵称不能为空",icon:"none"}),e.abrupt("return");case 4:return e.next=6,(0,u.changeUserInfo)({token:n.getStorageSync("token"),username:this.nickName});case 6:o=e.sent,200==o.code&&(n.showToast({title:"修改成功"}),setTimeout(function(){t.reqGetUserInfo({token:n.getStorageSync("token")}),setTimeout(function(){n.navigateBack()},500)},1e3));case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),components:{inputCell:l}};e.default=d}).call(this,t("6e42")["default"])},b7f2:function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})}},[["3253","common/runtime","common/vendor"]]]);