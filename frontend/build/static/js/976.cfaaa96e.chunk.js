"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[976,60,392],{318:function(e,n,t){t.d(n,{AW:function(){return d},cW:function(){return o}});var a=t(5861),s=t(7757),i=t.n(s),r=t(4569),l=t.n(r),c=t(4520),o=function(e){return function(){var n=(0,a.Z)(i().mark((function n(t,a){var s,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:c.ar}),s={headers:{"Content-Type":"application/json"}},n.next=5,l().post("/api/admin/login",e,s);case 5:r=n.sent,o=r.data,t({type:c.FZ,payload:o.admin}),localStorage.setItem("adminData",JSON.stringify(a().admin.adminData)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),t({type:c.q_,payload:n.t0.response.data.error});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()},d=function(){return function(){var e=(0,a.Z)(i().mark((function e(n){var t,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:c.e}),t={headers:{"Content-Type":"application/json"}},e.next=5,l().get("/api/admin/allusers",t);case 5:a=e.sent,s=a.data,n({type:c.$v,payload:s.users}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n({type:c.Lt,payload:e.t0.response.data.error});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()}},8456:function(e,n,t){t(2791);var a=t(7621),s=t(2169),i=t(3504),r=t(184);n.Z=function(){return(0,r.jsxs)(a.Z,{sx:{maxWidth:280},className:"bg-0 mx-auto",style:{backgroundColor:"transparent"},children:[(0,r.jsx)(i.rU,{to:"/content/single",children:(0,r.jsx)(s.Z,{component:"img",height:"194",image:"https://rukminim1.flixcart.com/image/416/416/jcc9ci80/poster/n/a/e/medium-pl-wthe-conjuring-movie-wide-wall-poster-19-13-inches-original-imaetdv7zpzfhddg.jpeg?q=70",alt:"Paella dish"})}),(0,r.jsxs)("div",{className:"p-2  rounded ",children:[(0,r.jsxs)("div",{className:" p-1 ",children:[(0,r.jsx)("h5",{className:"text-capitalize text-white",children:"Advertisement Provider"}),(0,r.jsxs)("div",{className:"ad-provided_dates d-flex justify-content-between",children:[(0,r.jsx)("p",{className:"text-muted m-0 p-0",children:"Start Date : September 14,2016"}),(0,r.jsx)("p",{className:"text-muted m-0 p-0",children:"End Date : September 14,2016"})]})]}),(0,r.jsx)("p",{className:"h6 m-0 p-0 text-white",children:"payment Dtails"})]})]})}},2799:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(885),s=t(2791),i=t(7630),r=t(4697),l=t(3044),c=t(184),o=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(n.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}));(0,i.ZP)(l.Z)((function(e){var n=e.theme;return{width:22,height:22,border:"2px solid ".concat(n.palette.background.paper)}}));function d(e){var n=e.image,t=e.badge;return(0,c.jsx)(c.Fragment,{children:t?(0,c.jsx)(o,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"}):(0,c.jsx)(l.Z,{alt:"Name",src:n})})}var u=t(4),m=t(9434),p=t(318);var x=function(e){var n,t=e.content,i=e.comment,r=(0,s.useState)(null),l=(0,a.Z)(r,2),o=l[0],x=l[1],h=(0,m.v9)((function(e){return e.users})),j=(h.loading,h.allUsers),v=(0,m.I0)();return(0,s.useEffect)((function(){j&&x(j.filter((function(e){return e._id===(null===i||void 0===i?void 0:i.user)}))),v((0,p.AW)())}),[v]),console.log(o),(0,c.jsxs)("div",{className:t?"comment d-flex m-0 py-0 px-3":"comment d-flex justify-content-between m-0 p-0",children:[(0,c.jsx)("div",{className:"user-img me-2",children:(0,c.jsx)(d,{image:o?null===(n=o[0].avarar)||void 0===n?void 0:n.url:u.lK})}),(0,c.jsxs)("div",{className:"comment-content ms-2 overflow-hidden text-start",children:[(0,c.jsx)("p",{className:"m-0",children:"name"}),t?(0,c.jsx)("p",{children:"subscribed on : january 02 2021 "}):(0,c.jsx)("p",{className:"text-truncate",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ratione ducimus, magni aut nisi, provident sint veritatis fuga consectetur nobis illo quae? Porro sed asperiores excepturi rerum libero sapiente distinctio."})]})]})}},3258:function(e,n,t){t.r(n);var a=t(1413),s=t(885),i=t(2791),r=t(7022),l=t(9743),c=t(2677),o=(t(1924),t(5510)),d=t(3504),u=t(7900),m=t(4),p=t(220),x=t(184);n.default=function(e){var n=e.children,t=(0,i.useState)(!1),h=(0,s.Z)(t,2),j=h[0],v=h[1],f=(0,i.useState)(null),g=(0,s.Z)(f,2),N=g[0],b=g[1],y=(0,i.useState)({banner:"",avatar:"",channel_name:""}),Z=(0,s.Z)(y,2),w=Z[0],k=Z[1];return(0,i.useEffect)((function(){var e=localStorage.getItem("userData");e&&(e=JSON.parse(e),b(e),e.channel&&e.banner&&k((0,a.Z)((0,a.Z)({},w),{},{banner:e.banner.url,channel_name:e.channel})))}),[]),(0,x.jsxs)("div",{children:[(0,x.jsx)(o.Z,{}),(0,x.jsx)(r.Z,{className:"common-dashboard-container  ",children:(0,x.jsxs)(l.Z,{className:"mt-5",children:[(0,x.jsx)(c.Z,{lg:12,children:(0,x.jsxs)("div",{className:"user-dashboard-banner mt-3  pt-5 d-none d-sm-none d-lg-block ",children:[N?(0,x.jsx)("img",{className:"banner-image position-absolute rounded-3 ",src:N.banner?N.banner.url:m.uP,alt:""}):(0,x.jsx)("img",{className:"banner-image position-absolute rounded-3 ",src:m.uP,alt:""}),N?(0,x.jsx)("img",{className:"profile-image position-relative",src:N.avatar?N.avatar.url:m.lK,alt:""}):(0,x.jsx)("img",{className:"profile-image position-relative ",src:m.lK,alt:""})]})}),(0,x.jsx)("div",{className:"col-12 d-lg-none  d-col-block d-md-none d-sm-none ",children:(0,x.jsxs)("div",{className:" mt-3  pt-5  text-center",children:[N?(0,x.jsx)("img",{className:"banner-image mb-2 ",width:"100%",src:N.banner?N.banner.url:m.uP,alt:""}):(0,x.jsx)("img",{className:"banner-image  ",src:m.uP,alt:""}),N?(0,x.jsx)("img",{className:"profile-image ",style:{borderRadius:"50%"},src:N.avatar?N.avatar.url:m.lK,alt:""}):(0,x.jsx)("img",{className:"profile-image  ",src:m.lK,alt:""})]})}),(0,x.jsxs)(c.Z,{lg:9,className:" d-flex justify-content-between my-4  ms-auto",children:[(0,x.jsxs)("div",{className:"Channel-title text-white text-capitalize",children:[j?(0,x.jsxs)("form",{className:"input-tag",onSubmit:function(e){e.preventDefault()},children:[(0,x.jsx)("input",{type:"text",className:" text-capitalize h3 ",placeholder:N.channel,value:N.channel,onChange:function(e){return k((0,a.Z)((0,a.Z)({},w),{},{channel_name:e.target.value}))},autoFocus:!0}),(0,x.jsx)("input",{type:"submit",className:"my-auto border rounded px-2",value:"save"})]}):(0,x.jsxs)("div",{className:"input-tag d-flex mt-4",children:[(0,x.jsx)("h3",{children:N&&N.channel}),(0,x.jsx)("span",{className:"my-auto mx-5 ",onClick:function(){"name"==="name"&&v(!j)},children:(0,x.jsx)("ion-icon",{name:"create-outline"})})]}),(0,x.jsx)("p",{className:"text-muted mx-2",children:null===N||void 0===N?void 0:N.name})]}),(0,x.jsx)("div",{className:"navigate-to-dashboard text-uppercase mt-5   me-5",children:(0,x.jsxs)(d.rU,{to:"/content/upload/video",className:"navigate-to-dashboard-link  px-4 py-2 ",children:[(0,x.jsx)("span",{children:" upload videos"}),(0,x.jsx)("i",{})]})})]})]})}),(0,x.jsx)(r.Z,{fluid:!0,className:"px-5",children:(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(c.Z,{lg:3,className:"",children:(0,x.jsx)(p.Z,{admin:!0})}),(0,x.jsx)(c.Z,{lg:9,children:n})]})}),(0,x.jsx)(u.Z,{})]})}},2136:function(e,n,t){t.r(n);var a=t(1413),s=t(885),i=t(2791),r=t(9743),l=t(2677),c=t(6871),o=t(9434),d=t(2799),u=(t(3258),t(9733)),m=t(8456),p=t(1968),x=t(184);n.default=function(){var e=(0,i.useState)({title:"title",videoFile:"link",adDetails:"another link"}),n=(0,s.Z)(e,2),t=n[0],h=n[1],j=(0,i.useState)(!1),v=(0,s.Z)(j,2),f=v[0],g=v[1],N=(0,i.useState)(!1),b=(0,s.Z)(N,2),y=b[0],Z=b[1],w=(0,i.useState)(!1),k=(0,s.Z)(w,2),C=k[0],S=k[1],F=(0,c.UO)(),D=(0,o.I0)(),E=(0,o.v9)((function(e){return e.singleContent})),P=(E.loading,E.singleContent);console.log(P),(0,i.useEffect)((function(){D((0,p.JZ)(F.contentId))}),[D,F]),(f||y||C)&&setTimeout((function(){g(!1),Z(!1),S(!1)}),2e4);var z=function(e){"title"===e&&g(!f),"video"===e&&Z(!y),"advertisement"===e&&S(!C)};return(0,x.jsxs)(r.Z,{children:[(0,x.jsxs)(l.Z,{lg:4,children:[(0,x.jsx)("div",{className:"video-content-main pt-3",children:(0,x.jsx)(u.Z,{video:P&&P})}),(0,x.jsxs)("div",{className:"video-content-body my-3   rounded  p-3",children:[(0,x.jsx)("div",{className:"  my-3 px-2 profile rounded d-flex justify-content-between",children:f?(0,x.jsx)("input",{className:"m-0 my-2 ",type:"text",placeholder:t.title,value:t.title,onChange:function(e){return h((0,a.Z)((0,a.Z)({},t),{},{title:e.target.value}))},autoFocus:!0}):(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)("p",{className:"m-0 my-2 ",children:t.title})," ",(0,x.jsx)("span",{className:"my-auto",onClick:function(){return z("title")},children:(0,x.jsx)("ion-icon",{name:"create-outline"})})]})}),(0,x.jsx)("div",{className:"  my-3 px-2 profile rounded d-flex justify-content-between",children:y?(0,x.jsx)("input",{className:"m-0 my-2 ",type:"text",placeholder:t.videoFile,value:t.videoFile,onChange:function(e){return h((0,a.Z)((0,a.Z)({},t),{},{videoFile:e.target.value}))},autoFocus:!0}):(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)("p",{className:"m-0 my-2 ",children:t.videoFile})," ",(0,x.jsx)("span",{className:"my-auto",onClick:function(){return z("video")},children:(0,x.jsx)("ion-icon",{name:"create-outline"})})]})}),(0,x.jsx)("div",{className:"  my-3 px-2 profile rounded d-flex justify-content-between",children:C?(0,x.jsx)("input",{className:"m-0 my-2 ",type:"text",placeholder:t.adDetails,value:t.adDetails,onChange:function(e){return h((0,a.Z)((0,a.Z)({},t),{},{adDetails:e.target.value}))},autoFocus:!0}):(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)("p",{className:"m-0 my-2 ",children:t.adDetails})," ",(0,x.jsx)("span",{className:"my-auto",onClick:function(){return z("advertisement")},children:(0,x.jsx)("ion-icon",{name:"create-outline"})})]})}),(0,x.jsx)("div",{className:"  my-3 px-2 profile  rounded bg-primary d-flex justify-content-between",children:(0,x.jsx)("input",{type:"submit",value:"SAVE CHANGES ",onClick:function(){},className:"  rounded w-100 py-2"})})]})]}),(0,x.jsxs)(l.Z,{lg:8,className:"video-content-body pt-3",children:[(0,x.jsx)("p",{className:"text-white h4 text-bold px-3",children:"ADVERTIZEMENTS"}),(0,x.jsxs)(r.Z,{children:[(0,x.jsx)(l.Z,{lg:6,children:(0,x.jsx)(m.Z,{})}),(0,x.jsx)(l.Z,{lg:6,children:(0,x.jsx)(m.Z,{})}),(0,x.jsxs)(l.Z,{lg:10,className:"mx-auto my-3 ",children:[(0,x.jsx)("div",{className:"comments",children:(0,x.jsx)("h3",{className:"text-white text-uppercase",children:"user comments"})}),(0,x.jsx)(d.Z,{})]})]})]})]})}},1924:function(){}}]);
//# sourceMappingURL=976.cfaaa96e.chunk.js.map