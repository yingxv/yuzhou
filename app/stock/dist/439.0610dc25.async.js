(function(E,y){typeof exports=="object"&&typeof module=="object"?module.exports=y():typeof define=="function"&&define.amd?define([],y):typeof exports=="object"?exports["stock-439"]=y():E["stock-439"]=y()})(self,function(){return function(){var I={46362:function(r){function u(t,a){(a==null||a>t.length)&&(a=t.length);for(var s=0,e=new Array(a);s<a;s++)e[s]=t[s];return e}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},73821:function(r){function u(t){if(Array.isArray(t))return t}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},7529:function(r,u,t){var a=t(5582);function s(e,i){var n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||i&&e&&typeof e.length=="number"){n&&(e=n);var l=0,v=function(){};return{s:v,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(P){throw P},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,g=!1,M;return{s:function(){n=n.call(e)},n:function(){var P=n.next();return b=P.done,P},e:function(P){g=!0,M=P},f:function(){try{!b&&n.return!=null&&n.return()}finally{if(g)throw M}}}}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},59042:function(r,u,t){var a=t(15849);function s(e,i,n){return i=a(i),i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},62807:function(r){function u(t,a){var s=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var e,i,n,l,v=[],b=!0,g=!1;try{if(n=(s=s.call(t)).next,a===0){if(Object(s)!==s)return;b=!1}else for(;!(b=(e=n.call(s)).done)&&(v.push(e.value),v.length!==a);b=!0);}catch(M){g=!0,i=M}finally{try{if(!b&&s.return!=null&&(l=s.return(),Object(l)!==l))return}finally{if(g)throw i}}return v}}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},87490:function(r){function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},55354:function(r,u,t){var a=t(59042);function s(i,n){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);n&&(v=v.filter(function(b){return Object.getOwnPropertyDescriptor(i,b).enumerable})),l.push.apply(l,v)}return l}function e(i){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?s(Object(l),!0).forEach(function(v){a(i,v,l[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach(function(v){Object.defineProperty(i,v,Object.getOwnPropertyDescriptor(l,v))})}return i}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports},50680:function(r,u,t){var a=t(73821),s=t(62807),e=t(5582),i=t(87490);function n(l,v){return a(l)||s(l,v)||e(l,v)||i()}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},92661:function(r,u,t){var a=t(80211).default;function s(e,i){if(a(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,i||"default");if(a(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},15849:function(r,u,t){var a=t(80211).default,s=t(92661);function e(i){var n=s(i,"string");return a(n)==="symbol"?n:String(n)}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports},80211:function(r){function u(t){return r.exports=u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r.exports.__esModule=!0,r.exports.default=r.exports,u(t)}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},5582:function(r,u,t){var a=t(46362);function s(e,i){if(e){if(typeof e=="string")return a(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,i)}}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports}},E={};function y(r){var u=E[r];if(u!==void 0)return u.exports;var t=E[r]={exports:{}};return I[r](t,t.exports,y),t.exports}(function(){y.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return y.d(u,{a:u}),u}})(),function(){y.d=function(r,u){for(var t in u)y.o(u,t)&&!y.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:u[t]})}}(),function(){y.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)}}();var R={};return function(){"use strict";var r=y(50680),u=y.n(r),t=y(7529),a=y.n(t),s=y(55354),e=y.n(s);function i(c){var o=+c;return Number.isNaN(o)?0:o}function n(){for(var c=arguments.length,o=new Array(c),f=0;f<c;f++)o[f]=arguments[f];return o==null?void 0:o.reduce(function(d,p){return d+=i(p)},0)}function l(){for(var c=arguments.length,o=new Array(c),f=0;f<c;f++)o[f]=arguments[f];var d=o[0],p=o.slice(1),_=p==null?void 0:p.reduce(function(h,x){return h*=i(x)},1);return _===0?0:d/_}function v(){for(var c=arguments.length,o=new Array(c),f=0;f<c;f++)o[f]=arguments[f];return o==null?void 0:o.reduce(function(d,p){return d*=i(p)},1)}var b=new Map([[!0,1],[!1,-1]]),g=["PB","PE","PEG","ROE","DPE","DPER","DCE","DCER","AAGR"],M=new Map([["PB","\u5E02\u51C0\u7387"],["PE","\u5E02\u76C8\u7387"],["PEG","\u5E02\u76C8\u589E\u957F\u6BD4"],["ROE","\u51C0\u8D44\u4EA7\u6536\u76CA\u7387"],["DPE","\u5229\u6DA6\u4F30\u503C"],["DPER","\u52A8\u6001\u5229\u6DA6\u4F30\u503C\u7387"],["DCE","\u52A8\u6001\u73B0\u91D1\u4F30\u503C"],["DCER","\u52A8\u6001\u73B0\u91D1\u4F30\u503C\u7387"],["AAGR","\u5E73\u5747\u5E74\u589E\u957F\u7387"]]),O=0;self.onmessage=function(c){var o;if(O>0)return self.postMessage({type:"locked"});O++;var f=(o=c==null?void 0:c.data)!==null&&o!==void 0?o:{},d=f.type,p=f.payload;switch(d){case"calc":return self.postMessage({type:"calc",status:"done",payload:P(p)});case"avg":return self.postMessage({type:"avg",status:"done",payload:C(p)});default:return self.postMessage({type:"unknown",payload:c==null?void 0:c.data})}},self.onerror=function(c){console.error(c)};function P(c){var o=c.weights,f=c.dataSource,d=f==null?void 0:f.map(function(p){return e()(e()({},p),{},{grade:0})});return o==null||o.forEach(H(d)),O--,d}function C(c){var o=N(c),f=[],d=a()(o),p;try{var _=function(){for(var x=u()(p.value,2),S=x[0],w=x[1],A=w==null?void 0:w[0],$=function(){var D=w[j];g==null||g.forEach(function(T){A[T]=n(D==null?void 0:D[T],A==null?void 0:A[T])})},j=1;j<(w==null?void 0:w.length);j++)$();g==null||g.forEach(function(m){A[m]=l(A[m],w==null?void 0:w.length)}),f.push(A)};for(d.s();!(p=d.n()).done;)_()}catch(h){d.e(h)}finally{d.f()}return O--,f}function N(c){var o=new Map,f=a()(c),d;try{for(f.s();!(d=f.n()).done;){var p=d.value,_=p.code,h=p.bourse,x=p.bourseCode,S="".concat(h).concat(x,"-").concat(_);o.has(S)||o.set(S,[]),o.get(S).push(p)}}catch(w){f.e(w)}finally{f.f()}return o}function H(c){return function(o){var f=o.isAsc,d=o.coefficient,p=o.field;c.sort(function(_,h){var x;return(+(_==null?void 0:_[p])-+(h==null?void 0:h[p]))*((x=b==null?void 0:b.get(f))!==null&&x!==void 0?x:1)}),c.forEach(function(_,h){var x;return _.grade=((x=_.grade)!==null&&x!==void 0?x:0)+h*d})}}}(),R}()});
