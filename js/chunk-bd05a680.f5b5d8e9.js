(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd05a680"],{"2a2f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-card-container"},[n("img",{staticClass:"pokemon-image",attrs:{src:t.pokemonData.imgUrl}}),n("div",{staticClass:"pokemon-name"},[t._v(" "+t._s(t.pokemonData.name||"Undefined")+" #"+t._s(t.longNumber(t.pokemonData.id))+" ")]),n("div",{staticClass:"pokemon-stats"},[n("table",[t._m(0),n("tbody",[n("tr",[n("td",[t._v("Type")]),n("td",{attrs:{id:"types"}},t._l(t.pokemonData.types,(function(e){return n("p",{key:e.type.name},[t._v(" "+t._s(e.type.name)+" ")])})),0)]),n("tr",[n("td",[t._v("Attack")]),n("td",[t._v(t._s(t.getStat("attack")||"Undefined"))])]),n("tr",[n("td",[t._v("Defennce")]),n("td",[t._v(t._s(t.getStat("defense")||"Undefined"))])]),n("tr",[n("td",[t._v("HP")]),n("td",[t._v(t._s(t.getStat("hp")||"Undefined"))])]),n("tr",[n("td",[t._v("SP Attack")]),n("td",[t._v(t._s(t.getStat("special-attack")||"Undefined"))])]),n("tr",[n("td",[t._v("SP Defense")]),n("td",[t._v(t._s(t.getStat("special-defense")||"Undefined"))])]),n("tr",[n("td",[t._v("Speed")]),n("td",[t._v(t._s(t.getStat("speed")||"Undefined"))])]),n("tr",[n("td",[t._v("Weight")]),n("td",[t._v(t._s(t.pokemonData.weight||"Undefined"))])]),n("tr",[n("td",[t._v("Total moves")]),n("td",[t._v(t._s(t.pokemonData.moves.length||"Undefined"))])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"stat-name"}),n("th",{staticClass:"stat-value"})])])}],d=(n("4de4"),n("b0c0"),{name:"info-card",methods:{getStat:function(t){var e=this.pokemonData.stats.filter((function(e){return e.stat.name===t}))[0];return e.base_stat},longNumber:function(t){for(var e=t+"",n=0;n<4-e.length;n++)e="0"+e;return e}},props:{pokemonData:{type:Object,default:function(){return{}}}}}),r=d,i=(n("5bdb"),n("2877")),o=Object(i["a"])(r,a,s,!1,null,"4aa2ac3b",null);e["default"]=o.exports},"4de4":function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").filter,d=n("1dde"),r=d("filter");a({target:"Array",proto:!0,forced:!r},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5134:function(t,e,n){},"5bdb":function(t,e,n){"use strict";n("5134")}}]);
//# sourceMappingURL=chunk-bd05a680.f5b5d8e9.js.map