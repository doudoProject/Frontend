(function(t){function e(e){for(var n,i,s=e[0],c=e[1],d=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0d55":function(t,e,o){t.exports=o.p+"img/logo_doudo_rem.e0fe7858.png"},"22de":function(t,e,o){"use strict";o("8319")},"4d48":function(t,e,o){"use strict";o("e881")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=(o("d3b7"),o("bc3a")),a=o.n(r),i={},s=a.a.create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},n["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("router-view"),o("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[o("v-btn",t._b({attrs:{color:"primary",text:""},on:{click:function(e){return t.$store.commit("closeSnackbar")}}},"v-btn",n,!1),[t._v(" 닫기 ")])]}}]),model:{value:t.$store.getters.snackbar.show,callback:function(e){t.$set(t.$store.getters.snackbar,"show",e)},expression:"$store.getters.snackbar.show"}},[t._v(" "+t._s(t.$store.getters.snackbar.message)+" ")])],1)},d=[],l={name:"App",sockets:{reconnect:function(){this.$store.getters.user.accessToken&&this.$socket.emit("userconnect",this.$store.getters.user)}},data:function(){return{}}},u=l,f=o("2877"),p=o("6544"),h=o.n(p),m=o("7496"),v=o("8336"),g=o("2db4"),b=Object(f["a"])(u,c,d,!1,null,null,null),k=b.exports;h()(b,{VApp:m["a"],VBtn:v["a"],VSnackbar:g["a"]});var _=o("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var y=o("8c4f"),T=(o("a4d3"),o("e01a"),o("c740"),o("a434"),o("2f62")),C=JSON.parse(localStorage.getItem("user")),x=C||{accessToken:null,info:null};function w(t){localStorage.setItem("user",JSON.stringify(t.user))}function V(){localStorage.removeItem("user")}n["a"].use(T["a"]);var $="https://api.doudo.kr/v1",S=(a.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),new T["a"].Store({state:{user:x,snackbar:{show:!1,message:""}},getters:{user:function(t){return t.user},todo:function(t){return t.user.info.couple.todo},chat:function(t){return t.user.info.couple.chat},snackbar:function(t){return t.snackbar}},mutations:{showSnackbar:function(t,e){t.snackbar.show=!0,t.snackbar.message=e.message},closeSnackbar:function(t){t.snackbar.show=!1},setUserInfo:function(t,e){t.user.info=e,w(t)},setTodo:function(t,e){t.user.info.couple&&(t.user.info.couple.todo=e)},addTodo:function(t,e){t.user.info.couple&&t.user.info.couple.todo.push(e)},deleteTodo:function(t,e){if(t.user.info.couple){var o=t.user.info.couple.todo.findIndex((function(t){return t._id===e.id}));o>-1&&t.user.info.couple.todo.splice(o,1)}},modifyTodo:function(t,e){if(t.user.info.couple){var o=t.user.info.couple.todo.findIndex((function(t){return t._id===e._id}));t.user.info.couple.todo[o]._id=e._id,t.user.info.couple.todo[o].description=e.description,t.user.info.couple.todo[o].done=e.done,t.user.info.couple.todo[o].duedate=e.duedate}},setChat:function(t,e){t.user.info.couple&&(t.user.info.couple.chat=e)},addChat:function(t,e){t.user.info.couple&&t.user.info.couple.chat.push(e)},setUserAccessToken:function(t,e){t.user.accessToken=e,this.commit("setAuthorization")},setAuthorization:function(t){a.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.user.accessToken)},unsetUser:function(t){V(),t.user.info=null,t.user.accessToken=null},SOCKET_todoadded:function(t,e){this.commit("addTodo",e)},SOCKET_tododeleted:function(t,e){this.commit("deleteTodo",e)},SOCKET_todomodified:function(t,e){this.commit("modifyTodo",e)},SOCKET_chatadded:function(t,e){this.commit("addChat",e)}},actions:{signin:function(t,e){var o=this,n=t.commit;return a()({method:"post",url:"".concat($,"/auth/signin"),data:{userid:e.userid,password:e.password}}).then((function(t){return n("setUserAccessToken",t.data.accessToken),o.dispatch("fetchUser")}))},signout:function(t){var e=t.commit;e("unsetUser"),Ht.push("/signin")},fetchUser:function(t){var e=t.commit;return a()({method:"get",url:"".concat($,"/user")}).then((function(t){e("setUserInfo",t.data)}))},fetchTodo:function(t){var e=t.commit;return a()({method:"get",url:"".concat($,"/todo")}).then((function(t){e("setTodo",t.data)}))},addTodo:function(t,e){var o=t.commit;return a()({method:"post",url:"".concat($,"/todo"),data:e}).then((function(t){o("addTodo",t.data.affected),n["a"].prototype.$socket.emit("addtodo",t.data.affected)}))},deleteTodo:function(t,e){var o=t.commit;return a()({method:"delete",url:"".concat($,"/todo"),data:{id:e.id}}).then((function(){o("deleteTodo",e),n["a"].prototype.$socket.emit("deletetodo",e)}))},modifyTodo:function(t,e){var o=t.commit;return a()({method:"put",url:"".concat($,"/todo"),data:e}).then((function(){o("modifyTodo",e),n["a"].prototype.$socket.emit("modifytodo",e)}))},fetchChat:function(t,e){var o=t.commit;return a()({method:"get",url:"".concat($,"/chat/").concat(e.datetime)}).then((function(t){o("setChat",t.data.chats)}))},addChat:function(t,e){var o=t.commit;return a()({method:"post",url:"".concat($,"/chat"),data:e}).then((function(t){o("addChat",t.data.affected),n["a"].prototype.$socket.emit("chat",t.data.affected)}))}},modules:{}})),O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("v-app-bar",{attrs:{dark:"",color:"primary"}},[o("v-toolbar-title",[t._v("두두 베타")]),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.refreshTodo()}}},[o("v-icon",[t._v("mdi-refresh")])],1),o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",[o("v-list-item",{on:{click:function(e){return t.signout()}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-power-plug-off")])],1),o("v-list-item-content",[t._v(" Sign out ")])],1),o("v-list-item",{on:{click:function(e){return t.refreshUser()}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-refresh")])],1),o("v-list-item-content",[t._v(" Refresh UserData ")])],1),o("v-list-item",{on:{click:function(e){return t.refreshTodo()}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-refresh")])],1),o("v-list-item-content",[t._v(" Refresh Todo ")])],1)],1)],1)],1),o("v-main",[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1),o("Chat",{attrs:{user:t.$store.getters.user.info}}),o("v-bottom-navigation",{attrs:{color:"primary",grow:"",app:""}},[o("v-btn",{attrs:{to:"home"}},[o("v-icon",[t._v("mdi-home")])],1),o("v-btn",{attrs:{to:"todo"}},[o("v-icon",[t._v("mdi-format-list-bulleted-square")])],1),o("v-btn",{attrs:{to:"calendar"}},[o("v-icon",[t._v("mdi-calendar")])],1)],1)],1)},M=[],I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g({staticClass:"fab-chat",attrs:{fab:"",fixed:"",right:"",bottom:"","v-bind":r,color:"primary"}},n),[o("v-icon",[t._v("mdi-chat")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-app-bar",{attrs:{fixed:"",dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),o("v-app-bar-title",[t._v(t._s(t.user.couple.name)+" 채팅")])],1),o("v-container",{staticClass:"chatHolder",staticStyle:{"margin-bottom":"60px","margin-top":"56px"}},[o("v-row",{staticClass:"pb-2"},[t._l(t.$store.getters.chat,(function(e,n){return o("ChatMessage",{key:n,attrs:{chat:e,self:e.sender===t.user.userid}})})),o("div",{ref:"end"})],2),o("v-footer",{attrs:{fixed:""}},[o("v-text-field",{attrs:{label:"type message",solo:"","hide-details":""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addChat(t.newChatMessage)}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[o("div",{staticClass:"v-input__icon",staticStyle:{width:"auto"}},[o("v-btn",{attrs:{color:"primary",fab:"",small:""},on:{click:function(e){return t.addChat(t.newChatMessage)}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-send")])],1)],1)]},proxy:!0}]),model:{value:t.newChatMessage,callback:function(e){t.newChatMessage=e},expression:"newChatMessage"}})],1)],1)],1)],1)},j=[],B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12"}},[o("v-alert",{staticClass:"mb-0",class:t.float+" "+t.corner+" "+t.textColor+" rounded-tl-xl rounded-tr-xl",attrs:{color:t.color}},[t._v(t._s(t.chat.message)),o("v-icon",{class:t.textColor},[t._v("mdi-check"+t._s(t.chat.read?"-all":""))])],1)],1)},E=[],D={props:["chat","self"],name:"ChatMessage",computed:{float:function(){return!1===this.self?"float-left":"float-right"},textColor:function(){return!1===this.self?"":" white--text"},color:function(){return!1===this.self?"secondary":"primary dark"},corner:function(){return!1===this.self?"rounded-br-xl":"rounded-bl-xl"}}},P=D,A=o("0798"),U=o("62ad"),F=o("132d"),N=Object(f["a"])(P,B,E,!1,null,null,null),J=N.exports;h()(N,{VAlert:A["a"],VCol:U["a"],VIcon:F["a"]});var K={name:"Chat",props:["user"],components:{ChatMessage:J},data:function(){return{dialog:!1,newChatMessage:""}},watch:{dialog:function(){this.dialog&&this.fetchChat()}},updated:function(){this.goToBottom()},methods:{goToBottom:function(){try{this.$refs.end.scrollIntoView()}catch(t){return}},fetchChat:function(){var t=this,e=new Date;e.setDate(e.getDate()-7),console.log(e.toDateString()),this.$store.dispatch("fetchChat",{datetime:e.getTime()}).then((function(){t.goToBottom()}))},addChat:function(t){if(!t)return this.$store.commit("showSnackbar",{message:"메세지를 입력해주세요"});this.newChatMessage="",this.$store.dispatch("addChat",{message:t}).then((function(){}))}}},z=K,L=o("40dc"),q=o("bb78"),R=o("b0af"),H=o("a523"),Y=o("169a"),G=o("553a"),Q=o("0fd9"),W=o("8654"),X=Object(f["a"])(z,I,j,!1,null,null,null),Z=X.exports;h()(X,{VAppBar:L["a"],VAppBarTitle:q["a"],VBtn:v["a"],VCard:R["a"],VContainer:H["a"],VDialog:Y["a"],VFooter:G["a"],VIcon:F["a"],VRow:Q["a"],VTextField:W["a"]});var tt={name:"Main",components:{Chat:Z},methods:{signout:function(){this.$store.dispatch("signout")},refreshUser:function(){this.$store.dispatch("fetchUser")},refreshTodo:function(){this.$store.dispatch("fetchTodo")}},data:function(){return{drawer:!1,drawerMenu:[{icon:"mdi-home",name:"홈",to:"/home"},{icon:"mdi-format-list-bulleted-square",name:"Todo",to:"/todo"},{icon:"mdi-calendar",name:"이벤트",to:"/calendar"}]}}},et=tt,ot=(o("22de"),o("b81c")),nt=o("8860"),rt=o("da13"),at=o("5d23"),it=o("34c3"),st=o("f6c4"),ct=o("e449"),dt=o("2fa4"),lt=o("2a7f"),ut=Object(f["a"])(et,O,M,!1,null,null,null),ft=ut.exports;h()(ut,{VAppBar:L["a"],VBottomNavigation:ot["a"],VBtn:v["a"],VIcon:F["a"],VList:nt["a"],VListItem:rt["a"],VListItemContent:at["a"],VListItemIcon:it["a"],VMain:st["a"],VMenu:ct["a"],VSpacer:dt["a"],VToolbarTitle:lt["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:"",persistent:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-container",{attrs:{"fill-height":""}},[n("v-img",{attrs:{src:o("0d55")}}),n("v-card-text",{staticClass:"px-6 mb-10",attrs:{align:"center"}},[n("v-text-field",{staticClass:"mb-2",attrs:{"hide-details":"",dense:"",outlined:"","prepend-inner-icon":"mdi-account"},model:{value:t.signInData.userid,callback:function(e){t.$set(t.signInData,"userid",e)},expression:"signInData.userid"}}),n("v-text-field",{staticClass:"mb-2",attrs:{type:"password","hide-details":"",dense:"",outlined:"","prepend-inner-icon":"mdi-key"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin()}},model:{value:t.signInData.password,callback:function(e){t.$set(t.signInData,"password",e)},expression:"signInData.password"}}),n("v-btn",{staticClass:"mb-2",attrs:{block:"",color:"primary"},on:{click:function(e){return t.signin()}}},[t._v(" 로그인 ")]),n("v-btn",{attrs:{block:""},on:{click:function(e){return t.signin()}}},[t._v(" 회원가입 ")])],1)],1)],1)},ht=[],mt={name:"Signin",components:{},data:function(){return{dialog:!0,signInData:{userid:null,password:null}}},methods:{signin:function(){var t=this;this.$store.dispatch("signin",this.signInData).then((function(){t.$router.push("/")})).catch((function(e){t.$store.commit("showSnackbar",{message:e})}))}}},vt=mt,gt=(o("7a9b"),o("99d9")),bt=o("adda"),kt=Object(f["a"])(vt,pt,ht,!1,null,null,null),_t=kt.exports;h()(kt,{VBtn:v["a"],VCardText:gt["b"],VContainer:H["a"],VDialog:Y["a"],VImg:bt["a"],VTextField:W["a"]});var yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"mb-1"},[o("v-col",{attrs:{cols:"12"}},[o("v-card",[o("v-card-title",[o("v-icon",{attrs:{left:"",color:"yellow lighten-1"}},[t._v("mdi-hand-right")]),t._v(" 환영해요 ")],1),o("v-card-text",{staticClass:"text-center text-h6"},[o("a",[t._v(t._s(this.$store.getters.user.info.name))]),t._v(" 님 ")])],1)],1),o("v-col",{attrs:{cols:"12"}},[this.$store.getters.user.info.couple?o("v-card",[o("v-card-title",[o("v-icon",{attrs:{left:"",color:"red"}},[t._v("mdi-heart")]),o("b",{staticClass:"mr-1"},[t._v(t._s(this.$store.getters.user.info.couple.name))]),t._v(" 커플 ")],1),o("v-card-text",t._l(this.$store.getters.user.info.couple.member,(function(e,n){return o("v-chip",{key:n,staticClass:"ma-2",attrs:{color:"primary",label:""}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-account-circle ")]),t._v(" "+t._s(e.name)+" ")],1)})),1)],1):o("v-card",[o("v-card-title",[o("v-icon",{attrs:{left:""}},[t._v("mdi-heart-off")]),t._v(" 아직 커플이 아니시네요 ")],1),o("v-card-text",[t._v(" 커플을 만들고 상대를 초대해보세요 ")]),o("v-card-actions",{attrs:{right:""}},[o("v-btn",{attrs:{text:"",color:"primary"}},[t._v("생성하기")])],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-card",[o("v-card-title",[o("v-icon",{attrs:{left:"",color:"green"}},[t._v("mdi-flash")]),t._v(" 바로가기 ")],1),o("v-card-text",[o("v-btn",{attrs:{block:"",color:"primary"}},[t._v(" 할일 추가하기 ")]),o("v-btn",{staticClass:"mt-1",attrs:{block:""}},[t._v(" 이벤트 추가하기 ")])],1)],1)],1)],1)],1)},Tt=[],Ct={name:"Home"},xt=Ct,wt=(o("4d48"),o("cc20")),Vt=Object(f["a"])(xt,yt,Tt,!1,null,"61bc5952",null),$t=Vt.exports;h()(Vt,{VBtn:v["a"],VCard:R["a"],VCardActions:gt["a"],VCardText:gt["b"],VCardTitle:gt["c"],VChip:wt["a"],VCol:U["a"],VContainer:H["a"],VIcon:F["a"],VRow:Q["a"]});var St=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Todo"},[o("v-container",{staticClass:"text-center"},[o("v-text-field",{staticClass:"mb-2",attrs:{"hide-details":"",placeholder:"할일을 적어봐요",solo:"",clearable:"","append-outer-icon":"mdi-plus-circle"},on:{"click:append-outer":function(e){return t.addTodo()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},model:{value:t.newTodo.description,callback:function(e){t.$set(t.newTodo,"description",e)},expression:"newTodo.description"}}),o("swipe-list",{staticClass:"card",attrs:{items:t.$store.getters.user.info.couple.todo,"item-key":"_id",disabled:null!==t.editMode},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,r=e.index;return[o("v-card",{staticClass:"mb-2"},[o("v-card-text",[t.editMode!==r?o("v-checkbox",{staticClass:"mt-0",attrs:{label:n.description,ripple:!1,"hide-details":""},on:{change:function(e){return t.modifyTodo(n)}},model:{value:n.done,callback:function(e){t.$set(n,"done",e)},expression:"item.done"}}):t._e(),t.editMode===r?o("v-text-field",{staticClass:"mt-0",attrs:{"hide-details":"",solo:"","append-outer-icon":"mdi-content-save"},on:{"click:append-outer":function(e){return t.addTodo()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[o("div",{staticClass:"v-input__icon",staticStyle:{width:"auto"}},[o("v-btn",{staticClass:"mr-1",attrs:{color:"green",fab:"","x-small":""},on:{click:function(e){return t.modifyTodo(t.editingTodo)}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-content-save")])],1),o("v-btn",{attrs:{color:"red",fab:"","x-small":""},on:{click:function(e){t.editMode=null}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-close")])],1)],1)]},proxy:!0}],null,!0),model:{value:t.editingTodo.description,callback:function(e){t.$set(t.editingTodo,"description",e)},expression:"editingTodo.description"}}):t._e()],1)],1)]}},{key:"right",fn:function(e){var n=e.item,r=e.index,a=e.close;return[o("v-card",{staticClass:"mb-2",attrs:{color:"green",align:"center"}},[o("v-card-text",{staticStyle:{height:"100%",display:"inline-flex"},on:{click:function(e){t.editTodo(r),a()}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-pencil")])],1)],1),o("v-card",{staticClass:"mb-2",attrs:{color:"red",align:"center"}},[o("v-card-text",{staticStyle:{height:"100%",display:"inline-flex"},on:{click:function(e){t.deleteTodo(n._id),a()}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-delete")])],1)],1)]}}])}),t.isTodoBusy?o("v-progress-circular",{staticClass:"mt-2",attrs:{indeterminate:"",color:"primary"}}):t._e()],1)],1)},Ot=[],Mt=o("b5ba"),It=(o("3ebf"),{name:"Todo",components:{SwipeList:Mt["a"]},data:function(){return{newTodo:{description:null,duedate:null},editingTodo:null,editMode:null,isTodoBusy:!1}},methods:{getDate:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},editTodo:function(t){this.editMode=t,this.editingTodo=JSON.parse(JSON.stringify(this.$store.getters.user.info.couple.todo[t]))},addTodo:function(){var t=this;if(!this.newTodo.description)return this.$store.commit("showSnackbar",{message:"할일을 입력해주세요!"});this.isTodoBusy=!0,this.$store.dispatch("addTodo",{description:this.newTodo.description,duedate:this.newTodo.duedate}).then((function(){t.newTodo.description=t.newTodo.duedate=null,t.isTodoBusy=!1}))},deleteTodo:function(t){var e=this;this.isTodoBusy=!0,this.$store.dispatch("deleteTodo",{id:t}).then((function(){e.isTodoBusy=!1}))},modifyTodo:function(t){var e=this;this.isTodoBusy=!0,this.$store.dispatch("modifyTodo",t).then((function(){e.isTodoBusy=!1,e.editMode=null}))}}}),jt=It,Bt=o("ac7c"),Et=o("490a"),Dt=Object(f["a"])(jt,St,Ot,!1,null,null,null),Pt=Dt.exports;h()(Dt,{VBtn:v["a"],VCard:R["a"],VCardText:gt["b"],VCheckbox:Bt["a"],VContainer:H["a"],VIcon:F["a"],VProgressCircular:Et["a"],VTextField:W["a"]});var At=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Calendar"},[o("v-container",[o("v-date-picker",{attrs:{"full-width":""},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)},Ut=[],Ft={name:"Calendar",data:function(){return{picker:null}}},Nt=Ft,Jt=o("2e4b"),Kt=Object(f["a"])(Nt,At,Ut,!1,null,null,null),zt=Kt.exports;h()(Kt,{VContainer:H["a"],VDatePicker:Jt["a"]});var Lt=function(){return function(t,e,o){if(S.getters.user.accessToken)return a.a.defaults.headers.common["Authorization"]||(S.commit("setAuthorization"),S.dispatch("fetchUser").then((function(){o()}))),n["a"].prototype.$socket.emit("userconnect",S.getters.user),o();o("signin")}};n["a"].use(y["a"]);var qt=[{path:"",name:"Main",beforeEnter:Lt(),component:ft,children:[{path:"",redirect:"home"},{name:"Home",path:"home",component:$t},{name:"Todo",path:"todo",component:Pt},{name:"Calendar",path:"calendar",component:zt}]},{path:"/signin",name:"Signin",component:_t}],Rt=new y["a"]({mode:"history",base:"/",routes:qt}),Ht=Rt,Yt=o("f309");n["a"].use(Yt["a"]);var Gt=new Yt["a"]({theme:{themes:{light:{primary:"#FF5252",secondary:"#E0E0E0"}}}}),Qt=o("5132"),Wt=o.n(Qt);n["a"].use(new Wt.a({debug:!0,connection:"https://api.doudo.kr",vuex:{store:S,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),n["a"].config.productionTip=!1,new n["a"]({router:Ht,store:S,vuetify:Gt,render:function(t){return t(k)}}).$mount("#app")},6860:function(t,e,o){},"7a9b":function(t,e,o){"use strict";o("6860")},8319:function(t,e,o){},e881:function(t,e,o){}});
//# sourceMappingURL=app.f216c59a.js.map