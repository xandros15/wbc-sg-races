(function(e){function t(t){for(var r,s,i=t[0],u=t[1],o=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"267d":function(e,t,n){"use strict";n("f22c")},"3beb":function(e,t,n){"use strict";n("f67b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ChoseRace"),n("Races")],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"form-group"},[n("select",{staticClass:"form-control",attrs:{title:"Chose race"},on:{change:function(t){return e.changeRace(t)}}},[n("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Select Race")]),e._l(e.races,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)])])},i=[],u=(n("d81d"),n("b0c0"),{name:"ChoseRace",computed:{races:function(){return this.$store.state.races.map((function(e){return e.name}))}},methods:{changeRace:function(e){var t=e.target;t&&t.value&&this.$store.commit("setRaceName",t.value)}}}),o=u,l=(n("3beb"),n("2877")),f=Object(l["a"])(o,s,i,!1,null,"2763ba8d",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.race?n("table",{staticClass:"table"},[e._m(0),e._l(e.race,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.tier))]),n("td",[e._v(e._s(t.combat))]),n("td",[e._v(e._s(t.hits))]),n("td",[e._v(e._s(t.speed))]),n("td",[e._v(e._s(t.view))]),n("td",[e._v(e._s(t.damage))]),n("td",[e._v(e._s(t.range))]),n("td",[n("DamageType",{attrs:{type:t.damageType}})],1),n("td",[e._v(e._s(t.attackType))]),n("td",[e._v(e._s(t.armour))]),n("td",[e._v(e._s(t.resistance))]),n("td",e._l(t.resilience,(function(e){return n("DamageType",{key:e,staticClass:"d-block",attrs:{type:e}})})),1),n("td",e._l(t.vulnerability,(function(e){return n("DamageType",{key:e,staticClass:"d-block",attrs:{type:e}})})),1),n("td",[n("Price",e._b({},"Price",t.production,!1))],1)])}))],2):e._e()])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Tier")]),n("th",[e._v("Combat")]),n("th",[e._v("Hits")]),n("th",[e._v("Speed")]),n("th",[e._v("View")]),n("th",[e._v("Damage")]),n("th",[e._v("Range")]),n("th",[e._v("DType")]),n("th",[e._v("AType")]),n("th",[e._v("Armour")]),n("th",[e._v("Resistance")]),n("th",{attrs:{title:"Resilience"}},[e._v("Res")]),n("th",{attrs:{title:"Vulnerability"}},[e._v("Vul")]),n("th",[e._v("Cost")])])}],_=n("5530"),m=n("b85c"),h=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.mapped))])}),b=[],y=(n("a9e3"),{slashing:"⚔️",crushing:"🔨",piercing:"🗡️",fire:"🔥",cold:"❄️",electricity:"⚡",magic:"📖"}),g={props:{type:{require:!0,type:Number}},name:"DamageType",computed:{mapped:function(){return y[this.type]||"-"}}},j=g,R=Object(l["a"])(j,h,b,!1,null,"a50771f8",null),O=R.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" "+e._s(e.gold)+"💰"),n("br"),e._v(" "+e._s(e.metal)+"🛡️"),n("br"),e._v(" "+e._s(e.stone)+"🗿"),n("br"),e._v(" "+e._s(e.crystal)+"💎 ")])},T=[],$={name:"Price",props:{gold:{required:!0,type:Number},metal:{required:!0,type:Number},stone:{required:!0,type:Number},crystal:{required:!0,type:Number},time:{required:!0,type:Number}}},x=$,C=Object(l["a"])(x,w,T,!1,null,"0c04a530",null),N=C.exports,P={name:"Races",components:{Price:N,DamageType:O},computed:{race:function(){var e=this,t=this.$store.state.currentRaceName;if(t){var n=this.$store.state.races.filter((function(e){return e.name===t}))[0],r=n.units;r.sort((function(e,t){return e.tier-t.tier}));var a,c=[],s=Object(m["a"])(r);try{var i=function(){var t=a.value,n=e.$store.state.units.filter((function(e){return e.id===t.id}))[0];c.push(Object(_["a"])(Object(_["a"])({},n),{},{tier:t.tier}))};for(s.s();!(a=s.n()).done;)i()}catch(u){s.e(u)}finally{s.f()}return c}return!1}}},k=P,D=(n("267d"),Object(l["a"])(k,d,v,!1,null,"201ddef9",null)),S=D.exports,q={name:"App",components:{Races:S,ChoseRace:p},created:function(){this.$store.dispatch("loadData")}},E=q,U=(n("5c0b"),Object(l["a"])(E,a,c,!1,null,null,null)),M=U.exports,A=(n("d3b7"),n("2f62"));r["a"].use(A["a"]);var I=new A["a"].Store({state:{units:[],races:[],currentUnitId:"",currentRaceName:""},mutations:{setUnits:function(e,t){e.units=t},setUnitId:function(e,t){e.currentUnitId=t},setRaceName:function(e,t){e.currentRaceName=t},setRaces:function(e,t){e.races=t}},actions:{loadData:function(e){var t=e.commit;try{fetch("/units.json").then((function(e){return e.json()})).then((function(e){return t("setUnits",e)})).catch((function(e){return alert(e)})),fetch("/races.json").then((function(e){return e.json()})).then((function(e){return t("setRaces",e)})).catch((function(e){return alert(e)}))}catch(n){alert(n)}}},modules:{}});n("ab8b");r["a"].config.productionTip=!1,new r["a"]({store:I,render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},f22c:function(e,t,n){},f67b:function(e,t,n){}});
//# sourceMappingURL=app.4052f19f.js.map