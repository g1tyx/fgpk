(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{260:function(t,e,l){"use strict";l.r(e);var c={props:["value"],computed:{ruby:function(){return Math.floor(this.value/1e10)},platinium:function(){return Math.floor(this.value/1e6%1e4)},gold:function(){return Math.floor(this.value/1e4%100)},silver:function(){return Math.floor(this.value/100%100)},coin:function(){return Math.floor(this.value%100)}}},n=l(61),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row gx-2 lh-1"},[t.ruby>0?l("div",{staticClass:"col-auto d-flex align-items-center"},[l("span",{staticClass:"me-1"},[t._v(t._s(t.ruby.toLocaleString()))]),t._v(" "),l("small",{staticClass:"rounded-circle text-black fw-bold d-flex align-items-center justify-content-center",staticStyle:{width:"12px",height:"12px","font-size":"6px","background-color":"#e0115f"}},[t._v("R")])]):t._e(),t._v(" "),t.platinium>0?l("div",{staticClass:"col-auto d-flex align-items-center"},[l("span",{staticClass:"me-1"},[t._v(t._s(t.platinium.toLocaleString()))]),t._v(" "),l("small",{staticClass:"rounded-circle text-black fw-bold d-flex align-items-center justify-content-center",staticStyle:{width:"12px",height:"12px","font-size":"6px","background-color":"#e5e4e2"}},[t._v("P")])]):t._e(),t._v(" "),t.gold>0?l("div",{staticClass:"col-auto d-flex align-items-center"},[l("span",{staticClass:"me-1"},[t._v(t._s(t.gold.toLocaleString()))]),t._v(" "),l("small",{staticClass:"rounded-circle text-black fw-bold d-flex align-items-center justify-content-center",staticStyle:{width:"12px",height:"12px","font-size":"6px","background-color":"#ffd700"}},[t._v("G")])]):t._e(),t._v(" "),t.silver>0?l("div",{staticClass:"col-auto d-flex align-items-center"},[l("span",{staticClass:"me-1"},[t._v(t._s(t.silver.toLocaleString()))]),t._v(" "),l("small",{staticClass:"rounded-circle text-black fw-bold d-flex align-items-center justify-content-center",staticStyle:{width:"12px",height:"12px","font-size":"6px","background-color":"#c0c0c0"}},[t._v("S")])]):t._e(),t._v(" "),t.coin>0?l("div",{staticClass:"col-auto d-flex align-items-center"},[l("span",{staticClass:"me-1"},[t._v(t._s(t.coin.toLocaleString()))]),t._v(" "),l("small",{staticClass:"rounded-circle text-black fw-bold d-flex align-items-center justify-content-center",staticStyle:{width:"12px",height:"12px","font-size":"6px","background-color":"#ff5733"}},[t._v("C")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);