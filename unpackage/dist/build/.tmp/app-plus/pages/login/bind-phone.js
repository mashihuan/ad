(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/bind-phone"],{1039:function(n,e,t){},"2ba8":function(n,e,t){"use strict";var o=t("1039"),a=t.n(o);a.a},"3c29":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},7462:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t("a34a")),a=t("25d2"),r=(t("2f62"),t("c360"));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,o,a,r,i){try{var u=n[r](i),c=u.value}catch(s){return void t(s)}u.done?e(c):Promise.resolve(c).then(o,a)}function c(n){return function(){var e=this,t=arguments;return new Promise(function(o,a){var r=n.apply(e,t);function i(n){u(r,o,a,i,c,"next",n)}function c(n){u(r,o,a,i,c,"throw",n)}i(void 0)})}}var s=function(){return t.e("components/login-top").then(t.bind(null,"4ff2"))},f=function(){return t.e("components/input-cell").then(t.bind(null,"b545"))},d={name:"",data:function(){return{phone:"",name:"",avatar:"",openid:""}},onLoad:function(e){this.openid=e.openid;var t=this;n.getUserInfo({provider:"weixin",success:function(n){console.log(n," at pages\\login\\bind-phone.vue:31"),t.name=n.nickName,t.avatar=n.avatarUrl}})},methods:{onBindPhoneEvent:function(){var e=c(o.default.mark(function e(){var t;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if((0,r.verifyPhone)(this.phone)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,a.weixinLogin)({openid:this.openid,mobile:this.phone,avatar:this.avatar,username:this.name});case 4:t=e.sent,console.log(t," at pages\\login\\bind-phone.vue:46"),200==t.code&&(n.reLaunch({url:"/pages/home/index/index"}),n.setStorage({key:"user_id",data:t.data.user_id}),n.setStorage({key:"token",data:t.data.token}));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},components:{loginTop:s,inputCell:f}};e.default=d}).call(this,t("6e42")["default"])},a10d:function(n,e,t){"use strict";t.r(e);var o=t("7462"),a=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=a.a},c22c:function(n,e,t){"use strict";t.r(e);var o=t("3c29"),a=t("a10d");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);t("2ba8");var i=t("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"5490ccf2",null);e["default"]=u.exports}},[["4193","common/runtime","common/vendor"]]]);