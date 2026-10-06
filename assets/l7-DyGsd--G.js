function nd(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{l(r.next(c))}catch(h){s(h)}}function u(c){try{l(r.throw(c))}catch(h){s(h)}}function l(c){c.done?o(c.value):i(c.value).then(a,u)}l((r=r.apply(t,[])).next())})}function rd(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ou(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function su(t,e,n){if(arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function id(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ua={exports:{}},Uo={exports:{}},gi={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return r&&typeof r.length=="number"&&r.length>=0&&r.length%1===0}t.exports=e.default})(gi,gi.exports);var dt={},la={exports:{}},ca={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var o=r.pop();return n.call(this,r,o)}},t.exports=e.default})(ca,ca.exports);var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.fallback=od;Fn.wrap=sd;var r0=Fn.hasQueueMicrotask=typeof queueMicrotask=="function"&&queueMicrotask,i0=Fn.hasSetImmediate=typeof setImmediate=="function"&&setImmediate,o0=Fn.hasNextTick=typeof process=="object"&&typeof process.nextTick=="function";function od(t){setTimeout(t,0)}function sd(t){return function(e){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return t(function(){return e.apply(void 0,n)})}}var si;r0?si=queueMicrotask:i0?si=setImmediate:o0?si=process.nextTick:si=od;Fn.default=sd(si);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var n=ca.exports,r=a(n),i=Fn,o=a(i),s=dt;function a(h){return h&&h.__esModule?h:{default:h}}function u(h){return(0,s.isAsync)(h)?function(){for(var f=[],p=arguments.length;p--;)f[p]=arguments[p];var _=f.pop(),v=h.apply(this,f);return l(v,_)}:(0,r.default)(function(f,p){var _;try{_=h.apply(this,f)}catch(v){return p(v)}if(_&&typeof _.then=="function")return l(_,p);p(null,_)})}function l(h,f){return h.then(function(p){c(f,null,p)},function(p){c(f,p&&p.message?p:new Error(p))})}function c(h,f,p){try{h(f,p)}catch(_){(0,o.default)(function(v){throw v},_)}}t.exports=e.default})(la,la.exports);Object.defineProperty(dt,"__esModule",{value:!0});dt.isAsyncIterable=dt.isAsyncGenerator=dt.isAsync=void 0;var s0=la.exports,a0=u0(s0);function u0(t){return t&&t.__esModule?t:{default:t}}function ad(t){return t[Symbol.toStringTag]==="AsyncFunction"}function l0(t){return t[Symbol.toStringTag]==="AsyncGenerator"}function c0(t){return typeof t[Symbol.asyncIterator]=="function"}function h0(t){if(typeof t!="function")throw new Error("expected a function");return ad(t)?(0,a0.default)(t):t}dt.default=h0;dt.isAsync=ad;dt.isAsyncGenerator=l0;dt.isAsyncIterable=c0;var Xn={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i===void 0&&(i=r.length),!i)throw new Error("arity is undefined");function o(){for(var s=this,a=[],u=arguments.length;u--;)a[u]=arguments[u];return typeof a[i-1]=="function"?r.apply(this,a):new Promise(function(l,c){a[i-1]=function(h){for(var f=[],p=arguments.length-1;p-- >0;)f[p]=arguments[p+1];if(h)return c(h);l(f.length>1?f:f[0])},r.apply(s,a)})}return o}t.exports=e.default})(Xn,Xn.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=gi.exports,r=u(n),i=dt,o=u(i),s=Xn.exports,a=u(s);function u(l){return l&&l.__esModule?l:{default:l}}e.default=(0,a.default)(function(l,c,h){var f=(0,r.default)(c)?[]:{};l(c,function(p,_,v){(0,o.default)(p)(function(m){for(var y,T=[],S=arguments.length-1;S-- >0;)T[S]=arguments[S+1];T.length<2&&(y=T,T=y[0]),f[_]=T,v(m)})},function(p){return h(p,f)})},3),t.exports=e.default})(Uo,Uo.exports);var ha={exports:{}},ko={exports:{}},fa={exports:{}},Ei={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(){for(var o=[],s=arguments.length;s--;)o[s]=arguments[s];if(r!==null){var a=r;r=null,a.apply(this,o)}}return Object.assign(i,r),i}t.exports=e.default})(Ei,Ei.exports);var da={exports:{}},pa={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){return n[Symbol.iterator]&&n[Symbol.iterator]()},t.exports=e.default})(pa,pa.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var n=gi.exports,r=s(n),i=pa.exports,o=s(i);function s(h){return h&&h.__esModule?h:{default:h}}function a(h){var f=-1,p=h.length;return function(){return++f<p?{value:h[f],key:f}:null}}function u(h){var f=-1;return function(){var _=h.next();return _.done?null:(f++,{value:_.value,key:f})}}function l(h){var f=h?Object.keys(h):[],p=-1,_=f.length;return function v(){var m=f[++p];return m==="__proto__"?v():p<_?{value:h[m],key:m}:null}}function c(h){if((0,r.default)(h))return a(h);var f=(0,o.default)(h);return f?u(f):l(h)}t.exports=e.default})(da,da.exports);var yi={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){for(var i=[],o=arguments.length;o--;)i[o]=arguments[o];if(r===null)throw new Error("Callback was already called.");var s=r;r=null,s.apply(this,i)}}t.exports=e.default})(yi,yi.exports);var _a={exports:{}},Ti={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n={};e.default=n,t.exports=e.default})(Ti,Ti.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=Ti.exports,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}function o(s,a,u,l){var c=!1,h=!1,f=!1,p=0,_=0;function v(){p>=a||f||c||(f=!0,s.next().then(function(T){var S=T.value,x=T.done;if(!(h||c)){if(f=!1,x){c=!0,p<=0&&l(null);return}p++,u(S,_,m),_++,v()}}).catch(y))}function m(T,S){if(p-=1,!h){if(T)return y(T);if(T===!1){c=!0,h=!0;return}if(S===r.default||c&&p<=0)return c=!0,l(null);v()}}function y(T){h||(f=!1,c=!0,l(T))}v()}t.exports=e.default})(_a,_a.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Ei.exports,r=p(n),i=da.exports,o=p(i),s=yi.exports,a=p(s),u=dt,l=_a.exports,c=p(l),h=Ti.exports,f=p(h);function p(_){return _&&_.__esModule?_:{default:_}}e.default=function(_){return function(v,m,y){if(y=(0,r.default)(y),_<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!v)return y(null);if((0,u.isAsyncGenerator)(v))return(0,c.default)(v,_,m,y);if((0,u.isAsyncIterable)(v))return(0,c.default)(v[Symbol.asyncIterator](),_,m,y);var T=(0,o.default)(v),S=!1,x=!1,C=0,M=!1;function P(V,B){if(!x)if(C-=1,V)S=!0,y(V);else if(V===!1)S=!0,x=!0;else{if(B===f.default||S&&C<=0)return S=!0,y(null);M||F()}}function F(){for(M=!0;C<_&&!S;){var V=T();if(V===null){S=!0,C<=0&&y(null);return}C+=1,m(V.value,V.key,(0,a.default)(P))}M=!1}F()}},t.exports=e.default})(fa,fa.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=fa.exports,r=u(n),i=dt,o=u(i),s=Xn.exports,a=u(s);function u(c){return c&&c.__esModule?c:{default:c}}function l(c,h,f,p){return(0,r.default)(h)(c,(0,o.default)(f),p)}e.default=(0,a.default)(l,4),t.exports=e.default})(ko,ko.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=ko.exports,r=s(n),i=Xn.exports,o=s(i);function s(u){return u&&u.__esModule?u:{default:u}}function a(u,l,c){return(0,r.default)(u,1,l,c)}e.default=(0,o.default)(a,3),t.exports=e.default})(ha,ha.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=Uo.exports,r=s(n),i=ha.exports,o=s(i);function s(u){return u&&u.__esModule?u:{default:u}}function a(u,l){return(0,r.default)(o.default,u,l)}t.exports=e.default})(ua,ua.exports);var cs=id(ua.exports),Vt=function(){function t(){this.args=[],this.tasks=[]}return t.prototype.call=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];return this.args=n,cs(this.tasks)},t.prototype.tap=function(e,n){var r=this;this.tasks.push(function(i){n.apply(void 0,su([],ou(r.args),!1)),i(null,e)})},t}(),cl={exports:{}},va={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=gi.exports,r=m(n),i=Ti.exports,o=m(i),s=ko.exports,a=m(s),u=Ei.exports,l=m(u),c=yi.exports,h=m(c),f=dt,p=m(f),_=Xn.exports,v=m(_);function m(x){return x&&x.__esModule?x:{default:x}}function y(x,C,M){M=(0,l.default)(M);var P=0,F=0,V=x.length,B=!1;V===0&&M(null);function O(N,U){N===!1&&(B=!0),B!==!0&&(N?M(N):(++F===V||U===o.default)&&M(null))}for(;P<V;P++)C(x[P],P,(0,h.default)(O))}function T(x,C,M){return(0,a.default)(x,1/0,C,M)}function S(x,C,M){var P=(0,r.default)(x)?y:T;return P(x,(0,p.default)(C),M)}e.default=(0,v.default)(S,3),t.exports=e.default})(va,va.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=va.exports,r=s(n),i=Uo.exports,o=s(i);function s(u){return u&&u.__esModule?u:{default:u}}function a(u,l){return(0,o.default)(r.default,u,l)}t.exports=e.default})(cl,cl.exports);var ma={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Ei.exports,r=c(n),i=yi.exports,o=c(i),s=dt,a=c(s),u=Xn.exports,l=c(u);function c(f){return f&&f.__esModule?f:{default:f}}function h(f,p){if(p=(0,r.default)(p),!Array.isArray(f))return p(new Error("First argument to waterfall must be an array of functions"));if(!f.length)return p();var _=0;function v(y){var T=(0,a.default)(f[_++]);T.apply(void 0,y.concat([(0,o.default)(m)]))}function m(y){for(var T=[],S=arguments.length-1;S-- >0;)T[S]=arguments[S+1];if(y!==!1){if(y||_===f.length)return p.apply(void 0,[y].concat(T));v(T)}}v([])}e.default=(0,l.default)(h),t.exports=e.default})(ma,ma.exports);var f0=id(ma.exports),hl=function(){function t(){this.tasks=[]}return t.prototype.call=function(){return cs(this.tasks)},t.prototype.tap=function(e,n){this.tasks.push(function(r){var i=n();r(i,e)})},t}(),Fs=function(){function t(){this.args=[],this.tasks=[]}return t.prototype.promise=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];return this.args=n,cs(this.tasks)},t.prototype.tapPromise=function(e,n){var r=this;this.tasks.push(function(i){return nd(r,void 0,void 0,function(){return rd(this,function(o){switch(o.label){case 0:return[4,n.apply(void 0,su([],ou(this.args),!1))];case 1:return o.sent(),i(null,e),[2]}})})})},t}(),d0=function(){function t(){this.args=[],this.tasks=[]}return t.prototype.promise=function(){for(var e=arguments,n=[],r=0;r<arguments.length;r++)n[r]=e[r];return this.args=n,cs(this.tasks)},t.prototype.tapPromise=function(e,n){var r=this;this.tasks.push(function(i){return nd(r,void 0,void 0,function(){var o;return rd(this,function(s){switch(s.label){case 0:return[4,n.apply(void 0,su([],ou(this.args),!1))];case 1:return o=s.sent(),i(o,e),[2]}})})})},t}(),p0=function(){function t(){this.tasks=[]}return t.prototype.promise=function(){return f0(this.tasks)},t.prototype.tapPromise=function(e,n){this.tasks.length===0?this.tasks.push(function(r){n().then(function(i){r(null,i)})}):this.tasks.push(function(r,i){n(r).then(function(o){i(null,o)})})},t}(),So={REGISTERED_PROTOCOLS:{}},_0=Object.defineProperty,v0=Object.defineProperties,m0=Object.getOwnPropertyDescriptors,fl=Object.getOwnPropertySymbols,g0=Object.prototype.hasOwnProperty,E0=Object.prototype.propertyIsEnumerable,dl=(t,e,n)=>e in t?_0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,au=(t,e)=>{for(var n in e||(e={}))g0.call(e,n)&&dl(t,n,e[n]);if(fl)for(var n of fl(e))E0.call(e,n)&&dl(t,n,e[n]);return t},uu=(t,e)=>v0(t,m0(e)),lu=t=>So.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))],y0=class extends Error{constructor(t,e,n,r){super(`AJAXError: ${e} (${t}): ${n}`),this.status=t,this.statusText=e,this.url=n,this.body=r}};function ud(t,e){const n=new XMLHttpRequest,r=Array.isArray(t.url)?t.url[0]:t.url;n.open(t.method||"GET",r,!0),t.type==="arrayBuffer"&&(n.responseType="arraybuffer");for(const i in t.headers)t.headers.hasOwnProperty(i)&&n.setRequestHeader(i,t.headers[i]);return t.type==="json"&&(n.responseType="text",n.setRequestHeader("Accept","application/json")),n.withCredentials=t.credentials==="include",n.onerror=()=>{e(new Error(n.statusText))},n.onload=()=>{if((n.status>=200&&n.status<300||n.status===0)&&n.response!==null){let i=n.response;if(t.type==="json")try{i=JSON.parse(n.response)}catch(o){return e(o)}e(null,i,n.getResponseHeader("Cache-Control"),n.getResponseHeader("Expires"),n)}else{const i=new Blob([n.response],{type:n.getResponseHeader("Content-Type")});e(new y0(n.status,n.statusText,r.toString(),i))}},n.cancel=n.abort,n.send(t.body),n}function T0(t){return new Promise((e,n)=>{ud(t,(r,i,o,s,a)=>{r?n({err:r,data:null,xhr:a}):e({err:null,data:i,cacheControl:o,expires:s,xhr:a})})})}function cu(t,e){return ud(t,e)}var A0=(t,e)=>(lu(t.url)||cu)(uu(au({},t),{type:"json"}),e),hu=(t,e)=>(lu(t.url)||cu)(uu(au({},t),{type:"arrayBuffer"}),e),S0=(t,e)=>cu(uu(au({},t),{method:"GET"}),e),pl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";function ld(t,e){const n=new window.Image,r=window.URL||window.webkitURL;n.crossOrigin="anonymous",n.onload=()=>{e(null,n),r.revokeObjectURL(n.src),n.onload=null,window.requestAnimationFrame(()=>{n.src=pl})},n.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));const i=new Blob([new Uint8Array(t)],{type:"image/png"});n.src=t.byteLength?r.createObjectURL(i):pl}function cd(t,e){const n=new Blob([new Uint8Array(t)],{type:"image/png"});createImageBitmap(n).then(r=>{e(null,r)}).catch(r=>{e(new Error(`Could not load image because of ${r.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`))})}var ga=(t,e,n)=>{const r=(i,o)=>{if(i)e(i);else if(o){const s=typeof createImageBitmap=="function",a=n?n(o):o;s?cd(a,e):ld(a,e)}};return t.type==="json"?A0(t,r):hu(t,r)},R0=(t,e)=>{typeof createImageBitmap=="function"?cd(t,e):ld(t,e)},hd=(t=>(t.CENTER="center",t.TOP="top",t["TOP-LEFT"]="top-left",t["TOP-RIGHT"]="top-right",t.BOTTOM="bottom",t["BOTTOM-LEFT"]="bottom-left",t["BOTTOM-RIGHT"]="bottom-right",t["BOTTOM-CENTER"]="bottom-center",t.LEFT="left",t.RIGHT="right",t))(hd||{}),Ea={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)","bottom-center":"translate(-50%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"};function x0(t,e,n){const r=t.classList;for(const i in Ea)Ea.hasOwnProperty(i)&&r.remove(`l7-${n}-anchor-${i}`);r.add(`l7-${n}-anchor-${e}`)}var _l={white:[255,255,255],black:[0,0,0],red:[255,0,0],green:[0,128,0],blue:[0,0,255],yellow:[255,255,0],cyan:[0,255,255],magenta:[255,0,255],gray:[128,128,128],grey:[128,128,128],silver:[192,192,192],maroon:[128,0,0],olive:[128,128,0],lime:[0,255,0],aqua:[0,255,255],teal:[0,128,128],navy:[0,0,128],fuchsia:[255,0,255],purple:[128,0,128],orange:[255,165,0],pink:[255,192,203],aliceblue:[240,248,255],antiquewhite:[250,235,215],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],blanchedalmond:[255,235,205],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],limegreen:[50,205,50],linen:[250,240,230],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],oldlace:[253,245,230],olivedrab:[107,142,35],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],plum:[221,160,221],powderblue:[176,224,230],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],thistle:[216,191,216],tomato:[255,99,71],transparent:[0,0,0],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],whitesmoke:[245,245,245],yellowgreen:[154,205,50]};function C0(t){let e=0,n=0,r=0,i=1;if(t.length===4)e=parseInt(t[1]+t[1],16),n=parseInt(t[2]+t[2],16),r=parseInt(t[3]+t[3],16);else if(t.length===5)e=parseInt(t[1]+t[1],16),n=parseInt(t[2]+t[2],16),r=parseInt(t[3]+t[3],16),i=parseInt(t[4]+t[4],16)/255;else if(t.length===7)e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16);else if(t.length===9)e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16),i=parseInt(t.slice(7,9),16)/255;else return null;return isNaN(e)||isNaN(n)||isNaN(r)?null:{r:e,g:n,b:r,opacity:i}}function b0(t){const e=t.match(/rgba?\s*\(\s*(\d+(?:\.\d+)?%?)\s*[,\s]\s*(\d+(?:\.\d+)?%?)\s*[,\s]\s*(\d+(?:\.\d+)?%?)\s*(?:[,/]\s*(\d*\.?\d+%?))?\s*\)/i);if(!e)return null;const n=Bs(e[1]),r=Bs(e[2]),i=Bs(e[3]);let o=1;return e[4]!==void 0&&(o=fd(e[4])),n===null||r===null||i===null?null:{r:n,g:r,b:i,opacity:o}}function I0(t){const e=t.match(/hsla?\s*\(\s*(\d+(?:\.\d+)?)\s*[,\s]\s*(\d+(?:\.\d+)?)%\s*[,\s]\s*(\d+(?:\.\d+)?)%\s*(?:[,/]\s*(\d*\.?\d+%?))?\s*\)/i);if(!e)return null;const n=parseFloat(e[1]),r=parseFloat(e[2])/100,i=parseFloat(e[3])/100;let o=1;e[4]!==void 0&&(o=fd(e[4]));const{r:s,g:a,b:u}=M0(n,r,i);return{r:s,g:a,b:u,opacity:o}}function Bs(t){if(t.endsWith("%")){const n=parseFloat(t);return isNaN(n)?null:Math.round(n/100*255)}const e=parseFloat(t);return isNaN(e)?null:Math.min(255,Math.max(0,Math.round(e)))}function fd(t){return t.endsWith("%")?parseFloat(t)/100:parseFloat(t)}function M0(t,e,n){if(t=(t%360+360)%360,e===0)return{r:Math.round(n*255),g:Math.round(n*255),b:Math.round(n*255)};const r=(s,a,u)=>(u<0&&(u+=1),u>1&&(u-=1),u<1/6?s+(a-s)*6*u:u<1/2?a:u<2/3?s+(a-s)*(2/3-u)*6:s),i=n<.5?n*(1+e):n+e-n*e,o=2*n-i;return{r:Math.round(r(o,i,t/360+1/3)*255),g:Math.round(r(o,i,t/360)*255),b:Math.round(r(o,i,t/360-1/3)*255)}}function dd(t){if(!t||typeof t!="string")return null;const e=t.trim().toLowerCase();if(e.startsWith("#"))return C0(e);if(e.startsWith("rgb"))return b0(e);if(e.startsWith("hsl"))return I0(e);if(_l[e]){const[n,r,i]=_l[e];return{r:n,g:r,b:i,opacity:e==="transparent"?0:1}}return null}function vl(t,e,n){return{r:Math.round(t.r+(e.r-t.r)*n),g:Math.round(t.g+(e.g-t.g)*n),b:Math.round(t.b+(e.b-t.b)*n),opacity:t.opacity+(e.opacity-t.opacity)*n}}function Ns(t){return t.opacity===1?`rgb(${t.r}, ${t.g}, ${t.b})`:`rgba(${t.r}, ${t.g}, ${t.b}, ${t.opacity})`}function O0(t){if(!t||t.length===0)return()=>"rgb(0, 0, 0)";const e=t.map(r=>dd(r));if(e.length===1){const r=e[0]||{r:0,g:0,b:0,opacity:1};return()=>Ns(r)}if(e.length===2){const r=e[0]||{r:0,g:0,b:0,opacity:1},i=e[1]||{r:0,g:0,b:0,opacity:1};return o=>(o=Math.max(0,Math.min(1,o)),Ns(vl(r,i,o)))}const n=e.length-1;return r=>{r=Math.max(0,Math.min(1,r));const i=r*n,o=Math.min(Math.floor(i),n-1),s=i-o,a=e[o]||{r:0,g:0,b:0,opacity:1},u=e[o+1]||{r:0,g:0,b:0,opacity:1};return Ns(vl(a,u,s))}}var zr=new Map,ml=1e3;function Te(t){const e=zr.get(t);if(e!==void 0)return e;const n=dd(t),r=[0,0,0,0];if(n!=null&&(r[0]=n.r/255,r[1]=n.g/255,r[2]=n.b/255,r[3]=n.opacity),zr.size>=ml){const i=zr.keys(),o=Math.floor(ml/2);for(let s=0;s<o;s++){const a=i.next().value;a&&zr.delete(a)}}return zr.set(t,r.slice()),r}function zn(t){const e=t&&t[0],n=t&&t[1],r=t&&t[2];return e+n*256+r*65536-1}function xr(t){return[t+1&255,t+1>>8&255,t+1>>8>>8&255]}function pd(t){let e=window.document.createElement("canvas"),n=e.getContext("2d");e.width=256,e.height=1;let r=null;const i=n.createLinearGradient(0,0,256,1),o=t.positions[0],s=t.positions[t.positions.length-1];for(let a=0;a<t.colors.length;++a){const u=(t.positions[a]-o)/(s-o);i.addColorStop(u,t.colors[a])}return n.fillStyle=i,n.fillRect(0,0,256,1),r=new Uint8ClampedArray(n.getImageData(0,0,256,1).data),e=null,n=null,{data:r,width:256,height:1}}function P0(t,e){let n=window.document.createElement("canvas"),r=n.getContext("2d");n.width=256,n.height=1;const i=r.createLinearGradient(0,0,256,1),o=e[1]-e[0];for(let u=0;u<t.colors.length;++u){const l=Math.max((t.positions[u]-e[0])/o,0);i.addColorStop(l,t.colors[u])}r.fillStyle=i,r.fillRect(0,0,256,1);const s=r.getImageData(0,0,256,1).data,a=fu(r,s);return n=null,r=null,a}function F0(t){let e=window.document.createElement("canvas"),n=e.getContext("2d");e.width=256,e.height=1;const r=n.createImageData(256,1);return r.data.fill(0),t.positions.forEach((i,o)=>{const s=Te(t.colors[o]);r.data[i*4+0]=s[0]*255,r.data[i*4+1]=s[1]*255,r.data[i*4+2]=s[2]*255,r.data[i*4+3]=s[3]*255}),e=null,n=null,r}function B0(t){let e=window.document.createElement("canvas"),n=e.getContext("2d");n.globalAlpha=1,e.width=256,e.height=1;const r=256/t.colors.length;for(let s=0;s<t.colors.length;s++)n.beginPath(),n.lineWidth=2,n.strokeStyle=t.colors[s],n.moveTo(s*r,0),n.lineTo((s+1)*r,0),n.stroke();const i=n.getImageData(0,0,256,1).data,o=fu(n,i);return e=null,n=null,o}function N0(t,e){let n=window.document.createElement("canvas"),r=n.getContext("2d");r.globalAlpha=1,n.width=256,n.height=1;const i=e[1]-e[0];t.positions.length-t.colors.length!==1&&console.warn("positions 的数字个数应当比 colors 的样式多一个,poisitions 的首尾值一般为数据的最大最新值");for(let a=0;a<t.colors.length;a++)r.beginPath(),r.lineWidth=2,r.strokeStyle=t.colors[a],r.moveTo((t.positions[a]-e[0])/i*255,0),r.lineTo((t.positions[a+1]-e[0])/i*255,0),r.stroke();const o=r.getImageData(0,0,256,1).data,s=fu(r,o);return n=null,r=null,s}function fu(t,e){const n=t.createImageData(256,1);for(let r=0;r<n.data.length;r+=4)n.data[r+0]=e[r+0],n.data[r+1]=e[r+1],n.data[r+2]=e[r+2],n.data[r+3]=e[r+3];return n}function du(t){switch(t==null?void 0:t.type){case"cat":return[0,255];default:return[0,1]}}var D0=t=>t==null,w0=t=>typeof t=="string",L0=t=>typeof t=="number"&&!isNaN(t),U0=t=>typeof t=="boolean",k0=t=>typeof t=="function",_d=t=>typeof t=="object"&&t!==null,z0=t=>typeof t>"u",zo=t=>ArrayBuffer.isView(t)&&!(t instanceof DataView),Cn=t=>{if(!_d(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype},V0=(t,e,n)=>Math.min(Math.max(t,e),n),H0=t=>[...new Set(t)],X0=(t,...e)=>{const n=new Set(e);for(let r=t.length-1;r>=0;r--)n.has(t[r])&&t.splice(r,1);return t},W0=t=>t&&t.charAt(0).toUpperCase()+t.slice(1),j0=t=>t&&t.replace(/^[_.\- ]+/,"").replace(/[_.\- ]+(\w|$)/g,(e,n)=>n.toUpperCase()).replace(/[A-Z]/g,(e,n)=>n===0?e.toLowerCase():e),$0=0,Z0=(t="")=>`${t}${++$0}`,Y0=(t,e,n)=>{if(!t)return n;const r=Array.isArray(e)?e:e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean);let i=t;for(const o of r){if(i==null)return n;i=i[o]}return i===void 0?n:i},ur=t=>{if(typeof structuredClone=="function")try{return structuredClone(t)}catch{}if(t===null||typeof t!="object")return t;if(Array.isArray(t))return t.map(e=>ur(e));if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t.source,t.flags);if(t instanceof Map){const e=new Map;return t.forEach((n,r)=>e.set(ur(r),ur(n))),e}if(t instanceof Set){const e=new Set;return t.forEach(n=>e.add(ur(n))),e}if(zo(t))return t.slice();if(t instanceof ArrayBuffer)return t.slice(0);if(t instanceof DataView)return new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);if(Cn(t)){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=ur(t[n]));return e}return t},Ro=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||typeof e!="object")return!1;if(t===null||e===null)return t===e;if(Array.isArray(t)!==Array.isArray(e))return!1;if(Array.isArray(t)&&Array.isArray(e))return t.length!==e.length?!1:t.every((i,o)=>Ro(i,e[o]));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return t.source===e.source&&t.flags===e.flags;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[i,o]of t)if(!e.has(i)||!Ro(o,e.get(i)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0}if(zo(t)&&zo(e)){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n)if(!Object.prototype.hasOwnProperty.call(e,i)||!Ro(t[i],e[i]))return!1;return!0},ya=(t,...e)=>{const n=e.filter(i=>i!=null);if(!n.length)return t;const r=n.shift();if(Cn(t)&&Cn(r))for(const i in r)i==="__proto__"||i==="constructor"||i==="prototype"||(Cn(r[i])?(i in t||Object.assign(t,{[i]:{}}),ya(t[i],r[i])):Object.assign(t,{[i]:r[i]}));return ya(t,...n)},vd=(t,e,n)=>{const r=Array.isArray(e)?e:[e];for(const i of r)if(Cn(t)&&Cn(i))for(const o in i){if(o==="__proto__"||o==="constructor"||o==="prototype")continue;const s=t[o],a=i[o],u=n(s,a,o,t,i);u!==void 0?t[o]=u:Cn(a)?(o in t||(t[o]={}),vd(t[o],a,n)):t[o]=a}return t},G0=(t,e=0)=>{let n=null,r=null,i=null,o;const s=()=>{r&&(o=t.apply(i,r),r=null,i=null),n=null},a=function(...u){return r=u,i=this,n&&clearTimeout(n),n=setTimeout(s,e),o};return a.cancel=()=>{n&&(clearTimeout(n),n=null),r=null,i=null},a.flush=()=>(n&&r&&(o=t.apply(i,r)),a.cancel(),o),a},K0=(t,e=0)=>{let n=null,r=null,i=null,o=0,s;const a=()=>{r&&(s=t.apply(i,r),r=null,i=null)},u=function(...l){const c=Date.now(),h=c-o;return r=l,i=this,h>=e?(o=c,a()):n||(n=setTimeout(()=>{o=Date.now(),n=null,a()},e-h)),s};return u.cancel=()=>{n&&(clearTimeout(n),n=null),r=null,i=null,o=0},u.flush=()=>(a(),u.cancel(),s),u},q0=t=>{if(!t)return[void 0,void 0];let e,n,r=!1;for(const i of t)i==null||Number.isNaN(i)||(r?(i<e&&(e=i),i>n&&(n=i)):(e=i,n=i,r=!0));return[e,n]},we={isNil:D0,merge:ya,throttle:K0,isString:w0,debounce:G0,pull:X0,isTypedArray:zo,isPlainObject:Cn,isNumber:L0,isBoolean:U0,isEqual:Ro,cloneDeep:ur,uniq:H0,clamp:V0,upperFirst:W0,get:Y0,mergeWith:vd,isFunction:k0,isObject:_d,isUndefined:z0,camelCase:j0,uniqueId:Z0,extent:q0};function Q0(t){let e=t;return typeof t=="string"&&(e=window.document.getElementById(t)),e}function md(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function gd(t){return md(t).split(/\s+/)}function J0(t){var e;const n=(e=document==null?void 0:document.documentElement)==null?void 0:e.style;if(!n)return t[0];for(const r in t)if(t[r]&&t[r]in n)return t[r];return t[0]}function We(t,e,n){const r=window.document.createElement(t);return e&&(r.className=e||""),n&&n.appendChild(r),r}function sn(t){const e=t.parentNode;e&&e.removeChild(t)}function Vn(t,e){if(t.classList!==void 0){const n=gd(e);for(let r=0,i=n.length;r<i;r++)t.classList.add(n[r])}else if(!ev(t,e)){const n=pu(t);Ed(t,(n?n+" ":"")+e)}}function Vo(t,e){t.classList!==void 0?gd(e).forEach(r=>{t.classList.remove(r)}):Ed(t,md((" "+pu(t)+" ").replace(" "+e+" "," ")))}function ev(t,e){if(t.classList!==void 0)return t.classList.contains(e);const n=pu(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)}function Ed(t,e){t instanceof HTMLElement?t.className=e:t.className.baseVal=e}function pu(t){return t instanceof SVGElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}var tv=J0(["transform","WebkitTransform"]);function nv(t,e){t.style[tv]=e}function rv(){var t;const e=window.document.querySelector('meta[name="viewport"]');if(!e)return 1;const r=((t=e.content)==null?void 0:t.split(",")).find(i=>{const[o]=i.split("=");return o==="initial-scale"});return r?r.split("=")[1]*1:1}var ut=rv()<1?1:window.devicePixelRatio;function yd(t,e){t.setAttribute("style",`${t.style.cssText}${e}`)}function iv(t){return Object.entries(t).map(([e,n])=>`${e}: ${n}`).join(";")}function ov(t,e){return{left:t.left-e.left,top:t.top-e.top,right:e.left+e.width-t.left-t.width,bottom:e.top+e.height-t.top-t.height}}function _u(t){t.innerHTML=""}function sv(t){t.setAttribute("draggable","false")}function gl(t,e){if(typeof e=="string"){const n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)t.append(n.firstChild)}else Array.isArray(e)?t.append(...e):t.append(e)}function av(t,e){var n;const r=Array.isArray(e)?e:[e];let i=t;for(;i instanceof Element&&i!==window.document.body;){if(r.find(o=>i==null?void 0:i.matches(o)))return i;i=(n=i==null?void 0:i.parentElement)!=null?n:null}}function uv(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap}var Ta=navigator==null?void 0:navigator.userAgent;Ta.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);Ta.indexOf("Android")>-1||Ta.indexOf("Adr")>-1;function Ai(t,e,n){n===void 0&&(n={});var r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function vu(t,e,n){n===void 0&&(n={});for(var r=0,i=t;r<i.length;r++){var o=i[r];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<o[o.length-1].length;s++)if(o[o.length-1][s]!==o[0][s])throw new Error("First and last Position are not equivalent.")}var a={type:"Polygon",coordinates:t};return Ai(a,e,n)}function lv(t,e,n){if(n===void 0&&(n={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var r={type:"LineString",coordinates:t};return Ai(r,e,n)}function cv(t,e){e===void 0&&(e={});var n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function hv(t,e,n){n===void 0&&(n={});var r={type:"MultiPolygon",coordinates:t};return Ai(r,e,n)}function Td(t,e,n){if(t!==null)for(var r,i,o,s,a,u,l,c=0,h=0,f,p=t.type,_=p==="FeatureCollection",v=p==="Feature",m=_?t.features.length:1,y=0;y<m;y++){l=_?t.features[y].geometry:v?t.geometry:t,f=l?l.type==="GeometryCollection":!1,a=f?l.geometries.length:1;for(var T=0;T<a;T++){var S=0,x=0;if(s=f?l.geometries[T]:l,s!==null){u=s.coordinates;var C=s.type;switch(c=0,C){case null:break;case"Point":if(e(u,h,y,S,x)===!1)return!1;h++,S++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],h,y,S,x)===!1)return!1;h++,C==="MultiPoint"&&S++}C==="LineString"&&S++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-c;i++){if(e(u[r][i],h,y,S,x)===!1)return!1;h++}C==="MultiLineString"&&S++,C==="Polygon"&&x++}C==="Polygon"&&S++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(x=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-c;o++){if(e(u[r][i][o],h,y,S,x)===!1)return!1;h++}x++}S++}break;case"GeometryCollection":for(r=0;r<s.geometries.length;r++)if(Td(s.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function fv(t,e){var n,r,i,o,s,a,u,l,c,h,f=0,p=t.type==="FeatureCollection",_=t.type==="Feature",v=p?t.features.length:1;for(n=0;n<v;n++){for(a=p?t.features[n].geometry:_?t.geometry:t,l=p?t.features[n].properties:_?t.properties:{},c=p?t.features[n].bbox:_?t.bbox:void 0,h=p?t.features[n].id:_?t.id:void 0,u=a?a.type==="GeometryCollection":!1,s=u?a.geometries.length:1,i=0;i<s;i++){if(o=u?a.geometries[i]:a,o===null){if(e(null,f,l,c,h)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,f,l,c,h)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],f,l,c,h)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}f++}}function Ad(t,e){fv(t,function(n,r,i,o,s){var a=n===null?null:n.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return e(Ai(n,i,{bbox:o,id:s}),r,0)===!1?!1:void 0}var u;switch(a){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var l=0;l<n.coordinates.length;l++){var c=n.coordinates[l],h={type:u,coordinates:c};if(e(Ai(h,i),r,l)===!1)return!1}})}function Aa(t){var e=[1/0,1/0,-1/0,-1/0];return Td(t,function(n){e[0]>n[0]&&(e[0]=n[0]),e[1]>n[1]&&(e[1]=n[1]),e[2]<n[0]&&(e[2]=n[0]),e[3]<n[1]&&(e[3]=n[1])}),e}Aa.default=Aa;function Ds(t){return typeof t=="number"}function ke(t){return t-Math.fround(t)}var El=2*Math.PI*6378137/2;function dv(t,e){const[n,r,i,o]=e;return t.lng>n&&t.lng<=i&&t.lat>r&&t.lat<=o}function pv(t){const e=[1/0,1/0,-1/0,-1/0];return t.forEach(n=>{const{coordinates:r}=n;Sd(e,r)}),e}function Sd(t,e){return Array.isArray(e[0])?e.forEach(n=>{Sd(t,n)}):(t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])),t}function xo(t,e=!0,n={enable:!0,decimal:1}){t=mv(t,e);const r=t[0],i=t[1];let o=r*El/180,s=Math.log(Math.tan((90+i)*Math.PI/360))/(Math.PI/180);return s=s*El/180,n.enable&&(o=Number(o.toFixed(n.decimal)),s=Number(s.toFixed(n.decimal))),t.length===3?[o,s,t[2]]:[o,s]}function _v(t){if(t==null)throw new Error("lng is required");return(t>180||t<-180)&&(t=t%360,t>180&&(t=-360+t),t<-180&&(t=360+t),t===0&&(t=0)),t}function vv(t){if(t==null)throw new Error("lat is required");return(t>90||t<-90)&&(t=t%180,t>90&&(t=-180+t),t<-90&&(t=180+t),t===0&&(t=0)),t}function mv(t,e){if(e===!1)return t;const n=_v(t[0]);let r=vv(t[1]);return r>85&&(r=85),r<-85&&(r=-85),t.length===3?[n,r,t[2]]:[n,r]}function Rt(t){const e=85.0511287798,n=Math.max(Math.min(e,t[1]),-e),r=256<<20;let i=Math.PI/180,o=t[0]*i,s=n*i;s=Math.log(Math.tan(Math.PI/4+s/2));const a=.5/Math.PI,u=.5,l=-.5/Math.PI;return i=.5,o=r*(a*o+u),s=r*(l*s+i),[Math.floor(o),Math.floor(s)]}function hs(t,e){const n=Math.abs(t[1][1]-t[0][1])*e,r=Math.abs(t[1][0]-t[0][0])*e;return[[t[0][0]-r,t[0][1]-n],[t[1][0]+r,t[1][1]+n]]}function mu(t,e){return t[0][0]<=e[0][0]&&t[0][1]<=e[0][1]&&t[1][0]>=e[1][0]&&t[1][1]>=e[1][1]}function Ho(t){return[[t[0],t[1]],[t[2],t[3]]]}function gv(t){const e=Ev(t,[0,0]);return[t[0]/e,t[1]/e]}function Ev(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function On(t){if(Ds(t[0]))return t;if(Ds(t[0][0]))throw new Error("当前数据不支持标注");if(Ds(t[0][0][0])){const e=t;let n=0,r=0,i=0;return e.forEach(o=>{o.forEach(s=>{n+=s[0],r+=s[1],i++})}),[n/i,r/i,0]}else throw new Error("当前数据不支持标注")}function yv(t){let e=t[0],n=t[1],r=t[0],i=t[1],o=0,s=0,a=0;for(let u=0;u<t.length;u+=2){const l=t[u],c=t[u+1];l&&c&&(e=Math.max(l,e),n=Math.max(c,n),r=Math.min(l,r),i=Math.min(c,i),o+=l,s+=c,a++)}return{center:[o/a,s/a],radius:Math.sqrt(Math.pow(e-r,2)+Math.pow(n-i,2))/2}}function Tv(t){return Aa(cv([lv(t)]))}function Av(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}var Sv=class{constructor(t=50,e){this.limit=t,this.destroy=e||this.defaultDestroy,this.order=[],this.clear()}clear(){this.order.forEach(t=>{this.delete(t)}),this.cache={},this.order=[]}get(t){const e=this.cache[t];return e&&(this.deleteOrder(t),this.appendOrder(t)),e}set(t,e){this.cache[t]?(this.delete(t),this.cache[t]=e,this.appendOrder(t)):(Object.keys(this.cache).length===this.limit&&this.delete(this.order[0]),this.cache[t]=e,this.appendOrder(t))}delete(t){const e=this.cache[t];e&&(this.deleteCache(t),this.deleteOrder(t),this.destroy(e,t))}deleteCache(t){delete this.cache[t]}deleteOrder(t){const e=this.order.findIndex(n=>n===t);e>=0&&this.order.splice(e,1)}appendOrder(t){this.order.push(t)}defaultDestroy(t,e){return null}};function Rv(t){if(t.length===0)throw new Error("max requires at least one data point");let e=t[0];for(let n=1;n<t.length;n++)t[n]>e&&(e=t[n]);return e*1}function xv(t){if(t.length===0)throw new Error("min requires at least one data point");let e=t[0];for(let n=1;n<t.length;n++)t[n]<e&&(e=t[n]);return e*1}function Rd(t){if(t.length===0)return 0;let e=t[0]*1;for(let n=1;n<t.length;n++)e+=t[n]*1;return e}function Cv(t){if(t.length===0)throw new Error("mean requires at least one data point");return Rd(t)/t.length}function bv(t){if(t.length===0)throw new Error("mean requires at least one data point");if(t.length<3)return t[0];t.sort();let e=t[0],n=NaN,r=0,i=1;for(let o=1;o<t.length+1;o++)t[o]!==e?(i>r&&(r=i,n=e),i=1,e=t[o]):i++;return n*1}function Iv(t){return t.length}var xd={min:xv,max:Rv,mean:Cv,sum:Rd,mode:bv,count:Iv};function Cd(t,e){return t.map(n=>n[e])}function Mv(t,e){e===void 0&&(e={});var n=Number(t[0]),r=Number(t[1]),i=Number(t[2]),o=Number(t[3]);if(t.length===6)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var s=[n,r],a=[n,o],u=[i,o],l=[i,r];return vu([[s,l,u,a,s]],e.properties,{bbox:t,id:e.id})}var Ov=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bd={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(u,l,c){this.fn=u,this.context=l,this.once=c||!1}function o(u,l,c,h,f){if(typeof c!="function")throw new TypeError("The listener must be a function");var p=new i(c,h||u,f),_=n?n+l:l;return u._events[_]?u._events[_].fn?u._events[_]=[u._events[_],p]:u._events[_].push(p):(u._events[_]=p,u._eventsCount++),u}function s(u,l){--u._eventsCount===0?u._events=new r:delete u._events[l]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],c,h;if(this._eventsCount===0)return l;for(h in c=this._events)e.call(c,h)&&l.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},a.prototype.listeners=function(l){var c=n?n+l:l,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,p=h.length,_=new Array(p);f<p;f++)_[f]=h[f].fn;return _},a.prototype.listenerCount=function(l){var c=n?n+l:l,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(l,c,h,f,p,_){var v=n?n+l:l;if(!this._events[v])return!1;var m=this._events[v],y=arguments.length,T,S;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,f),!0;case 5:return m.fn.call(m.context,c,h,f,p),!0;case 6:return m.fn.call(m.context,c,h,f,p,_),!0}for(S=1,T=new Array(y-1);S<y;S++)T[S-1]=arguments[S];m.fn.apply(m.context,T)}else{var x=m.length,C;for(S=0;S<x;S++)switch(m[S].once&&this.removeListener(l,m[S].fn,void 0,!0),y){case 1:m[S].fn.call(m[S].context);break;case 2:m[S].fn.call(m[S].context,c);break;case 3:m[S].fn.call(m[S].context,c,h);break;case 4:m[S].fn.call(m[S].context,c,h,f);break;default:if(!T)for(C=1,T=new Array(y-1);C<y;C++)T[C-1]=arguments[C];m[S].fn.apply(m[S].context,T)}}return!0},a.prototype.on=function(l,c,h){return o(this,l,c,h,!1)},a.prototype.once=function(l,c,h){return o(this,l,c,h,!0)},a.prototype.removeListener=function(l,c,h,f){var p=n?n+l:l;if(!this._events[p])return this;if(!c)return s(this,p),this;var _=this._events[p];if(_.fn)_.fn===c&&(!f||_.once)&&(!h||_.context===h)&&s(this,p);else{for(var v=0,m=[],y=_.length;v<y;v++)(_[v].fn!==c||f&&!_[v].once||h&&_[v].context!==h)&&m.push(_[v]);m.length?this._events[p]=m.length===1?m[0]:m:s(this,p)}return this},a.prototype.removeAllListeners=function(l){var c;return l?(c=n?n+l:l,this._events[c]&&s(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(bd);var pt=bd.exports;const gu=Yt(pt);var di=(t=>(t.Realtime="realtime",t.Overlap="overlap",t.Replace="replace",t))(di||{}),Tt=(t=>(t.Loading="Loading",t.Loaded="Loaded",t.Failure="Failure",t.Cancelled="Cancelled",t))(Tt||{}),Id=0,yl=1,fs=2;function Pv(t){t.forEach(e=>{e.isCurrent&&(e.isVisible=e.isLoaded)})}function Fv(t){t.forEach(e=>{e.properties.state=Id}),t.forEach(e=>{e.isCurrent&&!Md(e)&&Eu(e)}),t.forEach(e=>{e.isVisible=!!(e.properties.state&fs)})}function Bv(t){t.forEach(n=>{n.properties.state=Id}),t.forEach(n=>{n.isCurrent&&Md(n)}),t.slice().sort((n,r)=>n.z-r.z).forEach(n=>{n.isVisible=!!(n.properties.state&fs),n.children.length&&(n.isVisible||n.properties.state&yl)?n.children.forEach(r=>{r.properties.state=yl}):n.isCurrent&&Eu(n)})}function Md(t){for(;t;){if(t.isLoaded)return t.properties.state|=fs,!0;t=t.parent}return!1}function Eu(t){t.children.forEach(e=>{e.isLoaded?e.properties.state|=fs:Eu(e)})}var Od=[-1/0,-1/0,1/0,1/0],Nv=.2,Dv=5,wv={[di.Realtime]:Pv,[di.Overlap]:Fv,[di.Replace]:Bv},Lv=()=>{};function Sa(t,e,n){const r=Math.floor((t+180)/360*Math.pow(2,n)),i=Math.floor((1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,n));return[r,i]}function Tl(t,e,n){const r=t/Math.pow(2,n)*360-180,i=Math.PI-2*Math.PI*e/Math.pow(2,n),o=180/Math.PI*Math.atan(.5*(Math.exp(i)-Math.exp(-i)));return[r,o]}var Pd=(t,e,n)=>{const[r,i]=Tl(t,e,n),[o,s]=Tl(t+1,e+1,n);return[r,s,o,i]};function Uv({zoom:t,latLonBounds:e,maxZoom:n=1/0,minZoom:r=0,zoomOffset:i=0,extent:o=Od}){let s=Math.ceil(t)+i;if(Number.isFinite(r)&&s<r)return[];Number.isFinite(n)&&s>n&&(s=n);const[a,u,l,c]=e,h=[Math.max(a,o[0]),Math.max(u,o[1]),Math.min(l,o[2]),Math.min(c,o[3])],f=[],[p,_]=Sa(h[0],h[1],s),[v,m]=Sa(h[2],h[3],s);for(let x=p;x<=v;x++)for(let C=m;C<=_;C++)f.push({x,y:C,z:s});const y=(v+p)/2,T=(_+m)/2,S=(x,C)=>Math.abs(x-y)+Math.abs(C-T);return f.sort((x,C)=>S(x.x,x.y)-S(C.x,C.y)),f}var kv=(t,e,n,r=!0)=>{const i=Math.pow(2,n),o=i-1,s=i;let a=t;const u=e;return r&&(a<0?a=a+s:a>o&&(a=a%s)),{warpX:a,warpY:u}},zv=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),Vv=class extends pt.EventEmitter{constructor(t){super(),this.tileSize=256,this.isVisible=!1,this.isCurrent=!1,this.isVisibleChange=!1,this.loadedLayers=0,this.isLayerLoaded=!1,this.isLoad=!1,this.isChildLoad=!1,this.parent=null,this.children=[],this.data=null,this.properties={},this.loadDataId=0,this._bounds=null,this._bboxPolygon=null;const{x:e,y:n,z:r,tileSize:i,warp:o=!0}=t;this.x=e,this.y=n,this.z=r,this.warp=o||!0,this.tileSize=i}get isLoading(){return this.loadStatus===Tt.Loading}get isLoaded(){return this.loadStatus===Tt.Loaded}get isFailure(){return this.loadStatus===Tt.Failure}setTileLayerLoaded(){this.isLayerLoaded=!0}get isCancelled(){return this.loadStatus===Tt.Cancelled}get isDone(){return[Tt.Loaded,Tt.Cancelled,Tt.Failure].includes(this.loadStatus)}get bounds(){return this._bounds||(this._bounds=Pd(this.x,this.y,this.z)),this._bounds}get bboxPolygon(){if(!this._bboxPolygon){const[t,e,n,r]=this.bounds,i=[(n-t)/2,(r-e)/2];this._bboxPolygon=Mv(this.bounds,{properties:{key:this.key,id:this.key,bbox:this.bounds,center:i,meta:`
      ${this.key}
      `}})}return this._bboxPolygon}get key(){return`${this.x}_${this.y}_${this.z}`}layerLoad(){this.loadedLayers++,this.emit("layerLoaded")}loadData(t){return zv(this,arguments,function*({getData:e,onLoad:n,onError:r}){this.loadDataId++;const i=this.loadDataId;this.isLoading&&this.abortLoad(),this.abortController=new AbortController,this.loadStatus=Tt.Loading;let o=null,s;try{const{x:a,y:u,z:l,bounds:c,tileSize:h,warp:f}=this,{warpX:p,warpY:_}=kv(a,u,l,f),{signal:v}=this.abortController;o=yield e({x:p,y:_,z:l,bounds:c,tileSize:h,signal:v,warp:f},this)}catch(a){s=a}if(i===this.loadDataId&&!(this.isCancelled&&!o)){if(s||!o){this.loadStatus=Tt.Failure,r(s,this);return}this.loadStatus=Tt.Loaded,this.data=o,n(this)}})}reloadData(t){this.isLoading&&this.abortLoad(),this.loadData(t)}abortLoad(){this.isLoaded||this.isCancelled||(this.loadStatus=Tt.Cancelled,this.abortController.abort(),this.xhrCancel&&this.xhrCancel())}},Hv=(t,e)=>{const n=Ho(t),r=hs(n,e),i=360*3-180,o=85.0511287798065;return[Math.max(r[0][0],-i),Math.max(r[0][1],-o),Math.min(r[1][0],i),Math.min(r[1][1],o)]},Xv=(t,e)=>{const n=Ho(t),r=Ho(e);return mu(n,r)},Wv=Object.defineProperty,jv=Object.defineProperties,$v=Object.getOwnPropertyDescriptors,Al=Object.getOwnPropertySymbols,Zv=Object.prototype.hasOwnProperty,Yv=Object.prototype.propertyIsEnumerable,Sl=(t,e,n)=>e in t?Wv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Rl=(t,e)=>{for(var n in e||(e={}))Zv.call(e,n)&&Sl(t,n,e[n]);if(Al)for(var n of Al(e))Yv.call(e,n)&&Sl(t,n,e[n]);return t},Gv=(t,e)=>jv(t,$v(e)),{throttle:Kv}=we,qv=class extends gu{constructor(t){super(),this.sortedTilesCache=[],this.tilesCacheDirty=!0,this.currentTiles=[],this.currentTilesKeySet=new Set,this.cacheTiles=new Map,this.throttleUpdate=Kv((e,n)=>{this.update(e,n)},16),this.onTileLoad=e=>{this.emit("tile-loaded",e),this.updateTileVisible(),this.loadFinished()},this.onTileError=(e,n)=>{this.emit("tile-error",{error:e,tile:n}),this.updateTileVisible(),this.loadFinished()},this.onTileUnload=e=>{this.emit("tile-unload",e),this.loadFinished()},this.options={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,extent:Od,getTileData:Lv,warp:!0,updateStrategy:di.Replace},this.updateOptions(t)}get isLoaded(){return this.currentTiles.every(t=>t.isDone)}get tiles(){return this.tilesCacheDirty&&(this.sortedTilesCache=Array.from(this.cacheTiles.values()).sort((t,e)=>t.z-e.z),this.tilesCacheDirty=!1),this.sortedTilesCache}updateOptions(t){const e=t.minZoom===void 0?this.options.minZoom:Math.ceil(t.minZoom),n=t.maxZoom===void 0?this.options.maxZoom:Math.floor(t.maxZoom);this.options=Gv(Rl(Rl({},this.options),t),{minZoom:e,maxZoom:n})}update(t,e){const n=Math.max(0,Math.ceil(t));if(this.lastViewStates&&this.lastViewStates.zoom===n&&Xv(this.lastViewStates.latLonBoundsBuffer,e))return;const r=Hv(e,Nv);this.lastViewStates={zoom:n,latLonBounds:e,latLonBoundsBuffer:r},this.currentZoom=n;let i=!1;const o=this.getTileIndices(n,r).filter(s=>this.options.warp||s.x>=0&&s.x<Math.pow(2,n));this.emit("tiles-load-start"),this.currentTiles=o.map(({x:s,y:a,z:u})=>{let l=this.getTile(s,a,u);return l?(((l==null?void 0:l.isFailure)||(l==null?void 0:l.isCancelled))&&l.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}),l):(l=this.createTile(s,a,u),i=!0,l)}),this.currentTilesKeySet=new Set(this.currentTiles.map(s=>s.key)),i&&(this.tilesCacheDirty=!0,this.resizeCacheTiles()),this.updateTileVisible(),this.pruneRequests()}reloadAll(){for(const[t,e]of this.cacheTiles){if(!this.currentTilesKeySet.has(e.key)){this.cacheTiles.delete(t),this.onTileUnload(e);return}this.onTileUnload(e),e.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError})}}reloadTileById(t,e,n){const r=this.cacheTiles.get(`${e},${n},${t}`);r&&(this.onTileUnload(r),r.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}))}reloadTileByLnglat(t,e,n){const r=this.getTileByLngLat(t,e,n);r&&this.reloadTileById(r.z,r.x,r.y)}reloadTileByExtent(t,e){this.getTileIndices(e,t).forEach(r=>{this.reloadTileById(r.z,r.x,r.y)})}pruneRequests(){const t=[];for(const e of this.cacheTiles.values())e.isLoading&&!e.isCurrent&&!e.isVisible&&t.push(e);for(;t.length>0;)t.shift().abortLoad()}getTileByLngLat(t,e,n){const{zoomOffset:r}=this.options,i=Math.ceil(n)+r,o=Sa(t,e,i);return this.tiles.filter(a=>a.key===`${o[0]}_${o[1]}_${i}`)[0]}getTileExtent(t,e){return this.getTileIndices(e,t)}getTileByZXY(t,e,n){return this.tiles.filter(i=>i.key===`${e}_${n}_${t}`)[0]}clear(){for(const t of this.cacheTiles.values())t.isLoading?t.abortLoad():this.onTileUnload(t);this.lastViewStates=void 0,this.cacheTiles.clear(),this.currentTiles=[],this.currentTilesKeySet.clear(),this.sortedTilesCache=[],this.tilesCacheDirty=!0}destroy(){this.clear(),this.removeAllListeners()}updateTileVisible(){const t=this.options.updateStrategy;let e=!1;const n=[],r=new Map;for(const i of this.cacheTiles.values())r.set(i.key,i.isVisible),i.isCurrent=!1,i.isVisible=!1,n.push(i);for(const i of this.currentTiles)i.isCurrent=!0,i.isVisible=!0;typeof t=="function"?t(n):wv[t](n);for(const i of n)i.isVisible!==r.get(i.key)?(i.isVisibleChange=!0,e=!0):i.isVisibleChange=!1;e&&this.emit("tile-update")}getTileIndices(t,e){const{tileSize:n,extent:r,zoomOffset:i}=this.options,o=Math.floor(this.options.maxZoom),s=Math.ceil(this.options.minZoom);return Uv({maxZoom:o,minZoom:s,zoomOffset:i,zoom:t,latLonBounds:e,extent:r})}getTileId(t,e,n){return`${t},${e},${n}`}loadFinished(){const t=!this.currentTiles.some(e=>!e.isDone);return t&&this.emit("tiles-load-finished"),t}getTile(t,e,n){const r=this.getTileId(t,e,n);return this.cacheTiles.get(r)}createTile(t,e,n){const r=this.getTileId(t,e,n),i=new Vv({x:t,y:e,z:n,tileSize:this.options.tileSize,warp:this.options.warp});return this.cacheTiles.set(r,i),this.tilesCacheDirty=!0,i.loadData({getData:this.options.getTileData,onLoad:this.onTileLoad,onError:this.onTileError}),i}resizeCacheTiles(){const t=Dv*this.currentTiles.length;if(this.cacheTiles.size>t){for(const[n,r]of this.cacheTiles)if(!r.isVisible&&!this.currentTilesKeySet.has(r.key)&&(this.cacheTiles.delete(n),this.onTileUnload(r)),this.cacheTiles.size<=t)break}this.rebuildTileTree()}rebuildTileTree(){for(const t of this.cacheTiles.values())t.parent=null,t.children.length=0;for(const t of this.cacheTiles.values()){const e=this.getNearestAncestor(t.x,t.y,t.z);t.parent=e,e!=null&&e.children&&e.children.push(t)}}getNearestAncestor(t,e,n){for(;n>this.options.minZoom;){t=Math.floor(t/2),e=Math.floor(e/2),n=n-1;const r=this.getTile(t,e,n);if(r)return r}return null}};function Fd(t){const e=[];let n=/\{([a-z])-([a-z])\}/.exec(t);if(n){const r=n[1].charCodeAt(0),i=n[2].charCodeAt(0);let o;for(o=r;o<=i;++o)e.push(t.replace(n[0],String.fromCharCode(o)));return e}if(n=/\{(\d+)-(\d+)\}/.exec(t),n){const r=parseInt(n[2],10);for(let i=parseInt(n[1],10);i<=r;i++)e.push(t.replace(n[0],i.toString()));return e}return e.push(t),e}function mr(t,e){if(!t||!t.length)throw new Error("url is not allowed to be empty");const{x:n,y:r,z:i}=e,o=Fd(t),s=Math.abs(n+r)%o.length;return(lu(o[s])?`${o[s]}/{z}/{x}/{y}`:o[s]).replace(/\{x\}/g,n.toString()).replace(/\{y\}/g,r.toString()).replace(/\{z\}/g,i.toString()).replace(/\{bbox\}/g,Pd(n,r,i).join(",")).replace(/\{-y\}/g,(Math.pow(2,i)-r-1).toString())}function Qv(t,e){const{x:n,y:r,z:i,layer:o,version:s="1.0.0",style:a="default",format:u,service:l="WMTS",tileMatrixset:c}=e,h=Fd(t),f=Math.abs(n+r)%h.length;return`${h[f]}&SERVICE=${l}&REQUEST=GetTile&VERSION=${s}&LAYER=${o}&STYLE=${a}&TILEMATRIXSET=${c}&FORMAT=${u}&TILECOL=${n}&TILEROW=${r}&TILEMATRIX=${i}`}function Vr(t,e){return t??e}var Bd={},Nd={},xl=t=>Nd[t],mt=(t,e)=>{Nd[t]=e},Jv=t=>Bd[t],Fr=(t,e)=>{Bd[t]=e},Dd={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ov,function(){function n(B,O,N,U,z,W){if(!(z-U<=N)){var Y=U+z>>1;r(B,O,Y,U,z,W%2),n(B,O,N,U,Y-1,W+1),n(B,O,N,Y+1,z,W+1)}}function r(B,O,N,U,z,W){for(;z>U;){if(z-U>600){var Y=z-U+1,j=N-U+1,te=Math.log(Y),J=.5*Math.exp(2*te/3),Q=.5*Math.sqrt(te*J*(Y-J)/Y)*(j-Y/2<0?-1:1),se=Math.max(U,Math.floor(N-j*J/Y+Q)),ue=Math.min(z,Math.floor(N+(Y-j)*J/Y+Q));r(B,O,N,se,ue,W)}var ce=O[2*N+W],de=U,re=z;for(i(B,O,U,N),O[2*z+W]>ce&&i(B,O,U,z);de<re;){for(i(B,O,de,re),de++,re--;O[2*de+W]<ce;)de++;for(;O[2*re+W]>ce;)re--}O[2*U+W]===ce?i(B,O,U,re):(re++,i(B,O,re,z)),re<=N&&(U=re+1),N<=re&&(z=re-1)}}function i(B,O,N,U){o(B,N,U),o(O,2*N,2*U),o(O,2*N+1,2*U+1)}function o(B,O,N){var U=B[O];B[O]=B[N],B[N]=U}function s(B,O,N,U,z,W,Y){for(var j=[0,B.length-1,0],te=[],J,Q;j.length;){var se=j.pop(),ue=j.pop(),ce=j.pop();if(ue-ce<=Y){for(var de=ce;de<=ue;de++)J=O[2*de],Q=O[2*de+1],J>=N&&J<=z&&Q>=U&&Q<=W&&te.push(B[de]);continue}var re=Math.floor((ce+ue)/2);J=O[2*re],Q=O[2*re+1],J>=N&&J<=z&&Q>=U&&Q<=W&&te.push(B[re]);var Re=(se+1)%2;(se===0?N<=J:U<=Q)&&(j.push(ce),j.push(re-1),j.push(Re)),(se===0?z>=J:W>=Q)&&(j.push(re+1),j.push(ue),j.push(Re))}return te}function a(B,O,N,U,z,W){for(var Y=[0,B.length-1,0],j=[],te=z*z;Y.length;){var J=Y.pop(),Q=Y.pop(),se=Y.pop();if(Q-se<=W){for(var ue=se;ue<=Q;ue++)u(O[2*ue],O[2*ue+1],N,U)<=te&&j.push(B[ue]);continue}var ce=Math.floor((se+Q)/2),de=O[2*ce],re=O[2*ce+1];u(de,re,N,U)<=te&&j.push(B[ce]);var Re=(J+1)%2;(J===0?N-z<=de:U-z<=re)&&(Y.push(se),Y.push(ce-1),Y.push(Re)),(J===0?N+z>=de:U+z>=re)&&(Y.push(ce+1),Y.push(Q),Y.push(Re))}return j}function u(B,O,N,U){var z=B-N,W=O-U;return z*z+W*W}var l=function(B){return B[0]},c=function(B){return B[1]},h=function(O,N,U,z,W){N===void 0&&(N=l),U===void 0&&(U=c),z===void 0&&(z=64),W===void 0&&(W=Float64Array),this.nodeSize=z,this.points=O;for(var Y=O.length<65536?Uint16Array:Uint32Array,j=this.ids=new Y(O.length),te=this.coords=new W(O.length*2),J=0;J<O.length;J++)j[J]=J,te[2*J]=N(O[J]),te[2*J+1]=U(O[J]);n(j,te,z,0,j.length-1,0)};h.prototype.range=function(O,N,U,z){return s(this.ids,this.coords,O,N,U,z,this.nodeSize)},h.prototype.within=function(O,N,U){return a(this.ids,this.coords,O,N,U,this.nodeSize)};var f={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(B){return B}},p=Math.fround||function(B){return function(O){return B[0]=+O,B[0]}}(new Float32Array(1)),_=function(O){this.options=P(Object.create(f),O),this.trees=new Array(this.options.maxZoom+1)};_.prototype.load=function(O){var N=this.options,U=N.log,z=N.minZoom,W=N.maxZoom,Y=N.nodeSize;U&&console.time("total time");var j="prepare "+O.length+" points";U&&console.time(j),this.points=O;for(var te=[],J=0;J<O.length;J++)O[J].geometry&&te.push(m(O[J],J));this.trees[W+1]=new h(te,F,V,Y,Float32Array),U&&console.timeEnd(j);for(var Q=W;Q>=z;Q--){var se=+Date.now();te=this._cluster(te,Q),this.trees[Q]=new h(te,F,V,Y,Float32Array),U&&console.log("z%d: %d clusters in %dms",Q,te.length,+Date.now()-se)}return U&&console.timeEnd("total time"),this},_.prototype.getClusters=function(O,N){var U=((O[0]+180)%360+360)%360-180,z=Math.max(-90,Math.min(90,O[1])),W=O[2]===180?180:((O[2]+180)%360+360)%360-180,Y=Math.max(-90,Math.min(90,O[3]));if(O[2]-O[0]>=360)U=-180,W=180;else if(U>W){var j=this.getClusters([U,z,180,Y],N),te=this.getClusters([-180,z,W,Y],N);return j.concat(te)}for(var J=this.trees[this._limitZoom(N)],Q=J.range(S(U),x(Y),S(W),x(z)),se=[],ue=0,ce=Q;ue<ce.length;ue+=1){var de=ce[ue],re=J.points[de];se.push(re.numPoints?y(re):this.points[re.index])}return se},_.prototype.getChildren=function(O){var N=this._getOriginId(O),U=this._getOriginZoom(O),z="No cluster with the specified id.",W=this.trees[U];if(!W)throw new Error(z);var Y=W.points[N];if(!Y)throw new Error(z);for(var j=this.options.radius/(this.options.extent*Math.pow(2,U-1)),te=W.within(Y.x,Y.y,j),J=[],Q=0,se=te;Q<se.length;Q+=1){var ue=se[Q],ce=W.points[ue];ce.parentId===O&&J.push(ce.numPoints?y(ce):this.points[ce.index])}if(J.length===0)throw new Error(z);return J},_.prototype.getLeaves=function(O,N,U){N=N||10,U=U||0;var z=[];return this._appendLeaves(z,O,N,U,0),z},_.prototype.getTile=function(O,N,U){var z=this.trees[this._limitZoom(O)],W=Math.pow(2,O),Y=this.options,j=Y.extent,te=Y.radius,J=te/j,Q=(U-J)/W,se=(U+1+J)/W,ue={features:[]};return this._addTileFeatures(z.range((N-J)/W,Q,(N+1+J)/W,se),z.points,N,U,W,ue),N===0&&this._addTileFeatures(z.range(1-J/W,Q,1,se),z.points,W,U,W,ue),N===W-1&&this._addTileFeatures(z.range(0,Q,J/W,se),z.points,-1,U,W,ue),ue.features.length?ue:null},_.prototype.getClusterExpansionZoom=function(O){for(var N=this._getOriginZoom(O)-1;N<=this.options.maxZoom;){var U=this.getChildren(O);if(N++,U.length!==1)break;O=U[0].properties.cluster_id}return N},_.prototype._appendLeaves=function(O,N,U,z,W){for(var Y=this.getChildren(N),j=0,te=Y;j<te.length;j+=1){var J=te[j],Q=J.properties;if(Q&&Q.cluster?W+Q.point_count<=z?W+=Q.point_count:W=this._appendLeaves(O,Q.cluster_id,U,z,W):W<z?W++:O.push(J),O.length===U)break}return W},_.prototype._addTileFeatures=function(O,N,U,z,W,Y){for(var j=0,te=O;j<te.length;j+=1){var J=te[j],Q=N[J],se=Q.numPoints,ue=void 0,ce=void 0,de=void 0;if(se)ue=T(Q),ce=Q.x,de=Q.y;else{var re=this.points[Q.index];ue=re.properties,ce=S(re.geometry.coordinates[0]),de=x(re.geometry.coordinates[1])}var Re={type:1,geometry:[[Math.round(this.options.extent*(ce*W-U)),Math.round(this.options.extent*(de*W-z))]],tags:ue},Se=void 0;se?Se=Q.id:this.options.generateId?Se=Q.index:this.points[Q.index].id&&(Se=this.points[Q.index].id),Se!==void 0&&(Re.id=Se),Y.features.push(Re)}},_.prototype._limitZoom=function(O){return Math.max(this.options.minZoom,Math.min(Math.floor(+O),this.options.maxZoom+1))},_.prototype._cluster=function(O,N){for(var U=[],z=this.options,W=z.radius,Y=z.extent,j=z.reduce,te=z.minPoints,J=W/(Y*Math.pow(2,N)),Q=0;Q<O.length;Q++){var se=O[Q];if(!(se.zoom<=N)){se.zoom=N;for(var ue=this.trees[N+1],ce=ue.within(se.x,se.y,J),de=se.numPoints||1,re=de,Re=0,Se=ce;Re<Se.length;Re+=1){var _t=Se[Re],Pe=ue.points[_t];Pe.zoom>N&&(re+=Pe.numPoints||1)}if(re>de&&re>=te){for(var je=se.x*de,Bn=se.y*de,Ut=j&&de>1?this._map(se,!0):null,Kt=(Q<<5)+(N+1)+this.points.length,qt=0,dn=ce;qt<dn.length;qt+=1){var gt=dn[qt],tt=ue.points[gt];if(!(tt.zoom<=N)){tt.zoom=N;var Dr=tt.numPoints||1;je+=tt.x*Dr,Bn+=tt.y*Dr,tt.parentId=Kt,j&&(Ut||(Ut=this._map(se,!0)),j(Ut,this._map(tt)))}}se.parentId=Kt,U.push(v(je/re,Bn/re,Kt,re,Ut))}else if(U.push(se),re>1)for(var qn=0,Nn=ce;qn<Nn.length;qn+=1){var at=Nn[qn],wr=ue.points[at];wr.zoom<=N||(wr.zoom=N,U.push(wr))}}}return U},_.prototype._getOriginId=function(O){return O-this.points.length>>5},_.prototype._getOriginZoom=function(O){return(O-this.points.length)%32},_.prototype._map=function(O,N){if(O.numPoints)return N?P({},O.properties):O.properties;var U=this.points[O.index].properties,z=this.options.map(U);return N&&z===U?P({},z):z};function v(B,O,N,U,z){return{x:p(B),y:p(O),zoom:1/0,id:N,parentId:-1,numPoints:U,properties:z}}function m(B,O){var N=B.geometry.coordinates,U=N[0],z=N[1];return{x:p(S(U)),y:p(x(z)),zoom:1/0,index:O,parentId:-1}}function y(B){return{type:"Feature",id:B.id,properties:T(B),geometry:{type:"Point",coordinates:[C(B.x),M(B.y)]}}}function T(B){var O=B.numPoints,N=O>=1e4?Math.round(O/1e3)+"k":O>=1e3?Math.round(O/100)/10+"k":O;return P(P({},B.properties),{cluster:!0,cluster_id:B.id,point_count:O,point_count_abbreviated:N})}function S(B){return B/360+.5}function x(B){var O=Math.sin(B*Math.PI/180),N=.5-.25*Math.log((1+O)/(1-O))/Math.PI;return N<0?0:N>1?1:N}function C(B){return(B-.5)*360}function M(B){var O=(180-B*360)*Math.PI/180;return 360*Math.atan(Math.exp(O))/Math.PI-90}function P(B,O){for(var N in O)B[N]=O[N];return B}function F(B){return B.x}function V(B){return B.y}return _})})(Dd);var em=Dd.exports;const tm=Yt(em);var nm=Object.defineProperty,Cl=Object.getOwnPropertySymbols,rm=Object.prototype.hasOwnProperty,im=Object.prototype.propertyIsEnumerable,bl=(t,e,n)=>e in t?nm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wd=(t,e)=>{for(var n in e||(e={}))rm.call(e,n)&&bl(t,n,e[n]);if(Cl)for(var n of Cl(e))im.call(e,n)&&bl(t,n,e[n]);return t};function Ld(t,e){const{radius:n=40,maxZoom:r=18,minZoom:i=0,zoom:o=2}=e;if(t.pointIndex){const u=t.pointIndex.getClusters(t.extent,Math.floor(o));return t.dataArray=om(u),t}const s=new tm({radius:n,minZoom:i,maxZoom:r}),a={features:[]};return a.features=t.dataArray.map(u=>({type:"Feature",geometry:{type:"Point",coordinates:u.coordinates},properties:wd({},u)})),s.load(a.features),s}function om(t){return t.map((e,n)=>wd({coordinates:e.geometry.coordinates,_id:n+1},e.properties))}function sm(t){if(t.length===0)throw new Error("max requires at least one data point");let e=t[0];for(let n=1;n<t.length;n++)t[n]>e&&(e=t[n]);return e}function am(t){if(t.length===0)throw new Error("min requires at least one data point");let e=t[0];for(let n=1;n<t.length;n++)t[n]<e&&(e=t[n]);return e}function Ud(t){if(t.length===0)return 0;let e=t[0],n=0,r;for(let i=1;i<t.length;i++)r=e+t[i]*1,Math.abs(e)>=Math.abs(t[i])?n+=e-r+t[i]:n+=t[i]-r+e,e=r;return e+n*1}function um(t){if(t.length===0)throw new Error("mean requires at least one data point");return Ud(t)/t.length}var lm={min:am,max:sm,mean:um,sum:Ud},cm=Co;function Co(t,e){var n=t&&t.type,r;if(n==="FeatureCollection")for(r=0;r<t.features.length;r++)Co(t.features[r],e);else if(n==="GeometryCollection")for(r=0;r<t.geometries.length;r++)Co(t.geometries[r],e);else if(n==="Feature")Co(t.geometry,e);else if(n==="Polygon")Il(t.coordinates,e);else if(n==="MultiPolygon")for(r=0;r<t.coordinates.length;r++)Il(t.coordinates[r],e);return t}function Il(t,e){if(t.length!==0){Ml(t[0],e);for(var n=1;n<t.length;n++)Ml(t[n],!e)}}function Ml(t,e){for(var n=0,r=0,i=0,o=t.length,s=o-1;i<o;s=i++){var a=(t[i][0]-t[s][0])*(t[s][1]+t[i][1]),u=n+a;r+=Math.abs(n)>=Math.abs(a)?n-u+a:a-u+n,n=u}n+r>=0!=!!e&&t.reverse()}const hm=Yt(cm);function fm(t,e){return t.map(n=>n[e]*1)}function kd(t){return Array.isArray(t)?t.length===0||typeof t[0]=="number":!1}function Ra(t){const e=Object.isFrozen(t)?we.cloneDeep(t):t;return hm(e,!0),e}function Br(t,e){return t||[[e[0],e[3]],[e[2],e[3]],[e[2],e[1]],[e[0],e[1]]]}var dm=Object.defineProperty,Ol=Object.getOwnPropertySymbols,pm=Object.prototype.hasOwnProperty,_m=Object.prototype.propertyIsEnumerable,Pl=(t,e,n)=>e in t?dm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Hr=(t,e)=>{for(var n in e||(e={}))pm.call(e,n)&&Pl(t,n,e[n]);if(Ol)for(var n of Ol(e))_m.call(e,n)&&Pl(t,n,e[n]);return t},Fl=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),{cloneDeep:vm,isFunction:Bl,isString:mm,mergeWith:gm}=we;function Em(t,e){if(Array.isArray(e))return e}var ym=class extends pt.EventEmitter{constructor(t,e){super(),this.type="source",this.isTile=!1,this.inited=!1,this.hooks={init:new Vt},this.parser={type:"geojson"},this.transforms=[],this.cluster=!1,this.clusterOptions={enable:!1,radius:40,maxZoom:20,zoom:-99,method:"count"},this.invalidExtent=!1,this.dataArrayChanged=!1,this.cfg={autoRender:!0},this.originData=t,this.initCfg(e),this.init().then(()=>{this.inited=!0,this.emit("update",{type:"inited"})})}getSourceCfg(){return this.cfg}getClusters(t){return this.clusterIndex.getClusters(this.caculClusterExtent(2),t)}getClustersLeaves(t){return this.clusterIndex.getLeaves(t,1/0)}getParserType(){return this.parser.type}updateClusterData(t){const{method:e="sum",field:n}=this.clusterOptions;let r=this.clusterIndex.getClusters(this.caculClusterExtent(2),Math.floor(t));this.clusterOptions.zoom=t,r.forEach(i=>{i.id||(i.properties.point_count=1)}),(n||Bl(e))&&(r=r.map(i=>{const o=i.id;if(o){const a=this.clusterIndex.getLeaves(o,1/0).map(l=>l.properties);let u;if(mm(e)&&n){const l=fm(a,n);u=lm[e](l)}Bl(e)&&(u=e(a)),i.properties.stat=u}else i.properties.point_count=1;return i})),this.data=xl("geojson")({type:"FeatureCollection",features:r}),this.executeTrans()}getFeatureById(t){const{type:e="geojson",geometry:n}=this.parser;if(e==="geojson"&&!this.cluster){const r=t<this.originData.features.length?this.originData.features[t]:"null",i=vm(r);if(i!=null&&i.properties&&(this.transforms.length!==0||this.dataArrayChanged)){const o=this.data.dataArray.find(s=>s._id===t);i.properties=o}return i}else return e==="json"&&n?this.data.dataArray.find(r=>r._id===t):t<this.data.dataArray.length?this.data.dataArray[t]:"null"}updateFeaturePropertiesById(t,e){this.data.dataArray=this.data.dataArray.map(n=>n._id===t?Hr(Hr({},n),e):n),this.dataArrayChanged=!0,this.emit("update",{type:"update"})}getFeatureId(t,e){const n=this.data.dataArray.find(r=>r[t]===e);return n==null?void 0:n._id}setData(t,e){this.originData=t,this.dataArrayChanged=!1,this.initCfg(e),this.init().then(()=>{this.emit("update",{type:"update"})})}reloadAllTile(){var t;(t=this.tileset)==null||t.reloadAll()}reloadTilebyId(t,e,n){var r;(r=this.tileset)==null||r.reloadTileById(t,e,n)}reloadTileByLnglat(t,e,n){var r;(r=this.tileset)==null||r.reloadTileByLnglat(t,e,n)}getTileExtent(t,e){var n;return(n=this.tileset)==null?void 0:n.getTileExtent(t,e)}getTileByZXY(t,e,n){var r;return(r=this.tileset)==null?void 0:r.getTileByZXY(t,e,n)}reloadTileByExtent(t,e){var n;(n=this.tileset)==null||n.reloadTileByExtent(t,e)}destroy(){var t;this.removeAllListeners(),this.originData=null,this.clusterIndex=null,this.data=null,(t=this.tileset)==null||t.destroy()}processData(){return Fl(this,null,function*(){return new Promise((t,e)=>{try{this.excuteParser(),this.initCluster(),this.executeTrans(),t({})}catch(n){e(n)}})})}initCfg(t){t&&(this.cfg=gm(this.cfg,t,Em));const e=this.cfg;e&&(e.parser&&(this.parser=e.parser),e.transforms&&(this.transforms=e.transforms),this.cluster=e.cluster||!1,e.clusterOptions&&(this.cluster=!0,this.clusterOptions=Hr(Hr({},this.clusterOptions),e.clusterOptions)))}init(){return Fl(this,null,function*(){this.inited=!1,yield this.processData(),this.inited=!0})}excuteParser(){const t=this.parser,e=t.type||"geojson",n=xl(e);this.data=n(this.originData,t),this.tileset=this.initTileset(),!t.cancelExtent&&(this.extent=pv(this.data.dataArray),this.setCenter(this.extent),this.invalidExtent=this.extent[0]===this.extent[2]||this.extent[1]===this.extent[3])}setCenter(t){this.center=[(t[0]+t[2])/2,(t[1]+t[3])/2],(isNaN(this.center[0])||isNaN(this.center[1]))&&(this.center=[108.92361111111111,34.54083333333333])}initTileset(){const{tilesetOptions:t}=this.data;return t?(this.isTile=!0,this.tileset?(this.tileset.updateOptions(t),this.tileset):new qv(Hr({},t))):void 0}executeTrans(){this.transforms.forEach(e=>{const{type:n}=e,r=Jv(n)(this.data,e);Object.assign(this.data,r)})}initCluster(){if(!this.cluster)return;const t=this.clusterOptions||{};this.clusterIndex=Ld(this.data,t)}caculClusterExtent(t){let e=[[-1/0,-1/0],[1/0,1/0]];return this.invalidExtent||(e=hs(Ho(this.extent),t)),e[0].concat(e[1])}};function Tm(t){const e=Am(t);if(e.length===0)return[];const n=e[0],r=[];for(let i=1;i<e.length;i++){const o=e[i];if(o.length===0)continue;const s={};for(let a=0;a<n.length;a++){const u=n[a],l=a<o.length?o[a]:"";s[u]=l}r.push(s)}return r}function Am(t){const e=[];let n=[],r="",i=!1,o=0;const s=t.replace(/\r\n/g,`
`).replace(/\r/g,`
`);for(;o<s.length;){const a=s[o],u=s[o+1];if(i)if(a==='"')if(u==='"'){r+='"',o+=2;continue}else{i=!1,o++;continue}else{r+=a,o++;continue}else if(a==='"'){i=!0,o++;continue}else if(a===","){n.push(r.trim()),r="",o++;continue}else if(a===`
`){n.push(r.trim()),n.some(l=>l!=="")&&e.push(n),n=[],r="",o++;continue}else{r+=a,o++;continue}}return(r!==""||n.length>0)&&(n.push(r.trim()),n.some(a=>a!=="")&&e.push(n)),e}function zd(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Nl(t){return t.type==="Feature"?t.geometry:t}var Sm=Object.defineProperty,Rm=Object.defineProperties,xm=Object.getOwnPropertyDescriptors,Dl=Object.getOwnPropertySymbols,Cm=Object.prototype.hasOwnProperty,bm=Object.prototype.propertyIsEnumerable,wl=(t,e,n)=>e in t?Sm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ll=(t,e)=>{for(var n in e||(e={}))Cm.call(e,n)&&wl(t,n,e[n]);if(Dl)for(var n of Dl(e))bm.call(e,n)&&wl(t,n,e[n]);return t},Ul=(t,e)=>Rm(t,xm(e));function Vd(t,e){const{x:n,y:r,x1:i,y1:o,coordinates:s,geometry:a}=e,u=[];if(!Array.isArray(t))return{dataArray:[]};if(a)return t.filter(l=>l[a]&&l[a].type&&l[a].coordinates&&l[a].coordinates.length>0).forEach((l,c)=>{const h=Ra(l[a]);Ad(h,f=>{const p=zd(f),_=Ul(Ll({},l),{_id:c,coordinates:p});u.push(_)})}),{dataArray:u};for(let l=0;l<t.length;l++){const c=t[l];let h=[];if(s){let p="Polygon";Array.isArray(s[0])||(p="Point"),Array.isArray(s[0])&&!Array.isArray(s[0][0])&&(p="LineString"),h=Ra({type:p,coordinates:c[s]}).coordinates}else if(n&&r&&i&&o){const p=[parseFloat(c[n]),parseFloat(c[r])],_=[parseFloat(c[i]),parseFloat(c[o])];h=[p,_]}else n&&r&&(h=[parseFloat(c[n]),parseFloat(c[r])]);const f=Ul(Ll({},c),{_id:l,coordinates:h});u.push(f)}return{dataArray:u}}function Im(t,e){const n=Tm(t);return Vd(n,e)}var Mm=Object.defineProperty,Om=Object.defineProperties,Pm=Object.getOwnPropertyDescriptors,kl=Object.getOwnPropertySymbols,Fm=Object.prototype.hasOwnProperty,Bm=Object.prototype.propertyIsEnumerable,zl=(t,e,n)=>e in t?Mm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Nm=(t,e)=>{for(var n in e||(e={}))Fm.call(e,n)&&zl(t,n,e[n]);if(kl)for(var n of kl(e))Bm.call(e,n)&&zl(t,n,e[n]);return t},Dm=(t,e)=>Om(t,Pm(e));function wm(t){const e=t.toString();let n=5381,r=e.length;for(;r;)n=n*33^e.charCodeAt(--r);return n>>>0}function Lm(t,e){return e===void 0?null:isNaN(t.properties[e]*1)?t.properties&&t.properties[e]?wm(t.properties[e]+"")%1000019:null:t.properties[e]*1}function Um(t,e){const n=[],r={};return t.features?(t.features=t.features.filter(i=>{const o=i.geometry;return i!=null&&o&&o.type&&o.coordinates&&o.coordinates.length>0}),t=Ra(t),t.features.length===0?{dataArray:[],featureKeys:r}:(Ad(t,(i,o)=>{let s=Lm(i,e==null?void 0:e.featureId);s===null&&(s=o);const a=s,u=zd(i),l=Dm(Nm({},i.properties),{coordinates:u,_id:a});n.push(l)}),{dataArray:n,featureKeys:r})):(t.features=[],{dataArray:[]})}function xa(t,e,n,r){for(var i=r,o=n-e>>1,s=n-e,a,u=t[e],l=t[e+1],c=t[n],h=t[n+1],f=e+3;f<n;f+=3){var p=km(t[f],t[f+1],u,l,c,h);if(p>i)a=f,i=p;else if(p===i){var _=Math.abs(f-o);_<s&&(a=f,s=_)}}i>r&&(a-e>3&&xa(t,e,a,r),t[a+2]=i,n-a>3&&xa(t,a,n,r))}function km(t,e,n,r,i,o){var s=i-n,a=o-r;if(s!==0||a!==0){var u=((t-n)*s+(e-r)*a)/(s*s+a*a);u>1?(n=i,r=o):u>0&&(n+=s*u,r+=a*u)}return s=t-n,a=e-r,s*s+a*a}function Si(t,e,n,r){var i={id:typeof t>"u"?null:t,type:e,geometry:n,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return zm(i),i}function zm(t){var e=t.geometry,n=t.type;if(n==="Point"||n==="MultiPoint"||n==="LineString")ws(t,e);else if(n==="Polygon"||n==="MultiLineString")for(var r=0;r<e.length;r++)ws(t,e[r]);else if(n==="MultiPolygon")for(r=0;r<e.length;r++)for(var i=0;i<e[r].length;i++)ws(t,e[r][i])}function ws(t,e){for(var n=0;n<e.length;n+=3)t.minX=Math.min(t.minX,e[n]),t.minY=Math.min(t.minY,e[n+1]),t.maxX=Math.max(t.maxX,e[n]),t.maxY=Math.max(t.maxY,e[n+1])}function Vm(t,e){var n=[];if(t.type==="FeatureCollection")for(var r=0;r<t.features.length;r++)bo(n,t.features[r],e,r);else t.type==="Feature"?bo(n,t,e):bo(n,{geometry:t},e);return n}function bo(t,e,n,r){if(e.geometry){var i=e.geometry.coordinates,o=e.geometry.type,s=Math.pow(n.tolerance/((1<<n.maxZoom)*n.extent),2),a=[],u=e.id;if(n.promoteId?u=e.properties[n.promoteId]:n.generateId&&(u=r||0),o==="Point")Vl(i,a);else if(o==="MultiPoint")for(var l=0;l<i.length;l++)Vl(i[l],a);else if(o==="LineString")Ca(i,a,s,!1);else if(o==="MultiLineString")if(n.lineMetrics){for(l=0;l<i.length;l++)a=[],Ca(i[l],a,s,!1),t.push(Si(u,"LineString",a,e.properties));return}else Ls(i,a,s,!1);else if(o==="Polygon")Ls(i,a,s,!0);else if(o==="MultiPolygon")for(l=0;l<i.length;l++){var c=[];Ls(i[l],c,s,!0),a.push(c)}else if(o==="GeometryCollection"){for(l=0;l<e.geometry.geometries.length;l++)bo(t,{id:u,geometry:e.geometry.geometries[l],properties:e.properties},n,r);return}else throw new Error("Input data is not a valid GeoJSON object.");t.push(Si(u,o,a,e.properties))}}function Vl(t,e){e.push(Hd(t[0])),e.push(Xd(t[1])),e.push(0)}function Ca(t,e,n,r){for(var i,o,s=0,a=0;a<t.length;a++){var u=Hd(t[a][0]),l=Xd(t[a][1]);e.push(u),e.push(l),e.push(0),a>0&&(r?s+=(i*l-u*o)/2:s+=Math.sqrt(Math.pow(u-i,2)+Math.pow(l-o,2))),i=u,o=l}var c=e.length-3;e[2]=1,xa(e,0,c,n),e[c+2]=1,e.size=Math.abs(s),e.start=0,e.end=e.size}function Ls(t,e,n,r){for(var i=0;i<t.length;i++){var o=[];Ca(t[i],o,n,r),e.push(o)}}function Hd(t){return t/360+.5}function Xd(t){var e=Math.sin(t*Math.PI/180),n=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return n<0?0:n>1?1:n}function rn(t,e,n,r,i,o,s,a){if(n/=e,r/=e,o>=n&&s<r)return t;if(s<n||o>=r)return null;for(var u=[],l=0;l<t.length;l++){var c=t[l],h=c.geometry,f=c.type,p=i===0?c.minX:c.minY,_=i===0?c.maxX:c.maxY;if(p>=n&&_<r){u.push(c);continue}else if(_<n||p>=r)continue;var v=[];if(f==="Point"||f==="MultiPoint")Hm(h,v,n,r,i);else if(f==="LineString")Wd(h,v,n,r,i,!1,a.lineMetrics);else if(f==="MultiLineString")Us(h,v,n,r,i,!1);else if(f==="Polygon")Us(h,v,n,r,i,!0);else if(f==="MultiPolygon")for(var m=0;m<h.length;m++){var y=[];Us(h[m],y,n,r,i,!0),y.length&&v.push(y)}if(v.length){if(a.lineMetrics&&f==="LineString"){for(m=0;m<v.length;m++)u.push(Si(c.id,f,v[m],c.tags));continue}(f==="LineString"||f==="MultiLineString")&&(v.length===1?(f="LineString",v=v[0]):f="MultiLineString"),(f==="Point"||f==="MultiPoint")&&(f=v.length===3?"Point":"MultiPoint"),u.push(Si(c.id,f,v,c.tags))}}return u.length?u:null}function Hm(t,e,n,r,i){for(var o=0;o<t.length;o+=3){var s=t[o+i];s>=n&&s<=r&&(e.push(t[o]),e.push(t[o+1]),e.push(t[o+2]))}}function Wd(t,e,n,r,i,o,s){for(var a=Hl(t),u=i===0?Xm:Wm,l=t.start,c,h,f=0;f<t.length-3;f+=3){var p=t[f],_=t[f+1],v=t[f+2],m=t[f+3],y=t[f+4],T=i===0?p:_,S=i===0?m:y,x=!1;s&&(c=Math.sqrt(Math.pow(p-m,2)+Math.pow(_-y,2))),T<n?S>n&&(h=u(a,p,_,m,y,n),s&&(a.start=l+c*h)):T>r?S<r&&(h=u(a,p,_,m,y,r),s&&(a.start=l+c*h)):ks(a,p,_,v),S<n&&T>=n&&(h=u(a,p,_,m,y,n),x=!0),S>r&&T<=r&&(h=u(a,p,_,m,y,r),x=!0),!o&&x&&(s&&(a.end=l+c*h),e.push(a),a=Hl(t)),s&&(l+=c)}var C=t.length-3;p=t[C],_=t[C+1],v=t[C+2],T=i===0?p:_,T>=n&&T<=r&&ks(a,p,_,v),C=a.length-3,o&&C>=3&&(a[C]!==a[0]||a[C+1]!==a[1])&&ks(a,a[0],a[1],a[2]),a.length&&e.push(a)}function Hl(t){var e=[];return e.size=t.size,e.start=t.start,e.end=t.end,e}function Us(t,e,n,r,i,o){for(var s=0;s<t.length;s++)Wd(t[s],e,n,r,i,o,!1)}function ks(t,e,n,r){t.push(e),t.push(n),t.push(r)}function Xm(t,e,n,r,i,o){var s=(o-e)/(r-e);return t.push(o),t.push(n+(i-n)*s),t.push(1),s}function Wm(t,e,n,r,i,o){var s=(o-n)/(i-n);return t.push(e+(r-e)*s),t.push(o),t.push(1),s}function jm(t,e){var n=e.buffer/e.extent,r=t,i=rn(t,1,-1-n,n,0,-1,2,e),o=rn(t,1,1-n,2+n,0,-1,2,e);return(i||o)&&(r=rn(t,1,-n,1+n,0,-1,2,e)||[],i&&(r=Xl(i,1).concat(r)),o&&(r=r.concat(Xl(o,-1)))),r}function Xl(t,e){for(var n=[],r=0;r<t.length;r++){var i=t[r],o=i.type,s;if(o==="Point"||o==="MultiPoint"||o==="LineString")s=zs(i.geometry,e);else if(o==="MultiLineString"||o==="Polygon"){s=[];for(var a=0;a<i.geometry.length;a++)s.push(zs(i.geometry[a],e))}else if(o==="MultiPolygon")for(s=[],a=0;a<i.geometry.length;a++){for(var u=[],l=0;l<i.geometry[a].length;l++)u.push(zs(i.geometry[a][l],e));s.push(u)}n.push(Si(i.id,o,s,i.tags))}return n}function zs(t,e){var n=[];n.size=t.size,t.start!==void 0&&(n.start=t.start,n.end=t.end);for(var r=0;r<t.length;r+=3)n.push(t[r]+e,t[r+1],t[r+2]);return n}function Wl(t,e){if(t.transformed)return t;var n=1<<t.z,r=t.x,i=t.y,o,s,a;for(o=0;o<t.features.length;o++){var u=t.features[o],l=u.geometry,c=u.type;if(u.geometry=[],c===1)for(s=0;s<l.length;s+=2)u.geometry.push(jl(l[s],l[s+1],e,n,r,i));else for(s=0;s<l.length;s++){var h=[];for(a=0;a<l[s].length;a+=2)h.push(jl(l[s][a],l[s][a+1],e,n,r,i));u.geometry.push(h)}}return t.transformed=!0,t}function jl(t,e,n,r,i,o){return[Math.round(n*(t*r-i)),Math.round(n*(e*r-o))]}function $m(t,e,n,r,i){for(var o=e===i.maxZoom?0:i.tolerance/((1<<e)*i.extent),s={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:n,y:r,z:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<t.length;a++){s.numFeatures++,Zm(s,t[a],o,i);var u=t[a].minX,l=t[a].minY,c=t[a].maxX,h=t[a].maxY;u<s.minX&&(s.minX=u),l<s.minY&&(s.minY=l),c>s.maxX&&(s.maxX=c),h>s.maxY&&(s.maxY=h)}return s}function Zm(t,e,n,r){var i=e.geometry,o=e.type,s=[];if(o==="Point"||o==="MultiPoint")for(var a=0;a<i.length;a+=3)s.push(i[a]),s.push(i[a+1]),t.numPoints++,t.numSimplified++;else if(o==="LineString")Vs(s,i,t,n,!1,!1);else if(o==="MultiLineString"||o==="Polygon")for(a=0;a<i.length;a++)Vs(s,i[a],t,n,o==="Polygon",a===0);else if(o==="MultiPolygon")for(var u=0;u<i.length;u++){var l=i[u];for(a=0;a<l.length;a++)Vs(s,l[a],t,n,!0,a===0)}if(s.length){var c=e.tags||null;if(o==="LineString"&&r.lineMetrics){c={};for(var h in e.tags)c[h]=e.tags[h];c.mapbox_clip_start=i.start/i.size,c.mapbox_clip_end=i.end/i.size}var f={geometry:s,type:o==="Polygon"||o==="MultiPolygon"?3:o==="LineString"||o==="MultiLineString"?2:1,tags:c};e.id!==null&&(f.id=e.id),t.features.push(f)}}function Vs(t,e,n,r,i,o){var s=r*r;if(r>0&&e.size<(i?s:r)){n.numPoints+=e.length/3;return}for(var a=[],u=0;u<e.length;u+=3)(r===0||e[u+2]>s)&&(n.numSimplified++,a.push(e[u]),a.push(e[u+1])),n.numPoints++;i&&Ym(a,o),t.push(a)}function Ym(t,e){for(var n=0,r=0,i=t.length,o=i-2;r<i;o=r,r+=2)n+=(t[r]-t[o])*(t[r+1]+t[o+1]);if(n>0===e)for(r=0,i=t.length;r<i/2;r+=2){var s=t[r],a=t[r+1];t[r]=t[i-2-r],t[r+1]=t[i-1-r],t[i-2-r]=s,t[i-1-r]=a}}function Gm(t,e){return new ds(t,e)}function ds(t,e){e=this.options=Km(Object.create(this.options),e);var n=e.debug;if(n&&console.time("preprocess data"),e.maxZoom<0||e.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(e.promoteId&&e.generateId)throw new Error("promoteId and generateId cannot be used together.");var r=Vm(t,e);this.tiles={},this.tileCoords=[],n&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),r=jm(r,e),r.length&&this.splitTile(r,0,0,0),n&&(r.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}ds.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0};ds.prototype.splitTile=function(t,e,n,r,i,o,s){for(var a=[t,e,n,r],u=this.options,l=u.debug;a.length;){r=a.pop(),n=a.pop(),e=a.pop(),t=a.pop();var c=1<<e,h=ba(e,n,r),f=this.tiles[h];if(!f&&(l>1&&console.time("creation"),f=this.tiles[h]=$m(t,e,n,r,u),this.tileCoords.push({z:e,x:n,y:r}),l)){l>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,n,r,f.numFeatures,f.numPoints,f.numSimplified),console.timeEnd("creation"));var p="z"+e;this.stats[p]=(this.stats[p]||0)+1,this.total++}if(f.source=t,i){if(e===u.maxZoom||e===i)continue;var _=1<<i-e;if(n!==Math.floor(o/_)||r!==Math.floor(s/_))continue}else if(e===u.indexMaxZoom||f.numPoints<=u.indexMaxPoints)continue;if(f.source=null,t.length!==0){l>1&&console.time("clipping");var v=.5*u.buffer/u.extent,m=.5-v,y=.5+v,T=1+v,S,x,C,M,P,F;S=x=C=M=null,P=rn(t,c,n-v,n+y,0,f.minX,f.maxX,u),F=rn(t,c,n+m,n+T,0,f.minX,f.maxX,u),t=null,P&&(S=rn(P,c,r-v,r+y,1,f.minY,f.maxY,u),x=rn(P,c,r+m,r+T,1,f.minY,f.maxY,u),P=null),F&&(C=rn(F,c,r-v,r+y,1,f.minY,f.maxY,u),M=rn(F,c,r+m,r+T,1,f.minY,f.maxY,u),F=null),l>1&&console.timeEnd("clipping"),a.push(S||[],e+1,n*2,r*2),a.push(x||[],e+1,n*2,r*2+1),a.push(C||[],e+1,n*2+1,r*2),a.push(M||[],e+1,n*2+1,r*2+1)}}};ds.prototype.getTile=function(t,e,n){var r=this.options,i=r.extent,o=r.debug;if(t<0||t>24)return null;var s=1<<t;e=(e%s+s)%s;var a=ba(t,e,n);if(this.tiles[a])return Wl(this.tiles[a],i);o>1&&console.log("drilling down to z%d-%d-%d",t,e,n);for(var u=t,l=e,c=n,h;!h&&u>0;)u--,l=Math.floor(l/2),c=Math.floor(c/2),h=this.tiles[ba(u,l,c)];return!h||!h.source?null:(o>1&&console.log("found parent tile z%d-%d-%d",u,l,c),o>1&&console.time("drilling down"),this.splitTile(h.source,u,l,c,t,e,n),o>1&&console.timeEnd("drilling down"),this.tiles[a]?Wl(this.tiles[a],i):null)};function ba(t,e,n){return((1<<t)*n+e)*32+t}function Km(t,e){for(var n in e)t[n]=e[n];return t}var ai=class{constructor(e,n,r,i){this.vectorLayerCache={},this.x=n,this.y=r,this.z=i,this.vectorTile=e}getTileData(e){return!e||!this.vectorTile.layers[e]?[]:this.vectorLayerCache[e]?this.vectorLayerCache[e]:this.vectorTile.layers[e].features}getFeatureById(){throw new Error("Method not implemented.")}},qm=Object.defineProperty,Qm=Object.defineProperties,Jm=Object.getOwnPropertyDescriptors,$l=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,tg=Object.prototype.propertyIsEnumerable,Zl=(t,e,n)=>e in t?qm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Xo=(t,e)=>{for(var n in e||(e={}))eg.call(e,n)&&Zl(t,n,e[n]);if($l)for(var n of $l(e))tg.call(e,n)&&Zl(t,n,e[n]);return t},ng=(t,e)=>Qm(t,Jm(e)),rg=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),ig={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0};function og(t){let e=0;for(let n=0,r=t.length,i=r-1,o,s;n<r;i=n++)o=t[n],s=t[i],e+=(s.x-o.x)*(o.y+s.y);return e}function sg(t){const e=t.length;if(e<=1)return[t];const n=[];let r,i;for(let o=0;o<e;o++){const s=og(t[o]);s!==0&&(i===void 0&&(i=s<0),i===s<0?(r&&n.push(r),r=[t[o]]):r.push(t[o]))}return r&&n.push(r),n}var ag=["Unknown","Point","LineString","Polygon"];function ug(t,e,n,r,i){let o=i.geometry;const s=i.type,a=i.tags,u=i.id,l=t*Math.pow(2,r),c=t*e,h=t*n;let f=ag[s],p,_;function v(y){for(let T=0;T<y.length;T++){const S=y[T];if(S[3])break;const x=180-(S[1]+h)*360/l,C=(S[0]+c)*360/l-180,M=360/Math.PI*Math.atan(Math.exp(x*Math.PI/180))-90;y[T]=[C,M,0,1]}}switch(s){case 1:const y=[];for(p=0;p<o.length;p++)y[p]=o[p][0];o=y,v(o);break;case 2:for(p=0;p<o.length;p++)v(o[p]);break;case 3:for(o=sg(o),p=0;p<o.length;p++)for(_=0;_<o[p].length;_++)v(o[p][_]);break}return o.length===1?o=o[0]:f="Multi"+f,{type:"Feature",geometry:{type:f,coordinates:o},properties:a,id:u,relativeOrigin:[0,0],coord:""}}var lg=(t,e,n,r)=>rg(void 0,null,function*(){return new Promise(i=>{const o=e.getTile(t.z,t.x,t.y),a={layers:{defaultLayer:{features:o?o.features.map(l=>ug(r,n.x,n.y,n.z,l)):[]}}},u=new ai(a,t.x,t.y,t.z);i(u)})});function cg(t){const e={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!0,debug:0};return t===void 0||typeof t.geojsonvtOptions>"u"?e:Xo(Xo({},e),t.geojsonvtOptions)}function hg(t,e){const n=cg(e),r=n.extent||4096,i=Gm(t,n),o=(a,u)=>lg(u,i,a,r),s=ng(Xo(Xo({},ig),e),{getTileData:o});return{data:t,dataArray:[],tilesetOptions:s,isTile:!0}}var fg=Object.defineProperty,dg=Object.defineProperties,pg=Object.getOwnPropertyDescriptors,Yl=Object.getOwnPropertySymbols,_g=Object.prototype.hasOwnProperty,vg=Object.prototype.propertyIsEnumerable,Gl=(t,e,n)=>e in t?fg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kl=(t,e)=>{for(var n in e||(e={}))_g.call(e,n)&&Gl(t,n,e[n]);if(Yl)for(var n of Yl(e))vg.call(e,n)&&Gl(t,n,e[n]);return t},ql=(t,e)=>dg(t,pg(e));function jd(t,e){const{extent:n=[121.168,30.2828,121.384,30.4219],coordinates:r,requestParameters:i={}}=e,o=new Promise(u=>{t instanceof HTMLImageElement||uv(t)?u([t]):mg(t,i,l=>{u(l)})}),s=Br(r,n);return{originData:t,images:o,_id:1,dataArray:[{_id:0,coordinates:s}]}}function mg(t,e,n){const r=[];if(typeof t=="string")ga(ql(Kl({},e),{url:t}),(i,o)=>{o&&(r.push(o),n(r))});else{const i=t.length;let o=0;t.forEach(s=>{ga(ql(Kl({},e),{url:s}),(a,u)=>{o++,u&&r.push(u),o===i&&n(r)})})}return jd}var gg=Object.defineProperty,Eg=Object.defineProperties,yg=Object.getOwnPropertyDescriptors,Ql=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Ag=Object.prototype.propertyIsEnumerable,Jl=(t,e,n)=>e in t?gg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$d=(t,e)=>{for(var n in e||(e={}))Tg.call(e,n)&&Jl(t,n,e[n]);if(Ql)for(var n of Ql(e))Ag.call(e,n)&&Jl(t,n,e[n]);return t},Zd=(t,e)=>Eg(t,yg(e)),Sg=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),Rg=(t,e,n,r)=>Sg(void 0,null,function*(){const i={x:e.x,y:e.y,z:e.z},o=mr(t,i);return new Promise(s=>{r?r(i,(a,u)=>{if(a||!u){const l={layers:{defaultLayer:{features:[]}}},c=new ai(l,e.x,e.y,e.z);s(c)}else{const l={layers:{defaultLayer:{features:u.features}}},c=new ai(l,e.x,e.y,e.z);s(c)}}):S0(Zd($d({},n),{url:o}),(a,u)=>{if(a||!u){const l={layers:{defaultLayer:{features:[]}}},c=new ai(l,e.x,e.y,e.z);s(c)}else{const c={layers:{defaultLayer:{features:JSON.parse(u)}}},h=new ai(c,e.x,e.y,e.z);s(h)}})})});function xg(t,e){const n=(i,o)=>Rg(t,o,e==null?void 0:e.requestParameters,e.getCustomData),r=Zd($d({},e),{getTileData:n});return{dataArray:[],tilesetOptions:r,isTile:!0}}var Yd=gr;function gr(t,e){this.x=t,this.y=e}gr.prototype={clone:function(){return new gr(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),n=Math.sin(t),r=e*this.x-n*this.y,i=n*this.x+e*this.y;return this.x=r,this.y=i,this},_rotateAround:function(t,e){var n=Math.cos(t),r=Math.sin(t),i=e.x+n*(this.x-e.x)-r*(this.y-e.y),o=e.y+r*(this.x-e.x)+n*(this.y-e.y);return this.x=i,this.y=o,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}};gr.convert=function(t){return t instanceof gr?t:Array.isArray(t)?new gr(t[0],t[1]):t};const pe=Yt(Yd);var Cg=Yd,bg=Cr;function Cr(t,e,n,r,i){this.properties={},this.extent=n,this.type=0,this._pbf=t,this._geometry=-1,this._keys=r,this._values=i,t.readFields(Ig,this,e)}function Ig(t,e,n){t==1?e.id=n.readVarint():t==2?Mg(n,e):t==3?e.type=n.readVarint():t==4&&(e._geometry=n.pos)}function Mg(t,e){for(var n=t.readVarint()+t.pos;t.pos<n;){var r=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[r]=i}}Cr.types=["Unknown","Point","LineString","Polygon"];Cr.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,n=1,r=0,i=0,o=0,s=[],a;t.pos<e;){if(r<=0){var u=t.readVarint();n=u&7,r=u>>3}if(r--,n===1||n===2)i+=t.readSVarint(),o+=t.readSVarint(),n===1&&(a&&s.push(a),a=[]),a.push(new Cg(i,o));else if(n===7)a&&a.push(a[0].clone());else throw new Error("unknown command "+n)}return a&&s.push(a),s};Cr.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,n=1,r=0,i=0,o=0,s=1/0,a=-1/0,u=1/0,l=-1/0;t.pos<e;){if(r<=0){var c=t.readVarint();n=c&7,r=c>>3}if(r--,n===1||n===2)i+=t.readSVarint(),o+=t.readSVarint(),i<s&&(s=i),i>a&&(a=i),o<u&&(u=o),o>l&&(l=o);else if(n!==7)throw new Error("unknown command "+n)}return[s,u,a,l]};Cr.prototype.toGeoJSON=function(t,e,n){var r=this.extent*Math.pow(2,n),i=this.extent*t,o=this.extent*e,s=this.loadGeometry(),a=Cr.types[this.type],u,l;function c(p){for(var _=0;_<p.length;_++){var v=p[_],m=180-(v.y+o)*360/r;p[_]=[(v.x+i)*360/r-180,360/Math.PI*Math.atan(Math.exp(m*Math.PI/180))-90]}}switch(this.type){case 1:var h=[];for(u=0;u<s.length;u++)h[u]=s[u][0];s=h,c(s);break;case 2:for(u=0;u<s.length;u++)c(s[u]);break;case 3:for(s=Og(s),u=0;u<s.length;u++)for(l=0;l<s[u].length;l++)c(s[u][l]);break}s.length===1?s=s[0]:a="Multi"+a;var f={type:"Feature",geometry:{type:a,coordinates:s},properties:this.properties};return"id"in this&&(f.id=this.id),f};function Og(t){var e=t.length;if(e<=1)return[t];for(var n=[],r,i,o=0;o<e;o++){var s=Pg(t[o]);s!==0&&(i===void 0&&(i=s<0),i===s<0?(r&&n.push(r),r=[t[o]]):r.push(t[o]))}return r&&n.push(r),n}function Pg(t){for(var e=0,n=0,r=t.length,i=r-1,o,s;n<r;i=n++)o=t[n],s=t[i],e+=(s.x-o.x)*(o.y+s.y);return e}var Fg=bg,Bg=Gd;function Gd(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Ng,this,e),this.length=this._features.length}function Ng(t,e,n){t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(Dg(n))}function Dg(t){for(var e=null,n=t.readVarint()+t.pos;t.pos<n;){var r=t.readVarint()>>3;e=r===1?t.readString():r===2?t.readFloat():r===3?t.readDouble():r===4?t.readVarint64():r===5?t.readVarint():r===6?t.readSVarint():r===7?t.readBoolean():null}return e}Gd.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new Fg(this._pbf,e,this.extent,this._keys,this._values)};var wg=Bg,Lg=Ug;function Ug(t,e){this.layers=t.readFields(kg,{},e)}function kg(t,e,n){if(t===3){var r=new wg(n,n.readVarint()+n.pos);r.length&&(e[r.name]=r)}}var zg=Lg,yu={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */yu.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,u=(1<<a)-1,l=u>>1,c=-7,h=n?i-1:0,f=n?-1:1,p=t[e+h];for(h+=f,o=p&(1<<-c)-1,p>>=-c,c+=a;c>0;o=o*256+t[e+h],h+=f,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=r;c>0;s=s*256+t[e+h],h+=f,c-=8);if(o===0)o=1-l;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-l}return(p?-1:1)*s*Math.pow(2,o-r)};yu.write=function(t,e,n,r,i,o){var s,a,u,l=o*8-i-1,c=(1<<l)-1,h=c>>1,f=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,_=r?1:-1,v=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+h>=1?e+=f/u:e+=f*Math.pow(2,1-h),e*u>=2&&(s++,u/=2),s+h>=c?(a=0,s=c):s+h>=1?(a=(e*u-1)*Math.pow(2,i),s=s+h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[n+p]=a&255,p+=_,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;t[n+p]=s&255,p+=_,s/=256,l-=8);t[n+p-_]|=v*128};var Vg=Ee,Yi=yu;function Ee(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}Ee.Varint=0;Ee.Fixed64=1;Ee.Bytes=2;Ee.Fixed32=5;var Ia=65536*65536,ec=1/Ia,Hg=12,Kd=typeof TextDecoder>"u"?null:new TextDecoder("utf-8");Ee.prototype={destroy:function(){this.buf=null},readFields:function(t,e,n){for(n=n||this.length;this.pos<n;){var r=this.readVarint(),i=r>>3,o=this.pos;this.type=r&7,t(i,e,this),this.pos===o&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Gi(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=nc(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Gi(this.buf,this.pos)+Gi(this.buf,this.pos+4)*Ia;return this.pos+=8,t},readSFixed64:function(){var t=Gi(this.buf,this.pos)+nc(this.buf,this.pos+4)*Ia;return this.pos+=8,t},readFloat:function(){var t=Yi.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Yi.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e=this.buf,n,r;return r=e[this.pos++],n=r&127,r<128||(r=e[this.pos++],n|=(r&127)<<7,r<128)||(r=e[this.pos++],n|=(r&127)<<14,r<128)||(r=e[this.pos++],n|=(r&127)<<21,r<128)?n:(r=e[this.pos],n|=(r&15)<<28,Xg(n,t,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2===1?(t+1)/-2:t/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=Hg&&Kd?rE(this.buf,e,t):nE(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Ee.Bytes)return t.push(this.readVarint(e));var n=en(this);for(t=t||[];this.pos<n;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Ee.Bytes)return t.push(this.readSVarint());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Ee.Bytes)return t.push(this.readBoolean());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Ee.Bytes)return t.push(this.readFloat());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Ee.Bytes)return t.push(this.readDouble());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Ee.Bytes)return t.push(this.readFixed32());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Ee.Bytes)return t.push(this.readSFixed32());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Ee.Bytes)return t.push(this.readFixed64());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Ee.Bytes)return t.push(this.readSFixed64());var e=en(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=t&7;if(e===Ee.Varint)for(;this.buf[this.pos++]>127;);else if(e===Ee.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Ee.Fixed32)this.pos+=4;else if(e===Ee.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+e)},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var n=new Uint8Array(e);n.set(this.buf),this.buf=n,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),er(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),er(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),er(this.buf,t&-1,this.pos),er(this.buf,Math.floor(t*ec),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),er(this.buf,t&-1,this.pos),er(this.buf,Math.floor(t*ec),this.pos+4),this.pos+=8},writeVarint:function(t){if(t=+t||0,t>268435455||t<0){Wg(t,this);return}this.realloc(4),this.buf[this.pos++]=t&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=t>>>7&127)))},writeSVarint:function(t){this.writeVarint(t<0?-t*2-1:t*2)},writeBoolean:function(t){this.writeVarint(!!t)},writeString:function(t){t=String(t),this.realloc(t.length*4),this.pos++;var e=this.pos;this.pos=iE(this.buf,t,this.pos);var n=this.pos-e;n>=128&&tc(e,n,this),this.pos=e-1,this.writeVarint(n),this.pos+=n},writeFloat:function(t){this.realloc(4),Yi.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),Yi.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var n=0;n<e;n++)this.buf[this.pos++]=t[n]},writeRawMessage:function(t,e){this.pos++;var n=this.pos;t(e,this);var r=this.pos-n;r>=128&&tc(n,r,this),this.pos=n-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,n){this.writeTag(t,Ee.Bytes),this.writeRawMessage(e,n)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Zg,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Yg,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,qg,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,Gg,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Kg,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,Qg,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,Jg,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,eE,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,tE,e)},writeBytesField:function(t,e){this.writeTag(t,Ee.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,Ee.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,Ee.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,Ee.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,Ee.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,Ee.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,Ee.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,Ee.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,Ee.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,Ee.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,!!e)}};function Xg(t,e,n){var r=n.buf,i,o;if(o=r[n.pos++],i=(o&112)>>4,o<128||(o=r[n.pos++],i|=(o&127)<<3,o<128)||(o=r[n.pos++],i|=(o&127)<<10,o<128)||(o=r[n.pos++],i|=(o&127)<<17,o<128)||(o=r[n.pos++],i|=(o&127)<<24,o<128)||(o=r[n.pos++],i|=(o&1)<<31,o<128))return Jn(t,i,e);throw new Error("Expected varint not more than 10 bytes")}function en(t){return t.type===Ee.Bytes?t.readVarint()+t.pos:t.pos+1}function Jn(t,e,n){return n?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function Wg(t,e){var n,r;if(t>=0?(n=t%4294967296|0,r=t/4294967296|0):(n=~(-t%4294967296),r=~(-t/4294967296),n^4294967295?n=n+1|0:(n=0,r=r+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),jg(n,r,e),$g(r,e)}function jg(t,e,n){n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos]=t&127}function $g(t,e){var n=(t&7)<<4;e.buf[e.pos++]|=n|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function tc(t,e,n){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));n.realloc(r);for(var i=n.pos-1;i>=t;i--)n.buf[i+r]=n.buf[i]}function Zg(t,e){for(var n=0;n<t.length;n++)e.writeVarint(t[n])}function Yg(t,e){for(var n=0;n<t.length;n++)e.writeSVarint(t[n])}function Gg(t,e){for(var n=0;n<t.length;n++)e.writeFloat(t[n])}function Kg(t,e){for(var n=0;n<t.length;n++)e.writeDouble(t[n])}function qg(t,e){for(var n=0;n<t.length;n++)e.writeBoolean(t[n])}function Qg(t,e){for(var n=0;n<t.length;n++)e.writeFixed32(t[n])}function Jg(t,e){for(var n=0;n<t.length;n++)e.writeSFixed32(t[n])}function eE(t,e){for(var n=0;n<t.length;n++)e.writeFixed64(t[n])}function tE(t,e){for(var n=0;n<t.length;n++)e.writeSFixed64(t[n])}function Gi(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+t[e+3]*16777216}function er(t,e,n){t[n]=e,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24}function nc(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function nE(t,e,n){for(var r="",i=e;i<n;){var o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a>n)break;var u,l,c;a===1?o<128&&(s=o):a===2?(u=t[i+1],(u&192)===128&&(s=(o&31)<<6|u&63,s<=127&&(s=null))):a===3?(u=t[i+1],l=t[i+2],(u&192)===128&&(l&192)===128&&(s=(o&15)<<12|(u&63)<<6|l&63,(s<=2047||s>=55296&&s<=57343)&&(s=null))):a===4&&(u=t[i+1],l=t[i+2],c=t[i+3],(u&192)===128&&(l&192)===128&&(c&192)===128&&(s=(o&15)<<18|(u&63)<<12|(l&63)<<6|c&63,(s<=65535||s>=1114112)&&(s=null))),s===null?(s=65533,a=1):s>65535&&(s-=65536,r+=String.fromCharCode(s>>>10&1023|55296),s=56320|s&1023),r+=String.fromCharCode(s),i+=a}return r}function rE(t,e,n){return Kd.decode(t.subarray(e,n))}function iE(t,e,n){for(var r=0,i,o;r<e.length;r++){if(i=e.charCodeAt(r),i>55295&&i<57344)if(o)if(i<56320){t[n++]=239,t[n++]=191,t[n++]=189,o=i;continue}else i=o-55296<<10|i-56320|65536,o=null;else{i>56319||r+1===e.length?(t[n++]=239,t[n++]=191,t[n++]=189):o=i;continue}else o&&(t[n++]=239,t[n++]=191,t[n++]=189,o=null);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:(i<65536?t[n++]=i>>12|224:(t[n++]=i>>18|240,t[n++]=i>>12&63|128),t[n++]=i>>6&63|128),t[n++]=i&63|128)}return n}const oE=Yt(Vg);var sE=Object.defineProperty,aE=Object.defineProperties,uE=Object.getOwnPropertyDescriptors,rc=Object.getOwnPropertySymbols,lE=Object.prototype.hasOwnProperty,cE=Object.prototype.propertyIsEnumerable,ic=(t,e,n)=>e in t?sE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,oc=(t,e)=>{for(var n in e||(e={}))lE.call(e,n)&&ic(t,n,e[n]);if(rc)for(var n of rc(e))cE.call(e,n)&&ic(t,n,e[n]);return t},hE=(t,e)=>aE(t,uE(e)),sc=class{constructor(t,e,n,r){this.vectorLayerCache={},this.x=e,this.y=n,this.z=r,this.vectorTile=new zg(new oE(t))}getTileData(t){if(!t||!this.vectorTile.layers[t])return[];if(this.vectorLayerCache[t])return this.vectorLayerCache[t];const e=this.vectorTile.layers[t];if(Array.isArray(e.features))return this.vectorLayerCache[t]=e.features,e.features;const n=[];for(let r=0;r<e.length;r++){const o=e.feature(r).toGeoJSON(this.x,this.y,this.z);n.push(hE(oc({},o),{properties:oc({id:o.id},o.properties)}))}return this.vectorLayerCache[t]=n,n}getFeatureById(){throw new Error("Method not implemented.")}},fE=Object.defineProperty,dE=Object.defineProperties,pE=Object.getOwnPropertyDescriptors,ac=Object.getOwnPropertySymbols,_E=Object.prototype.hasOwnProperty,vE=Object.prototype.propertyIsEnumerable,uc=(t,e,n)=>e in t?fE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ma=(t,e)=>{for(var n in e||(e={}))_E.call(e,n)&&uc(t,n,e[n]);if(ac)for(var n of ac(e))vE.call(e,n)&&uc(t,n,e[n]);return t},qd=(t,e)=>dE(t,pE(e)),mE=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),gE={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0},EE=(t,e,n,r,i)=>mE(void 0,null,function*(){const o=mr(t,e);return new Promise(s=>{if(i)i({x:n.x,y:n.y,z:n.z},(a,u)=>{if(a||!u)s(void 0);else{const l=new sc(u,n.x,n.y,n.z);s(l)}});else{const a=hu(qd(Ma({},r),{url:o}),(u,l)=>{if(u||!l)s(void 0);else{const c=new sc(l,n.x,n.y,n.z);s(c)}});n.xhrCancel=()=>a.cancel()}})});function yE(t,e){const n=Array.isArray(t)?t[0]:t,r=(o,s)=>EE(n,o,s,e==null?void 0:e.requestParameters,e==null?void 0:e.getCustomData),i=qd(Ma(Ma({},gE),e),{getTileData:r});return{data:n,dataArray:[],tilesetOptions:i,isTile:!0}}function TE(t,e,n){switch(t){case"+":return e+n;case"-":return e-n;case"*":return e*n;case"/":return e/n;case"%":return e%n;case"^":return Math.pow(e,n);case"abs":return Math.abs(e);case"floor":return Math.floor(e);case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"sin":return Math.sin(e);case"cos":return Math.cos(e);case"atan":return n===-1?Math.atan(e):Math.atan2(e,n);case"min":return Math.min(e,n);case"max":return Math.max(e,n);case"log10":return Math.log(e);case"log2":return Math.log2(e);default:return console.warn("Calculate symbol err! Return default 0"),0}}function lr(t){if(typeof t=="number")return()=>t;if(!Array.isArray(t))return()=>0;if(t.length===2&&t[0]==="band"&&typeof t[1]=="number"){const i=t[1];return(o,s)=>{var a,u;try{return(u=(a=o[i])==null?void 0:a[s])!=null?u:0}catch{return 0}}}const e=t[0];if(["abs","floor","round","ceil","sin","cos","log10","log2"].includes(e)){const i=lr(t[1]),s={abs:Math.abs,floor:Math.floor,round:Math.round,ceil:Math.ceil,sin:Math.sin,cos:Math.cos,log10:Math.log,log2:Math.log2}[e]||(a=>a);return(a,u)=>s(i(a,u))}if(e==="atan"){const i=lr(t[1]),o=t[2]!==void 0&&t[2]!==-1?lr(t[2]):null;return(s,a)=>{const u=i(s,a);return o?Math.atan2(u,o(s,a)):Math.atan(u)}}const n=lr(t[1]),r=lr(t[2]);return(i,o)=>{const s=n(i,o),a=r(i,o);return TE(e,s,a)}}function pi(t,e){const{width:n,height:r}=e[0],i=e.map(u=>u.rasterData),o=n*r,s=lr(t),a=new Float32Array(o);for(let u=0;u<o;u++)a[u]=s(i,u);return a}var AE={nd:{type:"operation",expression:["/",["-",["band",1],["band",0]],["+",["band",1],["band",0]]]},rgb:{type:"function",method:SE}};function SE(t,e){const n=t[0].rasterData,r=t[1].rasterData,i=t[2].rasterData,o=n.length,s=new Uint8Array(o*3),[a,u]=(e==null?void 0:e.countCut)||[2,98],l=(e==null?void 0:e.RMinMax)||Er(n,a,u),c=(e==null?void 0:e.GMinMax)||Er(r,a,u),h=(e==null?void 0:e.BMinMax)||Er(i,a,u);for(let f=0;f<o;f++){const p=f*3;s[p]=Math.max(0,n[f]-l[0]),s[p+1]=Math.max(0,r[f]-c[0]),s[p+2]=Math.max(0,i[f]-h[0])}return{rasterData:s,rMinMax:l,gMinMax:c,bMinMax:h}}function Wo(t,e,n=0,r=t.length-1){if(n===r)return t[n];const i=RE(t,n,r);return e===i?t[e]:e<i?Wo(t,e,n,i-1):Wo(t,e,i+1,r)}function RE(t,e,n){const r=t[n];let i=e;for(let o=e;o<n;o++)t[o]<=r&&([t[i],t[o]]=[t[o],t[i]],i++);return[t[i],t[n]]=[t[n],t[i]],i}function Er(t,e,n){const r=t.length,i=Math.ceil(r*e/100),o=Math.ceil(r*n/100),s=Array.from(t),a=Wo(s,i),u=Wo(s,o);return[a,u]}var xE=Object.defineProperty,CE=Object.defineProperties,bE=Object.getOwnPropertyDescriptors,lc=Object.getOwnPropertySymbols,IE=Object.prototype.hasOwnProperty,ME=Object.prototype.propertyIsEnumerable,cc=(t,e,n)=>e in t?xE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,OE=(t,e)=>{for(var n in e||(e={}))IE.call(e,n)&&cc(t,n,e[n]);if(lc)for(var n of lc(e))ME.call(e,n)&&cc(t,n,e[n]);return t},PE=(t,e)=>CE(t,bE(e)),Qd=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())});function Tu(t,e,n){return Qd(this,null,function*(){if(t.length===0)return{rasterData:[0],width:1,heigh:1};const r=yield Promise.all(t.map(({data:u,bands:l=[0]})=>e(u,l))),i=[];r.forEach(u=>{Array.isArray(u)?i.push(...u):i.push(u)});const{width:o,height:s}=i[0];let a;switch(typeof n){case"function":a=n(i);break;case"object":Array.isArray(n)?a={rasterData:pi(n,i)}:a=FE(n,i);break;default:a={rasterData:i[0].rasterData}}return PE(OE({},a),{width:o,height:s})})}function FE(t,e){const n=AE[t.type];if(n.type==="function")return n.method(e,t==null?void 0:t.options);if(n.type==="operation")return t.type==="rgb"?BE(n.expression,e):{rasterData:pi(n.expression,e)}}function BE(t,e){t.r===void 0&&console.warn("Channel R lost in Operation! Use band[0] to fill!"),t.g===void 0&&console.warn("Channel G lost in Operation! Use band[0] to fill!"),t.b===void 0&&console.warn("Channel B lost in Operation! Use band[0] to fill!");const n=pi(t.r||["band",0],e),r=pi(t.g||["band",0],e),i=pi(t.b||["band",0],e);return[n,r,i]}function Oa(t,e,n,r){return Qd(this,null,function*(){const i=yield Tu(t,e,n);r(null,{data:i})})}function NE(t,e){const{extent:n=[121.168,30.2828,121.384,30.4219],coordinates:r,width:i,height:o,min:s,max:a,format:u,operation:l}=e;let c,h,f;if(u===void 0||kd(t))c=Array.from(t),h=i,f=o;else{const v=Array.isArray(t)?t:[t];c=Tu(v,u,l)}const p=Br(r,n);return{_id:1,dataArray:[{_id:1,data:c,width:h,height:f,min:s,max:a,coordinates:p}]}}function br(t){"@babel/helpers - typeof";return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},br(t)}function DE(t,e){if(br(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(br(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jd(t){var e=DE(t,"string");return br(e)=="symbol"?e:e+""}function d(t,e,n){return(e=Jd(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hc(Object(n),!0).forEach(function(r){d(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}let Bi=function(t){return t.Normal="normal",t.PostProcessing="post-processing",t}({}),g=function(t){return t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.FUNC_ADD=32774]="FUNC_ADD",t[t.BLEND_EQUATION=32777]="BLEND_EQUATION",t[t.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",t[t.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",t[t.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",t[t.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",t[t.MAX_EXT=32776]="MAX_EXT",t[t.MIN_EXT=32775]="MIN_EXT",t[t.BLEND_DST_RGB=32968]="BLEND_DST_RGB",t[t.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",t[t.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",t[t.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",t[t.BLEND_COLOR=32773]="BLEND_COLOR",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",t[t.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.BUFFER_SIZE=34660]="BUFFER_SIZE",t[t.BUFFER_USAGE=34661]="BUFFER_USAGE",t[t.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK",t[t.CULL_FACE=2884]="CULL_FACE",t[t.BLEND=3042]="BLEND",t[t.DITHER=3024]="DITHER",t[t.STENCIL_TEST=2960]="STENCIL_TEST",t[t.DEPTH_TEST=2929]="DEPTH_TEST",t[t.SCISSOR_TEST=3089]="SCISSOR_TEST",t[t.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",t[t.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",t[t.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",t[t.NO_ERROR=0]="NO_ERROR",t[t.INVALID_ENUM=1280]="INVALID_ENUM",t[t.INVALID_VALUE=1281]="INVALID_VALUE",t[t.INVALID_OPERATION=1282]="INVALID_OPERATION",t[t.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",t[t.CW=2304]="CW",t[t.CCW=2305]="CCW",t[t.LINE_WIDTH=2849]="LINE_WIDTH",t[t.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",t[t.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",t[t.CULL_FACE_MODE=2885]="CULL_FACE_MODE",t[t.FRONT_FACE=2886]="FRONT_FACE",t[t.DEPTH_RANGE=2928]="DEPTH_RANGE",t[t.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",t[t.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",t[t.DEPTH_FUNC=2932]="DEPTH_FUNC",t[t.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",t[t.STENCIL_FUNC=2962]="STENCIL_FUNC",t[t.STENCIL_FAIL=2964]="STENCIL_FAIL",t[t.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",t[t.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",t[t.STENCIL_REF=2967]="STENCIL_REF",t[t.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",t[t.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",t[t.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",t[t.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",t[t.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",t[t.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",t[t.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",t[t.VIEWPORT=2978]="VIEWPORT",t[t.SCISSOR_BOX=3088]="SCISSOR_BOX",t[t.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",t[t.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",t[t.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",t[t.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",t[t.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",t[t.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",t[t.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",t[t.RED_BITS=3410]="RED_BITS",t[t.GREEN_BITS=3411]="GREEN_BITS",t[t.BLUE_BITS=3412]="BLUE_BITS",t[t.ALPHA_BITS=3413]="ALPHA_BITS",t[t.DEPTH_BITS=3414]="DEPTH_BITS",t[t.STENCIL_BITS=3415]="STENCIL_BITS",t[t.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",t[t.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",t[t.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",t[t.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",t[t.SAMPLES=32937]="SAMPLES",t[t.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",t[t.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",t[t.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",t[t.DONT_CARE=4352]="DONT_CARE",t[t.FASTEST=4353]="FASTEST",t[t.NICEST=4354]="NICEST",t[t.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER",t[t.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",t[t.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",t[t.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",t[t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",t[t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",t[t.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",t[t.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",t[t.SHADER_TYPE=35663]="SHADER_TYPE",t[t.DELETE_STATUS=35712]="DELETE_STATUS",t[t.LINK_STATUS=35714]="LINK_STATUS",t[t.VALIDATE_STATUS=35715]="VALIDATE_STATUS",t[t.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",t[t.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",t[t.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",t[t.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",t[t.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP",t[t.VENDOR=7936]="VENDOR",t[t.RENDERER=7937]="RENDERER",t[t.VERSION=7938]="VERSION",t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",t[t.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",t[t.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",t[t.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",t[t.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE=5890]="TEXTURE",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",t[t.TEXTURE0=33984]="TEXTURE0",t[t.TEXTURE1=33985]="TEXTURE1",t[t.TEXTURE2=33986]="TEXTURE2",t[t.TEXTURE3=33987]="TEXTURE3",t[t.TEXTURE4=33988]="TEXTURE4",t[t.TEXTURE5=33989]="TEXTURE5",t[t.TEXTURE6=33990]="TEXTURE6",t[t.TEXTURE7=33991]="TEXTURE7",t[t.TEXTURE8=33992]="TEXTURE8",t[t.TEXTURE9=33993]="TEXTURE9",t[t.TEXTURE10=33994]="TEXTURE10",t[t.TEXTURE11=33995]="TEXTURE11",t[t.TEXTURE12=33996]="TEXTURE12",t[t.TEXTURE13=33997]="TEXTURE13",t[t.TEXTURE14=33998]="TEXTURE14",t[t.TEXTURE15=33999]="TEXTURE15",t[t.TEXTURE16=34e3]="TEXTURE16",t[t.TEXTURE17=34001]="TEXTURE17",t[t.TEXTURE18=34002]="TEXTURE18",t[t.TEXTURE19=34003]="TEXTURE19",t[t.TEXTURE20=34004]="TEXTURE20",t[t.TEXTURE21=34005]="TEXTURE21",t[t.TEXTURE22=34006]="TEXTURE22",t[t.TEXTURE23=34007]="TEXTURE23",t[t.TEXTURE24=34008]="TEXTURE24",t[t.TEXTURE25=34009]="TEXTURE25",t[t.TEXTURE26=34010]="TEXTURE26",t[t.TEXTURE27=34011]="TEXTURE27",t[t.TEXTURE28=34012]="TEXTURE28",t[t.TEXTURE29=34013]="TEXTURE29",t[t.TEXTURE30=34014]="TEXTURE30",t[t.TEXTURE31=34015]="TEXTURE31",t[t.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",t[t.REPEAT=10497]="REPEAT",t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",t[t.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",t[t.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",t[t.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",t[t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",t[t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",t[t.COMPILE_STATUS=35713]="COMPILE_STATUS",t[t.LOW_FLOAT=36336]="LOW_FLOAT",t[t.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",t[t.HIGH_FLOAT=36338]="HIGH_FLOAT",t[t.LOW_INT=36339]="LOW_INT",t[t.MEDIUM_INT=36340]="MEDIUM_INT",t[t.HIGH_INT=36341]="HIGH_INT",t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.RENDERBUFFER=36161]="RENDERBUFFER",t[t.RGBA4=32854]="RGBA4",t[t.RGB5_A1=32855]="RGB5_A1",t[t.RGB565=36194]="RGB565",t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX=6401]="STENCIL_INDEX",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",t[t.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",t[t.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",t[t.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",t[t.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",t[t.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",t[t.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",t[t.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",t[t.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",t[t.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",t[t.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",t[t.NONE=0]="NONE",t[t.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",t[t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",t[t.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",t[t.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",t[t.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",t[t.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",t[t.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",t[t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",t[t.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",t[t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",t[t.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",t}({});const wE=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`,{camelCase:LE,isNil:UE,upperFirst:kE}=we;class fn{constructor(){d(this,"shaderModuleService",void 0),d(this,"rendererService",void 0),d(this,"config",void 0),d(this,"quad",wE),d(this,"enabled",!0),d(this,"renderToScreen",!1),d(this,"model",void 0),d(this,"name",void 0),d(this,"optionsToUpdate",{})}getName(){return this.name}setName(e){this.name=e}getType(){return Bi.PostProcessing}init(e,n){this.config=n,this.rendererService=e.getContainer().rendererService,this.shaderModuleService=e.getContainer().shaderModuleService;const{createAttribute:r,createBuffer:i,createModel:o}=this.rendererService,{vs:s,fs:a,uniforms:u}=this.setupShaders();this.model=o({vs:s,fs:a,attributes:{a_Position:r({buffer:i({data:[-4,-4,4,-4,0,4],type:g.FLOAT}),size:2})},uniforms:D(D({u_Texture:null},u),this.config&&this.convertOptionsToUniforms(this.config)),depth:{enable:!1},count:3,blend:{enable:this.getName()==="copy"}})}render(e,n){const r=e.multiPassRenderer.getPostProcessor(),{useFramebuffer:i,getViewportSize:o,clear:s}=this.rendererService,{width:a,height:u}=o();i(this.renderToScreen?null:r.getWriteFBO(),()=>{s({framebuffer:r.getWriteFBO(),color:[0,0,0,0],depth:1,stencil:0});const l=D({u_BloomFinal:0,u_Texture:r.getReadFBO(),u_ViewportSize:[a,u]},this.convertOptionsToUniforms(this.optionsToUpdate));n&&(l.u_BloomFinal=1,l.u_Texture2=n),this.model.draw({uniforms:l})})}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}setRenderToScreen(e){this.renderToScreen=e}updateOptions(e){this.optionsToUpdate=D(D({},this.optionsToUpdate),e)}setupShaders(){throw new Error("Method not implemented.")}convertOptionsToUniforms(e){const n={};return Object.keys(e).forEach(r=>{UE(e[r])||(n[`u_${kE(LE(r))}`]=e[r])}),n}}function zE(t){let e=0;switch(t){case"vec2":case"ivec2":e=2;break;case"vec3":case"ivec3":e=3;break;case"vec4":case"ivec4":case"mat2":e=4;break;case"mat3":e=9;break;case"mat4":e=16;break}return e}const VE=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;function fc(t,e=!1){const n={};return t=t.replace(VE,(r,i,o)=>{const s=o.split(":"),a=s[0].trim();let u="";switch(s.length>1&&(u=s[1].trim()),i){case"bool":u=u==="true";break;case"float":case"int":u=Number(u);break;case"vec2":case"vec3":case"vec4":case"ivec2":case"ivec3":case"ivec4":case"mat2":case"mat3":case"mat4":u?u=u.replace("[","").replace("]","").split(",").reduce((l,c)=>(l.push(Number(c.trim())),l),[]):u=new Array(zE(i)).fill(0);break}return n[a]=u,`${e?"uniform ":""}${i} ${a};
`}),{content:t,uniforms:n}}function Hs(t){let{content:e,uniforms:n}=fc(t,!0);return e=e.replace(/(\s*uniform\s*.*\s*){((?:\s*.*\s*)*?)};/g,(r,i,o)=>{o=o.trim().replace(/^.*$/gm,u=>`uniform ${u}`);const{content:s,uniforms:a}=fc(o);return Object.assign(n,a),`${i}{
${s}
};`}),{content:e,uniforms:n}}const wn={ProjectionMatrix:"u_ProjectionMatrix",ViewMatrix:"u_ViewMatrix",ViewProjectionMatrix:"u_ViewProjectionMatrix",Zoom:"u_Zoom",ZoomScale:"u_ZoomScale",FocalDistance:"u_FocalDistance",CameraPosition:"u_CameraPosition"};let jo=function(t){return t.TOPRIGHT="topright",t.TOPLEFT="topleft",t.BOTTOMRIGHT="bottomright",t.BOTTOMLEFT="bottomleft",t.TOPCENTER="topcenter",t.BOTTOMCENTER="bottomcenter",t.LEFTCENTER="leftcenter",t.RIGHTCENTER="rightcenter",t.LEFTTOP="lefttop",t.RIGHTTOP="righttop",t.LEFTBOTTOM="leftbottom",t.RIGHTBOTTOM="rightbottom",t}({}),$o=function(t){return t[t.LNGLAT=1]="LNGLAT",t[t.LNGLAT_OFFSET=2]="LNGLAT_OFFSET",t[t.VECTOR_TILE=3]="VECTOR_TILE",t[t.IDENTITY=4]="IDENTITY",t[t.METER_OFFSET=5]="METER_OFFSET",t}({});const tr={CoordinateSystem:"u_CoordinateSystem",ViewportCenter:"u_ViewportCenter",ViewportCenterProjection:"u_ViewportCenterProjection",PixelsPerDegree:"u_PixelsPerDegree",PixelsPerDegree2:"u_PixelsPerDegree2",PixelsPerMeter:"u_PixelsPerMeter"};var He={LayerInitStart:"layerInitStart",LayerInitEnd:"layerInitEnd",SourceInitStart:"sourceInitStart",SourceInitEnd:"sourceInitEnd",ScaleInitStart:"scaleInitStart",ScaleInitEnd:"scaleInitEnd",MappingStart:"mappingStart",MappingEnd:"mappingEnd",BuildModelStart:"buildModelStart",BuildModelEnd:"buildModelEnd"};let Ye=function(t){return t.Hover="hover",t.Click="click",t.DblClick="dblclick",t.Select="select",t.Active="active",t.Drag="drag",t.Press="press",t}({}),yn=function(t){return t.normal="normal",t.additive="additive",t.subtractive="subtractive",t.min="min",t.max="max",t.none="none",t}({}),Un=function(t){return t.MULTIPLE="MULTIPLE",t.SINGLE="SINGLE",t}({}),ps=function(t){return t.AND="and",t.OR="or",t}({}),Ke=function(t){return t.INIT="init",t.UPDATE="update",t}({}),_e=function(t){return t.LINEAR="linear",t.SEQUENTIAL="sequential",t.POWER="power",t.LOG="log",t.IDENTITY="identity",t.TIME="time",t.QUANTILE="quantile",t.QUANTIZE="quantize",t.THRESHOLD="threshold",t.CAT="cat",t.DIVERGING="diverging",t.CUSTOM="threshold",t}({}),nr=function(t){return t.CONSTANT="constant",t.VARIABLE="variable",t}({}),$=function(t){return t[t.Attribute=0]="Attribute",t[t.InstancedAttribute=1]="InstancedAttribute",t[t.Uniform=2]="Uniform",t}({});const dc=["mapload","mapchange","mapAfterFrameChange"];var Au={exports:{}};Au.exports=Ni;Au.exports.default=Ni;var yr=1e20;function Ni(t,e,n,r,i,o){this.fontSize=t||24,this.buffer=e===void 0?3:e,this.cutoff=r||.25,this.fontFamily=i||"sans-serif",this.fontWeight=o||"normal",this.radius=n||8;var s=this.size=this.fontSize+this.buffer*2,a=s+this.buffer*2;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=s,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textAlign="left",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Uint16Array(a),this.useMetrics=this.ctx.measureText("A").actualBoundingBoxLeft!==void 0,this.middle=Math.round(s/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function HE(t,e,n,r,i,o,s){o.fill(yr,0,e*n),s.fill(0,0,e*n);for(var a=(e-r)/2,u=0;u<i;u++)for(var l=0;l<r;l++){var c=(u+a)*e+l+a,h=t.data[4*(u*r+l)+3]/255;if(h===1)o[c]=0,s[c]=yr;else if(h===0)o[c]=yr,s[c]=0;else{var f=Math.max(0,.5-h),p=Math.max(0,h-.5);o[c]=f*f,s[c]=p*p}}}function XE(t,e,n,r,i,o,s){for(var a=0;a<e*n;a++){var u=Math.sqrt(r[a])-Math.sqrt(i[a]);t[a]=Math.round(255-255*(u/o+s))}}Ni.prototype._draw=function(t,e){var n=this.ctx.measureText(t),r=n.width,i=2*this.buffer,o,s,a,u,l,c,h,f;e&&this.useMetrics?(l=Math.floor(n.actualBoundingBoxAscent),f=this.buffer+Math.ceil(n.actualBoundingBoxAscent),c=this.buffer,h=this.buffer,s=Math.min(this.size,Math.ceil(n.actualBoundingBoxRight-n.actualBoundingBoxLeft)),u=Math.min(this.size-c,Math.ceil(n.actualBoundingBoxAscent+n.actualBoundingBoxDescent)),o=s+i,a=u+i,this.ctx.textBaseline="alphabetic"):(o=s=this.size,a=u=this.size,l=19*this.fontSize/24,c=h=0,f=this.middle,this.ctx.textBaseline="middle");var p;s&&u&&(this.ctx.clearRect(h,c,s,u),this.ctx.fillText(t,this.buffer,f),p=this.ctx.getImageData(h,c,s,u));var _=new Uint8ClampedArray(o*a);return HE(p,o,a,s,u,this.gridOuter,this.gridInner),pc(this.gridOuter,o,a,this.f,this.v,this.z),pc(this.gridInner,o,a,this.f,this.v,this.z),XE(_,o,a,this.gridOuter,this.gridInner,this.radius,this.cutoff),{data:_,metrics:{width:s,height:u,sdfWidth:o,sdfHeight:a,top:l,left:0,advance:r}}};Ni.prototype.draw=function(t){return this._draw(t,!1).data};Ni.prototype.drawWithMetrics=function(t){return this._draw(t,!0)};function pc(t,e,n,r,i,o){for(var s=0;s<e;s++)_c(t,s,e,n,r,i,o);for(var a=0;a<n;a++)_c(t,a*e,1,e,r,i,o)}function _c(t,e,n,r,i,o,s){var a,u,l,c;for(o[0]=0,s[0]=-yr,s[1]=yr,a=0;a<r;a++)i[a]=t[e+a*n];for(a=1,u=0,l=0;a<r;a++){do c=o[u],l=(i[a]-i[c]+a*a-c*c)/(a-c)/2;while(l<=s[u]&&--u>-1);u++,o[u]=a,s[u]=l,s[u+1]=yr}for(a=0,u=0;a<r;a++){for(;s[u+1]<a;)u++;c=o[u],t[e+a*n]=i[c]+(a-c)*(a-c)}}var WE=Au.exports;const jE=Yt(WE),Xr=30;function $E({characterSet:t,getFontWidth:e,fontHeight:n,buffer:r,maxCanvasWidth:i,mapping:o={},xOffset:s=0,yOffset:a=0}){let u=0,l=s;Array.from(t).forEach((h,f)=>{if(!o[h]){const p=e(h,f);l+Xr>i&&(l=0,u++),o[h]={x:l,y:a+u*Xr,width:Xr,height:Xr,advance:p},l+=Xr}});const c=n+r*2;return{mapping:o,xOffset:l,yOffset:a+u*c,canvasHeight:ep(a+(u+1)*c)}}function ZE(t,e,n){let r=0,i=0,o=0,s=[];const a={};for(const l of t)if(!a[l.id]){const{size:c}=l;r+c+e>n&&(vc(a,s,i),r=0,i=o+i+e,o=0,s=[]),s.push({icon:l,xOffset:r}),r=r+c+e,o=Math.max(o,c)}s.length>0&&vc(a,s,i);const u=ep(o+i+e);return{mapping:a,canvasHeight:u}}function vc(t,e,n){for(const r of e){const{icon:i,xOffset:o}=r;t[i.id]=D(D({},i),{},{x:o,y:n,image:i.image,width:i.width,height:i.height})}}function ep(t){return Math.pow(2,Math.ceil(Math.log2(t)))}const YE=r1(),GE="sans-serif",KE="normal",qE=24,QE=3,JE=.25,e1=8,mc=1024,t1=1,gc=1,n1=3;function r1(){const t=[];for(let e=32;e<128;e++)t.push(String.fromCharCode(e));return t}function Ec(t,e,n,r){t.font=`${r} ${n}px ${e}`,t.fillStyle="black",t.textBaseline="middle"}function yc(t,e){for(let n=0;n<t.length;n++)e.data[4*n+3]=t[n]}function Tc(t){return String.fromCharCode(parseInt(t.replace("&#x","").replace(";",""),16))}class i1 extends pt.EventEmitter{constructor(...e){super(...e),d(this,"fontAtlas",void 0),d(this,"iconFontMap",void 0),d(this,"iconFontGlyphs",{}),d(this,"fontOptions",void 0),d(this,"key",void 0),d(this,"cache",new Sv(n1))}get scale(){return gc}get canvas(){const e=this.cache.get(this.key);return e&&e.data}get mapping(){const e=this.cache.get(this.key);return e&&e.mapping||{}}getCanvasByKey(e){const n=this.cache.get(e);return n&&n.data}getMappingByKey(e){const n=this.cache.get(e);return n&&n.mapping||{}}init(){this.cache.clear(),this.fontOptions={fontFamily:GE,fontWeight:KE,characterSet:YE,fontSize:qE,buffer:QE,sdf:!0,cutoff:JE,radius:e1,iconfont:!1},this.key="",this.iconFontMap=new Map}addIconGlyphs(e){e.forEach(n=>{this.iconFontGlyphs[n.name]=n.unicode})}addIconFont(e,n){this.iconFontMap.set(e,n)}getIconFontKey(e){return this.iconFontMap.get(e)||e}getGlyph(e){return this.iconFontGlyphs[e]?String.fromCharCode(parseInt(this.iconFontGlyphs[e],16)):""}setFontOptions(e){this.fontOptions=D(D({},this.fontOptions),e),this.key=this.getKey();const n=this.getNewChars(this.key,this.fontOptions.characterSet),r=this.cache.get(this.key);if(r&&n.length===0)return;const i=this.generateFontAtlas(this.key,n,r);this.fontAtlas=i,this.cache.set(this.key,i)}addFontFace(e,n){const r=document.createElement("style");r.type="text/css",r.innerText=`
        @font-face{
            font-family: '${e}';
            src: url('${n}') format('woff2'),
            url('${n}') format('woff'),
            url('${n}') format('truetype');
        }`,r.onload=()=>{if(document.fonts)try{document.fonts.load(`24px ${e}`,"L7text"),document.fonts.ready.then(()=>{this.emit("fontloaded",{fontFamily:e})})}catch(i){console.warn("当前环境不支持 document.fonts !"),console.warn("当前环境不支持 iconfont !"),console.warn(i)}},document.getElementsByTagName("head")[0].appendChild(r)}destroy(){this.cache.clear(),this.iconFontMap.clear()}generateFontAtlas(e,n,r){const{fontFamily:i,fontWeight:o,fontSize:s,buffer:a,sdf:u,radius:l,cutoff:c,iconfont:h}=this.fontOptions;let f=r&&r.data;f||(f=window.document.createElement("canvas"),f.width=mc);const p=f.getContext("2d",{willReadFrequently:!0});Ec(p,i,s,o);const{mapping:_,canvasHeight:v,xOffset:m,yOffset:y}=$E(D({getFontWidth:S=>p.measureText(h?Tc(S):S).width,fontHeight:s*gc,buffer:a,characterSet:n,maxCanvasWidth:mc},r&&{mapping:r.mapping,xOffset:r.xOffset,yOffset:r.yOffset})),T=p.getImageData(0,0,f.width,f.height);if(f.height=v,p.putImageData(T,0,0),Ec(p,i,s,o),u){const S=new jE(s,a,l,c,i,o),x=p.getImageData(0,0,S.size,S.size);for(const C of n){if(h){const M=Tc(C),P=S.draw(M);yc(P,x)}else yc(S.draw(C),x);p.putImageData(x,_[C].x,_[C].y)}}else for(const S of n)p.fillText(S,_[S].x,_[S].y+s*t1);return{xOffset:m,yOffset:y,mapping:_,data:f,width:f.width,height:f.height}}getKey(){const{fontFamily:e,fontWeight:n}=this.fontOptions;return`${e}_${n}`}getNewChars(e,n){const r=this.cache.get(e);if(!r)return n;const i=[],o=r.mapping,s=new Set(Object.keys(o));return new Set(n).forEach(u=>{s.has(u)||i.push(u)}),i}}function Ac(t,e,n,r,i,o,s){try{var a=t[o](s),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(r,i)}function L(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function s(u){Ac(o,r,i,s,a,"next",u)}function a(u){Ac(o,r,i,s,a,"throw",u)}s(void 0)})}}const o1=3,Sc=1024,Wr=64;class s1 extends pt.EventEmitter{constructor(...e){super(...e),d(this,"canvasHeight",128),d(this,"texture",void 0),d(this,"canvas",void 0),d(this,"iconData",void 0),d(this,"iconMap",void 0),d(this,"ctx",void 0),d(this,"loadingImageCount",0)}isLoading(){return this.loadingImageCount===0}init(){this.iconData=[],this.iconMap={},this.canvas=window.document.createElement("canvas"),this.canvas.width=128,this.canvas.height=128,this.ctx=this.canvas.getContext("2d")}addImage(e,n){var r=this;return L(function*(){let i=new Image;r.loadingImageCount++,r.hasImage(e)?console.warn("Image Id already exists"):r.iconData.push({id:e,size:Wr}),r.updateIconMap(),i=yield r.loadImage(n);const o=r.iconData.find(s=>s.id===e);o&&(o.image=i,o.width=i.width,o.height=i.height),r.update()})()}addImageMini(e,n,r){const i=r.getSceneConfig().canvas;let o=i.createImage();if(this.loadingImageCount++,this.hasImage(e))throw new Error("Image Id already exists");this.iconData.push({id:e,size:Wr}),this.updateIconMap(),this.loadImageMini(n,i).then(s=>{o=s;const a=this.iconData.find(u=>u.id===e);a&&(a.image=o,a.width=o.width,a.height=o.height),this.update()})}getTexture(){return this.texture}getIconMap(){return this.iconMap}getCanvas(){return this.canvas}hasImage(e){return this.iconMap.hasOwnProperty(e)}removeImage(e){this.hasImage(e)&&(this.iconData=this.iconData.filter(n=>n.id!==e),delete this.iconMap[e],this.update())}destroy(){this.removeAllListeners("imageUpdate"),this.iconData=[],this.iconMap={}}loadImage(e){return new Promise((n,r)=>{if(e instanceof HTMLImageElement){n(e);return}const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{n(i)},i.onerror=()=>{r(new Error("Could not load image at "+e))},i.src=e instanceof File?URL.createObjectURL(e):e})}update(){this.updateIconMap(),this.updateIconAtlas(),this.loadingImageCount--,this.loadingImageCount===0&&this.emit("imageUpdate")}updateIconAtlas(){this.canvas.width=Sc,this.canvas.height=this.canvasHeight,Object.keys(this.iconMap).forEach(e=>{const{x:n,y:r,image:i,width:o=64,height:s=64}=this.iconMap[e],u=Math.max(o,s)/Wr,l=s/u,c=o/u;i&&this.ctx.drawImage(i,n+(Wr-c)/2,r+(Wr-l)/2,c,l)})}updateIconMap(){const{mapping:e,canvasHeight:n}=ZE(this.iconData,o1,Sc);this.iconMap=e,this.canvasHeight=n}loadImageMini(e,n){return new Promise((r,i)=>{const o=n.createImage();o.crossOrigin="anonymous",o.onload=()=>{r(o)},o.onerror=()=>{i(new Error("Could not load image at "+e))},o.src=e})}}var qe=1e-6,st=typeof Float32Array<"u"?Float32Array:Array;function a1(){var t=new st(4);return st!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function u1(t,e,n){var r=e[0],i=e[1],o=e[2],s=e[3],a=Math.sin(n),u=Math.cos(n);return t[0]=r*u+o*a,t[1]=i*u+s*a,t[2]=r*-a+o*u,t[3]=i*-a+s*u,t}function _s(){var t=new st(16);return st!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function l1(t){var e=new st(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function c1(t,e,n,r,i,o,s,a,u,l,c,h,f,p,_,v){var m=new st(16);return m[0]=t,m[1]=e,m[2]=n,m[3]=r,m[4]=i,m[5]=o,m[6]=s,m[7]=a,m[8]=u,m[9]=l,m[10]=c,m[11]=h,m[12]=f,m[13]=p,m[14]=_,m[15]=v,m}function Rc(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ri(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],u=e[6],l=e[7],c=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],y=e[15],T=n*a-r*s,S=n*u-i*s,x=n*l-o*s,C=r*u-i*a,M=r*l-o*a,P=i*l-o*u,F=c*v-h*_,V=c*m-f*_,B=c*y-p*_,O=h*m-f*v,N=h*y-p*v,U=f*y-p*m,z=T*U-S*N+x*O+C*B-M*V+P*F;return z?(z=1/z,t[0]=(a*U-u*N+l*O)*z,t[1]=(i*N-r*U-o*O)*z,t[2]=(v*P-m*M+y*C)*z,t[3]=(f*M-h*P-p*C)*z,t[4]=(u*B-s*U-l*V)*z,t[5]=(n*U-i*B+o*V)*z,t[6]=(m*x-_*P-y*S)*z,t[7]=(c*P-f*x+p*S)*z,t[8]=(s*N-a*B+l*F)*z,t[9]=(r*B-n*N-o*F)*z,t[10]=(_*M-v*x+y*T)*z,t[11]=(h*x-c*M-p*T)*z,t[12]=(a*V-s*O-u*F)*z,t[13]=(n*O-r*V+i*F)*z,t[14]=(v*S-_*C-m*T)*z,t[15]=(c*C-h*S+f*T)*z,t):null}function bn(t,e,n){var r=e[0],i=e[1],o=e[2],s=e[3],a=e[4],u=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],_=e[11],v=e[12],m=e[13],y=e[14],T=e[15],S=n[0],x=n[1],C=n[2],M=n[3];return t[0]=S*r+x*a+C*h+M*v,t[1]=S*i+x*u+C*f+M*m,t[2]=S*o+x*l+C*p+M*y,t[3]=S*s+x*c+C*_+M*T,S=n[4],x=n[5],C=n[6],M=n[7],t[4]=S*r+x*a+C*h+M*v,t[5]=S*i+x*u+C*f+M*m,t[6]=S*o+x*l+C*p+M*y,t[7]=S*s+x*c+C*_+M*T,S=n[8],x=n[9],C=n[10],M=n[11],t[8]=S*r+x*a+C*h+M*v,t[9]=S*i+x*u+C*f+M*m,t[10]=S*o+x*l+C*p+M*y,t[11]=S*s+x*c+C*_+M*T,S=n[12],x=n[13],C=n[14],M=n[15],t[12]=S*r+x*a+C*h+M*v,t[13]=S*i+x*u+C*f+M*m,t[14]=S*o+x*l+C*p+M*y,t[15]=S*s+x*c+C*_+M*T,t}function Ht(t,e,n){var r=n[0],i=n[1],o=n[2],s,a,u,l,c,h,f,p,_,v,m,y;return e===t?(t[12]=e[0]*r+e[4]*i+e[8]*o+e[12],t[13]=e[1]*r+e[5]*i+e[9]*o+e[13],t[14]=e[2]*r+e[6]*i+e[10]*o+e[14],t[15]=e[3]*r+e[7]*i+e[11]*o+e[15]):(s=e[0],a=e[1],u=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],_=e[8],v=e[9],m=e[10],y=e[11],t[0]=s,t[1]=a,t[2]=u,t[3]=l,t[4]=c,t[5]=h,t[6]=f,t[7]=p,t[8]=_,t[9]=v,t[10]=m,t[11]=y,t[12]=s*r+c*i+_*o+e[12],t[13]=a*r+h*i+v*o+e[13],t[14]=u*r+f*i+m*o+e[14],t[15]=l*r+p*i+y*o+e[15]),t}function Xt(t,e,n){var r=n[0],i=n[1],o=n[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function vs(t,e,n){var r=Math.sin(n),i=Math.cos(n),o=e[4],s=e[5],a=e[6],u=e[7],l=e[8],c=e[9],h=e[10],f=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*i+l*r,t[5]=s*i+c*r,t[6]=a*i+h*r,t[7]=u*i+f*r,t[8]=l*i-o*r,t[9]=c*i-s*r,t[10]=h*i-a*r,t[11]=f*i-u*r,t}function tp(t,e,n){var r=Math.sin(n),i=Math.cos(n),o=e[0],s=e[1],a=e[2],u=e[3],l=e[8],c=e[9],h=e[10],f=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*i-l*r,t[1]=s*i-c*r,t[2]=a*i-h*r,t[3]=u*i-f*r,t[8]=o*r+l*i,t[9]=s*r+c*i,t[10]=a*r+h*i,t[11]=u*r+f*i,t}function Su(t,e,n){var r=Math.sin(n),i=Math.cos(n),o=e[0],s=e[1],a=e[2],u=e[3],l=e[4],c=e[5],h=e[6],f=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*i+l*r,t[1]=s*i+c*r,t[2]=a*i+h*r,t[3]=u*i+f*r,t[4]=l*i-o*r,t[5]=c*i-s*r,t[6]=h*i-a*r,t[7]=f*i-u*r,t}function h1(t,e,n,r,i){var o=1/Math.tan(e/2);if(t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,i!=null&&i!==1/0){var s=1/(r-i);t[10]=(i+r)*s,t[14]=2*i*r*s}else t[10]=-1,t[14]=-2*r;return t}var np=h1;function xc(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],u=t[6],l=t[7],c=t[8],h=t[9],f=t[10],p=t[11],_=t[12],v=t[13],m=t[14],y=t[15],T=e[0],S=e[1],x=e[2],C=e[3],M=e[4],P=e[5],F=e[6],V=e[7],B=e[8],O=e[9],N=e[10],U=e[11],z=e[12],W=e[13],Y=e[14],j=e[15];return Math.abs(n-T)<=qe*Math.max(1,Math.abs(n),Math.abs(T))&&Math.abs(r-S)<=qe*Math.max(1,Math.abs(r),Math.abs(S))&&Math.abs(i-x)<=qe*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(o-C)<=qe*Math.max(1,Math.abs(o),Math.abs(C))&&Math.abs(s-M)<=qe*Math.max(1,Math.abs(s),Math.abs(M))&&Math.abs(a-P)<=qe*Math.max(1,Math.abs(a),Math.abs(P))&&Math.abs(u-F)<=qe*Math.max(1,Math.abs(u),Math.abs(F))&&Math.abs(l-V)<=qe*Math.max(1,Math.abs(l),Math.abs(V))&&Math.abs(c-B)<=qe*Math.max(1,Math.abs(c),Math.abs(B))&&Math.abs(h-O)<=qe*Math.max(1,Math.abs(h),Math.abs(O))&&Math.abs(f-N)<=qe*Math.max(1,Math.abs(f),Math.abs(N))&&Math.abs(p-U)<=qe*Math.max(1,Math.abs(p),Math.abs(U))&&Math.abs(_-z)<=qe*Math.max(1,Math.abs(_),Math.abs(z))&&Math.abs(v-W)<=qe*Math.max(1,Math.abs(v),Math.abs(W))&&Math.abs(m-Y)<=qe*Math.max(1,Math.abs(m),Math.abs(Y))&&Math.abs(y-j)<=qe*Math.max(1,Math.abs(y),Math.abs(j))}function ui(){var t=new st(3);return st!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Ft(t,e,n){var r=new st(3);return r[0]=t,r[1]=e,r[2]=n,r}function f1(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function d1(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function li(t,e){var n=e[0],r=e[1],i=e[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}function p1(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function _1(t,e,n){var r=e[0],i=e[1],o=e[2],s=n[0],a=n[1],u=n[2];return t[0]=i*u-o*a,t[1]=o*s-r*u,t[2]=r*a-i*s,t}function Ki(t,e,n){var r=e[0],i=e[1],o=e[2],s=n[3]*r+n[7]*i+n[11]*o+n[15];return s=s||1,t[0]=(n[0]*r+n[4]*i+n[8]*o+n[12])/s,t[1]=(n[1]*r+n[5]*i+n[9]*o+n[13])/s,t[2]=(n[2]*r+n[6]*i+n[10]*o+n[14])/s,t}function Cc(t,e){var n=t[0],r=t[1],i=t[2],o=e[0],s=e[1],a=e[2],u=Math.sqrt((n*n+r*r+i*i)*(o*o+s*s+a*a)),l=u&&p1(t,e)/u;return Math.acos(Math.min(Math.max(l,-1),1))}var bc=f1;(function(){var t=ui();return function(e,n,r,i,o,s){var a,u;for(n||(n=3),r||(r=0),i?u=Math.min(i*n+r,e.length):u=e.length,a=r;a<u;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function rp(){var t=new st(4);return st!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function v1(t,e,n,r){var i=new st(4);return i[0]=t,i[1]=e,i[2]=n,i[3]=r,i}function m1(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t}function Tn(t,e,n){var r=e[0],i=e[1],o=e[2],s=e[3];return t[0]=n[0]*r+n[4]*i+n[8]*o+n[12]*s,t[1]=n[1]*r+n[5]*i+n[9]*o+n[13]*s,t[2]=n[2]*r+n[6]*i+n[10]*o+n[14]*s,t[3]=n[3]*r+n[7]*i+n[11]*o+n[15]*s,t}(function(){var t=rp();return function(e,n,r,i,o,s){var a,u;for(n||(n=4),r||(r=0),i?u=Math.min(i*n+r,e.length):u=e.length,a=r;a<u;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}})();function ct(){var t=new st(2);return st!=Float32Array&&(t[0]=0,t[1]=0),t}function Pa(t,e){var n=new st(2);return n[0]=t,n[1]=e,n}function Xs(t,e){return t[0]=e[0],t[1]=e[1],t}function g1(t,e,n){return t[0]=e,t[1]=n,t}function An(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function Fa(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function E1(t,e){return t[0]=-e[0],t[1]=-e[1],t}function Zo(t,e){var n=e[0],r=e[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t}function Ba(t,e){return t[0]*e[0]+t[1]*e[1]}function y1(t,e,n,r){var i=e[0],o=e[1];return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t}var ip=Fa;(function(){var t=ct();return function(e,n,r,i,o,s){var a,u;for(n||(n=2),r||(r=0),i?u=Math.min(i*n+r,e.length):u=e.length,a=r;a<u;a+=n)t[0]=e[a],t[1]=e[a+1],o(t,t,s),e[a]=t[0],e[a+1]=t[1];return e}})();class T1{constructor(){d(this,"viewport",void 0),d(this,"overridedViewProjectionMatrix",void 0),d(this,"viewMatrixInverse",void 0),d(this,"cameraPosition",void 0)}init(){}update(e){this.viewport=e,this.viewMatrixInverse=_s(),Ri(this.viewMatrixInverse,e.getViewMatrix()),this.cameraPosition=[this.viewMatrixInverse[12],this.viewMatrixInverse[13],this.viewMatrixInverse[14]]}getProjectionMatrix(){return this.viewport.getProjectionMatrix()}getModelMatrix(){return this.viewport.getModelMatrix()}getViewMatrix(){return this.viewport.getViewMatrix()}getViewMatrixUncentered(){return this.viewport.getViewMatrixUncentered()}getViewProjectionMatrixUncentered(){return this.viewport.getViewProjectionMatrixUncentered()}getViewProjectionMatrix(){return this.overridedViewProjectionMatrix||this.viewport.getViewProjectionMatrix()}getZoom(){return this.viewport.getZoom()}getZoomScale(){return this.viewport.getZoomScale()}getCenter(){const[e,n]=this.viewport.getCenter();return[e,n]}getFocalDistance(){return this.viewport.getFocalDistance()}getCameraPosition(){return this.cameraPosition}projectFlat(e,n){return this.viewport.projectFlat(e,n)}setViewProjectionMatrix(e){this.overridedViewProjectionMatrix=e}}const A1={topleft:"column",topright:"column",bottomright:"column",bottomleft:"column",leftcenter:"column",rightcenter:"column",topcenter:"row",bottomcenter:"row",lefttop:"row",righttop:"row",leftbottom:"row",rightbottom:"row"};class S1{constructor(){d(this,"container",void 0),d(this,"controlCorners",void 0),d(this,"controlContainer",void 0),d(this,"scene",void 0),d(this,"mapsService",void 0),d(this,"controls",[]),d(this,"unAddControls",[])}init(e,n){this.container=e.container,this.scene=n,this.mapsService=n.mapService,this.initControlPos()}addControl(e,n){n.mapService.map?(e.addTo(this.scene),this.controls.push(e)):this.unAddControls.push(e)}getControlByName(e){return this.controls.find(n=>n.controlOption.name===e)}removeControl(e){const n=this.controls.indexOf(e);return n>-1&&this.controls.splice(n,1),e.remove(),this}addControls(){this.unAddControls.forEach(e=>{e.addTo(this.scene),this.controls.push(e)}),this.unAddControls=[]}destroy(){for(const e of this.controls)e.remove();this.controls=[],this.clearControlPos()}initControlPos(){const e=this.controlCorners={},n="l7-",r=this.controlContainer=We("div",n+"control-container",this.container);function i(s=[]){const a=s.map(u=>n+u).join(" ");e[s.filter(u=>!["row","column"].includes(u)).join("")]=We("div",a,r)}function o(s){return[...s.replace(/^(top|bottom|left|right|center)/,"$1-").split("-"),A1[s]]}Object.values(jo).forEach(s=>{i(o(s))}),this.checkCornerOverlap()}clearControlPos(){for(const e in this.controlCorners)this.controlCorners[e]&&sn(this.controlCorners[e]);this.controlContainer&&sn(this.controlContainer)}checkCornerOverlap(){const e=window.MutationObserver;if(e)for(const n of Object.keys(this.controlCorners)){const r=n.match(/^(top|bottom)(left|right)$/);if(r){const[,i,o]=r,s=this.controlCorners[`${i}${o}`];new e(([{target:u}])=>{s&&(s.style[i]=u.clientHeight+"px")}).observe(this.controlCorners[`${o}${i}`],{childList:!0,attributes:!0})}}}}class R1{constructor(){d(this,"container",void 0),d(this,"scene",void 0),d(this,"mapsService",void 0),d(this,"markers",[]),d(this,"markerLayers",[]),d(this,"unAddMarkers",[]),d(this,"unAddMarkerLayers",[]),d(this,"eventRegistered",!1),d(this,"updateMarkers",()=>{this.markers.forEach(e=>{e&&typeof e.update=="function"&&e.update()})})}addMarkerLayer(e){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markerLayers.push(e),e.addTo(this.scene)):this.unAddMarkerLayers.push(e)}removeMarkerLayer(e){e.destroy(),this.markerLayers.indexOf(e);const n=this.markerLayers.indexOf(e);n>-1&&this.markerLayers.splice(n,1)}addMarker(e){this.mapsService.map&&this.mapsService.getMarkerContainer()?(this.markers.push(e),e.addTo(this.scene),this.registerCameraEvents()):this.unAddMarkers.push(e)}addMarkers(){this.unAddMarkers.forEach(e=>{e.addTo(this.scene),this.markers.push(e)}),this.unAddMarkers=[],this.markers.length>0&&this.registerCameraEvents()}addMarkerLayers(){this.unAddMarkerLayers.forEach(e=>{this.markerLayers.push(e),e.addTo(this.scene)}),this.unAddMarkerLayers=[]}removeMarker(e){e.remove(),this.markers.indexOf(e);const n=this.markers.indexOf(e);n>-1&&this.markers.splice(n,1),this.markers.length===0&&this.unregisterCameraEvents()}removeAllMarkers(){this.destroy()}init(e){this.scene=e,this.mapsService=e.mapService}registerCameraEvents(){this.eventRegistered||!this.mapsService||(this.mapsService.on("camerachange",this.updateMarkers),this.mapsService.on("viewchange",this.updateMarkers),this.eventRegistered=!0)}unregisterCameraEvents(){!this.eventRegistered||!this.mapsService||(this.mapsService.off("camerachange",this.updateMarkers),this.mapsService.off("viewchange",this.updateMarkers),this.eventRegistered=!1)}destroy(){this.unregisterCameraEvents(),this.markers.forEach(e=>{e.remove()}),this.markers=[],this.markerLayers.forEach(e=>{e.destroy()}),this.markerLayers=[]}removeMakerLayerMarker(e){e.destroy()}}class x1{constructor(){d(this,"scene",void 0),d(this,"mapsService",void 0),d(this,"popups",[]),d(this,"unAddPopups",[])}get isMarkerReady(){return this.mapsService.map&&this.mapsService.getMarkerContainer()}removePopup(e){e!=null&&e.isOpen()&&e.remove();const n=this.popups.indexOf(e);n>-1&&this.popups.splice(n,1);const r=this.unAddPopups.indexOf(e);r>-1&&this.unAddPopups.splice(r,1)}destroy(){this.popups.forEach(e=>e.remove())}addPopup(e){e&&e.getOptions().autoClose&&[...this.popups,...this.unAddPopups].forEach(n=>{n.getOptions().autoClose&&this.removePopup(n)}),this.isMarkerReady?(e.addTo(this.scene),this.popups.push(e)):this.unAddPopups.push(e),e.on("close",()=>{this.removePopup(e)})}initPopup(){this.unAddPopups.length&&this.unAddPopups.forEach(e=>{this.addPopup(e),this.unAddPopups=[]})}init(e){this.scene=e,this.mapsService=e.mapService}}const C1={MapToken:"您正在使用 Demo 测试 Token, 生产环境务必自行注册 Token 确保服务稳定 高德地图申请地址 https://lbs.amap.com/api/javascript-api/guide/abc/prepare  Mapbox地图申请地址 https://docs.mapbox.com/help/glossary/access-token/",SDK:"请确认引入了mapbox-gl api且在L7之前引入"},{merge:b1}=we,I1={id:"map",logoPosition:"bottomleft",logoVisible:!0,antialias:!0,stencil:!0,preserveDrawingBuffer:!1,pickBufferScale:1,fitBoundsOptions:{animate:!1}},M1={colors:["rgb(103,0,31)","rgb(178,24,43)","rgb(214,96,77)","rgb(244,165,130)","rgb(253,219,199)","rgb(247,247,247)","rgb(209,229,240)","rgb(146,197,222)","rgb(67,147,195)","rgb(33,102,172)","rgb(5,48,97)"],size:10,shape:"circle",scales:{},shape2d:["circle","triangle","square","pentagon","hexagon","octogon","hexagram","rhombus","vesica"],shape3d:["cylinder","triangleColumn","hexagonColumn","squareColumn"],minZoom:-1,maxZoom:24,visible:!0,autoFit:!1,pickingBuffer:0,enablePropagation:!1,zIndex:0,blend:"normal",maskLayers:[],enableMask:!0,maskOperation:ps.AND,pickedFeatureID:-1,enableMultiPassRenderer:!1,enablePicking:!0,active:!1,activeColor:"#2f54eb",enableHighlight:!1,enableSelect:!1,highlightColor:"#2f54eb",activeMix:0,selectColor:"blue",selectMix:0,enableLighting:!1,animateOption:{enable:!1,interval:.2,duration:4,trailLength:.15},forward:!0};class O1{constructor(){d(this,"sceneConfigCache",{}),d(this,"layerConfigCache",{}),d(this,"layerAttributeConfigCache",{})}getSceneConfig(e){return this.sceneConfigCache[e]}getSceneWarninfo(e){return C1[e]}setSceneConfig(e,n){this.sceneConfigCache[e]=D(D({},I1),n)}getLayerConfig(e){return this.layerConfigCache[e]}setLayerConfig(e,n,r){this.layerConfigCache[n]=D({},b1({},this.sceneConfigCache[e],M1,r))}getAttributeConfig(e){return this.layerAttributeConfigCache[e]}setAttributeConfig(e,n){this.layerAttributeConfigCache[e]=D(D({},this.layerAttributeConfigCache[e]),n)}clean(){this.sceneConfigCache={},this.layerConfigCache={}}}const Ws=Math.PI/180,P1=512,Ic=4003e4;function Mc({latitude:t=0,zoom:e=0,scale:n,highPrecision:r=!1,flipY:i=!1}){n=n!==void 0?n:Math.pow(2,e);const o={},s=P1*n,a=Math.cos(t*Ws),u=s/360,l=u/a,c=s/Ic/a;if(o.pixelsPerMeter=[c,-c,c],o.metersPerPixel=[1/c,-1/c,1/c],o.pixelsPerDegree=[u,-l,c],o.degreesPerPixel=[1/u,-1/l,1/c],r){const h=Ws*Math.tan(t*Ws)/a,f=u*h/2,p=s/Ic*h,_=p/l*c;o.pixelsPerDegree2=[0,-f,p],o.pixelsPerMeter2=[_,0,_],i&&(o.pixelsPerDegree2[1]=-o.pixelsPerDegree2[1],o.pixelsPerMeter2[1]=-o.pixelsPerMeter2[1])}return i&&(o.pixelsPerMeter[1]=-o.pixelsPerMeter[1],o.metersPerPixel[1]=-o.metersPerPixel[1],o.pixelsPerDegree[1]=-o.pixelsPerDegree[1],o.degreesPerPixel[1]=-o.degreesPerPixel[1]),o}const F1=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];class B1{constructor(e){d(this,"needRefresh",!0),d(this,"coordinateSystem",void 0),d(this,"viewportCenter",void 0),d(this,"viewportCenterProjection",void 0),d(this,"pixelsPerDegree",void 0),d(this,"pixelsPerDegree2",void 0),d(this,"pixelsPerMeter",void 0),this.cameraService=e}refresh(e,n=!1){const r=this.cameraService.getZoom(),i=e||this.cameraService.getCenter(),{pixelsPerMeter:o,pixelsPerDegree:s}=Mc({latitude:i[1],zoom:r});this.viewportCenter=i,this.viewportCenterProjection=[0,0,0,0],this.pixelsPerMeter=o,this.pixelsPerDegree=s,this.pixelsPerDegree2=[0,0,0],this.coordinateSystem===$o.LNGLAT?this.cameraService.setViewProjectionMatrix(void 0):this.coordinateSystem===$o.LNGLAT_OFFSET&&this.calculateLnglatOffset(i,r,void 0,void 0,n),this.needRefresh=!1}getCoordinateSystem(){return this.coordinateSystem}setCoordinateSystem(e){this.coordinateSystem=e}getViewportCenter(){return this.viewportCenter}setViewportCenter(e){this.refresh(e,!0)}getViewportCenterProjection(){return this.viewportCenterProjection}getPixelsPerDegree(){return this.pixelsPerDegree}getPixelsPerDegree2(){return this.pixelsPerDegree2}getPixelsPerMeter(){return this.pixelsPerMeter}calculateLnglatOffset(e,n,r,i,o=!1){const{pixelsPerMeter:s,pixelsPerDegree:a,pixelsPerDegree2:u}=Mc({latitude:e[1],zoom:n,scale:r,flipY:i,highPrecision:!0});let l=this.cameraService.getViewMatrix();const c=this.cameraService.getProjectionMatrix();let h=bn([],c,l);const f=o?e:[Math.fround(e[0]),Math.fround(e[1])],p=this.cameraService.projectFlat(f,Math.pow(2,n));this.viewportCenterProjection=Tn([],[p[0],p[1],0,1],h),l=this.cameraService.getViewMatrixUncentered()||l,h=bn([],c,l),h=bn([],h,F1),this.cameraService.setViewProjectionMatrix(h),this.pixelsPerMeter=s,this.pixelsPerDegree=a,this.pixelsPerDegree2=u}}class N1 extends pt.EventEmitter{constructor(...e){super(...e),d(this,"renderMap",new Map),d(this,"enable",!1),d(this,"renderEnable",!1),d(this,"cacheLogs",{})}setEnable(e){this.enable=!!e}log(e,n){if(!this.enable)return;const r=e.split(".");let i=null;r.forEach((o,s)=>{i!==null?(i[o]||(i[o]={}),s!==r.length-1&&(i=i[o])):(this.cacheLogs[o]||(this.cacheLogs[o]={}),s!==r.length-1&&(i=this.cacheLogs[o])),s===r.length-1&&(i[o]=D(D({time:Date.now()},i[o]),n))})}getLog(e){switch(typeof e){case"string":return this.cacheLogs[e];case"object":return e.map(n=>this.cacheLogs[n]).filter(n=>n!==void 0);case"undefined":return this.cacheLogs}}removeLog(e){delete this.cacheLogs[e]}generateRenderUid(){return this.renderEnable?Av():""}renderDebug(e){this.renderEnable=e}renderStart(e){if(!this.renderEnable||!this.enable)return;const n=this.renderMap.get(e)||{};this.renderMap.set(e,D(D({},n),{},{renderUid:e,renderStart:Date.now()}))}renderEnd(e){if(!this.renderEnable||!this.enable)return;const n=this.renderMap.get(e);if(n){const r=n.renderStart,i=Date.now();this.emit("renderEnd",D(D({},n),{},{renderEnd:i,renderDuration:i-r})),this.renderMap.delete(e)}}destroy(){this.cacheLogs=null,this.renderMap.clear()}}var op={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(t){(function(e,n,r,i){var o=["","webkit","Moz","MS","ms","o"],s=n.createElement("div"),a="function",u=Math.round,l=Math.abs,c=Date.now;function h(E,A,b){return setTimeout(S(E,b),A)}function f(E,A,b){return Array.isArray(E)?(p(E,b[A],b),!0):!1}function p(E,A,b){var w;if(E)if(E.forEach)E.forEach(A,b);else if(E.length!==i)for(w=0;w<E.length;)A.call(b,E[w],w,E),w++;else for(w in E)E.hasOwnProperty(w)&&A.call(b,E[w],w,E)}function _(E,A,b){var w="DEPRECATED METHOD: "+A+`
`+b+` AT 
`;return function(){var H=new Error("get-stack-trace"),K=H&&H.stack?H.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",fe=e.console&&(e.console.warn||e.console.log);return fe&&fe.call(e.console,w,K),E.apply(this,arguments)}}var v;typeof Object.assign!="function"?v=function(A){if(A===i||A===null)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(A),w=1;w<arguments.length;w++){var H=arguments[w];if(H!==i&&H!==null)for(var K in H)H.hasOwnProperty(K)&&(b[K]=H[K])}return b}:v=Object.assign;var m=_(function(A,b,w){for(var H=Object.keys(b),K=0;K<H.length;)(!w||w&&A[H[K]]===i)&&(A[H[K]]=b[H[K]]),K++;return A},"extend","Use `assign`."),y=_(function(A,b){return m(A,b,!0)},"merge","Use `assign`.");function T(E,A,b){var w=A.prototype,H;H=E.prototype=Object.create(w),H.constructor=E,H._super=w,b&&v(H,b)}function S(E,A){return function(){return E.apply(A,arguments)}}function x(E,A){return typeof E==a?E.apply(A&&A[0]||i,A):E}function C(E,A){return E===i?A:E}function M(E,A,b){p(B(A),function(w){E.addEventListener(w,b,!1)})}function P(E,A,b){p(B(A),function(w){E.removeEventListener(w,b,!1)})}function F(E,A){for(;E;){if(E==A)return!0;E=E.parentNode}return!1}function V(E,A){return E.indexOf(A)>-1}function B(E){return E.trim().split(/\s+/g)}function O(E,A,b){if(E.indexOf&&!b)return E.indexOf(A);for(var w=0;w<E.length;){if(b&&E[w][b]==A||!b&&E[w]===A)return w;w++}return-1}function N(E){return Array.prototype.slice.call(E,0)}function U(E,A,b){for(var w=[],H=[],K=0;K<E.length;){var fe=E[K][A];O(H,fe)<0&&w.push(E[K]),H[K]=fe,K++}return w=w.sort(function($e,nt){return $e[A]>nt[A]}),w}function z(E,A){for(var b,w,H=A[0].toUpperCase()+A.slice(1),K=0;K<o.length;){if(b=o[K],w=b?b+H:A,w in E)return w;K++}return i}var W=1;function Y(){return W++}function j(E){var A=E.ownerDocument||E;return A.defaultView||A.parentWindow||e}var te=/mobile|tablet|ip(ad|hone|od)|android/i,J="ontouchstart"in e,Q=z(e,"PointerEvent")!==i,se=J&&te.test(navigator.userAgent),ue="touch",ce="pen",de="mouse",re="kinect",Re=25,Se=1,_t=2,Pe=4,je=8,Bn=1,Ut=2,Kt=4,qt=8,dn=16,gt=Ut|Kt,tt=qt|dn,Dr=gt|tt,qn=["x","y"],Nn=["clientX","clientY"];function at(E,A){var b=this;this.manager=E,this.callback=A,this.element=E.element,this.target=E.options.inputTarget,this.domHandler=function(w){x(E.options.enable,[E])&&b.handler(w)},this.init()}at.prototype={handler:function(){},init:function(){this.evEl&&M(this.element,this.evEl,this.domHandler),this.evTarget&&M(this.target,this.evTarget,this.domHandler),this.evWin&&M(j(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&P(this.element,this.evEl,this.domHandler),this.evTarget&&P(this.target,this.evTarget,this.domHandler),this.evWin&&P(j(this.element),this.evWin,this.domHandler)}};function wr(E){var A,b=E.options.inputClass;return b?A=b:Q?A=Ss:se?A=Hi:J?A=Rs:A=Vi,new A(E,P_)}function P_(E,A,b){var w=b.pointers.length,H=b.changedPointers.length,K=A&Se&&w-H===0,fe=A&(Pe|je)&&w-H===0;b.isFirst=!!K,b.isFinal=!!fe,K&&(E.session={}),b.eventType=A,F_(E,b),E.emit("hammer.input",b),E.recognize(b),E.session.prevInput=b}function F_(E,A){var b=E.session,w=A.pointers,H=w.length;b.firstInput||(b.firstInput=Zu(A)),H>1&&!b.firstMultiple?b.firstMultiple=Zu(A):H===1&&(b.firstMultiple=!1);var K=b.firstInput,fe=b.firstMultiple,Xe=fe?fe.center:K.center,$e=A.center=Yu(w);A.timeStamp=c(),A.deltaTime=A.timeStamp-K.timeStamp,A.angle=As(Xe,$e),A.distance=zi(Xe,$e),B_(b,A),A.offsetDirection=Ku(A.deltaX,A.deltaY);var nt=Gu(A.deltaTime,A.deltaX,A.deltaY);A.overallVelocityX=nt.x,A.overallVelocityY=nt.y,A.overallVelocity=l(nt.x)>l(nt.y)?nt.x:nt.y,A.scale=fe?w_(fe.pointers,w):1,A.rotation=fe?D_(fe.pointers,w):0,A.maxPointers=b.prevInput?A.pointers.length>b.prevInput.maxPointers?A.pointers.length:b.prevInput.maxPointers:A.pointers.length,N_(b,A);var zt=E.element;F(A.srcEvent.target,zt)&&(zt=A.srcEvent.target),A.target=zt}function B_(E,A){var b=A.center,w=E.offsetDelta||{},H=E.prevDelta||{},K=E.prevInput||{};(A.eventType===Se||K.eventType===Pe)&&(H=E.prevDelta={x:K.deltaX||0,y:K.deltaY||0},w=E.offsetDelta={x:b.x,y:b.y}),A.deltaX=H.x+(b.x-w.x),A.deltaY=H.y+(b.y-w.y)}function N_(E,A){var b=E.lastInterval||A,w=A.timeStamp-b.timeStamp,H,K,fe,Xe;if(A.eventType!=je&&(w>Re||b.velocity===i)){var $e=A.deltaX-b.deltaX,nt=A.deltaY-b.deltaY,zt=Gu(w,$e,nt);K=zt.x,fe=zt.y,H=l(zt.x)>l(zt.y)?zt.x:zt.y,Xe=Ku($e,nt),E.lastInterval=A}else H=b.velocity,K=b.velocityX,fe=b.velocityY,Xe=b.direction;A.velocity=H,A.velocityX=K,A.velocityY=fe,A.direction=Xe}function Zu(E){for(var A=[],b=0;b<E.pointers.length;)A[b]={clientX:u(E.pointers[b].clientX),clientY:u(E.pointers[b].clientY)},b++;return{timeStamp:c(),pointers:A,center:Yu(A),deltaX:E.deltaX,deltaY:E.deltaY}}function Yu(E){var A=E.length;if(A===1)return{x:u(E[0].clientX),y:u(E[0].clientY)};for(var b=0,w=0,H=0;H<A;)b+=E[H].clientX,w+=E[H].clientY,H++;return{x:u(b/A),y:u(w/A)}}function Gu(E,A,b){return{x:A/E||0,y:b/E||0}}function Ku(E,A){return E===A?Bn:l(E)>=l(A)?E<0?Ut:Kt:A<0?qt:dn}function zi(E,A,b){b||(b=qn);var w=A[b[0]]-E[b[0]],H=A[b[1]]-E[b[1]];return Math.sqrt(w*w+H*H)}function As(E,A,b){b||(b=qn);var w=A[b[0]]-E[b[0]],H=A[b[1]]-E[b[1]];return Math.atan2(H,w)*180/Math.PI}function D_(E,A){return As(A[1],A[0],Nn)+As(E[1],E[0],Nn)}function w_(E,A){return zi(A[0],A[1],Nn)/zi(E[0],E[1],Nn)}var L_={mousedown:Se,mousemove:_t,mouseup:Pe},U_="mousedown",k_="mousemove mouseup";function Vi(){this.evEl=U_,this.evWin=k_,this.pressed=!1,at.apply(this,arguments)}T(Vi,at,{handler:function(A){var b=L_[A.type];b&Se&&A.button===0&&(this.pressed=!0),b&_t&&A.which!==1&&(b=Pe),this.pressed&&(b&Pe&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[A],changedPointers:[A],pointerType:de,srcEvent:A}))}});var z_={pointerdown:Se,pointermove:_t,pointerup:Pe,pointercancel:je,pointerout:je},V_={2:ue,3:ce,4:de,5:re},qu="pointerdown",Qu="pointermove pointerup pointercancel";e.MSPointerEvent&&!e.PointerEvent&&(qu="MSPointerDown",Qu="MSPointerMove MSPointerUp MSPointerCancel");function Ss(){this.evEl=qu,this.evWin=Qu,at.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}T(Ss,at,{handler:function(A){var b=this.store,w=!1,H=A.type.toLowerCase().replace("ms",""),K=z_[H],fe=V_[A.pointerType]||A.pointerType,Xe=fe==ue,$e=O(b,A.pointerId,"pointerId");K&Se&&(A.button===0||Xe)?$e<0&&(b.push(A),$e=b.length-1):K&(Pe|je)&&(w=!0),!($e<0)&&(b[$e]=A,this.callback(this.manager,K,{pointers:b,changedPointers:[A],pointerType:fe,srcEvent:A}),w&&b.splice($e,1))}});var H_={touchstart:Se,touchmove:_t,touchend:Pe,touchcancel:je},X_="touchstart",W_="touchstart touchmove touchend touchcancel";function Ju(){this.evTarget=X_,this.evWin=W_,this.started=!1,at.apply(this,arguments)}T(Ju,at,{handler:function(A){var b=H_[A.type];if(b===Se&&(this.started=!0),!!this.started){var w=j_.call(this,A,b);b&(Pe|je)&&w[0].length-w[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:w[0],changedPointers:w[1],pointerType:ue,srcEvent:A})}}});function j_(E,A){var b=N(E.touches),w=N(E.changedTouches);return A&(Pe|je)&&(b=U(b.concat(w),"identifier")),[b,w]}var $_={touchstart:Se,touchmove:_t,touchend:Pe,touchcancel:je},Z_="touchstart touchmove touchend touchcancel";function Hi(){this.evTarget=Z_,this.targetIds={},at.apply(this,arguments)}T(Hi,at,{handler:function(A){var b=$_[A.type],w=Y_.call(this,A,b);w&&this.callback(this.manager,b,{pointers:w[0],changedPointers:w[1],pointerType:ue,srcEvent:A})}});function Y_(E,A){var b=N(E.touches),w=this.targetIds;if(A&(Se|_t)&&b.length===1)return w[b[0].identifier]=!0,[b,b];var H,K,fe=N(E.changedTouches),Xe=[],$e=this.target;if(K=b.filter(function(nt){return F(nt.target,$e)}),A===Se)for(H=0;H<K.length;)w[K[H].identifier]=!0,H++;for(H=0;H<fe.length;)w[fe[H].identifier]&&Xe.push(fe[H]),A&(Pe|je)&&delete w[fe[H].identifier],H++;if(Xe.length)return[U(K.concat(Xe),"identifier"),Xe]}var G_=2500,el=25;function Rs(){at.apply(this,arguments);var E=S(this.handler,this);this.touch=new Hi(this.manager,E),this.mouse=new Vi(this.manager,E),this.primaryTouch=null,this.lastTouches=[]}T(Rs,at,{handler:function(A,b,w){var H=w.pointerType==ue,K=w.pointerType==de;if(!(K&&w.sourceCapabilities&&w.sourceCapabilities.firesTouchEvents)){if(H)K_.call(this,b,w);else if(K&&q_.call(this,w))return;this.callback(A,b,w)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function K_(E,A){E&Se?(this.primaryTouch=A.changedPointers[0].identifier,tl.call(this,A)):E&(Pe|je)&&tl.call(this,A)}function tl(E){var A=E.changedPointers[0];if(A.identifier===this.primaryTouch){var b={x:A.clientX,y:A.clientY};this.lastTouches.push(b);var w=this.lastTouches,H=function(){var K=w.indexOf(b);K>-1&&w.splice(K,1)};setTimeout(H,G_)}}function q_(E){for(var A=E.srcEvent.clientX,b=E.srcEvent.clientY,w=0;w<this.lastTouches.length;w++){var H=this.lastTouches[w],K=Math.abs(A-H.x),fe=Math.abs(b-H.y);if(K<=el&&fe<=el)return!0}return!1}var nl=z(s.style,"touchAction"),rl=nl!==i,il="compute",ol="auto",xs="manipulation",Dn="none",Lr="pan-x",Ur="pan-y",Xi=J_();function Cs(E,A){this.manager=E,this.set(A)}Cs.prototype={set:function(E){E==il&&(E=this.compute()),rl&&this.manager.element.style&&Xi[E]&&(this.manager.element.style[nl]=E),this.actions=E.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var E=[];return p(this.manager.recognizers,function(A){x(A.options.enable,[A])&&(E=E.concat(A.getTouchAction()))}),Q_(E.join(" "))},preventDefaults:function(E){var A=E.srcEvent,b=E.offsetDirection;if(this.manager.session.prevented){A.preventDefault();return}var w=this.actions,H=V(w,Dn)&&!Xi[Dn],K=V(w,Ur)&&!Xi[Ur],fe=V(w,Lr)&&!Xi[Lr];if(H){var Xe=E.pointers.length===1,$e=E.distance<2,nt=E.deltaTime<250;if(Xe&&$e&&nt)return}if(!(fe&&K)&&(H||K&&b&gt||fe&&b&tt))return this.preventSrc(A)},preventSrc:function(E){this.manager.session.prevented=!0,E.preventDefault()}};function Q_(E){if(V(E,Dn))return Dn;var A=V(E,Lr),b=V(E,Ur);return A&&b?Dn:A||b?A?Lr:Ur:V(E,xs)?xs:ol}function J_(){if(!rl)return!1;var E={},A=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(b){E[b]=A?e.CSS.supports("touch-action",b):!0}),E}var Wi=1,Et=2,Qn=4,pn=8,Qt=pn,kr=16,kt=32;function Jt(E){this.options=v({},this.defaults,E||{}),this.id=Y(),this.manager=null,this.options.enable=C(this.options.enable,!0),this.state=Wi,this.simultaneous={},this.requireFail=[]}Jt.prototype={defaults:{},set:function(E){return v(this.options,E),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(E){if(f(E,"recognizeWith",this))return this;var A=this.simultaneous;return E=ji(E,this),A[E.id]||(A[E.id]=E,E.recognizeWith(this)),this},dropRecognizeWith:function(E){return f(E,"dropRecognizeWith",this)?this:(E=ji(E,this),delete this.simultaneous[E.id],this)},requireFailure:function(E){if(f(E,"requireFailure",this))return this;var A=this.requireFail;return E=ji(E,this),O(A,E)===-1&&(A.push(E),E.requireFailure(this)),this},dropRequireFailure:function(E){if(f(E,"dropRequireFailure",this))return this;E=ji(E,this);var A=O(this.requireFail,E);return A>-1&&this.requireFail.splice(A,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(E){return!!this.simultaneous[E.id]},emit:function(E){var A=this,b=this.state;function w(H){A.manager.emit(H,E)}b<pn&&w(A.options.event+sl(b)),w(A.options.event),E.additionalEvent&&w(E.additionalEvent),b>=pn&&w(A.options.event+sl(b))},tryEmit:function(E){if(this.canEmit())return this.emit(E);this.state=kt},canEmit:function(){for(var E=0;E<this.requireFail.length;){if(!(this.requireFail[E].state&(kt|Wi)))return!1;E++}return!0},recognize:function(E){var A=v({},E);if(!x(this.options.enable,[this,A])){this.reset(),this.state=kt;return}this.state&(Qt|kr|kt)&&(this.state=Wi),this.state=this.process(A),this.state&(Et|Qn|pn|kr)&&this.tryEmit(A)},process:function(E){},getTouchAction:function(){},reset:function(){}};function sl(E){return E&kr?"cancel":E&pn?"end":E&Qn?"move":E&Et?"start":""}function al(E){return E==dn?"down":E==qt?"up":E==Ut?"left":E==Kt?"right":""}function ji(E,A){var b=A.manager;return b?b.get(E):E}function Ot(){Jt.apply(this,arguments)}T(Ot,Jt,{defaults:{pointers:1},attrTest:function(E){var A=this.options.pointers;return A===0||E.pointers.length===A},process:function(E){var A=this.state,b=E.eventType,w=A&(Et|Qn),H=this.attrTest(E);return w&&(b&je||!H)?A|kr:w||H?b&Pe?A|pn:A&Et?A|Qn:Et:kt}});function $i(){Ot.apply(this,arguments),this.pX=null,this.pY=null}T($i,Ot,{defaults:{event:"pan",threshold:10,pointers:1,direction:Dr},getTouchAction:function(){var E=this.options.direction,A=[];return E&gt&&A.push(Ur),E&tt&&A.push(Lr),A},directionTest:function(E){var A=this.options,b=!0,w=E.distance,H=E.direction,K=E.deltaX,fe=E.deltaY;return H&A.direction||(A.direction&gt?(H=K===0?Bn:K<0?Ut:Kt,b=K!=this.pX,w=Math.abs(E.deltaX)):(H=fe===0?Bn:fe<0?qt:dn,b=fe!=this.pY,w=Math.abs(E.deltaY))),E.direction=H,b&&w>A.threshold&&H&A.direction},attrTest:function(E){return Ot.prototype.attrTest.call(this,E)&&(this.state&Et||!(this.state&Et)&&this.directionTest(E))},emit:function(E){this.pX=E.deltaX,this.pY=E.deltaY;var A=al(E.direction);A&&(E.additionalEvent=this.options.event+A),this._super.emit.call(this,E)}});function bs(){Ot.apply(this,arguments)}T(bs,Ot,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Dn]},attrTest:function(E){return this._super.attrTest.call(this,E)&&(Math.abs(E.scale-1)>this.options.threshold||this.state&Et)},emit:function(E){if(E.scale!==1){var A=E.scale<1?"in":"out";E.additionalEvent=this.options.event+A}this._super.emit.call(this,E)}});function Is(){Jt.apply(this,arguments),this._timer=null,this._input=null}T(Is,Jt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ol]},process:function(E){var A=this.options,b=E.pointers.length===A.pointers,w=E.distance<A.threshold,H=E.deltaTime>A.time;if(this._input=E,!w||!b||E.eventType&(Pe|je)&&!H)this.reset();else if(E.eventType&Se)this.reset(),this._timer=h(function(){this.state=Qt,this.tryEmit()},A.time,this);else if(E.eventType&Pe)return Qt;return kt},reset:function(){clearTimeout(this._timer)},emit:function(E){this.state===Qt&&(E&&E.eventType&Pe?this.manager.emit(this.options.event+"up",E):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}});function Ms(){Ot.apply(this,arguments)}T(Ms,Ot,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Dn]},attrTest:function(E){return this._super.attrTest.call(this,E)&&(Math.abs(E.rotation)>this.options.threshold||this.state&Et)}});function Os(){Ot.apply(this,arguments)}T(Os,Ot,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:gt|tt,pointers:1},getTouchAction:function(){return $i.prototype.getTouchAction.call(this)},attrTest:function(E){var A=this.options.direction,b;return A&(gt|tt)?b=E.overallVelocity:A&gt?b=E.overallVelocityX:A&tt&&(b=E.overallVelocityY),this._super.attrTest.call(this,E)&&A&E.offsetDirection&&E.distance>this.options.threshold&&E.maxPointers==this.options.pointers&&l(b)>this.options.velocity&&E.eventType&Pe},emit:function(E){var A=al(E.offsetDirection);A&&this.manager.emit(this.options.event+A,E),this.manager.emit(this.options.event,E)}});function Zi(){Jt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}T(Zi,Jt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[xs]},process:function(E){var A=this.options,b=E.pointers.length===A.pointers,w=E.distance<A.threshold,H=E.deltaTime<A.time;if(this.reset(),E.eventType&Se&&this.count===0)return this.failTimeout();if(w&&H&&b){if(E.eventType!=Pe)return this.failTimeout();var K=this.pTime?E.timeStamp-this.pTime<A.interval:!0,fe=!this.pCenter||zi(this.pCenter,E.center)<A.posThreshold;this.pTime=E.timeStamp,this.pCenter=E.center,!fe||!K?this.count=1:this.count+=1,this._input=E;var Xe=this.count%A.taps;if(Xe===0)return this.hasRequireFailures()?(this._timer=h(function(){this.state=Qt,this.tryEmit()},A.interval,this),Et):Qt}return kt},failTimeout:function(){return this._timer=h(function(){this.state=kt},this.options.interval,this),kt},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Qt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function _n(E,A){return A=A||{},A.recognizers=C(A.recognizers,_n.defaults.preset),new Ps(E,A)}_n.VERSION="2.0.7",_n.defaults={domEvents:!1,touchAction:il,enable:!0,inputTarget:null,inputClass:null,preset:[[Ms,{enable:!1}],[bs,{enable:!1},["rotate"]],[Os,{direction:gt}],[$i,{direction:gt},["swipe"]],[Zi],[Zi,{event:"doubletap",taps:2},["tap"]],[Is]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var e0=1,ul=2;function Ps(E,A){this.options=v({},_n.defaults,A||{}),this.options.inputTarget=this.options.inputTarget||E,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=E,this.input=wr(this),this.touchAction=new Cs(this,this.options.touchAction),ll(this,!0),p(this.options.recognizers,function(b){var w=this.add(new b[0](b[1]));b[2]&&w.recognizeWith(b[2]),b[3]&&w.requireFailure(b[3])},this)}Ps.prototype={set:function(E){return v(this.options,E),E.touchAction&&this.touchAction.update(),E.inputTarget&&(this.input.destroy(),this.input.target=E.inputTarget,this.input.init()),this},stop:function(E){this.session.stopped=E?ul:e0},recognize:function(E){var A=this.session;if(!A.stopped){this.touchAction.preventDefaults(E);var b,w=this.recognizers,H=A.curRecognizer;(!H||H&&H.state&Qt)&&(H=A.curRecognizer=null);for(var K=0;K<w.length;)b=w[K],A.stopped!==ul&&(!H||b==H||b.canRecognizeWith(H))?b.recognize(E):b.reset(),!H&&b.state&(Et|Qn|pn)&&(H=A.curRecognizer=b),K++}},get:function(E){if(E instanceof Jt)return E;for(var A=this.recognizers,b=0;b<A.length;b++)if(A[b].options.event==E)return A[b];return null},add:function(E){if(f(E,"add",this))return this;var A=this.get(E.options.event);return A&&this.remove(A),this.recognizers.push(E),E.manager=this,this.touchAction.update(),E},remove:function(E){if(f(E,"remove",this))return this;if(E=this.get(E),E){var A=this.recognizers,b=O(A,E);b!==-1&&(A.splice(b,1),this.touchAction.update())}return this},on:function(E,A){if(E!==i&&A!==i){var b=this.handlers;return p(B(E),function(w){b[w]=b[w]||[],b[w].push(A)}),this}},off:function(E,A){if(E!==i){var b=this.handlers;return p(B(E),function(w){A?b[w]&&b[w].splice(O(b[w],A),1):delete b[w]}),this}},emit:function(E,A){this.options.domEvents&&t0(E,A);var b=this.handlers[E]&&this.handlers[E].slice();if(!(!b||!b.length)){A.type=E,A.preventDefault=function(){A.srcEvent.preventDefault()};for(var w=0;w<b.length;)b[w](A),w++}},destroy:function(){this.element&&ll(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ll(E,A){var b=E.element;if(b.style){var w;p(E.options.cssProps,function(H,K){w=z(b.style,K),A?(E.oldCssProps[w]=b.style[w],b.style[w]=H):b.style[w]=E.oldCssProps[w]||""}),A||(E.oldCssProps={})}}function t0(E,A){var b=n.createEvent("Event");b.initEvent(E,!0,!0),b.gesture=A,A.target.dispatchEvent(b)}v(_n,{INPUT_START:Se,INPUT_MOVE:_t,INPUT_END:Pe,INPUT_CANCEL:je,STATE_POSSIBLE:Wi,STATE_BEGAN:Et,STATE_CHANGED:Qn,STATE_ENDED:pn,STATE_RECOGNIZED:Qt,STATE_CANCELLED:kr,STATE_FAILED:kt,DIRECTION_NONE:Bn,DIRECTION_LEFT:Ut,DIRECTION_RIGHT:Kt,DIRECTION_UP:qt,DIRECTION_DOWN:dn,DIRECTION_HORIZONTAL:gt,DIRECTION_VERTICAL:tt,DIRECTION_ALL:Dr,Manager:Ps,Input:at,TouchAction:Cs,TouchInput:Hi,MouseInput:Vi,PointerEventInput:Ss,TouchMouseInput:Rs,SingleTouchInput:Ju,Recognizer:Jt,AttrRecognizer:Ot,Tap:Zi,Pan:$i,Swipe:Os,Pinch:bs,Rotate:Ms,Press:Is,on:M,off:P,each:p,merge:y,extend:m,assign:v,inherit:T,bindFn:S,prefixed:z});var n0=typeof e<"u"?e:typeof self<"u"?self:{};n0.Hammer=_n,t.exports?t.exports=_n:e[r]=_n})(window,document,"Hammer")})(op);var D1=op.exports;const jr=Yt(D1),w1={panstart:"dragstart",panmove:"dragging",panend:"dragend",pancancel:"dragcancel"};class L1 extends gu{get mapService(){return this.container.mapService}constructor(e){super(),d(this,"indragging",!1),d(this,"hammertime",void 0),d(this,"lastClickTime",0),d(this,"lastClickXY",[-1,-1]),d(this,"clickTimer",void 0),d(this,"$containter",void 0),d(this,"onDrag",n=>{const r=this.interactionEvent(n);r.type=w1[r.type],r.type==="dragging"?this.indragging=!0:this.indragging=!1,this.emit(Ye.Drag,r)}),d(this,"onHammer",n=>{n.srcEvent.stopPropagation();const r=this.interactionEvent(n);this.emit(Ye.Hover,r)}),d(this,"onTouch",n=>{const r=n.touches[0];this.onHover({clientX:r.clientX,clientY:r.clientY,type:"touchstart"})}),d(this,"onTouchEnd",n=>{if(n.changedTouches.length>0){const r=n.changedTouches[0];this.onHover({clientX:r.clientX,clientY:r.clientY,type:"touchend"})}}),d(this,"onTouchMove",n=>{const r=n.changedTouches[0];this.onHover({clientX:r.clientX,clientY:r.clientY,type:"touchmove"})}),d(this,"onHover",n=>{const{clientX:r,clientY:i}=n;let o=r,s=i;const a=n.type,u=this.mapService.getMapContainer();if(u){const{top:c,left:h}=u.getBoundingClientRect();o=o-h-u.clientLeft,s=s-c-u.clientTop}const l=this.mapService.containerToLngLat([o,s]);if(a==="click"){this.isDoubleTap(o,s,l);return}if(a==="touch"){this.isDoubleTap(o,s,l);return}a!=="click"&&a!=="dblclick"&&this.emit(Ye.Hover,{x:o,y:s,lngLat:l,type:a,target:n})}),this.container=e}init(){this.addEventListenerOnMap(),this.$containter=this.mapService.getMapContainer()}destroy(){this.hammertime&&this.hammertime.destroy(),this.removeEventListenerOnMap(),this.off(Ye.Hover)}triggerHover({x:e,y:n}){this.emit(Ye.Hover,{x:e,y:n})}triggerSelect(e){this.emit(Ye.Select,{featureId:e})}triggerActive(e){this.emit(Ye.Active,{featureId:e})}addEventListenerOnMap(){const e=this.mapService.getMapContainer();if(e){const n=new jr.Manager(e);n.add(new jr.Tap({event:"dblclick",taps:2})),n.add(new jr.Tap({event:"click"})),n.add(new jr.Pan({threshold:0,pointers:0})),n.add(new jr.Press({})),n.on("dblclick click",this.onHammer),n.on("panstart panmove panend pancancel",this.onDrag),e.addEventListener("touchstart",this.onTouch),e.addEventListener("touchend",this.onTouchEnd),e.addEventListener("mousemove",this.onHover),e.addEventListener("touchmove",this.onTouchMove),e.addEventListener("mousedown",this.onHover,!0),e.addEventListener("mouseup",this.onHover),e.addEventListener("contextmenu",this.onHover),this.hammertime=n}}removeEventListenerOnMap(){const e=this.mapService.getMapContainer();e&&(e.removeEventListener("mousemove",this.onHover),this.hammertime.off("dblclick click",this.onHammer),this.hammertime.off("panstart panmove panend pancancel",this.onDrag),e.removeEventListener("touchstart",this.onTouch),e.removeEventListener("touchend",this.onTouchEnd),e.removeEventListener("mousedown",this.onHover),e.removeEventListener("mouseup",this.onHover),e.removeEventListener("contextmenu",this.onHover))}interactionEvent(e){const{type:n,pointerType:r}=e;let i,o;r==="touch"?(o=Math.floor(e.pointers[0].clientY),i=Math.floor(e.pointers[0].clientX)):(o=Math.floor(e.srcEvent.y),i=Math.floor(e.srcEvent.x));const s=this.mapService.getMapContainer();if(s){const{top:u,left:l}=s.getBoundingClientRect();i-=l,o-=u}const a=this.mapService.containerToLngLat([i,o]);return{x:i,y:o,lngLat:a,type:n,target:e.srcEvent}}isDoubleTap(e,n,r){const i=new Date().getTime();let o="click";i-this.lastClickTime<400&&Math.abs(this.lastClickXY[0]-e)<10&&Math.abs(this.lastClickXY[1]-n)<10?(this.lastClickTime=0,this.lastClickXY=[-1,-1],this.clickTimer&&clearTimeout(this.clickTimer),o="dblclick",this.emit(Ye.Hover,{x:e,y:n,lngLat:r,type:o})):(this.lastClickTime=i,this.lastClickXY=[e,n],this.clickTimer=setTimeout(()=>{o="click",this.emit(Ye.Hover,{x:e,y:n,lngLat:r,type:o})},400))}}let U1=0;function k1(t){let e=t;if(typeof t=="string"&&(e=document.getElementById(t)),e){const n=document.createElement("div");return n.style.cssText+=`
      position: absolute;
      z-index:2;
      height: 100%;
      width: 100%;
      pointer-events: none;
    `,n.id=`l7-scene-${U1++}`,n.classList.add("l7-scene"),e.appendChild(n),n}return null}function z1(t){var e;let n=!0;if((t==null||(e=t.target)===null||e===void 0?void 0:e.target)instanceof HTMLElement){var r;let o=t==null||(r=t.target)===null||r===void 0?void 0:r.target;for(;o;){var i;const s=Array.from(o.classList);if(s.includes("l7-marker")||s.includes("l7-popup")){n=!1;break}o=(i=o)===null||i===void 0?void 0:i.parentElement}}return n}let Wn=function(t){return t[t.SAMPLED=0]="SAMPLED",t[t.RENDER_TARGET=1]="RENDER_TARGET",t}({});class V1{constructor(e){var n=this;d(this,"pickedColors",void 0),d(this,"pickedTileLayers",[]),d(this,"pickingFBO",void 0),d(this,"width",0),d(this,"height",0),d(this,"alreadyInPicking",!1),d(this,"pickBufferScale",1),d(this,"pickFromPickingFBO",function(){var r=L(function*(i,{x:o,y:s,lngLat:a,type:u,target:l}){var c;let h=!1;const{readPixels:f,readPixelsAsync:p,getViewportSize:_,queryVerdorInfo:v}=n.rendererService,{width:m,height:y}=_(),{enableHighlight:T,enableSelect:S}=i.getLayerConfig(),x=o*ut,C=s*ut;if(x>m-1*ut||x<0||C>y-1*ut||C<0)return!1;let M;if(v()==="WebGPU"?M=yield p({x:Math.floor(x/n.pickBufferScale),y:Math.floor((y-(s+1)*ut)/n.pickBufferScale),width:1,height:1,data:new Uint8Array(4),framebuffer:n.pickingFBO}):M=f({x:Math.floor(x/n.pickBufferScale),y:Math.floor((y-(s+1)*ut)/n.pickBufferScale),width:1,height:1,data:new Uint8Array(4),framebuffer:n.pickingFBO}),n.pickedColors=M,M[0]!==0||M[1]!==0||M[2]!==0){const F=zn(M),V=i.layerPickService.getFeatureById(F);F!==i.getCurrentPickId()&&u==="mousemove"&&(u="mouseenter");const B={x:o,y:s,type:u,lngLat:a,featureId:F,feature:V,target:l};V&&(h=!0,i.setCurrentPickId(F),n.triggerHoverOnLayer(i,B))}else{const F={x:o,y:s,lngLat:a,type:i.getCurrentPickId()!==null&&u==="mousemove"?"mouseout":"un"+u,featureId:null,target:l,feature:null};n.triggerHoverOnLayer(i,D(D({},F),{},{type:"unpick"})),n.triggerHoverOnLayer(i,F),i.setCurrentPickId(null)}if(T&&i.layerPickService.highlightPickedFeature(M),S&&u==="click"&&((c=M)===null||c===void 0?void 0:c.toString())!==[0,0,0,0].toString()){const F=zn(M);i.getCurrentSelectedId()===null||F!==i.getCurrentSelectedId()?(i.layerPickService.selectFeature(M),i.setCurrentSelectedId(F)):(i.layerPickService.selectFeature(new Uint8Array([0,0,0,0])),i.setCurrentSelectedId(null))}return h});return function(i,o){return r.apply(this,arguments)}}()),this.container=e}get mapService(){return this.container.mapService}get rendererService(){return this.container.rendererService}get configService(){return this.container.globalConfigService}get interactionService(){return this.container.interactionService}get layerService(){return this.container.layerService}init(e){const{createTexture2D:n,createFramebuffer:r,getViewportSize:i}=this.rendererService;let{width:o,height:s}=i();this.pickBufferScale=this.configService.getSceneConfig(e).pickBufferScale||1,o=Math.round(o/this.pickBufferScale),s=Math.round(s/this.pickBufferScale);const a=n({width:o,height:s,usage:Wn.RENDER_TARGET,label:"Picking Texture"});this.pickingFBO=r({color:a,depth:!0,width:o,height:s}),this.interactionService.on(Ye.Hover,this.pickingAllLayer.bind(this))}boxPickLayer(e,n,r){var i=this;return L(function*(){const{useFramebufferAsync:o,clear:s}=i.rendererService;i.resizePickingFBO(),e.hooks.beforePickingEncode.call(),yield o(i.pickingFBO,L(function*(){s({framebuffer:i.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),e.renderModels({ispick:!0})})),e.hooks.afterPickingEncode.call();const a=yield i.pickBox(e,n);r(a)})()}pickBox(e,n){var r=this;return L(function*(){const[i,o,s,a]=n.map(y=>{const T=y<0?0:y;return Math.floor(T*ut/r.pickBufferScale)}),{readPixelsAsync:u,getViewportSize:l}=r.rendererService,{width:c,height:h}=l();if(i>(c-1)*ut/r.pickBufferScale||s<0||o>(h-1)*ut/r.pickBufferScale||a<0)return[];const f=Math.min(c/r.pickBufferScale,s)-i,p=Math.min(h/r.pickBufferScale,a)-o,_=yield u({x:i,y:Math.floor(h/r.pickBufferScale-(a+1)),width:f,height:p,data:new Uint8Array(f*p*4),framebuffer:r.pickingFBO}),v=[],m={};for(let y=0;y<_.length/4;y=y+1){const T=_.slice(y*4,y*4+4),S=zn(T);if(S!==-1&&!m[S]){const x=e.layerPickService.getFeatureById(S);v.push(D(D({},x),{},{pickedFeatureIdx:S})),m[S]=!0}}return v})()}handleCursor(e,n){const{cursor:r="",cursorEnabled:i}=e.getLayerConfig();if(i){const s=this.mapService.getType()==="amap"?this.mapService.getMapContainer():this.mapService.getMarkerContainer(),a=s==null?void 0:s.style.getPropertyValue("cursor");n==="unmousemove"&&a!==""?s==null||s.style.setProperty("cursor",""):n==="mousemove"&&(s==null||s.style.setProperty("cursor",r))}}destroy(){this.pickingFBO.destroy(),this.pickingFBO=null}pickingAllLayer(e){var n=this;return L(function*(){!n.layerService.needPick(e.type)||!n.isPickingAllLayer()||(n.alreadyInPicking=!0,yield n.pickingLayers(e),n.layerService.renderLayers(),n.alreadyInPicking=!1)})()}isPickingAllLayer(){return!(this.alreadyInPicking||this.layerService.alreadyInRendering||this.interactionService.indragging||!this.layerService.getShaderPickStat())}resizePickingFBO(){const{getViewportSize:e}=this.rendererService,{width:n,height:r}=e();(this.width!==n||this.height!==r)&&(this.pickingFBO.resize({width:Math.round(n/this.pickBufferScale),height:Math.round(r/this.pickBufferScale)}),this.width=n,this.height=r)}pickingLayers(e){var n=this;return L(function*(){const{clear:r,useFramebufferAsync:i}=n.rendererService;n.resizePickingFBO();const o=n.layerService.getRenderList();for(const s of o.filter(a=>a.needPick(e.type)).reverse()){yield i(n.pickingFBO,L(function*(){r({framebuffer:n.pickingFBO,color:[0,0,0,0],stencil:0,depth:1}),s.layerPickService.pickRender(e)}));const a=yield n.pickFromPickingFBO(s,e);if(n.layerService.pickedLayerId=a?+s.id:-1,a&&!s.getLayerConfig().enablePropagation)break}})()}triggerHoverOnLayer(e,n){z1(n)&&(this.handleCursor(e,n.type),e.emit(n.type,n))}}class H1{constructor(e=!0){d(this,"autoStart",void 0),d(this,"startTime",0),d(this,"oldTime",0),d(this,"running",!1),d(this,"elapsedTime",0),this.autoStart=e}start(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=(typeof performance>"u"?Date:performance).now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const{throttle:Oc}=we;class X1 extends pt.EventEmitter{get renderService(){return this.container.rendererService}get mapService(){return this.container.mapService}get debugService(){return this.container.debugService}constructor(e){super(),d(this,"pickedLayerId",-1),d(this,"clock",new H1),d(this,"alreadyInRendering",!1),d(this,"layers",[]),d(this,"layerList",[]),d(this,"layerRenderID",void 0),d(this,"sceneInited",!1),d(this,"animateInstanceCount",0),d(this,"shaderPicking",!0),d(this,"enableRender",!0),d(this,"reRender",Oc(()=>{this.renderLayers()},32)),d(this,"throttleRenderLayers",Oc(()=>{this.renderLayers()},16)),this.container=e}needPick(e){return this.updateLayerRenderList(),this.layerList.some(n=>n.needPick(e))}add(e){this.layers.push(e),this.sceneInited&&e.init().then(()=>{this.renderLayers()})}addMask(e){this.sceneInited&&e.init().then(()=>{this.renderLayers()})}initLayers(){var e=this;return L(function*(){e.sceneInited=!0,e.layers.forEach(function(){var n=L(function*(r){r.startInit||(yield r.init(),e.updateLayerRenderList())});return function(r){return n.apply(this,arguments)}}())})()}getSceneInited(){return this.sceneInited}getRenderList(){return this.layerList}getLayers(){return this.layers}getLayer(e){return this.layers.find(n=>n.id===e)}getLayerByName(e){return this.layers.find(n=>n.name===e)}remove(e,n){var r=this;return L(function*(){if(n){n.layerChildren||(n.layerChildren=[]);const i=n.layerChildren.findIndex(o=>o.id===e.id);i>-1&&n.layerChildren.splice(i,1)}else{const i=r.layers.findIndex(o=>o.id===e.id);i>-1&&r.layers.splice(i,1)}e.destroy(),r.reRender(),r.emit("layerChange",r.layers)})()}removeAllLayers(){var e=this;return L(function*(){e.destroy(),e.reRender()})()}setEnableRender(e){this.enableRender=e}renderLayers(){var e=this;return L(function*(){if(e.alreadyInRendering||!e.enableRender)return;e.updateLayerRenderList();const n=e.debugService.generateRenderUid();e.debugService.renderStart(n),e.alreadyInRendering=!0,e.clear();for(const r of e.layerList)r.prerender();e.renderService.beginFrame();for(const r of e.layerList){const{enableMask:i}=r.getLayerConfig();r.masks.filter(o=>o.inited).length>0&&i&&e.renderMask(r.masks),r.getLayerConfig().enableMultiPassRenderer?yield r.renderMultiPass():r.render()}e.renderService.endFrame(),e.debugService.renderEnd(n),e.alreadyInRendering=!1})()}renderMask(e){let n=0;this.renderService.clear({stencil:0,depth:1,framebuffer:null});const r=e.length>1?Un.MULTIPLE:Un.SINGLE;for(const i of e)i.render({isStencil:!0,stencilType:r,stencilIndex:n++})}beforeRenderData(e){var n=this;return L(function*(){(yield e.hooks.beforeRenderData.promise())&&n.renderLayers()})()}renderTileLayerMask(e){let n=0;const{enableMask:r=!0}=e.getLayerConfig();let i=e.tileMask?1:0;const o=e.masks.filter(a=>a.inited);i=i+(r?o.length:1);const s=i>1?Un.MULTIPLE:Un.SINGLE;if((e.tileMask||o.length&&r)&&this.renderService.clear({stencil:0,depth:1,framebuffer:null}),o.length&&r)for(const a of o)a.render({isStencil:!0,stencilType:s,stencilIndex:n++});e.tileMask&&e.tileMask.render({isStencil:!0,stencilType:s,stencilIndex:n++,stencilOperation:ps.OR})}renderTileLayer(e){var n=this;return L(function*(){n.renderTileLayerMask(e),e.getLayerConfig().enableMultiPassRenderer?yield e.renderMultiPass():yield e.render()})()}updateLayerRenderList(){this.layerList=[],this.layers.filter(e=>e.inited).filter(e=>e.isVisible()).sort((e,n)=>e.zIndex-n.zIndex).forEach(e=>{this.layerList.push(e)})}destroy(){this.layers.forEach(e=>{e.destroy()}),this.layers=[],this.layerList=[],this.emit("layerChange",this.layers)}startAnimate(){this.animateInstanceCount++===0&&(this.clock.start(),this.runRender())}stopAnimate(){--this.animateInstanceCount===0&&(this.stopRender(),this.clock.stop())}getOESTextureFloat(){return this.renderService.extensionObject.OES_texture_float}enableShaderPick(){this.shaderPicking=!0}disableShaderPick(){this.shaderPicking=!1}getShaderPickStat(){return this.shaderPicking}clear(){const e=Te(this.mapService.bgColor);this.renderService.clear({color:e,depth:1,stencil:0,framebuffer:null})}runRender(){this.renderLayers(),this.layerRenderID=window.requestAnimationFrame(this.runRender.bind(this))}stopRender(){window.cancelAnimationFrame(this.layerRenderID)}}function W1(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Zt(t,e){if(t==null)return{};var n,r,i=W1(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const{isNil:j1}=we;class $1{constructor(e){d(this,"name",void 0),d(this,"type",void 0),d(this,"scale",void 0),d(this,"descriptor",void 0),d(this,"featureBufferLayout",[]),d(this,"needRescale",!1),d(this,"needRemapping",!1),d(this,"needRegenerateVertices",!1),d(this,"featureRange",{startIndex:0,endIndex:1/0}),d(this,"vertexAttribute",void 0),d(this,"defaultCallback",n=>{if(n.length===0){var r;return((r=this.scale)===null||r===void 0?void 0:r.defaultValues)||[]}return n.map((i,o)=>{var s;return((s=this.scale)===null||s===void 0?void 0:s.scalers[o].func)(i)})}),this.setProps(e)}setProps(e){Object.assign(this,e)}mapping(e){var n;if((n=this.scale)!==null&&n!==void 0&&n.callback){var r;const i=(r=this.scale)===null||r===void 0?void 0:r.callback(...e);if(!j1(i))return[i]}return this.defaultCallback(e)}resetDescriptor(){this.descriptor&&(this.descriptor.buffer.data=[])}}const Z1=["buffer","update","name"],Y1=["buffer","update","name"],G1={[g.FLOAT]:4,[g.UNSIGNED_BYTE]:1,[g.UNSIGNED_SHORT]:2};class K1{constructor(e){d(this,"attributesAndIndices",void 0),d(this,"attributes",[]),d(this,"triangulation",void 0),d(this,"featureLayout",{sizePerElement:0,elements:[]}),this.rendererService=e}registerStyleAttribute(e){let n=this.getLayerStyleAttribute(e.name||"");return n?n.setProps(e):(n=new $1(e),this.attributes.push(n)),n}unRegisterStyleAttribute(e){const n=this.attributes.findIndex(r=>r.name===e);n>-1&&this.attributes.splice(n,1)}updateScaleAttribute(e){this.attributes.forEach(n=>{var r;const i=n.name,o=(r=n.scale)===null||r===void 0?void 0:r.field;(e[i]||o&&e[o])&&(n.needRescale=!0,n.needRemapping=!0,n.needRegenerateVertices=!0)})}updateStyleAttribute(e,n,r){let i=this.getLayerStyleAttribute(e);i||(i=this.registerStyleAttribute(D(D({},n),{},{name:e})));const{scale:o}=n;o&&i&&(i.scale=o,i.needRescale=!0,i.needRemapping=!0,i.needRegenerateVertices=!0,r&&r.featureRange&&(i.featureRange=r.featureRange))}getLayerStyleAttributes(){return this.attributes}getLayerStyleAttribute(e){return this.attributes.find(n=>n.name===e)}getLayerAttributeScale(e){var n;const r=this.getLayerStyleAttribute(e),i=r==null||(n=r.scale)===null||n===void 0?void 0:n.scalers;return i&&i[0]?i[0].func:null}updateAttributeByFeatureRange(e,n,r=0,i,o){const s=this.attributes.find(a=>a.name===e);if(s&&s.descriptor){const{descriptor:a}=s,{update:u,buffer:l,size:c=0}=a,h=G1[l.type||g.FLOAT];if(u){const{elements:f,sizePerElement:p}=this.featureLayout,_=f.slice(r,i);if(!_.length)return;const{offset:v}=_[0],m=v*c*h,y=_.map(({featureIdx:T,vertices:S,normals:x},C)=>{const M=S.length/p,P=[];for(let F=0;F<M;F++){const V=x?x.slice(F*3,F*3+3):[];P.push(...u(n[T],T,S.slice(F*p,F*p+p),C,V))}return P}).flat();s.vertexAttribute.updateBuffer({data:y,offset:m}),o==null||o.emit(`legend:${e}`,o.getLegend(e))}}}createAttributesAndIndices(e,n,r,i){this.featureLayout={sizePerElement:0,elements:[]},n&&(this.triangulation=n);const o=this.attributes.map(v=>(v.resetDescriptor(),v.descriptor));let s=0,a=0;const u=[];let l=3;e.forEach((v,m)=>{const{indices:y,vertices:T,normals:S,size:x,indexes:C,count:M}=this.triangulation(v,r);typeof M=="number"&&(a+=M),y.forEach(F=>{u.push(F+s)}),l=x;const P=T.length/x;this.featureLayout.sizePerElement=l,this.featureLayout.elements.push({featureIdx:m,vertices:T,normals:S,offset:s}),s+=P;for(let F=0;F<P;F++){const V=(S==null?void 0:S.slice(F*3,F*3+3))||[],B=T.slice(F*x,F*x+x);let O=0;C&&C[F]!==void 0&&(O=C[F]),o.forEach((N,U)=>{N&&N.update&&N.buffer.data.push(...N.update(v,m,B,F,V,O))})}});const{createAttribute:c,createBuffer:h,createElements:f}=this.rendererService,p={};o.forEach((v,m)=>{if(v){const{buffer:y,update:T,name:S}=v,x=Zt(v,Z1),C=c(D({buffer:h(y)},x));p[v.name||""]=C,this.attributes[m].vertexAttribute=C}});const _=f({data:u,type:g.UNSIGNED_INT,count:u.length});return this.attributesAndIndices={attributes:p,elements:_,count:a},Object.values(this.attributes).filter(v=>v.scale).forEach(v=>{const m=v.name;i==null||i.emit(`legend:${m}`,i.getLegend(m))}),this.attributesAndIndices}createAttributes(e,n){this.featureLayout={sizePerElement:0,elements:[]},n&&(this.triangulation=n);const r=this.attributes.map(l=>(l.resetDescriptor(),l.descriptor));let i=0,o=3;e.forEach((l,c)=>{const{indices:h,vertices:f,normals:p,size:_,indexes:v}=this.triangulation(l);h.forEach(y=>{}),o=_;const m=f.length/_;this.featureLayout.sizePerElement=o,this.featureLayout.elements.push({featureIdx:c,vertices:f,normals:p,offset:i}),i+=m;for(let y=0;y<m;y++){const T=(p==null?void 0:p.slice(y*3,y*3+3))||[],S=f.slice(y*_,y*_+_);let x=0;v&&v[y]!==void 0&&(x=v[y]),r.forEach((C,M)=>{C&&C.update&&C.buffer.data.push(...C.update(l,c,S,y,T,x))})}});const{createAttribute:s,createBuffer:a}=this.rendererService,u={};return r.forEach((l,c)=>{if(l){const{buffer:h,update:f,name:p}=l,_=Zt(l,Y1),v=s(D({buffer:a(h)},_));u[l.name||""]=v,this.attributes[c].vertexAttribute=v}}),{attributes:u}}clearAllAttributes(){var e;this.attributes.forEach(n=>{n.vertexAttribute&&n.vertexAttribute.destroy()}),(e=this.attributesAndIndices)===null||e===void 0||e.elements.destroy(),this.attributes=[]}}let q1=class extends pt.EventEmitter{get iconService(){return this.container.iconService}get fontService(){return this.container.fontService}get controlService(){return this.container.controlService}get configService(){return this.container.globalConfigService}get map(){return this.container.mapService}get coordinateSystemService(){return this.container.coordinateSystemService}get rendererService(){return this.container.rendererService}get layerService(){return this.container.layerService}get debugService(){return this.container.debugService}get cameraService(){return this.container.cameraService}get interactionService(){return this.container.interactionService}get pickingService(){return this.container.pickingService}get shaderModuleService(){return this.container.shaderModuleService}get markerService(){return this.container.markerService}get popupService(){return this.container.popupService}constructor(e){super(),d(this,"destroyed",!1),d(this,"loaded",!1),d(this,"id",void 0),d(this,"inited",!1),d(this,"rendering",!1),d(this,"$container",void 0),d(this,"canvas",void 0),d(this,"markerContainer",void 0),d(this,"resizeDetector",void 0),d(this,"hooks",void 0),d(this,"handleWindowResized",n=>{this.emit("resize"),this.$container&&(this.initContainer(),this.coordinateSystemService.needRefresh=!0,this.render())}),d(this,"handleDPRChange",()=>{this.handleWindowResized([])}),d(this,"handleMapCameraChanged",n=>{this.cameraService.update(n),this.render()}),this.container=e,this.hooks={init:new Fs},this.id=e.id}init(e){var n=this;this.inited||this.rendering||(this.destroyed=!1,this.configService.setSceneConfig(this.id,e),this.shaderModuleService.registerBuiltinModules(),this.iconService.init(),this.iconService.on("imageUpdate",()=>this.render()),this.fontService.init(),this.hooks.init.tapPromise("initMap",L(function*(){n.destroyed||(n.debugService.log("map.mapInitStart",{type:n.map.version}),yield new Promise((r,i)=>{n.map.onCameraChanged(s=>{n.destroyed||(n.cameraService.init(),n.cameraService.update(s),r())});const o=n.map.init();typeof(o==null?void 0:o.catch)=="function"&&o.catch(i)}),!n.destroyed&&(n.map.onCameraChanged(n.handleMapCameraChanged),n.map.addMarkerContainer(),n.markerService.addMarkers(),n.markerService.addMarkerLayers(),n.popupService.initPopup(),n.interactionService.init(),n.interactionService.on(Ye.Drag,n.addSceneEvent.bind(n)),n.interactionService.on(Ye.Hover,n.addSceneEvent.bind(n)),n.interactionService.on(Ye.Click,n.addSceneEvent.bind(n)),n.interactionService.on(Ye.DblClick,n.addSceneEvent.bind(n))))})),this.hooks.init.tapPromise("initRenderer",L(function*(){var r;if(n.destroyed)return;const i=((r=n.map)===null||r===void 0?void 0:r.getOverlayContainer())||void 0;if(i?n.$container=i:n.$container=k1(n.configService.getSceneConfig(n.id).id||""),n.$container){const{canvas:a}=e;if(n.canvas=a||We("canvas","",n.$container),n.setCanvas(),yield n.rendererService.init(n.canvas,n.configService.getSceneConfig(n.id),e.gl),n.destroyed){var o;(o=n.$container)===null||o===void 0||o.removeChild(n.canvas),n.canvas=null,n.rendererService.destroy();return}if(n.registerContextLost(),n.initContainer(),n.resizeDetector=new ResizeObserver(n.handleWindowResized),n.resizeDetector.observe(n.$container),window.matchMedia){var s;(s=window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 1.5)"))===null||s===void 0||s.addListener(n.handleDPRChange)}}else console.error("容器 id 不存在");n.pickingService.init(n.id)})),this.render())}registerContextLost(){const e=this.rendererService.getCanvas();e&&e.addEventListener("webglcontextlost",()=>this.emit("webglcontextlost"))}addLayer(e){this.layerService.sceneService=this,this.layerService.add(e)}addMask(e){this.layerService.sceneService=this,this.layerService.addMask(e)}render(){var e=this;return L(function*(){if(!(e.rendering||e.destroyed)){if(e.rendering=!0,e.inited)yield e.layerService.initLayers(),yield e.layerService.renderLayers();else{if(yield e.hooks.init.promise(),e.destroyed)return;yield e.layerService.initLayers(),e.layerService.renderLayers(),e.controlService.addControls(),e.loaded=!0,e.emit("loaded"),e.inited=!0}e.rendering=!1}})()}addFontFace(e,n){this.fontService.addFontFace(e,n)}getSceneContainer(){return this.$container}exportPng(e){var n=this;return L(function*(){var r;const i=(r=n.$container)===null||r===void 0?void 0:r.getElementsByTagName("canvas")[0];return yield n.render(),e==="jpg"?i==null?void 0:i.toDataURL("image/jpeg"):i==null?void 0:i.toDataURL("image/png")})()}getSceneConfig(){return this.configService.getSceneConfig(this.id)}getPointSizeRange(){return this.rendererService.getPointSizeRange()}addMarkerContainer(){const e=this.$container.parentElement;e!==null&&(this.markerContainer=We("div","l7-marker-container",e))}getMarkerContainer(){return this.markerContainer}destroy(){var e;if(!this.inited){if(this.destroyed=!0,this.hooks.init=new Fs,this.iconService.destroy(),this.fontService.destroy(),this.controlService.destroy(),this.markerService.destroy(),this.popupService.destroy(),this.removeAllListeners(),this.map&&this.map.destroy(),this.$container){var n;this.canvas&&this.$container.contains(this.canvas)&&this.$container.removeChild(this.canvas),(n=this.$container)===null||n===void 0||(n=n.parentNode)===null||n===void 0||n.removeChild(this.$container)}this.emit("destroy");return}this.resizeDetector.disconnect(),this.pickingService.destroy(),this.layerService.destroy(),this.interactionService.destroy(),this.controlService.destroy(),this.markerService.destroy(),this.fontService.destroy(),this.iconService.destroy(),this.removeAllListeners(),this.inited=!1,this.loaded=!1,this.destroyed=!0,this.hooks.init=new Fs,this.map.destroy(),setTimeout(()=>{var r;(r=this.$container)===null||r===void 0||r.removeChild(this.canvas),this.canvas=null,this.rendererService.destroy()}),(e=this.$container)===null||e===void 0||(e=e.parentNode)===null||e===void 0||e.removeChild(this.$container),this.emit("destroy")}initContainer(){var e,n;const r=ut,i=((e=this.$container)===null||e===void 0?void 0:e.clientWidth)||400,o=((n=this.$container)===null||n===void 0?void 0:n.clientHeight)||300,s=this.canvas;s&&(s.width=i*r,s.height=o*r),this.rendererService.viewport({x:0,y:0,width:r*i,height:r*o})}setCanvas(){var e,n;const r=ut,i=((e=this.$container)===null||e===void 0?void 0:e.clientWidth)||400,o=((n=this.$container)===null||n===void 0?void 0:n.clientHeight)||300,s=this.canvas;s.width=i*r,s.height=o*r,s.style.width="100%",s.style.height="100%"}addSceneEvent(e){this.emit(e.type,e)}};const{uniq:Q1}=we,Pc=`#define PI (3.14159265359)
`,J1=`#define ambientRatio (0.5)
#define diffuseRatio (0.3)
#define specularRatio (0.2)

float calc_lighting(vec4 pos) {
  vec3 worldPos = vec3(pos * u_ModelMatrix);

  vec3 worldNormal = a_Normal;
  // //cal light weight
  vec3 viewDir = normalize(u_CameraPosition - worldPos);

  vec3 lightDir = normalize(vec3(1, -10.5, 12));

  vec3 halfDir = normalize(viewDir + lightDir);
  // //lambert
  float lambert = dot(worldNormal, lightDir);
  //specular
  float specular = pow(max(0.0, dot(worldNormal, halfDir)), 32.0);
  //sum to light weight
  float lightWeight = ambientRatio + diffuseRatio * lambert + specularRatio * specular;

  return lightWeight;
}
`,ey=`#define SHIFT_RIGHT17 (1.0 / 131072.0)
#define SHIFT_RIGHT18 (1.0 / 262144.0)
#define SHIFT_RIGHT19 (1.0 / 524288.0)
#define SHIFT_RIGHT20 (1.0 / 1048576.0)
#define SHIFT_RIGHT21 (1.0 / 2097152.0)
#define SHIFT_RIGHT22 (1.0 / 4194304.0)
#define SHIFT_RIGHT23 (1.0 / 8388608.0)
#define SHIFT_RIGHT24 (1.0 / 16777216.0)

#define SHIFT_LEFT17 (131072.0)
#define SHIFT_LEFT18 (262144.0)
#define SHIFT_LEFT19 (524288.0)
#define SHIFT_LEFT20 (1048576.0)
#define SHIFT_LEFT21 (2097152.0)
#define SHIFT_LEFT22 (4194304.0)
#define SHIFT_LEFT23 (8388608.0)
#define SHIFT_LEFT24 (16777216.0)

vec2 unpack_float(float packedValue) {
  int packedIntValue = int(packedValue);
  int v0 = packedIntValue / 256;
  return vec2(v0, packedIntValue - v0 * 256);
}

vec4 decode_color(vec2 encodedColor) {
  return vec4(unpack_float(encodedColor[0]) / 255.0, unpack_float(encodedColor[1]) / 255.0);
}
`,ty=`// Blinn-Phong model
// apply lighting in vertex shader instead of fragment shader
// @see https://learnopengl.com/Advanced-Lighting/Advanced-Lighting
uniform float u_Ambient : 1.0;
uniform float u_Diffuse : 1.0;
uniform float u_Specular : 1.0;
uniform int u_NumOfDirectionalLights : 1;
uniform int u_NumOfSpotLights : 0;

#define SHININESS 32.0
#define MAX_NUM_OF_DIRECTIONAL_LIGHTS 3
#define MAX_NUM_OF_SPOT_LIGHTS 3

struct DirectionalLight {
  vec3 direction;
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
};

struct SpotLight {
  vec3 position;
  vec3 direction;
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  float constant;
  float linear;
  float quadratic;
  float angle;
  float blur;
  float exponent;
};

uniform DirectionalLight u_DirectionalLights[MAX_NUM_OF_DIRECTIONAL_LIGHTS];
uniform SpotLight u_SpotLights[MAX_NUM_OF_SPOT_LIGHTS];

vec3 calc_directional_light(DirectionalLight light, vec3 normal, vec3 viewDir) {
  vec3 lightDir = normalize(light.direction);
  // diffuse shading
  float diff = max(dot(normal, lightDir), 0.0);
  // Blinn-Phong specular shading
  vec3 halfwayDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(normal, halfwayDir), 0.0), SHININESS);

  vec3 ambient = light.ambient * u_Ambient;
  vec3 diffuse = light.diffuse * diff * u_Diffuse;
  vec3 specular = light.specular * spec * u_Specular;

  return ambient + diffuse + specular;
}


vec3 calc_lighting(vec3 position, vec3 normal, vec3 viewDir) {
  vec3 weight = vec3(0.0);
  for (int i = 0; i < MAX_NUM_OF_DIRECTIONAL_LIGHTS; i++) {
    if (i >= u_NumOfDirectionalLights) {
      break;
    }
    weight += calc_directional_light(u_DirectionalLights[i], normal, viewDir);
  }
  return weight;
}
`,ny=`in vec4 v_PickingResult;

#pragma include "picking_uniforms"

#define PICKING_NONE (0.0)
#define PICKING_ENCODE (1.0)
#define PICKING_HIGHLIGHT (2.0)
#define COLOR_SCALE (1.0 / 255.0)

#define HIGHLIGHT (1.0)
#define SELECT (2.0)

/*
 * Returns highlight color if this item is selected.
 */
vec4 filterHighlightColor(vec4 color, float weight) {
  float activeType = v_PickingResult.a;
  if (activeType > 0.0) {
    vec4 highLightColor = activeType > 1.5 ? u_SelectColor : u_HighlightColor;
    highLightColor = highLightColor * COLOR_SCALE;
    float highLightAlpha = highLightColor.a;
    float highLightRatio = highLightAlpha / (highLightAlpha + color.a * (1.0 - highLightAlpha));
    vec3 resultRGB = mix(color.rgb, highLightColor.rgb, highLightRatio);
    return vec4(mix(resultRGB * weight, color.rgb, u_activeMix), color.a);
  } else {
    return color;
  }

}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 filterPickingColor(vec4 color) {
  vec3 pickingColor = v_PickingResult.rgb;
  if (u_PickingStage == PICKING_ENCODE && length(pickingColor) < 0.001) {
    discard;
  }
  return u_PickingStage == PICKING_ENCODE
    ? vec4(pickingColor, step(0.001, color.a))
    : color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 filterColor(vec4 color) {
  // 过滤多余的 shader 计算
  // return color;
  if (u_shaderPick < 0.5) {
    return color; // 暂时去除 直接取消计算在选中时拖拽地图会有问题
  } else {
    return filterPickingColor(filterHighlightColor(color, 1.0));
  }

}

vec4 filterColorAlpha(vec4 color, float alpha) {
  // 过滤多余的 shader 计算
  // return color;
  if (u_shaderPick < 0.5) {
    return color; // 暂时去除 直接取消计算在选中时拖拽地图会有问题
  } else {
    return filterPickingColor(filterHighlightColor(color, alpha));
  }
}

`,ry=`layout(location = ATTRIBUTE_LOCATION_PICKING_COLOR) in vec3 a_PickingColor;
out vec4 v_PickingResult;

#pragma include "picking_uniforms"

#define PICKING_NONE 0.0
#define PICKING_ENCODE 1.0
#define PICKING_HIGHLIGHT 2.0
#define COLOR_SCALE 1. / 255.

#define NORMAL 0.0
#define HIGHLIGHT 1.0
#define SELECT 2.0

bool isVertexPicked(vec3 vertexColor) {
  return distance(vertexColor,u_PickingColor.rgb) < 0.01;
}

// 判断当前点是否已经被 select 选中
bool isVertexSelected(vec3 vertexColor) {
  return distance(vertexColor,u_CurrentSelectedId.rgb) < 0.01;
}

void setPickingColor(vec3 pickingColor) {
  if(u_shaderPick < 0.5) {
    return;
  }
  // compares only in highlight stage

  if(u_PickingStage == PICKING_HIGHLIGHT) {
    if(isVertexPicked(pickingColor)) {
       v_PickingResult = vec4(pickingColor.rgb * COLOR_SCALE,HIGHLIGHT);
       return;
    }
    if(isVertexSelected(pickingColor)) {
     v_PickingResult = vec4(u_CurrentSelectedId.rgb * COLOR_SCALE,SELECT);
      return;
    }

  } else {
      v_PickingResult= vec4(pickingColor.rgb * COLOR_SCALE,NORMAL);
      return;
  }

  // // v_PickingResult.a = float((u_PickingStage == PICKING_HIGHLIGHT) && (isVertexPicked(pickingColor) || isVertexPicked(u_CurrentSelectedId)));

  // // Stores the picking color so that the fragment shader can render it during picking
  // v_PickingResult.rgb = pickingColor * COLOR_SCALE;
}

float setPickingSize(float x) {
   return u_PickingStage == PICKING_ENCODE ? x + u_PickingBuffer : x;
}

float setPickingOrder(float z) {
   bool selected = bool(v_PickingResult.a);
   return selected ? z + 1. : 0.;
}
`,Fc=`layout(std140) uniform PickingUniforms {
  vec4 u_HighlightColor;
  vec4 u_SelectColor;
  vec3 u_PickingColor;
  float u_PickingStage;
  vec3 u_CurrentSelectedId;
  float u_PickingThreshold;
  float u_PickingBuffer;
  float u_shaderPick;
  float u_activeMix;
};
`,iy=`#define E (2.718281828459045)
vec2 ProjectFlat(vec2 lnglat) {
  float maxs = 85.0511287798;
  float lat = max(min(maxs, lnglat.y), -maxs);
  float scale = 268435456.0;
  float d = PI / 180.0;
  float x = lnglat.x * d;
  float y = lat * d;
  y = log(tan(PI / 4.0 + y / 2.0));

  float a = 0.5 / PI,
    b = 0.5,
    c = -0.5 / PI;
  d = 0.5;
  x = scale * (a * x + b);
  y = scale * (c * y + d);
  return vec2(x, y);
}

vec2 unProjectFlat(vec2 px) {
  float a = 0.5 / PI;
  float b = 0.5;
  float c = -0.5 / PI;
  float d = 0.5;
  float scale = 268435456.0;
  float x = (px.x / scale - b) / a;
  float y = (px.y / scale - d) / c;
  y = (atan(pow(E, y)) - PI / 4.0) * 2.0;
  d = PI / 180.0;
  float lat = y / d;
  float lng = x / d;
  return vec2(lng, lat);
}

float pixelDistance(vec2 from, vec2 to) {
  vec2 a1 = ProjectFlat(from);
  vec2 b1 = ProjectFlat(to);
  return distance(a1, b1);
}

// gaode2.0
vec2 customProject(vec2 lnglat) {
  // 经纬度 => 平面坐标
  float t = lnglat.x;
  float e = lnglat.y;
  float Sm = 180.0 / PI;
  float Tm = 6378137.0;
  float Rm = PI / 180.0;
  float r = 85.0511287798;
  e = max(min(r, e), -r);
  t *= Rm;
  e *= Rm;
  e = log(tan(PI / 4.0 + e / 2.0));
  return vec2(t * Tm, e * Tm);
}

vec2 unProjCustomCoord(vec2 point) {
  // 平面坐标 => 经纬度
  float Sm = 57.29577951308232; //180 / Math.PI
  float Tm = 6378137.0;
  float t = point.x;
  float e = point.y;
  return vec2(t / Tm * Sm, (2.0 * atan(exp(e / Tm)) - PI / 2.0) * Sm);
}

float customPixelDistance(vec2 from, vec2 to) {
  vec2 a1 = ProjectFlat(from);
  vec2 b1 = ProjectFlat(to);
  return distance(a1, b1);
}
`,Bc=`#define TILE_SIZE (512.0)
#define PI (3.1415926536)
#define WORLD_SCALE (TILE_SIZE / (PI * 2.0))
#define EARTH_CIRCUMFERENCE (40.03e6)

#define COORDINATE_SYSTEM_LNGLAT (1.0) // mapbox
#define COORDINATE_SYSTEM_LNGLAT_OFFSET (2.0) // mapbox offset
#define COORDINATE_SYSTEM_VECTOR_TILE (3.0)
#define COORDINATE_SYSTEM_IDENTITY (4.0)
#define COORDINATE_SYSTEM_METER_OFFSET (5.0)

#pragma include "scene_uniforms"

const vec2 ZERO_64_XY_LOW = vec2(0.0, 0.0);

// web mercator coords -> world coords
vec2 project_mercator(vec2 lnglat) {
  float x = lnglat.x;
  return vec2(radians(x) + PI, PI - log(tan(PI * 0.25 + radians(lnglat.y) * 0.5)));
}

float project_scale(float meters) {
  return meters * u_PixelsPerMeter.z;
}

// offset coords -> world coords
vec4 project_offset(vec4 offset) {
  float dy = offset.y;
  dy = clamp(dy, -1.0, 1.0);
  vec3 pixels_per_unit = u_PixelsPerDegree + u_PixelsPerDegree2 * dy;
  return vec4(offset.xyz * pixels_per_unit, offset.w);
}

// Keep fp64 low parts in explicit branches so GLSL compilers do not fold them
// back into large lng/lat arithmetic where sub-ULP values can be rounded away.
vec4 project_offset_with_low(vec4 offset, vec2 offset64xyLow) {
  float dy = offset.y;
  dy = clamp(dy, -1.0, 1.0);
  vec3 pixels_per_unit = u_PixelsPerDegree + u_PixelsPerDegree2 * dy;
  vec4 projected = vec4(offset.xyz * pixels_per_unit, offset.w);

  if (offset64xyLow.x != 0.0) {
    projected.x += offset64xyLow.x * pixels_per_unit.x;
  }
  if (offset64xyLow.y != 0.0) {
    projected.y += offset64xyLow.y * pixels_per_unit.y;
  }

  return projected;
}

vec3 project_normal(vec3 normal) {
  vec4 normal_modelspace = u_ModelMatrix * vec4(normal, 0.0);
  return normalize(normal_modelspace.xyz * u_PixelsPerMeter);
}

vec3 project_offset_normal(vec3 vector) {
  if (
    u_CoordinateSystem < COORDINATE_SYSTEM_LNGLAT + 0.01 &&
      u_CoordinateSystem > COORDINATE_SYSTEM_LNGLAT - 0.01 ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // normals generated by the polygon tesselator are in lnglat offsets instead of meters
    return normalize(vector * u_PixelsPerDegree);
  }
  return project_normal(vector);
}

vec4 project_position(vec4 position, vec2 position64xyLow) {
  // 检查是否使用了图层相对坐标转换
  bool usingRelativeCoords = abs(u_RelativeOrigin.x) > 0.0001 || abs(u_RelativeOrigin.y) > 0.0001;

  if (usingRelativeCoords) {
    // 相对坐标系的特殊处理：CPU侧已确保ViewportCenter=RelativeOrigin
    // 在高缩放级别时直接使用相对坐标，避免精度问题

    if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      // 高缩放级别：直接使用相对坐标作为偏移
      // 由于ViewportCenter已被设置为RelativeOrigin，可以直接使用position
      float X = position.x;
      float Y = position.y;
      return project_offset_with_low(vec4(X, Y, position.z, position.w), position64xyLow);
    } else {
      // 低缩放级别：转换为绝对坐标后使用墨卡托投影
      vec2 absolutePos = position.xy + u_RelativeOrigin.xy;
      return vec4(
        project_mercator(absolutePos) * WORLD_SCALE * u_ZoomScale,
        project_scale(position.z),
        position.w
      );
    }
  }

  // 处理普通坐标系（非相对坐标）
  vec4 absolutePosition = position;
  vec2 absolutePosition64xyLow = position64xyLow;

  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    // 在偏移坐标系下
    vec2 center = u_ViewportCenter;
    float X = absolutePosition.x - center.x;
    float Y = absolutePosition.y - center.y;
    return project_offset_with_low(
      vec4(X, Y, absolutePosition.z, absolutePosition.w),
      absolutePosition64xyLow
    );
  }
  if (
    u_CoordinateSystem < COORDINATE_SYSTEM_LNGLAT + 0.01 &&
    u_CoordinateSystem > COORDINATE_SYSTEM_LNGLAT - 0.01
  ) {
    // 在经纬度坐标系下使用墨卡托投影
    return vec4(
      project_mercator(absolutePosition.xy) * WORLD_SCALE * u_ZoomScale,
      project_scale(absolutePosition.z),
      absolutePosition.w
    );
  }

  return absolutePosition;
}

vec4 project_position(vec4 position) {
  return project_position(position, ZERO_64_XY_LOW);
}

vec2 project_pixel_size_to_clipspace(vec2 pixels) {
  vec2 offset = pixels / u_ViewportSize * u_DevicePixelRatio * 2.0;
  return offset * u_FocalDistance;
}

// 适配纹理贴图的等像素大小
float project_pixel_texture(float pixel) {
  // mapbox zoom > 12
  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    return pixel * pow(0.5, u_Zoom) * u_FocalDistance;
  }

  return pixel * 2.0 * u_FocalDistance;
}

// 在不论什么底图下需要统一处理的时候使用
float project_float_pixel(float pixel) {
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // mapbox 坐标系下，为了和 Web 墨卡托坐标系统一，zoom 默认减1
    return pixel * pow(2.0, 19.0 - u_Zoom) * u_FocalDistance;
  }

  return pixel * u_FocalDistance;
}

// Project meter into the unit of pixel which used in the camera world space
float project_float_meter(float meter) {
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // Since the zoom level uniform is updated by mapservice and it's alread been subtracted by 1
    // Not sure if we are supposed to do that again
    return meter;
  } else {
    return project_float_pixel(meter);
  }

  // TODO: change the following code to make adaptations for amap
  // return u_FocalDistance * TILE_SIZE * pow(2.0, u_Zoom) * meter / EARTH_CIRCUMFERENCE;

}

float project_pixel(float pixel) {
  return pixel * u_FocalDistance;
}

vec2 project_pixel(vec2 pixel) {
  return pixel * -1.0 * u_FocalDistance;
}

vec3 project_pixel(vec3 pixel) {
  return pixel * -1.0 * u_FocalDistance;
}

vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_METER_OFFSET ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // Needs to be divided with project_uCommonUnitsPerMeter
    position.w *= u_PixelsPerMeter.z;
  }

  return viewProjectionMatrix * position + center;
}

// Projects from common space coordinates to clip space
vec4 project_common_position_to_clipspace(vec4 position) {
  return project_common_position_to_clipspace(
    position,
    u_ViewProjectionMatrix,
    u_ViewportCenterProjection
  );
}

vec4 unproject_clipspace_to_position(vec4 clipspacePos, mat4 u_InverseViewProjectionMatrix) {
  vec4 pos = u_InverseViewProjectionMatrix * (clipspacePos - u_ViewportCenterProjection);

  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_METER_OFFSET ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // Needs to be divided with project_uCommonUnitsPerMeter
    pos.w = pos.w / u_PixelsPerMeter.z;
  }
  return pos;
}

bool isEqual(float a, float b) {
  return a < b + 0.001 && a > b - 0.001;
}
`,oy=`vec2 rotate_matrix(vec2 v, float a) {
  float b = a / 180.0 * 3.1415926535897932384626433832795;
  float s = sin(b);
  float c = cos(b);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}
`,Nc=`layout(std140) uniform SceneUniforms {
  mat4 u_ViewMatrix;
  mat4 u_ProjectionMatrix;
  mat4 u_ViewProjectionMatrix;
  mat4 u_ModelMatrix;
  vec4 u_ViewportCenterProjection;
  vec3 u_PixelsPerDegree;
  float u_Zoom;
  vec3 u_PixelsPerDegree2;
  float u_ZoomScale;
  vec3 u_PixelsPerMeter;
  float u_CoordinateSystem;
  vec3 u_CameraPosition;
  float u_DevicePixelRatio;
  vec2 u_ViewportCenter;
  vec2 u_ViewportSize;
  float u_FocalDistance;
  vec2 u_RelativeOrigin;
  float u_Reserved3;
};
`,sy=`/**
 * 2D signed distance field functions
 * @see http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
 */

float ndot(vec2 a, vec2 b) {
  return a.x * b.x - a.y * b.y;
}

float sdCircle(vec2 p, float r) {
  return length(p) - r;
}

float sdEquilateralTriangle(vec2 p) {
  float k = sqrt(3.0);
  p.x = abs(p.x) - 1.0;
  p.y = p.y + 1.0 / k;
  if (p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  p.x -= clamp(p.x, -2.0, 0.0);
  return -length(p) * sign(p.y);
}

float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, vec2(0))) + min(max(d.x, d.y), 0.0);
}

float sdPentagon(vec2 p, float r) {
  vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
  p.x = abs(p.x);
  p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
  p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
  p -= vec2(clamp(p.x, -r * k.z, r * k.z), r);
  return length(p) * sign(p.y);
}

float sdHexagon(vec2 p, float r) {
  vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
  p = abs(p);
  p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
  p -= vec2(clamp(p.x, -k.z * r, k.z * r), r);
  return length(p) * sign(p.y);
}

float sdOctogon(vec2 p, float r) {
  vec3 k = vec3(-0.9238795325, 0.3826834323, 0.4142135623);
  p = abs(p);
  p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
  p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
  p -= vec2(clamp(p.x, -k.z * r, k.z * r), r);
  return length(p) * sign(p.y);
}

float sdHexagram(vec2 p, float r) {
  vec4 k = vec4(-0.5, 0.8660254038, 0.5773502692, 1.7320508076);
  p = abs(p);
  p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
  p -= 2.0 * min(dot(k.yx, p), 0.0) * k.yx;
  p -= vec2(clamp(p.x, r * k.z, r * k.w), r);
  return length(p) * sign(p.y);
}

float sdRhombus(vec2 p, vec2 b) {
  vec2 q = abs(p);
  float h = clamp((-2.0 * ndot(q, b) + ndot(b, b)) / dot(b, b), -1.0, 1.0);
  float d = length(q - 0.5 * b * vec2(1.0 - h, 1.0 + h));
  return d * sign(q.x * b.y + q.y * b.x - b.x * b.y);
}

float sdVesica(vec2 p, float r, float d) {
  p = abs(p);
  float b = sqrt(r * r - d * d); // can delay this sqrt
  return (p.y - b) * d > p.x * b
    ? length(p - vec2(0.0, b))
    : length(p - vec2(-d, 0.0)) - r;
}
`,Dc=/precision\s+(high|low|medium)p\s+float/,wc=`#ifdef GL_FRAGMENT_PRECISION_HIGH
 precision highp float;
 #else
 precision mediump float;
#endif
`,ay=/#pragma include (["^+"]?["[a-zA-Z_0-9](.*)"]*?)/g,uy=/void\s+main\s*\([^)]*\)\s*\{\n?/;class ly{constructor(){d(this,"moduleCache",{}),d(this,"rawContentCache",{})}registerBuiltinModules(){this.destroy(),this.registerModule("common",{vs:Pc,fs:Pc}),this.registerModule("decode",{vs:ey,fs:""}),this.registerModule("scene_uniforms",{vs:Nc,fs:Nc}),this.registerModule("picking_uniforms",{vs:Fc,fs:Fc}),this.registerModule("projection",{vs:Bc,fs:Bc}),this.registerModule("project",{vs:iy,fs:""}),this.registerModule("sdf_2d",{vs:"",fs:sy}),this.registerModule("lighting",{vs:ty,fs:""}),this.registerModule("light",{vs:J1,fs:""}),this.registerModule("picking",{vs:ry,fs:ny}),this.registerModule("rotation_2d",{vs:oy,fs:""})}registerModule(e,n){n.vs=n.vs.replace(/\r\n/g,`
`),n.fs=n.fs.replace(/\r\n/g,`
`);const{vs:r,fs:i,uniforms:o,defines:s,inject:a}=n,{content:u,uniforms:l}=Hs(r),{content:c,uniforms:h}=Hs(i);this.rawContentCache[e]={fs:c,defines:s,inject:a,uniforms:D(D(D({},l),h),o),vs:u}}getModule(e){let n=this.rawContentCache[e].vs,r=this.rawContentCache[e].fs;const{defines:i={},inject:o={}}=this.rawContentCache[e];let s={};o["vs:#decl"]&&(n=o["vs:#decl"]+n,s=Hs(o["vs:#decl"]).uniforms),o["vs:#main-start"]&&(n=n.replace(uy,v=>v+o["vs:#main-start"])),o["fs:#decl"]&&(r=o["fs:#decl"]+r),n=cy(i)+n;const{content:u,includeList:l}=this.processModule(n,[],"vs"),{content:c,includeList:h}=this.processModule(r,[],"fs"),f=Q1(l.concat(h).concat(e)).reduce((v,m)=>D(D({},v),this.rawContentCache[m].uniforms),D({},s)),p=(Dc.test(c)?"":wc)+u,_=(Dc.test(c)?"":wc)+c;return this.moduleCache[e]={vs:p.trim(),fs:_.trim(),uniforms:f},this.moduleCache[e]}destroy(){this.moduleCache={},this.rawContentCache={}}processModule(e,n,r){return{content:e.replace(ay,(o,s)=>{const u=s.split(" ")[0].replace(/"/g,"");if(n.indexOf(u)>-1)return"";const l=this.rawContentCache[u][r];n.push(u);const{content:c}=this.processModule(l,n,r);return c}),includeList:n}}}function cy(t){return Object.keys(t).reduce((n,r)=>n+`#define ${r.toUpperCase()} ${t[r]}
`,`
`)}class Ru{constructor(){d(this,"shaderModuleService",void 0),d(this,"rendererService",void 0),d(this,"cameraService",void 0),d(this,"mapService",void 0),d(this,"interactionService",void 0),d(this,"layerService",void 0),d(this,"config",void 0)}getName(){return""}getType(){return Bi.Normal}init(e,n){this.config=n,this.rendererService=e.getContainer().rendererService,this.cameraService=e.getContainer().cameraService,this.mapService=e.getContainer().mapService,this.interactionService=e.getContainer().interactionService,this.layerService=e.getContainer().layerService,this.shaderModuleService=e.getContainer().shaderModuleService}render(e){}}class hy extends Ru{getName(){return"clear"}init(e,n){super.init(e,n)}render(){this.rendererService.clear({color:[0,0,0,0],depth:1,framebuffer:null})}}class fy{constructor(e){d(this,"passes",[]),d(this,"layer",void 0),d(this,"renderFlag",void 0),d(this,"width",0),d(this,"height",0),this.postProcessor=e}setLayer(e){this.layer=e}setRenderFlag(e){this.renderFlag=e}getRenderFlag(){return this.renderFlag}getPostProcessor(){return this.postProcessor}render(){var e=this;return L(function*(){for(const n of e.passes)yield n.render(e.layer);yield e.postProcessor.render(e.layer)})()}resize(e,n){(this.width!==e||this.height!==n)&&(this.postProcessor.resize(e,n),this.width=e,this.height=n)}add(e,n){e.getType()===Bi.PostProcessing?this.postProcessor.add(e,this.layer,n):(e.init(this.layer,n),this.passes.push(e))}insert(e,n,r){e.init(this.layer,n),this.passes.splice(r,0,e)}destroy(){this.passes.length=0}}class dy extends Ru{constructor(...e){var n;super(...e),n=this,d(this,"pickingFBO",void 0),d(this,"layer",void 0),d(this,"width",0),d(this,"height",0),d(this,"alreadyInRendering",!1),d(this,"pickFromPickingFBO",({x:r,y:i,lngLat:o,type:s})=>{if(!this.layer.isVisible()||!this.layer.needPick(s))return;const{getViewportSize:a,readPixelsAsync:u,useFramebuffer:l}=this.rendererService,{width:c,height:h}=a(),{enableHighlight:f,enableSelect:p}=this.layer.getLayerConfig(),_=r*ut,v=i*ut;if(_>c||_<0||v>h||v<0)return;let m;l(this.pickingFBO,L(function*(){var y;if(m=yield u({x:Math.round(_),y:Math.round(h-(i+1)*ut),width:1,height:1,data:new Uint8Array(1*1*4),framebuffer:n.pickingFBO}),m[0]!==0||m[1]!==0||m[2]!==0){const T=zn(m),S=n.layer.getSource().getFeatureById(T),x={x:r,y:i,type:s,lngLat:o,featureId:T,feature:S};S&&(n.layer.setCurrentPickId(T),n.triggerHoverOnLayer(x))}else{const T={x:r,y:i,lngLat:o,type:n.layer.getCurrentPickId()===null?"un"+s:"mouseout",featureId:null,feature:null};n.triggerHoverOnLayer(D(D({},T),{},{type:"unpick"})),n.triggerHoverOnLayer(T),n.layer.setCurrentPickId(null)}f&&n.highlightPickedFeature(m),p&&s==="click"&&((y=m)===null||y===void 0?void 0:y.toString())!==[0,0,0,0].toString()&&n.selectFeature(m)}))})}getType(){return Bi.Normal}getName(){return"pixelPicking"}init(e,n){super.init(e,n),this.layer=e;const{createTexture2D:r,createFramebuffer:i,getViewportSize:o}=this.rendererService,{width:s,height:a}=o(),u=r({width:s,height:a,wrapS:g.CLAMP_TO_EDGE,wrapT:g.CLAMP_TO_EDGE,label:"Picking Texture"});this.pickingFBO=i({color:u}),this.interactionService.on(Ye.Hover,this.pickFromPickingFBO),this.interactionService.on(Ye.Select,this.selectFeatureHandle.bind(this)),this.interactionService.on(Ye.Active,this.highlightFeatureHandle.bind(this))}render(e){if(this.alreadyInRendering)return;const{getViewportSize:n,useFramebuffer:r,clear:i}=this.rendererService,{width:o,height:s}=n();this.alreadyInRendering=!0,(this.width!==o||this.height!==s)&&(this.pickingFBO.resize({width:o,height:s}),this.width=o,this.height=s),r(this.pickingFBO,()=>{i({framebuffer:this.pickingFBO,color:[0,0,0,0],stencil:0,depth:1});const a=this.layer.multiPassRenderer.getRenderFlag();this.layer.multiPassRenderer.setRenderFlag(!1),e.hooks.beforePickingEncode.call(),e.render(),e.hooks.afterPickingEncode.call(),this.layer.multiPassRenderer.setRenderFlag(a),this.alreadyInRendering=!1})}triggerHoverOnLayer(e){this.layer.emit(e.type,e)}highlightPickedFeature(e){const[n,r,i]=e;this.layer.hooks.beforeHighlight.call([n,r,i]),this.layerService.renderLayers()}selectFeature(e){const[n,r,i]=e;this.layer.hooks.beforeSelect.call([n,r,i]),this.layerService.renderLayers()}selectFeatureHandle({featureId:e}){const n=xr(e);this.selectFeature(new Uint8Array(n))}highlightFeatureHandle({featureId:e}){const n=xr(e);this.highlightPickedFeature(new Uint8Array(n))}}class py{constructor(e){d(this,"passes",[]),d(this,"readFBO",void 0),d(this,"writeFBO",void 0),this.rendererService=e,this.init()}getReadFBO(){return this.readFBO}getWriteFBO(){return this.writeFBO}getCurrentFBOTex(){const{getViewportSize:e,createTexture2D:n}=this.rendererService,{width:r,height:i}=e();return n({x:0,y:0,width:r,height:i,copy:!0})}getReadFBOTex(){var e=this;const{useFramebuffer:n}=this.rendererService;return new Promise(r=>{n(this.readFBO,L(function*(){r(e.getCurrentFBOTex())}))})}renderBloomPass(e,n){var r=this;return L(function*(){const i=yield r.getReadFBOTex();let o=0;for(;o<4;)yield n.render(e,i),r.swap(),o++})()}render(e){var n=this;return L(function*(){for(let r=0;r<n.passes.length;r++){const i=n.passes[r];i.setRenderToScreen(n.isLastEnabledPass(r)),i.getName()==="bloom"?yield n.renderBloomPass(e,i):(yield i.render(e),r!==n.passes.length-1&&n.swap())}})()}resize(e,n){this.readFBO.resize({width:e,height:n}),this.writeFBO.resize({width:e,height:n})}add(e,n,r){e.init(n,r),this.passes.push(e)}insert(e,n,r,i){e.init(r,i),this.passes.splice(n,0,e)}getPostProcessingPassByName(e){return this.passes.find(n=>n.getName()===e)}init(){const{createFramebuffer:e,createTexture2D:n}=this.rendererService;this.readFBO=e({color:n({width:1,height:1,wrapS:g.CLAMP_TO_EDGE,wrapT:g.CLAMP_TO_EDGE,usage:Wn.RENDER_TARGET})}),this.writeFBO=e({color:n({width:1,height:1,wrapS:g.CLAMP_TO_EDGE,wrapT:g.CLAMP_TO_EDGE,usage:Wn.RENDER_TARGET})})}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].isEnabled())return!1;return!0}swap(){const e=this.readFBO;this.readFBO=this.writeFBO,this.writeFBO=e}}class _y extends Ru{getType(){return Bi.Normal}getName(){return"render"}init(e,n){super.init(e,n)}render(e){const{useFramebuffer:n,clear:r}=this.rendererService,i=e.multiPassRenderer.getPostProcessor().getReadFBO();n(i,()=>{r({color:[0,0,0,0],depth:1,stencil:0,framebuffer:i}),e.multiPassRenderer.setRenderFlag(!1),e.models.forEach(o=>{o.draw({uniforms:e.layerModel.getUninforms()})}),e.multiPassRenderer.setRenderFlag(!0)})}}const vy=`varying vec2 v_UV;

uniform float u_BloomFinal: 0.0;
uniform sampler2D u_Texture;
uniform sampler2D u_Texture2;

uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform float u_radius: 5.0;
uniform float u_intensity: 0.3;
uniform float u_baseRadio: 0.5;

// https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

float luminance(vec4 color) {
  return  0.2125 * color.r + 0.7154 * color.g + 0.0721 * color.b;
}

void main() {
  // vec4 baseColor = texture2D(u_Texture, v_UV);

  float r = sqrt(u_radius);

  vec4 c1 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(u_radius, 0.0));
  // c1 *= luminance(c1);
  vec4 c2 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(0.0, u_radius));
  // c2 *= luminance(c2);
  vec4 c3 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(r, r));
  // c3 *= luminance(c3);
  vec4 c4 = blur9(u_Texture, v_UV, u_ViewportSize, vec2(r, -r));
  // c4 *= luminance(c4);
  vec4 inbloomColor = (c1 + c2 + c3 + c4) * 0.25;

  // float lum = luminance(inbloomColor);
  // inbloomColor.rgb *= lum;

  if(u_BloomFinal > 0.0) {
    vec4 baseColor = texture2D(u_Texture2, v_UV);
    float baselum = luminance(baseColor);
    gl_FragColor = mix(inbloomColor, baseColor, u_baseRadio);
    if(baselum <= 0.2) {
      gl_FragColor = inbloomColor * u_intensity;
    }
  } else {
    gl_FragColor = inbloomColor;
  }
}`,gy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`,{isNil:js}=we;class Ey extends fn{setupShaders(){this.shaderModuleService.registerModule("blur-pass",{vs:gy,fs:vy});const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("blur-pass"),{width:i,height:o}=this.rendererService.getViewportSize();return{vs:e,fs:n,uniforms:D(D({},r),{},{u_ViewportSize:[i,o]})}}convertOptionsToUniforms(e){const n={};return js(e.bloomRadius)||(n.u_radius=e.bloomRadius),js(e.bloomIntensity)||(n.u_intensity=e.bloomIntensity),js(e.bloomBaseRadio)||(n.u_baseRadio=e.bloomBaseRadio),n}}const yy=`varying vec2 v_UV;

uniform sampler2D u_Texture;

uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_BlurDir: [1.0, 0.0];

// https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main() {
  gl_FragColor = blur9(u_Texture, v_UV, u_ViewportSize, u_BlurDir);
}`,Ty=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`,{isNil:Ay}=we;class Sy extends fn{setupShaders(){this.shaderModuleService.registerModule("blur-pass",{vs:Ty,fs:yy});const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("blur-pass"),{width:i,height:o}=this.rendererService.getViewportSize();return{vs:e,fs:n,uniforms:D(D({},r),{},{u_ViewportSize:[i,o]})}}convertOptionsToUniforms(e){const n={};return Ay(e.blurRadius)||(n.u_BlurDir=[e.blurRadius,0]),n}}const Ry=`varying vec2 v_UV;

uniform sampler2D u_Texture;

uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_BlurDir: [1.0, 0.0];

// https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main() {
  gl_FragColor = blur9(u_Texture, v_UV, u_ViewportSize, u_BlurDir);
}`,xy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`,{isNil:Cy}=we;class by extends fn{setupShaders(){this.shaderModuleService.registerModule("blur-pass",{vs:xy,fs:Ry});const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("blur-pass"),{width:i,height:o}=this.rendererService.getViewportSize();return{vs:e,fs:n,uniforms:D(D({},r),{},{u_ViewportSize:[i,o]})}}convertOptionsToUniforms(e){const n={};return Cy(e.blurRadius)||(n.u_BlurDir=[0,e.blurRadius]),n}}const Iy=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_Center : [0.5, 0.5];
uniform float u_Angle : 0;
uniform float u_Size : 8;

#pragma include "common"

float scale = PI / u_Size;

float pattern(float u_Angle, vec2 texSize, vec2 texCoord) {
  float s = sin(u_Angle), c = cos(u_Angle);
  vec2 tex = texCoord * texSize - u_Center * texSize;
  vec2 point = vec2(
    c * tex.x - s * tex.y,
    s * tex.x + c * tex.y
  ) * scale;
  return (sin(point.x) * sin(point.y)) * 4.0;
}

// https://github.com/evanw/glfx.js/blob/master/src/filters/fun/colorhalftone.js
vec4 colorHalftone_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  vec3 cmy = 1.0 - color.rgb;
  float k = min(cmy.x, min(cmy.y, cmy.z));
  cmy = (cmy - k) / (1.0 - k);
  cmy = clamp(
    cmy * 10.0 - 3.0 + vec3(
      pattern(u_Angle + 0.26179, texSize, texCoord),
      pattern(u_Angle + 1.30899, texSize, texCoord),
      pattern(u_Angle, texSize, texCoord)
    ),
    0.0,
    1.0
  );
  k = clamp(k * 10.0 - 5.0 + pattern(u_Angle + 0.78539, texSize, texCoord), 0.0, 1.0);
  return vec4(1.0 - cmy - k, color.a);
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = colorHalftone_filterColor(gl_FragColor, u_ViewportSize, v_UV);
}`,My=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`;class Oy extends fn{setupShaders(){this.shaderModuleService.registerModule("colorhalftone-pass",{vs:My,fs:Iy});const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("colorhalftone-pass"),{width:i,height:o}=this.rendererService.getViewportSize();return{vs:e,fs:n,uniforms:D(D({},r),{},{u_ViewportSize:[i,o]})}}}const Py=`varying vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
}
`,Fy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`;class By extends fn{setupShaders(){return this.shaderModuleService.registerModule("copy-pass",{vs:Fy,fs:Py}),this.shaderModuleService.getModule("copy-pass")}}const Ny=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform vec2 u_Center : [0.5, 0.5];
uniform float u_Scale : 10;

// https://github.com/evanw/glfx.js/blob/master/src/filters/fun/hexagonalpixelate.js
vec4 hexagonalPixelate_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 tex = (texCoord * texSize - u_Center * texSize) / u_Scale;
  tex.y /= 0.866025404;
  tex.x -= tex.y * 0.5;
  vec2 a;
  if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) {
    a = vec2(floor(tex.x), floor(tex.y));
  }
  else a = vec2(ceil(tex.x), ceil(tex.y));
  vec2 b = vec2(ceil(tex.x), floor(tex.y));
  vec2 c = vec2(floor(tex.x), ceil(tex.y));
  vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);
  vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);
  vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);
  vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);
  float alen = length(TEX - A);
  float blen = length(TEX - B);
  float clen = length(TEX - C);
  vec2 choice;
  if (alen < blen) {
    if (alen < clen) choice = a;
    else choice = c;
  } else {
    if (blen < clen) choice = b;
    else choice = c;
  }
  choice.x += choice.y * 0.5;
  choice.y *= 0.866025404;
  choice *= u_Scale / texSize;
  return texture2D(texture, choice + u_Center);
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = hexagonalPixelate_sampleColor(u_Texture, u_ViewportSize, v_UV);
}`,Dy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`;class wy extends fn{setupShaders(){this.shaderModuleService.registerModule("hexagonalpixelate-pass",{vs:Dy,fs:Ny});const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("hexagonalpixelate-pass"),{width:i,height:o}=this.rendererService.getViewportSize();return{vs:e,fs:n,uniforms:D(D({},r),{},{u_ViewportSize:[i,o]})}}}const Ly=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform vec2 u_ViewportSize: [1.0, 1.0];
uniform float u_Strength : 0.6;

vec4 ink_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 dx = vec2(1.0 / texSize.x, 0.0);
  vec2 dy = vec2(0.0, 1.0 / texSize.y);
  vec4 color = texture2D(texture, texCoord);
  float bigTotal = 0.0;
  float smallTotal = 0.0;
  vec3 bigAverage = vec3(0.0);
  vec3 smallAverage = vec3(0.0);
  for (float x = -2.0; x <= 2.0; x += 1.0) {
    for (float y = -2.0; y <= 2.0; y += 1.0) {
      vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;
      bigAverage += sample;
      bigTotal += 1.0;
      if (abs(x) + abs(y) < 2.0) {
        smallAverage += sample;
        smallTotal += 1.0;
      }
    }
  }
  vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);
  float power = u_Strength * u_Strength * u_Strength * u_Strength * u_Strength;
  return vec4(color.rgb - dot(edge, edge) * power * 100000.0, color.a);
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = ink_sampleColor(u_Texture, u_ViewportSize, v_UV);
}`,Uy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`;class ky extends fn{setupShaders(){this.shaderModuleService.registerModule("ink-pass",{vs:Uy,fs:Ly});const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("ink-pass"),{width:i,height:o}=this.rendererService.getViewportSize();return{vs:e,fs:n,uniforms:D(D({},r),{},{u_ViewportSize:[i,o]})}}}const zy=`varying vec2 v_UV;

uniform sampler2D u_Texture;
uniform float u_Amount : 0.5;

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

// https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js
vec4 noise_filterColor(vec4 color, vec2 texCoord) {
  float diff = (rand(texCoord) - 0.5) * u_Amount;
  color.r += diff;
  color.g += diff;
  color.b += diff;
  return color;
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = noise_filterColor(gl_FragColor, v_UV);
}`,Vy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`;class Hy extends fn{setupShaders(){return this.shaderModuleService.registerModule("noise-pass",{vs:Vy,fs:zy}),this.shaderModuleService.getModule("noise-pass")}}const Xy=`attribute vec2 a_Position;

varying vec2 v_UV;

void main() {
  v_UV = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0.0, 1.0);
}
`,Wy=`varying vec2 v_UV;

uniform sampler2D u_Texture;

uniform float u_Amount : 0.5;

// https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/sepia.js
vec4 sepia_filterColor(vec4 color) {
  float r = color.r;
  float g = color.g;
  float b = color.b;
  color.r =
    min(1.0, (r * (1.0 - (0.607 * u_Amount))) + (g * (0.769 * u_Amount)) + (b * (0.189 * u_Amount)));
  color.g = min(1.0, (r * 0.349 * u_Amount) + (g * (1.0 - (0.314 * u_Amount))) + (b * 0.168 * u_Amount));
  color.b = min(1.0, (r * 0.272 * u_Amount) + (g * 0.534 * u_Amount) + (b * (1.0 - (0.869 * u_Amount))));
  return color;
}

void main() {
  gl_FragColor = vec4(texture2D(u_Texture, v_UV));
  gl_FragColor = sepia_filterColor(gl_FragColor);
}`;class jy extends fn{setupShaders(){return this.shaderModuleService.registerModule("sepia-pass",{vs:Xy,fs:Wy}),this.shaderModuleService.getModule("sepia-pass")}}const sp=new O1;let $y=0;function Zy(){const t=new ly,e=new N1,n=new T1,r=new B1(n),i=new i1,o=new s1,s=new R1,a=new x1,u=new S1,l={id:`${$y++}`,globalConfigService:sp,shaderModuleService:t,debugService:e,cameraService:n,coordinateSystemService:r,fontService:i,iconService:o,markerService:s,popupService:a,controlService:u,customRenderService:{}},c=new X1(l);l.layerService=c;const h=new q1(l);l.sceneService=h;const f=new L1(l);l.interactionService=f;const p=new V1(l);l.pickingService=p;const _={clear:new hy,pixelPicking:new dy,render:new _y};l.normalPassFactory=m=>_[m];const v={copy:new By,bloom:new Ey,blurH:new Sy,blurV:new by,noise:new Hy,sepia:new jy,colorHalftone:new Oy,hexagonalPixelate:new wy,ink:new ky};return l.postProcessingPass=v,l.postProcessingPassFactory=m=>v[m],l}function _i(t){const e=D({},t);return e.postProcessor=new py(e.rendererService),e.multiPassRenderer=new fy(e.postProcessor),e.styleAttributeService=new K1(e.rendererService),e}const qi=["loaded","fontloaded","maploaded","resize","destroy","dragstart","dragging","dragend","dragcancel"];let Ge=function(t){return t.IMAGE="image",t.CUSTOMIMAGE="customImage",t.ARRAYBUFFER="arraybuffer",t.RGB="rgb",t.TERRAINRGB="terrainRGB",t.CUSTOMRGB="customRGB",t.CUSTOMARRAYBUFFER="customArrayBuffer",t.CUSTOMTERRAINRGB="customTerrainRGB",t}({});var ap=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),Yy=(t,e,n,r)=>ap(void 0,null,function*(){return new Promise((i,o)=>{e({x:t.x,y:t.y,z:t.z},(s,a)=>{if(s||a.length===0){o(s);return}a&&Oa([{data:a,bands:[0]}],n,r,(u,l)=>{u?o(u):l&&i(l)})})})}),Gy=(t,e)=>ap(void 0,null,function*(){return new Promise((n,r)=>{e({x:t.x,y:t.y,z:t.z},(i,o)=>{if(i||!o){r(i);return}o instanceof ArrayBuffer?R0(o,(s,a)=>{s&&r(s),n(a)}):o instanceof HTMLImageElement?n(o):r(i)})})});function Ky(t,e){return Array.isArray(t)?typeof t[0]=="string"?t.map(n=>mr(n,e)):t.map(n=>({url:mr(n.url,e),bands:n.bands||[0]})):mr(t,e)}function qy(t){return typeof t=="string"?[{url:t,bands:[0]}]:typeof t[0]=="string"?t.map(e=>({url:e,bands:[0]})):t}function Lc(t,e){t.xhrCancel=()=>{e.map(n=>{n.abort()})}}var Qy=Object.defineProperty,Jy=Object.defineProperties,eT=Object.getOwnPropertyDescriptors,Uc=Object.getOwnPropertySymbols,tT=Object.prototype.hasOwnProperty,nT=Object.prototype.propertyIsEnumerable,kc=(t,e,n)=>e in t?Qy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zc=(t,e)=>{for(var n in e||(e={}))tT.call(e,n)&&kc(t,n,e[n]);if(Uc)for(var n of Uc(e))nT.call(e,n)&&kc(t,n,e[n]);return t},Vc=(t,e)=>Jy(t,eT(e)),Na=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),rT=(t,e,n,r,i)=>Na(void 0,null,function*(){const o=qy(e.url);if(o.length>1){const{rasterFiles:s,xhrList:a,errList:u}=yield iT(o,e);if(Lc(t,a),u.length>0){n(u,null);return}Oa(s,r,i,n)}else{const s=hu(e,(a,u)=>{if(a)n(a);else if(u){const l=[{data:u,bands:o[0].bands}];Oa(l,r,i,n)}});Lc(t,[s])}});function iT(t,e){return Na(this,null,function*(){const n=t.map(a=>Na(this,null,function*(){const u=Vc(zc({},e),{url:a.url}),{err:l,data:c,xhr:h}=yield T0(Vc(zc({},u),{type:"arrayBuffer"}));return{err:l,data:c,xhr:h,bands:a.bands}})),r=yield Promise.all(n),i=[],o=[],s=[];for(const a of r)a.err&&(Array.isArray(a.err)?s.push(...a.err):s.push(a.err)),o.push(a.xhr),i.push({data:a.data,bands:a.bands});return{rasterFiles:i,xhrList:o,errList:s}})}var oT=Object.defineProperty,sT=Object.defineProperties,aT=Object.getOwnPropertyDescriptors,Hc=Object.getOwnPropertySymbols,uT=Object.prototype.hasOwnProperty,lT=Object.prototype.propertyIsEnumerable,Xc=(t,e,n)=>e in t?oT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Io=(t,e)=>{for(var n in e||(e={}))uT.call(e,n)&&Xc(t,n,e[n]);if(Hc)for(var n of Hc(e))lT.call(e,n)&&Xc(t,n,e[n]);return t},up=(t,e)=>sT(t,aT(e)),lp=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),cT=(t,e,n,r)=>lp(void 0,null,function*(){const{format:i=cp,operation:o,requestParameters:s={}}=r,a=up(Io({},s),{url:Ky(t,e)});return new Promise((u,l)=>{rT(n,a,(c,h)=>{c?l(c):h&&u(h)},i,o)})}),Wc=(t,e,n,r)=>lp(void 0,null,function*(){let i;const o=Array.isArray(t)?t[0]:t;return r.wmtsOptions?i=((r==null?void 0:r.getURLFromTemplate)||Qv)(o,Io(Io({},e),r.wmtsOptions)):i=((r==null?void 0:r.getURLFromTemplate)||mr)(o,e),new Promise((s,a)=>{var u;const l=ga(up(Io({},r==null?void 0:r.requestParameters),{url:i,type:((u=r==null?void 0:r.requestParameters)==null?void 0:u.type)||"arrayBuffer"}),(c,h)=>{c?a(c):h&&s(h)},r.transformResponse);n.xhrCancel=()=>l.cancel()})}),cp=()=>({rasterData:new Uint8Array([0]),width:1,height:1}),hT=Object.defineProperty,fT=Object.defineProperties,dT=Object.getOwnPropertyDescriptors,jc=Object.getOwnPropertySymbols,pT=Object.prototype.hasOwnProperty,_T=Object.prototype.propertyIsEnumerable,$c=(t,e,n)=>e in t?hT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Zc=(t,e)=>{for(var n in e||(e={}))pT.call(e,n)&&$c(t,n,e[n]);if(jc)for(var n of jc(e))_T.call(e,n)&&$c(t,n,e[n]);return t},vT=(t,e)=>fT(t,dT(e)),mT={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0};Ge.ARRAYBUFFER,Ge.RGB;function gT(t){return!!(Array.isArray(t)&&t.length===0||!Array.isArray(t)&&typeof t!="string")}function ET(t,e={}){if(gT(t))throw new Error("tile server url is error");const{extent:n=[1/0,1/0,-1/0,-1/0],coordinates:r}=e;let i=(e==null?void 0:e.dataType)||Ge.IMAGE;i===Ge.RGB&&(i=Ge.ARRAYBUFFER);const o=(u,l)=>{switch(i){case Ge.IMAGE:return Wc(t,u,l,e);case Ge.CUSTOMIMAGE:case Ge.CUSTOMTERRAINRGB:return Gy(l,e==null?void 0:e.getCustomData);case Ge.ARRAYBUFFER:return cT(t,u,l,e);case Ge.CUSTOMARRAYBUFFER:case Ge.CUSTOMRGB:return Yy(l,e==null?void 0:e.getCustomData,(e==null?void 0:e.format)||cp,e==null?void 0:e.operation);default:return Wc(t,u,l,e)}},s=vT(Zc(Zc({},mT),e),{getTileData:o}),a=Br(r,n);return{data:t,dataArray:[{_id:1,coordinates:a}],tilesetOptions:s,isTile:!0}}var yT=Object.defineProperty,TT=Object.defineProperties,AT=Object.getOwnPropertyDescriptors,Yo=Object.getOwnPropertySymbols,hp=Object.prototype.hasOwnProperty,fp=Object.prototype.propertyIsEnumerable,Yc=(t,e,n)=>e in t?yT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ST=(t,e)=>{for(var n in e||(e={}))hp.call(e,n)&&Yc(t,n,e[n]);if(Yo)for(var n of Yo(e))fp.call(e,n)&&Yc(t,n,e[n]);return t},RT=(t,e)=>TT(t,AT(e)),xT=(t,e)=>{var n={};for(var r in t)hp.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Yo)for(var r of Yo(t))e.indexOf(r)<0&&fp.call(t,r)&&(n[r]=t[r]);return n};function CT(t,e){const n=e,{extent:r=[121.168,30.2828,121.384,30.4219],coordinates:i,width:o,height:s}=n,a=xT(n,["extent","coordinates","width","height"]);t.length<2&&console.warn("RGB解析需要2个波段的数据");const[u,l]=a.bands||[0,1],c=[t[u],t[l]],h=[];for(let _=0;_<c[0].length;_++)h.push((c[1][_]-c[0][_])/(c[1][_]+c[0][_]));const f=Br(i,r);return{_id:1,dataArray:[RT(ST({_id:1,data:h,width:o,height:s},a),{coordinates:f})]}}var bT=Object.defineProperty,IT=Object.defineProperties,MT=Object.getOwnPropertyDescriptors,Go=Object.getOwnPropertySymbols,dp=Object.prototype.hasOwnProperty,pp=Object.prototype.propertyIsEnumerable,Gc=(t,e,n)=>e in t?bT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,OT=(t,e)=>{for(var n in e||(e={}))dp.call(e,n)&&Gc(t,n,e[n]);if(Go)for(var n of Go(e))pp.call(e,n)&&Gc(t,n,e[n]);return t},PT=(t,e)=>IT(t,MT(e)),FT=(t,e)=>{var n={};for(var r in t)dp.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Go)for(var r of Go(t))e.indexOf(r)<0&&pp.call(t,r)&&(n[r]=t[r]);return n};function BT(t,e){const n=e,{extent:r,coordinates:i,width:o,height:s}=n,a=FT(n,["extent","coordinates","width","height"]);t.length<3&&console.warn("RGB解析需要三个波段的数据");const[u,l,c]=a.bands||[0,1,2],h=[t[u],t[l],t[c]],f=[],[p,_]=(a==null?void 0:a.countCut)||[2,98],v=(a==null?void 0:a.RMinMax)||Er(h[0],p,_),m=(a==null?void 0:a.GMinMax)||Er(h[1],p,_),y=(a==null?void 0:a.BMinMax)||Er(h[2],p,_);for(let x=0;x<h[0].length;x++)f.push(Math.max(0,h[0][x]-v[0])),f.push(Math.max(0,h[1][x]-m[0])),f.push(Math.max(0,h[2][x]-y[0]));const T=Br(i,r);return{_id:1,dataArray:[PT(OT({_id:1,data:f,width:o,height:s,rMinMax:v,gMinMax:m,bMinMax:y},a),{coordinates:T})]}}var NT=Object.defineProperty,DT=Object.defineProperties,wT=Object.getOwnPropertyDescriptors,Ko=Object.getOwnPropertySymbols,_p=Object.prototype.hasOwnProperty,vp=Object.prototype.propertyIsEnumerable,Kc=(t,e,n)=>e in t?NT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,LT=(t,e)=>{for(var n in e||(e={}))_p.call(e,n)&&Kc(t,n,e[n]);if(Ko)for(var n of Ko(e))vp.call(e,n)&&Kc(t,n,e[n]);return t},UT=(t,e)=>DT(t,wT(e)),kT=(t,e)=>{var n={};for(var r in t)_p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Ko)for(var r of Ko(t))e.indexOf(r)<0&&vp.call(t,r)&&(n[r]=t[r]);return n};function zT(t,e){const n=e,{extent:r,coordinates:i,min:o,max:s,width:a,height:u,format:l,operation:c}=n,h=kT(n,["extent","coordinates","min","max","width","height","format","operation"]);let f;if(l===void 0||kd(t))f=Array.from(t);else{const v=Array.isArray(t)?t:[t];f=Tu(v,l,c)}const p=Br(i,r);return{_id:1,dataArray:[UT(LT({_id:1,data:f,width:a,height:u},h),{min:o,max:s,coordinates:p})]}}var VT=Object.defineProperty,HT=Object.defineProperties,XT=Object.getOwnPropertyDescriptors,qc=Object.getOwnPropertySymbols,WT=Object.prototype.hasOwnProperty,jT=Object.prototype.propertyIsEnumerable,Qc=(t,e,n)=>e in t?VT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Jc=(t,e)=>{for(var n in e||(e={}))WT.call(e,n)&&Qc(t,n,e[n]);if(qc)for(var n of qc(e))jT.call(e,n)&&Qc(t,n,e[n]);return t},$T=(t,e)=>HT(t,XT(e)),ZT=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),YT={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0},GT=t=>ZT(void 0,null,function*(){return new Promise(e=>{const[n,r,i,o]=t.bounds,s={layers:{testTile:{features:[{type:"Feature",properties:{key:t.x+"/"+t.y+"/"+t.z,x:(n+i)/2,y:(r+o)/2},geometry:{type:"LineString",coordinates:[[i,o],[i,r],[n,r],[n,r]]}}]}}};e(s)})});function KT(t,e){const n=i=>GT(i),r=$T(Jc(Jc({},YT),e),{getTileData:n});return{data:t,dataArray:[],tilesetOptions:r,isTile:!0}}function qT(t,e){const{callback:n}=e;return n&&(t.dataArray=t.dataArray.filter(n)),t}var QT=Object.defineProperty,JT=Object.defineProperties,eA=Object.getOwnPropertyDescriptors,eh=Object.getOwnPropertySymbols,tA=Object.prototype.hasOwnProperty,nA=Object.prototype.propertyIsEnumerable,th=(t,e,n)=>e in t?QT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nh=(t,e)=>{for(var n in e||(e={}))tA.call(e,n)&&th(t,n,e[n]);if(eh)for(var n of eh(e))nA.call(e,n)&&th(t,n,e[n]);return t},rh=(t,e)=>JT(t,eA(e)),rA=6378e3,ih=Math.sqrt(2);function iA(t,e){const n=t.dataArray,{size:r=10,method:i="sum"}=e,o=r/(2*Math.PI*rA)*(256<<20)/2,s=n.map(l=>{const[c,h]=Rt(l.coordinates);return rh(nh({},l),{screenCoords:[c,h]})}),a={};for(const l of s){const[c,h]=l.screenCoords;if(!Number.isFinite(c)||!Number.isFinite(h))continue;const f=Math.floor(c/o),p=Math.floor(h/o),_=`${f}-${p}`;a[_]||(a[_]={count:0,points:[]}),a[_].count+=1,a[_].points.push(l)}const u=Object.entries(a).map(([l,c],h)=>{const[f,p]=l.split("-").map(Number),_={};if(e.field&&i){const y=Cd(c.points,e.field);_[i]=xd[i](y)}const v=(f+.5)*o,m=(p+.5)*o;return rh(nh({},_),{[e.method||"sum"]:_[i],count:c.count,rawData:c.points,coordinates:[v,m],_id:h})});return{yOffset:o/ih,xOffset:o/ih,radius:o,type:"grid",dataArray:u}}var oh=Math.PI/3;function oA(){let t=1,e=t*2*Math.sin(oh),n=t*1.5,r=s=>s[0],i=s=>s[1];const o=s=>{const a=new Map;for(let u=0;u<s.length;u++){const l=s[u];let c=r(l,u,s),h=i(l,u,s);if(isNaN(c)||isNaN(h))continue;const f=Math.round(h=h/n),p=Math.round(c=c/e-(f&1)/2),_=h-f;if(Math.abs(_)*3>1){const y=c-p,T=p+(c<p?-1:1)/2,S=f+(h<f?-1:1),x=c-T,C=h-S;if(y*y+_*_>x*x+C*C){const M=T+(f&1?1:-1)/2,P=S,F=`${M}-${P}`;let V=a.get(F);V?V.push(l):(V=Object.assign([l],{x:(M+(P&1)/2)*e,y:P*n}),a.set(F,V));continue}}const v=`${p}-${f}`;let m=a.get(v);m?m.push(l):(m=Object.assign([l],{x:(p+(f&1)/2)*e,y:f*n}),a.set(v,m))}return Array.from(a.values())};return o.radius=s=>(t=s,e=t*2*Math.sin(oh),n=t*1.5,o),o.x=s=>(r=s,o),o.y=s=>(i=s,o),o}var sA=Object.defineProperty,aA=Object.defineProperties,uA=Object.getOwnPropertyDescriptors,sh=Object.getOwnPropertySymbols,lA=Object.prototype.hasOwnProperty,cA=Object.prototype.propertyIsEnumerable,ah=(t,e,n)=>e in t?sA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,hA=(t,e)=>{for(var n in e||(e={}))lA.call(e,n)&&ah(t,n,e[n]);if(sh)for(var n of sh(e))cA.call(e,n)&&ah(t,n,e[n]);return t},fA=(t,e)=>aA(t,uA(e)),dA=6378e3;function pA(t,e){const n=t.dataArray,{size:r=10,method:i="sum"}=e,o=r/(2*Math.PI*dA)*(256<<20)/2,s=n.map(c=>{const[h,f]=Rt(c.coordinates);return fA(hA({},c),{coordinates:[h,f]})});return{dataArray:oA().radius(o).x(c=>c.coordinates[0]).y(c=>c.coordinates[1])(s).map((c,h)=>{if(e.field&&i){const f=Cd(c,e.field);c[i]=xd[i](f)}return{[e.method]:c[i],count:c.length,rawData:c,coordinates:[c.x,c.y],_id:h}}),radius:o,xOffset:o,yOffset:o,type:"hexagon"}}var _A=Object.defineProperty,uh=Object.getOwnPropertySymbols,vA=Object.prototype.hasOwnProperty,mA=Object.prototype.propertyIsEnumerable,lh=(t,e,n)=>e in t?_A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ch=(t,e)=>{for(var n in e||(e={}))vA.call(e,n)&&lh(t,n,e[n]);if(uh)for(var n of uh(e))mA.call(e,n)&&lh(t,n,e[n]);return t};function gA(t,e){const{sourceField:n,targetField:r,data:i}=e,o={};return i.forEach(s=>{o[s[n]]=s}),t.dataArray=t.dataArray.map(s=>{const a=s[r];return ch(ch({},s),o[a])}),t}function EA(t,e){const{callback:n}=e;return n&&(t.dataArray=t.dataArray.map(n)),t}var yA=Object.defineProperty,TA=Object.defineProperties,AA=Object.getOwnPropertyDescriptors,hh=Object.getOwnPropertySymbols,SA=Object.prototype.hasOwnProperty,RA=Object.prototype.propertyIsEnumerable,fh=(t,e,n)=>e in t?yA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xA=(t,e)=>{for(var n in e||(e={}))SA.call(e,n)&&fh(t,n,e[n]);if(hh)for(var n of hh(e))RA.call(e,n)&&fh(t,n,e[n]);return t},CA=(t,e)=>TA(t,AA(e));function bA(t){let e=1/0,n=-1/0,r=1/0,i=-1/0;t.forEach(a=>{const u=a.coordinates;if(!u)return;const l=c=>{if(typeof c[0]=="number"&&typeof c[1]=="number"){const[h,f]=c;e=Math.min(e,h),n=Math.max(n,h),r=Math.min(r,f),i=Math.max(i,f)}else Array.isArray(c[0])&&c.forEach(l)};l(u)});const o=(e+n)/2,s=(r+i)/2;return[o,s]}function IA(t,e){const[n,r]=e;return t.map(i=>{if(!i.coordinates)return i;const o=s=>{if(typeof s[0]=="number"&&typeof s[1]=="number"){const a=Number((s[0]-n).toPrecision(15)),u=Number((s[1]-r).toPrecision(15));return[a,u,...s.slice(2)||[]]}else if(Array.isArray(s[0]))return s.map(o);return s};return CA(xA({},i),{coordinates:o(i.coordinates)})})}function MA(t,e={}){const{enableRelativeCoordinates:n=!1,relativeOrigin:r}=e;if(!n)return{dataArray:t,relativeOrigin:[0,0],originalExtent:[0,0,0,0]};let i=1/0,o=-1/0,s=1/0,a=-1/0;t.forEach(h=>{const f=h.coordinates;if(!f)return;const p=_=>{if(typeof _[0]=="number"&&typeof _[1]=="number"){const[v,m]=_;i=Math.min(i,v),o=Math.max(o,v),s=Math.min(s,m),a=Math.max(a,m)}else Array.isArray(_[0])&&_.forEach(p)};p(f)});const u=[i,s,o,a],l=r||bA(t);return{dataArray:IA(t,l),relativeOrigin:l,originalExtent:u}}mt("rasterTile",ET);mt("mvt",yE);mt("geojsonvt",hg);mt("testTile",KT);mt("geojson",Um);mt("jsonTile",xg);mt("image",jd);mt("csv",Im);mt("json",Vd);mt("raster",NE);mt("rasterRgb",zT);mt("rgb",BT);mt("ndi",CT);Fr("cluster",Ld);Fr("filter",qT);Fr("join",gA);Fr("map",EA);Fr("grid",iA);Fr("hexagon",pA);var OA=ym;const PA='<svg><symbol id="l7-icon-area1" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.064889 219.136l38.798223 466.261333a113.777778 113.777778 0 1 1-133.518223 145.237334H279.210667a113.777778 113.777778 0 1 1-60.302223-137.272889L697.856 227.555556A113.777778 113.777778 0 0 1 796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m577.592889-534.072889L269.198222 796.444444c4.152889 7.168 7.509333 14.791111 10.012445 22.812445h465.578666a114.119111 114.119111 0 0 1 65.479111-71.224889l-38.798222-466.261333a112.924444 112.924444 0 0 1-23.210666-7.964445zM796.444444 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-area" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.008 219.136l38.855112 466.261333a113.777778 113.777778 0 0 1-16.497778 224.540445L853.333333 967.111111a113.777778 113.777778 0 0 1-108.544-79.644444H279.210667a113.834667 113.834667 0 0 1-100.067556 79.36L170.666667 967.111111a113.777778 113.777778 0 0 1-17.066667-226.304l30.492444-351.175111a113.777778 113.777778 0 0 1 34.986667-218.680889L227.555556 170.666667a113.777778 113.777778 0 0 1 99.896888 59.221333l355.84-71.395556a113.777778 113.777778 0 0 1 104.675556-101.262222L796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m526.051555-582.314666L340.650667 296.903111a113.891556 113.891556 0 0 1-88.462223 98.645333l-30.947555 355.84c27.477333 13.653333 48.64 38.115556 58.026667 67.754667h465.521777a114.119111 114.119111 0 0 1 65.536-71.168l-38.855111-466.261333a113.948444 113.948444 0 0 1-74.752-56.206222zM227.555556 238.933333a45.511111 45.511111 0 1 0 0 91.022223 45.511111 45.511111 0 0 0 0-91.022223z m568.888888-113.777777a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-delete" viewBox="0 0 1024 1024"><path d="M705.422222 85.333333a34.133333 34.133333 0 0 1 34.133334 34.133334V227.555556h136.533333a34.133333 34.133333 0 0 1 0 68.266666h-25.543111l-24.348445 610.076445a34.133333 34.133333 0 0 1-34.133333 32.768H231.936a34.133333 34.133333 0 0 1-34.076444-32.768L173.340444 295.822222H147.911111a34.133333 34.133333 0 1 1 0-68.266666H284.444444V119.466667a34.133333 34.133333 0 0 1 34.133334-34.133334h386.844444zM241.720889 295.822222l22.983111 574.577778h494.535111l23.04-574.577778H241.720889zM671.288889 153.6H352.711111V227.555556h318.577778V153.6z"  ></path></symbol><symbol id="l7-icon-color" viewBox="0 0 1024 1024"><path d="M512 56.888889c9.841778 0 19.626667 0.341333 29.354667 0.910222 69.176889 4.437333 119.068444 62.577778 124.302222 131.072l0.455111 9.386667c0.739556 44.600889 15.303111 84.935111 44.999111 114.631111 27.022222 27.022222 62.805333 41.528889 102.570667 44.430222l12.060444 0.568889c72.476444 1.194667 135.793778 52.451556 140.458667 124.757333 1.137778 18.261333 1.251556 36.807111 0.170667 55.637334-13.198222 233.585778-211.399111 424.220444-445.326223 428.714666L512 967.111111a455.111111 455.111111 0 0 1-455.054222-464.156444c4.551111-233.927111 195.185778-432.128 428.771555-445.326223C494.535111 57.116444 503.296 56.888889 512 56.888889z m0 68.266667a385.706667 385.706667 0 0 0-22.414222 0.625777C291.726222 136.988444 129.080889 305.948444 125.155556 504.263111c-4.152889 212.366222 163.100444 387.185778 372.508444 394.353778l13.425778 0.227555 8.533333-0.113777c198.371556-3.811556 367.331556-166.456889 378.538667-364.373334a396.174222 396.174222 0 0 0-0.170667-47.331555c-1.991111-31.232-29.127111-56.604444-67.128889-60.472889l-8.248889-0.455111-14.051555-0.682667c-56.547556-4.209778-107.406222-25.884444-145.806222-64.284444-38.855111-38.798222-60.416-90.225778-64.284445-145.749334l-0.910222-21.333333c-2.901333-38.001778-28.785778-66.048-60.302222-68.096A433.891556 433.891556 0 0 0 512 125.155556zM438.044444 682.666667a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m-170.666666-227.555556a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m142.222222-227.555555a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z"  ></path></symbol><symbol id="l7-icon-base-map" viewBox="0 0 1024 1024"><path d="M923.761778 115.029333A34.133333 34.133333 0 0 1 967.111111 147.911111v624.128a34.133333 34.133333 0 0 1-22.186667 32.028445l-278.755555 103.992888a34.133333 34.133333 0 0 1-23.665778 0.056889L381.724444 812.714667a34.133333 34.133333 0 0 0-23.665777 0.113777L102.968889 908.060444a34.133333 34.133333 0 0 1-45.738667-26.965333L56.888889 876.088889V251.960889a34.133333 34.133333 0 0 1 22.186667-32.028445l278.755555-103.992888a34.133333 34.133333 0 0 1 20.992-0.967112l266.183111 72.988445a34.133333 34.133333 0 0 0 18.204445 0zM403.911111 192.625778v555.576889l216.177778 79.075555V251.960889l-216.177778-59.335111z m-68.266667 4.380444L125.155556 275.569778v551.310222l210.432-78.506667V197.006222zM898.844444 192.853333l-210.545777 58.936889v575.089778l210.545777-78.563556V192.853333z"  ></path></symbol><symbol id="l7-icon-dot" viewBox="0 0 1024 1024"><path d="M341.333333 739.555556a113.777778 113.777778 0 0 1 8.533334 227.271111L341.333333 967.111111a113.777778 113.777778 0 0 1-8.533333-227.271111L341.333333 739.555556z m0 68.266666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM910.222222 341.333333a113.777778 113.777778 0 0 1 8.533334 227.271111L910.222222 568.888889a113.777778 113.777778 0 0 1-8.533333-227.271111L910.222222 341.333333z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM227.555556 56.888889a113.777778 113.777778 0 0 1 8.533333 227.271111L227.555556 284.444444a113.777778 113.777778 0 0 1-8.533334-227.271111L227.555556 56.888889z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-display" viewBox="0 0 1024 1024"><path d="M512 170.666667c284.444444 0 455.111111 227.555556 455.111111 341.333333s-170.666667 341.333333-455.111111 341.333333-455.111111-227.555556-455.111111-341.333333 170.666667-341.333333 455.111111-341.333333z m0 68.266666C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 110.762667 178.574222 273.066667 386.844444 273.066667s386.844444-162.304 386.844444-273.066667c0-110.762667-178.574222-273.066667-386.844444-273.066667zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-enlarge" viewBox="0 0 1024 1024"><path d="M546.133333 147.911111l-0.056889 329.955556H876.088889a34.133333 34.133333 0 0 1 0 68.266666H546.076444v329.955556a34.133333 34.133333 0 0 1-68.266666 0V546.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h329.898667V147.911111a34.133333 34.133333 0 0 1 68.266666 0z"  ></path></symbol><symbol id="l7-icon-export-picture" viewBox="0 0 1024 1024"><path d="M883.873684 161.684211a32.336842 32.336842 0 0 1 32.336842 32.336842v582.063158a32.336842 32.336842 0 0 1-32.336842 32.336842H86.231579a32.336842 32.336842 0 0 1-32.336842-32.336842V194.021053a32.336842 32.336842 0 0 1 32.336842-32.336842h797.642105z m-32.336842 64.673684H118.568421v517.389473h170.792421a32.175158 32.175158 0 0 1 0.431158-0.646736l3.772632-4.473264 330.320842-330.374736a32.336842 32.336842 0 0 1 38.588631-5.389474l4.473263 3.018105 184.589474 147.725474V226.357895z m-202.428631 248.131368L379.850105 743.747368H851.536842v-107.304421l-202.428631-161.953684zM323.368421 323.368421a107.789474 107.789474 0 1 1 0 215.578947 107.789474 107.789474 0 0 1 0-215.578947z m0 64.673684a43.115789 43.115789 0 1 0 0 86.231579 43.115789 43.115789 0 0 0 0-86.231579z"  ></path></symbol><symbol id="l7-icon-exit-fullscreen" viewBox="0 0 1024 1024"><path d="M841.955556 591.644444a34.133333 34.133333 0 0 1 5.518222 67.811556l-5.518222 0.455111h-133.745778l192 192.056889a34.133333 34.133333 0 0 1-38.343111 55.182222l-5.176889-2.958222-4.721778-3.982222L659.911111 708.266667V841.955556a34.133333 34.133333 0 0 1-28.615111 33.678222L625.777778 876.088889a34.133333 34.133333 0 0 1-33.678222-28.615111L591.644444 841.955556V625.777778a34.133333 34.133333 0 0 1 28.615112-33.678222L625.777778 591.644444h216.177778z m-443.733334 0a34.133333 34.133333 0 0 1 33.678222 28.615112L432.355556 625.777778v216.177778a34.133333 34.133333 0 0 1-67.811556 5.518222L364.088889 841.955556v-133.745778l-192.056889 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L315.847111 659.911111H182.044444a34.133333 34.133333 0 0 1-33.678222-28.615111L147.911111 625.777778a34.133333 34.133333 0 0 1 28.615111-33.678222L182.044444 591.644444H398.222222zM167.310222 119.808l4.721778 3.982222L364.088889 315.847111V182.044444a34.133333 34.133333 0 0 1 28.615111-33.678222L398.222222 147.911111a34.133333 34.133333 0 0 1 33.678222 28.615111L432.355556 182.044444V398.222222a34.133333 34.133333 0 0 1-28.615112 33.678222L398.222222 432.355556H182.044444a34.133333 34.133333 0 0 1-5.518222-67.811556L182.044444 364.088889h133.802667L123.790222 172.032a34.133333 34.133333 0 0 1 43.52-52.224z m732.899556 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L708.266667 364.088889H841.955556a34.133333 34.133333 0 0 1 33.678222 28.615111L876.088889 398.222222a34.133333 34.133333 0 0 1-28.615111 33.678222L841.955556 432.355556H625.777778a34.133333 34.133333 0 0 1-33.678222-28.615112L591.644444 398.222222V182.044444a34.133333 34.133333 0 0 1 67.811556-5.518222l0.455111 5.518222v133.802667l192.056889-192.056889a34.133333 34.133333 0 0 1 48.241778 0z"  ></path></symbol><symbol id="l7-icon-line" viewBox="0 0 1024 1024"><path d="M853.333333 56.888889a113.777778 113.777778 0 0 1 8.533334 227.271111L853.333333 284.444444c-19.000889 0-36.864-4.664889-52.622222-12.856888l-529.123555 529.066666a113.777778 113.777778 0 0 1-92.387556 166.115556L170.666667 967.111111a113.777778 113.777778 0 0 1-8.533334-227.271111L170.666667 739.555556c19.000889 0 36.864 4.664889 52.622222 12.856888l529.123555-529.066666a113.777778 113.777778 0 0 1 92.387556-166.115556L853.333333 56.888889zM170.666667 807.822222a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m682.666666-682.666666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-layer" viewBox="0 0 1024 1024"><path d="M767.089778 625.777778l180.167111 82.773333a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730667-420.977778 193.422222a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422222a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730667L256.853333 625.777778l81.749334 37.546666L172.771556 739.555556 512 895.374222 851.171556 739.555556l-165.831112-76.231112 81.749334-37.546666z m0-227.555556l180.167111 82.773334a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730666-420.977778 193.422223a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422223a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730666L256.853333 398.222222l81.749334 37.546667-165.831111 76.174222L512 667.818667l339.171556-155.875556-165.831112-76.174222L767.089778 398.222222zM497.720889 60.017778a34.133333 34.133333 0 0 1 28.558222 0l420.977778 193.422222a34.133333 34.133333 0 0 1 0 62.008889l-420.977778 193.422222a34.133333 34.133333 0 0 1-28.558222 0l-420.977778-193.422222a34.133333 34.133333 0 0 1 0-62.008889zM512 128.568889L172.771556 284.387556 512 440.263111l339.171556-155.875555L512 128.568889z"  ></path></symbol><symbol id="l7-icon-narrow" viewBox="0 0 1024 1024"><path d="M910.222222 512a34.133333 34.133333 0 0 1-34.133333 34.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h728.177778a34.133333 34.133333 0 0 1 34.133333 34.133333z"  ></path></symbol><symbol id="l7-icon-fullscreen" viewBox="0 0 1024 1024"><path d="M645.176889 597.674667l4.721778 3.982222L841.955556 793.6l0.056888-133.688889a34.133333 34.133333 0 0 1 28.615112-33.678222L876.088889 625.777778a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 659.911111v216.177778a34.133333 34.133333 0 0 1-28.615111 33.678222L876.088889 910.222222h-216.177778a34.133333 34.133333 0 0 1-5.518222-67.811555l5.518222-0.455111h133.745778l-192-192.056889a34.133333 34.133333 0 0 1 43.52-52.224z m-222.833778 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L230.286222 841.955556H364.088889a34.133333 34.133333 0 0 1 33.678222 28.615111L398.222222 876.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L364.088889 910.222222H147.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 876.088889v-216.177778a34.133333 34.133333 0 0 1 67.811555-5.518222l0.455111 5.518222-0.056888 133.745778 192.113777-192a34.133333 34.133333 0 0 1 48.241778 0zM364.088889 113.777778a34.133333 34.133333 0 0 1 5.518222 67.811555L364.088889 182.044444H230.343111l192 192.056889a34.133333 34.133333 0 0 1-43.52 52.224l-4.721778-3.982222-192.113777-192.056889L182.044444 364.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L147.911111 398.222222a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 364.088889V147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L147.911111 113.777778h216.177778z m512 0a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 147.911111v216.177778a34.133333 34.133333 0 0 1-67.811555 5.518222L841.955556 364.088889l-0.056889-133.745778-192 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L793.6 182.044444H659.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L625.777778 147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L659.911111 113.777778h216.177778z"  ></path></symbol><symbol id="l7-icon-hide" viewBox="0 0 1024 1024"><path d="M875.52 87.836444a34.133333 34.133333 0 0 1 7.281778 43.121778l-3.527111 5.006222-682.666667 796.444445a34.133333 34.133333 0 0 1-55.409778-39.367111l3.527111-5.006222 97.166223-113.379556C123.164444 697.969778 56.888889 582.940444 56.888889 512c0-113.777778 170.666667-341.333333 455.111111-341.333333a496.64 496.64 0 0 1 208.952889 45.112889l106.439111-124.188445a34.133333 34.133333 0 0 1 48.128-3.754667z m-38.684444 202.524445C921.031111 362.951111 967.111111 452.835556 967.111111 512c0 113.777778-170.666667 341.333333-455.111111 341.333333-50.631111 0-97.678222-7.224889-140.8-19.740444l50.232889-58.595556A417.393778 417.393778 0 0 0 512 785.066667c208.270222 0 386.844444-162.304 386.844444-273.066667 0-52.849778-40.675556-117.418667-105.813333-170.496l43.804445-51.2zM512 238.933333C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 66.787556 64.853333 152.291556 162.133333 209.692444L377.173333 616.675556a170.666667 170.666667 0 0 1 217.713778-253.895112l78.620445-91.704888A432.924444 432.924444 0 0 0 512 238.933333z m166.684444 236.088889a170.666667 170.666667 0 0 1-177.664 207.303111l177.607112-207.303111zM512 409.6a102.4 102.4 0 0 0-88.746667 153.486222L548.864 416.426667A102.172444 102.172444 0 0 0 512 409.6z"  ></path></symbol><symbol id="l7-icon-rectangle" viewBox="0 0 1024 1024"><path d="M170.666667 56.888889a113.777778 113.777778 0 0 1 108.544 79.644444H853.333333a34.133333 34.133333 0 0 1 33.678223 28.615111L887.466667 170.666667v574.122666a113.777778 113.777778 0 1 1-142.677334 142.734223L170.666667 887.466667a34.133333 34.133333 0 0 1-33.678223-28.615111L136.533333 853.333333V279.210667A113.777778 113.777778 0 0 1 170.666667 56.888889z m682.666666 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-34.133333-603.022222H279.210667a114.062222 114.062222 0 0 1-74.353778 74.410667L204.8 819.2h539.989333a114.062222 114.062222 0 0 1 74.410667-74.410667V204.8zM170.666667 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-ranging" viewBox="0 0 1024 1024"><path d="M723.171556 50.403556l250.424888 250.424888a31.061333 31.061333 0 0 1 0 43.918223L344.746667 973.596444a31.061333 31.061333 0 0 1-43.918223 0L50.403556 723.171556a31.061333 31.061333 0 0 1 0-43.918223L679.253333 50.403556a31.061333 31.061333 0 0 1 43.918223 0z m-21.959112 74.524444l-39.765333 39.822222 98.986667 98.872889a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222 62.179556 62.122667a34.133333 34.133333 0 0 1-44.088889 51.882667L563.2 387.242667 501.077333 325.063111 437.191111 388.949333l98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222L387.242667 563.2a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.584-62.122667-62.179556-63.886222 63.886222 98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-39.765333 39.822222 197.802667 197.745778 576.284444-576.284444-197.802667-197.745778z"  ></path></symbol><symbol id="l7-icon-reposition" viewBox="0 0 1024 1024"><path d="M512 56.888889a34.133333 34.133333 0 0 1 34.133333 34.133333v24.177778A398.336 398.336 0 0 1 908.856889 477.866667h24.177778a34.133333 34.133333 0 0 1 0 68.266666h-24.177778A398.336 398.336 0 0 1 546.133333 908.856889L546.133333 932.977778a34.133333 34.133333 0 0 1-68.266666 0v-24.177778A398.336 398.336 0 0 1 115.2 546.133333L91.022222 546.133333a34.133333 34.133333 0 1 1 0-68.266666h24.177778A398.336 398.336 0 0 1 477.866667 115.2V91.022222A34.133333 34.133333 0 0 1 512 56.888889z m34.190222 126.862222L546.133333 193.422222a34.133333 34.133333 0 1 1-68.266666 0v-9.671111A330.069333 330.069333 0 0 0 183.751111 477.866667h9.671111a34.133333 34.133333 0 1 1 0 68.266666l-9.671111 0.056889A330.069333 330.069333 0 0 0 477.866667 840.248889V830.577778a34.133333 34.133333 0 0 1 68.266666 0l0.056889 9.671111A330.069333 330.069333 0 0 0 840.248889 546.133333L830.577778 546.133333a34.133333 34.133333 0 0 1 0-68.266666h9.671111A330.069333 330.069333 0 0 0 546.133333 183.751111zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-round" viewBox="0 0 1024 1024"><path d="M512 56.888889a455.111111 455.111111 0 0 1 391.395556 687.502222 113.777778 113.777778 0 0 1-159.061334 158.890667A455.111111 455.111111 0 0 1 120.604444 279.608889 113.777778 113.777778 0 0 1 279.608889 120.604444 452.835556 452.835556 0 0 1 512 56.888889z m0 68.266667a384.910222 384.910222 0 0 0-191.715556 50.744888A113.777778 113.777778 0 0 1 175.957333 320.284444a386.844444 386.844444 0 0 0 527.815111 527.758223 113.777778 113.777778 0 0 1 144.270223-144.440889A386.844444 386.844444 0 0 0 512 125.155556z m299.406222 640.739555a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM212.593778 167.082667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-guanbi" viewBox="0 0 1024 1024"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  ></path></symbol></svg>';let $s=!1;function mp(){if(typeof document>"u"||$s)return;if(document.getElementById("__l7_iconfont_svg__")){$s=!0;return}const t=document.createElement("div");t.innerHTML=PA;const e=t.getElementsByTagName("svg")[0];if(e){e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.overflow="hidden",e.id="__l7_iconfont_svg__";const n=document.body;n?n.insertBefore(e,n.firstChild):document.addEventListener("DOMContentLoaded",()=>{document.getElementById("__l7_iconfont_svg__")||document.body.insertBefore(e,document.body.firstChild)}),$s=!0}}mp();class xi extends gu{constructor(e){super(),d(this,"controlOption",void 0),d(this,"container",void 0),d(this,"isShow",void 0),d(this,"sceneContainer",void 0),d(this,"scene",void 0),d(this,"mapsService",void 0),d(this,"renderService",void 0),d(this,"layerService",void 0),d(this,"controlService",void 0),d(this,"configService",void 0),xi.controlCount++,this.controlOption=D(D({},this.getDefault(e)),e||{})}getOptions(){return this.controlOption}setOptions(e){const n=this.getDefault(e);Object.entries(e).forEach(([r,i])=>{i===void 0&&(e[r]=n[r])}),"position"in e&&this.setPosition(e.position),"className"in e&&this.setClassName(e.className),"style"in e&&this.setStyle(e.style),this.controlOption=D(D({},this.controlOption),e)}addTo(e){this.mapsService=e.mapService,this.renderService=e.rendererService,this.layerService=e.layerService,this.controlService=e.controlService,this.configService=e.globalConfigService,this.scene=e.sceneService,this.sceneContainer=e,this.isShow=!0,this.container=this.onAdd(),Vn(this.container,"l7-control");const{className:n,style:r}=this.controlOption;return n&&this.setClassName(n),r&&this.setStyle(r),this.insertContainer(),this.emit("add",this),this}remove(){if(!this.mapsService)return this;sn(this.container),this.onRemove(),this.emit("remove",this)}onAdd(){return We("div")}onRemove(){}show(){const e=this.container;Vo(e,"l7-control--hide"),this.isShow=!0,this.emit("show",this)}hide(){const e=this.container;Vn(e,"l7-control--hide"),this.isShow=!1,this.emit("hide",this)}getDefault(e){return{position:jo.TOPRIGHT,name:`${xi.controlCount}`}}getContainer(){return this.container}getIsShow(){return this.isShow}_refocusOnMap(e){if(this.mapsService&&e&&e.screenX>0&&e.screenY>0){const n=this.mapsService.getContainer();n!==null&&n.focus()}}setPosition(e=jo.TOPLEFT){const n=this.controlService;return n&&n.removeControl(this),this.controlOption.position=e,n&&n.addControl(this,this.sceneContainer),this}setClassName(e){const n=this.container,{className:r}=this.controlOption;r&&Vo(n,r),e&&Vn(n,e)}setStyle(e){const n=this.container;e?n.setAttribute("style",e):n.removeAttribute("style")}insertContainer(){const e=this.controlOption.position,n=this.container;if(e instanceof Element)e.appendChild(n);else{const r=this.controlService.controlCorners[e];["bottomleft","bottomright","righttop","rightbottom"].includes(e)?r.insertBefore(n,r.firstChild):r.appendChild(n)}}checkUpdateOption(e,n){return n.some(r=>r in e)}}d(xi,"controlCount",0);class hr extends pt.EventEmitter{get buttonRect(){return this.button.getBoundingClientRect()}constructor(e,n){super(),d(this,"popperDOM",void 0),d(this,"contentDOM",void 0),d(this,"button",void 0),d(this,"option",void 0),d(this,"isShow",!1),d(this,"content",void 0),d(this,"timeout",null),d(this,"show",()=>this.isShow||!this.contentDOM.innerHTML?this:(this.resetPopperPosition(),Vo(this.popperDOM,"l7-popper-hide"),this.isShow=!0,this.option.unique&&hr.conflictPopperList.forEach(r=>{r!==this&&r.isShow&&r.hide()}),this.emit("show"),window.addEventListener("pointerdown",this.onPopperUnClick),this)),d(this,"hide",()=>this.isShow?(Vn(this.popperDOM,"l7-popper-hide"),this.isShow=!1,this.emit("hide"),window.removeEventListener("pointerdown",this.onPopperUnClick),this):this),d(this,"setHideTimeout",()=>{this.timeout||(this.timeout=window.setTimeout(()=>{this.isShow&&(this.hide(),this.timeout=null)},300))}),d(this,"clearHideTimeout",()=>{this.timeout&&(window.clearTimeout(this.timeout),this.timeout=null)}),d(this,"onBtnClick",()=>{this.isShow?this.hide():this.show()}),d(this,"onPopperUnClick",r=>{av(r.target,[".l7-button-control",".l7-popper-content"])||this.hide()}),d(this,"onBtnMouseLeave",()=>{this.setHideTimeout()}),d(this,"onBtnMouseMove",()=>{this.clearHideTimeout(),!this.isShow&&this.show()}),this.button=e,this.option=n,this.init(),n.unique&&hr.conflictPopperList.push(this)}getPopperDOM(){return this.popperDOM}getIsShow(){return this.isShow}getContent(){return this.content}setContent(e){typeof e=="string"?this.contentDOM.innerHTML=e:e instanceof HTMLElement&&(_u(this.contentDOM),this.contentDOM.appendChild(e)),this.content=e}init(){const{trigger:e}=this.option;this.popperDOM=this.createPopper(),e==="click"?this.button.addEventListener("click",this.onBtnClick):(this.button.addEventListener("mousemove",this.onBtnMouseMove),this.button.addEventListener("mouseleave",this.onBtnMouseLeave),this.popperDOM.addEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.addEventListener("mouseleave",this.onBtnMouseLeave))}destroy(){if(this.button.removeEventListener("click",this.onBtnClick),this.button.removeEventListener("mousemove",this.onBtnMouseMove),this.button.removeEventListener("mousemove",this.onBtnMouseLeave),this.popperDOM.removeEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.removeEventListener("mouseleave",this.onBtnMouseLeave),sn(this.popperDOM),this.option.unique){const e=hr.conflictPopperList.indexOf(this);e>-1&&hr.conflictPopperList.splice(e,1)}}resetPopperPosition(){const e={},{container:n,offset:r=[0,0],placement:i}=this.option,[o,s]=r,a=this.button.getBoundingClientRect(),u=n.getBoundingClientRect(),{left:l,right:c,top:h,bottom:f}=ov(a,u);let p=!1,_=!1;/^(left|right)/.test(i)?(i.includes("left")?e.right=`${a.width+c}px`:i.includes("right")&&(e.left=`${a.width+l}px`),i.includes("start")?e.top=`${h}px`:i.includes("end")?e.bottom=`${f}px`:(e.top=`${h+a.height/2}px`,_=!0,e.transform=`translate(${o}px, calc(${s}px - 50%))`)):/^(top|bottom)/.test(i)&&(i.includes("top")?e.bottom=`${a.height+f}px`:i.includes("bottom")&&(e.top=`${a.height+h}px`),i.includes("start")?e.left=`${l}px`:i.includes("end")?e.right=`${c}px`:(e.left=`${l+a.width/2}px`,p=!0,e.transform=`translate(calc(${o}px - 50%), ${s}px)`)),e.transform=`translate(calc(${o}px - ${p?"50%":"0%"}), calc(${s}px - ${_?"50%":"0%"})`;const v=i.split("-");v.length&&Vn(this.popperDOM,v.map(m=>`l7-popper-${m}`).join(" ")),yd(this.popperDOM,iv(e))}createPopper(){const{container:e,className:n="",content:r}=this.option,i=We("div",`l7-popper l7-popper-hide ${n}`),o=We("div","l7-popper-content"),s=We("div","l7-popper-arrow");return i.appendChild(o),i.appendChild(s),e.appendChild(i),this.popperDOM=i,this.contentDOM=o,r&&this.setContent(r),i}}d(hr,"conflictPopperList",[]);const FA=t=>{mp();const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.classList.add("l7-iconfont"),e.setAttribute("aria-hidden","true");const n=document.createElementNS("http://www.w3.org/2000/svg","use");return n.setAttributeNS("http://www.w3.org/1999/xlink","href",`#${t}`),e.appendChild(n),e},dh=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],ln=(()=>{if(typeof document>"u")return!1;const t=dh[0],e={};for(const n of dh)if((n==null?void 0:n[1])in document){for(const[i,o]of n.entries())e[t[i]]=o;return e}return!1})(),ph={change:ln.fullscreenchange,error:ln.fullscreenerror};let At={request(t=document.documentElement,e){return new Promise((n,r)=>{const i=()=>{At.off("change",i),n()};At.on("change",i);const o=t[ln.requestFullscreen](e);o instanceof Promise&&o.then(i).catch(r)})},exit(){return new Promise((t,e)=>{if(!At.isFullscreen){t();return}const n=()=>{At.off("change",n),t()};At.on("change",n);const r=document[ln.exitFullscreen]();r instanceof Promise&&r.then(n).catch(e)})},toggle(t,e){return At.isFullscreen?At.exit():At.request(t,e)},onchange(t){At.on("change",t)},onerror(t){At.on("error",t)},on(t,e){const n=ph[t];n&&document.addEventListener(n,e,!1)},off(t,e){const n=ph[t];n&&document.removeEventListener(n,e,!1)},raw:ln};Object.defineProperties(At,{isFullscreen:{get:()=>!!document[ln.fullscreenElement]},element:{enumerable:!0,get:()=>{var t;return(t=document[ln.fullscreenElement])!==null&&t!==void 0?t:void 0}},isEnabled:{enumerable:!0,get:()=>!!document[ln.fullscreenEnabled]}});ln||(At={isEnabled:!1});class BA extends xi{getDefault(){return{position:jo.BOTTOMLEFT,name:"logo",href:"https://l7.antv.antgroup.com/",img:"https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*GRb1TKp4HcMAAAAAAAAAAAAAARQnAQ"}}onAdd(){const e=We("div","l7-control-logo");return this.setLogoContent(e),e}onRemove(){return null}setOptions(e){super.setOptions(e),this.checkUpdateOption(e,["img","href"])&&(_u(this.container),this.setLogoContent(this.container))}setLogoContent(e){const{href:n,img:r}=this.controlOption,i=We("img");if(i.setAttribute("src",r),i.setAttribute("aria-label","AntV logo"),sv(i),n){const o=We("a","l7-control-logo-link");o.target="_blank",o.href=n,o.rel="noopener nofollow",o.setAttribute("rel","noopener nofollow"),o.appendChild(i),e.appendChild(o)}else e.appendChild(i)}}class NA{constructor(){d(this,"mapService",void 0),d(this,"fontService",void 0)}apply(e,{styleAttributeService:n,mapService:r,fontService:i}){var o=this;this.mapService=r,this.fontService=i,e.hooks.init.tapPromise("DataMappingPlugin",L(function*(){e.log(He.MappingStart,Ke.INIT),o.generateMaping(e,{styleAttributeService:n}),e.log(He.MappingEnd,Ke.INIT)})),e.hooks.beforeRenderData.tapPromise("DataMappingPlugin",function(){var s=L(function*(a){if(!a)return a;e.dataState.dataMappingNeedUpdate=!1,e.log(He.MappingStart,Ke.UPDATE);const u=o.generateMaping(e,{styleAttributeService:n});return e.log(He.MappingEnd,Ke.UPDATE),u});return function(a){return s.apply(this,arguments)}}()),e.hooks.beforeRender.tap("DataMappingPlugin",()=>{const s=e.getSource();if(e.layerModelNeedUpdate||!s||!s.inited)return;const a=n.getLayerStyleAttributes()||[],u=n.getLayerStyleAttribute("filter"),{dataArray:l}=s.data;if(Array.isArray(l)&&l.length===0)return;const c=a.filter(f=>f.needRemapping);let h=l;if(u!=null&&u.needRemapping&&u!==null&&u!==void 0&&u.scale&&(h=l.filter(f=>this.applyAttributeMapping(u,f)[0])),c.length){const f=this.mapping(e,c,h,e.getEncodedData());e.setEncodedData(f),e.emit("remapping",null)}})}generateMaping(e,{styleAttributeService:n}){const r=n.getLayerStyleAttributes()||[],i=n.getLayerStyleAttribute("filter"),{dataArray:o}=e.getSource().data,s=r.filter(h=>h.scale!==void 0).filter(h=>h.name!=="filter"),a=i==null?void 0:i.scale;let u=[];if(a)for(let h=0;h<o.length;h++){const f=o[h];this.applyAttributeMapping(i,f)[0]&&u.push(f)}else u=o;const l=e.processData(u),c=this.mapping(e,s,l,void 0);return r.forEach(h=>{h.needRemapping=!1}),this.adjustData2SimpleCoordinates(c),e.setEncodedData(c),e.emit("dataUpdate",null),!0}mapping(e,n,r,i){const o=n.filter(a=>a.scale!==void 0).filter(a=>a.name!=="filter"),s=r.map((a,u)=>{const l=i?i[u]:{},c=D({id:a._id,coordinates:a.coordinates},l);return o.forEach(h=>{let f=this.applyAttributeMapping(h,a);(h.name==="color"||h.name==="stroke")&&(f=f.map(p=>Te(p))),c[h.name]=Array.isArray(f)&&f.length===1?f[0]:f,h.name==="shape"&&(c.shape=this.fontService.getIconFontKey(c[h.name]))}),c});return n.forEach(a=>{a.needRemapping=!1}),this.adjustData2SimpleCoordinates(s),s}adjustData2SimpleCoordinates(e){e.length>0&&this.mapService.version==="SIMPLE"&&e.map(n=>{n.simpleCoordinate||(n.coordinates=this.unProjectCoordinates(n.coordinates),n.simpleCoordinate=!0)})}unProjectCoordinates(e){if(typeof e[0]=="number")return this.mapService.simpleMapCoord.unproject(e);if(e[0]&&e[0][0]instanceof Array){const n=[];return e.map(r=>{const i=[];r.map(o=>{i.push(this.mapService.simpleMapCoord.unproject(o))}),n.push(i)}),n}else{const n=[];return e.map(r=>{n.push(this.mapService.simpleMapCoord.unproject(r))}),n}}applyAttributeMapping(e,n){var r;if(!e.scale)return[];const i=(e==null||(r=e.scale)===null||r===void 0?void 0:r.scalers)||[],o=[];return i.forEach(({field:a})=>{var u;(n.hasOwnProperty(a)||((u=e.scale)===null||u===void 0?void 0:u.type)==="variable")&&o.push(n[a])}),e.mapping?e.mapping(o):[]}getArrowPoints(e,n){const r=[n[0]-e[0],n[1]-e[1]],i=gv(r);return[e[0]+i[0]*1e-4,e[1]+i[1]*1e-4]}}class DA{constructor(){d(this,"mapService",void 0)}apply(e){var n=this;this.mapService=e.getContainer().mapService,e.hooks.init.tapPromise("DataSourcePlugin",L(function*(){e.log(He.SourceInitStart,Ke.INIT);let r=e.getSource();if(!r){const{data:i,options:o}=e.sourceOption||e.defaultSourceConfig;r=new OA(i,o),e.setSource(r)}r.inited?(n.updateClusterData(e),e.log(He.SourceInitEnd,Ke.INIT)):yield new Promise(i=>{r.on("update",o=>{o.type==="inited"&&(n.updateClusterData(e),e.log(He.SourceInitEnd,Ke.INIT)),i(null)})})})),e.hooks.beforeRenderData.tapPromise("DataSourcePlugin",L(function*(){const r=n.updateClusterData(e),i=e.dataState.dataSourceNeedUpdate;return e.dataState.dataSourceNeedUpdate=!1,r||i}))}updateClusterData(e){if(e.isTileLayer||e.tileLayer||!e.getSource())return!1;const n=e.getSource(),r=n.cluster,{zoom:i=0}=n.clusterOptions,o=this.mapService.getZoom()-1,s=e.dataState.dataSourceNeedUpdate;return r&&s&&n.updateClusterData(Math.floor(o)),r&&Math.abs(e.clusterZoom-o)>=1?(i!==Math.floor(o)&&n.updateClusterData(Math.floor(o)),e.clusterZoom=o,!0):!1}}function gp(t){let e,n=[];function r(i){return i??e}return r.invert=r,r.domain=r.range=i=>i?(n=i,i):n,r.unknown=i=>i?(e=i,i):e,r.copy=()=>gp().unknown(e),r}function Ep(t,e,n=0,r=t.length){for(;n<r;){const i=n+r>>>1;t[i]<e?n=i+1:r=i}return n}function xu(t,e,n){if(t===e)return 0;const r=e-t,i=Math.pow(10,Math.floor(Math.log(r/n)/Math.LN10)),o=n/r*i;return o<=.15?i*10:o<=.35?i*5:o<=.75?i*2:i}function Cu(t,e,n){if(t===e)return 1;const r=e-t,i=Math.abs(r)/Math.max(1,n);let o=Math.pow(10,Math.floor(Math.log(i)/Math.LN10));const s=i/o;return s>=10?o*=10:s>=5?o*=5:s>=2&&(o*=2),r<0?-o:o}function Nr(t){const e=t.filter(n=>n!=null&&!Number.isNaN(n)&&typeof n=="number");return e.length===0?[0,1]:e.length===1?[e[0],e[0]]:e}function wA(){let t=[0,1],e=[0,1],n=!1;function r(i){const o=t[0],s=t[t.length-1],a=e[0],u=e[e.length-1];if(o===s)return(a+u)/2;let l=(i-o)/(s-o);return n&&(l=Math.max(0,Math.min(1,l))),a+l*(u-a)}return r.domain=function(i){return i===void 0?t.slice():(t=Nr(i),r)},r.range=function(i){return i===void 0?e.slice():(e=i.slice(),r)},r.invert=function(i){const o=t[0],s=t[t.length-1],a=e[0],u=e[e.length-1];return o+(i-a)/(u-a)*(s-o)},r.ticks=function(i=10){const o=t[0],s=t[t.length-1];if(o===s)return[o];const a=Cu(o,s,i),u=[];let l=Math.floor(o/a);const c=Math.ceil(s/a);for(;l<=c;)u.push(l*a),l++;return u},r.nice=function(i=10){const o=t[0],s=t[t.length-1];if(o===s)return r;const a=xu(o,s,i);return a>0&&(t=[Math.floor(o/a)*a,Math.ceil(s/a)*a]),r},r.clamp=function(i){return i===void 0?n:(n=i,r)},r}function LA(){let t=[0,1],e=[0,1],n=!1,r=1;function i(o){const s=t[0],a=t[t.length-1],u=e[0],l=e[e.length-1];if(s===a)return(u+l)/2;let c=(o-s)/(a-s);return n&&(c=Math.max(0,Math.min(1,c))),c=Math.pow(c,r),u+c*(l-u)}return i.domain=function(o){return o===void 0?t.slice():(t=Nr(o),i)},i.range=function(o){return o===void 0?e.slice():(e=o.slice(),i)},i.invert=function(o){const s=t[0],a=t[t.length-1],u=e[0],l=e[e.length-1];let c=(o-u)/(l-u);return c=Math.pow(c,1/r),s+c*(a-s)},i.ticks=function(o=10){const s=t[0],a=t[t.length-1];if(s===a)return[s];const u=Cu(s,a,o),l=[];let c=Math.floor(s/u);const h=Math.ceil(a/u);for(;c<=h;)l.push(c*u),c++;return l},i.nice=function(o=10){const s=t[0],a=t[t.length-1];if(s===a)return i;const u=xu(s,a,o);return u>0&&(t=[Math.floor(s/u)*u,Math.ceil(a/u)*u]),i},i.clamp=function(o){return o===void 0?n:(n=o,i)},i.exponent=function(o){return o===void 0?r:(r=o,i)},i}function tn(t,e){return Math.log(t)/Math.log(e)}function _h(t,e){return Math.pow(e,t)}function UA(){let t=[1,10],e=[0,1],n=!1,r=10;function i(o){const s=t[0],a=t[t.length-1],u=e[0],l=e[e.length-1];if(s===a)return(u+l)/2;const c=Math.abs(s)||1,h=Math.abs(a)||1,f=Math.abs(o)||1;let p=(tn(f,r)-tn(c,r))/(tn(h,r)-tn(c,r));return n&&(p=Math.max(0,Math.min(1,p))),u+p*(l-u)}return i.domain=function(o){return o===void 0?t.slice():(t=Nr(o).map(a=>a<=0?1:a),i)},i.range=function(o){return o===void 0?e.slice():(e=o.slice(),i)},i.invert=function(o){const s=t[0],a=t[t.length-1],u=e[0],l=e[e.length-1],c=(o-u)/(l-u),h=Math.abs(s)||1,f=Math.abs(a)||1;return _h(tn(h,r)+c*(tn(f,r)-tn(h,r)),r)},i.ticks=function(o=10){const s=t[0],a=t[t.length-1];if(s===a)return[s];const u=[],l=Math.floor(tn(Math.abs(s)||1,r)),c=Math.ceil(tn(Math.abs(a)||1,r));for(let h=l;h<=c;h++)u.push(_h(h,r));return u},i.nice=function(){return i},i.clamp=function(o){return o===void 0?n:(n=o,i)},i.base=function(o){return o===void 0?r:(r=o,i)},i}function Da(t){let e=[],n=t||[],r;const i=new Map;function o(s){let a=i.get(s);if(a===void 0){if(r!==void 0)return r;if(n.length===0)return;a=e.push(s)-1,i.set(s,a)}return n[a%n.length]}return o.domain=function(s){return s===void 0?e.slice():(e=[],i.clear(),s.forEach(a=>{i.has(a)||(i.set(a,e.length),e.push(a))}),o)},o.range=function(s){return s===void 0?n.slice():(n=s.slice(),o)},o.unknown=function(s){return r=s,o},o}function kA(){let t=[0,1],e=[0,1],n=1;function r(i){const o=t[0],s=t[t.length-1];if(o===s)return e[Math.floor(e.length/2)];const a=(i-o)/(s-o),u=Math.max(0,Math.min(n-1,Math.floor(a*n)));return e[u]}return r.domain=function(i){return i===void 0?t.slice():(t=Nr(i),r)},r.range=function(i){return i===void 0?e.slice():(e=i.slice(),n=Math.max(1,e.length),r)},r.invertExtent=function(i){const o=e.indexOf(i);if(o<0)return[NaN,NaN];const s=t[0],u=(t[t.length-1]-s)/n;return[s+o*u,s+(o+1)*u]},r}function zA(){let t=[],e=[0,1],n=[];function r(o){if(isNaN(o))return e[0];const s=Ep(n,o);return e[s]}r.domain=function(o){return o===void 0?t.slice():(t=o.filter(s=>s!=null&&!isNaN(s)&&typeof s=="number").sort((s,a)=>s-a),i(),r)},r.range=function(o){return o===void 0?e.slice():(e=o.slice(),i(),r)},r.invertExtent=function(o){const s=e.indexOf(o);return s<0?[NaN,NaN]:(e.length,s>0?[n[s-1],n[s]]:[t[0],n[0]])},r.quantiles=function(){return n.slice()};function i(){const o=e.length,s=t.length;if(s===0||o===0){n=[];return}n=[];for(let a=1;a<o;a++){const u=a/o,l=(s-1)*u,c=Math.floor(l),h=Math.ceil(l),f=l-c;h>=s?n.push(t[s-1]):n.push(t[c]*(1-f)+t[h]*f)}}return r}function VA(){let t=[.5],e=[0,1];function n(r){const i=Ep(t,r);return e[i]}return n.domain=function(r){return r===void 0?t.slice():(t=r.filter(i=>i!=null&&!isNaN(i)&&typeof i=="number"),t.length===0&&(t=[.5]),n)},n.range=function(r){return r===void 0?e.slice():(e=r.slice(),n)},n.invertExtent=function(r){const i=e.indexOf(r);return[i>0?t[i-1]:void 0,i<t.length?t[i]:void 0]},n}function HA(){let t=[0,1],e=i=>i,n=!1;function r(i){const o=t[0],s=t[t.length-1];if(o===s)return e(.5);let a=(i-o)/(s-o);return n&&(a=Math.max(0,Math.min(1,a))),e(a)}return r.domain=function(i){return i===void 0?t.slice():(t=Nr(i),r)},r.interpolator=function(i){return i===void 0?e:(e=i,r)},r.clamp=function(i){return i===void 0?n:(n=i,r)},r}function XA(){let t=[0,.5,1],e=i=>i,n=!1;function r(i){const o=t[0],s=t[1],a=t[2];let u;return i<s?o===s?e(.5):(u=(i-o)/(s-o),u=n?Math.max(0,u):u,e(.5-u*.5)):s===a?e(.5):(u=(i-s)/(a-s),u=n?Math.min(1,u):u,e(.5+u*.5))}return r.domain=function(i){if(i===void 0)return t.slice();const o=i.filter(s=>s!=null&&!isNaN(s)&&typeof s=="number");if(o.length>=3)t=[o[0],o[1],o[2]];else if(o.length===2){const s=(o[0]+o[1])/2;t=[o[0],s,o[1]]}else o.length===1?t=[o[1],o[0],o[0]+1]:t=[0,.5,1];return r},r.interpolator=function(i){return i===void 0?e:(e=i,r)},r.clamp=function(i){return i===void 0?n:(n=i,r)},r}function WA(){let t=[0,1],e=[0,1],n=!1;function r(i){const o=t[0],s=t[t.length-1],a=e[0],u=e[e.length-1];if(o===s)return(a+u)/2;let l=(i-o)/(s-o);return n&&(l=Math.max(0,Math.min(1,l))),a+l*(u-a)}return r.domain=function(i){return i===void 0?t.slice():(t=Nr(i),r)},r.range=function(i){return i===void 0?e.slice():(e=i.slice(),r)},r.invert=function(i){const o=t[0],s=t[t.length-1],a=e[0],u=e[e.length-1];return o+(i-a)/(u-a)*(s-o)},r.ticks=function(i=10){const o=t[0],s=t[t.length-1];if(o===s)return[o];const a=Cu(o,s,i),u=[];let l=Math.floor(o/a);const c=Math.ceil(s/a);for(;l<=c;)u.push(l*a),l++;return u},r.nice=function(i=10){const o=t[0],s=t[t.length-1];if(o===s)return r;const a=xu(o,s,i);return a>0&&(t=[Math.floor(o/a)*a,Math.ceil(s/a)*a]),r},r.clamp=function(i){return i===void 0?n:(n=i,r)},r}const{isNil:Zs,isString:vh,uniq:jA,extent:mh}=we,$A=/^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,ZA={[_e.LINEAR]:wA,[_e.POWER]:LA,[_e.LOG]:UA,[_e.IDENTITY]:gp,[_e.SEQUENTIAL]:HA,[_e.TIME]:WA,[_e.QUANTILE]:zA,[_e.QUANTIZE]:kA,[_e.THRESHOLD]:VA,[_e.CAT]:Da,[_e.DIVERGING]:XA};class YA{constructor(){d(this,"scaleOptions",{})}apply(e,{styleAttributeService:n}){var r=this;e.hooks.init.tapPromise("FeatureScalePlugin",L(function*(){var i;e.log(He.ScaleInitStart,Ke.INIT),r.scaleOptions=e.getScaleOptions();const o=n.getLayerStyleAttributes(),s=(i=e.getSource())===null||i===void 0?void 0:i.data.dataArray;Array.isArray(s)&&s.length===0||(r.caculateScalesForAttributes(o||[],s),e.log(He.ScaleInitEnd,Ke.INIT))})),e.hooks.beforeRenderData.tapPromise("FeatureScalePlugin",function(){var i=L(function*(o){if(!o)return o;e.log(He.ScaleInitStart,Ke.UPDATE),r.scaleOptions=e.getScaleOptions();const s=n.getLayerStyleAttributes(),a=e.getSource().data.dataArray;return Array.isArray(a)&&a.length===0||(r.caculateScalesForAttributes(s||[],a),e.log(He.ScaleInitEnd,Ke.UPDATE),e.layerModelNeedUpdate=!0),!0});return function(o){return i.apply(this,arguments)}}()),e.hooks.beforeRender.tap("FeatureScalePlugin",()=>{if(e.layerModelNeedUpdate)return;this.scaleOptions=e.getScaleOptions();const i=n.getLayerStyleAttributes(),o=e.getSource().data.dataArray;if(!(Array.isArray(o)&&o.length===0)&&i){const s=i.filter(a=>a.needRescale);s.length&&this.caculateScalesForAttributes(s,o)}})}isNumber(e){return!isNaN(parseFloat(e))&&isFinite(e)}caculateScalesForAttributes(e,n){e.forEach(r=>{if(r.scale){const i=r.scale,o=r.scale.field;i.names=this.parseFields(Zs(o)?[]:o);const s=[];i.names.forEach(a=>{var u;s.push(this.createScale(a,r.name,(u=r.scale)===null||u===void 0?void 0:u.values,n))}),s.some(a=>a.type===nr.VARIABLE)?(i.type=nr.VARIABLE,s.forEach(a=>{if(!i.callback&&i.values!=="text"){var u;switch((u=a.option)===null||u===void 0?void 0:u.type){case _e.LOG:case _e.LINEAR:case _e.POWER:if(i.values&&i.values.length>2){const c=a.scale.ticks(i.values.length);a.scale.domain(c)}i.values?a.scale.range(i.values):a.scale.range(a.option.domain);break;case _e.QUANTILE:case _e.QUANTIZE:case _e.THRESHOLD:a.scale.range(i.values);break;case _e.IDENTITY:break;case _e.CAT:i.values?a.scale.range(i.values):a.scale.range(a.option.domain);break;case _e.DIVERGING:case _e.SEQUENTIAL:a.scale.interpolator(O0(i.values));break}}if(i.values==="text"){var l;a.scale.range((l=a.option)===null||l===void 0?void 0:l.domain)}})):(i.type=nr.CONSTANT,i.defaultValues=s.map((a,u)=>a.scale(i.names[u]))),i.scalers=s.map(a=>({field:a.field,func:a.scale,option:a.option})),r.needRescale=!1}})}parseFields(e){return Array.isArray(e)?e:vh(e)?e.split("*"):[e]}createScale(e,n,r,i){var o,s;const a=this.scaleOptions[n]&&((o=this.scaleOptions[n])===null||o===void 0?void 0:o.field)===e?this.scaleOptions[n]:this.scaleOptions[e],u={field:e,scale:void 0,type:nr.VARIABLE,option:a};if(!i||!i.length)return a&&a.type?u.scale=this.createDefaultScale(a):(u.scale=Da([e]),u.type=nr.CONSTANT),u;const l=(s=i.find(c=>!Zs(c[e])))===null||s===void 0?void 0:s[e];if(this.isNumber(e)||Zs(l)&&!a)u.scale=Da([e]),u.type=nr.CONSTANT;else{let c=a&&a.type||this.getDefaultType(l);r==="text"&&(c=_e.CAT),r===void 0&&(c=_e.IDENTITY),n==="color"&&Array.isArray(r)&&r.length&&r.every(f=>vh(f))&&(c===_e.LINEAR||c===_e.POWER||c===_e.LOG)&&(c=_e.SEQUENTIAL);const h=this.createScaleConfig(c,e,a,i);u.scale=this.createDefaultScale(h),u.option=h}return u}getDefaultType(e){let n=_e.LINEAR;return typeof e=="string"&&(n=$A.test(e)?_e.TIME:_e.CAT),n}createScaleConfig(e,n,r,i){const o=D(D({},r),{},{type:e});if(o!=null&&o.domain)return o;let s=[];if(e===_e.QUANTILE){const a=new Map;i==null||i.forEach(u=>{a.set(u._id,u[n])}),s=Array.from(a.values())}else s=(i==null?void 0:i.map(a=>a[n]))||[];if(e===_e.CAT||e===_e.IDENTITY)o.domain=jA(s);else if(e===_e.QUANTILE)o.domain=s;else if(e===_e.DIVERGING){const a=mh(s),u=(r==null?void 0:r.neutral)!==void 0?r==null?void 0:r.neutral:(a[0]+a[1])/2;o.domain=[a[0],u,a[1]]}else o.domain=mh(s);return o}createDefaultScale({type:e,domain:n,unknown:r,clamp:i,nice:o}){const s=ZA[e]();return n&&s.domain&&s.domain(n),r&&s.unknown(r),i!==void 0&&s.clamp&&s.clamp(i),o!==void 0&&s.nice&&s.nice(o),s}}class GA{apply(e){e.hooks.beforeRender.tap("LayerAnimateStylePlugin",()=>{e.animateStatus&&e.models.forEach(r=>{r.addUniforms(D({},e.layerModel.getAnimateUniforms()))})})}}let KA=class{apply(e){e.hooks.afterInit.tap("LayerMaskPlugin",()=>{const{maskLayers:n,enableMask:r}=e.getLayerConfig();!e.tileLayer&&n&&n.length>0&&e.updateLayerConfig({mask:r})})}};class qA{build(e){return L(function*(){e.prepareBuildModel(),yield e.buildModels()})()}initLayerModel(e){var n=this;return L(function*(){yield n.build(e),e.styleNeedUpdate=!1})()}prepareLayerModel(e){var n=this;return L(function*(){yield n.build(e),e.styleNeedUpdate=!1})()}apply(e){var n=this;e.hooks.init.tapPromise("LayerModelPlugin",L(function*(){if(e.getSource().isTile){e.prepareBuildModel();return}e.log(He.BuildModelStart,Ke.INIT),yield n.initLayerModel(e),e.log(He.BuildModelEnd,Ke.INIT)})),e.hooks.beforeRenderData.tapPromise("LayerModelPlugin",function(){var r=L(function*(i){return!i||e.getSource().isTile?!1:(e.log(He.BuildModelStart,Ke.UPDATE),yield n.prepareLayerModel(e),e.log(He.BuildModelEnd,Ke.UPDATE),!0)});return function(i){return r.apply(this,arguments)}}())}}class QA{apply(e){e.hooks.afterInit.tap("LayerStylePlugin",()=>{const{autoFit:n,fitBoundsOptions:r}=e.getLayerConfig();n&&e.fitBounds(r),e.styleNeedUpdate=!1})}}const JA=["type"],gh={directional:{lights:"u_DirectionalLights",num:"u_NumOfDirectionalLights"},spot:{lights:"u_SpotLights",num:"u_NumOfSpotLights"}},eS={type:"directional",direction:[1,10.5,12],ambient:[.2,.2,.2],diffuse:[.6,.6,.6],specular:[.1,.1,.1]},tS={direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0]},nS={position:[0,0,0],direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0],constant:1,linear:0,quadratic:0,angle:14,exponent:40,blur:5};function rS(t){const e={u_DirectionalLights:new Array(3).fill(D({},tS)),u_NumOfDirectionalLights:0,u_SpotLights:new Array(3).fill(D({},nS)),u_NumOfSpotLights:0};return(!t||!t.length)&&(t=[eS]),t.forEach(n=>{let{type:r="directional"}=n,i=Zt(n,JA);const o=gh[r].lights,s=gh[r].num,a=e[s];e[o][a]=D(D({},e[o][a]),i),e[s]++}),e}class iS{apply(e){e.hooks.beforeRender.tap("LightingPlugin",()=>{const{enableLighting:n}=e.getLayerConfig();n&&e.models.forEach(r=>r.addUniforms(D({},rS())))})}}function yp(t){return t.map(e=>(typeof e=="string"&&(e=[e,{}]),e))}function Tp(t,e,n,r){const i=t.multiPassRenderer;return i.add(r("render")),yp(e).forEach(o=>{const[s,a]=o;i.add(n(s),a)}),i.add(n("copy")),i}class oS{constructor(){d(this,"enabled",void 0)}apply(e,{rendererService:n,postProcessingPassFactory:r,normalPassFactory:i}){e.hooks.init.tapPromise("MultiPassRendererPlugin",()=>{const{enableMultiPassRenderer:o,passes:s=[]}=e.getLayerConfig();this.enabled=!!o&&e.getLayerConfig().enableMultiPassRenderer!==!1,this.enabled&&(e.multiPassRenderer=Tp(e,s,r,i),e.multiPassRenderer.setRenderFlag(!0))}),e.hooks.beforeRender.tap("MultiPassRendererPlugin",()=>{if(this.enabled){const{width:o,height:s}=n.getViewportSize();e.multiPassRenderer.resize(o,s)}})}}const an={POSITION:0,POSITION_64LOW:1,COLOR:2,PICKING_COLOR:3,STROKE:4,OPACITY:5,OFFSETS:6,ROTATION:7,ANCHOR:8,MAX:9};function sS(t){switch(t){case"rotation":return{name:"Rotation",type:$.Attribute,descriptor:{name:"a_Rotation",shaderLocation:an.ROTATION,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{rotation:n=0}=e;return Array.isArray(n)?[n[0]]:[n]}}};case"stroke":return{name:"stroke",type:$.Attribute,descriptor:{name:"a_Stroke",shaderLocation:an.STROKE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:4,update:e=>{const{stroke:n=[1,1,1,1]}=e;return n}}};case"opacity":return{name:"opacity",type:$.Attribute,descriptor:{name:"a_Opacity",shaderLocation:an.OPACITY,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{opacity:n=1}=e;return[n]}}};case"offsets":return{name:"offsets",type:$.Attribute,descriptor:{name:"a_Offsets",shaderLocation:an.OFFSETS,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const{offsets:n}=e;return n}}};case"anchor":return{name:"anchor",type:$.Attribute,descriptor:{name:"a_Anchor",shaderLocation:an.ANCHOR,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{anchor:n=0}=e;return[n]}}};default:return}}const{isNumber:aS}=we,rr={ENCODE:1,HIGHLIGHT:2};class uS{constructor(){d(this,"pickingUniformMap",void 0)}pickOption2Array(){const e=[];return this.pickingUniformMap.forEach(n=>{aS(n)?e.push(n):e.push(...n)}),e}updatePickOption(e,n){Object.keys(e).forEach(s=>{this.pickingUniformMap.set(s,e[s])});const r=n.getLayerConfig().pickingBuffer||0,i=Number(n.getShaderPickStat());this.pickingUniformMap.set("u_PickingBuffer",r),this.pickingUniformMap.set("u_shaderPick",i),n.getPickingUniformBuffer().subData({offset:0,data:this.pickOption2Array()})}apply(e,{styleAttributeService:n}){this.pickingUniformMap=new Map([["u_HighlightColor",[1,0,0,1]],["u_SelectColor",[1,0,0,1]],["u_PickingColor",[0,0,0]],["u_PickingStage",0],["u_CurrentSelectedId",[0,0,0]],["u_PickingThreshold",10],["u_PickingBuffer",0],["u_shaderPick",0],["u_activeMix",0]]),e.hooks.init.tapPromise("PixelPickingPlugin",()=>{const{enablePicking:r}=e.getLayerConfig();n.registerStyleAttribute({name:"pickingColor",type:$.Attribute,descriptor:{name:"a_PickingColor",shaderLocation:an.PICKING_COLOR,buffer:{data:[],type:g.FLOAT},size:3,update:i=>{const{id:o}=i;return r?xr(o):[0,0,0]}}})}),e.hooks.beforePickingEncode.tap("PixelPickingPlugin",()=>{const{enablePicking:r}=e.getLayerConfig();r&&e.isVisible()&&(this.updatePickOption({u_PickingStage:rr.ENCODE},e),e.models.forEach(i=>i.addUniforms({u_PickingStage:rr.ENCODE})))}),e.hooks.afterPickingEncode.tap("PixelPickingPlugin",()=>{const{enablePicking:r}=e.getLayerConfig();r&&e.isVisible()&&(this.updatePickOption({u_PickingStage:rr.HIGHLIGHT},e),e.models.forEach(i=>i.addUniforms({u_PickingStage:rr.HIGHLIGHT})))}),e.hooks.beforeHighlight.tap("PixelPickingPlugin",r=>{const{highlightColor:i,activeMix:o=0}=e.getLayerConfig(),s=typeof i=="string"?Te(i):i||[1,0,0,1];e.updateLayerConfig({pickedFeatureID:zn(new Uint8Array(r))});const a={u_PickingStage:rr.HIGHLIGHT,u_PickingColor:r,u_HighlightColor:s.map(u=>u*255),u_activeMix:o};this.updatePickOption(a,e),e.models.forEach(u=>u.addUniforms(a))}),e.hooks.beforeSelect.tap("PixelPickingPlugin",r=>{const{selectColor:i,selectMix:o=0}=e.getLayerConfig(),s=typeof i=="string"?Te(i):i||[1,0,0,1];e.updateLayerConfig({pickedFeatureID:zn(new Uint8Array(r))});const a={u_PickingStage:rr.HIGHLIGHT,u_PickingColor:r,u_HighlightColor:s.map(u=>u*255),u_activeMix:o,u_CurrentSelectedId:r,u_SelectColor:s.map(u=>u*255)};this.updatePickOption(a,e),e.models.forEach(u=>u.addUniforms(a))})}}const lS=["mvt","geojsonvt","testTile"];function cS(t){const e=t.getSource();return lS.includes(e.parser.type)}class hS{apply(e,{styleAttributeService:n}){e.hooks.init.tapPromise("RegisterStyleAttributePlugin",()=>{cS(e)||this.registerBuiltinAttributes(n,e)})}registerBuiltinAttributes(e,n){if(n.type==="MaskLayer"){this.registerPositionAttribute(e);return}this.registerPositionAttribute(e),this.registerColorAttribute(e)}registerPositionAttribute(e){e.registerStyleAttribute({name:"position",type:$.Attribute,descriptor:{name:"a_Position",shaderLocation:an.POSITION,buffer:{data:[],type:g.FLOAT},size:3,update:(n,r,i)=>i.length===2?[i[0],i[1],0]:[i[0],i[1],i[2]]}})}registerColorAttribute(e){e.registerStyleAttribute({name:"color",type:$.Attribute,descriptor:{name:"a_Color",shaderLocation:an.COLOR,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:4,update:n=>{const{color:r}=n;return!r||!r.length?[1,1,1,1]:r}}})}}class fS{constructor(){d(this,"cameraService",void 0),d(this,"coordinateSystemService",void 0),d(this,"rendererService",void 0),d(this,"mapService",void 0),d(this,"layerService",void 0)}apply(e,{rendererService:n,mapService:r,layerService:i,coordinateSystemService:o,cameraService:s}){this.rendererService=n,this.mapService=r,this.layerService=i,this.coordinateSystemService=o,this.cameraService=s;let a;this.rendererService.uniformBuffers[0]||(a=this.rendererService.createBuffer({data:new Float32Array(96),isUBO:!0,label:"renderUniformBuffer"}),this.rendererService.uniformBuffers[0]=a),e.hooks.beforeRender.tap("ShaderUniformPlugin",()=>{const l=e.getRelativeOrigin&&e.getRelativeOrigin()||[0,0];this.coordinateSystemService.refresh(),l&&(Math.abs(l[0])>1e-4||Math.abs(l[1])>1e-4)&&this.coordinateSystemService.getCoordinateSystem()===2&&this.coordinateSystemService.setViewportCenter(l);const{width:h,height:f}=this.rendererService.getViewportSize(),{data:p,uniforms:_}=this.generateUBO(h,f,l);this.layerService.alreadyInRendering&&this.rendererService.uniformBuffers[0]&&this.rendererService.uniformBuffers[0].subData({offset:0,data:p}),this.rendererService.queryVerdorInfo()==="WebGL1"&&e.models.forEach(m=>{m.addUniforms(D(D({},_),{},{u_PickingBuffer:e.getLayerConfig().pickingBuffer||0,u_shaderPick:Number(e.getShaderPickStat())}))})})}generateUBO(e,n,r){const i=this.cameraService.getProjectionMatrix(),o=this.cameraService.getViewMatrix(),s=this.cameraService.getViewProjectionMatrix(),a=this.cameraService.getModelMatrix(),u=this.coordinateSystemService.getViewportCenterProjection(),l=this.coordinateSystemService.getPixelsPerDegree(),c=this.cameraService.getZoom(),h=this.coordinateSystemService.getPixelsPerDegree2(),f=this.cameraService.getZoomScale(),p=this.coordinateSystemService.getPixelsPerMeter(),_=this.coordinateSystemService.getCoordinateSystem(),v=this.cameraService.getCameraPosition(),m=window.devicePixelRatio,y=this.coordinateSystemService.getViewportCenter(),T=[e,n],S=this.cameraService.getFocalDistance(),x=r&&r.length>=2?[r[0],r[1]]:[0,0],C=[];return C.push(...o),C.push(...i),C.push(...s),C.push(...a),C.push(...u),C.push(...l),C.push(c),C.push(...h),C.push(f),C.push(...p),C.push(_),C.push(...v),C.push(m),C.push(...y),C.push(...T),C.push(S),C.push(0),C.push(...x),C.push(0),{data:C,uniforms:{[wn.ProjectionMatrix]:i,[wn.ViewMatrix]:o,[wn.ViewProjectionMatrix]:s,[wn.Zoom]:c,[wn.ZoomScale]:f,[wn.FocalDistance]:S,[wn.CameraPosition]:v,[tr.CoordinateSystem]:_,[tr.ViewportCenter]:y,[tr.ViewportCenterProjection]:u,[tr.PixelsPerDegree]:l,[tr.PixelsPerDegree2]:h,[tr.PixelsPerMeter]:p,u_ViewportSize:T,u_ModelMatrix:a,u_DevicePixelRatio:m,u_RelativeOrigin:x}}}}class dS{apply(e){e.hooks.beforeRender.tap("UpdateModelPlugin",()=>{e.layerModel&&e.layerModel.needUpdate().then(n=>{n&&e.renderLayers()})}),e.hooks.afterRender.tap("UpdateModelPlugin",()=>{e.layerModelNeedUpdate=!1})}}class pS{apply(e,{styleAttributeService:n}){e.hooks.init.tapPromise("UpdateStyleAttributePlugin",()=>{this.initStyleAttribute(e,{styleAttributeService:n})}),e.hooks.beforeRender.tap("UpdateStyleAttributePlugin",()=>{e.layerModelNeedUpdate||e.inited&&this.updateStyleAttribute(e,{styleAttributeService:n})})}updateStyleAttribute(e,{styleAttributeService:n}){const r=n.getLayerStyleAttributes()||[],i=n.getLayerStyleAttribute("filter");if(i&&i.needRegenerateVertices){e.layerModelNeedUpdate=!0,r.forEach(o=>o.needRegenerateVertices=!1);return}r.filter(o=>o.needRegenerateVertices).forEach(o=>{n.updateAttributeByFeatureRange(o.name,e.getEncodedData(),o.featureRange.startIndex,o.featureRange.endIndex,e),o.needRegenerateVertices=!1})}initStyleAttribute(e,{styleAttributeService:n}){(n.getLayerStyleAttributes()||[]).filter(i=>i.needRegenerateVertices).forEach(i=>{n.updateAttributeByFeatureRange(i.name,e.getEncodedData(),i.featureRange.startIndex,i.featureRange.endIndex),i.needRegenerateVertices=!1})}}function _S(){return[new DA,new hS,new YA,new NA,new QA,new KA,new pS,new dS,new oS,new fS,new GA,new iS,new uS,new qA]}const Ap={[yn.additive]:{enable:!0,func:{srcRGB:g.ONE,dstRGB:g.ONE,srcAlpha:1,dstAlpha:1}},[yn.none]:{enable:!1},[yn.normal]:{enable:!0,func:{srcRGB:g.SRC_ALPHA,dstRGB:g.ONE_MINUS_SRC_ALPHA,srcAlpha:1,dstAlpha:1}},[yn.subtractive]:{enable:!0,func:{srcRGB:g.ONE,dstRGB:g.ONE,srcAlpha:g.ZERO,dstAlpha:g.ONE_MINUS_SRC_COLOR},equation:{rgb:g.FUNC_SUBTRACT,alpha:g.FUNC_SUBTRACT}},[yn.max]:{enable:!0,func:{srcRGB:g.ONE,dstRGB:g.ONE},equation:{rgb:g.MAX_EXT}},[yn.min]:{enable:!0,func:{srcRGB:g.ONE,dstRGB:g.ONE},equation:{rgb:g.MIN_EXT}}};class vS{constructor(e){d(this,"layer",void 0),this.layer=e}pickRender(e){const r=this.layer.getContainer().layerService,i=this.layer;if(i.tileLayer)return i.tileLayer.pickRender(e);i.hooks.beforePickingEncode.call(),r.renderTileLayerMask(i),i.renderModels({ispick:!0}),i.hooks.afterPickingEncode.call()}pick(e,n){var r=this;return L(function*(){const o=r.layer.getContainer().pickingService;return e.type==="RasterLayer"?r.pickRasterLayer(e,n):(r.pickRender(n),o.pickFromPickingFBO(e,n))})()}pickRasterLayer(e,n,r){const i=this.layer.getContainer(),o=i.pickingService,s=i.mapService,a=this.layer.getOriginalExtent(),u=a[0]!==0||a[2]!==0?a:this.layer.getSource().extent,l=dv(n.lngLat,u),c={x:n.x,y:n.y,type:n.type,lngLat:n.lngLat,target:n,rasterValue:null},h=r||e;if(l){const f=this.readRasterValue(e,u,s,n.x,n.y);return c.rasterValue=f,o.triggerHoverOnLayer(h,c),!0}else return c.type=n.type==="mousemove"?"mouseout":"un"+n.type,o.triggerHoverOnLayer(h,D(D({},c),{},{type:"unpick"})),o.triggerHoverOnLayer(h,c),!1}readRasterValue(e,n,r,i,o){const s=e.getSource().data.dataArray[0],[a=0,u=0,l=10,c=-10]=n,h=r.lngLatToContainer([a,u]),f=r.lngLatToContainer([l,c]),p=f.x-h.x,_=h.y-f.y,v=[(i-h.x)/p,(o-f.y)/_],m=s.width||1,y=s.height||1,T=Math.floor(v[0]*m),S=Math.floor(v[1]*y),x=Math.max(0,S-1)*m+T;return s.data[x]}selectFeature(e){const n=this.layer,[r,i,o]=e;n.hooks.beforeSelect.call([r,i,o])}highlightPickedFeature(e){const[n,r,i]=e;this.layer.hooks.beforeHighlight.call([n,r,i])}getFeatureById(e){return this.layer.getSource().getFeatureById(e)}}class mS{constructor(e){d(this,"layer",void 0),d(this,"rendererService",void 0),d(this,"colorTexture",void 0),d(this,"key",void 0),this.layer=e;const n=this.layer.getContainer();this.rendererService=n.rendererService}getColorTexture(e,n){const r=this.getTextureKey(e,n);return this.key===r?this.colorTexture:(this.createColorTexture(e,n),this.key=r,this.colorTexture)}createColorTexture(e,n){const{createTexture2D:r}=this.rendererService,i=this.getColorRampBar(e,n),o=r({data:new Uint8Array(i.data),width:i.width,height:i.height,flipY:!1,unorm:!0});return this.colorTexture=o,o}setColorTexture(e,n,r){this.key=this.getTextureKey(n,r),this.colorTexture=e}destroy(){var e;(e=this.colorTexture)===null||e===void 0||e.destroy()}getColorRampBar(e,n){switch(e.type){case"cat":return F0(e);case"quantize":return B0(e);case"custom":return N0(e,n);case"linear":return P0(e,n);default:return pd(e)}}getTextureKey(e,n){var r;return`${e.colors.join("_")}_${e==null||(r=e.positions)===null||r===void 0?void 0:r.join("_")}_${e.type}_${n==null?void 0:n.join("_")}`}}const gS=["passes"],ES=["moduleName","vertexShader","fragmentShader","defines","inject","triangulation","styleOption","pickingEnabled"],{isEqual:Ys,isFunction:Eh,isNumber:yh,isObject:Ze,isPlainObject:yS,isUndefined:TS}=we;let Th=0;class Gn extends pt.EventEmitter{get shaderModuleService(){return this.container.shaderModuleService}get cameraService(){return this.container.cameraService}get coordinateService(){return this.container.coordinateSystemService}get iconService(){return this.container.iconService}get fontService(){return this.container.fontService}get pickingService(){return this.container.pickingService}get rendererService(){return this.container.rendererService}get layerService(){return this.container.layerService}get debugService(){return this.container.debugService}get interactionService(){return this.container.interactionService}get mapService(){var e;return(e=this.container)===null||e===void 0?void 0:e.mapService}get normalPassFactory(){return this.container.normalPassFactory}constructor(e={}){super(),d(this,"id",`${Th++}`),d(this,"name",`${Th}`),d(this,"parent",void 0),d(this,"coordCenter",void 0),d(this,"type",void 0),d(this,"visible",!0),d(this,"zIndex",0),d(this,"minZoom",void 0),d(this,"maxZoom",void 0),d(this,"inited",!1),d(this,"layerModelNeedUpdate",!1),d(this,"pickedFeatureID",null),d(this,"selectedFeatureID",null),d(this,"styleNeedUpdate",!1),d(this,"rendering",void 0),d(this,"forceRender",!1),d(this,"clusterZoom",0),d(this,"layerType",void 0),d(this,"triangulation",void 0),d(this,"layerPickService",void 0),d(this,"textureService",void 0),d(this,"defaultSourceConfig",{data:[],options:{parser:{type:"json"}}}),d(this,"dataState",{dataSourceNeedUpdate:!1,dataMappingNeedUpdate:!1,filterNeedUpdate:!1,featureScaleNeedUpdate:!1,StyleAttrNeedUpdate:!1}),d(this,"hooks",{init:new d0,afterInit:new hl,beforeRender:new hl,beforeRenderData:new p0,afterRender:new Vt,beforePickingEncode:new Vt,afterPickingEncode:new Vt,beforeHighlight:new Vt,afterHighlight:new Vt,beforeSelect:new Vt,afterSelect:new Vt,beforeDestroy:new Vt,afterDestroy:new Vt}),d(this,"models",[]),d(this,"multiPassRenderer",void 0),d(this,"plugins",void 0),d(this,"startInit",!1),d(this,"sourceOption",void 0),d(this,"layerModel",void 0),d(this,"shapeOption",void 0),d(this,"tileLayer",void 0),d(this,"layerChildren",[]),d(this,"masks",[]),d(this,"configService",sp),d(this,"styleAttributeService",void 0),d(this,"layerSource",void 0),d(this,"postProcessingPassFactory",void 0),d(this,"animateOptions",{enable:!1}),d(this,"relativeOrigin",[0,0]),d(this,"originalExtent",[0,0,0,0]),d(this,"absoluteDataArray",[]),d(this,"container",void 0),d(this,"encodedData",void 0),d(this,"currentPickId",null),d(this,"rawConfig",void 0),d(this,"needUpdateConfig",void 0),d(this,"encodeStyleAttribute",{}),d(this,"enableShaderEncodeStyles",[]),d(this,"enableDataEncodeStyles",[]),d(this,"pendingStyleAttributes",[]),d(this,"scaleOptions",{}),d(this,"animateStartTime",0),d(this,"animateStatus",!1),d(this,"isDestroyed",!1),d(this,"uniformBuffers",[]),d(this,"encodeDataLength",0),d(this,"sourceEvent",()=>{this.dataState.dataSourceNeedUpdate=!0,this.processRelativeCoordinates();const n=this.getLayerConfig();n&&n.autoFit&&this.fitBounds(n.fitBoundsOptions),this.layerSource.getSourceCfg().autoRender&&setTimeout(()=>{this.reRender()},10)}),this.name=e.name||this.id,this.zIndex=e.zIndex||0,this.rawConfig=e,this.masks=e.maskLayers||[]}addMask(e){this.masks.push(e),this.updateLayerConfig({maskLayers:this.masks}),this.enableMask()}removeMask(e){const n=this.masks.indexOf(e);n>-1&&this.masks.splice(n,1),this.updateLayerConfig({maskLayers:this.masks})}disableMask(){this.updateLayerConfig({enableMask:!1})}enableMask(){this.updateLayerConfig({enableMask:!0})}addMaskLayer(e){this.masks.push(e)}removeMaskLayer(e){const n=this.masks.indexOf(e);n>-1&&this.masks.splice(n,1),e.destroy()}getAttribute(e){return this.styleAttributeService.getLayerStyleAttribute(e)}getLayerConfig(){return this.configService.getLayerConfig(this.id)}updateLayerConfig(e){if(Object.keys(e).map(n=>{n in this.rawConfig&&(this.rawConfig[n]=e[n])}),!this.startInit)this.needUpdateConfig=D(D({},this.needUpdateConfig),e);else{const n=this.container.id;this.configService.setLayerConfig(n,this.id,D(D(D({},this.configService.getLayerConfig(this.id)),this.needUpdateConfig),e)),this.needUpdateConfig={}}}setContainer(e){this.container=e}getContainer(){return this.container}addPlugin(e){return this.plugins.push(e),this}init(){var e=this;return L(function*(){const n=e.container.id;e.startInit=!0,e.configService.setLayerConfig(n,e.id,e.rawConfig),e.layerType=e.rawConfig.layerType;const{enableMultiPassRenderer:r,passes:i}=e.getLayerConfig();r&&i!==null&&i!==void 0&&i.length&&i.length>0&&e.mapService.on("mapAfterFrameChange",()=>{e.renderLayers()}),e.postProcessingPassFactory=e.container.postProcessingPassFactory,e.styleAttributeService=e.container.styleAttributeService,r&&(e.multiPassRenderer=e.container.multiPassRenderer,e.multiPassRenderer.setLayer(e)),e.pendingStyleAttributes.forEach(({attributeName:o,attributeField:s,attributeValues:a,updateOptions:u})=>{e.styleAttributeService.updateStyleAttribute(o,{scale:D({field:s},e.splitValuesAndCallbackInAttribute(a,s?void 0:e.getLayerConfig()[o]))},u)}),e.pendingStyleAttributes=[],e.plugins=_S();for(const o of e.plugins)o.apply(e,e.container);e.layerPickService=new vS(e),e.textureService=new mS(e),e.log(He.LayerInitStart),yield e.hooks.init.promise(),e.log(He.LayerInitEnd),e.inited=!0,e.emit("inited",{target:e,type:"inited"}),e.emit("add",{target:e,type:"add"}),e.hooks.afterInit.call()})()}log(e,n="init"){var r;if(this.tileLayer||this.isTileLayer)return;const i=`${this.id}.${n}.${e}`,o={id:this.id,type:this.type};(r=this.debugService)===null||r===void 0||r.log(i,o)}updateModelData(e){e.attributes&&e.elements?this.models.map(n=>{n.updateAttributesAndElements(e.attributes,e.elements)}):console.warn("data error")}setLayerPickService(e){this.layerPickService=e}prepareBuildModel(){Object.keys(this.needUpdateConfig||{}).length!==0&&this.updateLayerConfig({});const{animateOption:e}=this.getLayerConfig();e!=null&&e.enable&&(this.layerService.startAnimate(),this.animateStatus=!0)}color(e,n,r){return this.updateStyleAttribute("color",e,n,r),this}texture(e,n,r){return this.updateStyleAttribute("texture",e,n,r),this}rotate(e,n,r){return this.updateStyleAttribute("rotate",e,n,r),this}size(e,n,r){return this.updateStyleAttribute("size",e,n,r),this}filter(e,n,r){const i=this.updateStyleAttribute("filter",e,n,r);return this.dataState.dataSourceNeedUpdate=i&&this.inited,this}shape(e,n,r){this.shapeOption={field:e,values:n};const i=this.updateStyleAttribute("shape",e,n,r);return this.dataState.dataSourceNeedUpdate=i&&this.inited,this}label(e,n,r){return this.pendingStyleAttributes.push({attributeName:"label",attributeField:e,attributeValues:n,updateOptions:r}),this}animate(e){let n={};return Ze(e)?(n.enable=!0,n=D(D({},n),e)):n.enable=e,this.updateLayerConfig({animateOption:n}),this}source(e,n){return(e==null?void 0:e.type)==="source"?(this.setSource(e),this):(this.sourceOption={data:e,options:n},this.clusterZoom=0,this)}setData(e,n){return this.inited?(this.dataUpdatelog(),this.layerSource.setData(e,n)):this.on("inited",()=>{this.dataUpdatelog(),this.layerSource.setData(e,n)}),this}dataUpdatelog(){this.log(He.SourceInitStart,Ke.UPDATE),this.layerSource.once("update",()=>{this.log(He.SourceInitEnd,Ke.UPDATE)})}style(e){const{passes:n}=e,r=Zt(e,gS);n&&yp(n).forEach(o=>{const s=this.multiPassRenderer.getPostProcessor().getPostProcessingPassByName(o[0]);s&&s.updateOptions(o[1])}),r.borderColor&&(r.stroke=r.borderColor),r.borderWidth&&(r.strokeWidth=r.borderWidth);const i=r;return Object.keys(r).forEach(o=>{const s=r[o];Array.isArray(s)&&s.length===2&&!yh(s[0])&&!yh(s[1])&&(i[o]={field:s[0],value:s[1]})}),this.encodeStyle(i),this.updateLayerConfig(i),this}encodeStyle(e){Object.keys(e).forEach(n=>{[...this.enableShaderEncodeStyles,...this.enableDataEncodeStyles].includes(n)&&yS(e[n])&&(e[n].field||e[n].value)&&!Ys(this.encodeStyleAttribute[n],e[n])?(this.encodeStyleAttribute[n]=e[n],this.updateStyleAttribute(n,e[n].field,e[n].value),this.inited&&(this.dataState.dataMappingNeedUpdate=!0)):this.encodeStyleAttribute[n]&&(delete this.encodeStyleAttribute[n],this.dataState.dataSourceNeedUpdate=!0)})}scale(e,n){const r=D({},this.scaleOptions);if(Ze(e)?this.scaleOptions=D(D({},this.scaleOptions),e):this.scaleOptions[e]=n,this.styleAttributeService&&!Ys(r,this.scaleOptions)){const i=Ze(e)?e:{[e]:n};this.styleAttributeService.updateScaleAttribute(i)}return this}renderLayers(){this.rendering=!0,this.layerService.reRender(),this.rendering=!1}prerender(){}render(e={}){return this.tileLayer?(this.tileLayer.render(),this):(this.layerService.beforeRenderData(this),this.encodeDataLength<=0&&!this.forceRender?this:(this.renderModels(e),this))}renderMultiPass(){var e=this;return L(function*(){e.encodeDataLength<=0&&!e.forceRender||(e.multiPassRenderer&&e.multiPassRenderer.getRenderFlag()?yield e.multiPassRenderer.render():e.renderModels())})()}active(e){const n={};return n.enableHighlight=Ze(e)?!0:e,Ze(e)?(n.enableHighlight=!0,e.color&&(n.highlightColor=e.color),e.mix&&(n.activeMix=e.mix)):n.enableHighlight=!!e,this.updateLayerConfig(n),this}setActive(e,n){if(Ze(e)){const{x:r=0,y:i=0}=e;this.updateLayerConfig({highlightColor:Ze(n)?n.color:this.getLayerConfig().highlightColor,activeMix:Ze(n)?n.mix:this.getLayerConfig().activeMix}),this.pick({x:r,y:i})}else this.updateLayerConfig({pickedFeatureID:e,highlightColor:Ze(n)?n.color:this.getLayerConfig().highlightColor,activeMix:Ze(n)?n.mix:this.getLayerConfig().activeMix}),this.hooks.beforeHighlight.call(xr(e)).then(()=>{setTimeout(()=>{this.reRender()},1)})}select(e){const n={};return n.enableSelect=Ze(e)?!0:e,Ze(e)?(n.enableSelect=!0,e.color&&(n.selectColor=e.color),e.mix&&(n.selectMix=e.mix)):n.enableSelect=!!e,this.updateLayerConfig(n),this}setSelect(e,n){if(Ze(e)){const{x:r=0,y:i=0}=e;this.updateLayerConfig({selectColor:Ze(n)?n.color:this.getLayerConfig().selectColor,selectMix:Ze(n)?n.mix:this.getLayerConfig().selectMix}),this.pick({x:r,y:i})}else this.updateLayerConfig({pickedFeatureID:e,selectColor:Ze(n)?n.color:this.getLayerConfig().selectColor,selectMix:Ze(n)?n.mix:this.getLayerConfig().selectMix}),this.hooks.beforeSelect.call(xr(e)).then(()=>{setTimeout(()=>{this.reRender()},1)})}setBlend(e){return this.updateLayerConfig({blend:e}),this.reRender(),this}show(){return this.updateLayerConfig({visible:!0}),this.reRender(),this.emit("show"),this}hide(){return this.updateLayerConfig({visible:!1}),this.reRender(),this.emit("hide"),this}setIndex(e){return this.zIndex=e,this.layerService.updateLayerRenderList(),this.layerService.renderLayers(),this}setCurrentPickId(e){this.currentPickId=e}getCurrentPickId(){return this.currentPickId}setCurrentSelectedId(e){this.selectedFeatureID=e}getCurrentSelectedId(){return this.selectedFeatureID}isVisible(){const e=this.mapService.getZoom(),{visible:n,minZoom:r=-1/0,maxZoom:i=1/0}=this.getLayerConfig();return!!n&&e>=r&&e<i}setMultiPass(e,n){if(this.updateLayerConfig({enableMultiPassRenderer:e}),n&&this.updateLayerConfig({passes:n}),e){const{passes:r=[]}=this.getLayerConfig();this.multiPassRenderer=Tp(this,r,this.postProcessingPassFactory,this.normalPassFactory),this.multiPassRenderer.setRenderFlag(!0);const{width:i,height:o}=this.rendererService.getViewportSize();this.multiPassRenderer.resize(i,o)}return this}setMinZoom(e){return this.updateLayerConfig({minZoom:e}),this}getMinZoom(){const{minZoom:e}=this.getLayerConfig();return e}getMaxZoom(){const{maxZoom:e}=this.getLayerConfig();return e}get(e){return this.getLayerConfig()[e]}setMaxZoom(e){return this.updateLayerConfig({maxZoom:e}),this}setAutoFit(e){return this.updateLayerConfig({autoFit:e}),this}fitBounds(e){if(!this.inited)return this.updateLayerConfig({autoFit:!0}),this;const r=this.getSource().extent;return r.some(o=>Math.abs(o)===1/0)?this:(this.mapService.fitBounds([[r[0],r[1]],[r[2],r[3]]],e),this)}destroy(e=!0){var n,r,i,o,s;if(this.isDestroyed)return;(n=this.layerModel)===null||n===void 0||n.uniformBuffers.forEach(u=>{u.destroy()}),this.layerChildren.map(u=>u.destroy(!1)),this.layerChildren=[];const{maskfence:a}=this.getLayerConfig();a&&(this.masks.map(u=>u.destroy(!1)),this.masks=[]),this.hooks.beforeDestroy.call(),this.layerSource.off("update",this.sourceEvent),(r=this.multiPassRenderer)===null||r===void 0||r.destroy(),this.textureService.destroy(),this.styleAttributeService.clearAllAttributes(),this.hooks.afterDestroy.call(),(i=this.layerModel)===null||i===void 0||i.clearModels(e),(o=this.tileLayer)===null||o===void 0||o.destroy(),this.models=[],(s=this.debugService)===null||s===void 0||s.removeLog(this.id),this.emit("remove",{target:this,type:"remove"}),this.emit("destroy",{target:this,type:"destroy"}),this.removeAllListeners(),this.isDestroyed=!0}clear(){this.styleAttributeService.clearAllAttributes()}clearModels(){var e;this.models.forEach(n=>n.destroy()),(e=this.layerModel)===null||e===void 0||e.clearModels(),this.models=[]}isDirty(){return!!(this.styleAttributeService.getLayerStyleAttributes()||[]).filter(e=>e.needRescale||e.needRemapping||e.needRegenerateVertices).length}setSource(e){if(this.layerSource&&this.layerSource.off("update",this.sourceEvent),this.layerSource=e,this.clusterZoom=0,this.inited&&this.layerSource.cluster){const n=this.mapService.getZoom();this.layerSource.updateClusterData(n)}this.layerSource.inited&&this.sourceEvent(),this.layerSource.on("update",({type:n})=>{if(this.coordCenter===void 0){const r=this.layerSource.center;this.coordCenter=r}if(n==="update"){if(this.tileLayer){this.tileLayer.reload();return}this.sourceEvent()}n==="inited"&&this.processRelativeCoordinates()})}getSource(){return this.layerSource}getScaleOptions(){return this.scaleOptions}setEncodedData(e){this.encodedData=e,this.encodeDataLength=e.length}getEncodedData(){return this.encodedData}getScale(e){return this.styleAttributeService.getLayerAttributeScale(e)}getLegend(e){var n,r,i;const o=this.styleAttributeService.getLayerStyleAttribute(e),s=(o==null||(n=o.scale)===null||n===void 0?void 0:n.scalers)||[];return{type:(r=s[0])===null||r===void 0||(r=r.option)===null||r===void 0?void 0:r.type,field:(i=s[0])===null||i===void 0?void 0:i.field,items:this.getLegendItems(e)}}getLegendItems(e){const n=this.styleAttributeService.getLayerAttributeScale(e);return n?n.invertExtent?n.range().map(i=>({value:n.invertExtent(i),[e]:i})):n.ticks?n.ticks().map(i=>({value:i,[e]:n(i)})):n!=null&&n.domain?n.domain().filter(i=>!TS(i)).map(i=>({value:i,[e]:n(i)})):[]:[]}pick({x:e,y:n}){this.interactionService.triggerHover({x:e,y:n})}boxSelect(e,n){this.pickingService.boxPickLayer(this,e,n)}buildLayerModel(e){var n=this;return L(function*(){const{moduleName:r,vertexShader:i,fragmentShader:o,defines:s,inject:a,triangulation:u,styleOption:l,pickingEnabled:c=!0}=e,h=Zt(e,ES);n.shaderModuleService.registerModule(r,{vs:i,fs:o,defines:s,inject:a});const{vs:f,fs:p,uniforms:_}=n.shaderModuleService.getModule(r),{createModel:v}=n.rendererService;return new Promise(m=>{const{attributes:y,elements:T,count:S}=n.styleAttributeService.createAttributesAndIndices(n.encodedData,u,l,n),x=[...n.layerModel.uniformBuffers,...n.rendererService.uniformBuffers];c&&x.push(n.getPickingUniformBuffer());const C=D({attributes:y,uniforms:_,fs:p,vs:f,elements:T,blend:Ap[yn.normal],uniformBuffers:x,textures:n.layerModel.textures},h);S&&(C.count=S);const M=v(C);m(M)})})()}createAttributes(e){const{triangulation:n}=e,{attributes:r}=this.styleAttributeService.createAttributes(this.encodedData,n);return r}getTime(){return this.layerService.clock.getDelta()}setAnimateStartTime(){this.animateStartTime=this.layerService.clock.getElapsedTime()}stopAnimate(){this.animateStatus&&(this.layerService.stopAnimate(),this.animateStatus=!1,this.updateLayerConfig({animateOption:{enable:!1}}))}getLayerAnimateTime(){return this.layerService.clock.getElapsedTime()-this.animateStartTime}needPick(e){const{enableHighlight:n=!0,enableSelect:r=!0}=this.getLayerConfig();let i=this.eventNames().indexOf(e)!==-1||this.eventNames().indexOf("un"+e)!==-1;return(e==="click"||e==="dblclick")&&r&&(i=!0),e==="mousemove"&&(n||this.eventNames().indexOf("mouseenter")!==-1||this.eventNames().indexOf("unmousemove")!==-1||this.eventNames().indexOf("mouseout")!==-1)&&(i=!0),this.isVisible()&&i}buildModels(){return L(function*(){throw new Error("Method not implemented.")})()}rebuildModels(){var e=this;return L(function*(){yield e.buildModels()})()}renderMulPass(e){return L(function*(){yield e.render()})()}renderModels(e={}){return this.encodeDataLength<=0&&!this.forceRender?(this.clearModels(),this):(this.hooks.beforeRender.call(),this.models.forEach(n=>{n.draw({uniforms:this.layerModel.getUninforms(),blend:this.layerModel.getBlend(),stencil:this.layerModel.getStencil(e),textures:this.layerModel.textures},(e==null?void 0:e.ispick)||!1)}),this.hooks.afterRender.call(),this)}updateStyleAttribute(e,n,r,i){const o=this.configService.getAttributeConfig(this.id)||{};return Ys(o[e],{field:n,values:r})?!1:(["color","size","texture","rotate","filter","label","shape"].indexOf(e)!==-1&&this.configService.setAttributeConfig(this.id,{[e]:{field:n,values:r}}),this.startInit?this.styleAttributeService.updateStyleAttribute(e,{scale:D({field:n},this.splitValuesAndCallbackInAttribute(r,this.getLayerConfig()[n]))},i):this.pendingStyleAttributes.push({attributeName:e,attributeField:n,attributeValues:r,updateOptions:i}),!0)}getLayerAttributeConfig(){return this.configService.getAttributeConfig(this.id)}getShaderPickStat(){return this.layerService.getShaderPickStat()}setEarthTime(e){console.warn("empty fn")}processData(e){return e}getModelType(){throw new Error("Method not implemented.")}getDefaultConfig(){return{}}processRelativeCoordinates(){const e=this.getLayerConfig();if(!(e==null?void 0:e.enableRelativeCoordinates)||!this.layerSource||!this.layerSource.data)return;this.absoluteDataArray=[...this.layerSource.data.dataArray];const r=MA(this.layerSource.data.dataArray,{enableRelativeCoordinates:!0});this.layerSource.data.dataArray=r.dataArray,this.relativeOrigin=r.relativeOrigin,this.originalExtent=r.originalExtent}getAbsoluteData(){return this.absoluteDataArray}getRelativeOrigin(){return this.relativeOrigin}getOriginalExtent(){return this.originalExtent}initLayerModels(){var e=this;return L(function*(){e.models.forEach(r=>r.destroy()),e.models=[],e.uniformBuffers.forEach(r=>{r.destroy()}),e.uniformBuffers=[];const n=e.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0,label:"pickingUniforms"});e.uniformBuffers.push(n),e.models=yield e.layerModel.initModels()})()}getPickingUniformBuffer(){return this.uniformBuffers[0]}reRender(){this.inited&&this.layerService.reRender()}splitValuesAndCallbackInAttribute(e){return{values:Eh(e)?void 0:e,callback:Eh(e)?e:void 0}}}function AS(t,e){return{enable:t,mask:255,func:{cmp:g.EQUAL,ref:e?1:0,mask:1}}}function Ah(t){return t.maskOperation===ps.OR?{enable:!0,mask:255,func:{cmp:g.ALWAYS,ref:1,mask:255},opFront:{fail:g.KEEP,zfail:g.REPLACE,zpass:g.REPLACE}}:{enable:!0,mask:255,func:{cmp:t.stencilType===Un.SINGLE||t.stencilIndex===0?g.ALWAYS:g.LESS,ref:t.stencilType===Un.SINGLE?1:t.stencilIndex===0?2:1,mask:255},opFront:{fail:g.KEEP,zfail:g.REPLACE,zpass:g.REPLACE}}}const SS={opacity:1,stroke:[1,0,0,1],offsets:[0,0],rotation:0,extrusionBase:0,strokeOpacity:1,thetaOffset:.314,anchor:0},Qi={opacity:"float",stroke:"vec4",offsets:"vec2",textOffset:"vec2",rotation:"float",extrusionBase:"float",strokeOpacity:"float",thetaOffset:"float",anchor:"float"};var bu={exports:{}};bu.exports=ms;bu.exports.default=ms;function ms(t,e,n){n=n||2;var r=e&&e.length,i=r?e[0]*n:t.length,o=Sp(t,0,i,n,!0),s=[];if(!o||o.next===o.prev)return s;var a,u,l,c,h,f,p;if(r&&(o=IS(t,e,o,n)),t.length>80*n){a=l=t[0],u=c=t[1];for(var _=n;_<i;_+=n)h=t[_],f=t[_+1],h<a&&(a=h),f<u&&(u=f),h>l&&(l=h),f>c&&(c=f);p=Math.max(l-a,c-u),p=p!==0?32767/p:0}return Ci(o,s,n,a,u,p,0),s}function Sp(t,e,n,r,i){var o,s;if(i===Ua(t,e,n,r)>0)for(o=e;o<n;o+=r)s=Sh(o,t[o],t[o+1],s);else for(o=n-r;o>=e;o-=r)s=Sh(o,t[o],t[o+1],s);return s&&gs(s,s.next)&&(Ii(s),s=s.next),s}function jn(t,e){if(!t)return t;e||(e=t);var n=t,r;do if(r=!1,!n.steiner&&(gs(n,n.next)||Ne(n.prev,n,n.next)===0)){if(Ii(n),n=e=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==e);return e}function Ci(t,e,n,r,i,o,s){if(t){!s&&o&&BS(t,r,i,o);for(var a=t,u,l;t.prev!==t.next;){if(u=t.prev,l=t.next,o?xS(t,r,i,o):RS(t)){e.push(u.i/n|0),e.push(t.i/n|0),e.push(l.i/n|0),Ii(t),t=l.next,a=l.next;continue}if(t=l,t===a){s?s===1?(t=CS(jn(t),e,n),Ci(t,e,n,r,i,o,2)):s===2&&bS(t,e,n,r,i,o):Ci(jn(t),e,n,r,i,o,1);break}}}}function RS(t){var e=t.prev,n=t,r=t.next;if(Ne(e,n,r)>=0)return!1;for(var i=e.x,o=n.x,s=r.x,a=e.y,u=n.y,l=r.y,c=i<o?i<s?i:s:o<s?o:s,h=a<u?a<l?a:l:u<l?u:l,f=i>o?i>s?i:s:o>s?o:s,p=a>u?a>l?a:l:u>l?u:l,_=r.next;_!==e;){if(_.x>=c&&_.x<=f&&_.y>=h&&_.y<=p&&fr(i,a,o,u,s,l,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xS(t,e,n,r){var i=t.prev,o=t,s=t.next;if(Ne(i,o,s)>=0)return!1;for(var a=i.x,u=o.x,l=s.x,c=i.y,h=o.y,f=s.y,p=a<u?a<l?a:l:u<l?u:l,_=c<h?c<f?c:f:h<f?h:f,v=a>u?a>l?a:l:u>l?u:l,m=c>h?c>f?c:f:h>f?h:f,y=wa(p,_,e,n,r),T=wa(v,m,e,n,r),S=t.prevZ,x=t.nextZ;S&&S.z>=y&&x&&x.z<=T;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=m&&S!==i&&S!==s&&fr(a,c,u,h,l,f,S.x,S.y)&&Ne(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==i&&x!==s&&fr(a,c,u,h,l,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=y;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=m&&S!==i&&S!==s&&fr(a,c,u,h,l,f,S.x,S.y)&&Ne(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==i&&x!==s&&fr(a,c,u,h,l,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function CS(t,e,n){var r=t;do{var i=r.prev,o=r.next.next;!gs(i,o)&&Rp(i,r,r.next,o)&&bi(i,o)&&bi(o,i)&&(e.push(i.i/n|0),e.push(r.i/n|0),e.push(o.i/n|0),Ii(r),Ii(r.next),r=t=o),r=r.next}while(r!==t);return jn(r)}function bS(t,e,n,r,i,o){var s=t;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&wS(s,a)){var u=xp(s,a);s=jn(s,s.next),u=jn(u,u.next),Ci(s,e,n,r,i,o,0),Ci(u,e,n,r,i,o,0);return}a=a.next}s=s.next}while(s!==t)}function IS(t,e,n,r){var i=[],o,s,a,u,l;for(o=0,s=e.length;o<s;o++)a=e[o]*r,u=o<s-1?e[o+1]*r:t.length,l=Sp(t,a,u,r,!1),l===l.next&&(l.steiner=!0),i.push(DS(l));for(i.sort(MS),o=0;o<i.length;o++)n=OS(i[o],n);return n}function MS(t,e){return t.x-e.x}function OS(t,e){var n=PS(t,e);if(!n)return e;var r=xp(n,t);return jn(r,r.next),jn(n,n.next)}function PS(t,e){var n=e,r=t.x,i=t.y,o=-1/0,s;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var a=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=r&&a>o&&(o=a,s=n.x<n.next.x?n:n.next,a===r))return s}n=n.next}while(n!==e);if(!s)return null;var u=s,l=s.x,c=s.y,h=1/0,f;n=s;do r>=n.x&&n.x>=l&&r!==n.x&&fr(i<c?r:o,i,l,c,i<c?o:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),bi(n,t)&&(f<h||f===h&&(n.x>s.x||n.x===s.x&&FS(s,n)))&&(s=n,h=f)),n=n.next;while(n!==u);return s}function FS(t,e){return Ne(t.prev,t,e.prev)<0&&Ne(e.next,t,t.next)<0}function BS(t,e,n,r){var i=t;do i.z===0&&(i.z=wa(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,NS(i)}function NS(t){var e,n,r,i,o,s,a,u,l=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,r=n,a=0,e=0;e<l&&(a++,r=r.nextZ,!!r);e++);for(u=l;a>0||u>0&&r;)a!==0&&(u===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;n=r}o.nextZ=null,l*=2}while(s>1);return t}function wa(t,e,n,r,i){return t=(t-n)*i|0,e=(e-r)*i|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function DS(t){var e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function fr(t,e,n,r,i,o,s,a){return(i-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(r-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(i-s)*(r-a)}function wS(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!LS(t,e)&&(bi(t,e)&&bi(e,t)&&US(t,e)&&(Ne(t.prev,t,e.prev)||Ne(t,e.prev,e))||gs(t,e)&&Ne(t.prev,t,t.next)>0&&Ne(e.prev,e,e.next)>0)}function Ne(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function gs(t,e){return t.x===e.x&&t.y===e.y}function Rp(t,e,n,r){var i=eo(Ne(t,e,n)),o=eo(Ne(t,e,r)),s=eo(Ne(n,r,t)),a=eo(Ne(n,r,e));return!!(i!==o&&s!==a||i===0&&Ji(t,n,e)||o===0&&Ji(t,r,e)||s===0&&Ji(n,t,r)||a===0&&Ji(n,e,r))}function Ji(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function eo(t){return t>0?1:t<0?-1:0}function LS(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Rp(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function bi(t,e){return Ne(t.prev,t,t.next)<0?Ne(t,e,t.next)>=0&&Ne(t,t.prev,e)>=0:Ne(t,e,t.prev)<0||Ne(t,t.next,e)<0}function US(t,e){var n=t,r=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}function xp(t,e){var n=new La(t.i,t.x,t.y),r=new La(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function Sh(t,e,n,r){var i=new La(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ii(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function La(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ms.deviation=function(t,e,n,r){var i=e&&e.length,o=i?e[0]*n:t.length,s=Math.abs(Ua(t,0,o,n));if(i)for(var a=0,u=e.length;a<u;a++){var l=e[a]*n,c=a<u-1?e[a+1]*n:t.length;s-=Math.abs(Ua(t,l,c,n))}var h=0;for(a=0;a<r.length;a+=3){var f=r[a]*n,p=r[a+1]*n,_=r[a+2]*n;h+=Math.abs((t[f]-t[_])*(t[p+1]-t[f+1])-(t[f]-t[p])*(t[_+1]-t[f+1]))}return s===0&&h===0?0:Math.abs((h-s)/s)};function Ua(t,e,n,r){for(var i=0,o=e,s=n-r;o<n;o+=r)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}ms.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[i][o][s]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n};var kS=bu.exports;const hn=Yt(kS);function Rh(t){return Math.max(Math.ceil(t/4)*4,4)}function Cp(t,e,n,r=!0){const i=n===3;if(r){t=t.slice();const s=[];for(let a=0;a<t.length;a+=n){s[0]=t[a],s[1]=t[a+1],i&&(s[2]=t[a+2]);const u=xo(s,!0,{enable:!1,decimal:1});t[a]=u[0],t[a+1]=u[1],i&&(t[a+2]=u[2])}}return hn(t,e,n)}function zS(t){if(typeof t=="number")return t;switch(t){case"center":return 0;case"top":return 1;case"top-right":return 2;case"right":return 3;case"bottom-right":return 4;case"bottom":return 5;case"bottom-left":return 6;case"left":return 7;case"top-left":return 8;case"bottom-center":return 9;default:return 0}}const bp="ATTRIBUTE_LOCATION_";class Ae{get attributeLocation(){return D({},an)}constructor(e){d(this,"triangulation",void 0),d(this,"uniformBuffers",[]),d(this,"textures",[]),d(this,"createTexture2D",void 0),d(this,"preStyleAttribute",{}),d(this,"encodeStyleAttribute",{}),d(this,"layer",void 0),d(this,"dataTexture",void 0),d(this,"DATA_TEXTURE_WIDTH",void 0),d(this,"dataTextureTest",void 0),d(this,"configService",void 0),d(this,"shaderModuleService",void 0),d(this,"rendererService",void 0),d(this,"iconService",void 0),d(this,"fontService",void 0),d(this,"styleAttributeService",void 0),d(this,"mapService",void 0),d(this,"cameraService",void 0),d(this,"layerService",void 0),d(this,"pickingService",void 0),d(this,"attributeUnifoms",void 0),d(this,"commonUnifoms",void 0),this.layer=e,this.configService=e.getContainer().globalConfigService,this.rendererService=e.getContainer().rendererService,this.pickingService=e.getContainer().pickingService,this.shaderModuleService=e.getContainer().shaderModuleService,this.styleAttributeService=e.getContainer().styleAttributeService,this.mapService=e.getContainer().mapService,this.iconService=e.getContainer().iconService,this.fontService=e.getContainer().fontService,this.cameraService=e.getContainer().cameraService,this.layerService=e.getContainer().layerService,this.registerStyleAttribute(),this.registerBuiltinAttributes(),this.startModelAnimate();const{createTexture2D:n}=this.rendererService;this.createTexture2D=n}getBlend(){const{blend:e="normal"}=this.layer.getLayerConfig();return Ap[yn[e]]}getStencil(e){const{mask:n=!1,maskInside:r=!0,enableMask:i,maskOperation:o=ps.AND}=this.layer.getLayerConfig();if(this.layer.type==="MaskLayer")return Ah({stencilType:Un.SINGLE});if(e.isStencil)return Ah(D(D({},e),{},{maskOperation:o}));const s=n||i&&this.layer.masks.length!==0||this.layer.tileMask!==void 0;return AS(s,r)}getDefaultStyle(){return{}}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());this.updateStyleUnifoms();const r=D(D({},n.uniformsOption),e.uniformsOption);return Object.keys(r).forEach(i=>{typeof r[i]=="boolean"&&(r[i]=r[i]?1:0)}),!this.rendererService.hasOwnProperty("device")&&this.textures&&this.textures.length===1&&(r.u_texture=this.textures[0]),r}getAnimateUniforms(){return{}}needUpdate(){return L(function*(){return!1})()}buildModels(){return L(function*(){throw new Error("Method not implemented.")})()}initModels(){return L(function*(){throw new Error("Method not implemented.")})()}clearModels(e=!0){}getAttribute(){throw new Error("Method not implemented.")}prerender(){}render(e){throw new Error("Method not implemented.")}registerBuiltinAttributes(){throw new Error("Method not implemented.")}animateOption2Array(e){return[e.enable?0:1,e.duration||4,e.interval||.2,e.trailLength||.1]}startModelAnimate(){const{animateOption:e}=this.layer.getLayerConfig();e.enable&&this.layer.setAnimateStartTime()}getInject(){return VS(this.layer.enableShaderEncodeStyles,this.layer.encodeStyleAttribute)}getDefines(){const e=Object.keys(this.attributeLocation).reduce((n,r)=>{const i=bp+r;return n[i]=this.attributeLocation[r],n},{});return D({},e)}getStyleAttribute(){const e={};return this.layer.enableShaderEncodeStyles.forEach(n=>{if(!this.layer.encodeStyleAttribute[n]){const r=this.layer.getLayerConfig()[n];let i=typeof r>"u"?SS[n]:r;n==="stroke"&&(i=Te(i)),n==="anchor"&&(i=zS(i)),e["u_"+n]=i}}),e}registerStyleAttribute(){Object.keys(this.layer.encodeStyleAttribute).forEach(e=>{const n=sS(e);n&&this.styleAttributeService.registerStyleAttribute(n)})}registerPosition64LowAttribute(e=!0){this.styleAttributeService.registerStyleAttribute({name:"position64Low",type:$.Attribute,descriptor:{name:"a_Position64Low",shaderLocation:this.attributeLocation.POSITION_64LOW,buffer:{data:[],type:g.FLOAT},size:2,update:(n,r,i)=>e?[ke(i[0]),ke(i[1])]:[0,0]}})}updateEncodeAttribute(e,n){this.encodeStyleAttribute[e]=n}initUniformsBuffer(){const e=this.getUniformsBufferInfo(this.getStyleAttribute()),n=this.getCommonUniformsInfo();e.uniformsLength!==0&&(this.attributeUnifoms=this.rendererService.createBuffer({data:new Float32Array(Rh(e.uniformsLength)).fill(0),isUBO:!0,label:"layerModelAttributeUnifoms"}),this.uniformBuffers.push(this.attributeUnifoms)),n.uniformsLength!==0&&(this.commonUnifoms=this.rendererService.createBuffer({data:new Float32Array(Rh(n.uniformsLength)).fill(0),isUBO:!0,label:"layerModelCommonUnifoms"}),this.uniformBuffers.push(this.commonUnifoms))}getUniformsBufferInfo(e){let n=0;const r=[];return Object.values(e).forEach(i=>{Array.isArray(i)?(r.push(...i),n+=i.length):typeof i=="number"?(r.push(i),n+=1):typeof i=="boolean"&&(r.push(Number(i)),n+=1)}),{uniformsOption:e,uniformsLength:n,uniformsArray:r}}getCommonUniformsInfo(){return{uniformsLength:0,uniformsArray:[],uniformsOption:{}}}updateStyleUnifoms(){var e,n;const{uniformsArray:r}=this.getUniformsBufferInfo(this.getStyleAttribute()),{uniformsArray:i}=this.getCommonUniformsInfo();(e=this.attributeUnifoms)===null||e===void 0||e.subData({offset:0,data:new Uint8Array(new Float32Array(r).buffer)}),(n=this.commonUnifoms)===null||n===void 0||n.subData({offset:0,data:new Uint8Array(new Float32Array(i).buffer)})}}function VS(t,e){const n=[];let r="";t.forEach(s=>{const a=s.replace(/([a-z])([A-Z])/g,"$1_$2").toUpperCase(),u=bp+a;e[s]?r+=`#define USE_ATTRIBUTE_${a} 0.0 
`:n.push(`  ${Qi[s]} u_${s};`),r+=`
#ifdef USE_ATTRIBUTE_${a}
layout(location = ${u}) in ${Qi[s]} a_${s.charAt(0).toUpperCase()+s.slice(1)};
#endif 
`});const i=n.length?`
layout(std140) uniform AttributeUniforms {
  ${n.join(`
`)}
};
`:"";r+=i;let o="";return t.forEach(s=>{const a=s.replace(/([a-z])([A-Z])/g,"$1_$2").toUpperCase();o+=`
  #ifdef USE_ATTRIBUTE_${a}
    ${Qi[s]} ${s} = a_${s.charAt(0).toUpperCase()+s.slice(1)};
  #else
    ${Qi[s]} ${s} = u_${s};
  #endif
  `}),{"vs:#decl":r,"fs:#decl":i,"vs:#main-start":o}}let xh=function(t){return t.VERTICAL="vertical",t.HORIZONTAL="horizontal",t}({}),HS=function(t){return t.NORMAL="normal",t.REPLACE="replace",t}({}),Iu=function(t){return t[t.pixel=0]="pixel",t[t.meter=1]="meter",t}({});const Ip=100;function Ch(t){return t/180*Math.acos(-1)}function Mp(t){const e=Ch(t[0])+Math.PI/2,n=Ch(t[1]),r=Ip+Math.random()*.4,i=r*Math.cos(n)*Math.cos(e),o=r*Math.cos(n)*Math.sin(e),s=r*Math.sin(n);return[o,s,i]}const bh=ct();ct();const yt=ct(),$r=ct(),to=ct();function Ih(t,e,n,r,i){An(t,n,r),Zo(t,t),e=Pa(-t[1],t[0]);const o=Pa(-n[1],n[0]);return[i/Ba(e,o),e]}function Zr(t,e){return g1(t,-e[1],e[0])}function no(t,e,n){return ip(t,e,n),Zo(t,t),t}function Mh(t,e){return t[0]===e[0]&&t[1]===e[1]}class XS{constructor(e={}){d(this,"complex",void 0),d(this,"join",void 0),d(this,"cap",void 0),d(this,"miterLimit",void 0),d(this,"thickness",void 0),d(this,"normal",void 0),d(this,"lastFlip",-1),d(this,"miter",Pa(0,0)),d(this,"started",!1),d(this,"dash",!1),d(this,"totalDistance",0),d(this,"currentIndex",0),this.join=e.join||"miter",this.cap=e.cap||"butt",this.miterLimit=e.miterLimit||10,this.thickness=e.thickness||1,this.dash=e.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}simpleExtrude(e){const n=this.complex;if(e.length<=1)return n;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;const r=e.length;let i=n.startIndex;for(let o=1;o<r;o++){const s=e[o-1],a=e[o],u=o<e.length-1?e[o+1]:null,l=this.simpleSegment(n,i,s,a,u);i+=l}if(this.dash)for(let o=0;o<n.positions.length/6;o++)n.positions[o*6+5]=this.totalDistance;return n.startIndex=n.positions.length/6,n}extrude(e){const n=this.complex;if(e.length<=1)return n;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;const r=e.length;let i=n.startIndex;for(let o=1;o<r;o++){const s=e[o-1],a=e[o],u=o<e.length-1?e[o+1]:null,l=this.segment(n,i,s,a,u);i+=l}if(this.dash)for(let o=0;o<n.positions.length/6;o++)n.positions[o*6+5]=this.totalDistance;return n.startIndex=n.positions.length/6,n}simpleSegment(e,n,r,i,o){let s=0;const a=e.indices,u=e.positions,l=e.normals,c=Rt([i[0],i[1]]),h=Rt([r[0],r[1]]);no(yt,c,h);let f=0;if(this.dash&&(f=this.lineSegmentDistance(c,h),this.totalDistance+=f),this.normal||(this.normal=ct(),Zr(this.normal,yt)),this.started||(this.started=!0,this.extrusions(u,l,r,this.normal,this.thickness,this.totalDistance-f)),a.push(n+0,n+1,n+2),!o)Zr(this.normal,yt),this.extrusions(u,l,i,this.normal,this.thickness,this.totalDistance),a.push(...this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3]),s+=2;else{const p=Rt([o[0],o[1]]);Mh(c,p)&&An(p,c,Zo(p,Fa(p,c,h))),no($r,p,c);const[_,v]=Ih(to,ct(),yt,$r,this.thickness);let m=Ba(to,this.normal)<0?-1:1;this.extrusions(u,l,i,v,_,this.totalDistance),a.push(...this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3]),m=-1,Xs(this.normal,v),s+=2,this.lastFlip=m}return s}segment(e,n,r,i,o){let s=0;const a=e.indices,u=e.positions,l=e.normals,c=this.cap==="square",h=this.join==="bevel",f=Rt([i[0],i[1]]),p=Rt([r[0],r[1]]);no(yt,f,p);let _=0;if(this.dash&&(_=this.lineSegmentDistance(f,p),this.totalDistance+=_),this.normal||(this.normal=ct(),Zr(this.normal,yt)),!this.started)if(this.started=!0,c){const v=ct(),m=ct();An(v,this.normal,yt),An(m,this.normal,yt),l.push(m[0],m[1],0),l.push(v[0],v[1],0),u.push(r[0],r[1],r[2]|0,this.totalDistance-_,-this.thickness,r[2]|0),this.complex.indexes.push(this.currentIndex),u.push(r[0],r[1],r[2]|0,this.totalDistance-_,this.thickness,r[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(u,l,r,this.normal,this.thickness,this.totalDistance-_);if(a.push(n+0,n+1,n+2),o){const v=Rt([o[0],o[1]]);Mh(f,v)&&An(v,f,Zo(v,Fa(v,f,p))),no($r,v,f);const[m,y]=Ih(to,ct(),yt,$r,this.thickness);let T=Ba(to,this.normal)<0?-1:1,S=h;!S&&this.join==="miter"&&m>this.miterLimit&&(S=!0),S?(l.push(this.normal[0],this.normal[1],0),l.push(y[0],y[1],0),u.push(i[0],i[1],i[2]|0,this.totalDistance,-this.thickness*T,i[2]|0),this.complex.indexes.push(this.currentIndex),u.push(i[0],i[1],i[2]|0,this.totalDistance,this.thickness*T,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,a.push(...this.lastFlip!==-T?[n,n+2,n+3]:[n+2,n+1,n+3]),a.push(n+2,n+3,n+4),Zr(bh,$r),Xs(this.normal,bh),l.push(this.normal[0],this.normal[1],0),u.push(i[0],i[1],i[2]|0,this.totalDistance,-this.thickness*T,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s+=3):(this.extrusions(u,l,i,y,m,this.totalDistance),a.push(...this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3]),T=-1,Xs(this.normal,y),s+=2),this.lastFlip=T}else{if(Zr(this.normal,yt),c){const v=ct(),m=ct();ip(m,yt,this.normal),An(v,yt,this.normal),l.push(m[0],m[1],0),l.push(v[0],v[1],0),u.push(i[0],i[1],i[2]|0,this.totalDistance,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),u.push(i[0],i[1],i[2]|0,this.totalDistance,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(u,l,i,this.normal,this.thickness,this.totalDistance);a.push(...this.lastFlip===1?[n,n+2,n+3]:[n+2,n+1,n+3]),s+=2}return s}extrusions(e,n,r,i,o,s){n.push(i[0],i[1],0),n.push(i[0],i[1],0);const a=r[2]!==void 0?r[2]:0;e.push(r[0],r[1],a,s,-o,a),this.complex.indexes.push(this.currentIndex),e.push(r[0],r[1],a,s,o,a),this.complex.indexes.push(this.currentIndex),this.currentIndex++}lineSegmentDistance(e,n){const r=n[0]-e[0],i=n[1]-e[1];return Math.sqrt(r*r+i*i)}}let Yr=function(t){return t.CYLINDER="cylinder",t.SQUARECOLUMN="squareColumn",t.TRIANGLECOLUMN="triangleColumn",t.HEXAGONCOLUMN="hexagonColumn",t.PENTAGONCOLUMN="pentagonColumn",t}({}),Gr=function(t){return t.CIRCLE="circle",t.SQUARE="square",t.TRIANGLE="triangle",t.HEXAGON="hexagon",t.PENTAGON="pentagon",t}({});function Di(t,e=0,n=Math.PI/4){const r=Math.PI*2/t,i=[];for(let s=0;s<t;s++)i.push(r*s+e*Math.PI/12);return i.map(s=>{const a=Math.sin(s+n),u=Math.cos(s+n);return[a,u,0]})}function ka(){return Di(30)}function Oh(){return Di(4)}function Ph(){return Di(3)}function Fh(){return Di(6,0,0).map(e=>[e[0],-e[1],e[2]])}function Bh(){return Di(5)}const Tr={[Gr.CIRCLE]:ka,[Gr.HEXAGON]:Fh,[Gr.TRIANGLE]:Ph,[Gr.SQUARE]:Oh,[Gr.PENTAGON]:Bh,[Yr.CYLINDER]:ka,[Yr.HEXAGONCOLUMN]:Fh,[Yr.TRIANGLECOLUMN]:Ph,[Yr.SQUARECOLUMN]:Oh,[Yr.PENTAGONCOLUMN]:Bh};function WS(t){const e=t[0][0],n=t[0][t[0].length-1];e[0]===n[0]&&e[1]===n[1]&&(t[0]=t[0].slice(0,t[0].length-1));const r=t[0].length,i=hn.flatten(t),{vertices:o,dimensions:s}=i,a=[],u=[];for(let c=0;c<o.length/s;c++)s===2?a.push(o[c*2],o[c*2+1],1):a.push(o[c*3],o[c*3+1],1);const l=hn(i.vertices,i.holes,i.dimensions);u.push(...l);for(let c=0;c<r;c++){const h=i.vertices.slice(c*s,(c+1)*s);let f=i.vertices.slice((c+1)*s,(c+2)*s);f.length===0&&(f=i.vertices.slice(0,s));const p=a.length/3;a.push(h[0],h[1],1,f[0],f[1],1,h[0],h[1],0,f[0],f[1],0),u.push(...[0,2,1,2,3,1].map(_=>_+p))}return{positions:a,index:u}}function jS(t){const e=hn.flatten(t),n=hn(e.vertices,e.holes,e.dimensions);return{positions:e.vertices,index:n}}function Op(t,e=!1){const n=t[0][0],r=t[0][t[0].length-1];n[0]===r[0]&&n[1]===r[1]&&(t[0]=t[0].slice(0,t[0].length-1));const i=t[0].length,o=hn.flatten(t),{vertices:s,dimensions:a,holes:u}=o,l=[],c=[],h=[];for(let p=0;p<s.length/a;p++)l.push(s[p*a],s[p*a+1],1,-1,-1),h.push(0,0,1);const f=Cp(s,u,a,e);c.push(...f);for(let p=0;p<i;p++){const _=o.vertices.slice(p*a,(p+1)*a);let v=o.vertices.slice((p+1)*a,(p+2)*a);v.length===0&&(v=o.vertices.slice(0,a));const m=l.length/5;l.push(_[0],_[1],1,0,0,v[0],v[1],1,.1,0,_[0],_[1],0,0,.8,v[0],v[1],0,.1,.8);const y=$S([v[0],v[1],1],[_[0],_[1],0],[_[0],_[1],1],e);h.push(...y,...y,...y,...y),c.push(...[1,2,0,3,2,1].map(T=>T+m))}return{positions:l,index:c,normals:h}}function $S(t,e,n,r=!1){const i=ui(),o=ui(),s=ui();r&&(t=xo(t),e=xo(e),n=xo(n));const a=Ft(...t),u=Ft(...e),l=Ft(...n);bc(i,l,u),bc(o,a,u),_1(s,i,o);const c=ui();return li(c,s),c}const Kr={},Nh=500;function Pp(t){return typeof t=="number"?String(t):Array.isArray(t)?typeof t[0]=="number"?t.slice(0,2).join(","):Pp(t[0]):""}function ZS(t){const e=Pp(t);if(e&&Kr[e])return Kr[e].slice();const n=On(t),r=Object.keys(Kr);if(r.length>=Nh){const i=Math.floor(Nh/2);for(let o=0;o<i;o++)delete Kr[r[o]]}return e&&(Kr[e]=n.slice()),n}const ro={};function Hn(t){const e=ZS(t.coordinates);return{vertices:[...e,...e,...e,...e],indices:[0,1,2,2,3,0],size:e.length}}function Dh(t){const e=On(t.coordinates),n=Mp(e);return{vertices:[...n,...n,...n,...n],indices:[0,1,2,2,3,0],size:n.length}}function Mu(t){const{shape:e}=t,{positions:n,index:r,normals:i}=QS(e,!1);return{vertices:n,indices:r,normals:i,size:5}}function wh(t){const e=this,n=t.id;if(e!=null&&e.imageFilterMap&&!e.imageFilterMap[n])return{vertices:[],indices:[],size:3};const r=On(t.coordinates);return{vertices:[...r],indices:[0],size:r.length}}function za(t){const{coordinates:e}=t,n=new XS({dash:!0,join:"bevel"});let r=e;r[0]&&!Array.isArray(r[0][0])&&(r=[e]),r.forEach(o=>{n.extrude(o)});const i=n.complex;return{vertices:i.positions,indices:i.indices,normals:i.normals,indexes:i.indexes,size:6}}function YS(t){const{coordinates:e}=t,n=[];if(!Array.isArray(e[0]))return{vertices:[],indices:[],normals:[],size:6,count:0};const{results:r,totalDistance:i}=GS(e);return r.map(o=>{n.push(o[0],o[1],o[2],o[3],0,i)}),{vertices:n,indices:[],normals:[],size:6,count:r.length}}function Lh(t,e){const n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}function Gs(t,e){return t.length<3&&t.push(0),e!==void 0&&t.push(e),t}function GS(t){let e=t;Array.isArray(e)&&Array.isArray(e[0])&&Array.isArray(e[0][0])&&(e=t.flat());let n=0;if(e.length<2)return{results:e,totalDistance:0};{const r=[],i=Gs(e[0],n);r.push(i);for(let s=1;s<e.length-1;s++){const a=Lh(Rt(e[s-1]),Rt(e[s]));n+=a;const u=Gs(e[s],n);r.push(u),r.push(u)}const o=Lh(Rt(e[e.length-2]),Rt(e[e.length-1]));return n+=o,r.push(Gs(e[e.length-1],n)),{results:r,totalDistance:n}}}function wi(t){const{coordinates:e}=t,n=hn.flatten(e),{vertices:r,dimensions:i,holes:o}=n;return{indices:Cp(r,o,i),vertices:r,size:i}}function KS(t){const{indices:e,vertices:n,size:r}=wi(t);return{indices:e,vertices:qS(n),size:r+4}}function qS(t){const e=[],{center:n,radius:r}=yv(t);for(let i=0;i<t.length;i+=2){const o=t[i],s=t[i+1];e.push(o,s,0,...n,r)}return e}function Fp(t){const e=t.coordinates,{positions:n,index:r,normals:i}=Op(e,!0);return{vertices:n,indices:r,normals:i,size:5}}function Bp(t){const{shape:e}=t,{positions:n,index:r}=JS(e);return{vertices:n,indices:r,size:3}}function Es(t){const e=t.coordinates;return{vertices:[...e[0],0,0,0,...e[1],0,1,0,...e[2],0,1,1,...e[3],0,0,1],indices:[0,1,2,0,2,3],size:5}}function Ou(t,e){const{segmentNumber:n=30}=e,r=t.coordinates,i=[],o=[];for(let s=0;s<n;s++)i.push(s,1,s,r[0][0],r[0][1],r[1][0],r[1][1],s,-1,s,r[0][0],r[0][1],r[1][0],r[1][1]),s!==n-1&&o.push(...[0,1,2,1,3,2].map(a=>s*2+a));return{vertices:i,indices:o,size:7}}function Uh(t){const e=t.coordinates;e.length===2&&e.push(0);const n=io(-1,1),r=io(1,1),i=io(-1,-1),o=io(1,-1);return{vertices:[...e,...n,...e,...i,...e,...o,...e,...r],indices:[0,1,2,3,0,2],size:5}}function QS(t,e=!1){if(ro&&ro[t])return ro[t];const n=Tr[t]?Tr[t]():Tr.cylinder(),r=Op([n],e);return ro[t]=r,r}function JS(t){const e=["cylinder","triangleColumn","hexagonColumn","squareColumn"],n=Tr[t]?Tr[t]():Tr.circle();return e.indexOf(t)===-1?jS([n]):WS([n])}function io(t,e){const n=(t+1)/2,r=(e+1)/2;return[n,r]}function Np(t,e){return{type:t.type,field:"value",items:t.positions.map((n,r)=>({[e]:r>=t.colors.length?null:t.colors[r],value:n}))}}const e2=`in vec4 v_color;

#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,t2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location =  ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;

layout(std140) uniform commonUniforms {
    vec2 u_radius;
    float u_opacity;
    float u_coverage;
    float u_angle;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

void main() {
  v_color = a_Color;
  v_color.a *= u_opacity;

  mat2 rotationMatrix = mat2(cos(u_angle), sin(u_angle), -sin(u_angle), cos(u_angle));
  vec2 offset = a_Position.xy * u_radius * rotationMatrix * u_coverage;

  vec2 lnglat = unProjectFlat(a_Pos.xy + offset);
  vec4 project_pos = project_position(vec4(lnglat, 0, 1.0));
  gl_Position = project_common_position_to_clipspace(project_pos);

  setPickingColor(a_PickingColor);
}
`;class n2 extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,POS:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,coverage:n,angle:r}=this.layer.getLayerConfig(),i={u_radius:[this.layer.getSource().data.xOffset,this.layer.getSource().data.yOffset],u_opacity:e||1,u_coverage:n||.9,u_angle:r||0};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"heatmapGrid",vertexShader:t2,fragmentShader:e2,defines:e.getDefines(),triangulation:Bp,primitive:g.TRIANGLES,depth:{enable:!1}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"pos",type:$.Attribute,descriptor:{shaderLocation:this.attributeLocation.POS,name:"a_Pos",buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:e=>{const n=e.coordinates;return[n[0],n[1],0]}}})}}const r2=`in vec4 v_color;

layout(std140) uniform commonUniforms {
  vec2 u_radius;
  float u_opacity;
  float u_coverage;
  float u_angle;
};

#pragma include "scene_uniforms"
#pragma include "picking"

out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,i2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniforms {
  vec2 u_radius;
  float u_opacity;
  float u_coverage;
  float u_angle;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"
#pragma include "light"
#pragma include "picking"

void main() {
  mat2 rotationMatrix = mat2(cos(u_angle), sin(u_angle), -sin(u_angle), cos(u_angle));
  vec2 offset = vec2(a_Position.xy * u_radius * rotationMatrix * u_coverage);

  vec2 lnglat = unProjectFlat(a_Pos.xy + offset); // 实际的经纬度
  vec4 project_pos = project_position(vec4(lnglat, a_Position.z * a_Size, 1.0));

  float lightWeight = calc_lighting(project_pos);
  v_color = vec4(a_Color.rgb * lightWeight, a_Color.w);

  gl_Position = project_common_position_to_clipspace(project_pos);

  setPickingColor(a_PickingColor);
}
`;class o2 extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,POS:10,NORMAL:11})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,coverage:n,angle:r}=this.layer.getLayerConfig(),i={u_radius:[this.layer.getSource().data.xOffset,this.layer.getSource().data.yOffset],u_opacity:e||1,u_coverage:n||.9,u_angle:r||0};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"heatmapGrid3d",vertexShader:i2,fragmentShader:r2,defines:e.getDefines(),triangulation:Mu,primitive:g.TRIANGLES,depth:{enable:!0}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{shaderLocation:this.attributeLocation.SIZE,name:"a_Size",buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:$.Attribute,descriptor:{name:"a_Pos",shaderLocation:this.attributeLocation.POS,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:e=>{const n=e.coordinates;return[n[0],n[1],0]}}})}}function s2(t,e){const n=[],r=[],i=[],o=t+1,s=e+1,a=t/2,u=e/2;for(let l=0;l<s;l++){const c=l-u;for(let h=0;h<o;h++){const f=h-a;r.push(f/a,-c/u,0),i.push(h/t),i.push(1-l/e)}}for(let l=0;l<e;l++)for(let c=0;c<t;c++){const h=c+o*l,f=c+o*(l+1),p=c+1+o*(l+1),_=c+1+o*l;n.push(h,f,_),n.push(f,p,_)}return{vertices:r,indices:n,uvs:i}}const a2=`layout(std140) uniform commonUniforms {
  mat4 u_ViewProjectionMatrixUncentered;
  mat4 u_InverseViewProjectionMatrix;
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};

uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

in vec2 v_texCoord;
in float v_intensity;
out vec4 outputColor;

void main() {
  float intensity = texture(SAMPLER_2D(u_texture), v_texCoord).r;
  vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(intensity, 0));
  outputColor = color;
  // gl_FragColor.a = color.a * smoothstep(0.1,0.2,intensity)* u_opacity;
  outputColor.a = color.a * smoothstep(0.0, 0.1, intensity) * u_opacity;
}
`,u2=`layout(location = 0) in vec3 a_Position;
layout(location = 10) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  mat4 u_ViewProjectionMatrixUncentered;
  mat4 u_InverseViewProjectionMatrix;
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};

uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

out vec2 v_texCoord;
out float v_intensity;

vec2 toBezier(float t, vec2 P0, vec2 P1, vec2 P2, vec2 P3) {
  float t2 = t * t;
  float one_minus_t = 1.0 - t;
  float one_minus_t2 = one_minus_t * one_minus_t;
  return P0 * one_minus_t2 * one_minus_t +
  P1 * 3.0 * t * one_minus_t2 +
  P2 * 3.0 * t2 * one_minus_t +
  P3 * t2 * t;
}
vec2 toBezier(float t, vec4 p) {
  return toBezier(t, vec2(0.0, 0.0), vec2(p.x, p.y), vec2(p.z, p.w), vec2(1.0, 1.0));
}

#pragma include "projection"
#pragma include "project"

void main() {
  v_texCoord = a_Uv;

  vec2 pos = a_Uv * vec2(2.0) - vec2(1.0); // 将原本 0 -> 1 的 uv 转换为 -1 -> 1 的标准坐标空间（NDC）

  vec4 p1 = vec4(pos, 0.0, 1.0); // x/y 平面上的点（z == 0）可以认为是三维上的点被投影到平面后的点
  vec4 p2 = vec4(pos, 1.0, 1.0); // 平行于x/y平面、z==1 的平面上的点

  vec4 inverseP1 = u_InverseViewProjectionMatrix * p1; // 根据视图投影矩阵的逆矩阵平面上的反算出三维空间中的点（p1平面上的点）
  vec4 inverseP2 = u_InverseViewProjectionMatrix * p2;

  inverseP1 = inverseP1 / inverseP1.w; // 归一化操作（归一化后为世界坐标）
  inverseP2 = inverseP2 / inverseP2.w;

  float zPos = (0.0 - inverseP1.z) / (inverseP2.z - inverseP1.z); // ??
  vec4 position = inverseP1 + zPos * (inverseP2 - inverseP1);

  vec4 b = vec4(0.5, 0.0, 1.0, 0.5);
  float fh;

  v_intensity = texture(SAMPLER_2D(u_texture), v_texCoord).r;
  fh = toBezier(v_intensity, b).y;
  gl_Position = u_ViewProjectionMatrixUncentered * vec4(position.xy, fh * project_pixel(50.0), 1.0);

}
`,l2=`uniform sampler2D u_texture; // 热力强度图
uniform sampler2D u_colorTexture; // 根据强度分布的色带

layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};
in vec2 v_texCoord;
out vec4 outputColor;

#pragma include "scene_uniforms"

float getBlurIndusty() {
  float vW = 2.0 / u_ViewportSize.x;
  float vH = 2.0 / u_ViewportSize.y;
  vec2 vUv = v_texCoord;
  float i11 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 1.0 * vW, vUv.y + 1.0 * vH)).r;
  float i12 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 0.0 * vW, vUv.y + 1.0 * vH)).r;
  float i13 = texture(SAMPLER_2D(u_texture), vec2(vUv.x + 1.0 * vW, vUv.y + 1.0 * vH)).r;

  float i21 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 1.0 * vW, vUv.y)).r;
  float i22 = texture(SAMPLER_2D(u_texture), vec2(vUv.x, vUv.y)).r;
  float i23 = texture(SAMPLER_2D(u_texture), vec2(vUv.x + 1.0 * vW, vUv.y)).r;

  float i31 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 1.0 * vW, vUv.y - 1.0 * vH)).r;
  float i32 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 0.0 * vW, vUv.y - 1.0 * vH)).r;
  float i33 = texture(SAMPLER_2D(u_texture), vec2(vUv.x + 1.0 * vW, vUv.y - 1.0 * vH)).r;

  return (i11 + i12 + i13 + i21 + i21 + i22 + i23 + i31 + i32 + i33) / 9.0;
}

void main() {
  // float intensity = texture(u_texture, v_texCoord).r;
  float intensity = getBlurIndusty();
  vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(intensity, 0.0));
  outputColor = color;
  outputColor.a = color.a * smoothstep(0.0, 0.1, intensity) * u_opacity;
}
`,c2=`layout(location = 0) in vec3 a_Position;
layout(location = 10) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};

#pragma include "scene_uniforms"

out vec2 v_texCoord;
void main() {
  v_texCoord = a_Uv;
  #ifdef VIEWPORT_ORIGIN_TL
  v_texCoord.y = 1.0 - v_texCoord.y;
  #endif

  gl_Position = vec4(a_Position.xy, 0, 1.0);
}
`,h2=`layout(std140) uniform commonUniforms {
  float u_radius;
  float u_intensity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
};

in vec2 v_extrude;
in float v_weight;
out vec4 outputColor;
#define GAUSS_COEF (0.3989422804014327)

void main() {
  float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);
  float val = v_weight * u_intensity * GAUSS_COEF * exp(d);
  outputColor = vec4(val, 1.0, 1.0, 1.0);
}
`,f2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_DIR) in vec2 a_Dir;

layout(std140) uniform commonUniforms {
  float u_radius;
  float u_intensity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
};

out vec2 v_extrude;
out float v_weight;

#define GAUSS_COEF (0.3989422804014327)

#pragma include "projection"
#pragma include "picking"

void main() {
  vec3 picking_color_placeholder = u_PickingColor;

  v_weight = a_Size;
  float ZERO = 1.0 / 255.0 / 16.0;
  float extrude_x = a_Dir.x * 2.0 - 1.0;
  float extrude_y = a_Dir.y * 2.0 - 1.0;
  vec2 extrude_dir = normalize(vec2(extrude_x, extrude_y));
  float S = sqrt(-2.0 * log(ZERO / a_Size / u_intensity / GAUSS_COEF)) / 2.5;
  v_extrude = extrude_dir * S;

  vec2 offset = project_pixel(v_extrude * u_radius);
  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0));

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, 0.0, 1.0));

}
`,{isEqual:d2}=we;class kh extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"colorTexture",void 0),d(this,"heatmapFramerBuffer",void 0),d(this,"heatmapTexture",void 0),d(this,"intensityModel",void 0),d(this,"colorModel",void 0),d(this,"shapeType",void 0),d(this,"preRampColors",void 0),d(this,"colorModelUniformBuffer",[]),d(this,"heat3DModelUniformBuffer",[])}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,UV:10,DIR:11})}prerender(){const{clear:e,useFramebuffer:n}=this.rendererService;n(this.heatmapFramerBuffer,()=>{e({color:[0,0,0,0],depth:1,stencil:0,framebuffer:this.heatmapFramerBuffer}),this.drawIntensityMode()})}render(e){const{rampColors:n}=this.layer.getLayerConfig();d2(this.preRampColors,n)||this.updateColorTexture(),this.shapeType==="heatmap"?this.drawHeatMap(e):this.draw3DHeatMap(e)}getUninforms(){throw new Error("Method not implemented.")}initModels(){var e=this;return L(function*(){var n;const{createFramebuffer:r,getViewportSize:i,createTexture2D:o}=e.rendererService,s=((n=e.layer.shapeOption)===null||n===void 0?void 0:n.field)||"heatmap";e.shapeType=s,e.intensityModel=yield e.buildHeatMapIntensity(),e.colorModel=s==="heatmap"?e.buildHeatmap():e.build3dHeatMap();const{width:a,height:u}=i();return e.heatmapTexture=o({width:Math.floor(a/4),height:Math.floor(u/4),wrapS:g.CLAMP_TO_EDGE,wrapT:g.CLAMP_TO_EDGE,min:g.LINEAR,mag:g.LINEAR,usage:Wn.RENDER_TARGET}),e.heatmapFramerBuffer=r({color:e.heatmapTexture,depth:!0,width:Math.floor(a/4),height:Math.floor(u/4)}),e.updateColorTexture(),[e.intensityModel,e.colorModel]})()}buildModels(){var e=this;return L(function*(){return e.initModels()})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"dir",type:$.Attribute,descriptor:{name:"a_Dir",shaderLocation:this.attributeLocation.DIR,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[3],r[4]]}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=1}=e;return[n]}}})}buildHeatMapIntensity(){var e=this;return L(function*(){return e.uniformBuffers=[e.rendererService.createBuffer({data:new Float32Array(4).fill(0),isUBO:!0})],e.layer.triangulation=Uh,yield e.layer.buildLayerModel({moduleName:"heatmapIntensity",vertexShader:f2,fragmentShader:h2,triangulation:Uh,defines:e.getDefines(),depth:{enable:!1},cull:{enable:!0,face:g.FRONT}})})()}buildHeatmap(){this.shaderModuleService.registerModule("heatmapColor",{vs:c2,fs:l2}),this.colorModelUniformBuffer=[this.rendererService.createBuffer({data:new Float32Array(4).fill(0),isUBO:!0})];const{vs:e,fs:n,uniforms:r}=this.shaderModuleService.getModule("heatmapColor"),{createAttribute:i,createElements:o,createBuffer:s,createModel:a}=this.rendererService;return a({vs:e,fs:n,uniformBuffers:[...this.colorModelUniformBuffer,...this.rendererService.uniformBuffers],attributes:{a_Position:i({shaderLocation:this.attributeLocation.POSITION,buffer:s({data:[-1,1,0,1,1,0,-1,-1,0,1,-1,0],type:g.FLOAT}),size:3}),a_Uv:i({shaderLocation:this.attributeLocation.UV,buffer:s({data:[0,1,1,1,0,0,1,0],type:g.FLOAT}),size:2})},uniforms:D({},r),depth:{enable:!1},elements:o({data:[0,2,1,2,3,1],type:g.UNSIGNED_INT,count:6})})}build3dHeatMap(){const{getViewportSize:e}=this.rendererService,{width:n,height:r}=e(),i=s2(n/4,r/4);this.shaderModuleService.registerModule("heatmap3dColor",{vs:u2,fs:a2}),this.heat3DModelUniformBuffer=[this.rendererService.createBuffer({data:new Float32Array(16*2+4).fill(0),isUBO:!0})];const{vs:o,fs:s,uniforms:a}=this.shaderModuleService.getModule("heatmap3dColor"),{createAttribute:u,createElements:l,createBuffer:c,createModel:h}=this.rendererService;return h({vs:o,fs:s,attributes:{a_Position:u({shaderLocation:this.attributeLocation.POSITION,buffer:c({data:i.vertices,type:g.FLOAT}),size:3}),a_Uv:u({shaderLocation:this.attributeLocation.UV,buffer:c({data:i.uvs,type:g.FLOAT}),size:2})},primitive:g.TRIANGLES,uniformBuffers:[...this.heat3DModelUniformBuffer,...this.rendererService.uniformBuffers],uniforms:D({},a),depth:{enable:!0},blend:{enable:!0,func:{srcRGB:g.SRC_ALPHA,srcAlpha:1,dstRGB:g.ONE_MINUS_SRC_ALPHA,dstAlpha:1}},elements:l({data:i.indices,type:g.UNSIGNED_INT,count:i.indices.length})})}drawIntensityMode(){var e;const{intensity:n=10,radius:r=5}=this.layer.getLayerConfig(),i={u_radius:r,u_intensity:n};this.uniformBuffers[0].subData({offset:0,data:[r,n]}),this.layerService.beforeRenderData(this.layer),this.layer.hooks.beforeRender.call(),(e=this.intensityModel)===null||e===void 0||e.draw({uniforms:i,blend:{enable:!0,func:{srcRGB:g.ONE,srcAlpha:1,dstRGB:g.ONE,dstAlpha:1}},stencil:{enable:!1,mask:255,func:{cmp:514,ref:1,mask:255}}}),this.layer.hooks.afterRender.call()}drawHeatMap(e){var n;const{opacity:r=1}=this.layer.getLayerConfig(),i={u_opacity:r,u_colorTexture:this.colorTexture,u_texture:this.heatmapFramerBuffer},o=[this.heatmapTexture,this.colorTexture];this.colorModelUniformBuffer[0].subData({offset:0,data:[r]}),(n=this.colorModel)===null||n===void 0||n.draw({uniforms:i,textures:o,blend:this.getBlend(),stencil:this.getStencil(e)})}draw3DHeatMap(e){var n;const{opacity:r=1}=this.layer.getLayerConfig(),i=_s();Ri(i,this.cameraService.getViewProjectionMatrixUncentered());const o={u_opacity:r,u_colorTexture:this.colorTexture,u_texture:this.heatmapFramerBuffer,u_ViewProjectionMatrixUncentered:this.cameraService.getViewProjectionMatrixUncentered(),u_InverseViewProjectionMatrix:[...i]};this.heat3DModelUniformBuffer[0].subData({offset:0,data:[...o.u_ViewProjectionMatrixUncentered,...o.u_InverseViewProjectionMatrix,r]});const s=[this.heatmapTexture,this.colorTexture];(n=this.colorModel)===null||n===void 0||n.draw({uniforms:o,textures:s,blend:{enable:!0,func:{srcRGB:g.SRC_ALPHA,srcAlpha:1,dstRGB:g.ONE_MINUS_SRC_ALPHA,dstAlpha:1}},stencil:this.getStencil(e)})}updateColorTexture(){const{createTexture2D:e}=this.rendererService;this.texture&&this.texture.destroy();const{rampColors:n}=this.layer.getLayerConfig(),r=pd(n);this.colorTexture=e({data:r.data,usage:Wn.SAMPLED,width:r.width,height:r.height,wrapS:g.CLAMP_TO_EDGE,wrapT:g.CLAMP_TO_EDGE,min:g.NEAREST,mag:g.NEAREST,flipY:!1,unorm:!0}),this.preRampColors=n}}const p2=`in vec4 v_color;

#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,_2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;

layout(std140) uniform commonUniforms {
  vec2 u_radius;
  float u_opacity;
  float u_coverage;
  float u_angle;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

void main() {
  v_color = a_Color;
  v_color.a *= u_opacity;

  mat2 rotationMatrix = mat2(cos(u_angle), sin(u_angle), -sin(u_angle), cos(u_angle));
  vec2 offset = vec2(a_Position.xy * u_radius * rotationMatrix * u_coverage);
  vec2 lnglat = unProjectFlat(a_Pos.xy + offset);

  vec4 project_pos = project_position(vec4(lnglat, 0, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));

  setPickingColor(a_PickingColor);
}
`;class v2 extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,POS:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,coverage:n,angle:r}=this.layer.getLayerConfig(),i={u_radius:[this.layer.getSource().data.xOffset,this.layer.getSource().data.yOffset],u_opacity:e||1,u_coverage:n||.9,u_angle:r||0};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"heatmapHexagon",vertexShader:_2,fragmentShader:p2,defines:e.getDefines(),triangulation:Bp,depth:{enable:!1},primitive:g.TRIANGLES})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"pos",type:$.Attribute,descriptor:{name:"a_Pos",shaderLocation:this.attributeLocation.POS,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:e=>{const n=e.coordinates;return[n[0],n[1],0]}}})}}const m2={heatmap:kh,heatmap3d:kh,grid:n2,grid3d:o2,hexagon:v2};class RM extends Gn{constructor(...e){super(...e),d(this,"type","HeatMapLayer")}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel=new m2[n](e),yield e.initLayerModels()})()}prerender(){this.getModelType()==="heatmap"&&this.layerModel&&this.layerModel.prerender()}renderModels(e={}){return this.getModelType()==="heatmap"?(this.layerModel&&this.layerModel.render(e),this):this.encodeDataLength<=0&&!this.forceRender?this:(this.hooks.beforeRender.call(),this.models.forEach(r=>r.draw({uniforms:this.layerModel.getUninforms(),blend:this.layerModel.getBlend(),stencil:this.layerModel.getStencil(e)})),this.hooks.afterRender.call(),this)}updateModelData(e){e.attributes&&e.elements?this.models[0].updateAttributesAndElements(e.attributes,e.elements):console.warn("data error")}getModelType(){var e,n;const{shape3d:r}=this.getLayerConfig(),i=this.getSource(),o=i==null||(e=i.data)===null||e===void 0?void 0:e.type,s=((n=this.shapeOption)===null||n===void 0?void 0:n.field)||"heatmap",a=Array.isArray(r)&&r.includes(s);return s==="heatmap"||s==="heatmap3d"?"heatmap":o==="hexagon"?a?"grid3d":"hexagon":o==="grid"?a?"grid3d":"grid":"heatmap"}getLegend(e){if(this.getModelType()==="heatmap"){if(e!=="color")return{type:void 0,field:void 0,items:[]};const n=this.getLayerConfig().rampColors;return Np(n,e)}else return super.getLegend(e)}}const g2=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
    float u_opacity:1.0;
    float u_brightness:1.0;
    float u_contrast:1.0;
    float u_saturation:1.0;
    float u_gamma:1.0;
};

in vec2 v_texCoord;
out vec4 outputColor;
vec3 setContrast(vec3 rgb, float contrast) {
  vec3 color = mix(vec3(0.5), rgb, contrast);
  color = clamp(color, 0.0, 1.0);
  return color;
}
vec3 setSaturation(vec3 rgb, float adjustment) {
  const vec3 grayVector = vec3(0.2125, 0.7154, 0.0721);
  vec3 intensity = vec3(dot(rgb, grayVector));
  vec3 color = mix(intensity, rgb, adjustment);
  color = clamp(color, 0.0, 1.0);
  return color;
}
void main() {
  vec4 color = texture(SAMPLER_2D(u_texture),vec2(v_texCoord.x,v_texCoord.y));
  //brightness
  color.rgb = mix(vec3(0.0, 0.0, 0.0), color.rgb, u_brightness);
  //contrast
  color.rgb = setContrast(color.rgb, u_contrast);
  // saturation
  color.rgb = setSaturation(color.rgb, u_saturation);
  // gamma
  color.rgb = pow(color.rgb, vec3(u_gamma));
  outputColor = color;
  outputColor.a *= u_opacity;
  if(outputColor.a < 0.01)
    discard;
}
`,E2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
    float u_opacity:1.0;
    float u_brightness:1.0;
    float u_contrast:1.0;
    float u_saturation:1.0;
    float u_gamma:1.0;
};

out vec2 v_texCoord;
#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;let y2=class extends Ae{constructor(...e){super(...e),d(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getCommonUniformsInfo(){const{opacity:e,brightness:n,contrast:r,saturation:i,gamma:o}=this.layer.getLayerConfig(),s={u_opacity:Vr(e,1),u_brightness:Vr(n,1),u_contrast:Vr(r,1),u_saturation:Vr(i,1),u_gamma:Vr(o,1)};return this.textures=[this.texture],this.getUniformsBufferInfo(s)}initModels(){var e=this;return L(function*(){return yield e.loadTexture(),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}loadTexture(){var e=this;return L(function*(){const{createTexture2D:n}=e.rendererService,i=yield e.layer.getSource().data.images;e.texture=n({data:i[0],width:i[0].width,height:i[0].height,mag:g.LINEAR,min:g.LINEAR})})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"rasterImage",vertexShader:E2,fragmentShader:g2,defines:e.getDefines(),triangulation:Es,primitive:g.TRIANGLES,blend:{enable:!0},depth:{enable:!1},pickingEnabled:!1})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[3],r[4]]}})}};const T2={image:y2};class A2 extends Gn{constructor(...e){super(...e),d(this,"type","ImageLayer")}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel=new T2[n](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{image:{}}[e]}getModelType(){return"image"}}const S2=`
#define Animate 0.0
#define LineTexture 1.0
uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_lineDir: 1.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_blur : 0.9;
  float u_line_type: 0.0;
  float u_time;
  float u_linearColor: 0.0;
};

in vec4 v_color;
in vec2 v_iconMapUV;
in vec4 v_lineData;
//dash
in vec4 v_dash_array;
in float v_distance_ratio;

out vec4 outputColor;
#pragma include "picking"

void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      discard;
    };
  }
  float animateSpeed = 0.0; // 运动速度
  outputColor = v_color;
  if(u_animate.x == Animate && u_line_texture != LineTexture) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- v_lineData.b, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      // alpha = smoothstep(0., 1., alpha);
      alpha = clamp(alpha, 0.0, 1.0);
      outputColor.a *= alpha;
  }

  // 当存在贴图时在底色上贴上贴图
  if(u_line_texture == LineTexture) { // while load texture
    float arcRadio = smoothstep( 0.0, 1.0, (v_lineData.r / segmentNumber));
    // float arcRadio = smoothstep( 0.0, 1.0, d_distance_ratio);

    float count = v_lineData.g; // 贴图在弧线上重复的数量

    float time = 0.0;
    if(u_animate.x == Animate) {
      time = u_time / u_animate.y;
    }
    float redioCount = arcRadio * count;

    float u = fract(redioCount - time);
    float v = v_lineData.a; // 横向 v
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;

    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_animate.x == Animate) {
      float currentPlane = floor(redioCount - time);
      float textureStep = floor(count * u_animate.z);
      float a = mod(currentPlane, textureStep);
      if(a < textureStep - 1.0) {
        pattern = vec4(0.0);
      }
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
    
  } else {
     outputColor = filterColor(outputColor);
  }
}`,R2=`#define Animate (0.0)
#define LineTexture (1.0)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_lineDir: 1.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_blur : 0.9;
  float u_line_type: 0.0;
  float u_time;
  float u_linearColor: 0.0;
};

out vec4 v_color;
out vec2 v_iconMapUV;
out vec4 v_lineData;
//dash
out vec4 v_dash_array;
out float v_distance_ratio;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float bezier3(vec3 arr, float t) {
  float ut = 1.0 - t;
  return (arr.x * ut + arr.y * t) * ut + (arr.y * ut + arr.z * t) * t;
}
vec2 midPoint(vec2 source, vec2 target, float arcThetaOffset) {
  vec2 center = target - source;
  float r = length(center);
  float theta = atan(center.y, center.x);
  float thetaOffset = arcThetaOffset;
  float r2 = r / 2.0 / cos(thetaOffset);
  float theta2 = theta + thetaOffset;
  vec2 mid = vec2(r2 * cos(theta2) + source.x, r2 * sin(theta2) + source.y);
  if (u_lineDir == 1.0) {
    // 正向
    return mid;
  } else {
    // 逆向
    // (mid + vmin)/2 = (s + t)/2
    vec2 vmid = source + target - mid;
    return vmid;
  }
  // return mid;
}
float getSegmentRatio(float index) {
  // dash: index / (segmentNumber - 1.);
  // normal: smoothstep(0.0, 1.0, index / (segmentNumber - 1.));
  return smoothstep(0.0, 1.0, index / (segmentNumber - 1.0));
  //  return index / (segmentNumber - 1.);
}
vec2 interpolate(vec2 source, vec2 target, float t, float arcThetaOffset) {
  // if the angularDist is PI, linear interpolation is applied. otherwise, use spherical interpolation
  vec2 mid = midPoint(source, target, arcThetaOffset);
  vec3 x = vec3(source.x, mid.x, target.x);
  vec3 y = vec3(source.y, mid.y, target.y);
  return vec2(bezier3(x, t), bezier3(y, t));
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;
  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
   dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
   return dir_screenspace.xy * sign(offset_direction);
}

void main() {
  //vs中计算渐变色
  if (u_linearColor == 1.0) {
    float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
    v_color = mix(u_sourceColor, u_targetColor, d_segmentIndex / segmentNumber);
  } else {
    v_color = a_Color;
  }
  v_color.a = v_color.a * opacity;

  vec2 source_world = a_Instance.rg; // 起始点
  vec2 target_world = a_Instance.ba; // 终点

  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);

  // 计算 dashArray 和 distanceRatio 输出到片元
  float total_Distance = pixelDistance(source_world, target_world) / 2.0 * PI;
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / total_Distance;
  v_distance_ratio = segmentIndex / segmentNumber;

  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  float d_distance_ratio;

  if(u_animate.x == Animate) {
      d_distance_ratio = segmentIndex / segmentNumber;
      if(u_lineDir != 1.0) {
        d_distance_ratio = 1.0 - d_distance_ratio;
      }
  }

  v_lineData.b = d_distance_ratio;

  vec4 source = project_position(vec4(source_world, 0, 1.), a_Instance64Low.xy);
  vec4 target = project_position(vec4(target_world, 0, 1.), a_Instance64Low.zw);

  vec2 currPos = interpolate(source.xy, target.xy, segmentRatio, thetaOffset);
  vec2 nextPos = interpolate(source.xy, target.xy, nextSegmentRatio, thetaOffset);

  vec2 offset = project_pixel(
    getExtrusionOffset((nextPos.xy - currPos.xy) * indexDir, a_Position.y)
  );

  float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
  v_lineData.r = d_segmentIndex;

  if(LineTexture == u_line_texture) { // 开启贴图模式
    float arcDistrance = length(source - target); // 起始点和终点的距离
    arcDistrance = project_pixel(arcDistrance);

    v_iconMapUV = a_iconMapUV;

    float pixelLen = project_pixel_texture(u_icon_step); // 贴图沿弧线方向的长度 - 随地图缩放改变
    float texCount = floor(arcDistrance / pixelLen); // 贴图在弧线上重复的数量
    v_lineData.g = texCount;

    float lineOffsetWidth = length(offset + offset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size); // 定点位置偏移
    v_lineData.a = lineOffsetWidth / linePixelSize; // 线图层贴图部分的 v 坐标值
  }

  gl_Position = project_common_position_to_clipspace(vec4(currPos.xy + offset, 0, 1.0));

  setPickingColor(a_PickingColor);
}
`,x2={solid:0,dash:1};class C2 extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=n({data:this.iconService.getCanvas(),mag:g.NEAREST,min:g.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,UV:12,THETA_OFFSET:13})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:n,textureBlend:r="normal",lineType:i="solid",dashArray:o=[10,5],forward:s=!0,lineTexture:a=!1,iconStep:u=100,segmentNumber:l=30}=this.layer.getLayerConfig(),{animateOption:c}=this.layer.getLayerConfig();let h=o;i!=="dash"&&(h=[0,0]),h.length===2&&h.push(0,0);let f=0,p=[0,0,0,0],_=[0,0,0,0];if(e&&n&&(p=Te(e),_=Te(n),f=1),this.rendererService.getDirty()){var v;(v=this.texture)===null||v===void 0||v.bind()}const m={u_animate:this.animateOption2Array(c),u_dash_array:h,u_sourceColor:p,u_targetColor:_,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:l,u_lineDir:s?1:-1,u_icon_step:u,u_line_texture:a?1:0,u_textureBlend:r==="normal"?0:1,u_blur:.9,u_line_type:x2[i||"solid"],u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:f};return this.getUniformsBufferInfo(m)}initModels(){var e=this;return L(function*(){return e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}getShaders(){return{frag:S2,vert:R2,type:""}}buildModels(){var e=this;return L(function*(){e.initUniformsBuffer();const{segmentNumber:n=30}=e.layer.getLayerConfig(),{frag:r,vert:i,type:o}=e.getShaders();return[yield e.layer.buildLayerModel({moduleName:"lineArc2d"+o,vertexShader:i,fragmentShader:r,defines:e.getDefines(),inject:e.getInject(),triangulation:Ou,depth:{enable:!1},styleOption:{segmentNumber:n}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:$.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[r[3],r[4],r[5],r[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:$.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[ke(r[3]),ke(r[4]),ke(r[5]),ke(r[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{texture:r}=e,{x:i,y:o}=n[r]||{x:0,y:0};return[i,o]}}}),this.styleAttributeService.registerStyleAttribute({name:"thetaOffset",type:$.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:this.attributeLocation.THETA_OFFSET,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{thetaOffset:n=1}=e;return[n]}}})}}const b2=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_globel;
  float u_globel_radius;
  float u_global_height: 10;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0.0;
};

in vec4 v_color;
in vec4 v_dash_array;
in float v_segmentIndex;
in vec2 v_iconMapUV;
in vec4 v_line_data;

out vec4 outputColor;

#pragma include "picking"

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_line_data.g; // 当前点位距离占线总长的比例
  outputColor = v_color;

  if(u_line_type == LineTypeDash) {
    float flag = 0.;
    float dashLength = mod(d_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z)) {
      flag = 1.;
    }
    outputColor.a *=flag;
  }

  if(u_animate.x == Animate && u_line_texture != LineTexture) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);

      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      // alpha = smoothstep(0., 1., alpha);
      alpha = clamp(alpha, 0.0, 1.0);
      outputColor.a *= alpha;

      // u_animate
      // x enable
      // y duration
      // z interval
      // w trailLength
  }

  if(u_line_texture == LineTexture && u_line_type != LineTypeDash) { // while load texture
    // float arcRadio = smoothstep( 0.0, 1.0, (v_segmentIndex / segmentNumber));
    float arcRadio = v_segmentIndex / (segmentNumber - 1.0);
    float count = v_line_data.b; // // 贴图在弧线上重复的数量

    float time = 0.0;
    if(u_animate.x == Animate) {
      time = u_time / u_animate.y;
    }
    float redioCount = arcRadio * count;

    float u = fract(redioCount - time);

    float v = v_line_data.a;  // 线图层贴图部分的 v 坐标值
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_animate.x == Animate) {
      float currentPlane = floor(redioCount - time);
      float textureStep = floor(count * u_animate.z);
      float a = mod(currentPlane, textureStep);
      if(a < textureStep - 1.0) {
        pattern = vec4(0.0);
      }
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
          discard;
        } else {
          outputColor = filterColor(pattern);
        }
    }

  } else {
    outputColor = filterColor(outputColor);
  }
}
`,I2=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;


layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_globel;
  float u_globel_radius;
  float u_global_height: 10;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0.0;
};
out vec4 v_color;
out vec4 v_dash_array;
out float v_segmentIndex;
out vec2 v_iconMapUV;
out vec4 v_line_data;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float maps (float value, float start1, float stop1, float start2, float stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

float getSegmentRatio(float index) {
  return smoothstep(0.0, 1.0, index / (segmentNumber - 1.0));
}

float paraboloid(vec2 source, vec2 target, float ratio) {
  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);
  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertex_height = paraboloid(source, target, segmentRatio);

  return vec3(
    mix(source, target, segmentRatio),
    sqrt(max(0.0, vertex_height))
  );
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;

  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  return dir_screenspace.xy * sign(offset_direction);
}

float torad(float deg) {
  return (deg / 180.0) * acos(-1.0);
}

vec3 lglt2xyz(vec2 lnglat) {
  float pi = 3.1415926;
  // + Math.PI/2 是为了对齐坐标
  float lng = torad(lnglat.x) + pi / 2.0;
  float lat = torad(lnglat.y);

  // 手动增加一些偏移，减轻面的冲突
  float radius = u_globel_radius;

  float z = radius * cos(lat) * cos(lng);
  float x = radius * cos(lat) * sin(lng);
  float y = radius * sin(lat);
  return vec3(x, y, z);
}

void main() {
  //vs中计算渐变色
  if(u_linearColor==1.0){
    float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
    v_color = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
  }
  else{
    v_color = a_Color;
  }
  v_color.a = v_color.a * opacity;
  vec2 source = project_position(vec4(a_Instance.rg, 0, 0), a_Instance64Low.xy).xy;
  vec2 target = project_position(vec4(a_Instance.ba, 0, 0), a_Instance64Low.zw).xy;
  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));

  float d_distance_ratio;
   if(u_line_type == LineTypeDash) {
    d_distance_ratio = segmentIndex / segmentNumber;
    float total_Distance = pixelDistance(source, target) / 2.0 * PI;
    v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / (total_Distance / segmentNumber * segmentIndex);
  }
    if(u_animate.x == Animate) {
      d_distance_ratio = segmentIndex / segmentNumber;
  }
  v_line_data.g = d_distance_ratio; // 当前点位距离占线总长的比例

  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  vec3 curr = getPos(source, target, segmentRatio);
  vec3 next = getPos(source, target, nextSegmentRatio);
  vec2 offset = getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y);
  // v_normal = getNormal((next.xy - curr.xy) * indexDir, a_Position.y);


  v_segmentIndex = a_Position.x;
  if(LineTexture == u_line_texture && u_line_type != LineTypeDash) { // 开启贴图模式

    float arcDistrance = length(source - target);
    float pixelLen =  project_pixel_texture(u_icon_step);
    v_line_data.b = floor(arcDistrance/pixelLen); // 贴图在弧线上重复的数量

    vec2 projectOffset = project_pixel(offset);
    float lineOffsetWidth = length(projectOffset + projectOffset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size);  // 定点位置偏移，按地图等级缩放后的距离
    v_line_data.a = lineOffsetWidth/linePixelSize;  // 线图层贴图部分的 v 坐标值

    v_iconMapUV = a_iconMapUV;
  }


  gl_Position = project_common_position_to_clipspace(vec4(curr.xy + project_pixel(offset), curr.z * thetaOffset, 1.0));

  // 地球模式
  if(u_globel > 0.0) {
    vec3 startLngLat = lglt2xyz(a_Instance.rg);
    vec3 endLngLat = lglt2xyz(a_Instance.ba);
    float globalRadius = length(startLngLat);

    vec3 lineDir = normalize(endLngLat - startLngLat);
    vec3 midPointDir = normalize((startLngLat + endLngLat)/2.0);

    // 线的偏移
    vec3 lnglatOffset = cross(lineDir, midPointDir) * a_Position.y;
    // 计算起始点和终止点的距离
    float lnglatLength = length(a_Instance.rg - a_Instance.ba)/50.0;
    // 计算飞线各个节点相应的高度
    float lineHeight = u_global_height * (-4.0*segmentRatio*segmentRatio + 4.0 * segmentRatio) * lnglatLength;
    // 地球点位
    vec3 globalPoint = normalize(mix(startLngLat, endLngLat, segmentRatio)) * (globalRadius + lineHeight) + lnglatOffset * a_Size;

    gl_Position = u_ViewProjectionMatrix * vec4(globalPoint, 1.0);
  }


  setPickingColor(a_PickingColor);
}
`,M2={solid:0,dash:1};class zh extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=n({data:this.iconService.getCanvas(),mag:g.LINEAR,min:g.LINEAR,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,UV:12,THETA_OFFSET:13})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:n,textureBlend:r="normal",lineType:i="solid",dashArray:o=[10,5],lineTexture:s=!1,iconStep:a=100,segmentNumber:u=30,globalArcHeight:l=10}=this.layer.getLayerConfig(),{animateOption:c}=this.layer.getLayerConfig();o.length===2&&o.push(0,0);let h=0,f=[0,0,0,0],p=[0,0,0,0];if(e&&n&&(f=Te(e),p=Te(n),h=1),this.rendererService.getDirty()){var _;(_=this.texture)===null||_===void 0||_.bind()}const v={u_animate:this.animateOption2Array(c),u_dash_array:o,u_sourceColor:f,u_targetColor:p,u_textSize:[1024,this.iconService.canvasHeight||128],u_globel:this.mapService.version==="GLOBEL"?1:0,u_globel_radius:Ip,u_global_height:l,segmentNumber:u,u_line_type:M2[i]||0,u_icon_step:a,u_line_texture:s?1:0,u_textureBlend:r==="normal"?0:1,u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:h};return this.getUniformsBufferInfo(v)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}getShaders(){return{frag:b2,vert:I2,type:""}}buildModels(){var e=this;return L(function*(){const{segmentNumber:n=30}=e.layer.getLayerConfig(),{frag:r,vert:i,type:o}=e.getShaders();return[yield e.layer.buildLayerModel({moduleName:"lineArc3d"+o,vertexShader:i,fragmentShader:r,defines:e.getDefines(),inject:e.getInject(),triangulation:Ou,styleOption:{segmentNumber:n}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:$.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[r[3],r[4],r[5],r[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:$.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[ke(r[3]),ke(r[4]),ke(r[5]),ke(r[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{texture:r}=e,{x:i,y:o}=n[r]||{x:0,y:0};return[i,o]}}}),this.styleAttributeService.registerStyleAttribute({name:"thetaOffset",type:$.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:this.attributeLocation.THETA_OFFSET,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{thetaOffset:n=1}=e;return[n]}}})}}const Vh={circle:2,triangle:2,diamond:4,rect:2,classic:3,halfTriangle:2,none:0},ht=1/2;function O2(t,e){const{width:n=2,height:r=1}=e;return{vertices:[0,ht*t,1*t*n,-(r+ht)*t,1*t*n,(r-ht)*t,0,ht*t,1*t*n,-(r+ht)*t,1*t*n,(r-ht)*t],indices:[3,4,5],outLineIndices:[0,1,2],normals:[1*t,-2*t,1,-2*t,1.5*t,1,1*t,1.5*t,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function P2(t,e){const{width:n=2,height:r=3}=e;return{vertices:[0,0,1*t*n,1*r,1*t*n,-1*r,0,0,1*t*n,1*r,1*t*n,-1*r],outLineIndices:[0,1,2],indices:[3,4,5],normals:[0,-1.5*t,1,2,1*t,1,-2,1*t,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function F2(t,e){const{width:n=2,height:r=2}=e;return{vertices:[0,r/2,t*n*1,r/2,t*n*1,-r/2,0,-r/2,0,r/2,t*n*1,r/2,t*n*1,-r/2,0,-r/2],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-t,1,1,0,1,0,-t,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function B2(t,e){const{width:n=2,height:r=3}=e;return{vertices:[0,0,1*n*t,.5*r,2*n*t,0,1*n*t,-.5*r,0,0,1*n*t,.5*r,2*n*t,0,1*n*t,-.5*r],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-t,1,1,0,1,0,-t,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function N2(t,e){const{width:n=2,height:r=3}=e;return{vertices:[0,0,2*t*n,1*r,1.5*t*n,0,2*t*n,-1*r,0,0,2*t*n,1*r,1.5*t*n,0,2*t*n,-1*r],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-t,1,1,0,1,0,-t,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function D2(t,e){const{width:n=2,height:r=2}=e,i=ka(),o=hn.flatten([i]),s=hn(o.vertices,o.holes,o.dimensions),a=i.map(u=>[u[0]*n*t,u[1]*r]).flat();return{vertices:[...a,...a],dimensions:2,indices:s.map(u=>u+i.length),outLineIndices:s,normals:[...i.map(u=>[u[1]*r,u[0]*n*t,1]).flat(),...new Array(i.length*3).fill(0)]}}function w2(t,e=0,n){const r=typeof n.source=="object"?n.source.type:n.source,i=typeof n.target=="object"?n.target.type:n.target,{width:o=r?Vh[r]:0}=typeof n.source=="object"?n.source:{},{width:s=i?Vh[i]:0}=typeof n.target=="object"?n.target:{};return{vertices:[0,ht,1*o,...t,1,ht,-1*s,...t,1,-ht,-1*s,...t,0,-ht,1*o,...t,0,ht,1*o,...t,1,ht,-1*s,...t,1,-ht,-1*s,...t,0,-ht,1*o,...t],outLineIndices:[0,1,2,0,2,3].map(a=>a+e),indices:[4,5,6,4,6,7].map(a=>a+e),normals:[1,-1,1,1,1,1,-1,0,1,-1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],dimensions:2}}function Hh(t,e){const n=typeof t=="object"?t.type:t,r=e==="source"?1:-1,i=typeof t=="object"?t:{};switch(n){case"circle":return D2(r,i);case"triangle":return P2(r,i);case"diamond":return B2(r,i);case"rect":return F2(r,i);case"classic":return N2(r,i);case"halfTriangle":return O2(r,i);default:return{vertices:[],indices:[],normals:[],dimensions:2,outLineIndices:[],outLineNormals:[]}}}function L2(t){const e=t.coordinates.flat(),n=1;return{vertices:[1,0,0,...e,1,2,-3,...e,1,1,-3,...e,0,1,0,...e,0,0,0,...e,1,0,0,...e,1,2,-3,...e,1,1,-3,...e,0,1,0,...e,0,0,0,...e],normals:[-1,2*n,1,2*n,-n,1,n,-n,1,n,-n,1,-1,-n,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],indices:[0,1,2,0,2,3,0,3,4,5,6,7,5,7,8,5,8,9],size:7}}function U2(t,e){return e?k2(t,e):L2(t)}function k2(t,e){const n=t.coordinates.flat(),{target:r="classic",source:i="circle"}=e,o=Xh(Hh(i,"source"),n,0,0),s=w2(n,o.vertices.length/7,e),a=Xh(Hh(r,"target"),n,1,o.vertices.length/7+s.vertices.length/7);return{vertices:[...o.vertices,...s.vertices,...a.vertices],indices:[...o.outLineIndices,...s.outLineIndices,...a.outLineIndices,...o.indices,...s.indices,...a.indices],normals:[...o.normals,...s.normals,...a.normals],size:7}}function Xh(t,e,n=1,r=0){const i=[],{vertices:o,indices:s,dimensions:a,outLineIndices:u}=t;for(let l=0;l<o.length;l+=a)i.push(n,o[l+1],o[l],...e);return D(D({},t),{},{vertices:i,indices:s.map(l=>l+r),outLineIndices:u.map(l=>l+r)})}const z2=`// #extension GL_OES_standard_derivatives : enable

in vec4 v_color;
out vec4 outputColor;

// line texture

#pragma include "picking"

void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,V2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec2 a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniorm {
  float u_gap_width: 1.0;
  float u_stroke_width: 1.0;
  float u_stroke_opacity: 1.0;
};

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

out vec4 v_color;

vec2 project_pixel_offset(vec2 offsets) {
  vec2 data = project_pixel(offsets);

  return vec2(data.x, -data.y);
}

vec2 line_dir(vec2 target, vec2 source) {
  return normalize(ProjectFlat(target) - ProjectFlat(source));
}


void main() {
  // 透明度计算
  vec2 source_world = a_Instance.rg; // 起点
  vec2 target_world = a_Instance.ba; // 终点
  vec2 flowlineDir = line_dir(target_world, source_world);
  vec2 perpendicularDir = vec2(-flowlineDir.y, flowlineDir.x);

  vec2 position = mix(source_world, target_world, a_Position.x);
  vec2 position64Low = mix(a_Instance64Low.rg, a_Instance64Low.ba, a_Position.x);

  float lengthCommon = length(
    project_position(vec4(target_world, 0, 1)) - project_position(vec4(source_world, 0, 1))
  );
  vec2 offsetDistances = a_Size.x * project_pixel_offset(vec2(a_Position.y, a_Position.z)); // Mapbox || 高德
  vec2 limitedOffsetDistances = clamp(
    offsetDistances,
    project_pixel(-lengthCommon * 0.2),
    project_pixel(lengthCommon * 0.2)
  );

  float startOffsetCommon = project_pixel(offsets[0]);
  float endOffsetCommon = project_pixel(offsets[1]);
  float endpointOffset = mix(
    clamp(startOffsetCommon, 0.0, lengthCommon * 0.2),
    -clamp(endOffsetCommon, 0.0, lengthCommon * 0.2),
    a_Position.x
  );

  vec2 normalsCommon = u_stroke_width * project_pixel_offset(vec2(a_Normal.x, a_Normal.y));

  float gapCommon = -1. * project_pixel(u_gap_width);
  vec3 offsetCommon = vec3(
    flowlineDir * (limitedOffsetDistances[1] + normalsCommon.y + endpointOffset * 1.05) -
      perpendicularDir * (limitedOffsetDistances[0] + gapCommon + normalsCommon.x),
    0.0
  );

  vec4 project_pos = project_position(vec4(position.xy, 0, 1.0), position64Low);

  vec4 fillColor = vec4(a_Color.rgb, a_Color.a * opacity);
  v_color = mix(fillColor, vec4(u_stroke.xyz, u_stroke.w * fillColor.w * u_stroke_opacity), a_Normal.z);

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy +  offsetCommon.xy, 0., 1.0));

  setPickingColor(a_PickingColor);
}
`;class H2 extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,NORMAL:12})}getCommonUniformsInfo(){const{gapWidth:e=2,strokeWidth:n=1,strokeOpacity:r=1}=this.layer.getLayerConfig(),i={u_gap_width:e,u_stroke_width:n,u_stroke_opacity:r};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){return[yield e.layer.buildLayerModel({moduleName:"flow_line",vertexShader:V2,fragmentShader:z2,defines:e.getDefines(),inject:e.getInject(),triangulation:U2,styleOption:e.layer.getLayerConfig().symbol,primitive:g.TRIANGLES,depth:{enable:!1},pick:!1})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0],n[1]]:[n,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:$.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[r[3],r[4],r[5],r[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:$.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[ke(r[3]),ke(r[4]),ke(r[5]),ke(r[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}})}}const X2=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0;
};

in vec4 v_dash_array;
in vec4 v_color;
in vec2 v_iconMapUV;
in vec4 v_line_data;
in float v_distance_ratio;

out vec4 outputColor;
#pragma include "picking"
#pragma include "project"
#pragma include "projection"

void main() {

  float animateSpeed = 0.0;
  float d_segmentIndex = v_line_data.g;

  // 设置弧线的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
    outputColor.a *= v_color.a;
  } else { // 使用 color 方法传入的颜色
    outputColor = v_color;
  }

  // float blur = 1.- smoothstep(u_blur, 1., length(v_normal.xy));
  // float blur = smoothstep(1.0, u_blur, length(v_normal.xy));
  if(u_line_type == LineTypeDash) {
    float dashLength = mod(v_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z)) {
      // 实线部分
    } else {
      // 虚线部分
      discard;
    };
  }

  // 设置弧线的动画模式
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- v_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  // 设置弧线的贴图
  if(LineTexture == u_line_texture && u_line_type != LineTypeDash) {
    float arcRadio = smoothstep( 0.0, 1.0, (d_segmentIndex / (segmentNumber - 1.0)));
    // float arcRadio = d_segmentIndex / (segmentNumber - 1.0);
    float count = v_line_data.b; // 贴图在弧线上重复的数量
    float u = fract(arcRadio * count - animateSpeed * count);
    // float u = fract(arcRadio * count - animateSpeed);
    if(u_animate.x == Animate) {
      u = outputColor.a/v_color.a;
    }

    float v = v_line_data.a; // 线图层贴图部分的 v 坐标值

    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    // 设置贴图和底色的叠加模式
    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
  } else {
    outputColor = filterColor(outputColor);
  }

  // gl_FragColor = filterColor(gl_FragColor);
}
`,W2=`#define LineTypeSolid (0.0)
#define LineTypeDash (1.0)
#define Animate (0.0)
#define LineTexture (1.0)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0;
};

out vec4 v_dash_array;
out vec4 v_color;
out vec2 v_iconMapUV;
out vec4 v_line_data;
out float v_distance_ratio;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float maps(float value, float start1, float stop1, float start2, float stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

float getSegmentRatio(float index) {
  return index / (segmentNumber - 1.0);
}

float paraboloid(vec2 source, vec2 target, float ratio) {
  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);
  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertex_height = paraboloid(source, target, segmentRatio);

  return vec3(mix(source, target, segmentRatio), sqrt(max(0.0, vertex_height)));
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;
  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  return dir_screenspace.xy * sign(offset_direction);
}
float getAngularDist(vec2 source, vec2 target) {
  vec2 delta = source - target;
  vec2 sin_half_delta = sin(delta / 2.0);
  float a =
    sin_half_delta.y * sin_half_delta.y +
    cos(source.y) * cos(target.y) * sin_half_delta.x * sin_half_delta.x;
  return 2.0 * atan(sqrt(a), sqrt(1.0 - a));
}

vec2 midPoint(vec2 source, vec2 target) {
  vec2 center = target - source;
  float r = length(center);
  float theta = atan(center.y, center.x);
  float thetaOffset = 0.314;
  float r2 = r / 2.0 / cos(thetaOffset);
  float theta2 = theta + thetaOffset;
  vec2 mid = vec2(r2 * cos(theta2) + source.x, r2 * sin(theta2) + source.y);
  return mid;
}
float bezier3(vec3 arr, float t) {
  float ut = 1.0 - t;
  return (arr.x * ut + arr.y * t) * ut + (arr.y * ut + arr.z * t) * t;
}

vec2 interpolate(vec2 source, vec2 target, float angularDist, float t) {
  if (abs(angularDist - PI) < 0.001) {
    return (1.0 - t) * source + t * target;
  }
  float a = sin((1.0 - t) * angularDist) / sin(angularDist);
  float b = sin(t * angularDist) / sin(angularDist);
  vec2 sin_source = sin(source);
  vec2 cos_source = cos(source);
  vec2 sin_target = sin(target);
  vec2 cos_target = cos(target);
  float x = a * cos_source.y * cos_source.x + b * cos_target.y * cos_target.x;
  float y = a * cos_source.y * sin_source.x + b * cos_target.y * sin_target.x;
  float z = a * sin_source.y + b * sin_target.y;
  return vec2(atan(y, x), atan(z, sqrt(x * x + y * y)));

}

void main() {
  v_color = a_Color;
  v_color.a = v_color.a * opacity;
  vec2 source = radians(a_Instance.rg);
  vec2 target = radians(a_Instance.ba);
  float angularDist = getAngularDist(source, target);
  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));

  if (u_line_type == LineTypeDash) {
    v_distance_ratio = segmentIndex / segmentNumber;
    float total_Distance = pixelDistance(source, target) / 2.0 * PI;
    total_Distance = total_Distance * 16.0; // total_Distance*16.0 调整默认的效果
    v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / total_Distance;
  }

  if (u_animate.x == Animate) {
    v_distance_ratio = segmentIndex / segmentNumber;
  }

  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  v_distance_ratio = segmentIndex / segmentNumber;

  vec4 curr = project_position(vec4(degrees(interpolate(source, target, angularDist, segmentRatio)), 0.0, 1.0), a_Instance64Low.xy);
  vec4 next = project_position(vec4(degrees(interpolate(source, target, angularDist, nextSegmentRatio)), 0.0, 1.0), a_Instance64Low.zw);

  // v_normal = getNormal((next.xy - curr.xy) * indexDir, a_Position.y);
  vec2 offset = project_pixel(getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y));
  //  vec4 project_pos = project_position(vec4(curr.xy, 0, 1.0));
  // gl_Position = project_common_position_to_clipspace(vec4(curr.xy + offset, curr.z, 1.0));

  v_line_data.g = a_Position.x; // 该顶点在弧线上的分段排序
  if (LineTexture == u_line_texture) {
    float d_arcDistrance = length(source - target);
    d_arcDistrance = project_pixel(d_arcDistrance);

    float d_pixelLen = project_pixel(u_icon_step) / 8.0;
    v_line_data.b = floor(d_arcDistrance / d_pixelLen); // 贴图在弧线上重复的数量

    float lineOffsetWidth = length(offset + offset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size); // 定点位置偏移，按地图等级缩放后的距离
    v_line_data.a = lineOffsetWidth / linePixelSize; // 线图层贴图部分的 v 坐标值

    v_iconMapUV = a_iconMapUV;
  }

  gl_Position = project_common_position_to_clipspace(vec4(curr.xy + offset, 0, 1.0));
  setPickingColor(a_PickingColor);
}

`,j2={solid:0,dash:1};class $2 extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=n({data:this.iconService.getCanvas(),mag:g.NEAREST,min:g.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,UV:12})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:n,textureBlend:r="normal",lineType:i="solid",dashArray:o=[10,5],lineTexture:s=!1,iconStep:a=100,segmentNumber:u=30}=this.layer.getLayerConfig(),{animateOption:l}=this.layer.getLayerConfig();if(o.length===2&&o.push(0,0),this.rendererService.getDirty()){var c;(c=this.texture)===null||c===void 0||c.bind()}let h=0,f=[0,0,0,0],p=[0,0,0,0];e&&n&&(f=Te(e),p=Te(n),h=1);let _=this.layer.getLayerAnimateTime();isNaN(_)&&(_=0);const v={u_animate:this.animateOption2Array(l),u_dash_array:o,u_sourceColor:f,u_targetColor:p,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:u,u_line_type:j2[i]||0,u_icon_step:a,u_line_texture:s?1:0,u_textureBlend:r==="normal"?0:1,u_time:_,u_linearColor:h};return this.getUniformsBufferInfo(v)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return L(function*(){const{segmentNumber:n=30}=e.layer.getLayerConfig();return[yield e.layer.buildLayerModel({moduleName:"lineGreatCircle",vertexShader:W2,fragmentShader:X2,triangulation:Ou,styleOption:{segmentNumber:n},defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:$.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[r[3],r[4],r[5],r[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:$.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>[ke(r[3]),ke(r[4]),ke(r[5]),ke(r[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{texture:r}=e,{x:i,y:o}=n[r]||{x:0,y:0};return[i,o]}}})}}const Z2=`// #extension GL_OES_standard_derivatives : enable
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_blur;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed: 0.0;
  float u_vertexScale: 1.0;
  float u_raisingHeight: 0.0;
  float u_strokeWidth: 0.0;
  float u_textureBlend;
  float u_line_texture;
  float u_linearDir: 1.0;
  float u_linearColor: 0;
  float u_time;
};

in vec4 v_color;
in vec4 v_stroke;
// dash
in vec4 v_dash_array;
in float v_d_distance_ratio;
in vec2 v_iconMapUV;
in vec4 v_texture_data;

out vec4 outputColor;
#pragma include "picking"

// [animate, duration, interval, trailLength],
void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_d_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      // 虚线部分
      discard;
    };
  }
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_texture_data.r; // 当前点位距离占线总长的比例
  if(u_linearDir < 1.0) {
    d_distance_ratio = v_texture_data.a;
  }
  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, d_distance_ratio);
    outputColor.a *= v_color.a;
  } else { // 使用 color 方法传入的颜色
     outputColor = v_color;
  }
  // anti-alias
  // float blur = 1.0 - smoothstep(u_blur, 1., length(v_normal.xy));
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_texture_data.g;      // 当前顶点的距离
    float d_texPixelLen = v_texture_data.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_texture_data.a;  // 线图层贴图部分的 v 坐标值

    // v = max(smoothstep(0.95, 1.0, v), v);
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
     vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor += pattern;
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = pattern;
    }
  } 

  float v = v_texture_data.a;
  float strokeWidth = min(0.5, u_strokeWidth);
  // 绘制 border
  if(strokeWidth > 0.01) {
    float borderOuterWidth = strokeWidth / 2.0;


    if(v >= 1.0 - strokeWidth || v <= strokeWidth) {
      if(v > strokeWidth) { // 外侧
        float linear = smoothstep(0.0, 1.0, (v - (1.0 - strokeWidth))/strokeWidth);
        //  float linear = step(0.0, (v - (1.0 - borderWidth))/borderWidth);
        outputColor.rgb = mix(outputColor.rgb, v_stroke.rgb, linear);
      } else if(v <= strokeWidth) {
        float linear = smoothstep(0.0, 1.0, v/strokeWidth);
        outputColor.rgb = mix(v_stroke.rgb, outputColor.rgb, linear);
      }
    }

    if(v < borderOuterWidth) {
      outputColor.a = mix(0.0, outputColor.a, v/borderOuterWidth);
    } else if(v > 1.0 - borderOuterWidth) {
      outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - borderOuterWidth))/borderOuterWidth);
    }
  }

  // blur
  float blurV = v_texture_data.a;
  if(blurV < 0.5) {
    outputColor.a *= mix(u_blur.r, u_blur.g, blurV/0.5);
  } else {
    outputColor.a *= mix(u_blur.g, u_blur.b, (blurV - 0.5)/0.5);
  }
  
  outputColor = filterColor(outputColor);
}
`,Y2=`#define Animate (0.0)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec2 a_Size;
layout(location = ATTRIBUTE_LOCATION_DISTANCE_INDEX) in vec3 a_DistanceAndIndexAndMiter;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec4 a_Normal_Total_Distance;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_blur;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed: 0.0;
  float u_vertexScale: 1.0;
  float u_raisingHeight: 0.0;
  float u_strokeWidth: 0.0;
  float u_textureBlend;
  float u_line_texture;
  float u_linearDir: 1.0;
  float u_linearColor: 0;
  float u_time;
};

out vec4 v_color;
out vec4 v_stroke;
//dash
out vec4 v_dash_array;
out float v_d_distance_ratio;
// texV 线图层 - 贴图部分的 v 坐标（线的宽度方向）
out vec2 v_iconMapUV;
out vec4 v_texture_data;

#pragma include "projection"
#pragma include "picking"

void main() {
  vec2 a_DistanceAndIndex = a_DistanceAndIndexAndMiter.xy;
  float a_Miter = a_DistanceAndIndexAndMiter.z;
  vec3 a_Normal = a_Normal_Total_Distance.xyz;
  float a_Total_Distance = a_Normal_Total_Distance.w;
  //dash输出
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / a_Total_Distance;
  v_d_distance_ratio = a_DistanceAndIndex.x / a_Total_Distance;

  // cal style mapping - 数据纹理映射部分的计算
  float d_texPixelLen; // 贴图的像素长度，根据地图层级缩放
  v_iconMapUV = a_iconMapUV;
  d_texPixelLen = project_float_pixel(u_icon_step);

  v_color = a_Color;
  v_color.a *= opacity;
  v_stroke = stroke;

  vec3 size = a_Miter * setPickingSize(a_Size.x) * a_Normal;

  vec2 offset = project_pixel(size.xy);

  float lineDistance = a_DistanceAndIndex.x;
  float currentLinePointRatio = lineDistance / a_Total_Distance;

  float lineOffsetWidth = length(offset + offset * sign(a_Miter)); // 线横向偏移的距离（向两侧偏移的和）
  float linePixelSize = project_pixel(a_Size.x) * 2.0; // 定点位置偏移，按地图等级缩放后的距离 单侧 * 2
  float texV = lineOffsetWidth / linePixelSize; // 线图层贴图部分的 v 坐标值

  v_texture_data = vec4(currentLinePointRatio, lineDistance, d_texPixelLen, texV);
  // 设置数据集的参数

  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0), a_Position64Low);

  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, a_Size.y, 1.0));

  float h = float(a_Position.z) * u_vertexScale; // 线顶点的高度 - 兼容不存在第三个数值的情况 vertex height
  float lineHeight = a_Size.y; // size 第二个参数代表的高度 [linewidth, lineheight]

  // 兼容 mapbox 在线高度上的效果表现基本一致
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // mapbox
    // 保持高度相对不变
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    h *= mapboxZoomScale;
    h += u_raisingHeight * mapboxZoomScale;
    if (u_heightfixed > 0.0) {
      lineHeight *= mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(
    vec4(project_pos.xy + offset, lineHeight + h, 1.0)
  );

  setPickingColor(a_PickingColor);
}
`;class Dp extends Ae{constructor(...e){super(...e),d(this,"textureEventFlag",!1),d(this,"texture",this.createTexture2D({data:new Uint8Array([0,0,0,0]),width:1,height:1})),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.textures.length===0&&(this.textures=[this.texture]),this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=n({data:this.iconService.getCanvas(),mag:g.NEAREST,min:g.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128})})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,DISTANCE_INDEX:10,NORMAL:11,UV:12})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:n,textureBlend:r="normal",lineType:i="solid",dashArray:o=[10,5,0,0],lineTexture:s=!1,iconStep:a=100,vertexHeightScale:u=20,strokeWidth:l=0,raisingHeight:c=0,heightfixed:h=!1,linearDir:f=xh.VERTICAL,blur:p=[1,1,1,0]}=this.layer.getLayerConfig();let _=o;if(i!=="dash"&&(_=[0,0,0,0]),_.length===2&&_.push(0,0),this.rendererService.getDirty()&&this.texture){var v;(v=this.texture)===null||v===void 0||v.bind()}const{animateOption:m}=this.layer.getLayerConfig();let y=0,T=[0,0,0,0],S=[0,0,0,0];e&&n&&(T=Te(e),S=Te(n),y=1);const x={u_animate:this.animateOption2Array(m),u_dash_array:_,u_blur:p,u_sourceColor:T,u_targetColor:S,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:a,u_heightfixed:Number(h),u_vertexScale:u,u_raisingHeight:Number(c),u_strokeWidth:l,u_textureBlend:r===HS.NORMAL?0:1,u_line_texture:s?1:0,u_linearDir:f===xh.VERTICAL?1:0,u_linearColor:y,u_time:this.layer.getLayerAnimateTime()||0};return this.getUniformsBufferInfo(x)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.textureEventFlag||(e.textureEventFlag=!0,e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture)),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return L(function*(){const{depth:n=!1}=e.layer.getLayerConfig(),{frag:r,vert:i,type:o}=e.getShaders();return e.layer.triangulation=za,[yield e.layer.buildLayerModel({moduleName:"line"+o,vertexShader:i,fragmentShader:r,triangulation:za,defines:e.getDefines(),inject:e.getInject(),depth:{enable:n}})]})()}getShaders(){return{frag:Z2,vert:Y2,type:""}}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"distanceAndIndex",type:$.Attribute,descriptor:{name:"a_DistanceAndIndexAndMiter",shaderLocation:this.attributeLocation.DISTANCE_INDEX,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o,s)=>s===void 0?[r[3],10,r[4]]:[r[3],s,r[4]]}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0],n[1]]:[n,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal_total_distance",type:$.Attribute,descriptor:{name:"a_Normal_Total_Distance",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r,i,o)=>[...o,r[5]]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{texture:r}=e,{x:i,y:o}=n[r]||{x:0,y:0};return[i,o]}}})}}const G2=`
layout(std140) uniform commonUniorm {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  float u_vertexScale: 1.0;
  float u_linearColor: 0;
};
in float v_distanceScale;
in vec4 v_color;
//dash
in vec4 v_dash_array;

out vec4 outputColor;
void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_distanceScale, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      // 虚线部分
      discard;
    };
  }
  if(u_linearColor==1.0){
    outputColor = mix(u_sourceColor, u_targetColor, v_distanceScale);
    outputColor.a *= v_color.a; // 全局透明度
  }
  else{
    outputColor = v_color;
  }
}
`,K2=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec4 a_SizeDistanceAndTotalDistance;

layout(std140) uniform commonUniorm {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  float u_vertexScale: 1.0;
  float u_linearColor: 0;
};

#pragma include "projection"
#pragma include "picking"

out vec4 v_color;
out float v_distanceScale;
out vec4 v_dash_array;

void main() {
  //dash输出
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / a_SizeDistanceAndTotalDistance.a;

  v_color = a_Color;
  v_distanceScale = a_SizeDistanceAndTotalDistance.b / a_SizeDistanceAndTotalDistance.a;
  v_color.a = v_color.a * opacity;
  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0), a_Position64Low);

  float h = float(a_Position.z) * u_vertexScale; // 线顶点的高度 - 兼容不存在第三个数值的情况

  float lineHeight = a_SizeDistanceAndTotalDistance.y;
  // 兼容 mapbox 在线高度上的效果表现基本一致
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // 保持高度相对不变
    h *= 2.0 / pow(2.0, 20.0 - u_Zoom);
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, lineHeight + h, 1.0));
  gl_PointSize = 10.0;

}
`;class q2 extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:n,lineType:r="solid",dashArray:i=[10,5,0,0],vertexHeightScale:o=20}=this.layer.getLayerConfig();let s=i;r!=="dash"&&(s=[0,0,0,0]),s.length===2&&s.push(0,0);let a=0,u=[0,0,0,0],l=[0,0,0,0];e&&n&&(u=Te(e),l=Te(n),a=1);const c={u_sourceColor:u,u_targetColor:l,u_dash_array:s,u_vertexScale:o,u_linearColor:a};return this.getUniformsBufferInfo(c)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}getShaders(){return{frag:G2,vert:K2,type:"lineSimpleNormal"}}buildModels(){var e=this;return L(function*(){e.initUniformsBuffer();const{frag:n,vert:r,type:i}=e.getShaders();return[yield e.layer.buildLayerModel({moduleName:i,vertexShader:r,fragmentShader:n,triangulation:YS,defines:e.getDefines(),inject:e.getInject(),primitive:g.LINES,depth:{enable:!1},pick:!1})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"sizeDistanceAndTotalDistance",type:$.Attribute,descriptor:{name:"a_SizeDistanceAndTotalDistance",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:4,update:(e,n,r)=>{const{size:i=1}=e,o=Array.isArray(i)?[i[0],i[1]]:[i,0];return[o[0],o[1],r[3],r[5]]}}})}}const Q2=`#define Animate 0.0
#define LineTexture 1.0

// line texture

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed;
  float u_linearColor: 0;
  float u_line_texture;
  float u_textureBlend;
  float u_iconStepCount;
  float u_time;
};


in vec2 v_iconMapUV;
in vec4 v_color;
in float v_blur;
in vec4 v_dataset;

out vec4 outputColor;

#pragma include "picking"

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_dataset.r; // 当前点位距离占线总长的比例
  float v = v_dataset.a;

  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, v);
  } else { // 使用 color 方法传入的颜色
     outputColor = v_color;
  }

  outputColor.a *= v_color.a; // 全局透明度
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_dataset.g;      // 当前顶点的距离
    float d_texPixelLen = v_dataset.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_dataset.a;  // 线图层贴图部分的 v 坐标值

    // 计算纹理间隔 start
    float flag = 0.0;
    if(u > 1.0/u_iconStepCount) {
      flag = 1.0;
    }
    u = fract(u*u_iconStepCount);
    // 计算纹理间隔 end

    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    // Tip: 判断纹理间隔
    if(flag > 0.0) {
      pattern = vec4(0.0);
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
  }


  // blur - AA
  if(v < v_blur) {
    outputColor.a = mix(0.0, outputColor.a, v/v_blur);
  } else if(v > 1.0 - v_blur) {
    outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - v_blur))/v_blur);
  }

  outputColor = filterColor(outputColor);
}
`,J2=`#define Animate 0.0
layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec2 a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;
layout(location = ATTRIBUTE_LOCATION_DISTANCE_MITER_TOTAL) in vec3 a_Distance_Total_Miter;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed;
  float u_linearColor: 0;
  float u_line_texture;
  float u_textureBlend;
  float u_iconStepCount;
  float u_time;
};

// texV 线图层 - 贴图部分的 v 坐标（线的宽度方向）
out vec2 v_iconMapUV;
out vec4 v_color;
out float v_blur;
out vec4 v_dataset;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  float a_Distance = a_Distance_Total_Miter.x;
  float a_Miter = a_Distance_Total_Miter.y;
  float a_Total_Distance = a_Distance_Total_Miter.z;

  float d_distance_ratio; // 当前点位距离占线总长的比例
  float d_texPixelLen; // 贴图的像素长度，根据地图层级缩放

  v_iconMapUV = a_iconMapUV;
  if (u_heightfixed < 1.0) {
    // 高度随 zoom 调整
    d_texPixelLen = project_pixel(u_icon_step);
  } else {
    d_texPixelLen = u_icon_step;
  }

  if (u_animate.x == Animate || u_linearColor == 1.0) {
    d_distance_ratio = a_Distance / a_Total_Distance;
  }

  float miter = (a_Miter + 1.0) / 2.0;
  // 设置数据集的参数
  v_dataset[0] = d_distance_ratio; // 当前点位距离占线总长的比例
  v_dataset[1] = a_Distance; // 当前顶点的距离
  v_dataset[2] = d_texPixelLen; // 贴图的像素长度，根据地图层级缩放
  v_dataset[3] = miter; // 线图层贴图部分的 v 坐标值 0 - 1

  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0), a_Position64Low);

  float originSize = a_Size.x; // 固定高度
  if (u_heightfixed < 1.0) {
    originSize = project_float_meter(a_Size.x); // 高度随 zoom 调整
  }

  float wallHeight = originSize * miter;
  float lightWeight = calc_lighting(vec4(project_pos.xy, wallHeight, 1.0));

  v_blur = min(project_float_pixel(2.0) / originSize, 0.05);
  v_color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);

  // 兼容 mapbox 在线高度上的效果表现基本一致
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // mapbox
    // 保持高度相对不变
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    if (u_heightfixed > 0.0) {
      wallHeight *= mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, wallHeight, 1.0));

  setPickingColor(a_PickingColor);
}
`;class eR extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=n({data:this.iconService.getCanvas(),mag:g.NEAREST,min:g.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:12,UV:13,DISTANCE_MITER_TOTAL:15})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:n,textureBlend:r="normal",heightfixed:i=!1,lineTexture:o=!1,iconStep:s=100,iconStepCount:a=1}=this.layer.getLayerConfig(),{animateOption:u}=this.layer.getLayerConfig();if(this.rendererService.getDirty()){var l;(l=this.texture)===null||l===void 0||l.bind()}let c=0,h=[0,0,0,0],f=[0,0,0,0];e&&n&&(h=Te(e),f=Te(n),c=1);const p={u_animate:this.animateOption2Array(u),u_sourceColor:h,u_targetColor:f,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:s,u_heightfixed:Number(i),u_linearColor:c,u_line_texture:o?1:0,u_textureBlend:r==="normal"?0:1,u_iconStepCount:a,u_time:this.layer.getLayerAnimateTime()||0};return this.getUniformsBufferInfo(p)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return L(function*(){return[yield e.layer.buildLayerModel({moduleName:"lineWall",vertexShader:J2,fragmentShader:Q2,triangulation:za,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0],n[1]]:[n,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"distanceAndTotalAndMiter",type:$.Attribute,descriptor:{name:"a_Distance_Total_Miter",shaderLocation:this.attributeLocation.DISTANCE_MITER_TOTAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r)=>[r[3],r[4],r[5]]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{texture:r}=e,{x:i,y:o}=n[r]||{x:0,y:0};return[i,o]}}})}}const tR={arc:C2,arc3d:zh,greatcircle:$2,wall:eR,line:Dp,simple:q2,flowline:H2,earthArc3d:zh};class wp extends Gn{constructor(...e){super(...e),d(this,"type","LineLayer"),d(this,"enableShaderEncodeStyles",["stroke","offsets","opacity","thetaOffset"]),d(this,"arrowInsertCount",0),d(this,"defaultSourceConfig",{data:[{lng1:100,lat1:30,lng2:130,lat2:30}],options:{parser:{type:"json",x:"lng1",y:"lat1",x1:"lng2",y1:"lat2"}}})}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel=new tR[n](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{line:{},linearline:{},simple:{},wall:{},arc3d:{blend:"additive"},arc:{blend:"additive"},greatcircle:{blend:"additive"},tileLine:{},earthArc3d:{},flowline:{},arrow:{}}[e]}getModelType(){var e;return this.layerType?this.layerType:((e=this.shapeOption)===null||e===void 0?void 0:e.field)||"line"}processData(e){if(this.getModelType()!=="simple")return e;const n=[];return e.map(r=>{if(Array.isArray(r.coordinates)&&Array.isArray(r.coordinates[0])&&Array.isArray(r.coordinates[0][0])){const i=D({},r);r.coordinates.map(o=>{n.push(D(D({},i),{},{coordinates:o}))})}else n.push(r)}),n}}const nR=`layout(std140) uniform commonUniorm {
  vec4 u_stroke_color;
  float u_additive;
  float u_stroke_opacity;
  float u_stroke_width;
};

in vec4 v_color;
in float v_blur;
in float v_innerRadius;

out vec4 outputColor;

#pragma include "picking"
void main() {
  vec2 center = vec2(0.5);

  // Tip: 片元到中心点的距离 0 - 1
  float fragmengTocenter = distance(center, gl_PointCoord) * 2.0;
  // Tip: 片元的剪切成圆形
  float circleClipOpacity = 1.0 - smoothstep(v_blur, 1.0, fragmengTocenter);

  if (v_innerRadius < 0.99) {
    // 当存在 stroke 且 stroke > 0.01
    float blurWidth = (1.0 - v_blur) / 2.0;
    vec4 stroke = vec4(u_stroke_color.rgb, u_stroke_opacity);
    if (fragmengTocenter > v_innerRadius + blurWidth) {
      outputColor = stroke;
    } else if (fragmengTocenter > v_innerRadius - blurWidth) {
      float mixR = (fragmengTocenter - (v_innerRadius - blurWidth)) / (blurWidth * 2.0);
      outputColor = mix(v_color, stroke, mixR);
    } else {
      outputColor = v_color;
    }
  } else {
    // 当不存在 stroke 或 stroke <= 0.01
    outputColor = v_color;
  }

  outputColor = filterColor(outputColor);

  if (u_additive > 0.0) {
    outputColor *= circleClipOpacity;
  } else {
    outputColor.a *= circleClipOpacity;
  }

}
`,rR=`
layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;

layout(std140) uniform commonUniorm {
  vec4 u_stroke_color;
  float u_additive;
  float u_stroke_opacity;
  float u_stroke_width;
};

out vec4 v_color;
out float v_blur;
out float v_innerRadius;

#pragma include "projection"
#pragma include "picking"
#pragma include "project"

// 根据 anchor 值计算点精灵的像素偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchorPoint(float anchor, float pointSize) {
  if (anchor < 0.5) {
    return vec2(0.0);
  }

  vec2 offset = vec2(0.0);
  float gap = 2.0 * u_DevicePixelRatio; // 2px 间隔，考虑设备像素比

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    offset.x = -pointSize * 0.5;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    offset.x = pointSize * 0.5;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  // bottom 和 top 增加 2px 间隔，避免图形紧贴参考点
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    offset.y = -pointSize * 0.5 - gap; // top: 图形在坐标下方，额外向下移 2px
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    offset.y = pointSize * 0.5 + gap; // bottom: 图形在坐标上方，额外向上移 2px
  }

  return offset;
}

void main() {
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  v_blur = 1.0 - max(2.0 / a_Size, 0.05);
  v_innerRadius = max((a_Size - u_stroke_width) / a_Size, 0.0);

  vec2 offset = project_pixel(offsets);

  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(vec2(project_pos.xy+offset),project_pos.z,project_pos.w));

  gl_PointSize = a_Size * 2.0 * u_DevicePixelRatio;

  // apply anchor offset in screen space
  vec2 anchorOffset = applyAnchorPoint(anchor, gl_PointSize);
  gl_Position.xy += anchorOffset / u_ViewportSize * 2.0 * gl_Position.w;

  setPickingColor(a_PickingColor);
}
`;function Wh(t){const e=t.coordinates;return{vertices:[...e],indices:[0],size:e.length}}class iR extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9})}getDefaultStyle(){return{blend:"additive"}}getCommonUniformsInfo(){const{blend:e,strokeOpacity:n=1,strokeWidth:r=0,stroke:i="#fff"}=this.layer.getLayerConfig(),o={u_stroke_color:Te(i),u_additive:e==="additive"?1:0,u_stroke_opacity:n,u_stroke_width:r};return this.getUniformsBufferInfo(o)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.layer.triangulation=Wh,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointSimple",vertexShader:rR,fragmentShader:nR,defines:e.getDefines(),inject:e.getInject(),triangulation:Wh,depth:{enable:!1},primitive:g.POINTS})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0]]:[n]}}})}}const oR=`precision highp float;
in vec4 v_color;

#pragma include "picking"

layout(std140) uniform commonUniform {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor: 0;
  float u_heightfixed: 0.0; // 默认不固定
  float u_globel;
  float u_r;
  float u_pickLight: 0.0;
  float u_opacitylinear: 0.0;
  float u_opacitylinear_dir: 1.0;
  float u_lightEnable: 1.0;
};
in float v_lightWeight;
in float v_barLinearZ;
out vec4 outputColor;
void main() {

   outputColor = v_color;

  // 开启透明度渐变
  if(u_opacitylinear > 0.0) {
    outputColor.a *= u_opacitylinear_dir > 0.0 ? (1.0 - v_barLinearZ): v_barLinearZ;
  }

  // picking
  if(u_pickLight > 0.0) {
    outputColor = filterColorAlpha(outputColor, v_lightWeight);
  } else {
    outputColor = filterColor(outputColor);
  }
}
`,sR=`precision highp float;

#define pi 3.1415926535
#define ambientRatio 0.5
#define diffuseRatio 0.3
#define specularRatio 0.2

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec3 a_Size;
layout(location = ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniform {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor: 0;
  float u_heightfixed: 0.0; // 默认不固定
  float u_globel;
  float u_r;
  float u_pickLight: 0.0;
  float u_opacitylinear: 0.0;
  float u_opacitylinear_dir: 1.0;
  float u_lightEnable: 1.0;
};

out vec4 v_color;
out float v_lightWeight;
out float v_barLinearZ;
// 用于将在顶点着色器中计算好的样式值传递给片元


#pragma include "projection"
#pragma include "light"
#pragma include "picking"

float getYRadian(float x, float z) {
  if(x > 0.0 && z > 0.0) {
    return atan(x/z);
  } else if(x > 0.0 && z <= 0.0){
    return atan(-z/x) + pi/2.0;
  } else if(x <= 0.0 && z <= 0.0) {
    return  pi + atan(x/z); //atan(x/z) +
  } else {
    return atan(z/-x) + pi*3.0/2.0;
  }
}

float getXRadian(float y, float r) {
  return atan(y/r);
}

void main() {

  // cal style mapping - 数据纹理映射部分的计算
  vec3 size = a_Size * a_Position;

  // a_Position.z 是在构建网格的时候传入的标准值 0 - 1，在插值器插值可以获取 0～1 线性渐变的值
  v_barLinearZ =  a_Position.z;

  vec3 offset = size; // 控制圆柱体的大小 - 从标准单位圆柱体进行偏移
  if(u_heightfixed < 1.0) { // 圆柱体不固定高度
    //
  } else {// 圆柱体固定高度 （ 处理 mapbox ）
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      offset *= 4.0/pow(2.0, 21.0 - u_Zoom);
    }
  }


  vec4 project_pos = project_position(vec4(a_Pos.xy, 0., 1.0));

  // u_r 控制圆柱的生长
  vec4 pos = vec4(project_pos.xy + offset.xy, offset.z * u_r, 1.0);

  // 圆柱光照效果
  float lightWeight = 1.0;
  if(u_lightEnable > 0.0) { // 取消三元表达式，增强健壮性
    lightWeight = calc_lighting(pos);
  }
  v_lightWeight = lightWeight;
  // 设置圆柱的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    v_color = mix(u_sourceColor, u_targetColor, v_barLinearZ);
    v_color.rgb *= lightWeight;
  } else { // 使用 color 方法传入的颜色
     v_color = a_Color;
  }
  v_color.a *= u_opacity;


  // 在地球模式下，将原本垂直于 xy 平面的圆柱调整姿态到适应圆的角度
  //旋转矩阵mx，创建绕x轴旋转矩阵
  float r = sqrt(a_Pos.z*a_Pos.z + a_Pos.x*a_Pos.x);
  float xRadian = getXRadian(a_Pos.y, r);
  float xcos = cos(xRadian);//求解旋转角度余弦值
  float xsin = sin(xRadian);//求解旋转角度正弦值
  mat4 mx = mat4(
    1,0,0,0,
    0,xcos,-xsin,0,
    0,xsin,xcos,0,
    0,0,0,1);

  //旋转矩阵my，创建绕y轴旋转矩阵
  float yRadian = getYRadian(a_Pos.x, a_Pos.z);
  float ycos = cos(yRadian);//求解旋转角度余弦值
  float ysin = sin(yRadian);//求解旋转角度正弦值
  mat4 my = mat4(
    ycos,0,-ysin,0,
    0,1,0,0,
    ysin,0,ycos,0,
    0,0,0,1);

  gl_Position = u_ViewProjectionMatrix * vec4(( my * mx *  vec4(a_Position * a_Size, 1.0)).xyz + a_Pos, 1.0);


  setPickingColor(a_PickingColor);
}
`,{isNumber:aR}=we;let uR=class extends Ae{constructor(...e){super(...e),d(this,"raiseCount",0),d(this,"raiseRepeat",0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,POS:10,NORMAL:11})}getCommonUniformsInfo(){const{animateOption:e={enable:!1,speed:.01,repeat:!1},opacity:n=1,sourceColor:r,targetColor:i,pickLight:o=!1,heightfixed:s=!0,opacityLinear:a={enable:!1,dir:"up"},lightEnable:u=!0}=this.layer.getLayerConfig();let l=0,c=[0,0,0,0],h=[0,0,0,0];if(r&&i&&(c=Te(r),h=Te(i),l=1),this.raiseCount<1&&this.raiseRepeat>0&&e.enable){const{speed:_=.01}=e;this.raiseCount+=_,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}const f={u_sourceColor:c,u_targetColor:h,u_linearColor:l,u_pickLight:Number(o),u_heightfixed:Number(s),u_r:e.enable&&this.raiseRepeat>0?this.raiseCount:1,u_opacity:aR(n)?n:1,u_opacitylinear:Number(a.enable),u_opacitylinear_dir:a.dir==="up"?1:0,u_lightEnable:Number(u)};return this.getUniformsBufferInfo(f)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{animateOption:{repeat:n=1}}=e.layer.getLayerConfig();return e.raiseRepeat=n,[yield e.layer.buildLayerModel({moduleName:"pointEarthExtrude",vertexShader:sR,fragmentShader:oR,triangulation:Mu,depth:{enable:!0},defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:g.FRONT},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:e=>{const{size:n}=e;if(n){let r=[];return Array.isArray(n)&&(r=n.length===2?[n[0],n[0],n[1]]:n),Array.isArray(n)||(r=[n,n,n]),r}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:$.Attribute,descriptor:{name:"a_Pos",shaderLocation:this.attributeLocation.POS,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:e=>{const n=On(e.coordinates);return Mp([n[0],n[1]])}}})}};const lR=`in vec4 v_data;
in vec4 v_color;
in float v_radius;

layout(std140) uniform commonUniform {
  float u_additive;
  float u_stroke_opacity : 1;
  float u_stroke_width : 2;
  float u_blur : 0.0;
};
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {
  int shape = int(floor(v_data.w + 0.5));

  vec4 strokeColor = u_stroke == vec4(0.0) ? v_color : u_stroke;

  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius + u_stroke_width);

  float outer_df;
  float inner_df;
  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'
  if (shape == 0) {
    outer_df = sdCircle(v_data.xy, 1.0);
    inner_df = sdCircle(v_data.xy, r);
  } else if (shape == 1) {
    outer_df = sdEquilateralTriangle(1.1 * v_data.xy);
    inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);
  } else if (shape == 2) {
    outer_df = sdBox(v_data.xy, vec2(1.));
    inner_df = sdBox(v_data.xy, vec2(r));
  } else if (shape == 3) {
    outer_df = sdPentagon(v_data.xy, 0.8);
    inner_df = sdPentagon(v_data.xy, r * 0.8);
  } else if (shape == 4) {
    outer_df = sdHexagon(v_data.xy, 0.8);
    inner_df = sdHexagon(v_data.xy, r * 0.8);
  } else if (shape == 5) {
    outer_df = sdOctogon(v_data.xy, 1.0);
    inner_df = sdOctogon(v_data.xy, r);
  } else if (shape == 6) {
    outer_df = sdHexagram(v_data.xy, 0.52);
    inner_df = sdHexagram(v_data.xy, r * 0.52);
  } else if (shape == 7) {
    outer_df = sdRhombus(v_data.xy, vec2(1.0));
    inner_df = sdRhombus(v_data.xy, vec2(r));
  } else if (shape == 8) {
    outer_df = sdVesica(v_data.xy, 1.1, 0.8);
    inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);
  }

  if(outer_df > antialiasblur + 0.018) discard;

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(
    antialiasblur,
    0.0,
    inner_df
  );

  if(u_stroke_width < 0.01) {
    outputColor = vec4(v_color.rgb, v_color.a * u_opacity);
  } else {
    outputColor = mix(vec4(v_color.rgb, v_color.a * u_opacity), strokeColor * u_stroke_opacity, color_t);
  }

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
    outputColor = filterColorAlpha(outputColor, outputColor.a);
  } else {
    outputColor.a *= opacity_t;
    outputColor = filterColor(outputColor);
  }
}
`,cR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_SHAPE) in float a_Shape;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;

layout(std140) uniform commonUniform {
  float u_additive;
  float u_stroke_opacity : 1;
  float u_stroke_width : 2;
  float u_blur : 0.0;
};
out vec4 v_data;
out vec4 v_color;
out float v_radius;

#pragma include "projection"
#pragma include "picking"

// 根据 anchor 值计算 extrude 偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchor(vec2 extrude, float anchor) {
  if (anchor < 0.5) {
    return extrude;
  }

  vec2 offset = vec2(0.0);

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    // top-right, right, bottom-right -> shift left
    offset.x = -1.0;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    // bottom-left, left, top-left -> shift right
    offset.x = 1.0;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    // top, top-right, top-left -> shift down
    offset.y = -1.0;
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    // bottom-right, bottom, bottom-left, bottom-center -> shift up
    offset.y = 1.0;
  }

  return extrude + offset;
}

void main() {
  vec3 extrude = a_Extrude;
  float shape_type = a_Shape;
  /*
  *  setPickingSize 设置拾取大小
  */
  float newSize = setPickingSize(a_Size);
  // float newSize = setPickingSize(a_Size) * 0.00001038445708445579;

  // unpack color(vec2)
  v_color = a_Color;

  // radius(16-bit)
  v_radius = newSize;

  // anti-alias
  //  float antialiased_blur = -max(u_blur, antialiasblur);
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / newSize, u_blur);

  // apply anchor to extrude direction
  vec2 anchoredExtrude = applyAnchor(extrude.xy, anchor);

  // TODP: sign() 是为了兼容地球模式，同时避免 anchor 偏移后为 0 时除以零产生 NaN
  // 注意：v_data 必须使用原始 extrude 而非 anchoredExtrude，因为 SDF 形状计算需要基于原始形状坐标系
  // anchoredExtrude 只用于位置偏移，不改变形状本身的 SDF 采样
  v_data = vec4(sign(extrude.x), sign(extrude.y), antialiasblur,shape_type);

  gl_Position = u_ViewProjectionMatrix * vec4(a_Position + anchoredExtrude * newSize * 0.1 + vec3(offsets,0.0), 1.0);

  setPickingColor(a_PickingColor);
}
`;let hR=class extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,SHAPE:10,EXTRUDE:11})}getCommonUniformsInfo(){const{strokeOpacity:e=1,strokeWidth:n=0,blend:r,blur:i=0}=this.layer.getLayerConfig();this.layer.getLayerConfig();const o={u_additive:r==="additive"?1:0,u_stroke_opacity:e,u_stroke_width:n,u_blur:i};return this.getUniformsBufferInfo(o)}initModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.layer.triangulation=Dh,[yield e.layer.buildLayerModel({moduleName:"pointEarthFill",vertexShader:cR,fragmentShader:lR,triangulation:Dh,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!0},blend:e.getBlend()})]})()}animateOption2Array(e){return[e.enable?0:1,e.speed||1,e.rings||3,0]}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"extrude",type:$.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i)=>{const[o,s,a]=r,u=Ft(0,0,1),l=Ft(o,0,a),c=o>=0?Cc(u,l):Math.PI*2-Cc(u,l),h=Math.PI*2-Math.asin(s/100),f=_s();tp(f,f,c),vs(f,f,h);const p=Ft(1,1,0);Ki(p,p,f),li(p,p);const _=Ft(-1,1,0);Ki(_,_,f),li(_,_);const v=Ft(-1,-1,0);Ki(v,v,f),li(v,v);const m=Ft(1,-1,0);Ki(m,m,f),li(m,m);const y=[...p,..._,...v,...m],T=i%4*3;return[y[T],y[T+1],y[T+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=5}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:$.Attribute,descriptor:{name:"a_Shape",shaderLocation:this.attributeLocation.SHAPE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{shape:n=2}=e;return[this.layer.getLayerConfig().shape2d.indexOf(n)]}}})}};const fR=`in vec4 v_color;
in float v_lightWeight;
out vec4 outputColor;

layout(std140) uniform commonUniforms {
  float u_pickLight;
  float u_heightfixed;
  float u_r;
  float u_linearColor;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_opacitylinear;
  float u_opacitylinear_dir;
  float u_lightEnable;
};

#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  outputColor = v_color;
  // 开启透明度渐变
  // picking
  if (u_pickLight > 0.0) {
    outputColor = filterColorAlpha(outputColor, v_lightWeight);
  } else {
    outputColor = filterColor(outputColor);
  }
}
`,dR=`#define pi (3.1415926535)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec3 a_Size;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec4 a_Extrude;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniforms {
  float u_pickLight;
  float u_heightfixed;
  float u_r;
  float u_linearColor;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_opacitylinear;
  float u_opacitylinear_dir;
  float u_lightEnable;
};
out vec4 v_color;
out float v_lightWeight;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

float getYRadian(float x, float z) {
  if (x > 0.0 && z > 0.0) {
    return atan(x / z);
  } else if (x > 0.0 && z <= 0.0) {
    return atan(-z / x) + pi / 2.0;
  } else if (x <= 0.0 && z <= 0.0) {
    return pi + atan(x / z); //atan(x/z) +
  } else {
    return atan(z / -x) + pi * 3.0 / 2.0;
  }
}

float getXRadian(float y, float r) {
  return atan(y / r);
}

void main() {
  vec3 size = a_Size * a_Position;

  vec3 offset = size; // 控制圆柱体的大小 - 从标准单位圆柱体进行偏移

  if (u_heightfixed < 1.0) {
    // 圆柱体不固定高度
  } else {
    // 圆柱体固定高度 （ 处理 mapbox ）
    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      offset *= 4.0 / pow(2.0, 21.0 - u_Zoom);
    }
  }

  vec2 positions = a_Extrude.xy;
  vec2 positions64Low = a_Extrude.zw;
  vec4 project_pos = project_position(vec4(positions, 0.0, 1.0), positions64Low);

  // u_r 控制圆柱的生长
  vec4 pos = vec4(project_pos.xy + offset.xy, offset.z * u_r, 1.0);

  // // 圆柱光照效果
  float lightWeight = 1.0;

  if (u_lightEnable > 0.0) {
    // 取消三元表达式，增强健壮性
    lightWeight = calc_lighting(pos);
  }

  v_lightWeight = lightWeight;

  v_color = a_Color;

  // 设置圆柱的底色
  if (u_linearColor == 1.0) {
    // 使用渐变颜色
    v_color = mix(u_sourceColor, u_targetColor, a_Position.z);
    v_color.a = v_color.a * opacity;
  } else {
    v_color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);
  }

  if (u_opacitylinear > 0.0) {
    v_color.a *= u_opacitylinear_dir > 0.0 ? 1.0 - a_Position.z : a_Position.z;
  }

  gl_Position = project_common_position_to_clipspace(pos);

  setPickingColor(a_PickingColor);
}
`;let Lp=class extends Ae{constructor(...e){super(...e),d(this,"raiseCount",0),d(this,"raiseRepeat",0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,EXTRUDE:10,NORMAL:11})}getCommonUniformsInfo(){const{animateOption:e={enable:!1,speed:.01,repeat:!1},sourceColor:n,targetColor:r,pickLight:i=!1,heightfixed:o=!1,opacityLinear:s={enable:!1,dir:"up"},lightEnable:a=!0}=this.layer.getLayerConfig();let u=0,l=[0,0,0,0],c=[0,0,0,0];if(n&&r&&(l=Te(n),c=Te(r),u=1),this.raiseCount<1&&this.raiseRepeat>0&&e.enable){const{speed:p=.01}=e;this.raiseCount+=p,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}const h={u_pickLight:Number(i),u_heightfixed:Number(o),u_r:e.enable&&this.raiseRepeat>0?this.raiseCount:1,u_linearColor:u,u_sourceColor:l,u_targetColor:c,u_opacitylinear:Number(s.enable),u_opacitylinear_dir:s.dir==="up"?1:0,u_lightEnable:Number(a)};return this.getUniformsBufferInfo(h)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{depth:n=!0,animateOption:{repeat:r=1}}=e.layer.getLayerConfig();return e.raiseRepeat=r,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointExtrude",vertexShader:dR,fragmentShader:fR,triangulation:Mu,defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:g.FRONT},depth:{enable:n}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:e=>{const{size:n}=e;if(n){let r=[];return Array.isArray(n)&&(r=n.length===2?[n[0],n[0],n[1]]:n),Array.isArray(n)||(r=[n,n,n]),r}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:$.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:4,update:e=>{const n=On(e.coordinates);return[n[0],n[1],ke(n[0]),ke(n[1])]}}})}};const pR=`layout(std140) uniform commonUniforms {
  vec3 u_blur_height_fixed;
  float u_stroke_width;
  float u_additive;
  float u_stroke_opacity;
  float u_size_unit;
  float u_time;
  vec4 u_animate;
};

in vec4 v_color;
in vec4 v_stroke;
in vec4 v_data;
in float v_radius;

#pragma include "scene_uniforms"
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {
  int shape = int(floor(v_data.w + 0.5));
  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius + u_stroke_width);

  float outer_df;
  float inner_df;
  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'
  if (shape == 0) {
    outer_df = sdCircle(v_data.xy, 1.0);
    inner_df = sdCircle(v_data.xy, r);
  } else if (shape == 1) {
    outer_df = sdEquilateralTriangle(1.1 * v_data.xy);
    inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);
  } else if (shape == 2) {
    outer_df = sdBox(v_data.xy, vec2(1.0));
    inner_df = sdBox(v_data.xy, vec2(r));
  } else if (shape == 3) {
    outer_df = sdPentagon(v_data.xy, 0.8);
    inner_df = sdPentagon(v_data.xy, r * 0.8);
  } else if (shape == 4) {
    outer_df = sdHexagon(v_data.xy, 0.8);
    inner_df = sdHexagon(v_data.xy, r * 0.8);
  } else if (shape == 5) {
    outer_df = sdOctogon(v_data.xy, 1.0);
    inner_df = sdOctogon(v_data.xy, r);
  } else if (shape == 6) {
    outer_df = sdHexagram(v_data.xy, 0.52);
    inner_df = sdHexagram(v_data.xy, r * 0.52);
  } else if (shape == 7) {
    outer_df = sdRhombus(v_data.xy, vec2(1.0));
    inner_df = sdRhombus(v_data.xy, vec2(r));
  } else if (shape == 8) {
    outer_df = sdVesica(v_data.xy, 1.1, 0.8);
    inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);
  }

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(antialiasblur, 0.0, inner_df);

  float PI = 3.14159;
  float N_RINGS = 3.0;
  float FREQ = 1.0;

  if (u_stroke_width < 0.01) {
    outputColor = v_color;
  } else {
    outputColor = mix(v_color, v_stroke * u_stroke_opacity, color_t);
  }
  float intensity = 1.0;
  if (u_time != -1.0) {
    //wave相关逻辑
    float d = length(v_data.xy);
    if (d > 0.5) {
      discard;
    }
    intensity =
      clamp(cos(d * PI), 0.0, 1.0) *
      clamp(cos(2.0 * PI * (d * 2.0 * u_animate.z - u_animate.y * u_time)), 0.0, 1.0);
  }

  if (u_additive > 0.0) {
    outputColor *= opacity_t;
    outputColor *= intensity; //wave
    outputColor = filterColorAlpha(outputColor, outputColor.a);
  } else {
    outputColor.a *= opacity_t;
    outputColor.a *= intensity; //wave
    outputColor = filterColor(outputColor);
  }
  // 作为 mask 模板时需要丢弃透明的像素
  if (outputColor.a < 0.01) {
    discard;
  }
}
`,_R=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_SHAPE) in float a_Shape;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;

layout(std140) uniform commonUniforms {
  vec3 u_blur_height_fixed;
  float u_stroke_width;
  float u_additive;
  float u_stroke_opacity;
  float u_size_unit;
  float u_time;
  vec4 u_animate;
};

out vec4 v_color;
out vec4 v_stroke;
out vec4 v_data;
out float v_radius;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

// 根据 anchor 值计算 extrude 偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchor(vec2 extrude, float anchor) {
  if (anchor < 0.5) {
    return extrude;
  }

  vec2 offset = vec2(0.0);

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    // top-right, right, bottom-right -> shift left
    offset.x = -1.0;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    // bottom-left, left, top-left -> shift right
    offset.x = 1.0;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    // top, top-right, top-left -> shift down
    offset.y = -1.0;
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    // bottom-right, bottom, bottom-left, bottom-center -> shift up
    offset.y = 1.0;
  }

  return extrude + offset;
}

void main() {
  // 透明度计算
   v_stroke = stroke;
  vec3 extrude = a_Extrude;
  float shape_type = a_Shape;
  /*
  *  setPickingSize 设置拾取大小
  *  u_meter2coord 在等面积大小的时候设置单位
  */
  float newSize = setPickingSize(a_Size);
  // float newSize = setPickingSize(a_Size) * 0.00001038445708445579;



  // unpack color(vec2)
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);

  if(u_size_unit == 1.0) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }

   v_radius = newSize;

  // anti-alias
  //  float antialiased_blur = -max(u_blur, antialiasblur);
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / newSize, u_blur_height_fixed.x);

  // apply anchor to extrude direction
  vec2 anchoredExtrude = applyAnchor(extrude.xy, anchor);

  vec2 offset = (anchoredExtrude * (newSize + u_stroke_width) + offsets);

  offset = project_pixel(offset);
  offset = rotate_matrix(offset,rotation);

  // TODP: sign() 是为了兼容地球模式，同时避免 anchor 偏移后为 0 时除以零产生 NaN
  // 注意：v_data 必须使用原始 extrude 而非 anchoredExtrude，因为 SDF 形状计算需要基于原始形状坐标系
  // anchoredExtrude 只用于位置偏移，不改变形状本身的 SDF 采样
  v_data = vec4(sign(extrude.x), sign(extrude.y), antialiasblur,shape_type);

  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0), a_Position64Low);
  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, project_pixel(setPickingOrder(0.0)), 1.0));

  float raisingHeight = u_blur_height_fixed.y;

  if(u_blur_height_fixed.z < 1.0) { // false
    raisingHeight = project_pixel(u_blur_height_fixed.y);
  } else {
     if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_blur_height_fixed.y * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, raisingHeight, 1.0));

  setPickingColor(a_PickingColor);
}
`;let Up=class extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,SHAPE:10,EXTRUDE:11})}getCommonUniformsInfo(){const{strokeOpacity:e=1,strokeWidth:n=0,blend:r,blur:i=0,raisingHeight:o=0,heightfixed:s=!1,unit:a="pixel"}=this.layer.getLayerConfig();let u=this.getAnimateUniforms().u_time;isNaN(u)&&(u=-1);const l={u_blur_height_fixed:[i,Number(o),Number(s)],u_stroke_width:n,u_additive:r==="additive"?1:0,u_stroke_opacity:e,u_size_unit:Iu[a],u_time:u,u_animate:this.getAnimateUniforms().u_animate};return this.getUniformsBufferInfo(l)}getAnimateUniforms(){const{animateOption:e={enable:!1}}=this.layer.getLayerConfig();return{u_animate:this.animateOption2Array(e),u_time:e.enable?this.layer.getLayerAnimateTime():-1}}getAttribute(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Hn)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{frag:n,vert:r,type:i}=e.getShaders();return e.layer.triangulation=Hn,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:i,vertexShader:r,fragmentShader:n,defines:e.getDefines(),inject:e.getInject(),triangulation:Hn,depth:{enable:!1}})]})()}getShaders(){return{frag:pR,vert:_R,type:"pointFill"}}animateOption2Array(e){return[e.enable?0:1,e.speed||1,e.rings||3,0]}registerBuiltinAttributes(){const e=this.layer.getLayerConfig().shape2d;this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:$.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:(n,r,i,o)=>{const s=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],a=o%4*3;return[s[a],s[a+1],s[a+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:n=>{const{size:r=5}=n;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:$.Attribute,descriptor:{name:"a_Shape",shaderLocation:this.attributeLocation.SHAPE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:n=>{const{shape:r=2}=n;return[e.indexOf(r)]}}})}};const vR=`in vec2 v_uv;// 本身的 uv 坐标
in vec2 v_Iconuv;
in float v_opacity;
out vec4 outputColor;

uniform sampler2D u_texture;
layout(std140) uniform commonUniform {
  vec2 u_textSize;
  float u_heightfixed: 0.0;
  float u_raisingHeight: 0.0;
  float u_size_unit;
};

#pragma include "scene_uniforms"
#pragma include "sdf_2d"
#pragma include "picking"

void main() {
  vec2 pos = v_Iconuv / u_textSize + v_uv / u_textSize * 64.;
  outputColor = texture(SAMPLER_2D(u_texture), pos);
  outputColor.a *= v_opacity;
  outputColor = filterColor(outputColor);
}
`,mR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniform {
  vec2 u_textSize;
  float u_heightfixed;
  float u_raisingHeight;
  float u_size_unit;
};

out vec2 v_uv;
out vec2 v_Iconuv;
out float v_opacity;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

// 根据 anchor 值计算 extrude 偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchor(vec2 extrude, float anchor) {
  if (anchor < 0.5) {
    return extrude;
  }

  vec2 offset = vec2(0.0);

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    // top-right, right, bottom-right -> shift left
    offset.x = -1.0;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    // bottom-left, left, top-left -> shift right
    offset.x = 1.0;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    // top, top-right, top-left -> shift down
    offset.y = -1.0;
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    // bottom-right, bottom, bottom-left, bottom-center -> shift up
    offset.y = 1.0;
  }

  return extrude + offset;
}

void main() {
  vec3 extrude = a_Extrude;
  v_uv = (a_Extrude.xy + 1.0) / 2.0;
  v_uv.x = 1.0 - v_uv.x;
  v_uv.y = 1.0 - v_uv.y;
  v_Iconuv = a_Uv;
  v_opacity = opacity;
  float newSize = a_Size;
  if (u_size_unit == 1.0) {
    newSize = newSize * u_PixelsPerMeter.z;
  }

  // apply anchor to extrude direction
  vec2 anchoredExtrude = applyAnchor(extrude.xy, anchor);

  // vec2 offset = (u_RotateMatrix * extrude.xy * (a_Size) + textrueOffsets);
  vec2 offset = anchoredExtrude.xy * newSize + offsets;

  offset = rotate_matrix(offset, rotation);

  offset = project_pixel(offset);

  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, 0.0, 1.0));

  setPickingColor(a_PickingColor);
}
`;class gR extends Ae{constructor(...e){super(...e),d(this,"meter2coord",1),d(this,"texture",void 0),d(this,"isMeter",!1),d(this,"radian",0),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),this.layerService.throttleRenderLayers();return}this.texture=n({data:this.iconService.getCanvas(),mag:g.LINEAR,min:g.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128,mipmap:!0}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,EXTRUDE:10,UV:11})}getCommonUniformsInfo(){const{raisingHeight:e=0,heightfixed:n=!1,unit:r="pixel"}=this.layer.getLayerConfig();if(this.rendererService.getDirty()){var i;(i=this.texture)===null||i===void 0||i.bind()}const o={u_textSize:[1024,this.iconService.canvasHeight||128],u_heightfixed:Number(n),u_raisingHeight:Number(e),u_size_unit:Iu[r]};return this.getUniformsBufferInfo(o)}getAttribute(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Hn)}initModels(){var e=this;return L(function*(){return e.iconService.on("imageUpdate",e.updateTexture),e.updateTexture(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointFillImage",vertexShader:mR,fragmentShader:vR,triangulation:Hn,depth:{enable:!1},defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:g.FRONT}})]})()}clearModels(){var e;this.iconService.off("imageUpdate",this.updateTexture),(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{shape:r}=e,{x:i,y:o}=n[r]||{x:-64,y:-64};return[i,o]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:$.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i)=>{const o=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],s=i%4*3;return[o[s],o[s+1],o[s+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=5}=e;return Array.isArray(n)?[n[0]]:[n]}}})}}class ER{constructor(e,n,r){d(this,"boxCells",[]),d(this,"xCellCount",void 0),d(this,"yCellCount",void 0),d(this,"boxKeys",void 0),d(this,"bboxes",void 0),d(this,"width",void 0),d(this,"height",void 0),d(this,"xScale",void 0),d(this,"yScale",void 0),d(this,"boxUid",void 0);const i=this.boxCells;this.xCellCount=Math.ceil(e/r),this.yCellCount=Math.ceil(n/r);for(let o=0;o<this.xCellCount*this.yCellCount;o++)i.push([]);this.boxKeys=[],this.bboxes=[],this.width=e,this.height=n,this.xScale=this.xCellCount/e,this.yScale=this.yCellCount/n,this.boxUid=0}insert(e,n,r,i,o){this.forEachCell(n,r,i,o,this.insertBoxCell,this.boxUid++),this.boxKeys.push(e),this.bboxes.push(n),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(o)}query(e,n,r,i,o){return this.queryHitTest(e,n,r,i,!1,o)}hitTest(e,n,r,i,o){return this.queryHitTest(e,n,r,i,!0,o)}insertBoxCell(e,n,r,i,o,s){this.boxCells[o].push(s)}queryHitTest(e,n,r,i,o,s){if(r<0||e>this.width||i<0||n>this.height)return o?!1:[];const a=[];if(e<=0&&n<=0&&this.width<=r&&this.height<=i){if(o)return!0;for(let l=0;l<this.boxKeys.length;l++)a.push({key:this.boxKeys[l],x1:this.bboxes[l*4],y1:this.bboxes[l*4+1],x2:this.bboxes[l*4+2],y2:this.bboxes[l*4+3]});return s?a.filter(s):a}const u={hitTest:o,seenUids:{box:{},circle:{}}};return this.forEachCell(e,n,r,i,this.queryCell,a,u,s),o?a.length>0:a}queryCell(e,n,r,i,o,s,a,u){const l=a.seenUids,c=this.boxCells[o];if(c!==null){const h=this.bboxes;for(const f of c)if(!l.box[f]){l.box[f]=!0;const p=f*4;if(e<=h[p+2]&&n<=h[p+3]&&r>=h[p+0]&&i>=h[p+1]&&(!u||u(this.boxKeys[f]))){if(a.hitTest)return s.push(!0),!0;s.push({key:this.boxKeys[f],x1:h[p],y1:h[p+1],x2:h[p+2],y2:h[p+3]})}}}return!1}forEachCell(e,n,r,i,o,s,a,u){const l=this.convertToXCellCoord(e),c=this.convertToYCellCoord(n),h=this.convertToXCellCoord(r),f=this.convertToYCellCoord(i);for(let p=l;p<=h;p++)for(let _=c;_<=f;_++){const v=this.xCellCount*_+p;if(o.call(this,e,n,r,i,v,s,a,u))return}}convertToXCellCoord(e){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(e*this.xScale)))}convertToYCellCoord(e){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(e*this.yScale)))}}class kp{constructor(e,n){d(this,"width",void 0),d(this,"height",void 0),d(this,"grid",void 0),d(this,"viewportPadding",100),d(this,"screenRightBoundary",void 0),d(this,"screenBottomBoundary",void 0),d(this,"gridRightBoundary",void 0),d(this,"gridBottomBoundary",void 0),this.width=e,this.height=n,this.viewportPadding=Math.max(e,n),this.grid=new ER(e+this.viewportPadding,n+this.viewportPadding,25),this.screenRightBoundary=e+this.viewportPadding,this.screenBottomBoundary=n+this.viewportPadding,this.gridRightBoundary=e+2*this.viewportPadding,this.gridBottomBoundary=n+2*this.viewportPadding}placeCollisionBox(e){const n=e.x1+e.anchorPointX+this.viewportPadding,r=e.y1+e.anchorPointY+this.viewportPadding,i=e.x2+e.anchorPointX+this.viewportPadding,o=e.y2+e.anchorPointY+this.viewportPadding;return!this.isInsideGrid(n,r,i,o)||this.grid.hitTest(n,r,i,o)?{box:[]}:{box:[n,r,i,o]}}insertCollisionBox(e,n){const r={featureIndex:n};this.grid.insert(r,e[0],e[1],e[2],e[3])}project(e,n,r){const i=v1(n,r,0,1),o=rp(),s=c1(...e);return Tn(o,i,s),{x:(o[0]/o[3]+1)/2*this.width+this.viewportPadding,y:(-o[1]/o[3]+1)/2*this.height+this.viewportPadding}}isInsideGrid(e,n,r,i){return r>=0&&e<this.gridRightBoundary&&i>=0&&n<this.gridBottomBoundary}}const jh=`layout(std140) uniform commonUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
};

uniform sampler2D u_texture;

in vec4 v_color;
in vec2 v_uv;
in float v_opacity;

#pragma include "picking"

out vec4 outputColor;

void main() {
  vec2 pos = v_uv / u_textSize + gl_PointCoord / u_textSize * 64.0;
  vec4 textureColor;

  // Y = 0.299R + 0.587G + 0.114B // 亮度提取

  textureColor = texture(SAMPLER_2D(u_texture), pos);

  // Tip: 去除边缘部分 mipmap 导致的混合变暗
  float fragmengTocenter = distance(vec2(0.5), gl_PointCoord);
  if (fragmengTocenter >= 0.5) {
    float luma = 0.299 * textureColor.r + 0.587 * textureColor.g + 0.114 * textureColor.b;
    textureColor.a *= luma;
  }

  if (
    all(lessThan(v_color, vec4(1.0 + 0.00001))) && all(greaterThan(v_color, vec4(1.0 - 0.00001))) ||
    v_color == vec4(1.0)
  ) {
    outputColor = textureColor;
  } else {
    outputColor = step(0.01, textureColor.z) * v_color;
  }
  outputColor.a *= v_opacity;
  if (outputColor.a < 0.01) {
    discard;
  }
  outputColor = filterColor(outputColor);
}
`,$h=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
};

out vec4 v_color;
out vec2 v_uv;
out float v_opacity;

#pragma include "projection"
#pragma include "picking"

// 根据 anchor 值计算点精灵的像素偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchorPoint(float anchor, float pointSize) {
  if (anchor < 0.5) {
    return vec2(0.0);
  }

  vec2 offset = vec2(0.0);
  float gap = 2.0 * u_DevicePixelRatio; // 2px 间隔，考虑设备像素比

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    offset.x = -pointSize * 0.5;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    offset.x = pointSize * 0.5;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  // bottom 和 top 增加 2px 间隔，避免图形紧贴参考点
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    offset.y = -pointSize * 0.5 - gap; // top: 图形在坐标下方，额外向下移 2px
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    offset.y = pointSize * 0.5 + gap; // bottom: 图形在坐标上方，额外向上移 2px
  }

  return offset;
}

void main() {
  // cal style mapping - 数据纹理映射部分的计算
  v_color = a_Color;
  v_opacity = opacity;
  v_uv = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);

  vec2 offset = project_pixel(offsets);

  float raisingHeight = u_raisingHeight;
  if (u_heightfixed < 1.0) {
    // false
    raisingHeight = project_pixel(u_raisingHeight);
  } else {
    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, raisingHeight, 1.0));

  gl_PointSize = a_Size * 2.0 * u_DevicePixelRatio;

  // apply anchor offset in screen space
  vec2 anchorOffset = applyAnchorPoint(anchor, gl_PointSize);
  gl_Position.xy += anchorOffset / u_ViewportSize * 2.0 * gl_Position.w;

  setPickingColor(a_PickingColor);
}
`;class zp extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"imageFilterMap",null),d(this,"currentZoom",-1),d(this,"extent",void 0),d(this,"preAllowOverlap",!0),d(this,"updateTexture",()=>{const{createTexture2D:n}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),setTimeout(()=>{this.layerService.throttleRenderLayers()});return}this.texture=n({data:this.iconService.getCanvas(),mag:g.LINEAR,min:g.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128,mipmap:!0})})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,UV:10})}getUninforms(){if(this.rendererService.getDirty()){var e;(e=this.texture)===null||e===void 0||e.bind()}const n=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},n.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{raisingHeight:e=0,heightfixed:n=!1}=this.layer.getLayerConfig(),r={u_textSize:[1024,this.iconService.canvasHeight||128],u_raisingHeight:Number(e),u_heightfixed:Number(n),u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(r)}initModels(){var e=this;return L(function*(){const{allowOverlap:n=!0}=e.layer.getLayerConfig();return e.extent=e.imageExtent(),e.preAllowOverlap=n,e.iconService.on("imageUpdate",e.updateTexture),e.updateTexture(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{allowOverlap:n=!0}=e.layer.getLayerConfig();return e.initUniformsBuffer(),n?e.imageFilterMap=null:e.filterImages(),[yield e.layer.buildLayerModel({moduleName:"pointImage",vertexShader:$h,fragmentShader:jh,triangulation:wh.bind(e),defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},primitive:g.POINTS})]})()}needUpdate(){var e=this;return L(function*(){const{allowOverlap:n=!0}=e.layer.getLayerConfig();if(n!==e.preAllowOverlap)return e.preAllowOverlap=n,yield e.reBuildModel(),!0;if(n)return!1;const r=e.mapService.getZoom(),i=e.mapService.getBounds(),o=mu(e.extent,i);return Math.abs(e.currentZoom-r)>.5||!o?(yield e.reBuildModel(),!0):!1})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=5}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:e=>{const n=this.iconService.getIconMap(),{shape:r}=e,{x:i,y:o}=n[r]||{x:-64,y:-64};return[i,o]}}})}filterImages(){const{padding:e=[0,0]}=this.layer.getLayerConfig();this.imageFilterMap={},this.currentZoom=this.mapService.getZoom(),this.extent=this.imageExtent();const{width:n,height:r}=this.rendererService.getViewportSize(),i=new kp(n,r);this.layer.getEncodedData().forEach(s=>{const{id:a=0,size:u=5}=s,l=Array.isArray(u)?u[0]:u,c=On(s.coordinates),h=this.mapService.lngLatToContainer(c),{box:f}=i.placeCollisionBox({x1:-l-e[0],x2:l+e[0],y1:-l-e[1],y2:l+e[1],anchorPointX:h.x,anchorPointY:h.y});f&&f.length&&(i.insertCollisionBox(f,a),this.imageFilterMap[a]=!0)})}imageExtent(){const e=this.mapService.getBounds();return hs(e,.5)}reBuildModel(){var e=this;return L(function*(){const{allowOverlap:n=!0}=e.layer.getLayerConfig();n?e.imageFilterMap=null:e.filterImages();const r=yield e.layer.buildLayerModel({moduleName:"pointImage",vertexShader:$h,fragmentShader:jh,triangulation:wh.bind(e),defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},primitive:g.POINTS});e.layer.models=[r]})()}}const yR=`in vec4 v_color;
out vec4 outputColor;
void main() {
  outputColor = v_color;
}
`,TR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;

layout(std140) uniform u_Common {
  float u_size_scale;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"

// 根据 anchor 值计算点精灵的像素偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchorPoint(float anchor, float pointSize) {
  if (anchor < 0.5) {
    return vec2(0.0);
  }

  vec2 offset = vec2(0.0);
  float gap = 2.0 * u_DevicePixelRatio; // 2px 间隔，考虑设备像素比

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    offset.x = -pointSize * 0.5;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    offset.x = pointSize * 0.5;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  // bottom 和 top 增加 2px 间隔，避免图形紧贴参考点
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    offset.y = -pointSize * 0.5 - gap; // top: 图形在坐标下方，额外向下移 2px
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    offset.y = pointSize * 0.5 + gap; // bottom: 图形在坐标上方，额外向上移 2px
  }

  return offset;
}

void main() {
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);

  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(project_pos);

  gl_PointSize = a_Size * u_size_scale * 2.0 * u_DevicePixelRatio;

  // apply anchor offset in screen space
  vec2 anchorOffset = applyAnchorPoint(anchor, gl_PointSize);
  gl_Position.xy += anchorOffset / u_ViewportSize * 2.0 * gl_Position.w;
}
`;function Zh(t){const e=t.coordinates;return{vertices:[...e],indices:[0],size:e.length}}class Vp extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9})}getDefaultStyle(){return{blend:"additive"}}getCommonUniformsInfo(){const e={u_size_scale:.5};return this.getUniformsBufferInfo(e)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.layer.triangulation=Zh,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointNormal",vertexShader:TR,fragmentShader:yR,triangulation:Zh,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},primitive:g.POINTS,pick:!1})]})()}clearModels(){}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=1}=e;return Array.isArray(n)?[n[0]]:[n]}}})}}const AR=`
layout(std140) uniform commonUniorm{
  float u_additive;
  float u_size_unit;
  float u_speed: 1.0;
  float u_time;
};
in vec4 v_data;
in vec4 v_color;
in float v_radius;
in vec2 v_extrude;
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {

  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius);

  float outer_df = sdCircle(v_data.xy, 1.0);
  float inner_df = sdCircle(v_data.xy, r);

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  outputColor = vec4(v_color.rgb, v_color.a);

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
  } else {
    outputColor.a *= opacity_t;
  }

  if(outputColor.a > 0.0) {
    outputColor = filterColor(outputColor);
  }

  vec2 extrude =  v_extrude;
  vec2 dir = normalize(extrude);
  vec2 baseDir = vec2(1.0, 0.0);
  float pi = 3.14159265359;
  float flag = sign(dir.y);
  float rades = dot(dir, baseDir);
  float radar_v = (flag - 1.0) * -0.5 * acos(rades)/pi;
  // simple AA
  if(radar_v > 0.99) {
    radar_v = 1.0 - (radar_v - 0.99)/0.01;
  }

  outputColor.a *= radar_v;
}
`,SR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;

layout(std140) uniform commonUniorm {
  float u_additive;
  float u_size_unit;
  float u_speed: 1.0;
  float u_time;
};

out vec4 v_data;
out vec4 v_color;
out float v_radius;
out vec2 v_extrude;

#pragma include "projection"
#pragma include "picking"

// 根据 anchor 值计算 extrude 偏移
// anchor: 0=center, 1=top, 2=top-right, 3=right, 4=bottom-right, 5=bottom, 6=bottom-left, 7=left, 8=top-left, 9=bottom-center
vec2 applyAnchor(vec2 extrude, float anchor) {
  if (anchor < 0.5) {
    return extrude;
  }

  vec2 offset = vec2(0.0);

  // horizontal alignment: 左边缘对准坐标 -> 向右移; 右边缘对准坐标 -> 向左移
  if (anchor == 2.0 || anchor == 3.0 || anchor == 4.0) {
    offset.x = -1.0;
  } else if (anchor == 6.0 || anchor == 7.0 || anchor == 8.0) {
    offset.x = 1.0;
  }

  // vertical alignment: 上边缘对准坐标 -> 向下移(图形在坐标下方); 下边缘对准坐标 -> 向上移(图形在坐标上方)
  if (anchor == 1.0 || anchor == 2.0 || anchor == 8.0) {
    // top, top-right, top-left -> shift down
    offset.y = -1.0;
  } else if (anchor == 4.0 || anchor == 5.0 || anchor == 6.0 || anchor == 9.0) {
    // bottom-right, bottom, bottom-left, bottom-center -> shift up
    offset.y = 1.0;
  }

  return extrude + offset;
}

void main() {
  float newSize = setPickingSize(a_Size);

  float time = u_time * u_speed;
  mat2 rotateMatrix = mat2(
    cos(time), sin(time),
    -sin(time), cos(time)
  );

  // apply anchor to extrude direction before rotation
  vec2 anchoredExtrude = applyAnchor(a_Extrude.xy, anchor);
  v_extrude = rotateMatrix * anchoredExtrude;

  v_color = a_Color;
  v_color.a *= opacity;

  float blur = 0.0;
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / a_Size, blur);

  if(u_size_unit == 1.) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }
  v_radius = newSize;

  vec2 offset = (anchoredExtrude * (newSize));

  offset = project_pixel(offset);

  v_data = vec4(anchoredExtrude.x, anchoredExtrude.y, antialiasblur, -1.0);

  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, project_pixel(setPickingOrder(0.0)), 1.0));

  setPickingColor(a_PickingColor);
}
`;class RR extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,EXTRUDE:10})}getCommonUniformsInfo(){const{blend:e,speed:n=1,unit:r="pixel"}=this.layer.getLayerConfig(),i={u_additive:e==="additive"?1:0,u_size_unit:Iu[r],u_speed:n,u_time:this.layer.getLayerAnimateTime()};return this.getUniformsBufferInfo(i)}getAnimateUniforms(){return{}}getAttribute(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),Hn)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointRadar",vertexShader:SR,fragmentShader:AR,triangulation:Hn,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}})]})()}animateOption2Array(e){return[e.enable?0:1,e.speed||1,e.rings||3,0]}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:$.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i)=>{const o=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],s=i%4*3;return[o[s],o[s+1],o[s+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{shaderLocation:this.attributeLocation.SIZE,name:"a_Size",buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=5}=e;return Array.isArray(n)?[n[0]]:[n]}}})}}function Hp(t){let e=.5,n=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;break;default:e=.5}switch(t){case"top":case"top-right":case"top-left":n=1;break;case"bottom":case"bottom-right":case"bottom-left":case"bottom-center":n=0;break;default:n=.5}return{horizontalAlign:e,verticalAlign:n}}function Xp(t,e,n,r,i,o,s,a){const u=(e-n)*i;let l=(-r*s+.5)*o;r===1?l+=a:r===0&&(l-=a);for(const c of t)c.x+=u,c.y+=l}function xR(t,e,n,r,i,o,s){let u=0,l=-8,c=0;const h=t.positionedGlyphs,f=0,p=h.length;n.forEach(y=>{if(y.split("").forEach(T=>{const S=e[T];S&&(h.push({glyph:T,x:u,y:l+0,vertical:!1,scale:1,metrics:S}),u+=S.advance+s)}),h.length!==p){const T=u-s;c=Math.max(T,c),h.length-1}u=0,l-=r+5});const{horizontalAlign:_,verticalAlign:v}=Hp(i);Xp(h,f,_,v,c,r,n.length,-8);const m=l- -8;t.top+=-v*m,t.bottom=t.top-m,t.left+=-_*c,t.right=t.left+c}function CR(t,e,n,r,i,o,s){let u=0,l=-8,c=0;const h=t.positionedGlyphs,f=0,p=h.length;n.forEach(y=>{const T=e[y];if(T&&(h.push({glyph:y,x:u+4,y:4-T.height/2,vertical:!1,scale:1,metrics:T}),u+=T.width+s),h.length!==p){const S=u-s;c=Math.max(S,c)}u=0,l-=r+5});const{horizontalAlign:_,verticalAlign:v}=Hp(i);Xp(h,f,_,v,c,r,n.length,-8);const m=l- -8;t.top+=-v*m,t.bottom=t.top-m,t.left+=-_*c,t.right=t.left+c}function bR(t,e,n,r,i,o,s=[0,0],a){const u=t.split(`
`),l=[],c={positionedGlyphs:l,top:s[1],bottom:s[1],left:s[0],right:s[0],lineCount:u.length,text:t};return a?CR(c,e,u,n,r,i,o):xR(c,e,u,n,r,i,o),l.length?c:!1}function IR(t,e=[0,0],n){const{positionedGlyphs:r=[]}=t,i=[];for(const o of r){const s=o.metrics,a=4,u=s.advance*o.scale/2,l=[0,0],c=[o.x+u+e[0],o.y+e[1]],h=(0-a)*o.scale-u+c[0],f=(0-a)*o.scale+c[1],p=h+s.width*o.scale,_=f+s.height*o.scale,v={x:h,y:f},m={x:p,y:f},y={x:h,y:_},T={x:p,y:_};i.push({tl:v,tr:m,bl:y,br:T,tex:s,glyphOffset:l})}return i}const oo=`#define SDF_PX 8.0
#define EDGE_GAMMA 0.105
#define FONT_SIZE 48.0

uniform sampler2D u_sdf_map;
layout(std140) uniform commonUniforms {
  vec4 u_stroke_color : [0.0, 0.0, 0.0, 0.0];
  vec4 u_background_color : [0.0, 0.0, 0.0, 0.0];
  vec2 u_sdf_map_size;
  float u_raisingHeight: 0.0;
  float u_stroke_width : 2;
  float u_background_radius : 0.0;
  float u_background_shape : 0.0;
  float u_gamma_scale : 0.5;
  float u_halo_blur : 0.5;
};

in vec2 v_uv;
in vec2 v_backgroundUV;
in vec2 v_backgroundSize;
in float v_gamma_scale;
in float v_textQuadType;
in vec4 v_color;
in vec4 v_stroke_color;
in vec4 v_background_color;
in float v_fontScale;

out vec4 outputColor;

#pragma include "picking"
void main() {
  // get style data mapping

  if (v_textQuadType > 0.5) {
    vec2 halfSize = v_backgroundSize * 0.5;
    float radius = clamp(u_background_radius, 0.0, min(halfSize.x, halfSize.y));
    if (u_background_shape > 0.5) {
      radius = min(halfSize.x, halfSize.y);
    }

    vec2 centered = (v_backgroundUV - 0.5) * v_backgroundSize;
    vec2 q = abs(centered) - (halfSize - vec2(radius));
    float signedDistance = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
    float aa = max(fwidth(signedDistance), 1.0);
    float backgroundAlpha = (1.0 - smoothstep(0.0, aa, signedDistance)) * v_background_color.a;
    outputColor = vec4(v_background_color.rgb, backgroundAlpha);
    if (outputColor.a < 0.01) {
      discard;
    }
    outputColor = filterColor(outputColor);
    return;
  }

  // get sdf from atlas
  float dist = texture(SAMPLER_2D(u_sdf_map), v_uv).a;

  lowp float fill_buff = 6.0 / SDF_PX;
  lowp float stroke_buff = (6.0 - u_stroke_width / v_fontScale) / SDF_PX;
  highp float gamma = (u_halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (v_fontScale * u_gamma_scale) / 1.0;

  highp float gamma_scaled = gamma * v_gamma_scale;

  highp float fill_alpha = smoothstep(
    fill_buff - gamma_scaled,
    fill_buff + gamma_scaled,
    dist
  ) * v_color.a;
  highp float outer_alpha = smoothstep(
    stroke_buff - gamma_scaled,
    stroke_buff + gamma_scaled,
    dist
  );
  highp float stroke_alpha = max(outer_alpha - fill_alpha / max(v_color.a, 0.0001), 0.0) * v_stroke_color.a;

  float out_alpha = clamp(fill_alpha + stroke_alpha, 0.0, 1.0);
  vec3 out_rgb = vec3(0.0);
  if (out_alpha > 0.0) {
    out_rgb = (v_color.rgb * fill_alpha + v_stroke_color.rgb * stroke_alpha) / out_alpha;
  }

  outputColor = vec4(out_rgb, out_alpha);
   // 作为 mask 模板时需要丢弃透明的像素
  if (outputColor.a < 0.01) {
    discard;
  }
  outputColor = filterColor(outputColor);
}
`,so=`#define SDF_PX 8.0
#define EDGE_GAMMA 0.105
#define FONT_SIZE 24.0

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_TEXT_OFFSETS) in vec2 a_textOffsets;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_tex;
layout(location = ATTRIBUTE_LOCATION_TEXT_QUAD_TYPE) in float a_textQuadType;
layout(location = ATTRIBUTE_LOCATION_TEXT_BACKGROUND_UV) in vec2 a_backgroundUV;
layout(location = ATTRIBUTE_LOCATION_TEXT_BACKGROUND_SIZE) in vec2 a_backgroundSize;

layout(std140) uniform commonUniforms {
  vec4 u_stroke_color : [0.0, 0.0, 0.0, 0.0];
  vec4 u_background_color : [0.0, 0.0, 0.0, 0.0];
  vec2 u_sdf_map_size;
  float u_raisingHeight: 0.0;
  float u_stroke_width : 2;
  float u_background_radius : 0.0;
  float u_background_shape : 0.0;
  float u_gamma_scale : 0.5;
  float u_halo_blur : 0.5;
};

out vec2 v_uv;
out vec2 v_backgroundUV;
out vec2 v_backgroundSize;
out float v_gamma_scale;
out float v_textQuadType;
out vec4 v_color;
out vec4 v_stroke_color;
out vec4 v_background_color;
out float v_fontScale;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  // cal style mapping - 数据纹理映射部分的计算

  v_uv = a_tex / u_sdf_map_size;
  v_backgroundUV = a_backgroundUV;
  v_backgroundSize = a_backgroundSize;
  v_textQuadType = a_textQuadType;



  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  v_stroke_color = vec4(u_stroke_color.xyz, u_stroke_color.w * opacity);
  v_background_color = vec4(u_background_color.xyz, u_background_color.w * opacity);

  // 文本缩放比例
  float fontScale = a_Size / FONT_SIZE;
  v_fontScale = fontScale;

  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  // vec4 projected_position  = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  vec2 offset = rotate_matrix(a_textOffsets,rotation);

  // gl_Position = vec4(projected_position.xy / projected_position.w + rotation_matrix * a_textOffsets * fontScale / u_ViewportSize * 2.0 * u_DevicePixelRatio, 0.0, 1.0);

  float raiseHeight = u_raisingHeight;
  if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    raiseHeight = u_raisingHeight * mapboxZoomScale;
  }

  vec4 projected_position = project_common_position_to_clipspace(vec4(project_pos.xyz + vec3(0.0, 0.0, raiseHeight), 1.0));

  gl_Position = vec4(
    projected_position.xy / projected_position.w + offset * fontScale / u_ViewportSize * 2.0 * u_DevicePixelRatio, 0.0, 1.0);
  v_gamma_scale = projected_position.w;
  setPickingColor(a_PickingColor);

}
`,{isEqual:ir}=we,Yh={rect:0,circle:1,"circle-rect":2};function Ks(t=[0,0]){return Array.isArray(t)?t:[t,t]}function ao(t){return Te(t||"")[3]>0}function MR(t,e,n){const r=Math.min(...t.map(h=>Math.min(h.tl.x,h.bl.x))),i=Math.min(...t.map(h=>Math.min(h.tl.y,h.tr.y))),o=Math.max(...t.map(h=>Math.max(h.tr.x,h.br.x))),s=Math.max(...t.map(h=>Math.max(h.bl.y,h.br.y)));let a=r-e[0],u=i-e[1],l=o+e[0],c=s+e[1];if(n==="circle"){const h=(a+l)/2,f=(u+c)/2,p=Math.max(l-a,c-u);a=h-p/2,l=h+p/2,u=f-p/2,c=f+p/2}return{tl:{x:a,y:u},tr:{x:l,y:u},br:{x:l,y:c},bl:{x:a,y:c},size:[l-a,c-u]}}function Gh(t){return Wp.call(this,t,"background")}function Kh(t){return Wp.call(this,t,"glyph")}function Wp(t,e){const n=this,r=t.id,i=[],o=[],s=(h,f,p)=>{const _=f*4,v="tex"in h&&h.tex?h.tex:{x:0,y:0,width:0,height:0},m="quadType"in h&&h.quadType>0?[[0,0],[1,0],[1,1],[0,1]]:[[0,0],[0,0],[0,0],[0,0]],y="size"in h?h.size:[0,0],T="quadType"in h?h.quadType:0;i.push(...p,v.x,v.y+v.height,h.tl.x,h.tl.y,T,m[0][0],m[0][1],y[0],y[1],...p,v.x+v.width,v.y+v.height,h.tr.x,h.tr.y,T,m[1][0],m[1][1],y[0],y[1],...p,v.x+v.width,v.y,h.br.x,h.br.y,T,m[2][0],m[2][1],y[0],y[1],...p,v.x,v.y,h.bl.x,h.bl.y,T,m[3][0],m[3][1],y[0],y[1]),o.push(_,_+1,_+2,_+2,_+3,_)};if(!n.glyphInfoMap||!n.glyphInfoMap[r])return{vertices:[],indices:[],size:12};const a=n.glyphInfoMap[r],u=a.centroid,l=u.length===2?[u[0],u[1],0]:u;let c=0;return e!=="glyph"&&a.backgroundQuad&&(s(D(D({},a.backgroundQuad),{},{quadType:1}),c,l),c+=1),e!=="background"&&a.glyphQuads.forEach(h=>{s(h,c,l),c+=1}),{vertices:i,indices:o,size:12}}class jp extends Ae{constructor(...e){var n;super(...e),n=this,d(this,"glyphInfo",void 0),d(this,"glyphInfoMap",{}),d(this,"rawEncodeData",void 0),d(this,"texture",void 0),d(this,"currentZoom",-1),d(this,"extent",void 0),d(this,"textureHeight",0),d(this,"textCount",0),d(this,"preTextStyle",{}),d(this,"mapping",L(function*(){n.rawEncodeData=n.layer.getEncodedData(),n.initGlyph(),n.updateTexture(),yield n.reBuildModel(),n.layer.renderLayers()}))}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,TEXT_OFFSETS:10,UV:11,TEXT_QUAD_TYPE:12,TEXT_BACKGROUND_UV:13,TEXT_BACKGROUND_SIZE:14})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D(D({},e.uniformsOption),n.uniformsOption),{u_sdf_map:this.textures[0]})}getCommonUniformsInfo(){var e;const{stroke:n="#fff",strokeOpacity:r=1,strokeWidth:i=0,backgroundColor:o="rgba(0, 0, 0, 0)",backgroundRadius:s=0,backgroundShape:a="rect",halo:u=.5,gamma:l=2,raisingHeight:c=0}=this.layer.getLayerConfig(),h=this.getFontServiceMapping(),f=this.getFontServiceCanvas();h&&Object.keys(h).length!==this.textCount&&f&&(this.updateTexture(),this.textCount=Object.keys(h).length),this.preTextStyle=this.getTextStyle();const p=Te(n),_=Te(o),v={u_stroke_color:[p[0],p[1],p[2],p[3]*r],u_background_color:_,u_sdf_map_size:[(f==null?void 0:f.width)||1,(f==null?void 0:f.height)||1],u_raisingHeight:Number(c),u_stroke_width:i,u_background_radius:s,u_background_shape:(e=Yh[a])!==null&&e!==void 0?e:Yh.rect,u_gamma_scale:l,u_halo_blur:u};return this.getUniformsBufferInfo(v)}initModels(){var e=this;return L(function*(){return e.bindEvent(),e.extent=e.textExtent(),e.rawEncodeData=e.layer.getEncodedData(),e.preTextStyle=e.getTextStyle(),e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{textAllowOverlap:n=!1,backgroundColor:r}=e.layer.getLayerConfig();e.initGlyph(),e.updateTexture(),n||e.filterGlyphs();const i=yield e.layer.buildLayerModel({moduleName:"pointText",vertexShader:so,fragmentShader:oo,defines:e.getDefines(),inject:e.getInject(),triangulation:Kh.bind(e),depth:{enable:!1}});return ao(r)?[yield e.layer.buildLayerModel({moduleName:"pointText",vertexShader:so,fragmentShader:oo,defines:e.getDefines(),inject:e.getInject(),triangulation:Gh.bind(e),depth:{enable:!1}}),i]:[i]})()}needUpdate(){var e=this;return L(function*(){const{textAllowOverlap:n=!1,textAnchor:r="center",textOffset:i,padding:o,backgroundColor:s,backgroundPadding:a,backgroundShape:u,fontFamily:l,fontWeight:c}=e.getTextStyle();if(!ir(o,e.preTextStyle.padding)||s!==e.preTextStyle.backgroundColor||!ir(a,e.preTextStyle.backgroundPadding)||u!==e.preTextStyle.backgroundShape||!ir(i,e.preTextStyle.textOffset)||!ir(r,e.preTextStyle.textAnchor)||!ir(l,e.preTextStyle.fontFamily)||!ir(c,e.preTextStyle.fontWeight))return yield e.mapping(),!0;if(n)return!1;const h=e.mapService.getZoom(),f=e.mapService.getBounds(),p=mu(e.extent,f);return Math.abs(e.currentZoom-h)>.5||!p||n!==e.preTextStyle.textAllowOverlap?(yield e.reBuildModel(),!0):!1})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.layer.off("remapping",this.mapping)}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"textOffsets",type:$.Attribute,descriptor:{shaderLocation:this.attributeLocation.TEXT_OFFSETS,name:"a_textOffsets",buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[5],r[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"textUv",type:$.Attribute,descriptor:{name:"a_tex",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[3],r[4]]}}),this.styleAttributeService.registerStyleAttribute({name:"textQuadType",type:$.Attribute,descriptor:{name:"a_textQuadType",shaderLocation:this.attributeLocation.TEXT_QUAD_TYPE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:(e,n,r)=>[r[7]]}}),this.styleAttributeService.registerStyleAttribute({name:"textBackgroundUv",type:$.Attribute,descriptor:{name:"a_backgroundUV",shaderLocation:this.attributeLocation.TEXT_BACKGROUND_UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[8],r[9]]}}),this.styleAttributeService.registerStyleAttribute({name:"textBackgroundSize",type:$.Attribute,descriptor:{name:"a_backgroundSize",shaderLocation:this.attributeLocation.TEXT_BACKGROUND_SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[10],r[11]]}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=12}=e;return Array.isArray(n)?[n[0]]:[n]}}})}bindEvent(){this.layer.isTileLayer||this.layer.on("remapping",this.mapping)}textExtent(){const e=this.mapService.getBounds();return hs(e,.5)}initTextFont(){const{fontWeight:e,fontFamily:n}=this.getTextStyle(),r=this.rawEncodeData,i=[];r.forEach(o=>{let{shape:s=""}=o;s=s.toString();for(const a of s)i.indexOf(a)===-1&&i.push(a)}),this.fontService.setFontOptions({characterSet:i,fontWeight:e,fontFamily:n,iconfont:!1})}initIconFontTex(){const{fontWeight:e,fontFamily:n}=this.getTextStyle(),r=this.rawEncodeData,i=[];r.forEach(o=>{let{shape:s=""}=o;s=`${s}`,i.indexOf(s)===-1&&i.push(s)}),this.fontService.setFontOptions({characterSet:i,fontWeight:e,fontFamily:n,iconfont:!0})}getTextStyle(){const{fontWeight:e="400",fontFamily:n="sans-serif",textAllowOverlap:r=!1,padding:i=[0,0],textAnchor:o="center",textOffset:s=[0,0],backgroundColor:a="rgba(0, 0, 0, 0)",backgroundPadding:u=[0,0],backgroundRadius:l=0,backgroundShape:c="rect",opacity:h=1,strokeOpacity:f=1,strokeWidth:p=0,stroke:_="#000"}=this.layer.getLayerConfig();return{fontWeight:e,fontFamily:n,textAllowOverlap:r,padding:i,backgroundColor:a,backgroundPadding:Ks(u),backgroundRadius:l,backgroundShape:c,textAnchor:o,textOffset:s,opacity:h,strokeOpacity:f,strokeWidth:p,stroke:_}}generateGlyphLayout(e){const n=this.getFontServiceMapping(),{spacing:r=2,textAnchor:i="center",textOffset:o,backgroundColor:s,backgroundPadding:a=[0,0],backgroundShape:u="rect"}=this.layer.getLayerConfig(),l=this.rawEncodeData;this.glyphInfo=l.map(c=>{const{shape:h="",id:f,size:p=1}=c,_=c.textOffset?c.textOffset:o||[0,0],v=c.textAnchor?c.textAnchor:i||"center",m=bR(h.toString(),n,p,v,"left",r,_,e),y=IR(m,_),T=ao(s)?MR(y,Ks(a),u):void 0;return c.shaping=m,c.glyphQuads=y,c.centroid=On(c.coordinates),this.glyphInfoMap[f]={shaping:m,glyphQuads:y,backgroundQuad:T,centroid:On(c.coordinates)},c})}getFontServiceMapping(){const{fontWeight:e="400",fontFamily:n="sans-serif"}=this.layer.getLayerConfig();return this.fontService.getMappingByKey(`${n}_${e}`)}getFontServiceCanvas(){const{fontWeight:e="400",fontFamily:n="sans-serif"}=this.layer.getLayerConfig();return this.fontService.getCanvasByKey(`${n}_${e}`)}filterGlyphs(){const{padding:e=[0,0],backgroundColor:n,backgroundPadding:r=[0,0],textAllowOverlap:i=!1}=this.layer.getLayerConfig();if(i)return;const o=Ks(r),s=ao(n)?o:[0,0];this.glyphInfoMap={},this.currentZoom=this.mapService.getZoom(),this.extent=this.textExtent();const{width:a,height:u}=this.rendererService.getViewportSize(),l=new kp(a,u);this.glyphInfo.filter(h=>{const{shaping:f,id:p=0}=h,_=h.centroid,m=h.size/16,y=this.mapService.lngLatToContainer(_),{box:T}=l.placeCollisionBox({x1:f.left*m-e[0]-s[0],x2:f.right*m+e[0]+s[0],y1:f.top*m-e[1]-s[1],y2:f.bottom*m+e[1]+s[1],anchorPointX:y.x,anchorPointY:y.y});return T&&T.length?(l.insertCollisionBox(T,p),!0):!1}).forEach(h=>{this.glyphInfoMap[h.id]=h})}initGlyph(){const{iconfont:e=!1}=this.layer.getLayerConfig();e?this.initIconFontTex():this.initTextFont(),this.generateGlyphLayout(e)}updateTexture(){const{createTexture2D:e}=this.rendererService,n=this.getFontServiceCanvas();this.textureHeight=n.height,this.texture&&this.texture.destroy(),this.texture=e({data:n,mag:g.LINEAR,min:g.LINEAR,width:n.width,height:n.height}),this.textures=[this.texture]}reBuildModel(){var e=this;return L(function*(){const{backgroundColor:n}=e.layer.getLayerConfig();e.rawEncodeData=e.layer.getEncodedData(),e.filterGlyphs();const r=yield e.layer.buildLayerModel({moduleName:"pointText",vertexShader:so,fragmentShader:oo,triangulation:Kh.bind(e),defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}});if(!ao(n)){e.layer.models=[r];return}const i=yield e.layer.buildLayerModel({moduleName:"pointText",vertexShader:so,fragmentShader:oo,triangulation:Gh.bind(e),defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}});e.layer.models=[i,r]})()}}const OR={fillImage:gR,fill:Up,radar:RR,image:zp,normal:Vp,simplePoint:iR,extrude:Lp,text:jp,earthFill:hR,earthExtrude:uR};class Va extends Gn{constructor(...e){super(...e),d(this,"type","PointLayer"),d(this,"enableShaderEncodeStyles",["stroke","offsets","opacity","rotation","anchor"]),d(this,"enableDataEncodeStyles",["textOffset","textAnchor"]),d(this,"defaultSourceConfig",{data:[],options:{parser:{type:"json",x:"lng",y:"lat"}}})}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel&&e.layerModel.clearModels(),e.layerModel=new OR[n](e),yield e.initLayerModels()})()}rebuildModels(){var e=this;return L(function*(){yield e.buildModels()})()}style(e){return super.style(e),"allowOverlap"in e&&this.reRender(),this}getModelTypeWillEmptyData(){if(this.shapeOption){const{field:e,values:n}=this.shapeOption,{shape2d:r}=this.getLayerConfig(),i=this.iconService.getIconMap();if(e&&(r==null?void 0:r.indexOf(e))!==-1)return"fill";if(n==="text")return"text";if(n&&n instanceof Array){for(const o of n)if(typeof o=="string"&&i.hasOwnProperty(o))return"image"}}return"normal"}getDefaultConfig(){const e=this.getModelType();return{fillImage:{},normal:{blend:"additive"},radar:{},simplePoint:{},fill:{blend:"normal"},extrude:{},image:{},text:{blend:"normal"},tile:{},tileText:{},earthFill:{},earthExtrude:{}}[e]}getModelType(){const e=this.getEncodedData(),{shape2d:n,shape3d:r,billboard:i=!0}=this.getLayerConfig(),o=this.iconService.getIconMap(),s=e.find(a=>a.hasOwnProperty("shape"));if(s){const a=s.shape;return a==="dot"?"normal":a==="simple"?"simplePoint":a==="radar"?"radar":this.layerType==="fillImage"||i===!1?"fillImage":(n==null?void 0:n.indexOf(a))!==-1?this.mapService.version==="GLOBEL"?"earthFill":"fill":(r==null?void 0:r.indexOf(a))!==-1?this.mapService.version==="GLOBEL"?"earthExtrude":"extrude":o.hasOwnProperty(a)?"image":"text"}else return this.getModelTypeWillEmptyData()}}function PR(t){return Ha.apply(this,arguments)}function Ha(){return Ha=L(function*(t){if(window.createImageBitmap){const e=yield fetch(t);return yield createImageBitmap(yield e.blob())}else{const e=new window.Image;return new Promise(n=>{e.onload=()=>n(e),e.src=t,e.crossOrigin="Anonymous"})}}),Ha.apply(this,arguments)}const FR=`layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  // top face
  if (u_topsurface < 1.0) {
    discard;
  }

  outputColor = v_Color;

  outputColor = filterColor(outputColor);
}
`,BR=`layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
in vec3 v_uvs;
in vec2 v_texture_data;
out vec4 outputColor;

#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  float isSide = v_texture_data.x;
  float sidey = v_uvs[2];
  float lightWeight = v_texture_data.y;

  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {
    // side face
    if (u_sidesurface < 1.0) {
      discard;
    }

    if (u_linearColor == 1.0) {
      // side use linear
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      outputColor = linearColor;
    } else {
      // side notuse linear
      outputColor = v_Color;
    }
  } else {
    // top face
    if (u_topsurface < 1.0) {
      discard;
    }
    outputColor = v_Color;
  }

  outputColor = filterColorAlpha(outputColor, lightWeight);
}
`,NR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;
out vec3 v_uvs;
out vec2 v_texture_data;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  v_uvs = a_uvs;
  // cal style mapping - 数据纹理映射部分的计算
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  vec4 project_pos = project_position(pos, a_Position64Low);

  if (u_heightfixed > 0.0) {
    // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;
    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
  float lightWeight = calc_lighting(project_pos);
  v_texture_data = vec2(a_Position.z, lightWeight);

  v_Color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);

  setPickingColor(a_PickingColor);
}
`,DR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  float isSide = a_Position.z;
  float topU = a_uvs[0];
  float topV = 1.0 - a_uvs[1];
  float sidey = a_uvs[2];

  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);

  vec4 project_pos = project_position(pos, a_Position64Low);
  float lightWeight = calc_lighting(project_pos);

  if (u_heightfixed > 0.0) {
    // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;

    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

 gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {
    // side face
    // if(u_sidesurface < 1.0) {
    //   discard;
    // }

    if (u_linearColor == 1.0) {
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      v_Color = linearColor;
    } else {
      v_Color = a_Color;
    }

  } else {
    v_Color = a_Color;
  }

  v_Color = vec4(v_Color.rgb * lightWeight, v_Color.w * opacity);

  setPickingColor(a_PickingColor);
}
`,wR=`uniform sampler2D u_texture;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
in vec3 v_uvs;
in vec2 v_texture_data;

#pragma include "scene_uniforms"
#pragma include "picking"

out vec4 outputColor;

void main() {
  float opacity = u_opacity;
  float isSide = v_texture_data.x;
  float lightWeight = v_texture_data.y;
  float topU = v_uvs[0];
  float topV = 1.0 - v_uvs[1];
  float sidey = v_uvs[2];

  outputColor = texture(SAMPLER_2D(u_texture), vec2(topU, topV));
  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {
    // 是否是边缘
    // side face
    if (u_sidesurface < 1.0) {
      discard;
    }

    if (u_linearColor == 1.0) {
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      outputColor = linearColor;
    } else {
      outputColor = v_Color;
    }
  } else {
    // top face
    if (u_topsurface < 1.0) {
      discard;
    }
  }

  outputColor.a *= opacity;
  outputColor = filterColor(outputColor);
}
`,LR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;
out vec3 v_uvs;
out vec2 v_texture_data;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  vec4 project_pos = project_position(pos, a_Position64Low);
  float lightWeight = calc_lighting(project_pos);
  v_uvs = a_uvs;
  v_Color = a_Color;
  v_Color.a *= opacity;

  v_texture_data = vec2(a_Position.z, lightWeight);

  if (u_heightfixed > 0.0) {
    // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;

    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}
`;class UR extends Ae{constructor(...e){super(...e),d(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:10,UV:11})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{mapTexture:e,heightfixed:n=!1,raisingHeight:r=0,topsurface:i=!0,sidesurface:o=!0,sourceColor:s,targetColor:a}=this.layer.getLayerConfig();let u=0,l=[1,1,1,1],c=[1,1,1,1];s&&a&&(l=Te(s),c=Te(a),u=1);const h={u_sourceColor:l,u_targetColor:c,u_linearColor:u,u_topsurface:Number(i),u_sidesurface:Number(o),u_heightfixed:Number(n),u_raisingHeight:Number(r)};return e&&this.texture&&(h.u_texture=this.texture,this.textures=[this.texture]),this.getUniformsBufferInfo(h)}initModels(){var e=this;return L(function*(){return yield e.loadTexture(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{frag:n,vert:r,type:i}=e.getShaders();return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:i,vertexShader:r,fragmentShader:n,depth:{enable:!0},defines:e.getDefines(),inject:e.getInject(),triangulation:Fp})]})()}getShaders(){const{pickLight:e,mapTexture:n}=this.layer.getLayerConfig();return n?{frag:wR,vert:LR,type:"polygonExtrudeTexture"}:e?{frag:BR,vert:NR,type:"polygonExtrudePickLight"}:{frag:FR,vert:DR,type:"polygonExtrude"}}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.textures=[]}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uvs",type:$.Attribute,descriptor:{name:"a_uvs",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r)=>{const i=this.layer.getOriginalExtent(),o=this.layer.getRelativeOrigin(),s=i[0]!==0||i[2]!==0;let a,u,l,c,h,f;s&&o?(a=r[0]+o[0],u=r[1]+o[1],[l,c,h,f]=i):(a=r[0],u=r[1],[l,c,h,f]=this.layer.getSource().extent);const p=h-l,_=f-c;return[(a-l)/p,(u-c)/_,r[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=10}=e;return Array.isArray(n)?[n[0]]:[n]}}})}loadTexture(){var e=this;return L(function*(){const{mapTexture:n}=e.layer.getLayerConfig(),{createTexture2D:r}=e.rendererService;if(e.texture=r({height:1,width:1}),n){const i=yield PR(n);e.texture=r({data:i,width:i.width,height:i.height,wrapS:g.CLAMP_TO_EDGE,wrapT:g.CLAMP_TO_EDGE,min:g.LINEAR,mag:g.LINEAR})}})()}}const kR=`in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_Color;
  outputColor = filterColor(outputColor);
}
`,zR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

out vec4 v_Color;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size + (1.0 - a_Position.z) * extrusionBase, 1.0);

  vec4 project_pos = project_position(pos, a_Position64Low);
  float lightWeight = calc_lighting(project_pos);
  v_Color = a_Color;
  v_Color = vec4(v_Color.rgb * lightWeight, v_Color.w * opacity);

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}
`;class VR extends Ae{constructor(...e){super(...e),d(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:10,EXTRUSION_BASE:11})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const e={};return this.getUniformsBufferInfo(e)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{frag:n,vert:r,type:i}=e.getShaders();return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:i,vertexShader:r,fragmentShader:n,defines:e.getDefines(),inject:e.getInject(),triangulation:Fp,depth:{enable:!0}})]})()}getShaders(){return{frag:kR,vert:zR,type:"polygonExtrude"}}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"normal",type:$.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(e,n,r,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:$.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{size:n=10}=e;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrusionBase",type:$.Attribute,descriptor:{name:"a_ExtrusionBase",shaderLocation:this.attributeLocation.EXTRUSION_BASE,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:1,update:e=>{const{extrusionBase:n=0}=e;return[n]}}})}}const HR=`in vec4 v_color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,XR=`layout(std140) uniform commonUniforms {
  float u_raisingHeight;
  float u_opacitylinear;
  float u_dir;
};

in vec4 v_color;
in vec3 v_linear;
in vec2 v_pos;
out vec4 outputColor;
#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  outputColor = v_color;
  if (u_opacitylinear > 0.0) {
    outputColor.a *=
      u_dir == 1.0
        ? 1.0 - length(v_pos - v_linear.xy) / v_linear.z
        : length(v_pos - v_linear.xy) / v_linear.z;
  }
  outputColor = filterColor(outputColor);
}
`,WR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_LINEAR) in vec3 a_linear;

layout(std140) uniform commonUniforms {
  float u_raisingHeight;
  float u_opacitylinear;
  float u_dir;
};

out vec4 v_color;
out vec3 v_linear;
out vec2 v_pos;

#pragma include "projection"
#pragma include "picking"

void main() {
  if (u_opacitylinear > 0.0) {
    v_linear = a_linear;
    v_pos = a_Position.xy;
  }
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  project_pos.z += u_raisingHeight;

  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    project_pos.z *= mapboxZoomScale;
    project_pos.z += u_raisingHeight * mapboxZoomScale;
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
  setPickingColor(a_PickingColor);
}
`,jR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;

layout(std140) uniform commonUniforms {
  float u_raisingHeight;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "picking"

void main() {
  // cal style mapping - 数据纹理映射部分的计算

  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);

  project_pos.z += u_raisingHeight;

  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    project_pos.z *= mapboxZoomScale;
    project_pos.z += u_raisingHeight * mapboxZoomScale;
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}

`;class $R extends Ae{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,LINEAR:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{raisingHeight:e=0,opacityLinear:n={enable:!1,dir:"in"}}=this.layer.getLayerConfig(),r={u_raisingHeight:Number(e),u_opacitylinear:Number(n.enable),u_dir:n.dir==="in"?1:0};return this.getUniformsBufferInfo(r)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){const{frag:n,vert:r,triangulation:i,type:o}=e.getModelParams();return e.initUniformsBuffer(),e.layer.triangulation=i,[yield e.layer.buildLayerModel({moduleName:o,vertexShader:r,fragmentShader:n,defines:e.getDefines(),inject:e.getInject(),triangulation:i,primitive:g.TRIANGLES,depth:{enable:!1}})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute();const{opacityLinear:e={enable:!1,dir:"in"}}=this.layer.getLayerConfig();e.enable&&this.styleAttributeService.registerStyleAttribute({name:"linear",type:$.Attribute,descriptor:{name:"a_linear",shaderLocation:this.attributeLocation.LINEAR,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:3,update:(n,r,i)=>[i[3],i[4],i[5]]}})}getModelParams(){const{opacityLinear:e={enable:!1}}=this.layer.getLayerConfig();return e.enable?{frag:XR,vert:WR,type:"polygonLinear",triangulation:KS}:{frag:HR,vert:jR,type:"polygonFill",triangulation:wi}}}const ZR=`layout(std140) uniform commonUniforms {
  vec4 u_watercolor;
  vec4 u_watercolor2;
  float u_time;
};

in vec2 v_uv;
in float v_opacity;
out vec4 outputColor;

float coast2water_fadedepth = 0.1;
float large_waveheight = 0.75; // change to adjust the "heavy" waves
float large_wavesize = 3.4; // factor to adjust the large wave size
float small_waveheight = 0.6; // change to adjust the small random waves
float small_wavesize = 0.5; // factor to ajust the small wave size
float water_softlight_fact = 15.0; // range [1..200] (should be << smaller than glossy-fact)
float water_glossylight_fact = 120.0; // range [1..200]
float particle_amount = 70.0;

vec3 water_specularcolor = vec3(1.3, 1.3, 0.9); // specular Color (RGB) of the water-highlights
#define light (vec3(-0.0, sin(u_time * 0.5) * 0.5 + 0.35, 2.8)) // position of the sun

uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform sampler2D u_texture3;

float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

// 2d noise function
float noise1(vec2 x) {
  vec2 p = floor(x);
  vec2 f = smoothstep(0.0, 1.0, fract(x));
  float n = p.x + p.y * 57.0;
  return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
}

float noise(vec2 p) {
  return texture(SAMPLER_2D(u_texture2), p * vec2(1.0 / 256.0)).x;
}

vec4 highness(vec2 p) {
  vec4 t = texture(SAMPLER_2D(u_texture1), fract(p));
  float clipped =
    -2.0 -
    smoothstep(3.0, 10.0, t.a) * 6.9 -
    smoothstep(10.0, 100.0, t.a) * 89.9 -
    smoothstep(0.0, 10000.0, t.a) * 10000.0;
  return clamp(t, 0.0, 3.0) + clamp(t / 3.0 - 1.0, 0.0, 1.0) + clamp(t / 16.0 - 1.0, 0.0, 1.0);
}

float height_map(vec2 p) {
  vec4 height = highness(p);
  /*
    height = -0.5+
        0.5*smoothstep(-100.,0.,-height)+
        2.75*smoothstep(0.,2.,height)+
        1.75*smoothstep(2.,4.,height)+
        2.75*smoothstep(4.,16.,height)+
        1.5*smoothstep(16.,1000.,height);
    */

  mat2 m = mat2(0.9563 * 1.4, -0.2924 * 1.4, 0.2924 * 1.4, 0.9563 * 1.4);
  //p = p*6.;
  float f = 0.6 * noise1(p);
  p = m * p * 1.1 * 6.0;
  f += 0.25 * noise(p);
  p = m * p * 1.32;
  f += 0.1666 * noise(p);
  p = m * p * 1.11;
  f += 0.0834 * noise(p);
  p = m * p * 1.12;
  f += 0.0634 * noise(p);
  p = m * p * 1.13;
  f += 0.0444 * noise(p);
  p = m * p * 1.14;
  f += 0.0274 * noise(p);
  p = m * p * 1.15;
  f += 0.0134 * noise(p);
  p = m * p * 1.16;
  f += 0.0104 * noise(p);
  p = m * p * 1.17;
  f += 0.0084 * noise(p);
  f = 0.25 * f + dot(height, vec4(-0.03125, -0.125, 0.25, 0.25)) * 0.5;
  const float FLAT_LEVEL = 0.92525;
  //f = f*0.25+height*0.75;
  if (f < FLAT_LEVEL) f = f;
  else f = pow((f - FLAT_LEVEL) / (1.0 - FLAT_LEVEL), 2.0) * (1.0 - FLAT_LEVEL) * 2.0 + FLAT_LEVEL; // makes a smooth coast-increase
  return clamp(f, 0.0, 10.0);
}

vec3 plasma_quintic(float x) {
  x = clamp(x, 0.0, 1.0);
  vec4 x1 = vec4(1.0, x, x * x, x * x * x); // 1 x x2 x3
  vec4 x2 = x1 * x1.w * x; // x4 x5 x6 x7
  return vec3(
    dot(x1.xyzw, vec4(+0.063861086, +1.992659096, -1.023901152, -0.490832805)) +
      dot(x2.xy, vec2(+1.308442123, -0.914547012)),
    dot(x1.xyzw, vec4(+0.04971859, -0.791144343, +2.892305078, +0.811726816)) +
      dot(x2.xy, vec2(-4.686502417, +2.717794514)),
    dot(x1.xyzw, vec4(+0.513275779, +1.58025506, -5.164414457, +4.559573646)) +
      dot(x2.xy, vec2(-1.916810682, +0.570638854))
  );
}

vec4 color(vec2 p) {
  vec4 c1 = vec4(1.7, 1.6, 0.9, 1);
  vec4 c2 = vec4(0.2, 0.94, 0.1, 1);
  vec4 c3 = vec4(0.3, 0.2, 0.0, 1);
  vec4 c4 = vec4(0.99, 0.99, 1.6, 1);
  vec4 v = highness(p);
  float los = smoothstep(0.1, 1.1, v.b);
  float his = smoothstep(3.5, 6.5, v.b);
  float ces = smoothstep(1.0, 5.0, v.a);
  vec4 lo = mix(c1, c2, los);
  vec4 hi = mix(c3, c4, his);
  vec4 ce = mix(lo, hi, ces);

  return vec4(plasma_quintic(ces), 1).ragb;
}

vec3 terrain_map(vec2 p) {
  return color(p).rgb * 0.75 +
  0.25 * vec3(0.7, 0.55, 0.4) +
  texture(SAMPLER_2D(u_texture3), fract(p * 5.0)).rgb * 0.5; // test-terrain is simply 'sandstone'
}

const mat2 m = mat2(
   0.72, -1.6 ,
   1.6 ,  0.72
);

float water_map(vec2 p, float height) {
  vec2 p2 = p * large_wavesize;
  vec2 shift1 = 0.001 * vec2(u_time * 160.0 * 2.0, u_time * 120.0 * 2.0);
  vec2 shift2 = 0.001 * vec2(u_time * 190.0 * 2.0, -u_time * 130.0 * 2.0);

  // coarse crossing 'ocean' waves...
  float f = 0.6 * noise(p);
  f += 0.25 * noise(p * m);
  f += 0.1666 * noise(p * m * m);
  float wave =
    sin(p2.x * 0.622 + p2.y * 0.622 + shift2.x * 4.269) * large_waveheight * f * height * height;

  p *= small_wavesize;
  f = 0.0;
  float amp = 1.0,
    s = 0.5;
  for (int i = 0; i < 9; i++) {
    p = m * p * 0.947;
    f -= amp * abs(sin((noise(p + shift1 * s) - 0.5) * 2.0));
    amp = amp * 0.59;
    s *= -1.329;
  }

  return wave + f * small_waveheight;
}

float nautic(vec2 p) {
  p *= 18.0;
  float f = 0.0;
  float amp = 1.0,
    s = 0.5;
  for (int i = 0; i < 3; i++) {
    p = m * p * 1.2;
    f += amp * abs(smoothstep(0.0, 1.0, noise(p + u_time * s)) - 0.5);
    amp = amp * 0.5;
    s *= -1.227;
  }
  return pow(1.0 - f, 5.0);
}

float particles(vec2 p) {
  p *= 200.0;
  float f = 0.0;
  float amp = 1.0,
    s = 1.5;
  for (int i = 0; i < 3; i++) {
    p = m * p * 1.2;
    f += amp * noise(p + u_time * s);
    amp = amp * 0.5;
    s *= -1.227;
  }
  return pow(f * 0.35, 7.0) * particle_amount;
}

float test_shadow(vec2 xy, float height) {
  vec3 r0 = vec3(xy, height);
  vec3 rd = normalize(light - r0);

  float hit = 1.0;
  float t = 0.001;
  for (int j = 1; j < 25; j++) {
    vec3 p = r0 + t * rd;
    float h = height_map(p.xy);
    float height_diff = p.z - h;
    if (height_diff < 0.0) {
      return 0.0;
    }
    t += 0.01 + height_diff * 0.02;
    hit = min(hit, 2.0 * height_diff / t); // soft shaddow
  }
  return hit;
}

vec3 CalcTerrain(vec2 uv, float height) {
  vec3 col = terrain_map(uv);
  vec2 iResolution = vec2(512.0);
  float h1 = height_map(uv - vec2(0.0, 0.5) / iResolution.xy);
  float h2 = height_map(uv + vec2(0.0, 0.5) / iResolution.xy);
  float h3 = height_map(uv - vec2(0.5, 0.0) / iResolution.xy);
  float h4 = height_map(uv + vec2(0.5, 0.0) / iResolution.xy);
  vec3 norm = normalize(vec3(h3 - h4, h1 - h2, 1.0));
  vec3 r0 = vec3(uv, height);
  vec3 rd = normalize(light - r0);
  float grad = dot(norm, rd);
  col *= grad + pow(grad, 8.0);
  float terrainshade = test_shadow(uv, height);
  col = mix(col * 0.25, col, terrainshade);
  return col;
}

void main() {
  vec3 watercolor = u_watercolor.rgb;
  vec3 watercolor2 = u_watercolor2.rgb;
  vec2 uv = v_uv;
  float WATER_LEVEL = 0.84; // Water level (range: 0.0 - 2.0)
  float deepwater_fadedepth = 0.4 + coast2water_fadedepth;
  float height = height_map(uv);
  vec3 col;

  float waveheight = clamp(WATER_LEVEL * 3.0 - 1.5, 0.0, 1.0);
  float level = WATER_LEVEL + 0.2 * water_map(uv * 15.0 + vec2(u_time * 0.1), waveheight);
  if (height > level) {
    col = CalcTerrain(uv, height);
  }
  if (height <= level) {
    vec2 dif = vec2(0.0, 0.01);
    vec2 pos = uv * 15.0 + vec2(u_time * 0.01);
    float h1 = water_map(pos - dif, waveheight);
    float h2 = water_map(pos + dif, waveheight);
    float h3 = water_map(pos - dif.yx, waveheight);
    float h4 = water_map(pos + dif.yx, waveheight);
    vec3 normwater = normalize(vec3(h3 - h4, h1 - h2, 0.125)); // norm-vector of the 'bumpy' water-plane
    uv += normwater.xy * 0.002 * (level - height);

    col = CalcTerrain(uv, height);

    float coastfade = clamp((level - height) / coast2water_fadedepth, 0.0, 1.0);
    float coastfade2 = clamp((level - height) / deepwater_fadedepth, 0.0, 1.0);
    float intensity = col.r * 0.2126 + col.g * 0.7152 + col.b * 0.0722;
    watercolor = mix(watercolor * intensity, watercolor2, smoothstep(0.0, 1.0, coastfade2));

    vec3 r0 = vec3(uv, WATER_LEVEL);
    vec3 rd = normalize(light - r0); // ray-direction to the light from water-position
    float grad = dot(normwater, rd); // dot-product of norm-vector and light-direction
    float specular = pow(grad, water_softlight_fact); // used for soft highlights
    float specular2 = pow(grad, water_glossylight_fact); // used for glossy highlights
    float gradpos = dot(vec3(0.0, 0.0, 1.0), rd);
    float specular1 = smoothstep(0.0, 1.0, pow(gradpos, 5.0)); // used for diffusity (some darker corona around light's specular reflections...)
    float watershade = test_shadow(uv, level);
    watercolor *= 2.2 + watershade;
    watercolor += (0.2 + 0.8 * watershade) * ((grad - 1.0) * 0.5 + specular) * 0.25;
    watercolor /= 1.0 + specular1 * 1.25;
    watercolor += watershade * specular2 * water_specularcolor;
    watercolor +=
      watershade *
      coastfade *
      (1.0 - coastfade2) *
      (vec3(0.5, 0.6, 0.7) * nautic(uv) + vec3(1.0, 1.0, 1.0) * particles(uv));

    col = mix(col, watercolor, coastfade);
  }

  outputColor = vec4(col, v_opacity);
}
`,YR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_uv;

layout(std140) uniform commonUniforms {
  vec4 u_watercolor;
  vec4 u_watercolor2;
  float u_time;
};

out vec2 v_uv;
out float v_opacity;

#pragma include "projection"

void main() {
  v_uv = a_uv;
  v_opacity = opacity;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
}

`;class GR extends Ae{constructor(...e){super(...e),d(this,"texture1",void 0),d(this,"texture2",void 0),d(this,"texture3",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{watercolor:e="#6D99A8",watercolor2:n="#0F121C"}=this.layer.getLayerConfig(),r={u_watercolor:Te(e),u_watercolor2:Te(n),u_time:this.layer.getLayerAnimateTime(),u_texture1:this.texture1,u_texture2:this.texture2,u_texture3:this.texture3};return this.textures=[this.texture1,this.texture2,this.texture3],this.getUniformsBufferInfo(r)}getAnimateUniforms(){return{u_time:this.layer.getLayerAnimateTime()}}initModels(){var e=this;return L(function*(){return e.loadTexture(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"polygonOcean",vertexShader:YR,fragmentShader:ZR,defines:e.getDefines(),inject:e.getInject(),triangulation:wi,primitive:g.TRIANGLES,depth:{enable:!1}})]})()}clearModels(){var e,n,r;(e=this.texture1)===null||e===void 0||e.destroy(),(n=this.texture2)===null||n===void 0||n.destroy(),(r=this.texture3)===null||r===void 0||r.destroy()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"oceanUv",type:$.Attribute,descriptor:{name:"a_uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>{const i=this.layer.getOriginalExtent(),o=this.layer.getRelativeOrigin(),s=i[0]!==0||i[2]!==0;let a,u,l,c,h,f;s&&o?(a=r[0]+o[0],u=r[1]+o[1],[l,c,h,f]=i):(a=r[0],u=r[1],[l,c,h,f]=this.layer.getSource().extent);const p=h-l,_=f-c;return[(a-l)/p,(u-c)/_]}}})}loadTexture(){const{createTexture2D:e}=this.rendererService,n={height:0,width:0};this.texture1=e(n),this.texture2=e(n),this.texture3=e(n),r(o=>{this.texture1=i(o[0]),this.texture2=i(o[1]),this.texture3=i(o[2]),this.layerService.reRender()});function r(o){let s=0;const a=[];["https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*MJ22QbpuCzIAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*-z2HSIVDsHIAAAAAAAAAAAAAARQnAQ"].map(l=>{const c=new Image;c.crossOrigin="",c.src=l,a.push(c),c.onload=()=>{s++,s===3&&o(a)}})}function i(o){return e({data:o,width:o.width,height:o.height,wrapS:g.MIRRORED_REPEAT,wrapT:g.MIRRORED_REPEAT,min:g.LINEAR,mag:g.LINEAR})}}}const KR=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
  float u_speed;
  float u_time;
};

out vec4 outputColor;

in vec4 v_Color;
in vec2 v_uv;

float rand(vec2 n) {
  return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float water(vec3 p) {
  float t = u_time * u_speed;
  p.z += t * 2.0;
  p.x += t * 2.0;
  vec3 c1 = texture(SAMPLER_2D(u_texture), p.xz / 30.0).xyz;
  p.z += t * 3.0;
  p.x += t * 0.52;
  vec3 c2 = texture(SAMPLER_2D(u_texture), p.xz / 30.0).xyz;
  p.z += t * 4.0;
  p.x += t * 0.8;
  vec3 c3 = texture(SAMPLER_2D(u_texture), p.xz / 30.0).xyz;
  c1 += c2 - c3;
  float z = (c1.x + c1.y + c1.z) / 3.0;
  return p.y + z / 4.0;
}

float map(vec3 p) {
  float d = 100.0;
  d = water(p);
  return d;
}

float intersect(vec3 ro, vec3 rd) {
  float d = 0.0;
  for (int i = 0; i <= 100; i++) {
    float h = map(ro + rd * d);
    if (h < 0.1) return d;
    d += h;
  }
  return 0.0;
}

vec3 norm(vec3 p) {
  float eps = 0.1;
  return normalize(
    vec3(
      map(p + vec3(eps, 0, 0)) - map(p + vec3(-eps, 0, 0)),
      map(p + vec3(0, eps, 0)) - map(p + vec3(0, -eps, 0)),
      map(p + vec3(0, 0, eps)) - map(p + vec3(0, 0, -eps))
    )
  );
}

float calSpc() {
  vec3 l1 = normalize(vec3(1, 1, 1));
  vec3 ro = vec3(-3, 20, -8);
  vec3 rc = vec3(0, 0, 0);
  vec3 ww = normalize(rc - ro);
  vec3 uu = normalize(cross(vec3(0, 1, 0), ww));
  vec3 vv = normalize(cross(rc - ro, uu));
  vec3 rd = normalize(uu * v_uv.x + vv * v_uv.y + ww);
  float d = intersect(ro, rd);
  vec3 p = ro + rd * d;
  vec3 n = norm(p);
  float spc = pow(max(0.0, dot(reflect(l1, n), rd)), 30.0);
  return spc;
}

void main() {
  outputColor = v_Color;
  float spc = calSpc();
  outputColor += spc * 0.4;
}
`,qR=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_uv;

layout(std140) uniform commonUniforms {
  float u_speed;
  float u_time;
};
out vec4 v_Color;
out vec2 v_uv;

#pragma include "projection"

void main() {
  v_uv = a_uv;
  v_Color = a_Color;
  v_Color.a *= opacity;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
}

`;class QR extends Ae{constructor(...e){super(...e),d(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{speed:e=.5}=this.layer.getLayerConfig(),n={u_speed:e,u_time:this.layer.getLayerAnimateTime(),u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(n)}getAnimateUniforms(){return{u_time:this.layer.getLayerAnimateTime()}}initModels(){var e=this;return L(function*(){return e.loadTexture(),e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"polygonWater",vertexShader:qR,fragmentShader:KR,triangulation:wi,defines:e.getDefines(),inject:e.getInject(),primitive:g.TRIANGLES,depth:{enable:!1},pickingEnabled:!1,diagnosticDerivativeUniformityEnabled:!1})]})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"waterUv",type:$.Attribute,descriptor:{name:"a_uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.STATIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>{const i=this.layer.getOriginalExtent(),o=this.layer.getRelativeOrigin(),s=i[0]!==0||i[2]!==0;let a,u,l,c,h,f;s&&o?(a=r[0]+o[0],u=r[1]+o[1],[l,c,h,f]=i):(a=r[0],u=r[1],[l,c,h,f]=this.layer.getSource().extent);const p=h-l,_=f-c;return[(a-l)/p,(u-c)/_]}}})}loadTexture(){const{waterTexture:e}=this.layer.getLayerConfig(),{createTexture2D:n}=this.rendererService;this.texture=n({height:1,width:1});const r=new Image;r.crossOrigin="",e?(console.warn("L7 recommend：https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ"),r.src=e):r.src="https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ",r.onload=()=>{this.texture=n({data:r,width:r.width,height:r.height,wrapS:g.MIRRORED_REPEAT,wrapT:g.MIRRORED_REPEAT,min:g.LINEAR,mag:g.LINEAR}),this.layerService.reRender()}}}const JR={fill:$R,line:Dp,extrude:UR,text:jp,point_fill:Up,point_image:zp,point_normal:Vp,point_extrude:Lp,water:QR,ocean:GR,extrusion:VR};class $p extends Gn{constructor(...e){super(...e),d(this,"type","PolygonLayer"),d(this,"enableShaderEncodeStyles",["opacity","extrusionBase","rotation","offsets","stroke"])}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel=new JR[n](e),yield e.initLayerModels()})()}getModelType(){var e;const n=(e=this.shapeOption)===null||e===void 0?void 0:e.field;return n==="fill"||!n?"fill":n==="extrude"?"extrude":n==="extrusion"?"extrusion":n==="water"?"water":n==="ocean"?"ocean":n==="line"?"line":this.getPointModelType()}getPointModelType(){const e=this.getEncodedData(),{shape2d:n,shape3d:r}=this.getLayerConfig(),i=this.iconService.getIconMap(),o=e.find(s=>s.hasOwnProperty("shape"));if(o){const s=o.shape;return s==="dot"?"point_normal":(n==null?void 0:n.indexOf(s))!==-1?"point_fill":(r==null?void 0:r.indexOf(s))!==-1?"point_extrude":i.hasOwnProperty(s)?"point_image":"text"}else return"fill"}}const e3=`layout(std140) uniform commonUniforms {
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

uniform sampler2D u_rasterTexture;
uniform sampler2D u_colorTexture;

in vec2 v_texCoord;

bool isnan_emu(float x) {
  return x > 0.0 || x < 0.0
    ? x != x
    : x != 0.0;
}

out vec4 outputColor;

void main() {
  // Can use any component here since u_rasterTexture is under luminance format.
  float value = texture(SAMPLER_2D(u_rasterTexture), vec2(v_texCoord.x, v_texCoord.y)).r;
  if (value == u_noDataValue || isnan_emu(value)) {
    discard;
  } else if (u_clampLow < 0.5 && value < u_domain[0] || u_clampHigh < 0.5 && value > u_domain[1]) {
    discard;
  } else {
    float normalisedValue = (value - u_domain[0]) / (u_domain[1] - u_domain[0]);
    vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(normalisedValue, 0));

    outputColor = color;
    outputColor.a = outputColor.a * u_opacity;
    if (outputColor.a < 0.01) discard;
  }
}
`,t3=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

out vec2 v_texCoord;

#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;let qh=class extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"colorTexture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{opacity:e=1,clampLow:n=!0,clampHigh:r=!0,noDataValue:i=-9999999,domain:o,rampColors:s}=this.layer.getLayerConfig(),a=o||du(s);this.colorTexture=this.layer.textureService.getColorTexture(s,a);const u={u_domain:a,u_opacity:e||1,u_noDataValue:i,u_clampLow:n?1:0,u_clampHigh:(typeof r<"u"?r:n)?1:0,u_rasterTexture:this.texture,u_colorTexture:this.colorTexture};return this.textures=[this.texture,this.colorTexture],this.getUniformsBufferInfo(u)}getRasterData(e){return L(function*(){if(Array.isArray(e.data))return{data:e.data,width:e.width,height:e.height};{const{rasterData:n,width:r,height:i}=yield e.data;return{data:Array.from(n),width:r,height:i}}})()}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){e.initUniformsBuffer();const n=e.layer.getSource(),{createTexture2D:r,queryVerdorInfo:i}=e.rendererService,o=n.data.dataArray[0],{data:s,width:a,height:u}=yield e.getRasterData(o);return e.texture=r({data:new Float32Array(s),width:a,height:u,format:i()==="WebGL1"?g.LUMINANCE:g.RED,type:g.FLOAT,alignment:1}),[yield e.layer.buildLayerModel({moduleName:"rasterImageData",vertexShader:t3,fragmentShader:e3,defines:e.getDefines(),triangulation:Es,primitive:g.TRIANGLES,depth:{enable:!1},pickingEnabled:!1})]})()}clearModels(){var e,n;(e=this.texture)===null||e===void 0||e.destroy(),(n=this.colorTexture)===null||n===void 0||n.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{shaderLocation:this.attributeLocation.UV,name:"a_Uv",buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[3],r[4]]}})}};const n3=["data"],r3=["rasterData"],i3=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
  vec2 u_rminmax;
  vec2 u_gminmax;
  vec2 u_bminmax;
  float u_opacity;
  float u_noDataValue;
};

in vec2 v_texCoord;

out vec4 outputColor;

void main() {
  vec3 rgb = texture(SAMPLER_2D(u_texture), vec2(v_texCoord.x, v_texCoord.y)).rgb;

  if (rgb == vec3(u_noDataValue)) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else {
    outputColor = vec4(
      rgb.r / (u_rminmax.y - u_rminmax.x),
      rgb.g / (u_gminmax.y - u_gminmax.x),
      rgb.b / (u_bminmax.y - u_bminmax.x),
      u_opacity
    );
  }

  if (outputColor.a < 0.01) discard;

}
`,o3=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_rminmax;
  vec2 u_gminmax;
  vec2 u_bminmax;
  float u_opacity;
  float u_noDataValue;
};

out vec2 v_texCoord;

#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;class s3 extends Ae{constructor(...e){super(...e),d(this,"texture",void 0),d(this,"dataOption",{})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{opacity:e=1,noDataValue:n=0}=this.layer.getLayerConfig(),{rMinMax:r=[0,255],gMinMax:i=[0,255],bMinMax:o=[0,255]}=this.dataOption,s={u_rminmax:r,u_gminmax:i,u_bminmax:o,u_opacity:e||1,u_noDataValue:n,u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(s)}getRasterData(e){var n=this;return L(function*(){if(Array.isArray(e.data)){const{data:s}=e,a=Zt(e,n3);return n.dataOption=a,D({data:s},a)}const r=yield e.data,{rasterData:i}=r,o=Zt(r,r3);return n.dataOption=o,Array.isArray(i)?D({data:i},o):D({data:Array.from(i)},o)})()}initModels(){var e=this;return L(function*(){e.initUniformsBuffer();const n=e.layer.getSource(),{createTexture2D:r}=e.rendererService,i=n.data.dataArray[0],{data:o,width:s,height:a}=yield e.getRasterData(i);return e.texture=r({data:new Float32Array(o),width:s,height:a,format:g.RGB,type:g.FLOAT}),[yield e.layer.buildLayerModel({moduleName:"rasterImageDataRGBA",vertexShader:o3,fragmentShader:i3,defines:e.getDefines(),triangulation:Es,primitive:g.TRIANGLES,depth:{enable:!1},pickingEnabled:!1})]})()}buildModels(){var e=this;return L(function*(){return e.initModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[3],r[4]]}})}}const a3=`uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

layout(std140) uniform commonUniforms {
  vec4 u_unpack;
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

in vec2 v_texCoord;
out vec4 outputColor;

float getElevation(vec2 coord, float bias) {
  // Convert encoded elevation value to meters
  vec4 data = texture(SAMPLER_2D(u_texture), coord, bias) * 255.0;
  data.a = -1.0;
  return dot(data, u_unpack);
}

vec4 getColor(float value) {
  float normalisedValue = (value - u_domain[0]) / (u_domain[1] - u_domain[0]);
  vec2 coord = vec2(normalisedValue, 0);
  return texture(SAMPLER_2D(u_colorTexture), coord);
}

void main() {
  float value = getElevation(v_texCoord, 0.0);
  if (value == u_noDataValue) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else if (u_clampLow < 0.5 && value < u_domain[0] || u_clampHigh < 0.5 && value > u_domain[1]) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else {
    outputColor = getColor(value);
    outputColor.a = outputColor.a * u_opacity;
    if (outputColor.a < 0.01) discard;
  }
}
`,u3=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec4 u_unpack;
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};
out vec2 v_texCoord;
#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;class l3 extends Ae{constructor(...e){super(...e),d(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getCommonUniformsInfo(){const{opacity:e,clampLow:n=!0,clampHigh:r=!0,noDataValue:i=-9999999,domain:o,rampColors:s,colorTexture:a,rScaler:u=6553.6,gScaler:l=25.6,bScaler:c=.1,offset:h=1e4}=this.layer.getLayerConfig(),f=o||du(s);let p=a;a?this.layer.textureService.setColorTexture(a,s,f):p=this.layer.textureService.getColorTexture(s,f);const _={u_unpack:[u,l,c,h],u_domain:f,u_opacity:e||1,u_noDataValue:i,u_clampLow:n,u_clampHigh:typeof r<"u"?r:n,u_texture:this.texture,u_colorTexture:p};return this.textures=[this.texture,p],this.getUniformsBufferInfo(_)}initModels(){var e=this;return L(function*(){e.initUniformsBuffer();const n=e.layer.getSource(),{createTexture2D:r}=e.rendererService,i=yield n.data.images;return e.texture=r({data:i[0],width:i[0].width,height:i[0].height,min:g.LINEAR,mag:g.LINEAR}),[yield e.layer.buildLayerModel({moduleName:"RasterTileDataImage",vertexShader:u3,fragmentShader:a3,defines:e.getDefines(),triangulation:Es,primitive:g.TRIANGLES,depth:{enable:!1}})]})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}buildModels(){var e=this;return L(function*(){return e.initModels()})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:$.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:g.DYNAMIC_DRAW,data:[],type:g.FLOAT},size:2,update:(e,n,r)=>[r[3],r[4]]}})}}const c3={raster:qh,rasterRgb:s3,raster3d:qh,rasterTerrainRgb:l3};class Pu extends Gn{constructor(...e){super(...e),d(this,"type","RasterLayer")}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel=new c3[n](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{raster:{},rasterRgb:{},raster3d:{},rasterTerrainRgb:{}}[e]}getModelType(){switch(this.layerSource.getParserType()){case"raster":case"ndi":return"raster";case"rasterRgb":return"rasterRgb";case"rgb":return"rasterRgb";case"image":return"rasterTerrainRgb";default:return"raster"}}getLegend(e){if(e!=="color")return{type:void 0,field:void 0,items:[]};const n=this.getLayerConfig().rampColors;return Np(n,e)}}class h3{constructor({rendererService:e,layerService:n,parent:r}){d(this,"tileResource",new Map),d(this,"rendererService",void 0),d(this,"layerService",void 0),d(this,"parent",void 0),d(this,"layerTilesMap",new Map),d(this,"pendingDestroyQueue",[]),d(this,"maxDestroyPerFrame",3),d(this,"renderLayersCache",null),d(this,"renderCacheDirty",!0),this.rendererService=e,this.layerService=n,this.parent=r}get tiles(){return Array.from(this.layerTilesMap.values())}get pendingDestroyCount(){return this.pendingDestroyQueue.length}hasTile(e){return this.layerTilesMap.has(e)}addTile(e){this.layerTilesMap.set(e.key,e),this.markRenderCacheDirty()}getTile(e){return this.layerTilesMap.get(e)}getVisibleTileBylngLat(e){for(const n of this.layerTilesMap.values())if(n.isLoaded&&n.visible&&n.lnglatInBounds(e))return n}removeTile(e){const n=this.layerTilesMap.get(e);n&&(this.layerTilesMap.delete(e),this.pendingDestroyQueue.push(n),this.markRenderCacheDirty())}processPendingDestroys(){const e=Math.min(this.pendingDestroyQueue.length,this.maxDestroyPerFrame);for(let n=0;n<e;n++){const r=this.pendingDestroyQueue.shift();r&&r.destroy()}}markRenderCacheDirty(){this.renderCacheDirty=!0}updateTileVisible(e){const n=this.getTile(e.key);if(e.isVisible)if(e.parent){const r=this.isChildrenLoaded(e.parent);n==null||n.updateVisible(r)}else n==null||n.updateVisible(!0);else if(e.parent){const r=this.isChildrenLoaded(e.parent);n==null||n.updateVisible(!r)}else n==null||n.updateVisible(!1);this.markRenderCacheDirty()}isParentLoaded(e){const n=e.parent;if(!n)return!0;const r=this.getTile(n==null?void 0:n.key);return!!(r!=null&&r.isLoaded)}isChildrenLoaded(e){const n=e==null?void 0:e.children;return n.length===0?!0:n.every(r=>{const i=this.getTile(r==null?void 0:r.key);return i?(i==null?void 0:i.isLoaded)===!0:!0})}render(){var e=this;return L(function*(){e.processPendingDestroys();const r=e.getRenderLayers().map(function(){var i=L(function*(o){yield e.layerService.renderTileLayer(o)});return function(o){return i.apply(this,arguments)}}());yield Promise.all(r)})()}getRenderLayers(){if(!this.renderCacheDirty&&this.renderLayersCache)return this.renderLayersCache;const e=[];return this.layerTilesMap.forEach(n=>{n.visible&&n.isLoaded&&e.push(...n.getLayers())}),this.renderLayersCache=e,this.renderCacheDirty=!1,e}getLayers(){const e=[];return this.layerTilesMap.forEach(n=>{n.isLoaded&&e.push(...n.getLayers())}),e}getTiles(){return Array.from(this.layerTilesMap.values())}destroy(){for(;this.pendingDestroyQueue.length>0;){const e=this.pendingDestroyQueue.shift();e==null||e.destroy()}this.layerTilesMap.forEach(e=>e.destroy()),this.layerTilesMap.clear(),this.renderLayersCache=null,this.tileResource.clear()}}class Pn{constructor(e,n){this.next=null,this.key=e,this.data=n,this.left=null,this.right=null}}function f3(t,e){return t>e?1:t<e?-1:0}function Sn(t,e,n){const r=new Pn(null,null);let i=r,o=r;for(;;){const s=n(t,e.key);if(s<0){if(e.left===null)break;if(n(t,e.left.key)<0){const a=e.left;if(e.left=a.right,a.right=e,e=a,e.left===null)break}o.left=e,o=e,e=e.left}else if(s>0){if(e.right===null)break;if(n(t,e.right.key)>0){const a=e.right;if(e.right=a.left,a.left=e,e=a,e.right===null)break}i.right=e,i=e,e=e.right}else break}return i.right=e.left,o.left=e.right,e.left=r.right,e.right=r.left,e}function qs(t,e,n,r){const i=new Pn(t,e);if(n===null)return i.left=i.right=null,i;n=Sn(t,n,r);const o=r(t,n.key);return o<0?(i.left=n.left,i.right=n,n.left=null):o>=0&&(i.right=n.right,i.left=n,n.right=null),i}function Qh(t,e,n){let r=null,i=null;if(e){e=Sn(t,e,n);const o=n(e.key,t);o===0?(r=e.left,i=e.right):o<0?(i=e.right,e.right=null,r=e):(r=e.left,e.left=null,i=e)}return{left:r,right:i}}function d3(t,e,n){return e===null?t:(t===null||(e=Sn(t.key,e,n),e.left=t),e)}function Xa(t,e,n,r,i){if(t){r(`${e}${n?"└── ":"├── "}${i(t)}
`);const o=e+(n?"    ":"│   ");t.left&&Xa(t.left,o,!1,r,i),t.right&&Xa(t.right,o,!0,r,i)}}class Fu{constructor(e=f3){this._root=null,this._size=0,this._comparator=e}insert(e,n){return this._size++,this._root=qs(e,n,this._root,this._comparator)}add(e,n){const r=new Pn(e,n);this._root===null&&(r.left=r.right=null,this._size++,this._root=r);const i=this._comparator,o=Sn(e,this._root,i),s=i(e,o.key);return s===0?this._root=o:(s<0?(r.left=o.left,r.right=o,o.left=null):s>0&&(r.right=o.right,r.left=o,o.right=null),this._size++,this._root=r),this._root}remove(e){this._root=this._remove(e,this._root,this._comparator)}_remove(e,n,r){let i;return n===null?null:(n=Sn(e,n,r),r(e,n.key)===0?(n.left===null?i=n.right:(i=Sn(e,n.left,r),i.right=n.right),this._size--,i):n)}pop(){let e=this._root;if(e){for(;e.left;)e=e.left;return this._root=Sn(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null}findStatic(e){let n=this._root;const r=this._comparator;for(;n;){const i=r(e,n.key);if(i===0)return n;i<0?n=n.left:n=n.right}return null}find(e){return this._root&&(this._root=Sn(e,this._root,this._comparator),this._comparator(e,this._root.key)!==0)?null:this._root}contains(e){let n=this._root;const r=this._comparator;for(;n;){const i=r(e,n.key);if(i===0)return!0;i<0?n=n.left:n=n.right}return!1}forEach(e,n){let r=this._root;const i=[];let o=!1;for(;!o;)r!==null?(i.push(r),r=r.left):i.length!==0?(r=i.pop(),e.call(n,r),r=r.right):o=!0;return this}range(e,n,r,i){const o=[],s=this._comparator;let a=this._root,u;for(;o.length!==0||a;)if(a)o.push(a),a=a.left;else{if(a=o.pop(),u=s(a.key,n),u>0)break;if(s(a.key,e)>=0&&r.call(i,a))return this;a=a.right}return this}keys(){const e=[];return this.forEach(({key:n})=>{e.push(n)}),e}values(){const e=[];return this.forEach(({data:n})=>{e.push(n)}),e}min(){return this._root?this.minNode(this._root).key:null}max(){return this._root?this.maxNode(this._root).key:null}minNode(e=this._root){if(e)for(;e.left;)e=e.left;return e}maxNode(e=this._root){if(e)for(;e.right;)e=e.right;return e}at(e){let n=this._root,r=!1,i=0;const o=[];for(;!r;)if(n)o.push(n),n=n.left;else if(o.length>0){if(n=o.pop(),i===e)return n;i++,n=n.right}else r=!0;return null}next(e){let n=this._root,r=null;if(e.right){for(r=e.right;r.left;)r=r.left;return r}const i=this._comparator;for(;n;){const o=i(e.key,n.key);if(o===0)break;o<0?(r=n,n=n.left):n=n.right}return r}prev(e){let n=this._root,r=null;if(e.left!==null){for(r=e.left;r.right;)r=r.right;return r}const i=this._comparator;for(;n;){const o=i(e.key,n.key);if(o===0)break;o<0?n=n.left:(r=n,n=n.right)}return r}clear(){return this._root=null,this._size=0,this}toList(){return _3(this._root)}load(e,n=[],r=!1){let i=e.length;const o=this._comparator;if(r&&$a(e,n,0,i-1,o),this._root===null)this._root=Wa(e,n,0,i),this._size=i;else{const s=v3(this.toList(),p3(e,n),o);i=this._size+i,this._root=ja({head:s},0,i)}return this}isEmpty(){return this._root===null}get size(){return this._size}get root(){return this._root}toString(e=n=>String(n.key)){const n=[];return Xa(this._root,"",!0,r=>n.push(r),e),n.join("")}update(e,n,r){const i=this._comparator;let{left:o,right:s}=Qh(e,this._root,i);i(e,n)<0?s=qs(n,r,s,i):o=qs(n,r,o,i),this._root=d3(o,s,i)}split(e){return Qh(e,this._root,this._comparator)}*[Symbol.iterator](){let e=this._root;const n=[];let r=!1;for(;!r;)e!==null?(n.push(e),e=e.left):n.length!==0?(e=n.pop(),yield e,e=e.right):r=!0}}function Wa(t,e,n,r){const i=r-n;if(i>0){const o=n+Math.floor(i/2),s=t[o],a=e[o],u=new Pn(s,a);return u.left=Wa(t,e,n,o),u.right=Wa(t,e,o+1,r),u}return null}function p3(t,e){const n=new Pn(null,null);let r=n;for(let i=0;i<t.length;i++)r=r.next=new Pn(t[i],e[i]);return r.next=null,n.next}function _3(t){let e=t;const n=[];let r=!1;const i=new Pn(null,null);let o=i;for(;!r;)e?(n.push(e),e=e.left):n.length>0?(e=o=o.next=n.pop(),e=e.right):r=!0;return o.next=null,i.next}function ja(t,e,n){const r=n-e;if(r>0){const i=e+Math.floor(r/2),o=ja(t,e,i),s=t.head;return s.left=o,t.head=t.head.next,s.right=ja(t,i+1,n),s}return null}function v3(t,e,n){const r=new Pn(null,null);let i=r,o=t,s=e;for(;o!==null&&s!==null;)n(o.key,s.key)<0?(i.next=o,o=o.next):(i.next=s,s=s.next),i=i.next;return o!==null?i.next=o:s!==null&&(i.next=s),r.next}function $a(t,e,n,r,i){if(n>=r)return;const o=t[n+r>>1];let s=n-1,a=r+1;for(;;){do s++;while(i(t[s],o)<0);do a--;while(i(t[a],o)>0);if(s>=a)break;let u=t[s];t[s]=t[a],t[a]=u,u=e[s],e[s]=e[a],e[a]=u}$a(t,e,n,a,i),$a(t,e,a+1,r,i)}const cn=11102230246251565e-32,Qe=134217729,m3=(3+8*cn)*cn;function Qs(t,e,n,r,i){let o,s,a,u,l=e[0],c=r[0],h=0,f=0;c>l==c>-l?(o=l,l=e[++h]):(o=c,c=r[++f]);let p=0;if(h<t&&f<n)for(c>l==c>-l?(s=l+o,a=o-(s-l),l=e[++h]):(s=c+o,a=o-(s-c),c=r[++f]),o=s,a!==0&&(i[p++]=a);h<t&&f<n;)c>l==c>-l?(s=o+l,u=s-o,a=o-(s-u)+(l-u),l=e[++h]):(s=o+c,u=s-o,a=o-(s-u)+(c-u),c=r[++f]),o=s,a!==0&&(i[p++]=a);for(;h<t;)s=o+l,u=s-o,a=o-(s-u)+(l-u),l=e[++h],o=s,a!==0&&(i[p++]=a);for(;f<n;)s=o+c,u=s-o,a=o-(s-u)+(c-u),c=r[++f],o=s,a!==0&&(i[p++]=a);return(o!==0||p===0)&&(i[p++]=o),p}function g3(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function Li(t){return new Float64Array(t)}const E3=(3+16*cn)*cn,y3=(2+12*cn)*cn,T3=(9+64*cn)*cn*cn,or=Li(4),Jh=Li(8),ef=Li(12),tf=Li(16),rt=Li(4);function A3(t,e,n,r,i,o,s){let a,u,l,c,h,f,p,_,v,m,y,T,S,x,C,M,P,F;const V=t-i,B=n-i,O=e-o,N=r-o;x=V*N,f=Qe*V,p=f-(f-V),_=V-p,f=Qe*N,v=f-(f-N),m=N-v,C=_*m-(x-p*v-_*v-p*m),M=O*B,f=Qe*O,p=f-(f-O),_=O-p,f=Qe*B,v=f-(f-B),m=B-v,P=_*m-(M-p*v-_*v-p*m),y=C-P,h=C-y,or[0]=C-(y+h)+(h-P),T=x+y,h=T-x,S=x-(T-h)+(y-h),y=S-M,h=S-y,or[1]=S-(y+h)+(h-M),F=T+y,h=F-T,or[2]=T-(F-h)+(y-h),or[3]=F;let U=g3(4,or),z=y3*s;if(U>=z||-U>=z||(h=t-V,a=t-(V+h)+(h-i),h=n-B,l=n-(B+h)+(h-i),h=e-O,u=e-(O+h)+(h-o),h=r-N,c=r-(N+h)+(h-o),a===0&&u===0&&l===0&&c===0)||(z=T3*s+m3*Math.abs(U),U+=V*c+N*a-(O*l+B*u),U>=z||-U>=z))return U;x=a*N,f=Qe*a,p=f-(f-a),_=a-p,f=Qe*N,v=f-(f-N),m=N-v,C=_*m-(x-p*v-_*v-p*m),M=u*B,f=Qe*u,p=f-(f-u),_=u-p,f=Qe*B,v=f-(f-B),m=B-v,P=_*m-(M-p*v-_*v-p*m),y=C-P,h=C-y,rt[0]=C-(y+h)+(h-P),T=x+y,h=T-x,S=x-(T-h)+(y-h),y=S-M,h=S-y,rt[1]=S-(y+h)+(h-M),F=T+y,h=F-T,rt[2]=T-(F-h)+(y-h),rt[3]=F;const W=Qs(4,or,4,rt,Jh);x=V*c,f=Qe*V,p=f-(f-V),_=V-p,f=Qe*c,v=f-(f-c),m=c-v,C=_*m-(x-p*v-_*v-p*m),M=O*l,f=Qe*O,p=f-(f-O),_=O-p,f=Qe*l,v=f-(f-l),m=l-v,P=_*m-(M-p*v-_*v-p*m),y=C-P,h=C-y,rt[0]=C-(y+h)+(h-P),T=x+y,h=T-x,S=x-(T-h)+(y-h),y=S-M,h=S-y,rt[1]=S-(y+h)+(h-M),F=T+y,h=F-T,rt[2]=T-(F-h)+(y-h),rt[3]=F;const Y=Qs(W,Jh,4,rt,ef);x=a*c,f=Qe*a,p=f-(f-a),_=a-p,f=Qe*c,v=f-(f-c),m=c-v,C=_*m-(x-p*v-_*v-p*m),M=u*l,f=Qe*u,p=f-(f-u),_=u-p,f=Qe*l,v=f-(f-l),m=l-v,P=_*m-(M-p*v-_*v-p*m),y=C-P,h=C-y,rt[0]=C-(y+h)+(h-P),T=x+y,h=T-x,S=x-(T-h)+(y-h),y=S-M,h=S-y,rt[1]=S-(y+h)+(h-M),F=T+y,h=F-T,rt[2]=T-(F-h)+(y-h),rt[3]=F;const j=Qs(Y,ef,4,rt,tf);return tf[j-1]}function S3(t,e,n,r,i,o){const s=(e-o)*(n-i),a=(t-i)*(r-o),u=s-a,l=Math.abs(s+a);return Math.abs(u)>=E3*l?u:-A3(t,e,n,r,i,o,l)}var Zp={};const qr=(t,e)=>t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y,Za=(t,e)=>{if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;const n=t.ll.x<e.ll.x?e.ll.x:t.ll.x,r=t.ur.x<e.ur.x?t.ur.x:e.ur.x,i=t.ll.y<e.ll.y?e.ll.y:t.ll.y,o=t.ur.y<e.ur.y?t.ur.y:e.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:o}}};let Rn=Number.EPSILON;Rn===void 0&&(Rn=Math.pow(2,-52));const R3=Rn*Rn,nf=(t,e)=>{if(-Rn<t&&t<Rn&&-Rn<e&&e<Rn)return 0;const n=t-e;return n*n<R3*t*e?0:t<e?-1:1};class x3{constructor(){this.reset()}reset(){this.xRounder=new rf,this.yRounder=new rf}round(e,n){return{x:this.xRounder.round(e),y:this.yRounder.round(n)}}}class rf{constructor(){this.tree=new Fu,this.round(0)}round(e){const n=this.tree.add(e),r=this.tree.prev(n);if(r!==null&&nf(n.key,r.key)===0)return this.tree.remove(e),r.key;const i=this.tree.next(n);return i!==null&&nf(n.key,i.key)===0?(this.tree.remove(e),i.key):e}}const Mi=new x3,Mo=(t,e)=>t.x*e.y-t.y*e.x,Yp=(t,e)=>t.x*e.x+t.y*e.y,of=(t,e,n)=>{const r=S3(t.x,t.y,e.x,e.y,n.x,n.y);return r>0?-1:r<0?1:0},qo=t=>Math.sqrt(Yp(t,t)),C3=(t,e,n)=>{const r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return Mo(i,r)/qo(i)/qo(r)},b3=(t,e,n)=>{const r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return Yp(i,r)/qo(i)/qo(r)},sf=(t,e,n)=>e.y===0?null:{x:t.x+e.x/e.y*(n-t.y),y:n},af=(t,e,n)=>e.x===0?null:{x:n,y:t.y+e.y/e.x*(n-t.x)},I3=(t,e,n,r)=>{if(e.x===0)return af(n,r,t.x);if(r.x===0)return af(t,e,n.x);if(e.y===0)return sf(n,r,t.y);if(r.y===0)return sf(t,e,n.y);const i=Mo(e,r);if(i==0)return null;const o={x:n.x-t.x,y:n.y-t.y},s=Mo(o,e)/i,a=Mo(o,r)/i,u=t.x+a*e.x,l=n.x+s*r.x,c=t.y+a*e.y,h=n.y+s*r.y,f=(u+l)/2,p=(c+h)/2;return{x:f,y:p}};class St{static compare(e,n){const r=St.comparePoints(e.point,n.point);return r!==0?r:(e.point!==n.point&&e.link(n),e.isLeft!==n.isLeft?e.isLeft?1:-1:In.compare(e.segment,n.segment))}static comparePoints(e,n){return e.x<n.x?-1:e.x>n.x?1:e.y<n.y?-1:e.y>n.y?1:0}constructor(e,n){e.events===void 0?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=n}link(e){if(e.point===this.point)throw new Error("Tried to link already linked events");const n=e.point.events;for(let r=0,i=n.length;r<i;r++){const o=n[r];this.point.events.push(o),o.point=this.point}this.checkForConsuming()}checkForConsuming(){const e=this.point.events.length;for(let n=0;n<e;n++){const r=this.point.events[n];if(r.segment.consumedBy===void 0)for(let i=n+1;i<e;i++){const o=this.point.events[i];o.consumedBy===void 0&&r.otherSE.point.events===o.otherSE.point.events&&r.segment.consume(o.segment)}}}getAvailableLinkedEvents(){const e=[];for(let n=0,r=this.point.events.length;n<r;n++){const i=this.point.events[n];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&e.push(i)}return e}getLeftmostComparator(e){const n=new Map,r=i=>{const o=i.otherSE;n.set(i,{sine:C3(this.point,e.point,o.point),cosine:b3(this.point,e.point,o.point)})};return(i,o)=>{n.has(i)||r(i),n.has(o)||r(o);const{sine:s,cosine:a}=n.get(i),{sine:u,cosine:l}=n.get(o);return s>=0&&u>=0?a<l?1:a>l?-1:0:s<0&&u<0?a<l?-1:a>l?1:0:u<s?-1:u>s?1:0}}}let M3=0;class In{static compare(e,n){const r=e.leftSE.point.x,i=n.leftSE.point.x,o=e.rightSE.point.x,s=n.rightSE.point.x;if(s<r)return 1;if(o<i)return-1;const a=e.leftSE.point.y,u=n.leftSE.point.y,l=e.rightSE.point.y,c=n.rightSE.point.y;if(r<i){if(u<a&&u<l)return 1;if(u>a&&u>l)return-1;const h=e.comparePoint(n.leftSE.point);if(h<0)return 1;if(h>0)return-1;const f=n.comparePoint(e.rightSE.point);return f!==0?f:-1}if(r>i){if(a<u&&a<c)return-1;if(a>u&&a>c)return 1;const h=n.comparePoint(e.leftSE.point);if(h!==0)return h;const f=e.comparePoint(n.rightSE.point);return f<0?1:f>0?-1:1}if(a<u)return-1;if(a>u)return 1;if(o<s){const h=n.comparePoint(e.rightSE.point);if(h!==0)return h}if(o>s){const h=e.comparePoint(n.rightSE.point);if(h<0)return 1;if(h>0)return-1}if(o!==s){const h=l-a,f=o-r,p=c-u,_=s-i;if(h>f&&p<_)return 1;if(h<f&&p>_)return-1}return o>s?1:o<s||l<c?-1:l>c?1:e.id<n.id?-1:e.id>n.id?1:0}constructor(e,n,r,i){this.id=++M3,this.leftSE=e,e.segment=this,e.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=e,this.rings=r,this.windings=i}static fromRing(e,n,r){let i,o,s;const a=St.comparePoints(e,n);if(a<0)i=e,o=n,s=1;else if(a>0)i=n,o=e,s=-1;else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);const u=new St(i,!0),l=new St(o,!1);return new In(u,l,[r],[s])}replaceRightSE(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const e=this.leftSE.point.y,n=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<n?e:n},ur:{x:this.rightSE.point.x,y:e>n?e:n}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}comparePoint(e){if(this.isAnEndpoint(e))return 0;const n=this.leftSE.point,r=this.rightSE.point,i=this.vector();if(n.x===r.x)return e.x===n.x?0:e.x<n.x?1:-1;const o=(e.y-n.y)/i.y,s=n.x+o*i.x;if(e.x===s)return 0;const a=(e.x-n.x)/i.x,u=n.y+a*i.y;return e.y===u?0:e.y<u?-1:1}getIntersection(e){const n=this.bbox(),r=e.bbox(),i=Za(n,r);if(i===null)return null;const o=this.leftSE.point,s=this.rightSE.point,a=e.leftSE.point,u=e.rightSE.point,l=qr(n,a)&&this.comparePoint(a)===0,c=qr(r,o)&&e.comparePoint(o)===0,h=qr(n,u)&&this.comparePoint(u)===0,f=qr(r,s)&&e.comparePoint(s)===0;if(c&&l)return f&&!h?s:!f&&h?u:null;if(c)return h&&o.x===u.x&&o.y===u.y?null:o;if(l)return f&&s.x===a.x&&s.y===a.y?null:a;if(f&&h)return null;if(f)return s;if(h)return u;const p=I3(o,this.vector(),a,e.vector());return p===null||!qr(i,p)?null:Mi.round(p.x,p.y)}split(e){const n=[],r=e.events!==void 0,i=new St(e,!0),o=new St(e,!1),s=this.rightSE;this.replaceRightSE(o),n.push(o),n.push(i);const a=new In(i,s,this.rings.slice(),this.windings.slice());return St.comparePoints(a.leftSE.point,a.rightSE.point)>0&&a.swapEvents(),St.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),r&&(i.checkForConsuming(),o.checkForConsuming()),n}swapEvents(){const e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let n=0,r=this.windings.length;n<r;n++)this.windings[n]*=-1}consume(e){let n=this,r=e;for(;n.consumedBy;)n=n.consumedBy;for(;r.consumedBy;)r=r.consumedBy;const i=In.compare(n,r);if(i!==0){if(i>0){const o=n;n=r,r=o}if(n.prev===r){const o=n;n=r,r=o}for(let o=0,s=r.rings.length;o<s;o++){const a=r.rings[o],u=r.windings[o],l=n.rings.indexOf(a);l===-1?(n.rings.push(a),n.windings.push(u)):n.windings[l]+=u}r.rings=null,r.windings=null,r.consumedBy=n,r.leftSE.consumedBy=n.leftSE,r.rightSE.consumedBy=n.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{const e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;const e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};const n=this._afterState.rings,r=this._afterState.windings,i=this._afterState.multiPolys;for(let a=0,u=this.rings.length;a<u;a++){const l=this.rings[a],c=this.windings[a],h=n.indexOf(l);h===-1?(n.push(l),r.push(c)):r[h]+=c}const o=[],s=[];for(let a=0,u=n.length;a<u;a++){if(r[a]===0)continue;const l=n[a],c=l.poly;if(s.indexOf(c)===-1)if(l.isExterior)o.push(c);else{s.indexOf(c)===-1&&s.push(c);const h=o.indexOf(l.poly);h!==-1&&o.splice(h,1)}}for(let a=0,u=o.length;a<u;a++){const l=o[a].multiPoly;i.indexOf(l)===-1&&i.push(l)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;const e=this.beforeState().multiPolys,n=this.afterState().multiPolys;switch(Nt.type){case"union":{const r=e.length===0,i=n.length===0;this._isInResult=r!==i;break}case"intersection":{let r,i;e.length<n.length?(r=e.length,i=n.length):(r=n.length,i=e.length),this._isInResult=i===Nt.numMultiPolys&&r<i;break}case"xor":{const r=Math.abs(e.length-n.length);this._isInResult=r%2===1;break}case"difference":{const r=i=>i.length===1&&i[0].isSubject;this._isInResult=r(e)!==r(n);break}default:throw new Error(`Unrecognized operation type found ${Nt.type}`)}return this._isInResult}}class uf{constructor(e,n,r){if(!Array.isArray(e)||e.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=r,this.segments=[],typeof e[0][0]!="number"||typeof e[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const i=Mi.round(e[0][0],e[0][1]);this.bbox={ll:{x:i.x,y:i.y},ur:{x:i.x,y:i.y}};let o=i;for(let s=1,a=e.length;s<a;s++){if(typeof e[s][0]!="number"||typeof e[s][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let u=Mi.round(e[s][0],e[s][1]);u.x===o.x&&u.y===o.y||(this.segments.push(In.fromRing(o,u,this)),u.x<this.bbox.ll.x&&(this.bbox.ll.x=u.x),u.y<this.bbox.ll.y&&(this.bbox.ll.y=u.y),u.x>this.bbox.ur.x&&(this.bbox.ur.x=u.x),u.y>this.bbox.ur.y&&(this.bbox.ur.y=u.y),o=u)}(i.x!==o.x||i.y!==o.y)&&this.segments.push(In.fromRing(o,i,this))}getSweepEvents(){const e=[];for(let n=0,r=this.segments.length;n<r;n++){const i=this.segments[n];e.push(i.leftSE),e.push(i.rightSE)}return e}}class O3{constructor(e,n){if(!Array.isArray(e))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new uf(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let r=1,i=e.length;r<i;r++){const o=new uf(e[r],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=n}getSweepEvents(){const e=this.exteriorRing.getSweepEvents();for(let n=0,r=this.interiorRings.length;n<r;n++){const i=this.interiorRings[n].getSweepEvents();for(let o=0,s=i.length;o<s;o++)e.push(i[o])}return e}}class lf{constructor(e,n){if(!Array.isArray(e))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof e[0][0][0]=="number"&&(e=[e])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let r=0,i=e.length;r<i;r++){const o=new O3(e[r],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=n}getSweepEvents(){const e=[];for(let n=0,r=this.polys.length;n<r;n++){const i=this.polys[n].getSweepEvents();for(let o=0,s=i.length;o<s;o++)e.push(i[o])}return e}}class Qo{static factory(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];if(!o.isInResult()||o.ringOut)continue;let s=null,a=o.leftSE,u=o.rightSE;const l=[a],c=a.point,h=[];for(;s=a,a=u,l.push(a),a.point!==c;)for(;;){const f=a.getAvailableLinkedEvents();if(f.length===0){const v=l[0].point,m=l[l.length-1].point;throw new Error(`Unable to complete output ring starting at [${v.x}, ${v.y}]. Last matching segment found ends at [${m.x}, ${m.y}].`)}if(f.length===1){u=f[0].otherSE;break}let p=null;for(let v=0,m=h.length;v<m;v++)if(h[v].point===a.point){p=v;break}if(p!==null){const v=h.splice(p)[0],m=l.splice(v.index);m.unshift(m[0].otherSE),n.push(new Qo(m.reverse()));continue}h.push({index:l.length,point:a.point});const _=a.getLeftmostComparator(s);u=f.sort(_)[0].otherSE;break}n.push(new Qo(l))}return n}constructor(e){this.events=e;for(let n=0,r=e.length;n<r;n++)e[n].segment.ringOut=this;this.poly=null}getGeom(){let e=this.events[0].point;const n=[e];for(let l=1,c=this.events.length-1;l<c;l++){const h=this.events[l].point,f=this.events[l+1].point;of(h,e,f)!==0&&(n.push(h),e=h)}if(n.length===1)return null;const r=n[0],i=n[1];of(r,e,i)===0&&n.shift(),n.push(n[0]);const o=this.isExteriorRing()?1:-1,s=this.isExteriorRing()?0:n.length-1,a=this.isExteriorRing()?n.length:-1,u=[];for(let l=s;l!=a;l+=o)u.push([n[l].x,n[l].y]);return u}isExteriorRing(){if(this._isExteriorRing===void 0){const e=this.enclosingRing();this._isExteriorRing=e?!e.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let e=this.events[0];for(let i=1,o=this.events.length;i<o;i++){const s=this.events[i];St.compare(e,s)>0&&(e=s)}let n=e.segment.prevInResult(),r=n?n.prevInResult():null;for(;;){if(!n)return null;if(!r)return n.ringOut;if(r.ringOut!==n.ringOut)return r.ringOut.enclosingRing()!==n.ringOut?n.ringOut:n.ringOut.enclosingRing();n=r.prevInResult(),r=n?n.prevInResult():null}}}class cf{constructor(e){this.exteriorRing=e,e.poly=this,this.interiorRings=[]}addInterior(e){this.interiorRings.push(e),e.poly=this}getGeom(){const e=[this.exteriorRing.getGeom()];if(e[0]===null)return null;for(let n=0,r=this.interiorRings.length;n<r;n++){const i=this.interiorRings[n].getGeom();i!==null&&e.push(i)}return e}}class P3{constructor(e){this.rings=e,this.polys=this._composePolys(e)}getGeom(){const e=[];for(let n=0,r=this.polys.length;n<r;n++){const i=this.polys[n].getGeom();i!==null&&e.push(i)}return e}_composePolys(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];if(!o.poly)if(o.isExteriorRing())n.push(new cf(o));else{const s=o.enclosingRing();s.poly||n.push(new cf(s)),s.poly.addInterior(o)}}return n}}class F3{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:In.compare;this.queue=e,this.tree=new Fu(n),this.segments=[]}process(e){const n=e.segment,r=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(n),r;const i=e.isLeft?this.tree.add(n):this.tree.find(n);if(!i)throw new Error(`Unable to find segment #${n.id} [${n.leftSE.point.x}, ${n.leftSE.point.y}] -> [${n.rightSE.point.x}, ${n.rightSE.point.y}] in SweepLine tree.`);let o=i,s=i,a,u;for(;a===void 0;)o=this.tree.prev(o),o===null?a=null:o.key.consumedBy===void 0&&(a=o.key);for(;u===void 0;)s=this.tree.next(s),s===null?u=null:s.key.consumedBy===void 0&&(u=s.key);if(e.isLeft){let l=null;if(a){const h=a.getIntersection(n);if(h!==null&&(n.isAnEndpoint(h)||(l=h),!a.isAnEndpoint(h))){const f=this._splitSafely(a,h);for(let p=0,_=f.length;p<_;p++)r.push(f[p])}}let c=null;if(u){const h=u.getIntersection(n);if(h!==null&&(n.isAnEndpoint(h)||(c=h),!u.isAnEndpoint(h))){const f=this._splitSafely(u,h);for(let p=0,_=f.length;p<_;p++)r.push(f[p])}}if(l!==null||c!==null){let h=null;l===null?h=c:c===null?h=l:h=St.comparePoints(l,c)<=0?l:c,this.queue.remove(n.rightSE),r.push(n.rightSE);const f=n.split(h);for(let p=0,_=f.length;p<_;p++)r.push(f[p])}r.length>0?(this.tree.remove(n),r.push(e)):(this.segments.push(n),n.prev=a)}else{if(a&&u){const l=a.getIntersection(u);if(l!==null){if(!a.isAnEndpoint(l)){const c=this._splitSafely(a,l);for(let h=0,f=c.length;h<f;h++)r.push(c[h])}if(!u.isAnEndpoint(l)){const c=this._splitSafely(u,l);for(let h=0,f=c.length;h<f;h++)r.push(c[h])}}}this.tree.remove(n)}return r}_splitSafely(e,n){this.tree.remove(e);const r=e.rightSE;this.queue.remove(r);const i=e.split(n);return i.push(r),e.consumedBy===void 0&&this.tree.add(e),i}}const hf=typeof process<"u"&&Zp.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,B3=typeof process<"u"&&Zp.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class N3{run(e,n,r){Nt.type=e,Mi.reset();const i=[new lf(n,!0)];for(let h=0,f=r.length;h<f;h++)i.push(new lf(r[h],!1));if(Nt.numMultiPolys=i.length,Nt.type==="difference"){const h=i[0];let f=1;for(;f<i.length;)Za(i[f].bbox,h.bbox)!==null?f++:i.splice(f,1)}if(Nt.type==="intersection")for(let h=0,f=i.length;h<f;h++){const p=i[h];for(let _=h+1,v=i.length;_<v;_++)if(Za(p.bbox,i[_].bbox)===null)return[]}const o=new Fu(St.compare);for(let h=0,f=i.length;h<f;h++){const p=i[h].getSweepEvents();for(let _=0,v=p.length;_<v;_++)if(o.insert(p[_]),o.size>hf)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const s=new F3(o);let a=o.size,u=o.pop();for(;u;){const h=u.key;if(o.size===a){const p=h.segment;throw new Error(`Unable to pop() ${h.isLeft?"left":"right"} SweepEvent [${h.point.x}, ${h.point.y}] from segment #${p.id} [${p.leftSE.point.x}, ${p.leftSE.point.y}] -> [${p.rightSE.point.x}, ${p.rightSE.point.y}] from queue.`)}if(o.size>hf)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(s.segments.length>B3)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const f=s.process(h);for(let p=0,_=f.length;p<_;p++){const v=f[p];v.consumedBy===void 0&&o.insert(v)}a=o.size,u=o.pop()}Mi.reset();const l=Qo.factory(s.segments);return new P3(l).getGeom()}}const Nt=new N3,D3=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Nt.run("union",t,n)},w3=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Nt.run("intersection",t,n)},L3=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Nt.run("xor",t,n)},U3=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Nt.run("difference",t,n)};var k3={union:D3,intersection:w3,xor:L3,difference:U3};function z3(t,e,n){n===void 0&&(n={});var r=Nl(t),i=Nl(e),o=k3.union(r.coordinates,i.coordinates);return o.length===0?null:o.length===1?vu(o[0],n.properties):hv(o,n.properties)}class V3{getCombineFeature(e){let n=null;const r=e[0];return e.map(i=>{const o=vu(i.coordinates);n===null?n=o:n=z3(n,o)}),r&&(n.properties=D({},r)),n}}const Qr="select",Jr="active";class H3{constructor({layerService:e,tileLayerService:n,parent:r}){d(this,"layerService",void 0),d(this,"tileLayerService",void 0),d(this,"tileSourceService",void 0),d(this,"parent",void 0),d(this,"tilePickID",new Map),this.layerService=e,this.tileLayerService=n,this.parent=r,this.tileSourceService=new V3}pickRender(e){const n=this.tileLayerService.getVisibleTileBylngLat(e.lngLat);if(n){const r=n.getMainLayer();r==null||r.layerPickService.pickRender(e)}}pick(e,n){var r=this;return L(function*(){const o=r.parent.getContainer().pickingService;if(e.type==="RasterLayer"){const s=r.tileLayerService.getVisibleTileBylngLat(n.lngLat);if(s&&s.getMainLayer()!==void 0){const a=s.getMainLayer();return a.layerPickService.pickRasterLayer(a,n,r.parent)}return!1}return r.pickRender(n),o.pickFromPickingFBO(e,n)})()}selectFeature(e){const[n,r,i]=e,o=this.color2PickId(n,r,i);this.tilePickID.set(Qr,o),this.updateHighLight(n,r,i,Qr)}highlightPickedFeature(e){const[n,r,i]=e,o=this.color2PickId(n,r,i);this.tilePickID.set(Jr,o),this.updateHighLight(n,r,i,Jr)}updateHighLight(e,n,r,i){for(const o of this.tileLayerService.tiles){if(!o.isLoaded)continue;const s=o.getMainLayer();switch(i){case Qr:s==null||s.hooks.beforeSelect.call([e,n,r]);break;case Jr:s==null||s.hooks.beforeHighlight.call([e,n,r]);break}}}setPickState(){const e=this.tilePickID.get(Qr),n=this.tilePickID.get(Jr);if(e){const[r,i,o]=this.pickId2Color(e);this.updateHighLight(r,i,o,Qr);return}if(n){const[r,i,o]=this.pickId2Color(n);this.updateHighLight(r,i,o,Jr);return}}color2PickId(e,n,r){return zn(new Uint8Array([e,n,r]))}pickId2Color(e){return xr(e)}getFeatureById(e){const n=[];for(const r of this.tileLayerService.tiles)if(r.visible&&r.isLoaded){const i=r.getFeatureById(e);for(let o=0;o<i.length;o++)n.push(i[o])}return n}pickRasterLayer(){return!1}}function X3(t){return t==="PolygonLayer"?$p:t==="LineLayer"?wp:Va}function W3(t){return["PolygonLayer","LineLayer"].indexOf(t)!==-1}class Kn extends pt.EventEmitter{constructor(e,n){super(),d(this,"x",void 0),d(this,"y",void 0),d(this,"z",void 0),d(this,"key",void 0),d(this,"parent",void 0),d(this,"sourceTile",void 0),d(this,"visible",!0),d(this,"layers",[]),d(this,"isLoaded",!1),d(this,"tileMaskLayers",[]),d(this,"tileMask",void 0),this.parent=n,this.sourceTile=e,this.x=e.x,this.y=e.y,this.z=e.z,this.key=`${this.x}_${this.y}_${this.z}`}getLayers(){return this.layers}styleUpdate(...e){}lnglatInBounds(e){const[n,r,i,o]=this.sourceTile.bounds,{lng:s,lat:a}=e;return s>=n&&s<=i&&a>=r&&a<=o}getLayerOptions(){var e;const n=this.parent.getLayerConfig();return D(D({},n),{},{textAllowOverlap:!0,autoFit:!1,maskLayers:this.getMaskLayer(),tileMask:W3(this.parent.type),mask:n.mask||((e=n.maskLayers)===null||e===void 0?void 0:e.length)!==0&&n.enableMask})}getMaskLayer(){const{maskLayers:e}=this.parent.getLayerConfig(),n=[];return e==null||e.forEach(r=>{if(!r.tileLayer)return n.push(r),r;const o=r.tileLayer.getTile(this.sourceTile.key),s=o==null?void 0:o.getLayers()[0];s&&n.push(s)}),n}addTileMask(){var e=this;return L(function*(){const n=new $p({name:"mask",visible:!0,enablePicking:!1}).source({type:"FeatureCollection",features:[e.sourceTile.bboxPolygon]},{parser:{type:"geojson",featureId:"id"}}).shape("fill").color("#0f0").style({opacity:.5}),r=_i(e.parent.container);n.setContainer(r),yield n.init(),e.tileMask=n;const i=e.getMainLayer();return i!==void 0&&(i.tileMask=n),n})()}addMask(e,n){var r=this;return L(function*(){const i=_i(r.parent.container);n.setContainer(i),yield n.init(),e.addMask(n),r.tileMaskLayers.push(n)})()}addLayer(e){var n=this;return L(function*(){e.isTileLayer=!0;const r=_i(n.parent.container);e.setContainer(r),n.layers.push(e),yield e.init()})()}updateVisible(e){this.visible=e,this.updateOptions("visible",e)}updateOptions(e,n){this.layers.forEach(r=>{r.updateLayerConfig({[e]:n})})}getMainLayer(){return this.layers[0]}getFeatures(e){return[]}getFeatureById(e){return[]}destroy(){var e;(e=this.tileMask)===null||e===void 0||e.destroy(),this.layers.forEach(n=>n.destroy())}}class j3 extends Kn{initTileLayer(){var e=this;return L(function*(){const n=e.getSourceOption(),r=n.data.features[0].properties,i=new wp().source(n.data,n.options).size(1).shape("line").color("red"),o=new Va({minZoom:e.z-1,maxZoom:e.z+1,textAllowOverlap:!0}).source([r],{parser:{type:"json",x:"x",y:"y"}}).size(20).color("red").shape(e.key).style({stroke:"#fff",strokeWidth:2});yield e.addLayer(i),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource();return{data:{type:"FeatureCollection",features:this.sourceTile.data.layers.testTile.features},options:{parser:{type:"geojson"},transforms:e.transforms}}}}class $3 extends Kn{initTileLayer(){var e=this;return L(function*(){const n=e.parent.getLayerAttributeConfig(),r=e.getLayerOptions(),i=e.getSourceOption(),o=new A2(D({},r)).source(i.data,i.options);n&&Object.keys(n).forEach(s=>{var a,u;const l=s;o[l]((a=n[l])===null||a===void 0?void 0:a.field,(u=n[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:e.transforms}}}}const Z3=`layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

out vec4 outputColor;

void main() {
  outputColor = u_color;
  outputColor.a *= u_opacity;
}
`,Y3=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;

layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

#pragma include "projection"

void main() {
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
}

`;class G3 extends Ae{getUninforms(){const e=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),D(D({},e.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{opacity:e=1,color:n="#000"}=this.layer.getLayerConfig(),r={u_color:Te(n),u_opacity:e||1};return this.getUniformsBufferInfo(r)}initModels(){var e=this;return L(function*(){return e.buildModels()})()}buildModels(){var e=this;return L(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"mask",vertexShader:Y3,fragmentShader:Z3,defines:e.getDefines(),triangulation:wi,depth:{enable:!1},pick:!1})]})()}clearModels(e=!0){e&&this.layerService.clear()}registerBuiltinAttributes(){return""}}const K3={fill:G3};class Gp extends Gn{constructor(...e){super(...e),d(this,"type","MaskLayer")}buildModels(){var e=this;return L(function*(){const n=e.getModelType();e.layerModel=new K3[n](e),yield e.initLayerModels()})()}getModelType(){return"fill"}}class q3 extends Kn{initTileLayer(){var e=this;return L(function*(){const n=e.parent.getLayerAttributeConfig(),r=e.getLayerOptions(),i=e.getSourceOption(),o=new Gp(D({},r)).source(i.data,i.options);n&&Object.keys(n).forEach(s=>{var a,u;const l=s;o[l]((a=n[l])===null||a===void 0?void 0:a.field,(u=n[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getFeatures(e){return e?this.sourceTile.data.getTileData(e):[]}getSourceOption(){const e=this.parent.getSource(),{sourceLayer:n,featureId:r}=this.parent.getLayerConfig();return{data:{type:"FeatureCollection",features:this.getFeatures(n)},options:{parser:{type:"geojson",featureId:r},transforms:e.transforms}}}}const Q3=["rasterData"];let J3=class extends Kn{initTileLayer(){var e=this;return L(function*(){const n=e.parent.getLayerAttributeConfig(),r=e.getLayerOptions(),i=e.getSourceOption(),o=new Pu(D({},r)).source(i.data,i.options);n&&Object.keys(n).forEach(s=>{var a,u;const l=s;o[l]((a=n[l])===null||a===void 0?void 0:a.field,(u=n[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource(),n=this.sourceTile.data.data,{rasterData:r}=n,i=Zt(n,Q3);return{data:r,options:{parser:D({type:"rasterRgb",extent:this.sourceTile.bounds},i),transforms:e.transforms}}}};class ex extends Kn{initTileLayer(){var e=this;return L(function*(){const n=e.parent.getLayerAttributeConfig(),r=e.getLayerOptions(),i=e.getSourceOption(),o=new Pu(D({},r)).source(i.data,i.options);n&&Object.keys(n).forEach(s=>{var a,u;const l=s;o[l]((a=n[l])===null||a===void 0?void 0:a.field,(u=n[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:e.transforms}}}}const tx=["rasterData"],nx={positions:[0,1],colors:["#000","#fff"]};class rx extends Kn{constructor(...e){super(...e),d(this,"colorTexture",void 0)}initTileLayer(){var e=this;return L(function*(){const n=e.parent.getLayerAttributeConfig(),r=e.getLayerOptions(),i=e.getSourceOption(),{rampColors:o,domain:s}=e.getLayerOptions();e.colorTexture=e.parent.textureService.getColorTexture(o,s);const a=new Pu(D(D({},r),{},{colorTexture:e.colorTexture})).source(i.data,i.options);n&&Object.keys(n).forEach(u=>{var l,c;const h=u;a[h]((l=n[h])===null||l===void 0?void 0:l.field,(c=n[h])===null||c===void 0?void 0:c.values)}),yield e.addLayer(a),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource(),n=this.sourceTile.data.data,{rasterData:r}=n,i=Zt(n,tx);return{data:r,options:{parser:D({type:"raster",extent:this.sourceTile.bounds},i),transforms:e.transforms}}}styleUpdate(...e){const{rampColors:n=nx,domain:r}=e;this.colorTexture=this.parent.textureService.getColorTexture(n,r||du(n)),this.layers.forEach(i=>i.style({colorTexture:this.colorTexture}))}destroy(){this.layers.forEach(e=>e.destroy())}}class uo extends Kn{initTileLayer(){var e=this;return L(function*(){const n=e.parent.getLayerAttributeConfig(),r=e.getLayerOptions(),i=X3(e.parent.type),o=e.getSourceOption();if(!o){e.isLoaded=!0,e.emit("loaded");return}const s=new i(D({},r)).source(o.data,o.options);Object.keys(n).forEach(a=>{var u,l;const c=a;s[c]((u=n[c])===null||u===void 0?void 0:u.field,(l=n[c])===null||l===void 0?void 0:l.values)}),yield e.addLayer(s),r.tileMask&&(yield e.addTileMask()),e.setLayerMinMaxZoom(s),e.isLoaded=!0,e.emit("loaded")})()}getSourceOption(){const e=this.parent.getSource(),{sourceLayer:n="defaultLayer",featureId:r="id"}=this.parent.getLayerConfig();return{data:{type:"FeatureCollection",features:this.getFeatures(n)},options:{parser:{type:"geojson",featureId:r},transforms:e.transforms}}}setLayerMinMaxZoom(e){e.getModelType()==="text"&&e.updateLayerConfig({maxZoom:this.z+1,minZoom:this.z-1})}getFeatures(e){return this.sourceTile.data.getTileData(e)}getFeatureById(e){const n=this.getMainLayer();return n?n.getSource().data.dataArray.filter(i=>i._id===e):[]}}function ix(t){switch(t.type){case"PolygonLayer":return uo;case"LineLayer":return uo;case"PointLayer":return uo;case"TileDebugLayer":return j3;case"MaskLayer":return q3;case"RasterLayer":const{dataType:n}=t.getSource().parser;switch(n){case Ge.RGB:case Ge.CUSTOMRGB:return J3;case Ge.ARRAYBUFFER:case Ge.CUSTOMARRAYBUFFER:return rx;case Ge.TERRAINRGB:case Ge.CUSTOMTERRAINRGB:return ex;default:return $3}default:return uo}}const ox=["shape","color","size","style","animate","filter","rotate","scale","setBlend","setSelect","setActive","disableMask","enableMask","addMask","removeMask"],{debounce:sx}=we;class ax{constructor(e){d(this,"parent",void 0),d(this,"tileLayerService",void 0),d(this,"mapService",void 0),d(this,"layerService",void 0),d(this,"rendererService",void 0),d(this,"pickingService",void 0),d(this,"tilePickService",void 0),d(this,"tilesetManager",void 0),d(this,"initedTileset",!1),d(this,"lastViewStates",void 0),d(this,"mapchange",()=>{var r;if(this.parent.isVisible()===!1)return;const{latLonBounds:i,zoom:o}=this.getCurrentView();this.lastViewStates&&this.lastViewStates.zoom===o&&this.lastViewStates.minLng===i[0]&&this.lastViewStates.minLat===i[1]&&this.lastViewStates.maxLng===i[2]&&this.lastViewStates.maxLat===i[3]||(this.lastViewStates={zoom:o,minLng:i[0],minLat:i[1],maxLng:i[2],maxLat:i[3]},(r=this.tilesetManager)===null||r===void 0||r.throttleUpdate(o,i))}),d(this,"viewchange",sx(this.mapchange,24)),this.parent=e;const n=this.parent.getContainer();this.rendererService=n.rendererService,this.layerService=n.layerService,this.mapService=n.mapService,this.pickingService=n.pickingService,this.tileLayerService=new h3({rendererService:this.rendererService,layerService:this.layerService,parent:e}),this.tilePickService=new H3({tileLayerService:this.tileLayerService,layerService:this.layerService,parent:e}),this.parent.setLayerPickService(this.tilePickService),this.proxy(e),this.initTileSetManager()}initTileSetManager(){var e;const n=this.parent.getSource();if(this.tilesetManager=n.tileset,this.initedTileset||(this.bindTilesetEvent(),this.initedTileset=!0),this.parent.isVisible()===!1)return;const{latLonBounds:r,zoom:i}=this.getCurrentView();(e=this.tilesetManager)===null||e===void 0||e.update(i,r)}getCurrentView(){const e=this.mapService.getBounds(),n=[e[0][0],e[0][1],e[1][0],e[1][1]],r=this.mapService.getZoom();return{latLonBounds:n,zoom:r}}bindTilesetEvent(){this.tilesetManager.on("tile-loaded",e=>{}),this.tilesetManager.on("tile-unload",e=>{this.tileUnLoad(e)}),this.tilesetManager.on("tile-error",(e,n)=>{this.tileError(e)}),this.tilesetManager.on("tile-update",()=>{this.tileUpdate()}),this.mapService.on("zoomend",this.mapchange),this.mapService.on("moveend",this.viewchange)}render(){this.tileLayerService.render()}getLayers(){return this.tileLayerService.getLayers()}getTiles(){return this.tileLayerService.getTiles()}getTile(e){return this.tileLayerService.getTile(e)}tileLoaded(e){}tileError(e){console.warn("error:",e)}destroy(){var e;this.mapService.off("zoomend",this.mapchange),this.mapService.off("moveend",this.viewchange),(e=this.tilesetManager)===null||e===void 0||e.destroy(),this.tileLayerService.destroy()}reload(){var e;this.tilesetManager.clear();const{latLonBounds:n,zoom:r}=this.getCurrentView();(e=this.tilesetManager)===null||e===void 0||e.update(r,n)}tileUnLoad(e){this.tileLayerService.removeTile(e.key)}tileUpdate(){var e=this;return L(function*(){if(!e.tilesetManager)return;const n=e.parent.getMinZoom(),r=e.parent.getMaxZoom(),i=e.tilesetManager.tiles.filter(o=>o.isLoaded&&o.isVisibleChange&&o.data&&o.z>=n&&o.z<r);yield Promise.all(i.map(function(){var o=L(function*(s){if(e.tileLayerService.hasTile(s.key))e.tileLayerService.updateTileVisible(s),e.tilePickService.setPickState(),e.layerService.reRender();else{const a=ix(e.parent),u=new a(s,e.parent);yield u.initTileLayer(),e.tilePickService.setPickState(),u.getLayers().length!==0&&(e.tileLayerService.addTile(u),e.tileLayerService.updateTileVisible(s),e.layerService.reRender())}});return function(s){return o.apply(this,arguments)}}())),e.tilesetManager.isLoaded&&e.parent.emit("tiles-loaded",e.tilesetManager.currentTiles)})()}setPickState(e){}pickRender(e){this.tilePickService.pickRender(e)}selectFeature(e){this.tilePickService.selectFeature(e)}highlightPickedFeature(e){this.tilePickService.highlightPickedFeature(e)}proxy(e){ox.forEach(n=>{const r=e[n].bind(e);e[n]=(...i)=>(r(...i),this.getLayers().map(o=>{o[n](...i)}),n==="style"&&this.getTiles().forEach(o=>o.styleUpdate(...i)),e)})}}class FM extends pt.EventEmitter{get lngLat(){var e;return(e=this.popupOption.lngLat)!==null&&e!==void 0?e:{lng:0,lat:0}}set lngLat(e){this.popupOption.lngLat=e}constructor(e){super(),d(this,"popupOption",void 0),d(this,"mapsService",void 0),d(this,"sceneService",void 0),d(this,"layerService",void 0),d(this,"scene",void 0),d(this,"closeButton",void 0),d(this,"container",void 0),d(this,"content",void 0),d(this,"contentTitle",void 0),d(this,"contentPanel",void 0),d(this,"tip",void 0),d(this,"isShow",!0),d(this,"rafId",null),d(this,"onMouseMove",r=>{var i;const o=this.mapsService.getMapContainer(),{left:s=0,top:a=0}=(i=o==null?void 0:o.getBoundingClientRect())!==null&&i!==void 0?i:{};this.setPopupPosition(r.clientX-s,r.clientY-a)}),d(this,"updateLngLatPosition",()=>{if(!this.mapsService||this.popupOption.followCursor)return;const{lng:r,lat:i}=this.lngLat,{x:o,y:s}=this.mapsService.lngLatToContainer([r,i]);this.setPopupPosition(o,s)}),d(this,"updateLngLatPositionWhenZoom",r=>{if(!this.mapsService||this.popupOption.followCursor)return;const i=r.map,o=i.getSize();o.x=o.x/2,o.y=o.y/2;const s=r.center,a=r.zoom,u=i.DE(this.lngLat,a,s);u.x=Math.round(u.x),u.y=Math.round(u.y),this.setPopupPosition(u.x,u.y,!0)}),d(this,"onKeyDown",r=>{r.keyCode===27&&this.remove()}),d(this,"onCloseButtonClick",r=>{r.stopPropagation&&r.stopPropagation(),this.hide()}),d(this,"updatePosition",(r,i=!0)=>{const o=!!this.lngLat,{className:s,style:a,maxWidth:u,anchor:l,stopPropagation:c}=this.popupOption;if(!this.mapsService||!o||!this.content)return;const h=this.mapsService.getMarkerContainer();if(!this.container&&h&&(this.container=We("div",`l7-popup ${s??""} ${this.isShow?"":"l7-popup-hide"}`,h),a&&this.container.setAttribute("style",a),this.tip=We("div","l7-popup-tip",this.container),this.container.appendChild(this.content),c&&["mousemove","mousedown","mouseup","click","dblclick"].forEach(f=>{this.container.addEventListener(f,p=>{p.stopPropagation()})}),this.container.style.whiteSpace="nowrap"),i?this.updateLngLatPositionWhenZoom(r):this.updateLngLatPosition(),nv(this.container,`${Ea[l]}`),x0(this.container,l,"popup"),u){const{width:f}=this.container.getBoundingClientRect();f>parseFloat(u)&&(this.container.style.width=u)}else this.container.style.removeProperty("width")}),d(this,"updateWhenZoom",r=>{this.updatePosition(r,!0)}),d(this,"update",()=>{this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null,this.updatePosition(null,!1)}))}),this.popupOption=D(D({},this.getDefault(e??{})),e);const{lngLat:n}=this.popupOption;n&&(this.lngLat=n)}getIsShow(){return this.isShow}addTo(e){this.mapsService=e.mapService,this.sceneService=e.sceneService,this.layerService=e.layerService,this.mapsService.on("camerachange",this.update),this.mapsService.on("viewchange",this.update),this.scene=e,this.update(),this.updateCloseOnClick(),this.updateCloseOnEsc(),this.updateFollowCursor();const{html:n,text:r,title:i}=this.popupOption;return n?this.setHTML(n):r&&this.setText(r),i&&this.setTitle(i),this.emit("open"),this}remove(){if(this!==null&&this!==void 0&&this.isOpen())return this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.content&&sn(this.content),this.container&&(sn(this.container),delete this.container),this.mapsService&&(this.mapsService.off("camerachange",this.update),this.mapsService.off("viewchange",this.update),this.updateCloseOnClick(!0),this.updateCloseOnEsc(!0),this.updateFollowCursor(!0),delete this.mapsService),this.emit("close"),this}getOptions(){return this.popupOption}setOptions(e){this.show();const{className:n}=this.popupOption;if(this.popupOption=D(D({},this.popupOption),e),this.checkUpdateOption(e,["html","text","title","closeButton","closeButtonOffsets","maxWidth","anchor","stopPropagation","lngLat","offsets"])&&(this.container&&(sn(this.container),this.container=void 0),this.popupOption.html?this.setHTML(this.popupOption.html):this.popupOption.text&&this.setText(this.popupOption.text),this.popupOption.title&&this.setTitle(this.popupOption.title)),this.checkUpdateOption(e,["closeOnEsc"])&&this.updateCloseOnEsc(),this.checkUpdateOption(e,["closeOnClick"])&&this.updateCloseOnClick(),this.checkUpdateOption(e,["followCursor"])&&this.updateFollowCursor(),this.checkUpdateOption(e,["html"])&&e.html?this.setHTML(e.html):this.checkUpdateOption(e,["text"])&&e.text&&this.setText(e.text),this.checkUpdateOption(e,["className"])){var r;n&&this.container.classList.remove(n??""),this.container.classList.add((r=e.className)!==null&&r!==void 0?r:"")}if(this.checkUpdateOption(e,["style"])){var i;yd(this.container,(i=e.style)!==null&&i!==void 0?i:"")}return this.checkUpdateOption(e,["lngLat"])&&e.lngLat&&this.setLnglat(e.lngLat),this}open(){return this.addTo(this.scene),this}close(){return this.remove(),this}show(){if(!this.isShow)return this.container&&Vo(this.container,"l7-popup-hide"),this.isShow=!0,this.emit("show"),this}hide(){if(this.isShow)return this.container&&Vn(this.container,"l7-popup-hide"),this.isShow=!1,this.emit("hide"),this}setHTML(e){return this.popupOption.html=e,this.setDOMContent(e)}setText(e){return this.popupOption.text=e,this.setDOMContent(window.document.createTextNode(e))}setTitle(e){this.show(),this.popupOption.title=e,e?(this.contentTitle||(this.contentTitle=We("div","l7-popup-content__title"),this.content.firstChild?this.content.insertBefore(this.contentTitle,this.content.firstChild):this.content.append(this.contentTitle)),_u(this.contentTitle),gl(this.contentTitle,e)):this.contentTitle&&(sn(this.contentTitle),this.contentTitle=void 0)}panToPopup(){const{lng:e,lat:n}=this.lngLat;return this.popupOption.autoPan&&this.mapsService.panTo([e,n]),this}setLngLat(e){return this.setLnglat(e)}setLnglat(e){return this.show(),this.lngLat=e,Array.isArray(e)&&(this.lngLat={lng:e[0],lat:e[1]}),this.mapsService&&(this.mapsService.off("camerachange",this.update),this.mapsService.off("viewchange",this.update),this.mapsService.on("camerachange",this.update),this.mapsService.on("viewchange",this.update)),this.update(),this.popupOption.autoPan&&setTimeout(()=>{this.panToPopup()},0),this}getLnglat(){return this.lngLat}setMaxWidth(e){return this.popupOption.maxWidth=e,this.update(),this}isOpen(){return!!this.mapsService}getDefault(e){return{closeButton:!0,closeOnClick:!1,maxWidth:"240px",offsets:[0,0],anchor:hd.BOTTOM,stopPropagation:!0,autoPan:!1,autoClose:!0,closeOnEsc:!1,followCursor:!1}}setDOMContent(e){return this.show(),this.createContent(),gl(this.contentPanel,e),this.update(),this}updateCloseOnClick(e){const n=this.mapsService;n&&(n==null||n.off("click",this.onCloseButtonClick),this.popupOption.closeOnClick&&!e&&requestAnimationFrame(()=>{n==null||n.on("click",this.onCloseButtonClick)}))}updateCloseOnEsc(e){window.removeEventListener("keydown",this.onKeyDown),this.popupOption.closeOnEsc&&!e&&window.addEventListener("keydown",this.onKeyDown)}updateFollowCursor(e){var n;const r=(n=this.mapsService)===null||n===void 0?void 0:n.getContainer();r&&(r==null||r.removeEventListener("mousemove",this.onMouseMove),this.popupOption.followCursor&&!e&&(r==null||r.addEventListener("mousemove",this.onMouseMove)))}createContent(){if(this.content&&sn(this.content),this.contentTitle=void 0,this.content=We("div","l7-popup-content",this.container),this.setTitle(this.popupOption.title),this.popupOption.closeButton){const e=FA("l7-icon-guanbi");Vn(e,"l7-popup-close-button"),this.content.appendChild(e),this.popupOption.closeButtonOffsets&&(e.style.right=this.popupOption.closeButtonOffsets[0]+"px",e.style.top=this.popupOption.closeButtonOffsets[1]+"px"),e.setAttribute("aria-label","Close popup"),e.addEventListener("click",()=>{this.hide()}),e.addEventListener("pointerup",n=>{n.stopPropagation()}),e.addEventListener("pointerdown",n=>{n.stopPropagation()}),this.closeButton=e}else this.closeButton=void 0;this.contentPanel=We("div","l7-popup-content__panel",this.content)}setPopupPosition(e,n,r=!1){if(this.container){const{offsets:i}=this.popupOption;this.container.style.left=e+i[0]+"px",this.container.style.top=n-i[1]+"px",r?this.container.style.transition="left 0.25s cubic-bezier(0,0,0.25,1), top 0.25s cubic-bezier(0,0,0.25,1)":this.container.style.transition=""}}checkUpdateOption(e,n){return n.some(r=>r in e)}}function ux(t,e){var n=typeof my<"u"&&!!my&&typeof my.showToast=="function"&&my.isFRM!==!0,r=typeof wx<"u"&&wx!==null&&(typeof wx.request<"u"||typeof wx.miniProgram<"u");if(!(n||r)&&(e||(e=document),!!e)){var i=e.head||e.getElementsByTagName("head")[0];if(!i){i=e.createElement("head");var o=e.body||e.getElementsByTagName("body")[0];o?o.parentNode.insertBefore(i,o):e.documentElement.appendChild(i)}var s=e.createElement("style");return s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(e.createTextNode(t)),i.appendChild(s),s}}ux(`.l7-marker-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.l7-marker {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 5;
  cursor: pointer;
}
.l7-marker-cluster {
  width: 40px;
  height: 40px;
  background-color: rgba(181, 226, 140, 0.6);
  background-clip: padding-box;
  border-radius: 20px;
}
.l7-marker-cluster div {
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
  font:
    12px 'Helvetica Neue',
    Arial,
    Helvetica,
    sans-serif;
  text-align: center;
  background-color: rgba(110, 204, 57, 0.6);
  border-radius: 15px;
}
.l7-marker-cluster span {
  line-height: 30px;
}
.l7-touch .l7-control-attribution,
.l7-touch .l7-control-layers,
.l7-touch .l7-bar {
  box-shadow: none;
}
.l7-touch .l7-control-layers,
.l7-touch .l7-bar {
  background-clip: padding-box;
  border: 2px solid rgba(0, 0, 0, 0.2);
}
.mapboxgl-ctrl-logo,
.amap-logo {
  display: none !important;
}
.l7-select-box {
  border: 3px dashed gray;
  border-radius: 2px;
  position: absolute;
  z-index: 999;
  box-sizing: border-box;
}
.l7-control-container {
  font:
    12px/1.5 'Helvetica Neue',
    Arial,
    Helvetica,
    sans-serif;
}
.l7-control-container .l7-control {
  position: relative;
  z-index: 999;
  float: left;
  clear: both;
  color: #595959;
  font-size: 12px;
  pointer-events: visiblepainted;
  /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}
.l7-control-container .l7-control.l7-control--hide {
  display: none;
}
.l7-control-container .l7-top {
  top: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-top .l7-control:not(.l7-control--hide) {
  margin-top: 8px;
}
.l7-control-container .l7-right {
  right: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-right .l7-control:not(.l7-control--hide) {
  margin-right: 8px;
}
.l7-control-container .l7-bottom {
  bottom: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-bottom .l7-control:not(.l7-control--hide) {
  margin-bottom: 8px;
}
.l7-control-container .l7-left {
  left: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.l7-control-container .l7-left .l7-control:not(.l7-control--hide) {
  margin-left: 8px;
}
.l7-control-container .l7-center {
  position: absolute;
  display: flex;
  justify-content: center;
}
.l7-control-container .l7-center.l7-top,
.l7-control-container .l7-center.l7-bottom {
  width: 100%;
}
.l7-control-container .l7-center.l7-left,
.l7-control-container .l7-center.l7-right {
  height: 100%;
}
.l7-control-container .l7-center .l7-control {
  margin-right: 8px;
  margin-bottom: 8px;
}
.l7-control-container .l7-row {
  flex-direction: row;
}
.l7-control-container .l7-row.l7-top {
  align-items: flex-start;
}
.l7-control-container .l7-row.l7-bottom {
  align-items: flex-end;
}
.l7-control-container .l7-column {
  flex-direction: column;
}
.l7-control-container .l7-column.l7-left {
  align-items: flex-start;
}
.l7-control-container .l7-column.l7-right {
  align-items: flex-end;
}
.l7-button-control {
  min-width: 28px;
  height: 28px;
  background-color: #fff;
  border-width: 0;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  line-height: 16px;
}
.l7-button-control .l7-iconfont {
  fill: #595959;
  color: #595959;
  width: 16px;
  height: 16px;
}
.l7-button-control.l7-button-control--row {
  padding: 0 16px 0 13px;
}
.l7-button-control.l7-button-control--row * + .l7-button-control__text {
  margin-left: 8px;
}
.l7-button-control.l7-button-control--column {
  height: 44px;
  flex-direction: column;
}
.l7-button-control.l7-button-control--column .l7-iconfont {
  margin-top: 3px;
}
.l7-button-control.l7-button-control--column .l7-button-control__text {
  margin-top: 3px;
  font-size: 10px;
  -webkit-transform: scale(0.83333);
          transform: scale(0.83333);
}
.l7-button-control:not(:disabled):hover {
  background-color: #f3f3f3;
}
.l7-button-control:not(:disabled):active {
  background-color: #f3f3f3;
}
.l7-button-control:disabled {
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: not-allowed;
}
.l7-button-control:disabled .l7-iconfont {
  fill: #bdbdbd;
  color: #bdbdbd;
}
.l7-button-control:disabled:hover {
  background-color: #fafafa;
}
.l7-button-control:disabled:active {
  background-color: #fafafa;
}
.l7-popper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  color: #595959;
}
.l7-popper.l7-popper-hide {
  display: none;
}
.l7-popper .l7-popper-content {
  min-height: 28px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
.l7-popper .l7-popper-arrow {
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
.l7-popper.l7-popper-left {
  flex-direction: row;
}
.l7-popper.l7-popper-left .l7-popper-arrow {
  border-left-color: #fff;
  margin: 10px 0;
}
.l7-popper.l7-popper-right {
  flex-direction: row-reverse;
}
.l7-popper.l7-popper-right .l7-popper-arrow {
  border-right-color: #fff;
  margin: 10px 0;
}
.l7-popper.l7-popper-top {
  flex-direction: column;
}
.l7-popper.l7-popper-top .l7-popper-arrow {
  border-top-color: #fff;
  margin: 0 10px;
}
.l7-popper.l7-popper-bottom {
  flex-direction: column-reverse;
}
.l7-popper.l7-popper-bottom .l7-popper-arrow {
  border-bottom-color: #fff;
  margin: 0 10px;
}
.l7-popper.l7-popper-start {
  align-items: flex-start;
}
.l7-popper.l7-popper-end {
  align-items: flex-end;
}
.l7-select-control--normal {
  padding: 4px 0;
}
.l7-select-control--normal .l7-select-control-item {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 16px;
  font-size: 12px;
  line-height: 24px;
}
.l7-select-control--normal .l7-select-control-item > * + * {
  margin-left: 6px;
}
.l7-select-control--normal .l7-select-control-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}
.l7-select-control--normal .l7-select-control-item:hover {
  background-color: #f3f3f3;
}
.l7-select-control--image {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: content-box;
  max-width: 460px;
  max-height: 400px;
  margin: 12px 0 0 12px;
  overflow: hidden auto;
}
.l7-select-control--image .l7-select-control-item {
  position: relative;
  display: flex;
  flex: 0 0 calc((100% - (12px + 9px) * 2) / 3);
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  margin-right: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  font-size: 12px;
  border: 1px solid #fff;
  border-radius: 2px;
}
.l7-select-control--image .l7-select-control-item img {
  width: 100%;
  height: 80px;
}
.l7-select-control--image .l7-select-control-item input[type='checkbox'] {
  position: absolute;
  top: 0;
  right: 0;
}
.l7-select-control--image .l7-select-control-item .l7-select-control-item-row {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 26px;
}
.l7-select-control--image .l7-select-control-item .l7-select-control-item-row > * + * {
  margin-left: 8px;
}
.l7-select-control--image .l7-select-control-item.l7-select-control-item-active {
  border-color: #0370fe;
}
.l7-select-control-item {
  cursor: pointer;
}
.l7-select-control-item input[type='checkbox'] {
  margin: 0;
  cursor: pointer;
}
.l7-select-control--multiple .l7-select-control-item:hover {
  background-color: transparent;
}
.l7-control-logo {
  width: 89px;
  height: 16px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.l7-control-logo img {
  height: 100%;
  width: 100%;
}
.l7-control-logo .l7-control-logo-link {
  display: block;
  cursor: pointer;
}
.l7-control-logo .l7-control-logo-link img {
  cursor: pointer;
}
.l7-control-mouse-location {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  padding: 2px 4px;
  min-width: 130px;
}
.l7-control-zoom {
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
.l7-control-zoom .l7-button-control {
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  box-shadow: 0 0 0;
}
.l7-control-zoom .l7-button-control .l7-iconfont {
  width: 14px;
  height: 14px;
}
.l7-control-zoom .l7-button-control:last-child {
  border-bottom: 0;
}
.l7-control-zoom .l7-control-zoom__number {
  color: #595959;
  padding: 0;
}
.l7-control-zoom .l7-control-zoom__number:hover {
  background-color: #fff;
}
.l7-control-scale {
  display: flex;
  flex-direction: column;
}
.l7-control-scale .l7-control-scale-line {
  box-sizing: border-box;
  padding: 2px 5px 1px;
  overflow: hidden;
  color: #595959;
  font-size: 10px;
  line-height: 1.1;
  white-space: nowrap;
  background: #fff;
  border: 2px solid #000;
  border-top: 0;
  transition: width 0.1s;
}
.l7-control-scale .l7-control-scale-line + .l7-control-scale .l7-control-scale-line {
  margin-top: -2px;
  border-top: 2px solid #777;
  border-bottom: none;
}
.l7-right .l7-control-scale {
  display: flex;
  align-items: flex-end;
}
.l7-right .l7-control-scale .l7-control-scale-line {
  text-align: right;
}
.l7-popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  will-change: transform;
  pointer-events: none;
}
.l7-popup.l7-popup-hide {
  display: none;
}
.l7-popup .l7-popup-content {
  position: relative;
  padding: 16px;
  font-size: 14px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.l7-popup .l7-popup-content .l7-popup-content__title {
  margin-bottom: 8px;
  font-weight: bold;
}
.l7-popup .l7-popup-content .l7-popup-close-button,
.l7-popup .l7-popup-content .l7-popup-content__title,
.l7-popup .l7-popup-content .l7-popup-content__panel {
  white-space: normal;
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  pointer-events: initial;
}
.l7-popup .l7-popup-content .l7-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 0 3px 0 0;
  cursor: pointer;
}
.l7-popup .l7-popup-tip {
  position: relative;
  z-index: 1;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}
.l7-popup.l7-popup-anchor-bottom,
.l7-popup.l7-popup-anchor-bottom-left,
.l7-popup.l7-popup-anchor-bottom-right {
  flex-direction: column-reverse;
}
.l7-popup.l7-popup-anchor-bottom .l7-popup-tip,
.l7-popup.l7-popup-anchor-bottom-left .l7-popup-tip,
.l7-popup.l7-popup-anchor-bottom-right .l7-popup-tip {
  bottom: 1px;
}
.l7-popup.l7-popup-anchor-top,
.l7-popup.l7-popup-anchor-top-left,
.l7-popup.l7-popup-anchor-top-right {
  flex-direction: column;
}
.l7-popup.l7-popup-anchor-top .l7-popup-tip,
.l7-popup.l7-popup-anchor-top-left .l7-popup-tip,
.l7-popup.l7-popup-anchor-top-right .l7-popup-tip {
  top: 1px;
}
.l7-popup.l7-popup-anchor-left {
  flex-direction: row;
}
.l7-popup.l7-popup-anchor-right {
  flex-direction: row-reverse;
}
.l7-popup-anchor-top .l7-popup-tip {
  position: relative;
  align-self: center;
  border-top: none;
  border-bottom-color: #fff;
}
.l7-popup-anchor-top-left .l7-popup-tip {
  align-self: flex-start;
  border-top: none;
  border-bottom-color: #fff;
  border-left: none;
}
.l7-popup-anchor-top-right .l7-popup-tip {
  align-self: flex-end;
  border-top: none;
  border-right: none;
  border-bottom-color: #fff;
}
.l7-popup-anchor-bottom .l7-popup-tip {
  align-self: center;
  border-top-color: #fff;
  border-bottom: none;
}
.l7-popup-anchor-bottom-left .l7-popup-tip {
  align-self: flex-start;
  border-top-color: #fff;
  border-bottom: none;
  border-left: none;
}
.l7-popup-anchor-bottom-right .l7-popup-tip {
  align-self: flex-end;
  border-top-color: #fff;
  border-right: none;
  border-bottom: none;
}
.l7-popup-anchor-left .l7-popup-tip {
  align-self: center;
  border-right-color: #fff;
  border-left: none;
}
.l7-popup-anchor-right .l7-popup-tip {
  right: 1px;
  align-self: center;
  border-right: none;
  border-left-color: #fff;
}
.l7-popup-anchor-top-left .l7-popup-content {
  border-top-left-radius: 0;
}
.l7-popup-anchor-top-right .l7-popup-content {
  border-top-right-radius: 0;
}
.l7-popup-anchor-bottom-left .l7-popup-content {
  border-bottom-left-radius: 0;
}
.l7-popup-anchor-bottom-right .l7-popup-content {
  border-bottom-right-radius: 0;
}
.l7-popup-track-pointer {
  display: none;
}
.l7-popup-track-pointer * {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
}
.l7-map:hover .l7-popup-track-pointer {
  display: flex;
}
.l7-map:active .l7-popup-track-pointer {
  display: none;
}
.l7-layer-popup__row {
  font-size: 12px;
}
.l7-layer-popup__row + .l7-layer-popup__row {
  margin-top: 4px;
}
.l7-control-swipe {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 6;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  touch-action: none;
}
.l7-control-swipe_hide {
  display: none;
}
.l7-control-swipe::before {
  position: absolute;
  top: -5000px;
  bottom: -5000px;
  left: 50%;
  z-index: -1;
  width: 4px;
  background: #fff;
  -webkit-transform: translate(-2px, 0);
          transform: translate(-2px, 0);
  content: '';
}
.l7-control-swipe.horizontal::before {
  inset: 50% -5000px auto;
  width: auto;
  height: 4px;
}
.l7-control-swipe__button {
  display: block;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  color: #595959;
  font-weight: bold;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  border: none;
  border-radius: 2px;
  outline: none;
}
.l7-control-swipe,
.l7-control-swipe__button {
  cursor: ew-resize;
}
.l7-control-swipe.horizontal,
.l7-control-swipe.horizontal button {
  cursor: ns-resize;
}
.l7-control-swipe::after,
.l7-control-swipe__button::before,
.l7-control-swipe__button::after {
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 50%;
  width: 2px;
  background: currentcolor;
  -webkit-transform: translate(-1px, 0);
          transform: translate(-1px, 0);
  content: '';
}
.l7-control-swipe__button::after {
  -webkit-transform: translateX(4px);
          transform: translateX(4px);
}
.l7-control-swipe__button::before {
  -webkit-transform: translateX(-6px);
          transform: translateX(-6px);
}
`);class lx{constructor(e){d(this,"configService",void 0),d(this,"config",void 0),this.config=e}setContainer(e,n){this.configService=e.globalConfigService,e.mapConfig=D(D({},this.config),{},{id:n}),e.mapService=new(this.getServiceConstructor())(e)}getServiceConstructor(){throw new Error("Method not implemented.")}}function Kp(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function cx(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Jd(r.key),r)}}function qp(t,e,n){return e&&cx(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ci(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hx(t,e){if(e&&(br(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ci(t)}function Ya(t){return Ya=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ya(t)}function Ga(t,e){return Ga=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Ga(t,e)}function fx(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ga(t,e)}function dx(t){if(Array.isArray(t))return t}function px(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,a=[],u=!0,l=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(c){l=!0,i=c}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return a}}function ff(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function _x(t,e){if(t){if(typeof t=="string")return ff(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ff(t,e):void 0}}function vx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(t,e){return dx(t)||px(t,e)||_x(t,e)||vx()}function vi(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Oo(t,e){var n=Tn([],e,t);return m1(n,n,1/n[3]),n}function $n(t,e){if(!t)throw new Error(e||"viewport-mercator-project: assertion failed.")}var Dt=Math.PI,Qp=Dt/4,Mn=Dt/180,df=180/Dt,Bu=512,pf=4003e4,mx=1.5;function Jp(t){return Math.pow(2,t)}function Js(t,e){var n=xt(t,2),r=n[0],i=n[1];$n(Number.isFinite(r)&&Number.isFinite(e)),$n(Number.isFinite(i)&&i>=-90&&i<=90,"invalid latitude"),e*=Bu;var o=r*Mn,s=i*Mn,a=e*(o+Dt)/(2*Dt),u=e*(Dt-Math.log(Math.tan(Qp+s*.5)))/(2*Dt);return[a,u]}function _f(t,e){var n=xt(t,2),r=n[0],i=n[1];e*=Bu;var o=r/e*(2*Dt)-Dt,s=2*(Math.atan(Math.exp(Dt-i/e*(2*Dt)))-Qp);return[o*df,s*df]}function gx(t){var e=t.latitude,n=t.longitude,r=t.zoom,i=t.scale,o=t.highPrecision,s=o===void 0?!1:o;i=i!==void 0?i:Jp(r),$n(Number.isFinite(e)&&Number.isFinite(n)&&Number.isFinite(i));var a={},u=Bu*i,l=Math.cos(e*Mn),c=u/360,h=c/l,f=u/pf/l;if(a.pixelsPerMeter=[f,-f,f],a.metersPerPixel=[1/f,-1/f,1/f],a.pixelsPerDegree=[c,-h,f],a.degreesPerPixel=[1/c,-1/h,1/f],s){var p=Mn*Math.tan(e*Mn)/l,_=c*p/2,v=u/pf*p,m=v/h*f;a.pixelsPerDegree2=[0,-_,v],a.pixelsPerMeter2=[m,0,m]}return a}function Ex(t){var e=t.height,n=t.pitch,r=t.bearing,i=t.altitude,o=t.center,s=o===void 0?null:o,a=vi();return Ht(a,a,[0,0,-i]),Xt(a,a,[1,1,1/e]),vs(a,a,-n*Mn),Su(a,a,r*Mn),Xt(a,a,[1,-1,1]),s&&Ht(a,a,d1([],s)),a}function yx(t){var e=t.width,n=t.height,r=t.altitude,i=r===void 0?mx:r,o=t.pitch,s=o===void 0?0:o,a=t.nearZMultiplier,u=a===void 0?1:a,l=t.farZMultiplier,c=l===void 0?1:l,h=s*Mn,f=Math.atan(.5/i),p=Math.sin(f)*i/Math.sin(Math.PI/2-h-f),_=Math.cos(Math.PI/2-h)*p+i;return{fov:2*Math.atan(n/2/i),aspect:e/n,focalDistance:i,near:u,far:_*c}}function Tx(t){var e=t.width,n=t.height,r=t.pitch,i=t.altitude,o=t.nearZMultiplier,s=t.farZMultiplier,a=yx({width:e,height:n,altitude:i,pitch:r,nearZMultiplier:o,farZMultiplier:s}),u=a.fov,l=a.aspect,c=a.near,h=a.far,f=np([],u,l,c,h);return f}function Ax(t,e){var n=xt(t,3),r=n[0],i=n[1],o=n[2],s=o===void 0?0:o;return $n(Number.isFinite(r)&&Number.isFinite(i)&&Number.isFinite(s)),Oo(e,[r,i,s,1])}function e_(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=xt(t,3),i=r[0],o=r[1],s=r[2];if($n(Number.isFinite(i)&&Number.isFinite(o),"invalid pixel coordinate"),Number.isFinite(s)){var a=Oo(e,[i,o,s,1]);return a}var u=Oo(e,[i,o,0,1]),l=Oo(e,[i,o,1,1]),c=u[2],h=l[2],f=c===h?0:((n||0)-c)/(h-c);return y1([],u,l,f)}var vf=vi(),Sx=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width,r=e.height,i=e.viewMatrix,o=i===void 0?vf:i,s=e.projectionMatrix,a=s===void 0?vf:s;Kp(this,t),this.width=n||1,this.height=r||1,this.scale=1,this.pixelsPerMeter=1,this.viewMatrix=o,this.projectionMatrix=a;var u=vi();bn(u,u,this.projectionMatrix),bn(u,u,this.viewMatrix),this.viewProjectionMatrix=u;var l=vi();Xt(l,l,[this.width/2,-this.height/2,1]),Ht(l,l,[1,-1,0]),bn(l,l,this.viewProjectionMatrix);var c=Ri(vi(),l);if(!c)throw new Error("Pixel project matrix not invertible");this.pixelProjectionMatrix=l,this.pixelUnprojectionMatrix=c,this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}return qp(t,[{key:"equals",value:function(n){return n instanceof t?n.width===this.width&&n.height===this.height&&xc(n.projectionMatrix,this.projectionMatrix)&&xc(n.viewMatrix,this.viewMatrix):!1}},{key:"project",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.topLeft,o=i===void 0?!0:i,s=this.projectPosition(n),a=Ax(s,this.pixelProjectionMatrix),u=xt(a,2),l=u[0],c=u[1],h=o?c:this.height-c;return n.length===2?[l,h]:[l,h,a[2]]}},{key:"unproject",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.topLeft,o=i===void 0?!0:i,s=r.targetZ,a=xt(n,3),u=a[0],l=a[1],c=a[2],h=o?l:this.height-l,f=s&&s*this.pixelsPerMeter,p=e_([u,h,c],this.pixelUnprojectionMatrix,f),_=this.unprojectPosition(p),v=xt(_,3),m=v[0],y=v[1],T=v[2];return Number.isFinite(c)?[m,y,T]:Number.isFinite(s)?[m,y,s]:[m,y]}},{key:"projectPosition",value:function(n){var r=this.projectFlat(n),i=xt(r,2),o=i[0],s=i[1],a=(n[2]||0)*this.pixelsPerMeter;return[o,s,a]}},{key:"unprojectPosition",value:function(n){var r=this.unprojectFlat(n),i=xt(r,2),o=i[0],s=i[1],a=(n[2]||0)/this.pixelsPerMeter;return[o,s,a]}},{key:"projectFlat",value:function(n){return arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.scale,n}},{key:"unprojectFlat",value:function(n){return arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.scale,n}}]),t}();function Rx(t){var e=t.width,n=t.height,r=t.bounds,i=t.minExtent,o=i===void 0?0:i,s=t.maxZoom,a=s===void 0?24:s,u=t.padding,l=u===void 0?0:u,c=t.offset,h=c===void 0?[0,0]:c,f=xt(r,2),p=xt(f[0],2),_=p[0],v=p[1],m=xt(f[1],2),y=m[0],T=m[1];if(Number.isFinite(l)){var S=l;l={top:S,bottom:S,left:S,right:S}}else $n(Number.isFinite(l.top)&&Number.isFinite(l.bottom)&&Number.isFinite(l.left)&&Number.isFinite(l.right));var x=new Ka({width:e,height:n,longitude:0,latitude:0,zoom:0}),C=x.project([_,T]),M=x.project([y,v]),P=[Math.max(Math.abs(M[0]-C[0]),o),Math.max(Math.abs(M[1]-C[1]),o)],F=[e-l.left-l.right-Math.abs(h[0])*2,n-l.top-l.bottom-Math.abs(h[1])*2];$n(F[0]>0&&F[1]>0);var V=F[0]/P[0],B=F[1]/P[1],O=(l.right-l.left)/2/V,N=(l.bottom-l.top)/2/B,U=[(M[0]+C[0])/2+O,(M[1]+C[1])/2+N],z=x.unproject(U),W=x.zoom+Math.log2(Math.abs(Math.min(V,B)));return{longitude:z[0],latitude:z[1],zoom:Math.min(W,a)}}var Ka=function(t){fx(e,t);function e(){var n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.width,o=r.height,s=r.latitude,a=s===void 0?0:s,u=r.longitude,l=u===void 0?0:u,c=r.zoom,h=c===void 0?0:c,f=r.pitch,p=f===void 0?0:f,_=r.bearing,v=_===void 0?0:_,m=r.altitude,y=m===void 0?1.5:m,T=r.nearZMultiplier,S=r.farZMultiplier;Kp(this,e),i=i||1,o=o||1;var x=Jp(h);y=Math.max(.75,y);var C=Js([l,a],x);C[2]=0;var M=Tx({width:i,height:o,pitch:p,altitude:y,nearZMultiplier:T||1/o,farZMultiplier:S||1.01}),P=Ex({height:o,center:C,pitch:p,bearing:v,altitude:y});return n=hx(this,Ya(e).call(this,{width:i,height:o,viewMatrix:P,projectionMatrix:M})),n.latitude=a,n.longitude=l,n.zoom=h,n.pitch=p,n.bearing=v,n.altitude=y,n.scale=x,n.center=C,n.pixelsPerMeter=gx(ci(ci(n))).pixelsPerMeter[2],Object.freeze(ci(ci(n))),n}return qp(e,[{key:"projectFlat",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.scale;return Js(r,i)}},{key:"unprojectFlat",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.scale;return _f(r,i)}},{key:"getMapCenterByLngLatPosition",value:function(r){var i=r.lngLat,o=r.pos,s=e_(o,this.pixelUnprojectionMatrix),a=Js(i,this.scale),u=An([],a,E1([],s)),l=An([],this.center,u);return _f(l,this.scale)}},{key:"getLocationAtPoint",value:function(r){var i=r.lngLat,o=r.pos;return this.getMapCenterByLngLatPosition({lngLat:i,pos:o})}},{key:"fitBounds",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.width,s=this.height,a=Rx(Object.assign({width:o,height:s,bounds:r},i)),u=a.longitude,l=a.latitude,c=a.zoom;return new e({width:o,height:s,longitude:u,latitude:l,zoom:c})}}]),e}(Sx);class xx{constructor(){d(this,"viewport",new Ka)}syncWithMapCamera(e){const{center:n,zoom:r,pitch:i,bearing:o,viewportHeight:s,viewportWidth:a}=e,u={width:this.viewport.width,height:this.viewport.height,longitude:this.viewport.center[0],latitude:this.viewport.center[1],zoom:this.viewport.zoom,pitch:this.viewport.pitch,bearing:this.viewport.bearing};this.viewport=new Ka(D(D({},u),{},{width:a,height:s,longitude:n&&n[0],latitude:n&&n[1],zoom:r,pitch:i,bearing:o}))}getZoom(){return this.viewport.zoom}getZoomScale(){return Math.pow(2,this.getZoom())}getCenter(){return[this.viewport.longitude,this.viewport.latitude]}getProjectionMatrix(){return this.viewport.projectionMatrix}getModelMatrix(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}getViewMatrix(){return this.viewport.viewMatrix}getViewMatrixUncentered(){return this.viewport.viewMatrixUncentered}getViewProjectionMatrix(){return this.viewport.viewProjectionMatrix}getViewProjectionMatrixUncentered(){return this.viewport.viewProjectionMatrix}getFocalDistance(){return 1}projectFlat(e,n){return this.viewport.projectFlat(e,n)}}let Cx=function(t){return t.GAODE="GAODE",t.MAPBOX="MAPBOX",t.DEFAULT="DEFAUlTMAP",t.SIMPLE="SIMPLE",t.GLOBEL="GLOBEL",t}({});var bx=t_;function t_(t,e,n,r){this.cx=3*t,this.bx=3*(n-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(r-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=e,this.p2x=n,this.p2y=r}t_.prototype={sampleCurveX:function(t){return((this.ax*t+this.bx)*t+this.cx)*t},sampleCurveY:function(t){return((this.ay*t+this.by)*t+this.cy)*t},sampleCurveDerivativeX:function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},solveCurveX:function(t,e){if(e===void 0&&(e=1e-6),t<0)return 0;if(t>1)return 1;for(var n=t,r=0;r<8;r++){var i=this.sampleCurveX(n)-t;if(Math.abs(i)<e)return n;var o=this.sampleCurveDerivativeX(n);if(Math.abs(o)<1e-6)break;n=n-i/o}var s=0,a=1;for(n=t,r=0;r<20&&(i=this.sampleCurveX(n),!(Math.abs(i-t)<e));r++)t>i?s=n:a=n,n=(a-s)*.5+s;return n},solve:function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}};const Ix=Yt(bx),Ct={number:function(e,n,r){return e+r*(n-e)}};function Wt(t,e,n){return Math.min(n,Math.max(e,t))}function dr(t,e,n){const r=n-e,i=((t-e)%r+r)%r+e;return i===e?n:i}let Mx=1;function Ox(){return Mx++}function Be(t,...e){for(const n of e)for(const r in n)t[r]=n[r];return t}function Px(t,e){const n={};for(let r=0;r<e.length;r++){const i=e[r];i in t&&(n[i]=t[i])}return n}function Nu(t,e,n,r){const i=new Ix(t,e,n,r);return o=>i.solve(o)}const qa=Nu(.25,.1,.25,1),mf={};function Fx(t){mf[t]||(typeof console<"u"&&console.warn(t),mf[t]=!0)}function gf(t){return t*Math.PI/180}function Ef(t,e,n){n[t]&&n[t].indexOf(e)!==-1||(n[t]=n[t]||[],n[t].push(e))}function ea(t,e,n){if(n&&n[t]){const r=n[t].indexOf(e);r!==-1&&n[t].splice(r,1)}}class le{constructor(e,n={}){d(this,"type",void 0),Be(this,n),this.type=e}}class Bx extends le{constructor(e,n={}){super("error",n),d(this,"error",void 0),this.error=e}}class Nx{constructor(){d(this,"_listeners",void 0),d(this,"_oneTimeListeners",void 0),d(this,"_eventedParent",void 0),d(this,"_eventedParentData",void 0)}on(e,n){return this._listeners=this._listeners||{},Ef(e,n,this._listeners),this}off(e,n){return ea(e,n,this._listeners),ea(e,n,this._oneTimeListeners),this}once(e,n){return n?(this._oneTimeListeners=this._oneTimeListeners||{},Ef(e,n,this._oneTimeListeners),this):new Promise(r=>this.once(e,r))}fire(e,n){typeof e=="string"&&(e=new le(e,n||{}));const r=e.type;if(this.listens(r)){e.target=this;const i=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];for(const a of i)a.call(this,e);const o=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];for(const a of o)ea(r,a,this._oneTimeListeners),a.call(this,e);const s=this._eventedParent;s&&(Be(e,typeof this._eventedParentData=="function"?this._eventedParentData():this._eventedParentData),s.fire(e))}else e instanceof Bx&&console.error(e.error);return this}emit(e,n){return this.fire(e,n)}listens(e){return this._listeners&&this._listeners[e]&&this._listeners[e].length>0||this._oneTimeListeners&&this._oneTimeListeners[e]&&this._oneTimeListeners[e].length>0||this._eventedParent&&this._eventedParent.listens(e)}setEventedParent(e,n){return e&&(this._eventedParent=e),this._eventedParentData=n,this}}var Du;class ee{static testProp(e){if(!ee.docStyle)return e[0];for(let n=0;n<e.length;n++)if(e[n]in ee.docStyle)return e[n];return e[0]}static create(e,n,r){const i=window.document.createElement(e);return n!==void 0&&(i.className=n),r&&r.appendChild(i),i}static createNS(e,n){return window.document.createElementNS(e,n)}static disableDrag(){ee.docStyle&&ee.selectProp&&(ee.userSelect=ee.docStyle[ee.selectProp],ee.docStyle[ee.selectProp]="none")}static enableDrag(){ee.docStyle&&ee.selectProp&&(ee.docStyle[ee.selectProp]=ee.userSelect)}static setTransform(e,n){e.style[ee.transformProp]=n}static addEventListener(e,n,r,i={}){"passive"in i?e.addEventListener(n,r,i):e.addEventListener(n,r,i.capture)}static removeEventListener(e,n,r,i={}){"passive"in i?e.removeEventListener(n,r,i):e.removeEventListener(n,r,i.capture)}static suppressClickInternal(e){e.preventDefault(),e.stopPropagation(),window.removeEventListener("click",ee.suppressClickInternal,!0)}static suppressClick(){window.addEventListener("click",ee.suppressClickInternal,!0),window.setTimeout(()=>{window.removeEventListener("click",ee.suppressClickInternal,!0)},0)}static getScale(e){const n=e.getBoundingClientRect();return{x:n.width/e.offsetWidth||1,y:n.height/e.offsetHeight||1,boundingClientRect:n}}static getPoint(e,n,r){const i=n.boundingClientRect;return new pe((r.clientX-i.left)/n.x-e.clientLeft,(r.clientY-i.top)/n.y-e.clientTop)}static mousePos(e,n){const r=ee.getScale(e);return ee.getPoint(e,r,n)}static touchPos(e,n){const r=[],i=ee.getScale(e);for(let o=0;o<n.length;o++)r.push(ee.getPoint(e,i,n[o]));return r}static mouseButton(e){return e.button}static remove(e){e.parentNode&&e.parentNode.removeChild(e)}}Du=ee;d(ee,"docStyle",typeof window<"u"&&window.document&&window.document.documentElement.style);d(ee,"userSelect",void 0);d(ee,"selectProp",Du.testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]));d(ee,"transformProp",Du.testProp(["transform","WebkitTransform"]));class n_{constructor(e){d(this,"size",1e4),this.size=e||1e4}setSize(e){this.size=e}getSize(){return[this.size,this.size]}mercatorXfromLng(e){return(180+e)/360*this.size}mercatorYfromLat(e){return(1-(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))/360)*this.size}lngFromMercatorX(e){return e/this.size*360-180}latFromMercatorY(e){const n=180-(1-e/this.size)*360;return 360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90}project(e){const n=this.mercatorXfromLng(e[0]),r=this.mercatorYfromLat(e[1]);return[n,r]}unproject(e){const n=this.lngFromMercatorX(e[0]),r=this.latFromMercatorY(e[1]);return[n,r]}}class on extends le{preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}constructor(e,n,r,i={}){super(e,i),d(this,"target",void 0),d(this,"originalEvent",void 0),d(this,"point",void 0),d(this,"lngLat",void 0),d(this,"_defaultPrevented",void 0);const o=ee.mousePos(n.getCanvasContainer(),r),s=n.unproject(o);if(this.point=o,this.lngLat=s,this.originalEvent=r,this._defaultPrevented=!1,this.target=n,n.version==="SIMPLE"){const a=new n_(n.mapSize),[u,l]=a.project([s.lng,s.lat]);this.lngLat={lng:u,lat:l}}}}class lo extends le{preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}constructor(e,n,r){super(e),d(this,"target",void 0),d(this,"originalEvent",void 0),d(this,"lngLat",void 0),d(this,"point",void 0),d(this,"points",void 0),d(this,"lngLats",void 0),d(this,"_defaultPrevented",void 0);const i=e==="touchend"?r.changedTouches:r.touches,o=ee.touchPos(n.getCanvasContainer(),i),s=o.map(l=>n.unproject(l)),a=o.reduce((l,c,h,f)=>l.add(c.div(f.length)),new pe(0,0)),u=n.unproject(a);this.target=n,this.points=o,this.point=a,this.lngLats=s,this.lngLat=u,this.originalEvent=r,this._defaultPrevented=!1}}class Dx extends le{preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}constructor(e,n,r){super(e),d(this,"target",void 0),d(this,"originalEvent",void 0),d(this,"_defaultPrevented",void 0),this.target=n,this._defaultPrevented=!1,this.originalEvent=r}}const r_=63710088e-1;class me{constructor(e,n){if(d(this,"lng",void 0),d(this,"lat",void 0),isNaN(e)||isNaN(n))throw new Error(`Invalid LngLat object: (${e}, ${n})`);if(this.lng=+e,this.lat=+n,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new me(dr(this.lng,-180,180),this.lat)}toArray(){return[this.lng,this.lat]}toString(){return`LngLat(${this.lng}, ${this.lat})`}distanceTo(e){const n=Math.PI/180,r=this.lat*n,i=e.lat*n,o=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos((e.lng-this.lng)*n);return r_*Math.acos(Math.min(o,1))}static convert(e){if(e instanceof me)return e;if(Array.isArray(e)&&(e.length===2||e.length===3))return new me(Number(e[0]),Number(e[1]));if(!Array.isArray(e)&&typeof e=="object"&&e!==null)return new me(Number("lng"in e?e.lng:e.lon),Number(e.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}const i_=2*Math.PI*r_;function o_(t){return i_*Math.cos(t*Math.PI/180)}function Po(t){return(180+t)/360}function Fo(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function s_(t,e){return t/o_(e)}function Lx(t){return t*360-180}function Qa(t){const e=180-t*360;return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90}function Ux(t,e){return t*o_(Qa(e))}function kx(t){return 1/Math.cos(t*Math.PI/180)}class jt{constructor(e,n,r=0){d(this,"x",void 0),d(this,"y",void 0),d(this,"z",void 0),this.x=+e,this.y=+n,this.z=+r}static fromLngLat(e,n=0){const r=me.convert(e);return new jt(Po(r.lng),Fo(r.lat),s_(n,r.lat))}toLngLat(){return new me(Lx(this.x),Qa(this.y))}toAltitude(){return Ux(this.z,this.y)}meterInMercatorCoordinateUnits(){return 1/i_*kx(Qa(this.y))}}class Bt{constructor(e,n){d(this,"_ne",void 0),d(this,"_sw",void 0),e&&(n?this.setSouthWest(e).setNorthEast(n):Array.isArray(e)&&(e.length===4?this.setSouthWest([e[0],e[1]]).setNorthEast([e[2],e[3]]):this.setSouthWest(e[0]).setNorthEast(e[1])))}setNorthEast(e){return this._ne=e instanceof me?new me(e.lng,e.lat):me.convert(e),this}setSouthWest(e){return this._sw=e instanceof me?new me(e.lng,e.lat):me.convert(e),this}extend(e){const n=this._sw,r=this._ne;let i,o;if(e instanceof me)i=e,o=e;else if(e instanceof Bt){if(i=e._sw,o=e._ne,!i||!o)return this}else{if(Array.isArray(e))if(e.length===4||e.every(Array.isArray)){const s=e;return this.extend(Bt.convert(s))}else{const s=e;return this.extend(me.convert(s))}else if(e&&("lng"in e||"lon"in e)&&"lat"in e)return this.extend(me.convert(e));return this}return!n&&!r?(this._sw=new me(i.lng,i.lat),this._ne=new me(o.lng,o.lat)):(n.lng=Math.min(i.lng,n.lng),n.lat=Math.min(i.lat,n.lat),r.lng=Math.max(o.lng,r.lng),r.lat=Math.max(o.lat,r.lat)),this}getCenter(){return new me((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new me(this.getWest(),this.getNorth())}getSouthEast(){return new me(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return[this._sw.toArray(),this._ne.toArray()]}toString(){return`LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return!(this._sw&&this._ne)}contains(e){const{lng:n,lat:r}=me.convert(e),i=this._sw.lat<=r&&r<=this._ne.lat;let o=this._sw.lng<=n&&n<=this._ne.lng;return this._sw.lng>this._ne.lng&&(o=this._sw.lng>=n&&n>=this._ne.lng),i&&o}static convert(e){return e instanceof Bt?e:new Bt(e)}static fromLngLat(e,n=0){const i=360*n/40075017,o=i/Math.cos(Math.PI/180*e.lat);return new Bt(new me(e.lng-o,e.lat-i),new me(e.lng+o,e.lat+i))}}const zx="AbortError";function Vx(){return new Error(zx)}const Hx=typeof performance<"u"&&performance&&performance.now?performance.now.bind(performance):Date.now.bind(Date);let ta;const bt={now:Hx,frameAsync(t){return new Promise((e,n)=>{const r=requestAnimationFrame(e);t.signal.addEventListener("abort",()=>{cancelAnimationFrame(r),n(Vx())})})},get prefersReducedMotion(){return window.matchMedia?(ta==null&&(ta=window.matchMedia("(prefers-reduced-motion: reduce)")),ta.matches):!1}};class Xx extends Nx{constructor(e,n){super(),d(this,"transform",void 0),d(this,"handlers",void 0),d(this,"_moving",void 0),d(this,"_zooming",void 0),d(this,"_rotating",void 0),d(this,"_pitching",void 0),d(this,"_padding",void 0),d(this,"_bearingSnap",void 0),d(this,"_easeStart",void 0),d(this,"_easeOptions",void 0),d(this,"_easeId",void 0),d(this,"_onEaseFrame",void 0),d(this,"_onEaseEnd",void 0),d(this,"_easeFrameId",void 0),d(this,"_requestedCameraState",void 0),d(this,"transformCameraUpdate",void 0),d(this,"_renderFrameCallback",()=>{const r=Math.min((bt.now()-this._easeStart)/this._easeOptions.duration,1);this._onEaseFrame(this._easeOptions.easing(r)),r<1&&this._easeFrameId?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop()}),this._moving=!1,this._zooming=!1,this.transform=e,this._bearingSnap=n.bearingSnap,this.on("moveend",()=>{delete this._requestedCameraState})}getCenter(){return new me(this.transform.center.lng,this.transform.center.lat)}setCenter(e,n){return this.jumpTo({center:e},n)}panBy(e,n,r){return e=pe.convert(e).mult(-1),this.panTo(this.transform.center,Be({offset:e},n),r)}panTo(e,n,r){return this.easeTo(Be({center:e},n),r)}getZoom(){return this.transform.zoom}setZoom(e,n){return this.jumpTo({zoom:e},n),this}zoomTo(e,n,r){return this.easeTo(Be({zoom:e},n),r)}zoomIn(e,n){return this.zoomTo(this.getZoom()+1,e,n),this}zoomOut(e,n){return this.zoomTo(this.getZoom()-1,e,n),this}getBearing(){return this.transform.bearing}setBearing(e,n){return this.jumpTo({bearing:e},n),this}getPadding(){return this.transform.padding}setPadding(e,n){return this.jumpTo({padding:e},n),this}rotateTo(e,n,r){return this.easeTo(Be({bearing:e},n),r)}resetNorth(e,n){return this.rotateTo(0,Be({duration:1e3},e),n),this}resetNorthPitch(e,n){return this.easeTo(Be({bearing:0,pitch:0,duration:1e3},e),n),this}snapToNorth(e,n){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(e,n):this}getPitch(){return this.transform.pitch}setPitch(e,n){return this.jumpTo({pitch:e},n),this}cameraForBounds(e,n){e=Bt.convert(e);const r=n&&n.bearing||0;return this._cameraForBoxAndBearing(e.getNorthWest(),e.getSouthEast(),r,n)}_cameraForBoxAndBearing(e,n,r,i){const o={top:0,bottom:0,right:0,left:0};if(i=Be({padding:o,offset:[0,0],maxZoom:this.transform.maxZoom},i),typeof i.padding=="number"){const Y=i.padding;i.padding={top:Y,bottom:Y,right:Y,left:Y}}i.padding=Be(o,i.padding);const s=this.transform,a=s.padding,u=new Bt(e,n),l=s.project(u.getNorthWest()),c=s.project(u.getNorthEast()),h=s.project(u.getSouthEast()),f=s.project(u.getSouthWest()),p=gf(-r),_=l.rotate(p),v=c.rotate(p),m=h.rotate(p),y=f.rotate(p),T=new pe(Math.max(_.x,v.x,y.x,m.x),Math.max(_.y,v.y,y.y,m.y)),S=new pe(Math.min(_.x,v.x,y.x,m.x),Math.min(_.y,v.y,y.y,m.y)),x=T.sub(S),C=(s.width-(a.left+a.right+i.padding.left+i.padding.right))/x.x,M=(s.height-(a.top+a.bottom+i.padding.top+i.padding.bottom))/x.y;if(M<0||C<0){Fx("Map cannot fit within canvas with the given bounds, padding, and/or offset.");return}const P=Math.min(s.scaleZoom(s.scale*Math.min(C,M)),i.maxZoom),F=pe.convert(i.offset),V=(i.padding.left-i.padding.right)/2,B=(i.padding.top-i.padding.bottom)/2,N=new pe(V,B).rotate(gf(r)),z=F.add(N).mult(s.scale/s.zoomScale(P));return{center:s.unproject(l.add(h).div(2).sub(z)),zoom:P,bearing:r}}fitBounds(e,n,r){return this._fitInternal(this.cameraForBounds(e,n),n,r)}fitScreenCoordinates(e,n,r,i,o){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(pe.convert(e)),this.transform.pointLocation(pe.convert(n)),r,i),i,o)}_fitInternal(e,n,r){return e?(n=Be(e,n),delete n.padding,n.linear?this.easeTo(n,r):this.flyTo(n,r)):this}jumpTo(e,n){this.stop();const r=this._getTransformForUpdate();let i=!1,o=!1,s=!1;return"zoom"in e&&r.zoom!==+e.zoom&&(i=!0,r.zoom=+e.zoom),e.center!==void 0&&(r.center=me.convert(e.center)),"bearing"in e&&r.bearing!==+e.bearing&&(o=!0,r.bearing=+e.bearing),"pitch"in e&&r.pitch!==+e.pitch&&(s=!0,r.pitch=+e.pitch),e.padding!=null&&!r.isPaddingEqual(e.padding)&&(r.padding=e.padding),this._applyUpdatedTransform(r),this.fire(new le("movestart",n)).fire(new le("move",n)),i&&this.fire(new le("zoomstart",n)).fire(new le("zoom",n)).fire(new le("zoomend",n)),o&&this.fire(new le("rotatestart",n)).fire(new le("rotate",n)).fire(new le("rotateend",n)),s&&this.fire(new le("pitchstart",n)).fire(new le("pitch",n)).fire(new le("pitchend",n)),this.fire(new le("moveend",n))}calculateCameraOptionsFromTo(e,n,r,i=0){const o=jt.fromLngLat(e,n),s=jt.fromLngLat(r,i),a=s.x-o.x,u=s.y-o.y,l=s.z-o.z,c=Math.hypot(a,u,l);if(c===0)throw new Error("Can't calculate camera options with same From and To");const h=Math.hypot(a,u),f=this.transform.scaleZoom(this.transform.cameraToCenterDistance/c/this.transform.tileSize),p=Math.atan2(a,-u)*180/Math.PI;let _=Math.acos(h/c)*180/Math.PI;return _=l<0?90-_:90+_,{center:s.toLngLat(),zoom:f,pitch:_,bearing:p}}easeTo(e,n){var r;this._stop(!1,e.easeId),e=Be({offset:[0,0],duration:500,easing:qa},e),(e.animate===!1||!e.essential&&bt.prefersReducedMotion)&&(e.duration=0);const i=this._getTransformForUpdate(),o=this.getZoom(),s=this.getBearing(),a=this.getPitch(),u=this.getPadding(),l="bearing"in e?this._normalizeBearing(e.bearing,s):s,c="pitch"in e?+e.pitch:a,h="padding"in e?e.padding:i.padding,f=pe.convert(e.offset);let p=i.centerPoint.add(f);const _=i.pointLocation(p),{center:v,zoom:m}=i.getConstrained(me.convert(e.center||_),(r=e.zoom)!==null&&r!==void 0?r:o);this._normalizeCenter(v);const y=i.project(_),T=i.project(v).sub(y),S=i.zoomScale(m-o);let x,C;e.around&&(x=me.convert(e.around),C=i.locationPoint(x));const M={moving:this._moving,zooming:this._zooming,rotating:this._rotating,pitching:this._pitching};return this._zooming=this._zooming||m!==o,this._rotating=this._rotating||s!==l,this._pitching=this._pitching||c!==a,this._padding=!i.isPaddingEqual(h),this._easeId=e.easeId,this._prepareEase(n,e.noMoveStart,M),this._ease(P=>{if(this._zooming&&(i.zoom=Ct.number(o,m,P)),this._rotating&&(i.bearing=Ct.number(s,l,P)),this._pitching&&(i.pitch=Ct.number(a,c,P)),this._padding&&(i.interpolatePadding(u,h,P),p=i.centerPoint.add(f)),x)i.setLocationAtPoint(x,C);else{const F=i.zoomScale(i.zoom-o),V=m>o?Math.min(2,S):Math.max(.5,S),B=Math.pow(V,1-P),O=i.unproject(y.add(T.mult(P*B)).mult(F));i.setLocationAtPoint(i.renderWorldCopies?O.wrap():O,p)}this._applyUpdatedTransform(i),this._fireMoveEvents(n)},P=>{this._afterEase(n,P)},e),this}_prepareEase(e,n,r={}){this._moving=!0,!n&&!r.moving&&this.fire(new le("movestart",e)),this._zooming&&!r.zooming&&this.fire(new le("zoomstart",e)),this._rotating&&!r.rotating&&this.fire(new le("rotatestart",e)),this._pitching&&!r.pitching&&this.fire(new le("pitchstart",e))}_getTransformForUpdate(){return this.transformCameraUpdate?(this._requestedCameraState||(this._requestedCameraState=this.transform.clone()),this._requestedCameraState):this.transform}_applyUpdatedTransform(e){if(!this.transformCameraUpdate)return;const n=e.clone(),{center:r,zoom:i,pitch:o,bearing:s,elevation:a}=this.transformCameraUpdate(n);r&&(n.center=r),i!==void 0&&(n.zoom=i),o!==void 0&&(n.pitch=o),s!==void 0&&(n.bearing=s),a!==void 0&&(n.elevation=a),this.transform.apply(n)}_fireMoveEvents(e){this.fire(new le("move",e)),this._zooming&&this.fire(new le("zoom",e)),this._rotating&&this.fire(new le("rotate",e)),this._pitching&&this.fire(new le("pitch",e))}_afterEase(e,n){if(this._easeId&&n&&this._easeId===n)return;delete this._easeId;const r=this._zooming,i=this._rotating,o=this._pitching;this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,this._padding=!1,r&&this.fire(new le("zoomend",e)),i&&this.fire(new le("rotateend",e)),o&&this.fire(new le("pitchend",e)),this.fire(new le("moveend",e))}flyTo(e,n){var r;if(!e.essential&&bt.prefersReducedMotion){const j=Px(e,["center","zoom","bearing","pitch","around"]);return this.jumpTo(j,n)}this.stop(),e=Be({offset:[0,0],speed:1.2,curve:1.42,easing:qa},e);const i=this._getTransformForUpdate(),o=this.getZoom(),s=this.getBearing(),a=this.getPitch(),u=this.getPadding(),l="bearing"in e?this._normalizeBearing(e.bearing,s):s,c="pitch"in e?+e.pitch:a,h="padding"in e?e.padding:i.padding,f=pe.convert(e.offset);let p=i.centerPoint.add(f);const _=i.pointLocation(p),{center:v,zoom:m}=i.getConstrained(me.convert(e.center||_),(r=e.zoom)!==null&&r!==void 0?r:o);this._normalizeCenter(v);const y=i.zoomScale(m-o),T=i.project(_),S=i.project(v).sub(T);let x=e.curve;const C=Math.max(i.width,i.height),M=C/y,P=S.mag();if("minZoom"in e){const j=Wt(Math.min(e.minZoom,o,m),i.minZoom,i.maxZoom),te=C/i.zoomScale(j-o);x=Math.sqrt(te/P*2)}const F=x*x;function V(j){const te=(M*M-C*C+(j?-1:1)*F*F*P*P)/(2*(j?M:C)*F*P);return Math.log(Math.sqrt(te*te+1)-te)}function B(j){return(Math.exp(j)-Math.exp(-j))/2}function O(j){return(Math.exp(j)+Math.exp(-j))/2}function N(j){return B(j)/O(j)}const U=V(!1);let z=function(j){return O(U)/O(U+x*j)},W=function(j){return C*((O(U)*N(U+x*j)-B(U))/F)/P},Y=(V(!0)-U)/x;if(Math.abs(P)<1e-6||!isFinite(Y)){if(Math.abs(C-M)<1e-6)return this.easeTo(e,n);const j=M<C?-1:1;Y=Math.abs(Math.log(M/C))/x,W=()=>0,z=te=>Math.exp(j*x*te)}if("duration"in e)e.duration=+e.duration;else{const j="screenSpeed"in e?+e.screenSpeed/x:+e.speed;e.duration=1e3*Y/j}return e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=s!==l,this._pitching=c!==a,this._padding=!i.isPaddingEqual(h),this._prepareEase(n,!1),this._ease(j=>{const te=j*Y,J=1/z(te);i.zoom=j===1?m:o+i.scaleZoom(J),this._rotating&&(i.bearing=Ct.number(s,l,j)),this._pitching&&(i.pitch=Ct.number(a,c,j)),this._padding&&(i.interpolatePadding(u,h,j),p=i.centerPoint.add(f));const Q=j===1?v:i.unproject(T.add(S.mult(W(te))).mult(J));i.setLocationAtPoint(i.renderWorldCopies?Q.wrap():Q,p),this._applyUpdatedTransform(i),this._fireMoveEvents(n)},()=>{this._afterEase(n)},e),this}isEasing(){return!!this._easeFrameId}stop(){return this._stop()}_stop(e,n){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){const i=this._onEaseEnd;delete this._onEaseEnd,i.call(this,n)}if(!e){var r;(r=this.handlers)===null||r===void 0||r.stop(!1)}return this}_ease(e,n,r){r.animate===!1||r.duration===0?(e(1),n()):(this._easeStart=bt.now(),this._easeOptions=r,this._onEaseFrame=e,this._onEaseEnd=n,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback))}_normalizeBearing(e,n){e=dr(e,-180,180);const r=Math.abs(e-n);return Math.abs(e-360-n)<r&&(e-=360),Math.abs(e+360-n)<r&&(e+=360),e}_normalizeCenter(e){const n=this.transform;if(!n.renderWorldCopies||n.lngRange)return;const r=e.lng-n.center.lng;e.lng+=r>180?-360:r<-180?360:0}}class wu{constructor(e=0,n=0,r=0,i=0){if(d(this,"top",void 0),d(this,"bottom",void 0),d(this,"left",void 0),d(this,"right",void 0),isNaN(e)||e<0||isNaN(n)||n<0||isNaN(r)||r<0||isNaN(i)||i<0)throw new Error("Invalid value for edge-insets, top, bottom, left and right must all be numbers");this.top=e,this.bottom=n,this.left=r,this.right=i}interpolate(e,n,r){return n.top!=null&&e.top!=null&&(this.top=Ct.number(e.top,n.top,r)),n.bottom!=null&&e.bottom!=null&&(this.bottom=Ct.number(e.bottom,n.bottom,r)),n.left!=null&&e.left!=null&&(this.left=Ct.number(e.left,n.left,r)),n.right!=null&&e.right!=null&&(this.right=Ct.number(e.right,n.right,r)),this}getCenter(e,n){const r=Wt((this.left+e-this.right)/2,0,e),i=Wt((this.top+n-this.bottom)/2,0,n);return new pe(r,i)}equals(e){return this.top===e.top&&this.bottom===e.bottom&&this.left===e.left&&this.right===e.right}clone(){return new wu(this.top,this.bottom,this.left,this.right)}toJSON(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}}const co=85.051129;class Lu{constructor(e,n,r,i,o){d(this,"tileSize",void 0),d(this,"tileZoom",void 0),d(this,"lngRange",void 0),d(this,"latRange",void 0),d(this,"scale",void 0),d(this,"width",void 0),d(this,"height",void 0),d(this,"angle",void 0),d(this,"rotationMatrix",void 0),d(this,"pixelsToGLUnits",void 0),d(this,"cameraToCenterDistance",void 0),d(this,"mercatorMatrix",void 0),d(this,"projMatrix",void 0),d(this,"invProjMatrix",void 0),d(this,"alignedProjMatrix",void 0),d(this,"pixelMatrix",void 0),d(this,"pixelMatrix3D",void 0),d(this,"pixelMatrixInverse",void 0),d(this,"glCoordMatrix",void 0),d(this,"labelPlaneMatrix",void 0),d(this,"minElevationForCurrentTile",void 0),d(this,"_fov",void 0),d(this,"_pitch",void 0),d(this,"_zoom",void 0),d(this,"_unmodified",void 0),d(this,"_renderWorldCopies",void 0),d(this,"_minZoom",void 0),d(this,"_maxZoom",void 0),d(this,"_minPitch",void 0),d(this,"_maxPitch",void 0),d(this,"_center",void 0),d(this,"_elevation",void 0),d(this,"_pixelPerMeter",void 0),d(this,"_edgeInsets",void 0),d(this,"_constraining",void 0),d(this,"_posMatrixCache",void 0),d(this,"_alignedPosMatrixCache",void 0),this.tileSize=512,this._renderWorldCopies=o===void 0?!0:!!o,this._minZoom=e||0,this._maxZoom=n||22,this._minPitch=r??0,this._maxPitch=i??60,this.setMaxBounds(),this.width=0,this.height=0,this._center=new me(0,0),this._elevation=0,this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._edgeInsets=new wu,this._posMatrixCache={},this._alignedPosMatrixCache={},this.minElevationForCurrentTile=0}clone(){const e=new Lu(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies);return e.apply(this),e}apply(e){this.tileSize=e.tileSize,this.latRange=e.latRange,this.width=e.width,this.height=e.height,this._center=e._center,this._elevation=e._elevation,this.minElevationForCurrentTile=e.minElevationForCurrentTile,this.zoom=e.zoom,this.angle=e.angle,this._fov=e._fov,this._pitch=e._pitch,this._unmodified=e._unmodified,this._edgeInsets=e._edgeInsets.clone(),this._calcMatrices()}get minZoom(){return this._minZoom}set minZoom(e){this._minZoom!==e&&(this._minZoom=e,this.zoom=Math.max(this.zoom,e))}get maxZoom(){return this._maxZoom}set maxZoom(e){this._maxZoom!==e&&(this._maxZoom=e,this.zoom=Math.min(this.zoom,e))}get minPitch(){return this._minPitch}set minPitch(e){this._minPitch!==e&&(this._minPitch=e,this.pitch=Math.max(this.pitch,e))}get maxPitch(){return this._maxPitch}set maxPitch(e){this._maxPitch!==e&&(this._maxPitch=e,this.pitch=Math.min(this.pitch,e))}get renderWorldCopies(){return this._renderWorldCopies}set renderWorldCopies(e){e===void 0?e=!0:e===null&&(e=!1),this._renderWorldCopies=e}get worldSize(){return this.tileSize*this.scale}get centerOffset(){return this.centerPoint._sub(this.size._div(2))}get size(){return new pe(this.width,this.height)}get bearing(){return-this.angle/Math.PI*180}set bearing(e){const n=-dr(e,-180,180)*Math.PI/180;this.angle!==n&&(this._unmodified=!1,this.angle=n,this._calcMatrices(),this.rotationMatrix=a1(),u1(this.rotationMatrix,this.rotationMatrix,this.angle))}get pitch(){return this._pitch/Math.PI*180}set pitch(e){const n=Wt(e,this.minPitch,this.maxPitch)/180*Math.PI;this._pitch!==n&&(this._unmodified=!1,this._pitch=n,this._calcMatrices())}get fov(){return this._fov/Math.PI*180}set fov(e){e=Math.max(.01,Math.min(60,e)),this._fov!==e&&(this._unmodified=!1,this._fov=e/180*Math.PI,this._calcMatrices())}get zoom(){return this._zoom}set zoom(e){const n=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom!==n&&(this._unmodified=!1,this._zoom=n,this.tileZoom=Math.max(0,Math.floor(n)),this.scale=this.zoomScale(n),this._constrain(),this._calcMatrices())}get center(){return this._center}set center(e){e.lat===this._center.lat&&e.lng===this._center.lng||(this._unmodified=!1,this._center=e,this._constrain(),this._calcMatrices())}get elevation(){return this._elevation}set elevation(e){e!==this._elevation&&(this._elevation=e,this._constrain(),this._calcMatrices())}get padding(){return this._edgeInsets.toJSON()}set padding(e){this._edgeInsets.equals(e)||(this._unmodified=!1,this._edgeInsets.interpolate(this._edgeInsets,e,1),this._calcMatrices())}get centerPoint(){return this._edgeInsets.getCenter(this.width,this.height)}isPaddingEqual(e){return this._edgeInsets.equals(e)}interpolatePadding(e,n,r){this._unmodified=!1,this._edgeInsets.interpolate(e,n,r),this._constrain(),this._calcMatrices()}coveringZoomLevel(e){const n=(e.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/e.tileSize));return Math.max(0,n)}resize(e,n){this.width=e,this.height=n,this.pixelsToGLUnits=[2/e,-2/n],this._constrain(),this._calcMatrices()}get unmodified(){return this._unmodified}zoomScale(e){return Math.pow(2,e)}scaleZoom(e){return Math.log(e)/Math.LN2}project(e){const n=Wt(e.lat,-co,co);return new pe(Po(e.lng)*this.worldSize,Fo(n)*this.worldSize)}unproject(e){return new jt(e.x/this.worldSize,e.y/this.worldSize).toLngLat()}get point(){return this.project(this.center)}getCameraPosition(){const e=this.pointLocation(this.getCameraPoint()),n=Math.cos(this._pitch)*this.cameraToCenterDistance/this._pixelPerMeter;return{lngLat:e,altitude:n+this.elevation}}setLocationAtPoint(e,n){const r=this.pointCoordinate(n),i=this.pointCoordinate(this.centerPoint),o=this.locationCoordinate(e),s=new jt(o.x-(r.x-i.x),o.y-(r.y-i.y));this.center=this.coordinateLocation(s),this._renderWorldCopies&&(this.center=this.center.wrap())}locationPoint(e){return this.coordinatePoint(this.locationCoordinate(e))}pointLocation(e){return this.coordinateLocation(this.pointCoordinate(e))}locationCoordinate(e){return jt.fromLngLat(e)}coordinateLocation(e){return e&&e.toLngLat()}pointCoordinate(e){const r=[e.x,e.y,0,1],i=[e.x,e.y,1,1];Tn(r,r,this.pixelMatrixInverse),Tn(i,i,this.pixelMatrixInverse);const o=r[3],s=i[3],a=r[0]/o,u=i[0]/s,l=r[1]/o,c=i[1]/s,h=r[2]/o,f=i[2]/s,p=h===f?0:(0-h)/(f-h);return new jt(Ct.number(a,u,p)/this.worldSize,Ct.number(l,c,p)/this.worldSize)}coordinatePoint(e,n=0,r=this.pixelMatrix){const i=[e.x*this.worldSize,e.y*this.worldSize,n,1];return Tn(i,i,r),new pe(i[0]/i[3],i[1]/i[3])}getBounds(){const e=Math.max(0,this.height/2-this.getHorizon());return new Bt().extend(this.pointLocation(new pe(0,e))).extend(this.pointLocation(new pe(this.width,e))).extend(this.pointLocation(new pe(this.width,this.height))).extend(this.pointLocation(new pe(0,this.height)))}getMaxBounds(){return!this.latRange||this.latRange.length!==2||!this.lngRange||this.lngRange.length!==2?null:new Bt([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]])}getHorizon(){return Math.tan(Math.PI/2-this._pitch)*this.cameraToCenterDistance*.85}setMaxBounds(e){e?(this.lngRange=[e.getWest(),e.getEast()],this.latRange=[e.getSouth(),e.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-co,co])}customLayerMatrix(){return l1(this.mercatorMatrix)}getConstrained(e,n){n=Wt(+n,this.minZoom,this.maxZoom);const r={center:new me(e.lng,e.lat),zoom:n};let i=this.lngRange;if(!this._renderWorldCopies&&i===null){const C=179.9999999999;i=[-C,C]}const o=this.tileSize*this.zoomScale(r.zoom);let s=0,a=o,u=0,l=o,c=0,h=0;const{x:f,y:p}=this.size;if(this.latRange){const C=this.latRange;s=Fo(C[1])*o,a=Fo(C[0])*o,a-s<p&&(c=p/(a-s))}i&&(u=dr(Po(i[0])*o,0,o),l=dr(Po(i[1])*o,0,o),l<u&&(l+=o),l-u<f&&(h=f/(l-u)));const{x:_,y:v}=this.project.call({worldSize:o},e);let m,y;const T=Math.max(h||0,c||0);if(T){const C=new pe(h?(l+u)/2:_,c?(a+s)/2:v);return r.center=this.unproject.call({worldSize:o},C).wrap(),r.zoom+=this.scaleZoom(T),r}if(this.latRange){const C=p/2;v-C<s&&(y=s+C),v+C>a&&(y=a-C)}if(i){const C=(u+l)/2;let M=_;this._renderWorldCopies&&(M=dr(_,C-o/2,C+o/2));const P=f/2;M-P<u&&(m=u+P),M+P>l&&(m=l-P)}if(m!==void 0||y!==void 0){var S,x;const C=new pe((S=m)!==null&&S!==void 0?S:_,(x=y)!==null&&x!==void 0?x:v);r.center=this.unproject.call({worldSize:o},C).wrap()}return r}_constrain(){if(!this.center||!this.width||!this.height||this._constraining)return;this._constraining=!0;const e=this._unmodified,{center:n,zoom:r}=this.getConstrained(this.center,this.zoom);this.center=n,this.zoom=r,this._unmodified=e,this._constraining=!1}_calcMatrices(){if(!this.height)return;const e=this._fov/2,n=this.centerOffset,r=this.point.x,i=this.point.y;this.cameraToCenterDistance=.5/Math.tan(e)*this.height,this._pixelPerMeter=s_(1,this.center.lat)*this.worldSize;let o=Rc(new Float64Array(16));Xt(o,o,[this.width/2,-this.height/2,1]),Ht(o,o,[1,-1,0]),this.labelPlaneMatrix=o,o=Rc(new Float64Array(16)),Xt(o,o,[1,-1,1]),Ht(o,o,[-1,-1,0]),Xt(o,o,[2/this.width,2/this.height,1]),this.glCoordMatrix=o;const s=this.cameraToCenterDistance+this._elevation*this._pixelPerMeter/Math.cos(this._pitch),a=Math.min(this.elevation,this.minElevationForCurrentTile),u=s-a*this._pixelPerMeter/Math.cos(this._pitch),l=a<0?u:s,c=Math.PI/2+this._pitch,h=this._fov*(.5+n.y/this.height),f=Math.sin(h)*l/Math.sin(Wt(Math.PI-c-h,.01,Math.PI-.01)),p=this.getHorizon(),v=2*Math.atan(p/this.cameraToCenterDistance)*(.5+n.y/(p*2)),m=Math.sin(v)*l/Math.sin(Wt(Math.PI-c-v,.01,Math.PI-.01)),y=Math.min(f,m),T=(Math.cos(Math.PI/2-this._pitch)*y+l)*1.01,S=this.height/50;o=new Float64Array(16),np(o,this._fov,this.width/this.height,S,T),o[8]=-n.x*2/this.width,o[9]=n.y*2/this.height,Xt(o,o,[1,-1,1]),Ht(o,o,[0,0,-this.cameraToCenterDistance]),vs(o,o,this._pitch),Su(o,o,this.angle),Ht(o,o,[-r,-i,0]),this.mercatorMatrix=Xt([],o,[this.worldSize,this.worldSize,this.worldSize]),Xt(o,o,[1,1,this._pixelPerMeter]),this.pixelMatrix=bn(new Float64Array(16),this.labelPlaneMatrix,o),Ht(o,o,[0,0,-this.elevation]),this.projMatrix=o,this.invProjMatrix=Ri([],o),this.pixelMatrix3D=bn(new Float64Array(16),this.labelPlaneMatrix,o);const x=this.width%2/2,C=this.height%2/2,M=Math.cos(this.angle),P=Math.sin(this.angle),F=r-Math.round(r)+M*x+P*C,V=i-Math.round(i)+M*C+P*x,B=new Float64Array(o);if(Ht(B,B,[F>.5?F-1:F,V>.5?V-1:V,0]),this.alignedProjMatrix=B,o=Ri(new Float64Array(16),this.pixelMatrix),!o)throw new Error("failed to invert matrix");this.pixelMatrixInverse=o,this._posMatrixCache={},this._alignedPosMatrixCache={}}maxPitchScaleFactor(){if(!this.pixelMatrixInverse)return 1;const e=this.pointCoordinate(new pe(0,0)),n=[e.x*this.worldSize,e.y*this.worldSize,0,1];return Tn(n,n,this.pixelMatrix)[3]/this.cameraToCenterDistance}getCameraPoint(){const e=this._pitch,n=Math.tan(e)*(this.cameraToCenterDistance||1);return this.centerPoint.add(new pe(0,n))}getCameraQueryGeometry(e){const n=this.getCameraPoint();if(e.length===1)return[e[0],n];{let r=n.x,i=n.y,o=n.x,s=n.y;for(const a of e)r=Math.min(r,a.x),i=Math.min(i,a.y),o=Math.max(o,a.x),s=Math.max(s,a.y);return[new pe(r,i),new pe(o,i),new pe(o,s),new pe(r,s),new pe(r,i)]}}lngLatToCameraDepth(e,n){const r=this.locationCoordinate(e),i=[r.x*this.worldSize,r.y*this.worldSize,n,1];return Tn(i,i,this.projMatrix),i[2]/i[3]}}class Ui{constructor(e){d(this,"_map",void 0),this._map=e}get transform(){return this._map._requestedCameraState||this._map.transform}get center(){return{lng:this.transform.center.lng,lat:this.transform.center.lat}}get zoom(){return this.transform.zoom}get pitch(){return this.transform.pitch}get bearing(){return this.transform.bearing}unproject(e){return this.transform.pointLocation(pe.convert(e))}}class Wx{constructor(e,n){d(this,"_map",void 0),d(this,"_tr",void 0),d(this,"_el",void 0),d(this,"_container",void 0),d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_startPos",void 0),d(this,"_lastPos",void 0),d(this,"_box",void 0),d(this,"_clickTolerance",void 0),this._map=e,this._tr=new Ui(e),this._el=e.getCanvasContainer(),this._container=e.getContainer(),this._clickTolerance=n.clickTolerance||1}isEnabled(){return!!this._enabled}isActive(){return!!this._active}enable(){this.isEnabled()||(this._enabled=!0)}disable(){this.isEnabled()&&(this._enabled=!1)}mousedown(e,n){this.isEnabled()&&e.shiftKey&&e.button===0&&(ee.disableDrag(),this._startPos=this._lastPos=n,this._active=!0)}mousemoveWindow(e,n){if(!this._active)return;const r=n;if(this._lastPos.equals(r)||!this._box&&r.dist(this._startPos)<this._clickTolerance)return;const i=this._startPos;this._lastPos=r,this._box||(this._box=ee.create("div","l7-boxzoom",this._container),this._container.classList.add("l7-crosshair"),this._fireEvent("boxzoomstart",e));const o=Math.min(i.x,r.x),s=Math.max(i.x,r.x),a=Math.min(i.y,r.y),u=Math.max(i.y,r.y);ee.setTransform(this._box,`translate(${o}px,${a}px)`),this._box.style.width=`${s-o}px`,this._box.style.height=`${u-a}px`}mouseupWindow(e,n){if(!this._active||e.button!==0)return;const r=this._startPos,i=n;if(this.reset(),ee.suppressClick(),r.x===i.x&&r.y===i.y)this._fireEvent("boxzoomcancel",e);else return this._map.fire(new le("boxzoomend",{originalEvent:e})),{cameraAnimation:o=>o.fitScreenCoordinates(r,i,this._tr.bearing,{linear:!0})}}keydown(e){this._active&&e.keyCode===27&&(this.reset(),this._fireEvent("boxzoomcancel",e))}reset(){this._active=!1,this._container.classList.remove("l7-crosshair"),this._box&&(ee.remove(this._box),this._box=null),ee.enableDrag(),delete this._startPos,delete this._lastPos}_fireEvent(e,n){return this._map.fire(new le(e,{originalEvent:n}))}}class jx{constructor(e){d(this,"_tr",void 0),d(this,"_enabled",void 0),d(this,"_active",void 0),this._tr=new Ui(e),this.reset()}reset(){this._active=!1}dblclick(e,n){return e.preventDefault(),{cameraAnimation:r=>{r.easeTo({duration:300,zoom:this._tr.zoom+(e.shiftKey?-1:1),around:this._tr.unproject(n)},{originalEvent:e})}}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class $x{constructor(e,n){d(this,"_options",void 0),d(this,"_map",void 0),d(this,"_container",void 0),d(this,"_bypassKey",navigator.userAgent.indexOf("Mac")!==-1?"metaKey":"ctrlKey"),d(this,"_enabled",void 0),this._map=e,this._options=n,this._enabled=!1}isActive(){return!1}reset(){}_setupUI(){if(this._container)return;const e=this._map.getCanvasContainer();e.classList.add("l7-cooperative-gestures"),this._container=ee.create("div","l7-cooperative-gesture-screen",e);const n=document.createElement("div");n.className="l7-desktop-message",n.textContent="Missing UI string",this._container.appendChild(n);const r=document.createElement("div");r.className="l7-mobile-message",r.textContent="Missing UI string",this._container.appendChild(r),this._container.setAttribute("aria-hidden","true")}_destoryUI(){this._container&&(ee.remove(this._container),this._map.getCanvasContainer().classList.remove("l7-cooperative-gestures")),delete this._container}enable(){this._setupUI(),this._enabled=!0}disable(){this._enabled=!1,this._destoryUI()}isEnabled(){return this._enabled}touchmove(e){this._onCooperativeGesture(e.touches.length===1)}wheel(e){this._map.scrollZoom.isEnabled()&&this._onCooperativeGesture(!e[this._bypassKey])}_onCooperativeGesture(e){!this._enabled||!e||(this._container.classList.add("l7-show"),setTimeout(()=>{this._container.classList.remove("l7-show")},100))}}const Zx={panStep:100,bearingStep:15,pitchStep:10};class Yx{constructor(e){d(this,"_tr",void 0),d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_panStep",void 0),d(this,"_bearingStep",void 0),d(this,"_pitchStep",void 0),d(this,"_rotationDisabled",void 0),this._tr=new Ui(e);const n=Zx;this._panStep=n.panStep,this._bearingStep=n.bearingStep,this._pitchStep=n.pitchStep,this._rotationDisabled=!1}reset(){this._active=!1}keydown(e){if(e.altKey||e.ctrlKey||e.metaKey)return;let n=0,r=0,i=0,o=0,s=0;switch(e.keyCode){case 61:case 107:case 171:case 187:n=1;break;case 189:case 109:case 173:n=-1;break;case 37:e.shiftKey?r=-1:(e.preventDefault(),o=-1);break;case 39:e.shiftKey?r=1:(e.preventDefault(),o=1);break;case 38:e.shiftKey?i=1:(e.preventDefault(),s=-1);break;case 40:e.shiftKey?i=-1:(e.preventDefault(),s=1);break;default:return}return this._rotationDisabled&&(r=0,i=0),{cameraAnimation:a=>{const u=this._tr;a.easeTo({duration:300,easeId:"keyboardHandler",easing:Gx,zoom:n?Math.round(u.zoom)+n*(e.shiftKey?2:1):u.zoom,bearing:u.bearing+r*this._bearingStep,pitch:u.pitch+i*this._pitchStep,offset:[-o*this._panStep,-s*this._panStep],center:u.center},{originalEvent:e})}}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}disableRotation(){this._rotationDisabled=!0}enableRotation(){this._rotationDisabled=!1}}function Gx(t){return t*(2-t)}class Kx{constructor(e,n){d(this,"_mousedownPos",void 0),d(this,"_clickTolerance",void 0),d(this,"_map",void 0),this._map=e,this._clickTolerance=n.clickTolerance}reset(){delete this._mousedownPos}wheel(e){return this._firePreventable(new Dx(e.type,this._map,e))}mousedown(e,n){return this._mousedownPos=n,this._firePreventable(new on(e.type,this._map,e))}mouseup(e){this._map.fire(new on(e.type,this._map,e))}click(e,n){this._mousedownPos&&this._mousedownPos.dist(n)>=this._clickTolerance||this._map.fire(new on(e.type,this._map,e))}dblclick(e){return this._firePreventable(new on(e.type,this._map,e))}mouseover(e){this._map.fire(new on(e.type,this._map,e))}mouseout(e){this._map.fire(new on(e.type,this._map,e))}touchstart(e){return this._firePreventable(new lo(e.type,this._map,e))}touchmove(e){this._map.fire(new lo(e.type,this._map,e))}touchend(e){this._map.fire(new lo(e.type,this._map,e))}touchcancel(e){this._map.fire(new lo(e.type,this._map,e))}_firePreventable(e){if(this._map.fire(e),e.defaultPrevented)return{}}isEnabled(){return!0}isActive(){return!1}enable(){}disable(){}}class qx{constructor(e){d(this,"_map",void 0),d(this,"_delayContextMenu",void 0),d(this,"_ignoreContextMenu",void 0),d(this,"_contextMenuEvent",void 0),this._map=e}reset(){this._delayContextMenu=!1,this._ignoreContextMenu=!0,delete this._contextMenuEvent}mousemove(e){this._map.fire(new on(e.type,this._map,e))}mousedown(){this._delayContextMenu=!0,this._ignoreContextMenu=!1}mouseup(){this._delayContextMenu=!1,this._contextMenuEvent&&(this._map.fire(new on("contextmenu",this._map,this._contextMenuEvent)),delete this._contextMenuEvent)}contextmenu(e){this._delayContextMenu?this._contextMenuEvent=e:this._ignoreContextMenu||this._map.fire(new on(e.type,this._map,e)),this._map.listens("contextmenu")&&e.preventDefault()}isEnabled(){return!0}isActive(){return!1}enable(){}disable(){}}class Uu{constructor(e){d(this,"contextmenu",void 0),d(this,"mousedown",void 0),d(this,"mousemoveWindow",void 0),d(this,"mouseup",void 0),d(this,"touchstart",void 0),d(this,"touchmoveWindow",void 0),d(this,"touchend",void 0),d(this,"_clickTolerance",void 0),d(this,"_moveFunction",void 0),d(this,"_activateOnStart",void 0),d(this,"_active",void 0),d(this,"_enabled",void 0),d(this,"_moved",void 0),d(this,"_lastPoint",void 0),d(this,"_moveStateManager",void 0),this._enabled=!!e.enable,this._moveStateManager=e.moveStateManager,this._clickTolerance=e.clickTolerance||1,this._moveFunction=e.move,this._activateOnStart=!!e.activateOnStart,e.assignEvents(this),this.reset()}reset(e){this._active=!1,this._moved=!1,delete this._lastPoint,this._moveStateManager.endMove(e)}_move(...e){const n=this._moveFunction(...e);if(n.bearingDelta||n.pitchDelta||n.around||n.panDelta)return this._active=!0,n}dragStart(e,n){!this.isEnabled()||this._lastPoint||this._moveStateManager.isValidStartEvent(e)&&(this._moveStateManager.startMove(e),this._lastPoint=n.length?n[0]:n,this._activateOnStart&&this._lastPoint&&(this._active=!0))}dragMove(e,n){if(!this.isEnabled())return;const r=this._lastPoint;if(!r)return;if(e.preventDefault(),!this._moveStateManager.isValidMoveEvent(e)){this.reset(e);return}const i=n.length?n[0]:n;if(!(!this._moved&&i.dist(r)<this._clickTolerance))return this._moved=!0,this._lastPoint=i,this._move(r,i)}dragEnd(e){!this.isEnabled()||!this._lastPoint||this._moveStateManager.isValidEndEvent(e)&&(this._moved&&ee.suppressClick(),this.reset(e))}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}getClickTolerance(){return this._clickTolerance}}const Qx=0,Jx=2,eC={[Qx]:1,[Jx]:2};function tC(t,e){const n=eC[e];return t.buttons===void 0||(t.buttons&n)!==n}class ku{constructor(e){d(this,"_eventButton",void 0),d(this,"_correctEvent",void 0),this._correctEvent=e.checkCorrectEvent}startMove(e){const n=ee.mouseButton(e);this._eventButton=n}endMove(e){delete this._eventButton}isValidStartEvent(e){return this._correctEvent(e)}isValidMoveEvent(e){return!tC(e,this._eventButton)}isValidEndEvent(e){return ee.mouseButton(e)===this._eventButton}}const zu=0,a_=2,Vu=t=>{t.mousedown=t.dragStart,t.mousemoveWindow=t.dragMove,t.mouseup=t.dragEnd,t.contextmenu=e=>{e.preventDefault()}},nC=({enable:t,clickTolerance:e})=>{const n=new ku({checkCorrectEvent:r=>ee.mouseButton(r)===zu&&!r.ctrlKey});return new Uu({clickTolerance:e,move:(r,i)=>({around:i,panDelta:i.sub(r)}),activateOnStart:!0,moveStateManager:n,enable:t,assignEvents:Vu})},rC=({enable:t,clickTolerance:e,bearingDegreesPerPixelMoved:n=.8})=>{const r=new ku({checkCorrectEvent:i=>ee.mouseButton(i)===zu&&i.ctrlKey||ee.mouseButton(i)===a_});return new Uu({clickTolerance:e,move:(i,o)=>({bearingDelta:(o.x-i.x)*n}),moveStateManager:r,enable:t,assignEvents:Vu})},iC=({enable:t,clickTolerance:e,pitchDegreesPerPixelMoved:n=-.5})=>{const r=new ku({checkCorrectEvent:i=>ee.mouseButton(i)===zu&&i.ctrlKey||ee.mouseButton(i)===a_});return new Uu({clickTolerance:e,move:(i,o)=>({pitchDelta:(o.y-i.y)*n}),moveStateManager:r,enable:t,assignEvents:Vu})},yf=4.000244140625,oC=1/100,sC=1/450,aC=2;class uC{constructor(e,n){d(this,"_map",void 0),d(this,"_tr",void 0),d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_zooming",void 0),d(this,"_aroundCenter",void 0),d(this,"_around",void 0),d(this,"_aroundPoint",void 0),d(this,"_type",void 0),d(this,"_lastValue",void 0),d(this,"_timeout",void 0),d(this,"_finishTimeout",void 0),d(this,"_lastWheelEvent",void 0),d(this,"_lastWheelEventTime",void 0),d(this,"_startZoom",void 0),d(this,"_targetZoom",void 0),d(this,"_delta",void 0),d(this,"_easing",void 0),d(this,"_prevEase",void 0),d(this,"_frameId",void 0),d(this,"_triggerRenderFrame",void 0),d(this,"_defaultZoomRate",void 0),d(this,"_wheelZoomRate",void 0),d(this,"_onTimeout",r=>{this._type="wheel",this._delta-=this._lastValue,this._active||this._start(r)}),this._map=e,this._tr=new Ui(e),this._triggerRenderFrame=n,this._delta=0,this._defaultZoomRate=oC,this._wheelZoomRate=sC}setZoomRate(e){this._defaultZoomRate=e}setWheelZoomRate(e){this._wheelZoomRate=e}isEnabled(){return!!this._enabled}isActive(){return!!this._active||this._finishTimeout!==void 0}isZooming(){return!!this._zooming}enable(e){this.isEnabled()||(this._enabled=!0,this._aroundCenter=!!e&&e.around==="center")}disable(){this.isEnabled()&&(this._enabled=!1)}wheel(e){if(!this.isEnabled()||this._map.cooperativeGestures.isEnabled()&&!e[this._map.cooperativeGestures._bypassKey])return;let n=e.deltaMode===WheelEvent.DOM_DELTA_LINE?e.deltaY*40:e.deltaY;const r=bt.now(),i=r-(this._lastWheelEventTime||0);this._lastWheelEventTime=r,n!==0&&n%yf===0?this._type="wheel":n!==0&&Math.abs(n)<4?this._type="trackpad":i>400?(this._type=null,this._lastValue=n,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(i*n)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,n+=this._lastValue)),e.shiftKey&&n&&(n=n/4),this._type&&(this._lastWheelEvent=e,this._delta-=n,this._active||this._start(e)),e.preventDefault()}_start(e){if(!this._delta)return;this._frameId&&(this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0),this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout);const n=ee.mousePos(this._map.getCanvasContainer(),e),r=this._tr;n.y>r.transform.height/2-r.transform.getHorizon()?this._around=me.convert(this._aroundCenter?r.center:r.unproject(n)):this._around=me.convert(r.center),this._aroundPoint=r.transform.locationPoint(this._around),this._frameId||(this._frameId=!0,this._triggerRenderFrame())}renderFrame(){if(!this._frameId||(this._frameId=null,!this.isActive()))return;const e=this._tr.transform;if(this._delta!==0){const a=this._type==="wheel"&&Math.abs(this._delta)>yf?this._wheelZoomRate:this._defaultZoomRate;let u=aC/(1+Math.exp(-Math.abs(this._delta*a)));this._delta<0&&u!==0&&(u=1/u);const l=typeof this._targetZoom=="number"?e.zoomScale(this._targetZoom):e.scale;this._targetZoom=Math.min(e.maxZoom,Math.max(e.minZoom,e.scaleZoom(l*u))),this._type==="wheel"&&(this._startZoom=e.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0}const n=typeof this._targetZoom=="number"?this._targetZoom:e.zoom,r=this._startZoom,i=this._easing;let o=!1,s;if(this._type==="wheel"&&r&&i){const a=Math.min((bt.now()-this._lastWheelEventTime)/200,1),u=i(a);s=Ct.number(r,n,u),a<1?this._frameId||(this._frameId=!0):o=!0}else s=n,o=!0;return this._active=!0,o&&(this._active=!1,this._finishTimeout=setTimeout(()=>{this._zooming=!1,this._triggerRenderFrame(),delete this._targetZoom,delete this._finishTimeout},200)),{noInertia:!0,needsRenderFrame:!o,zoomDelta:s-e.zoom,around:this._aroundPoint,originalEvent:this._lastWheelEvent}}_smoothOutEasing(e){let n=qa;if(this._prevEase){const r=this._prevEase,i=(bt.now()-r.start)/r.duration,o=r.easing(i+.01)-r.easing(i),s=.27/Math.sqrt(o*o+1e-4)*.01,a=Math.sqrt(.27*.27-s*s);n=Nu(s,a,.25,1)}return this._prevEase={start:bt.now(),duration:e,easing:n},n}reset(){this._active=!1,this._zooming=!1,delete this._targetZoom,this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout)}}class lC{constructor(e,n){d(this,"_clickZoom",void 0),d(this,"_tapZoom",void 0),this._clickZoom=e,this._tapZoom=n}enable(){this._clickZoom.enable(),this._tapZoom.enable()}disable(){this._clickZoom.disable(),this._tapZoom.disable()}isEnabled(){return this._clickZoom.isEnabled()&&this._tapZoom.isEnabled()}isActive(){return this._clickZoom.isActive()||this._tapZoom.isActive()}}class cC{constructor(e,n,r){d(this,"_el",void 0),d(this,"_mousePan",void 0),d(this,"_touchPan",void 0),d(this,"_inertiaOptions",void 0),this._el=e,this._mousePan=n,this._touchPan=r}enable(e){this._inertiaOptions=e||{},this._mousePan.enable(),this._touchPan.enable(),this._el.classList.add("l7-touch-drag-pan")}disable(){this._mousePan.disable(),this._touchPan.disable(),this._el.classList.remove("l7-touch-drag-pan")}isEnabled(){return this._mousePan.isEnabled()&&this._touchPan.isEnabled()}isActive(){return this._mousePan.isActive()||this._touchPan.isActive()}}class hC{constructor(e,n,r){d(this,"_mouseRotate",void 0),d(this,"_mousePitch",void 0),d(this,"_pitchWithRotate",void 0),this._pitchWithRotate=e.pitchWithRotate,this._mouseRotate=n,this._mousePitch=r}enable(){this._mouseRotate.enable(),this._pitchWithRotate&&this._mousePitch.enable()}disable(){this._mouseRotate.disable(),this._mousePitch.disable()}isEnabled(){return this._mouseRotate.isEnabled()&&(!this._pitchWithRotate||this._mousePitch.isEnabled())}isActive(){return this._mouseRotate.isActive()||this._mousePitch.isActive()}}class fC{constructor(e,n,r,i){d(this,"_el",void 0),d(this,"_touchZoom",void 0),d(this,"_touchRotate",void 0),d(this,"_tapDragZoom",void 0),d(this,"_rotationDisabled",void 0),d(this,"_enabled",void 0),this._el=e,this._touchZoom=n,this._touchRotate=r,this._tapDragZoom=i,this._rotationDisabled=!1,this._enabled=!0}enable(e){this._touchZoom.enable(e),this._rotationDisabled||this._touchRotate.enable(e),this._tapDragZoom.enable(),this._el.classList.add("l7-touch-zoom-rotate")}disable(){this._touchZoom.disable(),this._touchRotate.disable(),this._tapDragZoom.disable(),this._el.classList.remove("l7-touch-zoom-rotate")}isEnabled(){return this._touchZoom.isEnabled()&&(this._rotationDisabled||this._touchRotate.isEnabled())&&this._tapDragZoom.isEnabled()}isActive(){return this._touchZoom.isActive()||this._touchRotate.isActive()||this._tapDragZoom.isActive()}disableRotation(){this._rotationDisabled=!0,this._touchRotate.disable()}enableRotation(){this._rotationDisabled=!1,this._touchZoom.isEnabled()&&this._touchRotate.enable()}}function Ja(t,e){if(t.length!==e.length)throw new Error(`The number of touches and points are not equal - touches ${t.length}, points ${e.length}`);const n={};for(let r=0;r<t.length;r++)n[t[r].identifier]=e[r];return n}function dC(t){const e=new pe(0,0);for(const n of t)e._add(n);return e.div(t.length)}const u_=500,pC=500,Hu=30;class _C{constructor(e){d(this,"numTouches",void 0),d(this,"centroid",void 0),d(this,"startTime",void 0),d(this,"aborted",void 0),d(this,"touches",void 0),this.reset(),this.numTouches=e.numTouches}reset(){delete this.centroid,delete this.startTime,delete this.touches,this.aborted=!1}touchstart(e,n,r){(this.centroid||r.length>this.numTouches)&&(this.aborted=!0),!this.aborted&&(this.startTime===void 0&&(this.startTime=e.timeStamp),r.length===this.numTouches&&(this.centroid=dC(n),this.touches=Ja(r,n)))}touchmove(e,n,r){if(this.aborted||!this.centroid)return;const i=Ja(r,n);for(const o in this.touches){const s=this.touches[o],a=i[o];(!a||a.dist(s)>Hu)&&(this.aborted=!0)}}touchend(e,n,r){if((!this.centroid||e.timeStamp-this.startTime>pC)&&(this.aborted=!0),r.length===0){const i=!this.aborted&&this.centroid;if(this.reset(),i)return i}}}class eu{constructor(e){d(this,"singleTap",void 0),d(this,"numTaps",void 0),d(this,"lastTime",void 0),d(this,"lastTap",void 0),d(this,"count",void 0),this.singleTap=new _C(e),this.numTaps=e.numTaps,this.reset()}reset(){this.lastTime=1/0,delete this.lastTap,this.count=0,this.singleTap.reset()}touchstart(e,n,r){this.singleTap.touchstart(e,n,r)}touchmove(e,n,r){this.singleTap.touchmove(e,n,r)}touchend(e,n,r){const i=this.singleTap.touchend(e,n,r);if(i){const o=e.timeStamp-this.lastTime<u_,s=!this.lastTap||this.lastTap.dist(i)<Hu;if((!o||!s)&&this.reset(),this.count++,this.lastTime=e.timeStamp,this.lastTap=i,this.count===this.numTaps)return this.reset(),i}}}class vC{constructor(){d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_swipePoint",void 0),d(this,"_swipeTouch",void 0),d(this,"_tapTime",void 0),d(this,"_tapPoint",void 0),d(this,"_tap",void 0),this._tap=new eu({numTouches:1,numTaps:1}),this.reset()}reset(){this._active=!1,delete this._swipePoint,delete this._swipeTouch,delete this._tapTime,delete this._tapPoint,this._tap.reset()}touchstart(e,n,r){if(!this._swipePoint)if(!this._tapTime)this._tap.touchstart(e,n,r);else{const i=n[0],o=e.timeStamp-this._tapTime<u_,s=this._tapPoint.dist(i)<Hu;!o||!s?this.reset():r.length>0&&(this._swipePoint=i,this._swipeTouch=r[0].identifier)}}touchmove(e,n,r){if(!this._tapTime)this._tap.touchmove(e,n,r);else if(this._swipePoint){if(r[0].identifier!==this._swipeTouch)return;const i=n[0],o=i.y-this._swipePoint.y;return this._swipePoint=i,e.preventDefault(),this._active=!0,{zoomDelta:o/128}}}touchend(e,n,r){if(this._tapTime)this._swipePoint&&r.length===0&&this.reset();else{const i=this._tap.touchend(e,n,r);i&&(this._tapTime=e.timeStamp,this._tapPoint=i)}}touchcancel(){this.reset()}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class mC{constructor(e){d(this,"_tr",void 0),d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_zoomIn",void 0),d(this,"_zoomOut",void 0),this._tr=new Ui(e),this._zoomIn=new eu({numTouches:1,numTaps:2}),this._zoomOut=new eu({numTouches:2,numTaps:1}),this.reset()}reset(){this._active=!1,this._zoomIn.reset(),this._zoomOut.reset()}touchstart(e,n,r){this._zoomIn.touchstart(e,n,r),this._zoomOut.touchstart(e,n,r)}touchmove(e,n,r){this._zoomIn.touchmove(e,n,r),this._zoomOut.touchmove(e,n,r)}touchend(e,n,r){const i=this._zoomIn.touchend(e,n,r),o=this._zoomOut.touchend(e,n,r),s=this._tr;if(i)return this._active=!0,e.preventDefault(),setTimeout(()=>this.reset(),0),{cameraAnimation:a=>a.easeTo({duration:300,zoom:s.zoom+1,around:s.unproject(i)},{originalEvent:e})};if(o)return this._active=!0,e.preventDefault(),setTimeout(()=>this.reset(),0),{cameraAnimation:a=>a.easeTo({duration:300,zoom:s.zoom-1,around:s.unproject(o)},{originalEvent:e})}}touchcancel(){this.reset()}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class gC{constructor(e,n){d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_touches",void 0),d(this,"_clickTolerance",void 0),d(this,"_sum",void 0),d(this,"_map",void 0),this._clickTolerance=e.clickTolerance||1,this._map=n,this.reset()}reset(){this._active=!1,this._touches={},this._sum=new pe(0,0)}minTouchs(){return this._map.cooperativeGestures.isEnabled()?2:1}touchstart(e,n,r){return this._calculateTransform(e,n,r)}touchmove(e,n,r){if(!(!this._active||r.length<this.minTouchs()))return e.preventDefault(),this._calculateTransform(e,n,r)}touchend(e,n,r){this._calculateTransform(e,n,r),this._active&&r.length<this.minTouchs()&&this.reset()}touchcancel(){this.reset()}_calculateTransform(e,n,r){r.length>0&&(this._active=!0);const i=Ja(r,n),o=new pe(0,0),s=new pe(0,0);let a=0;for(const c in i){const h=i[c],f=this._touches[c];f&&(o._add(h),s._add(h.sub(f)),a++,i[c]=h)}if(this._touches=i,a<this.minTouchs()||!s.mag())return;const u=s.div(a);return this._sum._add(u),this._sum.mag()<this._clickTolerance?void 0:{around:o.div(a),panDelta:u}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Xu{constructor(){d(this,"_enabled",void 0),d(this,"_active",void 0),d(this,"_firstTwoTouches",void 0),d(this,"_vector",void 0),d(this,"_startVector",void 0),d(this,"_aroundCenter",void 0),this.reset()}reset(){this._active=!1,delete this._firstTwoTouches}touchstart(e,n,r){this._firstTwoTouches||r.length<2||(this._firstTwoTouches=[r[0].identifier,r[1].identifier],this._start([n[0],n[1]]))}touchmove(e,n,r){if(!this._firstTwoTouches)return;e.preventDefault();const[i,o]=this._firstTwoTouches,s=ho(r,n,i),a=ho(r,n,o);if(!s||!a)return;const u=this._aroundCenter?null:s.add(a).div(2);return this._move([s,a],u,e)}touchend(e,n,r){if(!this._firstTwoTouches)return;const[i,o]=this._firstTwoTouches,s=ho(r,n,i),a=ho(r,n,o);s&&a||(this._active&&ee.suppressClick(),this.reset())}touchcancel(){this.reset()}enable(e){this._enabled=!0,this._aroundCenter=!!e&&e.around==="center"}disable(){this._enabled=!1,this.reset()}isEnabled(){return!!this._enabled}isActive(){return!!this._active}}function ho(t,e,n){for(let r=0;r<t.length;r++)if(t[r].identifier===n)return e[r]}const EC=.1;function Tf(t,e){return Math.log(t/e)/Math.LN2}class yC extends Xu{constructor(...e){super(...e),d(this,"_distance",void 0),d(this,"_startDistance",void 0)}reset(){super.reset(),delete this._distance,delete this._startDistance}_start(e){this._startDistance=this._distance=e[0].dist(e[1])}_move(e,n){const r=this._distance;if(this._distance=e[0].dist(e[1]),!(!this._active&&Math.abs(Tf(this._distance,this._startDistance))<EC))return this._active=!0,{zoomDelta:Tf(this._distance,r),pinchAround:n}}}const TC=25;function Af(t,e){return t.angleWith(e)*180/Math.PI}class AC extends Xu{constructor(...e){super(...e),d(this,"_minDiameter",void 0)}reset(){super.reset(),delete this._minDiameter,delete this._startVector,delete this._vector}_start(e){this._startVector=this._vector=e[0].sub(e[1]),this._minDiameter=e[0].dist(e[1])}_move(e,n,r){const i=this._vector;if(this._vector=e[0].sub(e[1]),!(!this._active&&this._isBelowThreshold(this._vector)))return this._active=!0,{bearingDelta:Af(this._vector,i),pinchAround:n}}_isBelowThreshold(e){this._minDiameter=Math.min(this._minDiameter,e.mag());const n=Math.PI*this._minDiameter,r=TC/n*360,i=Af(e,this._startVector);return Math.abs(i)<r}}function na(t){return Math.abs(t.y)>Math.abs(t.x)}const SC=100;class RC extends Xu{constructor(e){super(),d(this,"_valid",void 0),d(this,"_firstMove",void 0),d(this,"_lastPoints",void 0),d(this,"_map",void 0),d(this,"_currentTouchCount",0),this._map=e}reset(){super.reset(),this._valid=void 0,delete this._firstMove,delete this._lastPoints}touchstart(e,n,r){super.touchstart(e,n,r),this._currentTouchCount=r.length}_start(e){this._lastPoints=e,na(e[0].sub(e[1]))&&(this._valid=!1)}_move(e,n,r){if(this._map.cooperativeGestures.isEnabled()&&this._currentTouchCount<3)return;const i=e[0].sub(this._lastPoints[0]),o=e[1].sub(this._lastPoints[1]);return this._valid=this.gestureBeginsVertically(i,o,r.timeStamp),this._valid?(this._lastPoints=e,this._active=!0,{pitchDelta:(i.y+o.y)/2*-.5}):void 0}gestureBeginsVertically(e,n,r){if(this._valid!==void 0)return this._valid;const i=2,o=e.mag()>=i,s=n.mag()>=i;if(!o&&!s)return;if(!o||!s)return this._firstMove===void 0&&(this._firstMove=r),r-this._firstMove<SC?void 0:!1;const a=e.y>0==n.y>0;return na(e)&&na(n)&&a}}const ys={linearity:.3,easing:Nu(0,0,.3,1)},xC=Be({deceleration:2500,maxSpeed:1400},ys),CC=Be({deceleration:20,maxSpeed:1400},ys),bC=Be({deceleration:1e3,maxSpeed:360},ys),IC=Be({deceleration:1e3,maxSpeed:90},ys);class MC{constructor(e){d(this,"_map",void 0),d(this,"_inertiaBuffer",void 0),this._map=e,this.clear()}clear(){this._inertiaBuffer=[]}record(e){this._drainInertiaBuffer(),this._inertiaBuffer.push({time:bt.now(),settings:e})}_drainInertiaBuffer(){const e=this._inertiaBuffer,n=bt.now(),r=160;for(;e.length>0&&n-e[0].time>r;)e.shift()}_onMoveEnd(e){if(this._drainInertiaBuffer(),this._inertiaBuffer.length<2)return;const n={zoom:0,bearing:0,pitch:0,pan:new pe(0,0),pinchAround:void 0,around:void 0};for(const{settings:s}of this._inertiaBuffer)n.zoom+=s.zoomDelta||0,n.bearing+=s.bearingDelta||0,n.pitch+=s.pitchDelta||0,s.panDelta&&n.pan._add(s.panDelta),s.around&&(n.around=s.around),s.pinchAround&&(n.pinchAround=s.pinchAround);const i=this._inertiaBuffer[this._inertiaBuffer.length-1].time-this._inertiaBuffer[0].time,o={};if(n.pan.mag()){const s=po(n.pan.mag(),i,Be({},xC,e||{}));o.offset=n.pan.mult(s.amount/n.pan.mag()),o.center=this._map.transform.center,fo(o,s)}if(n.zoom){const s=po(n.zoom,i,CC);o.zoom=this._map.transform.zoom+s.amount,fo(o,s)}if(n.bearing){const s=po(n.bearing,i,bC);o.bearing=this._map.transform.bearing+Wt(s.amount,-179,179),fo(o,s)}if(n.pitch){const s=po(n.pitch,i,IC);o.pitch=this._map.transform.pitch+s.amount,fo(o,s)}if(o.zoom||o.bearing){const s=n.pinchAround===void 0?n.around:n.pinchAround;o.around=s?this._map.unproject(s):this._map.getCenter()}return this.clear(),Be(o,{noMoveStart:!0})}}function fo(t,e){(!t.duration||t.duration<e.duration)&&(t.duration=e.duration,t.easing=e.easing)}function po(t,e,n){const{maxSpeed:r,linearity:i,deceleration:o}=n,s=Wt(t*i/(e/1e3),-r,r),a=Math.abs(s)/(o*i);return{easing:n.easing,duration:a*1e3,amount:s*(a/2)}}const _o=t=>t.zoom||t.drag||t.pitch||t.rotate;class OC extends le{constructor(e,n){super(e),d(this,"type","renderFrame"),d(this,"timeStamp",void 0),this.timeStamp=n}}function ra(t){return t.panDelta&&t.panDelta.mag()||t.zoomDelta||t.bearingDelta||t.pitchDelta}class PC{constructor(e,n){d(this,"_map",void 0),d(this,"_el",void 0),d(this,"_handlers",void 0),d(this,"_eventsInProgress",void 0),d(this,"_frameId",void 0),d(this,"_inertia",void 0),d(this,"_bearingSnap",void 0),d(this,"_handlersById",void 0),d(this,"_updatingCamera",void 0),d(this,"_changes",void 0),d(this,"_zoom",void 0),d(this,"_previousActiveHandlers",void 0),d(this,"_listeners",void 0),d(this,"handleWindowEvent",i=>{this.handleEvent(i,`${i.type}Window`)}),d(this,"handleEvent",(i,o)=>{if(i.type==="blur"){this.stop(!0);return}this._updatingCamera=!0;const s=i.type==="renderFrame"?void 0:i,a={needsRenderFrame:!1},u={},l={},c=i.touches,h=c?this._getMapTouches(c):void 0,f=h?ee.touchPos(this._map.getCanvasContainer(),h):ee.mousePos(this._map.getCanvasContainer(),i);for(const{handlerName:v,handler:m,allowed:y}of this._handlers){if(!m.isEnabled())continue;let T;this._blockedByActive(l,y,v)?m.reset():m[o||i.type]&&(T=m[o||i.type](i,f,h),this.mergeHandlerResult(a,u,T,v,s),T&&T.needsRenderFrame&&this._triggerRenderFrame()),(T||m.isActive())&&(l[v]=m)}const p={};for(const v in this._previousActiveHandlers)l[v]||(p[v]=s);this._previousActiveHandlers=l,(Object.keys(p).length||ra(a))&&(this._changes.push([a,u,p]),this._triggerRenderFrame()),(Object.keys(l).length||ra(a))&&this._map._stop(!0),this._updatingCamera=!1;const{cameraAnimation:_}=a;_&&(this._inertia.clear(),this._fireEvents({},{},!0),this._changes=[],_(this._map))}),this._map=e,this._el=this._map.getCanvasContainer(),this._handlers=[],this._handlersById={},this._changes=[],this._inertia=new MC(e),this._bearingSnap=n.bearingSnap||7,this._previousActiveHandlers={},this._eventsInProgress={},this._addDefaultHandlers(n);const r=this._el;this._listeners=[[r,"touchstart",{passive:!0}],[r,"touchmove",{passive:!1}],[r,"touchend",void 0],[r,"touchcancel",void 0],[r,"mousedown",void 0],[r,"mousemove",void 0],[r,"mouseup",void 0],[document,"mousemove",{capture:!0}],[document,"mouseup",void 0],[r,"mouseover",void 0],[r,"mouseout",void 0],[r,"dblclick",void 0],[r,"click",void 0],[r,"keydown",{capture:!1}],[r,"keyup",void 0],[r,"wheel",{passive:!1}],[r,"contextmenu",void 0],[window,"blur",void 0]];for(const[i,o,s]of this._listeners)ee.addEventListener(i,o,i===document?this.handleWindowEvent:this.handleEvent,s)}destroy(){for(const[e,n,r]of this._listeners)ee.removeEventListener(e,n,e===document?this.handleWindowEvent:this.handleEvent,r)}_addDefaultHandlers(e){const n=this._map,r=n.getCanvasContainer();this._add("mapEvent",new Kx(n,e));const i=n.boxZoom=new Wx(n,e);this._add("boxZoom",i),e.interactive&&e.boxZoom&&i.enable();const o=n.cooperativeGestures=new $x(n,e.cooperativeGestures);this._add("cooperativeGestures",o),e.cooperativeGestures&&o.enable();const s=new mC(n),a=new jx(n);n.doubleClickZoom=new lC(a,s),this._add("tapZoom",s),this._add("clickZoom",a),e.interactive&&e.doubleClickZoom&&n.doubleClickZoom.enable();const u=new vC;this._add("tapDragZoom",u);const l=n.touchPitch=new RC(n);this._add("touchPitch",l),e.interactive&&e.touchPitch&&n.touchPitch.enable(e.touchPitch);const c=rC(e),h=iC(e);n.dragRotate=new hC(e,c,h),this._add("mouseRotate",c,["mousePitch"]),this._add("mousePitch",h,["mouseRotate"]),e.interactive&&e.dragRotate&&n.dragRotate.enable();const f=nC(e),p=new gC(e,n);n.dragPan=new cC(r,f,p),this._add("mousePan",f),this._add("touchPan",p,["touchZoom","touchRotate"]),e.interactive&&e.dragPan&&n.dragPan.enable(e.dragPan);const _=new AC,v=new yC;n.touchZoomRotate=new fC(r,v,_,u),this._add("touchRotate",_,["touchPan","touchZoom"]),this._add("touchZoom",v,["touchPan","touchRotate"]),e.interactive&&e.touchZoomRotate&&n.touchZoomRotate.enable(e.touchZoomRotate);const m=n.scrollZoom=new uC(n,()=>this._triggerRenderFrame());this._add("scrollZoom",m,["mousePan"]),e.interactive&&e.scrollZoom&&n.scrollZoom.enable(e.scrollZoom);const y=n.keyboard=new Yx(n);this._add("keyboard",y),e.interactive&&e.keyboard&&n.keyboard.enable(),this._add("blockableMapEvent",new qx(n))}_add(e,n,r){this._handlers.push({handlerName:e,handler:n,allowed:r}),this._handlersById[e]=n}stop(e){if(!this._updatingCamera){for(const{handler:n}of this._handlers)n.reset();this._inertia.clear(),this._fireEvents({},{},e),this._changes=[]}}isActive(){for(const{handler:e}of this._handlers)if(e.isActive())return!0;return!1}isZooming(){return!!this._eventsInProgress.zoom||this._map.scrollZoom.isZooming()}isRotating(){return!!this._eventsInProgress.rotate}isMoving(){return!!_o(this._eventsInProgress)||this.isZooming()}_blockedByActive(e,n,r){for(const i in e)if(i!==r&&(!n||n.indexOf(i)<0))return!0;return!1}_getMapTouches(e){const n=[];for(const r of e){const i=r.target;this._el.contains(i)&&n.push(r)}return n}mergeHandlerResult(e,n,r,i,o){if(!r)return;Be(e,r);const s={handlerName:i,originalEvent:r.originalEvent||o};r.zoomDelta!==void 0&&(n.zoom=s),r.panDelta!==void 0&&(n.drag=s),r.pitchDelta!==void 0&&(n.pitch=s),r.bearingDelta!==void 0&&(n.rotate=s)}_applyChanges(){const e={},n={},r={};for(const[i,o,s]of this._changes)i.panDelta&&(e.panDelta=(e.panDelta||new pe(0,0))._add(i.panDelta)),i.zoomDelta&&(e.zoomDelta=(e.zoomDelta||0)+i.zoomDelta),i.bearingDelta&&(e.bearingDelta=(e.bearingDelta||0)+i.bearingDelta),i.pitchDelta&&(e.pitchDelta=(e.pitchDelta||0)+i.pitchDelta),i.around!==void 0&&(e.around=i.around),i.pinchAround!==void 0&&(e.pinchAround=i.pinchAround),i.noInertia&&(e.noInertia=i.noInertia),Be(n,o),Be(r,s);this._updateMapTransform(e,n,r),this._changes=[]}_updateMapTransform(e,n,r){const i=this._map,o=i._getTransformForUpdate();if(!ra(e))return this._fireEvents(n,r,!0);const{panDelta:s,zoomDelta:a,bearingDelta:u,pitchDelta:l,pinchAround:c}=e;let{around:h}=e;c!==void 0&&(h=c),i._stop(!0),h=h||i.transform.centerPoint;const f=o.pointLocation(s?h.sub(s):h);u&&(o.bearing+=u),l&&(o.pitch+=l),a&&(o.zoom+=a),o.setLocationAtPoint(f,h),i._applyUpdatedTransform(o),this._map._update(),e.noInertia||this._inertia.record(e),this._fireEvents(n,r,!0)}_fireEvents(e,n,r){const i=_o(this._eventsInProgress),o=_o(e),s={};for(const h in e){const{originalEvent:f}=e[h];this._eventsInProgress[h]||(s[`${h}start`]=f),this._eventsInProgress[h]=e[h]}!i&&o&&this._fireEvent("movestart",o.originalEvent);for(const h in s)this._fireEvent(h,s[h]);o&&this._fireEvent("move",o.originalEvent);for(const h in e){const{originalEvent:f}=e[h];this._fireEvent(h,f)}const a={};let u;for(const h in this._eventsInProgress){const{handlerName:f,originalEvent:p}=this._eventsInProgress[h];this._handlersById[f].isActive()||(delete this._eventsInProgress[h],u=n[f]||p,a[`${h}end`]=u)}for(const h in a)this._fireEvent(h,a[h]);const l=_o(this._eventsInProgress);if(r&&((i||o)&&!l)){this._updatingCamera=!0;const h=this._inertia._onMoveEnd(this._map.dragPan._inertiaOptions),f=p=>p!==0&&-this._bearingSnap<p&&p<this._bearingSnap;h&&(h.essential||!bt.prefersReducedMotion)?(f(h.bearing||this._map.getBearing())&&(h.bearing=0),h.freezeElevation=!0,this._map.easeTo(h,{originalEvent:u})):(this._map.fire(new le("moveend",{originalEvent:u})),f(this._map.getBearing())&&this._map.resetNorth()),this._updatingCamera=!1}}_fireEvent(e,n){this._map.fire(new le(e,n?{originalEvent:n}:{}))}_requestFrame(){return this._map.triggerRepaint(),this._map._renderTaskQueue.add(e=>{delete this._frameId,this.handleEvent(new OC("renderFrame",e)),this._applyChanges()})}_triggerRenderFrame(){this._frameId===void 0&&(this._frameId=this._requestFrame())}}class FC{constructor(){d(this,"_queue",void 0),d(this,"_id",void 0),d(this,"_cleared",void 0),d(this,"_currentlyRunning",void 0),this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1}add(e){const n=++this._id;return this._queue.push({callback:e,id:n,cancelled:!1}),n}remove(e){const n=this._currentlyRunning,r=n?this._queue.concat(n):this._queue;for(const i of r)if(i.id===e){i.cancelled=!0;return}}run(e=0){if(this._currentlyRunning)throw new Error("Attempting to run(), but is already running.");const n=this._currentlyRunning=this._queue;this._queue=[];for(const r of n)if(!r.cancelled&&(r.callback(e),this._cleared))break;this._cleared=!1,this._currentlyRunning=!1}clear(){this._currentlyRunning&&(this._cleared=!0),this._queue=[]}}function BC(t,e){var n=typeof my<"u"&&!!my&&typeof my.showToast=="function"&&my.isFRM!==!0,r=typeof wx<"u"&&wx!==null&&(typeof wx.request<"u"||typeof wx.miniProgram<"u");if(!(n||r)&&(e||(e=document),!!e)){var i=e.head||e.getElementsByTagName("head")[0];if(!i){i=e.createElement("head");var o=e.body||e.getElementsByTagName("body")[0];o?o.parentNode.insertBefore(i,o):e.documentElement.appendChild(i)}var s=e.createElement("style");return s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(e.createTextNode(t)),i.appendChild(s),s}}BC(`.l7-map {
  font:
    12px/20px 'Helvetica Neue',
    Arial,
    Helvetica,
    sans-serif;
  overflow: hidden;
  position: relative;
  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
}

.l7-canvas {
  position: absolute;
  left: 0;
  top: 0;
}

.l7-map:full-screen {
  width: 100%;
  height: 100%;
}

.l7-canary {
  background-color: salmon;
}

.l7-canvas-container.l7-interactive,
.l7-ctrl-group button.l7-ctrl-compass {
  cursor: grab;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.l7-canvas-container.l7-interactive.l7-track-pointer {
  cursor: pointer;
}

.l7-canvas-container.l7-interactive:active,
.l7-ctrl-group button.l7-ctrl-compass:active {
  cursor: grabbing;
}

.l7-canvas-container.l7-touch-zoom-rotate,
.l7-canvas-container.l7-touch-zoom-rotate .l7-canvas {
  touch-action: pan-x pan-y;
}

.l7-canvas-container.l7-touch-drag-pan,
.l7-canvas-container.l7-touch-drag-pan .l7-canvas {
  touch-action: pinch-zoom;
}

.l7-canvas-container.l7-touch-zoom-rotate.l7-touch-drag-pan,
.l7-canvas-container.l7-touch-zoom-rotate.l7-touch-drag-pan .l7-canvas {
  touch-action: none;
}

.l7-canvas-container.l7-touch-drag-pan.l7-cooperative-gestures,
.l7-canvas-container.l7-touch-drag-pan.l7-cooperative-gestures .l7-canvas {
  touch-action: pan-x pan-y;
}

.l7-cooperative-gesture-screen {
  background: rgba(0 0 0 / 40%);
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1rem;
  font-size: 1.4em;
  line-height: 1.2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease 1s;
  z-index: 99999;
}

.l7-cooperative-gesture-screen.l7-show {
  opacity: 1;
  transition: opacity 0.05s;
}

.l7-cooperative-gesture-screen .l7-mobile-message {
  display: none;
}

@media (hover: none), (width <= 480px) {
  .l7-cooperative-gesture-screen .l7-desktop-message {
    display: none;
  }

  .l7-cooperative-gesture-screen .l7-mobile-message {
    display: block;
  }
}

.l7-ctrl-top-left,
.l7-ctrl-top-right,
.l7-ctrl-bottom-left,
.l7-ctrl-bottom-right {
  position: absolute;
  pointer-events: none;
  z-index: 2;
}

.l7-ctrl-top-left {
  top: 0;
  left: 0;
}

.l7-ctrl-top-right {
  top: 0;
  right: 0;
}

.l7-ctrl-bottom-left {
  bottom: 0;
  left: 0;
}

.l7-ctrl-bottom-right {
  right: 0;
  bottom: 0;
}

.l7-ctrl {
  clear: both;
  pointer-events: auto;

  /* workaround for a Safari bug https://github.com/mapbox/mapbox-gl-js/issues/8185 */
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}

.l7-ctrl-top-left .l7-ctrl {
  margin: 10px 0 0 10px;
  float: left;
}

.l7-ctrl-top-right .l7-ctrl {
  margin: 10px 10px 0 0;
  float: right;
}

.l7-ctrl-bottom-left .l7-ctrl {
  margin: 0 0 10px 10px;
  float: left;
}

.l7-ctrl-bottom-right .l7-ctrl {
  margin: 0 10px 10px 0;
  float: right;
}

.l7-crosshair,
.l7-crosshair .l7-interactive,
.l7-crosshair .l7-interactive:active {
  cursor: crosshair;
}

.l7-boxzoom {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background: #fff;
  border: 2px dotted #202020;
  opacity: 0.5;
  z-index: 10;
}
`);const Bo=-2,l_=22,En=0,c_=60,vo=85,NC={interactive:!0,bearingSnap:7,scrollZoom:!0,minZoom:Bo,maxZoom:l_,minPitch:En,maxPitch:c_,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,cooperativeGestures:!1,trackResize:!0,center:[0,0],zoom:0,bearing:0,pitch:0,renderWorldCopies:!0,fadeDuration:300,clickTolerance:3,pitchWithRotate:!0};let DC=class extends Xx{constructor(e){const n=D(D({},NC),e);if(n.minZoom!=null&&n.maxZoom!=null&&n.minZoom>n.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom");if(n.minPitch!=null&&n.maxPitch!=null&&n.minPitch>n.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch");if(n.minPitch!=null&&n.minPitch<En)throw new Error(`minPitch must be greater than or equal to ${En}`);if(n.maxPitch!=null&&n.maxPitch>vo)throw new Error(`maxPitch must be less than or equal to ${vo}`);const r=new Lu(n.minZoom,n.maxZoom,n.minPitch,n.maxPitch,n.renderWorldCopies);if(super(r,{bearingSnap:n.bearingSnap}),d(this,"_container",void 0),d(this,"_canvasContainer",void 0),d(this,"_interactive",void 0),d(this,"_frameRequest",void 0),d(this,"_loaded",void 0),d(this,"_idleTriggered",!1),d(this,"_fullyLoaded",void 0),d(this,"_trackResize",void 0),d(this,"_resizeObserver",void 0),d(this,"_preserveDrawingBuffer",void 0),d(this,"_failIfMajorPerformanceCaveat",void 0),d(this,"_fadeDuration",void 0),d(this,"_crossSourceCollisions",void 0),d(this,"_crossFadingFactor",1),d(this,"_collectResourceTiming",void 0),d(this,"_renderTaskQueue",new FC),d(this,"_mapId",Ox()),d(this,"_removed",void 0),d(this,"_clickTolerance",void 0),d(this,"version",void 0),d(this,"mapSize",void 0),d(this,"scrollZoom",void 0),d(this,"boxZoom",void 0),d(this,"dragRotate",void 0),d(this,"dragPan",void 0),d(this,"keyboard",void 0),d(this,"doubleClickZoom",void 0),d(this,"touchZoomRotate",void 0),d(this,"touchPitch",void 0),d(this,"cooperativeGestures",void 0),d(this,"_onMapScroll",i=>{if(i.target===this._container)return this._container.scrollTop=0,this._container.scrollLeft=0,!1}),this._interactive=n.interactive,this._trackResize=n.trackResize===!0,this._bearingSnap=n.bearingSnap,this._fadeDuration=n.fadeDuration,this._clickTolerance=n.clickTolerance,this.version=e.version,this.mapSize=e.mapSize,typeof n.container=="string"){if(this._container=document.getElementById(n.container),!this._container)throw new Error(`Container '${n.container}' not found.`)}else if(n.container instanceof HTMLElement)this._container=n.container;else throw new Error("Invalid type: 'container' must be a String or HTMLElement.");if(n.maxBounds&&this.setMaxBounds(n.maxBounds),this._setupContainer(),this.on("move",()=>this._update()).on("moveend",()=>this._update()).on("zoom",()=>this._update()).once("idle",()=>{this._idleTriggered=!0}),typeof window<"u"){let i=!1;const o=we.throttle(s=>{this._trackResize&&!this._removed&&this.resize(s)._update()},50);this._resizeObserver=new ResizeObserver(s=>{if(!i){i=!0;return}o(s)}),this._resizeObserver.observe(this._container)}this.handlers=new PC(this,n),this.jumpTo({center:n.center,zoom:n.zoom,bearing:n.bearing,pitch:n.pitch}),n.bounds&&(this.resize(),this.fitBounds(n.bounds,Be({},n.fitBoundsOptions,{duration:0}))),this.resize()}_getMapId(){return this._mapId}calculateCameraOptionsFromTo(e,n,r,i){return super.calculateCameraOptionsFromTo(e,n,r,i)}resize(e){var n;const r=this._containerDimensions(),i=r[0],o=r[1];this.transform.resize(i,o),(n=this._requestedCameraState)===null||n===void 0||n.resize(i,o);const s=!this._moving;return s&&(this.stop(),this.fire(new le("movestart",e)).fire(new le("move",e))),this.fire(new le("resize",e)),s&&this.fire(new le("moveend",e)),this}getBounds(){return this.transform.getBounds()}getMaxBounds(){return this.transform.getMaxBounds()}setMaxBounds(e){return this.transform.setMaxBounds(e&&Bt.convert(e)),this._update()}setMinZoom(e){if(e=e??Bo,e>=Bo&&e<=this.transform.maxZoom)return this.transform.minZoom=e,this._update(),this.getZoom()<e&&this.setZoom(e),this;throw new Error(`minZoom must be between ${Bo} and the current maxZoom, inclusive`)}getMinZoom(){return this.transform.minZoom}setMaxZoom(e){if(e=e??l_,e>=this.transform.minZoom)return this.transform.maxZoom=e,this.getZoom()>e&&this.setZoom(e),this;throw new Error("maxZoom must be greater than the current minZoom")}getMaxZoom(){return this.transform.maxZoom}setMinPitch(e){if(e=e??En,e<En)throw new Error(`minPitch must be greater than or equal to ${En}`);if(e>=En&&e<=this.transform.maxPitch)return this.transform.minPitch=e,this.getPitch()<e&&this.setPitch(e),this;throw new Error(`minPitch must be between ${En} and the current maxPitch, inclusive`)}getMinPitch(){return this.transform.minPitch}setMaxPitch(e){if(e=e??c_,e>vo)throw new Error(`maxPitch must be less than or equal to ${vo}`);if(e>=this.transform.minPitch)return this.transform.maxPitch=e,this.getPitch()>e&&this.setPitch(e),this;throw new Error("maxPitch must be greater than the current minPitch")}getMaxPitch(){return this.transform.maxPitch}getRenderWorldCopies(){return this.transform.renderWorldCopies}setRenderWorldCopies(e){this.transform.renderWorldCopies=e}project(e){return this.transform.locationPoint(me.convert(e))}unproject(e){return this.transform.pointLocation(pe.convert(e))}isMoving(){var e;return this._moving||((e=this.handlers)===null||e===void 0?void 0:e.isMoving())}isZooming(){var e;return this._zooming||((e=this.handlers)===null||e===void 0?void 0:e.isZooming())}isRotating(){var e;return this._rotating||((e=this.handlers)===null||e===void 0?void 0:e.isRotating())}on(e,n){return super.on(e,n)}once(e,n){return super.once(e,n)}off(e,n){return super.off(e,n)}getContainer(){return this._container}getCanvasContainer(){return this._canvasContainer}_containerDimensions(){let e=0,n=0;return this._container&&(e=this._container.clientWidth||400,n=this._container.clientHeight||300),[e,n]}_setupContainer(){const e=this._container;e.classList.add("l7-map");const n=this._canvasContainer=ee.create("div","l7-canvas-container",e);this._interactive&&n.classList.add("l7-interactive"),this._container.addEventListener("scroll",this._onMapScroll,!1)}_update(){return this.triggerRepaint(),this}_requestRenderFrame(e){return this._update(),this._renderTaskQueue.add(e)}_cancelRenderFrame(e){this._renderTaskQueue.remove(e)}_render(e){if(this._renderTaskQueue.run(e),!this._removed)return this.fire(new le("render")),this.isMoving()||this.fire(new le("idle")),this}remove(){var e;this._frameRequest&&(this._frameRequest.abort(),this._frameRequest=null),this._renderTaskQueue.clear(),this.handlers.destroy(),delete this.handlers,(e=this._resizeObserver)===null||e===void 0||e.disconnect(),ee.remove(this._canvasContainer),this._container.classList.remove("l7-map"),this._removed=!0,this.fire(new le("remove"))}triggerRepaint(){this._frameRequest||(this._frameRequest=new AbortController,bt.frameAsync(this._frameRequest).then(e=>{this._frameRequest=null,this._render(e)}).catch(()=>{}))}getCameraTargetElevation(){return this.transform.elevation}};const wC={light:"mapbox://styles/zcxduo/ck2ypyb1r3q9o1co1766dex29",dark:"mapbox://styles/zcxduo/ck241p6413s0b1cpayzldv7x7",normal:"mapbox://styles/mapbox/streets-v11",blank:{version:8,sources:{},layers:[{id:"background",type:"background",layout:{visibility:"none"}}]}},Sf={mapmove:"move",camerachange:"move",zoomchange:"zoom",dragging:"drag"},LC=12;class UC{constructor(e){d(this,"version","DEFAUlTMAP"),d(this,"map",void 0),d(this,"simpleMapCoord",new n_),d(this,"bgColor","rgba(0.0, 0.0, 0.0, 0.0)"),d(this,"zoomOffset",0),d(this,"config",void 0),d(this,"configService",void 0),d(this,"coordinateSystemService",void 0),d(this,"eventEmitter",void 0),d(this,"evtCbProxyMap",new globalThis.Map),d(this,"pendingHandlers",[]),d(this,"markerContainer",void 0),d(this,"cameraChangedCallback",void 0),d(this,"$mapContainer",void 0),d(this,"handleCameraChanged",n=>{const{lat:r,lng:i}=this.map.getCenter();this.emit("mapchange"),this.viewport.syncWithMapCamera({bearing:this.map.getBearing(),center:[i,r],viewportHeight:this.map.transform.height,pitch:this.map.getPitch(),viewportWidth:this.map.transform.width,zoom:this.map.getZoom()-this.zoomOffset,cameraHeight:0}),this.updateCoordinateSystemService(),this.cameraChangedCallback(this.viewport)}),this.config=e.mapConfig,this.configService=e.globalConfigService,this.coordinateSystemService=e.coordinateSystemService,this.eventEmitter=new pt.EventEmitter}setBgColor(e){this.bgColor=e}addMarkerContainer(){const e=this.map.getCanvasContainer();this.markerContainer=We("div","l7-marker-container",e),this.markerContainer.setAttribute("tabindex","-1")}getMarkerContainer(){return this.markerContainer}getOverlayContainer(){}getCanvasOverlays(){}on(e,n){if(dc.indexOf(e)!==-1){this.eventEmitter.on(e,n);return}if(!this.map){this.pendingHandlers.push({type:e,handler:n});return}const r=Sf[e]||e;let i=this.evtCbProxyMap.get(r);if(i||(i=new globalThis.Map,this.evtCbProxyMap.set(r,i)),!i.has(n)){const o=(...s)=>{try{n(...s)}catch(a){console.error("Error in map event handler",a)}};i.set(n,o),this.map.on(r,o)}}off(e,n){if(dc.indexOf(e)!==-1){this.eventEmitter.off(e,n);return}if(!this.map){this.pendingHandlers=this.pendingHandlers.filter(o=>!(o.type===e&&o.handler===n));return}const r=Sf[e]||e,i=this.evtCbProxyMap.get(r);if(i){const o=i.get(n);o&&(this.map.off(r,o),i.delete(n)),i.size===0&&this.evtCbProxyMap.delete(r)}}getContainer(){return this.map.getContainer()}getMapCanvasContainer(){return this.map.getCanvasContainer()}getSize(){if(this.version==="SIMPLE")return this.simpleMapCoord.getSize();const e=this.map.transform;return[e.width,e.height]}getType(){return"default"}getZoom(){return this.map.getZoom()-this.zoomOffset}setZoom(e){return this.map.setZoom(e+this.zoomOffset)}getCenter(){return this.map.getCenter()}setCenter(e){this.map.setCenter(e)}getPitch(){return this.map.getPitch()}getRotation(){return this.map.getBearing()}getBounds(){return this.map.getBounds().toArray()}getMinZoom(){return this.map.getMinZoom()}getMaxZoom(){return this.map.getMaxZoom()}setRotation(e){this.map.setBearing(e)}zoomIn(e,n){this.map.zoomIn(e,n)}zoomOut(e,n){this.map.zoomOut(e,n)}setPitch(e){return this.map.setPitch(e)}panTo(e){this.map.panTo(e)}panBy(e=0,n=0){this.map.panBy([e,n])}fitBounds(e,n){this.map.fitBounds(e,n)}setMaxZoom(e){this.map.setMaxZoom(e)}setMinZoom(e){this.map.setMinZoom(e)}setMapStatus(e){e.doubleClickZoom===!0&&this.map.doubleClickZoom.enable(),e.doubleClickZoom===!1&&this.map.doubleClickZoom.disable(),e.dragEnable===!1&&this.map.dragPan.disable(),e.dragEnable===!0&&this.map.dragPan.enable(),e.rotateEnable===!1&&this.map.dragRotate.disable(),e.dragEnable===!0&&this.map.dragRotate.enable(),e.keyboardEnable===!1&&this.map.keyboard.disable(),e.keyboardEnable===!0&&this.map.keyboard.enable(),e.zoomEnable===!1&&this.map.scrollZoom.disable(),e.zoomEnable===!0&&this.map.scrollZoom.enable()}setZoomAndCenter(e,n){this.map.flyTo({zoom:e,center:n})}setMapStyle(e){var n;(n=this.map)===null||n===void 0||n.setStyle(this.getMapStyleValue(e))}meterToCoord(e,n){return 1}pixelToLngLat(e){return this.map.unproject(e)}lngLatToPixel(e){return this.map.project(e)}containerToLngLat(e){return this.map.unproject(e)}lngLatToContainer(e){return this.map.project(e)}getMapStyle(){try{var e;const n=(e=this.map.getStyle().sprite)!==null&&e!==void 0?e:"";return/^mapbox:\/\/sprites\/zcxduo\/\w+\/\w+$/.test(n)?n==null?void 0:n.replace(/\/\w+$/,"").replace(/sprites/,"styles"):n}catch{return""}}getMapStyleConfig(){return wC}getMapStyleValue(e){var n;return(n=this.getMapStyleConfig()[e])!==null&&n!==void 0?n:e}bindPendingEvents(){if(this.pendingHandlers.length===0)return;const e=this.pendingHandlers.slice();this.pendingHandlers=[],e.forEach(({type:n,handler:r})=>{this.on(n,r)})}destroy(){this.eventEmitter.removeAllListeners(),this.map&&(this.map.remove(),this.$mapContainer=null)}emit(e,...n){this.eventEmitter.emit(e,...n)}once(e,...n){this.eventEmitter.once(e,...n)}getMapContainer(){return this.$mapContainer}exportMap(e){var n;const r=(n=this.map)===null||n===void 0?void 0:n.getCanvas();return e==="jpg"?r==null?void 0:r.toDataURL("image/jpeg"):r==null?void 0:r.toDataURL("image/png")}onCameraChanged(e){this.cameraChangedCallback=e}creatMapContainer(e){let n=e;return typeof e=="string"&&(n=document.getElementById(e)),n}updateView(e){this.emit("mapchange"),this.viewport.syncWithMapCamera({bearing:e.bearing,center:e.center,viewportHeight:e.viewportHeight,pitch:e.pitch,viewportWidth:e.viewportWidth,zoom:e.zoom,cameraHeight:0}),this.updateCoordinateSystemService(),this.cameraChangedCallback(this.viewport)}updateCoordinateSystemService(){const{offsetCoordinate:e=!0}=this.config;this.viewport.getZoom()>LC&&e?this.coordinateSystemService.setCoordinateSystem($o.LNGLAT_OFFSET):this.coordinateSystemService.setCoordinateSystem($o.LNGLAT)}}const kC=["id","style","rotation","mapInstance","version","mapSize","interactive"];class zC extends UC{constructor(...e){super(...e),d(this,"version",Cx.DEFAULT),d(this,"viewport",void 0)}lngLatToCoord(e,n={x:0,y:0,z:0}){const{x:r,y:i}=this.lngLatToMercator(e,0);return[r-n.x,i-n.y]}lngLatToMercator(e,n){const{x:r=0,y:i=0,z:o=0}=jt.fromLngLat(e,n);return{x:r,y:i,z:o}}getModelMatrix(e,n,r,i=[1,1,1],o={x:0,y:0,z:0}){const s=jt.fromLngLat(e,n),a=s.meterInMercatorCoordinateUnits(),u=_s();return Ht(u,u,Ft(s.x-o.x,s.y-o.y,s.z||0-o.z)),Xt(u,u,Ft(a*i[0],-a*i[1],a*i[2])),vs(u,u,r[0]),tp(u,u,r[1]),Su(u,u,r[2]),u}init(){var e=this;return L(function*(){const n=e.config,{id:r="map",style:i="light",rotation:o=0,mapInstance:s,version:a="DEFAULTMAP",mapSize:u=1e4,interactive:l=!0}=n,c=Zt(n,kC);e.viewport=new xx,e.version=a,e.simpleMapCoord.setSize(u),a==="SIMPLE"&&c.center&&(c.center=e.simpleMapCoord.unproject(c.center)),s?(e.map=s,e.$mapContainer=e.map.getContainer()):(e.$mapContainer=e.creatMapContainer(r),e.map=new DC(D({container:e.$mapContainer,bearing:o,version:a,mapSize:u},c))),e.map.on("load",()=>{e.handleCameraChanged()}),l&&e.map.on("move",e.handleCameraChanged),setTimeout(()=>{e.handleCameraChanged()},100),e.handleCameraChanged(),e.bindPendingEvents()})()}creatMapContainer(e){let n=e;typeof e=="string"&&(n=document.getElementById(e));const r=document.createElement("div");return r.style.cssText+=`
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
    `,n.appendChild(r),r}exportMap(e){return""}setBgColor(e){this.bgColor=e,this.$mapContainer&&(this.$mapContainer.style.backgroundColor=e)}setMapStyle(e){}getCanvasOverlays(){return this.getContainer()}}class NM extends lx{getServiceConstructor(){return zC}}function It(t){return t==null}var VC=function(t,e,n){return t<e?e:t>n?n:t};function pr(t){return typeof t=="number"}var tu=function(t,e){return tu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},tu(t,e)};function Oe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");tu(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ce=function(){return Ce=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ce.apply(this,arguments)};function HC(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ar(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{l(r.next(c))}catch(h){s(h)}}function u(c){try{l(r.throw(c))}catch(h){s(h)}}function l(c){c.done?o(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function Sr(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Zn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pt(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function ei(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var h_={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(u,l,c){this.fn=u,this.context=l,this.once=c||!1}function o(u,l,c,h,f){if(typeof c!="function")throw new TypeError("The listener must be a function");var p=new i(c,h||u,f),_=n?n+l:l;return u._events[_]?u._events[_].fn?u._events[_]=[u._events[_],p]:u._events[_].push(p):(u._events[_]=p,u._eventsCount++),u}function s(u,l){--u._eventsCount===0?u._events=new r:delete u._events[l]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],c,h;if(this._eventsCount===0)return l;for(h in c=this._events)e.call(c,h)&&l.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},a.prototype.listeners=function(l){var c=n?n+l:l,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,p=h.length,_=new Array(p);f<p;f++)_[f]=h[f].fn;return _},a.prototype.listenerCount=function(l){var c=n?n+l:l,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(l,c,h,f,p,_){var v=n?n+l:l;if(!this._events[v])return!1;var m=this._events[v],y=arguments.length,T,S;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,f),!0;case 5:return m.fn.call(m.context,c,h,f,p),!0;case 6:return m.fn.call(m.context,c,h,f,p,_),!0}for(S=1,T=new Array(y-1);S<y;S++)T[S-1]=arguments[S];m.fn.apply(m.context,T)}else{var x=m.length,C;for(S=0;S<x;S++)switch(m[S].once&&this.removeListener(l,m[S].fn,void 0,!0),y){case 1:m[S].fn.call(m[S].context);break;case 2:m[S].fn.call(m[S].context,c);break;case 3:m[S].fn.call(m[S].context,c,h);break;case 4:m[S].fn.call(m[S].context,c,h,f);break;default:if(!T)for(C=1,T=new Array(y-1);C<y;C++)T[C-1]=arguments[C];m[S].fn.apply(m[S].context,T)}}return!0},a.prototype.on=function(l,c,h){return o(this,l,c,h,!1)},a.prototype.once=function(l,c,h){return o(this,l,c,h,!0)},a.prototype.removeListener=function(l,c,h,f){var p=n?n+l:l;if(!this._events[p])return this;if(!c)return s(this,p),this;var _=this._events[p];if(_.fn)_.fn===c&&(!f||_.once)&&(!h||_.context===h)&&s(this,p);else{for(var v=0,m=[],y=_.length;v<y;v++)(_[v].fn!==c||f&&!_[v].once||h&&_[v].context!==h)&&m.push(_[v]);m.length?this._events[p]=m.length===1?m[0]:m:s(this,p)}return this},a.prototype.removeAllListeners=function(l){var c;return l?(c=n?n+l:l,this._events[c]&&s(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(h_);var XC=h_.exports;const f_=Yt(XC);var R;(function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",t[t.FUNC_ADD=32774]="FUNC_ADD",t[t.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",t[t.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",t[t.BLEND_EQUATION=32777]="BLEND_EQUATION",t[t.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",t[t.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",t[t.BLEND_DST_RGB=32968]="BLEND_DST_RGB",t[t.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",t[t.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",t[t.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",t[t.BLEND_COLOR=32773]="BLEND_COLOR",t[t.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",t[t.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",t[t.LINE_WIDTH=2849]="LINE_WIDTH",t[t.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",t[t.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",t[t.CULL_FACE_MODE=2885]="CULL_FACE_MODE",t[t.FRONT_FACE=2886]="FRONT_FACE",t[t.DEPTH_RANGE=2928]="DEPTH_RANGE",t[t.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",t[t.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",t[t.DEPTH_FUNC=2932]="DEPTH_FUNC",t[t.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",t[t.STENCIL_FUNC=2962]="STENCIL_FUNC",t[t.STENCIL_FAIL=2964]="STENCIL_FAIL",t[t.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",t[t.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",t[t.STENCIL_REF=2967]="STENCIL_REF",t[t.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",t[t.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",t[t.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",t[t.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",t[t.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",t[t.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",t[t.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",t[t.VIEWPORT=2978]="VIEWPORT",t[t.SCISSOR_BOX=3088]="SCISSOR_BOX",t[t.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",t[t.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",t[t.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",t[t.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",t[t.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",t[t.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",t[t.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",t[t.RED_BITS=3410]="RED_BITS",t[t.GREEN_BITS=3411]="GREEN_BITS",t[t.BLUE_BITS=3412]="BLUE_BITS",t[t.ALPHA_BITS=3413]="ALPHA_BITS",t[t.DEPTH_BITS=3414]="DEPTH_BITS",t[t.STENCIL_BITS=3415]="STENCIL_BITS",t[t.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",t[t.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",t[t.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",t[t.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",t[t.SAMPLES=32937]="SAMPLES",t[t.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",t[t.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",t[t.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",t[t.VENDOR=7936]="VENDOR",t[t.RENDERER=7937]="RENDERER",t[t.VERSION=7938]="VERSION",t[t.IMPLEMENTATION_COLOR_READ_TYPE=35738]="IMPLEMENTATION_COLOR_READ_TYPE",t[t.IMPLEMENTATION_COLOR_READ_FORMAT=35739]="IMPLEMENTATION_COLOR_READ_FORMAT",t[t.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.BUFFER_SIZE=34660]="BUFFER_SIZE",t[t.BUFFER_USAGE=34661]="BUFFER_USAGE",t[t.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",t[t.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",t[t.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",t[t.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",t[t.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",t[t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",t[t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",t[t.CULL_FACE=2884]="CULL_FACE",t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK",t[t.BLEND=3042]="BLEND",t[t.DEPTH_TEST=2929]="DEPTH_TEST",t[t.DITHER=3024]="DITHER",t[t.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",t[t.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",t[t.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",t[t.SCISSOR_TEST=3089]="SCISSOR_TEST",t[t.STENCIL_TEST=2960]="STENCIL_TEST",t[t.NO_ERROR=0]="NO_ERROR",t[t.INVALID_ENUM=1280]="INVALID_ENUM",t[t.INVALID_VALUE=1281]="INVALID_VALUE",t[t.INVALID_OPERATION=1282]="INVALID_OPERATION",t[t.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",t[t.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",t[t.CW=2304]="CW",t[t.CCW=2305]="CCW",t[t.DONT_CARE=4352]="DONT_CARE",t[t.FASTEST=4353]="FASTEST",t[t.NICEST=4354]="NICEST",t[t.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT",t[t.DOUBLE=5130]="DOUBLE",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER",t[t.COMPILE_STATUS=35713]="COMPILE_STATUS",t[t.DELETE_STATUS=35712]="DELETE_STATUS",t[t.LINK_STATUS=35714]="LINK_STATUS",t[t.VALIDATE_STATUS=35715]="VALIDATE_STATUS",t[t.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",t[t.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",t[t.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",t[t.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",t[t.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",t[t.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",t[t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",t[t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",t[t.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",t[t.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",t[t.SHADER_TYPE=35663]="SHADER_TYPE",t[t.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",t[t.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",t[t.NEVER=512]="NEVER",t[t.ALWAYS=519]="ALWAYS",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.GEQUAL=518]="GEQUAL",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP",t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",t[t.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",t[t.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",t[t.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",t[t.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE=5890]="TEXTURE",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",t[t.TEXTURE0=33984]="TEXTURE0",t[t.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",t[t.REPEAT=10497]="REPEAT",t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t[t.TEXTURE_WIDTH=4096]="TEXTURE_WIDTH",t[t.TEXTURE_HEIGHT=4097]="TEXTURE_HEIGHT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.LOW_FLOAT=36336]="LOW_FLOAT",t[t.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",t[t.HIGH_FLOAT=36338]="HIGH_FLOAT",t[t.LOW_INT=36339]="LOW_INT",t[t.MEDIUM_INT=36340]="MEDIUM_INT",t[t.HIGH_INT=36341]="HIGH_INT",t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.RENDERBUFFER=36161]="RENDERBUFFER",t[t.RGBA4=32854]="RGBA4",t[t.RGB5_A1=32855]="RGB5_A1",t[t.RGB565=36194]="RGB565",t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX=6401]="STENCIL_INDEX",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",t[t.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",t[t.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",t[t.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",t[t.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",t[t.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",t[t.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",t[t.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",t[t.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",t[t.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",t[t.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",t[t.NONE=0]="NONE",t[t.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",t[t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",t[t.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",t[t.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER",t[t.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",t[t.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",t[t.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",t[t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",t[t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",t[t.READ_BUFFER=3074]="READ_BUFFER",t[t.UNPACK_ROW_LENGTH=3314]="UNPACK_ROW_LENGTH",t[t.UNPACK_SKIP_ROWS=3315]="UNPACK_SKIP_ROWS",t[t.UNPACK_SKIP_PIXELS=3316]="UNPACK_SKIP_PIXELS",t[t.PACK_ROW_LENGTH=3330]="PACK_ROW_LENGTH",t[t.PACK_SKIP_ROWS=3331]="PACK_SKIP_ROWS",t[t.PACK_SKIP_PIXELS=3332]="PACK_SKIP_PIXELS",t[t.TEXTURE_BINDING_3D=32874]="TEXTURE_BINDING_3D",t[t.UNPACK_SKIP_IMAGES=32877]="UNPACK_SKIP_IMAGES",t[t.UNPACK_IMAGE_HEIGHT=32878]="UNPACK_IMAGE_HEIGHT",t[t.MAX_3D_TEXTURE_SIZE=32883]="MAX_3D_TEXTURE_SIZE",t[t.MAX_ELEMENTS_VERTICES=33e3]="MAX_ELEMENTS_VERTICES",t[t.MAX_ELEMENTS_INDICES=33001]="MAX_ELEMENTS_INDICES",t[t.MAX_TEXTURE_LOD_BIAS=34045]="MAX_TEXTURE_LOD_BIAS",t[t.MAX_FRAGMENT_UNIFORM_COMPONENTS=35657]="MAX_FRAGMENT_UNIFORM_COMPONENTS",t[t.MAX_VERTEX_UNIFORM_COMPONENTS=35658]="MAX_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_ARRAY_TEXTURE_LAYERS=35071]="MAX_ARRAY_TEXTURE_LAYERS",t[t.MIN_PROGRAM_TEXEL_OFFSET=35076]="MIN_PROGRAM_TEXEL_OFFSET",t[t.MAX_PROGRAM_TEXEL_OFFSET=35077]="MAX_PROGRAM_TEXEL_OFFSET",t[t.MAX_VARYING_COMPONENTS=35659]="MAX_VARYING_COMPONENTS",t[t.FRAGMENT_SHADER_DERIVATIVE_HINT=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT",t[t.RASTERIZER_DISCARD=35977]="RASTERIZER_DISCARD",t[t.VERTEX_ARRAY_BINDING=34229]="VERTEX_ARRAY_BINDING",t[t.MAX_VERTEX_OUTPUT_COMPONENTS=37154]="MAX_VERTEX_OUTPUT_COMPONENTS",t[t.MAX_FRAGMENT_INPUT_COMPONENTS=37157]="MAX_FRAGMENT_INPUT_COMPONENTS",t[t.MAX_SERVER_WAIT_TIMEOUT=37137]="MAX_SERVER_WAIT_TIMEOUT",t[t.MAX_ELEMENT_INDEX=36203]="MAX_ELEMENT_INDEX",t[t.RED=6403]="RED",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB10_A2=32857]="RGB10_A2",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_WRAP_R=32882]="TEXTURE_WRAP_R",t[t.TEXTURE_MIN_LOD=33082]="TEXTURE_MIN_LOD",t[t.TEXTURE_MAX_LOD=33083]="TEXTURE_MAX_LOD",t[t.TEXTURE_BASE_LEVEL=33084]="TEXTURE_BASE_LEVEL",t[t.TEXTURE_MAX_LEVEL=33085]="TEXTURE_MAX_LEVEL",t[t.TEXTURE_COMPARE_MODE=34892]="TEXTURE_COMPARE_MODE",t[t.TEXTURE_COMPARE_FUNC=34893]="TEXTURE_COMPARE_FUNC",t[t.SRGB=35904]="SRGB",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.COMPARE_REF_TO_TEXTURE=34894]="COMPARE_REF_TO_TEXTURE",t[t.RGBA32F=34836]="RGBA32F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.RGB16F=34843]="RGB16F",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_BINDING_2D_ARRAY=35869]="TEXTURE_BINDING_2D_ARRAY",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R16F=33325]="R16F",t[t.R32F=33326]="R32F",t[t.RG16F=33327]="RG16F",t[t.RG32F=33328]="RG32F",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2UI=36975]="RGB10_A2UI",t[t.TEXTURE_IMMUTABLE_FORMAT=37167]="TEXTURE_IMMUTABLE_FORMAT",t[t.TEXTURE_IMMUTABLE_LEVELS=33503]="TEXTURE_IMMUTABLE_LEVELS",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.RG=33319]="RG",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.INT_2_10_10_10_REV=36255]="INT_2_10_10_10_REV",t[t.CURRENT_QUERY=34917]="CURRENT_QUERY",t[t.QUERY_RESULT=34918]="QUERY_RESULT",t[t.QUERY_RESULT_AVAILABLE=34919]="QUERY_RESULT_AVAILABLE",t[t.ANY_SAMPLES_PASSED=35887]="ANY_SAMPLES_PASSED",t[t.ANY_SAMPLES_PASSED_CONSERVATIVE=36202]="ANY_SAMPLES_PASSED_CONSERVATIVE",t[t.MAX_DRAW_BUFFERS=34852]="MAX_DRAW_BUFFERS",t[t.DRAW_BUFFER0=34853]="DRAW_BUFFER0",t[t.DRAW_BUFFER1=34854]="DRAW_BUFFER1",t[t.DRAW_BUFFER2=34855]="DRAW_BUFFER2",t[t.DRAW_BUFFER3=34856]="DRAW_BUFFER3",t[t.DRAW_BUFFER4=34857]="DRAW_BUFFER4",t[t.DRAW_BUFFER5=34858]="DRAW_BUFFER5",t[t.DRAW_BUFFER6=34859]="DRAW_BUFFER6",t[t.DRAW_BUFFER7=34860]="DRAW_BUFFER7",t[t.DRAW_BUFFER8=34861]="DRAW_BUFFER8",t[t.DRAW_BUFFER9=34862]="DRAW_BUFFER9",t[t.DRAW_BUFFER10=34863]="DRAW_BUFFER10",t[t.DRAW_BUFFER11=34864]="DRAW_BUFFER11",t[t.DRAW_BUFFER12=34865]="DRAW_BUFFER12",t[t.DRAW_BUFFER13=34866]="DRAW_BUFFER13",t[t.DRAW_BUFFER14=34867]="DRAW_BUFFER14",t[t.DRAW_BUFFER15=34868]="DRAW_BUFFER15",t[t.MAX_COLOR_ATTACHMENTS=36063]="MAX_COLOR_ATTACHMENTS",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",t[t.MAX_SAMPLES=36183]="MAX_SAMPLES",t[t.SAMPLER_BINDING=35097]="SAMPLER_BINDING",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.PIXEL_PACK_BUFFER_BINDING=35053]="PIXEL_PACK_BUFFER_BINDING",t[t.PIXEL_UNPACK_BUFFER_BINDING=35055]="PIXEL_UNPACK_BUFFER_BINDING",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.COPY_READ_BUFFER_BINDING=36662]="COPY_READ_BUFFER_BINDING",t[t.COPY_WRITE_BUFFER_BINDING=36663]="COPY_WRITE_BUFFER_BINDING",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.UNSIGNED_NORMALIZED=35863]="UNSIGNED_NORMALIZED",t[t.SIGNED_NORMALIZED=36764]="SIGNED_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_INTEGER=35069]="VERTEX_ATTRIB_ARRAY_INTEGER",t[t.VERTEX_ATTRIB_ARRAY_DIVISOR=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR",t[t.TRANSFORM_FEEDBACK_BUFFER_MODE=35967]="TRANSFORM_FEEDBACK_BUFFER_MODE",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS=35968]="MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",t[t.TRANSFORM_FEEDBACK_VARYINGS=35971]="TRANSFORM_FEEDBACK_VARYINGS",t[t.TRANSFORM_FEEDBACK_BUFFER_START=35972]="TRANSFORM_FEEDBACK_BUFFER_START",t[t.TRANSFORM_FEEDBACK_BUFFER_SIZE=35973]="TRANSFORM_FEEDBACK_BUFFER_SIZE",t[t.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN=35976]="TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",t[t.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS=35978]="MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS=35979]="MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",t[t.INTERLEAVED_ATTRIBS=35980]="INTERLEAVED_ATTRIBS",t[t.SEPARATE_ATTRIBS=35981]="SEPARATE_ATTRIBS",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER_BINDING=35983]="TRANSFORM_FEEDBACK_BUFFER_BINDING",t[t.TRANSFORM_FEEDBACK=36386]="TRANSFORM_FEEDBACK",t[t.TRANSFORM_FEEDBACK_PAUSED=36387]="TRANSFORM_FEEDBACK_PAUSED",t[t.TRANSFORM_FEEDBACK_ACTIVE=36388]="TRANSFORM_FEEDBACK_ACTIVE",t[t.TRANSFORM_FEEDBACK_BINDING=36389]="TRANSFORM_FEEDBACK_BINDING",t[t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",t[t.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_RED_SIZE=33298]="FRAMEBUFFER_ATTACHMENT_RED_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE=33299]="FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE=33300]="FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE=33301]="FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE=33302]="FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE=33303]="FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",t[t.FRAMEBUFFER_DEFAULT=33304]="FRAMEBUFFER_DEFAULT",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DRAW_FRAMEBUFFER_BINDING=36006]="DRAW_FRAMEBUFFER_BINDING",t[t.READ_FRAMEBUFFER_BINDING=36010]="READ_FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_SAMPLES=36011]="RENDERBUFFER_SAMPLES",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER=36052]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",t[t.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE=36182]="FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.UNIFORM_BUFFER_BINDING=35368]="UNIFORM_BUFFER_BINDING",t[t.UNIFORM_BUFFER_START=35369]="UNIFORM_BUFFER_START",t[t.UNIFORM_BUFFER_SIZE=35370]="UNIFORM_BUFFER_SIZE",t[t.MAX_VERTEX_UNIFORM_BLOCKS=35371]="MAX_VERTEX_UNIFORM_BLOCKS",t[t.MAX_FRAGMENT_UNIFORM_BLOCKS=35373]="MAX_FRAGMENT_UNIFORM_BLOCKS",t[t.MAX_COMBINED_UNIFORM_BLOCKS=35374]="MAX_COMBINED_UNIFORM_BLOCKS",t[t.MAX_UNIFORM_BUFFER_BINDINGS=35375]="MAX_UNIFORM_BUFFER_BINDINGS",t[t.MAX_UNIFORM_BLOCK_SIZE=35376]="MAX_UNIFORM_BLOCK_SIZE",t[t.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS=35377]="MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS=35379]="MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",t[t.UNIFORM_BUFFER_OFFSET_ALIGNMENT=35380]="UNIFORM_BUFFER_OFFSET_ALIGNMENT",t[t.ACTIVE_UNIFORM_BLOCKS=35382]="ACTIVE_UNIFORM_BLOCKS",t[t.UNIFORM_TYPE=35383]="UNIFORM_TYPE",t[t.UNIFORM_SIZE=35384]="UNIFORM_SIZE",t[t.UNIFORM_BLOCK_INDEX=35386]="UNIFORM_BLOCK_INDEX",t[t.UNIFORM_OFFSET=35387]="UNIFORM_OFFSET",t[t.UNIFORM_ARRAY_STRIDE=35388]="UNIFORM_ARRAY_STRIDE",t[t.UNIFORM_MATRIX_STRIDE=35389]="UNIFORM_MATRIX_STRIDE",t[t.UNIFORM_IS_ROW_MAJOR=35390]="UNIFORM_IS_ROW_MAJOR",t[t.UNIFORM_BLOCK_BINDING=35391]="UNIFORM_BLOCK_BINDING",t[t.UNIFORM_BLOCK_DATA_SIZE=35392]="UNIFORM_BLOCK_DATA_SIZE",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORMS=35394]="UNIFORM_BLOCK_ACTIVE_UNIFORMS",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES=35395]="UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",t[t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER=35396]="UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",t[t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER=35398]="UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS",t[t.SYNC_FENCE=37142]="SYNC_FENCE",t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED",t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED",t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",t[t.COLOR=6144]="COLOR",t[t.DEPTH=6145]="DEPTH",t[t.STENCIL=6146]="STENCIL",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STREAM_COPY=35042]="STREAM_COPY",t[t.STATIC_READ=35045]="STATIC_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",t[t.INVALID_INDEX=4294967295]="INVALID_INDEX",t[t.TIMEOUT_IGNORED=-1]="TIMEOUT_IGNORED",t[t.MAX_CLIENT_WAIT_TIMEOUT_WEBGL=37447]="MAX_CLIENT_WAIT_TIMEOUT_WEBGL",t[t.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE",t[t.UNMASKED_VENDOR_WEBGL=37445]="UNMASKED_VENDOR_WEBGL",t[t.UNMASKED_RENDERER_WEBGL=37446]="UNMASKED_RENDERER_WEBGL",t[t.MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047]="MAX_TEXTURE_MAX_ANISOTROPY_EXT",t[t.TEXTURE_MAX_ANISOTROPY_EXT=34046]="TEXTURE_MAX_ANISOTROPY_EXT",t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37493]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37494]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37495]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37496]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37497]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",t[t.UNSIGNED_INT_24_8_WEBGL=34042]="UNSIGNED_INT_24_8_WEBGL",t[t.HALF_FLOAT_OES=36193]="HALF_FLOAT_OES",t[t.RGBA32F_EXT=34836]="RGBA32F_EXT",t[t.RGB32F_EXT=34837]="RGB32F_EXT",t[t.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT",t[t.UNSIGNED_NORMALIZED_EXT=35863]="UNSIGNED_NORMALIZED_EXT",t[t.MIN_EXT=32775]="MIN_EXT",t[t.MAX_EXT=32776]="MAX_EXT",t[t.SRGB_EXT=35904]="SRGB_EXT",t[t.SRGB_ALPHA_EXT=35906]="SRGB_ALPHA_EXT",t[t.SRGB8_ALPHA8_EXT=35907]="SRGB8_ALPHA8_EXT",t[t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT",t[t.FRAGMENT_SHADER_DERIVATIVE_HINT_OES=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT_OES",t[t.COLOR_ATTACHMENT0_WEBGL=36064]="COLOR_ATTACHMENT0_WEBGL",t[t.COLOR_ATTACHMENT1_WEBGL=36065]="COLOR_ATTACHMENT1_WEBGL",t[t.COLOR_ATTACHMENT2_WEBGL=36066]="COLOR_ATTACHMENT2_WEBGL",t[t.COLOR_ATTACHMENT3_WEBGL=36067]="COLOR_ATTACHMENT3_WEBGL",t[t.COLOR_ATTACHMENT4_WEBGL=36068]="COLOR_ATTACHMENT4_WEBGL",t[t.COLOR_ATTACHMENT5_WEBGL=36069]="COLOR_ATTACHMENT5_WEBGL",t[t.COLOR_ATTACHMENT6_WEBGL=36070]="COLOR_ATTACHMENT6_WEBGL",t[t.COLOR_ATTACHMENT7_WEBGL=36071]="COLOR_ATTACHMENT7_WEBGL",t[t.COLOR_ATTACHMENT8_WEBGL=36072]="COLOR_ATTACHMENT8_WEBGL",t[t.COLOR_ATTACHMENT9_WEBGL=36073]="COLOR_ATTACHMENT9_WEBGL",t[t.COLOR_ATTACHMENT10_WEBGL=36074]="COLOR_ATTACHMENT10_WEBGL",t[t.COLOR_ATTACHMENT11_WEBGL=36075]="COLOR_ATTACHMENT11_WEBGL",t[t.COLOR_ATTACHMENT12_WEBGL=36076]="COLOR_ATTACHMENT12_WEBGL",t[t.COLOR_ATTACHMENT13_WEBGL=36077]="COLOR_ATTACHMENT13_WEBGL",t[t.COLOR_ATTACHMENT14_WEBGL=36078]="COLOR_ATTACHMENT14_WEBGL",t[t.COLOR_ATTACHMENT15_WEBGL=36079]="COLOR_ATTACHMENT15_WEBGL",t[t.DRAW_BUFFER0_WEBGL=34853]="DRAW_BUFFER0_WEBGL",t[t.DRAW_BUFFER1_WEBGL=34854]="DRAW_BUFFER1_WEBGL",t[t.DRAW_BUFFER2_WEBGL=34855]="DRAW_BUFFER2_WEBGL",t[t.DRAW_BUFFER3_WEBGL=34856]="DRAW_BUFFER3_WEBGL",t[t.DRAW_BUFFER4_WEBGL=34857]="DRAW_BUFFER4_WEBGL",t[t.DRAW_BUFFER5_WEBGL=34858]="DRAW_BUFFER5_WEBGL",t[t.DRAW_BUFFER6_WEBGL=34859]="DRAW_BUFFER6_WEBGL",t[t.DRAW_BUFFER7_WEBGL=34860]="DRAW_BUFFER7_WEBGL",t[t.DRAW_BUFFER8_WEBGL=34861]="DRAW_BUFFER8_WEBGL",t[t.DRAW_BUFFER9_WEBGL=34862]="DRAW_BUFFER9_WEBGL",t[t.DRAW_BUFFER10_WEBGL=34863]="DRAW_BUFFER10_WEBGL",t[t.DRAW_BUFFER11_WEBGL=34864]="DRAW_BUFFER11_WEBGL",t[t.DRAW_BUFFER12_WEBGL=34865]="DRAW_BUFFER12_WEBGL",t[t.DRAW_BUFFER13_WEBGL=34866]="DRAW_BUFFER13_WEBGL",t[t.DRAW_BUFFER14_WEBGL=34867]="DRAW_BUFFER14_WEBGL",t[t.DRAW_BUFFER15_WEBGL=34868]="DRAW_BUFFER15_WEBGL",t[t.MAX_COLOR_ATTACHMENTS_WEBGL=36063]="MAX_COLOR_ATTACHMENTS_WEBGL",t[t.MAX_DRAW_BUFFERS_WEBGL=34852]="MAX_DRAW_BUFFERS_WEBGL",t[t.VERTEX_ARRAY_BINDING_OES=34229]="VERTEX_ARRAY_BINDING_OES",t[t.QUERY_COUNTER_BITS_EXT=34916]="QUERY_COUNTER_BITS_EXT",t[t.CURRENT_QUERY_EXT=34917]="CURRENT_QUERY_EXT",t[t.QUERY_RESULT_EXT=34918]="QUERY_RESULT_EXT",t[t.QUERY_RESULT_AVAILABLE_EXT=34919]="QUERY_RESULT_AVAILABLE_EXT",t[t.TIME_ELAPSED_EXT=35007]="TIME_ELAPSED_EXT",t[t.TIMESTAMP_EXT=36392]="TIMESTAMP_EXT",t[t.GPU_DISJOINT_EXT=36795]="GPU_DISJOINT_EXT"})(R||(R={}));var he;(function(t){t[t.Buffer=0]="Buffer",t[t.Texture=1]="Texture",t[t.RenderTarget=2]="RenderTarget",t[t.Sampler=3]="Sampler",t[t.Program=4]="Program",t[t.Bindings=5]="Bindings",t[t.InputLayout=6]="InputLayout",t[t.RenderPipeline=7]="RenderPipeline",t[t.ComputePipeline=8]="ComputePipeline",t[t.Readback=9]="Readback",t[t.QueryPool=10]="QueryPool",t[t.RenderBundle=11]="RenderBundle"})(he||(he={}));var ve;(function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"})(ve||(ve={}));var Oi;(function(t){t[t.CCW=2305]="CCW",t[t.CW=2304]="CW"})(Oi||(Oi={}));var ft;(function(t){t[t.NONE=0]="NONE",t[t.FRONT=1]="FRONT",t[t.BACK=2]="BACK",t[t.FRONT_AND_BACK=3]="FRONT_AND_BACK"})(ft||(ft={}));var ie;(function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC=768]="SRC",t[t.ONE_MINUS_SRC=769]="ONE_MINUS_SRC",t[t.DST=774]="DST",t[t.ONE_MINUS_DST=775]="ONE_MINUS_DST",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.CONST=32769]="CONST",t[t.ONE_MINUS_CONSTANT=32770]="ONE_MINUS_CONSTANT",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE"})(ie||(ie={}));var Ve;(function(t){t[t.ADD=32774]="ADD",t[t.SUBSTRACT=32778]="SUBSTRACT",t[t.REVERSE_SUBSTRACT=32779]="REVERSE_SUBSTRACT",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX"})(Ve||(Ve={}));var ot;(function(t){t[t.CLAMP_TO_EDGE=0]="CLAMP_TO_EDGE",t[t.REPEAT=1]="REPEAT",t[t.MIRRORED_REPEAT=2]="MIRRORED_REPEAT"})(ot||(ot={}));var Fe;(function(t){t[t.POINT=0]="POINT",t[t.BILINEAR=1]="BILINEAR"})(Fe||(Fe={}));var Ue;(function(t){t[t.NO_MIP=0]="NO_MIP",t[t.NEAREST=1]="NEAREST",t[t.LINEAR=2]="LINEAR"})(Ue||(Ue={}));var De;(function(t){t[t.POINTS=0]="POINTS",t[t.TRIANGLES=1]="TRIANGLES",t[t.TRIANGLE_STRIP=2]="TRIANGLE_STRIP",t[t.LINES=3]="LINES",t[t.LINE_STRIP=4]="LINE_STRIP"})(De||(De={}));var ye;(function(t){t[t.MAP_READ=1]="MAP_READ",t[t.MAP_WRITE=2]="MAP_WRITE",t[t.COPY_SRC=4]="COPY_SRC",t[t.COPY_DST=8]="COPY_DST",t[t.INDEX=16]="INDEX",t[t.VERTEX=32]="VERTEX",t[t.UNIFORM=64]="UNIFORM",t[t.STORAGE=128]="STORAGE",t[t.INDIRECT=256]="INDIRECT",t[t.QUERY_RESOLVE=512]="QUERY_RESOLVE"})(ye||(ye={}));var wt;(function(t){t[t.STATIC=1]="STATIC",t[t.DYNAMIC=2]="DYNAMIC"})(wt||(wt={}));var Yn;(function(t){t[t.VERTEX=1]="VERTEX",t[t.INSTANCE=2]="INSTANCE"})(Yn||(Yn={}));var Rf;(function(t){t.LOADED="loaded"})(Rf||(Rf={}));var oe;(function(t){t[t.TEXTURE_2D=0]="TEXTURE_2D",t[t.TEXTURE_2D_ARRAY=1]="TEXTURE_2D_ARRAY",t[t.TEXTURE_3D=2]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP=3]="TEXTURE_CUBE_MAP"})(oe||(oe={}));var et;(function(t){t[t.SAMPLED=1]="SAMPLED",t[t.RENDER_TARGET=2]="RENDER_TARGET",t[t.STORAGE=4]="STORAGE"})(et||(et={}));var ze;(function(t){t[t.NONE=0]="NONE",t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA",t[t.RGB=7]="RGB",t[t.ALL=15]="ALL"})(ze||(ze={}));var Me;(function(t){t[t.KEEP=7680]="KEEP",t[t.ZERO=0]="ZERO",t[t.REPLACE=7681]="REPLACE",t[t.INVERT=5386]="INVERT",t[t.INCREMENT_CLAMP=7682]="INCREMENT_CLAMP",t[t.DECREMENT_CLAMP=7683]="DECREMENT_CLAMP",t[t.INCREMENT_WRAP=34055]="INCREMENT_WRAP",t[t.DECREMENT_WRAP=34056]="DECREMENT_WRAP"})(Me||(Me={}));var Ie;(function(t){t[t.Float=0]="Float",t[t.UnfilterableFloat=1]="UnfilterableFloat",t[t.Uint=2]="Uint",t[t.Sint=3]="Sint",t[t.Depth=4]="Depth"})(Ie||(Ie={}));var $t;(function(t){t[t.LOWER_LEFT=0]="LOWER_LEFT",t[t.UPPER_LEFT=1]="UPPER_LEFT"})($t||($t={}));var Pi;(function(t){t[t.NEGATIVE_ONE=0]="NEGATIVE_ONE",t[t.ZERO=1]="ZERO"})(Pi||(Pi={}));var Jo;(function(t){t[t.OcclusionConservative=0]="OcclusionConservative"})(Jo||(Jo={}));var k;(function(t){t[t.U8=1]="U8",t[t.U16=2]="U16",t[t.U32=3]="U32",t[t.S8=4]="S8",t[t.S16=5]="S16",t[t.S32=6]="S32",t[t.F16=7]="F16",t[t.F32=8]="F32",t[t.BC1=65]="BC1",t[t.BC2=66]="BC2",t[t.BC3=67]="BC3",t[t.BC4_UNORM=68]="BC4_UNORM",t[t.BC4_SNORM=69]="BC4_SNORM",t[t.BC5_UNORM=70]="BC5_UNORM",t[t.BC5_SNORM=71]="BC5_SNORM",t[t.U16_PACKED_5551=97]="U16_PACKED_5551",t[t.U16_PACKED_565=98]="U16_PACKED_565",t[t.D24=129]="D24",t[t.D32F=130]="D32F",t[t.D24S8=131]="D24S8",t[t.D32FS8=132]="D32FS8"})(k||(k={}));var Z;(function(t){t[t.R=1]="R",t[t.RG=2]="RG",t[t.RGB=3]="RGB",t[t.RGBA=4]="RGBA",t[t.A=5]="A"})(Z||(Z={}));var X;(function(t){t[t.None=0]="None",t[t.Normalized=1]="Normalized",t[t.sRGB=2]="sRGB",t[t.Depth=4]="Depth",t[t.Stencil=8]="Stencil",t[t.RenderTarget=16]="RenderTarget",t[t.Luminance=32]="Luminance"})(X||(X={}));function q(t,e,n){return t<<16|e<<8|n}var I;(function(t){t[t.ALPHA=q(k.U8,Z.A,X.None)]="ALPHA",t[t.U8_LUMINANCE=q(k.U8,Z.A,X.Luminance)]="U8_LUMINANCE",t[t.F16_LUMINANCE=q(k.F16,Z.A,X.Luminance)]="F16_LUMINANCE",t[t.F32_LUMINANCE=q(k.F32,Z.A,X.Luminance)]="F32_LUMINANCE",t[t.F16_R=q(k.F16,Z.R,X.None)]="F16_R",t[t.F16_RG=q(k.F16,Z.RG,X.None)]="F16_RG",t[t.F16_RGB=q(k.F16,Z.RGB,X.None)]="F16_RGB",t[t.F16_RGBA=q(k.F16,Z.RGBA,X.None)]="F16_RGBA",t[t.F32_R=q(k.F32,Z.R,X.None)]="F32_R",t[t.F32_RG=q(k.F32,Z.RG,X.None)]="F32_RG",t[t.F32_RGB=q(k.F32,Z.RGB,X.None)]="F32_RGB",t[t.F32_RGBA=q(k.F32,Z.RGBA,X.None)]="F32_RGBA",t[t.U8_R=q(k.U8,Z.R,X.None)]="U8_R",t[t.U8_R_NORM=q(k.U8,Z.R,X.Normalized)]="U8_R_NORM",t[t.U8_RG=q(k.U8,Z.RG,X.None)]="U8_RG",t[t.U8_RG_NORM=q(k.U8,Z.RG,X.Normalized)]="U8_RG_NORM",t[t.U8_RGB=q(k.U8,Z.RGB,X.None)]="U8_RGB",t[t.U8_RGB_NORM=q(k.U8,Z.RGB,X.Normalized)]="U8_RGB_NORM",t[t.U8_RGB_SRGB=q(k.U8,Z.RGB,X.sRGB|X.Normalized)]="U8_RGB_SRGB",t[t.U8_RGBA=q(k.U8,Z.RGBA,X.None)]="U8_RGBA",t[t.U8_RGBA_NORM=q(k.U8,Z.RGBA,X.Normalized)]="U8_RGBA_NORM",t[t.U8_RGBA_SRGB=q(k.U8,Z.RGBA,X.sRGB|X.Normalized)]="U8_RGBA_SRGB",t[t.U16_R=q(k.U16,Z.R,X.None)]="U16_R",t[t.U16_R_NORM=q(k.U16,Z.R,X.Normalized)]="U16_R_NORM",t[t.U16_RG_NORM=q(k.U16,Z.RG,X.Normalized)]="U16_RG_NORM",t[t.U16_RGBA_NORM=q(k.U16,Z.RGBA,X.Normalized)]="U16_RGBA_NORM",t[t.U16_RGBA=q(k.U16,Z.RGBA,X.None)]="U16_RGBA",t[t.U16_RGB=q(k.U16,Z.RGB,X.None)]="U16_RGB",t[t.U16_RG=q(k.U16,Z.RG,X.None)]="U16_RG",t[t.U32_R=q(k.U32,Z.R,X.None)]="U32_R",t[t.U32_RG=q(k.U32,Z.RG,X.None)]="U32_RG",t[t.U32_RGB=q(k.U32,Z.RGB,X.None)]="U32_RGB",t[t.U32_RGBA=q(k.U32,Z.RGBA,X.None)]="U32_RGBA",t[t.S8_R=q(k.S8,Z.R,X.None)]="S8_R",t[t.S8_R_NORM=q(k.S8,Z.R,X.Normalized)]="S8_R_NORM",t[t.S8_RG_NORM=q(k.S8,Z.RG,X.Normalized)]="S8_RG_NORM",t[t.S8_RGB_NORM=q(k.S8,Z.RGB,X.Normalized)]="S8_RGB_NORM",t[t.S8_RGBA_NORM=q(k.S8,Z.RGBA,X.Normalized)]="S8_RGBA_NORM",t[t.S16_R=q(k.S16,Z.R,X.None)]="S16_R",t[t.S16_RG=q(k.S16,Z.RG,X.None)]="S16_RG",t[t.S16_RG_NORM=q(k.S16,Z.RG,X.Normalized)]="S16_RG_NORM",t[t.S16_RGB_NORM=q(k.S16,Z.RGB,X.Normalized)]="S16_RGB_NORM",t[t.S16_RGBA=q(k.S16,Z.RGBA,X.None)]="S16_RGBA",t[t.S16_RGBA_NORM=q(k.S16,Z.RGBA,X.Normalized)]="S16_RGBA_NORM",t[t.S32_R=q(k.S32,Z.R,X.None)]="S32_R",t[t.S32_RG=q(k.S32,Z.RG,X.None)]="S32_RG",t[t.S32_RGB=q(k.S32,Z.RGB,X.None)]="S32_RGB",t[t.S32_RGBA=q(k.S32,Z.RGBA,X.None)]="S32_RGBA",t[t.U16_RGBA_5551=q(k.U16_PACKED_5551,Z.RGBA,X.Normalized)]="U16_RGBA_5551",t[t.U16_RGB_565=q(k.U16_PACKED_565,Z.RGB,X.Normalized)]="U16_RGB_565",t[t.BC1=q(k.BC1,Z.RGBA,X.Normalized)]="BC1",t[t.BC1_SRGB=q(k.BC1,Z.RGBA,X.Normalized|X.sRGB)]="BC1_SRGB",t[t.BC2=q(k.BC2,Z.RGBA,X.Normalized)]="BC2",t[t.BC2_SRGB=q(k.BC2,Z.RGBA,X.Normalized|X.sRGB)]="BC2_SRGB",t[t.BC3=q(k.BC3,Z.RGBA,X.Normalized)]="BC3",t[t.BC3_SRGB=q(k.BC3,Z.RGBA,X.Normalized|X.sRGB)]="BC3_SRGB",t[t.BC4_UNORM=q(k.BC4_UNORM,Z.R,X.Normalized)]="BC4_UNORM",t[t.BC4_SNORM=q(k.BC4_SNORM,Z.R,X.Normalized)]="BC4_SNORM",t[t.BC5_UNORM=q(k.BC5_UNORM,Z.RG,X.Normalized)]="BC5_UNORM",t[t.BC5_SNORM=q(k.BC5_SNORM,Z.RG,X.Normalized)]="BC5_SNORM",t[t.D24=q(k.D24,Z.R,X.Depth)]="D24",t[t.D24_S8=q(k.D24S8,Z.RG,X.Depth|X.Stencil)]="D24_S8",t[t.D32F=q(k.D32F,Z.R,X.Depth)]="D32F",t[t.D32F_S8=q(k.D32FS8,Z.RG,X.Depth|X.Stencil)]="D32F_S8",t[t.U8_RGB_RT=q(k.U8,Z.RGB,X.RenderTarget|X.Normalized)]="U8_RGB_RT",t[t.U8_RGBA_RT=q(k.U8,Z.RGBA,X.RenderTarget|X.Normalized)]="U8_RGBA_RT",t[t.U8_RGBA_RT_SRGB=q(k.U8,Z.RGBA,X.RenderTarget|X.Normalized|X.sRGB)]="U8_RGBA_RT_SRGB"})(I||(I={}));function Wu(t){return t>>>8&255}function Gt(t){return t>>>16&255}function Ir(t){return t&255}function d_(t){switch(t){case k.F32:case k.U32:case k.S32:return 4;case k.U16:case k.S16:case k.F16:return 2;case k.U8:case k.S8:return 1;default:throw new Error("whoops")}}function p_(t){return d_(Gt(t))}function WC(t){var e=d_(Gt(t)),n=Wu(t);return e*n}function __(t){var e=Ir(t);if(e&X.Depth)return Ie.Depth;if(e&X.Normalized)return Ie.Float;var n=Gt(t);if(n===k.F16||n===k.F32)return Ie.Float;if(n===k.U8||n===k.U16||n===k.U32)return Ie.Uint;if(n===k.S8||n===k.S16||n===k.S32)return Ie.Sint;throw new Error("whoops")}function ne(t,e){if(e===void 0&&(e=""),!t)throw new Error("Assert fail: ".concat(e))}function kn(t){if(t!=null)return t;throw new Error("Missing object")}function v_(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a}function m_(t,e){t.r=e.r,t.g=e.g,t.b=e.b,t.a=e.a}function g_(t){var e=t.r,n=t.g,r=t.b,i=t.a;return{r:e,g:n,b:r,a:i}}function ki(t,e,n,r){return r===void 0&&(r=1),{r:t,g:e,b:n,a:r}}var Ts=ki(0,0,0,0);ki(0,0,0,1);var jC=ki(1,1,1,0);ki(1,1,1,1);function es(t){return!!(t&&!(t&t-1))}function vn(t,e){return t??e}function $C(t){return t===void 0?null:t}function ts(t,e){var n=e-1;return t+n&~n}function ZC(t,e){for(var n=new Array(t),r=0;r<t;r++)n[r]=e();return n}function YC(t,e){e===void 0&&(e=1);var n=t.split(`
`);return n.map(function(r,i){return"".concat(GC(""+(e+i),4," "),"  ").concat(r)}).join(`
`)}function GC(t,e,n){for(;t.length<e;)t="".concat(n).concat(t);return t}function xf(t,e){t.blendDstFactor=e.blendDstFactor,t.blendSrcFactor=e.blendSrcFactor,t.blendMode=e.blendMode}function ns(t,e){return t===void 0&&(t={}),t.compare=e.compare,t.depthFailOp=e.depthFailOp,t.passOp=e.passOp,t.failOp=e.failOp,t.mask=e.mask,t}function E_(t,e){return t===void 0&&(t={rgbBlendState:{},alphaBlendState:{},channelWriteMask:0}),xf(t.rgbBlendState,e.rgbBlendState),xf(t.alphaBlendState,e.alphaBlendState),t.channelWriteMask=e.channelWriteMask,t}function y_(t,e){t.length!==e.length&&(t.length=e.length);for(var n=0;n<e.length;n++)t[n]=E_(t[n],e[n])}function KC(t,e){e.attachmentsState!==void 0&&y_(t.attachmentsState,e.attachmentsState),t.blendConstant&&e.blendConstant&&m_(t.blendConstant,e.blendConstant),t.depthCompare=vn(e.depthCompare,t.depthCompare),t.depthWrite=vn(e.depthWrite,t.depthWrite),t.stencilWrite=vn(e.stencilWrite,t.stencilWrite),t.stencilFront&&e.stencilFront&&ns(t.stencilFront,e.stencilFront),t.stencilBack&&e.stencilBack&&ns(t.stencilBack,e.stencilBack),t.cullMode=vn(e.cullMode,t.cullMode),t.frontFace=vn(e.frontFace,t.frontFace),t.polygonOffset=vn(e.polygonOffset,t.polygonOffset),t.polygonOffsetFactor=vn(e.polygonOffsetFactor,t.polygonOffsetFactor),t.polygonOffsetUnits=vn(e.polygonOffsetUnits,t.polygonOffsetUnits)}function Mr(t){var e=Object.assign({},t);return e.attachmentsState=[],y_(e.attachmentsState,t.attachmentsState),e.blendConstant=e.blendConstant&&g_(e.blendConstant),e.stencilFront=ns(void 0,t.stencilFront),e.stencilBack=ns(void 0,t.stencilBack),e}var Cf={blendMode:Ve.ADD,blendSrcFactor:ie.ONE,blendDstFactor:ie.ZERO},Or={attachmentsState:[{channelWriteMask:ze.ALL,rgbBlendState:Cf,alphaBlendState:Cf}],blendConstant:g_(Ts),depthWrite:!0,depthCompare:ve.LEQUAL,stencilWrite:!1,stencilFront:{compare:ve.ALWAYS,passOp:Me.KEEP,depthFailOp:Me.KEEP,failOp:Me.KEEP},stencilBack:{compare:ve.ALWAYS,passOp:Me.KEEP,depthFailOp:Me.KEEP,failOp:Me.KEEP},cullMode:ft.NONE,frontFace:Oi.CCW,polygonOffset:!1,polygonOffsetFactor:0,polygonOffsetUnits:0};function qC(t,e){t===void 0&&(t=null),e===void 0&&(e=Or);var n=Mr(e);return t!==null&&KC(n,t),n}qC({depthCompare:ve.ALWAYS,depthWrite:!1},Or);var T_={texture:null,sampler:null,formatKind:Ie.Float,dimension:oe.TEXTURE_2D};function xn(t,e,n){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1;return!0}function _r(t,e){for(var n=Array(t.length),r=0;r<t.length;r++)n[r]=e(t[r]);return n}function QC(t,e){return t.texture===e.texture&&t.binding===e.binding}function bf(t,e){return t.buffer===e.buffer&&t.size===e.size&&t.binding===e.binding&&t.offset===e.offset}function JC(t,e){return t===null?e===null:e===null?!1:t.sampler===e.sampler&&t.texture===e.texture&&t.dimension===e.dimension&&t.formatKind===e.formatKind&&t.comparison===e.comparison}function eb(t,e){return t.samplerBindings=t.samplerBindings||[],t.uniformBufferBindings=t.uniformBufferBindings||[],t.storageBufferBindings=t.storageBufferBindings||[],t.storageTextureBindings=t.storageTextureBindings||[],e.samplerBindings=e.samplerBindings||[],e.uniformBufferBindings=e.uniformBufferBindings||[],e.storageBufferBindings=e.storageBufferBindings||[],e.storageTextureBindings=e.storageTextureBindings||[],!(t.samplerBindings.length!==e.samplerBindings.length||!xn(t.samplerBindings,e.samplerBindings,JC)||!xn(t.uniformBufferBindings,e.uniformBufferBindings,bf)||!xn(t.storageBufferBindings,e.storageBufferBindings,bf)||!xn(t.storageTextureBindings,e.storageTextureBindings,QC))}function If(t,e){return t.blendMode==e.blendMode&&t.blendSrcFactor===e.blendSrcFactor&&t.blendDstFactor===e.blendDstFactor}function tb(t,e){return!(!If(t.rgbBlendState,e.rgbBlendState)||!If(t.alphaBlendState,e.alphaBlendState)||t.channelWriteMask!==e.channelWriteMask)}function rs(t,e){return t.compare==e.compare&&t.depthFailOp===e.depthFailOp&&t.failOp===e.failOp&&t.passOp===e.passOp&&t.mask===e.mask}function nb(t,e){return!xn(t.attachmentsState,e.attachmentsState,tb)||t.blendConstant&&e.blendConstant&&!v_(t.blendConstant,e.blendConstant)||t.stencilFront&&e.stencilFront&&!rs(t.stencilFront,e.stencilFront)||t.stencilBack&&e.stencilBack&&!rs(t.stencilBack,e.stencilBack)?!1:t.depthCompare===e.depthCompare&&t.depthWrite===e.depthWrite&&t.stencilWrite===e.stencilWrite&&t.cullMode===e.cullMode&&t.frontFace===e.frontFace&&t.polygonOffset===e.polygonOffset&&t.polygonOffsetFactor===e.polygonOffsetFactor&&t.polygonOffsetUnits===e.polygonOffsetUnits}function A_(t,e){return t.id===e.id}function rb(t,e){return t===e}function ib(t,e){return!(t.topology!==e.topology||t.inputLayout!==e.inputLayout||t.sampleCount!==e.sampleCount||t.megaStateDescriptor&&e.megaStateDescriptor&&!nb(t.megaStateDescriptor,e.megaStateDescriptor)||!A_(t.program,e.program)||!xn(t.colorAttachmentFormats,e.colorAttachmentFormats,rb)||t.depthStencilAttachmentFormat!==e.depthStencilAttachmentFormat)}function ob(t,e){return t.offset===e.offset&&t.shaderLocation===e.shaderLocation&&t.format===e.format&&t.divisor===e.divisor}function sb(t,e){return It(t)?It(e):It(e)?!1:t.arrayStride===e.arrayStride&&t.stepMode===e.stepMode&&xn(t.attributes,e.attributes,ob)}function ab(t,e){return!(t.indexBufferFormat!==e.indexBufferFormat||!xn(t.vertexBufferDescriptors,e.vertexBufferDescriptors,sb)||!A_(t.program,e.program))}function ub(t){var e=t.sampler,n=t.texture,r=t.dimension,i=t.formatKind,o=t.comparison;return{sampler:e,texture:n,dimension:r,formatKind:i,comparison:o}}function Mf(t){var e=t.buffer,n=t.size,r=t.binding,i=t.offset;return{binding:r,buffer:e,offset:i,size:n}}function lb(t){var e=t.binding,n=t.texture;return{binding:e,texture:n}}function cb(t){var e=t.samplerBindings&&_r(t.samplerBindings,ub),n=t.uniformBufferBindings&&_r(t.uniformBufferBindings,Mf),r=t.storageBufferBindings&&_r(t.storageBufferBindings,Mf),i=t.storageTextureBindings&&_r(t.storageTextureBindings,lb);return{samplerBindings:e,uniformBufferBindings:n,storageBufferBindings:r,storageTextureBindings:i,pipeline:t.pipeline}}function hb(t){var e=t.inputLayout,n=t.program,r=t.topology,i=t.megaStateDescriptor&&Mr(t.megaStateDescriptor),o=t.colorAttachmentFormats.slice(),s=t.depthStencilAttachmentFormat,a=t.sampleCount;return{inputLayout:e,megaStateDescriptor:i,program:n,topology:r,colorAttachmentFormats:o,depthStencilAttachmentFormat:s,sampleCount:a}}function fb(t){var e=t.shaderLocation,n=t.format,r=t.offset,i=t.divisor;return{shaderLocation:e,format:n,offset:r,divisor:i}}function db(t){if(It(t))return t;var e=t.arrayStride,n=t.stepMode,r=_r(t.attributes,fb);return{arrayStride:e,stepMode:n,attributes:r}}function pb(t){var e=_r(t.vertexBufferDescriptors,db),n=t.indexBufferFormat,r=t.program;return{vertexBufferDescriptors:e,indexBufferFormat:n,program:r}}var ae,_b=/([^[]*)(\[[0-9]+\])?/;function vb(t){if(t[t.length-1]!=="]")return{name:t,length:1,isArray:!1};var e=t.match(_b);if(!e||e.length<2)throw new Error("Failed to parse GLSL uniform name ".concat(t));return{name:e[1],length:Number(e[2])||1,isArray:!!e[2]}}function it(){var t=null;return function(e,n,r){var i=t!==r;return i&&(e.uniform1i(n,r),t=r),i}}function xe(t,e,n,r){var i=null,o=null;return function(s,a,u){var l=e(u,n),c=l.length,h=!1;if(i===null)i=new Float32Array(c),o=c,h=!0;else{ne(o===c,"Uniform length cannot change.");for(var f=0;f<c;++f)if(l[f]!==i[f]){h=!0;break}}return h&&(r(s,t,a,l),i.set(l)),h}}function Je(t,e,n,r){t[e](n,r)}function nn(t,e,n,r){t[e](n,!1,r)}var mb={},gb={},Eb={},Of=[0];function ju(t,e,n,r){e===1&&typeof t=="boolean"&&(t=t?1:0),Number.isFinite(t)&&(Of[0]=t,t=Of);var i=t.length;if(t instanceof n)return t;var o=r[i];o||(o=new n(i),r[i]=o);for(var s=0;s<i;s++)o[s]=t[s];return o}function vt(t,e){return ju(t,e,Float32Array,mb)}function mn(t,e){return ju(t,e,Int32Array,gb)}function mo(t,e){return ju(t,e,Uint32Array,Eb)}var yb=(ae={},ae[R.FLOAT]=xe.bind(null,"uniform1fv",vt,1,Je),ae[R.FLOAT_VEC2]=xe.bind(null,"uniform2fv",vt,2,Je),ae[R.FLOAT_VEC3]=xe.bind(null,"uniform3fv",vt,3,Je),ae[R.FLOAT_VEC4]=xe.bind(null,"uniform4fv",vt,4,Je),ae[R.INT]=xe.bind(null,"uniform1iv",mn,1,Je),ae[R.INT_VEC2]=xe.bind(null,"uniform2iv",mn,2,Je),ae[R.INT_VEC3]=xe.bind(null,"uniform3iv",mn,3,Je),ae[R.INT_VEC4]=xe.bind(null,"uniform4iv",mn,4,Je),ae[R.BOOL]=xe.bind(null,"uniform1iv",mn,1,Je),ae[R.BOOL_VEC2]=xe.bind(null,"uniform2iv",mn,2,Je),ae[R.BOOL_VEC3]=xe.bind(null,"uniform3iv",mn,3,Je),ae[R.BOOL_VEC4]=xe.bind(null,"uniform4iv",mn,4,Je),ae[R.FLOAT_MAT2]=xe.bind(null,"uniformMatrix2fv",vt,4,nn),ae[R.FLOAT_MAT3]=xe.bind(null,"uniformMatrix3fv",vt,9,nn),ae[R.FLOAT_MAT4]=xe.bind(null,"uniformMatrix4fv",vt,16,nn),ae[R.UNSIGNED_INT]=xe.bind(null,"uniform1uiv",mo,1,Je),ae[R.UNSIGNED_INT_VEC2]=xe.bind(null,"uniform2uiv",mo,2,Je),ae[R.UNSIGNED_INT_VEC3]=xe.bind(null,"uniform3uiv",mo,3,Je),ae[R.UNSIGNED_INT_VEC4]=xe.bind(null,"uniform4uiv",mo,4,Je),ae[R.FLOAT_MAT2x3]=xe.bind(null,"uniformMatrix2x3fv",vt,6,nn),ae[R.FLOAT_MAT2x4]=xe.bind(null,"uniformMatrix2x4fv",vt,8,nn),ae[R.FLOAT_MAT3x2]=xe.bind(null,"uniformMatrix3x2fv",vt,6,nn),ae[R.FLOAT_MAT3x4]=xe.bind(null,"uniformMatrix3x4fv",vt,12,nn),ae[R.FLOAT_MAT4x2]=xe.bind(null,"uniformMatrix4x2fv",vt,8,nn),ae[R.FLOAT_MAT4x3]=xe.bind(null,"uniformMatrix4x3fv",vt,12,nn),ae[R.SAMPLER_2D]=it,ae[R.SAMPLER_CUBE]=it,ae[R.SAMPLER_3D]=it,ae[R.SAMPLER_2D_SHADOW]=it,ae[R.SAMPLER_2D_ARRAY]=it,ae[R.SAMPLER_2D_ARRAY_SHADOW]=it,ae[R.SAMPLER_CUBE_SHADOW]=it,ae[R.INT_SAMPLER_2D]=it,ae[R.INT_SAMPLER_3D]=it,ae[R.INT_SAMPLER_CUBE]=it,ae[R.INT_SAMPLER_2D_ARRAY]=it,ae[R.UNSIGNED_INT_SAMPLER_2D]=it,ae[R.UNSIGNED_INT_SAMPLER_3D]=it,ae[R.UNSIGNED_INT_SAMPLER_CUBE]=it,ae[R.UNSIGNED_INT_SAMPLER_2D_ARRAY]=it,ae);function Pf(t,e,n){var r=yb[n.type];if(!r)throw new Error("Unknown GLSL uniform type ".concat(n.type));return r().bind(null,t,e)}var Tb={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121};function Ab(t){return Object.prototype.toString.call(t)in Tb}function ti(t,e){return"#define ".concat(t," ").concat(e)}function Sb(t){var e={};return t.replace(/^\s*#define\s*(\S*)\s*(\S*)\s*$/gm,function(n,r,i){var o=Number(i);return e[r]=isNaN(o)?i:o,""}),e}function Rb(t,e){var n=[];return t.replace(/^\s*layout\(location\s*=\s*(\S*)\)\s*in\s+\S+\s*(.*);$/gm,function(r,i,o){var s=Number(i);return n.push({location:isNaN(s)?e[i]:s,name:o}),""}),n}function Ff(t){if(t===void 0)return null;var e=/binding\s*=\s*(\d+)/.exec(t);if(e!==null){var n=parseInt(e[1],10);if(!Number.isNaN(n))return n}return null}function Bf(t){var e="",n=t;return[n,e]}function is(t,e,n,r,i){var o;r===void 0&&(r=null),i===void 0&&(i=!0);var s=t.glslVersion==="#version 100",a=e==="frag"&&((o=n.match(/^\s*layout\(location\s*=\s*\d*\)\s*out\s+vec4\s*(.*);$/gm))===null||o===void 0?void 0:o.length)>1,u=n.replace(`\r
`,`
`).split(`
`).map(function(M){return M.replace(/[/][/].*$/,"")}).filter(function(M){var P=!M||/^\s+$/.test(M);return!P}),l="";r!==null&&(l=Object.keys(r).map(function(M){return ti(M,r[M])}).join(`
`));var c=u.find(function(M){return M.startsWith("precision")})||"precision mediump float;",h=i?u.filter(function(M){return!M.startsWith("precision")}).join(`
`):u.join(`
`),f="";if(t.viewportOrigin===$t.UPPER_LEFT&&(f+="".concat(ti("VIEWPORT_ORIGIN_TL","1"),`
`)),t.clipSpaceNearZ===Pi.ZERO&&(f+="".concat(ti("CLIPSPACE_NEAR_ZERO","1"),`
`)),t.explicitBindingLocations){var p=0,_=0,v=0;h=h.replace(/^\s*(layout\((.*)\))?\s*uniform(.+{)$/gm,function(M,P,F,V){var B=F?"".concat(F,", "):"";return"layout(".concat(B,"set = ").concat(p,", binding = ").concat(_++,") uniform ").concat(V)}),p++,_=0,ne(t.separateSamplerTextures),h=h.replace(/^\s*(layout\((.*)\))?\s*uniform sampler(\w+) (.*);/gm,function(M,P,F,V,B){var O=Ff(F);O===null&&(O=_++);var N=Pt(Bf(V),2),U=N[0],z=N[1];return e==="frag"?`
layout(set = `.concat(p,", binding = ").concat(O*2+0,") uniform texture").concat(U," T_").concat(B,`;
layout(set = `).concat(p,", binding = ").concat(O*2+1,") uniform sampler").concat(z," S_").concat(B,";").trim():""}),h=h.replace(e==="frag"?/^\s*\b(varying|in)\b/gm:/^\s*\b(varying|out)\b/gm,function(M,P){return"layout(location = ".concat(v++,") ").concat(P)}),f+="".concat(ti("gl_VertexID","gl_VertexIndex"),`
`),f+="".concat(ti("gl_InstanceID","gl_InstanceIndex"),`
`),c=c.replace(/^precision (.*) sampler(.*);$/gm,"")}else{var m=0;h=h.replace(/^\s*(layout\((.*)\))?\s*uniform sampler(\w+) (.*);/gm,function(M,P,F,V,B){var O=Ff(F);return O===null&&(O=m++),"uniform sampler".concat(V," ").concat(B,"; // BINDING=").concat(O)})}if(h=h.replace(/\bPU_SAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return"SAMPLER_".concat(P,"(P_").concat(F,")")}),h=h.replace(/\bPF_SAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return"PP_SAMPLER_".concat(P,"(P_").concat(F,")")}),h=h.replace(/\bPU_TEXTURE\((.*?)\)/g,function(M,P){return"TEXTURE(P_".concat(P,")")}),t.separateSamplerTextures)h=h.replace(/\bPD_SAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){var V=Pt(Bf(P),2),B=V[0],O=V[1];return"texture".concat(B," T_P_").concat(F,", sampler").concat(O," S_P_").concat(F)}),h=h.replace(/\bPP_SAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return"T_".concat(F,", S_").concat(F)}),h=h.replace(/\bSAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return"sampler".concat(P,"(T_").concat(F,", S_").concat(F,")")}),h=h.replace(/\bTEXTURE\((.*?)\)/g,function(M,P){return"T_".concat(P)});else{var y=[];h=h.replace(/\bPD_SAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return"sampler".concat(P," P_").concat(F)}),h=h.replace(/\bPP_SAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return F}),h=h.replace(/\bSAMPLER_(\w+)\((.*?)\)/g,function(M,P,F){return y.push([F,P]),F}),s&&y.forEach(function(M){var P=Pt(M,2),F=P[0],V=P[1];h=h.replace(new RegExp("texture\\(".concat(F),"g"),function(){return"texture".concat(V,"(").concat(F)})}),h=h.replace(/\bTEXTURE\((.*?)\)/g,function(M,P){return P})}var T="".concat(s?"":t.glslVersion,`
`).concat(s&&a?`#extension GL_EXT_draw_buffers : require
`:"",`
`).concat(s&&e==="frag"?`#extension GL_OES_standard_derivatives : enable
`:"").concat(i?c:"",`
`).concat(f||"").concat(l?l+`
`:"",`
`).concat(h,`
`).trim();if(t.explicitBindingLocations&&e==="frag"&&(T=T.replace(/^\b(out)\b/g,function(M,P){return"layout(location = 0) ".concat(P)})),s){if(e==="frag"&&(T=T.replace(/^\s*in\s+(\S+)\s*(.*);$/gm,function(M,P,F){return"varying ".concat(P," ").concat(F,`;
`)})),e==="vert"&&(T=T.replace(/^\s*out\s+(\S+)\s*(.*);$/gm,function(M,P,F){return"varying ".concat(P," ").concat(F,`;
`)}),T=T.replace(/^\s*layout\(location\s*=\s*\S*\)\s*in\s+(\S+)\s*(.*);$/gm,function(M,P,F){return"attribute ".concat(P," ").concat(F,`;
`)})),T=T.replace(/\s*uniform\s*.*\s*{((?:\s*.*\s*)*?)};/g,function(M,P){return P.trim().replace(/^.*$/gm,function(F){var V=F.trim();return V.startsWith("#")?V:F?"uniform ".concat(V):""})}),e==="frag")if(a){var S=[];T=T.replace(/^\s*layout\(location\s*=\s*\d*\)\s*out\s+vec4\s*(.*);$/gm,function(M,P){return S.push(P),"vec4 ".concat(P,`;
`)});var x=T.lastIndexOf("}");T=T.substring(0,x)+`
    `.concat(S.map(function(M,P){return"gl_FragData[".concat(P,"] = ").concat(M,`;
    `)}).join(`
`))+T.substring(x)}else{var C;if(T=T.replace(/^\s*out\s+(\S+)\s*(.*);$/gm,function(M,P,F){return C=F,"".concat(P," ").concat(F,`;
`)}),C){var x=T.lastIndexOf("}");T=T.substring(0,x)+`
  gl_FragColor = vec4(`.concat(C,`);
`)+T.substring(x)}}T=T.replace(/^\s*layout\((.*)\)/gm,"")}return T}var Mt=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=t.call(this)||this;return o.id=r,o.device=i,o.device.resourceCreationTracker!==null&&o.device.resourceCreationTracker.trackResourceCreated(o),o}return e.prototype.destroy=function(){this.device.resourceCreationTracker!==null&&this.device.resourceCreationTracker.trackResourceDestroyed(this)},e}(f_),xb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.Bindings;var a=o.uniformBufferBindings,u=o.samplerBindings;return s.uniformBufferBindings=a||[],s.samplerBindings=u||[],s.bindingLayouts=s.createBindingLayouts(),s}return e.prototype.createBindingLayouts=function(){var n=0,r=0,i=[],o=this.uniformBufferBindings.length,s=this.samplerBindings.length;return i.push({firstUniformBuffer:n,numUniformBuffers:o,firstSampler:r,numSamplers:s}),n+=o,r+=s,{numUniformBuffers:n,numSamplers:r,bindingLayoutTables:i}},e}(Mt),ni;function G(t){return ni!==void 0?ni:typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?(ni=!0,!0):(ni=!!(t&&t._version===2),ni)}function S_(t){var e=Gt(t);switch(e){case k.BC1:case k.BC2:case k.BC3:case k.BC4_UNORM:case k.BC4_SNORM:case k.BC5_UNORM:case k.BC5_SNORM:return!0;default:return!1}}function R_(t){var e=Ir(t);if(e&X.Normalized)return!1;var n=Gt(t);return n===k.S8||n===k.S16||n===k.S32||n===k.U8||n===k.U16||n===k.U32}function Cb(t){switch(t){case wt.STATIC:return R.STATIC_DRAW;case wt.DYNAMIC:return R.DYNAMIC_DRAW}}function Nf(t){if(t&ye.INDEX)return R.ELEMENT_ARRAY_BUFFER;if(t&ye.VERTEX)return R.ARRAY_BUFFER;if(t&ye.UNIFORM)return R.UNIFORM_BUFFER}function bb(t){switch(t){case De.TRIANGLES:return R.TRIANGLES;case De.POINTS:return R.POINTS;case De.TRIANGLE_STRIP:return R.TRIANGLE_STRIP;case De.LINES:return R.LINES;case De.LINE_STRIP:return R.LINE_STRIP;default:throw new Error("Unknown primitive topology mode")}}function Ib(t){switch(t){case k.U8:return R.UNSIGNED_BYTE;case k.U16:return R.UNSIGNED_SHORT;case k.U32:return R.UNSIGNED_INT;case k.S8:return R.BYTE;case k.S16:return R.SHORT;case k.S32:return R.INT;case k.F16:return R.HALF_FLOAT;case k.F32:return R.FLOAT;default:throw new Error("whoops")}}function Mb(t){switch(t){case Z.R:return 1;case Z.RG:return 2;case Z.RGB:return 3;case Z.RGBA:return 4;default:return 1}}function Ob(t){var e=Gt(t),n=Wu(t),r=Ir(t),i=Ib(e),o=Mb(n),s=!!(r&X.Normalized);return{size:o,type:i,normalized:s}}function Pb(t){switch(t){case I.U8_R:return R.UNSIGNED_BYTE;case I.U16_R:return R.UNSIGNED_SHORT;case I.U32_R:return R.UNSIGNED_INT;default:throw new Error("whoops")}}function ri(t){switch(t){case ot.CLAMP_TO_EDGE:return R.CLAMP_TO_EDGE;case ot.REPEAT:return R.REPEAT;case ot.MIRRORED_REPEAT:return R.MIRRORED_REPEAT;default:throw new Error("whoops")}}function go(t,e){if(e===Ue.LINEAR&&t===Fe.BILINEAR)return R.LINEAR_MIPMAP_LINEAR;if(e===Ue.LINEAR&&t===Fe.POINT)return R.NEAREST_MIPMAP_LINEAR;if(e===Ue.NEAREST&&t===Fe.BILINEAR)return R.LINEAR_MIPMAP_NEAREST;if(e===Ue.NEAREST&&t===Fe.POINT)return R.NEAREST_MIPMAP_NEAREST;if(e===Ue.NO_MIP&&t===Fe.BILINEAR)return R.LINEAR;if(e===Ue.NO_MIP&&t===Fe.POINT)return R.NEAREST;throw new Error("Unknown texture filter mode")}function Rr(t,e){e===void 0&&(e=0);var n=t;return n.gl_buffer_pages[e/n.pageByteSize|0]}function cr(t){var e=t;return e.gl_texture}function nu(t){var e=t;return e.gl_sampler}function ii(t,e){t.name=e,t.__SPECTOR_Metadata={name:e}}function Df(t,e){for(var n=[];;){var r=e.exec(t);if(!r)break;n.push(r)}return n}function gn(t){return t.blendMode==Ve.ADD&&t.blendSrcFactor==ie.ONE&&t.blendDstFactor===ie.ZERO}function Fb(t){switch(t){case Jo.OcclusionConservative:return R.ANY_SAMPLES_PASSED_CONSERVATIVE;default:throw new Error("whoops")}}function Bb(t){if(t===oe.TEXTURE_2D)return R.TEXTURE_2D;if(t===oe.TEXTURE_2D_ARRAY)return R.TEXTURE_2D_ARRAY;if(t===oe.TEXTURE_CUBE_MAP)return R.TEXTURE_CUBE_MAP;if(t===oe.TEXTURE_3D)return R.TEXTURE_3D;throw new Error("whoops")}function ia(t,e,n,r){return!(t%n!==0||e%r!==0)}var Nb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.Buffer;var a=o.viewOrSize,u=o.usage,l=o.hint,c=l===void 0?wt.STATIC:l,h=i.uniformBufferMaxPageByteSize,f=i.gl,p=u&ye.UNIFORM;p||(G(f)?f.bindVertexArray(null):i.OES_vertex_array_object.bindVertexArrayOES(null));var _=pr(a)?ts(a,4):ts(a.byteLength,4);s.gl_buffer_pages=[];var v;if(p){for(var m=_;m>0;)s.gl_buffer_pages.push(s.createBufferPage(Math.min(m,h),u,c)),m-=h;v=h}else s.gl_buffer_pages.push(s.createBufferPage(_,u,c)),v=_;return s.pageByteSize=v,s.byteSize=_,s.usage=u,s.gl_target=Nf(u),pr(a)||s.setSubData(0,new Uint8Array(a.buffer)),p||(G(f)?f.bindVertexArray(s.device.currentBoundVAO):i.OES_vertex_array_object.bindVertexArrayOES(s.device.currentBoundVAO)),s}return e.prototype.setSubData=function(n,r,i,o){i===void 0&&(i=0),o===void 0&&(o=r.byteLength-i);for(var s=this.device.gl,a=this.pageByteSize,u=n+o,l=n,c=n%a;l<u;){var h=G(s)?s.COPY_WRITE_BUFFER:this.gl_target,f=Rr(this,l);if(f.ubo)return;s.bindBuffer(h,f),G(s)?s.bufferSubData(h,c,r,i,Math.min(u-l,a)):s.bufferSubData(h,c,r),l+=a,c=0,i+=a,this.device.debugGroupStatisticsBufferUpload()}},e.prototype.destroy=function(){t.prototype.destroy.call(this);for(var n=0;n<this.gl_buffer_pages.length;n++)this.gl_buffer_pages[n].ubo||this.device.gl.deleteBuffer(this.gl_buffer_pages[n]);this.gl_buffer_pages=[]},e.prototype.createBufferPage=function(n,r,i){var o=this.device.gl,s=r&ye.UNIFORM;if(!G(o)&&s)return{ubo:!0};var a=this.device.ensureResourceExists(o.createBuffer()),u=Nf(r),l=Cb(i);return o.bindBuffer(u,a),o.bufferData(u,n,l),a},e}(Mt),Db=function(t){Oe(e,t);function e(n){var r,i,o,s,a=n.id,u=n.device,l=n.descriptor,c,h=t.call(this,{id:a,device:u})||this;h.type=he.InputLayout;var f=l.vertexBufferDescriptors,p=l.indexBufferFormat,_=l.program;ne(p===I.U16_R||p===I.U32_R||p===null);var v=p!==null?Pb(p):null,m=p!==null?p_(p):null,y=h.device.gl,T=h.device.ensureResourceExists(G(y)?y.createVertexArray():u.OES_vertex_array_object.createVertexArrayOES());G(y)?y.bindVertexArray(T):u.OES_vertex_array_object.bindVertexArrayOES(T),y.bindBuffer(y.ARRAY_BUFFER,Rr(h.device.fallbackVertexBuffer));try{for(var S=Zn(l.vertexBufferDescriptors),x=S.next();!x.done;x=S.next()){var C=x.value,M=C.stepMode,P=C.attributes;try{for(var F=(o=void 0,Zn(P)),V=F.next();!V.done;V=F.next()){var B=V.value,O=B.shaderLocation,N=B.format,U=B.divisor,z=U===void 0?1:U,W=G(y)?O:(c=_.attributes[O])===null||c===void 0?void 0:c.location,Y=Ob(N);if(B.vertexFormat=Y,!It(W)){R_(N);var j=Y.size,te=Y.type,J=Y.normalized;y.vertexAttribPointer(W,j,te,J,0,0),M===Yn.INSTANCE&&(G(y)?y.vertexAttribDivisor(W,z):u.ANGLE_instanced_arrays.vertexAttribDivisorANGLE(W,z)),y.enableVertexAttribArray(W)}}}catch(Q){o={error:Q}}finally{try{V&&!V.done&&(s=F.return)&&s.call(F)}finally{if(o)throw o.error}}}}catch(Q){r={error:Q}}finally{try{x&&!x.done&&(i=S.return)&&i.call(S)}finally{if(r)throw r.error}}return G(y)?y.bindVertexArray(null):u.OES_vertex_array_object.bindVertexArrayOES(null),h.vertexBufferDescriptors=f,h.vao=T,h.indexBufferFormat=p,h.indexBufferType=v,h.indexBufferCompByteSize=m,h.program=_,h}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.device.currentBoundVAO===this.vao&&(G(this.device.gl)?(this.device.gl.bindVertexArray(null),this.device.gl.deleteVertexArray(this.vao)):(this.device.OES_vertex_array_object.bindVertexArrayOES(null),this.device.OES_vertex_array_object.deleteVertexArrayOES(this.vao)),this.device.currentBoundVAO=null)},e}(Mt),ru=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=n.fake,a=t.call(this,{id:r,device:i})||this;a.type=he.Texture,o=Ce({dimension:oe.TEXTURE_2D,depthOrArrayLayers:1,mipLevelCount:1},o);var u=a.device.gl,l,c,h=a.clampmipLevelCount(o);if(a.immutable=o.usage===et.RENDER_TARGET,a.pixelStore=o.pixelStore,a.format=o.format,a.dimension=o.dimension,a.formatKind=__(o.format),a.width=o.width,a.height=o.height,a.depthOrArrayLayers=o.depthOrArrayLayers,a.mipmaps=h>=1,!s){c=a.device.ensureResourceExists(u.createTexture());var f=a.device.translateTextureType(o.format),p=a.device.translateTextureInternalFormat(o.format);if(a.device.setActiveTexture(u.TEXTURE0),a.device.currentTextures[0]=null,a.preprocessImage(),o.dimension===oe.TEXTURE_2D){if(l=R.TEXTURE_2D,u.bindTexture(l,c),a.immutable)if(G(u))u.texStorage2D(l,h,p,o.width,o.height);else{var _=(p===R.DEPTH_COMPONENT||a.isNPOT(),0);(a.format===I.D32F||a.format===I.D24_S8)&&!G(u)&&!i.WEBGL_depth_texture||(u.texImage2D(l,_,p,o.width,o.height,0,p,f,null),a.mipmaps&&(a.mipmaps=!1,u.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.LINEAR),u.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),u.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE)))}ne(o.depthOrArrayLayers===1)}else if(o.dimension===oe.TEXTURE_2D_ARRAY)l=R.TEXTURE_2D_ARRAY,u.bindTexture(l,c),a.immutable&&G(u)&&u.texStorage3D(l,h,p,o.width,o.height,o.depthOrArrayLayers);else if(o.dimension===oe.TEXTURE_3D)l=R.TEXTURE_3D,u.bindTexture(l,c),a.immutable&&G(u)&&u.texStorage3D(l,h,p,o.width,o.height,o.depthOrArrayLayers);else if(o.dimension===oe.TEXTURE_CUBE_MAP)l=R.TEXTURE_CUBE_MAP,u.bindTexture(l,c),a.immutable&&G(u)&&u.texStorage2D(l,h,p,o.width,o.height),ne(o.depthOrArrayLayers===6);else throw new Error("whoops")}return a.gl_texture=c,a.gl_target=l,a.mipLevelCount=h,a}return e.prototype.setImageData=function(n,r){r===void 0&&(r=0);var i=this.device.gl;S_(this.format);var o=this.gl_target===R.TEXTURE_3D||this.gl_target===R.TEXTURE_2D_ARRAY,s=this.gl_target===R.TEXTURE_CUBE_MAP,a=Ab(n[0]);this.device.setActiveTexture(i.TEXTURE0),this.device.currentTextures[0]=null;var u=n[0],l,c;a?(l=this.width,c=this.height):(l=u.width,c=u.height,this.width=l,this.height=c),i.bindTexture(this.gl_target,this.gl_texture);var h=this.device.translateTextureFormat(this.format),f=G(i)?this.device.translateInternalTextureFormat(this.format):h,p=this.device.translateTextureType(this.format);this.preprocessImage();for(var _=0;_<this.depthOrArrayLayers;_++){var v=n[_],m=this.gl_target;s&&(m=R.TEXTURE_CUBE_MAP_POSITIVE_X+_%6),this.immutable?i.texSubImage2D(m,r,0,0,l,c,h,p,v):G(i)?o?i.texImage3D(m,r,f,l,c,this.depthOrArrayLayers,0,h,p,v):i.texImage2D(m,r,f,l,c,0,h,p,v):a?i.texImage2D(m,r,h,l,c,0,h,p,v):i.texImage2D(m,r,h,h,p,v)}this.mipmaps&&this.generateMipmap(o)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.device.gl.deleteTexture(cr(this))},e.prototype.clampmipLevelCount=function(n){if(n.dimension===oe.TEXTURE_2D_ARRAY&&n.depthOrArrayLayers>1){var r=Gt(n.format);if(r===k.BC1)for(var i=n.width,o=n.height,s=0;s<n.mipLevelCount;s++){if(i<=2||o<=2)return s-1;i=Math.max(i/2|0,1),o=Math.max(o/2|0,1)}}return n.mipLevelCount},e.prototype.preprocessImage=function(){var n=this.device.gl;this.pixelStore&&(this.pixelStore.unpackFlipY&&n.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,!0),this.pixelStore.packAlignment&&n.pixelStorei(R.PACK_ALIGNMENT,this.pixelStore.packAlignment),this.pixelStore.unpackAlignment&&n.pixelStorei(R.UNPACK_ALIGNMENT,this.pixelStore.unpackAlignment))},e.prototype.generateMipmap=function(n){n===void 0&&(n=!1);var r=this.device.gl;return!G(r)&&this.isNPOT()?this:(this.gl_texture&&this.gl_target&&(r.bindTexture(this.gl_target,this.gl_texture),n?(r.texParameteri(this.gl_target,R.TEXTURE_BASE_LEVEL,0),r.texParameteri(this.gl_target,R.TEXTURE_MAX_LEVEL,Math.log2(this.width)),r.texParameteri(this.gl_target,R.TEXTURE_MIN_FILTER,R.LINEAR_MIPMAP_LINEAR),r.texParameteri(this.gl_target,R.TEXTURE_MAG_FILTER,R.LINEAR)):r.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST_MIPMAP_LINEAR),r.generateMipmap(this.gl_target),r.bindTexture(this.gl_target,null)),this)},e.prototype.isNPOT=function(){var n=this.device.gl;return G(n)?!1:!es(this.width)||!es(this.height)},e}(Mt),wb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.RenderTarget,s.gl_renderbuffer=null,s.texture=null;var a=s.device.gl,u=o.format,l=o.width,c=o.height,h=o.sampleCount,f=h===void 0?1:h,p=o.texture,_=!1;if((u===I.D32F||u===I.D24_S8)&&p&&!G(a)&&!i.WEBGL_depth_texture&&(p.destroy(),s.texture=null,_=!0),!_&&p)s.texture=p;else{s.gl_renderbuffer=s.device.ensureResourceExists(a.createRenderbuffer()),a.bindRenderbuffer(a.RENDERBUFFER,s.gl_renderbuffer);var v=s.device.translateTextureInternalFormat(u,!0);G(a)&&f>1?a.renderbufferStorageMultisample(R.RENDERBUFFER,f,v,l,c):a.renderbufferStorage(R.RENDERBUFFER,v,l,c)}return s.format=u,s.width=l,s.height=c,s.sampleCount=f,s}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.gl_renderbuffer!==null&&this.device.gl.deleteRenderbuffer(this.gl_renderbuffer),this.texture&&this.texture.destroy()},e}(Mt),lt;(function(t){t[t.NeedsCompile=0]="NeedsCompile",t[t.Compiling=1]="Compiling",t[t.NeedsBind=2]="NeedsBind",t[t.ReadyToUse=3]="ReadyToUse"})(lt||(lt={}));var Lb=function(t){Oe(e,t);function e(n,r){var i=n.id,o=n.device,s=n.descriptor,a=t.call(this,{id:i,device:o})||this;a.rawVertexGLSL=r,a.type=he.Program,a.uniformSetters={},a.attributes=[];var u=a.device.gl;return a.descriptor=s,a.gl_program=a.device.ensureResourceExists(u.createProgram()),a.gl_shader_vert=null,a.gl_shader_frag=null,a.compileState=lt.NeedsCompile,a.tryCompileProgram(),a}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.device.gl.deleteProgram(this.gl_program),this.device.gl.deleteShader(this.gl_shader_vert),this.device.gl.deleteShader(this.gl_shader_frag)},e.prototype.tryCompileProgram=function(){ne(this.compileState===lt.NeedsCompile);var n=this.descriptor,r=n.vertex,i=n.fragment,o=this.device.gl;r!=null&&r.glsl&&(i!=null&&i.glsl)&&(this.gl_shader_vert=this.compileShader(r.postprocess?r.postprocess(r.glsl):r.glsl,o.VERTEX_SHADER),this.gl_shader_frag=this.compileShader(i.postprocess?i.postprocess(i.glsl):i.glsl,o.FRAGMENT_SHADER),o.attachShader(this.gl_program,this.gl_shader_vert),o.attachShader(this.gl_program,this.gl_shader_frag),o.linkProgram(this.gl_program),this.compileState=lt.Compiling,G(o)||(this.readUniformLocationsFromLinkedProgram(),this.readAttributesFromLinkedProgram()))},e.prototype.readAttributesFromLinkedProgram=function(){for(var n,r=this.device.gl,i=r.getProgramParameter(this.gl_program,r.ACTIVE_ATTRIBUTES),o=Sb(this.descriptor.vertex.glsl),s=Rb(this.rawVertexGLSL,o),a=function(c){var h=r.getActiveAttrib(u.gl_program,c),f=h.name,p=h.type,_=h.size,v=r.getAttribLocation(u.gl_program,f),m=(n=s.find(function(y){return y.name===f}))===null||n===void 0?void 0:n.location;v>=0&&!It(m)&&(u.attributes[m]={name:f,location:v,type:p,size:_})},u=this,l=0;l<i;l++)a(l)},e.prototype.readUniformLocationsFromLinkedProgram=function(){for(var n=this.device.gl,r=n.getProgramParameter(this.gl_program,n.ACTIVE_UNIFORMS),i=0;i<r;i++){var o=n.getActiveUniform(this.gl_program,i),s=vb(o.name).name,a=n.getUniformLocation(this.gl_program,s);if(this.uniformSetters[s]=Pf(n,a,o),o&&o.size>1)for(var u=0;u<o.size;u++)a=n.getUniformLocation(this.gl_program,"".concat(s,"[").concat(u,"]")),this.uniformSetters["".concat(s,"[").concat(u,"]")]=Pf(n,a,o)}},e.prototype.compileShader=function(n,r){var i=this.device.gl,o=this.device.ensureResourceExists(i.createShader(r));return i.shaderSource(o,n),i.compileShader(o),o},e.prototype.setUniformsLegacy=function(n){n===void 0&&(n={});var r=this.device.gl;if(!G(r)){var i=!1;for(var o in n){i||(r.useProgram(this.gl_program),i=!0);var s=n[o],a=this.uniformSetters[o];if(a){var u=s;u instanceof ru&&(u=u.textureIndex),a(u)}}}return this},e}(Mt),Ub=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.QueryPool;var a=s.device.gl;if(G(a)){var u=o.elemCount,l=o.type;s.gl_query=ZC(u,function(){return s.device.ensureResourceExists(a.createQuery())}),s.gl_query_type=Fb(l)}return s}return e.prototype.queryResultOcclusion=function(n){var r=this.device.gl;if(G(r)){var i=this.gl_query[n];return r.getQueryParameter(i,r.QUERY_RESULT_AVAILABLE)?!!r.getQueryParameter(i,r.QUERY_RESULT):null}return null},e.prototype.destroy=function(){t.prototype.destroy.call(this);var n=this.device.gl;if(G(n))for(var r=0;r<this.gl_query.length;r++)n.deleteQuery(this.gl_query[r])},e}(Mt),kb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=t.call(this,{id:r,device:i})||this;return o.type=he.Readback,o.gl_pbo=null,o.gl_sync=null,o}return e.prototype.clientWaitAsync=function(n,r,i){r===void 0&&(r=0),i===void 0&&(i=10);var o=this.device.gl;return new Promise(function(s,a){function u(){var l=o.clientWaitSync(n,r,0);if(l==o.WAIT_FAILED){a();return}if(l==o.TIMEOUT_EXPIRED){setTimeout(u,VC(i,0,o.MAX_CLIENT_WAIT_TIMEOUT_WEBGL));return}s()}u()})},e.prototype.getBufferSubDataAsync=function(n,r,i,o,s,a){return Ar(this,void 0,void 0,function(){var u;return Sr(this,function(l){switch(l.label){case 0:return u=this.device.gl,G(u)?(this.gl_sync=u.fenceSync(u.SYNC_GPU_COMMANDS_COMPLETE,0),u.flush(),[4,this.clientWaitAsync(this.gl_sync,0,10)]):[3,2];case 1:return l.sent(),u.bindBuffer(n,r),u.getBufferSubData(n,i,o,s,a),u.bindBuffer(n,null),[2,o];case 2:return[2]}})})},e.prototype.readTexture=function(n,r,i,o,s,a,u,l){return u===void 0&&(u=0),l===void 0&&(l=a.byteLength||0),Ar(this,void 0,void 0,function(){var c,h,f,p,_;return Sr(this,function(v){return c=this.device.gl,h=n,f=this.device.translateTextureFormat(h.format),p=this.device.translateTextureType(h.format),_=WC(h.format),G(c)?(this.gl_pbo=this.device.ensureResourceExists(c.createBuffer()),c.bindBuffer(c.PIXEL_PACK_BUFFER,this.gl_pbo),c.bufferData(c.PIXEL_PACK_BUFFER,l,c.STREAM_READ),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),c.bindFramebuffer(R.READ_FRAMEBUFFER,this.device.readbackFramebuffer),c.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,h.gl_texture,0),c.bindBuffer(c.PIXEL_PACK_BUFFER,this.gl_pbo),c.readPixels(r,i,o,s,f,p,u*_),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),[2,this.getBufferSubDataAsync(c.PIXEL_PACK_BUFFER,this.gl_pbo,0,a,u,0)]):[2,this.readTextureSync(n,r,i,o,s,a,u,l)]})})},e.prototype.readTextureSync=function(n,r,i,o,s,a,u,l){l===void 0&&(l=a.byteLength||0);var c=this.device.gl,h=n,f=this.device.translateTextureType(h.format);return c.bindFramebuffer(R.FRAMEBUFFER,this.device.readbackFramebuffer),c.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,h.gl_texture,0),c.pixelStorei(c.PACK_ALIGNMENT,4),c.readPixels(r,i,o,s,c.RGBA,f,a),a},e.prototype.readBuffer=function(n,r,i,o,s){return Ar(this,void 0,void 0,function(){var a;return Sr(this,function(u){return a=this.device.gl,G(a)?[2,this.getBufferSubDataAsync(a.ARRAY_BUFFER,Rr(n,r),r,i,o,s)]:[2,Promise.reject()]})})},e.prototype.destroy=function(){t.prototype.destroy.call(this),G(this.device.gl)&&(this.gl_sync!==null&&this.device.gl.deleteSync(this.gl_sync),this.gl_pbo!==null&&this.device.gl.deleteBuffer(this.gl_pbo))},e}(Mt),zb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s,a,u=t.call(this,{id:r,device:i})||this;return u.type=he.RenderPipeline,u.drawMode=bb((s=o.topology)!==null&&s!==void 0?s:De.TRIANGLES),u.program=o.program,u.inputLayout=o.inputLayout,u.megaState=Ce(Ce({},Mr(Or)),o.megaStateDescriptor),u.colorAttachmentFormats=o.colorAttachmentFormats.slice(),u.depthStencilAttachmentFormat=o.depthStencilAttachmentFormat,u.sampleCount=(a=o.sampleCount)!==null&&a!==void 0?a:1,u}return e}(Mt),Vb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;return s.type=he.ComputePipeline,s.descriptor=o,s}return e}(Mt),Hb=function(){function t(){this.liveObjects=new Set,this.creationStacks=new Map,this.deletionStacks=new Map}return t.prototype.trackResourceCreated=function(e){this.creationStacks.set(e,new Error().stack),this.liveObjects.add(e)},t.prototype.trackResourceDestroyed=function(e){this.deletionStacks.has(e)&&console.warn("Object double freed:",e,`

Creation stack: `,this.creationStacks.get(e),`

Deletion stack: `,this.deletionStacks.get(e),`

This stack: `,new Error().stack),this.deletionStacks.set(e,new Error().stack),this.liveObjects.delete(e)},t.prototype.checkForLeaks=function(){var e,n;try{for(var r=Zn(this.liveObjects.values()),i=r.next();!i.done;i=r.next()){var o=i.value;console.warn("Object leaked:",o,"Creation stack:",this.creationStacks.get(o))}}catch(s){e={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},t.prototype.setResourceLeakCheck=function(e,n){n?this.liveObjects.add(e):this.liveObjects.delete(e)},t}(),Xb=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s,a,u=t.call(this,{id:r,device:i})||this;u.type=he.Sampler;var l=u.device.gl;if(G(l)){var c=u.device.ensureResourceExists(l.createSampler());l.samplerParameteri(c,R.TEXTURE_WRAP_S,ri(o.addressModeU)),l.samplerParameteri(c,R.TEXTURE_WRAP_T,ri(o.addressModeV)),l.samplerParameteri(c,R.TEXTURE_WRAP_R,ri((s=o.addressModeW)!==null&&s!==void 0?s:o.addressModeU)),l.samplerParameteri(c,R.TEXTURE_MIN_FILTER,go(o.minFilter,o.mipmapFilter)),l.samplerParameteri(c,R.TEXTURE_MAG_FILTER,go(o.magFilter,Ue.NO_MIP)),o.lodMinClamp!==void 0&&l.samplerParameterf(c,R.TEXTURE_MIN_LOD,o.lodMinClamp),o.lodMaxClamp!==void 0&&l.samplerParameterf(c,R.TEXTURE_MAX_LOD,o.lodMaxClamp),o.compareFunction!==void 0&&(l.samplerParameteri(c,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.samplerParameteri(c,l.TEXTURE_COMPARE_FUNC,o.compareFunction));var h=(a=o.maxAnisotropy)!==null&&a!==void 0?a:1;h>1&&u.device.EXT_texture_filter_anisotropic!==null&&(ne(o.minFilter===Fe.BILINEAR&&o.magFilter===Fe.BILINEAR&&o.mipmapFilter===Ue.LINEAR),l.samplerParameterf(c,u.device.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,h)),u.gl_sampler=c}else u.descriptor=o;return u}return e.prototype.setTextureParameters=function(n,r,i){var o,s=this.device.gl,a=this.descriptor;this.isNPOT(r,i)?s.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.LINEAR):s.texParameteri(n,R.TEXTURE_MIN_FILTER,go(a.minFilter,a.mipmapFilter)),s.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,ri(a.addressModeU)),s.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,ri(a.addressModeV)),s.texParameteri(n,R.TEXTURE_MAG_FILTER,go(a.magFilter,Ue.NO_MIP));var u=(o=a.maxAnisotropy)!==null&&o!==void 0?o:1;u>1&&this.device.EXT_texture_filter_anisotropic!==null&&(ne(a.minFilter===Fe.BILINEAR&&a.magFilter===Fe.BILINEAR&&a.mipmapFilter===Ue.LINEAR),s.texParameteri(n,this.device.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,u))},e.prototype.destroy=function(){t.prototype.destroy.call(this),G(this.device.gl)&&this.device.gl.deleteSampler(nu(this))},e.prototype.isNPOT=function(n,r){return!es(n)||!es(r)},e}(Mt),Wb=function(){function t(){}return t.prototype.dispatchWorkgroups=function(e,n,r){},t.prototype.dispatchWorkgroupsIndirect=function(e,n){},t.prototype.setPipeline=function(e){},t.prototype.setBindings=function(e){},t.prototype.pushDebugGroup=function(e){},t.prototype.popDebugGroup=function(){},t.prototype.insertDebugMarker=function(e){},t}(),jb=function(t){Oe(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.type=he.RenderBundle,n.commands=[],n}return e.prototype.push=function(n){this.commands.push(n)},e.prototype.replay=function(){this.commands.forEach(function(n){return n()})},e}(Mt),wf=65536,$b=/uniform(?:\s+)(\w+)(?:\s?){([^]*?)}/g,Zb=function(){function t(e,n){n===void 0&&(n={}),this.shaderDebug=!1,this.OES_vertex_array_object=null,this.ANGLE_instanced_arrays=null,this.OES_texture_float=null,this.OES_draw_buffers_indexed=null,this.WEBGL_draw_buffers=null,this.WEBGL_depth_texture=null,this.WEBGL_color_buffer_float=null,this.EXT_color_buffer_half_float=null,this.WEBGL_compressed_texture_s3tc=null,this.WEBGL_compressed_texture_s3tc_srgb=null,this.EXT_texture_compression_rgtc=null,this.EXT_texture_filter_anisotropic=null,this.KHR_parallel_shader_compile=null,this.EXT_texture_norm16=null,this.EXT_color_buffer_float=null,this.OES_texture_float_linear=null,this.OES_texture_half_float_linear=null,this.scTexture=null,this.scPlatformFramebuffer=null,this.currentActiveTexture=null,this.currentBoundVAO=null,this.currentProgram=null,this.resourceCreationTracker=null,this.resourceUniqueId=0,this.currentColorAttachments=[],this.currentColorAttachmentLevels=[],this.currentColorResolveTos=[],this.currentColorResolveToLevels=[],this.currentSampleCount=-1,this.currentIndexBufferByteOffset=null,this.currentMegaState=Mr(Or),this.currentSamplers=[],this.currentTextures=[],this.currentUniformBuffers=[],this.currentUniformBufferByteOffsets=[],this.currentUniformBufferByteSizes=[],this.currentScissorEnabled=!1,this.currentStencilRef=null,this.currentRenderPassDescriptor=null,this.currentRenderPassDescriptorStack=[],this.debugGroupStack=[],this.resolveColorAttachmentsChanged=!1,this.resolveDepthStencilAttachmentsChanged=!1,this.explicitBindingLocations=!1,this.separateSamplerTextures=!1,this.viewportOrigin=$t.LOWER_LEFT,this.clipSpaceNearZ=Pi.NEGATIVE_ONE,this.supportMRT=!1,this.inBlitRenderPass=!1,this.supportedSampleCounts=[],this.occlusionQueriesRecommended=!1,this.computeShadersSupported=!1,this.gl=e,this.contextAttributes=kn(e.getContextAttributes()),G(e)?(this.EXT_texture_norm16=e.getExtension("EXT_texture_norm16"),this.EXT_color_buffer_float=e.getExtension("EXT_color_buffer_float")):(this.OES_vertex_array_object=e.getExtension("OES_vertex_array_object"),this.ANGLE_instanced_arrays=e.getExtension("ANGLE_instanced_arrays"),this.OES_texture_float=e.getExtension("OES_texture_float"),this.WEBGL_draw_buffers=e.getExtension("WEBGL_draw_buffers"),this.WEBGL_depth_texture=e.getExtension("WEBGL_depth_texture"),this.WEBGL_color_buffer_float=e.getExtension("WEBGL_color_buffer_float"),this.EXT_color_buffer_half_float=e.getExtension("EXT_color_buffer_half_float"),e.getExtension("EXT_frag_depth"),e.getExtension("OES_element_index_uint"),e.getExtension("OES_standard_derivatives")),this.WEBGL_compressed_texture_s3tc=e.getExtension("WEBGL_compressed_texture_s3tc"),this.WEBGL_compressed_texture_s3tc_srgb=e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),this.EXT_texture_compression_rgtc=e.getExtension("EXT_texture_compression_rgtc"),this.EXT_texture_filter_anisotropic=e.getExtension("EXT_texture_filter_anisotropic"),this.EXT_texture_norm16=e.getExtension("EXT_texture_norm16"),this.OES_texture_float_linear=e.getExtension("OES_texture_float_linear"),this.OES_texture_half_float_linear=e.getExtension("OES_texture_half_float_linear"),this.KHR_parallel_shader_compile=e.getExtension("KHR_parallel_shader_compile"),G(e)?(this.platformString="WebGL2",this.glslVersion="#version 300 es"):(this.platformString="WebGL1",this.glslVersion="#version 100"),this.scTexture=new ru({id:this.getNextUniqueId(),device:this,descriptor:{width:0,height:0,depthOrArrayLayers:1,dimension:oe.TEXTURE_2D,mipLevelCount:1,usage:et.RENDER_TARGET,format:this.contextAttributes.alpha===!1?I.U8_RGB_RT:I.U8_RGBA_RT},fake:!0}),this.scTexture.formatKind=Ie.Float,this.scTexture.gl_target=null,this.scTexture.gl_texture=null,this.resolveColorReadFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.resolveColorDrawFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.resolveDepthStencilReadFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.resolveDepthStencilDrawFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.renderPassDrawFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.readbackFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.fallbackTexture2D=this.createFallbackTexture(oe.TEXTURE_2D,Ie.Float),this.fallbackTexture2DDepth=this.createFallbackTexture(oe.TEXTURE_2D,Ie.Depth),this.fallbackVertexBuffer=this.createBuffer({viewOrSize:1,usage:ye.VERTEX,hint:wt.STATIC}),G(e)&&(this.fallbackTexture2DArray=this.createFallbackTexture(oe.TEXTURE_2D_ARRAY,Ie.Float),this.fallbackTexture3D=this.createFallbackTexture(oe.TEXTURE_3D,Ie.Float),this.fallbackTextureCube=this.createFallbackTexture(oe.TEXTURE_CUBE_MAP,Ie.Float)),this.currentMegaState.depthCompare=ve.LESS,this.currentMegaState.depthWrite=!1,this.currentMegaState.attachmentsState[0].channelWriteMask=ze.ALL,e.enable(e.DEPTH_TEST),e.enable(e.STENCIL_TEST),this.checkLimits(),n.shaderDebug&&(this.shaderDebug=!0),n.trackResources&&(this.resourceCreationTracker=new Hb)}return t.prototype.destroy=function(){this.blitBindings&&this.blitBindings.destroy(),this.blitInputLayout&&this.blitInputLayout.destroy(),this.blitRenderPipeline&&this.blitRenderPipeline.destroy(),this.blitVertexBuffer&&this.blitVertexBuffer.destroy(),this.blitProgram&&this.blitProgram.destroy()},t.prototype.createFallbackTexture=function(e,n){var r=e===oe.TEXTURE_CUBE_MAP?6:1,i=n===Ie.Depth?I.D32F:I.U8_RGBA_NORM,o=this.createTexture({dimension:e,format:i,usage:et.SAMPLED,width:1,height:1,depthOrArrayLayers:r,mipLevelCount:1});return n===Ie.Float&&o.setImageData([new Uint8Array(4*r)]),cr(o)},t.prototype.getNextUniqueId=function(){return++this.resourceUniqueId},t.prototype.checkLimits=function(){var e=this.gl;if(this.maxVertexAttribs=e.getParameter(R.MAX_VERTEX_ATTRIBS),G(e)){this.uniformBufferMaxPageByteSize=Math.min(e.getParameter(R.MAX_UNIFORM_BLOCK_SIZE),wf),this.uniformBufferWordAlignment=e.getParameter(e.UNIFORM_BUFFER_OFFSET_ALIGNMENT)/4;var n=e.getInternalformatParameter(e.RENDERBUFFER,e.DEPTH32F_STENCIL8,e.SAMPLES);this.supportedSampleCounts=n?ei([],Pt(n),!1):[],this.occlusionQueriesRecommended=!0}else this.uniformBufferWordAlignment=64,this.uniformBufferMaxPageByteSize=wf;this.uniformBufferMaxPageWordSize=this.uniformBufferMaxPageByteSize/4,this.supportedSampleCounts.includes(1)||this.supportedSampleCounts.push(1),this.supportedSampleCounts.sort(function(r,i){return r-i})},t.prototype.configureSwapChain=function(e,n,r){var i=this.scTexture;i.width=e,i.height=n,this.scPlatformFramebuffer=$C(r)},t.prototype.getDevice=function(){return this},t.prototype.getCanvas=function(){return this.gl.canvas},t.prototype.getOnscreenTexture=function(){return this.scTexture},t.prototype.beginFrame=function(){},t.prototype.endFrame=function(){},t.prototype.translateTextureInternalFormat=function(e,n){switch(n===void 0&&(n=!1),e){case I.ALPHA:return R.ALPHA;case I.U8_LUMINANCE:case I.F16_LUMINANCE:case I.F32_LUMINANCE:return R.LUMINANCE;case I.F16_R:return R.R16F;case I.F16_RG:return R.RG16F;case I.F16_RGB:return R.RGB16F;case I.F16_RGBA:return R.RGBA16F;case I.F32_R:return R.R32F;case I.F32_RG:return R.RG32F;case I.F32_RGB:return R.RGB32F;case I.F32_RGBA:return G(this.gl)?R.RGBA32F:n?this.WEBGL_color_buffer_float.RGBA32F_EXT:R.RGBA;case I.U8_R_NORM:return R.R8;case I.U8_RG_NORM:return R.RG8;case I.U8_RGB_NORM:case I.U8_RGB_RT:return R.RGB8;case I.U8_RGB_SRGB:return R.SRGB8;case I.U8_RGBA_NORM:case I.U8_RGBA_RT:return G(this.gl)?R.RGBA8:n?R.RGBA4:R.RGBA;case I.U8_RGBA:return R.RGBA;case I.U8_RGBA_SRGB:case I.U8_RGBA_RT_SRGB:return R.SRGB8_ALPHA8;case I.U16_R:return R.R16UI;case I.U16_R_NORM:return this.EXT_texture_norm16.R16_EXT;case I.U16_RG_NORM:return this.EXT_texture_norm16.RG16_EXT;case I.U16_RGBA_NORM:return this.EXT_texture_norm16.RGBA16_EXT;case I.U16_RGBA_5551:return R.RGB5_A1;case I.U16_RGB_565:return R.RGB565;case I.U32_R:return R.R32UI;case I.S8_RGBA_NORM:return R.RGBA8_SNORM;case I.S8_RG_NORM:return R.RG8_SNORM;case I.BC1:return this.WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT;case I.BC1_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;case I.BC2:return this.WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT;case I.BC2_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;case I.BC3:return this.WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;case I.BC3_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;case I.BC4_UNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_RED_RGTC1_EXT;case I.BC4_SNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT;case I.BC5_UNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT;case I.BC5_SNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;case I.D32F_S8:return G(this.gl)?R.DEPTH32F_STENCIL8:this.WEBGL_depth_texture?R.DEPTH_STENCIL:R.DEPTH_COMPONENT16;case I.D24_S8:return G(this.gl)?R.DEPTH24_STENCIL8:this.WEBGL_depth_texture?R.DEPTH_STENCIL:R.DEPTH_COMPONENT16;case I.D32F:return G(this.gl)?R.DEPTH_COMPONENT32F:this.WEBGL_depth_texture?R.DEPTH_COMPONENT:R.DEPTH_COMPONENT16;case I.D24:return G(this.gl)?R.DEPTH_COMPONENT24:this.WEBGL_depth_texture?R.DEPTH_COMPONENT:R.DEPTH_COMPONENT16;default:throw new Error("whoops")}},t.prototype.translateTextureType=function(e){var n=Gt(e);switch(n){case k.U8:return R.UNSIGNED_BYTE;case k.U16:return R.UNSIGNED_SHORT;case k.U32:return R.UNSIGNED_INT;case k.S8:return R.BYTE;case k.F16:return R.HALF_FLOAT;case k.F32:return R.FLOAT;case k.U16_PACKED_5551:return R.UNSIGNED_SHORT_5_5_5_1;case k.D32F:return G(this.gl)?R.FLOAT:this.WEBGL_depth_texture?R.UNSIGNED_INT:R.UNSIGNED_BYTE;case k.D24:return G(this.gl)?R.UNSIGNED_INT_24_8:this.WEBGL_depth_texture?R.UNSIGNED_SHORT:R.UNSIGNED_BYTE;case k.D24S8:return G(this.gl)?R.UNSIGNED_INT_24_8:this.WEBGL_depth_texture?R.UNSIGNED_INT_24_8_WEBGL:R.UNSIGNED_BYTE;case k.D32FS8:return R.FLOAT_32_UNSIGNED_INT_24_8_REV;default:throw new Error("whoops")}},t.prototype.translateInternalTextureFormat=function(e){switch(e){case I.F32_R:return R.R32F;case I.F32_RG:return R.RG32F;case I.F32_RGB:return R.RGB32F;case I.F32_RGBA:return R.RGBA32F;case I.F16_R:return R.R16F;case I.F16_RG:return R.RG16F;case I.F16_RGB:return R.RGB16F;case I.F16_RGBA:return R.RGBA16F}return this.translateTextureFormat(e)},t.prototype.translateTextureFormat=function(e){if(S_(e)||e===I.F32_LUMINANCE||e===I.U8_LUMINANCE)return this.translateTextureInternalFormat(e);var n=G(this.gl)||!G(this.gl)&&!!this.WEBGL_depth_texture;switch(e){case I.D24_S8:case I.D32F_S8:return n?R.DEPTH_STENCIL:R.RGBA;case I.D24:case I.D32F:return n?R.DEPTH_COMPONENT:R.RGBA}var r=R_(e),i=Wu(e);switch(i){case Z.A:return R.ALPHA;case Z.R:return r?R.RED_INTEGER:R.RED;case Z.RG:return r?R.RG_INTEGER:R.RG;case Z.RGB:return r?R.RGB_INTEGER:R.RGB;case Z.RGBA:return R.RGBA}},t.prototype.setActiveTexture=function(e){this.currentActiveTexture!==e&&(this.gl.activeTexture(e),this.currentActiveTexture=e)},t.prototype.bindVAO=function(e){this.currentBoundVAO!==e&&(G(this.gl)?this.gl.bindVertexArray(e):this.OES_vertex_array_object.bindVertexArrayOES(e),this.currentBoundVAO=e)},t.prototype.programCompiled=function(e){ne(e.compileState!==lt.NeedsCompile),e.compileState===lt.Compiling&&(e.compileState=lt.NeedsBind,this.shaderDebug&&this.checkProgramCompilationForErrors(e))},t.prototype.useProgram=function(e){this.currentProgram!==e&&(this.programCompiled(e),this.gl.useProgram(e.gl_program),this.currentProgram=e)},t.prototype.ensureResourceExists=function(e){if(e===null){var n=this.gl.getError();throw new Error("Created resource is null; GL error encountered: ".concat(n))}else return e},t.prototype.createBuffer=function(e){return new Nb({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createTexture=function(e){return new ru({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createSampler=function(e){return new Xb({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderTarget=function(e){return new wb({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderTargetFromTexture=function(e){var n=e,r=n.format,i=n.width,o=n.height,s=n.mipLevelCount;return ne(s===1),this.createRenderTarget({format:r,width:i,height:o,sampleCount:1,texture:e})},t.prototype.createProgram=function(e){var n,r,i,o=(n=e.vertex)===null||n===void 0?void 0:n.glsl;return!((r=e.vertex)===null||r===void 0)&&r.glsl&&(e.vertex.glsl=is(this.queryVendorInfo(),"vert",e.vertex.glsl)),!((i=e.fragment)===null||i===void 0)&&i.glsl&&(e.fragment.glsl=is(this.queryVendorInfo(),"frag",e.fragment.glsl)),this.createProgramSimple(e,o)},t.prototype.createProgramSimple=function(e,n){var r=new Lb({id:this.getNextUniqueId(),device:this,descriptor:e},n);return r},t.prototype.createBindings=function(e){return new xb({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createInputLayout=function(e){return new Db({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderPipeline=function(e){return new zb({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createComputePass=function(){return new Wb},t.prototype.createComputePipeline=function(e){return new Vb({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createReadback=function(){return new kb({id:this.getNextUniqueId(),device:this})},t.prototype.createQueryPool=function(e,n){return new Ub({id:this.getNextUniqueId(),device:this,descriptor:{type:e,elemCount:n}})},t.prototype.formatRenderPassDescriptor=function(e){var n,r,i,o,s,a,u=e.colorAttachment;e.depthClearValue=(n=e.depthClearValue)!==null&&n!==void 0?n:"load",e.stencilClearValue=(r=e.stencilClearValue)!==null&&r!==void 0?r:"load";for(var l=0;l<u.length;l++)e.colorAttachmentLevel||(e.colorAttachmentLevel=[]),e.colorAttachmentLevel[l]=(i=e.colorAttachmentLevel[l])!==null&&i!==void 0?i:0,e.colorResolveToLevel||(e.colorResolveToLevel=[]),e.colorResolveToLevel[l]=(o=e.colorResolveToLevel[l])!==null&&o!==void 0?o:0,e.colorClearColor||(e.colorClearColor=[]),e.colorClearColor[l]=(s=e.colorClearColor[l])!==null&&s!==void 0?s:"load",e.colorStore||(e.colorStore=[]),e.colorStore[l]=(a=e.colorStore[l])!==null&&a!==void 0?a:!1},t.prototype.createRenderBundle=function(){return new jb({id:this.getNextUniqueId(),device:this})},t.prototype.beginBundle=function(e){this.renderBundle=e},t.prototype.endBundle=function(){this.renderBundle=void 0},t.prototype.executeBundles=function(e){e.forEach(function(n){n.replay()})},t.prototype.createRenderPass=function(e){this.currentRenderPassDescriptor!==null&&this.currentRenderPassDescriptorStack.push(this.currentRenderPassDescriptor),this.currentRenderPassDescriptor=e,this.formatRenderPassDescriptor(e);var n=e.colorAttachment,r=e.colorAttachmentLevel,i=e.colorClearColor,o=e.colorResolveTo,s=e.colorResolveToLevel,a=e.depthStencilAttachment,u=e.depthClearValue,l=e.stencilClearValue,c=e.depthStencilResolveTo,h=o&&o.length===1&&o[0]===this.scTexture;this.setRenderPassParametersBegin(n.length,h);for(var f=0;f<n.length;f++)this.setRenderPassParametersColor(f,n[f],r[f],o[f],s[f],h);this.setRenderPassParametersDepthStencil(a,c,h),this.validateCurrentAttachments();for(var f=0;f<n.length;f++){var p=i[f];p!=="load"&&this.setRenderPassParametersClearColor(f,p.r,p.g,p.b,p.a)}return this.setRenderPassParametersClearDepthStencil(u,l),this},t.prototype.submitPass=function(e){ne(this.currentRenderPassDescriptor!==null),this.endPass(),this.currentRenderPassDescriptorStack.length?this.currentRenderPassDescriptor=this.currentRenderPassDescriptorStack.pop():this.currentRenderPassDescriptor=null},t.prototype.copySubTexture2D=function(e,n,r,i,o,s){var a=this.gl,u=e,l=i;if(ne(l.mipLevelCount===1),ne(u.mipLevelCount===1),G(a))u===this.scTexture?a.bindFramebuffer(a.DRAW_FRAMEBUFFER,this.scPlatformFramebuffer):(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,this.resolveColorDrawFramebuffer),this.bindFramebufferAttachment(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,u,0)),a.bindFramebuffer(a.READ_FRAMEBUFFER,this.resolveColorReadFramebuffer),this.bindFramebufferAttachment(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,l,0),a.blitFramebuffer(o,s,o+l.width,s+l.height,n,r,n+l.width,r+l.height,a.COLOR_BUFFER_BIT,a.LINEAR),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null);else if(u===this.scTexture){var c=this.createRenderTargetFromTexture(i);this.submitBlitRenderPass(c,u)}},t.prototype.queryLimits=function(){return this},t.prototype.queryTextureFormatSupported=function(e,n,r){switch(e){case I.BC1_SRGB:case I.BC2_SRGB:case I.BC3_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb!==null?ia(n,r,4,4):!1;case I.BC1:case I.BC2:case I.BC3:return this.WEBGL_compressed_texture_s3tc!==null?ia(n,r,4,4):!1;case I.BC4_UNORM:case I.BC4_SNORM:case I.BC5_UNORM:case I.BC5_SNORM:return this.EXT_texture_compression_rgtc!==null?ia(n,r,4,4):!1;case I.U16_R_NORM:case I.U16_RG_NORM:case I.U16_RGBA_NORM:return this.EXT_texture_norm16!==null;case I.F32_R:case I.F32_RG:case I.F32_RGB:case I.F32_RGBA:return this.OES_texture_float_linear!==null;case I.F16_R:case I.F16_RG:case I.F16_RGB:case I.F16_RGBA:return this.OES_texture_half_float_linear!==null;default:return!0}},t.prototype.queryProgramReady=function(e){var n=this.gl;if(e.compileState===lt.NeedsCompile)throw new Error("whoops");if(e.compileState===lt.Compiling){var r=void 0;return this.KHR_parallel_shader_compile!==null?r=n.getProgramParameter(e.gl_program,this.KHR_parallel_shader_compile.COMPLETION_STATUS_KHR):r=!0,r&&this.programCompiled(e),r}return e.compileState===lt.NeedsBind||e.compileState===lt.ReadyToUse},t.prototype.queryPlatformAvailable=function(){return this.gl.isContextLost()},t.prototype.queryVendorInfo=function(){return this},t.prototype.queryRenderPass=function(e){return this.currentRenderPassDescriptor},t.prototype.queryRenderTarget=function(e){var n=e;return n},t.prototype.setResourceName=function(e,n){if(e.name=n,e.type===he.Buffer)for(var r=e.gl_buffer_pages,i=0;i<r.length;i++)ii(r[i],"".concat(n," Page ").concat(i));else if(e.type===he.Texture)ii(cr(e),n);else if(e.type===he.Sampler)ii(nu(e),n);else if(e.type===he.RenderTarget){var o=e.gl_renderbuffer;o!==null&&ii(o,n)}else e.type===he.InputLayout&&ii(e.vao,n)},t.prototype.setResourceLeakCheck=function(e,n){this.resourceCreationTracker!==null&&this.resourceCreationTracker.setResourceLeakCheck(e,n)},t.prototype.checkForLeaks=function(){this.resourceCreationTracker!==null&&this.resourceCreationTracker.checkForLeaks()},t.prototype.pushDebugGroup=function(e){},t.prototype.popDebugGroup=function(){},t.prototype.insertDebugMarker=function(e){},t.prototype.programPatched=function(e,n){ne(this.shaderDebug)},t.prototype.getBufferData=function(e,n,r){r===void 0&&(r=0);var i=this.gl;G(i)&&(i.bindBuffer(i.COPY_READ_BUFFER,Rr(e,r*4)),i.getBufferSubData(i.COPY_READ_BUFFER,r*4,n))},t.prototype.debugGroupStatisticsDrawCall=function(e){e===void 0&&(e=1);for(var n=this.debugGroupStack.length-1;n>=0;n--)this.debugGroupStack[n].drawCallCount+=e},t.prototype.debugGroupStatisticsBufferUpload=function(e){e===void 0&&(e=1);for(var n=this.debugGroupStack.length-1;n>=0;n--)this.debugGroupStack[n].bufferUploadCount+=e},t.prototype.debugGroupStatisticsTextureBind=function(e){e===void 0&&(e=1);for(var n=this.debugGroupStack.length-1;n>=0;n--)this.debugGroupStack[n].textureBindCount+=e},t.prototype.debugGroupStatisticsTriangles=function(e){for(var n=this.debugGroupStack.length-1;n>=0;n--)this.debugGroupStack[n].triangleCount+=e},t.prototype.reportShaderError=function(e,n){var r=this.gl,i=r.getShaderParameter(e,r.COMPILE_STATUS);if(!i){console.error(YC(n));var o=r.getExtension("WEBGL_debug_shaders");o&&console.error(o.getTranslatedShaderSource(e)),console.error(r.getShaderInfoLog(e))}return i},t.prototype.checkProgramCompilationForErrors=function(e){var n=this.gl,r=e.gl_program;if(!n.getProgramParameter(r,n.LINK_STATUS)){var i=e.descriptor;if(!this.reportShaderError(e.gl_shader_vert,i.vertex.glsl)||!this.reportShaderError(e.gl_shader_frag,i.fragment.glsl))return;console.error(n.getProgramInfoLog(e.gl_program))}},t.prototype.bindFramebufferAttachment=function(e,n,r,i){var o=this.gl;if(It(r))o.framebufferRenderbuffer(e,n,o.RENDERBUFFER,null);else if(r.type===he.RenderTarget)r.gl_renderbuffer!==null?o.framebufferRenderbuffer(e,n,o.RENDERBUFFER,r.gl_renderbuffer):r.texture!==null&&o.framebufferTexture2D(e,n,R.TEXTURE_2D,cr(r.texture),i);else if(r.type===he.Texture){var s=cr(r);r.dimension===oe.TEXTURE_2D?o.framebufferTexture2D(e,n,R.TEXTURE_2D,s,i):G(o)&&(r.dimension,oe.TEXTURE_2D_ARRAY)}},t.prototype.bindFramebufferDepthStencilAttachment=function(e,n){var r=this.gl,i=It(n)?X.Depth|X.Stencil:Ir(n.format),o=!!(i&X.Depth),s=!!(i&X.Stencil);if(o&&s){var a=G(this.gl)||!G(this.gl)&&!!this.WEBGL_depth_texture;a?this.bindFramebufferAttachment(e,r.DEPTH_STENCIL_ATTACHMENT,n,0):this.bindFramebufferAttachment(e,r.DEPTH_ATTACHMENT,n,0)}else o?(this.bindFramebufferAttachment(e,r.DEPTH_ATTACHMENT,n,0),this.bindFramebufferAttachment(e,r.STENCIL_ATTACHMENT,null,0)):s&&(this.bindFramebufferAttachment(e,r.STENCIL_ATTACHMENT,n,0),this.bindFramebufferAttachment(e,r.DEPTH_ATTACHMENT,null,0))},t.prototype.validateCurrentAttachments=function(){for(var e=-1,n=-1,r=-1,i=0;i<this.currentColorAttachments.length;i++){var o=this.currentColorAttachments[i];o!==null&&(e===-1?(e=o.sampleCount,n=o.width,r=o.height):(ne(e===o.sampleCount),ne(n===o.width),ne(r===o.height)))}this.currentDepthStencilAttachment&&(e===-1?e=this.currentDepthStencilAttachment.sampleCount:(ne(e===this.currentDepthStencilAttachment.sampleCount),ne(n===this.currentDepthStencilAttachment.width),ne(r===this.currentDepthStencilAttachment.height))),this.currentSampleCount=e},t.prototype.setRenderPassParametersBegin=function(e,n){n===void 0&&(n=!1);var r=this.gl;if(n)r.bindFramebuffer(R.FRAMEBUFFER,null);else if(G(r)?r.bindFramebuffer(R.DRAW_FRAMEBUFFER,this.renderPassDrawFramebuffer):this.inBlitRenderPass||r.bindFramebuffer(R.FRAMEBUFFER,this.renderPassDrawFramebuffer),G(r)?r.drawBuffers([R.COLOR_ATTACHMENT0,R.COLOR_ATTACHMENT1,R.COLOR_ATTACHMENT2,R.COLOR_ATTACHMENT3]):!this.inBlitRenderPass&&this.WEBGL_draw_buffers&&this.WEBGL_draw_buffers.drawBuffersWEBGL([R.COLOR_ATTACHMENT0_WEBGL,R.COLOR_ATTACHMENT1_WEBGL,R.COLOR_ATTACHMENT2_WEBGL,R.COLOR_ATTACHMENT3_WEBGL]),!this.inBlitRenderPass)for(var i=e;i<this.currentColorAttachments.length;i++){var o=G(r)?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,s=G(r)?R.COLOR_ATTACHMENT0:R.COLOR_ATTACHMENT0_WEBGL;r.framebufferRenderbuffer(o,s+i,R.RENDERBUFFER,null),r.framebufferTexture2D(o,s+i,R.TEXTURE_2D,null,0)}this.currentColorAttachments.length=e},t.prototype.setRenderPassParametersColor=function(e,n,r,i,o,s){s===void 0&&(s=!1);var a=this.gl,u=G(a);(this.currentColorAttachments[e]!==n||this.currentColorAttachmentLevels[e]!==r)&&(this.currentColorAttachments[e]=n,this.currentColorAttachmentLevels[e]=r,!s&&(u||!u&&this.WEBGL_draw_buffers)&&this.bindFramebufferAttachment(u?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,(u?R.COLOR_ATTACHMENT0:R.COLOR_ATTACHMENT0_WEBGL)+e,n,r),this.resolveColorAttachmentsChanged=!0),(this.currentColorResolveTos[e]!==i||this.currentColorResolveToLevels[e]!==o)&&(this.currentColorResolveTos[e]=i,this.currentColorResolveToLevels[e]=o,i!==null&&(this.resolveColorAttachmentsChanged=!0))},t.prototype.setRenderPassParametersDepthStencil=function(e,n,r){r===void 0&&(r=!1);var i=this.gl;this.currentDepthStencilAttachment!==e&&(this.currentDepthStencilAttachment=e,!r&&!this.inBlitRenderPass&&this.bindFramebufferDepthStencilAttachment(G(i)?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,this.currentDepthStencilAttachment),this.resolveDepthStencilAttachmentsChanged=!0),this.currentDepthStencilResolveTo!==n&&(this.currentDepthStencilResolveTo=n,n&&(this.resolveDepthStencilAttachmentsChanged=!0))},t.prototype.setRenderPassParametersClearColor=function(e,n,r,i,o){var s=this.gl;if(this.OES_draw_buffers_indexed!==null){var a=this.currentMegaState.attachmentsState[e];a&&a.channelWriteMask!==ze.ALL&&(this.OES_draw_buffers_indexed.colorMaskiOES(e,!0,!0,!0,!0),a.channelWriteMask=ze.ALL)}else{var a=this.currentMegaState.attachmentsState[0];a&&a.channelWriteMask!==ze.ALL&&(s.colorMask(!0,!0,!0,!0),a.channelWriteMask=ze.ALL)}this.setScissorRectEnabled(!1),G(s)?s.clearBufferfv(s.COLOR,e,[n,r,i,o]):(s.clearColor(n,r,i,o),s.clear(s.COLOR_BUFFER_BIT))},t.prototype.setRenderPassParametersClearDepthStencil=function(e,n){e===void 0&&(e="load"),n===void 0&&(n="load");var r=this.gl;e!=="load"&&(ne(!!this.currentDepthStencilAttachment),this.currentMegaState.depthWrite||(r.depthMask(!0),this.currentMegaState.depthWrite=!0),G(r)?r.clearBufferfv(r.DEPTH,0,[e]):(r.clearDepth(e),r.clear(r.DEPTH_BUFFER_BIT))),n!=="load"&&(ne(!!this.currentDepthStencilAttachment),this.currentMegaState.stencilWrite||(r.enable(r.STENCIL_TEST),r.stencilMask(255),this.currentMegaState.stencilWrite=!0),G(r)?r.clearBufferiv(r.STENCIL,0,[n]):(r.clearStencil(n),r.clear(r.STENCIL_BUFFER_BIT)))},t.prototype.setBindings=function(e){var n=this,r;if(this.renderBundle){this.renderBundle.push(function(){return n.setBindings(e)});return}var i=this.gl,o=e,s=o.uniformBufferBindings,a=o.samplerBindings,u=o.bindingLayouts;ne(0<u.bindingLayoutTables.length);var l=u.bindingLayoutTables[0];ne(s.length>=l.numUniformBuffers),ne(a.length>=l.numSamplers);for(var c=0;c<s.length;c++){var h=s[c];if(h.size!==0){var f=l.firstUniformBuffer+c,p=h.buffer,_=h.offset||0,v=h.size||p.byteSize;if(p!==this.currentUniformBuffers[f]||_!==this.currentUniformBufferByteOffsets[f]||v!==this.currentUniformBufferByteSizes[f]){var m=_%p.pageByteSize,y=p.gl_buffer_pages[_/p.pageByteSize|0];ne(m+v<=p.pageByteSize),G(i)&&i.bindBufferRange(i.UNIFORM_BUFFER,f,y,m,v),this.currentUniformBuffers[f]=p,this.currentUniformBufferByteOffsets[f]=_,this.currentUniformBufferByteSizes[f]=v}}}for(var c=0;c<l.numSamplers;c++){var h=a[c],T=l.firstSampler+c,S=h!==null&&h.sampler!==null?nu(h.sampler):null,x=h!==null&&h.texture!==null?cr(h.texture):null;if(this.currentSamplers[T]!==S&&(G(i)&&i.bindSampler(T,S),this.currentSamplers[T]=S),this.currentTextures[T]!==x){if(this.setActiveTexture(i.TEXTURE0+T),x!==null){var C=kn(h).texture,M=C.gl_target,P=C.width,F=C.height;h.texture.textureIndex=T,i.bindTexture(M,x),G(i)||(r=h.sampler)===null||r===void 0||r.setTextureParameters(M,P,F),this.debugGroupStatisticsTextureBind()}else{var V=Ce(Ce({},h),T_),B=V.dimension,O=V.formatKind,M=Bb(B);i.bindTexture(M,this.getFallbackTexture(Ce({gl_target:M,formatKind:O},V)))}this.currentTextures[T]=x}}},t.prototype.setViewport=function(e,n,r,i){var o=this.gl;o.viewport(e,n,r,i)},t.prototype.setScissorRect=function(e,n,r,i){var o=this.gl;this.setScissorRectEnabled(!0),o.scissor(e,n,r,i)},t.prototype.applyAttachmentStateIndexed=function(e,n,r){var i=this.gl,o=this.OES_draw_buffers_indexed;n.channelWriteMask!==r.channelWriteMask&&(o.colorMaskiOES(e,!!(r.channelWriteMask&ze.RED),!!(r.channelWriteMask&ze.GREEN),!!(r.channelWriteMask&ze.BLUE),!!(r.channelWriteMask&ze.ALPHA)),n.channelWriteMask=r.channelWriteMask);var s=n.rgbBlendState.blendMode!==r.rgbBlendState.blendMode||n.alphaBlendState.blendMode!==r.alphaBlendState.blendMode,a=n.rgbBlendState.blendSrcFactor!==r.rgbBlendState.blendSrcFactor||n.alphaBlendState.blendSrcFactor!==r.alphaBlendState.blendSrcFactor||n.rgbBlendState.blendDstFactor!==r.rgbBlendState.blendDstFactor||n.alphaBlendState.blendDstFactor!==r.alphaBlendState.blendDstFactor;(a||s)&&(gn(n.rgbBlendState)&&gn(n.alphaBlendState)?o.enableiOES(e,i.BLEND):gn(r.rgbBlendState)&&gn(r.alphaBlendState)&&o.disableiOES(e,i.BLEND)),s&&(o.blendEquationSeparateiOES(e,r.rgbBlendState.blendMode,r.alphaBlendState.blendMode),n.rgbBlendState.blendMode=r.rgbBlendState.blendMode,n.alphaBlendState.blendMode=r.alphaBlendState.blendMode),a&&(o.blendFuncSeparateiOES(e,r.rgbBlendState.blendSrcFactor,r.rgbBlendState.blendDstFactor,r.alphaBlendState.blendSrcFactor,r.alphaBlendState.blendDstFactor),n.rgbBlendState.blendSrcFactor=r.rgbBlendState.blendSrcFactor,n.alphaBlendState.blendSrcFactor=r.alphaBlendState.blendSrcFactor,n.rgbBlendState.blendDstFactor=r.rgbBlendState.blendDstFactor,n.alphaBlendState.blendDstFactor=r.alphaBlendState.blendDstFactor)},t.prototype.applyAttachmentState=function(e,n){var r=this.gl;e.channelWriteMask!==n.channelWriteMask&&(r.colorMask(!!(n.channelWriteMask&ze.RED),!!(n.channelWriteMask&ze.GREEN),!!(n.channelWriteMask&ze.BLUE),!!(n.channelWriteMask&ze.ALPHA)),e.channelWriteMask=n.channelWriteMask);var i=e.rgbBlendState.blendMode!==n.rgbBlendState.blendMode||e.alphaBlendState.blendMode!==n.alphaBlendState.blendMode,o=e.rgbBlendState.blendSrcFactor!==n.rgbBlendState.blendSrcFactor||e.alphaBlendState.blendSrcFactor!==n.alphaBlendState.blendSrcFactor||e.rgbBlendState.blendDstFactor!==n.rgbBlendState.blendDstFactor||e.alphaBlendState.blendDstFactor!==n.alphaBlendState.blendDstFactor;(o||i)&&(gn(e.rgbBlendState)&&gn(e.alphaBlendState)?r.enable(r.BLEND):gn(n.rgbBlendState)&&gn(n.alphaBlendState)&&r.disable(r.BLEND)),i&&(r.blendEquationSeparate(n.rgbBlendState.blendMode,n.alphaBlendState.blendMode),e.rgbBlendState.blendMode=n.rgbBlendState.blendMode,e.alphaBlendState.blendMode=n.alphaBlendState.blendMode),o&&(r.blendFuncSeparate(n.rgbBlendState.blendSrcFactor,n.rgbBlendState.blendDstFactor,n.alphaBlendState.blendSrcFactor,n.alphaBlendState.blendDstFactor),e.rgbBlendState.blendSrcFactor=n.rgbBlendState.blendSrcFactor,e.alphaBlendState.blendSrcFactor=n.alphaBlendState.blendSrcFactor,e.rgbBlendState.blendDstFactor=n.rgbBlendState.blendDstFactor,e.alphaBlendState.blendDstFactor=n.alphaBlendState.blendDstFactor)},t.prototype.setMegaState=function(e){var n=this.gl,r=this.currentMegaState;if(this.OES_draw_buffers_indexed!==null)for(var i=0;i<e.attachmentsState.length;i++)this.applyAttachmentStateIndexed(i,r.attachmentsState[0],e.attachmentsState[0]);else ne(e.attachmentsState.length===1),this.applyAttachmentState(r.attachmentsState[0],e.attachmentsState[0]);v_(r.blendConstant,e.blendConstant)||(n.blendColor(e.blendConstant.r,e.blendConstant.g,e.blendConstant.b,e.blendConstant.a),m_(r.blendConstant,e.blendConstant)),r.depthCompare!==e.depthCompare&&(n.depthFunc(e.depthCompare),r.depthCompare=e.depthCompare),!!r.depthWrite!=!!e.depthWrite&&(n.depthMask(e.depthWrite),r.depthWrite=e.depthWrite),!!r.stencilWrite!=!!e.stencilWrite&&(n.stencilMask(e.stencilWrite?255:0),r.stencilWrite=e.stencilWrite);var o=!1;if(!rs(r.stencilFront,e.stencilFront)){o=!0;var s=e.stencilFront,a=s.passOp,u=s.failOp,l=s.depthFailOp,c=s.compare;(r.stencilFront.passOp!==a||r.stencilFront.failOp!==u||r.stencilFront.depthFailOp!==l)&&(n.stencilOpSeparate(n.FRONT,u,l,a),r.stencilFront.passOp=a,r.stencilFront.failOp=u,r.stencilFront.depthFailOp=l),r.stencilFront.compare!==c&&(this.setStencilReference(0),r.stencilFront.compare=c)}if(!rs(r.stencilBack,e.stencilBack)){o=!0;var h=e.stencilBack,a=h.passOp,u=h.failOp,l=h.depthFailOp,c=h.compare;(r.stencilBack.passOp!==a||r.stencilBack.failOp!==u||r.stencilBack.depthFailOp!==l)&&(n.stencilOpSeparate(n.BACK,u,l,a),r.stencilBack.passOp=a,r.stencilBack.failOp=u,r.stencilBack.depthFailOp=l),r.stencilBack.compare!==c&&(this.setStencilReference(0),r.stencilBack.compare=c)}(r.stencilFront.mask!==e.stencilFront.mask||r.stencilBack.mask!==e.stencilBack.mask)&&(o=!0,r.stencilFront.mask=e.stencilFront.mask,r.stencilBack.mask=e.stencilBack.mask),o&&this.applyStencil(),r.cullMode!==e.cullMode&&(r.cullMode===ft.NONE?n.enable(n.CULL_FACE):e.cullMode===ft.NONE&&n.disable(n.CULL_FACE),e.cullMode===ft.BACK?n.cullFace(n.BACK):e.cullMode===ft.FRONT?n.cullFace(n.FRONT):e.cullMode===ft.FRONT_AND_BACK&&n.cullFace(n.FRONT_AND_BACK),r.cullMode=e.cullMode),r.frontFace!==e.frontFace&&(n.frontFace(e.frontFace),r.frontFace=e.frontFace),r.polygonOffset!==e.polygonOffset&&(e.polygonOffset?n.enable(n.POLYGON_OFFSET_FILL):n.disable(n.POLYGON_OFFSET_FILL),r.polygonOffset=e.polygonOffset),(r.polygonOffsetFactor!==e.polygonOffsetFactor||r.polygonOffsetUnits!==e.polygonOffsetUnits)&&(n.polygonOffset(e.polygonOffsetFactor,e.polygonOffsetUnits),r.polygonOffsetFactor=e.polygonOffsetFactor,r.polygonOffsetUnits=e.polygonOffsetUnits)},t.prototype.validatePipelineFormats=function(e){for(var n=0;n<this.currentColorAttachments.length;n++)var r=this.currentColorAttachments[n];this.currentDepthStencilAttachment&&ne(this.currentDepthStencilAttachment.format===e.depthStencilAttachmentFormat),this.currentSampleCount!==-1&&ne(this.currentSampleCount===e.sampleCount)},t.prototype.setPipeline=function(e){var n=this;if(this.renderBundle){this.renderBundle.push(function(){return n.setPipeline(e)});return}this.currentPipeline=e,this.validatePipelineFormats(this.currentPipeline),this.setMegaState(this.currentPipeline.megaState);var r=this.currentPipeline.program;if(this.useProgram(r),r.compileState===lt.NeedsBind){var i=this.gl,o=r.gl_program,s=r.descriptor,a=Df(s.vertex.glsl,$b);if(G(i))for(var u=0;u<a.length;u++){var l=Pt(a[u],2),c=l[1],h=i.getUniformBlockIndex(o,c);h!==-1&&h!==4294967295&&i.uniformBlockBinding(o,h,u)}for(var f=Df(s.fragment.glsl,/^uniform .*sampler\S+ (\w+);\s* \/\/ BINDING=(\d+)$/gm),u=0;u<f.length;u++){var p=Pt(f[u],3),_=p[1],v=p[2],m=i.getUniformLocation(o,_);i.uniform1i(m,parseInt(v))}r.compileState=lt.ReadyToUse}},t.prototype.setVertexInput=function(e,n,r){var i,o,s=this,a;if(this.renderBundle){this.renderBundle.push(function(){return s.setVertexInput(e,n,r)});return}if(e!==null){ne(this.currentPipeline.inputLayout===e);var u=e;this.bindVAO(u.vao);for(var l=this.gl,c=0;c<u.vertexBufferDescriptors.length;c++){var h=u.vertexBufferDescriptors[c],f=h.arrayStride,p=h.attributes;try{for(var _=(i=void 0,Zn(p)),v=_.next();!v.done;v=_.next()){var m=v.value,y=m.shaderLocation,T=m.offset,S=G(l)?y:(a=u.program.attributes[y])===null||a===void 0?void 0:a.location;if(!It(S)){var x=n[c];if(x===null)continue;var C=m.vertexFormat;l.bindBuffer(l.ARRAY_BUFFER,Rr(x.buffer));var M=(x.offset||0)+T;l.vertexAttribPointer(S,C.size,C.type,C.normalized,f,M)}}}catch(F){i={error:F}}finally{try{v&&!v.done&&(o=_.return)&&o.call(_)}finally{if(i)throw i.error}}}if(ne(r!==null==(u.indexBufferFormat!==null)),r!==null){var P=r.buffer;ne(P.usage===ye.INDEX),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,Rr(P)),this.currentIndexBufferByteOffset=r.offset||0}else this.currentIndexBufferByteOffset=null}else ne(this.currentPipeline.inputLayout===null),ne(r===null),this.bindVAO(null),this.currentIndexBufferByteOffset=0},t.prototype.setStencilReference=function(e){this.currentStencilRef!==e&&(this.currentStencilRef=e,this.applyStencil())},t.prototype.draw=function(e,n,r,i){var o,s=this;if(this.renderBundle){this.renderBundle.push(function(){return s.draw(e,n,r,i)});return}var a=this.gl,u=this.currentPipeline;if(n){var l=[u.drawMode,r||0,e,n];G(a)?a.drawArraysInstanced.apply(a,ei([],Pt(l),!1)):(o=this.ANGLE_instanced_arrays).drawArraysInstancedANGLE.apply(o,ei([],Pt(l),!1))}else a.drawArrays(u.drawMode,r,e);this.debugGroupStatisticsDrawCall(),this.debugGroupStatisticsTriangles(e/3*Math.max(n,1))},t.prototype.drawIndexed=function(e,n,r,i,o){var s,a=this;if(this.renderBundle){this.renderBundle.push(function(){return a.drawIndexed(e,n,r,i,o)});return}var u=this.gl,l=this.currentPipeline,c=kn(l.inputLayout),h=kn(this.currentIndexBufferByteOffset)+r*c.indexBufferCompByteSize;if(n){var f=[l.drawMode,e,c.indexBufferType,h,n];G(u)?u.drawElementsInstanced.apply(u,ei([],Pt(f),!1)):(s=this.ANGLE_instanced_arrays).drawElementsInstancedANGLE.apply(s,ei([],Pt(f),!1))}else u.drawElements(l.drawMode,e,c.indexBufferType,h);this.debugGroupStatisticsDrawCall(),this.debugGroupStatisticsTriangles(e/3*Math.max(n,1))},t.prototype.drawIndirect=function(e,n){},t.prototype.drawIndexedIndirect=function(e,n){},t.prototype.beginOcclusionQuery=function(e){var n=this.gl;if(G(n)){var r=this.currentRenderPassDescriptor.occlusionQueryPool;n.beginQuery(r.gl_query_type,r.gl_query[e])}},t.prototype.endOcclusionQuery=function(){var e=this.gl;if(G(e)){var n=this.currentRenderPassDescriptor.occlusionQueryPool;e.endQuery(n.gl_query_type)}},t.prototype.pipelineQueryReady=function(e){var n=e;return this.queryProgramReady(n.program)},t.prototype.pipelineForceReady=function(e){},t.prototype.endPass=function(){for(var e=this.gl,n=G(e),r=this.currentColorResolveTos.length===1&&this.currentColorResolveTos[0]===this.scTexture,i=!1,o=0;o<this.currentColorAttachments.length;o++){var s=this.currentColorAttachments[o];if(s!==null){var a=this.currentColorResolveTos[o],u=!1;a!==null&&(ne(s.width===a.width&&s.height===a.height),this.setScissorRectEnabled(!1),r||(n&&e.bindFramebuffer(e.READ_FRAMEBUFFER,this.resolveColorReadFramebuffer),this.resolveColorAttachmentsChanged&&n&&this.bindFramebufferAttachment(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,s,this.currentColorAttachmentLevels[o])),u=!0,r||(a===this.scTexture?e.bindFramebuffer(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,this.scPlatformFramebuffer):(e.bindFramebuffer(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,this.resolveColorDrawFramebuffer),this.resolveColorAttachmentsChanged&&e.framebufferTexture2D(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a.gl_texture,this.currentColorResolveToLevels[o]))),r||(n?(e.blitFramebuffer(0,0,s.width,s.height,0,0,a.width,a.height,e.COLOR_BUFFER_BIT,e.LINEAR),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null)):this.submitBlitRenderPass(s,a)),i=!0),this.currentRenderPassDescriptor.colorStore[o]||!r&&!u&&(e.bindFramebuffer(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,this.resolveColorReadFramebuffer),this.resolveColorAttachmentsChanged&&this.bindFramebufferAttachment(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,e.COLOR_ATTACHMENT0,s,this.currentColorAttachmentLevels[o])),r||e.bindFramebuffer(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,null)}}this.resolveColorAttachmentsChanged=!1;var l=this.currentDepthStencilAttachment;if(l){var c=this.currentDepthStencilResolveTo,u=!1;c&&(ne(l.width===c.width&&l.height===c.height),this.setScissorRectEnabled(!1),r||(e.bindFramebuffer(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,this.resolveDepthStencilReadFramebuffer),e.bindFramebuffer(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,this.resolveDepthStencilDrawFramebuffer),this.resolveDepthStencilAttachmentsChanged&&(this.bindFramebufferDepthStencilAttachment(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,l),this.bindFramebufferDepthStencilAttachment(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,c))),u=!0,r||(n&&e.blitFramebuffer(0,0,l.width,l.height,0,0,c.width,c.height,e.DEPTH_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,null)),i=!0),!r&&!this.currentRenderPassDescriptor.depthStencilStore&&(u||(e.bindFramebuffer(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,this.resolveDepthStencilReadFramebuffer),this.resolveDepthStencilAttachmentsChanged&&this.bindFramebufferDepthStencilAttachment(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,l),u=!0),n&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[e.DEPTH_STENCIL_ATTACHMENT])),!r&&u&&e.bindFramebuffer(n?R.READ_FRAMEBUFFER:R.FRAMEBUFFER,null),this.resolveDepthStencilAttachmentsChanged=!1}!r&&!i&&e.bindFramebuffer(n?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,null)},t.prototype.setScissorRectEnabled=function(e){if(this.currentScissorEnabled!==e){var n=this.gl;e?n.enable(n.SCISSOR_TEST):n.disable(n.SCISSOR_TEST),this.currentScissorEnabled=e}},t.prototype.applyStencil=function(){It(this.currentStencilRef)||(this.gl.stencilFuncSeparate(R.FRONT,this.currentMegaState.stencilFront.compare,this.currentStencilRef,this.currentMegaState.stencilFront.mask||255),this.gl.stencilFuncSeparate(R.BACK,this.currentMegaState.stencilBack.compare,this.currentStencilRef,this.currentMegaState.stencilBack.mask||255))},t.prototype.getFallbackTexture=function(e){var n=e.gl_target,r=e.formatKind;if(n===R.TEXTURE_2D)return r===Ie.Depth?this.fallbackTexture2DDepth:this.fallbackTexture2D;if(n===R.TEXTURE_2D_ARRAY)return this.fallbackTexture2DArray;if(n===R.TEXTURE_3D)return this.fallbackTexture3D;if(n===R.TEXTURE_CUBE_MAP)return this.fallbackTextureCube;throw new Error("whoops")},t.prototype.submitBlitRenderPass=function(e,n){this.blitRenderPipeline||(this.blitProgram=this.createProgram({vertex:{glsl:`layout(location = 0) in vec2 a_Position;
out vec2 v_TexCoord;
void main() {
  v_TexCoord = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);

  #ifdef VIEWPORT_ORIGIN_TL
    v_TexCoord.y = 1.0 - v_TexCoord.y;
  #endif
}`},fragment:{glsl:`uniform sampler2D u_Texture;
in vec2 v_TexCoord;
out vec4 outputColor;
void main() {
  outputColor = texture(SAMPLER_2D(u_Texture), v_TexCoord);
}`}}),this.blitVertexBuffer=this.createBuffer({usage:ye.VERTEX|ye.COPY_DST,viewOrSize:new Float32Array([-4,-4,4,-4,0,4])}),this.blitInputLayout=this.createInputLayout({vertexBufferDescriptors:[{arrayStride:4*2,stepMode:Yn.VERTEX,attributes:[{format:I.F32_RG,offset:4*0,shaderLocation:0}]}],indexBufferFormat:null,program:this.blitProgram}),this.blitRenderPipeline=this.createRenderPipeline({topology:De.TRIANGLES,sampleCount:1,program:this.blitProgram,colorAttachmentFormats:[I.U8_RGBA_RT],depthStencilAttachmentFormat:null,inputLayout:this.blitInputLayout,megaStateDescriptor:Mr(Or)}),this.blitBindings=this.createBindings({samplerBindings:[{sampler:null,texture:e.texture}],uniformBufferBindings:[]}),this.blitProgram.setUniformsLegacy({u_Texture:e}));var r=this.currentRenderPassDescriptor;this.currentRenderPassDescriptor=null,this.inBlitRenderPass=!0;var i=this.createRenderPass({colorAttachment:[e],colorResolveTo:[n],colorClearColor:[jC]}),o=this.getCanvas(),s=o.width,a=o.height;i.setPipeline(this.blitRenderPipeline),i.setBindings(this.blitBindings),i.setVertexInput(this.blitInputLayout,[{buffer:this.blitVertexBuffer}],null),i.setViewport(0,0,s,a),this.gl.disable(this.gl.BLEND),i.draw(3,0),this.gl.enable(this.gl.BLEND),this.currentRenderPassDescriptor=r,this.inBlitRenderPass=!1},t}(),Yb=function(){function t(e){this.pluginOptions=e}return t.prototype.createSwapChain=function(e){return Ar(this,void 0,void 0,function(){var n,r,i,o,s,a,u,l,c,h,f,p,_;return Sr(this,function(v){return n=this.pluginOptions,r=n.targets,i=n.xrCompatible,o=n.antialias,s=o===void 0?!1:o,a=n.preserveDrawingBuffer,u=a===void 0?!1:a,l=n.premultipliedAlpha,c=l===void 0?!0:l,h=n.shaderDebug,f=n.trackResources,p={antialias:s,preserveDrawingBuffer:u,stencil:!0,premultipliedAlpha:c,xrCompatible:i},this.handleContextEvents(e),r.includes("webgl2")&&(_=e.getContext("webgl2",p)||e.getContext("experimental-webgl2",p)),!_&&r.includes("webgl1")&&(_=e.getContext("webgl",p)||e.getContext("experimental-webgl",p)),[2,new Zb(_,{shaderDebug:h,trackResources:f})]})})},t.prototype.handleContextEvents=function(e){var n=this.pluginOptions,r=n.onContextLost,i=n.onContextRestored,o=n.onContextCreationError;o&&e.addEventListener("webglcontextcreationerror",o,!1),r&&e.addEventListener("webglcontextlost",r,!1),i&&e.addEventListener("webglcontextrestored",i,!1)},t}();let be;const x_=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&x_.decode();let hi=null;function No(){return(hi===null||hi.byteLength===0)&&(hi=new Uint8Array(be.memory.buffer)),hi}function os(t,e){return t=t>>>0,x_.decode(No().subarray(t,t+e))}const un=new Array(128).fill(void 0);un.push(void 0,null,!0,!1);let mi=un.length;function Gb(t){mi===un.length&&un.push(un.length+1);const e=mi;return mi=un[e],un[e]=t,e}function Do(t){return un[t]}function Kb(t){t<132||(un[t]=mi,mi=t)}function qb(t){const e=Do(t);return Kb(t),e}let Pr=0;const wo=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Qb=typeof wo.encodeInto=="function"?function(t,e){return wo.encodeInto(t,e)}:function(t,e){const n=wo.encode(t);return e.set(n),{read:t.length,written:n.length}};function ss(t,e,n){if(n===void 0){const a=wo.encode(t),u=e(a.length,1)>>>0;return No().subarray(u,u+a.length).set(a),Pr=a.length,u}let r=t.length,i=e(r,1)>>>0;const o=No();let s=0;for(;s<r;s++){const a=t.charCodeAt(s);if(a>127)break;o[i+s]=a}if(s!==r){s!==0&&(t=t.slice(s)),i=n(i,r,r=s+t.length*3,1)>>>0;const a=No().subarray(i+s,i+r),u=Qb(t,a);s+=u.written}return Pr=s,i}let fi=null;function as(){return(fi===null||fi.byteLength===0)&&(fi=new Int32Array(be.memory.buffer)),fi}function Jb(t,e,n){let r,i;try{const a=be.__wbindgen_add_to_stack_pointer(-16),u=ss(t,be.__wbindgen_malloc,be.__wbindgen_realloc),l=Pr,c=ss(e,be.__wbindgen_malloc,be.__wbindgen_realloc),h=Pr;be.glsl_compile(a,u,l,c,h,n);var o=as()[a/4+0],s=as()[a/4+1];return r=o,i=s,os(o,s)}finally{be.__wbindgen_add_to_stack_pointer(16),be.__wbindgen_free(r,i,1)}}class Fi{static __wrap(e){e=e>>>0;const n=Object.create(Fi.prototype);return n.__wbg_ptr=e,n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();be.__wbg_wgslcomposer_free(e)}constructor(){const e=be.wgslcomposer_new();return Fi.__wrap(e)}load_composable(e){const n=ss(e,be.__wbindgen_malloc,be.__wbindgen_realloc),r=Pr;be.wgslcomposer_load_composable(this.__wbg_ptr,n,r)}wgsl_compile(e){let n,r;try{const s=be.__wbindgen_add_to_stack_pointer(-16),a=ss(e,be.__wbindgen_malloc,be.__wbindgen_realloc),u=Pr;be.wgslcomposer_wgsl_compile(s,this.__wbg_ptr,a,u);var i=as()[s/4+0],o=as()[s/4+1];return n=i,r=o,os(i,o)}finally{be.__wbindgen_add_to_stack_pointer(16),be.__wbindgen_free(n,r,1)}}}async function eI(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function tI(){const t={};return t.wbg={},t.wbg.__wbindgen_string_new=function(e,n){const r=os(e,n);return Gb(r)},t.wbg.__wbindgen_object_drop_ref=function(e){qb(e)},t.wbg.__wbg_log_1d3ae0273d8f4f8a=function(e){console.log(Do(e))},t.wbg.__wbg_log_576ca876af0d4a77=function(e,n){console.log(Do(e),Do(n))},t.wbg.__wbindgen_throw=function(e,n){throw new Error(os(e,n))},t}function nI(t,e){return be=t.exports,C_.__wbindgen_wasm_module=e,fi=null,hi=null,be}async function C_(t){if(be!==void 0)return be;const e=tI();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await eI(await t,e);return nI(n,r)}var Le;(function(t){t[t.COPY_SRC=1]="COPY_SRC",t[t.COPY_DST=2]="COPY_DST",t[t.TEXTURE_BINDING=4]="TEXTURE_BINDING",t[t.STORAGE_BINDING=8]="STORAGE_BINDING",t[t.STORAGE=8]="STORAGE",t[t.RENDER_ATTACHMENT=16]="RENDER_ATTACHMENT"})(Le||(Le={}));var iu;(function(t){t[t.READ=1]="READ",t[t.WRITE=2]="WRITE"})(iu||(iu={}));function rI(t){var e=0;return t&et.SAMPLED&&(e|=Le.TEXTURE_BINDING|Le.COPY_DST|Le.COPY_SRC),t&et.STORAGE&&(e|=Le.TEXTURE_BINDING|Le.STORAGE_BINDING|Le.COPY_SRC|Le.COPY_DST),t&et.RENDER_TARGET&&(e|=Le.RENDER_ATTACHMENT|Le.TEXTURE_BINDING|Le.COPY_SRC|Le.COPY_DST),e}function $u(t){if(t===I.U8_R_NORM)return"r8unorm";if(t===I.S8_R_NORM)return"r8snorm";if(t===I.U8_RG_NORM)return"rg8unorm";if(t===I.S8_RG_NORM)return"rg8snorm";if(t===I.U32_R)return"r32uint";if(t===I.S32_R)return"r32sint";if(t===I.F32_R)return"r32float";if(t===I.U16_RG)return"rg16uint";if(t===I.S16_RG)return"rg16sint";if(t===I.F16_RG)return"rg16float";if(t===I.U8_RGBA_RT)return"bgra8unorm";if(t===I.U8_RGBA_RT_SRGB)return"bgra8unorm-srgb";if(t===I.U8_RGBA_NORM)return"rgba8unorm";if(t===I.U8_RGBA_SRGB)return"rgba8unorm-srgb";if(t===I.S8_RGBA_NORM)return"rgba8snorm";if(t===I.U32_RG)return"rg32uint";if(t===I.S32_RG)return"rg32sint";if(t===I.F32_RG)return"rg32float";if(t===I.U16_RGBA)return"rgba16uint";if(t===I.S16_RGBA)return"rgba16sint";if(t===I.F16_RGBA)return"rgba16float";if(t===I.F32_RGBA)return"rgba32float";if(t===I.U32_RGBA)return"rgba32uint";if(t===I.S32_RGBA)return"rgba32sint";if(t===I.D24)return"depth24plus";if(t===I.D24_S8)return"depth24plus-stencil8";if(t===I.D32F)return"depth32float";if(t===I.D32F_S8)return"depth32float-stencil8";if(t===I.BC1)return"bc1-rgba-unorm";if(t===I.BC1_SRGB)return"bc1-rgba-unorm-srgb";if(t===I.BC2)return"bc2-rgba-unorm";if(t===I.BC2_SRGB)return"bc2-rgba-unorm-srgb";if(t===I.BC3)return"bc3-rgba-unorm";if(t===I.BC3_SRGB)return"bc3-rgba-unorm-srgb";if(t===I.BC4_SNORM)return"bc4-r-snorm";if(t===I.BC4_UNORM)return"bc4-r-unorm";if(t===I.BC5_SNORM)return"bc5-rg-snorm";if(t===I.BC5_UNORM)return"bc5-rg-unorm";throw"whoops"}function iI(t){if(t===oe.TEXTURE_2D)return"2d";if(t===oe.TEXTURE_CUBE_MAP)return"2d";if(t===oe.TEXTURE_2D_ARRAY)return"2d";if(t===oe.TEXTURE_3D)return"3d";throw new Error("whoops")}function oI(t){if(t===oe.TEXTURE_2D)return"2d";if(t===oe.TEXTURE_CUBE_MAP)return"cube";if(t===oe.TEXTURE_2D_ARRAY)return"2d-array";if(t===oe.TEXTURE_3D)return"3d";throw new Error("whoops")}function sI(t){var e=0;return t&ye.INDEX&&(e|=GPUBufferUsage.INDEX),t&ye.VERTEX&&(e|=GPUBufferUsage.VERTEX),t&ye.UNIFORM&&(e|=GPUBufferUsage.UNIFORM),t&ye.STORAGE&&(e|=GPUBufferUsage.STORAGE),t&ye.COPY_SRC&&(e|=GPUBufferUsage.COPY_SRC),t&ye.INDIRECT&&(e|=GPUBufferUsage.INDIRECT),e|=GPUBufferUsage.COPY_DST,e}function oa(t){if(t===ot.CLAMP_TO_EDGE)return"clamp-to-edge";if(t===ot.REPEAT)return"repeat";if(t===ot.MIRRORED_REPEAT)return"mirror-repeat";throw new Error("whoops")}function Lf(t){if(t===Fe.BILINEAR)return"linear";if(t===Fe.POINT)return"nearest";throw new Error("whoops")}function aI(t){if(t===Ue.LINEAR)return"linear";if(t===Ue.NEAREST)return"nearest";if(t===Ue.NO_MIP)return"nearest";throw new Error("whoops")}function vr(t){var e=t;return e.gpuBuffer}function uI(t){var e=t;return e.gpuSampler}function lI(t){var e=t;return e.querySet}function cI(t){if(t===Jo.OcclusionConservative)return"occlusion";throw new Error("whoops")}function hI(t){switch(t){case De.TRIANGLES:return"triangle-list";case De.POINTS:return"point-list";case De.TRIANGLE_STRIP:return"triangle-strip";case De.LINES:return"line-list";case De.LINE_STRIP:return"line-strip";default:throw new Error("Unknown primitive topology mode")}}function fI(t){if(t===ft.NONE)return"none";if(t===ft.FRONT)return"front";if(t===ft.BACK)return"back";throw new Error("whoops")}function dI(t){if(t===Oi.CCW)return"ccw";if(t===Oi.CW)return"cw";throw new Error("whoops")}function pI(t,e){return{topology:hI(t),cullMode:fI(e.cullMode),frontFace:dI(e.frontFace)}}function Uf(t){if(t===ie.ZERO)return"zero";if(t===ie.ONE)return"one";if(t===ie.SRC)return"src";if(t===ie.ONE_MINUS_SRC)return"one-minus-src";if(t===ie.DST)return"dst";if(t===ie.ONE_MINUS_DST)return"one-minus-dst";if(t===ie.SRC_ALPHA)return"src-alpha";if(t===ie.ONE_MINUS_SRC_ALPHA)return"one-minus-src-alpha";if(t===ie.DST_ALPHA)return"dst-alpha";if(t===ie.ONE_MINUS_DST_ALPHA)return"one-minus-dst-alpha";if(t===ie.CONST)return"constant";if(t===ie.ONE_MINUS_CONSTANT)return"one-minus-constant";if(t===ie.SRC_ALPHA_SATURATE)return"src-alpha-saturated";throw new Error("whoops")}function _I(t){if(t===Ve.ADD)return"add";if(t===Ve.SUBSTRACT)return"subtract";if(t===Ve.REVERSE_SUBSTRACT)return"reverse-subtract";if(t===Ve.MIN)return"min";if(t===Ve.MAX)return"max";throw new Error("whoops")}function kf(t){return{operation:_I(t.blendMode),srcFactor:Uf(t.blendSrcFactor),dstFactor:Uf(t.blendDstFactor)}}function zf(t){return t.blendMode===Ve.ADD&&t.blendSrcFactor===ie.ONE&&t.blendDstFactor===ie.ZERO}function vI(t){if(!(zf(t.rgbBlendState)&&zf(t.alphaBlendState)))return{color:kf(t.rgbBlendState),alpha:kf(t.alphaBlendState)}}function mI(t,e){return{format:$u(e),blend:vI(t),writeMask:t.channelWriteMask}}function gI(t,e){return e.attachmentsState.map(function(n,r){return mI(n,t[r])})}function Lo(t){if(t===ve.NEVER)return"never";if(t===ve.LESS)return"less";if(t===ve.EQUAL)return"equal";if(t===ve.LEQUAL)return"less-equal";if(t===ve.GREATER)return"greater";if(t===ve.NOTEQUAL)return"not-equal";if(t===ve.GEQUAL)return"greater-equal";if(t===ve.ALWAYS)return"always";throw new Error("whoops")}function sr(t){if(t===Me.KEEP)return"keep";if(t===Me.REPLACE)return"replace";if(t===Me.ZERO)return"zero";if(t===Me.DECREMENT_CLAMP)return"decrement-clamp";if(t===Me.DECREMENT_WRAP)return"decrement-wrap";if(t===Me.INCREMENT_CLAMP)return"increment-clamp";if(t===Me.INCREMENT_WRAP)return"increment-wrap";if(t===Me.INVERT)return"invert";throw new Error("whoops")}function EI(t,e){if(!It(t))return{format:$u(t),depthWriteEnabled:!!e.depthWrite,depthCompare:Lo(e.depthCompare),depthBias:e.polygonOffset?e.polygonOffsetUnits:0,depthBiasSlopeScale:e.polygonOffset?e.polygonOffsetFactor:0,stencilFront:{compare:Lo(e.stencilFront.compare),passOp:sr(e.stencilFront.passOp),failOp:sr(e.stencilFront.failOp),depthFailOp:sr(e.stencilFront.depthFailOp)},stencilBack:{compare:Lo(e.stencilBack.compare),passOp:sr(e.stencilBack.passOp),failOp:sr(e.stencilBack.failOp),depthFailOp:sr(e.stencilBack.depthFailOp)},stencilReadMask:4294967295,stencilWriteMask:4294967295}}function yI(t){if(t!==null){if(t===I.U16_R)return"uint16";if(t===I.U32_R)return"uint32";throw new Error("whoops")}}function TI(t){if(t===Yn.VERTEX)return"vertex";if(t===Yn.INSTANCE)return"instance";throw new Error("whoops")}function AI(t){if(t===I.U8_R)return"uint8x2";if(t===I.U8_RG)return"uint8x2";if(t===I.U8_RGB)return"uint8x4";if(t===I.U8_RGBA)return"uint8x4";if(t===I.U8_RG_NORM)return"unorm8x2";if(t===I.U8_RGBA_NORM)return"unorm8x4";if(t===I.S8_RGB_NORM)return"snorm8x4";if(t===I.S8_RGBA_NORM)return"snorm8x4";if(t===I.U16_RG_NORM)return"unorm16x2";if(t===I.U16_RGBA_NORM)return"unorm16x4";if(t===I.S16_RG_NORM)return"snorm16x2";if(t===I.S16_RGBA_NORM)return"snorm16x4";if(t===I.S16_RG)return"uint16x2";if(t===I.F16_RG)return"float16x2";if(t===I.F16_RGBA)return"float16x4";if(t===I.F32_R)return"float32";if(t===I.F32_RG)return"float32x2";if(t===I.F32_RGB)return"float32x3";if(t===I.F32_RGBA)return"float32x4";throw"whoops"}function SI(t){var e=Gt(t);switch(e){case k.BC1:case k.BC2:case k.BC3:case k.BC4_SNORM:case k.BC4_UNORM:case k.BC5_SNORM:case k.BC5_UNORM:return!0;default:return!1}}function RI(t){var e=Gt(t);switch(e){case k.BC1:case k.BC2:case k.BC3:case k.BC4_SNORM:case k.BC4_UNORM:case k.BC5_SNORM:case k.BC5_UNORM:return 4;default:return 1}}function Vf(t,e,n,r){switch(n===void 0&&(n=!1),t){case I.S8_R:case I.S8_R_NORM:case I.S8_RG_NORM:case I.S8_RGB_NORM:case I.S8_RGBA_NORM:{var i=e instanceof ArrayBuffer?new Int8Array(e):new Int8Array(e);return r&&i.set(new Int8Array(r)),i}case I.U8_R:case I.U8_R_NORM:case I.U8_RG:case I.U8_RG_NORM:case I.U8_RGB:case I.U8_RGB_NORM:case I.U8_RGB_SRGB:case I.U8_RGBA:case I.U8_RGBA_NORM:case I.U8_RGBA_SRGB:{var o=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e);return r&&o.set(new Uint8Array(r)),o}case I.S16_R:case I.S16_RG:case I.S16_RG_NORM:case I.S16_RGB_NORM:case I.S16_RGBA:case I.S16_RGBA_NORM:{var s=e instanceof ArrayBuffer?new Int16Array(e):new Int16Array(n?e/2:e);return r&&s.set(new Int16Array(r)),s}case I.U16_R:case I.U16_RGB:case I.U16_RGBA_5551:case I.U16_RGBA_NORM:case I.U16_RG_NORM:case I.U16_R_NORM:{var a=e instanceof ArrayBuffer?new Uint16Array(e):new Uint16Array(n?e/2:e);return r&&a.set(new Uint16Array(r)),a}case I.S32_R:{var u=e instanceof ArrayBuffer?new Int32Array(e):new Int32Array(n?e/4:e);return r&&u.set(new Int32Array(r)),u}case I.U32_R:case I.U32_RG:{var l=e instanceof ArrayBuffer?new Uint32Array(e):new Uint32Array(n?e/4:e);return r&&l.set(new Uint32Array(r)),l}case I.F32_R:case I.F32_RG:case I.F32_RGB:case I.F32_RGBA:{var c=e instanceof ArrayBuffer?new Float32Array(e):new Float32Array(n?e/4:e);return r&&c.set(new Float32Array(r)),c}}var h=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e);return r&&h.set(new Uint8Array(r)),h}function xI(t){var e=(t&32768)>>15,n=(t&31744)>>10,r=t&1023;return n===0?(e?-1:1)*Math.pow(2,-14)*(r/Math.pow(2,10)):n==31?r?NaN:(e?-1:1)*(1/0):(e?-1:1)*Math.pow(2,n-15)*(1+r/Math.pow(2,10))}function b_(t){switch(t){case"r8unorm":case"r8snorm":case"r8uint":case"r8sint":return{width:1,height:1,length:1};case"r16uint":case"r16sint":case"r16float":case"rg8unorm":case"rg8snorm":case"rg8uint":case"rg8sint":return{width:1,height:1,length:2};case"r32uint":case"r32sint":case"r32float":case"rg16uint":case"rg16sint":case"rg16float":case"rgba8unorm":case"rgba8unorm-srgb":case"rgba8snorm":case"rgba8uint":case"rgba8sint":case"bgra8unorm":case"bgra8unorm-srgb":case"rgb9e5ufloat":case"rgb10a2unorm":case"rg11b10ufloat":return{width:1,height:1,length:4};case"rg32uint":case"rg32sint":case"rg32float":case"rgba16uint":case"rgba16sint":case"rgba16float":return{width:1,height:1,length:8};case"rgba32uint":case"rgba32sint":case"rgba32float":return{width:1,height:1,length:16};case"stencil8":throw new Error("No fixed size for Stencil8 format!");case"depth16unorm":return{width:1,height:1,length:2};case"depth24plus":throw new Error("No fixed size for Depth24Plus format!");case"depth24plus-stencil8":throw new Error("No fixed size for Depth24PlusStencil8 format!");case"depth32float":return{width:1,height:1,length:4};case"depth32float-stencil8":return{width:1,height:1,length:5};case"bc7-rgba-unorm":case"bc7-rgba-unorm-srgb":case"bc6h-rgb-ufloat":case"bc6h-rgb-float":case"bc2-rgba-unorm":case"bc2-rgba-unorm-srgb":case"bc3-rgba-unorm":case"bc3-rgba-unorm-srgb":case"bc5-rg-unorm":case"bc5-rg-snorm":return{width:4,height:4,length:16};case"bc4-r-unorm":case"bc4-r-snorm":case"bc1-rgba-unorm":case"bc1-rgba-unorm-srgb":return{width:4,height:4,length:8};default:return{width:1,height:1,length:4}}}var Lt=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=t.call(this)||this;return o.id=r,o.device=i,o}return e.prototype.destroy=function(){},e}(f_),CI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s,a,u=t.call(this,{id:r,device:i})||this;u.type=he.Bindings;var l=o.pipeline;ne(!!l);var c=o.uniformBufferBindings,h=o.storageBufferBindings,f=o.samplerBindings,p=o.storageTextureBindings;u.numUniformBuffers=(c==null?void 0:c.length)||0;var _=[[],[],[],[]],v=0;if(c&&c.length)for(var m=0;m<c.length;m++){var y=o.uniformBufferBindings[m],T=y.binding,S=y.size,x=y.offset,C=y.buffer,M={buffer:vr(C),offset:x??0,size:S};_[0].push({binding:T??v++,resource:M})}if(f&&f.length){v=0;for(var m=0;m<f.length;m++){var P=Ce(Ce({},f[m]),T_),T=o.samplerBindings[m],F=T.texture!==null?T.texture:u.device.getFallbackTexture(P);P.dimension=F.dimension,P.formatKind=__(F.format);var V=F.gpuTextureView;if(_[1].push({binding:(s=T.textureBinding)!==null&&s!==void 0?s:v++,resource:V}),T.samplerBinding!==-1){var B=T.sampler!==null?T.sampler:u.device.getFallbackSampler(P),O=uI(B);_[1].push({binding:(a=T.samplerBinding)!==null&&a!==void 0?a:v++,resource:O})}}}if(h&&h.length){v=0;for(var m=0;m<h.length;m++){var N=o.storageBufferBindings[m],T=N.binding,S=N.size,x=N.offset,C=N.buffer,M={buffer:vr(C),offset:x??0,size:S};_[2].push({binding:T??v++,resource:M})}}if(p&&p.length){v=0;for(var m=0;m<p.length;m++){var U=o.storageTextureBindings[m],T=U.binding,F=U.texture,V=F.gpuTextureView;_[3].push({binding:T??v++,resource:V})}}var z=_.findLastIndex(function(W){return!!W.length});return u.gpuBindGroup=_.map(function(W,Y){return Y<=z&&u.device.device.createBindGroup({layout:l.getBindGroupLayout(Y),entries:W})}),u}return e}(Lt),bI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.Buffer;var a=o.usage,u=o.viewOrSize,l=!!(a&ye.MAP_READ);s.usage=sI(a),l&&(s.usage=ye.MAP_READ|ye.COPY_DST);var c=!pr(u);if(s.view=pr(u)?null:u,s.size=pr(u)?ts(u,4):ts(u.byteLength,4),pr(u))s.gpuBuffer=s.device.device.createBuffer({usage:s.usage,size:s.size,mappedAtCreation:l?c:!1});else{s.gpuBuffer=s.device.device.createBuffer({usage:s.usage,size:s.size,mappedAtCreation:!0});var h=u&&u.constructor||Float32Array;new h(s.gpuBuffer.getMappedRange()).set(u),s.gpuBuffer.unmap()}return s}return e.prototype.setSubData=function(n,r,i,o){i===void 0&&(i=0),o===void 0&&(o=0);var s=this.gpuBuffer;o=o||r.byteLength,o=Math.min(o,this.size-n);var a=r.byteOffset+i,u=a+o,l=o+3&-4;if(l!==o){var c=new Uint8Array(r.buffer.slice(a,u));r=new Uint8Array(l),r.set(c),i=0,a=0,u=l,o=l}for(var h=1024*1024*15,f=0;u-(a+f)>h;)this.device.device.queue.writeBuffer(s,n+f,r.buffer,a+f,h),f+=h;this.device.device.queue.writeBuffer(s,n+f,r.buffer,a+f,o-f)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.gpuBuffer.destroy()},e}(Lt),Hf=function(){function t(){this.gpuComputePassEncoder=null}return t.prototype.dispatchWorkgroups=function(e,n,r){this.gpuComputePassEncoder.dispatchWorkgroups(e,n,r)},t.prototype.dispatchWorkgroupsIndirect=function(e,n){this.gpuComputePassEncoder.dispatchWorkgroupsIndirect(e.gpuBuffer,n)},t.prototype.finish=function(){this.gpuComputePassEncoder.end(),this.gpuComputePassEncoder=null,this.frameCommandEncoder=null},t.prototype.beginComputePass=function(e){ne(this.gpuComputePassEncoder===null),this.frameCommandEncoder=e,this.gpuComputePassEncoder=this.frameCommandEncoder.beginComputePass(this.gpuComputePassDescriptor)},t.prototype.setPipeline=function(e){var n=e,r=kn(n.gpuComputePipeline);this.gpuComputePassEncoder.setPipeline(r)},t.prototype.setBindings=function(e){var n=this,r=e;r.gpuBindGroup.forEach(function(i,o){i&&n.gpuComputePassEncoder.setBindGroup(o,r.gpuBindGroup[o])})},t.prototype.pushDebugGroup=function(e){this.gpuComputePassEncoder.pushDebugGroup(e)},t.prototype.popDebugGroup=function(){this.gpuComputePassEncoder.popDebugGroup()},t.prototype.insertDebugMarker=function(e){this.gpuComputePassEncoder.insertDebugMarker(e)},t}(),II=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.ComputePipeline,s.gpuComputePipeline=null,s.descriptor=o;var a=o.program,u=a.computeStage;if(u===null)return s;var l={layout:"auto",compute:Ce({},u)};return s.gpuComputePipeline=s.device.device.createComputePipeline(l),s.name!==void 0&&(s.gpuComputePipeline.label=s.name),s}return e.prototype.getBindGroupLayout=function(n){return this.gpuComputePipeline.getBindGroupLayout(n)},e}(Lt),MI=function(t){Oe(e,t);function e(n){var r,i,o,s,a=n.id,u=n.device,l=n.descriptor,c=t.call(this,{id:a,device:u})||this;c.type=he.InputLayout;var h=[];try{for(var f=Zn(l.vertexBufferDescriptors),p=f.next();!p.done;p=f.next()){var _=p.value,v=_.arrayStride,m=_.stepMode,y=_.attributes;h.push({arrayStride:v,stepMode:TI(m),attributes:[]});try{for(var T=(o=void 0,Zn(y)),S=T.next();!S.done;S=T.next()){var x=S.value,C=x.shaderLocation,M=x.format,P=x.offset;h[h.length-1].attributes.push({shaderLocation:C,format:AI(M),offset:P})}}catch(F){o={error:F}}finally{try{S&&!S.done&&(s=T.return)&&s.call(T)}finally{if(o)throw o.error}}}}catch(F){r={error:F}}finally{try{p&&!p.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}return c.indexFormat=yI(l.indexBufferFormat),c.buffers=h,c}return e}(Lt),Xf=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;return s.type=he.Program,s.vertexStage=null,s.fragmentStage=null,s.computeStage=null,s.descriptor=o,o.vertex&&(s.vertexStage=s.createShaderStage(o.vertex,"vertex")),o.fragment&&(s.fragmentStage=s.createShaderStage(o.fragment,"fragment")),o.compute&&(s.computeStage=s.createShaderStage(o.compute,"compute")),s}return e.prototype.setUniformsLegacy=function(n){},e.prototype.createShaderStage=function(n,r){var i,o,s=n.glsl,a=n.wgsl,u=n.entryPoint,l=n.postprocess,c=!1,h=a;if(!h)try{h=this.device.glsl_compile(s,r,c)}catch(y){throw console.error(y,s),new Error("whoops")}var f=function(y){if(!h.includes(y))return"continue";h=h.replace("var T_".concat(y,": texture_2d<f32>;"),"var T_".concat(y,": texture_depth_2d;")),h=h.replace(new RegExp("textureSample\\(T_".concat(y,"(.*)\\);$"),"gm"),function(T,S){return"vec4<f32>(textureSample(T_".concat(y).concat(S,"), 0.0, 0.0, 0.0);")})};try{for(var p=Zn(["u_TextureFramebufferDepth"]),_=p.next();!_.done;_=p.next()){var v=_.value;f(v)}}catch(y){i={error:y}}finally{try{_&&!_.done&&(o=p.return)&&o.call(p)}finally{if(i)throw i.error}}l&&(h=l(h));var m=this.device.device.createShaderModule({code:h});return{module:m,entryPoint:u||"main"}},e}(Lt),OI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;s.type=he.QueryPool;var a=o.elemCount,u=o.type;return s.querySet=s.device.device.createQuerySet({type:cI(u),count:a}),s.resolveBuffer=s.device.device.createBuffer({size:a*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),s.cpuBuffer=s.device.device.createBuffer({size:a*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),s.results=null,s}return e.prototype.queryResultOcclusion=function(n){return this.results===null?null:this.results[n]!==BigInt(0)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.querySet.destroy(),this.resolveBuffer.destroy(),this.cpuBuffer.destroy()},e}(Lt),PI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=t.call(this,{id:r,device:i})||this;return o.type=he.Readback,o}return e.prototype.readTexture=function(n,r,i,o,s,a,u,l){return u===void 0&&(u=0),Ar(this,void 0,void 0,function(){var c,h,f,p,_,v,m,y;return Sr(this,function(T){return c=n,h=0,f=b_(c.gpuTextureformat),p=Math.ceil(o/f.width)*f.length,_=Math.ceil(p/256)*256,v=_*s,m=this.device.createBuffer({usage:ye.STORAGE|ye.MAP_READ|ye.COPY_DST,hint:wt.STATIC,viewOrSize:v}),y=this.device.device.createCommandEncoder(),y.copyTextureToBuffer({texture:c.gpuTexture,mipLevel:0,origin:{x:r,y:i,z:Math.max(h,0)}},{buffer:m.gpuBuffer,offset:0,bytesPerRow:_},{width:o,height:s,depthOrArrayLayers:1}),this.device.device.queue.submit([y.finish()]),[2,this.readBuffer(m,0,a.byteLength===v?a:null,u,v,c.format,!0,!1,p,_,s)]})})},e.prototype.readTextureSync=function(n,r,i,o,s,a,u,l){throw new Error("ERROR_MSG_METHOD_NOT_IMPLEMENTED")},e.prototype.readBuffer=function(n,r,i,o,s,a,u,l,c,h,f){var p=this;r===void 0&&(r=0),i===void 0&&(i=null),s===void 0&&(s=0),a===void 0&&(a=I.U8_RGB),u===void 0&&(u=!1),c===void 0&&(c=0),h===void 0&&(h=0),f===void 0&&(f=0);var _=n,v=s||_.size,m=i||_.view,y=m&&m.constructor&&m.constructor.BYTES_PER_ELEMENT||p_(a),T=_;if(!(_.usage&ye.MAP_READ&&_.usage&ye.COPY_DST)){var S=this.device.device.createCommandEncoder();T=this.device.createBuffer({usage:ye.STORAGE|ye.MAP_READ|ye.COPY_DST,hint:wt.STATIC,viewOrSize:v}),S.copyBufferToBuffer(_.gpuBuffer,r,T.gpuBuffer,0,v),this.device.device.queue.submit([S.finish()])}return new Promise(function(x,C){T.gpuBuffer.mapAsync(iu.READ,r,v).then(function(){var M=T.gpuBuffer.getMappedRange(r,v),P=m;if(u)P===null?P=Vf(a,v,!0,M):P=Vf(a,P.buffer,void 0,M);else if(P===null)switch(y){case 1:P=new Uint8Array(v),P.set(new Uint8Array(M));break;case 2:P=p.getHalfFloatAsFloatRGBAArrayBuffer(v/2,M);break;case 4:P=new Float32Array(v/4),P.set(new Float32Array(M));break}else switch(y){case 1:P=new Uint8Array(P.buffer),P.set(new Uint8Array(M));break;case 2:P=p.getHalfFloatAsFloatRGBAArrayBuffer(v/2,M,m);break;case 4:var F=m&&m.constructor||Float32Array;P=new F(P.buffer),P.set(new F(M));break}if(c!==h){y===1&&!u&&(c*=2,h*=2);for(var V=new Uint8Array(P.buffer),B=c,O=0,N=1;N<f;++N){O=N*h;for(var U=0;U<c;++U)V[B++]=V[O++]}y!==0&&!u?P=new Float32Array(V.buffer,0,B/4):P=new Uint8Array(V.buffer,0,B)}T.gpuBuffer.unmap(),x(P)},function(M){return C(M)})})},e.prototype.getHalfFloatAsFloatRGBAArrayBuffer=function(n,r,i){i||(i=new Float32Array(n));for(var o=new Uint16Array(r);n--;)i[n]=xI(o[n]);return i},e}(Lt),Wf=function(){function t(e){this.device=e,this.gpuRenderPassEncoder=null,this.gfxColorAttachment=[],this.gfxColorAttachmentLevel=[],this.gfxColorResolveTo=[],this.gfxColorResolveToLevel=[],this.gfxDepthStencilAttachment=null,this.gfxDepthStencilResolveTo=null,this.gpuColorAttachments=[],this.gpuDepthStencilAttachment={view:null,depthLoadOp:"load",depthStoreOp:"store",stencilLoadOp:"load",stencilStoreOp:"store"},this.gpuRenderPassDescriptor={colorAttachments:this.gpuColorAttachments,depthStencilAttachment:this.gpuDepthStencilAttachment}}return t.prototype.getEncoder=function(){var e;return((e=this.renderBundle)===null||e===void 0?void 0:e.renderBundleEncoder)||this.gpuRenderPassEncoder},t.prototype.getTextureView=function(e,n){return ne(n<e.mipLevelCount),e.mipLevelCount===1?e.gpuTextureView:e.gpuTexture.createView({baseMipLevel:n,mipLevelCount:1})},t.prototype.setRenderPassDescriptor=function(e){var n,r,i,o,s,a;this.descriptor=e,this.gpuRenderPassDescriptor.colorAttachments=this.gpuColorAttachments;var u=e.colorAttachment.length;this.gfxColorAttachment.length=u,this.gfxColorResolveTo.length=u;for(var l=0;l<e.colorAttachment.length;l++){var c=e.colorAttachment[l],h=e.colorResolveTo[l];if(c===null&&h!==null&&(c=h,h=null),this.gfxColorAttachment[l]=c,this.gfxColorResolveTo[l]=h,this.gfxColorAttachmentLevel[l]=((n=e.colorAttachmentLevel)===null||n===void 0?void 0:n[l])||0,this.gfxColorResolveToLevel[l]=((r=e.colorResolveToLevel)===null||r===void 0?void 0:r[l])||0,c!==null){this.gpuColorAttachments[l]===void 0&&(this.gpuColorAttachments[l]={});var f=this.gpuColorAttachments[l];f.view=this.getTextureView(c,((i=this.gfxColorAttachmentLevel)===null||i===void 0?void 0:i[l])||0);var p=(s=(o=e.colorClearColor)===null||o===void 0?void 0:o[l])!==null&&s!==void 0?s:"load";p==="load"?f.loadOp="load":(f.loadOp="clear",f.clearValue=p),f.storeOp=!((a=e.colorStore)===null||a===void 0)&&a[l]?"store":"discard",f.resolveTarget=void 0,h!==null&&(c.sampleCount>1?f.resolveTarget=this.getTextureView(h,this.gfxColorResolveToLevel[l]):f.storeOp="store")}else{this.gpuColorAttachments.length=l,this.gfxColorAttachment.length=l,this.gfxColorResolveTo.length=l;break}}if(this.gfxDepthStencilAttachment=e.depthStencilAttachment,this.gfxDepthStencilResolveTo=e.depthStencilResolveTo,e.depthStencilAttachment){var _=e.depthStencilAttachment,f=this.gpuDepthStencilAttachment;f.view=_.gpuTextureView;var v=!!(Ir(_.format)&X.Depth);v?(e.depthClearValue==="load"?f.depthLoadOp="load":(f.depthLoadOp="clear",f.depthClearValue=e.depthClearValue),e.depthStencilStore||this.gfxDepthStencilResolveTo!==null?f.depthStoreOp="store":f.depthStoreOp="discard"):(f.depthLoadOp=void 0,f.depthStoreOp=void 0);var m=!!(Ir(_.format)&X.Stencil);m?(e.stencilClearValue==="load"?f.stencilLoadOp="load":(f.stencilLoadOp="clear",f.stencilClearValue=e.stencilClearValue),e.depthStencilStore||this.gfxDepthStencilResolveTo!==null?f.stencilStoreOp="store":f.stencilStoreOp="discard"):(f.stencilLoadOp=void 0,f.stencilStoreOp=void 0),this.gpuRenderPassDescriptor.depthStencilAttachment=this.gpuDepthStencilAttachment}else this.gpuRenderPassDescriptor.depthStencilAttachment=void 0;this.gpuRenderPassDescriptor.occlusionQuerySet=It(e.occlusionQueryPool)?void 0:lI(e.occlusionQueryPool)},t.prototype.beginRenderPass=function(e,n){ne(this.gpuRenderPassEncoder===null),this.setRenderPassDescriptor(n),this.frameCommandEncoder=e,this.gpuRenderPassEncoder=this.frameCommandEncoder.beginRenderPass(this.gpuRenderPassDescriptor)},t.prototype.flipY=function(e,n){var r=this.device.swapChainHeight;return r-e-n},t.prototype.setViewport=function(e,n,r,i,o,s){o===void 0&&(o=0),s===void 0&&(s=1),this.gpuRenderPassEncoder.setViewport(e,this.flipY(n,i),r,i,o,s)},t.prototype.setScissorRect=function(e,n,r,i){this.gpuRenderPassEncoder.setScissorRect(e,this.flipY(n,i),r,i)},t.prototype.setPipeline=function(e){var n=e,r=kn(n.gpuRenderPipeline);this.getEncoder().setPipeline(r)},t.prototype.setVertexInput=function(e,n,r){if(e!==null){var i=this.getEncoder(),o=e;r!==null&&i.setIndexBuffer(vr(r.buffer),kn(o.indexFormat),r.offset);for(var s=0;s<n.length;s++){var a=n[s];a!==null&&i.setVertexBuffer(s,vr(a.buffer),a.offset)}}},t.prototype.setBindings=function(e){var n=e,r=this.getEncoder();n.gpuBindGroup.forEach(function(i,o){i&&r.setBindGroup(o,n.gpuBindGroup[o])})},t.prototype.setStencilReference=function(e){this.gpuRenderPassEncoder.setStencilReference(e)},t.prototype.draw=function(e,n,r,i){this.getEncoder().draw(e,n,r,i)},t.prototype.drawIndexed=function(e,n,r,i,o){this.getEncoder().drawIndexed(e,n,r,i,o)},t.prototype.drawIndirect=function(e,n){this.getEncoder().drawIndirect(vr(e),n)},t.prototype.drawIndexedIndirect=function(e,n){this.getEncoder().drawIndexedIndirect(vr(e),n)},t.prototype.beginOcclusionQuery=function(e){this.gpuRenderPassEncoder.beginOcclusionQuery(e)},t.prototype.endOcclusionQuery=function(){this.gpuRenderPassEncoder.endOcclusionQuery()},t.prototype.pushDebugGroup=function(e){this.gpuRenderPassEncoder.pushDebugGroup(e)},t.prototype.popDebugGroup=function(){this.gpuRenderPassEncoder.popDebugGroup()},t.prototype.insertDebugMarker=function(e){this.gpuRenderPassEncoder.insertDebugMarker(e)},t.prototype.beginBundle=function(e){this.renderBundle=e},t.prototype.endBundle=function(){this.renderBundle.finish()},t.prototype.executeBundles=function(e){this.gpuRenderPassEncoder.executeBundles(e.map(function(n){return n.renderBundle}))},t.prototype.finish=function(){var e;(e=this.gpuRenderPassEncoder)===null||e===void 0||e.end(),this.gpuRenderPassEncoder=null;for(var n=0;n<this.gfxColorAttachment.length;n++){var r=this.gfxColorAttachment[n],i=this.gfxColorResolveTo[n];r!==null&&i!==null&&r.sampleCount===1&&this.copyAttachment(i,this.gfxColorAttachmentLevel[n],r,this.gfxColorResolveToLevel[n])}this.gfxDepthStencilAttachment&&this.gfxDepthStencilResolveTo&&(this.gfxDepthStencilAttachment.sampleCount>1||this.copyAttachment(this.gfxDepthStencilResolveTo,0,this.gfxDepthStencilAttachment,0)),this.frameCommandEncoder=null},t.prototype.copyAttachment=function(e,n,r,i){ne(r.sampleCount===1);var o={texture:r.gpuTexture,mipLevel:i},s={texture:e.gpuTexture,mipLevel:n};ne(r.width>>>i===e.width>>>n),ne(r.height>>>i===e.height>>>n),ne(!!(r.usage&Le.COPY_SRC)),ne(!!(e.usage&Le.COPY_DST)),this.frameCommandEncoder.copyTextureToTexture(o,s,[e.width,e.height,1])},t}(),FI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=t.call(this,{id:r,device:i})||this;return s.type=he.RenderPipeline,s.isCreatingAsync=!1,s.gpuRenderPipeline=null,s.descriptor=o,s.device.createRenderPipelineInternal(s,!1),s}return e.prototype.getBindGroupLayout=function(n){return this.gpuRenderPipeline.getBindGroupLayout(n)},e}(Lt),BI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s,a,u=t.call(this,{id:r,device:i})||this;u.type=he.Sampler;var l=o.lodMinClamp,c=o.mipmapFilter===Ue.NO_MIP?o.lodMinClamp:o.lodMaxClamp,h=(s=o.maxAnisotropy)!==null&&s!==void 0?s:1;return h>1&&ne(o.minFilter===Fe.BILINEAR&&o.magFilter===Fe.BILINEAR&&o.mipmapFilter===Ue.LINEAR),u.gpuSampler=u.device.device.createSampler({addressModeU:oa(o.addressModeU),addressModeV:oa(o.addressModeV),addressModeW:oa((a=o.addressModeW)!==null&&a!==void 0?a:o.addressModeU),lodMinClamp:l,lodMaxClamp:c,minFilter:Lf(o.minFilter),magFilter:Lf(o.magFilter),mipmapFilter:aI(o.mipmapFilter),compare:o.compareFunction!==void 0?Lo(o.compareFunction):void 0,maxAnisotropy:h}),u}return e}(Lt),Eo=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=n.descriptor,s=n.skipCreate,a=n.sampleCount,u=t.call(this,{id:r,device:i})||this;u.type=he.Texture,u.flipY=!1;var l=o.format,c=o.dimension,h=o.width,f=o.height,p=o.depthOrArrayLayers,_=o.mipLevelCount,v=o.usage,m=o.pixelStore;return u.flipY=!!(m!=null&&m.unpackFlipY),u.device.createTextureShared({format:l,dimension:c??oe.TEXTURE_2D,width:h,height:f,depthOrArrayLayers:p??1,mipLevelCount:_??1,usage:v,sampleCount:a??1},u,s),u}return e.prototype.textureFromImageBitmapOrCanvas=function(n,r,i){for(var o=r[0].width,s=r[0].height,a={size:{width:o,height:s,depthOrArrayLayers:i},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT},u=n.createTexture(a),l=0;l<r.length;l++)n.queue.copyExternalImageToTexture({source:r[l],flipY:this.flipY},{texture:u,origin:[0,0,l]},[o,s]);return[u,o,s]},e.prototype.isImageBitmapOrCanvases=function(n){var r=n[0];return r instanceof ImageBitmap||r instanceof HTMLCanvasElement||r instanceof OffscreenCanvas},e.prototype.isVideo=function(n){var r=n[0];return r instanceof HTMLVideoElement},e.prototype.setImageData=function(n,r){var i,o=this,s=this.device.device,a,u,l;if(this.isImageBitmapOrCanvases(n))i=Pt(this.textureFromImageBitmapOrCanvas(s,n,this.depthOrArrayLayers),3),a=i[0],u=i[1],l=i[2];else if(this.isVideo(n))a=s.importExternalTexture({source:n[0]});else{var c=b_(this.gpuTextureformat),h=Math.ceil(this.width/c.width)*c.length;n.forEach(function(f){s.queue.writeTexture({texture:o.gpuTexture},f,{bytesPerRow:h},{width:o.width,height:o.height})})}this.width=u,this.height=l,a&&(this.gpuTexture=a),this.gpuTextureView=this.gpuTexture.createView({dimension:oI(this.dimension)})},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.gpuTexture.destroy()},e}(Lt),NI=function(t){Oe(e,t);function e(n){var r=n.id,i=n.device,o=t.call(this,{id:r,device:i})||this;return o.type=he.RenderBundle,o.renderBundleEncoder=o.device.device.createRenderBundleEncoder({colorFormats:[o.device.swapChainFormat]}),o}return e.prototype.finish=function(){this.renderBundle=this.renderBundleEncoder.finish()},e}(Lt),DI=function(){function t(e,n,r,i,o,s){this.swapChainWidth=0,this.swapChainHeight=0,this.swapChainTextureUsage=Le.RENDER_ATTACHMENT|Le.COPY_DST,this._resourceUniqueId=0,this.renderPassPool=[],this.computePassPool=[],this.frameCommandEncoderPool=[],this.featureTextureCompressionBC=!1,this.platformString="WebGPU",this.glslVersion="#version 440",this.explicitBindingLocations=!0,this.separateSamplerTextures=!0,this.viewportOrigin=$t.UPPER_LEFT,this.clipSpaceNearZ=Pi.ZERO,this.supportsSyncPipelineCompilation=!1,this.supportMRT=!0,this.device=n,this.canvas=r,this.canvasContext=i,this.glsl_compile=o,this.WGSLComposer=s,this.fallbackTexture2D=this.createFallbackTexture(oe.TEXTURE_2D,Ie.Float),this.setResourceName(this.fallbackTexture2D,"Fallback Texture2D"),this.fallbackTexture2DDepth=this.createFallbackTexture(oe.TEXTURE_2D,Ie.Depth),this.setResourceName(this.fallbackTexture2DDepth,"Fallback Depth Texture2D"),this.fallbackTexture2DArray=this.createFallbackTexture(oe.TEXTURE_2D_ARRAY,Ie.Float),this.setResourceName(this.fallbackTexture2DArray,"Fallback Texture2DArray"),this.fallbackTexture3D=this.createFallbackTexture(oe.TEXTURE_3D,Ie.Float),this.setResourceName(this.fallbackTexture3D,"Fallback Texture3D"),this.fallbackTextureCube=this.createFallbackTexture(oe.TEXTURE_CUBE_MAP,Ie.Float),this.setResourceName(this.fallbackTextureCube,"Fallback TextureCube"),this.fallbackSamplerFiltering=this.createSampler({addressModeU:ot.REPEAT,addressModeV:ot.REPEAT,minFilter:Fe.POINT,magFilter:Fe.POINT,mipmapFilter:Ue.NEAREST}),this.setResourceName(this.fallbackSamplerFiltering,"Fallback Sampler Filtering"),this.fallbackSamplerComparison=this.createSampler({addressModeU:ot.REPEAT,addressModeV:ot.REPEAT,minFilter:Fe.POINT,magFilter:Fe.POINT,mipmapFilter:Ue.NEAREST,compareFunction:ve.ALWAYS}),this.setResourceName(this.fallbackSamplerComparison,"Fallback Sampler Comparison Filtering"),this.device.features&&(this.featureTextureCompressionBC=this.device.features.has("texture-compression-bc")),this.device.onuncapturederror=function(a){console.error(a.error)},this.swapChainFormat=navigator.gpu.getPreferredCanvasFormat(),this.canvasContext.configure({device:this.device,format:this.swapChainFormat,usage:this.swapChainTextureUsage,alphaMode:"premultiplied"})}return t.prototype.destroy=function(){},t.prototype.configureSwapChain=function(e,n){this.swapChainWidth===e&&this.swapChainHeight===n||(this.swapChainWidth=e,this.swapChainHeight=n)},t.prototype.getOnscreenTexture=function(){var e=this.canvasContext.getCurrentTexture(),n=e.createView(),r=new Eo({id:0,device:this,descriptor:{format:I.U8_RGBA_RT,width:this.swapChainWidth,height:this.swapChainHeight,depthOrArrayLayers:0,dimension:oe.TEXTURE_2D,mipLevelCount:1,usage:this.swapChainTextureUsage},skipCreate:!0});return r.depthOrArrayLayers=1,r.sampleCount=1,r.gpuTexture=e,r.gpuTextureView=n,r.name="Onscreen",this.setResourceName(r,"Onscreen Texture"),r},t.prototype.getDevice=function(){return this},t.prototype.getCanvas=function(){return this.canvas},t.prototype.beginFrame=function(){ne(this.frameCommandEncoderPool.length===0)},t.prototype.endFrame=function(){ne(this.frameCommandEncoderPool.every(function(e){return e!==null})),this.device.queue.submit(this.frameCommandEncoderPool.map(function(e){return e.finish()})),this.frameCommandEncoderPool=[]},t.prototype.getNextUniqueId=function(){return++this._resourceUniqueId},t.prototype.createBuffer=function(e){return new bI({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createTexture=function(e){return new Eo({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createSampler=function(e){return new BI({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderTarget=function(e){var n=new Eo({id:this.getNextUniqueId(),device:this,descriptor:Ce(Ce({},e),{dimension:oe.TEXTURE_2D,mipLevelCount:1,depthOrArrayLayers:1,usage:et.RENDER_TARGET}),sampleCount:e.sampleCount});return n.depthOrArrayLayers=1,n.type=he.RenderTarget,n},t.prototype.createRenderTargetFromTexture=function(e){var n=e,r=n.format,i=n.width,o=n.height,s=n.depthOrArrayLayers,a=n.sampleCount,u=n.mipLevelCount,l=n.gpuTexture,c=n.gpuTextureView,h=n.usage;ne(!!(h&Le.RENDER_ATTACHMENT));var f=new Eo({id:this.getNextUniqueId(),device:this,descriptor:{format:r,width:i,height:o,depthOrArrayLayers:s,dimension:oe.TEXTURE_2D,mipLevelCount:u,usage:h},skipCreate:!0});return f.depthOrArrayLayers=s,f.sampleCount=a,f.gpuTexture=l,f.gpuTextureView=c,f},t.prototype.createProgram=function(e){var n,r;return!((n=e.vertex)===null||n===void 0)&&n.glsl&&(e.vertex.glsl=is(this.queryVendorInfo(),"vert",e.vertex.glsl)),!((r=e.fragment)===null||r===void 0)&&r.glsl&&(e.fragment.glsl=is(this.queryVendorInfo(),"frag",e.fragment.glsl)),new Xf({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createProgramSimple=function(e){return new Xf({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createTextureShared=function(e,n,r){var i={width:e.width,height:e.height,depthOrArrayLayers:e.depthOrArrayLayers},o=e.mipLevelCount,s=$u(e.format),a=iI(e.dimension),u=rI(e.usage);if(n.gpuTextureformat=s,n.dimension=e.dimension,n.format=e.format,n.width=e.width,n.height=e.height,n.depthOrArrayLayers=e.depthOrArrayLayers,n.mipLevelCount=o,n.usage=u,n.sampleCount=e.sampleCount,!r){var l=this.device.createTexture({size:i,mipLevelCount:o,format:s,dimension:a,sampleCount:e.sampleCount,usage:u}),c=l.createView();n.gpuTexture=l,n.gpuTextureView=c}},t.prototype.getFallbackSampler=function(e){var n=e.formatKind;return n===Ie.Depth&&e.comparison?this.fallbackSamplerComparison:this.fallbackSamplerFiltering},t.prototype.getFallbackTexture=function(e){var n=e.dimension,r=e.formatKind;if(n===oe.TEXTURE_2D)return r===Ie.Depth?this.fallbackTexture2DDepth:this.fallbackTexture2D;if(n===oe.TEXTURE_2D_ARRAY)return this.fallbackTexture2DArray;if(n===oe.TEXTURE_3D)return this.fallbackTexture3D;if(n===oe.TEXTURE_CUBE_MAP)return this.fallbackTextureCube;throw new Error("whoops")},t.prototype.createFallbackTexture=function(e,n){var r=e===oe.TEXTURE_CUBE_MAP?6:1,i=n===Ie.Float?I.U8_RGBA_NORM:I.D24;return this.createTexture({dimension:e,format:i,usage:et.SAMPLED,width:1,height:1,depthOrArrayLayers:r,mipLevelCount:1})},t.prototype.createBindings=function(e){return new CI({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createInputLayout=function(e){return new MI({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createComputePipeline=function(e){return new II({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderPipeline=function(e){return new FI({id:this.getNextUniqueId(),device:this,descriptor:Ce({},e)})},t.prototype.createQueryPool=function(e,n){return new OI({id:this.getNextUniqueId(),device:this,descriptor:{type:e,elemCount:n}})},t.prototype.createRenderPipelineInternal=function(e,n){var r;if(e.gpuRenderPipeline===null){var i=e.descriptor,o=i.program,s=o.vertexStage,a=o.fragmentStage;if(!(s===null||a===null)){var u=i.megaStateDescriptor||{},l=u.stencilBack,c=u.stencilFront,h=HC(u,["stencilBack","stencilFront"]),f=Mr(Or);i.megaStateDescriptor=Ce(Ce(Ce({},f),{stencilBack:Ce(Ce({},f.stencilBack),l),stencilFront:Ce(Ce({},f.stencilFront),c)}),h);var p=i.megaStateDescriptor.attachmentsState[0];i.colorAttachmentFormats.forEach(function(x,C){i.megaStateDescriptor.attachmentsState[C]||(i.megaStateDescriptor.attachmentsState[C]=E_(void 0,p))});var _=pI((r=i.topology)!==null&&r!==void 0?r:De.TRIANGLES,i.megaStateDescriptor),v=gI(i.colorAttachmentFormats,i.megaStateDescriptor),m=EI(i.depthStencilAttachmentFormat,i.megaStateDescriptor),y=void 0;i.inputLayout!==null&&(y=i.inputLayout.buffers);var T=i.sampleCount,S={layout:"auto",vertex:Ce(Ce({},s),{buffers:y}),primitive:_,depthStencil:m,multisample:{count:T},fragment:Ce(Ce({},a),{targets:v})};e.gpuRenderPipeline=this.device.createRenderPipeline(S)}}},t.prototype.createReadback=function(){return new PI({id:this.getNextUniqueId(),device:this})},t.prototype.createRenderBundle=function(){return new NI({id:this.getNextUniqueId(),device:this})},t.prototype.createRenderPass=function(e){var n=this.renderPassPool.pop();n===void 0&&(n=new Wf(this));var r=this.frameCommandEncoderPool.pop();return r===void 0&&(r=this.device.createCommandEncoder()),n.beginRenderPass(r,e),n},t.prototype.createComputePass=function(){var e=this.computePassPool.pop();e===void 0&&(e=new Hf);var n=this.frameCommandEncoderPool.pop();return n===void 0&&(n=this.device.createCommandEncoder()),e.beginComputePass(n),e},t.prototype.submitPass=function(e){var n=e;n instanceof Wf?(this.frameCommandEncoderPool.push(n.frameCommandEncoder),n.finish(),this.renderPassPool.push(n)):n instanceof Hf&&(this.frameCommandEncoderPool.push(n.frameCommandEncoder),n.finish(),this.computePassPool.push(n))},t.prototype.copySubTexture2D=function(e,n,r,i,o,s,a){var u=this.device.createCommandEncoder(),l=e,c=i,h={texture:c.gpuTexture,origin:[o,s,0],mipLevel:0,aspect:"all"},f={texture:l.gpuTexture,origin:[n,r,0],mipLevel:0,aspect:"all"};ne(!!(c.usage&Le.COPY_SRC)),ne(!!(l.usage&Le.COPY_DST)),u.copyTextureToTexture(h,f,[c.width,c.height,a||1]),this.device.queue.submit([u.finish()])},t.prototype.queryLimits=function(){return{uniformBufferMaxPageWordSize:this.device.limits.maxUniformBufferBindingSize>>>2,uniformBufferWordAlignment:this.device.limits.minUniformBufferOffsetAlignment>>>2,supportedSampleCounts:[1],occlusionQueriesRecommended:!0,computeShadersSupported:!0}},t.prototype.queryTextureFormatSupported=function(e,n,r){if(SI(e)){if(!this.featureTextureCompressionBC)return!1;var i=RI(e);return n%i!==0||r%i!==0?!1:this.featureTextureCompressionBC}switch(e){case I.U16_RGBA_NORM:return!1;case I.F32_RGBA:return!1}return!0},t.prototype.queryPlatformAvailable=function(){return!0},t.prototype.queryVendorInfo=function(){return this},t.prototype.queryRenderPass=function(e){var n=e;return n.descriptor},t.prototype.queryRenderTarget=function(e){var n=e;return n},t.prototype.setResourceName=function(e,n){if(e.name=n,e.type===he.Buffer){var r=e;r.gpuBuffer.label=n}else if(e.type===he.Texture){var r=e;r.gpuTexture.label=n,r.gpuTextureView.label=n}else if(e.type===he.RenderTarget){var r=e;r.gpuTexture.label=n,r.gpuTextureView.label=n}else if(e.type===he.Sampler){var r=e;r.gpuSampler.label=n}else if(e.type===he.RenderPipeline){var r=e;r.gpuRenderPipeline!==null&&(r.gpuRenderPipeline.label=n)}},t.prototype.setResourceLeakCheck=function(e,n){},t.prototype.checkForLeaks=function(){},t.prototype.programPatched=function(e){},t.prototype.pipelineQueryReady=function(e){var n=e;return n.gpuRenderPipeline!==null},t.prototype.pipelineForceReady=function(e){var n=e;this.createRenderPipelineInternal(n,!1)},t}(),wI=function(){function t(e){this.pluginOptions=e}return t.prototype.createSwapChain=function(e){return Ar(this,void 0,void 0,function(){var n,r,i,o,s,a,u,l;return Sr(this,function(c){switch(c.label){case 0:if(globalThis.navigator.gpu===void 0)return[2,null];n=null,c.label=1;case 1:return c.trys.push([1,3,,4]),r=this.pluginOptions.xrCompatible,[4,globalThis.navigator.gpu.requestAdapter({xrCompatible:r})];case 2:return n=c.sent(),[3,4];case 3:return i=c.sent(),console.log(i),[3,4];case 4:return n===null?[2,null]:(o=["depth32float-stencil8","texture-compression-bc","float32-filterable"],s=o.filter(function(h){return n.features.has(h)}),[4,n.requestDevice({requiredFeatures:s})]);case 5:if(a=c.sent(),a&&(u=this.pluginOptions.onContextLost,a.lost.then(function(){u&&u()})),a===null)return[2,null];if(l=e.getContext("webgpu"),!l)return[2,null];c.label=6;case 6:return c.trys.push([6,8,,9]),[4,C_(this.pluginOptions.shaderCompilerPath)];case 7:return c.sent(),[3,9];case 8:return c.sent(),[3,9];case 9:return[2,new DI(n,a,e,l,Jb,Fi&&new Fi)]}})})},t}(),LI=class{constructor(t,e){const{buffer:n,offset:r,stride:i,normalized:o,size:s,divisor:a,shaderLocation:u}=e;this.buffer=n,this.attribute={shaderLocation:u,buffer:n.get(),offset:r||0,stride:i||0,normalized:o||!1,divisor:a||0},s&&(this.attribute.size=s)}get(){return this.buffer}updateBuffer(t){this.buffer.subData(t)}destroy(){this.buffer.destroy()}},us={[g.FLOAT]:Float32Array,[g.UNSIGNED_BYTE]:Uint8Array,[g.SHORT]:Int16Array,[g.UNSIGNED_SHORT]:Uint16Array,[g.INT]:Int32Array,[g.UNSIGNED_INT]:Uint32Array},UI={[g.POINTS]:De.POINTS,[g.LINES]:De.LINES,[g.LINE_LOOP]:De.LINES,[g.LINE_STRIP]:De.LINE_STRIP,[g.TRIANGLES]:De.TRIANGLES,[g.TRIANGLE_FAN]:De.TRIANGLES,[g.TRIANGLE_STRIP]:De.TRIANGLE_STRIP},kI={1:I.F32_R,2:I.F32_RG,3:I.F32_RGB,4:I.F32_RGBA},zI={[g.STATIC_DRAW]:wt.STATIC,[g.DYNAMIC_DRAW]:wt.DYNAMIC,[g.STREAM_DRAW]:wt.DYNAMIC},jf={[g.REPEAT]:ot.REPEAT,[g.CLAMP_TO_EDGE]:ot.CLAMP_TO_EDGE,[g.MIRRORED_REPEAT]:ot.MIRRORED_REPEAT},VI={[g.NEVER]:ve.NEVER,[g.ALWAYS]:ve.ALWAYS,[g.LESS]:ve.LESS,[g.LEQUAL]:ve.LEQUAL,[g.GREATER]:ve.GREATER,[g.GEQUAL]:ve.GEQUAL,[g.EQUAL]:ve.EQUAL,[g.NOTEQUAL]:ve.NOTEQUAL},HI={[g.FRONT]:ft.FRONT,[g.BACK]:ft.BACK},$f={[g.FUNC_ADD]:Ve.ADD,[g.MIN_EXT]:Ve.MIN,[g.MAX_EXT]:Ve.MAX,[g.FUNC_SUBTRACT]:Ve.SUBSTRACT,[g.FUNC_REVERSE_SUBTRACT]:Ve.REVERSE_SUBSTRACT},yo={[g.ZERO]:ie.ZERO,[g.ONE]:ie.ONE,[g.SRC_COLOR]:ie.SRC,[g.ONE_MINUS_SRC_COLOR]:ie.ONE_MINUS_SRC,[g.SRC_ALPHA]:ie.SRC_ALPHA,[g.ONE_MINUS_SRC_ALPHA]:ie.ONE_MINUS_SRC_ALPHA,[g.DST_COLOR]:ie.DST,[g.ONE_MINUS_DST_COLOR]:ie.ONE_MINUS_DST,[g.DST_ALPHA]:ie.DST_ALPHA,[g.ONE_MINUS_DST_ALPHA]:ie.ONE_MINUS_DST_ALPHA,[g.CONSTANT_COLOR]:ie.CONST,[g.ONE_MINUS_CONSTANT_COLOR]:ie.ONE_MINUS_CONSTANT,[g.CONSTANT_ALPHA]:ie.CONST,[g.ONE_MINUS_CONSTANT_ALPHA]:ie.ONE_MINUS_CONSTANT,[g.SRC_ALPHA_SATURATE]:ie.SRC_ALPHA_SATURATE},ar={[g.REPLACE]:Me.REPLACE,[g.KEEP]:Me.KEEP,[g.ZERO]:Me.ZERO,[g.INVERT]:Me.INVERT,[g.INCR]:Me.INCREMENT_CLAMP,[g.DECR]:Me.DECREMENT_CLAMP,[g.INCR_WRAP]:Me.INCREMENT_WRAP,[g.DECR_WRAP]:Me.DECREMENT_WRAP},XI={[g.ALWAYS]:ve.ALWAYS,[g.EQUAL]:ve.EQUAL,[g.GEQUAL]:ve.GEQUAL,[g.GREATER]:ve.GREATER,[g.LEQUAL]:ve.LEQUAL,[g.LESS]:ve.LESS,[g.NEVER]:ve.NEVER,[g.NOTEQUAL]:ve.NOTEQUAL},WI={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121};function ls(t){return Object.prototype.toString.call(t)in WI}function jI(t,e){const n=t.length,r=Math.ceil(n/3),i=n+r,o=new Float32Array(i);for(let s=0;s<i;s+=4)o[s]=t[s/4*3],o[s+1]=t[s/4*3+1],o[s+2]=t[s/4*3+2],o[s+3]=e;return o}var $I=class{constructor(t,e){this.isDestroyed=!1;const{data:n,usage:r,type:i,isUBO:o,label:s}=e;let a;ls(n)?a=n:a=new us[this.type||g.FLOAT](n),this.type=i,this.size=a.byteLength,this.buffer=t.createBuffer({viewOrSize:a,usage:o?ye.UNIFORM:ye.VERTEX,hint:zI[r||g.STATIC_DRAW]}),s&&t.setResourceName(this.buffer,s)}get(){return this.buffer}destroy(){this.isDestroyed||this.buffer.destroy(),this.isDestroyed=!0}subData({data:t,offset:e}){let n;ls(t)?n=t:n=new us[this.type||g.FLOAT](t),this.buffer.setSubData(e,new Uint8Array(n.buffer))}};function ge(t,e=0){return t+=e,t+=t<<10,t+=t>>>6,t>>>0}function I_(t){return t+=t<<3,t^=t>>>11,t+=t<<15,t>>>0}function Zf(){return 0}var ZI=class{constructor(){this.keys=[],this.values=[]}},To=class{constructor(t,e){this.keyEqualFunc=t,this.keyHashFunc=e,this.buckets=new Map}findBucketIndex(t,e){for(let n=0;n<t.keys.length;n++)if(this.keyEqualFunc(e,t.keys[n]))return n;return-1}findBucket(t){const e=this.keyHashFunc(t);return this.buckets.get(e)}get(t){const e=this.findBucket(t);if(e===void 0)return null;const n=this.findBucketIndex(e,t);return n<0?null:e.values[n]}add(t,e){const n=this.keyHashFunc(t);this.buckets.get(n)===void 0&&this.buckets.set(n,new ZI);const r=this.buckets.get(n);r.keys.push(t),r.values.push(e)}delete(t){const e=this.findBucket(t);if(e===void 0)return;const n=this.findBucketIndex(e,t);n!==-1&&(e.keys.splice(n,1),e.values.splice(n,1))}clear(){this.buckets.clear()}size(){let t=0;for(const e of this.buckets.values())t+=e.values.length;return t}*values(){for(const t of this.buckets.values())for(let e=t.values.length-1;e>=0;e--)yield t.values[e]}};function Yf(t,e){return t=ge(t,e.blendMode),t=ge(t,e.blendSrcFactor),t=ge(t,e.blendDstFactor),t}function YI(t,e){return t=Yf(t,e.rgbBlendState),t=Yf(t,e.alphaBlendState),t=ge(t,e.channelWriteMask),t}function GI(t,e){return t=ge(t,e.r<<24|e.g<<16|e.b<<8|e.a),t}function KI(t,e){var n,r,i,o,s,a,u,l;for(let c=0;c<e.attachmentsState.length;c++)t=YI(t,e.attachmentsState[c]);return t=GI(t,e.blendConstant||Ts),t=ge(t,e.depthCompare),t=ge(t,e.depthWrite?1:0),t=ge(t,(n=e.stencilFront)==null?void 0:n.compare),t=ge(t,(r=e.stencilFront)==null?void 0:r.passOp),t=ge(t,(i=e.stencilFront)==null?void 0:i.failOp),t=ge(t,(o=e.stencilFront)==null?void 0:o.depthFailOp),t=ge(t,(s=e.stencilBack)==null?void 0:s.compare),t=ge(t,(a=e.stencilBack)==null?void 0:a.passOp),t=ge(t,(u=e.stencilBack)==null?void 0:u.failOp),t=ge(t,(l=e.stencilBack)==null?void 0:l.depthFailOp),t=ge(t,e.stencilWrite?1:0),t=ge(t,e.cullMode),t=ge(t,e.frontFace?1:0),t=ge(t,e.polygonOffset?1:0),t}function qI(t){let e=0;e=ge(e,t.program.id),t.inputLayout!==null&&(e=ge(e,t.inputLayout.id)),e=KI(e,t.megaStateDescriptor);for(let n=0;n<t.colorAttachmentFormats.length;n++)e=ge(e,t.colorAttachmentFormats[n]||0);return e=ge(e,t.depthStencilAttachmentFormat||0),I_(e)}function QI(t){let e=0;if(t.samplerBindings)for(let n=0;n<t.samplerBindings.length;n++){const r=t.samplerBindings[n];r!==null&&r.texture!==null&&(e=ge(e,r.texture.id))}if(t.uniformBufferBindings)for(let n=0;n<t.uniformBufferBindings.length;n++){const r=t.uniformBufferBindings[n];r!==null&&r.buffer!==null&&(e=ge(e,r.buffer.id),e=ge(e,r.binding),e=ge(e,r.offset),e=ge(e,r.size))}if(t.storageBufferBindings)for(let n=0;n<t.storageBufferBindings.length;n++){const r=t.storageBufferBindings[n];r!==null&&r.buffer!==null&&(e=ge(e,r.buffer.id),e=ge(e,r.binding),e=ge(e,r.offset),e=ge(e,r.size))}if(t.storageTextureBindings)for(let n=0;n<t.storageTextureBindings.length;n++){const r=t.storageTextureBindings[n];r!==null&&r.texture!==null&&(e=ge(e,r.texture.id),e=ge(e,r.binding))}return I_(e)}function JI(t,e){var n,r,i,o;return((n=t.vertex)==null?void 0:n.glsl)===((r=e.vertex)==null?void 0:r.glsl)&&((i=t.fragment)==null?void 0:i.glsl)===((o=e.fragment)==null?void 0:o.glsl)}function eM(t){var e,n;return{vertex:{glsl:(e=t.vertex)==null?void 0:e.glsl},fragment:{glsl:(n=t.fragment)==null?void 0:n.glsl}}}var tM=class{constructor(t){this.device=t,this.bindingsCache=new To(eb,QI),this.renderPipelinesCache=new To(ib,qI),this.inputLayoutsCache=new To(ab,Zf),this.programCache=new To(JI,Zf)}createBindings(t){var e;let n=this.bindingsCache.get(t);if(n===null){const r=cb(t);r.uniformBufferBindings=(e=r.uniformBufferBindings)==null?void 0:e.filter(({size:i})=>i&&i>0),n=this.device.createBindings(r),this.bindingsCache.add(r,n)}return n}createRenderPipeline(t){let e=this.renderPipelinesCache.get(t);if(e===null){const n=hb(t);n.colorAttachmentFormats=n.colorAttachmentFormats.filter(r=>r),e=this.device.createRenderPipeline(n),this.renderPipelinesCache.add(n,e)}return e}createInputLayout(t){t.vertexBufferDescriptors=t.vertexBufferDescriptors.filter(n=>!!n);let e=this.inputLayoutsCache.get(t);if(e===null){const n=pb(t);e=this.device.createInputLayout(n),this.inputLayoutsCache.add(n,e)}return e}createProgram(t){let e=this.programCache.get(t);if(e===null){const n=eM(t);e=this.device.createProgram(t),this.programCache.add(n,e)}return e}destroy(){for(const t of this.bindingsCache.values())t.destroy();for(const t of this.renderPipelinesCache.values())t.destroy();for(const t of this.inputLayoutsCache.values())t.destroy();for(const t of this.programCache.values())t.destroy();this.bindingsCache.clear(),this.renderPipelinesCache.clear(),this.inputLayoutsCache.clear(),this.programCache.clear()}},nM=class{constructor(t,e){const{data:n,type:r,count:i=0}=e;let o;ls(n)?o=n:o=new us[this.type||g.UNSIGNED_INT](n),this.type=r,this.count=i,this.indexBuffer=t.createBuffer({viewOrSize:o,usage:ye.INDEX})}get(){return this.indexBuffer}subData({data:t}){let e;ls(t)?e=t:e=new us[this.type||g.UNSIGNED_INT](t),this.indexBuffer.setSubData(0,new Uint8Array(e.buffer))}destroy(){this.indexBuffer.destroy()}};function Gf(t){return!!(t&&t.texture)}var M_=class{constructor(t,e){this.device=t,this.options=e,this.isDestroy=!1;const{wrapS:n=g.CLAMP_TO_EDGE,wrapT:r=g.CLAMP_TO_EDGE,aniso:i,mag:o=g.NEAREST,min:s=g.NEAREST}=e;this.createTexture(e),this.sampler=t.createSampler({addressModeU:jf[n],addressModeV:jf[r],minFilter:s===g.NEAREST?Fe.POINT:Fe.BILINEAR,magFilter:o===g.NEAREST?Fe.POINT:Fe.BILINEAR,mipmapFilter:Ue.NO_MIP,maxAnisotropy:i})}createTexture(t){const{type:e=g.UNSIGNED_BYTE,width:n,height:r,flipY:i=!1,format:o=g.RGBA,alignment:s=1,usage:a=Wn.SAMPLED,unorm:u=!1,label:l}=t;let{data:c}=t;this.width=n,this.height=r;let h=I.U8_RGBA_RT;if(e===g.UNSIGNED_BYTE&&o===g.RGBA)h=u?I.U8_RGBA_NORM:I.U8_RGBA_RT;else if(e===g.UNSIGNED_BYTE&&o===g.LUMINANCE)h=I.U8_LUMINANCE;else if(e===g.FLOAT&&o===g.LUMINANCE)h=I.F32_LUMINANCE;else if(e===g.FLOAT&&o===g.RGB)this.device.queryVendorInfo().platformString==="WebGPU"?(c&&(c=jI(c,0)),h=I.F32_RGBA):h=I.F32_RGB;else if(e===g.FLOAT&&o===g.RGBA)h=I.F32_RGBA;else if(e===g.FLOAT&&o===g.RED)h=I.F32_R;else throw new Error(`create texture error, type: ${e}, format: ${o}`);this.texture=this.device.createTexture({format:h,width:n,height:r,usage:a===Wn.SAMPLED?et.SAMPLED:et.RENDER_TARGET,pixelStore:{unpackFlipY:i,packAlignment:s},mipLevelCount:1}),l&&this.device.setResourceName(this.texture,l),c&&this.texture.setImageData([c])}get(){return this.texture}update(t){const{data:e}=t;this.texture.setImageData([e])}bind(){}resize({width:t,height:e}){(this.width!==t||this.height!==e)&&this.destroy(),this.options.width=t,this.options.height=e,this.createTexture(this.options),this.isDestroy=!1}getSize(){return[this.width,this.height]}destroy(){var t;!this.isDestroy&&!this.texture.destroyed&&((t=this.texture)==null||t.destroy()),this.isDestroy=!0}},O_=class{constructor(t,e){this.device=t,this.options=e,this.createColorRenderTarget(),this.createDepthRenderTarget()}createColorRenderTarget(t=!1){const{width:e,height:n,color:r}=this.options;r&&(Gf(r)?(t&&r.resize({width:e,height:n}),this.colorTexture=r.get(),this.colorRenderTarget=this.device.createRenderTargetFromTexture(this.colorTexture),this.width=r.width,this.height=r.height):e&&n&&(this.colorTexture=this.device.createTexture({format:I.U8_RGBA_RT,usage:et.RENDER_TARGET,width:e,height:n}),this.colorRenderTarget=this.device.createRenderTargetFromTexture(this.colorTexture),this.width=e,this.height=n))}createDepthRenderTarget(t=!1){const{width:e,height:n,depth:r}=this.options;r&&(Gf(r)?(t&&r.resize({width:e,height:n}),this.depthTexture=r.get(),this.depthRenderTarget=this.device.createRenderTargetFromTexture(this.depthTexture),this.width=r.width,this.height=r.height):e&&n&&(this.depthTexture=this.device.createTexture({format:I.D24_S8,usage:et.RENDER_TARGET,width:e,height:n}),this.depthRenderTarget=this.device.createRenderTargetFromTexture(this.depthTexture),this.width=e,this.height=n))}get(){return this.colorRenderTarget}destroy(){var t,e;(t=this.colorRenderTarget)==null||t.destroy(),(e=this.depthRenderTarget)==null||e.destroy()}resize({width:t,height:e}){(this.width!==t||this.height!==e)&&(this.destroy(),this.colorTexture.destroyed=!0,this.depthTexture.destroyed=!0,this.options.width=t,this.options.height=e,this.createColorRenderTarget(!0),this.createDepthRenderTarget(!0))}},rM=Object.defineProperty,iM=Object.defineProperties,oM=Object.getOwnPropertyDescriptors,Kf=Object.getOwnPropertySymbols,sM=Object.prototype.hasOwnProperty,aM=Object.prototype.propertyIsEnumerable,qf=(t,e,n)=>e in t?rM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ln=(t,e)=>{for(var n in e||(e={}))sM.call(e,n)&&qf(t,n,e[n]);if(Kf)for(var n of Kf(e))aM.call(e,n)&&qf(t,n,e[n]);return t},uM=(t,e)=>iM(t,oM(e)),{isPlainObject:Qf,isTypedArray:lM,isNil:Jf}=we,cM=class{constructor(t,e,n){this.device=t,this.options=e,this.service=n,this.destroyed=!1,this.uniforms={},this.vertexBuffers=[],this.pipelineCache=new Map,this.currentPipelineKey="";const{vs:r,fs:i,attributes:o,uniforms:s,count:a,elements:u,diagnosticDerivativeUniformityEnabled:l}=e;this.options=e;const c=l?"":this.service.viewportOrigin===$t.UPPER_LEFT?"diagnostic(off,derivative_uniformity);":"";this.program=n.renderCache.createProgram({vertex:{glsl:r},fragment:{glsl:i,postprocess:v=>c+v}}),s&&(this.uniforms=this.extractUniforms(s));const h=[];let f=0;Object.keys(o).forEach(v=>{const m=o[v],y=m.get();this.vertexBuffers.push(y.get());const{offset:T=0,stride:S=0,size:x=1,divisor:C=0,shaderLocation:M=0}=m.attribute;h.push({arrayStride:S||x*4,stepMode:Yn.VERTEX,attributes:[{format:kI[x],shaderLocation:M,offset:T,divisor:C}]}),f=y.size/x}),a||(this.options.count=f),u&&(this.indexBuffer=u.get());const p=n.renderCache.createInputLayout({vertexBufferDescriptors:h,indexBufferFormat:u?I.U32_R:null,program:this.program});this.inputLayout=p,this.pipeline=this.createPipeline(e);const _=this.getPipelineKey(e);this.pipelineCache.set(_,this.pipeline),this.currentPipelineKey=_}getPipelineKey(t,e){var n,r,i,o,s,a,u,l,c,h,f,p,_,v,m,y,T,S,x,C,M,P,F,V,B,O,N,U,z,W,Y,j,te,J,Q,se;const{primitive:ue=g.TRIANGLES,depth:ce,cull:de,blend:re,stencil:Re}=t;let Se;Re!=null&&Re.enable?Se=[1,(n=Re.mask)!=null?n:4294967295,(i=(r=Re.func)==null?void 0:r.cmp)!=null?i:g.ALWAYS,(s=(o=Re.func)==null?void 0:o.ref)!=null?s:0,(u=(a=Re.func)==null?void 0:a.mask)!=null?u:4294967295,(c=(l=Re.opFront)==null?void 0:l.fail)!=null?c:g.KEEP,(f=(h=Re.opFront)==null?void 0:h.zfail)!=null?f:g.KEEP,(_=(p=Re.opFront)==null?void 0:p.zpass)!=null?_:g.KEEP,(m=(v=Re.opBack)==null?void 0:v.fail)!=null?m:g.KEEP,(T=(y=Re.opBack)==null?void 0:y.zfail)!=null?T:g.KEEP,(x=(S=Re.opBack)==null?void 0:S.zpass)!=null?x:g.KEEP].join(","):Se="0";let _t;return re!=null&&re.enable?_t=[1,(M=(C=re.func)==null?void 0:C.srcRGB)!=null?M:g.SRC_ALPHA,(F=(P=re.func)==null?void 0:P.dstRGB)!=null?F:g.ONE_MINUS_SRC_ALPHA,(B=(V=re.func)==null?void 0:V.srcAlpha)!=null?B:g.SRC_ALPHA,(N=(O=re.func)==null?void 0:O.dstAlpha)!=null?N:g.ONE_MINUS_SRC_ALPHA,(z=(U=re.equation)==null?void 0:U.rgb)!=null?z:g.FUNC_ADD,(Y=(W=re.equation)==null?void 0:W.alpha)!=null?Y:g.FUNC_ADD].join(","):_t="0",[`primitive:${ue}`,`pick:${!!e}`,`depth:${(j=ce==null?void 0:ce.enable)!=null?j:!0}:${(te=ce==null?void 0:ce.func)!=null?te:g.LESS}:${(J=ce==null?void 0:ce.mask)!=null?J:!0}`,`cull:${(Q=de==null?void 0:de.enable)!=null?Q:!1}:${(se=de==null?void 0:de.face)!=null?se:g.BACK}`,`blend:${_t}`,`stencil:${Se}`].join("|")}createPipeline(t,e){var n;const{primitive:r=g.TRIANGLES,depth:i,cull:o,blend:s,stencil:a}=t,u=this.initDepthDrawParams({depth:i}),l=!!(u&&u.enable),c=this.initCullDrawParams({cull:o}),h=!!(c&&c.enable),f=this.getBlendDrawParams({blend:s}),p=!!(f&&f.enable),_=this.getStencilDrawParams({stencil:a}),v=!!(_&&_.enable),m=this.device.createRenderPipeline({inputLayout:this.inputLayout,program:this.program,topology:UI[r],colorAttachmentFormats:[I.U8_RGBA_RT],depthStencilAttachmentFormat:I.D24_S8,megaStateDescriptor:{attachmentsState:[e?{channelWriteMask:ze.ALL,rgbBlendState:{blendMode:Ve.ADD,blendSrcFactor:ie.ONE,blendDstFactor:ie.ZERO},alphaBlendState:{blendMode:Ve.ADD,blendSrcFactor:ie.ONE,blendDstFactor:ie.ZERO}}:{channelWriteMask:v&&_.opFront.zpass===Me.REPLACE?ze.NONE:ze.ALL,rgbBlendState:{blendMode:p&&f.equation.rgb||Ve.ADD,blendSrcFactor:p&&f.func.srcRGB||ie.SRC_ALPHA,blendDstFactor:p&&f.func.dstRGB||ie.ONE_MINUS_SRC_ALPHA},alphaBlendState:{blendMode:p&&f.equation.alpha||Ve.ADD,blendSrcFactor:p&&f.func.srcAlpha||ie.ONE,blendDstFactor:p&&f.func.dstAlpha||ie.ONE}}],blendConstant:p?Ts:void 0,depthWrite:l,depthCompare:l&&u.func||ve.LESS,cullMode:h&&c.face||ft.NONE,stencilWrite:v,stencilFront:{compare:v?_.func.cmp:ve.ALWAYS,passOp:_.opFront.zpass,failOp:_.opFront.fail,depthFailOp:_.opFront.zfail,mask:_.opFront.mask},stencilBack:{compare:v?_.func.cmp:ve.ALWAYS,passOp:_.opBack.zpass,failOp:_.opBack.fail,depthFailOp:_.opBack.zfail,mask:_.opBack.mask}}});return v&&!Jf((n=a==null?void 0:a.func)==null?void 0:n.ref)&&(m.stencilFuncReference=a.func.ref),m}updateAttributesAndElements(){}updateAttributes(){}addUniforms(t){this.uniforms=Ln(Ln({},this.uniforms),this.extractUniforms(t))}draw(t,e){const n=Ln(Ln({},this.options),t),{count:r=0,instances:i,elements:o,uniforms:s={},uniformBuffers:a,textures:u}=n;this.uniforms=Ln(Ln({},this.uniforms),this.extractUniforms(s));const{renderPass:l,currentFramebuffer:c,width:h,height:f}=this.service,p=this.getPipelineKey(n,e);let _=this.pipelineCache.get(p);_||(_=this.createPipeline(n,e),this.pipelineCache.set(p,_)),this.pipeline=_,this.currentPipelineKey=p;const v=this.service.device,m=v.swapChainHeight;v.swapChainHeight=(c==null?void 0:c.height)||f,l.setViewport(0,0,(c==null?void 0:c.width)||h,(c==null?void 0:c.height)||f),v.swapChainHeight=m,l.setPipeline(this.pipeline);const y=this.pipeline;if(Jf(y.stencilFuncReference)||l.setStencilReference(y.stencilFuncReference),l.setVertexInput(this.inputLayout,this.vertexBuffers.map(T=>({buffer:T})),o?{buffer:this.indexBuffer,offset:0}:null),a&&(this.bindings=v.createBindings({pipeline:this.pipeline,uniformBufferBindings:a.map((T,S)=>{const x=T;return{binding:S,buffer:x.get(),size:x.size}}),samplerBindings:u==null?void 0:u.map(T=>({texture:T.texture,sampler:T.sampler}))})),this.bindings&&(l.setBindings(this.bindings),Object.keys(this.uniforms).forEach(T=>{const S=this.uniforms[T];if(S instanceof M_)this.uniforms[T]=S.get();else if(S instanceof O_){const x=S.get();this.uniforms[T]=x.texture}}),this.program.setUniformsLegacy(this.uniforms)),o){const T=o.count;T===0?l.draw(r,i):l.drawIndexed(T,i)}else l.draw(r,i)}destroy(){var t,e,n;(t=this.vertexBuffers)==null||t.forEach(r=>r.destroy()),(e=this.indexBuffer)==null||e.destroy(),(n=this.bindings)==null||n.destroy(),this.pipelineCache.forEach(r=>r.destroy()),this.pipelineCache.clear(),this.destroyed=!0}initDepthDrawParams({depth:t}){if(t)return{enable:t.enable===void 0?!0:!!t.enable,mask:t.mask===void 0?!0:!!t.mask,func:VI[t.func||g.LESS],range:t.range||[0,1]}}getBlendDrawParams({blend:t}){const{enable:e,func:n,equation:r,color:i=[0,0,0,0]}=t||{};return{enable:!!e,func:{srcRGB:yo[n&&n.srcRGB||g.SRC_ALPHA],srcAlpha:yo[n&&n.srcAlpha||g.SRC_ALPHA],dstRGB:yo[n&&n.dstRGB||g.ONE_MINUS_SRC_ALPHA],dstAlpha:yo[n&&n.dstAlpha||g.ONE_MINUS_SRC_ALPHA]},equation:{rgb:$f[r&&r.rgb||g.FUNC_ADD],alpha:$f[r&&r.alpha||g.FUNC_ADD]},color:i}}getStencilDrawParams({stencil:t}){const{enable:e,mask:n=4294967295,func:r={cmp:g.ALWAYS,ref:0,mask:4294967295},opFront:i={fail:g.KEEP,zfail:g.KEEP,zpass:g.KEEP},opBack:o={fail:g.KEEP,zfail:g.KEEP,zpass:g.KEEP}}=t||{};return{enable:!!e,mask:n,func:uM(Ln({},r),{cmp:XI[r.cmp]}),opFront:{fail:ar[i.fail],zfail:ar[i.zfail],zpass:ar[i.zpass],mask:r.mask},opBack:{fail:ar[o.fail],zfail:ar[o.zfail],zpass:ar[o.zpass],mask:r.mask}}}initCullDrawParams({cull:t}){if(t){const{enable:e,face:n=g.BACK}=t;return{enable:!!e,face:HI[n]}}}extractUniforms(t){const e={};return Object.keys(t).forEach(n=>{this.extractUniformsRecursively(n,t[n],e,"")}),e}extractUniformsRecursively(t,e,n,r){if(e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"||Array.isArray(e)&&typeof e[0]=="number"||lM(e)||e!==null&&typeof e=="object"&&"resize"in e){n[`${r&&r+"."}${t}`]=e;return}if(Qf(e)){const o=e;Object.keys(o).forEach(s=>{this.extractUniformsRecursively(s,o[s],n,`${r&&r+"."}${t}`)})}Array.isArray(e)&&e.forEach((o,s)=>{if(Qf(o)){const a=o;Object.keys(a).forEach(u=>{this.extractUniformsRecursively(u,a[u],n,`${r&&r+"."}${t}[${s}]`)})}})}};function hM(t){return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?!0:!!(t&&t._version===2)}var sa=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),{isUndefined:Ao}=we,fM=class{constructor(){this.uniformBuffers=[],this.queryVerdorInfo=()=>this.device.queryVendorInfo().platformString,this.createModel=t=>new cM(this.device,t,this),this.createAttribute=t=>new LI(this.device,t),this.createBuffer=t=>new $I(this.device,t),this.createElements=t=>new nM(this.device,t),this.createTexture2D=t=>new M_(this.device,t),this.createFramebuffer=t=>new O_(this.device,t),this.useFramebuffer=(t,e)=>{this.currentFramebuffer=t,this.beginFrame(),e(),this.endFrame(),this.currentFramebuffer=null},this.useFramebufferAsync=(t,e)=>sa(this,null,function*(){this.currentFramebuffer=t,this.preRenderPass=this.renderPass,this.beginFrame(),yield e(),this.endFrame(),this.currentFramebuffer=null,this.renderPass=this.preRenderPass}),this.clear=t=>{const{color:e,depth:n,stencil:r,framebuffer:i=null}=t;if(i)i.clearOptions={color:e,depth:n,stencil:r};else{const o=this.queryVerdorInfo();if(o==="WebGL1"){const s=this.getGLContext();Ao(r)?Ao(n)||(s.clearDepth(n),s.clear(s.DEPTH_BUFFER_BIT)):(s.clearStencil(r),s.clear(s.STENCIL_BUFFER_BIT))}else if(o==="WebGL2"){const s=this.getGLContext();Ao(r)?Ao(n)||s.clearBufferfv(s.DEPTH,0,[n]):s.clearBufferiv(s.STENCIL,0,[r])}}},this.viewport=({width:t,height:e})=>{this.swapChain.configureSwapChain(t,e),this.createMainColorDepthRT(t,e),this.width=t,this.height=e},this.readPixels=t=>{const{framebuffer:e,x:n,y:r,width:i,height:o}=t,s=this.device.createReadback(),a=e.colorTexture,u=s.readTextureSync(a,n,this.viewportOrigin===$t.LOWER_LEFT?r:this.height-r,i,o,new Uint8Array(i*o*4));if(this.viewportOrigin!==$t.LOWER_LEFT)for(let l=0;l<u.length;l+=4){const c=u[l];u[l]=u[l+2],u[l+2]=c}return s.destroy(),u},this.readPixelsAsync=t=>sa(this,null,function*(){const{framebuffer:e,x:n,y:r,width:i,height:o}=t,s=this.device.createReadback(),a=e.colorTexture,u=yield s.readTexture(a,n,this.viewportOrigin===$t.LOWER_LEFT?r:this.height-r,i,o,new Uint8Array(i*o*4));if(this.viewportOrigin!==$t.LOWER_LEFT)for(let l=0;l<u.length;l+=4){const c=u[l];u[l]=u[l+2],u[l+2]=c}return s.destroy(),u}),this.getViewportSize=()=>({width:this.width,height:this.height}),this.getContainer=()=>{var t;return(t=this.canvas)==null?void 0:t.parentElement},this.getCanvas=()=>this.canvas,this.getGLContext=()=>this.device.gl,this.destroy=()=>{var t;this.canvas=null,(t=this.uniformBuffers)==null||t.forEach(e=>{e.destroy()}),this.device.destroy(),this.renderCache.destroy()}}init(t,e){return sa(this,null,function*(){const{enableWebGPU:n,shaderCompilerPath:r,antialias:i}=e;this.canvas=t;const s=yield(n?new wI({shaderCompilerPath:r}):new Yb({targets:["webgl2","webgl1"],antialias:i,onContextLost(u){console.warn("context lost",u)},onContextCreationError(u){console.warn("context creation error",u)},onContextRestored(u){console.warn("context restored",u)}})).createSwapChain(t);s.configureSwapChain(t.width,t.height),this.device=s.getDevice(),this.swapChain=s,this.renderCache=new tM(this.device),this.currentFramebuffer=null,this.viewportOrigin=this.device.queryVendorInfo().viewportOrigin;const a=this.device.gl;this.extensionObject={OES_texture_float:!hM(a)&&this.device.OES_texture_float},this.createMainColorDepthRT(t.width,t.height)})}createMainColorDepthRT(t,e){this.mainColorRT&&this.mainColorRT.destroy(),this.mainDepthRT&&this.mainDepthRT.destroy(),this.mainColorRT=this.device.createRenderTargetFromTexture(this.device.createTexture({format:I.U8_RGBA_RT,width:t,height:e,usage:et.RENDER_TARGET})),this.mainDepthRT=this.device.createRenderTargetFromTexture(this.device.createTexture({format:I.D24_S8,width:t,height:e,usage:et.RENDER_TARGET}))}beginFrame(){this.device.beginFrame();const{currentFramebuffer:t,swapChain:e,mainColorRT:n,mainDepthRT:r}=this,i=t?t.colorRenderTarget:n,o=t?null:e.getOnscreenTexture(),s=t?t.depthRenderTarget:r,{color:a=[0,0,0,0],depth:u=1,stencil:l=0}=(t==null?void 0:t.clearOptions)||{},c=i?ki(a[0]*255,a[1]*255,a[2]*255,a[3]):Ts,h=s?u:void 0,f=s?l:void 0,p=this.device.createRenderPass({colorAttachment:[i],colorResolveTo:[o],colorClearColor:[c],colorStore:[!0],depthStencilAttachment:s,depthClearValue:h,stencilClearValue:f});this.renderPass=p}endFrame(){this.device.submitPass(this.renderPass),this.device.endFrame()}getPointSizeRange(){const t=this.device.gl;return t.getParameter(t.ALIASED_POINT_SIZE_RANGE)}testExtension(t){return!!this.getGLContext().getExtension(t)}setState(){const t=this.getGLContext();t&&(t.disable(t.CULL_FACE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA))}setBaseState(){const t=this.getGLContext();t&&(t.disable(t.CULL_FACE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA))}setCustomLayerDefaults(){const t=this.getGLContext();t&&t.disable(t.CULL_FACE)}setDirty(t){this.isDirty=t}getDirty(){return this.isDirty}},aa=["selectstart","selecting","selectend"],dM=class extends pt.EventEmitter{constructor(t,e={}){super(),this.isEnable=!1,this.onDragStart=n=>{n.target&&n.stopPropagation&&n.stopPropagation(),this.box.style.display="block",this.startEvent=this.endEvent=n,this.syncBoxBound(),this.emit("selectstart",this.getLngLatBox(),this.startEvent,this.endEvent)},this.onDragging=n=>{n.target&&n.stopPropagation&&n.stopPropagation(),this.endEvent=n,this.syncBoxBound(),this.emit("selecting",this.getLngLatBox(),this.startEvent,this.endEvent)},this.onDragEnd=n=>{n.target&&n.stopPropagation&&n.stopPropagation(),this.endEvent=n,this.box.style.display="none",this.emit("selectend",this.getLngLatBox(),this.startEvent,this.endEvent)},this.scene=t,this.options=e}get container(){return this.scene.getMapService().getMarkerContainer()}enable(){if(this.isEnable)return;const{className:t}=this.options;if(this.scene.setMapStatus({dragEnable:!1}),this.container.style.cursor="crosshair",!this.box){const e=We("div",void 0,this.container);e.classList.add("l7-select-box"),t&&e.classList.add(t),e.style.display="none",this.box=e}this.scene.on("dragstart",this.onDragStart),this.scene.on("dragging",this.onDragging),this.scene.on("dragend",this.onDragEnd),this.isEnable=!0}disable(){this.isEnable&&(this.scene.setMapStatus({dragEnable:!0}),this.container.style.cursor="auto",this.scene.off("dragstart",this.onDragStart),this.scene.off("dragging",this.onDragging),this.scene.off("dragend",this.onDragEnd),this.isEnable=!1)}syncBoxBound(){const{x:t,y:e}=this.startEvent,{x:n,y:r}=this.endEvent,i=Math.min(t,n),o=Math.min(e,r),s=Math.abs(t-n),a=Math.abs(e-r);this.box.style.top=`${o}px`,this.box.style.left=`${i}px`,this.box.style.width=`${s}px`,this.box.style.height=`${a}px`}getLngLatBox(){const{lngLat:{lng:t,lat:e}}=this.startEvent,{lngLat:{lng:n,lat:r}}=this.endEvent;return Tv([[t,e],[n,r]])}},pM=Object.defineProperty,_M=Object.defineProperties,vM=Object.getOwnPropertyDescriptors,ed=Object.getOwnPropertySymbols,mM=Object.prototype.hasOwnProperty,gM=Object.prototype.propertyIsEnumerable,td=(t,e,n)=>e in t?pM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,EM=(t,e)=>{for(var n in e||(e={}))mM.call(e,n)&&td(t,n,e[n]);if(ed)for(var n of ed(e))gM.call(e,n)&&td(t,n,e[n]);return t},yM=(t,e)=>_M(t,vM(e)),oi=(t,e,n)=>new Promise((r,i)=>{var o=u=>{try{a(n.next(u))}catch(l){i(l)}},s=u=>{try{a(n.throw(u))}catch(l){i(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,s);a((n=n.apply(t,e)).next())}),DM=class{constructor(t){const{id:e,map:n}=t,r=Zy();this.container=r,n.setContainer(r,e),r.rendererService=new fM,this.sceneService=r.sceneService,this.mapService=r.mapService,this.iconService=r.iconService,this.fontService=r.fontService,this.controlService=r.controlService,this.layerService=r.layerService,this.debugService=r.debugService,this.debugService.setEnable(t.debug),this.markerService=r.markerService,this.interactionService=r.interactionService,this.popupService=r.popupService,this.boxSelect=new dM(this,{}),this.initComponent(e),this.sceneService.init(t),this.initControl()}get map(){return this.mapService.map}get loaded(){return this.sceneService.loaded}getServiceContainer(){return this.container}getSize(){return this.mapService.getSize()}getMinZoom(){return this.mapService.getMinZoom()}getMaxZoom(){return this.mapService.getMaxZoom()}getType(){return this.mapService.getType()}getMapContainer(){return this.mapService.getMapContainer()}getMapCanvasContainer(){return this.mapService.getMapCanvasContainer()}getMapService(){return this.mapService}getDebugService(){return this.debugService}exportPng(t){return oi(this,null,function*(){return this.sceneService.exportPng(t)})}exportMap(t){return oi(this,null,function*(){return this.sceneService.exportPng(t)})}registerRenderService(t){this.sceneService.loaded?new t(this).init():this.on("loaded",()=>{new t(this).init()})}setBgColor(t){this.mapService.setBgColor(t)}addLayer(t){this.loaded?this.preAddLayer(t):this.once("loaded",()=>{this.preAddLayer(t)})}preAddLayer(t){const e=_i(this.container);if(t.setContainer(e),this.sceneService.addLayer(t),t.inited){this.initTileLayer(t);const n=this.initMask(t);this.addMask(n,t.id)}else t.on("inited",()=>{this.initTileLayer(t);const n=this.initMask(t);this.addMask(n,t.id)})}initMask(t){const{mask:e,maskfence:n,maskColor:r="#000",maskOpacity:i=0}=t.getLayerConfig();return!e||!n?void 0:new Gp().source(n).shape("fill").style({color:r,opacity:i})}addMask(t,e){if(!t)return;const n=this.getLayer(e);if(n){const r=_i(this.container);t.setContainer(r),n.addMaskLayer(t),this.sceneService.addMask(t)}else console.warn("parent layer not find!")}getPickedLayer(){return this.layerService.pickedLayerId}getLayers(){return this.layerService.getLayers()}getLayer(t){return this.layerService.getLayer(t)}getLayerByName(t){return this.layerService.getLayerByName(t)}removeLayer(t,e){return oi(this,null,function*(){yield this.layerService.remove(t,e)})}removeAllLayer(){return oi(this,null,function*(){yield this.layerService.removeAllLayers()})}render(){this.sceneService.render()}setEnableRender(t){this.layerService.setEnableRender(t)}addIconFont(t,e){this.fontService.addIconFont(t,e)}addIconFonts(t){t.forEach(([e,n])=>{this.fontService.addIconFont(e,n)})}addFontFace(t,e){this.fontService.once("fontloaded",n=>{this.emit("fontloaded",n)}),this.fontService.addFontFace(t,e)}addImage(t,e){return oi(this,null,function*(){yield this.iconService.addImage(t,e)})}hasImage(t){return this.iconService.hasImage(t)}removeImage(t){this.iconService.removeImage(t)}addIconFontGlyphs(t,e){this.fontService.addIconGlyphs(e)}addControl(t){this.controlService.addControl(t,this.container)}removeControl(t){this.controlService.removeControl(t)}getControlByName(t){return this.controlService.getControlByName(t)}addMarker(t){this.markerService.addMarker(t)}addMarkerLayer(t){this.markerService.addMarkerLayer(t)}removeMarkerLayer(t){this.markerService.removeMarkerLayer(t)}removeAllMarkers(){this.markerService.removeAllMarkers()}removeAllMakers(){console.warn("removeAllMakers 已废弃，请使用 removeAllMarkers"),this.markerService.removeAllMarkers()}addPopup(t){this.popupService.addPopup(t)}removePopup(t){this.popupService.removePopup(t)}on(t,e){var n;aa.includes(t)?(n=this.boxSelect)==null||n.on(t,e):qi.includes(t)?this.sceneService.on(t,e):this.mapService.on(t,e)}once(t,e){var n;aa.includes(t)?(n=this.boxSelect)==null||n.once(t,e):qi.includes(t)?this.sceneService.once(t,e):this.mapService.once(t,e)}emit(t,...e){qi.includes(t)?this.sceneService.emit(t,...e):this.mapService.emit(t,...e)}off(t,e){var n;aa.includes(t)?(n=this.boxSelect)==null||n.off(t,e):qi.includes(t)?this.sceneService.off(t,e):this.mapService.off(t,e)}getZoom(){return this.mapService.getZoom()}getCenter(t){return this.mapService.getCenter(t)}setCenter(t,e){return this.mapService.setCenter(t,e)}getPitch(){return this.mapService.getPitch()}setPitch(t){return this.mapService.setPitch(t)}getRotation(){return this.mapService.getRotation()}getBounds(){return this.mapService.getBounds()}setRotation(t){this.mapService.setRotation(t)}zoomIn(){this.mapService.zoomIn()}zoomOut(){this.mapService.zoomOut()}panTo(t){this.mapService.panTo(t)}panBy(t,e){this.mapService.panBy(t,e)}getContainer(){return this.mapService.getContainer()}setZoom(t){this.mapService.setZoom(t)}fitBounds(t,e){const{fitBoundsOptions:n,animate:r}=this.sceneService.getSceneConfig();this.mapService.fitBounds(t,e||yM(EM({},n),{animate:r}))}setZoomAndCenter(t,e){this.mapService.setZoomAndCenter(t,e)}setMapStyle(t){this.mapService.setMapStyle(t)}setMapStatus(t){this.mapService.setMapStatus(t)}pixelToLngLat(t){return this.mapService.pixelToLngLat(t)}lngLatToPixel(t){return this.mapService.lngLatToPixel(t)}containerToLngLat(t){return this.mapService.containerToLngLat(t)}lngLatToContainer(t){return this.mapService.lngLatToContainer(t)}destroy(){this.sceneService.destroy()}registerPostProcessingPass(t,e){const n=new t;n.setName(e),this.container.postProcessingPass[e]=n}enableShaderPick(){this.layerService.enableShaderPick()}disableShaderPick(){this.layerService.disableShaderPick()}diasbleShaderPick(){console.warn("diasbleShaderPick 已废弃，请使用 disableShaderPick"),this.layerService.disableShaderPick()}enableBoxSelect(t=!0){this.boxSelect.enable(),t&&this.boxSelect.once("selectend",()=>{this.disableBoxSelect()})}disableBoxSelect(){this.boxSelect.disable()}static addProtocol(t,e){So.REGISTERED_PROTOCOLS[t]=e}static removeProtocol(t){delete So.REGISTERED_PROTOCOLS[t]}getProtocol(t){return So.REGISTERED_PROTOCOLS[t]}startAnimate(){this.layerService.startAnimate()}stopAnimate(){this.layerService.stopAnimate()}getPointSizeRange(){return this.sceneService.getPointSizeRange()}initComponent(t){this.controlService.init({container:Q0(t)},this.container),this.markerService.init(this.container),this.popupService.init(this.container)}initControl(){const{logoVisible:t,logoPosition:e}=this.sceneService.getSceneConfig();t&&this.addControl(new BA({position:e}))}initTileLayer(t){t.getSource().isTile&&(t.tileLayer=new ax(t))}};export{RM as H,wp as L,NM as M,$p as P,DM as S,FM as a,Va as b};
