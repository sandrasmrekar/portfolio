(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,n){e.exports={container:"AboutMeScreen_container__2zUwt",subContainer:"AboutMeScreen_subContainer__2po7t",titleContainer:"AboutMeScreen_titleContainer__1i7cr",header:"AboutMeScreen_header__1-vYt",blue:"AboutMeScreen_blue__17Woo",logo:"AboutMeScreen_logo__1WekL"}},16:function(e,t,n){e.exports={container:"ProjectItem_container__37yAw",headerContainer:"ProjectItem_headerContainer__2b00X",header:"ProjectItem_header__1wpJW",text:"ProjectItem_text__219N2",link:"ProjectItem_link__ZHgG2"}},188:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(71),o=n.n(i),c=(n(84),n(85),n(86),n(4)),l=Math.pow;function s(e){var t,n,r,a=e.targetPosition,i=e.initialPosition,o=e.duration,c=window.requestAnimationFrame,s=window.cancelAnimationFrame,u=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=i-a;r=c((function e(a){void 0===t&&(t=a);var d=a-t,j=1-l(1-d/o,4);n=i-b*Math.min(j,1),window.scrollTo(0,n),i===u||window.scrollY!==u?d<o&&(r=c(e)):s(r)}))}var u,b=n(79),d=["title","titleId"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){var n=e.title,a=e.titleId,i=m(e,d);return r.createElement("svg",j({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"348.333px",height:"348.334px",viewBox:"0 0 348.333 348.334",fill:"#ffffff",xmlSpace:"preserve",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,u||(u=r.createElement("g",null,r.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"}))))}var f=r.forwardRef(h),O=(n.p,n(72)),p=n.n(O),x=n(0);function _(e){var t=e.onClick;return Object(x.jsx)(f,{className:p.a.icon,onClick:t})}var v=n(34),w=n.n(v);function g(e){var t=e.show,n=e.message,r=e.onClose;return Object(x.jsxs)("div",{className:t?w.a.showNotification:w.a.hideNotification,children:[Object(x.jsx)("p",{className:w.a.small,children:n}),Object(x.jsx)(_,{onClick:r})]})}var C=n(5),y=n.n(C),S=n(78),N=n(24),E="START_SECTION",I="WORK_SECTION",M="ABOUT_ME_SECTION",k="CONTACT_SECTION",T=N.a().shape({from_name:N.b().required("Required"),message:N.b().required("Required"),reply_to:N.b().email("Invalid email").required("Required")});function A(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),o=Object(c.a)(i,2),l=o[0],s=o[1],u=n?"Opps... something went wrong":" Yey! \ud83d\ude4c Thank you for your email. I will get back to you as soon as possible.",d=Object(S.a)({initialValues:{from_name:"",to_name:"Sandra",message:"",reply_to:""},validationSchema:T,onSubmit:function(e){!function(e){b.a.send("service_1998","template_bs72nbs",e,"user_DLUwt23xcLcD6bRCXfOEw").then((function(e){a(!1),s(!0),d.setSubmitting(!1),d.resetForm()}),(function(e){a(!0),s(!0),d.setSubmitting(!1)}))}(e)}});return Object(x.jsxs)("div",{id:k,className:y.a.container,children:[Object(x.jsx)(g,{show:l,onClose:function(){s(!1)},message:u}),Object(x.jsxs)("div",{className:y.a.titleContainer,children:[Object(x.jsx)("h1",{children:"CONTACT"}),Object(x.jsx)("h1",{className:y.a.blue,children:"ME"})]}),Object(x.jsx)("p",{children:"I would love to here from you and tell more about myself and my journey. Send me an email down below."}),Object(x.jsxs)("form",{onSubmit:d.handleSubmit,children:[Object(x.jsxs)("div",{className:y.a.formInput,children:[Object(x.jsx)("label",{htmlFor:"from_name",children:"NAME"}),Object(x.jsx)("input",{id:"from_name",name:"from_name",type:"text",value:d.values.from_name,onChange:d.handleChange})]}),d.errors.from_name&&Object(x.jsx)("p",{className:y.a.errorMessage,children:d.errors.from_name}),Object(x.jsxs)("div",{className:y.a.formInput,children:[Object(x.jsx)("label",{htmlFor:"reply_to",children:"EMAIL"}),Object(x.jsx)("input",{id:"reply_to",name:"reply_to",type:"reply_to",value:d.values.reply_to,onChange:d.handleChange})]}),d.errors.reply_to&&Object(x.jsx)("p",{className:y.a.errorMessage,children:d.errors.reply_to}),Object(x.jsxs)("div",{className:y.a.formInput,children:[Object(x.jsx)("label",{htmlFor:"message",children:"MESSAGE"}),Object(x.jsx)("textarea",{id:"message",name:"message",type:"text",value:d.values.message,onChange:d.handleChange})]}),d.errors.message&&Object(x.jsx)("p",{className:y.a.errorMessage,children:d.errors.message}),Object(x.jsx)("button",{type:"submit",className:y.a.sendBtn,children:d.isSubmitting?"Sending...":"SEND EMAIL"})]})]})}var L,P,H,B=n(11),V=n.n(B),R=["title","titleId"];function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Z(e,t){var n=e.title,a=e.titleId,i=F(e,R);return r.createElement("svg",Y({width:"100%",height:"100%",viewBox:" 0 0 2000 750",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,L||(L=r.createElement("path",{d:"M557 46.406L2100 136.005V152.929L557 145.582V46.406Z",fill:"#E3E1FF"})),P||(P=r.createElement("path",{d:"M0 613.824L1530 591.675L1292 623.316L0 713V613.824Z",fill:"#E3E1FF"})),H||(H=r.createElement("path",{d:"M0 0L2100 151.874V580.074L0 695.034V0Z",fill:"#F9F9F9"})))}var W,D,J,q=r.forwardRef(Z),G=(n.p,n(47)),z=n.n(G);function Q(e){var t=e.label;return Object(x.jsx)("div",{className:z.a.bubble,children:Object(x.jsx)("p",{className:z.a.blue,children:t})})}function U(){return Object(x.jsxs)("div",{id:M,className:V.a.container,children:[Object(x.jsxs)("div",{className:V.a.subContainer,children:[Object(x.jsxs)("div",{className:V.a.titleContainer,children:[Object(x.jsx)("h1",{className:V.a.header,children:"ABOUT"}),Object(x.jsx)("h1",{className:V.a.blue,children:"ME"})]}),Object(x.jsxs)("p",{children:["Software engineer with a lot of passion for buildng cool stuff. Studying Computer science and application development in Malm\xf6 Sweden, graduating summer 2021. Specializing in frontend development."," "]})]}),Object(x.jsxs)("div",{className:V.a.subContainer,children:[Object(x.jsx)("h3",{className:V.a.header,children:"What skills I have"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(Q,{label:"Java"}),Object(x.jsx)(Q,{label:"Java Script"}),Object(x.jsx)(Q,{label:"React"}),Object(x.jsx)(Q,{label:"React Native"}),Object(x.jsx)(Q,{label:"ios"}),Object(x.jsx)(Q,{label:"Github"}),Object(x.jsx)(Q,{label:"Git"}),Object(x.jsx)(Q,{label:"Agile development"})]})]}),Object(x.jsx)("div",{className:V.a.logo,children:Object(x.jsx)(q,{})})]})}var X=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ee(e,t){var n=e.title,a=e.titleId,i=$(e,X);return r.createElement("svg",K({width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,W||(W=r.createElement("path",{d:"M35.0861 16.0714H14.9131L24.9996 24.717L35.0861 16.0714Z",fill:"white"})),D||(D=r.createElement("path",{d:"M24.9997 26.7857C24.7865 26.7857 24.5803 26.7094 24.4186 26.5704L13.3926 17.1195V33.9286H36.6069V17.1195L25.5809 26.5704C25.4191 26.7094 25.2129 26.7857 24.9997 26.7857Z",fill:"white"})),J||(J=r.createElement("path",{d:"M25 0C11.193 0 0 11.193 0 25C0 38.807 11.193 50 25 50C38.807 50 50 38.807 50 25C49.9843 11.1995 38.8005 0.0156948 25 0ZM38.3929 34.8214C38.3929 35.3145 37.9931 35.7143 37.5 35.7143H12.5C12.0069 35.7143 11.6071 35.3145 11.6071 34.8214V15.1786C11.6071 14.6855 12.0069 14.2857 12.5 14.2857H37.5C37.9931 14.2857 38.3929 14.6855 38.3929 15.1786V34.8214Z",fill:"white"})))}var te,ne=r.forwardRef(ee),re=(n.p,["title","titleId"]);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function oe(e,t){var n=e.title,a=e.titleId,i=ie(e,re);return r.createElement("svg",ae({width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,te||(te=r.createElement("path",{d:"M25 0C11.2686 0 0 11.2686 0 25C0 36.7176 8.2222 47.3618 19.1406 50V41.729C18.0588 41.9659 17.0631 41.9727 15.9618 41.6481C14.4844 41.2121 13.2839 40.2279 12.3928 38.7272C11.8248 37.7689 10.8181 36.7298 9.76791 36.8061L9.51042 33.8879C11.7813 33.6933 13.7459 35.2715 14.912 37.2307C15.4301 38.102 16.0263 38.6127 16.7915 38.8386C17.5312 39.0564 18.3254 38.9519 19.2509 38.625C19.4832 36.7722 20.332 36.0786 20.9732 35.1021V35.1006C14.4615 34.1293 11.8664 30.6747 10.8364 27.948C9.47151 24.3275 10.2039 19.8044 12.6175 16.946C12.6644 16.8903 12.7491 16.7446 12.7163 16.6428C11.6096 13.2999 12.9581 10.5347 13.0077 10.2413C14.2849 10.619 14.4924 9.86137 18.5555 12.3299L19.2577 12.7518C19.5515 12.9269 19.4592 12.8269 19.7529 12.8048C21.4493 12.344 23.2376 12.0895 24.9996 12.0667C26.775 12.0895 28.5519 12.344 30.3185 12.8235L30.5458 12.8464C30.526 12.8433 30.6076 12.8319 30.7446 12.7502C35.82 9.67598 35.6377 10.6808 36.9987 10.2383C37.048 10.532 38.3785 13.3423 37.2837 16.6428C37.1361 17.0975 41.684 21.262 39.1632 27.9469C38.1332 30.6747 35.5385 34.1293 29.0268 35.1006V35.1021C29.8615 36.3743 30.8643 37.051 30.859 39.6755V50C41.7778 47.3618 49.9996 36.7176 49.9996 25C50 11.2686 38.7314 0 25 0V0Z",fill:"white"})))}var ce,le,se=r.forwardRef(oe),ue=(n.p,["title","titleId"]);function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function je(e,t){var n=e.title,a=e.titleId,i=de(e,ue);return r.createElement("svg",be({width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,ce||(ce=r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M25 0.00012207C11.195 0.00012207 0 11.1951 0 25.0001C0 38.8051 11.195 50.0001 25 50.0001C38.805 50.0001 50 38.8051 50 25.0001C50 11.1951 38.805 0.00012207 25 0.00012207ZM17.7353 37.7931H11.6467V19.4753H17.7353V37.7931ZM14.6912 16.974H14.6515C12.6083 16.974 11.2869 15.5675 11.2869 13.8097C11.2869 12.0122 12.6488 10.6447 14.7316 10.6447C16.8144 10.6447 18.0962 12.0122 18.1358 13.8097C18.1358 15.5675 16.8144 16.974 14.6912 16.974ZM39.6896 37.7931H33.6018V27.9935C33.6018 25.5307 32.7202 23.8511 30.5172 23.8511C28.8353 23.8511 27.8336 24.9841 27.3933 26.0778C27.2324 26.4692 27.1931 27.0162 27.1931 27.5636V37.7931H21.1048C21.1048 37.7931 21.1845 21.1938 21.1048 19.4753H27.1931V22.0689C28.0022 20.8207 29.4498 19.0454 32.6801 19.0454C36.6859 19.0454 39.6896 21.6634 39.6896 27.2897V37.7931Z",fill:"white"}))),le||(le=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:50,height:50,fill:"white",transform:"translate(0 0.00012207)"})))))}var me=r.forwardRef(je),he=(n.p,n(22)),fe=n.n(he);function Oe(){return Object(x.jsxs)("div",{id:"links",className:fe.a.container,children:[Object(x.jsx)("div",{onClick:function(){s({targetPosition:document.getElementById(k).offsetTop,initialPosition:window.scrollY,duration:1500})},children:Object(x.jsx)(ne,{className:fe.a.icon})}),Object(x.jsx)("a",{href:"https://github.com/sandrasmrekar",children:Object(x.jsx)(se,{className:fe.a.icon})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/sandrasmrekar/",children:Object(x.jsx)(me,{className:fe.a.icon})})]})}var pe=n(6),xe=n.n(pe);function _e(){var e=document.getElementById("links"),t=Object(r.useState)(window.scrollY),n=Object(c.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(xe.a.background),l=Object(c.a)(o,2),s=l[0],u=l[1];Object(r.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}));var b=function(t){a>window.scrollY&&window.scrollY<40&&e?(u(xe.a.background),e.style.right="40px",e.style.bottom="40px"):a<window.scrollY&&window.scrollY>20&&e&&(u(xe.a.backgroundScroll),e.style.right="8%",e.style.bottom="8%"),i(window.scrollY)};return Object(x.jsxs)("section",{id:E,className:xe.a.container,children:[Object(x.jsx)("div",{className:s}),Object(x.jsxs)("div",{className:xe.a.titleContainer,children:[Object(x.jsx)("p",{className:xe.a.blue,children:"Hi I'm "}),Object(x.jsx)("h1",{className:xe.a.white,children:"SANDRA SMREKAR"}),Object(x.jsx)("h2",{className:xe.a.grey,children:"A frontend developer"}),Object(x.jsx)("h4",{className:xe.a.text,children:"I am a software engineer with passion for coding and learning new things."})]}),Object(x.jsx)(Oe,{})]})}var ve=n(23),we=n.n(ve);function ge(e){var t=e.open,n=Object(r.useState)(window.scrollY),a=Object(c.a)(n,2),i=a[0],o=a[1],l=document.getElementById(we.a.navicon3);Object(r.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}));var s=function(e){i>window.scrollY&&window.scrollY<40&&l?(l.style.right="10px",l.style.transitionDuration="300ms"):i<window.scrollY&&window.scrollY>20&&l&&(l.style.right="50%",l.style.transitionDuration="300ms"),o(window.scrollY)};return Object(x.jsxs)("div",{className:t?we.a.open:we.a.closed,id:we.a.navicon3,children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{})]})}var Ce=n(7),ye=n.n(Ce),Se=Object(r.createContext)();function Ne(e){var t=e.value,n=e.onChange,a=e.children,i=Object(r.useState)(!1),o=Object(c.a)(i,2),l=o[0],s=o[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{onClick:function(){s((function(e){return!e}))},className:ye.a.hamburger,children:Object(x.jsx)(ge,{open:l})}),Object(x.jsx)("div",{className:l?ye.a.containerShow:ye.a.containerHide,children:Object(x.jsx)(Se.Provider,{value:{value:t,handleOnChange:function(e){n&&(n(e),s(!1))}},children:Object(x.jsx)("div",{className:ye.a.menuItemContainer,children:a})})})]})}Ne.Item=function(e){var t=e.label,n=e.value,a=Object(r.useContext)(Se);return Object(x.jsxs)("div",{className:ye.a.menuItem,onClick:function(){a.handleOnChange(n)},children:[n===a.value?Object(x.jsx)("div",{className:ye.a.barActive}):Object(x.jsx)("div",{className:ye.a.bar}),n===a.value?Object(x.jsx)("h2",{className:ye.a.textActive,children:t}):Object(x.jsx)("h3",{className:ye.a.text,children:t})]})};var Ee=n(16),Ie=n.n(Ee);function Me(e){var t=e.children;return Object(x.jsx)("div",{className:Ie.a.container,children:Object(x.jsx)("div",{children:t})})}Me.Header=function(e){var t=e.label,n=e.number;return Object(x.jsxs)("div",{className:Ie.a.headerContainer,children:[Object(x.jsx)("h1",{className:Ie.a.header,children:n}),Object(x.jsx)("h1",{className:Ie.a.header,children:t})]})},Me.SubHeader=function(e){var t=e.label;return Object(x.jsx)("h2",{children:t})},Me.Text=function(e){var t=e.text,n=e.link;return Object(x.jsxs)("p",{className:Ie.a.text,children:[t,Object(x.jsx)("a",{href:n,className:Ie.a.link,children:"View source code"})]})};var ke=n(35),Te=n.n(ke);function Ae(){return Object(x.jsxs)("div",{id:I,className:Te.a.container,children:[Object(x.jsxs)("div",{className:Te.a.titleContainer,children:[Object(x.jsx)("h1",{children:"MY"}),Object(x.jsx)("h1",{className:Te.a.blue,children:"PROJECTS"})]}),Object(x.jsxs)(Me,{children:[Object(x.jsx)(Me.Header,{label:"Green",number:"01"}),Object(x.jsx)(Me.SubHeader,{label:"01 Green"}),Object(x.jsx)(Me.Text,{text:"This is a e-commerce website that I did as a project to learn more about building with MERN stack, Mongo, E, React and Node.",link:"https://github.com/sandrasmrekar/green-ecommerce"})]}),Object(x.jsxs)(Me,{children:[Object(x.jsx)(Me.Header,{label:"Algorithms",number:"02"}),Object(x.jsx)(Me.SubHeader,{label:"02 Algorithms"}),Object(x.jsx)(Me.Text,{text:"This is a small project exploring sorting algorithms. Visit this project to see how it works.",link:"https://github.com/sandrasmrekar/sorting-algorithms"})]}),Object(x.jsxs)(Me,{children:[Object(x.jsx)(Me.Header,{label:"Quiet Zone",number:"03"}),Object(x.jsx)(Me.SubHeader,{label:"03 Quiet Zone"}),Object(x.jsx)(Me.Text,{text:"Quiet Zone is a mobile application created with React Native. This application puts the mobile on quiet mode, when the user is on a location where the user wishes not to be disturbed. ",link:"https://github.com/sandrasmrekar/QuietZone"})]}),Object(x.jsxs)(Me,{children:[Object(x.jsx)(Me.Header,{label:"Portfolio",number:"04"}),Object(x.jsx)(Me.SubHeader,{label:"04 Portfolio"}),Object(x.jsx)(Me.Text,{text:"Do you want to know how I build this portfolio websites? The source code is available on my github.",link:"https://github.com/sandrasmrekar/portfolio"})]})]})}function Le(){var e=Object(r.useState)(E),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.useCallback)((function(){a(function(){var e=.1*window.innerHeight,t=window.scrollY+e,n=document.getElementById(E),r=document.getElementById(I),a=document.getElementById(M),i=document.getElementById(k);return t>=n.offsetTop&&t<r.offsetTop?E:t>=r.offsetTop&&t<a.offsetTop?I:t>=a.offsetTop&&t<i.offsetTop?M:t>=i.offsetTop?k:void 0}())}),[]);Object(r.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[i]);return Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsxs)(Ne,{value:n,onChange:function(e){var t=document.getElementById(e),n=window.scrollY;s({targetPosition:t.offsetTop,initialPosition:n,duration:1500})},children:[Object(x.jsx)(Ne.Item,{label:"Welcome",value:E}),Object(x.jsx)(Ne.Item,{label:"Work",value:I}),Object(x.jsx)(Ne.Item,{label:"About me",value:M}),Object(x.jsx)(Ne.Item,{label:"Contact",value:k})]}),Object(x.jsx)(_e,{}),Object(x.jsx)(Ae,{}),Object(x.jsx)(U,{}),Object(x.jsx)(A,{})]})}var Pe=function(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(Le,{})})},He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Pe,{})}),document.getElementById("root")),He()},22:function(e,t,n){e.exports={icon:"LinkIcons_icon__2L0Ya",container:"LinkIcons_container__3ET9k",containerScroll:"LinkIcons_containerScroll__2xFZ6"}},23:function(e,t,n){e.exports={navicon3:"Hamburger_navicon3__5rrYJ",open:"Hamburger_open__1125m"}},34:function(e,t,n){e.exports={showNotification:"Notification_showNotification__2U2CR",hideNotification:"Notification_hideNotification__1HBSW",small:"Notification_small__1bhvO"}},35:function(e,t,n){e.exports={container:"WorkScreen_container__1WaiK",titleContainer:"WorkScreen_titleContainer__12zA5",blue:"WorkScreen_blue__2nXnW"}},47:function(e,t,n){e.exports={bubble:"Bubble_bubble__3BrDT",blue:"Bubble_blue__2mde3"}},5:function(e,t,n){e.exports={container:"ContactMeScreen_container__8HWPX",titleContainer:"ContactMeScreen_titleContainer__1ogYs",errorMessage:"ContactMeScreen_errorMessage__eG0jA",formInput:"ContactMeScreen_formInput__1FdYs",sendBtn:"ContactMeScreen_sendBtn__2bMDV",blue:"ContactMeScreen_blue__3uul5"}},6:function(e,t,n){e.exports={titleContainer:"StartScreen_titleContainer__22VJJ",container:"StartScreen_container__mUANM",background:"StartScreen_background__fbIjC",backgroundScroll:"StartScreen_backgroundScroll__hvfKz",white:"StartScreen_white__196lp",grey:"StartScreen_grey__dw0mJ",text:"StartScreen_text__3hmyi",blue:"StartScreen_blue__14FBn"}},7:function(e,t,n){e.exports={containerShow:"Menu_containerShow__3b8Qz",containerHide:"Menu_containerHide__1gaWa",showButton:"Menu_showButton__2LR7V",hideButton:"Menu_hideButton__1SmXN",menuItemContainer:"Menu_menuItemContainer__1b6NR",menuItem:"Menu_menuItem__1361Z",text:"Menu_text__3D3Te",textActive:"Menu_textActive__aBQR6",hamburger:"Menu_hamburger__K_Sbi",bar:"Menu_bar__94HsJ",barActive:"Menu_barActive__2Ao3h"}},72:function(e,t,n){e.exports={icon:"CloseButton_icon__1PdoZ"}},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){}},[[188,1,2]]]);
//# sourceMappingURL=main.edd42e54.chunk.js.map