(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var h,l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ba=aa(this);function ca(a,b){if(b)a:{var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&l(c,a,{configurable:!0,writable:!0,value:b})}}
ca("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;l(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ea={a:!0},p={};try{p.__proto__=ea;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=m;
function t(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.W=b.prototype}
var u=this||self;function v(a){a=a.split(".");for(var b=u,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=fa:w=ha;return w.apply(null,arguments)}
function x(a,b){a=a.split(".");var c=u;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
;var y={},z=null;var B="undefined"!==typeof Uint8Array;var C="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ia(a){var b;C?b=a[C]:b=a.B;return null==b?0:b}
function D(a){Object.isFrozen(a)||(C?a[C]|=1:void 0!==a.B?a.B|=1:Object.defineProperties(a,{B:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function ja(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ka=Object.freeze(D([]));function la(a){a=a.j;if(Array.isArray(a)&&ia(a)&2)throw Error("Cannot mutate an immutable Message");}
var E="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function F(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function ma(a){if(E){var b={};Object.defineProperties(a,(b[Symbol.hasInstance]=F(Object[Symbol.hasInstance]),b))}}
;function na(a){var b=oa;b=void 0===b?pa:b;return qa(a,b)}
function ra(a,b){if(null!=a){if(Array.isArray(a))a=qa(a,b);else if(ja(a)){var c={},d;for(d in a)c[d]=ra(a[d],b);a=c}else a=b(a);return a}}
function qa(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ra(c[d],b);Array.isArray(a)&&ia(a)&1&&D(c);return c}
function oa(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&B&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!z){z={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));y[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===z[k]&&(z[k]=g)}}}b=y[b];c=Array(Math.floor(a.length/
3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var r=a[f],A=a[f+1];k=a[f+2];g=b[r>>2];r=b[(r&3)<<4|A>>4];A=b[(A&15)<<2|k>>6];k=b[k&63];c[e++]=""+g+r+A+k}g=0;k=d;switch(a.length-f){case 2:g=a[f+1],k=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+k+d}a=c.join("")}}return Array.isArray(a)?na(a):a}
function pa(a){return B&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function G(a,b,c){a||(a=sa);sa=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.g=(d?0:-1)-(this.constructor.g||0);this.l=void 0;this.j=a;a:{d=this.j.length;a=d-1;if(d&&(d=this.j[a],ja(d))){this.h=a-this.g;this.i=d;break a}void 0!==b&&-1<b?(this.h=Math.max(b,a+1-this.g),this.i=void 0):this.h=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.h)a+=this.g,(d=this.j[a])?Array.isArray(d)&&D(d):this.j[a]=ka;else{d=this.i||(this.i=this.j[this.h+this.g]={});var e=d[a];e?Array.isArray(e)&&D(e):
d[a]=ka}}
G.prototype.toJSON=function(){return na(this.j)};
G.prototype.toString=function(){return this.j.toString()};
var sa;function H(){G.apply(this,arguments)}
t(H,G);if(E){var ta={};Object.defineProperties(H,(ta[Symbol.hasInstance]=F(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ta))};function ua(a,b){var c=this.g,d=!0;d=void 0===d?!1:d;la(a);a.l||(a.l={});var e=b?b.j:b;a.l[c]=b;b=d;b=void 0===b?!1:b;la(a);c<a.h&&!b?a.j[c+a.g]=e:(a.i||(a.i=a.j[a.h+a.g]={}))[c]=e;return a}
;function I(){H.apply(this,arguments)}
t(I,H);if(E){var va={};Object.defineProperties(I,(va[Symbol.hasInstance]=F(Object[Symbol.hasInstance]),va))};function J(){this.u=this.u;this.D=this.D}
J.prototype.u=!1;J.prototype.dispose=function(){this.u||(this.u=!0,this.I())};
J.prototype.I=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function K(a){I.call(this,a,1)}
t(K,I);function L(a){I.call(this,a)}
t(L,I);var wa=new function(a){this.g=a;this.h=ua}(406606992,L);function M(){L.apply(this,arguments)}
t(M,L);ma(M);var N=u.window,xa,ya,O=(null==N?void 0:null==(xa=N.yt)?void 0:xa.config_)||(null==N?void 0:null==(ya=N.ytcfg)?void 0:ya.data_)||{},za,Aa=(null==N?void 0:null==(za=N.ytcfg)?void 0:za.obfuscatedData_)||[];function P(){K.apply(this,arguments)}
t(P,K);ma(P);var Ba=new P(Aa),Ca=O.EXPERIMENT_FLAGS;if(!Ca||!Ca.jspb_i18n_extension){var Da=new M;wa.h(Ba,Da)}x("yt.config_",O);x("yt.configJspb_",Aa);function Q(a,b){return a in O?O[a]:b}
;function Ea(a,b){a=Fa(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Fa(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;var Ga=Ea("web_emulated_idle_callback_delay",300),Ha=1E3/60-3;
function R(a){a=void 0===a?{}:a;J.call(this);this.g=[];this.g[8]=[];this.g[4]=[];this.g[3]=[];this.g[2]=[];this.g[1]=[];this.g[0]=[];this.l=0;this.P=a.timeout||1;this.i={};this.s=Ha;this.F=this.h=this.o=0;this.G=this.m=!1;this.v=[];this.J=w(this.T,this);this.O=w(this.V,this);this.L=w(this.R,this);this.M=w(this.S,this);this.N=w(this.U,this);this.C=this.H=!1;var b;if(b=!!window.requestIdleCallback)b=Fa("disable_scheduler_requestIdleCallback"),b=!("string"===typeof b&&"false"===b?0:b);this.K=b;(this.A=
!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.J)}
t(R,J);function Ia(a,b){var c=Date.now();S(b);b=Date.now()-c;a.m||(a.s-=b)}
function Ja(a,b,c,d){++a.F;if(10==c)return Ia(a,b),a.F;var e=a.F;a.i[e]=b;a.m&&!d?a.v.push({id:e,priority:c}):(a.g[c].push(e),a.G||a.m||(0!=a.h&&T(a)!=a.o&&U(a),a.start()));return e}
function Ka(a){a.v.length=0;for(var b=4;0<=b;b--)a.g[b].length=0;a.g[8].length=0;a.i={};U(a)}
function T(a){if(a.g[8].length){if(a.C)return 4;if(!document.hidden&&a.A)return 3}for(var b=4;b>=a.l;b--)if(0<a.g[b].length)return 0<b?!document.hidden&&a.A?3:2:1;return 0}
function S(a){try{a()}catch(b){(a=v("yt.logging.errors.log"))&&a(b)}}
function La(a){if(a.g[8].length)return!0;for(var b=3;0<=b;b--)if(a.g[b].length)return!0;return!1}
h=R.prototype;h.S=function(a){var b=void 0;a&&(b=a.timeRemaining());this.H=!0;V(this,b);this.H=!1};
h.V=function(){V(this)};
h.R=function(){Ma(this)};
h.U=function(){this.C=!0;var a=T(this);4==a&&a!=this.o&&(U(this),this.start());V(this);this.C=!1};
h.T=function(){document.hidden||Ma(this);this.h&&(U(this),this.start())};
function Ma(a){U(a);a.m=!0;for(var b=Date.now(),c=a.g[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&S(e)}Na(a);a.m=!1;La(a)&&a.start();a.s-=Date.now()-b}
function Na(a){for(var b=0,c=a.v.length;b<c;b++){var d=a.v[b];a.g[d.priority].push(d.id)}a.v.length=0}
function V(a,b){a.C&&4==a.o&&a.h||U(a);a.m=!0;b=Date.now()+(b||a.s);for(var c=a.g[4];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&S(e)}c=a.H?0:1;c=a.l>c?a.l:c;if(!(Date.now()>=b)){do{a:{d=a;e=c;for(var f=3;f>=e;f--)for(var g=d.g[f];g.length;){var k=g.shift(),r=d.i[k];delete d.i[k];if(r){d=r;break a}}d=null}d&&S(d)}while(d&&Date.now()<b)}a.m=!1;Na(a);a.s=Ha;La(a)&&a.start()}
h.start=function(){this.G=!1;if(0==this.h)switch(this.o=T(this),this.o){case 1:var a=this.M;this.h=this.K?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Ga);break;case 2:this.h=window.setTimeout(this.O,this.P);break;case 3:this.h=window.requestAnimationFrame(this.N);break;case 4:this.h=window.setTimeout(this.L,0)}};
function U(a){if(a.h){switch(a.o){case 1:var b=a.h;a.K?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.h);break;case 3:window.cancelAnimationFrame(a.h)}a.h=0}}
h.I=function(){Ka(this);U(this);this.A&&document.removeEventListener("visibilitychange",this.J);J.prototype.I.call(this)};var W=v("yt.scheduler.instance.timerIdMap_")||{},Oa=Ea("kevlar_tuner_scheduler_soft_state_timer_ms",800),X=0,Y=0;function Z(){var a=v("ytglobal.schedulerInstanceInstance_");if(!a||a.u)a=new R(Q("scheduler")||{}),x("ytglobal.schedulerInstanceInstance_",a);return a}
function Pa(){var a=v("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),x("ytglobal.schedulerInstanceInstance_",null))}
function Qa(){Ka(Z())}
function Ra(a,b,c){if(0==c||void 0===c)return c=void 0===c,-Ja(Z(),a,b,c);var d=window.setTimeout(function(){var e=Ja(Z(),a,b);W[d]=e},c);
return d}
function Sa(a){var b=Z();Ia(b,a)}
function Ta(a){var b=Z();if(0>a)delete b.i[-a];else{var c=W[a];c?(delete b.i[c],delete W[a]):window.clearTimeout(a)}}
function Ua(a){var b=v("ytcsi.tick");b&&b(a)}
function Va(){Ua("jse");Wa()}
function Wa(){window.clearTimeout(X);Z().start()}
function Xa(){var a=Z();U(a);a.G=!0;window.clearTimeout(X);X=window.setTimeout(Va,Oa)}
function Ya(){window.clearTimeout(Y);Y=window.setTimeout(function(){Ua("jset");Za(0)},Oa)}
function Za(a){Ya();var b=Z();b.l=a;b.start()}
function $a(a){Ya();var b=Z();b.l>a&&(b.l=a,b.start())}
function ab(){window.clearTimeout(Y);var a=Z();a.l=0;a.start()}
;v("yt.scheduler.initialized")||(x("yt.scheduler.instance.dispose",Pa),x("yt.scheduler.instance.addJob",Ra),x("yt.scheduler.instance.addImmediateJob",Sa),x("yt.scheduler.instance.cancelJob",Ta),x("yt.scheduler.instance.cancelAllJobs",Qa),x("yt.scheduler.instance.start",Wa),x("yt.scheduler.instance.pause",Xa),x("yt.scheduler.instance.setPriorityThreshold",Za),x("yt.scheduler.instance.enablePriorityThreshold",$a),x("yt.scheduler.instance.clearPriorityThreshold",ab),x("yt.scheduler.initialized",!0));}).call(this);
