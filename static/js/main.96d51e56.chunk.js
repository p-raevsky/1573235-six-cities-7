(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{50:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(22),s=a.n(n),i=a(6),o=a(2),l=a(5),d=a(9),u=Object(d.a)(),j=a(7),p={HEADER:{type:"header",width:"81",height:"41"},FOOTER:{type:"footer",width:"64",height:"33"}},b={CITIES:{type:"cities",className:"cities__place-card place-card",width:"260",height:"200"},NEAR_PLACES:{type:"near-places",className:"near-places__card place-card",width:"260",height:"200"},FAVORITES:{type:"favorites",className:"favorites__card place-card",width:"150",height:"110"}},m={iconUrl:"img/pin.svg",iconSize:[27,39],iconAnchor:[13,39]},h={iconUrl:"img/pin-active.svg",iconSize:[27,39],iconAnchor:[13,39]},_={PARIS:{location:{latitude:48.85,longitude:2.35,zoom:12}},COLOGNE:{location:{latitude:50.93,longitude:6.95,zoom:12}},BRUSSELS:{location:{latitude:50.85,longitude:4.35,zoom:12}},AMSTERDAM:{location:{latitude:52.38333,longitude:4.9,zoom:12}},HAMBURG:{location:{latitude:53.54,longitude:9.99,zoom:12}},DUSSELDORF:{location:{latitude:51.23,longitude:6.77,zoom:12}}},O="https://7.react.pages.academy/six-cities",f=5e3,v=1e3,x="fixed",g="max-content",y="max-content",N="50%",w="50%",R="translate(-50%, -50%)",S="50%",P="50px 50px",k="30px",C="center",E="white",A="#00000",I="0 7px 15px rgba(0,0,0,0.5)",T="3000",L="10px solid #4481c3",q=50,D=300,U=a(0);var z=function(e){var t=e.isActive,a=e.type;return Object(U.jsx)(j.a,{className:"".concat(a,"__logo-link ").concat(t?"".concat(a,"__logo-link--active"):""),to:"/",children:Object(U.jsx)("img",{className:"".concat(a,"__logo"),src:"img/logo.svg",alt:"6 cities logo",width:p[a.toUpperCase()].width,height:p[a.toUpperCase()].height})})},F="Rating is required",M="Something went wrong, please try posting your comment later",H="Something went wrong. Try refreshing the page or come back later",B="/",G="/login",W="/favorites",Y="/offer",V="/404",J={PARIS:"Paris",COLOGNE:"Cologne",BRUSSELS:"Brussels",AMSTERDAM:"Amsterdam",HAMBURG:"Hamburg",DUSSELDORF:"Dusseldorf"},Z="CITIES",K="NEAR_PLACES",Q="FAVORITES",X={POPULAR:"Popular",PRICE_UP:"Price: low to high",PRICE_DOWN:"Price: high to low",RATING:"Top rated first"},$={UNAUTHORIZED:401,SERVER_ERROR:500},ee="AUTH",te="NO_AUTH",ae="UNKNOWN",re="/hotels",ce="/login",ne="/logout",se="/favorite",ie="/comments",oe="DATA",le="PROCESS",de="USER",ue="process/city/addCurrent",je="process/places/activePlace",pe="process/sorting/isOpen",be="process/sorting/closed",me="process/sorting/changeSortingType",he="data/loadOffers",_e="data/loadOffer",Oe="data/loadReviews",fe="data/loadNearby",ve="data/loadFavorites",xe="data/updateFavorites",ge="user/requiredAuthorization",ye="user/logout",Ne="redirectToRoute",we="user/setEmail",Re="user/setUserAvatar",Se="process/newRating",Pe=Object(l.b)(ue,(function(e){return{payload:e}})),ke=Object(l.b)(je,(function(e){return{payload:e}})),Ce=Object(l.b)(pe),Ee=Object(l.b)(be),Ae=Object(l.b)(me,(function(e){return{payload:e}})),Ie=Object(l.b)(he,(function(e){return{payload:e}})),Te=Object(l.b)(_e,(function(e){return{payload:e}})),Le=Object(l.b)(Oe,(function(e){return{payload:e}})),qe=Object(l.b)(fe,(function(e){return{payload:e}})),De=Object(l.b)(ge,(function(e){return{payload:e}})),Ue=Object(l.b)(ye),ze=Object(l.b)(Ne,(function(e){return{payload:e}})),Fe=Object(l.b)(we,(function(e){return{payload:e}})),Me=Object(l.b)(Se,(function(e){return{payload:e}})),He=Object(l.b)(ve,(function(e){return{payload:e}})),Be=Object(l.b)(Re,(function(e){return{payload:e}})),Ge=Object(l.b)(xe,(function(e){return{payload:e}})),We=a(21),Ye=function(e){var t=Object(We.a)(Object(We.a)({},e),{},{host:{avatarUrl:e.host.avatar_url,isPro:e.host.is_pro,id:e.host.id,name:e.host.name},isFavorite:e.is_favorite,isPremium:e.is_premium,maxAdults:e.max_adults,previewImage:e.preview_image});return delete t.is_favorite,delete t.is_premium,delete t.max_adults,delete t.preview_image,t},Ve=function(e){return Object(We.a)(Object(We.a)({},e),{},{user:{avatarUrl:e.user.avatar_url,isPro:e.user.is_pro,id:e.user.id,name:e.user.name}})},Je=function(e){return e===ee},Ze=a(20);function Ke(e){return(20*Math.round(e)).toString()}function Qe(e){var t=document.createElement("div");t.style.zIndex=v,t.style.position=x,t.style.width=g,t.style.height=y,t.style.left=N,t.style.top=w,t.style.transform=R,t.style.right=S,t.style.padding=P,t.style.fontSize=k,t.style.textAlign=C,t.style.backgroundColor=E,t.style.color=A,t.style.borderTop=L,t.style.boxShadow=I,t.textContent=e,document.body.append(t),setTimeout((function(){t.remove()}),T)}function Xe(e,t){var a=e.findIndex((function(e){return e.id===t.id}));return-1===a?e:[].concat(Object(Ze.a)(e.slice(0,a)),[t],Object(Ze.a)(e.slice(a+1)))}var $e=function(){return function(e,t,a){return a.get(re).then((function(t){var a=t.data;e(Ie(a.map((function(e){return Ye(e)}))))}))}},et=function(e,t){return function(a,r,c){return c.post("".concat(se,"/").concat(e,"/").concat(t)).then((function(e){var t=e.data;a(Ge(Ye(t)))})).catch((function(){return a(ze(G))}))}},tt=function(e){return e[de].authorizationStatus},at=function(e){return e[de].userEmail},rt=function(e){return e[de].userAvatar};var ct=function(e){var t=e.userEmail,a=Object(o.c)(),r=Object(o.d)(rt);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("li",{className:"header__nav-item user",children:Object(U.jsxs)(j.a,{className:"header__nav-link header__nav-link--profile",to:W,children:[Object(U.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper",style:{backgroundImage:"url(".concat(r,")"),borderRadius:"50%"}}),Object(U.jsx)("span",{className:"header__user-name user__name",children:t})]})}),Object(U.jsx)("li",{className:"header__nav-item",onClick:function(e){e.preventDefault(),a((function(e,t,a){return a.delete(ne).then((function(){return localStorage.removeItem("token")})).then((function(){return e(Ue())})).then((function(){return e($e())}))}))},children:Object(U.jsx)(j.a,{to:"#",className:"header__nav-link",children:Object(U.jsx)("span",{className:"header__signout",children:"Sign out"})})})]})};var nt=function(){return Object(U.jsx)("li",{className:"header__nav-item user",children:Object(U.jsxs)(j.a,{className:"header__nav-link header__nav-link--profile",to:G,children:[Object(U.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(U.jsx)("span",{className:"header__login",children:"Sign in"})]})})};var st=function(e){var t=e.isActive,a=void 0!==t&&t,r=Object(o.d)(tt),c=Object(o.d)(at),n=Je(r);return Object(U.jsx)("header",{className:"header",children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"header__wrapper",children:[Object(U.jsx)("div",{className:"header__left",children:Object(U.jsx)(z,{type:p.HEADER.type,isActive:a})}),Object(U.jsx)("nav",{className:"header__nav",children:Object(U.jsx)("ul",{className:"header__nav-list",children:n?Object(U.jsx)(ct,{userEmail:c}):Object(U.jsx)(nt,{})})})]})})})};var it=function(e){var t=e.cityItem,a=e.currentCity,r=e.onCurrentCity;return Object(U.jsx)("li",{className:"locations__item","data-city":t,onClick:function(e){var t=e.target;if(t.closest("a")){var a=t.closest("li").dataset.city;r(a)}},children:Object(U.jsx)(j.a,{to:"",className:"locations__item-link tabs__item".concat(a===t?" tabs__item--active":""),children:Object(U.jsx)("span",{children:t})})})},ot=function(e){return e[le].city},lt=function(e){return e[le].activePlaceId},dt=function(e){return e[le].selectedSorting},ut=function(e){return e[le].isSortingOpen},jt=function(e){return e[le].newRating};var pt=Object(o.b)(null,(function(e){return{setCity:function(t){e(Pe(t))}}}))((function(e){var t=e.setCity,a=Object(o.d)(ot),r=Object.values(J);return Object(U.jsx)("div",{className:"tabs",children:Object(U.jsx)("section",{className:"locations container",children:Object(U.jsx)("ul",{className:"locations__list tabs__list",children:r.map((function(e){return Object(U.jsx)(it,{onCurrentCity:t,cityItem:e,currentCity:a},e)}))})})})}));a(50);var bt=function(){return Object(U.jsx)("div",{className:"loading-spinner-pulse",children:Object(U.jsxs)("div",{className:"loading-spinner",children:[Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{})]})})};var mt=function(e){var t=e.isLoaded,a=e.children;return t&&a||Object(U.jsx)(bt,{})};var ht=function(){return Object(U.jsx)("div",{className:"place-card__mark",children:Object(U.jsx)("span",{children:"Premium"})})},_t=a(3),Ot=a.n(_t);Ot.a.shape({bedrooms:Ot.a.number.isRequired,city:Ot.a.shape({location:Ot.a.shape({latitude:Ot.a.number.isRequired,longitude:Ot.a.number.isRequired,zoom:Ot.a.number.isRequired}),name:Ot.a.string.isRequired}),description:Ot.a.string.isRequired,goods:Ot.a.arrayOf(Ot.a.string),host:Ot.a.shape({avatarUrl:Ot.a.string.isRequired,id:Ot.a.number.isRequired,isPro:Ot.a.bool.isRequired,name:Ot.a.string.isRequired}),id:Ot.a.number.isRequired,images:Ot.a.arrayOf(Ot.a.string),isFavorite:Ot.a.bool.isRequired,isPremium:Ot.a.bool.isRequired,location:Ot.a.shape({latitude:Ot.a.number.isRequired,longitude:Ot.a.number.isRequired,zoom:Ot.a.number.isRequired}),maxAdults:Ot.a.number.isRequired,previewImage:Ot.a.string.isRequired,price:Ot.a.number.isRequired,rating:Ot.a.number.isRequired,title:Ot.a.string.isRequired,type:Ot.a.string.isRequired});var ft=function(e){var t=e.offer,a=t.isPremium,r=t.isFavorite,c=t.price,n=t.rating,s=t.id,i=t.title,l=t.type,d=t.previewImage,u=e.placesType,p=Object(o.c)(),m=Ke(n),h=r?"0":"1";return Object(U.jsxs)("article",{className:b[u].className,"data-id":s,onMouseEnter:function(e){var t=e.currentTarget.getAttribute("data-id");p(ke(t))},children:[a&&u!==Q?Object(U.jsx)(ht,{}):"",Object(U.jsx)("div",{className:"".concat(b[u].type,"__image-wrapper place-card__image-wrapper"),children:Object(U.jsx)(j.a,{to:"".concat(Y,"/").concat(s),children:Object(U.jsx)("img",{className:"place-card__image",src:d,width:b[u].width,height:b[u].height,alt:"Place"})})}),Object(U.jsxs)("div",{className:"place-card__info",children:[Object(U.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(U.jsxs)("div",{className:"place-card__price",children:[Object(U.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",c]}),Object(U.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(U.jsxs)("button",{className:"place-card__bookmark-button button".concat(r?" place-card__bookmark-button--active":""),type:"button",onClick:function(){p(et(s,h))},children:[Object(U.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(U.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(U.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(U.jsx)("div",{className:"place-card__rating rating",children:Object(U.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(U.jsx)("span",{style:{width:"".concat(m,"%")}}),Object(U.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(U.jsx)("h2",{className:"place-card__name",children:Object(U.jsx)(j.a,{to:"".concat(Y,"/").concat(s),children:i})}),Object(U.jsx)("p",{className:"place-card__type",children:l})]})]})};var vt=function(e){var t=e.places;return Object(U.jsx)("div",{className:"cities__places-list places__list tabs__content",children:t.map((function(e){return Object(U.jsx)(ft,{offer:e,placesType:Z},e.id)}))})},xt=a(15),gt=a.n(xt),yt=a(14);a(29);var Nt=function(e,t){var a=t.location,c=a.latitude,n=a.longitude,s=a.zoom,i=Object(r.useState)(null),o=Object(yt.a)(i,2),l=o[0],d=o[1];return Object(r.useEffect)((function(){if(null!==e.current&&null===l){var t=gt.a.map(e.current,{center:{lat:c,lng:n},zoom:s,zoomControl:!1,marker:!0});gt.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(t),d(t)}}),[c,n,e,s,l,t]),l};var wt=function(e){var t=e.city,a=e.places,c=e.activePlaceId,n=_[t.toUpperCase()],s=Object(r.useRef)(null),i=Nt(s,n),o=gt.a.icon(m),l=gt.a.icon(h),d=a.map((function(e){return Object({id:e.id,location:e.location})})),u=n.location,j=u.latitude,p=u.longitude,b=u.zoom;return Object(r.useEffect)((function(){var e=gt.a.layerGroup();return i&&(e.addTo(i),d.forEach((function(t){var a=t.id,r=t.location,n=r.latitude,s=r.longitude;gt.a.marker({lat:n,lng:s},{icon:String(a)===c?l:o}).addTo(e)})),i.flyTo([j,p],b)),function(){e.clearLayers()}}),[l,o,j,p,b,t,c,i,d]),Object(U.jsx)("div",{style:{height:"100%"},ref:s})};var Rt=function(e){var t=e.selectedSorting,a=e.sortItem,r=e.onChahgeSortingType;return Object(U.jsx)("li",{className:"places__option ".concat(a===t?"places__option--active":""),tabIndex:"0","data-name":a,onClick:function(e){var t=e.target.dataset.name;r(t)},children:a})};var St=Object(o.b)(null,(function(e){return{changeSortType:function(t){e(Ae(t))}}}))((function(e){var t=e.changeSortType,a=Object(o.d)(ut),c=Object(o.d)(dt),n=Object.values(X),s=Object(r.useRef)(),i=Object(o.c)();return function(e,t){Object(r.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])}(s,(function(){return i(Ee())})),Object(U.jsxs)("form",{className:"places__sorting",action:"#",method:"get",ref:s,onClick:function(e){var t=e.target;(t.closest(".places__sorting-type")||t.closest(".places__options"))&&i(Ce())},children:[Object(U.jsx)("span",{className:"places__sorting-caption",children:"Sort by "}),Object(U.jsxs)("span",{className:"places__sorting-type",tabIndex:"0",children:[c,Object(U.jsx)("svg",{className:"places__sorting-arrow",width:"7",height:"4",children:Object(U.jsx)("use",{xlinkHref:"#icon-arrow-select"})})]}),Object(U.jsx)("ul",{className:"places__options places__options--custom".concat(a?"places__options--opened":""),style:{position:"".concat(a?"absolute":""),zIndex:"".concat(a?1:"")},children:n.map((function(e){return Object(U.jsx)(Rt,{onChahgeSortingType:t,sortItem:e,selectedSorting:c},e)}))})]})}));var Pt=function(e){var t=e.places,a=Object(o.d)(ot),r=Object(o.d)(lt),c=t.length;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("section",{className:"cities__places places",children:[Object(U.jsx)("h2",{className:"visually-hidden",children:"Places"}),Object(U.jsxs)("b",{className:"places__found",children:[c," ",1===c?"place":"places"," to stay in ",a]}),Object(U.jsx)(St,{}),Object(U.jsx)(vt,{places:t})]}),Object(U.jsx)("div",{className:"cities__right-section",children:Object(U.jsx)("section",{className:"cities__map map",children:Object(U.jsx)(wt,{places:t,city:a,activePlaceId:r})})})]})};var kt=function(){var e=Object(o.d)(ot);return Object(U.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(U.jsx)("section",{className:"cities__no-places",children:Object(U.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(U.jsx)("b",{className:"cities__status",children:"No places to stay available"}),Object(U.jsx)("p",{className:"cities__status-description",children:"We could not find any property available at the moment in ".concat(e)})]})}),Object(U.jsx)("div",{className:"cities__right-section"})]})};var Ct=function(e){var t=e.places;return t.length&&Object(U.jsx)(Pt,{places:t})||Object(U.jsx)(kt,{})},Et=function(e){return e[oe].offer},At=function(e){return e[oe].offers},It=function(e){return e[oe].reviews},Tt=function(e){return e[oe].nearPlaces},Lt=function(e){return e[oe].favorites},qt=function(e){return e[oe].isFavoritesLoaded},Dt=function(e){return e[oe].isOfferDataLoaded},Ut=function(e){return e[oe].isOffersDataLoaded},zt=function(e){return e[oe].isReviewsDataLoaded},Ft=function(e){return e[oe].isNearPlacesDataLoaded};var Mt=function(){var e=Object(o.c)();Object(r.useEffect)((function(){e($e())}),[e]);var t=Object(o.d)(At),a=Object(o.d)(dt),c=Object(o.d)(ot),n=Object(o.d)(Ut),s=Object(r.useMemo)((function(){return function(e,t,a){var r=e.filter((function(e){return e.city.name===a}));switch(t){case X.PRICE_UP:return r.sort((function(e,t){return e.price-t.price}));case X.PRICE_DOWN:return r.sort((function(e,t){return t.price-e.price}));case X.RATING:return r.sort((function(e,t){return t.rating-e.rating}));default:return r}}(t,a,c)}),[t,a,c]);return Object(U.jsxs)("div",{className:"page page--gray page--main",children:[Object(U.jsx)(st,{isActive:!0}),Object(U.jsxs)("main",{className:"page__main page__main--index".concat(s.length?"":" page__main--index-empty"),children:[Object(U.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(U.jsx)(pt,{}),Object(U.jsx)("div",{className:"cities",children:Object(U.jsx)("div",{className:"cities__places-container container",children:Object(U.jsx)(mt,{isLoaded:n,children:Object(U.jsx)(Ct,{places:s})})})})]})]})};var Ht=function(){var e=Object(o.d)(ot),t=Object(r.useRef)(),a=Object(r.useRef)(),c=Object(o.c)(),n=Object(r.useState)(""),s=Object(yt.a)(n,2),i=s[0],l=s[1],d=Object(r.useState)(!1),u=Object(yt.a)(d,2),p=u[0],b=u[1];return Object(U.jsxs)("div",{className:"page page--gray page--login",children:[Object(U.jsx)(st,{}),Object(U.jsx)("main",{className:"page__main page__main--login",children:Object(U.jsxs)("div",{className:"page__login-container container",children:[Object(U.jsxs)("section",{className:"login",children:[Object(U.jsx)("h1",{className:"login__title",children:"Sign in"}),Object(U.jsxs)("form",{className:"login__form form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),a.current.value.trim(),c(function(e){var t=e.login,a=e.password;return function(e,r,c){return c.post(ce,{email:t,password:a}).then((function(t){var a=t.data;localStorage.setItem("token",a.token),e(Fe(a.email)),e(Be(a.avatar_url))})).then((function(){return e(De(ee))})).then((function(){return e(ze(B))}))}}({login:t.current.value,password:i}))},children:[Object(U.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(U.jsx)("label",{className:"visually-hidden",children:"E-mail"}),Object(U.jsx)("input",{ref:t,className:"login__input form__input",type:"email",name:"email",placeholder:"Email","data-testid":"login",required:!0})]}),Object(U.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(U.jsx)("label",{className:"visually-hidden",children:"Password"}),Object(U.jsx)("input",{className:"login__input form__input",type:"password",name:"password",placeholder:"Password",required:!0,"data-testid":"password",ref:a,onChange:function(e){var t=e.target.value;l(t),t.trim()?b(!0):b(!1)}})]}),Object(U.jsx)("button",{className:"login__submit form__submit button",type:"submit",disabled:!p,children:"Sign in"})]})]}),Object(U.jsx)("section",{className:"locations locations--login locations--current",children:Object(U.jsx)("div",{className:"locations__item",children:Object(U.jsx)(j.a,{className:"locations__item-link",to:B,children:Object(U.jsx)("span",{children:e})})})})]})})]})};var Bt=function(){return Object(U.jsx)("footer",{className:"footer container",children:Object(U.jsx)(z,{type:p.FOOTER.type})})};var Gt=function(){return Object(U.jsxs)("div",{className:"page",children:[Object(U.jsx)(st,{}),Object(U.jsx)("main",{className:"page__main container",children:Object(U.jsxs)("section",{style:{width:"100%"},children:[Object(U.jsx)("h1",{children:"404. Page not found"}),Object(U.jsx)("a",{href:"/",children:"Back to Home page"})]})}),Object(U.jsx)(Bt,{})]})};var Wt=function(e){var t=e.render,a=e.path,r=e.exact,c=e.isAuth,n=e.redirectPath;return Object(U.jsx)(i.b,{path:a,exact:r,render:function(e){return c?t(e):Object(U.jsx)(i.a,{to:n})}})},Yt=a(19),Vt=a.n(Yt);var Jt=function(e){var t=e.url;return Object(U.jsx)("div",{className:"property__image-wrapper",children:Object(U.jsx)("img",{className:"property__image",src:t,alt:"Property"})})};var Zt=function(e){var t=e.goodsItem;return Object(U.jsx)("li",{className:"property__inside-item",children:t})};Ot.a.shape({review:Ot.a.shape({comment:Ot.a.string.isRequired,date:Ot.a.string.isRequired,id:Ot.a.number.isRequired,rating:Ot.a.number.isRequired,user:Ot.a.shape({avatarUrl:Ot.a.string.isRequired,id:Ot.a.number.isRequired,isPro:Ot.a.bool.isRequired,name:Ot.a.string.isRequired})})});var Kt=function(e){var t=e.review,a=t.comment,r=t.date,c=t.rating,n=t.user,s=n.avatarUrl,i=n.name,o=Ke(c),l=function(e){return Vt()(e).format("MMM YYYY")}(r);return Object(U.jsxs)("li",{className:"reviews__item",children:[Object(U.jsxs)("div",{className:"reviews__user user",children:[Object(U.jsx)("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:Object(U.jsx)("img",{className:"reviews__avatar user__avatar",src:s,width:"54",height:"54",alt:"Reviews avatar"})}),Object(U.jsx)("span",{className:"reviews__user-name",children:i})]}),Object(U.jsxs)("div",{className:"reviews__info",children:[Object(U.jsx)("div",{className:"reviews__rating rating",children:Object(U.jsxs)("div",{className:"reviews__stars rating__stars",children:[Object(U.jsx)("span",{style:{width:"".concat(o,"%")}}),Object(U.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(U.jsx)("p",{className:"reviews__text",children:a}),Object(U.jsx)("time",{className:"reviews__time",dateTime:l,children:l})]})]})},Qt=a(39);var Xt=function(e){var t=e.isDisabled,a=e.index,r=Object(o.c)(),n=Object(o.d)(jt)===String(a);return Object(U.jsxs)(c.a.Fragment,{children:[Object(U.jsx)("input",{className:"form__rating-input visually-hidden",name:"rating",value:a,id:"".concat(a,"-stars"),type:"radio",checked:n,disabled:t,onChange:function(e){var t=e.target;r(Me(t.value))}}),Object(U.jsx)("label",{htmlFor:"".concat(a,"-stars"),className:"reviews__rating-label form__rating-label",title:"perfect",children:Object(U.jsx)("svg",{className:"form__star-image",width:"37",height:"33",children:Object(U.jsx)("use",{xlinkHref:"#icon-star"})})})]})};var $t=function(e){var t=e.isDisabled,a=new Array(5).fill(null);return Object(U.jsx)("div",{className:"reviews__rating-form form__rating",children:a.map((function(e,a){return Object(U.jsx)(Xt,{index:5-a,isDisabled:t},Object(Qt.a)())}))})};var ea=function(e){var t=e.id,a=Object(o.c)(),c=Object(r.useState)(!1),n=Object(yt.a)(c,2),s=n[0],i=n[1],l=Object(r.useState)(!1),d=Object(yt.a)(l,2),u=d[0],j=d[1],p=Object(r.useState)(""),b=Object(yt.a)(p,2),m=b[0],h=b[1],_=Object(o.d)(jt);return Object(U.jsxs)("form",{className:"reviews__form form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),_.length?(j(!0),a(function(e,t){var a=t.comment,r=t.rating;return function(t,c,n){return n.post("".concat(ie,"/").concat(e),{comment:a,rating:r}).then((function(e){var a=e.data;t(Le(a.map((function(e){return Ve(e)})))),t(Me(""))}))}}(t,{comment:m,rating:_})).then((function(){return i(!1)})).then((function(){return h("")})).catch((function(){return Qe(M)})).finally((function(){return j(!1)}))):Qe(F)},children:[Object(U.jsx)("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),Object(U.jsx)($t,{isDisabled:u}),Object(U.jsx)("textarea",{className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",onChange:function(e){var t,a=e.target.value;h(a),(t=a).length>=q&&t.length<D?i(!0):i(!1)},value:m,disabled:u,minLength:q,maxLength:D}),Object(U.jsxs)("div",{className:"reviews__button-wrapper",children:[Object(U.jsxs)("p",{className:"reviews__help",children:["To submit review please make sure to set ",Object(U.jsx)("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least ",Object(U.jsx)("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),Object(U.jsx)("button",{className:"reviews__submit form__submit button",type:"submit",disabled:!s||u,children:"Submit"})]})]})};var ta=function(e){var t=e.places;return Object(U.jsx)("div",{className:"near-places__list places__list",children:t.map((function(e){return Object(U.jsx)(ft,{offer:e,placesType:K},e.id)}))})};var aa=function(e){var t=e.offer,a=e.reviews,r=e.nearPlaces,c=t.city,n=t.images,s=t.isPremium,i=t.isFavorite,l=t.title,d=t.rating,u=t.type,j=t.bedrooms,p=t.maxAdults,b=t.price,m=t.goods,h=t.description,_=t.id,O=t.host,f=(O=void 0===O?{}:O).name,v=O.avatarUrl,x=O.isPro,g=Object(o.d)(tt),y=Object(o.c)(),N=r.slice();N.push(t);var w=i?"0":"1",R=Ke(d),S="property__avatar-wrapper".concat(x?" property__avatar-wrapper--pro":""," user__avatar-wrapper"),P=a.slice(0,10).sort((function(e,t){var a=Vt()(e.date);return Vt()(t.date).diff(a)})),k="".concat(j," ").concat(1===j?" Bedroom":" Bedrooms"),C="Max ".concat(p," ").concat(1===p?" adult":" adults"),E=Je(g);return Object(U.jsxs)("div",{className:"page",children:[Object(U.jsx)(st,{}),Object(U.jsxs)("main",{className:"page__main page__main--property",children:[Object(U.jsxs)("section",{className:"property",children:[Object(U.jsx)("div",{className:"property__gallery-container container",children:Object(U.jsx)("div",{className:"property__gallery",children:n.map((function(e){return Object(U.jsx)(Jt,{url:e},e)}))})}),Object(U.jsx)("div",{className:"property__container container",children:Object(U.jsxs)("div",{className:"property__wrapper",children:[s?Object(U.jsx)(ht,{}):"",Object(U.jsxs)("div",{className:"property__name-wrapper",children:[Object(U.jsx)("h1",{className:"property__name",children:l}),Object(U.jsxs)("button",{className:"property__bookmark-button button".concat(i?" property__bookmark-button--active":""),type:"button",onClick:function(){y(et(_,w))},children:[Object(U.jsx)("svg",{className:"property__bookmark-icon",width:"31",height:"33",children:Object(U.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(U.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(U.jsxs)("div",{className:"property__rating rating",children:[Object(U.jsxs)("div",{className:"property__stars rating__stars",children:[Object(U.jsx)("span",{style:{width:"".concat(R,"%")}}),Object(U.jsx)("span",{className:"visually-hidden",children:"Rating"})]}),Object(U.jsx)("span",{className:"property__rating-value rating__value",children:d.toFixed(1)})]}),Object(U.jsxs)("ul",{className:"property__features",children:[Object(U.jsx)("li",{className:"property__feature property__feature--entire",children:u}),Object(U.jsx)("li",{className:"property__feature property__feature--bedrooms",children:k}),Object(U.jsx)("li",{className:"property__feature property__feature--adults",children:C})]}),Object(U.jsxs)("div",{className:"property__price",children:[Object(U.jsxs)("b",{className:"property__price-value",children:["\u20ac",b]}),Object(U.jsx)("span",{className:"property__price-text",children:"\xa0night"})]}),Object(U.jsxs)("div",{className:"property__inside",children:[Object(U.jsx)("h2",{className:"property__inside-title",children:"What's inside"}),Object(U.jsx)("ul",{className:"property__inside-list",children:m.map((function(e){return Object(U.jsx)(Zt,{goodsItem:e},e)}))})]}),Object(U.jsxs)("div",{className:"property__host",children:[Object(U.jsx)("h2",{className:"property__host-title",children:"Meet the host"}),Object(U.jsxs)("div",{className:"property__host-user user",children:[Object(U.jsx)("div",{className:S,children:Object(U.jsx)("img",{className:"property__avatar user__avatar",src:v,width:"74",height:"74",alt:"Host avatar"})}),Object(U.jsx)("span",{className:"property__user-name",children:f}),x?Object(U.jsx)("span",{className:"property__user-status",children:"Pro"}):""]}),Object(U.jsx)("div",{className:"property__description",children:Object(U.jsx)("p",{className:"property__text",children:h})})]}),Object(U.jsxs)("section",{className:"property__reviews reviews",children:[Object(U.jsxs)("h2",{className:"reviews__title",children:["Reviews \xb7 ",Object(U.jsx)("span",{className:"reviews__amount",children:P.length})]}),Object(U.jsx)("ul",{className:"reviews__list",children:P.map((function(e){return Object(U.jsx)(Kt,{review:e},e.id)}))}),E&&Object(U.jsx)(ea,{id:_})]})]})}),Object(U.jsx)("section",{className:"property__map map",children:Object(U.jsx)(wt,{city:c.name,places:N,activePlaceId:String(_)})})]}),Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("section",{className:"near-places places",children:[Object(U.jsx)("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),Object(U.jsx)(ta,{places:r})]})})]})]})};var ra=function(e){var t=e.offerId,a=Object(o.c)();Object(r.useEffect)((function(){var e;a((e=t,function(t,a,r){return r.get("".concat(re,"/").concat(e)).then((function(e){var a=e.data;return t(Te(Ye(a)))})).catch((function(){return t(ze(V))}))})),a(function(e){return function(t,a,r){return r.get("".concat(ie,"/").concat(e)).then((function(e){var a=e.data;t(Le(a.map((function(e){return Ve(e)}))))})).catch((function(){return t(ze(V))}))}}(t)),a(function(e){return function(t,a,r){return r.get("".concat(re,"/").concat(e,"/nearby")).then((function(e){var a=e.data;t(qe(a.map((function(e){return Ye(e)}))))})).catch((function(){return t(ze(V))}))}}(t))}),[a,t]);var c=Object(o.d)(Et),n=Object(o.d)(It),s=Object(o.d)(Tt),i=Object(o.d)(Dt),l=Object(o.d)(zt),d=Object(o.d)(Ft);return Object(U.jsx)(mt,{isLoaded:i&&l&&d,children:Object(U.jsx)(aa,{offer:c,reviews:n,nearPlaces:s})})};var ca=function(e){var t=e.filteredPlaces;return Object(U.jsx)("div",{className:"favorites__places",children:t.map((function(e){return Object(U.jsx)(ft,{offer:e,placesType:Q},e.id)}))})};var na=function(e){var t=e.city,a=e.filteredPlaces,r=Object(o.c)();return Object(U.jsxs)("li",{className:"favorites__locations-items",children:[Object(U.jsx)("div",{className:"favorites__locations locations locations--current",onClick:function(e){var t=e.target;if(t.closest("a")){var a=t.closest("a").dataset.city;r(Pe(a))}},children:Object(U.jsx)("div",{className:"locations__item",children:Object(U.jsx)(j.a,{to:B,className:"locations__item-link","data-city":t,children:Object(U.jsx)("span",{children:t})})})}),Object(U.jsx)(ca,{filteredPlaces:a})]})};var sa=function(e){var t=e.favoritesPlaces,a=Object(Ze.a)(new Set(t.map((function(e){return e.city.name}))));return Object(U.jsxs)("section",{className:"favorites",children:[Object(U.jsx)("h1",{className:"favorites__title",children:"Saved listing"}),Object(U.jsx)("ul",{className:"favorites__list",children:a.map((function(e){var a=t.filter((function(t){return t.city.name===e}));return a.length?Object(U.jsx)(na,{city:e,filteredPlaces:a},e):""}))})]})};var ia=function(){return Object(U.jsxs)("section",{className:"favorites favorites--empty",children:[Object(U.jsx)("h1",{className:"visually-hidden",children:"Favorites (empty)"}),Object(U.jsxs)("div",{className:"favorites__status-wrapper",children:[Object(U.jsx)("b",{className:"favorites__status",children:"Nothing yet saved."}),Object(U.jsx)("p",{className:"favorites__status-description",children:"Save properties to narrow down search or plan your future trips."})]})]})};var oa=function(){var e=Object(o.d)(qt),t=Object(o.d)(Lt),a=Object(o.c)(),c=t.filter((function(e){return e.isFavorite}));return Object(r.useEffect)((function(){a((function(e,t,a){return a.get(se).then((function(t){var a=t.data;e(He(a.map((function(e){return Ye(e)}))))})).catch((function(){return e(ze(G))}))}))}),[a]),Object(U.jsxs)("div",{className:"page".concat(t?" page--favorites-empty":""),children:[Object(U.jsx)(st,{}),Object(U.jsx)(mt,{isLoaded:e,children:Object(U.jsx)("main",{className:"page__main page__main--favorites".concat(t?" page__main--favorites-empty":""),children:Object(U.jsx)("div",{className:"page__favorites-container container",children:c.length?Object(U.jsx)(sa,{favoritesPlaces:c}):Object(U.jsx)(ia,{})})})}),Object(U.jsx)(Bt,{})]})};var la,da,ua=function(){var e=Object(o.d)(tt);return Object(U.jsxs)(i.d,{children:[Object(U.jsx)(i.b,{exact:!0,path:B,children:Object(U.jsx)(Mt,{})}),Object(U.jsx)(Wt,{exact:!0,path:W,isAuth:e===ee,redirectPath:G,render:function(){return Object(U.jsx)(oa,{})}}),Object(U.jsx)(Wt,{exact:!0,path:G,isAuth:e!==ee,redirectPath:B,render:function(){return Object(U.jsx)(Ht,{})}}),Object(U.jsx)(i.b,{exact:!0,path:"".concat(Y,"/:id"),render:function(e){var t=e.match.params.id;return Object(U.jsx)(ra,{offerId:t})}}),Object(U.jsx)(i.b,{children:Object(U.jsx)(Gt,{})})]})},ja=a(16),pa=a(11),ba={city:J.PARIS,activePlaceId:null,isSortingOpen:!1,selectedSorting:X.POPULAR,newRating:""},ma=Object(l.c)(ba,(function(e){e.addCase(Pe,(function(e,t){e.city=t.payload})).addCase(ke,(function(e,t){e.activePlaceId=t.payload})).addCase(Ce,(function(e){e.isSortingOpen=!e.isSortingOpen})).addCase(Ee,(function(e){e.isSortingOpen=!1})).addCase(Ae,(function(e,t){e.selectedSorting=t.payload})).addCase(Me,(function(e,t){e.newRating=t.payload}))})),ha={offers:[],offer:{city:{location:{latitude:0,longitude:0,zoom:0},name:""},images:[],isPremium:!1,isFavorite:!1,title:"",rating:0,type:"",bedrooms:0,maxAdults:0,price:0,goods:[],description:"",id:0,previewImage:"",host:{id:0,name:"",avatarUrl:"",isPro:!1}},reviews:[],nearPlaces:[],favorites:[],isOffersDataLoaded:!1,isOfferDataLoaded:!1,isReviewsDataLoaded:!1,isNearPlacesDataLoaded:!1,isFavoritesLoaded:!1},_a=Object(l.c)(ha,(function(e){e.addCase(Ie,(function(e,t){e.isOffersDataLoaded=!0,e.offers=t.payload})).addCase(Te,(function(e,t){e.isOfferDataLoaded=!0,e.offer=t.payload})).addCase(Le,(function(e,t){e.isReviewsDataLoaded=!0,e.reviews=t.payload})).addCase(qe,(function(e,t){e.isNearPlacesDataLoaded=!0,e.nearPlaces=t.payload})).addCase(He,(function(e,t){e.isFavoritesLoaded=!0,e.favorites=t.payload})).addCase(Ge,(function(e,t){e.favorites=Xe(e.favorites,t.payload),e.offers=Xe(e.offers,t.payload),e.nearPlaces=Xe(e.nearPlaces,t.payload),e.offer=t.payload}))})),Oa={authorizationStatus:ae,userEmail:null,userAvatar:""},fa=Object(l.c)(Oa,(function(e){e.addCase(De,(function(e,t){e.authorizationStatus=t.payload})).addCase(Ue,(function(e){e.authorizationStatus=te})).addCase(Fe,(function(e,t){e.userEmail=t.payload})).addCase(Be,(function(e,t){e.userAvatar=t.payload}))})),va=Object(pa.c)((la={},Object(ja.a)(la,oe,_a),Object(ja.a)(la,le,ma),Object(ja.a)(la,de,fa),la)),xa=a(38),ga=a.n(xa),ya=null!==(da=localStorage.getItem("token"))&&void 0!==da?da:"",Na=function(e){return function(e){return function(t){return t.type===Ne&&u.push(t.payload),e(t)}}},wa=function(e){var t=ga.a.create({baseURL:O,timeout:f,headers:{"x-token":ya}});return t.interceptors.response.use((function(e){return e}),(function(t){throw t.response.status===$.UNAUTHORIZED&&e(),t})),t.interceptors.request.use((function(e){var t;return e.headers={"x-token":null!==(t=localStorage.getItem("token"))&&void 0!==t?t:""},e})),t}((function(){return Ra.dispatch(De(te))})),Ra=Object(l.a)({reducer:va,middleware:function(e){return e({thunk:{extraArgument:wa}}).concat(Na)}});Ra.dispatch((function(e,t,a){return a.get(ce).then((function(t){var a=t.data;t.status>=$&&Qe(H),e(Fe(a.email)),e(Be(a.avatar_url))})).then((function(){return e(De(ee))})).catch((function(){}))})),s.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(o.a,{store:Ra,children:Object(U.jsx)(i.c,{history:u,children:Object(U.jsx)(ua,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.96d51e56.chunk.js.map