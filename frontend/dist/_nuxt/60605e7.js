(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,9],{260:function(e,l,t){"use strict";t.r(l);t(261),t(112),t(12),t(34),t(22),t(70);var o={props:["value"],computed:{format:function(){var e=parseFloat(Math.abs(this.value));if(0==e)return{value:parseFloat(this.value),symbol:""};if(e>0&&e<1)return{value:parseFloat(this.value).toFixed(3),symbol:""};var l=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"},{value:1e15,symbol:"e15"},{value:1e18,symbol:"e18"},{value:1e21,symbol:"e21"},{value:1e24,symbol:"e24"},{value:1e27,symbol:"e27"},{value:1e30,symbol:"e30"},{value:1e33,symbol:"e33"},{value:1e36,symbol:"e36"},{value:1e39,symbol:"e39"},{value:1e42,symbol:"e42"},{value:1e45,symbol:"e45"},{value:1e48,symbol:"e48"},{value:1e51,symbol:"e51"},{value:1e54,symbol:"e54"},{value:1e57,symbol:"e57"},{value:1e60,symbol:"e60"},{value:1e63,symbol:"e63"},{value:1e66,symbol:"e66"},{value:1e69,symbol:"e69"},{value:1e72,symbol:"e72"},{value:1e75,symbol:"e75"},{value:1e78,symbol:"e78"},{value:1e81,symbol:"e81"},{value:1e84,symbol:"e84"},{value:1e87,symbol:"e87"},{value:1e90,symbol:"e90"},{value:1e93,symbol:"e93"},{value:1e96,symbol:"e96"},{value:1e99,symbol:"e99"},{value:1e102,symbol:"e102"},{value:1e105,symbol:"e105"},{value:1e108,symbol:"e108"},{value:1e111,symbol:"e111"},{value:1e114,symbol:"e114"},{value:1e117,symbol:"e117"},{value:1e120,symbol:"e120"},{value:1e123,symbol:"e123"},{value:1e126,symbol:"e126"},{value:1e129,symbol:"e129"},{value:1e132,symbol:"e132"},{value:1e135,symbol:"e135"},{value:1e138,symbol:"e138"},{value:1e141,symbol:"e141"},{value:1e144,symbol:"e144"},{value:1e147,symbol:"e147"},{value:1e150,symbol:"e150"},{value:1e153,symbol:"e153"},{value:1e156,symbol:"e156"},{value:1e159,symbol:"e159"},{value:1e162,symbol:"e162"},{value:1e165,symbol:"e165"},{value:1e168,symbol:"e168"},{value:1e171,symbol:"e171"},{value:1e174,symbol:"e174"},{value:1e177,symbol:"e177"},{value:1e180,symbol:"e180"},{value:1e183,symbol:"e183"},{value:1e186,symbol:"e186"},{value:1e189,symbol:"e189"},{value:1e192,symbol:"e192"},{value:1e195,symbol:"e195"},{value:1e198,symbol:"e198"},{value:1e201,symbol:"e201"},{value:1e204,symbol:"e204"},{value:1e207,symbol:"e207"},{value:1e210,symbol:"e210"},{value:1e213,symbol:"e213"},{value:1e216,symbol:"e216"},{value:1e219,symbol:"e219"},{value:1e222,symbol:"e222"},{value:1e225,symbol:"e225"},{value:1e228,symbol:"e228"},{value:1e231,symbol:"e231"},{value:1e234,symbol:"e234"},{value:1e237,symbol:"e237"},{value:1e240,symbol:"e240"},{value:1e243,symbol:"e243"},{value:1e246,symbol:"e246"},{value:1e249,symbol:"e249"},{value:1e252,symbol:"e252"},{value:1e255,symbol:"e255"},{value:1e258,symbol:"e258"},{value:1e261,symbol:"e261"},{value:1e264,symbol:"e264"},{value:1e267,symbol:"e267"},{value:1e270,symbol:"e270"},{value:1e273,symbol:"e273"},{value:1e276,symbol:"e276"},{value:1e279,symbol:"e279"},{value:1e282,symbol:"e282"},{value:1e285,symbol:"e285"},{value:1e288,symbol:"e288"},{value:1e291,symbol:"e291"}].slice().reverse().find((function(l){return e>=l.value}));return this.value<0&&(e*=-1),{value:l?(e/l.value).toPrecision(4).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1"):"0",symbol:l?l.symbol:null}}}},r=t(61),component=Object(r.a)(o,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("span",[e._v(e._s(e.format.value.toLocaleString())),e.format.symbol?t("small",{staticClass:"opacity-75"},[e._v(" "+e._s(e.format.symbol))]):e._e()])}),[],!1,null,null,null);l.default=component.exports},261:function(e,l,t){"use strict";var o=t(3),r=t(0),v=t(4),m=t(62),c=t(262),n=t(188),y=t(5),d=r.RangeError,f=r.String,_=Math.floor,h=v(n),x=v("".slice),C=v(1..toFixed),k=function(e,l,t){return 0===l?t:l%2==1?k(e,l-1,t*e):k(e*e,l/2,t)},w=function(data,e,l){for(var t=-1,o=l;++t<6;)o+=e*data[t],data[t]=o%1e7,o=_(o/1e7)},$=function(data,e){for(var l=6,t=0;--l>=0;)t+=data[l],data[l]=_(t/e),t=t%e*1e7},M=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var l=f(data[e]);s=""===s?l:s+h("0",7-l.length)+l}return s};o({target:"Number",proto:!0,forced:y((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!y((function(){C({})}))},{toFixed:function(e){var l,t,o,r,v=c(this),n=m(e),data=[0,0,0,0,0,0],y="",_="0";if(n<0||n>20)throw d("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return f(v);if(v<0&&(y="-",v=-v),v>1e-21)if(t=(l=function(e){for(var l=0,t=e;t>=4096;)l+=12,t/=4096;for(;t>=2;)l+=1,t/=2;return l}(v*k(2,69,1))-69)<0?v*k(2,-l,1):v/k(2,l,1),t*=4503599627370496,(l=52-l)>0){for(w(data,0,t),o=n;o>=7;)w(data,1e7,0),o-=7;for(w(data,k(10,o,1),0),o=l-1;o>=23;)$(data,1<<23),o-=23;$(data,1<<o),w(data,1,1),$(data,2),_=M(data)}else w(data,0,t),w(data,1<<-l,0),_=M(data)+h("0",n);return _=n>0?y+((r=_.length)<=n?"0."+h("0",n-r)+_:x(_,0,r-n)+"."+x(_,r-n)):y+_}})},262:function(e,l,t){var o=t(4);e.exports=o(1..valueOf)},264:function(e,l,t){"use strict";t.r(l);var o={props:["value"],computed:{time:function(){var e=this.value;if(e<1)return"1s >";var l=Math.floor(e/86400),t=Math.floor(e/3600)%24;t<10&&(t="0"+t);var o=Math.floor(e/60)%60;o<10&&(o="0"+o);var s=Math.floor(e%60);return s<10&&(s="0"+s),e=l>0?l+this.$t("word_days")+" "+t+":"+o+":"+s:t+":"+o+":"+s}}},r=t(61),component=Object(r.a)(o,(function(){var e=this,l=e.$createElement;return(e._self._c||l)("span",[e._v(e._s(e.time))])}),[],!1,null,null,null);l.default=component.exports},265:function(e,l,t){"use strict";t.r(l);var o={props:["value"]},r=t(61),component=Object(r.a)(o,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("small",["Infinity"==e.value||e.value<0?t("span",{staticClass:"text-normal"},[e._v("---")]):e._e(),e._v(" "),"Infinity"!=e.value&&e.value>0?t("FormatTime",{attrs:{value:e.value}}):e._e(),e._v(" "),0==e.value?t("span",[t("i",{staticClass:"fas fa-fw fa-check text-success"})]):e._e()],1)}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{FormatTime:t(264).default})},271:function(e,l,t){"use strict";t.r(l);var o={props:["item","currentSkill","effectId","happiness","evils","essences","years"],computed:{progress:function(){return Math.round(100*this.item.current/this.item.getMax())},timer:function(){return Math.round((this.item.getMax()-this.item.current)/this.item.getGain(this.happiness,this.evils,this.essences))}}},r=t(61),component=Object(r.a)(o,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return 1==e.item.visible?t("div",{staticClass:"col-6"},[1==e.item.unlocked?t("div",{staticClass:"px-2 py-1 bg-component rounded border h-100 d-flex flex-column",class:{"border-transparent":e.currentSkill.id!=e.item.id,"border-primary":e.currentSkill.id==e.item.id}},[t("div",{staticClass:"d-flex align-items-baseline"},[t("div",{staticClass:"col p-1 text-white"},[e._v(e._s(e.$t("taskName_"+e.item.id)))]),e._v(" "),e.years>=20?t("div",{staticClass:"col-auto p-1 small"},[t("div",{staticClass:"form-check form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.item.excluded,expression:"item.excluded"}],staticClass:"form-check-input",attrs:{type:"checkbox",role:"switch",id:"switchExcluded"+e.item.id},domProps:{checked:Array.isArray(e.item.excluded)?e._i(e.item.excluded,null)>-1:e.item.excluded},on:{change:function(l){var t=e.item.excluded,o=l.target,r=!!o.checked;if(Array.isArray(t)){var v=e._i(t,null);o.checked?v<0&&e.$set(e.item,"excluded",t.concat([null])):v>-1&&e.$set(e.item,"excluded",t.slice(0,v).concat(t.slice(v+1)))}else e.$set(e.item,"excluded",r)}}}),e._v(" "),t("label",{staticClass:"form-check-label small",attrs:{for:"switchExcluded"+e.item.id}},[e._v(e._s(e.$t("word_autoExclude")))])])]):e._e(),e._v(" "),t("div",{staticClass:"col-auto p-1 small text-success"},[t("small",{staticClass:"opacity-50"},[e._v(e._s(e.$t("effectName_"+e.effectId)))]),e._v(" "),e.item.getEffect()>0?t("small",[e._v("+")]):e._e(),t("FormatNumber",{attrs:{value:Math.round(100*e.item.getEffect())}}),e._v("%\n            ")],1)]),e._v(" "),t("div",{staticClass:"flex-fill p-1 small"},[e._v(e._s(e.$t("taskDesc_"+e.item.id)))]),e._v(" "),t("div",{staticClass:"d-flex align-items-center"},[t("div",{staticClass:"col p-1"},[t("div",{staticClass:"d-flex align-items-center"},[t("div",{staticClass:"col-4"},[t("small",{staticClass:"text-normal"},[e._v(e._s(e.$t("word_lvl")))]),e._v(" "),t("small",{staticClass:"text-white"},[e._v(e._s(e.item.level.toLocaleString()))])]),e._v(" "),e.item.bonusMod>0?t("div",{staticClass:"col"},[t("small",{staticClass:"text-normal"},[e._v("Bonus")]),e._v(" "),t("small",{staticClass:"text-white"},[e._v(e._s(1+e.item.bonusMod/10))])]):e._e(),e._v(" "),t("div",{staticClass:"col text-end"},[t("Timer",{class:{"text-timer":e.currentSkill.id==e.item.id},attrs:{value:e.timer}})],1)]),e._v(" "),t("div",{staticClass:"mt-1 progress",staticStyle:{height:"3px"}},[t("div",{staticClass:"progress-bar bg-primary",style:"width:"+e.progress+"%",attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("div",{staticClass:"col-auto p-1"},[t("button",{staticClass:"btn btn-outline-primary border border-primary",class:{active:e.currentSkill.id==e.item.id},attrs:{type:"button"},on:{click:function(l){return e.$emit("activate")}}},[e._m(0)])])])]):e._e(),e._v(" "),0==e.item.unlocked?t("div",{staticClass:"px-2 py-1 bg-component rounded border border-transparent h-100 d-flex flex-column"},[t("div",{staticClass:"d-flex align-items-baseline"},[t("div",{staticClass:"col p-1"},[t("i",{staticClass:"fas fa-fw fa-lock"}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("taskName_"+e.item.id)))])])]),e._v(" "),t("div",{staticClass:"flex-fill"},[t("div",{staticClass:"p-1"},[t("ul",{staticClass:"mb-0"},e._l(e.item.reqs,(function(l){return t("li",{key:l.id},[t("small",{staticClass:"text-normal"},[e._v(e._s(e.$t("taskName_"+l.id)))]),e._v(" "),t("small",{staticClass:"text-muted"},[e._v(e._s(e.$t("word_lvl")))]),e._v(" "),t("small",{staticClass:"text-normal"},[e._v(e._s(l.level.toLocaleString()))])])})),0)])])]):e._e()]):e._e()}),[function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"py-1"},[l("i",{staticClass:"fas fa-fw fa-power-off"})])}],!1,null,null,null);l.default=component.exports;installComponents(component,{FormatNumber:t(260).default,Timer:t(265).default})}}]);