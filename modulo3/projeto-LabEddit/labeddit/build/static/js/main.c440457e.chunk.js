(this.webpackJsonplabeddit=this.webpackJsonplabeddit||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,s,l,j=n(0),d=n.n(j),u=n(9),b=n.n(u),x=n(12),O=n(11),h=n(144),m=n(153),p=n(19),f=n(20),g=f.a.div(a||(a=Object(p.a)(["\ndisplay:flex;\nflex-direction:column;\nalign-items: center;\nwidth: 100vw;\nmargin-top: 70px\n\n"]))),v=f.a.div(c||(c=Object(p.a)(["\ndisplay:flex;\nflex-direction:column;\nwidth: 100vw;\nalign-items: center;\nmargin-bottom: 20px;\n"]))),y=f.a.div(r||(r=Object(p.a)(["\ndisplay:flex;\nflex-direction:column;\nwidth: 100vw;\nalign-items: center;\n\n"]))),w=f.a.div(i||(i=Object(p.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100vw;\nalign-items: center;\nmargin-bottom: 20px;\nmargin-top: 70px\n\n"]))),k=n(15),B=n(44),C=function(e){var t=Object(j.useState)(e),n=Object(x.a)(t,2),a=n[0],c=n[1];return[a,function(e){var t=e.target,n=t.value,r=t.name;c(Object(B.a)(Object(B.a)({},a),{},Object(k.a)({},r,n)))},function(){c(e)}]},S="https://labeddit.herokuapp.com",D=n(33),E=n.n(D),I=function(e){e.push("/login")},L=function(e){e.push("/pagina-feed/:id")},P=n(3),q=function(e){var t=e.setBotaoDaBarra,n=C({username:"",email:"",password:""}),a=Object(x.a)(n,3),c=a[0],r=a[1],i=a[2],o=Object(O.f)();return Object(P.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,n,a){E.a.post("".concat(S,"/users/signup"),e).then((function(e){localStorage.setItem("token",e.data.token),t(),L(n),a("Logout")})).catch((function(e){return alert(e.response.data.message)}))}(c,i,o,t)},children:Object(P.jsxs)(w,{children:[Object(P.jsx)("h1",{children:"P\xe1gina de Cadastro"}),Object(P.jsxs)(v,{children:[Object(P.jsx)(m.a,{value:c.username,name:"username",onChange:r,label:"Nome",variant:"outlined",required:!0,autoFocus:!0,margin:"normal"}),Object(P.jsx)(m.a,{value:c.email,name:"email",onChange:r,label:"E-mail",variant:"outlined",type:"email",required:!0,margin:"normal"}),Object(P.jsx)(m.a,{value:c.password,name:"password",onChange:r,label:"Senha",variant:"outlined",type:"password",required:!0,margin:"normal"})]}),Object(P.jsx)(y,{children:Object(P.jsx)(h.a,{type:"submit",variant:"outlined",color:"primary",children:"Cadastrar"})})]})})},U=n(145),z=function(){return Object(P.jsx)("div",{children:Object(P.jsx)(U.a,{color:"primary",align:"center",variant:"h4",children:"Erro 404 - P\xe1gina n\xe3o encontrada"})})},F=n(149),J=n(148),A=n(146),M=n(147),N=Object(f.a)(A.a)(o||(o=Object(p.a)(["\n display:flex;\n flex-direction:row;\n flex-wrap:wrap;\n margin:30px;\n display:flex;\n flex-direction: column; \n"]))),T=(Object(f.a)(M.a)(s||(s=Object(p.a)(["\n  postion:fixed !important;\n  right: 20px:\n  bottom: 20px;\n  z-index:3;\n"]))),function(e){return Object(P.jsx)(N,{onClick:e.onClick,children:Object(P.jsxs)(J.a,{children:[Object(P.jsx)(F.a,{component:e.id,alt:e.title,title:e.title,height:"150px"}),Object(P.jsxs)(N,{children:[Object(P.jsx)(U.a,{align:"center",children:e.username.toUpperCase()}),Object(P.jsx)(U.a,{align:"center",children:e.body.toUpperCase()})]})]})})}),G=function(){var e=Object(O.f)();Object(j.useEffect)((function(){localStorage.getItem("token")||I(e)}),[e])},H=function(e,t){var n=Object(j.useState)(e),a=Object(x.a)(n,2),c=a[0],r=a[1];return Object(j.useEffect)((function(){E.a.get(t,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){r(e.data)})).catch((function(e){console.log(e),alert("Ocorreu um erro.")}))}),[t]),c},K=function(){G();var e=H([],"".concat(S,"/posts"));console.log(e);var t=e.map((function(e){return Object(P.jsx)(T,{username:e.username,title:e.title,body:e.body},e.id)}));return Object(P.jsxs)(N,{children:[Object(P.jsx)("h1",{children:"P\xe1gina de Feed"}),t]})},Q=function(){var e=Object(O.f)();Object(j.useEffect)((function(){localStorage.getItem("token")&&L(e)}),[e])},R=function(e){var t=e.setBotaoDaBarra,n=C({email:"",password:""}),a=Object(x.a)(n,3),c=a[0],r=a[1],i=a[2],o=Object(O.f)();Q();return Object(P.jsxs)("div",{children:[Object(P.jsx)(g,{children:Object(P.jsx)("h1",{children:"P\xe1gina de Login"})}),Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,n,a){E.a.post("".concat(S,"/users/login"),e).then((function(e){localStorage.setItem("token",e.data.token),t(),L(n),a("Logout")})).catch((function(e){return alert(e.response.data.message)}))}(c,i,o,t)},children:[Object(P.jsxs)(v,{children:[Object(P.jsx)(m.a,{name:"email",value:c.email,onChange:r,label:"E-mail",variant:"outlined",margin:"normal",required:!0,type:"email"}),Object(P.jsx)(m.a,{name:"password",value:c.password,onChange:r,label:"Senha",variant:"outlined",margin:"normal",required:!0,type:"password"})]}),Object(P.jsxs)(y,{children:[Object(P.jsx)(h.a,{type:"submit",variant:"text",color:"secondary",children:"Entrar"}),Object(P.jsx)(h.a,{type:"submit",onClick:function(){return function(e){e.push("/cadastro")}(o)},variant:"outlined",color:"primary",children:"Fazer Cadastro"})]})]})]})},V=function(e){return Object(P.jsx)(N,{onClick:e.onClick,children:Object(P.jsxs)(J.a,{children:[Object(P.jsx)(F.a,{component:e.id,alt:e.title,title:e.title,height:"150px"}),Object(P.jsxs)(N,{children:[Object(P.jsx)(U.a,{align:"center",children:e.username.toUpperCase()}),Object(P.jsx)(U.a,{align:"center",children:e.body.toUpperCase()})]})]})})},W=function(){var e=H([],"".concat(S,"/posts"));console.log(e),G();var t=e.map((function(e){return Object(P.jsx)(V,{username:e.username,title:e.title,body:e.body},e.id)}));return Object(P.jsx)(N,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"P\xe1gina de Post"}),t]})})},X=function(e){var t=e.setBotaoDaBarra;return Object(P.jsxs)(O.c,{children:[Object(P.jsx)(O.a,{exact:!0,path:"/login",children:Object(P.jsx)(R,{setBotaoDaBarra:t})}),Object(P.jsx)(O.a,{exact:!0,path:"/cadastro",children:Object(P.jsx)(q,{setBotaoDaBarra:t})}),Object(P.jsx)(O.a,{exact:!0,path:"/pagina-feed",children:Object(P.jsx)(K,{})}),Object(P.jsx)(O.a,{exact:!0,path:"/pagina-post",children:Object(P.jsx)(W,{})}),Object(P.jsx)(O.a,{children:Object(P.jsx)(z,{})})]})},Y=n(69),Z=Object(Y.a)({palette:{primary:{main:"#ff5722",contrastText:"white"},text:{primary:"#616161"}}}),$=n(152),_=n(151),ee=n(150),te=Object(f.a)(ee.a)(l||(l=Object(p.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\n"]))),ne=function(e){var t=e.botaoDaBarra,n=e.setBotaoDaBarra,a=localStorage.getItem("token"),c=Object(O.f)();return Object(P.jsx)(_.a,{position:"static",children:Object(P.jsxs)(te,{children:[Object(P.jsx)(h.a,{onClick:function(){return L(c)},color:"inherit",children:"LabeEddit"}),Object(P.jsx)(h.a,{onClick:function(){a?(localStorage.removeItem("token"),n("Login"),I(c)):I(c)},color:"inherit",children:t})]})})},ae=n(23),ce=function(){var e=localStorage.getItem("token"),t=Object(j.useState)(e?"Logout":"Login"),n=Object(x.a)(t,2),a=n[0],c=n[1];return Object(P.jsx)($.a,{theme:Z,children:Object(P.jsxs)(ae.a,{children:[Object(P.jsx)(ne,{botaoDaBarra:a,setBotaoDaBarra:c}),Object(P.jsx)(X,{setBotaoDaBarra:c})]})})};b.a.render(Object(P.jsx)(d.a.StrictMode,{children:Object(P.jsx)(ce,{})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.c440457e.chunk.js.map