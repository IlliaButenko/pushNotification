(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[12],{1006:function(e,t,a){"use strict";var n=a(4),c=(a(0),a(341)),i=a(176),r=a(421),l=a.n(r),o=a(1),s=l()((function(e){return{appHeader:Object(n.a)({height:60,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(i.a[300])},e.breakpoints.up("xl"),{height:77}),checkboxRoot:{marginRight:8},pointer:{cursor:"pointer"}}})),d=function(e){var t=e.children,a=s();return Object(o.jsx)(c.a,{px:6,py:{xs:1,xl:3},className:a.appHeader,children:t})};t.a=d,d.defaultProps={}},1007:function(e,t,a){"use strict";var n=a(4),c=(a(0),a(31)),i=a(421),r=a.n(i),l=a(16),o=a(1),s=r()((function(e){return{appsContentContainer:function(t){var a;return a={display:"flex",flexDirection:"column",height:"calc(100% - ".concat(t.isDetailView?60:115,"px)")},Object(n.a)(a,e.breakpoints.up("sm"),{height:"calc(100% - ".concat(t.fullView?0:60,"px)")}),Object(n.a)(a,e.breakpoints.up("xl"),{height:"calc(100% - ".concat(t.fullView?0:77,"px)")}),Object(n.a)(a,"& .scrum-absolute",{position:"absolute",top:0,left:0,width:"100%"}),Object(n.a)(a,"& .scrum-row",{display:"inline-flex",minWidth:"100%",height:"100%",marginLeft:"-10px",marginRight:"-10px"}),Object(n.a)(a,"& .scrum-col",Object(n.a)({minWidth:"280px",maxWidth:"280px",marginLeft:"10px",marginRight:"10px",borderRadius:e.overrides.MuiCard.root.borderRadius,backgroundColor:Object(l.e)(e.palette.background.paper,.45),height:"100% !important"},e.breakpoints.up("md"),{minWidth:"354px",maxWidth:"354px"})),Object(n.a)(a,"& .scroll-scrum-item",{height:"auto !important"}),a}}}));t.a=function(e){var t=e.isDetailView,a=void 0!==t&&t,n=e.fullView,i=void 0!==n&&n,r=e.style,l=void 0===r?{}:r,d=e.children,u=s({isDetailView:a,fullView:i});return Object(o.jsx)(c.a,{className:u.appsContentContainer,style:l,children:d})}},1008:function(e,t,a){"use strict";a(0);var n=a(578),c=a(1);t.a=function(e){var t=e.count,a=e.page,i=e.onPageChange,r=e.rowsPerPage,l=void 0===r?15:r,o=e.className,s=void 0===o?"":o;return Object(c.jsx)(n.a,{component:"div",count:t,rowsPerPage:l,className:s,page:a,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:i,rowsPerPageOptions:[]})}},1009:function(e,t,a){"use strict";var n=a(9),c=a(0),i=a(24),r=a(14),l=a(420),o=a(341),s=a(575),d=a(385),u=a(61),b=a.n(u),p=a(8),j=a(506),h=a(4),f=a(469),m=function(e,t){return e===p.f.HOR_DARK_LAYOUT||e===p.f.HOR_LIGHT_NAV||e===p.f.H_DEFAULT?t>=1280?144:80:e===p.f.BIT_BUCKET?0:t>=600?70:60},x=Object(f.a)((function(e){var t;return{appsContainer:function(t){var a;return a={height:"calc(100vh - ".concat(75+m(t.navStyle,0)+(t.footer?70:10),"px) !important")},Object(h.a)(a,e.breakpoints.up("sm"),{height:"calc(100vh - ".concat(75+m(t.navStyle,600)+(t.footer?70:10),"px) !important")}),Object(h.a)(a,e.breakpoints.up("md"),{height:"calc(100vh - ".concat(85+m(t.navStyle,960)+(t.footer?80:10),"px) !important")}),Object(h.a)(a,e.breakpoints.up("lg"),{height:"calc(100vh - ".concat(73+m(t.navStyle,1280)+(t.footer?80:10),"px) !important")}),Object(h.a)(a,e.breakpoints.up("xl"),{height:"calc(100vh - ".concat(94+m(t.navStyle,1920)+(t.footer?86:10),"px) !important")}),Object(h.a)(a,"display","flex"),a},appsSidebar:(t={height:"100%"},Object(h.a)(t,e.breakpoints.up("lg"),{width:"17rem"}),Object(h.a)(t,e.breakpoints.up("xl"),{width:"20rem"}),t),appsMainContent:function(t){var a;return a={width:"100% !important",display:"flex",flexDirection:"column"},Object(h.a)(a,e.breakpoints.up("lg"),{width:"calc(100% - ".concat(t.fullView?0:17,"rem)"),paddingLeft:t.fullView?0:40}),Object(h.a)(a,e.breakpoints.up("xl"),{width:"calc(100% - ".concat(t.fullView?0:20,"rem)")}),a},menuButton:{marginRight:e.spacing(2)},menuIcon:{width:35,height:35},appSidebarDrawer:{width:"19rem","& .listItem":{zIndex:1305}},scLauncher:{"& .sc-header, & .sc-message--content.sent .sc-message--text, & .sc-header--close-button:hover":{backgroundColor:"".concat(e.palette.primary.main," !important")}}}})),O=a(26),g=a(87),v=a(3),y=a(1),w=function(e){var t=e.isAppDrawerOpen,a=e.footer,n=e.navStyle,c=e.fullView,l=e.sidebarContent,d=Object(r.d)(),u=x({footer:a,navStyle:n,fullView:c});return Object(y.jsxs)(o.a,{className:u.appsSidebar,children:[Object(y.jsx)(s.a,{lgUp:!0,children:Object(y.jsx)(g.a,{open:t,onClose:function(){return d(Object(i.m)())},classes:{paper:Object(v.default)(u.appSidebarDrawer)},style:{position:"absolute"},children:l})}),Object(y.jsx)(s.a,{mdDown:!0,children:Object(y.jsx)(j.a,{style:{height:"100%"},children:l})})]})};t.a=function(e){var t=e.title,a=void 0===t?"":t,u=e.cardStyle,h=e.sidebarContent,f=e.fullView,m=void 0!==f&&f,g=e.children,v=Object(r.d)(),C=Object(r.e)((function(e){return e.common})).isAppDrawerOpen,S=Object(c.useContext)(O.a),N=S.footer,k=S.navStyle,R=x({footer:N,navStyle:k,fullView:m});return Object(y.jsxs)(o.a,{pt:{xl:4},flex:1,display:"flex",flexDirection:"column",children:[Object(y.jsxs)(o.a,{mb:{xs:m?4:2,lg:m?5:4},mt:{xs:m?0:-3,lg:0},display:"flex",alignItems:"center",children:[m?null:Object(y.jsx)(s.a,{lgUp:!0,children:Object(y.jsx)(d.a,{edge:"start",className:R.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return v(Object(i.m)())},children:Object(y.jsx)(b.a,{className:R.menuIcon})})}),Object(y.jsx)(o.a,{component:"h2",color:"text.primary",fontWeight:p.b.BOLD,fontSize:16,children:a})]}),Object(y.jsxs)(o.a,{className:R.appsContainer,children:[h?Object(y.jsx)(w,{isAppDrawerOpen:C,footer:N,fullView:m,navStyle:k,sidebarContent:h}):null,Object(y.jsxs)(o.a,{className:R.appsMainContent,children:[Object(y.jsx)(j.a,{style:Object(n.a)({height:"100%",display:"flex",flexDirection:"column"},u),children:g}),Object(y.jsx)(l.a,{})]})]})]})}},1013:function(e,t,a){"use strict";var n=a(44),c=a(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(0)),r=(0,n(a(66)).default)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=r},1014:function(e,t,a){"use strict";var n=a(21),c=a(4),i=a(0),r=a(409),l=a(469),o=a(471),s=a(3),d=a(1),u=Object(l.a)((function(e){var t;return{selectBox:(t={marginLeft:8,cursor:"pointer",fontSize:14},Object(c.a)(t,e.breakpoints.up("xl"),{marginLeft:24}),Object(c.a)(t,"& .MuiSelect-select",{paddingLeft:10}),t),selectOption:{cursor:"pointer",padding:8,fontSize:14}}}));t.a=function(e){var t=e.menus,a=void 0===t?[]:t,c=e.onChange,l=e.defaultValue,b=void 0===l?"":l,p=e.selectionKey,j=void 0===p?"":p,h=Object(i.useState)(b),f=Object(n.a)(h,2),m=f[0],x=f[1],O=u();return Object(d.jsx)(r.a,{defaultValue:b,value:m,onChange:function(e){x(e.target.value),c(e.target.value)},disableUnderline:!0,className:Object(s.default)(O.selectBox,"select-box"),children:a.map((function(e,t){return Object(d.jsx)(o.a,{value:j?e[j]:e,className:O.selectOption,children:j?e[j]:e},t)}))})}},1316:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(0),i=a(14),r=a(341),l=a(575),o=a(565),s=a(233),d=a(1009),u=a(1006),b=a(1007),p=a(1008),j=a(998),h=a(557),f=a(560),m=a(558),x=a(559),O=a(562),g=a(469),v=a(176),y=a(8),w=a(1),C=function(e){var t=Object(g.a)((function(){return{tableRowRoot:{color:v.a[500]},tableCellRoot:{borderBottom:"0 none",fontSize:13,padding:8,fontWeight:y.b.BOLD,"&:first-child":{paddingLeft:20},"&:last-child":{paddingRight:20}}}}))(e);return Object(w.jsxs)(O.a,{className:t.tableRowRoot,children:[Object(w.jsx)(x.a,{className:t.tableCellRoot,children:"User ID"}),Object(w.jsx)(x.a,{align:"left",className:t.tableCellRoot,children:"User IP"}),Object(w.jsx)(x.a,{align:"left",className:t.tableCellRoot,children:"Country"}),Object(w.jsx)(x.a,{align:"left",className:t.tableCellRoot,children:"Browser"}),Object(w.jsx)(x.a,{align:"left",className:t.tableCellRoot,children:"Track Id"}),Object(w.jsx)(x.a,{align:"right",className:t.tableCellRoot,children:" "})]})},S=a(3),N=a(1013),k=a.n(N),R=a(1030),D=Object(g.a)((function(e){return{tableCell:{fontSize:13,padding:"12px 8px","&:first-child":{paddingLeft:20},"&:last-child":{paddingRight:20}},anchar:{color:e.palette.primary.main,borderBottom:"1px solid ".concat(e.palette.primary.main),display:"inline-block"},badgeRoot:{padding:"3px 10px",borderRadius:4,display:"inline-block"}}})),P=function(e){var t=e.data,a=e.num,n=D(),c=function(){switch(t.device){case"In Transit":return"#F84E4E";case"Delivered":return"#43C888";default:return"#E2A72E"}};return Object(w.jsxs)(O.a,{className:Object(S.default)("item-hover"),children:[Object(w.jsx)(x.a,{component:"th",scope:"row",className:n.tableCell,children:Object(w.jsx)(r.a,{className:n.anchar,children:a})}),Object(w.jsx)(x.a,{align:"left",className:Object(S.default)(n.tableCell),children:t.user_ip}),Object(w.jsx)(x.a,{align:"left",className:n.tableCell,children:R.countries[t.country]?R.countries[t.country].name:"India"}),Object(w.jsx)(x.a,{align:"left",className:n.tableCell,style:{color:function(){switch(t.track_id){case"COD":return"#F84E4E";case"Prepaid":return"#43C888";default:return"#E2A72E"}}()},children:t.device}),Object(w.jsx)(x.a,{align:"left",className:n.tableCell,children:Object(w.jsx)(r.a,{className:n.badgeRoot,style:{color:c(),backgroundColor:c()+"44"},children:t.track_id})}),Object(w.jsx)(x.a,{align:"right",className:n.tableCell,children:Object(w.jsx)(k.a,{})})]},t._id)},V=a(999),B=function(e){var t=e.transactionData,a=e.page;return Object(w.jsx)(V.a,{children:Object(w.jsxs)(h.a,{className:"table",children:[Object(w.jsx)(f.a,{children:Object(w.jsx)(C,{})}),Object(w.jsx)(m.a,{children:t.map((function(e,t){return Object(w.jsx)(P,{data:e,num:"#".concat(t+1+10*a)},e._id)}))})]})})},L=a(1014),I=a(411),E=function(e){var t=e.tabledata,a=e.page,n=Object(I.a)().messages;return Object(w.jsx)(j.a,{height:1,contentStyle:{paddingLeft:0,paddingRight:0},title:"Mac User List",action:Object(w.jsx)(L.a,{menus:[n["dashboard.thisWeek"],n["dashboard.lastWeeks"],n["dashboard.lastMonth"]],defaultValue:n["dashboard.thisWeek"],onChange:function(e){console.log("data: ",e)}}),children:Object(w.jsx)(B,{transactionData:t,page:a})})},_=a(424);t.default=function(){var e=Object(i.d)(),t=Object(i.e)((function(e){return e.users})),a=t.users,j=t.userCount,h=Object(c.useState)(0),f=Object(n.a)(h,2),m=f[0],x=f[1],O=Object(c.useState)(""),g=Object(n.a)(O,2),v=g[0],y=g[1],C=function(e,t){x(t)};Object(c.useEffect)((function(){e(Object(_.d)(v,m))}),[e,v,m]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(s.a,{animation:"transition.slideUpIn",delay:200,children:Object(w.jsxs)(d.a,{fullView:!0,children:[Object(w.jsx)(u.a,{children:Object(w.jsxs)(r.a,{display:"flex",flexDirection:"row",alignItems:"center",width:1,justifyContent:"space-between",children:[Object(w.jsx)(o.a,{style:{maxWidth:150},margin:"dense",id:"user-name",placeholder:"Search",type:"search",variant:"outlined",onChange:function(e){y(e.target.value),x(0)}}),Object(w.jsx)(r.a,{display:"flex",flexDirection:"row",alignItems:"center",children:Object(w.jsx)(l.a,{xsDown:!0,children:Object(w.jsx)(p.a,{rowsPerPage:10,count:j,page:m,onPageChange:C})})})]})}),Object(w.jsx)(b.a,{style:{paddingTop:10,paddingBottom:10},children:Object(w.jsx)(E,{tabledata:a,page:m})}),Object(w.jsx)(l.a,{smUp:!0,children:Object(w.jsx)(p.a,{rowsPerPage:10,count:j,page:m,onPageChange:C})})]})})})}},998:function(e,t,a){"use strict";var n=a(9),c=a(133),i=a(0),r=a.n(i),l=a(506),o=a(469),s=a(341),d=a(507),u=a(8),b=a(542),p=a(508),j=a(525),h=a(1),f=["title","rootStyle","titleStyle","headerStyle","contentStyle","action","actionStyle","footer","bgcolor","footerPosition","footerStyle","children"],m=Object(o.a)((function(){return{link:{fontSize:14},textTruncate:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},cardHeader:{paddingLeft:20,paddingRight:20,paddingBottom:4,"& .MuiCardHeader-action":{marginTop:0,marginRight:0}}}}));t.a=function(e){var t=e.title,a=e.rootStyle,i=e.titleStyle,o=e.headerStyle,x=e.contentStyle,O=e.action,g=e.actionStyle,v=e.footer,y=e.bgcolor,w=e.footerPosition,C=void 0===w?"left":w,S=e.footerStyle,N=e.children,k=Object(c.a)(e,f),R=m();return Object(h.jsx)(s.a,Object(n.a)(Object(n.a)({display:"flex",flexDirection:"column"},k),{},{clone:!0,style:Object(n.a)({},a),children:Object(h.jsxs)(l.a,{children:[t||O?Object(h.jsx)(d.a,{className:R.cardHeader,style:Object(n.a)({},o),title:Object(h.jsx)(s.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:r.a.isValidElement(t)?t:Object(h.jsx)(s.a,{component:"h3",className:R.textTruncate,color:"text.primary",alignSelf:"flex-start",fontWeight:u.b.BOLD,fontSize:16,style:i,children:t})}),action:r.a.isValidElement(O)?O:Object(h.jsx)(s.a,{component:"span",ml:"auto",mt:2,mr:2,style:g,children:Object(h.jsx)(b.a,{href:"#",color:"secondary",component:"button",underline:"none",className:R.link,children:Object(h.jsx)(s.a,{component:"span",children:O})})})}):null,Object(h.jsx)(p.a,{style:Object(n.a)(Object(n.a)({paddingLeft:20,paddingRight:20,height:"100%",overflow:"auto"},x),{},{background:y}),children:N}),v?Object(h.jsx)(j.a,{style:Object(n.a)({paddingLeft:20,paddingRight:20,paddingBottom:16},S),children:"object"===typeof v?v:Object(h.jsx)(s.a,{component:"span",ml:"right"===C?"auto":0,children:Object(h.jsx)(b.a,{color:"secondary",component:"button",underline:"none",className:R.link,children:v})})}):null]})}))}},999:function(e,t,a){"use strict";a(0);var n=a(469),c=a(341),i=a(1002),r=a(1),l=Object(n.a)((function(e){return{tableResponsiveMaterial:{minHeight:".01%",overflowX:"auto","& > thead > tr > th, > tbody > tr > th, > tfoot > tr > th, thead > tr > td, tbody > tr > td, tfoot > tr > td":{whiteSpace:"nowrap"},"@media (max-width: 767px)":{width:"100%",marginBottom:15,overflowY:"hidden",border:"1px solid ".concat(i.grey[300]),"& > table":{marginBottom:0}}}}}));t.a=function(e){var t=l();return Object(r.jsx)(c.a,{className:t.tableResponsiveMaterial,children:e.children})}}}]);
//# sourceMappingURL=12.983b688c.chunk.js.map