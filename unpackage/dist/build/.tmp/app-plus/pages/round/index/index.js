(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/round/index/index","components/list-cell"],{"0d37":function(t,e,n){"use strict";n.r(e);var i=n("2ce3"),o=n("6935");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("d61f");var u=n("2877"),s=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"0260da7c",null);e["default"]=s.exports},"2ce3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"3d90":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"41c5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:String,showArrow:{type:Boolean,default:!0},number:{type:[Number,String]},approve:{type:[Number,String]},avatar:String,phone:String,nickName:String},name:"",data:function(){return{}},onLoad:function(){},methods:{onGoToPage:function(t){this.$emit("onGoToPage",t)}}};e.default=i},"5f17":function(t,e,n){"use strict";var i=n("64a1"),o=n.n(i);o.a},"64a1":function(t,e,n){},6935:function(t,e,n){"use strict";n.r(e);var i=n("f84b"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},d13f:function(t,e,n){"use strict";n.r(e);var i=n("3d90"),o=n("d367");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("5f17");var u=n("2877"),s=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"56f98022",null);e["default"]=s.exports},d367:function(t,e,n){"use strict";n.r(e);var i=n("41c5"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},d61f:function(t,e,n){"use strict";var i=n("f7a0"),o=n.n(i);o.a},f7a0:function(t,e,n){},f84b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("a34a")),o=(s(n("d13f")),n("c360")),r=n("2f62"),u=n("25d2");function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,o,r,u){try{var s=t[r](u),a=s.value}catch(c){return void n(c)}s.done?e(a):Promise.resolve(a).then(i,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var r=t.apply(e,n);function u(t){a(r,i,o,u,s,"next",t)}function s(t){a(r,i,o,u,s,"throw",t)}u(void 0)})}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/publish-popup").then(n.bind(null,"f7d3"))},p=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"09fe"))},h=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"fbdd"))},g=function(){return n.e("components/empty").then(n.bind(null,"d923"))},v={name:"",data:function(){return{roundType:[{name:"附近"},{name:"关注"},{name:"筛选",icon:"1"}],identityList:["全部","需求方","设计师","服务商"],current:0,page:1,identity:0,type:1,token:"",showReply:!1,content:"",isFocus:!1,activeId:"",showPopup:!1,text:"",id:"",status:"more",isShowRedDot:!1,user_id:""}},onLoad:function(){this.token=t.getStorageSync("token"),this._reqGetRoundList(),this.user_id=t.getStorageSync("user_id")},onShow:function(){var t=plus.nativeObj.View.getViewById("icon");t&&setTimeout(function(){t.show()},100),this._reqGetRoundMessage()},onPullDownRefresh:function(){this.page=1,this._reqGetRoundList()},onNavigationBarButtonTap:function(e){0===e.index?t.navigateTo({url:"/pages/round/subPages/publish-active/publish-active"}):t.navigateTo({url:"/pages/round/subPages/round-message/round-message"})},onReachBottom:function(){if("noMore"==this.status)return!1;this._reqGetRoundList()},computed:d({},(0,r.mapState)(["round_list","attention_round_list","round_message","showPublishPopup","user_info"]),{BASE_URL:function(){return u.BASE_URL},roundImgList:function(){var t=this,e=this.round_list;return this.round_list.forEach(function(e,n){var i=[];""==e.images||" "==e.images?i=[]:e.images.includes(",")?e.images.split(",").forEach(function(t,e){i.push(t)}):i.push(e.images),t.$set(e,"imagesList",i)}),e},AttentionRoundImgList:function(){var t=this,e=this.attention_round_list;return this.attention_round_list.forEach(function(e,n){var i=[];e.images.includes(",")?e.images.split(",").forEach(function(t,e){i.push(t)}):i.push(e.images),t.$set(e,"imagesList",i)}),e}}),watch:{round_message:function(){this.round_message.attention>0||this.round_message.up>0||this.round_message.comment>0?this.isShowRedDot=!0:this.isShowRedDot=!1,this.setStyle(1,this.isShowRedDot)}},methods:d({},(0,r.mapActions)(["reqGetRoundList","reqGetRoundMessage","reqGetUserInfo"]),(0,r.mapMutations)(["dealPublishPopup"]),{onHideClick:function(){this.dealPublishPopup()},_reqGetRoundMessage:function(){var e=c(i.default.mark(function e(){return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.reqGetRoundMessage({token:t.getStorageSync("token")});case 1:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),setStyle:function(t,e,n){var i=getCurrentPages(),o=i[i.length-1],r=o.$getAppWebview();e?r.showTitleNViewButtonRedDot({index:t,text:n}):r.hideTitleNViewButtonRedDot({index:t})},onConfirmClick:function(){var e=c(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.transpondActive)({token:t.getStorageSync("token"),text:this.text,zid:this.id});case 2:n=e.sent,200==n.code&&(this.page=1,this.showPopup=!1,this.text="",this._reqGetRoundList());case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),onTranspondActive:function(t){console.log(t," at pages\\round\\index\\index.vue:244"),this.showPopup=!0,this.id=t},onReplyClick:function(e){t.navigateTo({url:"/pages/home/subPages/merchant-active/merchant-active"})},onGiveLikeClick:function(){var e=c(i.default.mark(function e(n,o){var r;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.giveLike)({token:t.getStorageSync("token"),mid:o});case 2:r=e.sent,200==r.code&&(this.page=1,this._reqGetRoundList(),this._reqGetRoundMessage());case 4:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),onAttentionClick:function(){var e=c(i.default.mark(function e(n){var r,s=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if((0,o.dealLogin)()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,u.addAttention)({token:t.getStorageSync("token"),tid:n});case 4:r=e.sent,200==r.code&&(t.showToast({title:"关注成功"}),setTimeout(function(){s.page=1,s._reqGetRoundList(),s._reqGetRoundMessage()},1500));case 6:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onCancelAttention:function(){var e=c(i.default.mark(function e(n){var r,s=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if((0,o.dealLogin)()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,u.cancelAttention)({token:t.getStorageSync("token"),tid:n.uid});case 4:r=e.sent,200==r.code&&(t.showToast({title:"取消关注"}),setTimeout(function(){s.page=1,s._reqGetRoundList(),s._reqGetRoundMessage()},1500));case 6:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onDeleteClick:function(){var e=c(i.default.mark(function e(n){var o;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:o=this,t.showModal({content:"确定要删除此动态吗？",success:function(){var e=c(i.default.mark(function e(r){var s;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r.confirm){e.next=5;break}return e.next=3,(0,u.delActive)({token:t.getStorageSync("token"),rid:n.id});case 3:s=e.sent,200==s.code&&(o.page=1,o._reqGetRoundList(),o._reqGetRoundMessage());case 5:case"end":return e.stop()}},e,this)}));function r(t){return e.apply(this,arguments)}return r}()});case 2:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),_reqGetRoundList:function(){this.status="loading",this.reqGetRoundList({page:this.page,identity:this.identity,type:this.type,token:this.token,callBack1:this.addPage,callBack2:this.changeStatus}),t.stopPullDownRefresh()},addPage:function(){this.page++},changeStatus:function(t){console.log(t," at pages\\round\\index\\index.vue:334"),this.status=t},_reqGetMyAttentionRoundList:function(){this.reqGetMyAttentionRoundList({token:t.getStorageSync("token"),page:1})},onChoseType:function(e){this.page=1;var n=this;if(2!==e){if(0==e&&(n.type=1,n.current=0,n._reqGetRoundList()),1==e){if(!(0,o.dealLogin)())return;this.token=t.getStorageSync("token"),n.current=1,n.type=2,n._reqGetRoundList()}}else t.showActionSheet({itemList:n.identityList,success:function(t){n.identity=t.tapIndex,n._reqGetRoundList()}})},onGoToActiveDetail:function(e){t.navigateTo({url:"/pages/home/subPages/merchant-active/merchant-active?id="+e})},togglePopup:function(){this.showPopup=!1}}),components:{empty:g,uniPopup:p,uniLoadMore:h,publishPopup:l}};e.default=v}).call(this,n("6e42")["default"])}},[["e6a9","common/runtime","common/vendor"]]]);