(this["webpackJsonpreact-ts-github"]=this["webpackJsonpreact-ts-github"]||[]).push([[0],{117:function(e,t,n){e.exports=n(132)},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n(22),i=n(49),s=n(34),u=n(189),l=n(44),p=n(41),d=n.n(p),m=n(88),b=n.n(m),g=n(92),f=n.n(g),h=n(93),O=n.n(h),j=n(94),x=n.n(j),v={to:"/code",text:"code",Icon:b.a},E={to:"/home",text:"home",Icon:f.a},w={to:"/gitHub",text:"gitHub",Icon:O.a},k={to:"/settings",text:"settings",Icon:x.a},y=[E,w,v],S=[k],A=n(15),I=n(133),C=n(5),N=n(13),T=n.n(N),R=n(46),_={client_id:"735720181512-qi8stm50pen4oi0avu98i36chb8bscfa.apps.googleusercontent.com"},L={appId:"634508063768806",cookie:!0,xfbml:!0,version:"v3.2"},B=function(e,t){return new Promise((function(n,a){if(document.getElementById(e))return n(!0);var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("id",e),r.setAttribute("src",t),r.addEventListener("load",n),r.addEventListener("error",(function(){return a(new Error("Error loading ".concat(e,".")))})),r.addEventListener("abort",(function(){return a(new Error("".concat(e,"  loading aborted.")))})),document.getElementsByTagName("head")[0].appendChild(r)}))},G=function(){var e=Object(R.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"googleAuth","//apis.google.com/js/client:platform.js",e.next=4,B("googleAuth","//apis.google.com/js/client:platform.js");case 4:gapi.load("auth2",(function(){gapi.auth2.getAuthInstance()||gapi.auth2.init(_)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(R.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"facebookAuth","https://connect.facebook.net/en_US/sdk.js",e.next=4,B("facebookAuth","https://connect.facebook.net/en_US/sdk.js");case 4:FB.init(L),FB.getLoginStatus((function(e){return console.log("FB:status:",e.status)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=n(18),H=n(193),P=n(28),U=n(194),W=n(98),q=n.n(W),D=n(180),$=n(71),J=n(181),M=n(99),Q=n.n(M),V=n(38),X=n(177),K=n(179),Y=n(190),Z={marginTop:15},ee=n(67);function te(){var e=Object(ee.a)(["\n  width: 50px;\n  height: 50px;\n  display: block;\n  cursor: pointer;\n  background-size: 75%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(",");\n"]);return te=function(){return e},e}var ne,ae=i.c.svg(te(),(function(e){return e.src})),re={id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,fullWidth:!0},ce=[{id:"login",name:"login",label:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430",required:!0,fullWidth:!0},re],oe=[{id:"email",name:"email",label:"\u041f\u043e\u0447\u0442\u0430",required:!0,fullWidth:!0},{id:"login",name:"login",label:"\u041b\u043e\u0433\u0438\u043d",fullWidth:!0},{id:"name",name:"name",label:"\u0418\u043c\u044f",required:!0},{id:"lastName",name:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},re,{id:"repeatPassword",name:"repeatPassword",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,fullWidth:!0}],ie={login:"",password:""},se={name:"",login:"",email:"",lastName:"",password:"",repeatPassword:""},ue={button:"\u0412\u043e\u0439\u0442\u0438!",goTo:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0438\u0440\u0432\u0430\u0442\u044c\u0441\u044f!",isHaveAccount:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? "},le={goTo:"\u0412\u043e\u0439\u0442\u0438!",button:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0438\u0440\u0432\u0430\u0442\u044c\u0441\u044f!",isHaveAccount:"\u0415\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? "};!function(e){e.logout="@@Auth/LOGOUT",e.login="@@Auth/SIGN_IN_LOGIN",e.start="@@Auth/SIGN_IN_FETCH_START",e.success="@@Auth/SIGN_IN_FETCH_SUCCESS",e.failure="@@Auth/SIGN_IN_FETCH_FAILURE",e.signInSaga="@@Auth/SIGN_IN_FETCH_SAGA",e.signUpSaga="@@Auth/SIGN_UP_FETCH_SAGA",e.googleSaga="@@Auth/GOOGLE_AUTH_SAGA"}(ne||(ne={}));var pe=n(14),de=n(75),me=function(){return{type:ne.start}},be=function(e){return{type:ne.success,payload:e}},ge=function(e){return{type:ne.failure,payload:e}},fe=function(){var e=Object(R.a)(T.a.mark((function e(){var t,n,a,r,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window,n=t.gapi,e.next=4,n.auth2.getAuthInstance().signIn();case 4:return a=e.sent,r=a.getBasicProfile(),c=a.getAuthResponse(),e.abrupt("return",{googleToken:c,googleId:r.getId(),image:r.getImageUrl(),fullName:r.getName(),email:r.getEmail()});case 10:e.prev=10,e.t0=e.catch(0),s.c.error("googleSignIn Error! ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),he="http://localhost:7777/api/auth",Oe={login:"".concat(he,"/login"),signIn:"".concat(he,"/sign_in"),signUp:"".concat(he,"/sign_up"),google:"".concat(he,"/google")},je=function(){var e=Object(R.a)(T.a.mark((function e(t,n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{credentials:"include",method:n.method||"POST",body:JSON.stringify(n.body),headers:{"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("\ud83d\udd25 REQUEST ERROR!",e.t0,"\ud83d\udd25");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),xe=T.a.mark(Ae),ve=T.a.mark(Ie),Ee=T.a.mark(Ce),we=T.a.mark(Ne),ke=T.a.mark(Te),ye=T.a.mark(Re),Se=T.a.mark(_e);function Ae(){var e,t;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(pe.b)(je,Oe.login,{method:"GET"});case 3:if(!(e=n.sent).ok){n.next=10;break}return n.next=7,e.json();case 7:return t=n.sent,n.next=10,Object(pe.d)(be(t.data));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(pe.d)(ge("LOGIN ERROR"));case 16:case"end":return n.stop()}}),xe,null,[[0,12]])}function Ie(){var e,t,n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(pe.d)(me());case 3:return a.next=5,Object(pe.b)(fe);case 5:return e=a.sent,a.next=8,je(Oe.google,{body:e});case 8:if(!(null===(t=a.sent)||void 0===t?void 0:t.ok)){a.next=16;break}return a.next=12,t.json();case 12:return n=a.sent,d.a.set("Authorization",n.token,{expires:1}),a.next=16,Object(pe.d)(be(n.data.user));case 16:a.next=24;break;case 18:return a.prev=18,a.t0=a.catch(0),console.log(a.t0),s.c.error("\ud83d\udd25signInFetch ".concat(a.t0," \ud83d\udd25")),a.next=24,Object(pe.d)(ge(a.t0));case 24:case"end":return a.stop()}}),ve,null,[[0,18]])}function Ce(e){var t,n,a,r;return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(pe.d)(me());case 4:return c.next=6,Object(pe.b)(je,Oe.signIn,{body:t});case 6:if((n=c.sent).ok){c.next=16;break}return c.next=10,n.json();case 10:return a=c.sent,s.c.warn(a.message),c.next=14,Object(pe.d)(ge("".concat(a.message)));case 14:c.next=22;break;case 16:return c.next=18,n.json();case 18:return r=c.sent,d.a.set("Authorization",r.token,{expires:1}),c.next=22,Object(pe.d)(be(r.data));case 22:c.next=29;break;case 24:return c.prev=24,c.t0=c.catch(1),s.c.error("\ud83d\udd25LOGIN ERROR * signInFetch * \ud83d\udd25"),c.next=29,Object(pe.d)(ge("LOGIN ERROR"));case 29:case"end":return c.stop()}}),Ee,null,[[1,24]])}function Ne(e){var t,n,a;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(pe.d)(me());case 4:return r.next=6,Object(pe.b)(je,Oe.signUp,{body:Object(de.pickBy)(t,de.identity)});case 6:return n=r.sent,r.next=9,n.json();case 9:if(a=r.sent,n.ok){r.next=16;break}return s.c.warn(a.message),r.next=14,Object(pe.d)(ge("".concat(a.message)));case 14:r.next=19;break;case 16:return d.a.set("Authorization",a.token,{expires:1}),r.next=19,Object(pe.d)(be(a.data));case 19:r.next=26;break;case 21:return r.prev=21,r.t0=r.catch(1),console.log(r.t0),r.next=26,Object(pe.d)(ge(r.t0));case 26:case"end":return r.stop()}}),we,null,[[1,21]])}function Te(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.f)(ne.login,Ae);case 2:case"end":return e.stop()}}),ke)}function Re(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.e)(ne.signInSaga,Ce);case 2:return e.next=4,Object(pe.e)(ne.signUpSaga,Ne);case 4:return e.next=6,Object(pe.e)(ne.googleSaga,Ie);case 6:case"end":return e.stop()}}),ye)}function _e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.a)([Object(pe.c)(Te),Object(pe.c)(Re)]);case 2:case"end":return e.stop()}}),Se)}var Le={isAuth:!1,isFetch:!1,email:"",profile:{fullName:""}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.start:return Object(V.a)(Object(V.a)({},e),{},{isFetch:!0});case ne.logout:return Le;case ne.success:return Object(V.a)({isAuth:!0,isFetch:!1},t.payload);case ne.failure:return Object(V.a)(Object(V.a)({},e),{},{isAuth:!1,isFetch:!1,errors:t.payload});default:return e}},Ge=function(e){var t=e.isSignIn,n=e.textButton,c=Object(o.b)(),i=Object(a.useState)(1),s=Object(P.a)(i,2),u=s[0],l=s[1],p=Object(a.useState)(t?ce:oe),d=Object(P.a)(p,2),m=d[0],b=d[1],g=Object(a.useState)(t?ie:se),f=Object(P.a)(g,2),h=f[0],O=f[1],j=function(e){var t=e.target,n=t.value,a=t.name;O((function(e){return Object(V.a)(Object(V.a)({},e),{},Object(F.a)({},a,n))}))};return Object(a.useEffect)((function(){l(u+1),O(t?ie:se),b(t?ce:oe)}),[t]),r.a.createElement("form",{noValidate:!0},r.a.createElement(X.a,{container:!0,spacing:2,key:u},m.map((function(e){var t=e.id,n=e.type,a=e.label,c=e.name,o=e.required,i=e.fullWidth;return r.a.createElement(X.a,{item:!0,xs:12,sm:!i&&6,key:t},r.a.createElement(Y.a,{fullWidth:!0,id:t,name:c,type:n,label:a,variant:"outlined",required:o,autoComplete:n,onChange:j}))}))),r.a.createElement(K.a,{fullWidth:!0,color:"primary",variant:"contained",children:n,style:Z,onClick:function(){var e;c(t?(e=h,{type:ne.signInSaga,payload:e}):function(e){return{type:ne.signUpSaga,payload:e}}(h))}}))},ze="/assets/img/githubLogo.png",Fe="/assets/svg/google.svg",He=Object(C.a)((function(e){var t=e.spacing,n=e.shadows,a=e.zIndex;return Object(H.a)({root:{width:300,color:"#000",maxWidth:330,display:"flex",borderRadius:15,position:"absolute",alignItems:"center",flexDirection:"column",backgroundColor:"#fff",padding:"10px 20px 20px",boxShadow:n[1],top:t(1),right:t(1),zIndex:a.drawer+1},haveAccount:{width:"100%",display:"flex",justifyContent:"space-between"},close:{top:0,right:0,margin:0,position:"absolute"},avatar:{marginBottom:t(2),backgroundColor:"#dd4b39"},isAccountText:{"&:hover":{cursor:"pointer"}}})}))((function(e){var t=e.classes,n=Object(A.g)(),c=Object(o.b)(),i=Object(a.useState)(!0),s=Object(P.a)(i,2),u=s[0],l=s[1],p=Object(a.useState)(u?ue:le),d=Object(P.a)(p,2),m=d[0],b=d[1];return Object(a.useEffect)((function(){b(u?ue:le)}),[u]),r.a.createElement(D.a,{component:"main",className:t.root},r.a.createElement(J.a,{onClick:function(){n.push("/")},className:t.close},r.a.createElement(q.a,null)),r.a.createElement(U.a,{className:t.avatar},r.a.createElement(Q.a,null)),r.a.createElement(Ge,{isSignIn:u,textButton:m.button}),r.a.createElement(ae,{src:Fe,onClick:function(){c({type:ne.googleSaga})}}),r.a.createElement("div",{className:t.haveAccount},r.a.createElement($.a,{component:"span",variant:"subtitle2"},m.isHaveAccount),r.a.createElement($.a,{color:"primary",component:"span",variant:"subtitle2",onClick:function(){l(!u)},className:t.isAccountText},m.goTo)))})),Pe=function(){return Object(a.useEffect)((function(){G(),z()}),[]),r.a.createElement("section",null,r.a.createElement("h5",null,"Login"),r.a.createElement(He,null))},Ue={publicRoutes:[{path:"/",exact:!0,component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Home"))}},{path:"/github",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Github"))}},{path:"/code",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Code"))}}],privateRoutes:[{path:"/settings",redirectPath:"/login",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Settings"))}},{path:"/profile",redirectPath:"/login",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Profile"))}}]},We=n(107),qe=function(e){var t=e.isAuth,n=(e.children,Object(We.a)(e,["isAuth","children"]));return t?r.a.createElement(A.b,n):r.a.createElement(A.a,{to:{pathname:n.redirectPath}})},De=Object(C.a)((function(e){var t=e.spacing,n=e.breakpoints;return Object(H.a)({paper:{height:"100vh",backgroundSize:"cover",backgroundImage:"url(/assets/img/githubBg.jpg)"},content:Object(F.a)({paddingTop:t(10),paddingLeft:t(10)},n.down("md"),{paddingTop:t(8),paddingLeft:t(2)})})}))((function(e){var t=e.classes,n=Object(o.c)((function(e){return e.$authReducer.isAuth})),a=Ue.publicRoutes,c=Ue.privateRoutes,i={pathname:a[0].path};return r.a.createElement(I.a,{className:t.paper},r.a.createElement("main",{className:t.content},r.a.createElement(A.d,null,r.a.createElement(qe,{redirectPath:"/",path:"/login",isAuth:!n,component:Pe}),a.map((function(e){return r.a.createElement(A.b,Object.assign({},e,{key:e.path}))})),c.map((function(e){return r.a.createElement(qe,Object.assign({},e,{isAuth:n,key:e.path}))})),r.a.createElement(A.a,{from:"*",to:i}))))})),$e=n(188),Je=n(187),Me=n(192),Qe=n(4),Ve=n(100),Xe=n.n(Ve),Ke=Object(H.a)({root:{left:0,paddingLeft:10,position:"absolute","& img":{width:33,height:33}}}),Ye=Object(C.a)(Ke)(Object(a.memo)((function(e){var t=e.handleClickLink,n=e.classes;return r.a.createElement(J.a,{"aria-label":"open drawer",className:n.root,onClick:t},r.a.createElement("img",{src:ze,alt:"logo"}))}))),Ze=Object(C.a)((function(e){var t=e.breakpoints;return Object(H.a)({root:Object(F.a)({marginLeft:175},t.only("xs"),{display:"none"})})}))(Object(a.memo)((function(e){var t=e.isShow,n=e.onClick,a=e.classes;return t?r.a.createElement(J.a,{"aria-label":"hide drawer",className:a.root,onClick:n},r.a.createElement(Xe.a,null)):null}))),et=(n(182),n(101)),tt=n.n(et),nt=n(183),at=Object(nt.a)((function(e){return{root:{paddingRight:(0,e.spacing)(2)},img:{width:"1.4em",borderRadius:"50%"},circle:{fontSize:"1.4em"}}})),rt=function(e){var t=e.onClick,n=at(),a=Object(o.c)((function(e){var t;return null===(t=e.$authReducer.profile)||void 0===t?void 0:t.image}));return r.a.createElement(J.a,{onClick:t,"aria-haspopup":"true",className:n.root,"aria-controls":"menu-appbar"},a?r.a.createElement("img",{src:a,className:n.img,alt:"appbar-logo"}):r.a.createElement(tt.a,{className:n.circle}))},ct=n(178),ot=n(134),it=n(184),st=n(185),ut=Object(C.a)((function(e){var t=e.palette,n=e.breakpoints;return Object(H.a)({root:{"&:hover":{background:t.secondary.light}},icon:Object(F.a)({opacity:.9,fill:"#fff",fontSize:"1.5em"},n.down("md"),{fontSize:"2em"})})}))((function(e){var t=e.text,n=e.to,c=e.Icon,o=e.onClick,i=e.classes,s=Object(a.forwardRef)((function(e,t){return r.a.createElement(l.b,Object.assign({ref:t},e))}));return r.a.createElement(ot.a,{button:!0,to:n,component:s,className:i.root,onClick:o},r.a.createElement(it.a,null,r.a.createElement(c,{className:i.icon})),r.a.createElement(st.a,{primary:t}))})),lt=Object(C.a)((function(e){var t=e.spacing;return Object(H.a)({root:{position:"relative",marginTop:t(7),"& a":{paddingLeft:t(2)}}})}))(Object(a.memo)((function(e){var t=e.hideDrawer,n=e.classes;return r.a.createElement(ct.a,{className:n.root},y.map((function(e,n){return r.a.createElement(ut,Object.assign({key:n},e,{onClick:t}))})),S.map((function(e,n){return r.a.createElement(ut,Object.assign({key:n},e,{onClick:t}))})))}))),pt=n(105),dt=n(186),mt=n(102),bt=n.n(mt),gt=Object(C.a)((function(e){return Object(H.a)({root:{right:0,position:"absolute"},svg:{fill:"#fff"}})}))((function(e){var t=e.hideDrawer,n=e.classes,c=Object(A.g)(),i=Object(o.b)(),s=Object(o.c)((function(e){return e.$authReducer.isAuth})),u=Object(a.useState)(),l=Object(P.a)(u,2),p=l[0],m=l[1],b=function(){m(null)};return r.a.createElement("div",{className:n.root},s?r.a.createElement("div",null,r.a.createElement(rt,{onClick:function(e){m(e.currentTarget)}}),r.a.createElement(pt.a,{keepMounted:!0,id:"menu-appbar",anchorEl:p,onClose:b,open:Boolean(p)},r.a.createElement(dt.a,{onClick:function(){c.push("/profile"),b()}},"Profile"),r.a.createElement(dt.a,{onClick:function(){d.a.remove("Authorization",{path:""}),i({type:ne.logout}),b()}},"Exit"))):r.a.createElement(J.a,{"aria-label":"open account",onClick:function(){c.push("/login"),m(null),t()}},r.a.createElement(bt.a,null)))})),ft=Object(C.a)((function(e){var t=e.zIndex,n=e.transitions,a=e.palette,r=e.breakpoints,c=e.spacing,o=n.create(["width"],{easing:n.easing.sharp,duration:n.duration.leavingScreen}),i=n.create("width",{easing:n.easing.sharp,duration:n.duration.enteringScreen});return Object(H.a)({appBar:{zIndex:t.drawer+1,transition:o,".MuiSvgIcon-root":{fill:"#fff"}},appBarShift:{transition:o},paper:{width:"100%",backgroundColor:a.primary.main,boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},drawer:{flexShrink:0,whiteSpace:"nowrap"},drawerClose:Object(F.a)({width:0,overflowX:"hidden",transition:i},r.up("sm"),{width:c(7)}),drawerOpen:Object(F.a)({transition:i},r.up("sm"),{width:240}),toolbar:{padding:0,minHeight:40,maxHeight:40}})}))((function(e){var t,n,c=e.classes,o=Object(a.useState)(!1),i=Object(P.a)(o,2),s=i[0],u=i[1],l=Object(a.useCallback)((function(){u(!0)}),[]),p=Object(a.useCallback)((function(){u(!1)}),[]),d=s?p:l,m={appbar:Object(Qe.a)(c.appBar,Object(F.a)({},c.appBarShift,s)),drawer:Object(Qe.a)(c.drawer,(t={},Object(F.a)(t,c.drawerOpen,s),Object(F.a)(t,c.drawerClose,!s),t)),classes:{paper:Object(Qe.a)(c.paper,(n={},Object(F.a)(n,c.drawerOpen,s),Object(F.a)(n,c.drawerClose,!s),n))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je.a,{position:"fixed",className:m.appbar},r.a.createElement($e.a,{className:c.toolbar},r.a.createElement(Ye,{handleClickLink:d}),r.a.createElement(Ze,{isShow:s,onClick:p}),r.a.createElement(gt,{hideDrawer:p}))),r.a.createElement(Me.a,{variant:"permanent",className:m.drawer,classes:m.classes},r.a.createElement(lt,{hideDrawer:p})))}));function ht(){var e=Object(o.b)();return Object(a.useEffect)((function(){d.a.get("Authorization")&&e({type:ne.login})})),r.a.createElement(l.a,null,r.a.createElement(ft,null),r.a.createElement(De,null))}var Ot=n(31),jt=n(103),xt=n(106),vt=T.a.mark(Et);function Et(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.a)([Object(pe.c)(_e)]);case 2:case"end":return e.stop()}}),vt)}var wt=function(){var e=Object(xt.a)(),t=Object(jt.composeWithDevTools)({}),n=Object(Ot.createStore)(Object(Ot.combineReducers)({$authReducer:Be}),t(Object(Ot.applyMiddleware)(e)));return e.run(Et),n}(),kt={colors:{primary:"#7a682a"},breakpoints:{xs:"375px",sm:"600px",md:"768px",lg:"992px",xl:"1200px"}};function yt(){var e=Object(ee.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  li {\n    list-style: none;\n  }\n  input, select { \n    font-size: 100%;\n  }\n  \n  .Toastify__toast-container {\n    top: 0;\n    right: 0;\n    \n    .Toastify__toast--warning {\n      border-radius: 15px;\n      text-align: center;\n    }\n  }\n\n  #root {\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n"]);return yt=function(){return e},e}var St=Object(i.b)(yt()),At=n(104),It=n(78),Ct=n.n(It),Nt=Object(At.a)({palette:{primary:{main:"#7a682a",contrastText:"#fff"},secondary:{main:"#ea7d7d",light:"rgb(192, 107, 82)"},error:{main:Ct.a[400],dark:Ct.a[700]}},breakpoints:{keys:["xs","sm","md","lg","xl"],values:{xs:375,sm:600,md:768,lg:1024,xl:1440}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(131);Object(c.render)(r.a.createElement(o.a,{store:wt},r.a.createElement(i.a,{theme:kt},r.a.createElement(u.a,{theme:Nt},r.a.createElement(ht,null))),r.a.createElement(St,null),r.a.createElement(s.b,{newestOnTop:!0,hideProgressBar:!0,autoClose:3e3,transition:s.a})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);