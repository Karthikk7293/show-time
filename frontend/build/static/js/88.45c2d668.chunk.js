/*! For license information please see 88.45c2d668.chunk.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[88],{7412:function(e,t,a){"use strict";a(2791);var r=a(184);t.Z=function(e){var t=e.color;return(0,r.jsx)("div",{className:"".concat(t?" m-0 p-0 col-lg-0 my-auto":"col-lg-12  my-2   mx-auto text-center"),children:(0,r.jsx)("div",{className:"spinner-border  ".concat(t?"text-primary py-auto":"text-white mx-auto",' " role="status')})})}},1088:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var r=a(2791),s=a(7022),n=a(9743),c=a(2677),o=a(1413),i=a(885),l=a(3504),u=a(6871),d=a(9434),p=a(4691),m=a(7412),x=a(184);var f=function(){var e=(0,r.useState)({name:"",email:"",password:"",confirmPassword:""}),t=(0,i.Z)(e,2),a=t[0],s=t[1],n=(0,r.useState)({name:"",email:"",password:"",confirmPassword:""}),c=(0,i.Z)(n,2),f=c[0],v=(c[1],(0,u.s0)()),h=(0,d.I0)(),y=(0,d.v9)((function(e){return e.user})),N=y.loading;return y.error,y.user,y.isAuthenticated&&v("/"),(0,x.jsxs)("div",{className:"login-card my-1",children:[(0,x.jsx)("div",{className:"login-tilte text-center mt-5",children:(0,x.jsx)("h2",{className:"text-muted",children:"REGISTER"})}),(0,x.jsxs)("form",{action:"",className:"login-form",onSubmit:function(e){e.preventDefault(),a.password===a.confirmPassword?h((0,p.a$)(a)):alert("password error")},children:[(0,x.jsx)("div",{className:"login-cancel text-white text-end  ",children:(0,x.jsx)(l.rU,{to:"/",children:(0,x.jsx)("ion-icon",{name:"close-outline"})})}),(0,x.jsxs)("div",{className:"row login-row py-5",children:[N?(0,x.jsx)(m.Z,{}):"",(0,x.jsxs)("div",{className:"col-lg-12  my-2  px-4  mx-auto text-center",children:[(0,x.jsx)("input",{className:"py-2 px-2 w-100",type:"text",placeholder:"name",pattern:"^[a-zA-Z]+(?:\\s+[a-zA-Z]+){4,}*$",title:"Please Enter Letters Only",onChange:function(e){return s((0,o.Z)((0,o.Z)({},a),{},{name:e.target.value}))},required:!0}),(0,x.jsx)("p",{className:"text-danger",children:f.name})]}),(0,x.jsxs)("div",{className:"col-lg-12  my-2 px-4 mx-auto text-center",children:[(0,x.jsx)("input",{className:"py-2 px-2 w-100 ",type:"email",placeholder:"email",pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",title:"Please Enter Valid Email id",onChange:function(e){return s((0,o.Z)((0,o.Z)({},a),{},{email:e.target.value}))},required:!0}),(0,x.jsx)("p",{className:"text-danger",children:f.email})]}),(0,x.jsxs)("div",{className:"col-lg-12  my-2 px-4 mx-auto text-center",children:[(0,x.jsx)("input",{className:"py-2 px-2 w-100",type:"text",placeholder:"password",title:"Password Have minimum 6 Characters",pattern:"^[a-zA-Z0-9]{6,10}$",onChange:function(e){return s((0,o.Z)((0,o.Z)({},a),{},{password:e.target.value}))},required:!0}),(0,x.jsx)("p",{className:"text-danger",children:f.password})]}),(0,x.jsxs)("div",{className:"col-lg-12  my-2 px-4 mx-auto text-center",children:[(0,x.jsx)("input",{className:"py-2 px-2 w-100",type:"text",placeholder:"confirm password",onChange:function(e){return s((0,o.Z)((0,o.Z)({},a),{},{confirmPassword:e.target.value}))},required:!0}),(0,x.jsx)("p",{className:"text-danger",children:f.confirmPassword})]}),(0,x.jsx)("div",{className:"col-lg-10 mx-auto my-2 text-end ",children:(0,x.jsx)("input",{type:"submit",className:"px-4 py-1",placeholder:"SIGNUP",value:"SIGNUP"})}),(0,x.jsx)("div",{className:"col-lg-10 mx-auto ",children:(0,x.jsxs)("p",{className:"text-muted navigate-to-login ",children:["Already have an Account? ",(0,x.jsx)("span",{className:"text-primary ",children:(0,x.jsx)(l.rU,{to:"/login",children:"LOGIN"})})]})})]})]})]})};var v=function(){return(0,x.jsx)(s.Z,{fluid:!0,children:(0,x.jsx)(n.Z,{className:"m-auto",children:(0,x.jsx)(c.Z,{className:"mx-auto",lg:3,children:(0,x.jsx)(f,{})})})})}},1694:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var c=s.apply(null,a);c&&e.push(c)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},2677:function(e,t,a){"use strict";var r=a(885),s=a(1413),n=a(5987),c=a(1694),o=a.n(c),i=a(2791),l=a(162),u=a(184),d=["as","bsPrefix","className"],p=["className"];var m=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,r=e.className,c=(0,n.Z)(e,d);a=(0,l.vE)(a,"col");var i=(0,l.pi)(),u=[],p=[];return i.forEach((function(e){var t,r,s,n=c[e];delete c[e],"object"===typeof n&&null!=n?(t=n.span,r=n.offset,s=n.order):t=n;var o="xs"!==e?"-".concat(e):"";t&&u.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=s&&p.push("order".concat(o,"-").concat(s)),null!=r&&p.push("offset".concat(o,"-").concat(r))})),[(0,s.Z)((0,s.Z)({},c),{},{className:o().apply(void 0,[r].concat(u,p))}),{as:t,bsPrefix:a,spans:u}]}(e),c=(0,r.Z)(a,2),i=c[0],m=i.className,x=(0,n.Z)(i,p),f=c[1],v=f.as,h=void 0===v?"div":v,y=f.bsPrefix,N=f.spans;return(0,u.jsx)(h,(0,s.Z)((0,s.Z)({},x),{},{ref:t,className:o()(m,!N.length&&y)}))}));m.displayName="Col",t.Z=m},7022:function(e,t,a){"use strict";var r=a(1413),s=a(5987),n=a(1694),c=a.n(n),o=a(2791),i=a(162),l=a(184),u=["bsPrefix","fluid","as","className"],d=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,o=e.as,d=void 0===o?"div":o,p=e.className,m=(0,s.Z)(e,u),x=(0,i.vE)(a,"container"),f="string"===typeof n?"-".concat(n):"-fluid";return(0,l.jsx)(d,(0,r.Z)((0,r.Z)({ref:t},m),{},{className:c()(p,n?"".concat(x).concat(f):x)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.Z=d},9743:function(e,t,a){"use strict";var r=a(1413),s=a(5987),n=a(1694),c=a.n(n),o=a(2791),i=a(162),l=a(184),u=["bsPrefix","className","as"],d=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,p=(0,s.Z)(e,u),m=(0,i.vE)(a,"row"),x=(0,i.pi)(),f="".concat(m,"-cols"),v=[];return x.forEach((function(e){var t,a=p[e];delete p[e],t=null!=a&&"object"===typeof a?a.cols:a;var r="xs"!==e?"-".concat(e):"";null!=t&&v.push("".concat(f).concat(r,"-").concat(t))})),(0,l.jsx)(d,(0,r.Z)((0,r.Z)({ref:t},p),{},{className:c().apply(void 0,[n,m].concat(v))}))}));d.displayName="Row",t.Z=d},162:function(e,t,a){"use strict";a.d(t,{pi:function(){return o},vE:function(){return c}});var r=a(2791),s=(a(184),["xxl","xl","lg","md","sm","xs"]),n=r.createContext({prefixes:{},breakpoints:s});n.Consumer,n.Provider;function c(e,t){var a=(0,r.useContext)(n).prefixes;return e||a[t]||t}function o(){return(0,r.useContext)(n).breakpoints}},5987:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(3366);function s(e,t){if(null==e)return{};var a,s,n=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}}}]);
//# sourceMappingURL=88.45c2d668.chunk.js.map