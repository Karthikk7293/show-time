"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[708,60,392],{318:function(e,a,n){n.d(a,{AW:function(){return d},cW:function(){return o}});var t=n(5861),s=n(7757),r=n.n(s),i=n(4569),l=n.n(i),c=n(4520),o=function(e){return function(){var a=(0,t.Z)(r().mark((function a(n,t){var s,i,o;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:c.ar}),s={headers:{"Content-Type":"application/json"}},a.next=5,l().post("/api/admin/login",e,s);case 5:i=a.sent,o=i.data,n({type:c.FZ,payload:o.admin}),localStorage.setItem("adminData",JSON.stringify(t().admin.adminData)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:c.q_,payload:a.t0.response.data.error});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,n){return a.apply(this,arguments)}}()},d=function(){return function(){var e=(0,t.Z)(r().mark((function e(a){var n,t,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:c.e}),n={headers:{"Content-Type":"application/json"}},e.next=5,l().get("/api/admin/allusers",n);case 5:t=e.sent,s=t.data,a({type:c.$v,payload:s.users}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:c.Lt,payload:e.t0.response.data.error});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}()}},2799:function(e,a,n){n.d(a,{Z:function(){return f}});var t=n(885),s=n(2791),r=n(7630),i=n(4697),l=n(3044),c=n(184),o=(0,r.ZP)(i.Z)((function(e){var a=e.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(a.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}));(0,r.ZP)(l.Z)((function(e){var a=e.theme;return{width:22,height:22,border:"2px solid ".concat(a.palette.background.paper)}}));function d(e){var a=e.image,n=e.badge;return(0,c.jsx)(c.Fragment,{children:n?(0,c.jsx)(o,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"}):(0,c.jsx)(l.Z,{alt:"Name",src:a})})}var m=n(4),u=n(9434),p=n(318),x=n(2426),h=n.n(x);var f=function(e){var a,n=e.content,r=e.comment,i=(0,s.useState)(null),l=(0,t.Z)(i,2),o=l[0],x=l[1],f=(0,u.v9)((function(e){return e.users})),v=(f.loading,f.allUsers),j=(0,u.I0)();return(0,s.useEffect)((function(){if(v&&r){var e=v.filter((function(e){return e._id===r.user})),a=(0,t.Z)(e,1)[0];x(a)}j((0,p.AW)())}),[j,r]),(0,c.jsxs)("div",{className:n?"comment d-flex m-0 py-0 ":"comment   m-0 p-0 ",children:[(0,c.jsxs)("div",{className:"user-img  d-flex ",style:{fontFamily:"sans-serif"},children:[o&&(0,c.jsx)(d,{className:"border-0",image:o?null===o||void 0===o||null===(a=o.avatar)||void 0===a?void 0:a.url:m.lK}),(0,c.jsxs)("div",{className:"comment-content w-100  d-flex justify-content-between text-white",style:{fontSize:"13px",fontWeight:"2px"},children:[(0,c.jsx)("p",{className:"mx-2 my-auto",children:o&&(null===o||void 0===o?void 0:o.name)}),(0,c.jsx)("span",{className:"text-success",style:{fontSize:"8px"},children:r&&h()(r.createdAt).format("lll")})]})]}),(0,c.jsx)("div",{className:"text-white",children:r&&(0,c.jsx)("p",{className:"text-truncate mt-2 mx-2 p-0 ",children:null===r||void 0===r?void 0:r.comment})}),(0,c.jsx)("hr",{className:"bg-info m-0 p-0"})]})}},3258:function(e,a,n){n.r(a);n(2791);var t=n(7022),s=n(9743),r=n(2677),i=n(3504),l=(n(1924),n(5510)),c=n(7900),o=n(4),d=n(220),m=n(3630),u=n(9434),p=n(184);a.default=function(e){var a=e.children,n=(0,u.v9)((function(e){return e.user})).userData;return(0,p.jsxs)("div",{children:[(0,p.jsx)(l.Z,{}),(0,p.jsx)(t.Z,{className:"common-dashboard-container  ",children:(0,p.jsxs)(s.Z,{className:"mt-5",children:[(0,p.jsx)(r.Z,{lg:12,children:(0,p.jsxs)("div",{className:"user-dashboard-banner mt-3  pt-5 d-none d-sm-none d-lg-block ",children:[n?(0,p.jsx)("img",{className:"banner-image position-absolute rounded-3 ",src:n.banner?n.banner.url:m,alt:""}):(0,p.jsx)("img",{className:"banner-image position-absolute rounded-3 ",src:m,alt:""}),n?(0,p.jsx)("img",{className:"profile-image position-relative",src:n.avatar?n.avatar.url:o.lK,alt:""}):(0,p.jsx)("img",{className:"profile-image position-relative ",src:o.lK,alt:""})]})}),(0,p.jsx)("div",{className:"col-12 d-lg-none  d-col-block d-md-none d-sm-none ",children:(0,p.jsxs)("div",{className:" mt-3  pt-5  text-center",children:[n?(0,p.jsx)("img",{className:"banner-image mb-2 ",width:"100%",src:n.banner?n.banner.url:m,alt:""}):(0,p.jsx)("img",{className:"banner-image  ",src:m,alt:""}),n?(0,p.jsx)("img",{className:"profile-image ",style:{borderRadius:"50%"},src:n.avatar?n.avatar.url:o.lK,alt:""}):(0,p.jsx)("img",{className:"profile-image  ",src:o.lK,alt:""})]})}),(0,p.jsxs)(r.Z,{lg:9,className:" d-flex justify-content-between my-4  ms-auto",children:[(0,p.jsxs)("div",{className:"Channel-title text-white text-capitalize",children:[(0,p.jsx)("div",{className:"input-tag d-flex mt-4",children:(0,p.jsx)("h3",{children:n&&n.channel})}),(0,p.jsx)("p",{className:"text-muted mx-2",children:null===n||void 0===n?void 0:n.name})]}),(0,p.jsx)("div",{className:"navigate-to-dashboard text-uppercase mt-5   me-5",children:(0,p.jsxs)(i.rU,{to:"/content/upload/video",className:"navigate-to-dashboard-link  px-4 py-2 ",children:[(0,p.jsx)("span",{children:" upload videos"}),(0,p.jsx)("i",{})]})})]})]})}),(0,p.jsx)(t.Z,{fluid:!0,className:"px-5",children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(r.Z,{lg:3,className:"",children:(0,p.jsx)(d.Z,{admin:!0})}),(0,p.jsx)(r.Z,{lg:9,children:a})]})}),(0,p.jsx)(c.Z,{})]})}},9845:function(e,a,n){n.r(a);n(2791);var t=n(9743),s=n(2677),r=n(2799),i=(n(3258),n(184));a.default=function(){return(0,i.jsx)(t.Z,{className:"",children:(0,i.jsxs)(s.Z,{className:"all-subscribers-main",lg:10,children:[(0,i.jsx)("div",{className:"all-subscibers-title",children:(0,i.jsx)("p",{className:"text-uppercase text-white m-3",children:"all subscibers (12345)"})}),(0,i.jsx)("div",{className:"all-subscribers-body",children:(0,i.jsx)(r.Z,{content:!0})})]})})}},1924:function(){},3630:function(e,a,n){e.exports=n.p+"static/media/CHANNEL_BANNER.c63cb1fc01b5241ba9ac.png"}}]);
//# sourceMappingURL=708.00f850fc.chunk.js.map