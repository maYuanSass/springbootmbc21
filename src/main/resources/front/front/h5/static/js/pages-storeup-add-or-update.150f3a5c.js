(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-storeup-add-or-update"],{"0c6f":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-754da734]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"144f":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var a=n(r("3b8d")),i=n(r("e2b1")),o=n(r("064f")),u=n(r("bd56")),p={data:function(){return{cross:"",ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:"",type:"",inteltype:"",remark:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1,type:!1,inteltype:!1,remark:!1}}},components:{wPicker:i.default,xiaEditor:o.default,multipleSelect:u.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=53;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 17:if((e.t1=e.t0()).done){e.next=53;break}if(i=e.t1.value,"userid"!=i){e.next=23;break}return this.ruleForm.userid=a[i],this.ro.userid=!0,e.abrupt("continue",17);case 23:if("refid"!=i){e.next=27;break}return this.ruleForm.refid=a[i],this.ro.refid=!0,e.abrupt("continue",17);case 27:if("tablename"!=i){e.next=31;break}return this.ruleForm.tablename=a[i],this.ro.tablename=!0,e.abrupt("continue",17);case 31:if("name"!=i){e.next=35;break}return this.ruleForm.name=a[i],this.ro.name=!0,e.abrupt("continue",17);case 35:if("picture"!=i){e.next=39;break}return this.ruleForm.picture=a[i].split(",")[0],this.ro.picture=!0,e.abrupt("continue",17);case 39:if("type"!=i){e.next=43;break}return this.ruleForm.type=a[i],this.ro.type=!0,e.abrupt("continue",17);case 43:if("inteltype"!=i){e.next=47;break}return this.ruleForm.inteltype=a[i],this.ro.inteltype=!0,e.abrupt("continue",17);case 47:if("remark"!=i){e.next=51;break}return this.ruleForm.remark=a[i],this.ro.remark=!0,e.abrupt("continue",17);case 51:e.next=17;break;case 53:this.styleChange(),this.$forceUpdate();case 55:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,r,n,a,i,o,u,p,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.name){e.next=6;break}return this.$utils.msg("名称不能为空"),e.abrupt("return");case 6:if(this.ruleForm.picture){e.next=9;break}return this.$utils.msg("图片不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(i=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==i){e.next=25;break}if(t||(t=uni.getStorageSync("crossObj")),i.startsWith("[")){e.next=21;break}for(u in t)u==i&&(t[u]=o);return p=uni.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(p),t);case 19:e.next=25;break;case 21:r=Number(uni.getStorageSync("userid")),n=t["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 25:if(!n||!r){e.next=47;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,s={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=31,this.$api.list("storeup",s);case 31:if(c=e.sent,!(c.data.total>=a)){e.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("storeup",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("storeup",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("storeup",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("storeup",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=p},"55fd":function(e,t,r){var n=r("0c6f");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("3da2b3b0",n,!0,{sourceMap:!1,shadowMode:!1})},"8c20":function(e,t,r){"use strict";var n=r("55fd"),a=r.n(n);a.a},c3d0:function(e,t,r){"use strict";r.r(t);var n=r("144f"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},d26a:function(e,t,r){"use strict";r.r(t);var n=r("e0c4"),a=r("c3d0");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("8c20");var o,u=r("f0c5"),p=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"754da734",null,!1,n["a"],o);t["default"]=p.exports},e0c4:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"160rpx 0 160rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221223/869602be22f342bf8136d5a9f62af2f7.gif) no-repeat right top,url(http://codegen.caihongy.cn/20221223/a3dca8908c4c40b68f285ba0a3226a99.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/5100c3e4960949eeaacbc47dc102c484.png) no-repeat left bottom / 100% auto",borderWidth:"2rpx 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("表名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.tablename,placeholder:"表名"},model:{value:e.ruleForm.tablename,callback:function(t){e.$set(e.ruleForm,"tablename",t)},expression:"ruleForm.tablename"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("名称")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.name,placeholder:"名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pictureTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片")]),e.ruleForm.picture?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.type,placeholder:"类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("推荐类型")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.inteltype,placeholder:"推荐类型"},model:{value:e.ruleForm.inteltype,callback:function(t){e.$set(e.ruleForm,"inteltype",t)},expression:"ruleForm.inteltype"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("备注")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.remark,placeholder:"备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"2rpx 4rpx 8rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#1bd0a9",color:"#111",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(27,208,169,1) 100%)",borderWidth:"2rpx 8rpx 2rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},i=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}))}}]);