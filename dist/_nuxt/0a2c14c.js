(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{298:function(t,e,n){"use strict";n.r(e);var r={props:["value"],computed:{time:function(){var t=this.value;if(t<1)return"1s >";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var r=Math.floor(t/60)%60;r<10&&(r="0"+r);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("word_days")+" "+n+":"+r+":"+s:n+":"+r+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},l=n(61),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,n){"use strict";n.r(e);var r={props:["value"]},l=n(61),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["Infinity"==t.value||t.value<0?n("span",{staticClass:"text-normal"},[t._v("---")]):t._e(),t._v(" "),"Infinity"!=t.value&&t.value>0?n("FormatTime",{attrs:{value:t.value}}):t._e(),t._v(" "),0==t.value?n("span",[t._v("< 1s")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatTime:n(298).default})}}]);