(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/subPages/notice-detail/notice-detail"],{"1b7f":function(n,t,e){"use strict";e.r(t);var a=e("b655"),r=e("c0f9");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("652c");var u=e("2877"),o=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"12a04591",null);t["default"]=o.exports},"3ae2":function(n,t,e){},"603a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("a34a")),r=e("25d2");function i(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,a,r,i,u){try{var o=n[i](u),c=o.value}catch(s){return void e(s)}o.done?t(c):Promise.resolve(c).then(a,r)}function o(n){return function(){var t=this,e=arguments;return new Promise(function(a,r){var i=n.apply(t,e);function o(n){u(i,a,r,o,c,"next",n)}function c(n){u(i,a,r,o,c,"throw",n)}o(void 0)})}}var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/uParse/src/wxParse")]).then(e.bind(null,"21a0"))},s={name:"",data:function(){return{id:"",detail:""}},onLoad:function(n){this.id=n.id,this._noticeDetail()},methods:{_noticeDetail:function(){var n=o(a.default.mark(function n(){var t;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.noticeDetail)({gg_id:this.id});case 2:t=n.sent,this.detail=t.data;case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()},components:{uParse:c}};t.default=s},"652c":function(n,t,e){"use strict";var a=e("3ae2"),r=e.n(a);r.a},b655:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return r})},c0f9:function(n,t,e){"use strict";e.r(t);var a=e("603a"),r=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=r.a}},[["8aa4","common/runtime","common/vendor"]]]);