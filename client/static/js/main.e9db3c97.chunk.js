(this["webpackJsonpreact-ts-github"]=this["webpackJsonpreact-ts-github"]||[]).push([[0],{114:function(e,t,n){e.exports=n(129)},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n(22),i=n(25),s=n(37),u=n(186),l=n(29),p=n(45),d=n(43),m=n.n(d),g=n(130),b=n(87),h=n.n(b),f=n(88),O=n.n(f),x=n(89),j=n.n(x),v=n(90),w=n.n(v),E={to:"/code",text:"code",Icon:h.a},k={to:"/home",text:"home",Icon:O.a},y={to:"/gitHub",text:"gitHub",Icon:j.a},S={to:"/settings",text:"settings",Icon:w.a},I=[k,y,E],A=[S],N=n(14),C=function(){window.gapi.load("auth2",(function(){return gapi.auth2.init({client_id:"247181661476-6ccq7ethnk23lvfsbdl10m6jg1nqd0ct.apps.googleusercontent.com"})}))};function R(){window.gapi?C():function(){var e=document.createElement("script");e.src="https://apis.google.com/js/platform.js",e.async=!0,e.defer=!0,e.onload=C,document.head.appendChild(e)}()}var T=n(94),_=n.n(T),G=n(179),z=n(70),B=n(95),P=n.n(B),F=n(20),H=n(40),U=n(176),W=n(178),L=n(187),D={marginTop:15},q=n(174),$=Object(q.a)((function(e){return{root:{width:300,color:"#000",maxWidth:330,display:"flex",borderRadius:15,position:"absolute",alignItems:"center",flexDirection:"column",backgroundColor:"#fff",padding:"10px 20px 20px",boxShadow:e.shadows[1],top:e.spacing(1),right:e.spacing(1),zIndex:e.zIndex.drawer+1}}})),M=n(34);function J(){var e=Object(M.a)(["\n  width: 50px;\n  height: 50px;\n  display: block;\n  cursor: pointer;\n  background-size: 75%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(",");\n"]);return J=function(){return e},e}var X=i.c.svg(J(),(function(e){return e.src})),Q=n(190),V=n(175);function Y(){var e=Object(M.a)(["\n  display: flex;\n\n  .isAccountText:hover {\n    cursor: pointer;\n  }\n"]);return Y=function(){return e},e}function K(){var e=Object(M.a)(["\n  margin-bottom: 15px;\n  background-color: #dd4b39;\n"]);return K=function(){return e},e}function Z(){var e=Object(M.a)(["\n  top: 0;\n  right: 0;\n  margin: 0;\n  position: absolute;\n"]);return Z=function(){return e},e}var ee,te=Object(i.c)(V.a)(Z()),ne=Object(i.c)(Q.a)(K()),ae=i.c.div(Y()),re={id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,fullWidth:!0},ce=[{id:"login",name:"login",label:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430",required:!0,fullWidth:!0},re],oe=[{id:"email",name:"email",label:"\u041f\u043e\u0447\u0442\u0430",required:!0,fullWidth:!0},{id:"login",name:"login",label:"\u041b\u043e\u0433\u0438\u043d",fullWidth:!0},{id:"name",name:"name",label:"\u0418\u043c\u044f",required:!0},{id:"lastName",name:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},re,{id:"repeatPassword",name:"repeatPassword",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,fullWidth:!0}],ie={login:"",password:""},se={name:"",login:"",email:"",lastName:"",password:"",repeatPassword:""},ue={button:"\u0412\u043e\u0439\u0442\u0438!",goTo:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0438\u0440\u0432\u0430\u0442\u044c\u0441\u044f!",isHaveAccount:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? "},le={goTo:"\u0412\u043e\u0439\u0442\u0438!",button:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0438\u0440\u0432\u0430\u0442\u044c\u0441\u044f!",isHaveAccount:"\u0415\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? "};!function(e){e.logout="@@Auth/LOGOUT",e.login="@@Auth/SIGN_IN_LOGIN",e.start="@@Auth/SIGN_IN_FETCH_START",e.success="@@Auth/SIGN_IN_FETCH_SUCCESS",e.failure="@@Auth/SIGN_IN_FETCH_FAILURE",e.signInSaga="@@Auth/SIGN_IN_FETCH_SAGA",e.signUpSaga="@@Auth/SIGN_UP_FETCH_SAGA",e.googleSaga="@@Auth/GOOGLE_AUTH_SAGA"}(ee||(ee={}));var pe=n(16),de=n.n(pe),me=n(13),ge=n(74),be=function(){return{type:ee.start}},he=function(e){return{type:ee.success,payload:e}},fe=function(e){return{type:ee.failure,payload:e}},Oe=n(67),xe=function(){var e=Object(Oe.a)(de.a.mark((function e(){var t,n,a,r,c;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window,n=t.gapi,e.next=4,n.auth2.getAuthInstance().signIn();case 4:return a=e.sent,r=a.getBasicProfile(),c=a.getAuthResponse(),console.log(a),e.abrupt("return",{googleToken:c,googleId:r.getId(),image:r.getImageUrl(),fullName:r.getName(),email:r.getEmail()});case 11:e.prev=11,e.t0=e.catch(0),s.c.error("googleSignIn Error! ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),je="http://localhost:7777/api/auth",ve={login:"".concat(je,"/login"),signIn:"".concat(je,"/sign_in"),signUp:"".concat(je,"/sign_up"),google:"".concat(je,"/google")},we=function(){var e=Object(Oe.a)(de.a.mark((function e(t,n){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{credentials:"include",method:n.method||"POST",body:JSON.stringify(n.body),headers:{"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("\ud83d\udd25 REQUEST ERROR!",e.t0,"\ud83d\udd25");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),Ee=de.a.mark(Ce),ke=de.a.mark(Re),ye=de.a.mark(Te),Se=de.a.mark(_e),Ie=de.a.mark(Ge),Ae=de.a.mark(ze),Ne=de.a.mark(Be);function Ce(){var e,t;return de.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(me.b)(we,ve.login,{method:"GET"});case 3:if(!(e=n.sent).ok){n.next=10;break}return n.next=7,e.json();case 7:return t=n.sent,n.next=10,Object(me.d)(he(t.data));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(me.d)(fe("LOGIN ERROR"));case 16:case"end":return n.stop()}}),Ee,null,[[0,12]])}function Re(){var e,t,n;return de.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(me.d)(be());case 3:return a.next=5,Object(me.b)(xe);case 5:return e=a.sent,a.next=8,we(ve.google,{body:e});case 8:if(t=a.sent,console.log(e),!(null===t||void 0===t?void 0:t.ok)){a.next=17;break}return a.next=13,t.json();case 13:return n=a.sent,m.a.set("Authorization",n.token),a.next=17,Object(me.d)(he(n.data));case 17:a.next=25;break;case 19:return a.prev=19,a.t0=a.catch(0),console.log(a.t0),s.c.error("\ud83d\udd25signInFetch ".concat(a.t0," \ud83d\udd25")),a.next=25,Object(me.d)(fe(a.t0));case 25:case"end":return a.stop()}}),ke,null,[[0,19]])}function Te(e){var t,n,a,r;return de.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(me.d)(be());case 4:return c.next=6,Object(me.b)(we,ve.signIn,{body:t});case 6:if((n=c.sent).ok){c.next=16;break}return c.next=10,n.json();case 10:return a=c.sent,s.c.warn(a.message),c.next=14,Object(me.d)(fe("".concat(a.message)));case 14:c.next=22;break;case 16:return c.next=18,n.json();case 18:return r=c.sent,m.a.set("Authorization",r.token),c.next=22,Object(me.d)(he(r.data));case 22:c.next=29;break;case 24:return c.prev=24,c.t0=c.catch(1),s.c.error("\ud83d\udd25LOGIN ERROR * signInFetch * \ud83d\udd25"),c.next=29,Object(me.d)(fe("LOGIN ERROR"));case 29:case"end":return c.stop()}}),ye,null,[[1,24]])}function _e(e){var t,n,a;return de.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(me.d)(be());case 4:return r.next=6,Object(me.b)(we,ve.signUp,{body:Object(ge.pickBy)(t,ge.identity)});case 6:return n=r.sent,r.next=9,n.json();case 9:if(a=r.sent,n.ok){r.next=16;break}return s.c.warn(a.message),r.next=14,Object(me.d)(fe("".concat(a.message)));case 14:r.next=19;break;case 16:return m.a.set("Authorization",a.token),r.next=19,Object(me.d)(he(a.data));case 19:r.next=26;break;case 21:return r.prev=21,r.t0=r.catch(1),console.log(r.t0),r.next=26,Object(me.d)(fe(r.t0));case 26:case"end":return r.stop()}}),Se,null,[[1,21]])}function Ge(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.f)(ee.login,Ce);case 2:case"end":return e.stop()}}),Ie)}function ze(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.e)(ee.signInSaga,Te);case 2:return e.next=4,Object(me.e)(ee.signUpSaga,_e);case 4:return e.next=6,Object(me.e)(ee.googleSaga,Re);case 6:case"end":return e.stop()}}),Ae)}function Be(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)([Object(me.c)(Ge),Object(me.c)(ze)]);case 2:case"end":return e.stop()}}),Ne)}var Pe={isAuth:!1,isFetch:!1,email:"",profile:{fullName:""}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case ee.start:return Object(H.a)(Object(H.a)({},e),{},{isFetch:!0});case ee.logout:return Pe;case ee.success:return Object(H.a)({isAuth:!0,isFetch:!1},t.payload);case ee.failure:return Object(H.a)(Object(H.a)({},e),{},{isAuth:!1,isFetch:!1,errors:t.payload});default:return e}},He=function(e){var t=e.isSignIn,n=e.textButton,c=Object(o.b)(),i=Object(a.useState)(1),s=Object(l.a)(i,2),u=s[0],p=s[1],d=Object(a.useState)(t?ce:oe),m=Object(l.a)(d,2),g=m[0],b=m[1],h=Object(a.useState)(t?ie:se),f=Object(l.a)(h,2),O=f[0],x=f[1],j=function(e){var t=e.target,n=t.value,a=t.name;x((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(F.a)({},a,n))}))};return Object(a.useEffect)((function(){p(u+1),x(t?ie:se),b(t?ce:oe)}),[t]),r.a.createElement("form",{noValidate:!0},r.a.createElement(U.a,{container:!0,spacing:2,key:u},g.map((function(e){var t=e.id,n=e.type,a=e.label,c=e.name,o=e.required,i=e.fullWidth;return r.a.createElement(U.a,{item:!0,xs:12,sm:!i&&6,key:t},r.a.createElement(L.a,{fullWidth:!0,id:t,name:c,type:n,label:a,variant:"outlined",required:o,autoComplete:n,onChange:j}))}))),r.a.createElement(W.a,{fullWidth:!0,color:"primary",variant:"contained",children:n,style:D,onClick:function(){var e;c(t?(e=O,{type:ee.signInSaga,payload:e}):function(e){return{type:ee.signUpSaga,payload:e}}(O))}}))},Ue="/assets/img/githubLogo.png",We="/assets/svg/google.svg",Le=function(){var e=$(),t=Object(N.g)(),n=Object(o.b)(),c=Object(a.useState)(!0),i=Object(l.a)(c,2),s=i[0],u=i[1],p=Object(a.useState)(s?ue:le),d=Object(l.a)(p,2),m=d[0],g=d[1];return Object(a.useEffect)((function(){g(s?ue:le)}),[s]),r.a.createElement(G.a,{component:"main",className:e.root},r.a.createElement(te,{onClick:function(){t.push("/")}},r.a.createElement(_.a,null)),r.a.createElement(ne,null,r.a.createElement(P.a,null)),r.a.createElement(He,{isSignIn:s,textButton:m.button}),r.a.createElement(X,{src:We,onClick:function(){n({type:ee.googleSaga})}}),r.a.createElement(ae,null,r.a.createElement(z.a,{component:"span",variant:"subtitle2"},m.isHaveAccount),r.a.createElement(z.a,{color:"primary",component:"span",variant:"subtitle2",className:"isAccountText",onClick:function(){u(!s)}},m.goTo)))},De=function(){return Object(a.useEffect)((function(){R()}),[]),r.a.createElement("section",null,r.a.createElement("h5",null,"Login"),r.a.createElement(Le,null))},qe={publicRoutes:[{path:"/",exact:!0,component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Home"))}},{path:"/github",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Github"))}},{path:"/code",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Code"))}}],privateRoutes:[{path:"/settings",redirectPath:"/login",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Settings"))}},{path:"/profile",redirectPath:"/login",component:function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Profile"))}}]},$e=n(104),Me=function(e){var t=e.isAuth,n=(e.children,Object($e.a)(e,["isAuth","children"]));return t?r.a.createElement(N.b,n):r.a.createElement(N.a,{to:{pathname:n.redirectPath}})},Je=function(){var e=Object(o.c)((function(e){return e.$authReducer.isAuth})),t=qe.publicRoutes,n=qe.privateRoutes,a={pathname:t[0].path};return r.a.createElement(N.d,null,r.a.createElement(Me,{redirectPath:"/",path:"/login",isAuth:!e,component:De}),t.map((function(e){return r.a.createElement(N.b,Object.assign({},e,{key:e.path}))})),n.map((function(t){return r.a.createElement(Me,Object.assign({},t,{isAuth:e,key:t.path}))})),r.a.createElement(N.a,{from:"*",to:a}))},Xe=n(177),Qe=n(189),Ve=n(4),Ye=n(131),Ke=n(180),Ze=n(181),et=Object(q.a)((function(e){return{root:{"&:hover":{background:e.palette.secondary.light}},icon:Object(F.a)({opacity:.9,fill:"#fff",fontSize:"1.5em"},e.breakpoints.down("md"),{fontSize:"2em"})}})),tt=function(e){var t=e.text,n=e.to,c=e.Icon,o=e.onClick,i=et(),s=Object(a.forwardRef)((function(e,t){return r.a.createElement(p.b,Object.assign({ref:t},e))}));return r.a.createElement(Ye.a,{button:!0,to:n,component:s,className:i.root,onClick:o},r.a.createElement(Ke.a,null,r.a.createElement(c,{className:i.icon})),r.a.createElement(Ze.a,{primary:t}))},nt=Object(q.a)((function(e){return{paper:{width:"100%",backgroundColor:e.palette.primary.main,boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},list:{position:"relative",marginTop:e.spacing(7),"& a":{paddingLeft:e.spacing(2)}},drawer:{flexShrink:0,whiteSpace:"nowrap"},drawerClose:Object(F.a)({width:0,overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.up("sm"),{width:e.spacing(7)}),drawerOpen:Object(F.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},e.breakpoints.up("sm"),{width:240})}})),at=function(e){var t,n,a=e.isShow,c=e.hideDrawer,i=nt(),s=Object(o.c)((function(e){return e.$authReducer.isAuth})),u={drawer:Object(Ve.a)(i.drawer,(t={},Object(F.a)(t,i.drawerOpen,a),Object(F.a)(t,i.drawerClose,!a),t)),classes:{paper:Object(Ve.a)(i.paper,(n={},Object(F.a)(n,i.drawerOpen,a),Object(F.a)(n,i.drawerClose,!a),n))}};return r.a.createElement(Qe.a,{variant:"permanent",className:u.drawer,classes:u.classes},r.a.createElement(Xe.a,{className:i.list},I.map((function(e,t){return r.a.createElement(tt,Object.assign({key:t},e,{onClick:c}))})),s&&A.map((function(e,t){return r.a.createElement(tt,Object.assign({key:t},e,{onClick:c}))}))))},rt=n(185),ct=n(99),ot=n.n(ct),it=n(102),st=n(183),ut=n(97),lt=n.n(ut),pt=n(96),dt=n.n(pt),mt=Object(q.a)((function(e){return{root:{paddingRight:e.spacing(2)},img:{width:"1.4em",borderRadius:"50%"},circle:{fontSize:"1.4em"}}})),gt=function(e){var t=e.userImg,n=e.onClick,a=mt();return r.a.createElement(V.a,{onClick:n,"aria-haspopup":"true",className:a.root,"aria-controls":"menu-appbar"},t?r.a.createElement("img",{src:t,className:a.img,alt:"appbar-logo"}):r.a.createElement(dt.a,{className:a.circle}))},bt=(n(182),function(e){var t=e.hideDrawer,n=Object(N.g)(),c=Object(o.b)(),i=Object(o.c)((function(e){return e.$authReducer})),s=Object(a.useState)(),u=Object(l.a)(s,2),p=u[0],d=u[1],g=function(){d(null)},b=i.isAuth,h=i.profile,f=null===h||void 0===h?void 0:h.image;return r.a.createElement("div",{className:"btnGroup"},b?r.a.createElement("div",null,r.a.createElement(gt,{onClick:function(e){d(e.currentTarget)},userImg:f}),r.a.createElement(it.a,{keepMounted:!0,id:"menu-appbar",anchorEl:p,onClose:g,open:Boolean(p)},r.a.createElement(st.a,{onClick:function(){n.push("/profile"),g()}},"Profile"),r.a.createElement(st.a,{onClick:function(){m.a.remove("Authorization",{path:""}),c({type:ee.logout}),g()}},"Exit"))):r.a.createElement(V.a,{"aria-label":"open account",onClick:function(){n.push("/login"),d(null),t()}},r.a.createElement(lt.a,null)))}),ht=Object(q.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}})),ft=Object(q.a)({paper:{height:"100vh",backgroundSize:"cover",backgroundImage:"url(/assets/img/githubBg.jpg)"}}),Ot=n(98),xt=n(184);function jt(){var e=Object(M.a)(["\n  padding: 0;\n  min-height: 40px;\n  max-height: 40px;\n\n  .logo {\n    left: 0;\n    padding-left: 10px;\n    position: absolute;\n\n    img {\n      width: 33px;\n      height: 33px;\n    }\n  }\n  .left {\n    margin-left: 175px;\n    /* ONLY XS */\n    "," {\n      display: none;\n    }\n  }\n  .btnGroup {\n    right: 0;\n    position: absolute;\n  }\n\n  .MuiSvgIcon-root {\n    fill: #fff;\n  }\n  .MuiButtonBase-root:hover {\n    background-color: transparent;\n  }\n"]);return jt=function(){return e},e}var vt=Object(i.c)(xt.a)(jt(),Object(Ot.only)("xs")),wt=function(e){var t=e.isShow,n=e.showDrawer,a=e.hideDrawer,c=ht();return r.a.createElement(rt.a,{position:"fixed",className:Object(Ve.a)(c.appBar,Object(F.a)({},c.appBarShift,t))},r.a.createElement(vt,null,r.a.createElement(V.a,{className:"logo","aria-label":"open drawer",onClick:function(){t?a():n()}},r.a.createElement("img",{src:Ue,alt:"logo"})),t&&r.a.createElement(V.a,{className:"left","aria-label":"hide drawer",onClick:a},r.a.createElement(ot.a,null)),r.a.createElement(bt,{hideDrawer:a})))};function Et(){var e=Object(o.b)(),t=ft(),n=Object(a.useState)(!1),c=Object(l.a)(n,2),i=c[0],s=c[1],u=function(){s(!1)};return Object(a.useEffect)((function(){m.a.get("Authorization")&&e({type:ee.login})}),[e]),r.a.createElement(g.a,{className:t.paper},r.a.createElement(p.a,null,r.a.createElement(at,{isShow:i,hideDrawer:u}),r.a.createElement(wt,{isShow:i,showDrawer:function(){s(!0)},hideDrawer:u}),r.a.createElement(Je,null)))}var kt=n(32),yt=n(100),St=n(103),It=de.a.mark(At);function At(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)([Object(me.c)(Be)]);case 2:case"end":return e.stop()}}),It)}var Nt=function(){var e=Object(St.a)(),t=Object(yt.composeWithDevTools)({}),n=Object(kt.createStore)(Object(kt.combineReducers)({$authReducer:Fe}),t(Object(kt.applyMiddleware)(e)));return e.run(At),n}(),Ct={colors:{primary:"#7a682a"},breakpoints:{xs:"375px",sm:"600px",md:"768px",lg:"992px",xl:"1200px"}};function Rt(){var e=Object(M.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  li {\n    list-style: none;\n  }\n  input, select { \n    font-size: 100%;\n  }\n  \n  .Toastify__toast-container {\n    top: 0;\n    right: 0;\n    \n    .Toastify__toast--warning {\n      border-radius: 15px;\n      text-align: center;\n    }\n  }\n\n  #root {\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n"]);return Rt=function(){return e},e}var Tt=Object(i.b)(Rt()),_t=n(101),Gt=n(77),zt=n.n(Gt),Bt=Object(_t.a)({palette:{primary:{main:"#7a682a",contrastText:"#fff"},secondary:{main:"#ea7d7d",light:"rgb(192, 107, 82)"},error:{main:zt.a[400],dark:zt.a[700]}},breakpoints:{keys:["xs","sm","md","lg","xl"],values:{xs:375,sm:600,md:768,lg:1024,xl:1440}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(128);Object(c.render)(r.a.createElement(o.a,{store:Nt},r.a.createElement(i.a,{theme:Ct},r.a.createElement(u.a,{theme:Bt},r.a.createElement(Et,null))),r.a.createElement(Tt,null),r.a.createElement(s.b,{newestOnTop:!0,hideProgressBar:!0,autoClose:3e3,transition:s.a})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);