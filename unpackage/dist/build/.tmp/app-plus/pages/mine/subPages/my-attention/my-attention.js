(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/subPages/my-attention/my-attention"],{"335a":function(t,n,e){"use strict";var r=e("6dee"),o=e.n(r);o.a},"41ce":function(t,n,e){"use strict";e.r(n);var r=e("b6d1"),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=o.a},"65f2":function(t,n,e){"use strict";e.r(n);var r=e("89f3"),o=e("41ce");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("335a");var i=e("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"000e84b1",null);n["default"]=a.exports},"6dee":function(t,n,e){},"89f3":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},b6d1:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a")),o=e("2f62"),u=e("25d2");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,o,u,i){try{var a=t[u](i),c=a.value}catch(f){return void e(f)}a.done?n(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)})}}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){s(t,n,e[n])})}return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l=function(){return Promise.all([e.e("common/vendor"),e.e("components/attention-item")]).then(e.bind(null,"f963"))},d=function(){return e.e("components/empty").then(e.bind(null,"d923"))},p={name:"",data:function(){return{}},onLoad:function(){this._reqGetMyAttention()},onShow:function(){this.$hideTabbarButton()},computed:f({},(0,o.mapState)(["attention_list"]),{BASE_URL:function(){return u.BASE_URL}}),methods:f({},(0,o.mapActions)(["reqGetMyAttention","reqGetUserInfo"]),{_reqGetMyAttention:function(){var n=t.getStorageSync("token");this.reqGetMyAttention({token:n})},OnCancelAttention:function(){var n=c(r.default.mark(function n(e){var o,i;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:o=this,i=t.getStorageSync("token"),t.showModal({content:"确定要取消关注吗?",success:function(){var t=c(r.default.mark(function t(n){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return t.next=3,(0,u.cancelAttention)({token:i,tid:e});case 3:a=t.sent,200==a.code&&(o._reqGetMyAttention(),o.reqGetUserInfo({token:i}));case 5:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()});case 3:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}()}),components:{attentionItem:l,empty:d}};n.default=p}).call(this,e("6e42")["default"])}},[["7f30","common/runtime","common/vendor"]]]);