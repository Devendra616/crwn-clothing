(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{52:function(n,e,t){n.exports=t(74)},57:function(n,e,t){},59:function(n,e,t){},65:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(29),c=t.n(i),o=t(14),l=(t(57),t(7)),u=t.n(l),s=t(8),d=t(18),p=t(19),m=t(21),f=t(20),b=t(22),h=t(23),g=(t(59),t(15)),v=t(1),x=t(2);function E(){var n=Object(v.a)(["\n    font-weight: lighter;\n    font-size: 16px;\n"]);return E=function(){return n},n}function O(){var n=Object(v.a)(["\n    font-weight: bold;\n    margin-bottom: 6px;\n    font-size: 22px;\n    color: #4a4a4a;\n"]);return O=function(){return n},n}function y(){var n=Object(v.a)(["\n    height: 90px;\n    padding: 0 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid black;\n    background-color: white;\n    opacity: 0.7;\n    position: absolute;\n"]);return y=function(){return n},n}function j(){var n=Object(v.a)(["\n    width:100%;\n    height: 100%;\n    background-position: center;\n    background-size: cover; \n    background-image: ",";\n"]);return j=function(){return n},n}function w(){var n=Object(v.a)(["\n    min-width: 30%;\n    height: ",";\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid black;\n    margin: 0 7.5px 15px;\n    overflow: hidden;\n\n    &:hover {\n      cursor: pointer;  \n      & .background-image {\n        transform: scale(1.1);\n        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n      }  \n      & .content {\n        opacity: 0.9;\n      }\n    }\n \n    &:first-child {\n      margin-right: 7.5px;\n    }\n  \n    &:last-child {\n      margin-left: 7.5px;\n    }\n"]);return w=function(){return n},n}var k=x.b.div(w(),(function(n){return n.size?"380px":"240px"})),C=x.b.div(j(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")})),I=x.b.div(y()),S=x.b.h1(O()),U=x.b.span(E()),T=Object(h.g)((function(n){var e=n.title,t=n.imageUrl,r=n.size,i=n.history,c=n.linkUrl,o=n.match;return a.a.createElement(k,{size:r,onClick:function(){return i.push("".concat(o.url).concat(c))}},a.a.createElement(C,{imageUrl:t}),a.a.createElement(I,null,a.a.createElement(S,null,e.toUpperCase()),a.a.createElement(U,null,"SHOP NOW")))})),A="375px",z="425px",R="768px",_="1024px",N="1440px",P="2560px",D={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(A,")"),mobileL:"(min-width: ".concat(z,")"),tablet:"(min-width: ".concat(R,")"),laptop:"(min-width: ".concat(_,")"),laptopL:"(min-width: ".concat(N,")"),desktop:"(min-width: ".concat(P,")"),desktopL:"(min-width: ".concat(P,")")};function L(){var n=Object(v.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    /* mobile friendly by default */\n    flex-direction: column;\n    justify-content: space-between;\n\n    /* switch to rows for larger devices*/\n  @media "," {\n    flex-direction: row;\n  }\n"]);return L=function(){return n},n}var M=x.b.div(L(),D.laptop),G=t(5),q=Object(G.a)([function(n){return n.directory}],(function(n){return n.sections})),H=t(6),F=Object(G.b)({sections:q}),W=Object(H.b)(F)((function(n){var e=n.sections;return a.a.createElement(M,null,e.map((function(n){var e=n.id,t=Object(g.a)(n,["id"]);return a.a.createElement(T,Object.assign({key:e},t))})))}));function V(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px 5px;\n\n    /* increase padding for larger devices */\n  @media "," {    \n    padding: 20px 80px;\n  }\n"]);return V=function(){return n},n}var B=x.b.div(V(),D.tablet),$=function(){return a.a.createElement(B,null,a.a.createElement(W,null))},K=Object(G.a)([function(n){return n.shop}],(function(n){return n.collections})),J=Object(G.a)([K],(function(n){return n?Object.keys(n).map((function(e){return n[e]})):[]})),Z=(t(65),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"}),Q=function(){return{type:Z.TOGGLE_CART_HIDDEN}},Y=function(n){return{type:Z.ADD_ITEM,payload:n}};function X(){var n=Object(v.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 14px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;    \n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n  \n  \n\n    ","\n"]);return X=function(){return n},n}function nn(){var n=Object(v.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n    }\n"]);return nn=function(){return n},n}function en(){var n=Object(v.a)(["\n    background-color: #4285f4;\n    color:white;\n    \n    &:hover {\n        background-color: #357ae8;\n        border:none;\n      }\n"]);return en=function(){return n},n}function tn(){var n=Object(v.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n      background-color: white;\n      color: black;\n      border: 1px solid black;\n    }\n"]);return tn=function(){return n},n}var rn=Object(x.a)(tn()),an=Object(x.a)(en()),cn=Object(x.a)(nn()),on=x.b.button(X(),(function(n){return n.isGoogleSignIn?an:n.inverted?cn:rn})),ln=function(n){var e=n.children,t=Object(g.a)(n,["children"]);return a.a.createElement(on,t,e)};function un(){var n=Object(v.a)(["\n    width: 80%;\n    opacity: 0.7;\n    position: absolute;\n    top:255px;\n    display: none;\n"]);return un=function(){return n},n}function sn(){var n=Object(v.a)(["\n    width: 20%;\n    text-align:right;\n"]);return sn=function(){return n},n}function dn(){var n=Object(v.a)(["\n    width: 80%;\n    word-break:break-word;\n    margin-bottom: 15px;\n"]);return dn=function(){return n},n}function pn(){var n=Object(v.a)(["\n    width: 100%;\n    height: 5%;\n    display: flex;\n    justify-content: space-between;\n    font-size: 18px;\n"]);return pn=function(){return n},n}function mn(){var n=Object(v.a)(["\n    width: 100%;\n    height: 95%;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 5px;\n    background-image: ",";\n"]);return mn=function(){return n},n}function fn(){var n=Object(v.a)(["\n    /*width: 22vw; */\n    width:90%;\n    margin:5px;\n    display: flex;\n    flex-direction: column;    \n    align-items: center;\n    position: relative;\n    height: 350px;\n\n    &:hover {\n      .image {\n        opacity: 0.8;\n      }\n\n      button {\n        opacity: 0.85;\n        display: flex;\n      }      \n    }\n"]);return fn=function(){return n},n}var bn=x.b.div(fn()),hn=x.b.div(mn(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")})),gn=x.b.div(pn()),vn=x.b.span(dn()),xn=x.b.span(sn()),En=Object(x.b)(ln)(un()),On=Object(H.b)(null,(function(n){return{addItem:function(e){return n(Y(e))}}}))((function(n){var e=n.item,t=n.addItem,r=e.name,i=e.price,c=e.imageUrl;return a.a.createElement(bn,null,a.a.createElement(hn,{imageUrl:c}),a.a.createElement(gn,null,a.a.createElement(vn,null,r),a.a.createElement(xn,null,"$ ",i)),a.a.createElement(En,{inverted:!0,onClick:function(){return t(e)}},"Add to cart"))}));function yn(){var n=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 5px;\n\n    & > div {\n        margin-bottom: 30px;\n      }\n \n   /* switch to more items for larger devices*/\n  @media "," {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 7px;\n  } \n    /* switch to more items for larger devices*/\n  @media "," {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 10px;\n  }  \n"]);return yn=function(){return n},n}function jn(){var n=Object(v.a)(["\n    font-size: 38px;\n    margin: 0 auto 30px;    \n"]);return jn=function(){return n},n}function wn(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;    \n"]);return wn=function(){return n},n}var kn=x.b.div(wn()),Cn=x.b.h2(jn()),In=x.b.div(yn(),D.tablet,D.laptop),Sn=Object(H.b)((function(n,e){return{collection:(t=e.match.params.collectionId,Object(G.a)([K],(function(n){return n?n[t]:null})))(n)};var t}))((function(n){var e=n.collection,t=e.items,r=e.title;return a.a.createElement(kn,null,a.a.createElement(Cn,null,r),a.a.createElement(In,null,t.map((function(n){return a.a.createElement(On,{key:n.id,item:n})}))))})),Un=t(27),Tn=t.n(Un),An=(t(66),t(69),function(n,e){var t,r,a,i,c;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(n){o.next=2;break}return o.abrupt("return");case 2:return t=Rn.doc("users/".concat(n.uid)),o.next=5,u.a.awrap(t.get());case 5:if(r=o.sent,console.log(r),r.exists){o.next=18;break}return a=n.displayName,i=n.email,c=new Date,o.prev=10,o.next=13,u.a.awrap(t.set(Object(s.a)({displayName:a,email:i,createdAt:c},e)));case 13:o.next=18;break;case 15:o.prev=15,o.t0=o.catch(10),console.log("error creating user",o.t0.message);case 18:return o.abrupt("return",t);case 19:case"end":return o.stop()}}),null,null,[[10,15]])});Tn.a.initializeApp({apiKey:"AIzaSyBTcMz8UFAu8oh7FtjNEiF6C--WioOEFZQ",authDomain:"crwn-db-ac008.firebaseapp.com",databaseURL:"https://crwn-db-ac008.firebaseio.com",projectId:"crwn-db-ac008",storageBucket:"crwn-db-ac008.appspot.com",messagingSenderId:"461908066851",appId:"1:461908066851:web:98acf2023be5fb33bfa796",measurementId:"G-TRR6HK6W5D"});var zn=Tn.a.auth(),Rn=Tn.a.firestore(),_n=new Tn.a.auth.GoogleAuthProvider;_n.setCustomParameters({prompt:"select_account"});var Nn=function(){return zn.signInWithPopup(_n)},Pn=(Tn.a,{UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"});function Dn(){var n=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction:column;\n\n/* switch for larger devices*/\n  @media "," {\n    flex-direction:row;\n  } \n"]);return Dn=function(){return n},n}function Ln(){var n=Object(v.a)(["\n    font-size: 28px;\n    margin-bottom: 25px;\n    cursor: pointer;\n    text-align:center;\n    background-color:#222;\n    color:white;\n\n    &:hover {\n        color: grey;\n        background-color:white;\n    }\n\n    /* switch to left align for larger devices*/\n  @media "," {\n    text-align:left;\n    background-color:transparent;\n    color:inherit;\n\n    &:hover {\n        color: grey;\n    }\n  } \n\n    \n"]);return Ln=function(){return n},n}function Mn(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"]);return Mn=function(){return n},n}var Gn=x.b.div(Mn()),qn=x.b.h1(Ln(),D.tablet),Hn=x.b.div(Dn(),D.tablet),Fn=Object(h.g)((function(n){var e=n.title,t=n.items,r=n.history,i=n.match,c=n.routeName;return a.a.createElement(Gn,null,a.a.createElement(qn,{onClick:function(){return r.push("".concat(i.path,"/").concat(c))}},e.toUpperCase()),a.a.createElement(Hn,null,t.filter((function(n,e){return e<4})).map((function(n){return a.a.createElement(On,{key:n.id,item:n})}))))}));function Wn(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Wn=function(){return n},n}var Vn=x.b.div(Wn()),Bn=Object(G.b)({collections:J}),$n=Object(H.b)(Bn)((function(n){var e=n.collections;return a.a.createElement(Vn,null,e.map((function(n){var e=n.id,t=Object(g.a)(n,["id"]);return a.a.createElement(Fn,Object.assign({key:e},t))})))}));function Kn(){var n=Object(v.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Kn=function(){return n},n}function Jn(){var n=Object(v.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Jn=function(){return n},n}var Zn=x.b.div(Jn()),Qn=x.b.div(Kn()),Yn=function(n){return function(e){var t=e.isLoading,r=Object(g.a)(e,["isLoading"]);return t?a.a.createElement(Zn,null,a.a.createElement(Qn,null)):a.a.createElement(n,r)}},Xn=Yn($n),ne=Yn(Sn),ee=function(n){function e(){var n,t;Object(d.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(m.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(a)))).state={loading:!0},t.unsubscribeFromSnapshot=null,t}return Object(b.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props.updateCollections,t=Rn.collection("collections");this.unsubscribeFromSnapshot=t.onSnapshot((function(t){var r;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.docs.map((function(n){var e=n.data(),t=e.title,r=e.items;return{id:n.id,title:t,items:r,routeName:encodeURI(t.toLowerCase())}})).reduce((function(n,e){return n[e.title.toLowerCase()]=e,n}),{}),console.log(r),a.next=4,u.a.awrap(e(r));case 4:n.setState({loading:!1});case 5:case"end":return a.stop()}}))}))}},{key:"render",value:function(){var n=this.props.match,e=this.state.loading;return console.log("--------------",{loading:e}),a.a.createElement("div",{className:"shop-page"},a.a.createElement(h.b,{exact:!0,path:"".concat(n.path),render:function(n){return a.a.createElement(Xn,Object.assign({isLoading:e},n))}}),a.a.createElement(h.b,{path:"".concat(n.path,"/:collectionId"),render:function(n){return a.a.createElement(ne,Object.assign({isLoading:e},n))}}))}}]),e}(a.a.Component),te=Object(H.b)(null,(function(n){return{updateCollections:function(e){return n({type:Pn.UPDATE_COLLECTIONS,payload:e})}}}))(ee),re=function(n){return n.cart},ae=Object(G.a)([re],(function(n){return n.cartItems})),ie=Object(G.a)([ae],(function(n){return n.reduce((function(n,e){return n+e.quantity}),0)})),ce=Object(G.a)([re],(function(n){return n.hidden})),oe=Object(G.a)([ae],(function(n){return n.reduce((function(n,e){return n+e.price*e.quantity}),0)}));function le(){var n=Object(v.a)(["\n    padding-left: 5px;\n    cursor: pointer;\n\n    @media "," { \n        padding-left: 12px;\n     }\n"]);return le=function(){return n},n}function ue(){var n=Object(v.a)(["\n    display: flex;\n\n    span {\n        margin: 0 15px;\n\n        @media "," { \n            margin: 0 10px;\n        }\n    }\n\n    div {\n        cursor: pointer;\n    }\n"]);return ue=function(){return n},n}function se(){var n=Object(v.a)(["\n    width: 23%;\n"]);return se=function(){return n},n}function de(){var n=Object(v.a)(["\n    width: 23%;\n    padding-right: 15px;\n  \n      img {\n        width: 100%;\n        height: 100%;\n      }\n"]);return de=function(){return n},n}function pe(){var n=Object(v.a)(["\n    width: 100%;\n    display: flex;\n    min-height: 100px;\n    border-bottom: 1px solid darkgrey;\n    padding: 10px 0;\n    font-size: 16px;\n    align-items: center;\n\n    @media "," { \n        padding: 15px 0;\n        font-size: 20px;\n    }\n"]);return pe=function(){return n},n}var me=x.b.div(pe(),D.tablet),fe=x.b.div(de()),be=x.b.span(se()),he=Object(x.b)(be)(ue(),D.tablet),ge=x.b.div(le(),D.tablet),ve=Object(H.b)(null,(function(n){return{clearItem:function(e){return n(function(n){return{type:Z.CLEAR_ITEM_FROM_CART,payload:n}}(e))},addItem:function(e){return n(Y(e))},removeItem:function(e){return n(function(n){return{type:Z.REMOVE_ITEM,payload:n}}(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,r=n.addItem,i=n.removeItem,c=e.name,o=e.price,l=e.imageUrl,u=e.quantity;return a.a.createElement(me,null,a.a.createElement(fe,null,a.a.createElement("img",{alt:"item",src:l})),a.a.createElement(be,null,c),a.a.createElement(he,null,a.a.createElement("div",{onClick:function(){return i(e)}},"\u276e"),a.a.createElement("span",null,u),a.a.createElement("div",{onClick:function(){return r(e)}},"\u276f")),a.a.createElement(be,null,o),a.a.createElement(ge,{onClick:function(){return t(e)}},"\u2715"))})),xe=t(46),Ee=t.n(xe),Oe=function(n){var e=n.price,t=100*e;return a.a.createElement(Ee.a,{label:"Pay Now",name:"CRWN Clothing Ltd",billingAddress:!0,shippingAddress:!0,image:"http://svgshare.com/i/CUz.svg",description:"Your total is $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){console.log(n),alert("Payment Successful")},stripeKey:"pk_test_bLgGVZhzO7IhJbrApwZTbW6X00iyP2mSDc"})};function ye(){var n=Object(v.a)(["\n    color: red;\n    font-size: 18px;\n    text-align: center;\n    margin-top: 40px;\n\n    @media "," { \n        font-size: 24px;\n    }\n"]);return ye=function(){return n},n}function je(){var n=Object(v.a)(["\n    margin-top: 30px;\n    margin-left: auto;\n    font-size: 28px;\n\n    @media "," { \n        font-size: 36px;\n    }\n"]);return je=function(){return n},n}function we(){var n=Object(v.a)(["\n    text-transform: capitalize;\n    width: 23%;\n\n    &:last-child {\n     width: 8%;\n    }\n"]);return we=function(){return n},n}function ke(){var n=Object(v.a)(["\n    width: 100%;\n    padding: 10px 0;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid darkgrey;\n"]);return ke=function(){return n},n}function Ce(){var n=Object(v.a)(["\n    width: 97%;\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 50px auto 0;\n\n    button {\n      margin-left: auto;\n      margin-top: 50px;\n      width:100%;\n    }\n\n    @media "," { \n        width: 55%;\n\n    button {\n            margin-left: auto;\n            margin-top: 50px;\n            width:inherit;\n        }\n    }\n"]);return Ce=function(){return n},n}var Ie=x.b.div(Ce(),D.tablet),Se=x.b.div(ke()),Ue=x.b.div(we()),Te=x.b.div(je(),D.tablet),Ae=x.b.div(ye(),D.tablet),ze=Object(G.b)({cartItems:ae,total:oe}),Re=Object(H.b)(ze)((function(n){var e=n.cartItems,t=n.total;return a.a.createElement(Ie,null,a.a.createElement(Se,null,a.a.createElement(Ue,null,a.a.createElement("span",null,"Product")),a.a.createElement(Ue,null,a.a.createElement("span",null,"Description")),a.a.createElement(Ue,null,a.a.createElement("span",null,"Quantity")),a.a.createElement(Ue,null,a.a.createElement("span",null,"Price")),a.a.createElement(Ue,null,a.a.createElement("span",null,"Remove"))),e.map((function(n){return a.a.createElement(ve,{key:n.id,cartItem:n})})),a.a.createElement(Te,null,"TOTAL: $",t,a.a.createElement(Ae,null,"*Please use the following test credit card for payments*",a.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),a.a.createElement(Oe,{price:t})))}));function _e(){var n=Object(v.a)(["\n    ","\n"]);return _e=function(){return n},n}function Ne(){var n=Object(v.a)(["\n    ","\n"]);return Ne=function(){return n},n}function Pe(){var n=Object(v.a)(["\n    width: 75%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    /*  for larger devices */\n  @media "," {    \n    width: 50%;    \n  }\n"]);return Pe=function(){return n},n}function De(){var n=Object(v.a)(["\n    height: 100%;\n    width: 50px;\n    padding: 15px;\n\n /*  for larger devices */\n  @media "," {    \n    width: 70px;\n    padding: 25px;\n  }\n"]);return De=function(){return n},n}function Le(){var n=Object(v.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return Le=function(){return n},n}function Me(){var n=Object(v.a)(["\n    padding: 10px 10px;\n    cursor: pointer;\n    font-size: 0.9em;\n    font-weight:bold;\n\n    @media "," {    \n        font-size: 1em;\n        padding: 10px 15px;\n        font-weight:normal;\n    }\n"]);return Me=function(){return n},n}var Ge=Object(x.a)(Me(),D.tablet),qe=x.b.div(Le()),He=Object(x.b)(o.b)(De(),D.tablet),Fe=x.b.div(Pe(),D.tablet),We=Object(x.b)(o.b)(Ne(),Ge);x.b.div(_e(),Ge);function Ve(){return(Ve=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Be(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var $e=a.a.createElement("title",null,"Group"),Ke=a.a.createElement("desc",null,"Created with Sketch."),Je=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ze=function(n){var e=n.svgRef,t=n.title,r=Be(n,["svgRef","title"]);return a.a.createElement("svg",Ve({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:e},r),void 0===t?$e:t?a.a.createElement("title",null,t):null,Ke,Je)},Qe=a.a.forwardRef((function(n,e){return a.a.createElement(Ze,Ve({svgRef:e},n))}));t.p;function Ye(){return(Ye=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Xe(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var nt=a.a.createElement("g",null),et=a.a.createElement("g",null),tt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),it=a.a.createElement("g",null),ct=a.a.createElement("g",null),ot=a.a.createElement("g",null),lt=a.a.createElement("g",null),ut=a.a.createElement("g",null),st=a.a.createElement("g",null),dt=a.a.createElement("g",null),pt=a.a.createElement("g",null),mt=a.a.createElement("g",null),ft=a.a.createElement("g",null),bt=function(n){var e=n.svgRef,t=n.title,r=Xe(n,["svgRef","title"]);return a.a.createElement("svg",Ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:e},r),t?a.a.createElement("title",null,t):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),nt,et,tt,rt,at,it,ct,ot,lt,ut,st,dt,pt,mt,ft)},ht=a.a.forwardRef((function(n,e){return a.a.createElement(bt,Ye({svgRef:e},n))}));t.p;function gt(){var n=Object(v.a)(["\n    position: absolute;\n    font-size: 10px;\n    font-weight: bold;\n    bottom: 12px;\n"]);return gt=function(){return n},n}function vt(){var n=Object(v.a)(["\n    width: 24px;\n    height: 24px;\n"]);return vt=function(){return n},n}function xt(){var n=Object(v.a)(["\n    width: 45px;\n    height: 45px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]);return xt=function(){return n},n}var Et=x.b.div(xt()),Ot=Object(x.b)(ht)(vt()),yt=x.b.span(gt()),jt=Object(G.b)({itemCount:ie}),wt=Object(H.b)(jt,(function(n){return{toggleCartHidden:function(){return n(Q())}}}))((function(n){var e=n.toggleCartHidden,t=n.itemCount;return a.a.createElement(Et,{onClick:e},a.a.createElement(Ot,{className:"shopping-icon"}),a.a.createElement(yt,null,t))})),kt=Object(G.a)([function(n){return n.user}],(function(n){return n.currentUser}));function Ct(){var n=Object(v.a)(["\n    width:30%;\n"]);return Ct=function(){return n},n}function It(){var n=Object(v.a)(["\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    padding: 10px 20px;\n"]);return It=function(){return n},n}function St(){var n=Object(v.a)(["\n    width: 100%;\n    display: flex;\n    height: 80px;\n    margin-bottom: 15px;\n"]);return St=function(){return n},n}var Ut=x.b.div(St()),Tt=x.b.div(It()),At=x.b.img(Ct()),zt=function(n){var e=n.item,t=e.imageUrl,r=e.price,i=e.name,c=e.quantity;return a.a.createElement(Ut,null,a.a.createElement(At,{src:t,alt:"item"}),a.a.createElement(Tt,null,a.a.createElement("span",null,i),a.a.createElement("span",null,c," x $",r)))};function Rt(){var n=Object(v.a)(["\n    margin-top: auto; \n"]);return Rt=function(){return n},n}function _t(){var n=Object(v.a)(["\n    height: 240px;\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n"]);return _t=function(){return n},n}function Nt(){var n=Object(v.a)(["\n    font-size: 18px;\n    margin: 50px auto;\n"]);return Nt=function(){return n},n}function Pt(){var n=Object(v.a)(["\n    position: absolute;\n    width: 260px;\n    height: 340px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border: 1px solid black;\n    background-color: white;\n    top: 90px;\n    right: 40px;\n    z-index: 5;\n"]);return Pt=function(){return n},n}var Dt=x.b.div(Pt()),Lt=x.b.span(Nt()),Mt=x.b.div(_t()),Gt=Object(x.b)(ln)(Rt()),qt=Object(G.b)({cartItems:ae}),Ht=Object(h.g)(Object(H.b)(qt)((function(n){var e=n.cartItems,t=n.history,r=n.dispatch;return a.a.createElement(Dt,null,a.a.createElement(Mt,null,e.length?e.map((function(n){return a.a.createElement(zt,{key:n.id,item:n})})):a.a.createElement(Lt,null,"Your cart is empty")),a.a.createElement(Gt,{downButton:!0,onClick:function(){t.push("/checkout"),r(Q())}},"GO TO CHECKOUT"))}))),Ft=Object(G.b)({currentUser:kt,hidden:ce}),Wt=Object(H.b)(Ft)((function(n){var e=n.currentUser,t=n.hidden;return a.a.createElement(qe,null,a.a.createElement(He,{to:"/"},a.a.createElement(Qe,{className:"logo"})),a.a.createElement(Fe,null,a.a.createElement(We,{to:"/shop"},"SHOP"),a.a.createElement(We,{to:"/contact"},"CONTACT"),e?a.a.createElement(We,{as:"div",onClick:function(){return zn.signOut()}},"SIGN OUT"):a.a.createElement(We,{to:"/signIn"},"SIGN IN"),a.a.createElement(wt,null)),t?null:a.a.createElement(Ht,null))}));function Vt(){var n=Object(v.a)(["\n    \n    display: flex;\n    justify-content: space-between;\n    flex-direction:column;\n    \n    @media "," {   \n        width: 850px; \n        margin : 30px auto;\n        flex-direction:row;\n    }\n"]);return Vt=function(){return n},n}var Bt=x.b.div(Vt(),D.tablet),$t=t(26);function Kt(){var n=Object(v.a)(["\n    color: $sub-color;\n    font-size: 16px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 300ms ease all;\n\n    &.shrink {\n      ","\n    }\n"]);return Kt=function(){return n},n}function Jt(){var n=Object(v.a)(["\n    background: none;\n    background-color: white;\n    color: ",";\n    font-size: 18px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid ",";\n    margin: 25px 0;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:focus ~ label {\n      ","\n    }\n"]);return Jt=function(){return n},n}function Zt(){var n=Object(v.a)(["\n    position: relative;\n    margin: 45px 0;\n\n    input[type='password'] {\n        letter-spacing: 0.3em;\n    }\n"]);return Zt=function(){return n},n}function Qt(){var n=Object(v.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return Qt=function(){return n},n}var Yt=Object(x.a)(Qt(),"black"),Xt=x.b.div(Zt()),nr=x.b.input(Jt(),"grey","grey",Yt),er=x.b.label(Kt(),Yt),tr=function(n){var e=n.handleChange,t=n.label,r=Object(g.a)(n,["handleChange","label"]);return a.a.createElement(Xt,null,a.a.createElement(nr,Object.assign({onChange:e},r)),t?a.a.createElement(er,{className:r.value.length?"shrink":""},t):null)};function rr(){var n=Object(v.a)(["\n    margin: 10px 0;\n"]);return rr=function(){return n},n}function ar(){var n=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return ar=function(){return n},n}function ir(){var n=Object(v.a)(["\n    \n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n\n    @media "," { \n        margin-top:inherit;   \n        font-size: 1em;\n        width: 380px;\n        padding: 10px 15px;\n        font-weight:normal;\n    }\n"]);return ir=function(){return n},n}var cr=x.b.div(ir(),D.tablet),or=x.b.div(ar()),lr=x.b.h2(rr()),ur=function(n){function e(n){var t;return Object(d.a)(this,e),(t=Object(m.a)(this,Object(f.a)(e).call(this,n))).handleSubmit=function(n){var e,r,a;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n.preventDefault(),e=t.state,r=e.email,a=e.password,i.prev=2,i.next=5,u.a.awrap(zn.signInWithEmailAndPassword(r,a));case 5:t.setState({email:"",password:""}),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(2),console.log(i.t0);case 11:case"end":return i.stop()}}),null,null,[[2,8]])},t.handleChange=function(n){var e=n.target,r=e.value,a=e.name;t.setState(Object($t.a)({},a,r))},t.state={email:"",password:""},t}return Object(b.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){return a.a.createElement(cr,null,a.a.createElement(lr,null,"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(tr,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),a.a.createElement(tr,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),a.a.createElement(or,null,a.a.createElement(ln,{type:"submit"},"Sign In"),a.a.createElement(ln,{onClick:Nn,isGoogleSignIn:!0},"Sign In With Google"))))}}]),e}(a.a.Component);function sr(){var n=Object(v.a)(["\n    margin: 10px 0;\n"]);return sr=function(){return n},n}function dr(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 380px;\n    margin-top: 50px;\n\n    @media "," { \n        margin-top:inherit;   \n        font-size: 1em;\n        width: 380px;\n        padding: 10px 15px;\n        font-weight:normal;\n    }\n"]);return dr=function(){return n},n}var pr=x.b.div(dr(),D.tablet),mr=x.b.h2(sr()),fr=function(n){function e(){var n;return Object(d.a)(this,e),(n=Object(m.a)(this,Object(f.a)(e).call(this))).handleSubmit=function(e){var t,r,a,i,c,o,l;return u.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(e.preventDefault(),t=n.state,r=t.displayName,a=t.email,i=t.password,c=t.confirmPassword,i===c){s.next=5;break}return alert("passwords don't match!"),s.abrupt("return");case 5:return s.prev=5,s.next=8,u.a.awrap(zn.createUserWithEmailAndPassword(a,i));case 8:return o=s.sent,l=o.user,s.next=12,u.a.awrap(An(l,{displayName:r}));case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(5),console.error(s.t0);case 18:case"end":return s.stop()}}),null,null,[[5,15]])},n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object($t.a)({},r,a))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(b.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){var n=this.state,e=n.displayName,t=n.email,r=n.password,i=n.confirmPassword;return a.a.createElement(pr,null,a.a.createElement(mr,null,"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},a.a.createElement(tr,{type:"text",name:"displayName",value:e,onChange:this.handleChange,label:"Display Name",required:!0}),a.a.createElement(tr,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),a.a.createElement(tr,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),a.a.createElement(tr,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),a.a.createElement(ln,{type:"submit"},"SIGN UP")))}}]),e}(a.a.Component),br=function(){return a.a.createElement(Bt,null,a.a.createElement(ur,null),a.a.createElement(fr,null))},hr="SET_CURRENT_USER",gr=function(n){function e(){var n,t;Object(d.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(m.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(a)))).unsubscribeFromAuth=null,t}return Object(b.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props.setCurrentUser;this.unsubscribeFromAuth=zn.onAuthStateChanged((function(t){return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=7;break}return r.next=3,u.a.awrap(An(t));case 3:r.sent.onSnapshot((function(t){e({currentUser:Object(s.a)({id:t.id},t.data())}),console.log(n.state)})),r.next=8;break;case 7:e(t);case 8:An(t);case 9:case"end":return r.stop()}}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var n=this;return a.a.createElement("div",null,a.a.createElement(Wt,null),a.a.createElement(h.d,null,a.a.createElement(h.b,{exact:!0,path:"/",component:$}),a.a.createElement(h.b,{path:"/shop",component:te}),a.a.createElement(h.b,{exact:!0,path:"/checkout",component:Re}),a.a.createElement(h.b,{exact:!0,path:"/signIn",render:function(){return n.props.currentUser?a.a.createElement(h.a,{to:"/"}):a.a.createElement(br,null)}})))}}]),e}(a.a.Component),vr=Object(G.b)({currentUser:kt}),xr=Object(H.b)(vr,(function(n){return{setCurrentUser:function(e){return n(function(n){return{type:hr,payload:n}}(e))}}}))(gr),Er=t(47),Or=t(13),yr=t(30),jr=(t(71),t(48)),wr=t.n(jr),kr={currentUser:null},Cr=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kr,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case hr:return Object(s.a)({},n,{currentUser:e.payload});default:return n}},Ir=t(49),Sr=function(n,e){return n.find((function(n){return n.id===e.id}))?n.map((function(n){return n.id===e.id?Object(s.a)({},n,{quantity:n.quantity+1}):n})):[].concat(Object(Ir.a)(n),[Object(s.a)({},e,{quantity:1})])},Ur=function(n,e){return 1===n.find((function(n){return n.id===e.id})).quantity?n.filter((function(n){return n.id!==e.id})):n.map((function(n){return n.id===e.id?Object(s.a)({},n,{quantity:n.quantity-1}):n}))},Tr={hidden:!0,cartItems:[]},Ar=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tr,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Z.TOGGLE_CART_HIDDEN:return Object(s.a)({},n,{hidden:!n.hidden});case Z.ADD_ITEM:return Object(s.a)({},n,{cartItems:Sr(n.cartItems,e.payload)});case Z.CLEAR_ITEM_FROM_CART:return Object(s.a)({},n,{cartItems:n.cartItems.filter((function(n){return n.id!==e.payload.id}))});case Z.REMOVE_ITEM:return Object(s.a)({},n,{cartItems:Ur(n.cartItems,e.payload)});default:return n}},zr={sections:[{title:"hats",imageUrl:"images/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"images/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"images/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"images/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"images/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Rr=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zr,e=arguments.length>1?arguments[1]:void 0;return e.type,n},_r={collections:null},Nr=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_r,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Pn.UPDATE_COLLECTIONS:return Object(s.a)({},n,{collections:e.payload});default:return n}},Pr={key:"root",storage:wr.a,whitelist:["cart"]},Dr=Object(Or.c)({user:Cr,cart:Ar,directory:Rr,shop:Nr}),Lr=Object(yr.a)(Pr,Dr);var Mr=Object(Or.d)(Lr,Or.a.apply(void 0,[])),Gr=Object(yr.b)(Mr);c.a.render(a.a.createElement(H.a,{store:Mr},a.a.createElement(o.a,null,a.a.createElement(Er.a,{persistor:Gr},a.a.createElement(xr,null)))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e3158bb1.chunk.js.map