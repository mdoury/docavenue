(this.webpackJsonpdocavenue=this.webpackJsonpdocavenue||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),o=t(6),i=t.n(o),l=t(11),s=t(45),u=t(152),d=t(153),m=t(155),p=t(78),g=t(154),f=t(30),b=t(32),O=t(67),j=t(158),v=t(18),h=t(145),C=t(140),E=t(141),y=t(144),x=t(143),P=t(142),w=t(69),I=t.n(w),N=t(50),A=t(79),L=t.p+"static/media/Spinner.f3fb0c41.svg",R=Object(O.a)((function(e){return Object(j.a)({root:{position:"relative",overflow:"hidden"},spinner:{position:"absolute",top:"25%",left:"25%",height:"50%",width:"50%"},image:{position:"absolute",top:0,left:0,width:"100%","&.fade-in":{animation:"fade-in 0.5s ease-in"}}})}),{name:"Img"}),k=function(e){var a=e.aspectRatio,t=e.className,n=e.wrapperClassName,o=e.isCritical,i=e.alt,l=void 0===i?"":i,s=Object(A.a)(e,["aspectRatio","className","wrapperClassName","isCritical","alt"]),u=Object(r.useState)(!1),d=Object(N.a)(u,2),m=d[0],p=d[1],g=R();var f="".concat(g.image," ").concat(t||""," ").concat(o?"":"fade-in"),b="".concat(g.root," ").concat(n||""),O={paddingTop:"".concat(100*a,"%")};return c.a.createElement("div",{className:b},c.a.createElement("div",{style:O}),!m&&!o&&c.a.createElement("img",{className:g.spinner,src:L,alt:"spinner"}),c.a.createElement("img",Object.assign({className:f,alt:l,onLoad:function(){p(!0)}},s)))},T=t(63),S=t(12),D=t(36),W=t(51),q=t.n(W);!function(e){e.Initial="INITIAL",e.Loading="LOADING",e.Loaded="LOADED",e.Error="ERROR"}(n||(n={}));var G,B={items:[],currentPage:1,itemsPerPage:15,status:n.Initial,error:null},M=function(e){return e.catalogReducer},U=Object(T.a)(M,(function(e){return e.items})),F=Object(T.a)(M,(function(e){return e.currentPage})),Q=Object(T.a)(M,(function(e){return e.itemsPerPage})),J=Object(T.a)(U,(function(e){return e.length})),$=Object(T.a)([J,Q],(function(e,a){return Math.ceil(e/a)})),z=Object(T.a)([F,Q],(function(e,a){return(e-1)*a+1})),H=Object(T.a)([F,Q,J],(function(e,a,t){return Math.min(e*a,t)})),K=Object(T.a)([z,H,J],(function(e,a,t){return"".concat(e,"\u2011").concat(a,"\xa0of\xa0").concat(t)})),V=Object(T.a)(M,(function(e){return e.status})),X=Object(T.a)([U,F,Q],(function(e,a,t){return e.slice((a-1)*t,a*t)})),Y=function(e){return function(a){var t,n;return q.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a(Z.loadCatalog()),r.prev=1,r.next=4,q.a.awrap(fetch(e));case 4:return t=r.sent,r.next=7,q.a.awrap(t.json());case 7:n=r.sent,a(Z.loadCatalogSuccess(n)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),a(Z.loadCatalogFailure(r.t0.message));case 14:case"end":return r.stop()}}),null,null,[[1,11]])}},Z={loadCatalog:Object(S.b)("[Catalog] Start loading catalog..."),loadCatalogSuccess:Object(S.b)("[Catalog] Succeeded loading"),loadCatalogFailure:Object(S.b)("[Catalog] Failed loading"),firstPage:Object(S.b)("[Catalog] First page"),previousPage:Object(S.b)("[Catalog] Previous page"),goToPage:Object(S.b)("[Catalog] Go to page"),nextPage:Object(S.b)("[Catalog] Next page"),lastPage:Object(S.b)("[Catalog] Last page"),setItemsPerPage:Object(S.b)("[Catalog] Set items per page")},_=Object(S.c)(B,(function(e){return e.addCase(Z.loadCatalog,(function(e){return Object(v.a)({},e,{status:n.Loading})})).addCase(Z.loadCatalogSuccess,(function(e,a){return Object(v.a)({},e,{items:[].concat(Object(D.a)(e.items),Object(D.a)(a.payload)),status:n.Loaded})})).addCase(Z.loadCatalogFailure,(function(e,a){return Object(v.a)({},e,{error:a.payload,status:n.Error})})).addCase(Z.firstPage,(function(e){return Object(v.a)({},e,{currentPage:1})})).addCase(Z.previousPage,(function(e){return Object(v.a)({},e,{currentPage:(e.currentPage-1)*e.itemsPerPage>0?e.currentPage-1:e.currentPage})})).addCase(Z.goToPage,(function(e,a){return Object(v.a)({},e,{currentPage:a.payload})})).addCase(Z.nextPage,(function(e){return Object(v.a)({},e,{currentPage:(e.currentPage+1)*e.itemsPerPage<e.items.length?e.currentPage+1:e.currentPage})})).addCase(Z.lastPage,(function(e){return Object(v.a)({},e,{currentPage:Math.ceil(e.items.length/e.itemsPerPage)})})).addCase(Z.setItemsPerPage,(function(e,a){return Object(v.a)({},e,{itemsPerPage:a.payload})}))}));!function(e){e.Initial="INITIAL",e.Loading="LOADING",e.Loaded="LOADED",e.Error="ERROR"}(G||(G={}));var ee=function(e){return e.shoppingCartReducer},ae=Object(T.a)(ee,(function(e){return e.catalogItemIds})),te=Object(T.a)(ee,(function(e){return e.quantityMap})),ne=Object(T.a)([ae,U],(function(e,a){return e.map((function(e){return a.find((function(a){return a.id===e}))}))})),re={addItem:Object(S.b)("[ShoppingCart] Add item"),remove:Object(S.b)("[ShoppingCart] Remove item"),updateItemQuantity:Object(S.b)("[ShoppingCart] Update item quantity")},ce=Object(S.c)({catalogItemIds:[],quantityMap:{}},(function(e){return e.addCase(re.addItem,(function(e,a){var t=e.catalogItemIds,n=e.quantityMap;t.includes(a.payload)?n[a.payload]=n[a.payload]+1:(t.unshift(a.payload),n[a.payload]=1)})).addCase(re.remove,(function(e,a){var t=e.catalogItemIds,n=e.quantityMap,r=t.findIndex((function(e){return e===a.payload}));delete t[r],delete n[a.payload]})).addCase(re.updateItemQuantity,(function(e,a){var t=a.payload,n=t.id,r=t.quantity;e.quantityMap[n]=r}))})),oe=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",position:"relative"},clickableArea:{flex:"1 1 auto",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"unset"},title:Object(v.a)({},e.typography.h5,{margin:0}),actions:{display:"flex"},addToCartBtn:{display:"flex",flex:"1 0 auto",padding:e.spacing(1)},addToCartBtnIcon:{borderColor:e.palette.primary.contrastText,borderRadius:4,borderStyle:"solid",borderWidth:1,padding:2},addToCartBtnLabel:{margin:"0 auto"}})}),{name:"CatalogItem"}),ie=function(e){var a=e.item,t=Object(l.b)(),n=oe();return c.a.createElement(C.a,{className:n.root},c.a.createElement(E.a,{className:n.clickableArea},c.a.createElement(P.a,null,c.a.createElement(k,{src:a.url,aspectRatio:1})),c.a.createElement(x.a,null,c.a.createElement("h3",{className:n.title},a.title))),c.a.createElement(y.a,{className:n.actions},c.a.createElement(h.a,{className:n.addToCartBtn,variant:"contained",color:"primary",onClick:function(){t(re.addItem(a.id))}},c.a.createElement(I.a,{className:n.addToCartBtnIcon}),c.a.createElement("span",{className:n.addToCartBtnLabel},"ADD TO CART"))))},le=t(148),se=t(159),ue=t(156),de=t(70),me=t.n(de),pe=t(71),ge=t.n(pe),fe=t(72),be=t.n(fe),Oe=t(73),je=t.n(Oe),ve=Object(O.a)((function(e){return Object(j.a)({root:Object(b.a)({display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:e.spacing(2)},e.breakpoints.down("xs"),{flexDirection:"column"}),info:{display:"flex",flexDirection:"row"},text:{display:"flex",alignItems:"center"},select:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},actions:Object(b.a)({display:"flex",flexDirection:"row"},e.breakpoints.down("xs"),{marginLeft:"auto"})})}),{name:"CatalogPagination"}),he=function(){var e=Object(l.b)(),a=Object(l.c)(F),t=Object(l.c)(Q),n=Object(l.c)($),r=Object(l.c)(K),o=ve();return c.a.createElement("div",{className:o.root},c.a.createElement("div",{className:o.info},c.a.createElement(se.a,{className:o.text,id:"catalog-pagination-select-label"},"Items per page"),c.a.createElement(ue.a,{className:o.select,native:!0,labelId:"catalog-pagination-select-label",value:t,onChange:function(a){var t=a.target.value;t>0&&(e(Z.setItemsPerPage(t)),e(Z.firstPage()))}},c.a.createElement("option",{value:5},"5"),c.a.createElement("option",{value:15},"15"),c.a.createElement("option",{value:50},"50")),c.a.createElement("div",{className:o.text},r)),c.a.createElement("div",{className:o.actions},c.a.createElement(le.a,{onClick:function(){e(Z.firstPage())},disabled:a<=1,"aria-label":"first page"},c.a.createElement(me.a,null)),c.a.createElement(le.a,{onClick:function(){e(Z.previousPage())},disabled:a<=1,"aria-label":"previous page"},c.a.createElement(ge.a,null)),c.a.createElement(le.a,{onClick:function(){e(Z.nextPage())},disabled:a>=n-1,"aria-label":"next page"},c.a.createElement(be.a,null)),c.a.createElement(le.a,{onClick:function(){e(Z.lastPage())},disabled:a>=n-1,"aria-label":"last page"},c.a.createElement(je.a,null))))},Ce=function(e){var a=e.className;return c.a.createElement("img",{className:a||"",src:L,alt:"loading..."})},Ee=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column"},wrapper:Object(b.a)({padding:e.spacing(2),display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:e.spacing(2)},e.breakpoints.down("xs"),{display:"flex",flexDirection:"column","& > * + *":{marginTop:e.spacing(2)}}),loader:{margin:"auto"}})}),{name:"Catalog"}),ye=function(e){var a=e.catalogUrl,t=Object(l.b)(),o=Object(l.c)(X),i=Object(l.c)(V),s=Ee();return Object(r.useEffect)((function(){i!==n.Loading&&i!==n.Loaded&&t(Y(a))}),[t,a,i]),i!==n.Loaded?c.a.createElement(Ce,{className:s.loader}):c.a.createElement("div",{className:s.root},c.a.createElement(he,null),c.a.createElement("div",{className:s.wrapper},o.map((function(e){return c.a.createElement(ie,{key:"CatalogItem-".concat(e.id),item:e})}))),c.a.createElement(he,null))},xe=t(150),Pe=t(151),we=t(75),Ie=t.n(we),Ne=t(76),Ae=t.n(Ne),Le=t(40),Re=t(149);var ke,Te=function(){var e=Object(Le.a)();return Object(D.a)(e.breakpoints.keys).reverse().reduce((function(a,t){var n=Object(Re.a)(e.breakpoints.up(t));return!a&&n?t:a}),null)||"xs"},Se=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto"},bottomNavigation:{position:"absolute",bottom:0,width:"100%"}})}),{name:"Layout"}),De=function(e){var a=e.children,t=Te(),n=Se(),o=Object(f.f)(),i=Object(f.g)([ke.CART,ke.CATALOG]),l=Object(r.useState)(i?i.path:ke.CATALOG),s=Object(N.a)(l,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){o.push(u)}),[u,o]),c.a.createElement("main",{className:n.root},a,"xs"===t&&c.a.createElement(xe.a,{className:n.bottomNavigation,value:u,onChange:function(e,a){d(a)}},c.a.createElement(Pe.a,{value:ke.CATALOG,icon:c.a.createElement(Ie.a,null)}),c.a.createElement(Pe.a,{value:ke.CART,icon:c.a.createElement(Ae.a,null)})))},We=t(157),qe=t(77),Ge=t.n(qe),Be=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:e.spacing(1)},thumbnail:{borderRadius:"50%"},thumbnailWrapper:{minWidth:48},title:{display:"inline-flex",alignItems:"center",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),marginRight:"auto"}})}),{name:"ShoppingCartItem"}),Me=function(e){var a=e.item,t=e.quantity,n=Object(l.b)(),r=Be();return c.a.createElement(C.a,{className:r.root},c.a.createElement(k,{src:a.thumbnailUrl,alt:a.title,aspectRatio:1,isCritical:!0,className:r.thumbnail,wrapperClassName:r.thumbnailWrapper}),c.a.createElement("span",{className:r.title},a.title),c.a.createElement(We.a,{label:"Quantity",name:"quantity",type:"number",value:t,onChange:function(e){n(re.updateItemQuantity({id:a.id,quantity:e.target.valueAsNumber}))},inputProps:{min:1}}),c.a.createElement(le.a,{color:"primary",onClick:function(){n(re.remove(a.id))}},c.a.createElement(Ge.a,null)))},Ue=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",padding:e.spacing(2),width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}),{name:"ShoppingCart"}),Fe=c.a.memo((function(){var e=Object(l.c)(ne),a=Object(l.c)(te),t=Ue();return c.a.createElement("div",{className:t.root},e.map((function(e){return c.a.createElement(Me,{key:"ShoppingCartItem-".concat(e.id),item:e,quantity:a[e.id]})})))}));!function(e){e.CATALOG="/",e.CART="/cart"}(ke||(ke={}));var Qe=function(){return c.a.createElement(De,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:ke.CART,component:function(){return c.a.createElement(Fe,null)}}),c.a.createElement(f.a,{path:ke.CATALOG,component:function(){return c.a.createElement(ye,{catalogUrl:"https://jsonplaceholder.typicode.com/photos"})}})))},Je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ze=t(16),He=Object(ze.combineReducers)({catalogReducer:_,shoppingCartReducer:ce});t(102);var Ke,Ve=Object(p.a)({palette:{type:"light",primary:{main:u.a[500]},secondary:{main:d.a[500]}}}),Xe=Object(S.a)({reducer:He,middleware:Object(D.a)(Object(S.d)()),preloadedState:Ke,enhancers:[]});i.a.render(c.a.createElement(l.a,{store:Xe},c.a.createElement(g.a,{theme:Ve},c.a.createElement(s.a,{basename:"/docavenue"},c.a.createElement(m.a,null),c.a.createElement(Qe,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/docavenue",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/docavenue","/service-worker.js");Je?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$e(a,e)}))}}()},89:function(e,a,t){e.exports=t(103)}},[[89,1,2]]]);
//# sourceMappingURL=main.4a42d25e.chunk.js.map