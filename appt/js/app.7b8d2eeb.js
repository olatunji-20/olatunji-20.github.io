(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0585":function(e,t,n){"use strict";n("da6f")},3038:function(e,t,n){"use strict";n("83cb")},"51ff":function(e,t,n){"use strict";n("e813")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["p"])("data-v-1d17ee84");Object(r["g"])("data-v-1d17ee84");var c={class:"main"};Object(r["f"])();var a=o((function(e,t,n,o,a,i){var u=Object(r["i"])("instruction"),s=Object(r["i"])("lead"),p=Object(r["i"])("btn"),l=Object(r["i"])("formy"),d=Object(r["i"])("display");return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])(u),Object(r["d"])("div",c,[Object(r["d"])(s),Object(r["d"])(p,{onShowForm:i.displayForm,showForm:a.showForm},null,8,["onShowForm","showForm"]),Object(r["o"])(Object(r["d"])(l,{onNewAppt:i.addAppt},null,8,["onNewAppt"]),[[r["n"],a.showForm]]),Object(r["d"])(d,{tasks:a.tasks,onDeleteAppt:i.deleteAppt,onToggleAppt:i.toggleAppt},null,8,["tasks","onDeleteAppt","onToggleAppt"])])],64)})),i=n("5530"),u=n("2909"),s=n("1da1"),p=(n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d"),Object(r["p"])("data-v-e447169c")),l=p((function(e,t,n,o,c,a){return Object(r["e"])(),Object(r["c"])("h1",null,Object(r["j"])(c.topic),1)})),d={name:"lead",data:function(){return{topic:"APPT. TRACKER"}}};n("0585");d.render=l,d.__scopeId="data-v-e447169c";var b=d,f=Object(r["p"])("data-v-eeca88d2");Object(r["g"])("data-v-eeca88d2");var j={class:"but"};Object(r["f"])();var m=f((function(e,t,n,o,c,a){return Object(r["e"])(),Object(r["c"])("div",j,[Object(r["d"])("button",{textContent:Object(r["j"])(n.showForm?"Close":c.test),onClick:t[1]||(t[1]=function(e){return a.onClick()}),class:n.showForm?"red":c.color},null,10,["textContent"])])})),h={name:"btn",data:function(){return{color:"green",test:"Add Appt."}},methods:{onClick:function(){this.$emit("show-form")}},emits:["show-form"],props:{showForm:Boolean}};n("3038");h.render=m,h.__scopeId="data-v-eeca88d2";var O=h,v=Object(r["p"])("data-v-3568e521"),g=v((function(e,t,n,o,c,a){return Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(n.tasks,(function(e){return Object(r["e"])(),Object(r["c"])("div",{key:e.id,class:[e.reminder?"reminder":"false",e.color],onDblclick:function(t){return a.toggle(e.id)}},[Object(r["d"])("h2",null,Object(r["j"])(e.appointee),1),Object(r["d"])("h5",null,Object(r["j"])(e.date),1),Object(r["d"])("p",null,Object(r["j"])(e.purpose),1),Object(r["d"])("span",{class:"close",onClick:function(t){return a.cross(e.id)}},"❌",8,["onClick"])],42,["onDblclick"])})),128)})),y={name:"display",props:{tasks:Array},methods:{cross:function(e){this.$emit("delete-appt",e),console.log(e)},toggle:function(e){this.$emit("toggle-appt",e),console.log(e)}},emits:["delete-appt","toggle-appt"]};n("b867");y.render=g,y.__scopeId="data-v-3568e521";var w=y,k=Object(r["p"])("data-v-64cabcba");Object(r["g"])("data-v-64cabcba");var A=Object(r["d"])("br",null,null,-1),x=Object(r["d"])("br",null,null,-1),_=Object(r["d"])("option",{value:"powderblue"},"powderblue",-1),C=Object(r["d"])("option",{value:"wheat"},"wheat",-1),F=Object(r["d"])("option",{value:"greenyellow"},"greenyellow",-1),S=Object(r["d"])("br",null,null,-1),P=Object(r["d"])("button",{type:"submit"},"Submit",-1);Object(r["f"])();var R=k((function(e,t,n,o,c,a){return Object(r["e"])(),Object(r["c"])("div",null,[Object(r["d"])("form",{onSubmit:t[6]||(t[6]=function(){return a.onsubmit&&a.onsubmit.apply(a,arguments)})},[Object(r["o"])(Object(r["d"])("input",{type:"text",placeholder:"Appointee","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.appointee=e}),name:"appointee"},null,512),[[r["m"],c.appointee]]),A,Object(r["o"])(Object(r["d"])("input",{type:"text",placeholder:"Purpose","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.purpose=e}),name:"purpose"},null,512),[[r["m"],c.purpose]]),x,Object(r["o"])(Object(r["d"])("input",{type:"date",placeholder:"Date","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.date=e}),name:"date"},null,512),[[r["m"],c.date]]),Object(r["o"])(Object(r["d"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.color=e}),name:"color",class:"sel"},[_,C,F],512),[[r["l"],c.color]]),S,Object(r["o"])(Object(r["d"])("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.reminder=e}),name:"reminder"},null,512),[[r["k"],c.reminder]]),P],32)])})),T={name:"formy",data:function(){return{id:"",appointee:"",purpose:"",date:"",color:"",reminder:!1}},methods:{onsubmit:function(e){if(e.preventDefault(),this.appointee){var t={id:Math.floor(1e3*Math.random()),appointee:this.appointee,purpose:this.purpose,date:this.date,color:this.color,reminder:this.reminder};console.log(t),this.id="",this.appointee="",this.purpose="",this.date="",this.color="",this.reminder=!1,this.$emit("new-appt",t)}else alert("please input the name of the person you fixed an appointment with")}},emits:["new-appt"]};n("57ec");T.render=R,T.__scopeId="data-v-64cabcba";var D=T,I=Object(r["p"])("data-v-471beae6"),M=I((function(e,t,n,o,c,a){return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("h1",null,Object(r["j"])(c.topic),1),Object(r["d"])("ul",null,[Object(r["d"])("li",null,[Object(r["d"])("p",null,Object(r["j"])(c.ins[0]),1)]),Object(r["d"])("li",null,[Object(r["d"])("p",null,Object(r["j"])(c.ins[1]),1)]),Object(r["d"])("li",null,[Object(r["d"])("p",null,Object(r["j"])(c.ins[2]),1)])])],64)})),N={name:"instruction",data:function(){return{topic:"INSTRUCTIONS",ins:['Click on the "Add Appt" button to display a form that enables you to input your appointments, appointees, date and color. NB: color must either be powderblue, wheat or greenyellow.',"Click the  ❌ sign to delete any appointment fron the appointment tracker.","Doubleclick the divs to toggle the reminders i.e from true to false or vice-versa, which makes the left border green(true) or red(false)."]}}};n("51ff");N.render=M,N.__scopeId="data-v-471beae6";var U=N,V={name:"App",components:{lead:b,btn:O,display:w,formy:D,instruction:U},data:function(){return{tasks:[],showForm:!1}},methods:{addAppt:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://my-json-server.typicode.com/olatunji-20/appt-tracker/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:o=n.sent,t.tasks=[o].concat(Object(u["a"])(t.tasks));case 7:case"end":return n.stop()}}),n)})))()},deleteAppt:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("are you sure you want to delete this appointment?")){n.next=5;break}return n.next=3,fetch("https://my-json-server.typicode.com/olatunji-20/appt-tracker/tasks/".concat(e),{method:"DELETE",headers:{"Content-type":"application/json"}});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("error deleting appoint");case 5:return n.abrupt("return",!1);case 6:case"end":return n.stop()}}),n)})))()},toggleAppt:function(e){this.tasks=this.tasks.map((function(t){return t.id==e?Object(i["a"])(Object(i["a"])({},t),{},{reminder:!t.reminder}):t})),console.log("toggle ready",e)},displayForm:function(){this.showForm=!this.showForm},fetchAppts:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/olatunji-20/appt-tracker/tasks");case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAppts();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};n("8ed7");V.render=a,V.__scopeId="data-v-1d17ee84";var E=V;Object(r["b"])(E).mount("#app")},"57ec":function(e,t,n){"use strict";n("8be5")},"83cb":function(e,t,n){},"8be5":function(e,t,n){},"8ed7":function(e,t,n){"use strict";n("abe4")},abe4:function(e,t,n){},b867:function(e,t,n){"use strict";n("e857")},da6f:function(e,t,n){},e813:function(e,t,n){},e857:function(e,t,n){}});
//# sourceMappingURL=app.7b8d2eeb.js.map