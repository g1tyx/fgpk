(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{288:function(e,l,o){"use strict";o.r(l);o(289),o(112),o(13),o(35),o(23),o(70);var v={props:["value"],computed:{format:function(){var e=parseFloat(Math.abs(this.value));if(0==e)return{value:parseFloat(this.value),symbol:""};if(e>0&&e<1)return{value:parseFloat(this.value).toFixed(3),symbol:""};var l=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"},{value:1e15,symbol:"e15"},{value:1e18,symbol:"e18"},{value:1e21,symbol:"e21"},{value:1e24,symbol:"e24"},{value:1e27,symbol:"e27"},{value:1e30,symbol:"e30"},{value:1e33,symbol:"e33"},{value:1e36,symbol:"e36"},{value:1e39,symbol:"e39"},{value:1e42,symbol:"e42"},{value:1e45,symbol:"e45"},{value:1e48,symbol:"e48"},{value:1e51,symbol:"e51"},{value:1e54,symbol:"e54"},{value:1e57,symbol:"e57"},{value:1e60,symbol:"e60"},{value:1e63,symbol:"e63"},{value:1e66,symbol:"e66"},{value:1e69,symbol:"e69"},{value:1e72,symbol:"e72"},{value:1e75,symbol:"e75"},{value:1e78,symbol:"e78"},{value:1e81,symbol:"e81"},{value:1e84,symbol:"e84"},{value:1e87,symbol:"e87"},{value:1e90,symbol:"e90"},{value:1e93,symbol:"e93"},{value:1e96,symbol:"e96"},{value:1e99,symbol:"e99"},{value:1e102,symbol:"e102"},{value:1e105,symbol:"e105"},{value:1e108,symbol:"e108"},{value:1e111,symbol:"e111"},{value:1e114,symbol:"e114"},{value:1e117,symbol:"e117"},{value:1e120,symbol:"e120"},{value:1e123,symbol:"e123"},{value:1e126,symbol:"e126"},{value:1e129,symbol:"e129"},{value:1e132,symbol:"e132"},{value:1e135,symbol:"e135"},{value:1e138,symbol:"e138"},{value:1e141,symbol:"e141"},{value:1e144,symbol:"e144"},{value:1e147,symbol:"e147"},{value:1e150,symbol:"e150"},{value:1e153,symbol:"e153"},{value:1e156,symbol:"e156"},{value:1e159,symbol:"e159"},{value:1e162,symbol:"e162"},{value:1e165,symbol:"e165"},{value:1e168,symbol:"e168"},{value:1e171,symbol:"e171"},{value:1e174,symbol:"e174"},{value:1e177,symbol:"e177"},{value:1e180,symbol:"e180"},{value:1e183,symbol:"e183"},{value:1e186,symbol:"e186"},{value:1e189,symbol:"e189"},{value:1e192,symbol:"e192"},{value:1e195,symbol:"e195"},{value:1e198,symbol:"e198"},{value:1e201,symbol:"e201"},{value:1e204,symbol:"e204"},{value:1e207,symbol:"e207"},{value:1e210,symbol:"e210"},{value:1e213,symbol:"e213"},{value:1e216,symbol:"e216"},{value:1e219,symbol:"e219"},{value:1e222,symbol:"e222"},{value:1e225,symbol:"e225"},{value:1e228,symbol:"e228"},{value:1e231,symbol:"e231"},{value:1e234,symbol:"e234"},{value:1e237,symbol:"e237"},{value:1e240,symbol:"e240"},{value:1e243,symbol:"e243"},{value:1e246,symbol:"e246"},{value:1e249,symbol:"e249"},{value:1e252,symbol:"e252"},{value:1e255,symbol:"e255"},{value:1e258,symbol:"e258"},{value:1e261,symbol:"e261"},{value:1e264,symbol:"e264"},{value:1e267,symbol:"e267"},{value:1e270,symbol:"e270"},{value:1e273,symbol:"e273"},{value:1e276,symbol:"e276"},{value:1e279,symbol:"e279"},{value:1e282,symbol:"e282"},{value:1e285,symbol:"e285"},{value:1e288,symbol:"e288"},{value:1e291,symbol:"e291"}].slice().reverse().find((function(l){return e>=l.value}));return this.value<0&&(e*=-1),{value:l?(e/l.value).toPrecision(4).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1"):"0",symbol:l?l.symbol:null}}}},t=o(61),component=Object(t.a)(v,(function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("span",[e._v(e._s(e.format.value.toLocaleString())),e.format.symbol?o("small",{staticClass:"opacity-75"},[e._v(" "+e._s(e.format.symbol))]):e._e()])}),[],!1,null,null,null);l.default=component.exports},289:function(e,l,o){"use strict";var v=o(3),t=o(0),m=o(4),r=o(62),y=o(290),n=o(188),c=o(5),f=t.RangeError,d=t.String,h=Math.floor,_=m(n),x=m("".slice),w=m(1..toFixed),k=function(e,l,o){return 0===l?o:l%2==1?k(e,l-1,o*e):k(e*e,l/2,o)},C=function(data,e,l){for(var o=-1,v=l;++o<6;)v+=e*data[o],data[o]=v%1e7,v=h(v/1e7)},F=function(data,e){for(var l=6,o=0;--l>=0;)o+=data[l],data[l]=h(o/e),o=o%e*1e7},$=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var l=d(data[e]);s=""===s?l:s+_("0",7-l.length)+l}return s};v({target:"Number",proto:!0,forced:c((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!c((function(){w({})}))},{toFixed:function(e){var l,o,v,t,m=y(this),n=r(e),data=[0,0,0,0,0,0],c="",h="0";if(n<0||n>20)throw f("Incorrect fraction digits");if(m!=m)return"NaN";if(m<=-1e21||m>=1e21)return d(m);if(m<0&&(c="-",m=-m),m>1e-21)if(o=(l=function(e){for(var l=0,o=e;o>=4096;)l+=12,o/=4096;for(;o>=2;)l+=1,o/=2;return l}(m*k(2,69,1))-69)<0?m*k(2,-l,1):m/k(2,l,1),o*=4503599627370496,(l=52-l)>0){for(C(data,0,o),v=n;v>=7;)C(data,1e7,0),v-=7;for(C(data,k(10,v,1),0),v=l-1;v>=23;)F(data,1<<23),v-=23;F(data,1<<v),C(data,1,1),F(data,2),h=$(data)}else C(data,0,o),C(data,1<<-l,0),h=$(data)+_("0",n);return h=n>0?c+((t=h.length)<=n?"0."+_("0",n-t)+h:x(h,0,t-n)+"."+x(h,t-n)):c+h}})},290:function(e,l,o){var v=o(4);e.exports=v(1..valueOf)},305:function(e,l,o){e.exports=o.p+"img/notReached.0ae3048.png"},306:function(e,l,o){e.exports=o.p+"img/reached.2498acc.png"},348:function(e,l,o){"use strict";o.r(l);var v={props:["req","task"]},t=o(61),component=Object(t.a)(v,(function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("div",{staticClass:"row"},[v("div",{staticClass:"col-auto ps-2"},[e.req.level>e.task.level?v("img",{attrs:{src:o(305),width:"12px"}}):e._e(),e._v(" "),e.req.level<=e.task.level?v("img",{attrs:{src:o(306),width:"12px"}}):e._e()]),e._v(" "),v("div",{staticClass:"col-auto"},[v("span",{staticClass:"text-shadow",class:{"text-light":e.req.level>e.task.level,"text-success":e.req.level<=e.task.level}},[e._v(e._s(e.$t("name_"+e.task.id)))]),e._v(" "),v("small",{staticClass:"text-muted text-shadow"},[e._v(e._s(e.$t("req_level")))]),e._v(" "),v("span",{staticClass:"text-shadow",class:{"text-light":e.req.level>e.task.level,"text-success":e.req.level<=e.task.level}},[v("FormatNumber",{attrs:{value:e.req.level}})],1)])])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{FormatNumber:o(288).default})}}]);