(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/subPages/set/set"],{"1de0":function(e,t,n){},"3bf4":function(e,t,n){"use strict";var r=n("1de0"),a=n.n(r);a.a},"88c6":function(e,t,n){"use strict";n.r(t);var r=n("d910"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"8bc6":function(e,t,n){"use strict";n.r(t);var r=n("936e"),a=n("88c6");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("3bf4");var c=n("2877"),u=Object(c["a"])(a["default"],r["a"],r["b"],!1,null,"31f0b44c",null);t["default"]=u.exports},"936e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},d910:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=n("2f62"),o=n("25d2"),c=(n("c360"),n("8a52"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,c){try{var u=e[o](c),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,u,"next",e)}function u(e){i(o,r,a,c,u,"throw",e)}c(void 0)})}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){return n.e("components/list-cell").then(n.bind(null,"d13f"))},h={name:"",data:function(){return{setList:[{title:"修改密码"},{title:"清除缓存"},{title:"退出登录"}]}},onShow:function(){this.$hideTabbarButton()},computed:f({},(0,a.mapState)(["user_info"])),methods:f({},(0,a.mapActions)(["reqGetUserInfo"]),{onGoToPage:function(){var t=s(r.default.mark(function t(n){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,"修改头像"===n&&e.chooseImage({success:function(t){var n=t.tempFilePaths[0];(0,c.pathToBase64)(n).then(function(){var t=s(r.default.mark(function t(c){var u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.changeUserInfo)({token:e.getStorageSync("token"),avatar:c});case 2:u=t.sent,200==u.code&&(a.reqGetUserInfo({token:e.getStorageSync("token")}),a.$set(a.setList[0],"avatar",n),e.showToast({title:"上传成功"}));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}}),"修改昵称"===n&&e.navigateTo({url:"/pages/mine/subPages/change-nickName/change-nickName"}),"修改手机号"===n&&e.navigateTo({url:"/pages/mine/subPages/change-phone/change-phone"}),"修改密码"===n&&e.navigateTo({url:"/pages/mine/subPages/change-pwd/change-pwd"}),"清除缓存"===n&&(e.showLoading({title:"清除中..."}),setTimeout(function(){e.hideLoading(),e.showModal({title:"清除缓存",content:"清除成功",showCancel:!1,success:function(e){e.confirm}})},500)),"退出登录"===n&&e.showModal({title:"退出登录",content:"确定要退出登录吗？",success:function(){var t=s(r.default.mark(function t(n){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.confirm&&(e.clearStorage(),e.reLaunch({url:"/pages/login/login"}));case 1:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()});case 7:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()}),components:{listCell:d}};t.default=h}).call(this,n("6e42")["default"])}},[["e28c","common/runtime","common/vendor"]]]);