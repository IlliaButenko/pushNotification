(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[10],{1001:function(e,t,a){"use strict";var n=a(44);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"common",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"red",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"pink",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"purple",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"deepPurple",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"indigo",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"blue",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"lightBlue",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"cyan",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"teal",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"green",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"lightGreen",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"lime",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"yellow",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"amber",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"orange",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"deepOrange",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"brown",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"grey",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"blueGrey",{enumerable:!0,get:function(){return w.default}});var c=n(a(629)),r=n(a(632)),i=n(a(631)),l=n(a(1017)),o=n(a(1018)),f=n(a(630)),d=n(a(634)),s=n(a(1019)),u=n(a(1020)),b=n(a(1021)),p=n(a(635)),j=n(a(1022)),h=n(a(1023)),m=n(a(1024)),O=n(a(1025)),g=n(a(633)),x=n(a(1026)),y=n(a(1027)),v=n(a(626)),w=n(a(1028))},1007:function(e,t,a){"use strict";var n=a(4),c=(a(0),a(340)),r=a(176),i=a(420),l=a.n(i),o=a(1),f=l()((function(e){return{appHeader:Object(n.a)({height:60,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(r.a[300])},e.breakpoints.up("xl"),{height:77}),checkboxRoot:{marginRight:8},pointer:{cursor:"pointer"}}})),d=function(e){var t=e.children,a=f();return Object(o.jsx)(c.a,{px:6,py:{xs:1,xl:3},className:a.appHeader,children:t})};t.a=d,d.defaultProps={}},1008:function(e,t,a){"use strict";var n=a(4),c=(a(0),a(30)),r=a(420),i=a.n(r),l=a(16),o=a(1),f=i()((function(e){return{appsContentContainer:function(t){var a;return a={display:"flex",flexDirection:"column",height:"calc(100% - ".concat(t.isDetailView?60:115,"px)")},Object(n.a)(a,e.breakpoints.up("sm"),{height:"calc(100% - ".concat(t.fullView?0:60,"px)")}),Object(n.a)(a,e.breakpoints.up("xl"),{height:"calc(100% - ".concat(t.fullView?0:77,"px)")}),Object(n.a)(a,"& .scrum-absolute",{position:"absolute",top:0,left:0,width:"100%"}),Object(n.a)(a,"& .scrum-row",{display:"inline-flex",minWidth:"100%",height:"100%",marginLeft:"-10px",marginRight:"-10px"}),Object(n.a)(a,"& .scrum-col",Object(n.a)({minWidth:"280px",maxWidth:"280px",marginLeft:"10px",marginRight:"10px",borderRadius:e.overrides.MuiCard.root.borderRadius,backgroundColor:Object(l.e)(e.palette.background.paper,.45),height:"100% !important"},e.breakpoints.up("md"),{minWidth:"354px",maxWidth:"354px"})),Object(n.a)(a,"& .scroll-scrum-item",{height:"auto !important"}),a}}}));t.a=function(e){var t=e.isDetailView,a=void 0!==t&&t,n=e.fullView,r=void 0!==n&&n,i=e.style,l=void 0===i?{}:i,d=e.children,s=f({isDetailView:a,fullView:r});return Object(o.jsx)(c.a,{className:s.appsContentContainer,style:l,children:d})}},1009:function(e,t,a){"use strict";a(0);var n=a(577),c=a(1);t.a=function(e){var t=e.count,a=e.page,r=e.onPageChange,i=e.rowsPerPage,l=void 0===i?15:i,o=e.className,f=void 0===o?"":o;return Object(c.jsx)(n.a,{component:"div",count:t,rowsPerPage:l,className:f,page:a,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:r,rowsPerPageOptions:[]})}},1010:function(e,t,a){"use strict";var n=a(9),c=a(0),r=a(24),i=a(14),l=a(419),o=a(340),f=a(574),d=a(384),s=a(61),u=a.n(s),b=a(8),p=a(505),j=a(4),h=a(468),m=function(e,t){return e===b.f.HOR_DARK_LAYOUT||e===b.f.HOR_LIGHT_NAV||e===b.f.H_DEFAULT?t>=1280?144:80:e===b.f.BIT_BUCKET?0:t>=600?70:60},O=Object(h.a)((function(e){var t;return{appsContainer:function(t){var a;return a={height:"calc(100vh - ".concat(75+m(t.navStyle,0)+(t.footer?70:10),"px) !important")},Object(j.a)(a,e.breakpoints.up("sm"),{height:"calc(100vh - ".concat(75+m(t.navStyle,600)+(t.footer?70:10),"px) !important")}),Object(j.a)(a,e.breakpoints.up("md"),{height:"calc(100vh - ".concat(85+m(t.navStyle,960)+(t.footer?80:10),"px) !important")}),Object(j.a)(a,e.breakpoints.up("lg"),{height:"calc(100vh - ".concat(73+m(t.navStyle,1280)+(t.footer?80:10),"px) !important")}),Object(j.a)(a,e.breakpoints.up("xl"),{height:"calc(100vh - ".concat(94+m(t.navStyle,1920)+(t.footer?86:10),"px) !important")}),Object(j.a)(a,"display","flex"),a},appsSidebar:(t={height:"100%"},Object(j.a)(t,e.breakpoints.up("lg"),{width:"17rem"}),Object(j.a)(t,e.breakpoints.up("xl"),{width:"20rem"}),t),appsMainContent:function(t){var a;return a={width:"100% !important",display:"flex",flexDirection:"column"},Object(j.a)(a,e.breakpoints.up("lg"),{width:"calc(100% - ".concat(t.fullView?0:17,"rem)"),paddingLeft:t.fullView?0:40}),Object(j.a)(a,e.breakpoints.up("xl"),{width:"calc(100% - ".concat(t.fullView?0:20,"rem)")}),a},menuButton:{marginRight:e.spacing(2)},menuIcon:{width:35,height:35},appSidebarDrawer:{width:"19rem","& .listItem":{zIndex:1305}},scLauncher:{"& .sc-header, & .sc-message--content.sent .sc-message--text, & .sc-header--close-button:hover":{backgroundColor:"".concat(e.palette.primary.main," !important")}}}})),g=a(26),x=a(87),y=a(3),v=a(1),w=function(e){var t=e.isAppDrawerOpen,a=e.footer,n=e.navStyle,c=e.fullView,l=e.sidebarContent,d=Object(i.d)(),s=O({footer:a,navStyle:n,fullView:c});return Object(v.jsxs)(o.a,{className:s.appsSidebar,children:[Object(v.jsx)(f.a,{lgUp:!0,children:Object(v.jsx)(x.a,{open:t,onClose:function(){return d(Object(r.l)())},classes:{paper:Object(y.default)(s.appSidebarDrawer)},style:{position:"absolute"},children:l})}),Object(v.jsx)(f.a,{mdDown:!0,children:Object(v.jsx)(p.a,{style:{height:"100%"},children:l})})]})};t.a=function(e){var t=e.title,a=void 0===t?"":t,s=e.cardStyle,j=e.sidebarContent,h=e.fullView,m=void 0!==h&&h,x=e.children,y=Object(i.d)(),P=Object(i.e)((function(e){return e.common})).isAppDrawerOpen,A=Object(c.useContext)(g.a),C=A.footer,S=A.navStyle,_=O({footer:C,navStyle:S,fullView:m});return Object(v.jsxs)(o.a,{pt:{xl:4},flex:1,display:"flex",flexDirection:"column",children:[Object(v.jsxs)(o.a,{mb:{xs:m?4:2,lg:m?5:4},mt:{xs:m?0:-3,lg:0},display:"flex",alignItems:"center",children:[m?null:Object(v.jsx)(f.a,{lgUp:!0,children:Object(v.jsx)(d.a,{edge:"start",className:_.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return y(Object(r.l)())},children:Object(v.jsx)(u.a,{className:_.menuIcon})})}),Object(v.jsx)(o.a,{component:"h2",color:"text.primary",fontWeight:b.b.BOLD,fontSize:16,children:a})]}),Object(v.jsxs)(o.a,{className:_.appsContainer,children:[j?Object(v.jsx)(w,{isAppDrawerOpen:P,footer:C,fullView:m,navStyle:S,sidebarContent:j}):null,Object(v.jsxs)(o.a,{className:_.appsMainContent,children:[Object(v.jsx)(p.a,{style:Object(n.a)({height:"100%",display:"flex",flexDirection:"column"},s),children:x}),Object(v.jsx)(l.a,{})]})]})]})}},1017:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};t.default=n},1018:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"};t.default=n},1019:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};t.default=n},1020:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"};t.default=n},1021:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"};t.default=n},1022:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"};t.default=n},1023:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"};t.default=n},1024:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"};t.default=n},1025:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"};t.default=n},1026:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"};t.default=n},1027:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"};t.default=n},1028:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"};t.default=n},1315:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(0),r=a(14),i=a(340),l=a(574),o=a(564),f=a(233),d=a(1010),s=a(1007),u=a(1008),b=a(1009),p=a(997),j=a(556),h=a(559),m=a(557),O=a(558),g=a(561),x=a(468),y=a(176),v=a(8),w=a(1),P=function(e){var t=Object(x.a)((function(){return{tableRowRoot:{color:y.a[500]},tableCellRoot:{borderBottom:"0 none",fontSize:13,padding:8,fontWeight:v.b.BOLD,"&:first-child":{paddingLeft:20},"&:last-child":{paddingRight:20}}}}))(e);return Object(w.jsxs)(g.a,{className:t.tableRowRoot,children:[Object(w.jsx)(O.a,{className:t.tableCellRoot,children:"No"}),Object(w.jsx)(O.a,{align:"left",className:t.tableCellRoot,children:"title"}),Object(w.jsx)(O.a,{align:"left",className:t.tableCellRoot,children:"icon"}),Object(w.jsx)(O.a,{align:"left",className:t.tableCellRoot,children:"image"}),Object(w.jsx)(O.a,{align:"left",className:t.tableCellRoot,children:"text"}),Object(w.jsx)(O.a,{align:"left",className:t.tableCellRoot,children:"url"})]})},A=a(3),C=Object(x.a)((function(e){return{tableCell:{fontSize:13,padding:"12px 8px","&:first-child":{paddingLeft:20},"&:last-child":{paddingRight:20}},anchar:{color:e.palette.primary.main,borderBottom:"1px solid ".concat(e.palette.primary.main),display:"inline-block"},badgeRoot:{padding:"3px 10px",borderRadius:4,display:"inline-block"}}})),S=function(e){var t=e.data,a=e.num,n=C();return Object(w.jsxs)(g.a,{className:Object(A.default)("item-hover"),children:[Object(w.jsx)(O.a,{component:"th",scope:"row",className:n.tableCell,children:Object(w.jsx)(i.a,{className:n.anchar,children:a})}),Object(w.jsx)(O.a,{align:"left",className:Object(A.default)(n.tableCell),children:t.title}),Object(w.jsx)(O.a,{align:"left",className:n.tableCell,children:t.icon}),Object(w.jsx)(O.a,{align:"left",className:n.tableCell,children:t.image}),Object(w.jsx)(O.a,{align:"left",className:n.tableCell,children:t.text}),Object(w.jsx)(O.a,{align:"right",className:n.tableCell,children:t.url})]},t._id)},_=a(998),N=function(e){var t=e.transactionData;return Object(w.jsx)(_.a,{children:Object(w.jsxs)(j.a,{className:"table",children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(P,{})}),Object(w.jsx)(m.a,{children:t.map((function(e,t){return Object(w.jsx)(S,{data:e,num:"".concat(t+1)},e._id)}))})]})})},R=function(e){var t=e.tabledata;return Object(w.jsx)(p.a,{height:1,contentStyle:{paddingLeft:0,paddingRight:0},title:"Windows User List",children:Object(w.jsx)(N,{transactionData:t})})},k=a(423);t.default=function(){var e=Object(r.d)(),t=Object(r.e)((function(e){return e.users})),a=t.users,p=t.userCount,j=Object(c.useState)(0),h=Object(n.a)(j,2),m=h[0],O=h[1],g=Object(c.useState)(""),x=Object(n.a)(g,2),y=x[0],v=x[1],P=function(e,t){O(t)};Object(c.useEffect)((function(){e(Object(k.e)(y,m))}),[e,y,m]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(f.a,{animation:"transition.slideUpIn",delay:200,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(s.a,{children:Object(w.jsxs)(i.a,{display:"flex",flexDirection:"row",alignItems:"center",width:1,justifyContent:"space-between",children:[Object(w.jsx)(o.a,{style:{maxWidth:150},margin:"dense",id:"user-name",placeholder:"Search",type:"search",variant:"outlined",onChange:function(e){v(e.target.value),O(0)}}),Object(w.jsx)(i.a,{display:"flex",flexDirection:"row",alignItems:"center",children:Object(w.jsx)(l.a,{xsDown:!0,children:Object(w.jsx)(b.a,{rowsPerPage:10,count:p,page:m,onPageChange:P})})})]})}),Object(w.jsx)(u.a,{style:{paddingTop:10,paddingBottom:10},children:Object(w.jsx)(R,{tabledata:a})}),Object(w.jsx)(l.a,{smUp:!0,children:Object(w.jsx)(b.a,{rowsPerPage:10,count:p,page:m,onPageChange:P})})]})})})}},997:function(e,t,a){"use strict";var n=a(9),c=a(133),r=a(0),i=a.n(r),l=a(505),o=a(468),f=a(340),d=a(506),s=a(8),u=a(541),b=a(507),p=a(524),j=a(1),h=["title","rootStyle","titleStyle","headerStyle","contentStyle","action","actionStyle","footer","bgcolor","footerPosition","footerStyle","children"],m=Object(o.a)((function(){return{link:{fontSize:14},textTruncate:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},cardHeader:{paddingLeft:20,paddingRight:20,paddingBottom:4,"& .MuiCardHeader-action":{marginTop:0,marginRight:0}}}}));t.a=function(e){var t=e.title,a=e.rootStyle,r=e.titleStyle,o=e.headerStyle,O=e.contentStyle,g=e.action,x=e.actionStyle,y=e.footer,v=e.bgcolor,w=e.footerPosition,P=void 0===w?"left":w,A=e.footerStyle,C=e.children,S=Object(c.a)(e,h),_=m();return Object(j.jsx)(f.a,Object(n.a)(Object(n.a)({display:"flex",flexDirection:"column"},S),{},{clone:!0,style:Object(n.a)({},a),children:Object(j.jsxs)(l.a,{children:[t||g?Object(j.jsx)(d.a,{className:_.cardHeader,style:Object(n.a)({},o),title:Object(j.jsx)(f.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:i.a.isValidElement(t)?t:Object(j.jsx)(f.a,{component:"h3",className:_.textTruncate,color:"text.primary",alignSelf:"flex-start",fontWeight:s.b.BOLD,fontSize:16,style:r,children:t})}),action:i.a.isValidElement(g)?g:Object(j.jsx)(f.a,{component:"span",ml:"auto",mt:2,mr:2,style:x,children:Object(j.jsx)(u.a,{href:"#",color:"secondary",component:"button",underline:"none",className:_.link,children:Object(j.jsx)(f.a,{component:"span",children:g})})})}):null,Object(j.jsx)(b.a,{style:Object(n.a)(Object(n.a)({paddingLeft:20,paddingRight:20,height:"100%",overflow:"auto"},O),{},{background:v}),children:C}),y?Object(j.jsx)(p.a,{style:Object(n.a)({paddingLeft:20,paddingRight:20,paddingBottom:16},A),children:"object"===typeof y?y:Object(j.jsx)(f.a,{component:"span",ml:"right"===P?"auto":0,children:Object(j.jsx)(u.a,{color:"secondary",component:"button",underline:"none",className:_.link,children:y})})}):null]})}))}},998:function(e,t,a){"use strict";a(0);var n=a(468),c=a(340),r=a(1001),i=a(1),l=Object(n.a)((function(e){return{tableResponsiveMaterial:{minHeight:".01%",overflowX:"auto","& > thead > tr > th, > tbody > tr > th, > tfoot > tr > th, thead > tr > td, tbody > tr > td, tfoot > tr > td":{whiteSpace:"nowrap"},"@media (max-width: 767px)":{width:"100%",marginBottom:15,overflowY:"hidden",border:"1px solid ".concat(r.grey[300]),"& > table":{marginBottom:0}}}}}));t.a=function(e){var t=l();return Object(i.jsx)(c.a,{className:t.tableResponsiveMaterial,children:e.children})}}}]);
//# sourceMappingURL=10.48a03a9e.chunk.js.map