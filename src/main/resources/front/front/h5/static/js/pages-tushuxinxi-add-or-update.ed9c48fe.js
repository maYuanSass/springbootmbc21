(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tushuxinxi-add-or-update"],{"0ee4":function(e,t,r){"use strict";var i=r("9636"),n=r.n(i);n.a},4488:function(e,t,r){"use strict";r.r(t);var i=r("a5cb"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},"60ca":function(e,t,r){"use strict";var i={"xia-editor":r("064f").default,"w-picker":r("e2b1").default},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"160rpx 0 160rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221223/869602be22f342bf8136d5a9f62af2f7.gif) no-repeat right top,url(http://codegen.caihongy.cn/20221223/a3dca8908c4c40b68f285ba0a3226a99.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/5100c3e4960949eeaacbc47dc102c484.png) no-repeat left bottom / 100% auto",borderWidth:"2rpx 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图书编号")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.tushubianhao,placeholder:"图书编号"},model:{value:e.ruleForm.tushubianhao,callback:function(t){e.$set(e.ruleForm,"tushubianhao",t)},expression:"ruleForm.tushubianhao"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图书名称")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.tushumingcheng,placeholder:"图书名称"},model:{value:e.ruleForm.tushumingcheng,callback:function(t){e.$set(e.ruleForm,"tushumingcheng",t)},expression:"ruleForm.tushumingcheng"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.fengmianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("封面")]),e.ruleForm.fengmian?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图书分类")]),r("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.tushufenleiIndex,range:e.tushufenleiOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.tushufenleiChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.ruleForm.tushufenlei?e.ruleForm.tushufenlei:"请选择图书分类"))])],1)],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("数量")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shuliang,placeholder:"数量"},model:{value:e.ruleForm.shuliang,callback:function(t){e.$set(e.ruleForm,"shuliang",t)},expression:"ruleForm.shuliang"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("每日费用")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.meirifeiyong,placeholder:"每日费用"},model:{value:e.ruleForm.meirifeiyong,callback:function(t){e.$set(e.ruleForm,"meirifeiyong",t)},expression:"ruleForm.meirifeiyong"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("押金")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yajin,placeholder:"押金"},model:{value:e.ruleForm.yajin,callback:function(t){e.$set(e.ruleForm,"yajin",t)},expression:"ruleForm.yajin"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("作者")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.zuozhe,placeholder:"作者"},model:{value:e.ruleForm.zuozhe,callback:function(t){e.$set(e.ruleForm,"zuozhe",t)},expression:"ruleForm.zuozhe"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("出版社")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.chubanshe,placeholder:"出版社"},model:{value:e.ruleForm.chubanshe,callback:function(t){e.$set(e.ruleForm,"chubanshe",t)},expression:"ruleForm.chubanshe"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("出借账号")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.chujiezhanghao,placeholder:"出借账号"},model:{value:e.ruleForm.chujiezhanghao,callback:function(t){e.$set(e.ruleForm,"chujiezhanghao",t)},expression:"ruleForm.chujiezhanghao"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("出借姓名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.chujiexingming,placeholder:"出借姓名"},model:{value:e.ruleForm.chujiexingming,callback:function(t){e.$set(e.ruleForm,"chujiexingming",t)},expression:"ruleForm.chujiexingming"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("简介")]),r("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"40rpx 40rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"url(http://codegen.caihongy.cn/20221223/869602be22f342bf8136d5a9f62af2f7.gif) no-repeat right top,rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"简介"},model:{value:e.ruleForm.jianjie,callback:function(t){e.$set(e.ruleForm,"jianjie",t)},expression:"ruleForm.jianjie"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 32rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#111",fontWeight:"500"}},[e._v("详细介绍")]),r("xia-editor",{ref:"editor",style:{minHeight:"300rpx",padding:"24rpx 32rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#e9be70",borderRadius:"0px",background:"url(http://codegen.caihongy.cn/20221223/869602be22f342bf8136d5a9f62af2f7.gif) no-repeat right top,url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",borderWidth:"0px",width:"100%",borderStyle:"solid",height:"auto"},attrs:{placeholder:"详细介绍"},on:{editorChange:function(t){arguments[0]=t=e.$handleEvent(t),e.xiangxijieshaoChange.apply(void 0,arguments)}},model:{value:e.ruleForm.xiangxijieshao,callback:function(t){e.$set(e.ruleForm,"xiangxijieshao",t)},expression:"ruleForm.xiangxijieshao"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"2rpx 4rpx 8rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#1bd0a9",color:"#111",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(27,208,169,1) 100%)",borderWidth:"2rpx 8rpx 2rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))},7110:function(e,t,r){"use strict";r.r(t);var i=r("60ca"),n=r("4488");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("0ee4");var o,u=r("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"2e6b131e",null,!1,i["a"],o);t["default"]=s.exports},9636:function(e,t,r){var i=r("cb7a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("127cf8d3",i,!0,{sourceMap:!1,shadowMode:!1})},a5cb:function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o=i(r("064f")),u=i(r("bd56")),s={data:function(){return{cross:"",ruleForm:{tushubianhao:"",tushumingcheng:"",fengmian:"",tushufenlei:"",shuliang:"",meirifeiyong:"",yajin:"",zuozhe:"",chubanshe:"",jianjie:"",xiangxijieshao:"",chujiezhanghao:"",chujiexingming:""},tushufenleiOptions:[],tushufenleiIndex:0,user:{},ro:{tushubianhao:!1,tushumingcheng:!1,fengmian:!1,tushufenlei:!1,shuliang:!1,meirifeiyong:!1,yajin:!1,zuozhe:!1,chubanshe:!1,jianjie:!1,xiangxijieshao:!1,chujiezhanghao:!1,chujiexingming:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:u.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return i=e.sent,this.user=i.data,this.ruleForm.chujiezhanghao=this.user.chujiezhanghao,this.ro.chujiezhanghao=!0,this.ruleForm.chujiexingming=this.user.chujiexingming,this.ro.chujiexingming=!0,e.next=11,this.$api.option("tushufenlei","tushufenlei",{});case 11:if(i=e.sent,this.tushufenleiOptions=i.data,this.tushufenleiOptions.unshift("请选择图书分类"),this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=22;break}return this.ruleForm.id=t.id,e.next=20,this.$api.info("tushuxinxi",this.ruleForm.id);case 20:i=e.sent,this.ruleForm=i.data;case 22:if(this.cross=t.cross,!t.cross){e.next=98;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 26:if((e.t1=e.t0()).done){e.next=98;break}if(a=e.t1.value,"tushubianhao"!=a){e.next=32;break}return this.ruleForm.tushubianhao=n[a],this.ro.tushubianhao=!0,e.abrupt("continue",26);case 32:if("tushumingcheng"!=a){e.next=36;break}return this.ruleForm.tushumingcheng=n[a],this.ro.tushumingcheng=!0,e.abrupt("continue",26);case 36:if("fengmian"!=a){e.next=40;break}return this.ruleForm.fengmian=n[a].split(",")[0],this.ro.fengmian=!0,e.abrupt("continue",26);case 40:if("tushufenlei"!=a){e.next=44;break}return this.ruleForm.tushufenlei=n[a],this.ro.tushufenlei=!0,e.abrupt("continue",26);case 44:if("shuliang"!=a){e.next=48;break}return this.ruleForm.shuliang=n[a],this.ro.shuliang=!0,e.abrupt("continue",26);case 48:if("meirifeiyong"!=a){e.next=52;break}return this.ruleForm.meirifeiyong=n[a],this.ro.meirifeiyong=!0,e.abrupt("continue",26);case 52:if("yajin"!=a){e.next=56;break}return this.ruleForm.yajin=n[a],this.ro.yajin=!0,e.abrupt("continue",26);case 56:if("zuozhe"!=a){e.next=60;break}return this.ruleForm.zuozhe=n[a],this.ro.zuozhe=!0,e.abrupt("continue",26);case 60:if("chubanshe"!=a){e.next=64;break}return this.ruleForm.chubanshe=n[a],this.ro.chubanshe=!0,e.abrupt("continue",26);case 64:if("jianjie"!=a){e.next=68;break}return this.ruleForm.jianjie=n[a],this.ro.jianjie=!0,e.abrupt("continue",26);case 68:if("xiangxijieshao"!=a){e.next=72;break}return this.ruleForm.xiangxijieshao=n[a],this.ro.xiangxijieshao=!0,e.abrupt("continue",26);case 72:if("chujiezhanghao"!=a){e.next=76;break}return this.ruleForm.chujiezhanghao=n[a],this.ro.chujiezhanghao=!0,e.abrupt("continue",26);case 76:if("chujiexingming"!=a){e.next=80;break}return this.ruleForm.chujiexingming=n[a],this.ro.chujiexingming=!0,e.abrupt("continue",26);case 80:if("thumbsupnum"!=a){e.next=84;break}return this.ruleForm.thumbsupnum=n[a],this.ro.thumbsupnum=!0,e.abrupt("continue",26);case 84:if("crazilynum"!=a){e.next=88;break}return this.ruleForm.crazilynum=n[a],this.ro.crazilynum=!0,e.abrupt("continue",26);case 88:if("clicktime"!=a){e.next=92;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,e.abrupt("continue",26);case 92:if("clicknum"!=a){e.next=96;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",26);case 96:e.next=26;break;case 98:this.styleChange(),this.$forceUpdate();case 100:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{xiangxijieshaoChange:function(e){this.ruleForm.xiangxijieshao=e},styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},tushufenleiChange:function(e){this.tushufenleiIndex=e.target.value,this.ruleForm.tushufenlei=this.tushufenleiOptions[this.tushufenleiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i,n,a,o,u,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.tushumingcheng){e.next=3;break}return this.$utils.msg("图书名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.fengmian){e.next=6;break}return this.$utils.msg("封面不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){e.next=9;break}return this.$utils.msg("数量应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.meirifeiyong||this.$validate.isIntNumer(this.ruleForm.meirifeiyong)){e.next=12;break}return this.$utils.msg("每日费用应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.yajin||this.$validate.isIntNumer(this.ruleForm.yajin)){e.next=15;break}return this.$utils.msg("押金应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=18;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 18:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=21;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 21:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=24;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 24:if(!this.cross){e.next=40;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=40;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=36;break}for(u in t)u==a&&(t[u]=o);return s=uni.getStorageSync("crossTable"),e.next=34,this.$api.update("".concat(s),t);case 34:e.next=40;break;case 36:r=Number(uni.getStorageSync("userid")),i=t["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 40:if(!i||!r){e.next=62;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,c={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=46,this.$api.list("tushuxinxi",c);case 46:if(l=e.sent,!(l.data.total>=n)){e.next=52;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("tushuxinxi",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("tushuxinxi",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:e.next=70;break;case 62:if(!this.ruleForm.id){e.next=67;break}return e.next=65,this.$api.update("tushuxinxi",this.ruleForm);case 65:e.next=69;break;case 67:return e.next=69,this.$api.add("tushuxinxi",this.ruleForm);case 69:this.$utils.msgBack("提交成功");case 70:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s},cb7a:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2e6b131e]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t}}]);