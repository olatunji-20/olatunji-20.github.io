(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36a0a74e"],{"38f1":function(t,e,c){},"3f7d":function(t,e,c){"use strict";c("4a75")},"475c":function(t,e,c){"use strict";var n=c("7a23"),r=function(t){return Object(n["u"])("data-v-47ed6c58"),t=t(),Object(n["s"])(),t},a={class:"board"},u=r((function(){return Object(n["f"])("span",{class:"material-icons"},"shopping_cart",-1)})),b={class:"length"};function i(t,e,c,r,i,o){var s=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("section",null,[Object(n["f"])("div",a,[Object(n["i"])(s,{to:"/cart"},{default:Object(n["F"])((function(){return[u,Object(n["f"])("div",b,[Object(n["f"])("p",null,Object(n["A"])(t.cart.length),1)])]})),_:1})])])}var o=c("5530"),s=c("5502"),O={name:"cartboard",data:function(){return{}},computed:Object(o["a"])({},Object(s["d"])("materials",["cart"]))},j=(c("c622"),c("6b0d")),f=c.n(j);const l=f()(O,[["render",i],["__scopeId","data-v-47ed6c58"]]);e["a"]=l},"4a75":function(t,e,c){},"56d8":function(t,e,c){},8222:function(t,e,c){"use strict";c("56d8")},"82cd":function(t,e,c){},c622:function(t,e,c){"use strict";c("38f1")},d849:function(t,e,c){},da83:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r=function(t){return Object(n["u"])("data-v-9890754a"),t=t(),Object(n["s"])(),t},a={class:"container"},u={class:"img-cont"},b=["src","alt"],i={class:"numb-cont"},o={class:"unit"},s={class:"unit"},O=Object(n["h"])("Unit Price: "),j=r((function(){return Object(n["f"])("span",null,"N",-1)})),f={class:"unit"},l={class:"total"},d=Object(n["h"])(" Total: "),m=r((function(){return Object(n["f"])("span",null,"N",-1)})),v=r((function(){return Object(n["f"])("span",null,"N",-1)}));function h(t,e,c,r,h,p){var k=Object(n["y"])("headers"),C=Object(n["y"])("cartboard"),_=Object(n["y"])("remove"),A=Object(n["y"])("checkout"),y=Object(n["y"])("footer2");return Object(n["r"])(),Object(n["e"])("section",null,[Object(n["i"])(k),Object(n["i"])(C),Object(n["f"])("h1",null,Object(n["A"])(h.head),1),Object(n["f"])("div",a,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.cart,(function(e){return Object(n["r"])(),Object(n["e"])("div",{class:"show",key:e.id},[Object(n["f"])("div",u,[Object(n["f"])("img",{src:e.imageUrl,alt:e.materialName},null,8,b)]),Object(n["f"])("div",i,[Object(n["f"])("div",o,[Object(n["f"])("h3",null,Object(n["A"])(e.materialName),1)]),Object(n["f"])("div",s,[Object(n["f"])("p",null,[O,j,Object(n["h"])(Object(n["A"])(e.materialPrice),1)])]),Object(n["f"])("div",f,[Object(n["f"])("p",null,"Quantity: "+Object(n["A"])(e.numb)+" yard(s)",1)]),Object(n["f"])("div",l,[Object(n["f"])("p",null,[d,m,Object(n["h"])(Object(n["A"])(e.materialPrice)+" * "+Object(n["A"])(e.numb)+" = ",1),v,Object(n["h"])(Object(n["A"])(e.materialPrice*e.numb),1)])])]),Object(n["i"])(_,{onRemoveCart:function(c){return t.removeCart(e.id)},item:e},null,8,["onRemoveCart","item"])])})),128)),Object(n["i"])(A)]),Object(n["i"])(y)])}var p=c("5530"),k=c("5502"),C=c("475c"),_=function(t){return Object(n["u"])("data-v-6b4f6ea1"),t=t(),Object(n["s"])(),t},A=_((function(){return Object(n["f"])("span",{class:"material-icons"},"close",-1)})),y=_((function(){return Object(n["f"])("p",{class:"rmv"},"remove from cart",-1)})),w=[A,y];function N(t,e,c,r,a,u){return Object(n["r"])(),Object(n["e"])("section",null,[Object(n["f"])("div",{onClick:e[0]||(e[0]=function(t){return u.removeFromCart(c.item.id)}),class:"close"},w)])}var g={name:"remove",methods:{removeFromCart:function(t){this.$emit("remove-cart",t)}},props:{item:Object},emits:["remove-cart"]},I=(c("8222"),c("6b0d")),P=c.n(I);const F=P()(g,[["render",N],["__scopeId","data-v-6b4f6ea1"]]);var E=F,T=c("f56e"),$=c("47db");function x(t,e,c,r,a,u){return Object(n["r"])(),Object(n["e"])("section",null,[Object(n["f"])("button",{onClick:e[0]||(e[0]=function(e){return u.final(t.user.firstName),t.submitCart(t.user)})},"Checkout"),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.cart,(function(t){return Object(n["r"])(),Object(n["e"])("span",{key:t.id},Object(n["A"])(t.materialName),1)})),128)),Object(n["f"])("h1",null,Object(n["A"])(t.user.surname),1)])}var G={name:"checkout",computed:Object(p["a"])({},Object(k["c"])("users",["user"])),methods:Object(p["a"])(Object(p["a"])({},Object(k["b"])("materials",["submitCart"])),{},{final:function(t){var e=this;setTimeout((function(){alert("Your purchase was successful, "+t),e.$router.push("/")}),1e3)}})};c("3f7d");const J=P()(G,[["render",x],["__scopeId","data-v-1e158e49"]]);var L=J,R={name:"cartt",data:function(){return{head:"SHOPPING BAG"}},components:{cartboard:C["a"],remove:E,headers:T["a"],checkout:L,footer2:$["a"]},computed:Object(p["a"])({},Object(k["d"])("materials",["cart"])),methods:Object(p["a"])({},Object(k["b"])("materials",["removeCart"]))};c("f2a0");const S=P()(R,[["render",h],["__scopeId","data-v-9890754a"]]);e["default"]=S},ebb8:function(t,e,c){"use strict";c("d849")},f2a0:function(t,e,c){"use strict";c("82cd")},f56e:function(t,e,c){"use strict";c("b0c0");var n=c("7a23"),r=function(t){return Object(n["u"])("data-v-4abb1b4e"),t=t(),Object(n["s"])(),t},a={class:"headd"},u=r((function(){return Object(n["f"])("span",{class:"material-icons"},"west",-1)})),b=[u];function i(t,e,c,r,u,i){var o=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("section",null,[Object(n["f"])("div",a,[Object(n["f"])("div",{class:"icon",onClick:e[0]||(e[0]=function(e){return t.$router.go(-1)})},b),Object(n["i"])(o,{to:"/",class:"home"},{default:Object(n["F"])((function(){return[Object(n["f"])("h1",null,Object(n["A"])(u.name),1)]})),_:1})])])}var o={name:"headers",data:function(){return{name:"ZEE KOLLECTIONS"}}},s=(c("ebb8"),c("6b0d")),O=c.n(s);const j=O()(o,[["render",i],["__scopeId","data-v-4abb1b4e"]]);e["a"]=j}}]);
//# sourceMappingURL=chunk-36a0a74e.c83685e2.js.map