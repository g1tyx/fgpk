(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7],{299:function(t,e,r){"use strict";r.r(e);var n={props:["value"],computed:{time:function(){var t=this.value;if(0==t)return"00:00:00";if(t<1)return"1s >";var e=Math.floor(t/86400),r=Math.floor(t/3600)%24;r<10&&(r="0"+r);var n=Math.floor(t/60)%60;n<10&&(n="0"+n);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("word_days")+" "+r+":"+n+":"+s:r+":"+n+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},l=r(61),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,r){"use strict";r.r(e);var n={props:["value"],computed:{delay:function(){return(new Date).getTime()-this.value}}},l=r(61),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("FormatTime",{attrs:{value:t.delay}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatTime:r(299).default})}}]);