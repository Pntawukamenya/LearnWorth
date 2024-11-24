function SE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nv={exports:{}},Wl={},rv={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),CE=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),IE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),NE=Symbol.for("react.context"),RE=Symbol.for("react.forward_ref"),PE=Symbol.for("react.suspense"),AE=Symbol.for("react.memo"),OE=Symbol.for("react.lazy"),Dp=Symbol.iterator;function LE(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sv=Object.assign,ov={};function Gi(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||iv}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=Gi.prototype;function gh(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||iv}var _h=gh.prototype=new av;_h.constructor=gh;sv(_h,Gi.prototype);_h.isPureReactComponent=!0;var jp=Array.isArray,lv=Object.prototype.hasOwnProperty,vh={current:null},cv={key:!0,ref:!0,__self:!0,__source:!0};function uv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lv.call(e,r)&&!cv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:No,type:t,key:s,ref:o,props:i,_owner:vh.current}}function DE(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function jE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mp=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jE(""+t.key):e.toString(36)}function wa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case CE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ac(o,0):r,jp(i)?(n="",t!=null&&(n=t.replace(Mp,"$&/")+"/"),wa(i,e,n,"",function(c){return c})):i!=null&&(yh(i)&&(i=DE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ac(s,a);o+=wa(s,e,n,l,i)}else if(l=LE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ac(s,a++),o+=wa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return wa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ME(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},xa={transition:null},FE={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:xa,ReactCurrentOwner:vh};function dv(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Gi;B.Fragment=bE;B.Profiler=TE;B.PureComponent=gh;B.StrictMode=IE;B.Suspense=PE;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FE;B.act=dv;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lv.call(e,l)&&!cv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:No,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:NE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kE,_context:t},t.Consumer=t};B.createElement=uv;B.createFactory=function(t){var e=uv.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:RE,render:t}};B.isValidElement=yh;B.lazy=function(t){return{$$typeof:OE,_payload:{_status:-1,_result:t},_init:ME}};B.memo=function(t,e){return{$$typeof:AE,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};B.unstable_act=dv;B.useCallback=function(t,e){return ze.current.useCallback(t,e)};B.useContext=function(t){return ze.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};B.useEffect=function(t,e){return ze.current.useEffect(t,e)};B.useId=function(){return ze.current.useId()};B.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return ze.current.useMemo(t,e)};B.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};B.useRef=function(t){return ze.current.useRef(t)};B.useState=function(t){return ze.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return ze.current.useTransition()};B.version="18.3.1";rv.exports=B;var x=rv.exports;const kt=tv(x),UE=SE({__proto__:null,default:kt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE=x,BE=Symbol.for("react.element"),WE=Symbol.for("react.fragment"),$E=Object.prototype.hasOwnProperty,VE=zE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HE={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$E.call(e,r)&&!HE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BE,type:t,key:s,ref:o,props:i,_owner:VE.current}}Wl.Fragment=WE;Wl.jsx=hv;Wl.jsxs=hv;nv.exports=Wl;var u=nv.exports,Pu={},fv={exports:{}},ut={},pv={exports:{}},mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var j=R.length;R.push(D);e:for(;0<j;){var de=j-1>>>1,we=R[de];if(0<i(we,D))R[de]=D,R[j]=we,j=de;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],j=R.pop();if(j!==D){R[0]=j;e:for(var de=0,we=R.length,Qo=we>>>1;de<Qo;){var hr=2*(de+1)-1,Pc=R[hr],fr=hr+1,Yo=R[fr];if(0>i(Pc,j))fr<we&&0>i(Yo,Pc)?(R[de]=Yo,R[fr]=j,de=fr):(R[de]=Pc,R[hr]=j,de=hr);else if(fr<we&&0>i(Yo,j))R[de]=Yo,R[fr]=j,de=fr;else break e}}return D}function i(R,D){var j=R.sortIndex-D.sortIndex;return j!==0?j:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,p=!1,_=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=R)r(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function E(R){if(y=!1,v(R),!_)if(n(l)!==null)_=!0,Nc(S);else{var D=n(c);D!==null&&Rc(E,D.startTime-R)}}function S(R,D){_=!1,y&&(y=!1,g(k),k=-1),p=!0;var j=f;try{for(v(D),d=n(l);d!==null&&(!(d.expirationTime>D)||R&&!et());){var de=d.callback;if(typeof de=="function"){d.callback=null,f=d.priorityLevel;var we=de(d.expirationTime<=D);D=t.unstable_now(),typeof we=="function"?d.callback=we:d===n(l)&&r(l),v(D)}else r(l);d=n(l)}if(d!==null)var Qo=!0;else{var hr=n(c);hr!==null&&Rc(E,hr.startTime-D),Qo=!1}return Qo}finally{d=null,f=j,p=!1}}var I=!1,T=null,k=-1,V=5,L=-1;function et(){return!(t.unstable_now()-L<V)}function os(){if(T!==null){var R=t.unstable_now();L=R;var D=!0;try{D=T(!0,R)}finally{D?as():(I=!1,T=null)}}else I=!1}var as;if(typeof m=="function")as=function(){m(os)};else if(typeof MessageChannel<"u"){var Lp=new MessageChannel,EE=Lp.port2;Lp.port1.onmessage=os,as=function(){EE.postMessage(null)}}else as=function(){w(os,0)};function Nc(R){T=R,I||(I=!0,as())}function Rc(R,D){k=w(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Nc(S))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var j=f;f=D;try{return R()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=f;f=R;try{return D()}finally{f=j}},t.unstable_scheduleCallback=function(R,D,j){var de=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?de+j:de):j=de,R){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=j+we,R={id:h++,callback:D,priorityLevel:R,startTime:j,expirationTime:we,sortIndex:-1},j>de?(R.sortIndex=j,e(c,R),n(l)===null&&R===n(c)&&(y?(g(k),k=-1):y=!0,Rc(E,j-de))):(R.sortIndex=we,e(l,R),_||p||(_=!0,Nc(S))),R},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(R){var D=f;return function(){var j=f;f=D;try{return R.apply(this,arguments)}finally{f=j}}}})(mv);pv.exports=mv;var qE=pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE=x,ct=qE;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gv=new Set,Qs={};function Qr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Qs[t]=e,t=0;t<e.length;t++)gv.add(e[t])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,KE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Up={};function QE(t){return Au.call(Up,t)?!0:Au.call(Fp,t)?!1:KE.test(t)?Up[t]=!0:(Fp[t]=!0,!1)}function YE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XE(t,e,n,r){if(e===null||typeof e>"u"||YE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wh,xh);Ne[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wh,xh);Ne[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wh,xh);Ne[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eh(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XE(e,n,i,r)&&(n=null),r||i===null?QE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wn=GE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Du=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),yv=Symbol.for("react.offscreen"),zp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Oc;function xs(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Lc=!1;function Dc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function JE(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case Ou:return"Profiler";case Sh:return"StrictMode";case Lu:return"Suspense";case Du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bh:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case Tn:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function ZE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eS(t){var e=wv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=eS(t))}function xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ev(t,e){e=e.checked,e!=null&&Eh(t,"checked",e,!1)}function Fu(t,e){Ev(t,e);var n=Xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uu(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uu(t,e,n){(e!=="number"||za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Es(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xn(n)}}function Sv(t,e){var n=Xn(e.value),r=Xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,bv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tS=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){tS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function Iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function Tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nS=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(nS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,Ei=null,Si=null;function Hp(t){if(t=Ao(t)){if(typeof Hu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Gl(e),Hu(t.stateNode,t.type,e))}}function kv(t){Ei?Si?Si.push(t):Si=[t]:Ei=t}function Nv(){if(Ei){var t=Ei,e=Si;if(Si=Ei=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function Rv(t,e){return t(e)}function Pv(){}var jc=!1;function Av(t,e,n){if(jc)return t(e,n);jc=!0;try{return Rv(t,e,n)}finally{jc=!1,(Ei!==null||Si!==null)&&(Pv(),Nv())}}function Xs(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var qu=!1;if(un)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){qu=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{qu=!1}function rS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Rs=!1,Ba=null,Wa=!1,Gu=null,iS={onError:function(t){Rs=!0,Ba=t}};function sS(t,e,n,r,i,s,o,a,l){Rs=!1,Ba=null,rS.apply(iS,arguments)}function oS(t,e,n,r,i,s,o,a,l){if(sS.apply(this,arguments),Rs){if(Rs){var c=Ba;Rs=!1,Ba=null}else throw Error(C(198));Wa||(Wa=!0,Gu=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qp(t){if(Yr(t)!==t)throw Error(C(188))}function aS(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qp(i),t;if(s===r)return qp(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Lv(t){return t=aS(t),t!==null?Dv(t):null}function Dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dv(t);if(e!==null)return e;t=t.sibling}return null}var jv=ct.unstable_scheduleCallback,Gp=ct.unstable_cancelCallback,lS=ct.unstable_shouldYield,cS=ct.unstable_requestPaint,he=ct.unstable_now,uS=ct.unstable_getCurrentPriorityLevel,Th=ct.unstable_ImmediatePriority,Mv=ct.unstable_UserBlockingPriority,$a=ct.unstable_NormalPriority,dS=ct.unstable_LowPriority,Fv=ct.unstable_IdlePriority,$l=null,$t=null;function hS(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:mS,fS=Math.log,pS=Math.LN2;function mS(t){return t>>>=0,t===0?32:31-(fS(t)/pS|0)|0}var ta=64,na=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Va(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ss(a):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _S(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=gS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uv(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function vS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bv,Nh,Wv,$v,Vv,Qu=!1,ra=[],Un=null,zn=null,Bn=null,Js=new Map,Zs=new Map,Nn=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&Nh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wS(t,e,n,r,i){switch(e){case"focusin":return Un=us(Un,t,e,n,r,i),!0;case"dragenter":return zn=us(zn,t,e,n,r,i),!0;case"mouseover":return Bn=us(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,us(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zs.set(s,us(Zs.get(s)||null,t,e,n,r,i)),!0}return!1}function Hv(t){var e=wr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,Vv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vu=r,n.target.dispatchEvent(r),Vu=null}else return e=Ao(n),e!==null&&Nh(e),t.blockedOn=n,!1;e.shift()}return!0}function Qp(t,e,n){Ea(t)&&n.delete(e)}function xS(){Qu=!1,Un!==null&&Ea(Un)&&(Un=null),zn!==null&&Ea(zn)&&(zn=null),Bn!==null&&Ea(Bn)&&(Bn=null),Js.forEach(Qp),Zs.forEach(Qp)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,xS)))}function eo(t){function e(i){return ds(i,t)}if(0<ra.length){ds(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&ds(Un,t),zn!==null&&ds(zn,t),Bn!==null&&ds(Bn,t),Js.forEach(e),Zs.forEach(e),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Hv(n),n.blockedOn===null&&Nn.shift()}var Ci=wn.ReactCurrentBatchConfig,Ha=!0;function ES(t,e,n,r){var i=q,s=Ci.transition;Ci.transition=null;try{q=1,Rh(t,e,n,r)}finally{q=i,Ci.transition=s}}function SS(t,e,n,r){var i=q,s=Ci.transition;Ci.transition=null;try{q=4,Rh(t,e,n,r)}finally{q=i,Ci.transition=s}}function Rh(t,e,n,r){if(Ha){var i=Yu(t,e,n,r);if(i===null)Gc(t,e,r,qa,n),Kp(t,r);else if(wS(i,t,e,n,r))r.stopPropagation();else if(Kp(t,r),e&4&&-1<yS.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&Bv(s),s=Yu(t,e,n,r),s===null&&Gc(t,e,r,qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var qa=null;function Yu(t,e,n,r){if(qa=null,t=Ih(r),t=wr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uS()){case Th:return 1;case Mv:return 4;case $a:case dS:return 16;case Fv:return 536870912;default:return 16}default:return 16}}var Dn=null,Ph=null,Sa=null;function Gv(){if(Sa)return Sa;var t,e=Ph,n=e.length,r,i="value"in Dn?Dn.value:Dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sa=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Yp(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Yp,this.isPropagationStopped=Yp,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ah=dt(Ki),Po=ae({},Ki,{view:0,detail:0}),CS=dt(Po),Fc,Uc,hs,Vl=ae({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(Fc=t.screenX-hs.screenX,Uc=t.screenY-hs.screenY):Uc=Fc=0,hs=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Xp=dt(Vl),bS=ae({},Vl,{dataTransfer:0}),IS=dt(bS),TS=ae({},Po,{relatedTarget:0}),zc=dt(TS),kS=ae({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),NS=dt(kS),RS=ae({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=dt(RS),AS=ae({},Ki,{data:0}),Jp=dt(AS),OS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DS[t])?!!e[t]:!1}function Oh(){return jS}var MS=ae({},Po,{key:function(t){if(t.key){var e=OS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=dt(MS),US=ae({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=dt(US),zS=ae({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),BS=dt(zS),WS=ae({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=dt(WS),VS=ae({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HS=dt(VS),qS=[9,13,27,32],Lh=un&&"CompositionEvent"in window,Ps=null;un&&"documentMode"in document&&(Ps=document.documentMode);var GS=un&&"TextEvent"in window&&!Ps,Kv=un&&(!Lh||Ps&&8<Ps&&11>=Ps),em=" ",tm=!1;function Qv(t,e){switch(t){case"keyup":return qS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function KS(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return t=e.data,t===em&&tm?null:t;default:return null}}function QS(t,e){if(ai)return t==="compositionend"||!Lh&&Qv(t,e)?(t=Gv(),Sa=Ph=Dn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Xv(t,e,n,r){kv(r),e=Ga(e,"onChange"),0<e.length&&(n=new Ah("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,to=null;function XS(t){ly(t,0)}function Hl(t){var e=ui(t);if(xv(e))return t}function JS(t,e){if(t==="change")return e}var Jv=!1;if(un){var Bc;if(un){var Wc="oninput"in document;if(!Wc){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),Wc=typeof rm.oninput=="function"}Bc=Wc}else Bc=!1;Jv=Bc&&(!document.documentMode||9<document.documentMode)}function im(){As&&(As.detachEvent("onpropertychange",Zv),to=As=null)}function Zv(t){if(t.propertyName==="value"&&Hl(to)){var e=[];Xv(e,to,t,Ih(t)),Av(XS,e)}}function ZS(t,e,n){t==="focusin"?(im(),As=e,to=n,As.attachEvent("onpropertychange",Zv)):t==="focusout"&&im()}function eC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(to)}function tC(t,e){if(t==="click")return Hl(e)}function nC(t,e){if(t==="input"||t==="change")return Hl(e)}function rC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:rC;function no(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Au.call(e,i)||!At(t[i],e[i]))return!1}return!0}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,e){var n=sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sm(n)}}function ey(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ey(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ty(){for(var t=window,e=za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=za(t.document)}return e}function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iC(t){var e=ty(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ey(n.ownerDocument.documentElement,n)){if(r!==null&&Dh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=om(n,s);var o=om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sC=un&&"documentMode"in document&&11>=document.documentMode,li=null,Xu=null,Os=null,Ju=!1;function am(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||li==null||li!==za(r)||(r=li,"selectionStart"in r&&Dh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&no(Os,r)||(Os=r,r=Ga(Xu,"onSelect"),0<r.length&&(e=new Ah("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ci={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},$c={},ny={};un&&(ny=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function ql(t){if($c[t])return $c[t];if(!ci[t])return t;var e=ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ny)return $c[t]=e[n];return t}var ry=ql("animationend"),iy=ql("animationiteration"),sy=ql("animationstart"),oy=ql("transitionend"),ay=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){ay.set(t,e),Qr(e,[t])}for(var Vc=0;Vc<lm.length;Vc++){var Hc=lm[Vc],oC=Hc.toLowerCase(),aC=Hc[0].toUpperCase()+Hc.slice(1);ir(oC,"on"+aC)}ir(ry,"onAnimationEnd");ir(iy,"onAnimationIteration");ir(sy,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(oy,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function cm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oS(r,e,void 0,t),t.currentTarget=null}function ly(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cm(i,a,c),s=l}}}if(Wa)throw t=Gu,Wa=!1,Gu=null,t}function X(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var r=t+"__bubble";n.has(r)||(cy(e,t,2,!1),n.add(r))}function qc(t,e,n){var r=0;e&&(r|=4),cy(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[oa]){t[oa]=!0,gv.forEach(function(n){n!=="selectionchange"&&(lC.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,qc("selectionchange",!1,e))}}function cy(t,e,n,r){switch(qv(e)){case 1:var i=ES;break;case 4:i=SS;break;default:i=Rh}n=i.bind(null,e,n,t),i=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Av(function(){var c=s,h=Ih(n),d=[];e:{var f=ay.get(t);if(f!==void 0){var p=Ah,_=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":p=FS;break;case"focusin":_="focus",p=zc;break;case"focusout":_="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=IS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BS;break;case ry:case iy:case sy:p=NS;break;case oy:p=$S;break;case"scroll":p=CS;break;case"wheel":p=HS;break;case"copy":case"cut":case"paste":p=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zp}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=Xs(m,g),E!=null&&y.push(io(m,E,v)))),w)break;m=m.return}0<y.length&&(f=new p(f,_,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Vu&&(_=n.relatedTarget||n.fromElement)&&(wr(_)||_[dn]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?wr(_):null,_!==null&&(w=Yr(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Xp,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zp,E="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?f:ui(p),v=_==null?f:ui(_),f=new y(E,m+"leave",p,n,h),f.target=w,f.relatedTarget=v,E=null,wr(h)===c&&(y=new y(g,m+"enter",_,n,h),y.target=v,y.relatedTarget=w,E=y),w=E,p&&_)t:{for(y=p,g=_,m=0,v=y;v;v=ni(v))m++;for(v=0,E=g;E;E=ni(E))v++;for(;0<m-v;)y=ni(y),m--;for(;0<v-m;)g=ni(g),v--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=ni(y),g=ni(g)}y=null}else y=null;p!==null&&um(d,f,p,y,!1),_!==null&&w!==null&&um(d,w,_,y,!0)}}e:{if(f=c?ui(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=JS;else if(nm(f))if(Jv)S=nC;else{S=eC;var I=ZS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=tC);if(S&&(S=S(t,c))){Xv(d,S,n,h);break e}I&&I(t,f,c),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Uu(f,"number",f.value)}switch(I=c?ui(c):window,t){case"focusin":(nm(I)||I.contentEditable==="true")&&(li=I,Xu=c,Os=null);break;case"focusout":Os=Xu=li=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,am(d,n,h);break;case"selectionchange":if(sC)break;case"keydown":case"keyup":am(d,n,h)}var T;if(Lh)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ai?Qv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Kv&&n.locale!=="ko"&&(ai||k!=="onCompositionStart"?k==="onCompositionEnd"&&ai&&(T=Gv()):(Dn=h,Ph="value"in Dn?Dn.value:Dn.textContent,ai=!0)),I=Ga(c,k),0<I.length&&(k=new Jp(k,t,null,n,h),d.push({event:k,listeners:I}),T?k.data=T:(T=Yv(n),T!==null&&(k.data=T)))),(T=GS?KS(t,n):QS(t,n))&&(c=Ga(c,"onBeforeInput"),0<c.length&&(h=new Jp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=T))}ly(d,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xs(t,n),s!=null&&r.unshift(io(t,s,i)),s=Xs(t,e),s!=null&&r.push(io(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Xs(n,s),l!=null&&o.unshift(io(n,l,a))):i||(l=Xs(n,s),l!=null&&o.push(io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cC=/\r\n?/g,uC=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(cC,`
`).replace(uC,"")}function aa(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(C(425))}function Ka(){}var Zu=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,dC=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,hC=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(t){return hm.resolve(null).then(t).catch(fC)}:nd;function fC(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Qi,so="__reactProps$"+Qi,dn="__reactContainer$"+Qi,rd="__reactEvents$"+Qi,pC="__reactListeners$"+Qi,mC="__reactHandles$"+Qi;function wr(t){var e=t[Ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[Ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[Ut])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Ut]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Gl(t){return t[so]||null}var id=[],di=-1;function sr(t){return{current:t}}function Z(t){0>di||(t.current=id[di],id[di]=null,di--)}function Y(t,e){di++,id[di]=t.current,t.current=e}var Jn={},De=sr(Jn),Ge=sr(!1),Ar=Jn;function Di(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Qa(){Z(Ge),Z(De)}function pm(t,e,n){if(De.current!==Jn)throw Error(C(168));Y(De,e),Y(Ge,n)}function uy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,ZE(t)||"Unknown",i));return ae({},n,r)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Ar=De.current,Y(De,t),Y(Ge,Ge.current),!0}function mm(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=uy(t,e,Ar),r.__reactInternalMemoizedMergedChildContext=t,Z(Ge),Z(De),Y(De,t)):Z(Ge),Y(Ge,n)}var Jt=null,Kl=!1,Qc=!1;function dy(t){Jt===null?Jt=[t]:Jt.push(t)}function gC(t){Kl=!0,dy(t)}function or(){if(!Qc&&Jt!==null){Qc=!0;var t=0,e=q;try{var n=Jt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jt=null,Kl=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(t+1)),jv(Th,or),i}finally{q=e,Qc=!1}}return null}var hi=[],fi=0,Xa=null,Ja=0,ft=[],pt=0,Or=null,en=1,tn="";function pr(t,e){hi[fi++]=Ja,hi[fi++]=Xa,Xa=t,Ja=e}function hy(t,e,n){ft[pt++]=en,ft[pt++]=tn,ft[pt++]=Or,Or=t;var r=en;t=tn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,en=1<<32-Nt(e)+i|n<<i|r,tn=s+t}else en=1<<s|n<<i|r,tn=t}function jh(t){t.return!==null&&(pr(t,1),hy(t,1,0))}function Mh(t){for(;t===Xa;)Xa=hi[--fi],hi[fi]=null,Ja=hi[--fi],hi[fi]=null;for(;t===Or;)Or=ft[--pt],ft[pt]=null,tn=ft[--pt],ft[pt]=null,en=ft[--pt],ft[pt]=null}var it=null,nt=null,re=!1,St=null;function fy(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,it=t,nt=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,it=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:en,overflow:tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,it=t,nt=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(re){var e=nt;if(e){var n=e;if(!gm(t,e)){if(sd(t))throw Error(C(418));e=Wn(n.nextSibling);var r=it;e&&gm(t,e)?fy(r,n):(t.flags=t.flags&-4097|2,re=!1,it=t)}}else{if(sd(t))throw Error(C(418));t.flags=t.flags&-4097|2,re=!1,it=t}}}function _m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;it=t}function la(t){if(t!==it)return!1;if(!re)return _m(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=nt)){if(sd(t))throw py(),Error(C(418));for(;e;)fy(t,e),e=Wn(e.nextSibling)}if(_m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=it?Wn(t.stateNode.nextSibling):null;return!0}function py(){for(var t=nt;t;)t=Wn(t.nextSibling)}function ji(){nt=it=null,re=!1}function Fh(t){St===null?St=[t]:St.push(t)}var _C=wn.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function my(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=qn(g,m),g.index=0,g.sibling=null,g}function s(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,E){return m===null||m.tag!==6?(m=nu(v,g.mode,E),m.return=g,m):(m=i(m,v),m.return=g,m)}function l(g,m,v,E){var S=v.type;return S===oi?h(g,m,v.props.children,E,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tn&&vm(S)===m.type)?(E=i(m,v.props),E.ref=fs(g,m,v),E.return=g,E):(E=Pa(v.type,v.key,v.props,null,g.mode,E),E.ref=fs(g,m,v),E.return=g,E)}function c(g,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ru(v,g.mode,E),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function h(g,m,v,E,S){return m===null||m.tag!==7?(m=kr(v,g.mode,E,S),m.return=g,m):(m=i(m,v),m.return=g,m)}function d(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=nu(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jo:return v=Pa(m.type,m.key,m.props,null,g.mode,v),v.ref=fs(g,null,m),v.return=g,v;case si:return m=ru(m,g.mode,v),m.return=g,m;case Tn:var E=m._init;return d(g,E(m._payload),v)}if(Es(m)||ls(m))return m=kr(m,g.mode,v,null),m.return=g,m;ca(g,m)}return null}function f(g,m,v,E){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(g,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return v.key===S?l(g,m,v,E):null;case si:return v.key===S?c(g,m,v,E):null;case Tn:return S=v._init,f(g,m,S(v._payload),E)}if(Es(v)||ls(v))return S!==null?null:h(g,m,v,E,null);ca(g,v)}return null}function p(g,m,v,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(m,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Jo:return g=g.get(E.key===null?v:E.key)||null,l(m,g,E,S);case si:return g=g.get(E.key===null?v:E.key)||null,c(m,g,E,S);case Tn:var I=E._init;return p(g,m,v,I(E._payload),S)}if(Es(E)||ls(E))return g=g.get(v)||null,h(m,g,E,S,null);ca(m,E)}return null}function _(g,m,v,E){for(var S=null,I=null,T=m,k=m=0,V=null;T!==null&&k<v.length;k++){T.index>k?(V=T,T=null):V=T.sibling;var L=f(g,T,v[k],E);if(L===null){T===null&&(T=V);break}t&&T&&L.alternate===null&&e(g,T),m=s(L,m,k),I===null?S=L:I.sibling=L,I=L,T=V}if(k===v.length)return n(g,T),re&&pr(g,k),S;if(T===null){for(;k<v.length;k++)T=d(g,v[k],E),T!==null&&(m=s(T,m,k),I===null?S=T:I.sibling=T,I=T);return re&&pr(g,k),S}for(T=r(g,T);k<v.length;k++)V=p(T,g,k,v[k],E),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?k:V.key),m=s(V,m,k),I===null?S=V:I.sibling=V,I=V);return t&&T.forEach(function(et){return e(g,et)}),re&&pr(g,k),S}function y(g,m,v,E){var S=ls(v);if(typeof S!="function")throw Error(C(150));if(v=S.call(v),v==null)throw Error(C(151));for(var I=S=null,T=m,k=m=0,V=null,L=v.next();T!==null&&!L.done;k++,L=v.next()){T.index>k?(V=T,T=null):V=T.sibling;var et=f(g,T,L.value,E);if(et===null){T===null&&(T=V);break}t&&T&&et.alternate===null&&e(g,T),m=s(et,m,k),I===null?S=et:I.sibling=et,I=et,T=V}if(L.done)return n(g,T),re&&pr(g,k),S;if(T===null){for(;!L.done;k++,L=v.next())L=d(g,L.value,E),L!==null&&(m=s(L,m,k),I===null?S=L:I.sibling=L,I=L);return re&&pr(g,k),S}for(T=r(g,T);!L.done;k++,L=v.next())L=p(T,g,k,L.value,E),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?k:L.key),m=s(L,m,k),I===null?S=L:I.sibling=L,I=L);return t&&T.forEach(function(os){return e(g,os)}),re&&pr(g,k),S}function w(g,m,v,E){if(typeof v=="object"&&v!==null&&v.type===oi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:e:{for(var S=v.key,I=m;I!==null;){if(I.key===S){if(S=v.type,S===oi){if(I.tag===7){n(g,I.sibling),m=i(I,v.props.children),m.return=g,g=m;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tn&&vm(S)===I.type){n(g,I.sibling),m=i(I,v.props),m.ref=fs(g,I,v),m.return=g,g=m;break e}n(g,I);break}else e(g,I);I=I.sibling}v.type===oi?(m=kr(v.props.children,g.mode,E,v.key),m.return=g,g=m):(E=Pa(v.type,v.key,v.props,null,g.mode,E),E.ref=fs(g,m,v),E.return=g,g=E)}return o(g);case si:e:{for(I=v.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=ru(v,g.mode,E),m.return=g,g=m}return o(g);case Tn:return I=v._init,w(g,m,I(v._payload),E)}if(Es(v))return _(g,m,v,E);if(ls(v))return y(g,m,v,E);ca(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=nu(v,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return w}var Mi=my(!0),gy=my(!1),Za=sr(null),el=null,pi=null,Uh=null;function zh(){Uh=pi=el=null}function Bh(t){var e=Za.current;Z(Za),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){el=t,Uh=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(el===null)throw Error(C(308));pi=t,el.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var xr=null;function Wh(t){xr===null?xr=[t]:xr.push(t)}function _y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,hn(t,r)}function hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kn=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function an(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hn(t,n)}return i=r.interleaved,i===null?(e.next=e,Wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,hn(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kh(t,n)}}function ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=ae({},d,f);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=d}}function wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Oo={},Vt=sr(Oo),oo=sr(Oo),ao=sr(Oo);function Er(t){if(t===Oo)throw Error(C(174));return t}function Vh(t,e){switch(Y(ao,e),Y(oo,t),Y(Vt,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}Z(Vt),Y(Vt,e)}function Fi(){Z(Vt),Z(oo),Z(ao)}function yy(t){Er(ao.current);var e=Er(Vt.current),n=Bu(e,t.type);e!==n&&(Y(oo,t),Y(Vt,n))}function Hh(t){oo.current===t&&(Z(Vt),Z(oo))}var se=sr(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function qh(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var Ia=wn.ReactCurrentDispatcher,Xc=wn.ReactCurrentBatchConfig,Lr=0,oe=null,_e=null,Ee=null,rl=!1,Ls=!1,lo=0,vC=0;function Re(){throw Error(C(321))}function Gh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function Kh(t,e,n,r,i,s){if(Lr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ia.current=t===null||t.memoizedState===null?EC:SC,t=n(r,i),Ls){s=0;do{if(Ls=!1,lo=0,25<=s)throw Error(C(301));s+=1,Ee=_e=null,e.updateQueue=null,Ia.current=CC,t=n(r,i)}while(Ls)}if(Ia.current=il,e=_e!==null&&_e.next!==null,Lr=0,Ee=_e=oe=null,rl=!1,e)throw Error(C(300));return t}function Qh(){var t=lo!==0;return lo=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function vt(){if(_e===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Ee===null?oe.memoizedState:Ee.next;if(e!==null)Ee=e,_e=t;else{if(t===null)throw Error(C(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function co(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=vt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Lr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,oe.lanes|=h,Dr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=vt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wy(){}function xy(t,e){var n=oe,r=vt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,Yh(Cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,uo(9,Sy.bind(null,n,r,i,e),void 0,null),be===null)throw Error(C(349));Lr&30||Ey(n,e,i)}return i}function Ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sy(t,e,n,r){e.value=n,e.getSnapshot=r,by(e)&&Iy(t)}function Cy(t,e,n){return n(function(){by(e)&&Iy(t)})}function by(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function Iy(t){var e=hn(t,1);e!==null&&Rt(e,t,1,-1)}function xm(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=xC.bind(null,oe,t),[e.memoizedState,t]}function uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ty(){return vt().memoizedState}function Ta(t,e,n,r){var i=Mt();oe.flags|=t,i.memoizedState=uo(1|e,n,void 0,r===void 0?null:r)}function Ql(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Gh(r,o.deps)){i.memoizedState=uo(e,n,s,r);return}}oe.flags|=t,i.memoizedState=uo(1|e,n,s,r)}function Em(t,e){return Ta(8390656,8,t,e)}function Yh(t,e){return Ql(2048,8,t,e)}function ky(t,e){return Ql(4,2,t,e)}function Ny(t,e){return Ql(4,4,t,e)}function Ry(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Py(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,Ry.bind(null,e,t),n)}function Xh(){}function Ay(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Oy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ly(t,e,n){return Lr&21?(At(n,e)||(n=Uv(),oe.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function yC(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{q=n,Xc.transition=r}}function Dy(){return vt().memoizedState}function wC(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jy(t))My(e,n);else if(n=_y(t,e,n,r),n!==null){var i=Fe();Rt(n,t,r,i),Fy(n,e,r)}}function xC(t,e,n){var r=Hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jy(t))My(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,Wh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=_y(t,e,i,r),n!==null&&(i=Fe(),Rt(n,t,r,i),Fy(n,e,r))}}function jy(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function My(t,e){Ls=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kh(t,n)}}var il={readContext:_t,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},EC={readContext:_t,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:Em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,Ry.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wC.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:xm,useDebugValue:Xh,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=xm(!1),e=t[0];return t=yC.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Mt();if(re){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),be===null)throw Error(C(349));Lr&30||Ey(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Em(Cy.bind(null,r,s,t),[t]),r.flags|=2048,uo(9,Sy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mt(),e=be.identifierPrefix;if(re){var n=tn,r=en;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SC={readContext:_t,useCallback:Ay,useContext:_t,useEffect:Yh,useImperativeHandle:Py,useInsertionEffect:ky,useLayoutEffect:Ny,useMemo:Oy,useReducer:Jc,useRef:Ty,useState:function(){return Jc(co)},useDebugValue:Xh,useDeferredValue:function(t){var e=vt();return Ly(e,_e.memoizedState,t)},useTransition:function(){var t=Jc(co)[0],e=vt().memoizedState;return[t,e]},useMutableSource:wy,useSyncExternalStore:xy,useId:Dy,unstable_isNewReconciler:!1},CC={readContext:_t,useCallback:Ay,useContext:_t,useEffect:Yh,useImperativeHandle:Py,useInsertionEffect:ky,useLayoutEffect:Ny,useMemo:Oy,useReducer:Zc,useRef:Ty,useState:function(){return Zc(co)},useDebugValue:Xh,useDeferredValue:function(t){var e=vt();return _e===null?e.memoizedState=t:Ly(e,_e.memoizedState,t)},useTransition:function(){var t=Zc(co)[0],e=vt().memoizedState;return[t,e]},useMutableSource:wy,useSyncExternalStore:xy,useId:Dy,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Hn(t),s=an(r,i);s.payload=e,n!=null&&(s.callback=n),e=$n(t,s,i),e!==null&&(Rt(e,t,i,r),ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Hn(t),s=an(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$n(t,s,i),e!==null&&(Rt(e,t,i,r),ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=Hn(t),i=an(n,r);i.tag=2,e!=null&&(i.callback=e),e=$n(t,i,r),e!==null&&(Rt(e,t,r,n),ba(e,t,r))}};function Sm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,r)||!no(i,s):!0}function Uy(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=Ke(e)?Ar:De.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$h(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=Ke(e)?Ar:De.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ld(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yl.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ui(t,e){try{var n="",r=e;do n+=JE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bC=typeof WeakMap=="function"?WeakMap:Map;function zy(t,e,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,wd=r),ud(t,e)},n}function By(t,e,n){n=an(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UC.bind(null,t,e,n),e.then(t,t))}function Im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=an(-1,1),e.tag=2,$n(n,e,1))),n.lanes|=1),t)}var IC=wn.ReactCurrentOwner,Ve=!1;function Me(t,e,n,r){e.child=t===null?gy(e,null,n,r):Mi(e,t.child,n,r)}function km(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=Kh(t,e,n,r,s,i),n=Qh(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(re&&n&&jh(e),e.flags|=1,Me(t,e,r,i),e.child)}function Nm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wy(t,e,s,r,i)):(t=Pa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Wy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(no(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,fn(t,e,i)}return dd(t,e,n,r,i)}function $y(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(gi,tt),tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(gi,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(gi,tt),tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(gi,tt),tt|=r;return Me(t,e,i,n),e.child}function Vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,r,i){var s=Ke(n)?Ar:De.current;return s=Di(e,s),bi(e,i),n=Kh(t,e,n,r,s,i),r=Qh(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(re&&r&&jh(e),e.flags|=1,Me(t,e,n,i),e.child)}function Rm(t,e,n,r,i){if(Ke(n)){var s=!0;Ya(e)}else s=!1;if(bi(e,i),e.stateNode===null)ka(t,e),Uy(e,n,r),cd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=Ke(n)?Ar:De.current,c=Di(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Cm(e,o,r,c),kn=!1;var f=e.memoizedState;o.state=f,tl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ge.current||kn?(typeof h=="function"&&(ld(e,n,h,r),l=e.memoizedState),(a=kn||Sm(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:xt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=Ke(n)?Ar:De.current,l=Di(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Cm(e,o,r,l),kn=!1,f=e.memoizedState,o.state=f,tl(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||Ge.current||kn?(typeof p=="function"&&(ld(e,n,p,r),_=e.memoizedState),(c=kn||Sm(e,n,c,r,f,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return hd(t,e,n,r,s,i)}function hd(t,e,n,r,i,s){Vy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mm(e,n,!1),fn(t,e,s);r=e.stateNode,IC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mi(e,t.child,null,s),e.child=Mi(e,null,a,s)):Me(t,e,a,s),e.memoizedState=r.state,i&&mm(e,n,!0),e.child}function Hy(t){var e=t.stateNode;e.pendingContext?pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(t,e.context,!1),Vh(t,e.containerInfo)}function Pm(t,e,n,r,i){return ji(),Fh(i),e.flags|=256,Me(t,e,n,r),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qy(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(se,i&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zl(o,r,0,null),t=kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pd(n),e.memoizedState=fd,t):Jh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qn(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fd,r}return s=t.child,t=s.sibling,r=qn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ua(t,e,n,r){return r!==null&&Fh(r),Mi(e,t.child,null,n),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=eu(Error(C(422))),ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zl({mode:"visible",children:r.children},i,0,null),s=kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mi(e,t.child,null,o),e.child.memoizedState=pd(o),e.memoizedState=fd,s);if(!(e.mode&1))return ua(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=eu(s,r,void 0),ua(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ve||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hn(t,i),Rt(r,t,i,-1))}return sf(),r=eu(Error(C(421))),ua(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=Wn(i.nextSibling),it=e,re=!0,St=null,t!==null&&(ft[pt++]=en,ft[pt++]=tn,ft[pt++]=Or,en=t.id,tn=t.overflow,Or=e),e=Jh(e,r.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ad(t.return,e,n)}function tu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kC(t,e,n){switch(e.tag){case 3:Hy(e),ji();break;case 5:yy(e);break;case 1:Ke(e.type)&&Ya(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?qy(t,e,n):(Y(se,se.current&1),t=fn(t,e,n),t!==null?t.sibling:null);Y(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,$y(t,e,n)}return fn(t,e,n)}var Ky,md,Qy,Yy;Ky=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};Qy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(Vt.current);var s=null;switch(n){case"input":i=Mu(t,i),r=Mu(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=zu(t,i),r=zu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ka)}Wu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NC(t,e,n){var r=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ke(e.type)&&Qa(),Pe(e),null;case 3:return r=e.stateNode,Fi(),Z(Ge),Z(De),qh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,St!==null&&(Sd(St),St=null))),md(t,e),Pe(e),null;case 5:Hh(e);var i=Er(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Qy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Pe(e),null}if(t=Er(Vt.current),la(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ut]=e,r[so]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Cs.length;i++)X(Cs[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Bp(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":$p(r,s),X("invalid",r)}Wu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,a,t),i=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Zo(r),Wp(r,s,!0);break;case"textarea":Zo(r),Vp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ka)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ut]=e,t[so]=r,Ky(t,e,!1,!1),e.stateNode=t;e:{switch(o=$u(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<Cs.length;i++)X(Cs[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Bp(t,r),i=Mu(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),X("invalid",t);break;case"textarea":$p(t,r),i=zu(t,r),X("invalid",t);break;default:i=r}Wu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&Eh(t,s,l,o))}switch(n){case"input":Zo(t),Wp(t,r,!1);break;case"textarea":Zo(t),Vp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Yy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Er(ao.current),Er(Vt.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ut]=e,(s=r.nodeValue!==n)&&(t=it,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=e,e.stateNode=r}return Pe(e),null;case 13:if(Z(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&nt!==null&&e.mode&1&&!(e.flags&128))py(),ji(),e.flags|=98560,s=!1;else if(s=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ut]=e}else ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else St!==null&&(Sd(St),St=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ye===0&&(ye=3):sf())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Fi(),md(t,e),t===null&&ro(e.stateNode.containerInfo),Pe(e),null;case 10:return Bh(e.type._context),Pe(e),null;case 17:return Ke(e.type)&&Qa(),Pe(e),null;case 19:if(Z(se),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>zi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Pe(e),null}else 2*he()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,Y(se,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tt&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function RC(t,e){switch(Mh(e),e.tag){case 1:return Ke(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(),Z(Ge),Z(De),qh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(Z(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(se),null;case 4:return Fi(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var da=!1,Oe=!1,PC=typeof WeakSet=="function"?WeakSet:Set,N=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function gd(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Om=!1;function AC(t,e){if(Zu=Ha,t=ty(),Dh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++h===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},Ha=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,w=_.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:xt(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=Om,Om=!1,_}function Ds(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gd(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xy(t){var e=t.alternate;e!==null&&(t.alternate=null,Xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ut],delete e[so],delete e[rd],delete e[pC],delete e[mC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jy(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(r!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var Ie=null,Et=!1;function Cn(t,e,n){for(n=n.child;n!==null;)Zy(t,e,n),n=n.sibling}function Zy(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Oe||mi(n,e);case 6:var r=Ie,i=Et;Ie=null,Cn(t,e,n),Ie=r,Et=i,Ie!==null&&(Et?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Et?(t=Ie,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),eo(t)):Kc(Ie,n.stateNode));break;case 4:r=Ie,i=Et,Ie=n.stateNode.containerInfo,Et=!0,Cn(t,e,n),Ie=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gd(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Oe&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Cn(t,e,n),Oe=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function Dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PC),e.forEach(function(r){var i=BC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,Et=!1;break e;case 3:Ie=a.stateNode.containerInfo,Et=!0;break e;case 4:Ie=a.stateNode.containerInfo,Et=!0;break e}a=a.return}if(Ie===null)throw Error(C(160));Zy(s,o,i),Ie=null,Et=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e0(e,t),e=e.sibling}function e0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),jt(t),r&4){try{Ds(3,t,t.return),Xl(3,t)}catch(y){ce(t,t.return,y)}try{Ds(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:wt(e,t),jt(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(wt(e,t),jt(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{Ys(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ev(i,s),$u(a,o);var c=$u(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Tv(i,d):h==="dangerouslySetInnerHTML"?bv(i,d):h==="children"?Ys(i,d):Eh(i,h,d,c)}switch(a){case"input":Fu(i,s);break;case"textarea":Sv(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[so]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(wt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(wt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:wt(e,t),jt(t);break;case 13:wt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=he())),r&4&&Dm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(c=Oe)||h,wt(e,t),Oe=c):wt(e,t),jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(N=t,h=t.child;h!==null;){for(d=N=h;N!==null;){switch(f=N,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ds(4,f,f.return);break;case 1:mi(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:mi(f,f.return);break;case 22:if(f.memoizedState!==null){Mm(d);continue}}p!==null?(p.return=f,N=p):Mm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Iv("display",o))}catch(y){ce(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){ce(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wt(e,t),jt(t),r&4&&Dm(t);break;case 21:break;default:wt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jy(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var s=Lm(t);yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lm(t);vd(t,a,o);break;default:throw Error(C(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OC(t,e,n){N=t,t0(t)}function t0(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||da;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Oe;a=da;var c=Oe;if(da=o,(Oe=l)&&!c)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Fm(i):l!==null?(l.return=o,N=l):Fm(i);for(;s!==null;)N=s,t0(s),s=s.sibling;N=i,da=a,Oe=c}jm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):jm(t)}}function jm(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&eo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Oe||e.flags&512&&_d(e)}catch(f){ce(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Mm(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Fm(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{_d(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{_d(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var LC=Math.ceil,sl=wn.ReactCurrentDispatcher,Zh=wn.ReactCurrentOwner,gt=wn.ReactCurrentBatchConfig,$=0,be=null,ge=null,ke=0,tt=0,gi=sr(0),ye=0,ho=null,Dr=0,Jl=0,ef=0,js=null,$e=null,tf=0,zi=1/0,Xt=null,ol=!1,wd=null,Vn=null,ha=!1,jn=null,al=0,Ms=0,xd=null,Na=-1,Ra=0;function Fe(){return $&6?he():Na!==-1?Na:Na=he()}function Hn(t){return t.mode&1?$&2&&ke!==0?ke&-ke:_C.transition!==null?(Ra===0&&(Ra=Uv()),Ra):(t=q,t!==0||(t=window.event,t=t===void 0?16:qv(t.type)),t):1}function Rt(t,e,n,r){if(50<Ms)throw Ms=0,xd=null,Error(C(185));Ro(t,n,r),(!($&2)||t!==be)&&(t===be&&(!($&2)&&(Jl|=n),ye===4&&Rn(t,ke)),Qe(t,r),n===1&&$===0&&!(e.mode&1)&&(zi=he()+500,Kl&&or()))}function Qe(t,e){var n=t.callbackNode;_S(t,e);var r=Va(t,t===be?ke:0);if(r===0)n!==null&&Gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gp(n),e===1)t.tag===0?gC(Um.bind(null,t)):dy(Um.bind(null,t)),hC(function(){!($&6)&&or()}),n=null;else{switch(zv(r)){case 1:n=Th;break;case 4:n=Mv;break;case 16:n=$a;break;case 536870912:n=Fv;break;default:n=$a}n=c0(n,n0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n0(t,e){if(Na=-1,Ra=0,$&6)throw Error(C(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=Va(t,t===be?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var i=$;$|=2;var s=i0();(be!==t||ke!==e)&&(Xt=null,zi=he()+500,Tr(t,e));do try{MC();break}catch(a){r0(t,a)}while(!0);zh(),sl.current=s,$=i,ge!==null?e=0:(be=null,ke=0,e=ye)}if(e!==0){if(e===2&&(i=Ku(t),i!==0&&(r=i,e=Ed(t,i))),e===1)throw n=ho,Tr(t,0),Rn(t,r),Qe(t,he()),n;if(e===6)Rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!DC(i)&&(e=ll(t,r),e===2&&(s=Ku(t),s!==0&&(r=s,e=Ed(t,s))),e===1))throw n=ho,Tr(t,0),Rn(t,r),Qe(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:mr(t,$e,Xt);break;case 3:if(Rn(t,r),(r&130023424)===r&&(e=tf+500-he(),10<e)){if(Va(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nd(mr.bind(null,t,$e,Xt),e);break}mr(t,$e,Xt);break;case 4:if(Rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LC(r/1960))-r,10<r){t.timeoutHandle=nd(mr.bind(null,t,$e,Xt),r);break}mr(t,$e,Xt);break;case 5:mr(t,$e,Xt);break;default:throw Error(C(329))}}}return Qe(t,he()),t.callbackNode===n?n0.bind(null,t):null}function Ed(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=$e,$e=n,e!==null&&Sd(e)),t}function Sd(t){$e===null?$e=t:$e.push.apply($e,t)}function DC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e){for(e&=~ef,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function Um(t){if($&6)throw Error(C(327));Ii();var e=Va(t,0);if(!(e&1))return Qe(t,he()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=Ku(t);r!==0&&(e=r,n=Ed(t,r))}if(n===1)throw n=ho,Tr(t,0),Rn(t,e),Qe(t,he()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,$e,Xt),Qe(t,he()),null}function nf(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(zi=he()+500,Kl&&or())}}function jr(t){jn!==null&&jn.tag===0&&!($&6)&&Ii();var e=$;$|=1;var n=gt.transition,r=q;try{if(gt.transition=null,q=1,t)return t()}finally{q=r,gt.transition=n,$=e,!($&6)&&or()}}function rf(){tt=gi.current,Z(gi)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dC(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Fi(),Z(Ge),Z(De),qh();break;case 5:Hh(r);break;case 4:Fi();break;case 13:Z(se);break;case 19:Z(se);break;case 10:Bh(r.type._context);break;case 22:case 23:rf()}n=n.return}if(be=t,ge=t=qn(t.current,null),ke=tt=e,ye=0,ho=null,ef=Jl=Dr=0,$e=js=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xr=null}return t}function r0(t,e){do{var n=ge;try{if(zh(),Ia.current=il,rl){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(Lr=0,Ee=_e=oe=null,Ls=!1,lo=0,Zh.current=null,n===null||n.return===null){ye=1,ho=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Im(o);if(p!==null){p.flags&=-257,Tm(p,o,a,s,e),p.mode&1&&bm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){bm(s,c,e),sf();break e}l=Error(C(426))}}else if(re&&a.mode&1){var w=Im(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Tm(w,o,a,s,e),Fh(Ui(l,a));break e}}s=l=Ui(l,a),ye!==4&&(ye=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=zy(s,l,e);ym(s,g);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vn===null||!Vn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=By(s,a,e);ym(s,E);break e}}s=s.return}while(s!==null)}o0(n)}catch(S){e=S,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function i0(){var t=sl.current;return sl.current=il,t===null?il:t}function sf(){(ye===0||ye===3||ye===2)&&(ye=4),be===null||!(Dr&268435455)&&!(Jl&268435455)||Rn(be,ke)}function ll(t,e){var n=$;$|=2;var r=i0();(be!==t||ke!==e)&&(Xt=null,Tr(t,e));do try{jC();break}catch(i){r0(t,i)}while(!0);if(zh(),$=n,sl.current=r,ge!==null)throw Error(C(261));return be=null,ke=0,ye}function jC(){for(;ge!==null;)s0(ge)}function MC(){for(;ge!==null&&!lS();)s0(ge)}function s0(t){var e=l0(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?o0(t):ge=e,Zh.current=null}function o0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RC(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,ge=null;return}}else if(n=NC(n,e,tt),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);ye===0&&(ye=5)}function mr(t,e,n){var r=q,i=gt.transition;try{gt.transition=null,q=1,FC(t,e,n,r)}finally{gt.transition=i,q=r}return null}function FC(t,e,n,r){do Ii();while(jn!==null);if($&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vS(t,s),t===be&&(ge=be=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,c0($a,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gt.transition,gt.transition=null;var o=q;q=1;var a=$;$|=4,Zh.current=null,AC(t,n),e0(n,t),iC(ed),Ha=!!Zu,ed=Zu=null,t.current=n,OC(n),cS(),$=a,q=o,gt.transition=s}else t.current=n;if(ha&&(ha=!1,jn=t,al=i),s=t.pendingLanes,s===0&&(Vn=null),hS(n.stateNode),Qe(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=wd,wd=null,t;return al&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===xd?Ms++:(Ms=0,xd=t):Ms=0,or(),null}function Ii(){if(jn!==null){var t=zv(al),e=gt.transition,n=q;try{if(gt.transition=null,q=16>t?16:t,jn===null)var r=!1;else{if(t=jn,jn=null,al=0,$&6)throw Error(C(331));var i=$;for($|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Ds(8,h,s)}var d=h.child;if(d!==null)d.return=h,N=d;else for(;N!==null;){h=N;var f=h.sibling,p=h.return;if(Xy(h),h===c){N=null;break}if(f!==null){f.return=p,N=f;break}N=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ds(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,N=g;break e}N=s.return}}var m=t.current;for(N=m;N!==null;){o=N;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,N=v;else e:for(o=m;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(S){ce(a,a.return,S)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if($=i,or(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{q=n,gt.transition=e}}return!1}function zm(t,e,n){e=Ui(n,e),e=zy(t,e,1),t=$n(t,e,1),e=Fe(),t!==null&&(Ro(t,1,e),Qe(t,e))}function ce(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){t=Ui(n,t),t=By(e,t,1),e=$n(e,t,1),t=Fe(),e!==null&&(Ro(e,1,t),Qe(e,t));break}}e=e.return}}function UC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ke&n)===n&&(ye===4||ye===3&&(ke&130023424)===ke&&500>he()-tf?Tr(t,0):ef|=n),Qe(t,e)}function a0(t,e){e===0&&(t.mode&1?(e=na,na<<=1,!(na&130023424)&&(na=4194304)):e=1);var n=Fe();t=hn(t,e),t!==null&&(Ro(t,e,n),Qe(t,n))}function zC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a0(t,n)}function BC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),a0(t,n)}var l0;l0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,kC(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,re&&e.flags&1048576&&hy(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ka(t,e),t=e.pendingProps;var i=Di(e,De.current);bi(e,n),i=Kh(null,e,r,t,i,n);var s=Qh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Ya(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$h(e),i.updater=Yl,e.stateNode=i,i._reactInternals=e,cd(e,r,t,n),e=hd(null,e,r,!0,s,n)):(e.tag=0,re&&s&&jh(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$C(r),t=xt(r,t),i){case 0:e=dd(null,e,r,t,n);break e;case 1:e=Rm(null,e,r,t,n);break e;case 11:e=km(null,e,r,t,n);break e;case 14:e=Nm(null,e,r,xt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),dd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Rm(t,e,r,i,n);case 3:e:{if(Hy(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vy(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ui(Error(C(423)),e),e=Pm(t,e,r,n,i);break e}else if(r!==i){i=Ui(Error(C(424)),e),e=Pm(t,e,r,n,i);break e}else for(nt=Wn(e.stateNode.containerInfo.firstChild),it=e,re=!0,St=null,n=gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){e=fn(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return yy(e),t===null&&od(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,td(r,i)?o=null:s!==null&&td(r,s)&&(e.flags|=32),Vy(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&od(e),null;case 13:return qy(t,e,n);case 4:return Vh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mi(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),km(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(Za,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!Ge.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=an(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ad(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ad(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=_t(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),Nm(t,e,r,i,n);case 15:return Wy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),ka(t,e),e.tag=1,Ke(r)?(t=!0,Ya(e)):t=!1,bi(e,n),Uy(e,r,i),cd(e,r,i,n),hd(null,e,r,!0,t,n);case 19:return Gy(t,e,n);case 22:return $y(t,e,n)}throw Error(C(156,e.tag))};function c0(t,e){return jv(t,e)}function WC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new WC(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $C(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===bh)return 14}return 2}function qn(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return kr(n.children,i,s,e);case Sh:o=8,i|=8;break;case Ou:return t=mt(12,n,e,i|2),t.elementType=Ou,t.lanes=s,t;case Lu:return t=mt(13,n,e,i),t.elementType=Lu,t.lanes=s,t;case Du:return t=mt(19,n,e,i),t.elementType=Du,t.lanes=s,t;case yv:return Zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case vv:o=9;break e;case Ch:o=11;break e;case bh:o=14;break e;case Tn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kr(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function Zl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=yv,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,i,s,o,a,l){return t=new VC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(s),t}function HC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return Jn;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ke(n))return uy(t,n,e)}return e}function d0(t,e,n,r,i,s,o,a,l){return t=af(n,r,!0,t,i,s,o,a,l),t.context=u0(null),n=t.current,r=Fe(),i=Hn(n),s=an(r,i),s.callback=e??null,$n(n,s,i),t.current.lanes=i,Ro(t,i,r),Qe(t,r),t}function ec(t,e,n,r){var i=e.current,s=Fe(),o=Hn(i);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=an(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$n(i,e,o),t!==null&&(Rt(t,i,o,s),ba(t,i,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function qC(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}tc.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));ec(t,e,null,null)};tc.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){ec(null,t,null,null)}),e[dn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nn.length&&e!==0&&e<Nn[n].priority;n++);Nn.splice(n,0,t),n===0&&Hv(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function GC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cl(o);s.call(c)}}var o=d0(e,r,t,0,null,!1,!1,"",Wm);return t._reactRootContainer=o,t[dn]=o.current,ro(t.nodeType===8?t.parentNode:t),jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cl(l);a.call(c)}}var l=af(t,0,!1,null,null,!1,!1,"",Wm);return t._reactRootContainer=l,t[dn]=l.current,ro(t.nodeType===8?t.parentNode:t),jr(function(){ec(e,l,n,r)}),l}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cl(o);a.call(l)}}ec(e,o,t,i)}else o=GC(n,e,t,i,r);return cl(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(kh(e,n|1),Qe(e,he()),!($&6)&&(zi=he()+500,or()))}break;case 13:jr(function(){var r=hn(t,1);if(r!==null){var i=Fe();Rt(r,t,1,i)}}),lf(t,1)}};Nh=function(t){if(t.tag===13){var e=hn(t,134217728);if(e!==null){var n=Fe();Rt(e,t,134217728,n)}lf(t,134217728)}};Wv=function(t){if(t.tag===13){var e=Hn(t),n=hn(t,e);if(n!==null){var r=Fe();Rt(n,t,e,r)}lf(t,e)}};$v=function(){return q};Vv=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};Hu=function(t,e,n){switch(e){case"input":if(Fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gl(r);if(!i)throw Error(C(90));xv(r),Fu(r,i)}}}break;case"textarea":Sv(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};Rv=nf;Pv=jr;var KC={usingClientEntryPoint:!1,Events:[Ao,ui,Gl,kv,Nv,nf]},ms={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QC={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||qC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{$l=fa.inject(QC),$t=fa}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(C(200));return HC(t,e,null,n)};ut.createRoot=function(t,e){if(!uf(t))throw Error(C(299));var n=!1,r="",i=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,i),t[dn]=e.current,ro(t.nodeType===8?t.parentNode:t),new cf(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return jr(t)};ut.hydrate=function(t,e,n){if(!nc(e))throw Error(C(200));return rc(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!uf(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=d0(e,null,t,1,n??null,i,!1,s,o),t[dn]=e.current,ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tc(e)};ut.render=function(t,e,n){if(!nc(e))throw Error(C(200));return rc(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!nc(t))throw Error(C(40));return t._reactRootContainer?(jr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};ut.unstable_batchedUpdates=nf;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return rc(t,e,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(t){console.error(t)}}f0(),fv.exports=ut;var YC=fv.exports,$m=YC;Pu.createRoot=$m.createRoot,Pu.hydrateRoot=$m.hydrateRoot;var Vm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Yi(e)},Yi=function(t){return new Error("Firebase Database ("+p0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[h],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new JC;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const _=c<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g0=function(t){const e=m0(t);return df.encodeByteArray(e,!0)},ul=function(t){return g0(t).replace(/\./g,"")},dl=function(t){try{return df.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return _0(void 0,t)}function _0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eb(n)||(t[n]=_0(t[n],e[n]));return t}function eb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=()=>tb().__FIREBASE_DEFAULTS__,rb=()=>{if(typeof process>"u"||typeof Vm>"u")return;const t=Vm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ib=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dl(t[1]);return e&&JSON.parse(e)},hf=()=>{try{return nb()||rb()||ib()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v0=t=>{var e,n;return(n=(e=hf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},y0=t=>{const e=v0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w0=()=>{var t;return(t=hf())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=hf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ul(JSON.stringify(n)),ul(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ob(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b0(){return p0.NODE_ADMIN===!0}function I0(){try{return typeof indexedDB=="object"}catch{return!1}}function T0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ab(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lb,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dt(i,a,r)}}function cb(t,e){return t.replace(ub,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ub=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fo(dl(s[0])||""),n=fo(dl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},db=function(t){const e=k0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hb=function(t){const e=k0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hm(s)&&Hm(o)){if(!po(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):d<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const f=(i<<5|i>>>27)+c+l+h+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function pb(t,e){const n=new mb(t,e);return n.subscribe.bind(n)}class mb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=iu),i.error===void 0&&(i.error=iu),i.complete===void 0&&(i.complete=iu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function iu(){}function pf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=1e3,yb=2,wb=4*60*60*1e3,xb=.5;function qm(t,e=vb,n=yb){const r=e*Math.pow(n,t),i=Math.round(xb*r*(Math.random()-.5)*2);return Math.min(wb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ic;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cb(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sb(t){return t===gr?void 0:t}function Cb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Ib={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Tb=G.INFO,kb={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Nb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=Tb,this._logHandler=Nb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ib[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Rb=(t,e)=>e.some(n=>t instanceof n);let Gm,Km;function Pb(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ab(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,bd=new WeakMap,R0=new WeakMap,su=new WeakMap,mf=new WeakMap;function Ob(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N0.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function Lb(t){if(bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bd.set(t,e)}let Id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Db(t){Id=t(Id)}function jb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ou(this),e,...n);return R0.set(r,e.sort?e.sort():[e]),Gn(r)}:Ab().includes(t)?function(...e){return t.apply(ou(this),e),Gn(N0.get(this))}:function(...e){return Gn(t.apply(ou(this),e))}}function Mb(t){return typeof t=="function"?jb(t):(t instanceof IDBTransaction&&Lb(t),Rb(t,Pb())?new Proxy(t,Id):t)}function Gn(t){if(t instanceof IDBRequest)return Ob(t);if(su.has(t))return su.get(t);const e=Mb(t);return e!==t&&(su.set(t,e),mf.set(e,t)),e}const ou=t=>mf.get(t);function P0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Fb=["get","getKey","getAll","getAllKeys","count"],Ub=["put","add","delete","clear"],au=new Map;function Qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(au.get(e))return au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ub.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return au.set(e,s),s}Db(t=>({...t,get:(e,n,r)=>Qm(e,n)||t.get(e,n,r),has:(e,n)=>!!Qm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",Ym="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new oc("@firebase/app"),Wb="@firebase/app-compat",$b="@firebase/analytics-compat",Vb="@firebase/analytics",Hb="@firebase/app-check-compat",qb="@firebase/app-check",Gb="@firebase/auth",Kb="@firebase/auth-compat",Qb="@firebase/database",Yb="@firebase/data-connect",Xb="@firebase/database-compat",Jb="@firebase/functions",Zb="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",iI="@firebase/performance",sI="@firebase/performance-compat",oI="@firebase/remote-config",aI="@firebase/remote-config-compat",lI="@firebase/storage",cI="@firebase/storage-compat",uI="@firebase/firestore",dI="@firebase/vertexai",hI="@firebase/firestore-compat",fI="firebase",pI="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="[DEFAULT]",mI={[Td]:"fire-core",[Wb]:"fire-core-compat",[Vb]:"fire-analytics",[$b]:"fire-analytics-compat",[qb]:"fire-app-check",[Hb]:"fire-app-check-compat",[Gb]:"fire-auth",[Kb]:"fire-auth-compat",[Qb]:"fire-rtdb",[Yb]:"fire-data-connect",[Xb]:"fire-rtdb-compat",[Jb]:"fire-fn",[Zb]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[iI]:"fire-perf",[sI]:"fire-perf-compat",[oI]:"fire-rc",[aI]:"fire-rc-compat",[lI]:"fire-gcs",[cI]:"fire-gcs-compat",[uI]:"fire-fst",[hI]:"fire-fst-compat",[dI]:"fire-vertex","fire-js":"fire-js",[fI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map,gI=new Map,Nd=new Map;function Xm(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(Nd.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Nd.set(e,t);for(const n of fl.values())Xm(n,t);for(const n of gI.values())Xm(n,t);return!0}function ar(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Xr("app","Firebase",_I);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=pI;function A0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=w0()),!n)throw Kn.create("no-options");const s=fl.get(i);if(s){if(po(n,s.options)&&po(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const o=new bb(i);for(const l of Nd.values())o.addComponent(l);const a=new vI(n,r,o);return fl.set(i,a),a}function ac(t=kd){const e=fl.get(t);if(!e&&t===kd&&w0())return A0();if(!e)throw Kn.create("no-app",{appName:t});return e}function Ye(t,e,n){var r;let i=(r=mI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}Ot(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firebase-heartbeat-database",wI=1,mo="firebase-heartbeat-store";let lu=null;function O0(){return lu||(lu=P0(yI,wI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),lu}async function xI(t){try{const n=(await O0()).transaction(mo),r=await n.objectStore(mo).get(L0(t));return await n.done,r}catch(e){if(e instanceof Dt)pn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function Jm(t,e){try{const r=(await O0()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,L0(t)),await r.done}catch(n){if(n instanceof Dt)pn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function L0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=1024,SI=30*24*60*60*1e3;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new II(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zm(),{heartbeatsToSend:r,unsentEntries:i}=bI(this._heartbeatsCache.heartbeats),s=ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pn.warn(n),""}}}function Zm(){return new Date().toISOString().substring(0,10)}function bI(t,e=EI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),eg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),eg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class II{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I0()?T0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function eg(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){Ot(new yt("platform-logger",e=>new zb(e),"PRIVATE")),Ot(new yt("heartbeat",e=>new CI(e),"PRIVATE")),Ye(Td,Ym,t),Ye(Td,Ym,"esm2017"),Ye("fire-js","")}TI("");var kI="firebase",NI="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(kI,NI,"app");const D0="@firebase/installations",gf="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=1e4,M0=`w:${gf}`,F0="FIS_v2",RI="https://firebaseinstallations.googleapis.com/v1",PI=60*60*1e3,AI="installations",OI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mr=new Xr(AI,OI,LI);function U0(t){return t instanceof Dt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0({projectId:t}){return`${RI}/projects/${t}/installations`}function B0(t){return{token:t.token,requestStatus:2,expiresIn:jI(t.expiresIn),creationTime:Date.now()}}async function W0(t,e){const r=(await e.json()).error;return Mr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DI(t,{refreshToken:e}){const n=$0(t);return n.append("Authorization",MI(e)),n}async function V0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jI(t){return Number(t.replace("s","000"))}function MI(t){return`${F0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=z0(t),i=$0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:F0,appId:t.appId,sdkVersion:M0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await V0(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:B0(c.authToken)}}else throw await W0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=/^[cdef][\w-]{21}$/,Rd="";function BI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WI(t);return zI.test(n)?n:Rd}catch{return Rd}}function WI(t){return UI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Map;function G0(t,e){const n=lc(t);K0(n,e),$I(n,e)}function K0(t,e){const n=q0.get(t);if(n)for(const r of n)r(e)}function $I(t,e){const n=VI();n&&n.postMessage({key:t,fid:e}),HI()}let Sr=null;function VI(){return!Sr&&"BroadcastChannel"in self&&(Sr=new BroadcastChannel("[Firebase] FID Change"),Sr.onmessage=t=>{K0(t.data.key,t.data.fid)}),Sr}function HI(){q0.size===0&&Sr&&(Sr.close(),Sr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebase-installations-database",GI=1,Fr="firebase-installations-store";let cu=null;function _f(){return cu||(cu=P0(qI,GI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fr)}}})),cu}async function pl(t,e){const n=lc(t),i=(await _f()).transaction(Fr,"readwrite"),s=i.objectStore(Fr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&G0(t,e.fid),e}async function Q0(t){const e=lc(t),r=(await _f()).transaction(Fr,"readwrite");await r.objectStore(Fr).delete(e),await r.done}async function cc(t,e){const n=lc(t),i=(await _f()).transaction(Fr,"readwrite"),s=i.objectStore(Fr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&G0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(t){let e;const n=await cc(t.appConfig,r=>{const i=KI(r),s=QI(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KI(t){const e=t||{fid:BI(),registrationStatus:0};return Y0(e)}function QI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=YI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XI(t)}:{installationEntry:e}}async function YI(t,e){try{const n=await FI(t,e);return pl(t.appConfig,n)}catch(n){throw U0(n)&&n.customData.serverCode===409?await Q0(t.appConfig):await pl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function XI(t){let e=await tg(t.appConfig);for(;e.registrationStatus===1;)await H0(100),e=await tg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vf(t);return r||n}return e}function tg(t){return cc(t,e=>{if(!e)throw Mr.create("installation-not-found");return Y0(e)})}function Y0(t){return JI(t)?{fid:t.fid,registrationStatus:0}:t}function JI(t){return t.registrationStatus===1&&t.registrationTime+j0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI({appConfig:t,heartbeatServiceProvider:e},n){const r=eT(t,n),i=DI(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:M0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await V0(()=>fetch(r,a));if(l.ok){const c=await l.json();return B0(c)}else throw await W0("Generate Auth Token",l)}function eT(t,{fid:e}){return`${z0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(t,e=!1){let n;const r=await cc(t.appConfig,s=>{if(!X0(s))throw Mr.create("not-registered");const o=s.authToken;if(!e&&rT(o))return s;if(o.requestStatus===1)return n=tT(t,e),s;{if(!navigator.onLine)throw Mr.create("app-offline");const a=sT(s);return n=nT(t,a),a}});return n?await n:r.authToken}async function tT(t,e){let n=await ng(t.appConfig);for(;n.authToken.requestStatus===1;)await H0(100),n=await ng(t.appConfig);const r=n.authToken;return r.requestStatus===0?yf(t,e):r}function ng(t){return cc(t,e=>{if(!X0(e))throw Mr.create("not-registered");const n=e.authToken;return oT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nT(t,e){try{const n=await ZI(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await pl(t.appConfig,r),n}catch(n){if(U0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Q0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pl(t.appConfig,r)}throw n}}function X0(t){return t!==void 0&&t.registrationStatus===2}function rT(t){return t.requestStatus===2&&!iT(t)}function iT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PI}function sT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function oT(t){return t.requestStatus===1&&t.requestTime+j0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t){const e=t,{installationEntry:n,registrationPromise:r}=await vf(e);return r?r.catch(console.error):yf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(t,e=!1){const n=t;return await cT(n),(await yf(n,e)).token}async function cT(t){const{registrationPromise:e}=await vf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){if(!t||!t.options)throw uu("App Configuration");if(!t.name)throw uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uu(t){return Mr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="installations",dT="installations-internal",hT=t=>{const e=t.getProvider("app").getImmediate(),n=uT(e),r=ar(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fT=t=>{const e=t.getProvider("app").getImmediate(),n=ar(e,J0).getImmediate();return{getId:()=>aT(n),getToken:i=>lT(n,i)}};function pT(){Ot(new yt(J0,hT,"PUBLIC")),Ot(new yt(dT,fT,"PRIVATE"))}pT();Ye(D0,gf);Ye(D0,gf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="analytics",mT="firebase_id",gT="origin",_T=60*1e3,vT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new Xr("analytics","Analytics",yT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){if(!t.startsWith(wf)){const e=st.create("invalid-gtag-resource",{gtagURL:t});return Xe.warn(e.message),""}return t}function Z0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ET(t,e){const n=xT("firebase-js-sdk-policy",{createScriptURL:wT}),r=document.createElement("script"),i=`${wf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ST(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function CT(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Z0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Xe.error(a)}t("config",i,s)}async function bT(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Z0(n);for(const l of o){const c=a.find(d=>d.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Xe.error(s)}}function IT(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await bT(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await CT(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Xe.error(a)}}return i}function TT(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=IT(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function kT(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=30,RT=1e3;class PT{constructor(e={},n=RT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ew=new PT;function AT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function OT(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:AT(r)},s=vT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function LT(t,e=ew,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw st.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw st.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new MT;return setTimeout(async()=>{a.abort()},_T),tw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function tw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ew){var s;const{appId:o,measurementId:a}=t;try{await DT(r,e)}catch(l){if(a)return Xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await OT(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!jT(c)){if(i.deleteThrottleMetadata(o),a)return Xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?qm(n,i.intervalMillis,NT):qm(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,d),Xe.debug(`Calling attemptFetch again in ${h} millis`),tw(t,d,r,i)}}function DT(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jT(t){if(!(t instanceof Dt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class MT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function FT(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(){if(I0())try{await T0()}catch(t){return Xe.warn(st.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Xe.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zT(t,e,n,r,i,s,o){var a;const l=LT(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Xe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Xe.error(p)),e.push(l);const c=UT().then(p=>{if(p)return r.getId()}),[h,d]=await Promise.all([l,c]);kT(s)||ET(s,h.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[gT]="firebase",f.update=!0,d!=null&&(f[mT]=d),i("config",h.measurementId,f),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.app=e}_delete(){return delete Fs[this.app.options.appId],Promise.resolve()}}let Fs={},rg=[];const ig={};let du="dataLayer",WT="gtag",sg,nw,og=!1;function $T(){const t=[];if(S0()&&t.push("This is a browser extension environment."),ab()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=st.create("invalid-analytics-context",{errorInfo:e});Xe.warn(n.message)}}function VT(t,e,n){$T();const r=t.options.appId;if(!r)throw st.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Fs[r]!=null)throw st.create("already-exists",{id:r});if(!og){ST(du);const{wrappedGtag:s,gtagCore:o}=TT(Fs,rg,ig,du,WT);nw=s,sg=o,og=!0}return Fs[r]=zT(t,rg,ig,e,sg,du,n),new BT(t)}function HT(t=ac()){t=ne(t);const e=ar(t,ml);return e.isInitialized()?e.getImmediate():qT(t)}function qT(t,e={}){const n=ar(t,ml);if(n.isInitialized()){const i=n.getImmediate();if(po(e,n.getOptions()))return i;throw st.create("already-initialized")}return n.initialize({options:e})}function GT(t,e,n,r){t=ne(t),FT(nw,Fs[t.app.options.appId],e,n,r).catch(i=>Xe.error(i))}const ag="@firebase/analytics",lg="0.10.9";function KT(){Ot(new yt(ml,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return VT(r,i,n)},"PUBLIC")),Ot(new yt("analytics-internal",t,"PRIVATE")),Ye(ag,lg),Ye(ag,lg,"esm2017");function t(e){try{const n=e.getProvider(ml).getImmediate();return{logEvent:(r,i,s)=>GT(n,r,i,s)}}catch(n){throw st.create("interop-component-reg-failed",{reason:n})}}}KT();function xf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QT=rw,iw=new Xr("auth","Firebase",rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new oc("@firebase/auth");function YT(t,...e){gl.logLevel<=G.WARN&&gl.warn(`Auth (${Jr}): ${t}`,...e)}function Aa(t,...e){gl.logLevel<=G.ERROR&&gl.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Ef(t,...e)}function Ht(t,...e){return Ef(t,...e)}function sw(t,e,n){const r=Object.assign(Object.assign({},QT()),{[e]:n});return new Xr("auth","Firebase",r).create(e,{appName:t.name})}function qt(t){return sw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iw.create(t,...e)}function A(t,e,...n){if(!t)throw Ef(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function mn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XT(){return cg()==="http:"||cg()==="https:"}function cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XT()||S0()||"connection"in navigator)?navigator.onLine:!0}function ZT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=ff()||C0()}get(){return JT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Lo(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yt(t,e,n,r,i={}){return aw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return sb()||(c.referrerPolicy="no-referrer"),ow.fetch()(lw(t,t.config.apiHost,n,a),c)})}async function aw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ek),e);try{const i=new rk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sw(t,h,c);Lt(t,h)}}catch(i){if(i instanceof Dt)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function Do(t,e,n,r,i={}){const s=await Yt(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sf(t.config,i):`${t.config.apiScheme}://${i}`}function nk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),tk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}function ug(t){return t!==void 0&&t.enterprise!==void 0}class ik{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sk(t,e){return Yt(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e){return Yt(t,"POST","/v1/accounts:delete",e)}async function cw(t,e){return Yt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ak(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=Cf(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(hu(i.auth_time)),issuedAtTime:Us(hu(i.iat)),expirationTime:Us(hu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hu(t){return Number(t)*1e3}function Cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=dl(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dg(t){const e=Cf(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&lk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ur(t,cw(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uw(s.providerUserInfo):[],a=dk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ad(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function uk(t){const e=ne(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uw(t){return t.map(e=>{var{providerId:n}=e,r=xf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e){const n=await aw(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ow.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fk(t,e){return Yt(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ti;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ad(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ak(this,e)}reload(){return uk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(qt(this.auth));const e=await this.getIdToken();return await Ur(this,ok(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:E,isAnonymous:S,providerData:I,stsTokenManager:T}=n;A(v&&T,e,"internal-error");const k=Ti.fromJSON(this.name,T);A(typeof v=="string",e,"internal-error"),bn(d,e.name),bn(f,e.name),A(typeof E=="boolean",e,"internal-error"),A(typeof S=="boolean",e,"internal-error"),bn(p,e.name),bn(_,e.name),bn(y,e.name),bn(w,e.name),bn(g,e.name),bn(m,e.name);const V=new rn({uid:v,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:S,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:k,createdAt:g,lastLoginAt:m});return I&&Array.isArray(I)&&(V.providerData=I.map(L=>Object.assign({},L))),w&&(V._redirectEventId=w),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ti;i.updateFromServerResponse(n);const s=new rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ti;a.updateFromIdToken(r);const l=new rn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ad(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function sn(t){mn(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dw.type="NONE";const fg=dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(sn(fg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||sn(fg);const o=Oa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=rn._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ki(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ki(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_w(e))return"Blackberry";if(vw(e))return"Webos";if(fw(e))return"Safari";if((e.includes("chrome/")||pw(e))&&!e.includes("edge/"))return"Chrome";if(gw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hw(t=Ue()){return/firefox\//i.test(t)}function fw(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pw(t=Ue()){return/crios\//i.test(t)}function mw(t=Ue()){return/iemobile/i.test(t)}function gw(t=Ue()){return/android/i.test(t)}function _w(t=Ue()){return/blackberry/i.test(t)}function vw(t=Ue()){return/webos/i.test(t)}function bf(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pk(t=Ue()){var e;return bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mk(){return ob()&&document.documentMode===10}function yw(t=Ue()){return bf(t)||gw(t)||vw(t)||_w(t)||/windows phone/i.test(t)||mw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e=[]){let n;switch(t){case"Browser":n=pg(Ue());break;case"Worker":n=`${pg(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e={}){return Yt(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=6;class yk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new gk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cw(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(qt(this));const n=e?ne(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _k(this),n=new yk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(t){return ne(t)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=pb(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xk(t){uc=t}function xw(t){return uc.loadJS(t)}function Ek(){return uc.recaptchaEnterpriseScript}function Sk(){return uc.gapiScript}function Ck(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bk{constructor(){this.enterprise=new Ik}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ik{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Tk="recaptcha-enterprise",Ew="NO_RECAPTCHA";class kk{constructor(e){this.type=Tk,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ik(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ew)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ug(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ek();l.length!==0&&(l+=a),xw(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function gg(t,e,n,r=!1,i=!1){const s=new kk(t);let o;if(i)o=Ew;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Od(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await gg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t,e){const n=ar(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(po(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function Rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pk(t,e,n){const r=Zr(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sw(e),{host:o,port:a}=Ak(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ok()}function Sw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ak(t){const e=Sw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_g(o)}}}function _g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ok(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function Lk(t,e){return Yt(t,"POST","/v1/accounts:update",e)}async function Dk(t,e){return Yt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Do(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function Fk(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends If{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Od(e,n,"signInWithPassword",jk);case"emailLink":return Mk(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Od(e,r,"signUpPassword",Dk);case"emailLink":return Fk(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return Do(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="http://localhost";class zr extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:Uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bk(t){const e=bs(Is(t)).link,n=e?bs(Is(e)).deep_link_id:null,r=bs(Is(t)).deep_link_id;return(r?bs(Is(r)).link:null)||r||n||e||t}class Tf{constructor(e){var n,r,i,s,o,a;const l=bs(Is(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=zk((i=l.mode)!==null&&i!==void 0?i:null);A(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bk(e);try{return new Tf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tf.parseLink(n);return A(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Cw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends jo{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends jo{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends jo{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Do(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rn._fromIdTokenResponse(e,r,i),o=vg(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vg(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Dt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function bw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function $k(t,e,n=!1){const r=await Ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(qt(r));const i="reauthenticate";try{const s=await Ur(t,bw(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Cf(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),Br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e,n=!1){if(bt(t.app))return Promise.reject(qt(t));const r="signIn",i=await bw(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Hk(t,e){return Iw(Zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qk(t,e,n){if(bt(t.app))return Promise.reject(qt(t));const r=Zr(t),o=await Od(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Tw(t),l}),a=await Br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kw(t,e,n){return bt(t.app)?Promise.reject(qt(t)):Hk(ne(t),Ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e){return Yt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ur(r,Gk(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kk(t,e){const n=ne(t);return bt(n.auth.app)?Promise.reject(qt(n.auth)):Nw(n,e,null)}function Qk(t,e){return Nw(ne(t),null,e)}async function Nw(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ur(t,Lk(r,s));await t._updateTokensIfNecessary(o,!0)}function Yk(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function Xk(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function Jk(t){return ne(t).signOut()}async function Zk(t){return ne(t).delete()}const yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=1e3,tN=10;class Pw extends Rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pw.type="LOCAL";const nN=Pw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Aw.type="SESSION";const Ow=Aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await rN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=kf("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function sN(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function oN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lN(){return Lw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebaseLocalStorageDb",cN=1,wl="firebaseLocalStorage",jw="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hc(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function uN(){const t=indexedDB.deleteDatabase(Dw);return new Mo(t).toPromise()}function Ld(){const t=indexedDB.open(Dw,cN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:jw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await uN(),e(await Ld()))})})}async function yg(t,e,n){const r=hc(t,!0).put({[jw]:e,value:n});return new Mo(r).toPromise()}async function dN(t,e){const n=hc(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function wg(t,e){const n=hc(t,!0).delete(e);return new Mo(n).toPromise()}const hN=800,fN=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(lN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oN(),!this.activeServiceWorker)return;this.sender=new iN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await yg(e,yl,"1"),await wg(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hc(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const pN=Mw;new Lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t,e){return e?sn(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gN(t){return Iw(t.auth,new Nf(t),t.bypassAuthState)}function _N(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Vk(n,new Nf(t),t.bypassAuthState)}async function vN(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),$k(n,new Nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gN;case"linkViaPopup":case"linkViaRedirect":return vN;case"reauthViaPopup":case"reauthViaRedirect":return _N;default:Lt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new Lo(2e3,1e4);class _i extends Fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yN.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="pendingRedirect",Da=new Map;class xN extends Fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await EN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EN(t,e){const n=bN(e),r=CN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SN(t,e){Da.set(t._key(),e)}function CN(t){return sn(t._redirectPersistence)}function bN(t){return Oa(wN,t.config.apiKey,t.name)}async function IN(t,e,n=!1){if(bt(t.app))return Promise.reject(qt(t));const r=Zr(t),i=mN(r,e),o=await new xN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=10*60*1e3;class kN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e={}){return Yt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AN=/^https?/;async function ON(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RN(t);for(const n of e)try{if(LN(n))return}catch{}Lt(t,"unauthorized-domain")}function LN(t){const e=Pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AN.test(n))return!1;if(PN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=new Lo(3e4,6e4);function Eg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jN(t){return new Promise((e,n)=>{var r,i,s;function o(){Eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eg(),n(Ht(t,"network-request-failed"))},timeout:DN.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const a=Ck("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},xw(`${Sk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ja=null,e})}let ja=null;function MN(t){return ja=ja||jN(t),ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Lo(5e3,15e3),UN="__/auth/iframe",zN="emulator/auth/iframe",BN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $N(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,zN):`https://${t.config.authDomain}/${UN}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},i=WN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xi(r).slice(1)}`}async function VN(t){const e=await MN(t),n=Gt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:$N(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(o)},FN.get());function l(){Gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,GN=600,KN="_blank",QN="http://localhost";class Sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YN(t,e,n,r=qN,i=GN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ue().toLowerCase();n&&(a=pw(c)?KN:n),hw(c)&&(e=e||QN,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(pk(c)&&a!=="_self")return XN(e||"",a),new Sg(null);const d=window.open(e||"",a,h);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Sg(d)}function XN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="__/auth/handler",ZN="emulator/auth/handler",eR=encodeURIComponent("fac");async function Cg(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:i};if(e instanceof Cw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof jo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${eR}=${encodeURIComponent(l)}`:"";return`${tR(t)}?${Xi(a).slice(1)}${c}`}function tR({config:t}){return t.emulator?Sf(t,ZN):`https://${t.authDomain}/${JN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="webStorageSupport";class nR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ow,this._completeRedirectFn=IN,this._overrideRedirectResult=SN}async _openPopup(e,n,r,i){var s;mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cg(e,n,r,Pd(),i);return YN(e,o,kf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cg(e,n,r,Pd(),i);return sN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VN(e),r=new kN(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fu,{type:fu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fu];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ON(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yw()||fw()||bf()}}const rR=nR;var bg="@firebase/auth",Ig="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oR(t){Ot(new yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ww(t)},c=new wk(r,i,s,l);return Rk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new yt("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new iR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(bg,Ig,sR(t)),Ye(bg,Ig,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=5*60,lR=x0("authIdTokenMaxAge")||aR;let Tg=null;const cR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lR)return;const i=n==null?void 0:n.token;Tg!==i&&(Tg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uR(t=ac()){const e=ar(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nk(t,{popupRedirectResolver:rR,persistence:[pN,nN,Ow]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cR(s.toString());Xk(n,o,()=>o(n.currentUser)),Yk(n,a=>o(a))}}const i=v0("auth");return i&&Pk(n,`http://${i}`),n}function dR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oR("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firebasestorage.googleapis.com",Bw="storageBucket",hR=2*60*1e3,fR=10*60*1e3,pR=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Dt{constructor(e,n,r=0){super(pu(e),`Firebase Storage: ${n} (${pu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var te;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(te||(te={}));function pu(t){return"storage/"+t}function Rf(){const t="An unknown error occurred, please check the error payload for server response.";return new le(te.UNKNOWN,t)}function mR(t){return new le(te.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function gR(t){return new le(te.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _R(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(te.UNAUTHENTICATED,t)}function vR(){return new le(te.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yR(t){return new le(te.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ww(){return new le(te.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $w(){return new le(te.CANCELED,"User canceled the upload/download.")}function wR(t){return new le(te.INVALID_URL,"Invalid URL '"+t+"'.")}function xR(t){return new le(te.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ER(){return new le(te.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Bw+"' property when initializing the app?")}function Vw(){return new le(te.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SR(){return new le(te.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function CR(){return new le(te.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bR(t){return new le(te.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Dd(t){return new le(te.INVALID_ARGUMENT,t)}function Hw(){return new le(te.APP_DELETED,"The Firebase app was deleted.")}function IR(t){return new le(te.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new le(te.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function gs(t){throw new le(te.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(r.path==="")return r;throw xR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),_={bucket:1,path:3},y=n===zw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:_,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<v.length;E++){const S=v[E],I=S.regex.exec(e);if(I){const T=I[S.indices.bucket];let k=I[S.indices.path];k||(k=""),r=new rt(T,k),S.postModify(r);break}}if(r==null)throw wR(e);return r}}class TR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...w){c||(c=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function f(){s&&clearTimeout(s)}function p(w,...g){if(c){f();return}if(w){f(),h.call(null,w,...g);return}if(l()||o){f(),h.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let _=!1;function y(w){_||(_=!0,f(),!c&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function NR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){return t!==void 0}function PR(t){return typeof t=="function"}function AR(t){return typeof t=="object"&&!Array.isArray(t)}function fc(t){return typeof t=="string"||t instanceof String}function kg(t){return Pf()&&t instanceof Blob}function Pf(){return typeof Blob<"u"}function Ng(t,e,n,r){if(r<e)throw Dd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nr||(Nr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r,i,s,o,a,l,c,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ma(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nr.NO_ERROR,l=s.getStatus();if(!a||Gw(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Nr.ABORT;r(!1,new ma(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ma(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());RR(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Rf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Hw():$w();o(l)}else{const l=Ww();o(l)}};this.canceled_?n(!1,new ma(!1,null,!0)):this.backoffId_=kR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ma{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function DR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function MR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FR(t,e,n,r,i,s,o=!0){const a=qw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return jR(c,e),LR(c,n),DR(c,s),MR(c,r),new OR(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zR(...t){const e=UR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pf())return new Blob(t);throw new le(te.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){if(typeof atob>"u")throw bR("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mu{constructor(e,n){this.data=e,this.contentType=n||null}}function $R(t,e){switch(t){case zt.RAW:return new mu(Kw(e));case zt.BASE64:case zt.BASE64URL:return new mu(Qw(t,e));case zt.DATA_URL:return new mu(HR(e),qR(e))}throw Rf()}function Kw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VR(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(zt.DATA_URL,"Malformed data URL.")}return Kw(e)}function Qw(t,e){switch(t){case zt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WR(e)}catch(i){throw i.message.includes("polyfill")?i:zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Yw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=GR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HR(t){const e=new Yw(t);return e.base64?Qw(zt.BASE64,e.rest):VR(e.rest)}function qR(t){return new Yw(t).contentType}function GR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){let r=0,i="";kg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(kg(this.data_)){const r=this.data_,i=BR(r,e,n);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zt(r,!0)}}static getBlob(...e){if(Pf()){const n=e.map(r=>r instanceof Zt?r.data_:r);return new Zt(zR.apply(null,n))}else{const n=e.map(o=>fc(o)?$R(zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){let e;try{e=JSON.parse(t)}catch{return null}return AR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QR(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Jw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e){return e}class je{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YR}}let ga=null;function XR(t){return!fc(t)||t.length<2?t:Jw(t)}function Af(){if(ga)return ga;const t=[];t.push(new je("bucket")),t.push(new je("generation")),t.push(new je("metageneration")),t.push(new je("name","fullPath",!0));function e(s,o){return XR(o)}const n=new je("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new je("size");return i.xform=r,t.push(i),t.push(new je("timeCreated")),t.push(new je("updated")),t.push(new je("md5Hash",null,!0)),t.push(new je("cacheControl",null,!0)),t.push(new je("contentDisposition",null,!0)),t.push(new je("contentEncoding",null,!0)),t.push(new je("contentLanguage",null,!0)),t.push(new je("contentType",null,!0)),t.push(new je("metadata","customMetadata",!0)),ga=t,ga}function JR(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ZR(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return JR(r,t),r}function Zw(t,e,n){const r=Xw(e);return r===null?null:ZR(t,r,n)}function eP(t,e,n,r){const i=Xw(e);if(i===null||!fc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),p=Fo(f,n,r),_=qw({alt:"media",token:c});return p+_})[0]}function ex(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Zi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){if(!t)throw Rf()}function Of(t,e){function n(r,i){const s=Zw(t,i,e);return ln(s!==null),s}return n}function tP(t,e){function n(r,i){const s=Zw(t,i,e);return ln(s!==null),eP(s,i,t.host,t._protocol)}return n}function Uo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=vR():i=_R():n.getStatus()===402?i=gR(t.bucket):n.getStatus()===403?i=yR(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function tx(t){const e=Uo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=mR(t.path)),s.serverResponse=i.serverResponse,s}return n}function nP(t,e,n){const r=e.fullServerUrl(),i=Fo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zi(i,s,Of(t,n),o);return a.errorHandler=tx(e),a}function rP(t,e,n){const r=e.fullServerUrl(),i=Fo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zi(i,s,tP(t,n),o);return a.errorHandler=tx(e),a}function iP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=iP(null,e)),r}function rx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=nx(e,r,i),h=ex(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Zt.getBlob(d,r,f);if(p===null)throw Vw();const _={name:c.fullPath},y=Fo(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,m=new Zi(y,w,Of(t,n),g);return m.urlParams=_,m.headers=o,m.body=p.uploadData(),m.errorHandler=Uo(e),m}class xl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Lf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ln(!1)}return ln(!!n&&(e||["active"]).indexOf(n)!==-1),n}function sP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=nx(e,r,i),a={name:o.fullPath},l=Fo(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=ex(o,n),f=t.maxUploadRetryTime;function p(y){Lf(y);let w;try{w=y.getResponseHeader("X-Goog-Upload-URL")}catch{ln(!1)}return ln(fc(w)),w}const _=new Zi(l,c,p,f);return _.urlParams=a,_.headers=h,_.body=d,_.errorHandler=Uo(e),_}function oP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=Lf(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ln(!1)}d||ln(!1);const f=Number(d);return ln(!isNaN(f)),new xl(f,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Zi(n,o,s,a);return l.headers=i,l.errorHandler=Uo(e),l}const Rg=256*1024;function aP(t,e,n,r,i,s,o,a){const l=new xl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw SR();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const d=l.current,f=d+h;let p="";h===0?p="finalize":c===h?p="upload, finalize":p="upload";const _={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(d,f);if(y===null)throw Vw();function w(E,S){const I=Lf(E,["active","final"]),T=l.current+h,k=r.size();let V;return I==="final"?V=Of(e,s)(E,S):V=null,new xl(T,k,I==="final",V)}const g="POST",m=e.maxUploadRetryTime,v=new Zi(n,g,w,m);return v.headers=_,v.body=y.uploadData(),v.progressCallback=a||null,v.errorHandler=Uo(t),v}const We={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function gu(t){switch(t){case"running":case"pausing":case"canceling":return We.RUNNING;case"paused":return We.PAUSED;case"success":return We.SUCCESS;case"canceled":return We.CANCELED;case"error":return We.ERROR;default:return We.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,r){if(PR(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class cP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uP extends cP{initXhr(){this.xhr_.responseType="text"}}function vr(){return new uP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Af(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(te.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Gw(i.status,[]))if(s)i=Ww();else{this.sleepTime=Math.max(this.sleepTime*2,pR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(te.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=sP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=oP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,vr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Rg*this._chunkMultiplier,n=new xl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=aP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,vr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Rg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=nP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,vr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=rx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=$w(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=gu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new lP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(gu(this._state)){case We.SUCCESS:ri(this._resolve.bind(null,this.snapshot))();break;case We.CANCELED:case We.ERROR:const n=this._reject;ri(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(gu(this._state)){case We.RUNNING:case We.PAUSED:e.next&&ri(e.next.bind(e,this.snapshot))();break;case We.SUCCESS:e.complete&&ri(e.complete.bind(e))();break;case We.CANCELED:case We.ERROR:e.error&&ri(e.error.bind(e,this._error))();break;default:e.error&&ri(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jw(this._location.path)}get storage(){return this._service}get parent(){const e=KR(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IR(e)}}function hP(t,e,n){t._throwIfRoot("uploadBytes");const r=rx(t.storage,t._location,Af(),new Zt(e,!0),n);return t.storage.makeRequestWithTokens(r,vr).then(i=>({metadata:i,ref:t}))}function fP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new dP(t,new Zt(e),n)}function pP(t){t._throwIfRoot("getDownloadURL");const e=rP(t.storage,t._location,Af());return t.storage.makeRequestWithTokens(e,vr).then(n=>{if(n===null)throw CR();return n})}function mP(t,e){const n=QR(t._location.path,e),r=new rt(t._location.bucket,n);return new Wr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){return/^[A-Za-z]+:\/\//.test(t)}function _P(t,e){return new Wr(t,e)}function ix(t,e){if(t instanceof Df){const n=t;if(n._bucket==null)throw ER();const r=new Wr(n,n._bucket);return e!=null?ix(r,e):r}else return e!==void 0?mP(t,e):t}function vP(t,e){if(e&&gP(e)){if(t instanceof Df)return _P(t,e);throw Dd("To use ref(service, url), the first argument must be a Storage instance.")}else return ix(t,e)}function Pg(t,e){const n=e==null?void 0:e[Bw];return n==null?null:rt.makeFromBucketSpec(n,t)}function yP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:E0(i,t.app.options.projectId))}class Df{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=zw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hR,this._maxUploadRetryTime=fR,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=Pg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=Pg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new TR(Hw());{const o=FR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ag="@firebase/storage",Og="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="storage";function ox(t,e,n){return t=ne(t),hP(t,e,n)}function wP(t,e,n){return t=ne(t),fP(t,e,n)}function jd(t){return t=ne(t),pP(t)}function ax(t,e){return t=ne(t),vP(t,e)}function xP(t=ac(),e){t=ne(t);const r=ar(t,sx).getImmediate({identifier:e}),i=y0("storage");return i&&EP(r,...i),r}function EP(t,e,n,r={}){yP(t,e,n,r)}function SP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Df(n,r,i,e,Jr)}function CP(){Ot(new yt(sx,SP,"PUBLIC").setMultipleInstances(!0)),Ye(Ag,Og,""),Ye(Ag,Og,"esm2017")}CP();var Lg={};const Dg="@firebase/database",jg="1.0.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lx="";function bP(t){lx=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IP(e)}}catch{}return new TP},Cr=cx("localStorage"),kP=cx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new oc("@firebase/database"),NP=function(){let t=1;return function(){return t++}}(),ux=function(t){const e=_b(t),n=new fb;n.update(e);const r=n.digest();return df.encodeByteArray(r)},zo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zo.apply(null,r):typeof r=="object"?e+=Ce(r):e+=r,e+=" "}return e};let Bs=null,Mg=!0;const RP=function(t,e){b(!e,"Can't turn on custom loggers persistently."),Ri.logLevel=G.VERBOSE,Bs=Ri.log.bind(Ri)},Le=function(...t){if(Mg===!0&&(Mg=!1,Bs===null&&kP.get("logging_enabled")===!0&&RP()),Bs){const e=zo.apply(null,t);Bs(e)}},Bo=function(t){return function(...e){Le(t,...e)}},Md=function(...t){const e="FIREBASE INTERNAL ERROR: "+zo(...t);Ri.error(e)},gn=function(...t){const e=`FIREBASE FATAL ERROR: ${zo(...t)}`;throw Ri.error(e),new Error(e)},Je=function(...t){const e="FIREBASE WARNING: "+zo(...t);Ri.warn(e)},PP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dx=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",$r="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===Wi||e===$r)return-1;if(e===Wi||t===$r)return 1;{const n=Fg(t),r=Fg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},OP=function(t,e){return t===e?0:t<e?-1:1},_s=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},jf=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ce(e[r]),n+=":",n+=jf(t[e[r]]);return n+="}",n},hx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fx=function(t){b(!dx(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},LP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const MP=new RegExp("^-?(0*)\\d{1,10}$"),FP=-2147483648,UP=2147483647,Fg=function(t){if(MP.test(t)){const e=Number(t);if(e>=FP&&e<=UP)return e}return null},ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Je("Exception was thrown by user callback.",n),e},Math.floor(0))}},zP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class Ma{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ma.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="5",px="v",mx="s",gx="r",_x="f",vx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yx="ls",wx="p",Fd="ac",xx="websocket",Ex="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $P(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cx(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===xx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ex)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$P(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.counters_={}}incrementCounter(e,n=1){xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={},vu={};function Ff(t){const e=t.toString();return _u[e]||(_u[e]=new VP),_u[e]}function HP(t,e){const n=t.toString();return vu[n]||(vu[n]=e()),vu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="start",GP="close",KP="pLPCommand",QP="pRTLPCB",bx="id",Ix="pw",Tx="ser",YP="cb",XP="seg",JP="ts",ZP="d",eA="dframe",kx=1870,Nx=30,tA=kx-Nx,nA=25e3,rA=3e4;class vi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bo(e),this.stats_=Ff(n),this.urlFn=l=>(this.appCheckToken&&(l[Fd]=this.appCheckToken),Cx(n,Ex,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rA)),AP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uf((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ug)this.id=a,this.password=l;else if(o===GP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ug]="t",r[Tx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[px]=Mf,this.transportSessionId&&(r[mx]=this.transportSessionId),this.lastSessionId&&(r[yx]=this.lastSessionId),this.applicationId&&(r[wx]=this.applicationId),this.appCheckToken&&(r[Fd]=this.appCheckToken),typeof location<"u"&&location.hostname&&vx.test(location.hostname)&&(r[gx]=_x);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vi.forceAllow_=!0}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){return vi.forceAllow_?!0:!vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LP()&&!DP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=g0(n),i=hx(r,tA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eA]="t",r[bx]=e,r[Ix]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Uf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=NP(),window[KP+this.uniqueCallbackIdentifier]=e,window[QP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Uf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bx]=this.myID,e[Ix]=this.myPW,e[Tx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nx+r.length<=kx;){const o=this.pendingSegs.shift();r=r+"&"+XP+i+"="+o.seg+"&"+JP+i+"="+o.ts+"&"+ZP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(nA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=16384,sA=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class Ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bo(this.connId),this.stats_=Ff(n),this.connURL=Ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[px]=Mf,typeof location<"u"&&location.hostname&&vx.test(location.hostname)&&(o[gx]=_x),n&&(o[mx]=n),r&&(o[yx]=r),i&&(o[Fd]=i),s&&(o[wx]=s),Cx(e,xx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cr.set("previous_websocket_failure",!0);try{let r;b0(),this.mySock=new El(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&El!==null&&!Ct.forceDisallow_}static previouslyFailed(){return Cr.isInMemoryStorage||Cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hx(n,iA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vi,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let r=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ct];else{const i=this.transports_=[];for(const s of _o.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);_o.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_o.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=6e4,aA=5e3,lA=10*1024,cA=100*1024,yu="t",zg="d",uA="s",Bg="r",dA="e",Wg="o",$g="a",Vg="n",Hg="p",hA="h";class fA{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bo("c:"+this.id+":"),this.transportManager_=new _o(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yu in e){const n=e[yu];n===$g?this.upgradeIfSecondaryHealthy_():n===Bg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_s("t",e),r=_s("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$g,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_s("t",e),r=_s("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_s(yu,e);if(zg in e){const r=e[zg];if(n===hA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uA?this.onConnectionShutdown_(r):n===Bg?this.onReset_(r):n===dA?Md("Server Error: "+r):n===Wg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Md("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mf!==r&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Px{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ff()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sl}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=32,Gg=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new K("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Ax(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ox(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return He(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zf(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function It(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mA{constructor(e,n){this.errorPrefix_=n,this.parts_=Ox(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=sc(this.parts_[r]);Dx(this)}}function gA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sc(e),Dx(t)}function _A(t){const e=t.parts_.pop();t.byteLength_-=sc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dx(t){if(t.byteLength_>Gg)throw new Error(t.errorPrefix_+"has a key path longer than "+Gg+" bytes ("+t.byteLength_+").");if(t.parts_.length>qg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qg+") or object contains a cycle "+_r(t))}function _r(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Px{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Bf}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1e3,vA=60*5*1e3,Kg=30*1e3,yA=1.3,wA=3e4,xA="server_kill",Qg=3;class cn extends Rx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cn.nextPersistentConnectionId_++,this.log_=Bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=vA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!b0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ce(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ic,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;cn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xn(e,"w")){const r=Bi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=db(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Md("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wA&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new fA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Je(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(xA)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Je(d),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>jf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qg&&(this.reconnectDelay_=Kg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lx.replace(/\./g,"-")]=1,ff()?e["framework.cordova"]=1:C0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Wi,e),i=new F(Wi,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class jx extends pc{static get __EMPTY_NODE(){return _a}static set __EMPTY_NODE(e){_a=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw Yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F($r,_a)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,_a)}toString(){return".key"}}const Pi=new jx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class EA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new va(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new va(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new EA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t,e){return es(t.name,e.name)}function Wf(t,e){return es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud;function CA(t){Ud=t}const Mx=function(t){return typeof t=="number"?"number:"+fx(t):"string:"+t},Fx=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xn(e,".sv"),"Priority must be a string or number.")}else b(t===Ud||t.isEmpty(),"priority of unexpected type.");b(t===Ud||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fx(this.priorityNode_)}static set __childrenNodeConstructor(e){Yg=e}static get __childrenNodeConstructor(){return Yg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:M(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fx(this.value_):e+=this.value_,this.lazyHash_=ux(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ux,zx;function bA(t){Ux=t}function IA(t){zx=t}class TA extends pc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F($r,new xe("[PRIORITY-POST]",zx))}makePost(e,n){const r=Ux(e);return new F(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ue=new TA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=Math.log(2);class NA{constructor(e){const n=s=>parseInt(Math.log(s)/kA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cl=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let d,f;if(h===0)return null;if(h===1)return d=t[l],f=n?n(d):d,new Se(f,d.node,Se.BLACK,null,null);{const p=parseInt(h/2,10)+l,_=i(l,p),y=i(p+1,c);return d=t[p],f=n?n(d):d,new Se(f,d.node,Se.BLACK,_,y)}},s=function(l){let c=null,h=null,d=t.length;const f=function(_,y){const w=d-_,g=d;d-=_;const m=i(w+1,g),v=t[w],E=n?n(v):v;p(new Se(E,v.node,y,null,m))},p=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));y?f(w,Se.BLACK):(f(w,Se.BLACK),f(w,Se.RED))}return h},o=new NA(t.length),a=s(o);return new qe(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu;const ii={};class on{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(ii&&ue,"ChildrenNode.ts has not been loaded"),wu=wu||new on({".priority":ii},{".priority":ue}),wu}get(e){const n=Bi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return xn(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Cl(r,e.getCompare()):a=ii;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new on(h,c)}addToIndexes(e,n){const r=hl(this.indexes_,(i,s)=>{const o=Bi(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Cl(a,o.getCompare())}else return ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new on(r,this.indexSet_)}removeFromIndexes(e,n){const r=hl(this.indexes_,i=>{if(i===ii)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new on(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Fx(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ys||(ys=new O(new qe(Wf),null,on.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ys}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ys:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ys:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{b(M(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ue,(o,a)=>{n[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mx(this.getPriority().val())+":"),this.forEachChild(ue,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ux(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wo?-1:0}withIndex(e){if(e===Pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ue),i=n.getIterator(ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pi?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RA extends O{constructor(){super(new qe(Wf),O.EMPTY_NODE,on.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Wo=new RA;Object.defineProperties(F,{MIN:{value:new F(Wi,O.EMPTY_NODE)},MAX:{value:new F($r,Wo)}});jx.__EMPTY_NODE=O.EMPTY_NODE;xe.__childrenNodeConstructor=O;CA(Wo);IA(Wo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=!0;function Te(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Te(e))}if(!(t instanceof Array)&&PA){const n=[];let r=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Te(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return O.EMPTY_NODE;const s=Cl(n,SA,o=>o.name,Wf);if(r){const o=Cl(n,ue.getCompare());return new O(s,Te(e),new on({".priority":o},{".priority":ue}))}else return new O(s,Te(e),on.Default)}else{let n=O.EMPTY_NODE;return Ze(t,(r,i)=>{if(xn(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}bA(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA extends pc{constructor(e){super(),this.indexPath_=e,b(!z(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?es(e.name,n.name):s}makePost(e,n){const r=Te(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Wo);return new F($r,e)}toString(){return Ox(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA extends pc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=Te(e);return new F(n,r)}toString(){return".value"}}const LA=new OA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){return{type:"value",snapshotNode:t}}function $i(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vo(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange($i(n,r)):o.trackChildChange(yo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(vo(i,s))}),n.isLeafNode()||n.forEachChild(ue,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(yo(i,s,o))}else r.trackChildChange($i(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.indexedFilter_=new $f(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wo.getStartPost_(e),this.endPost_=wo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(ue,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new wo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new F(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(h&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(yo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vo(n,d));const y=a.updateImmediateChild(n,O.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange($i(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(vo(c.name,c.node)),s.trackChildChange($i(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Vf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MA(t){return t.loadsAllData()?new $f(t.getIndex()):t.hasLimit()?new jA(t):new wo(t)}function Xg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===LA?n="$value":t.index_===Pi?n="$key":(b(t.index_ instanceof AA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Rx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Bo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Xg(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Bi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=bl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xg(e._queryParams),r=e._path.toString(),i=new ic;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fo(a.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){return{value:null,children:new Map}}function Wx(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Il());const i=t.children.get(r);e=Q(e),Wx(i,e,n)}}function zd(t,e,n){t.value!==null?n(e,t.value):UA(t,(r,i)=>{const s=new K(e.toString()+"/"+r);zd(i,s,n)})}function UA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=10*1e3,BA=30*1e3,WA=5*60*1e3;class $A{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zA(e);const r=Zg+(BA-Zg)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ze(e,(i,s)=>{s>0&&xn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*WA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tt||(Tt={}));function $x(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Tt.ACK_USER_WRITE,this.source=$x()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Tl(H(),n,this.revert)}}else return b(M(this.path)===e,"operationForChild called for unrelated child."),new Tl(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.source=e,this.path=n,this.type=Tt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new xo(this.source,H()):new xo(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Tt.OVERWRITE}operationForChild(e){return z(this.path)?new Vr(this.source,H(),this.snap.getImmediateChild(e)):new Vr(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Tt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Vr(this.source,H(),n.value):new Eo(this.source,H(),n)}else return b(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Eo(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(DA(o.childName,o.snapshotNode))}),ws(t,i,"child_removed",e,r,n),ws(t,i,"child_added",e,r,n),ws(t,i,"child_moved",s,r,n),ws(t,i,"child_changed",e,r,n),ws(t,i,"value",e,r,n),i}function ws(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>GA(t,a,l)),o.forEach(a=>{const l=qA(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function qA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function GA(t,e,n){if(e.childName==null||n.childName==null)throw Yi("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,r){return mc(new Hr(e,n,r),t.serverCache)}function Vx(t,e,n,r){return mc(t.eventCache,new Hr(e,n,r))}function Bd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;const KA=()=>(xu||(xu=new qe(OP)),xu);class J{constructor(e,n=KA()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Ze(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ve(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new J(null)}}set(e,n){if(z(e))return new J(n,this.children);{const r=M(e),s=(this.children.get(r)||new J(null)).set(Q(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(z(e))return n;{const r=M(e),s=(this.children.get(r)||new J(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),ve(n,i),r):new J(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new J(null))}}function Vs(t,e,n){if(z(e))return new Pt(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new Pt(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new Pt(s)}}}function e_(t,e,n){let r=t;return Ze(n,(i,s)=>{r=Vs(r,ve(e,i),s)}),r}function t_(t,e){if(z(e))return Pt.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Pt(n)}}function Wd(t,e){return ei(t,e)!=null}function ei(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function n_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function Qn(t,e){if(z(e))return t;{const n=ei(t,e);return n!=null?new Pt(new J(n)):new Pt(t.writeTree_.subtree(e))}}function $d(t){return t.writeTree_.isEmpty()}function Vi(t,e){return Hx(H(),t.writeTree_,e)}function Hx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Hx(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e){return Qx(e,t)}function QA(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Vs(t.visibleWrites,e,n)),t.lastWriteId=r}function YA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JA(a,r.path)?i=!1:It(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ZA(t),!0;if(r.snap)t.visibleWrites=t_(t.visibleWrites,r.path);else{const a=r.children;Ze(a,l=>{t.visibleWrites=t_(t.visibleWrites,ve(r.path,l))})}return!0}else return!1}function JA(t,e){if(t.snap)return It(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&It(ve(t.path,n),e))return!0;return!1}function ZA(t){t.visibleWrites=qx(t.allWrites,eO,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eO(t){return t.visible}function qx(t,e,n){let r=Pt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)It(n,o)?(a=He(n,o),r=Vs(r,a,s.snap)):It(o,n)&&(a=He(o,n),r=Vs(r,H(),s.snap.getChild(a)));else if(s.children){if(It(n,o))a=He(n,o),r=e_(r,a,s.children);else if(It(o,n))if(a=He(o,n),z(a))r=e_(r,H(),s.children);else{const l=Bi(s.children,M(a));if(l){const c=l.getChild(Q(a));r=Vs(r,H(),c)}}}else throw Yi("WriteRecord should have .snap or .children")}}return r}function Gx(t,e,n,r,i){if(!r&&!i){const s=ei(t.visibleWrites,e);if(s!=null)return s;{const o=Qn(t.visibleWrites,e);if($d(o))return n;if(n==null&&!Wd(o,H()))return null;{const a=n||O.EMPTY_NODE;return Vi(o,a)}}}else{const s=Qn(t.visibleWrites,e);if(!i&&$d(s))return n;if(!i&&n==null&&!Wd(s,H()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},a=qx(t.allWrites,o,e),l=n||O.EMPTY_NODE;return Vi(a,l)}}}function tO(t,e,n){let r=O.EMPTY_NODE;const i=ei(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Qn(t.visibleWrites,e);return n.forEachChild(ue,(o,a)=>{const l=Vi(Qn(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),n_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Qn(t.visibleWrites,e);return n_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nO(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(Wd(t.visibleWrites,s))return null;{const o=Qn(t.visibleWrites,s);return $d(o)?i.getChild(n):Vi(o,i.getChild(n))}}function rO(t,e,n,r){const i=ve(e,n),s=ei(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Qn(t.visibleWrites,i);return Vi(o,r.getNode().getImmediateChild(n))}else return null}function iO(t,e){return ei(t.visibleWrites,e)}function sO(t,e,n,r,i,s,o){let a;const l=Qn(t.visibleWrites,e),c=ei(l,H());if(c!=null)a=c;else if(n!=null)a=Vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&h.length<i;)d(p,r)!==0&&h.push(p),p=f.getNext();return h}else return[]}function oO(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function kl(t,e,n,r){return Gx(t.writeTree,t.treePath,e,n,r)}function Kf(t,e){return tO(t.writeTree,t.treePath,e)}function r_(t,e,n,r){return nO(t.writeTree,t.treePath,e,n,r)}function Nl(t,e){return iO(t.writeTree,ve(t.treePath,e))}function aO(t,e,n,r,i,s){return sO(t.writeTree,t.treePath,e,n,r,i,s)}function Qf(t,e,n){return rO(t.writeTree,t.treePath,e,n)}function Kx(t,e){return Qx(ve(t.treePath,e),t.writeTree)}function Qx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,yo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$i(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,yo(r,e.snapshotNode,i.oldSnap));else throw Yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Yx=new cO;class Yf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),s=aO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){return{filter:t}}function dO(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hO(t,e,n,r,i){const s=new lO;let o,a;if(n.type===Tt.OVERWRITE){const c=n;c.source.fromUser?o=Vd(t,e,c.path,c.snap,r,i,s):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=Rl(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Tt.MERGE){const c=n;c.source.fromUser?o=pO(t,e,c.path,c.children,r,i,s):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Tt.ACK_USER_WRITE){const c=n;c.revert?o=_O(t,e,c.path,r,i,s):o=mO(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Tt.LISTEN_COMPLETE)o=gO(t,e,n.path,r,s);else throw Yi("Unknown operation type: "+n.type);const l=s.getChanges();return fO(e,o,l),{viewCache:o,changes:l}}function fO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Bd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Bx(Bd(e)))}}function Xx(t,e,n,r,i,s){const o=e.eventCache;if(Nl(r,n)!=null)return e;{let a,l;if(z(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qr(e),h=c instanceof O?c:O.EMPTY_NODE,d=Kf(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=kl(r,qr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){b(Zn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=r_(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=r_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(h,f):d=o.getNode().getImmediateChild(c)}else d=Qf(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,i,s):a=o.getNode()}}return $s(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Rl(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),p,null)}else{const p=M(n);if(!l.isCompleteForPath(n)&&Zn(n)>1)return e;const _=Q(n),w=l.getNode().getImmediateChild(p).updateChild(_,r);p===".priority"?c=h.updatePriority(l.getNode(),w):c=h.updateChild(l.getNode(),p,w,_,Yx,null)}const d=Vx(e,c,l.isFullyInitialized()||z(n),h.filtersNodes()),f=new Yf(i,d,s);return Xx(t,d,n,i,f,a)}function Vd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new Yf(i,e,s);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$s(e,c,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=$s(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),p=a.getNode().getImmediateChild(d);let _;if(z(f))_=r;else{const y=h.getCompleteChild(d);y!=null?Ax(f)===".priority"&&y.getChild(Lx(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=O.EMPTY_NODE}if(p.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),d,_,f,h,o);l=$s(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function i_(t,e){return t.eventCache.isCompleteForChild(e)}function pO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=ve(n,l);i_(e,M(h))&&(a=Vd(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=ve(n,l);i_(e,M(h))||(a=Vd(t,a,h,c,i,s,o))}),a}function s_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=r:c=new J(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=s_(t,p,f);l=Rl(t,l,new K(d),_,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),y=s_(t,_,f);l=Rl(t,l,new K(d),y,i,s,o,a)}}),l}function mO(t,e,n,r,i,s,o){if(Nl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Rl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let c=new J(null);return l.getNode().forEachChild(Pi,(h,d)=>{c=c.set(new K(h),d)}),Hd(t,e,n,c,i,s,a,o)}else return e}else{let c=new J(null);return r.foreach((h,d)=>{const f=ve(n,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),Hd(t,e,n,c,i,s,a,o)}}function gO(t,e,n,r,i){const s=e.serverCache,o=Vx(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Xx(t,o,n,r,Yx,i)}function _O(t,e,n,r,i,s){let o;if(Nl(r,n)!=null)return e;{const a=new Yf(r,e,i),l=e.eventCache.getNode();let c;if(z(n)||M(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=kl(r,qr(e));else{const d=e.serverCache.getNode();b(d instanceof O,"serverChildren would be complete if leaf node"),h=Kf(r,d)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=M(n);let d=Qf(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,Q(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,O.EMPTY_NODE,Q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kl(r,qr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Nl(r,H())!=null,$s(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $f(r.getIndex()),s=MA(r);this.processor_=uO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),h=new Hr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Hr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=mc(d,h),this.eventGenerator_=new VA(this.query_)}get query(){return this.query_}}function yO(t){return t.viewCache_.serverCache.getNode()}function wO(t,e){const n=qr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function o_(t){return t.eventRegistrations_.length===0}function xO(t,e){t.eventRegistrations_.push(e)}function a_(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function l_(t,e,n,r){e.type===Tt.MERGE&&e.source.queryId!==null&&(b(qr(t.viewCache_),"We should always have a full cache before handling merges"),b(Bd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hO(t.processor_,i,e,n,r);return dO(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Jx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(s,o)=>{r.push($i(s,o))}),n.isFullyInitialized()&&r.push(Bx(n.getNode())),Jx(t,r,n.getNode(),e)}function Jx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return HA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;class SO{constructor(){this.views=new Map}}function CO(t){b(!Pl,"__referenceConstructor has already been defined"),Pl=t}function bO(){return b(Pl,"Reference.ts has not been loaded"),Pl}function IO(t){return t.views.size===0}function Xf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),l_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(l_(o,e,n,r));return s}}function TO(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=kl(n,i?r:null),l=!1;a?l=!0:r instanceof O?(a=Kf(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const c=mc(new Hr(a,l,!1),new Hr(r,i,!1));return new vO(e,c)}return o}function kO(t,e,n,r,i,s){const o=TO(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xO(o,n),EO(o,n)}function NO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=er(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(a_(c,n,r)),o_(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(a_(l,n,r)),o_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!er(t)&&s.push(new(bO())(e._repo,e._path)),{removed:s,events:o}}function Zx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ai(t,e){let n=null;for(const r of t.views.values())n=n||wO(r,e);return n}function e1(t,e){if(e._queryParams.loadsAllData())return gc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function t1(t,e){return e1(t,e)!=null}function er(t){return gc(t)!=null}function gc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;function RO(t){b(!Al,"__referenceConstructor has already been defined"),Al=t}function PO(){return b(Al,"Reference.ts has not been loaded"),Al}let AO=1;class c_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=oO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function n1(t,e,n,r,i){return QA(t.pendingWriteTree_,e,n,r,i),i?$o(t,new Vr($x(),e,n)):[]}function br(t,e,n=!1){const r=YA(t.pendingWriteTree_,e);if(XA(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(H(),!0):Ze(r.children,o=>{s=s.set(new K(o),!0)}),$o(t,new Tl(r.path,s,n))}else return[]}function _c(t,e,n){return $o(t,new Vr(Hf(),e,n))}function OO(t,e,n){const r=J.fromObject(n);return $o(t,new Eo(Hf(),e,r))}function LO(t,e){return $o(t,new xo(Hf(),e))}function DO(t,e,n){const r=Zf(t,n);if(r){const i=ep(r),s=i.path,o=i.queryId,a=He(s,e),l=new xo(qf(o),a);return tp(t,s,l)}else return[]}function qd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||t1(o,e))){const l=NO(o,e,n,r);IO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>er(p));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=FO(f);for(let _=0;_<p.length;++_){const y=p[_],w=y.query,g=s1(t,y);t.listenProvider_.startListening(Hs(w),Ol(t,w),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Hs(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(vc(f));t.listenProvider_.stopListening(Hs(f),p)}))}UO(t,c)}return a}function jO(t,e,n,r){const i=Zf(t,r);if(i!=null){const s=ep(i),o=s.path,a=s.queryId,l=He(o,e),c=new Vr(qf(a),l,n);return tp(t,o,c)}else return[]}function MO(t,e,n,r){const i=Zf(t,r);if(i){const s=ep(i),o=s.path,a=s.queryId,l=He(o,e),c=J.fromObject(n),h=new Eo(qf(a),l,c);return tp(t,o,h)}else return[]}function u_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const _=He(f,i);s=s||Ai(p,_),o=o||er(p)});let a=t.syncPointTree_.get(i);a?(o=o||er(a),s=s||Ai(a,H())):(a=new SO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const y=Ai(_,H());y&&(s=s.updateImmediateChild(p,y))}));const c=t1(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=vc(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=zO();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const h=Gf(t.pendingWriteTree_,i);let d=kO(a,e,n,h,s,l);if(!c&&!o&&!r){const f=e1(a,e);d=d.concat(BO(t,e,f))}return d}function Jf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=Ai(a,l);if(c)return c});return Gx(i,e,s,n,!0)}function $o(t,e){return r1(e,t.syncPointTree_,null,Gf(t.pendingWriteTree_,H()))}function r1(t,e,n,r){if(z(t.path))return i1(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Ai(i,H()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Kx(r,o);s=s.concat(r1(a,l,c,h))}return i&&(s=s.concat(Xf(i,t,r,n))),s}}function i1(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Ai(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Kx(r,o),h=t.operationForChild(o);h&&(s=s.concat(i1(h,a,l,c)))}),i&&(s=s.concat(Xf(i,t,r,n))),s}function s1(t,e){const n=e.query,r=Ol(t,n);return{hashFn:()=>(yO(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?DO(t,n._path,r):LO(t,n._path);{const s=jP(i,n);return qd(t,n,null,s)}}}}function Ol(t,e){const n=vc(e);return t.queryToTagMap.get(n)}function vc(t){return t._path.toString()+"$"+t._queryIdentifier}function Zf(t,e){return t.tagToQueryMap.get(e)}function ep(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function tp(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=Gf(t.pendingWriteTree_,e);return Xf(r,n,i,null)}function FO(t){return t.fold((e,n,r)=>{if(n&&er(n))return[gc(n)];{let i=[];return n&&(i=Zx(n)),Ze(r,(s,o)=>{i=i.concat(o)}),i}})}function Hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PO())(t._repo,t._path):t}function UO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=vc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zO(){return AO++}function BO(t,e,n){const r=e._path,i=Ol(t,e),s=s1(t,n),o=t.listenProvider_.startListening(Hs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!er(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!z(c)&&h&&er(h))return[gc(h).query];{let f=[];return h&&(f=f.concat(Zx(h).map(p=>p.query))),Ze(d,(p,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Hs(h),Ol(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new np(n)}node(){return this.node_}}class rp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new rp(this.syncTree_,n)}node(){return Jf(this.syncTree_,this.path_)}}const WO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},d_=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $O(t[".sv"],e,n);if(typeof t[".sv"]=="object")return VO(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$O=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},VO=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},HO=function(t,e,n,r){return ip(e,new rp(n,t),r)},o1=function(t,e,n){return ip(t,new np(e),n)};function ip(t,e,n){const r=t.getPriority().val(),i=d_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=d_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(ue,(a,l)=>{const c=ip(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function op(t,e){let n=e instanceof K?e:new K(e),r=t,i=M(n);for(;i!==null;){const s=Bi(r.node.children,i)||{children:{},childCount:0};r=new sp(i,r,s),n=Q(n),i=M(n)}return r}function ns(t){return t.node.value}function a1(t,e){t.node.value=e,Gd(t)}function l1(t){return t.node.childCount>0}function qO(t){return ns(t)===void 0&&!l1(t)}function yc(t,e){Ze(t.node.children,(n,r)=>{e(new sp(n,t,r))})}function c1(t,e,n,r){n&&!r&&e(t),yc(t,i=>{c1(i,e,!0,r)}),n&&r&&e(t)}function GO(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vo(t){return new K(t.parent===null?t.name:Vo(t.parent)+"/"+t.name)}function Gd(t){t.parent!==null&&KO(t.parent,t.name,t)}function KO(t,e,n){const r=qO(n),i=xn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=/[\[\].#$\/\u0000-\u001F\u007F]/,YO=/[\[\].#$\u0000-\u001F\u007F]/,Eu=10*1024*1024,u1=function(t){return typeof t=="string"&&t.length!==0&&!QO.test(t)},d1=function(t){return typeof t=="string"&&t.length!==0&&!YO.test(t)},XO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),d1(t)},h1=function(t,e,n,r){r&&e===void 0||ap(pf(t,"value"),e,n)},ap=function(t,e,n){const r=n instanceof K?new mA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_r(r));if(typeof e=="function")throw new Error(t+"contains a function "+_r(r)+" with contents = "+e.toString());if(dx(e))throw new Error(t+"contains "+e.toString()+" "+_r(r));if(typeof e=="string"&&e.length>Eu/3&&sc(e)>Eu)throw new Error(t+"contains a string greater than "+Eu+" utf8 bytes "+_r(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!u1(o)))throw new Error(t+" contains an invalid key ("+o+") "+_r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gA(r,o),ap(t,a,r),_A(r)}),i&&s)throw new Error(t+' contains ".value" child '+_r(r)+" in addition to actual children.")}},f1=function(t,e,n,r){if(!d1(n))throw new Error(pf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),f1(t,e,n)},lp=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ZO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!u1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XO(n))throw new Error(pf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cp(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!zf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function p1(t,e,n){cp(t,n),m1(t,r=>zf(r,e))}function _n(t,e,n){cp(t,n),m1(t,r=>It(r,e)||It(e,r))}function m1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(t2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function t2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bs&&Le("event: "+n.toString()),ts(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="repo_interrupt",r2=25;class i2{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new e2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Il(),this.transactionQueueTree_=new sp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function s2(t,e,n){if(t.stats_=Ff(t.repoInfo_),t.forceRestClient_||zP())t.server_=new bl(t.repoInfo_,(r,i,s,o)=>{h_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>f_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cn(t.repoInfo_,e,(r,i,s,o)=>{h_(t,r,i,s,o)},r=>{f_(t,r)},r=>{o2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HP(t.repoInfo_,()=>new $A(t.stats_,t.server_)),t.infoData_=new FA,t.infoSyncTree_=new c_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_c(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dp(t,"connected",!1),t.serverSyncTree_=new c_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);_n(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function g1(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function up(t){return WO({timestamp:g1(t)})}function h_(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=hl(n,c=>Te(c));o=MO(t.serverSyncTree_,s,l,i)}else{const l=Te(n);o=jO(t.serverSyncTree_,s,l,i)}else if(r){const l=hl(n,c=>Te(c));o=OO(t.serverSyncTree_,s,l)}else{const l=Te(n);o=_c(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=wc(t,s)),_n(t.eventQueue_,a,o)}function f_(t,e){dp(t,"connected",e),e===!1&&l2(t)}function o2(t,e){Ze(e,(n,r)=>{dp(t,n,r)})}function dp(t,e,n){const r=new K("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=_c(t.infoSyncTree_,r,i);_n(t.eventQueue_,r,s)}function _1(t){return t.nextWriteId_++}function a2(t,e,n,r,i){hp(t,"set",{path:e.toString(),value:n,priority:r});const s=up(t),o=Te(n,r),a=Jf(t.serverSyncTree_,e),l=o1(o,a,s),c=_1(t),h=n1(t.serverSyncTree_,e,l,c,!0);cp(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||Je("set at "+e+" failed: "+f);const y=br(t.serverSyncTree_,c,!_);_n(t.eventQueue_,e,y),h2(t,i,f,p)});const d=E1(t,e);wc(t,d),_n(t.eventQueue_,d,[])}function l2(t){hp(t,"onDisconnectEvents");const e=up(t),n=Il();zd(t.onDisconnect_,H(),(i,s)=>{const o=HO(i,s,t.serverSyncTree_,e);Wx(n,i,o)});let r=[];zd(n,H(),(i,s)=>{r=r.concat(_c(t.serverSyncTree_,i,s));const o=E1(t,i);wc(t,o)}),t.onDisconnect_=Il(),_n(t.eventQueue_,H(),r)}function c2(t,e,n){let r;M(e._path)===".info"?r=u_(t.infoSyncTree_,e,n):r=u_(t.serverSyncTree_,e,n),p1(t.eventQueue_,e._path,r)}function u2(t,e,n){let r;M(e._path)===".info"?r=qd(t.infoSyncTree_,e,n):r=qd(t.serverSyncTree_,e,n),p1(t.eventQueue_,e._path,r)}function d2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(n2)}function hp(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function h2(t,e,n,r){e&&ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function v1(t,e,n){return Jf(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function fp(t,e=t.transactionQueueTree_){if(e||xc(t,e),ns(e)){const n=w1(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&f2(t,Vo(e),n)}else l1(e)&&yc(e,n=>{fp(t,n)})}function f2(t,e,n){const r=n.map(c=>c.currentWriteId),i=v1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=He(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{hp(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(br(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();xc(t,op(t.transactionQueueTree_,e)),fp(t,t.transactionQueueTree_),_n(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)ts(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Je("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}wc(t,e)}},o)}function wc(t,e){const n=y1(t,e),r=Vo(n),i=w1(t,n);return p2(t,i,r),r}function p2(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(n,l.path);let h=!1,d;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(br(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=r2)h=!0,d="maxretry",i=i.concat(br(t.serverSyncTree_,l.currentWriteId,!0));else{const f=v1(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ap("transaction failed: Data returned ",p,l.path);let _=Te(p);typeof p=="object"&&p!=null&&xn(p,".priority")||(_=_.updatePriority(f.getPriority()));const w=l.currentWriteId,g=up(t),m=o1(_,f,g);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=m,l.currentWriteId=_1(t),o.splice(o.indexOf(w),1),i=i.concat(n1(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(br(t.serverSyncTree_,w,!0))}else h=!0,d="nodata",i=i.concat(br(t.serverSyncTree_,l.currentWriteId,!0))}_n(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}xc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ts(r[a]);fp(t,t.transactionQueueTree_)}function y1(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&ns(r)===void 0;)r=op(r,n),e=Q(e),n=M(e);return r}function w1(t,e){const n=[];return x1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function x1(t,e,n){const r=ns(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yc(e,i=>{x1(t,i,n)})}function xc(t,e){const n=ns(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,a1(e,n.length>0?n:void 0)}yc(e,r=>{xc(t,r)})}function E1(t,e){const n=Vo(y1(t,e)),r=op(t.transactionQueueTree_,e);return GO(r,i=>{Su(t,i)}),Su(t,r),c1(r,i=>{Su(t,i)}),n}function Su(t,e){const n=ns(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(br(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?a1(e,void 0):n.length=s+1,_n(t.eventQueue_,Vo(e),i);for(let o=0;o<r.length;o++)ts(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function g2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Je(`Invalid query segment '${n}' in query '${t}'`)}return e}const p_=function(t,e){const n=_2(t),r=n.namespace;n.domain==="firebase.com"&&gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},_2=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=m2(t.substring(h,d)));const f=g2(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",v2=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=m_.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=m_.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class w2{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:Ax(this._path)}get ref(){return new cr(this._repo,this._path)}get _queryIdentifier(){const e=Jg(this._queryParams),n=jf(e);return n==="{}"?"default":n}get _queryObject(){return Jg(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof pp))return!1;const n=this._repo===e._repo,r=zf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pA(this._path)}}class cr extends pp{constructor(e,n){super(e,n,new Vf,!1)}get parent(){const e=Lx(this._path);return e===null?null:new cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ll{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=So(this.ref,e);return new Ll(this._node.getChild(n),r,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ll(i,So(this.ref,r),ue)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fe(t,e){return t=ne(t),t._checkNotDeleted("ref"),e!==void 0?So(t._root,e):t._root}function So(t,e){return t=ne(t),M(t._path)===null?JO("child","path",e):f1("child","path",e),new cr(t._repo,ve(t._path,e))}function E2(t,e){t=ne(t),lp("push",t._path),h1("push",e,t._path,!0);const n=g1(t._repo),r=v2(n),i=So(t,r),s=So(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function mp(t){return lp("remove",t._path),Co(t,null)}function Co(t,e){t=ne(t),lp("set",t._path),h1("set",e,t._path,!1);const n=new ic;return a2(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class gp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new y2("value",this,new Ll(e.snapshotNode,new cr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new w2(this,e,n):null}matches(e){return e instanceof gp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function S2(t,e,n,r,i){const s=new x2(n,void 0),o=new gp(s);return c2(t._repo,t,o),()=>u2(t._repo,t,o)}function ot(t,e,n,r){return S2(t,"value",e)}CO(cr);RO(cr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="FIREBASE_DATABASE_EMULATOR_HOST",Kd={};let b2=!1;function I2(t,e,n,r){t.repoInfo_=new Sx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function T2(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=p_(s,i),a=o.repoInfo,l;typeof process<"u"&&Lg&&(l=Lg[C2]),l?(s=`http://${l}?ns=${a.namespace}`,o=p_(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new WP(t.name,t.options,e);ZO("Invalid Firebase Database URL",o),z(o.path)||gn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=N2(a,t,c,new BP(t.name,n));return new R2(h,t)}function k2(t,e){const n=Kd[e];(!n||n[t.key]!==t)&&gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),d2(t),delete n[t.key]}function N2(t,e,n,r){let i=Kd[e.name];i||(i={},Kd[e.name]=i);let s=i[t.toURLString()];return s&&gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new i2(t,b2,n,r),i[t.toURLString()]=s,s}class R2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(s2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cr(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(k2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gn("Cannot call "+e+" on a deleted database.")}}function P2(t=ac(),e){const n=ar(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=y0("database");r&&A2(n,...r)}return n}function A2(t,e,n,r={}){t=ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ma(Ma.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:E0(r.mockUserToken,t.app.options.projectId);s=new Ma(o)}I2(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t){bP(Jr),Ot(new yt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return T2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ye(Dg,jg,t),Ye(Dg,jg,"esm2017")}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};O2();const L2={apiKey:"AIzaSyD7HSF5JNfds34M9lZMABukn3h5czJ4Pqo",authDomain:"learn-worth.firebaseapp.com",databaseURL:"https://learn-worth-default-rtdb.europe-west1.firebasedatabase.app",projectId:"learn-worth",storageBucket:"learn-worth.appspot.com",messagingSenderId:"321629537186",appId:"1:321629537186:web:00dc032d688ca6e51028fb",measurementId:"G-HF30TE19RH"},Ec=A0(L2),qs=uR(Ec),S1=xP(Ec),pe=P2(Ec);HT(Ec);const C1=x.createContext(),g_=["admin@example.com"],ur=()=>{const t=x.useContext(C1);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},D2=({children:t})=>{const[e,n]=x.useState(null),[r,i]=x.useState(!1),[s,o]=x.useState(!0);x.useEffect(()=>qs.onAuthStateChanged(d=>{n(d),i(d?g_.includes(d.email):!1),o(!1)}),[]);const c={currentUser:e,isAdmin:r,login:async(h,d)=>{try{const p=(await kw(qs,h,d)).user;n(p),i(g_.includes(p.email))}catch(f){console.error("Error logging in:",f)}},logout:async()=>{try{await Jk(qs),n(null),i(!1)}catch(h){console.error("Error signing out:",h)}},loading:s};return u.jsx(C1.Provider,{value:c,children:s?null:t})};/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bo.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const __="popstate";function j2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Qd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dl(i)}return F2(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function b1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function M2(){return Math.random().toString(36).substr(2,8)}function v_(t,e){return{usr:t.state,key:t.key,idx:e}}function Qd(t,e,n,r){return n===void 0&&(n=null),bo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?rs(e):e,{state:n,key:e&&e.key||r||M2()})}function Dl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function rs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function F2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Mn.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(bo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Mn.Pop;let w=h(),g=w==null?null:w-c;c=w,l&&l({action:a,location:y.location,delta:g})}function f(w,g){a=Mn.Push;let m=Qd(y.location,w,g);c=h()+1;let v=v_(m,c),E=y.createHref(m);try{o.pushState(v,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function p(w,g){a=Mn.Replace;let m=Qd(y.location,w,g);c=h();let v=v_(m,c),E=y.createHref(m);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function _(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Dl(w);return m=m.replace(/ $/,"%20"),me(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(__,d),l=w,()=>{i.removeEventListener(__,d),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let g=_(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return y}var y_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(y_||(y_={}));function U2(t,e,n){return n===void 0&&(n="/"),z2(t,e,n,!1)}function z2(t,e,n,r){let i=typeof e=="string"?rs(e):e,s=_p(i.pathname||"/",n);if(s==null)return null;let o=I1(t);B2(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=J2(s);a=Y2(o[l],c,r)}return a}function I1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Yn([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),I1(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:K2(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of T1(s.path))i(s,o,l)}),e}function T1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=T1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function B2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Q2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const W2=/^:[\w-]+$/,$2=3,V2=2,H2=1,q2=10,G2=-2,w_=t=>t==="*";function K2(t,e){let n=t.split("/"),r=n.length;return n.some(w_)&&(r+=G2),e&&(r+=V2),n.filter(i=>!w_(i)).reduce((i,s)=>i+(W2.test(s)?$2:s===""?H2:q2),r)}function Q2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Y2(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=x_({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),f=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=x_({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Yn([s,d.pathname]),pathnameBase:nL(Yn([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Yn([s,d.pathnameBase]))}return o}function x_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=X2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:f,isOptional:p}=h;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return p&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function X2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),b1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function J2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return b1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _p(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Z2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?rs(t):t;return{pathname:n?n.startsWith("/")?n:eL(n,e):e,search:rL(r),hash:iL(i)}}function eL(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tL(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vp(t,e){let n=tL(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=rs(t):(i=bo({},t),me(!i.pathname||!i.pathname.includes("?"),Cu("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Cu("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Cu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Z2(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Yn=t=>t.join("/").replace(/\/\/+/g,"/"),nL=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rL=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const k1=["post","put","patch","delete"];new Set(k1);const oL=["get",...k1];new Set(oL);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}const wp=x.createContext(null),aL=x.createContext(null),dr=x.createContext(null),Sc=x.createContext(null),En=x.createContext({outlet:null,matches:[],isDataRoute:!1}),N1=x.createContext(null);function lL(t,e){let{relative:n}=e===void 0?{}:e;is()||me(!1);let{basename:r,navigator:i}=x.useContext(dr),{hash:s,pathname:o,search:a}=P1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Yn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function is(){return x.useContext(Sc)!=null}function Ho(){return is()||me(!1),x.useContext(Sc).location}function R1(t){x.useContext(dr).static||x.useLayoutEffect(t)}function ti(){let{isDataRoute:t}=x.useContext(En);return t?xL():cL()}function cL(){is()||me(!1);let t=x.useContext(wp),{basename:e,future:n,navigator:r}=x.useContext(dr),{matches:i}=x.useContext(En),{pathname:s}=Ho(),o=JSON.stringify(vp(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return R1(()=>{a.current=!0}),x.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=yp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Yn([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function xp(){let{matches:t}=x.useContext(En),e=t[t.length-1];return e?e.params:{}}function P1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=x.useContext(dr),{matches:i}=x.useContext(En),{pathname:s}=Ho(),o=JSON.stringify(vp(i,r.v7_relativeSplatPath));return x.useMemo(()=>yp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uL(t,e){return dL(t,e)}function dL(t,e,n,r){is()||me(!1);let{navigator:i}=x.useContext(dr),{matches:s}=x.useContext(En),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ho(),h;if(e){var d;let w=typeof e=="string"?rs(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||me(!1),h=w}else h=c;let f=h.pathname||"/",p=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=U2(t,{pathname:p}),y=gL(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Yn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Yn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?x.createElement(Sc.Provider,{value:{location:Io({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Mn.Pop}},y):y}function hL(){let t=wL(),e=sL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const fL=x.createElement(hL,null);class pL extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(En.Provider,{value:this.props.routeContext},x.createElement(N1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mL(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(wp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(En.Provider,{value:e},r)}function gL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||me(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:f,errors:p}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let p,_=!1,y=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||fL,l&&(c<0&&f===0?(_=!0,w=null):c===f&&(_=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),m=()=>{let v;return p?v=y:_?v=w:d.route.Component?v=x.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,x.createElement(mL,{match:d,routeContext:{outlet:h,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?x.createElement(pL,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var A1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A1||{}),jl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(jl||{});function _L(t){let e=x.useContext(wp);return e||me(!1),e}function vL(t){let e=x.useContext(aL);return e||me(!1),e}function yL(t){let e=x.useContext(En);return e||me(!1),e}function O1(t){let e=yL(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function wL(){var t;let e=x.useContext(N1),n=vL(jl.UseRouteError),r=O1(jl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xL(){let{router:t}=_L(A1.UseNavigateStable),e=O1(jl.UseNavigateStable),n=x.useRef(!1);return R1(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Io({fromRouteId:e},s)))},[t,e])}function Cc(t){let{to:e,replace:n,state:r,relative:i}=t;is()||me(!1);let{future:s,static:o}=x.useContext(dr),{matches:a}=x.useContext(En),{pathname:l}=Ho(),c=ti(),h=yp(e,vp(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(h);return x.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function Ae(t){me(!1)}function EL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:s,static:o=!1,future:a}=t;is()&&me(!1);let l=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:s,static:o,future:Io({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=rs(r));let{pathname:h="/",search:d="",hash:f="",state:p=null,key:_="default"}=r,y=x.useMemo(()=>{let w=_p(h,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:_},navigationType:i}},[l,h,d,f,p,_,i]);return y==null?null:x.createElement(dr.Provider,{value:c},x.createElement(Sc.Provider,{children:n,value:y}))}function SL(t){let{children:e,location:n}=t;return uL(Yd(e),n)}new Promise(()=>{});function Yd(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,Yd(r.props.children,s));return}r.type!==Ae&&me(!1),!r.props.index||!r.props.children||me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xd.apply(this,arguments)}function CL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IL(t,e){return t.button===0&&(!e||e==="_self")&&!bL(t)}const TL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kL="6";try{window.__reactRouterVersion=kL}catch{}const NL="startTransition",E_=UE[NL];function RL(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=j2({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=x.useCallback(d=>{c&&E_?E_(()=>l(d)):l(d)},[l,c]);return x.useLayoutEffect(()=>o.listen(h),[o,h]),x.createElement(EL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const PL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,f=CL(e,TL),{basename:p}=x.useContext(dr),_,y=!1;if(typeof c=="string"&&AL.test(c)&&(_=c,PL))try{let v=new URL(window.location.href),E=c.startsWith("//")?new URL(v.protocol+c):new URL(c),S=_p(E.pathname,p);E.origin===v.origin&&S!=null?c=S+E.search+E.hash:y=!0}catch{}let w=lL(c,{relative:i}),g=OL(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function m(v){r&&r(v),v.defaultPrevented||g(v)}return x.createElement("a",Xd({},f,{href:_||w,onClick:y||s?r:m,ref:n,target:l}))});var S_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(S_||(S_={}));var C_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(C_||(C_={}));function OL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=ti(),c=Ho(),h=P1(t,{relative:o});return x.useCallback(d=>{if(IL(d,n)){d.preventDefault();let f=r!==void 0?r:Dl(c)===Dl(h);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}const LL=()=>{const[t,e]=x.useState(""),[n,r]=x.useState(""),[i,s]=x.useState(""),[o,a]=x.useState(""),l=ti(),c=async h=>{h.preventDefault();try{const f=(await qk(qs,n,i)).user;await La(f,{displayName:t}),l("/login")}catch(d){a(d.message)}};return u.jsxs("div",{className:"flex h-screen w-full",children:[u.jsx("div",{className:"flex-1 flex flex-col md:w-1/4 items-center justify-center bg-gray-100 p-8",children:u.jsxs("div",{className:"max-w-xl w-full  bg-white p-10 rounded-lg shadow-lg relative",children:[u.jsx("h1",{className:"text-4xl font-bold text-blue-600 mb-2",children:"LearnWorth"}),u.jsx("p",{className:"text-lg font-medium text-gray-700 mb-6",children:"Hi There 👋 !!"}),u.jsxs("form",{onSubmit:c,className:"space-y-4",children:[o&&u.jsx("p",{className:"text-red-500",children:o}),u.jsx("input",{type:"text",placeholder:"Username",value:t,onChange:h=>e(h.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),u.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:h=>r(h.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),u.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:h=>s(h.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),u.jsx("button",{type:"submit",className:"w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"REGISTER"}),u.jsxs("p",{className:"items-center mt-5",children:["Already have account? ",u.jsx("span",{children:u.jsx(W,{to:"/login",className:"text-blue-500",children:"Login"})})]})]})]})}),u.jsx("div",{className:"hidden md:flex md:w-3/4 flex-1 items-center justify-center bg-blue-600",children:u.jsx("img",{src:"/src/assets/images/students.jpg",alt:"Showcase of LearnWorth",className:"w-full h-full object-cover"})})]})},DL=()=>{const[t,e]=x.useState(""),[n,r]=x.useState(""),[i,s]=x.useState(""),o=ti(),a=async l=>{l.preventDefault(),s("");try{await kw(qs,t,n),o("/")}catch(c){s(c.message)}};return u.jsxs("div",{className:"flex h-screen",children:[u.jsx("div",{className:"hidden md:flex flex-1 items-center justify-center bg-blue-600",children:u.jsx("img",{src:"/src/assets/images/Signin.jpg",alt:"Showcase of LearnWorth",className:"w-full h-full object-cover"})}),u.jsx("div",{className:"flex-1 flex flex-col items-center justify-center bg-gray-100 p-8",children:u.jsxs("div",{className:"max-w-xl w-full bg-white p-10 rounded-lg shadow-lg",children:[u.jsx("h1",{className:"text-4xl font-bold text-blue-600 mb-2",children:"LearnWorth"}),u.jsx("p",{className:"text-lg font-medium text-gray-700 mb-6",children:"Welcome Back 😉!"}),u.jsxs("form",{onSubmit:a,className:"space-y-4",children:[i&&u.jsx("p",{className:"text-red-500",children:i}),u.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:l=>e(l.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),u.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:l=>r(l.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),u.jsx("button",{type:"submit",className:"w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"LOGIN"}),u.jsxs("p",{className:"items-center mt-5",children:["Create new account? ",u.jsx("span",{children:u.jsx(W,{to:"/register",className:"text-blue-500",children:"SingUp"})})]})]})]})})]})},Jd="/assets/default-gblOB7W2.png",b_=()=>{};let Ep={},L1={},D1=null,j1={mark:b_,measure:b_};try{typeof window<"u"&&(Ep=window),typeof document<"u"&&(L1=document),typeof MutationObserver<"u"&&(D1=MutationObserver),typeof performance<"u"&&(j1=performance)}catch{}const{userAgent:I_=""}=Ep.navigator||{},tr=Ep,ee=L1,T_=D1,ya=j1;tr.document;const Sn=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",M1=~I_.indexOf("MSIE")||~I_.indexOf("Trident/");var ie="classic",F1="duotone",at="sharp",lt="sharp-duotone",jL=[ie,F1,at,lt],ML={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},k_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},FL=["kit"],UL=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,zL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,BL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},WL={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},$L={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},VL={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},HL={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},qL={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},U1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},GL=["solid","regular","light","thin","duotone","brands"],z1=[1,2,3,4,5,6,7,8,9,10],KL=z1.concat([11,12,13,14,15,16,17,18,19,20]),Ts={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},QL=[...Object.keys(VL),...GL,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ts.GROUP,Ts.SWAP_OPACITY,Ts.PRIMARY,Ts.SECONDARY].concat(z1.map(t=>"".concat(t,"x"))).concat(KL.map(t=>"w-".concat(t))),YL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},XL={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},JL={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},N_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const vn="___FONT_AWESOME___",Zd=16,B1="fa",W1="svg-inline--fa",Gr="data-fa-i2svg",eh="data-fa-pseudo-element",ZL="data-fa-pseudo-element-pending",Sp="data-prefix",Cp="data-icon",R_="fontawesome-i2svg",eD="async",tD=["HTML","HEAD","STYLE","SCRIPT"],$1=(()=>{try{return!0}catch{return!1}})(),V1=[ie,at,lt];function qo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ie]}})}const H1={...U1};H1[ie]={...U1[ie],...k_.kit,...k_["kit-duotone"]};const Rr=qo(H1),th={...qL};th[ie]={...th[ie],...N_.kit,...N_["kit-duotone"]};const To=qo(th),nh={...HL};nh[ie]={...nh[ie],...JL.kit};const Pr=qo(nh),rh={...$L};rh[ie]={...rh[ie],...XL.kit};const nD=qo(rh),rD=UL,q1="fa-layers-text",iD=zL,sD={...ML};qo(sD);const oD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bu=Ts,Hi=new Set;Object.keys(To[ie]).map(Hi.add.bind(Hi));Object.keys(To[at]).map(Hi.add.bind(Hi));Object.keys(To[lt]).map(Hi.add.bind(Hi));const aD=[...FL,...QL],Gs=tr.FontAwesomeConfig||{};function lD(t){var e=ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ee&&typeof ee.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=cD(lD(n));i!=null&&(Gs[r]=i)});const G1={styleDefault:"solid",familyDefault:"classic",cssPrefix:B1,replacementClass:W1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gs.familyPrefix&&(Gs.cssPrefix=Gs.familyPrefix);const qi={...G1,...Gs};qi.autoReplaceSvg||(qi.observeMutations=!1);const P={};Object.keys(G1).forEach(t=>{Object.defineProperty(P,t,{enumerable:!0,set:function(e){qi[t]=e,Ks.forEach(n=>n(P))},get:function(){return qi[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){qi.cssPrefix=t,Ks.forEach(e=>e(P))},get:function(){return qi.cssPrefix}});tr.FontAwesomeConfig=P;const Ks=[];function uD(t){return Ks.push(t),()=>{Ks.splice(Ks.indexOf(t),1)}}const In=Zd,Bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dD(t){if(!t||!Sn)return;const e=ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ee.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ee.head.insertBefore(e,r),t}const hD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ko(){let t=12,e="";for(;t-- >0;)e+=hD[Math.random()*62|0];return e}function ss(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bp(t){return t.classList?ss(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function K1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(K1(t[n]),'" '),"").trim()}function bc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ip(t){return t.size!==Bt.size||t.x!==Bt.x||t.y!==Bt.y||t.rotate!==Bt.rotate||t.flipX||t.flipY}function pD(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function mD(t){let{transform:e,width:n=Zd,height:r=Zd,startCentered:i=!1}=t,s="";return i&&M1?s+="translate(".concat(e.x/In-n/2,"em, ").concat(e.y/In-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/In,"em), calc(-50% + ").concat(e.y/In,"em)) "):s+="translate(".concat(e.x/In,"em, ").concat(e.y/In,"em) "),s+="scale(".concat(e.size/In*(e.flipX?-1:1),", ").concat(e.size/In*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var gD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Q1(){const t=B1,e=W1,n=P.cssPrefix,r=P.replacementClass;let i=gD;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let P_=!1;function Iu(){P.autoAddCss&&!P_&&(dD(Q1()),P_=!0)}var _D={mixout(){return{dom:{css:Q1,insertCss:Iu}}},hooks(){return{beforeDOMElementCreation(){Iu()},beforeI2svg(){Iu()}}}};const yn=tr||{};yn[vn]||(yn[vn]={});yn[vn].styles||(yn[vn].styles={});yn[vn].hooks||(yn[vn].hooks={});yn[vn].shims||(yn[vn].shims=[]);var Wt=yn[vn];const Y1=[],X1=function(){ee.removeEventListener("DOMContentLoaded",X1),Ml=1,Y1.map(t=>t())};let Ml=!1;Sn&&(Ml=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Ml||ee.addEventListener("DOMContentLoaded",X1));function vD(t){Sn&&(Ml?setTimeout(t,0):Y1.push(t))}function Go(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?K1(t):"<".concat(e," ").concat(fD(n),">").concat(r.map(Go).join(""),"</").concat(e,">")}function A_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Tu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,h;for(r===void 0?(l=1,h=e[s[0]]):(l=0,h=r);l<o;l++)c=s[l],h=a(h,e[c],c,e);return h};function yD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ih(t){const e=yD(t);return e.length===1?e[0].toString(16):null}function wD(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function O_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function sh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=O_(e);typeof Wt.hooks.addPack=="function"&&!r?Wt.hooks.addPack(t,O_(e)):Wt.styles[t]={...Wt.styles[t]||{},...i},t==="fas"&&sh("fa",e)}const{styles:yr,shims:xD}=Wt,ED={[ie]:Object.values(Pr[ie]),[at]:Object.values(Pr[at]),[lt]:Object.values(Pr[lt])};let Tp=null,J1={},Z1={},eE={},tE={},nE={};const SD={[ie]:Object.keys(Rr[ie]),[at]:Object.keys(Rr[at]),[lt]:Object.keys(Rr[lt])};function CD(t){return~aD.indexOf(t)}function bD(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!CD(i)?i:null}const rE=()=>{const t=r=>Tu(yr,(i,s,o)=>(i[o]=Tu(s,r,{}),i),{});J1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Z1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),nE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in yr||P.autoFetchSvg,n=Tu(xD,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});eE=n.names,tE=n.unicodes,Tp=Ic(P.styleDefault,{family:P.familyDefault})};uD(t=>{Tp=Ic(t.styleDefault,{family:P.familyDefault})});rE();function kp(t,e){return(J1[t]||{})[e]}function ID(t,e){return(Z1[t]||{})[e]}function Fn(t,e){return(nE[t]||{})[e]}function iE(t){return eE[t]||{prefix:null,iconName:null}}function TD(t){const e=tE[t],n=kp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nr(){return Tp}const Np=()=>({prefix:null,iconName:null,rest:[]});function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ie}=e,r=Rr[n][t],i=To[n][t]||To[n][r],s=t in Wt.styles?t:null;return i||s||null}const kD={[ie]:Object.keys(Pr[ie]),[at]:Object.keys(Pr[at]),[lt]:Object.keys(Pr[lt])};function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[ie]:"".concat(P.cssPrefix,"-").concat(ie),[at]:"".concat(P.cssPrefix,"-").concat(at),[lt]:"".concat(P.cssPrefix,"-").concat(lt)};let i=null,s=ie;const o=jL.filter(l=>l!==F1);o.forEach(l=>{(t.includes(r[l])||t.some(c=>kD[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const h=bD(P.cssPrefix,c);if(yr[c]?(c=ED[s].includes(c)?nD[s][c]:c,i=c,l.prefix=c):SD[s].indexOf(c)>-1?(i=c,l.prefix=Ic(c,{family:s})):h?l.iconName=h:c!==P.replacementClass&&!o.some(d=>c===r[d])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const d=i==="fa"?iE(l.iconName):{},f=Fn(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||f||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!yr.far&&yr.fas&&!P.autoFetchSvg&&(l.prefix="fas")}return l},Np());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===at&&(yr.fass||P.autoFetchSvg)&&(a.prefix="fass",a.iconName=Fn(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===lt&&(yr.fasds||P.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Fn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=nr()||"fas"),a}class ND{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},sh(s,i[s]);const o=Pr[ie][s];o&&sh(o,i[s]),rE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let L_=[],yi={};const Oi={},RD=Object.keys(Oi);function PD(t,e){let{mixoutsTo:n}=e;return L_=t,yi={},Object.keys(Oi).forEach(r=>{RD.indexOf(r)===-1&&delete Oi[r]}),L_.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{yi[o]||(yi[o]=[]),yi[o].push(s[o])})}r.provides&&r.provides(Oi)}),n}function oh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(yi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Kr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(yi[t]||[]).forEach(s=>{s.apply(null,n)})}function rr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oi[t]?Oi[t].apply(null,e):void 0}function ah(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||nr();if(e)return e=Fn(n,e)||e,A_(sE.definitions,n,e)||A_(Wt.styles,n,e)}const sE=new ND,AD=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,Kr("noAuto")},OD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sn?(Kr("beforeI2svg",t),rr("pseudoElements2svg",t),rr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,vD(()=>{DD({autoReplaceSvgRoot:e}),Kr("watch",t)})}},LD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ic(t[0]);return{prefix:n,iconName:Fn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(rD))){const e=Tc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||nr(),iconName:Fn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=nr();return{prefix:e,iconName:Fn(e,t)||t}}}},ht={noAuto:AD,config:P,dom:OD,parse:LD,library:sE,findIconDefinition:ah,toHtml:Go},DD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ee}=t;(Object.keys(Wt.styles).length>0||P.autoFetchSvg)&&Sn&&P.autoReplaceSvg&&ht.dom.i2svg({node:e})};function kc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Go(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Sn)return;const n=ee.createElement("div");return n.innerHTML=t.html,n.children}}),t}function jD(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Ip(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=bc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function MD(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Rp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:h,watchable:d=!1}=t,{width:f,height:p}=n.found?n:e,_=r==="fak",y=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(S=>h.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(h.classes).join(" ");let w={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:y,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const g=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(w.attributes[Gr]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||ko())},children:[a]}),delete w.attributes.title);const m={...w,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...g,...h.styles}},{children:v,attributes:E}=n.found&&e.found?rr("generateAbstractMask",m)||{children:[],attributes:{}}:rr("generateAbstractIcon",m)||{children:[],attributes:{}};return m.children=v,m.attributes=E,o?MD(m):jD(m)}function D_(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Gr]="");const c={...o.styles};Ip(i)&&(c.transform=mD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=bc(c);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function FD(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=bc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ku}=Wt;function lh(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(bu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(bu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(bu.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const UD={found:!1,width:512,height:512};function zD(t,e){!$1&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ch(t,e){let n=e;return e==="fa"&&P.styleDefault!==null&&(e=nr()),new Promise((r,i)=>{if(n==="fa"){const s=iE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ku[e]&&ku[e][t]){const s=ku[e][t];return r(lh(s))}zD(t,e),r({...UD,icon:P.showMissingIcons&&t?rr("missingIconAbstract")||{}:{}})})}const j_=()=>{},uh=P.measurePerformance&&ya&&ya.mark&&ya.measure?ya:{mark:j_,measure:j_},ks='FA "6.6.0"',BD=t=>(uh.mark("".concat(ks," ").concat(t," begins")),()=>oE(t)),oE=t=>{uh.mark("".concat(ks," ").concat(t," ends")),uh.measure("".concat(ks," ").concat(t),"".concat(ks," ").concat(t," begins"),"".concat(ks," ").concat(t," ends"))};var Pp={begin:BD,end:oE};const Fa=()=>{};function M_(t){return typeof(t.getAttribute?t.getAttribute(Gr):null)=="string"}function WD(t){const e=t.getAttribute?t.getAttribute(Sp):null,n=t.getAttribute?t.getAttribute(Cp):null;return e&&n}function $D(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function VD(){return P.autoReplaceSvg===!0?Ua.replace:Ua[P.autoReplaceSvg]||Ua.replace}function HD(t){return ee.createElementNS("http://www.w3.org/2000/svg",t)}function qD(t){return ee.createElement(t)}function aE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?HD:qD}=e;if(typeof t=="string")return ee.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(aE(s,{ceFn:n}))}),r}function GD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ua={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(aE(n),e)}),e.getAttribute(Gr)===null&&P.keepOriginalSource){let n=ee.createComment(GD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~bp(e).indexOf(P.replacementClass))return Ua.replace(t);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===P.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Go(s)).join(`
`);e.setAttribute(Gr,""),e.innerHTML=i}};function F_(t){t()}function lE(t,e){const n=typeof e=="function"?e:Fa;if(t.length===0)n();else{let r=F_;P.mutateApproach===eD&&(r=tr.requestAnimationFrame||F_),r(()=>{const i=VD(),s=Pp.begin("mutate");t.map(i),s(),n()})}}let Ap=!1;function cE(){Ap=!0}function dh(){Ap=!1}let Fl=null;function U_(t){if(!T_||!P.observeMutations)return;const{treeCallback:e=Fa,nodeCallback:n=Fa,pseudoElementsCallback:r=Fa,observeMutationsRoot:i=ee}=t;Fl=new T_(s=>{if(Ap)return;const o=nr();ss(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!M_(a.addedNodes[0])&&(P.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&P.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&M_(a.target)&&~oD.indexOf(a.attributeName))if(a.attributeName==="class"&&WD(a.target)){const{prefix:l,iconName:c}=Tc(bp(a.target));a.target.setAttribute(Sp,l||o),c&&a.target.setAttribute(Cp,c)}else $D(a.target)&&n(a.target)})}),Sn&&Fl.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function KD(){Fl&&Fl.disconnect()}function QD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function YD(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Tc(bp(t));return i.prefix||(i.prefix=nr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ID(i.prefix,t.innerText)||kp(i.prefix,ih(t.innerText))),!i.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function XD(t){const e=ss(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||ko()):(e["aria-hidden"]="true",e.focusable="false")),e}function JD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function z_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=YD(t),s=XD(t),o=oh("parseNodeAttributes",{},t);let a=e.styleParser?QD(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:ZD}=Wt;function uE(t){const e=P.autoReplaceSvg==="nest"?z_(t,{styleParser:!1}):z_(t);return~e.extra.classes.indexOf(q1)?rr("generateLayersText",t,e):rr("generateSvgReplacementMutation",t,e)}let Kt=new Set;V1.map(t=>{Kt.add("fa-".concat(t))});Object.keys(Rr[ie]).map(Kt.add.bind(Kt));Object.keys(Rr[at]).map(Kt.add.bind(Kt));Object.keys(Rr[lt]).map(Kt.add.bind(Kt));Kt=[...Kt];function B_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sn)return Promise.resolve();const n=ee.documentElement.classList,r=h=>n.add("".concat(R_,"-").concat(h)),i=h=>n.remove("".concat(R_,"-").concat(h)),s=P.autoFetchSvg?Kt:V1.map(h=>"fa-".concat(h)).concat(Object.keys(ZD));s.includes("fa")||s.push("fa");const o=[".".concat(q1,":not([").concat(Gr,"])")].concat(s.map(h=>".".concat(h,":not([").concat(Gr,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=ss(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Pp.begin("onTree"),c=a.reduce((h,d)=>{try{const f=uE(d);f&&h.push(f)}catch(f){$1||f.name==="MissingIcon"&&console.error(f)}return h},[]);return new Promise((h,d)=>{Promise.all(c).then(f=>{lE(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),h()})}).catch(f=>{l(),d(f)})})}function ej(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uE(t).then(n=>{n&&lE([n],e)})}function tj(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ah(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ah(i||{})),t(r,{...n,mask:i})}}const nj=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Bt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:p}=t;return kc({type:"icon",...t},()=>(Kr("beforeDOMElementCreation",{iconDefinition:t,params:e}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(a||ko()):(c["aria-hidden"]="true",c.focusable="false")),Rp({icons:{main:lh(p),mask:i?lh(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...Bt,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:h,classes:l}})))};var rj={mixout(){return{icon:tj(nj)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=B_,t.nodeCallback=ej,t}}},provides(t){t.i2svg=function(e){const{node:n=ee,callback:r=()=>{}}=e;return B_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:h,extra:d}=n;return new Promise((f,p)=>{Promise.all([ch(r,o),c.iconName?ch(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[y,w]=_;f([e,Rp({icons:{main:y,mask:w},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:i,titleId:s,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=bc(o);a.length>0&&(r.style=a);let l;return Ip(s)&&(l=rr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},ij={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return kc({type:"layer"},()=>{Kr("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},sj={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return kc({type:"counter",content:t},()=>(Kr("beforeDOMElementCreation",{content:t,params:e}),FD({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},oj={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Bt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return kc({type:"text",content:t},()=>(Kr("beforeDOMElementCreation",{content:t,params:e}),D_({content:t,transform:{...Bt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(M1){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return P.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,D_({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const aj=new RegExp('"',"ug"),W_=[1105920,1112319],$_={FontAwesome:{normal:"fas",400:"fas"},...WL,...BL,...YL},hh=Object.keys($_).reduce((t,e)=>(t[e.toLowerCase()]=$_[e],t),{}),lj=Object.keys(hh).reduce((t,e)=>{const n=hh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function cj(t){const e=t.replace(aj,""),n=wD(e,0),r=n>=W_[0]&&n<=W_[1],i=e.length===2?e[0]===e[1]:!1;return{value:ih(i?e[0]:e),isSecondary:r||i}}function uj(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(hh[n]||{})[i]||lj[n]}function V_(t,e){const n="".concat(ZL).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=ss(t.children).filter(f=>f.getAttribute(eh)===e)[0],a=tr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(iD),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&d!=="none"&&d!==""){const f=a.getPropertyValue("content");let p=uj(l,h);const{value:_,isSecondary:y}=cj(f),w=c[0].startsWith("FontAwesome");let g=kp(p,_),m=g;if(w){const v=TD(_);v.iconName&&v.prefix&&(g=v.iconName,p=v.prefix)}if(g&&!y&&(!o||o.getAttribute(Sp)!==p||o.getAttribute(Cp)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);const v=JD(),{extra:E}=v;E.attributes[eh]=e,ch(g,p).then(S=>{const I=Rp({...v,icons:{main:S,mask:Np()},prefix:p,iconName:m,extra:E,watchable:!0}),T=ee.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=I.map(k=>Go(k)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function dj(t){return Promise.all([V_(t,"::before"),V_(t,"::after")])}function hj(t){return t.parentNode!==document.head&&!~tD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(eh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function H_(t){if(Sn)return new Promise((e,n)=>{const r=ss(t.querySelectorAll("*")).filter(hj).map(dj),i=Pp.begin("searchPseudoElements");cE(),Promise.all(r).then(()=>{i(),dh(),e()}).catch(()=>{i(),dh(),n()})})}var fj={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=H_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ee}=e;P.searchPseudoElements&&H_(n)}}};let q_=!1;var pj={mixout(){return{dom:{unwatch(){cE(),q_=!0}}}},hooks(){return{bootstrap(){U_(oh("mutationObserverCallbacks",{}))},noAuto(){KD()},watch(t){const{observeMutationsRoot:e}=t;q_?dh():U_(oh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const G_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var mj={mixout(){return{parse:{transform:t=>G_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=G_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:h,path:d};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const Nu={x:0,y:0,width:"100%",height:"100%"};function K_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function gj(t){return t.tag==="g"?t.children:[t]}var _j={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Tc(n.split(" ").map(i=>i.trim())):Np();return r.prefix||(r.prefix=nr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:h,icon:d}=s,f=pD({transform:a,containerWidth:h,iconWidth:l}),p={tag:"rect",attributes:{...Nu,fill:"white"}},_=c.children?{children:c.children.map(K_)}:{},y={tag:"g",attributes:{...f.inner},children:[K_({tag:c.tag,attributes:{...c.attributes,...f.path},..._})]},w={tag:"g",attributes:{...f.outer},children:[y]},g="mask-".concat(o||ko()),m="clip-".concat(o||ko()),v={tag:"mask",attributes:{...Nu,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,w]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:gj(d)},v]};return n.push(E,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(g,")"),...Nu}}),{children:n,attributes:r}}}},vj={provides(t){let e=!1;tr.matchMedia&&(e=tr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},yj={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},wj=[_D,rj,ij,sj,oj,fj,pj,mj,_j,vj,yj];PD(wj,{mixoutsTo:ht});ht.noAuto;ht.config;ht.library;ht.dom;const fh=ht.parse;ht.findIconDefinition;ht.toHtml;const xj=ht.icon;ht.layer;ht.text;ht.counter;var dE={exports:{}},Ej="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sj=Ej,Cj=Sj;function hE(){}function fE(){}fE.resetWarningCache=hE;var bj=function(){function t(r,i,s,o,a,l){if(l!==Cj){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:fE,resetWarningCache:hE};return n.PropTypes=n,n};dE.exports=bj();var Ij=dE.exports;const U=tv(Ij);function Q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q_(Object(n),!0).forEach(function(r){wi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ul(t){"@babel/helpers - typeof";return Ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ul(t)}function wi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kj(t,e){if(t==null)return{};var n=Tj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ph(t){return Nj(t)||Rj(t)||Pj(t)||Aj()}function Nj(t){if(Array.isArray(t))return mh(t)}function Rj(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pj(t,e){if(t){if(typeof t=="string")return mh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mh(t,e)}}function mh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Aj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oj(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,h=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,_=t.border,y=t.listItem,w=t.flip,g=t.size,m=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":_,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},wi(e,"fa-".concat(g),typeof g<"u"&&g!==null),wi(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),wi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),wi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function Lj(t){return t=t-0,t===t}function pE(t){return Lj(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Dj=["style"];function jj(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Mj(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=pE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[jj(i)]=s:e[i]=s,e},{})}function mE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return mE(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var h=e.attributes[c];switch(c){case"class":l.attrs.className=h,delete e.attributes.class;break;case"style":l.attrs.style=Mj(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=h:l.attrs[pE(c)]=h}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=kj(n,Dj);return i.attrs.style=Ft(Ft({},i.attrs.style),o),t.apply(void 0,[e.tag,Ft(Ft({},i.attrs),a)].concat(ph(r)))}var gE=!1;try{gE=!0}catch{}function Fj(){if(!gE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Y_(t){if(t&&Ul(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(fh.icon)return fh.icon(t);if(t===null)return null;if(t&&Ul(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ru(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?wi({},t,e):{}}var X_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ir=kt.forwardRef(function(t,e){var n=Ft(Ft({},X_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,h=Y_(r),d=Ru("classes",[].concat(ph(Oj(n)),ph((o||"").split(" ")))),f=Ru("transform",typeof n.transform=="string"?fh.transform(n.transform):n.transform),p=Ru("mask",Y_(i)),_=xj(h,Ft(Ft(Ft(Ft({},d),f),p),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!_)return Fj("Could not find icon",h),null;var y=_.abstract,w={ref:e};return Object.keys(n).forEach(function(g){X_.hasOwnProperty(g)||(w[g]=n[g])}),Uj(y[0],w)});Ir.displayName="FontAwesomeIcon";Ir.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};var Uj=mE.bind(null,kt.createElement);const zj={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Qt=()=>{const{currentUser:t}=ur(),[e,n]=x.useState(!1),r=()=>{n(!e)};return u.jsxs("nav",{className:"bg-white shadow-lg flex p-2 fixed w-full z-50 top-0",children:[u.jsx(Ir,{icon:zj,size:"2x",className:"text-blue-600 items-center md:hidden relative top-4",onClick:r}),u.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center py-3",children:[u.jsx("div",{className:"text-blue-600 text-2xl font-bold",children:u.jsx(W,{to:"/",children:"LearnWorth"})}),u.jsxs("ul",{className:"hidden md:flex space-x-8 text-gray-600 font-medium",children:[u.jsx("li",{children:u.jsx(W,{to:"/courses",className:"hover:text-blue-600",children:"Courses"})}),u.jsx("li",{children:u.jsx(W,{to:"/quizzes",className:"hover:text-blue-600",children:"Quizzes"})}),u.jsx("li",{children:u.jsx(W,{to:"/flash-cards",className:"hover:text-blue-600",children:"Flash cards"})}),u.jsx("li",{children:u.jsx(W,{to:"/about-us",className:"hover:text-blue-600",children:"About us"})})]}),e&&u.jsx("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-50 z-40",onClick:r,children:u.jsxs("div",{className:"fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-4",children:[u.jsx("h2",{className:"text-blue-600 text-2xl font-bold",children:"LearnWorth"}),u.jsxs("ul",{className:"space-y-9 relative top-10",children:[u.jsx("li",{children:u.jsx(W,{to:"/courses",className:"hover:text-blue-600",onClick:r,children:"Courses"})}),u.jsx("li",{children:u.jsx(W,{to:"/quizzes",className:"hover:text-blue-600",onClick:r,children:"Quizzes"})}),u.jsx("li",{children:u.jsx(W,{to:"/flash-cards",className:"hover:text-blue-600",onClick:r,children:"Flash cards"})}),u.jsx("li",{children:u.jsx(W,{to:"/about-us",className:"hover:text-blue-600",onClick:r,children:"About us"})})]}),u.jsx("div",{className:"bg-blue-600 h-40 relative top-80 bottom-0"})]})}),u.jsx("div",{className:"flex items-center space-x-4",children:t?u.jsx(u.Fragment,{children:u.jsx(W,{to:"/profile",className:"text-gray-600 font-medium flex items-center gap-3",children:u.jsx("img",{src:t.photoURL||Jd,alt:"profile",className:"h-10 w-10 rounded-full object-cover"})})}):u.jsxs(u.Fragment,{children:[u.jsx(W,{to:"/login",className:"hover:text-blue-600 font-medium hover:border-2 hover:border-blue-600 px-4 py-2 rounded-md transition translate-x-1",children:"Login"}),u.jsx(W,{to:"/register",className:"px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition translate-x-1",children:"Sign Up"})]})})]})]})},Bj="/assets/hero-FiS5BLXQ.png",Wj="/assets/backhero-C0P_g937.png",$j=()=>u.jsx(u.Fragment,{children:u.jsx("section",{className:"py-10 h-[150vh] md:h-full w-full",children:u.jsxs("div",{className:"container mx-auto md:flex-nowrap flex-wrap flex items-center justify-between p-5",children:[u.jsxs("div",{className:"left w-full md:w-3/4 text-gray-700 mb-8 md:mb-0",children:[u.jsxs("h1",{className:"text-5xl leading-tight text-blue-600 font-semibold",children:["Master New Skills ",u.jsx("br",{})," Your Way ",u.jsx("br",{})," Anytime, Anywhere."]}),u.jsx("h3",{className:"text-lg mt-3",children:"Unlimited access to all 60+ E-learning content."}),u.jsx("span",{className:"text-[14px]",children:"You`re guaranteed to find something that`s right for you."})]}),u.jsxs("div",{className:"right w-full md:1/4 relative",children:[u.jsxs("div",{className:"images relative",children:[u.jsx("img",{src:Wj,alt:"back",className:" absolute top-32 md:right-10",width:650}),u.jsx("div",{className:"img h-[85vh] w-full",children:u.jsx("img",{src:Bj,alt:"heroImage",className:"object-cover md:object-cover w-full h-full z-20 relative"})})]}),u.jsx("div",{className:"content"})]})]})})}),_E=({thumbnail:t,title:e,description:n,link:r})=>u.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-xl max-w-xs",children:[u.jsx("img",{src:t,alt:"Course Thumbnail",className:"h-48 w-full object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-xl font-semibold text-blue-600 mb-2",children:e}),u.jsx("p",{className:"text-gray-600 mb-4",children:n}),u.jsx(W,{to:r,className:"text-blue-500 font-medium hover:underline",children:"View More"})]})]}),vE="/assets/about-CKsguJST.jpg",Vj=()=>u.jsx("section",{className:"w-full bg-gray-50 py-16 mt-10",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-32",children:[u.jsx("div",{className:"md:w-1/2",children:u.jsx("img",{src:vE,alt:"About LearnWorth",className:"rounded-lg shadow-lg w-full object-cover h-80 md:h-full"})}),u.jsxs("div",{className:"md:w-1/2 text-center md:text-left",children:[u.jsx("h2",{className:"text-3xl font-bold text-blue-600 mb-4",children:"About LearnWorth"}),u.jsxs("p",{className:"text-lg text-gray-600 mb-6 leading-relaxed",children:["Welcome to ",u.jsx("span",{className:"font-semibold text-blue-600",children:"LearnWorth"})," — an online educational platform dedicated to improving financial literacy across Rwanda. Our mission is to provide free, accessible resources that empower students to make informed financial decisions and build a foundation for financial success."]}),u.jsx(W,{to:"/about-us",children:u.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-500 transition",children:"Learn More"})})]})]})}),Hj={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},qj={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]},Gj={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Kj={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Ko=()=>{const{isAdmin:t}=ur();return u.jsx(u.Fragment,{children:u.jsxs("footer",{className:"bg-gray-900 text-gray-300 py-10 relative",children:[u.jsxs("div",{className:"container md:flex justify-evenly px-5",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-white font-bold text-4xl mb-4",children:"LearnWorth"}),u.jsx("p",{className:"text-gray-400",children:"Best Online E-learning platform"})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-white font-bold text-base mb-4",children:"Quick Links"}),u.jsxs("ul",{children:[u.jsx(W,{to:"/",children:u.jsx("li",{className:"hover:text-white",children:"Home"})}),u.jsx(W,{to:"/courses",children:u.jsx("li",{className:"hover:text-white",children:"Courses"})}),u.jsx(W,{to:"/quizzes",children:u.jsx("li",{className:"hover:text-white",children:"Quizzes"})}),u.jsx(W,{to:"/flash-cards",children:u.jsx("li",{className:"hover:text-white",children:"Flashcards"})}),u.jsx(W,{to:"/about-us",children:u.jsx("li",{className:"hover:text-white",children:"About Us"})})]})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-white font-bold text-lg mb-4",children:"Contact Us"}),u.jsxs("p",{children:[u.jsx("strong",{children:"Email:"})," support@learnworth.com"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Phone:"})," +123 456 7890"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Address:"})," 123 Bumbogo St, Kigali City"]})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-white font-bold text-lg mb-4",children:"Follow Us"}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white",children:u.jsx(Ir,{icon:qj,size:"2x"})}),u.jsx("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white",children:u.jsx(Ir,{icon:Kj,size:"2x"})}),u.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white",children:u.jsx(Ir,{icon:Gj,size:"2x"})}),u.jsx("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white",children:u.jsx(Ir,{icon:Hj,size:"2x"})})]}),u.jsx(W,{to:t?"/admin":"/login",className:"text-gray-400 hover:text-white mt-5 relative flex",children:"Admin"})]})]}),u.jsx("div",{className:"text-center border-t border-gray-700 mt-10 pt-5 text-gray-500 text-sm",children:u.jsx("p",{children:"© 2024 LearnWorth. All rights reserved."})})]})})},yE=[{title:"Free Courses",description:"Access a variety of courses designed to improve financial literacy.",icon:"/src/assets/icons/books.png"},{title:"Interactive Learning",description:"Engage with interactive modules and real-life financial scenarios.",icon:"/src/assets/icons/interactive.png"},{title:"Test yourself",description:"Quizes and flashcards that will help your learning expirience better.",icon:"/src/assets/icons/test.png"}],Qj=()=>{const[t,e]=x.useState([]);return x.useEffect(()=>{const n=fe(pe,"courses");ot(n,r=>{const i=r.val(),o=(i?Object.entries(i).map(([a,l])=>({id:a,...l})):[]).sort(()=>.5-Math.random()).slice(0,3);e(o)})},[]),u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("div",{className:"flex flex-col items-center py-20 px-4 md:p-10 bg-white",children:[u.jsx($j,{}),u.jsxs("section",{className:"text-center bg-blue-600 text-white p-8 rounded-lg w-full max-w-3xl mb-8 shadow-md",children:[u.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Welcome to LearnWorth"}),u.jsx("p",{className:"mb-6",children:"Discover a wealth of study materials and take your learning to the next level!"}),u.jsx(W,{to:"/courses",children:u.jsx("button",{className:"bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition",children:"Get Started"})})]}),u.jsx(Vj,{}),u.jsxs("section",{className:"w-full max-w-4xl mt-16",children:[u.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-700",children:"Featured Study Materials"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:t.length>0?t.map(n=>u.jsx(_E,{thumbnail:n.thumbnail,title:n.title,description:n.description,link:`/courses/${n.id}`},n.id)):u.jsx("p",{className:"text-center text-gray-500",children:"Loading featured courses..."})})]}),u.jsx("section",{className:"w-full bg-gray-50 py-12 mt-20",children:u.jsx("div",{className:"max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",children:yE.map((n,r)=>u.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden p-6 transition transform hover:scale-105 hover:shadow-xl",children:[u.jsx("img",{src:n.icon,alt:n.title,className:"h-16 w-16 mx-auto mb-4"}),u.jsx("h4",{className:"text-xl font-semibold text-blue-600 mb-2 text-center",children:n.title}),u.jsx("p",{className:"text-gray-600 text-center",children:n.description})]},r))})})]}),u.jsx(Ko,{})]})};var wE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},J_=kt.createContext&&kt.createContext(wE),Yj=["attr","size","title"];function Xj(t,e){if(t==null)return{};var n=Jj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Jj(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}function Z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Bl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z_(Object(n),!0).forEach(function(r){Zj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zj(t,e,n){return e=eM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eM(t){var e=tM(t,"string");return typeof e=="symbol"?e:e+""}function tM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xE(t){return t&&t.map((e,n)=>kt.createElement(e.tag,Bl({key:n},e.attr),xE(e.child)))}function nM(t){return e=>kt.createElement(rM,zl({attr:Bl({},t.attr)},e),xE(t.child))}function rM(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Xj(t,Yj),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),kt.createElement("svg",zl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Bl(Bl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&kt.createElement("title",null,s),t.children)};return J_!==void 0?kt.createElement(J_.Consumer,null,n=>e(n)):e(wE)}function iM(t){return nM({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 9l-.351.015c-.825-2.377-3.062-4.015-5.649-4.015-3.309 0-6 2.691-6 6l.001.126c-1.724.445-3.001 2.013-3.001 3.874 0 2.206 1.794 4 4 4h5v-4.586l-1.293 1.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.999-2.999c.093-.093.203-.166.326-.217.244-.101.52-.101.764 0 .123.051.233.124.326.217l2.999 2.999c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293v4.586h4c2.757 0 5-2.243 5-5s-2.243-5-5-5z"},child:[]}]})(t)}const sM=({onFileChange:t})=>{const e=n=>{t(n.target.files[0])};return u.jsxs("div",{children:[u.jsx("input",{type:"file",id:"file-upload",style:{display:"none"},onChange:e}),u.jsxs("label",{htmlFor:"file-upload",className:"flex items-center px-2 py-1 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600",children:[u.jsx(iM,{className:"mr-2 size-7"})," ","Upload file"]})]})},oM=()=>{const{currentUser:t,logout:e}=ur(),n=ti(),[r,i]=x.useState((t==null?void 0:t.displayName)||""),[s,o]=x.useState((t==null?void 0:t.email)||""),[a,l]=x.useState(""),[c,h]=x.useState(""),[d,f]=x.useState(""),[p,_]=x.useState(0),[y,w]=x.useState(null),[g,m]=x.useState((t==null?void 0:t.photoURL)||Jd);x.useEffect(()=>{t!=null&&t.photoURL?m(t.photoURL):m(Jd)},[t]);const v=async I=>{I.preventDefault(),h("");try{if(y){const T=ax(S1,`profilePictures/${t.uid}`);await ox(T,y);const k=await jd(T);await La(t,{photoURL:k}),m(k);const V=wP(T,y);V.on("state_changed",L=>{const et=L.bytesTransferred/L.totalBytes*100;_(Math.round(et))},L=>{console.error("Error uploading image:",L)},async()=>{const L=await jd(V.snapshot.ref);await La(t,{photoURL:L}),m(L),_(0)})}r&&r!==t.displayName&&await La(t,{displayName:r}),s&&s!==t.email&&await Kk(t,s),a&&await Qk(t,a),f("Profile updated successfully!")}catch(T){h(T.message),console.error("Error updating profile:",T.message)}},E=async()=>{try{await e(),n("/")}catch(I){h("Error logging out"),console.error("Error logging out account:",I)}},S=async()=>{try{await Zk(t),n("/register")}catch(I){h("Error deleting account"),console.error("Error deleting account:",I)}};return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsx("div",{className:"flex-col mb-10",children:u.jsxs("div",{className:"flex flex-col items-center p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-28",children:[u.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Edit Profile"}),c&&u.jsx("p",{className:"text-red-500",children:c}),d&&u.jsx("p",{className:"text-green-500",children:d}),p>0&&u.jsxs("div",{children:[u.jsxs("p",{children:["Uploading: ",p,"%"]}),u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress",style:{width:`${p}%`,backgroundColor:"blue"}})})]}),u.jsx("div",{className:"mb-4",children:g?u.jsx("img",{src:g,alt:"Profile",className:"w-32 h-32 rounded-full object-cover"}):u.jsx("div",{className:"w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center",children:u.jsx("span",{children:"No Image"})})}),u.jsx(sM,{onFileChange:I=>w(I)}),u.jsxs("form",{onSubmit:v,className:"w-full",children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-gray-700",children:"Username"}),u.jsx("input",{type:"text",value:r,onChange:I=>i(I.target.value),className:"w-full px-4 py-2 border rounded-lg"})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-gray-700",children:"Email"}),u.jsx("input",{type:"email",value:s,onChange:I=>o(I.target.value),className:"w-full px-4 py-2 border rounded-lg"})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-gray-700",children:"Password"}),u.jsx("input",{type:"password",value:a,onChange:I=>l(I.target.value),className:"w-full px-4 py-2 border rounded-lg"})]}),u.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600",children:"Update Profile"}),u.jsxs("div",{className:"justify-between flex",children:[u.jsx("button",{onClick:E,className:"px-4 py-2 bg-white text-red-500 rounded-md border-2 border-red-500 font-medium hover:bg-red-500 hover:text-white transition mt-5",children:"Logout"}),u.jsx("button",{onClick:S,className:"px-4 py-2 bg-red-500 text-white rounded-lg mt-4 hover:bg-red-400 transition",children:"Delete Account"})]})]})]})})]})},aM=["All","Mathematics","Science","Computer Science"],lM=()=>{const[t,e]=x.useState(""),[n,r]=x.useState("All"),[i,s]=x.useState([]);x.useEffect(()=>{const a=fe(pe,"courses");ot(a,l=>{const c=l.val(),h=c?Object.entries(c).map(([d,f])=>({id:d,...f})):[];s(h)})},[]);const o=i.filter(a=>{const l=n==="All"||a.category===n,c=a.title.toLowerCase().includes(t.toLowerCase());return l&&c});return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("section",{className:"w-full max-w-5xl mx-auto p-6 space-y-8 mb-48",children:[u.jsxs("div",{className:"space-y-4 mt-20",children:[u.jsx("h2",{className:"text-3xl font-bold text-blue-600 ",children:"Explore Our Courses"}),u.jsx("div",{className:"relative max-w-md",children:u.jsx("input",{type:"text",placeholder:"Search for courses...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",value:t,onChange:a=>e(a.target.value)})}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2",children:aM.map(a=>u.jsx("button",{onClick:()=>r(a),className:`px-4 py-2 rounded-lg text-sm font-medium ${n===a?"bg-blue-600 text-white":"bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition`,children:a},a))})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:o.length>0?o.map((a,l)=>u.jsx(_E,{thumbnail:a.thumbnail,title:a.title,description:a.description,link:`/courses/${a.id}`},l)):u.jsx("p",{className:"text-center text-gray-500",children:"No courses found for the current search and filter."})})]}),u.jsx(Ko,{})]})},cM=()=>u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("div",{className:"w-full",children:[u.jsxs("section",{className:"relative w-full h-80 md:h-96",children:[u.jsx("img",{src:vE,alt:"About Us Hero",className:"w-full h-full object-cover"}),u.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("h1",{className:"text-blue-600 text-4xl md:text-5xl font-bold",children:"About Us"})})]}),u.jsxs("section",{className:"max-w-6xl mx-auto p-6 md:py-12 text-center md:text-left",children:[u.jsx("h2",{className:"text-3xl font-semibold text-blue-600 mb-6",children:"What We Do"}),u.jsxs("p",{className:"text-lg text-gray-700 leading-relaxed mb-8",children:["At ",u.jsx("span",{className:"font-semibold text-blue-600",children:"LearnWorth"}),", our mission is to empower students in Rwanda with essential financial knowledge and skills. Our platform provides free, high-quality educational resources designed to improve financial literacy, helping users build a foundation for a financially secure future."]}),u.jsx("h3",{className:"text-2xl font-semibold text-blue-600 mb-4",children:"What We Offer"}),u.jsx("p",{className:"text-lg text-gray-600 leading-relaxed mb-12",children:"We offer a variety of resources, including courses on personal finance, budgeting, and investment strategies. Our aim is to make financial education accessible and engaging for all."})]}),u.jsx("section",{className:"bg-gray-50 py-12",children:u.jsx("div",{className:"max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",children:yE.map((t,e)=>u.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden p-6 transition transform hover:scale-105 hover:shadow-xl",children:[u.jsx("img",{src:t.icon,alt:t.title,className:"h-16 w-16 mx-auto mb-4"}),u.jsx("h4",{className:"text-xl font-semibold text-blue-600 mb-2 text-center",children:t.title}),u.jsx("p",{className:"text-gray-600 text-center",children:t.description})]},e))})})]}),u.jsx(Ko,{})]}),uM=()=>{const{currentUser:t}=ur(),{courseId:e}=xp(),[n,r]=x.useState(null),i=s=>{if(!s)return"";let o="";return s.includes("youtube.com/watch?v=")?o=s.split("watch?v=")[1].split("&")[0]:s.includes("youtu.be/")?o=s.split("youtu.be/")[1].split("?")[0]:s.includes("youtube.com/embed/")&&(o=s.split("youtube.com/embed/")[1].split("?")[0]),o?`https://www.youtube.com/embed/${o}`:s};return x.useEffect(()=>{const s=fe(pe,`courses/${e}`);ot(s,o=>{const a=o.val();r(a?{id:e,...a}:null)})},[e]),t?n?u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("div",{className:"container mx-auto p-6 space-y-10 mt-20",children:[u.jsxs("section",{className:"relative h-72 bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-lg",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-80"}),u.jsx("h1",{className:"relative text-2xl md:text-4xl font-bold z-10",children:n.title})]}),n.videoUrl&&u.jsx("section",{className:"max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden",children:u.jsx("div",{className:"aspect-w-16 aspect-h-9",children:u.jsx("iframe",{src:i(n.videoUrl),className:"w-full h-full",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:n.title})})}),u.jsxs("section",{className:"max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4",children:[u.jsx("h2",{className:"text-3xl font-semibold text-gray-800",children:"About This Course"}),u.jsx("p",{className:"text-gray-700",children:n.description}),u.jsxs("div",{className:"flex justify-between items-center mt-6",children:[u.jsxs("span",{className:"text-sm text-gray-600",children:[u.jsx("strong",{children:"Duration:"})," ",n.duration||"Not specified"]}),u.jsxs("span",{className:"text-sm text-gray-600",children:[u.jsx("strong",{children:"Difficulty:"})," ",n.difficulty||"Not specified"]})]})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:"Course Materials"}),n.materials?u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.materials.map((s,o)=>u.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 transform transition duration-200 hover:scale-105 hover:shadow-xl",children:[u.jsx("h3",{className:"text-xl font-semibold text-blue-600 mb-2",children:s.title}),u.jsx("p",{className:"text-gray-600 mb-4",children:s.summary}),u.jsx(W,{to:"/more",className:"text-blue-500 font-medium hover:underline",children:"Go to Material"})]},o))}):u.jsx("p",{children:"No materials available for this course."})]})]})]}):u.jsx("p",{className:"text-center text-gray-600 mt-10",children:"Course not found."}):u.jsx(Cc,{to:"/login",replace:!0})},ev=({children:t})=>{const{currentUser:e}=ur();return e?t:u.jsx(Cc,{to:"/login"})},dM=["All","Finance","Mathematics","Computer Science"],hM=()=>{const[t,e]=x.useState("All"),[n,r]=x.useState([]),i=ti();x.useEffect(()=>{const a=fe(pe,"quizzes");ot(a,l=>{const c=l.val(),h=c?Object.entries(c).map(([d,f])=>({id:d,...f})):[];r(h)})},[]);const s=a=>{i(`/quizzes/${a}`)},o=n.filter(a=>t==="All"?!0:a.category===t);return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("section",{className:"w-full max-w-5xl mx-auto p-6 space-y-8 mt-20 mb-64",children:[u.jsx("h2",{className:"text-3xl font-bold text-blue-600",children:"Choose a Quiz"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2",children:dM.map(a=>u.jsx("button",{onClick:()=>e(a),className:`px-4 py-2 rounded-lg text-sm font-medium ${t===a?"bg-blue-600 text-white":"bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition`,children:a},a))}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6",children:o.length>0?o.map(a=>u.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[u.jsx("h3",{className:"text-xl font-semibold text-blue-600 mb-2",children:a.title}),u.jsx("p",{className:"text-gray-600 mb-4",children:a.description}),u.jsx("button",{className:"text-blue-500 font-medium hover:underline",onClick:()=>s(a.id),children:"Take Quiz"})]},a.id)):u.jsx("p",{className:"text-center text-gray-500",children:"No quizzes available for the selected category."})})]}),u.jsx(Ko,{})]})},fM=({score:t,totalQuestions:e,onRetry:n,onBack:r})=>{const i=e*.7,s=e/2;let o="bg-red-500",a="Better luck next time!";t>=i?(o="bg-green-500",a="Congratulations, you passed!"):t>=s&&(o="bg-yellow-500",a="Almost there, keep going!");const l=Math.round(t/e*100);return u.jsxs("div",{className:"flex flex-col items-center mt-8 p-8 rounded-lg shadow-md bg-white w-full max-w-md",children:[u.jsxs("div",{className:`w-24 h-24 flex items-center justify-center rounded-full ${o} text-white text-2xl font-bold`,children:[l,"%"]}),u.jsx("h2",{className:"mt-4 text-2xl font-semibold text-gray-700",children:a}),u.jsxs("p",{className:"mt-2 text-gray-500",children:["You scored ",t," out of ",e," correct answers."]}),u.jsxs("div",{className:"flex mt-6 space-x-4",children:[u.jsx("button",{onClick:n,className:"px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition",children:"Try Again"}),u.jsx("button",{onClick:r,className:"px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-400 transition",children:"Next Quiz"})]})]})},pM=()=>{const{currentUser:t}=ur(),{quizId:e}=xp(),[n,r]=x.useState([]),[i,s]=x.useState({}),[o,a]=x.useState(!1),[l,c]=x.useState(0),h=ti();if(!t)return u.jsx(Cc,{to:"/login",replace:!0});x.useEffect(()=>{const y=fe(pe,`quizzes/${e}/questions`);ot(y,w=>{const g=w.val(),m=g?Object.entries(g).map(([v,E])=>({id:v,...E})):[];r(m)})},[e]);const d=(y,w)=>{s(g=>({...g,[y]:w}))},f=()=>{let y=0;n.forEach(w=>{i[w.id]===w.answer&&y++}),c(y),a(!0)},p=()=>{s({}),c(0),a(!1)},_=()=>{h("/quizzes")};return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("section",{className:"w-full max-w-2xl mx-auto p-6 space-y-8 mt-20",children:[u.jsx("h2",{className:"text-3xl font-bold text-blue-600",children:"Quiz"}),o?u.jsx(fM,{score:l,totalQuestions:n.length,onRetry:p,onBack:_}):u.jsxs(u.Fragment,{children:[n.map(y=>u.jsxs("div",{className:"p-4 bg-white rounded shadow-md mb-4",children:[u.jsx("h3",{className:"text-lg font-semibold",children:y.question}),u.jsx("div",{className:"mt-2",children:y.options.map((w,g)=>u.jsxs("label",{className:"block mt-2",children:[u.jsx("input",{type:"radio",name:`question-${y.id}`,value:w,checked:i[y.id]===w,onChange:()=>d(y.id,w),className:"mr-2"}),w]},g))})]},y.id)),u.jsx("button",{onClick:f,className:"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700",children:"Submit Quiz"})]})]})]})},mM=()=>{const[t,e]=x.useState([]);x.useEffect(()=>{const r=fe(pe,"flashcards");ot(r,i=>{const s=i.val(),o=s?Object.entries(s).map(([a,l])=>({id:a,...l})):[];e(o)})},[]);const n=t.reduce((r,i)=>{const{category:s,topic:o}=i;return r[s]||(r[s]=[]),r[s].push(o),r},{});return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("section",{className:"w-full max-w-5xl mx-auto p-6 space-y-8 mt-20 mb-44",children:[u.jsx("h2",{className:"text-4xl font-extrabold text-blue-600 text-center mb-10",children:"Explore Flashcard Topics"}),u.jsx("div",{className:"space-y-6",children:Object.entries(n).map(([r,i])=>u.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[u.jsxs("h3",{className:"text-2xl font-semibold text-blue-600 mb-4",children:[u.jsx("span",{className:"mr-2",children:"📘"}),r]}),u.jsx("ul",{className:"space-y-2",children:i.map((s,o)=>u.jsx("li",{children:u.jsx(W,{to:`/flashcards/${r}/${s}`,className:"text-blue-500 hover:underline",children:s})},o))})]},r))})]}),u.jsx(Ko,{})]})},gM=()=>{const{topic:t}=xp(),[e,n]=x.useState([]),[r,i]=x.useState(0),[s,o]=x.useState(!1);if(x.useEffect(()=>{const f=fe(pe,"flashcards");ot(f,p=>{const _=p.val(),w=(_?Object.entries(_).map(([g,m])=>({id:g,...m})):[]).filter(g=>g.topic===t);n(w)})},[t]),e.length===0)return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsx("p",{className:"text-center mt-20 text-gray-600",children:"No flashcards available for this topic."})]});const a=()=>o(!s),l=()=>{i(f=>(f+1)%e[0].questions.length),o(!1)},c=()=>{i(f=>f===0?e[0].questions.length-1:f-1),o(!1)},h=e[0].questions[r],d=e[0].answers[r];return u.jsxs(u.Fragment,{children:[u.jsx(Qt,{}),u.jsxs("div",{className:"container mx-auto p-6 space-y-10 mt-16",children:[u.jsxs("section",{className:"relative h-72 bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-lg",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-80"}),u.jsxs("h1",{className:"relative text-2xl md:text-4xl font-bold z-10",children:[t," Flashcards"]})]}),u.jsx("section",{className:"w-full max-w-md mx-auto p-6 mt-20",children:u.jsxs("div",{className:"relative w-full max-w-md mx-auto",children:[u.jsxs("div",{className:`flashcard-container ${s?"flipped":""}`,onClick:a,children:[u.jsxs("div",{className:"flashcard-face flashcard-front",children:[u.jsx("p",{className:"flashcard-text",children:h}),u.jsx("button",{className:"flip-button",children:"Show Answer"})]}),u.jsxs("div",{className:"flashcard-face flashcard-back",children:[u.jsx("p",{className:"flashcard-text",children:d}),u.jsx("button",{className:"flip-button",children:"Show Question"})]})]}),u.jsxs("div",{className:"flex justify-between mt-4",children:[u.jsx("button",{onClick:c,className:"bg-gray-300 px-4 py-2 rounded hover:bg-gray-400",children:"Previous"}),u.jsx("button",{onClick:l,className:"bg-gray-300 px-4 py-2 rounded hover:bg-gray-400",children:"Next"})]})]})})]})]})},_M=()=>{const[t,e]=x.useState([]),[n,r]=x.useState([]),[i,s]=x.useState([]),{isAdmin:o,loading:a}=ur();return x.useEffect(()=>{const l=fe(pe,"quizzes"),c=fe(pe,"courses"),h=fe(pe,"flashcards");ot(l,d=>{const f=d.val();e(f?Object.entries(f).map(([p,_])=>({id:p,..._})):[])}),ot(c,d=>{const f=d.val();r(f?Object.entries(f).map(([p,_])=>({id:p,..._})):[])}),ot(h,d=>{const f=d.val();s(f?Object.entries(f).map(([p,_])=>({id:p,..._})):[])})},[]),a?u.jsx("div",{children:"Loading..."}):o?u.jsxs("div",{className:"flex h-full",children:[u.jsxs("aside",{className:"w-64 bg-gray-800 text-white min-h-[100vh] p-4",children:[u.jsx("div",{className:"text-blue-600 text-2xl font-bold",children:u.jsx(W,{to:"/",children:"LearnWorth"})}),u.jsx("nav",{className:"py-10",children:u.jsxs("ul",{children:[u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/",className:"block p-2 hover:bg-gray-700 rounded",children:"Home"})}),u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/admin-quiz",className:"block p-2 hover:bg-gray-700 rounded",children:"Quizzes"})}),u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/admin-courses",className:"block p-2 hover:bg-gray-700 rounded",children:"Courses"})}),u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/admin-flashcards",className:"block p-2 hover:bg-gray-700 rounded",children:"Flashcards"})})]})})]}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("header",{className:"flex justify-between items-center p-4 bg-blue-600 text-white",children:[u.jsx("h1",{className:"text-xl font-bold",children:"Admin Dashboard"}),u.jsx("button",{className:"focus:outline-none",children:u.jsx("span",{className:"material-icons",children:"notifications"})})]}),u.jsxs("div",{className:"container mx-auto p-6",children:[u.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Manage Content"}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8",children:[u.jsxs("div",{className:"bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-lg",children:[u.jsx("h2",{className:"text-xl font-bold",children:"Courses"}),u.jsx("p",{className:"text-2xl",children:n.length})]}),u.jsxs("div",{className:"bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-lg",children:[u.jsx("h2",{className:"text-xl font-bold",children:"Quizzes"}),u.jsx("p",{className:"text-2xl",children:t.length})]}),u.jsxs("div",{className:"bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-lg",children:[u.jsx("h2",{className:"text-xl font-bold",children:"Flashcards"}),u.jsx("p",{className:"text-2xl",children:i.length})]})]}),u.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Recently Added Content"}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:[n.slice(0,5).map(l=>u.jsxs("div",{className:"p-4 border rounded-lg shadow-sm",children:[u.jsx("h3",{className:"text-lg font-semibold",children:l.title}),u.jsx("p",{className:"text-sm text-gray-500",children:"Course"})]},l.id)),t.slice(0,5).map(l=>u.jsxs("div",{className:"p-4 border rounded-lg shadow-sm",children:[u.jsx("h3",{className:"text-lg font-semibold",children:l.title}),u.jsx("p",{className:"text-sm text-gray-500",children:"Quiz"})]},l.id)),i.slice(0,5).map(l=>u.jsxs("div",{className:"p-4 border rounded-lg shadow-sm",children:[u.jsx("h3",{className:"text-lg font-semibold",children:l.topic}),u.jsx("p",{className:"text-sm text-gray-500",children:"Flashcard"})]},l.id))]})]})]})]}):u.jsx("div",{className:"flex w-full h-screen items-center justify-center",children:u.jsx("p",{className:"text-xl",children:"You do not have access to this page."})})},Op=({title:t,children:e})=>u.jsxs("div",{className:"flex flex-1 h-full",children:[u.jsxs("aside",{className:"w-64 bg-gray-800 text-white min-h-[100vh] flex flex-col p-4",children:[u.jsx("div",{className:"text-blue-600 text-2xl font-bold",children:u.jsx(W,{to:"/",children:"LearnWorth"})}),u.jsx("nav",{className:"py-10",children:u.jsxs("ul",{children:[u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/",className:"block p-2 hover:bg-gray-700 rounded",children:"Home"})}),u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/admin-quiz",className:"block p-2 hover:bg-gray-700 rounded",children:"Quizzes"})}),u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/admin-courses",className:"block p-2 hover:bg-gray-700 rounded",children:"Courses"})}),u.jsx("li",{className:"mb-2",children:u.jsx(W,{to:"/admin/admin-flashcards",className:"block p-2 hover:bg-gray-700 rounded",children:"Flashcards"})})]})})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("header",{className:"flex justify-between items-center p-4 bg-blue-600 text-white",children:u.jsx("h1",{className:"text-xl font-bold",children:t})}),u.jsx("div",{className:"container mx-auto p-6",children:e})]})]}),vM=({onSaveQuiz:t,initialData:e=null})=>{const[n,r]=x.useState(""),[i,s]=x.useState(""),[o,a]=x.useState(""),[l,c]=x.useState([]);x.useEffect(()=>{e&&(r(e.title),s(e.category),a(e.description),c(e.questions||[]))},[e]);const h=()=>{c([...l,{question:"",options:["","",""],answer:""}])},d=(p,_,y)=>{const w=[...l];_==="options"?w[p][_][y.optionIndex]=y.optionValue:w[p][_]=y,c(w)},f=p=>{p.preventDefault(),t({title:n,category:i,description:o,questions:l}),r(""),s(""),a(""),c([])};return u.jsxs("form",{onSubmit:f,className:"bg-white p-4 rounded shadow-md",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:e?"Edit Quiz":"Create New Quiz"}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium",children:"Quiz Title"}),u.jsx("input",{type:"text",value:n,onChange:p=>r(p.target.value),className:"w-full p-2 border rounded",required:!0})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium",children:"Category"}),u.jsx("input",{type:"text",value:i,onChange:p=>s(p.target.value),className:"w-full p-2 border rounded",required:!0})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium",children:"Description"}),u.jsx("textarea",{value:o,onChange:p=>a(p.target.value),className:"w-full p-2 border rounded",required:!0})]}),u.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Questions"}),l.map((p,_)=>u.jsxs("div",{className:"mb-4 p-2 border rounded",children:[u.jsxs("label",{className:"block text-sm font-medium",children:["Question ",_+1]}),u.jsx("input",{type:"text",value:p.question,onChange:y=>d(_,"question",y.target.value),className:"w-full p-2 border rounded mb-2",required:!0}),p.options.map((y,w)=>u.jsxs("div",{className:"mb-2",children:[u.jsxs("label",{className:"block text-sm font-medium",children:["Option ",w+1]}),u.jsx("input",{type:"text",value:y,onChange:g=>d(_,"options",{optionIndex:w,optionValue:g.target.value}),className:"w-full p-2 border rounded",required:!0})]},w)),u.jsx("label",{className:"block text-sm font-medium",children:"Correct Answer"}),u.jsx("input",{type:"text",value:p.answer,onChange:y=>d(_,"answer",y.target.value),className:"w-full p-2 border rounded",required:!0})]},_)),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{type:"button",onClick:h,className:"bg-blue-500 text-white px-4 py-2 rounded mb-4",children:"Add Question"}),u.jsx("button",{type:"submit",className:"bg-green-500 text-white px-4 py-2 rounded mb-4",children:e?"Update Quiz":"Save Quiz"})]})]})},yM=()=>{const[t,e]=x.useState([]),[n,r]=x.useState(null),[i,s]=x.useState(null),[o,a]=x.useState(!1);x.useEffect(()=>{const d=fe(pe,"quizzes");ot(d,f=>{const p=f.val(),_=p?Object.entries(p).map(([y,w])=>({id:y,...w})):[];e(_)})},[]);const l=async d=>{try{console.log("Saving quiz:",d);const f=fe(pe,`quizzes/${n||Date.now()}`);await Co(f,d),console.log("Quiz saved successfully."),r(null),a(!1)}catch(f){console.error("Error saving quiz:",f)}},c=d=>{r(d.id),s(d),a(!0)},h=async d=>{if(window.confirm("Are you sure you want to delete this flashcard?")){const p=fe(pe,`quizzes/${d}`);mp(p).then(()=>{alert("Quiz deleted successfully")}).catch(_=>{alert("Error deleting quiz: "+_.message)})}};return u.jsxs(Op,{title:"Quiz Manager",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsx("h2",{className:"text-2xl font-bold",children:"Quizzes"}),u.jsx("button",{onClick:()=>a(!o),className:"bg-blue-600 text-white px-4 py-2 rounded",children:n?"Update Quiz":"Create Quiz"})]}),o&&u.jsx(vM,{onSaveQuiz:l,initialData:i}),u.jsx("ul",{children:t.map(d=>u.jsxs("li",{className:"flex justify-between items-center p-2 border-b",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:d.title}),u.jsx("p",{className:"text-sm text-gray-600",children:d.category}),u.jsx("p",{className:"text-sm",children:d.description})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("button",{onClick:()=>c(d),className:"text-blue-500 mr-2",children:"Edit"}),u.jsx("button",{onClick:()=>h(d.id),className:"text-red-500 mr-2",children:"Delete"})]})]},d.id))})]})},wM=({onSaveCourse:t,onFileChange:e,initialData:n=null})=>{const[r,i]=x.useState(""),[s,o]=x.useState(""),[a,l]=x.useState(null),[c,h]=x.useState(""),[d,f]=x.useState(""),[p,_]=x.useState("");x.useEffect(()=>{n&&(i(n.title||""),o(n.description||""),f(n.category||""),h(n.thumbnail||""),_(n.videoUrl||""))},[n]);const y=g=>{const m=g.target.files[0];m&&(l(m),h(""),e&&e(m))},w=async g=>{g.preventDefault();let m=c;if(a){const E=ax(S1,`thumbnails/${a.name}`);await ox(E,a),m=await jd(E)}await t({title:r,description:s,thumbnail:m,category:d,videoUrl:p}),i(""),o(""),l(null),h(""),f(""),_("")};return u.jsxs("form",{onSubmit:w,className:"space-y-4",children:[u.jsx("input",{value:r,onChange:g=>i(g.target.value),placeholder:"Title",className:"border p-2 w-full",required:!0}),u.jsx("textarea",{value:s,onChange:g=>o(g.target.value),placeholder:"Description",className:"border p-2 w-full",required:!0}),u.jsx("input",{type:"file",onChange:y}),c&&!a&&u.jsx("img",{src:c,alt:"Thumbnail Preview",className:"w-24 h-24"}),a&&u.jsxs("p",{children:["Uploaded file: ",a.name]}),u.jsx("input",{value:d,onChange:g=>f(g.target.value),placeholder:"Category",className:"border p-2 w-full",required:!0}),u.jsx("input",{type:"url",value:p,onChange:g=>_(g.target.value),placeholder:"Video URL",className:"border p-2 w-full",required:!0}),u.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded",children:"Save Course"})]})},xM=()=>{const[t,e]=x.useState([]),[n,r]=x.useState(null),[i,s]=x.useState(!1),[o,a]=x.useState(null);x.useEffect(()=>{const d=fe(pe,"courses");ot(d,f=>{const p=f.val(),_=p?Object.entries(p).map(([y,w])=>({id:y,...w})):[];e(_)})},[]);const l=async d=>{try{const f=fe(pe,`courses/${n||Date.now()}`);await Co(f,d),r(null),s(!1)}catch(f){console.error("Error saving course:",f)}},c=d=>{r(d.id),a(d),s(!0)},h=async d=>{try{if(window.confirm("Are you sure you want to delete this course?")){const p=fe(pe,`courses/${d}`);await mp(p),alert("Course deleted successfully"),n===d&&(s(!1),r(null),a(null))}}catch(f){alert("Error deleting course: "+f.message)}};return u.jsxs(Op,{title:"Course Manager",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsx("h2",{className:"text-2xl font-bold",children:"Courses"}),u.jsx("button",{onClick:()=>{s(!i),r(null),a(null)},className:"bg-blue-600 text-white px-4 py-2 rounded",children:n?"Update Course":"Create Course"})]}),i&&u.jsx(wM,{onSaveCourse:l,initialData:o}),u.jsx("ul",{children:t.map(d=>u.jsxs("li",{className:"flex justify-between items-center p-2 border-b",children:[u.jsxs("div",{className:"flex items-center",children:[d.thumbnail&&u.jsx("img",{src:d.thumbnail,alt:d.title,className:"w-16 h-16 object-cover mr-4"}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:d.title}),u.jsx("p",{className:"text-sm text-gray-600",children:d.category}),u.jsx("p",{className:"text-sm",children:d.description})]})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("button",{onClick:()=>c(d),className:"text-blue-500 mr-2",children:"Edit"}),u.jsx("button",{onClick:()=>h(d.id),className:"text-red-500 mr-2",children:"Delete"})]})]},d.id))})]})},EM=({onSaveFlashcard:t,initialData:e=null})=>{const[n,r]=x.useState(""),[i,s]=x.useState(""),[o,a]=x.useState(""),[l,c]=x.useState("");x.useEffect(()=>{e?(r(e.question||""),s(e.answer||""),a(e.category||""),c(e.topic||"")):(r(""),s(""),a(""),c(""))},[e]);const h=d=>{d.preventDefault(),t({question:n,answer:i,category:o,topic:l}),r(""),s(""),a(""),c("")};return u.jsxs("form",{onSubmit:h,className:"space-y-4",children:[u.jsx("input",{value:o,onChange:d=>a(d.target.value),placeholder:"Category",className:"border p-2 w-full",required:!0}),u.jsx("input",{value:l,onChange:d=>c(d.target.value),placeholder:"Topic",className:"border p-2 w-full",required:!0}),u.jsx("input",{value:n,onChange:d=>r(d.target.value),placeholder:"Question",className:"border p-2 w-full",required:!0}),u.jsx("textarea",{value:i,onChange:d=>s(d.target.value),placeholder:"Answer",className:"border p-2 w-full",required:!0}),u.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded",children:e?"Update Flashcard":"Save Flashcard"})]})},SM=()=>{const[t,e]=x.useState([]),[n,r]=x.useState(null),[i,s]=x.useState(!1),[o,a]=x.useState(null);x.useEffect(()=>{const d=fe(pe,"flashcards"),f=ot(d,p=>{const _=p.val(),y=_?Object.entries(_).map(([w,g])=>({id:w,...g})):[];e(y)});return()=>f()},[]);const l=async d=>{try{const f=t.find(p=>p.category===d.category&&p.topic===d.topic);if(f){const p={...f,questions:[...f.questions||[],d.question],answers:[...f.answers||[],d.answer]},_=fe(pe,`flashcards/${f.id}`);await Co(_,p)}else{const p={category:d.category,topic:d.topic,questions:[d.question],answers:[d.answer]},_=fe(pe,`flashcards/${E2(fe(pe,"flashcards")).key}`);await Co(_,p)}r(null),a(null),s(!1)}catch(f){console.error("Error saving flashcard:",f)}},c=d=>{r(d.id),a(d),s(!0)},h=async d=>{if(window.confirm("Are you sure you want to delete this flashcard?")){const p=fe(pe,`flashcards/${d}`);mp(p).then(()=>{alert("Flashcard deleted successfully")}).catch(_=>{alert("Error deleting flashcard: "+_.message)})}};return u.jsxs(Op,{title:"Flashcard Manager",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsx("h2",{className:"text-2xl font-bold",children:"Flashcards"}),u.jsx("button",{onClick:()=>{s(!i),r(null),a(null)},className:"bg-blue-600 text-white px-4 py-2 rounded",children:n?"Update Flashcard":"Create Flashcard"})]}),i&&u.jsx(EM,{onSaveFlashcard:l,initialData:o}),u.jsx("ul",{children:t.map(d=>{var f;return u.jsxs("li",{className:"flex justify-between items-center p-2 border-b",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:d.category}),u.jsx("p",{className:"text-sm",children:d.topic}),u.jsxs("p",{className:"text-gray-700",children:["Number of Questions: ",((f=d.questions)==null?void 0:f.length)||0]})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("button",{onClick:()=>c(d),className:"text-blue-500 mr-2",children:"Edit"}),u.jsx("button",{onClick:()=>h(d.id),className:"text-red-500 mr-2",children:"Delete"})]})]},d.id)})})]})},CM=({children:t})=>{const{isAdmin:e,loading:n}=ur();return n?u.jsx("div",{children:"Loading..."}):e?t:u.jsx(Cc,{to:"/"})},bM=()=>u.jsx(RL,{children:u.jsxs(SL,{children:[u.jsx(Ae,{path:"/register",element:u.jsx(LL,{})}),u.jsx(Ae,{path:"/login",element:u.jsx(DL,{})}),u.jsx(Ae,{path:"/",element:u.jsx(Qj,{})}),u.jsx(Ae,{path:"/profile",element:u.jsx(oM,{})}),u.jsx(Ae,{path:"/courses",element:u.jsx(lM,{})}),u.jsx(Ae,{path:"/about-us",element:u.jsx(cM,{})}),u.jsx(Ae,{path:"/quizzes",element:u.jsx(hM,{})}),u.jsx(Ae,{path:"/flash-cards",element:u.jsx(mM,{})}),u.jsx(Ae,{path:"/flashcards/:category/:topic",element:u.jsx(gM,{})}),u.jsx(Ae,{path:"/admin",element:u.jsx(CM,{children:u.jsx(_M,{})})}),u.jsx(Ae,{path:"/quizzes/:quizId",element:u.jsx(ev,{children:u.jsx(pM,{})})}),u.jsx(Ae,{path:"/courses/:courseId",element:u.jsx(ev,{children:u.jsx(uM,{})})}),u.jsx(Ae,{path:"/admin/admin-quiz",element:u.jsx(yM,{})}),u.jsx(Ae,{path:"/admin/admin-courses",element:u.jsx(xM,{})}),u.jsx(Ae,{path:"/admin/admin-flashcards",element:u.jsx(SM,{})})]})}),IM=Pu.createRoot(document.getElementById("root"));IM.render(u.jsx(kt.StrictMode,{children:u.jsx(D2,{children:u.jsx(bM,{})})}));
