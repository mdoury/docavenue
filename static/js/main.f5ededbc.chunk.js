(this.webpackJsonpdocavenue=this.webpackJsonpdocavenue||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),o=t(7),i=t.n(o),l=t(8),s=t(46),u=t(164),d=t(165),m=t(167),p=t(85),g=t(166),f=t(32),b=t(21),O=t(69),j=t(170),h=t(15),C=t(155),v=t(150),E=t(151),y=t(154),x=t(153),N=t(152),w=t(73),P=t.n(w),I=t(41),A=t(86),T=t.p+"static/media/Spinner.f3fb0c41.svg",k=Object(O.a)((function(e){return Object(j.a)({root:{position:"relative",overflow:"hidden"},spinner:{position:"absolute",top:"25%",left:"25%",height:"50%",width:"50%"},image:{position:"absolute",top:0,left:0,width:"100%","&.fade-in":{animation:"fade-in 0.5s ease-in"}}})}),{name:"Img"}),L=function(e){var a=e.aspectRatio,t=e.className,n=e.wrapperClassName,o=e.isCritical,i=e.alt,l=void 0===i?"":i,s=Object(A.a)(e,["aspectRatio","className","wrapperClassName","isCritical","alt"]),u=Object(c.useState)(!1),d=Object(I.a)(u,2),m=d[0],p=d[1],g=k();var f="".concat(g.image," ").concat(t||""," ").concat(o?"":"fade-in"),b="".concat(g.root," ").concat(n||""),O={paddingTop:"".concat(100*a,"%")};return r.a.createElement("div",{className:b},r.a.createElement("div",{style:O}),!m&&!o&&r.a.createElement("img",{className:g.spinner,src:T,alt:"spinner"}),r.a.createElement("img",Object.assign({className:f,alt:l,onLoad:function(){p(!0)}},s)))},R=t(65),S=t(12),D=t(36),W=t(51),q=t.n(W),B=t(71),G=t.n(B);!function(e){e.Initial="INITIAL",e.Loading="LOADING",e.Loaded="LOADED",e.Error="ERROR"}(n||(n={}));var M,F={items:[],currentPage:1,itemsPerPage:15,search:"",status:n.Initial,error:null},U=function(e){return e.catalogReducer},Q=Object(R.a)(U,(function(e){return e.items})),J=Object(R.a)(U,(function(e){return e.currentPage})),$=Object(R.a)(U,(function(e){return e.itemsPerPage})),z=Object(R.a)(Q,(function(e){return e.length})),H=(Object(R.a)([z,$],(function(e,a){return Math.ceil(e/a)})),Object(R.a)(U,(function(e){return e.status}))),K=Object(R.a)(U,(function(e){return e.search})),V=Object(R.a)(Q,(function(e){return new G.a(e,{keys:["title"]})})),X=Object(R.a)([V,K],(function(e,a){return e.search(a)})),Y=Object(R.a)([K,X,Q],(function(e,a,t){return e&&e.length?a:t})),Z=Object(R.a)(Y,(function(e){return e.length})),_=Object(R.a)([Z,$],(function(e,a){return Math.ceil(e/a)})),ee=Object(R.a)([Y,J,$],(function(e,a,t){return e.slice((a-1)*t,a*t)})),ae=Object(R.a)([J,$],(function(e,a){return(e-1)*a+1})),te=Object(R.a)([J,$,Z],(function(e,a,t){return Math.min(e*a,t)})),ne=Object(R.a)([ae,te,Z],(function(e,a,t){return"".concat(e,"\u2011").concat(a,"\xa0of\xa0").concat(t)})),ce=function(e){return function(a){var t,n;return q.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a(re.loadCatalog()),c.prev=1,c.next=4,q.a.awrap(fetch(e));case 4:return t=c.sent,c.next=7,q.a.awrap(t.json());case 7:n=c.sent,a(re.loadCatalogSuccess(n)),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(1),a(re.loadCatalogFailure(c.t0.message));case 14:case"end":return c.stop()}}),null,null,[[1,11]])}},re={loadCatalog:Object(S.b)("[Catalog] Start loading catalog..."),loadCatalogSuccess:Object(S.b)("[Catalog] Succeeded loading"),loadCatalogFailure:Object(S.b)("[Catalog] Failed loading"),firstPage:Object(S.b)("[Catalog] First page"),previousPage:Object(S.b)("[Catalog] Previous page"),goToPage:Object(S.b)("[Catalog] Go to page"),nextPage:Object(S.b)("[Catalog] Next page"),lastPage:Object(S.b)("[Catalog] Last page"),setItemsPerPage:Object(S.b)("[Catalog] Set items per page"),search:Object(S.b)("[Catalog] Search")},oe=Object(S.c)(F,(function(e){return e.addCase(re.loadCatalog,(function(e){return Object(h.a)({},e,{status:n.Loading})})).addCase(re.loadCatalogSuccess,(function(e,a){return Object(h.a)({},e,{items:[].concat(Object(D.a)(e.items),Object(D.a)(a.payload)),status:n.Loaded})})).addCase(re.loadCatalogFailure,(function(e,a){return Object(h.a)({},e,{error:a.payload,status:n.Error})})).addCase(re.firstPage,(function(e){return Object(h.a)({},e,{currentPage:1})})).addCase(re.previousPage,(function(e){return Object(h.a)({},e,{currentPage:(e.currentPage-1)*e.itemsPerPage>0?e.currentPage-1:e.currentPage})})).addCase(re.goToPage,(function(e,a){return Object(h.a)({},e,{currentPage:a.payload})})).addCase(re.nextPage,(function(e,a){return Object(h.a)({},e,{currentPage:e.currentPage<a.payload?e.currentPage+1:e.currentPage})})).addCase(re.lastPage,(function(e,a){return Object(h.a)({},e,{currentPage:a.payload})})).addCase(re.setItemsPerPage,(function(e,a){return Object(h.a)({},e,{currentPage:1,itemsPerPage:a.payload})})).addCase(re.search,(function(e,a){return Object(h.a)({},e,{search:a.payload,currentPage:1})}))}));!function(e){e.Initial="INITIAL",e.Loading="LOADING",e.Loaded="LOADED",e.Error="ERROR"}(M||(M={}));var ie=function(e){return e.shoppingCartReducer},le=Object(R.a)(ie,(function(e){return e.catalogItemIds})),se=Object(R.a)(ie,(function(e){return e.quantityMap})),ue=Object(R.a)([le,Q],(function(e,a){return e.map((function(e){return a.find((function(a){return a.id===e}))}))})),de=Object(R.a)([le,se],(function(e,a){return e.reduce((function(e,t){return e+a[t]}),0)})),me={addItem:Object(S.b)("[ShoppingCart] Add item"),remove:Object(S.b)("[ShoppingCart] Remove item"),updateItemQuantity:Object(S.b)("[ShoppingCart] Update item quantity")},pe=Object(S.c)({catalogItemIds:[],quantityMap:{}},(function(e){return e.addCase(me.addItem,(function(e,a){var t=e.catalogItemIds,n=e.quantityMap;t.includes(a.payload)?n[a.payload]=n[a.payload]+1:(t.unshift(a.payload),n[a.payload]=1)})).addCase(me.remove,(function(e,a){var t=e.catalogItemIds,n=e.quantityMap,c=t.findIndex((function(e){return e===a.payload}));delete t[c],delete n[a.payload]})).addCase(me.updateItemQuantity,(function(e,a){var t=a.payload,n=t.id,c=t.quantity;e.quantityMap[n]=c}))})),ge=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",position:"relative"},clickableArea:{flex:"1 1 auto",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"unset"},title:Object(h.a)({},e.typography.h5,{margin:0}),actions:{display:"flex"},addToCartBtn:{display:"flex",flex:"1 0 auto",padding:e.spacing(1)},addToCartBtnIcon:{borderColor:e.palette.primary.contrastText,borderRadius:4,borderStyle:"solid",borderWidth:1,padding:2},addToCartBtnLabel:{margin:"0 auto"}})}),{name:"CatalogItem"}),fe=function(e){var a=e.item,t=Object(l.b)(),n=ge();return r.a.createElement(v.a,{className:n.root},r.a.createElement(E.a,{className:n.clickableArea},r.a.createElement(N.a,null,r.a.createElement(L,{src:a.url,aspectRatio:1})),r.a.createElement(x.a,null,r.a.createElement("h3",{className:n.title},a.title))),r.a.createElement(y.a,{className:n.actions},r.a.createElement(C.a,{className:n.addToCartBtn,variant:"contained",color:"primary",onClick:function(){t(me.addItem(a.id))}},r.a.createElement(P.a,{className:n.addToCartBtnIcon}),r.a.createElement("span",{className:n.addToCartBtnLabel},"ADD TO CART"))))},be=t(158),Oe=t(171),je=t(168),he=t(74),Ce=t.n(he),ve=t(75),Ee=t.n(ve),ye=t(76),xe=t.n(ye),Ne=t(77),we=t.n(Ne),Pe=Object(O.a)((function(e){return Object(j.a)({root:Object(b.a)({display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:e.spacing(2)},e.breakpoints.down("xs"),{flexDirection:"column"}),info:{display:"flex",flexDirection:"row"},text:{display:"flex",alignItems:"center"},select:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},actions:Object(b.a)({display:"flex",flexDirection:"row"},e.breakpoints.down("xs"),{marginLeft:"auto"})})}),{name:"CatalogPagination"}),Ie=function(){var e=Object(l.b)(),a=Object(l.c)(J),t=Object(l.c)($),n=Object(l.c)(_),c=Object(l.c)(ne),o=Pe();return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.info},r.a.createElement(Oe.a,{className:o.text,id:"catalog-pagination-select-label"},"Items per page"),r.a.createElement(je.a,{className:o.select,native:!0,labelId:"catalog-pagination-select-label",value:t,onChange:function(a){var t=a.target.value;t>0&&e(re.setItemsPerPage(t))}},r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:15},"15"),r.a.createElement("option",{value:50},"50")),r.a.createElement("div",{className:o.text},c)),r.a.createElement("div",{className:o.actions},r.a.createElement(be.a,{onClick:function(){e(re.firstPage())},disabled:a<=1,"aria-label":"first page"},r.a.createElement(Ce.a,null)),r.a.createElement(be.a,{onClick:function(){e(re.previousPage())},disabled:a<=1,"aria-label":"previous page"},r.a.createElement(Ee.a,null)),r.a.createElement(be.a,{onClick:function(){e(re.nextPage(n))},disabled:a>=n,"aria-label":"next page"},r.a.createElement(xe.a,null)),r.a.createElement(be.a,{onClick:function(){e(re.lastPage(n))},disabled:a>=n,"aria-label":"last page"},r.a.createElement(we.a,null))))},Ae=function(e){var a=e.className;return r.a.createElement("img",{className:a||"",src:T,alt:"loading..."})},Te=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",flex:"1 0 auto"},wrapper:Object(b.a)({padding:e.spacing(2),display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:e.spacing(2)},e.breakpoints.down("xs"),{display:"flex",flexDirection:"column","& > * + *":{marginTop:e.spacing(2)}}),loader:{margin:"auto"}})}),{name:"Catalog"}),ke=function(e){var a=e.catalogUrl,t=Object(l.b)(),o=Object(l.c)(ee),i=Object(l.c)(H),s=Te();return Object(c.useEffect)((function(){i!==n.Loading&&i!==n.Loaded&&t(ce(a))}),[t,a,i]),i!==n.Loaded?r.a.createElement(Ae,{className:s.loader}):r.a.createElement("div",{className:s.root},r.a.createElement(Ie,null),r.a.createElement("div",{className:s.wrapper},o.map((function(e){return r.a.createElement(fe,{key:"CatalogItem-".concat(e.id),item:e})}))),r.a.createElement(Ie,null))},Le=t(161),Re=t(160),Se=t(162),De=t(163),We=t(82),qe=t.n(We),Be=t(83),Ge=t.n(Be),Me=t(80),Fe=t.n(Me),Ue=t(173),Qe=t(172),Je=t(79),$e=t.n(Je),ze=t(78),He=t.n(ze),Ke=Object(O.a)((function(e){return Object(j.a)({root:Object(b.a)({color:e.palette.primary.contrastText,height:48},e.breakpoints.down("xs"),{height:32}),icon:{color:e.palette.primary.contrastText}})}),{name:"Search"}),Ve=function(){var e=Object(c.useState)(""),a=Object(I.a)(e,2),t=a[0],n=a[1],o=Object(l.b)(),i=Ke();return Object(c.useEffect)(He()((function(){o(re.search(t))}),500),[o,t]),r.a.createElement(Qe.a,{className:i.root,placeholder:"Search",value:t,onChange:function(e){n(e.target.value)},labelWidth:0,endAdornment:r.a.createElement(Ue.a,{position:"end"},r.a.createElement($e.a,{className:i.icon}))})},Xe=t(40),Ye=t(159);var Ze,_e=function(){var e=Object(Xe.a)();return Object(D.a)(e.breakpoints.keys).reverse().reduce((function(a,t){var n=Object(Ye.a)(e.breakpoints.up(t));return!a&&n?t:a}),null)||"xs"},ea=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto"},appBar:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:e.spacing(2),position:"sticky",top:0},actions:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}},pageTitle:Object(h.a)({},e.typography.h5,{margin:"auto 0"}),pageContent:Object(b.a)({display:"flex",flexDirection:"column",flex:"1 0 auto"},e.breakpoints.down("xs"),{marginBottom:48}),bottomNavigation:{position:"absolute",bottom:0,width:"100%"},icon:{color:e.palette.primary.contrastText}})}),{name:"Layout"}),aa=function(e){var a=e.itemsInCart,t=e.iconClassName;return r.a.createElement(Re.a,{badgeContent:a,color:"secondary"},r.a.createElement(Fe.a,{className:t||""}))},ta=function(e){var a=e.children,t=_e(),n=ea(),o=Object(f.f)(),i=Object(f.g)([Ze.CART,Ze.CATALOG]),s=Object(c.useState)(i?i.path:Ze.CATALOG),u=Object(I.a)(s,2),d=u[0],m=u[1],p=Object(l.c)(de);return Object(c.useEffect)((function(){o.push(d)}),[d,o]),r.a.createElement("main",{className:n.root},r.a.createElement(Le.a,{className:n.appBar},d===Ze.CATALOG&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:n.pageTitle},"Catalog"),r.a.createElement("div",{className:n.actions},r.a.createElement(Ve,null),"xs"!==t&&r.a.createElement(be.a,{onClick:function(){m(Ze.CART)}},r.a.createElement(aa,{itemsInCart:p,iconClassName:n.icon})))),d===Ze.CART&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:n.pageTitle},"Shopping Cart"),r.a.createElement("div",{className:n.actions},"xs"!==t&&r.a.createElement(be.a,{onClick:function(){m(Ze.CATALOG)}},r.a.createElement(qe.a,{className:n.icon}))))),r.a.createElement("div",{className:n.pageContent},a),"xs"===t&&r.a.createElement(Se.a,{className:n.bottomNavigation,value:d,onChange:function(e,a){m(a)}},r.a.createElement(De.a,{value:Ze.CATALOG,icon:r.a.createElement(Ge.a,null)}),r.a.createElement(De.a,{value:Ze.CART,icon:r.a.createElement(aa,{itemsInCart:p})})))},na=t(169),ca=t(84),ra=t.n(ca),oa=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:e.spacing(1)},thumbnail:{borderRadius:"50%"},thumbnailWrapper:{minWidth:48},title:{display:"inline-flex",alignItems:"center",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),marginRight:"auto"}})}),{name:"ShoppingCartItem"}),ia=function(e){var a=e.item,t=e.quantity,n=Object(l.b)(),c=oa();return r.a.createElement(v.a,{className:c.root},r.a.createElement(L,{src:a.thumbnailUrl,alt:a.title,aspectRatio:1,isCritical:!0,className:c.thumbnail,wrapperClassName:c.thumbnailWrapper}),r.a.createElement("span",{className:c.title},a.title),r.a.createElement(na.a,{label:"Quantity",name:"quantity",type:"number",value:t,onChange:function(e){n(me.updateItemQuantity({id:a.id,quantity:e.target.valueAsNumber}))},inputProps:{min:1}}),r.a.createElement(be.a,{color:"primary",onClick:function(){n(me.remove(a.id))}},r.a.createElement(ra.a,null)))},la=Object(O.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",padding:e.spacing(2),width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}),{name:"ShoppingCart"}),sa=r.a.memo((function(){var e=Object(l.c)(ue),a=Object(l.c)(se),t=la();return r.a.createElement("div",{className:t.root},e.map((function(e){return r.a.createElement(ia,{key:"ShoppingCartItem-".concat(e.id),item:e,quantity:a[e.id]})})))}));!function(e){e.CATALOG="/",e.CART="/cart"}(Ze||(Ze={}));var ua=function(){return r.a.createElement(ta,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:Ze.CART,component:function(){return r.a.createElement(sa,null)}}),r.a.createElement(f.a,{path:Ze.CATALOG,component:function(){return r.a.createElement(ke,{catalogUrl:"https://jsonplaceholder.typicode.com/photos"})}})))},da=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ma(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var pa=t(17),ga=Object(pa.combineReducers)({catalogReducer:oe,shoppingCartReducer:pe});t(108);var fa,ba=Object(p.a)({palette:{type:"light",primary:{main:u.a[500]},secondary:{main:d.a[500]}}}),Oa=Object(S.a)({reducer:ga,middleware:Object(D.a)(Object(S.d)()),preloadedState:fa,enhancers:[]});i.a.render(r.a.createElement(l.a,{store:Oa},r.a.createElement(g.a,{theme:ba},r.a.createElement(s.a,{basename:"/docavenue"},r.a.createElement(m.a,null),r.a.createElement(ua,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/docavenue",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/docavenue","/service-worker.js");da?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ma(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ma(a,e)}))}}()},95:function(e,a,t){e.exports=t(109)}},[[95,1,2]]]);
//# sourceMappingURL=main.f5ededbc.chunk.js.map