(this.webpackJsonpgodigit=this.webpackJsonpgodigit||[]).push([[0],{25:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(3),r=s.n(a),n=s(19),c=s.n(n),o=(s(25),s(20)),i=s(1),l=s(4),d=s(5),h=s(6),m=s(9),j=s(8),p=s(7),b=s.n(p),u=s(0),g=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),O=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},x=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",submitLogin:0,errors:{email:"",password:""},errorMessage:""},e.handleChange=function(t){t.preventDefault();var s=t.target,a=s.name,r=s.value,n=e.state.errors;switch(a){case"email":n.email=g.test(r)?"":"Email is not valid!";break;case"password":n.password=r.length<8?"Password must be 8 characters long!":""}e.setState(Object(l.a)({errors:n},a,r))},e.submitLogin=function(){e.setState({submitLogin:1})},e.handleSubmit=function(t){t.preventDefault();var s=e.state.errors;if(g.test(e.state.email)||(s.email="email is invalid"),e.state.password.length<8&&(s.password="password is invalid"),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{errors:s})),console.log("validate",O(e.state.errors)),!O(e.state.errors))return console.error("Invalid Form");console.log(e.state),b.a.get("https://kobzo.store/logins/login-api.php",{params:{email:e.state.email,password:e.state.password,submitLogin:e.state.submitLogin,ajax:1}}).then((function(t){console.log(t.data),1==t.data.success?window.location.href="https://www.kobzo.store/?superCustomer=1":e.setState(Object(i.a)(Object(i.a)({},e.state),{},{errorMessage:"Invalid email or password"}))})).catch((function(e){console.log(e)}))},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.state.errors;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{class:"msg-info",children:"Please login to your account"}),console.log(this.state.errorMessage),this.state.errorMessage.length>0?Object(u.jsx)("span",{class:"errorMessage",children:this.state.errorMessage}):"",Object(u.jsxs)("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email Address",class:"form-control bg-white border-md",onChange:this.handleChange,noValidate:!0})," "]}),t.email.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.email}),Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",class:"form-control bg-white  border-md",onChange:this.handleChange,noValidate:!0})," "]}),t.password.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.password}),Object(u.jsxs)("div",{class:"row justify-content-center my-3 px-3",children:[" ",Object(u.jsx)("button",{class:"btn-block btn-color",children:"Login "})," "]}),Object(u.jsxs)("div",{class:"row justify-content-center my-2",children:[" ",Object(u.jsx)("button",{onClick:function(){return e.props.changeAuthState("forgotPassword")},children:Object(u.jsx)("small",{class:"text-muted",children:"Forgot Password?"})})," "]})]}),Object(u.jsx)("div",{class:"bottom text-center mb-5",children:Object(u.jsx)("div",{class:"create",children:Object(u.jsxs)("p",{href:"#",class:"sm-text mx-auto mb-3",children:["Don't have an account?",Object(u.jsx)("button",{class:"btn btn-white ml-2",onClick:function(){return e.props.changeAuthState("signup")},children:"Create new"})]})})})]})}}]),s}(a.Component),f=(s(45),RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)),v=RegExp(/^[a-zA-Z]/),w=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},y=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={firstname:"",lastname:"",email:"",password:"",customer_privacy:0,psgdpr:0,submitCreate:0,errors:{firstname:"",lastname:"",email:"",password:"",privacy:"",psgdpr:""}},e.handleChange=function(t){t.preventDefault();var s=t.target,a=s.name,r=s.value,n=e.state.errors;switch(a){case"firstname":e.setState(Object(i.a)(Object(i.a)({},e.state),{},{firstname:r})),v.test(r)?0===r.length?n.firstname="Firstname is required":n.firstname="":n.firstname="Only letters are allowed";break;case"lastname":e.setState(Object(i.a)(Object(i.a)({},e.state),{},{lastname:r})),v.test(r)?0===r.length?n.lastname="Lastname is required":n.lastname="":n.lastname="Only letters are allowed";break;case"email":e.setState(Object(i.a)(Object(i.a)({},e.state),{},{email:r})),n.email=f.test(r)?"":"Email is not valid!";break;case"password":e.setState(Object(i.a)(Object(i.a)({},e.state),{},{password:r})),n.password=r.length<8?"Password must be 8 characters long!":"";break;case"datapolicy":console.log(r),n.privacy=1===e.state.customer_privacy?"":"please check";break;case"terms":e.setState(Object(i.a)(Object(i.a)({},e.state),{},{psgdpr:0})),console.log(r),n.psgdpr=1===e.state.psgdpr?"":"please check"}e.setState(Object(l.a)({errors:n},a,r))},e.cutomer_change=function(){0===e.state.customer_privacy?e.setState({customer_privacy:1}):e.setState({customer_privacy:0})},e.privacy_change=function(){0===e.state.psgdpr?e.setState({psgdpr:1}):e.setState({psgdpr:0})},e.submitCreate=function(){e.setState({submitCreate:1})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.customer_privacy),console.log(e.state.psgdpr);var s=e.state.errors;if(0==e.state.firstname.length&&(s.firstname="Firstname is required"),0==e.state.lastname.length&&(s.lastname="Lastname is required"),f.test(e.state.email)||(s.email="Email is invalid"),e.state.password.length<8&&(s.password="Password is invalid"),0===e.state.customer_privacy?s.privacy="please check customer data policy":s.privacy="",0===e.state.psgdpr?s.psgdpr="please check terms and condition":s.psgdpr="",e.setState(Object(i.a)(Object(i.a)({},e.state),{},{errors:s})),console.log(e.state),console.log("validate",w(e.state.errors)),!w(e.state.errors))return console.error("Invalid Form");b.a.get("https://kobzo.store/logins/login-api.php",{params:{firstname:e.state.firstname,lastname:e.state.lastname,email:e.state.email,password:e.state.password,submitCreate:e.state.submitCreate,create_account:1,customer_privacy:e.state.customer_privacy,psgdpr:e.state.psgdpr,ajax:1}}).then((function(t){console.log(t.data);var s=t.data,a=(s.success,s.error);if(1==t.data.success&&(window.location.href="https://www.kobzo.store/?superCustomer=1"),a){var r=t.data[0],n=e.state.errors;n.firstname=r.firstname,n.lastname=r.lastname,n.email=r.email,n.password=r.password,n.privacy=r.customer_privacy,n.psgdpr=r.psgdpr,e.setState(Object(i.a)(Object(i.a)({},e.state),{},{errors:n}))}})).catch((function(e){console.log(e)}))},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.state.errors;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[Object(u.jsx)("h6",{class:"msg-info",children:"Please register here"}),Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{type:"text",id:"firstname",name:"firstname",placeholder:" Firstname",class:"form-control",onChange:this.handleChange,noValidate:!0})," "]}),t.firstname.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.firstname}),Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{type:"text",id:"lastname",name:"lastname",placeholder:" Lastname",class:"form-control",onChange:this.handleChange,noValidate:!0})," "]}),t.lastname.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.lastname}),Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{type:"text",id:"email",name:"email",placeholder:" Email id",class:"form-control",onChange:this.handleChange,noValidate:!0})," "]}),t.email.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.email}),Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",class:"form-control",onChange:this.handleChange,noValidate:!0})," "]}),t.password.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.password}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{for:"datapolicy",className:"label",children:[" ",Object(u.jsx)("input",{type:"checkbox",id:"datapolicy",name:"datapolicy",value:this.state.customer_privacy,onChange:this.cutomer_change})," ","Customer data policy"]}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"terms",children:'The personal data you provide is used to answer queries, process orders or allow access to specific information. You have the right to modify and delete all the personal information found in the "My Account" page.'}),1===this.state.customer_privacy?"":Object(u.jsx)("span",{className:"errorMessage",children:t.privacy}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{for:"terms",className:"label",children:[" ",Object(u.jsx)("input",{type:"checkbox",id:"terms",name:"terms",value:this.state.psgdpr,onChange:this.privacy_change}),"   ","   ","I agree to the terms and conditions and the privacy policy"]}),Object(u.jsx)("br",{}),1===this.state.psgdpr?"":Object(u.jsx)("span",{className:"errorMessage",children:t.psgdpr}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{class:"row justify-content-center my-3 px-3",children:[" ",Object(u.jsxs)("button",{class:"btn-block btn-color",onClick:this.submitCreate,children:["Register"," "]})," "]}),Object(u.jsxs)("div",{class:"row justify-content-center my-2",children:[" ",Object(u.jsx)("button",{onClick:function(){return e.props.changeAuthState("signin")},children:Object(u.jsx)("small",{class:"text-muted",children:"Registered User ? Login"})})," "]})]})})}}]),s}(a.Component),S=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),C=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},k=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={email:"",errorMessage:"",passwordSetMessage:"",errors:{email:""}},e.handleChange=function(t){t.preventDefault();var s=t.target,a=s.name,r=s.value,n=e.state.errors;switch(a){case"email":n.email=S.test(r)?"":"Email is not valid!"}e.setState(Object(l.a)({errors:n},a,r))},e.handleSubmit=function(t){t.preventDefault();var s=e.state.errors;if(S.test(e.state.email)||(s.email="email is invalid"),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{errors:s})),console.log("validate",C(e.state.errors)),!C(e.state.errors))return console.error("Invalid Form");console.log(e.state),b.a.get("https://kobzo.store/logins//auth-api.php",{params:{email:e.state.email,ajax:1}}).then((function(t){var s=t.data,a=s.success,r=s.errors;console.log(t.data),a&&a.length>0&&e.setState(Object(i.a)(Object(i.a)({},e.state),{},{passwordSetMessage:a[0]})),r&&r.length>0&&e.setState(Object(i.a)(Object(i.a)({},e.state),{},{errorMessage:r[0]}))})).catch((function(e){console.log(e)}))},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.state.errors;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h6",{class:"msg-info",children:"Reset password"}),this.state.errorMessage.length>0?Object(u.jsx)("span",{class:"errorMessage",children:this.state.errorMessage}):"",this.state.passwordSetMessage.length>0?Object(u.jsx)("span",{class:"passwordSetMessage",children:this.state.passwordSetMessage}):"",Object(u.jsxs)("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[Object(u.jsxs)("div",{class:"form-group",children:[" ",Object(u.jsx)("input",{type:"text",id:"email",name:"email",placeholder:" Email id",class:"form-control",onChange:this.handleChange,noValidate:!0})," "]}),t.email.length>0&&Object(u.jsx)("span",{className:"errorMessage",children:t.email}),Object(u.jsxs)("div",{class:"row justify-content-center my-3 px-3",children:[" ",Object(u.jsx)("button",{class:"btn-block btn-color",children:"Send "})," "]}),Object(u.jsxs)("div",{class:"row justify-content-center my-2",children:[" ",Object(u.jsx)("button",{onClick:function(){return e.props.changeAuthState("signin")},children:Object(u.jsx)("small",{class:"text-muted",children:"Login"})})," "]})]}),Object(u.jsx)("div",{class:"bottom text-center mb-5",children:Object(u.jsx)("div",{class:"create",children:Object(u.jsxs)("p",{href:"#",class:"sm-text mx-auto mb-3",children:["Don't have an account?",Object(u.jsx)("button",{class:"btn btn-white ml-2",onClick:function(){return e.props.changeAuthState("signup")},children:"Create new"})]})})})]})}}]),s}(a.Component),M=function(){var e=Object(a.useState)("signin"),t=Object(o.a)(e,2),s=t[0],r=t[1],n=function(e){r(e)},c=Object(u.jsx)(x,{changeAuthState:n});return"signup"==s&&(c=Object(u.jsx)(y,{changeAuthState:n})),"forgotPassword"==s&&(c=Object(u.jsx)(k,{changeAuthState:n})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{class:"container px-4 py-5 mx-auto",children:Object(u.jsx)("div",{class:"card card0",children:Object(u.jsxs)("div",{class:"d-flex flex-lg-row flex-column-reverse",children:[Object(u.jsxs)("div",{class:"card card1",children:[Object(u.jsx)("div",{class:"row justify-content-center my-auto",children:Object(u.jsxs)("div",{class:"col-md-8 col-10 my-5",children:[Object(u.jsxs)("div",{class:"row justify-content-center px-3 mb-3",children:[" ",Object(u.jsx)("img",{id:"logo",src:"logo_vi.png"})," "]}),Object(u.jsx)("h3",{class:"mb-5 text-center heading"}),c]})}),Object(u.jsx)("div",{class:"bottom text-center mb-5",children:Object(u.jsxs)("div",{class:"row",children:[Object(u.jsx)("div",{class:"col-sm-2"}),Object(u.jsx)("div",{class:"col-sm-8",children:Object(u.jsx)("p",{class:"copyright sm-text text-center mx-auto mb-0 mt-6",children:"Copyright 2021 - KobZo SuperStore - All Rights Reserved."})}),Object(u.jsx)("div",{class:"col-sm-2"})]})})]}),Object(u.jsx)("div",{class:"card card2",children:Object(u.jsxs)("div",{class:"my-auto mx-md-5 px-md-5 right",children:[Object(u.jsx)("h3",{class:"text-white1",children:"Work from home store"})," ",Object(u.jsx)("img",{src:"banner1.png",alt:"banner",class:"banner"}),Object(u.jsx)("small",{class:"text-white",children:"An exclusive SuperStore for corporate employees."}),Object(u.jsx)("p",{style:{color:"white"},children:"For any support, please contact hello@kobzo.com or call us at 9361133463 (10am - 6pm)"})]})})]})})})})};var _=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(M,{})})};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ac6d6a73.chunk.js.map