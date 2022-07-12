const e0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};e0();var qa={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),If=Symbol.iterator;function f0(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function ss(t,e,n){this.props=t,this.context=e,this.refs=cp,this.updater=n||lp}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fp(){}fp.prototype=ss.prototype;function Cc(t,e,n){this.props=t,this.context=e,this.refs=cp,this.updater=n||lp}var bc=Cc.prototype=new fp;bc.constructor=Cc;up(bc,ss.prototype);bc.isPureReactComponent=!0;var Ff=Array.isArray,dp=Object.prototype.hasOwnProperty,Ac={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function pp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dp.call(e,i)&&!hp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fo,type:t,key:s,ref:o,props:r,_owner:Ac.current}}function d0(t,e){return{$$typeof:fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lc(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function h0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nf=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h0(""+t.key):e.toString(36)}function sa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fo:case t0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xl(o,0):i,Ff(r)?(n="",t!=null&&(n=t.replace(Nf,"$&/")+"/"),sa(r,e,n,"",function(u){return u})):r!=null&&(Lc(r)&&(r=d0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Nf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ff(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xl(s,a);o+=sa(s,e,n,l,r)}else if(l=f0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xl(s,a++),o+=sa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function So(t,e,n){if(t==null)return t;var i=[],r=0;return sa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},oa={transition:null},m0={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:oa,ReactCurrentOwner:Ac};Ce.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!Lc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ce.Component=ss;Ce.Fragment=n0;Ce.Profiler=r0;Ce.PureComponent=Cc;Ce.StrictMode=i0;Ce.Suspense=l0;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;Ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=up({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ac.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dp.call(e,l)&&!hp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:fo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ce.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};Ce.createElement=pp;Ce.createFactory=function(t){var e=pp.bind(null,t);return e.type=t,e};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(t){return{$$typeof:a0,render:t}};Ce.isValidElement=Lc;Ce.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};Ce.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};Ce.startTransition=function(t){var e=oa.transition;oa.transition={};try{t()}finally{oa.transition=e}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(t,e){return bt.current.useCallback(t,e)};Ce.useContext=function(t){return bt.current.useContext(t)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};Ce.useEffect=function(t,e){return bt.current.useEffect(t,e)};Ce.useId=function(){return bt.current.useId()};Ce.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};Ce.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};Ce.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};Ce.useMemo=function(t,e){return bt.current.useMemo(t,e)};Ce.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};Ce.useRef=function(t){return bt.current.useRef(t)};Ce.useState=function(t){return bt.current.useState(t)};Ce.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};Ce.useTransition=function(){return bt.current.useTransition()};Ce.version="18.2.0";qa.exports=Ce;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="142",g0=0,zf=1,v0=2,mp=1,_0=2,bs=3,Ws=0,gn=1,qr=2,x0=1,mi=0,Ur=1,kf=2,Uf=3,Of=4,y0=5,Er=100,S0=101,M0=102,Bf=103,Vf=104,w0=200,E0=201,T0=202,C0=203,gp=204,vp=205,b0=206,A0=207,L0=208,P0=209,D0=210,R0=0,I0=1,F0=2,Tu=3,N0=4,z0=5,k0=6,U0=7,_p=0,O0=1,B0=2,Xn=0,V0=1,G0=2,H0=3,W0=4,j0=5,xp=300,$r=301,Yr=302,Cu=303,bu=304,$a=306,Au=1e3,mn=1001,Lu=1002,Pt=1003,Gf=1004,Hf=1005,Yt=1006,X0=1007,Ya=1008,Yi=1009,q0=1010,$0=1011,yp=1012,Y0=1013,Oi=1014,Bi=1015,js=1016,Z0=1017,Q0=1018,Or=1020,K0=1021,J0=1022,Ln=1023,ev=1024,tv=1025,ji=1026,Zr=1027,nv=1028,iv=1029,rv=1030,sv=1031,ov=1033,yl=33776,Sl=33777,Ml=33778,wl=33779,Wf=35840,jf=35841,Xf=35842,qf=35843,av=36196,$f=37492,Yf=37496,Zf=37808,Qf=37809,Kf=37810,Jf=37811,ed=37812,td=37813,nd=37814,id=37815,rd=37816,sd=37817,od=37818,ad=37819,ld=37820,ud=37821,cd=36492,Zi=3e3,Ze=3001,lv=3200,uv=3201,Dc=0,cv=1,Bn="srgb",Vi="srgb-linear",El=7680,fv=519,fd=35044,dd="300 es",Pu=1035;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hd=1234567;const Is=Math.PI/180,ya=180/Math.PI;function as(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[t&255]+mt[t>>8&255]+mt[t>>16&255]+mt[t>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[n&63|128]+mt[n>>8&255]+"-"+mt[n>>16&255]+mt[n>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function Dt(t,e,n){return Math.max(e,Math.min(n,t))}function Rc(t,e){return(t%e+e)%e}function dv(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hv(t,e,n){return t!==e?(n-t)/(e-t):0}function Fs(t,e,n){return(1-n)*t+n*e}function pv(t,e,n,i){return Fs(t,e,1-Math.exp(-n*i))}function mv(t,e=1){return e-Math.abs(Rc(t,e*2)-e)}function gv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function vv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function _v(t,e){return t+Math.floor(Math.random()*(e-t+1))}function xv(t,e){return t+Math.random()*(e-t)}function yv(t){return t*(.5-Math.random())}function Sv(t){t!==void 0&&(hd=t);let e=hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mv(t){return t*Is}function wv(t){return t*ya}function Du(t){return(t&t-1)===0&&t!==0}function Ev(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Sa(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Tv(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),g=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*g,a*u);break;case"YXY":t.set(l*g,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*g,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cv(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bv(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Sp=Object.freeze({__proto__:null,DEG2RAD:Is,RAD2DEG:ya,generateUUID:as,clamp:Dt,euclideanModulo:Rc,mapLinear:dv,inverseLerp:hv,lerp:Fs,damp:pv,pingpong:mv,smoothstep:gv,smootherstep:vv,randInt:_v,randFloat:xv,randFloatSpread:yv,seededRandom:Sv,degToRad:Mv,radToDeg:wv,isPowerOfTwo:Du,ceilPowerOfTwo:Ev,floorPowerOfTwo:Sa,setQuaternionFromProperEuler:Tv,normalize:bv,denormalize:Cv});class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],_=i[8],p=r[0],h=r[3],m=r[6],v=r[1],x=r[4],M=r[7],w=r[2],C=r[5],L=r[8];return s[0]=o*p+a*v+l*w,s[3]=o*h+a*x+l*C,s[6]=o*m+a*M+l*L,s[1]=u*p+c*v+f*w,s[4]=u*h+c*x+f*C,s[7]=u*m+c*M+f*L,s[2]=d*p+g*v+_*w,s[5]=d*h+g*x+_*C,s[8]=d*m+g*M+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,_=n*f+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(c*n-r*l)*p,e[5]=(r*s-a*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Mp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function Xs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function aa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Tl={[Bn]:{[Vi]:Xi},[Vi]:{[Bn]:aa}},an={legacyMode:!0,get workingColorSpace(){return Vi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Tl[e]&&Tl[e][n]!==void 0){const i=Tl[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},ln={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Cl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function wo(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Vi){return this.r=e,this.g=n,this.b=i,an.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Vi){if(e=Rc(e,1),n=Dt(n,0,1),i=Dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,an.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,an.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,an.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,an.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Bn){const i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return an.fromWorkingColorSpace(wo(this,rt),e),Dt(rt.r*255,0,255)<<16^Dt(rt.g*255,0,255)<<8^Dt(rt.b*255,0,255)<<0}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Vi){an.fromWorkingColorSpace(wo(this,rt),n);const i=rt.r,r=rt.g,s=rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Vi){return an.fromWorkingColorSpace(wo(this,rt),n),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=Bn){return an.fromWorkingColorSpace(wo(this,rt),e),e!==Bn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(ln),ln.h+=e,ln.s+=n,ln.l+=i,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ln),e.getHSL(Mo);const i=Fs(ln.h,Mo.h,n),r=Fs(ln.s,Mo.s,n),s=Fs(ln.l,Mo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=wp;let ur;class Ep{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=Xs("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=Xs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Tp{constructor(e=null){this.isSource=!0,this.uuid=as(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bl(r[o].image)):s.push(bl(r[o]))}else s=bl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bl(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Ep.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Av=0;class nn extends os{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=mn,r=mn,s=Yt,o=Ya,a=Ln,l=Yi,u=1,c=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=as(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Au:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Au:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=xp;class Ge{constructor(e=0,n=0,i=0,r=1){Ge.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],_=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,M=(g+1)/2,w=(m+1)/2,C=(c+d)/4,L=(f+p)/4,y=(_+h)/4;return x>M&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=L/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(f-p)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends os{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ge(0,0,e,n),this.scissorTest=!1,this.viewport=new Ge(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Yt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cp extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lv extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,n,r)}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=_,e[n+3]=p;return}if(f!==p||l!==d||u!==g||c!==_){let h=1-a;const m=l*d+u*g+c*_+f*p,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,m*v);h=Math.sin(h*C)/w,a=Math.sin(a*C)/w}const M=a*v;if(l=l*h+d*M,u=u*h+g*M,c=c*h+_*M,f=f*h+p*M,h===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*g-u*d,e[n+1]=l*_+c*d+u*f-a*g,e[n+2]=u*_+c*g+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"YXZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"ZXY":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"ZYX":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"YZX":this._x=d*c*f+u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f-d*g*_;break;case"XZY":this._x=d*c*f-u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new D,pd=new ho;class po{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Di.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Di)}else i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox),Ll.applyMatrix4(e.matrixWorld),this.union(Ll);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Eo.subVectors(this.max,ms),cr.subVectors(e.a,ms),fr.subVectors(e.b,ms),dr.subVectors(e.c,ms),ti.subVectors(fr,cr),ni.subVectors(dr,fr),Ri.subVectors(cr,dr);let n=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ri.z,Ri.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ri.z,0,-Ri.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ri.y,Ri.x,0];return!Pl(n,cr,fr,dr,Eo)||(n=[1,0,0,0,1,0,0,0,1],!Pl(n,cr,fr,dr,Eo))?!1:(To.crossVectors(ti,ni),n=[To.x,To.y,To.z],Pl(n,cr,fr,dr,Eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Di.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new D,new D,new D,new D,new D,new D,new D,new D],Di=new D,Ll=new po,cr=new D,fr=new D,dr=new D,ti=new D,ni=new D,Ri=new D,ms=new D,Eo=new D,To=new D,Ii=new D;function Pl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ii.fromArray(t,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),u=n.dot(Ii),c=i.dot(Ii);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Pv=new po,md=new D,Co=new D,Dl=new D;class Ic{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Pv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Dl.subVectors(e,this.center);const n=Dl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Dl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Co.set(0,0,1).multiplyScalar(e.radius):Co.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(md.copy(e.center).add(Co)),this.expandByPoint(md.copy(e.center).sub(Co)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,Rl=new D,bo=new D,ii=new D,Il=new D,Ao=new D,Fl=new D;class Dv{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.direction).multiplyScalar(n).add(this.origin),zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rl.copy(e).add(n).multiplyScalar(.5),bo.copy(n).sub(e).normalize(),ii.copy(this.origin).sub(Rl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(bo),a=ii.dot(this.direction),l=-ii.dot(bo),u=ii.lengthSq(),c=Math.abs(1-o*o);let f,d,g,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const p=1/c;f*=p,d*=p,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(bo).multiplyScalar(d).add(Rl),g}intersectSphere(e,n){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,n,i,r,s){Il.subVectors(n,e),Ao.subVectors(i,e),Fl.crossVectors(Il,Ao);let o=this.direction.dot(Fl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(ii,Ao));if(l<0)return null;const u=a*this.direction.dot(Il.cross(ii));if(u<0||l+u>o)return null;const c=-a*ii.dot(Fl);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,u,c,f,d,g,_,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=_,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,_=a*c,p=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=g+_*u,n[5]=d-p*u,n[9]=-a*l,n[2]=p-d*u,n[6]=_+g*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,_=u*c,p=u*f;n[0]=d+p*a,n[4]=_*a-g,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=g*a-_,n[6]=p+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,_=u*c,p=u*f;n[0]=d-p*a,n[4]=-o*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*c,n[9]=p-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,_=a*c,p=a*f;n[0]=l*c,n[4]=_*u-g,n[8]=d*u+p,n[1]=l*f,n[5]=p*u+d,n[9]=g*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=p-d*f,n[8]=_*f+g,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*f+_,n[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+p,n[5]=o*c,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*c,n[10]=p*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Iv)}lookAt(e,n,i){const r=this.elements;return Ut.subVectors(e,n),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),ri.crossVectors(i,Ut),ri.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),ri.crossVectors(i,Ut)),ri.normalize(),Lo.crossVectors(Ut,ri),r[0]=ri.x,r[4]=Lo.x,r[8]=Ut.x,r[1]=ri.y,r[5]=Lo.y,r[9]=Ut.y,r[2]=ri.z,r[6]=Lo.z,r[10]=Ut.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],_=i[2],p=i[6],h=i[10],m=i[14],v=i[3],x=i[7],M=i[11],w=i[15],C=r[0],L=r[4],y=r[8],b=r[12],I=r[1],k=r[5],ne=r[9],K=r[13],z=r[2],$=r[6],V=r[10],j=r[14],P=r[3],R=r[7],F=r[11],q=r[15];return s[0]=o*C+a*I+l*z+u*P,s[4]=o*L+a*k+l*$+u*R,s[8]=o*y+a*ne+l*V+u*F,s[12]=o*b+a*K+l*j+u*q,s[1]=c*C+f*I+d*z+g*P,s[5]=c*L+f*k+d*$+g*R,s[9]=c*y+f*ne+d*V+g*F,s[13]=c*b+f*K+d*j+g*q,s[2]=_*C+p*I+h*z+m*P,s[6]=_*L+p*k+h*$+m*R,s[10]=_*y+p*ne+h*V+m*F,s[14]=_*b+p*K+h*j+m*q,s[3]=v*C+x*I+M*z+w*P,s[7]=v*L+x*k+M*$+w*R,s[11]=v*y+x*ne+M*V+w*F,s[15]=v*b+x*K+M*j+w*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],_=e[3],p=e[7],h=e[11],m=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+p*(+n*l*g-n*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+h*(+n*u*f-n*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],_=e[12],p=e[13],h=e[14],m=e[15],v=f*h*u-p*d*u+p*l*g-a*h*g-f*l*m+a*d*m,x=_*d*u-c*h*u-_*l*g+o*h*g+c*l*m-o*d*m,M=c*p*u-_*f*u+_*a*g-o*p*g-c*a*m+o*f*m,w=_*f*l-c*p*l-_*a*d+o*p*d+c*a*h-o*f*h,C=n*v+i*x+r*M+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=v*L,e[1]=(p*d*s-f*h*s-p*r*g+i*h*g+f*r*m-i*d*m)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*L,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*L,e[4]=x*L,e[5]=(c*h*s-_*d*s+_*r*g-n*h*g-c*r*m+n*d*m)*L,e[6]=(_*l*s-o*h*s-_*r*u+n*h*u+o*r*m-n*l*m)*L,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*g+n*l*g)*L,e[8]=M*L,e[9]=(_*f*s-c*p*s-_*i*g+n*p*g+c*i*m-n*f*m)*L,e[10]=(o*p*s-_*a*s+_*i*u-n*p*u-o*i*m+n*a*m)*L,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*g-n*a*g)*L,e[12]=w*L,e[13]=(c*p*r-_*f*r+_*i*d-n*p*d-c*i*h+n*f*h)*L,e[14]=(_*a*r-o*p*r-_*i*l+n*p*l+o*i*h-n*a*h)*L,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,_=s*f,p=o*c,h=o*f,m=a*f,v=l*u,x=l*c,M=l*f,w=i.x,C=i.y,L=i.z;return r[0]=(1-(p+m))*w,r[1]=(g+M)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(d+m))*C,r[6]=(h+v)*C,r[7]=0,r[8]=(_+x)*L,r[9]=(h-v)*L,r[10]=(1-(d+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=hr.set(r[0],r[1],r[2]).length();const o=hr.set(r[4],r[5],r[6]).length(),a=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const u=1/s,c=1/o,f=1/a;return un.elements[0]*=u,un.elements[1]*=u,un.elements[2]*=u,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,n.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hr=new D,un=new it,Rv=new D(0,0,0),Iv=new D(1,1,1),ri=new D,Lo=new D,Ut=new D,gd=new it,vd=new ho;class mo{constructor(e=0,n=0,i=0,r=mo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}mo.DefaultOrder="XYZ";mo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fv=0;const _d=new D,pr=new ho,kn=new it,Po=new D,gs=new D,Nv=new D,zv=new ho,xd=new D(1,0,0),yd=new D(0,1,0),Sd=new D(0,0,1),kv={type:"added"},Md={type:"removed"};class rn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DefaultUp.clone();const e=new D,n=new mo,i=new ho,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Kt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=rn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return pr.setFromAxisAngle(e,n),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,n){return pr.setFromAxisAngle(e,n),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,n){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Po.copy(e):Po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(gs,Po,this.up):kn.lookAt(Po,gs,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(kn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Md)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Md)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,Nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DefaultUp=new D(0,1,0);rn.DefaultMatrixAutoUpdate=!0;const cn=new D,Un=new D,Nl=new D,On=new D,mr=new D,gr=new D,wd=new D,zl=new D,kl=new D,Ul=new D;class Hn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),cn.subVectors(e,n),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){cn.subVectors(r,n),Un.subVectors(i,n),Nl.subVectors(e,n);const o=cn.dot(cn),a=cn.dot(Un),l=cn.dot(Nl),u=Un.dot(Un),c=Un.dot(Nl),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,On),l.set(0,0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l}static isFrontFacing(e,n,i,r){return cn.subVectors(i,n),Un.subVectors(e,n),cn.cross(Un).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),cn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Hn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;mr.subVectors(r,i),gr.subVectors(s,i),zl.subVectors(e,i);const l=mr.dot(zl),u=gr.dot(zl);if(l<=0&&u<=0)return n.copy(i);kl.subVectors(e,r);const c=mr.dot(kl),f=gr.dot(kl);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(mr,o);Ul.subVectors(e,s);const g=mr.dot(Ul),_=gr.dot(Ul);if(_>=0&&g<=_)return n.copy(s);const p=g*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(gr,a);const h=c*_-g*f;if(h<=0&&f-c>=0&&g-_>=0)return wd.subVectors(s,r),a=(f-c)/(f-c+(g-_)),n.copy(r).addScaledVector(wd,a);const m=1/(h+p+d);return o=p*m,a=d*m,n.copy(i).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Uv=0;class ls extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Ur,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gp,this.blendDst=vp,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===x0;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==Ws&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fc extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new D,Do=new De;class Pn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=fd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ze),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new De),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ge),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.applyMatrix3(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.applyMatrix4(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.applyNormalMatrix(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.transformDirection(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ap extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lp extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ht extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ov=0;const $t=new it,Ol=new rn,vr=new D,Ot=new po,vs=new po,at=new D;class Kn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?Lp:Ap)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Kt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,n,i){return $t.makeTranslation(e,n,i),this.applyMatrix4($t),this}scale(e,n,i){return $t.makeScale(e,n,i),this.applyMatrix4($t),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ht(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Ot.min,vs.min),Ot.expandByPoint(at),at.addVectors(Ot.max,vs.max),Ot.expandByPoint(at)):(Ot.expandByPoint(vs.min),Ot.expandByPoint(vs.max))}Ot.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(at));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)at.fromBufferAttribute(a,u),l&&(vr.fromBufferAttribute(e,u),at.add(vr)),r=Math.max(r,i.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let I=0;I<a;I++)u[I]=new D,c[I]=new D;const f=new D,d=new D,g=new D,_=new De,p=new De,h=new De,m=new D,v=new D;function x(I,k,ne){f.fromArray(r,I*3),d.fromArray(r,k*3),g.fromArray(r,ne*3),_.fromArray(o,I*2),p.fromArray(o,k*2),h.fromArray(o,ne*2),d.sub(f),g.sub(f),p.sub(_),h.sub(_);const K=1/(p.x*h.y-h.x*p.y);!isFinite(K)||(m.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(K),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(K),u[I].add(m),u[k].add(m),u[ne].add(m),c[I].add(v),c[k].add(v),c[ne].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let I=0,k=M.length;I<k;++I){const ne=M[I],K=ne.start,z=ne.count;for(let $=K,V=K+z;$<V;$+=3)x(i[$+0],i[$+1],i[$+2])}const w=new D,C=new D,L=new D,y=new D;function b(I){L.fromArray(s,I*3),y.copy(L);const k=u[I];w.copy(k),w.sub(L.multiplyScalar(L.dot(k))).normalize(),C.crossVectors(y,k);const K=C.dot(c[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=K}for(let I=0,k=M.length;I<k;++I){const ne=M[I],K=ne.start,z=ne.count;for(let $=K,V=K+z;$<V;$+=3)b(i[$+0]),b(i[$+1]),b(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,h),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)at.fromBufferAttribute(e,n),at.normalize(),e.setXYZ(n,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)d[_++]=u[g++]}return new Pn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new it,_r=new Dv,Bl=new Ic,si=new D,oi=new D,ai=new D,Vl=new D,Gl=new D,Hl=new D,Ro=new D,Io=new D,Fo=new D,No=new De,zo=new De,ko=new De,Wl=new D,Uo=new D;class Jt extends rn{constructor(e=new Kn,n=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),e.ray.intersectsSphere(Bl)===!1)||(Ed.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Ed),i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),M=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let w=x,C=M;w<C;w+=3){const L=a.getX(w),y=a.getX(w+1),b=a.getX(w+2);o=Oo(this,v,e,_r,l,u,c,f,d,L,y,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const x=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);o=Oo(this,r,e,_r,l,u,c,f,d,x,M,w),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),M=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let w=x,C=M;w<C;w+=3){const L=w,y=w+1,b=w+2;o=Oo(this,v,e,_r,l,u,c,f,d,L,y,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const x=m,M=m+1,w=m+2;o=Oo(this,r,e,_r,l,u,c,f,d,x,M,w),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function Bv(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==qr,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Uo);return u<n.near||u>n.far?null:{distance:u,point:Uo.clone(),object:t}}function Oo(t,e,n,i,r,s,o,a,l,u,c,f){si.fromBufferAttribute(r,u),oi.fromBufferAttribute(r,c),ai.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){Ro.set(0,0,0),Io.set(0,0,0),Fo.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=d[_],m=s[_];h!==0&&(Vl.fromBufferAttribute(m,u),Gl.fromBufferAttribute(m,c),Hl.fromBufferAttribute(m,f),o?(Ro.addScaledVector(Vl,h),Io.addScaledVector(Gl,h),Fo.addScaledVector(Hl,h)):(Ro.addScaledVector(Vl.sub(si),h),Io.addScaledVector(Gl.sub(oi),h),Fo.addScaledVector(Hl.sub(ai),h)))}si.add(Ro),oi.add(Io),ai.add(Fo)}t.isSkinnedMesh&&(t.boneTransform(u,si),t.boneTransform(c,oi),t.boneTransform(f,ai));const g=Bv(t,e,n,i,si,oi,ai,Wl);if(g){a&&(No.fromBufferAttribute(a,u),zo.fromBufferAttribute(a,c),ko.fromBufferAttribute(a,f),g.uv=Hn.getUV(Wl,si,oi,ai,No,zo,ko,new De)),l&&(No.fromBufferAttribute(l,u),zo.fromBufferAttribute(l,c),ko.fromBufferAttribute(l,f),g.uv2=Hn.getUV(Wl,si,oi,ai,No,zo,ko,new De));const _={a:u,b:c,c:f,normal:new D,materialIndex:0};Hn.getNormal(si,oi,ai,_.normal),g.face=_}return g}class us extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(f,2));function _(p,h,m,v,x,M,w,C,L,y,b){const I=M/L,k=w/y,ne=M/2,K=w/2,z=C/2,$=L+1,V=y+1;let j=0,P=0;const R=new D;for(let F=0;F<V;F++){const q=F*k-K;for(let X=0;X<$;X++){const Z=X*I-ne;R[p]=Z*v,R[h]=q*x,R[m]=z,u.push(R.x,R.y,R.z),R[p]=0,R[h]=0,R[m]=C>0?1:-1,c.push(R.x,R.y,R.z),f.push(X/L),f.push(1-F/y),j+=1}}for(let F=0;F<y;F++)for(let q=0;q<L;q++){const X=d+q+$*F,Z=d+q+$*(F+1),oe=d+(q+1)+$*(F+1),de=d+(q+1)+$*F;l.push(X,Z,de),l.push(Z,oe,de),P+=6}a.addGroup(g,P,b),g+=P,d+=j}}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _t(t){const e={};for(let n=0;n<t.length;n++){const i=Qr(t[n]);for(const r in i)e[r]=i[r]}return e}const Vv={clone:Qr,merge:_t};var Gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Gv,this.fragmentShader=Hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Pp extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Pp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Is*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xr=90,yr=1;class Wv extends rn{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Vt(xr,yr,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Vt(xr,yr,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Vt(xr,yr,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Vt(xr,yr,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Vt(xr,yr,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const u=new Vt(xr,yr,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new D(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Xn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Dp extends nn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:$r,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends Qi{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new us(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:mi});s.uniforms.tEquirect.value=n;const o=new Jt(r,s),a=n.minFilter;return n.minFilter===Ya&&(n.minFilter=Yt),new Wv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const jl=new D,Xv=new D,qv=new Kt;class Fi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jl.subVectors(i,n).cross(Xv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qv.getNormalMatrix(e),r=this.coplanarPoint(jl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Ic,Bo=new D;class Nc{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],h=i[12],m=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,f-l,p-d,x-h).normalize(),n[1].setComponents(a+r,f+l,p+d,x+h).normalize(),n[2].setComponents(a+s,f+u,p+g,x+m).normalize(),n[3].setComponents(a-s,f-u,p-g,x-m).normalize(),n[4].setComponents(a-o,f-c,p-_,x-v).normalize(),n[5].setComponents(a+o,f+c,p+_,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bo.x=r.normal.x>0?e.max.x:e.min.x,Bo.y=r.normal.y>0?e.max.y:e.min.y,Bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $v(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;t.bindBuffer(f,u),g.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class zc extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,g=[],_=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*d-o;for(let x=0;x<u;x++){const M=x*f-s;_.push(M,-v,0),p.push(0,0,1),h.push(x/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+u*m,M=v+u*(m+1),w=v+1+u*(m+1),C=v+1+u*m;g.push(x,M,C),g.push(M,w,C)}this.setIndex(g),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(h,2))}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_="vec3 transformed = vec3( position );",n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,r_=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,z_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ox=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ny=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,my=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,My=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Yv,alphamap_pars_fragment:Zv,alphatest_fragment:Qv,alphatest_pars_fragment:Kv,aomap_fragment:Jv,aomap_pars_fragment:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:r_,bumpmap_pars_fragment:s_,clipping_planes_fragment:o_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:u_,color_fragment:c_,color_pars_fragment:f_,color_pars_vertex:d_,color_vertex:h_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:v_,displacementmap_vertex:__,emissivemap_fragment:x_,emissivemap_pars_fragment:y_,encodings_fragment:S_,encodings_pars_fragment:M_,envmap_fragment:w_,envmap_common_pars_fragment:E_,envmap_pars_fragment:T_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:k_,envmap_vertex:b_,fog_vertex:A_,fog_pars_vertex:L_,fog_fragment:P_,fog_pars_fragment:D_,gradientmap_pars_fragment:R_,lightmap_fragment:I_,lightmap_pars_fragment:F_,lights_lambert_vertex:N_,lights_pars_begin:z_,lights_toon_fragment:U_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:V_,lights_physical_fragment:G_,lights_physical_pars_fragment:H_,lights_fragment_begin:W_,lights_fragment_maps:j_,lights_fragment_end:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:Z_,map_fragment:Q_,map_pars_fragment:K_,map_particle_fragment:J_,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphcolor_vertex:ix,morphnormal_vertex:rx,morphtarget_pars_vertex:sx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:ux,normal_pars_vertex:cx,normal_vertex:fx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,output_fragment:vx,packing:_x,premultiplied_alpha_fragment:xx,project_vertex:yx,dithering_fragment:Sx,dithering_pars_fragment:Mx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Cx,shadowmap_vertex:bx,shadowmask_pars_fragment:Ax,skinbase_vertex:Lx,skinning_pars_vertex:Px,skinning_vertex:Dx,skinnormal_vertex:Rx,specularmap_fragment:Ix,specularmap_pars_fragment:Fx,tonemapping_fragment:Nx,tonemapping_pars_fragment:zx,transmission_fragment:kx,transmission_pars_fragment:Ux,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:Vx,uv2_pars_fragment:Gx,uv2_pars_vertex:Hx,uv2_vertex:Wx,worldpos_vertex:jx,background_vert:Xx,background_frag:qx,cube_vert:$x,cube_frag:Yx,depth_vert:Zx,depth_frag:Qx,distanceRGBA_vert:Kx,distanceRGBA_frag:Jx,equirect_vert:ey,equirect_frag:ty,linedashed_vert:ny,linedashed_frag:iy,meshbasic_vert:ry,meshbasic_frag:sy,meshlambert_vert:oy,meshlambert_frag:ay,meshmatcap_vert:ly,meshmatcap_frag:uy,meshnormal_vert:cy,meshnormal_frag:fy,meshphong_vert:dy,meshphong_frag:hy,meshphysical_vert:py,meshphysical_frag:my,meshtoon_vert:gy,meshtoon_frag:vy,points_vert:_y,points_frag:xy,shadow_vert:yy,shadow_frag:Sy,sprite_vert:My,sprite_frag:wy},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},bn={basic:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:_t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:_t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:_t([re.points,re.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:_t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:_t([re.common,re.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:_t([re.sprite,re.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:_t([re.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:_t([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:_t([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};bn.physical={uniforms:_t([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function Ey(t,e,n,i,r,s){const o=new ze(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function g(p,h){let m=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$a)?(u===void 0&&(u=new Jt(new us(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Qr(bn.cube.uniforms),vertexShader:bn.cube.vertexShader,fragmentShader:bn.cube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jt(new zc(2,2),new Ki({name:"BackgroundMaterial",uniforms:Qr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){n.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:g}}function Ty(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(z,$,V,j,P){let R=!1;if(o){const F=p(j,V,$);u!==F&&(u=F,g(u.object)),R=m(z,j,V,P),R&&v(z,j,V,P)}else{const F=$.wireframe===!0;(u.geometry!==j.id||u.program!==V.id||u.wireframe!==F)&&(u.geometry=j.id,u.program=V.id,u.wireframe=F,R=!0)}P!==null&&n.update(P,34963),(R||c)&&(c=!1,y(z,$,V,j),P!==null&&t.bindBuffer(34963,n.get(P).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,$,V){const j=V.wireframe===!0;let P=a[z.id];P===void 0&&(P={},a[z.id]=P);let R=P[$.id];R===void 0&&(R={},P[$.id]=R);let F=R[j];return F===void 0&&(F=h(d()),R[j]=F),F}function h(z){const $=[],V=[],j=[];for(let P=0;P<r;P++)$[P]=0,V[P]=0,j[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:V,attributeDivisors:j,object:z,attributes:{},index:null}}function m(z,$,V,j){const P=u.attributes,R=$.attributes;let F=0;const q=V.getAttributes();for(const X in q)if(q[X].location>=0){const oe=P[X];let de=R[X];if(de===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(de=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(de=z.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;F++}return u.attributesNum!==F||u.index!==j}function v(z,$,V,j){const P={},R=$.attributes;let F=0;const q=V.getAttributes();for(const X in q)if(q[X].location>=0){let oe=R[X];oe===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor));const de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),P[X]=de,F++}u.attributes=P,u.attributesNum=F,u.index=j}function x(){const z=u.newAttributes;for(let $=0,V=z.length;$<V;$++)z[$]=0}function M(z){w(z,0)}function w(z,$){const V=u.newAttributes,j=u.enabledAttributes,P=u.attributeDivisors;V[z]=1,j[z]===0&&(t.enableVertexAttribArray(z),j[z]=1),P[z]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),P[z]=$)}function C(){const z=u.newAttributes,$=u.enabledAttributes;for(let V=0,j=$.length;V<j;V++)$[V]!==z[V]&&(t.disableVertexAttribArray(V),$[V]=0)}function L(z,$,V,j,P,R){i.isWebGL2===!0&&(V===5124||V===5125)?t.vertexAttribIPointer(z,$,V,P,R):t.vertexAttribPointer(z,$,V,j,P,R)}function y(z,$,V,j){if(i.isWebGL2===!1&&(z.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const P=j.attributes,R=V.getAttributes(),F=$.defaultAttributeValues;for(const q in R){const X=R[q];if(X.location>=0){let Z=P[q];if(Z===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Z!==void 0){const oe=Z.normalized,de=Z.itemSize,G=n.get(Z);if(G===void 0)continue;const je=G.buffer,Te=G.type,Se=G.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,Ue=le.stride,be=Z.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)w(X.location+me,le.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<X.locationSize;me++)M(X.location+me);t.bindBuffer(34962,je);for(let me=0;me<X.locationSize;me++)L(X.location+me,de/X.locationSize,Te,oe,Ue*Se,(be+de/X.locationSize*me)*Se)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)w(X.location+le,Z.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<X.locationSize;le++)M(X.location+le);t.bindBuffer(34962,je);for(let le=0;le<X.locationSize;le++)L(X.location+le,de/X.locationSize,Te,oe,de*Se,de/X.locationSize*le*Se)}}else if(F!==void 0){const oe=F[q];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(X.location,oe);break;case 3:t.vertexAttrib3fv(X.location,oe);break;case 4:t.vertexAttrib4fv(X.location,oe);break;default:t.vertexAttrib1fv(X.location,oe)}}}}C()}function b(){ne();for(const z in a){const $=a[z];for(const V in $){const j=$[V];for(const P in j)_(j[P].object),delete j[P];delete $[V]}delete a[z]}}function I(z){if(a[z.id]===void 0)return;const $=a[z.id];for(const V in $){const j=$[V];for(const P in j)_(j[P].object),delete j[P];delete $[V]}delete a[z.id]}function k(z){for(const $ in a){const V=a[$];if(V[z.id]===void 0)continue;const j=V[z.id];for(const P in j)_(j[P].object),delete j[P];delete V[z.id]}}function ne(){K(),c=!0,u!==l&&(u=l,g(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:K,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function Cy(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function by(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),g=t.getParameter(3379),_=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),x=d>0,M=o||e.has("OES_texture_float"),w=x&&M,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:C}}function Ay(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fi,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const _=f.length!==0||d||i!==0||r;return r=d,n=c(f,g,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,m=t.get(f);if(!r||_===null||_.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,x=v*4;let M=m.clippingState||null;l.value=M,M=c(_,d,x,g);for(let w=0;w!==x;++w)M[w]=n[w];m.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const m=g+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let x=0,M=g;x!==p;++x,M+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(h,M),h[M+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Ly(t){let e=new WeakMap;function n(o,a){return a===Cu?o.mapping=$r:a===bu&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cu||a===bu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new jv(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Py extends Pp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Tr=4,Td=[.125,.215,.35,.446,.526,.582],Ui=20,Xl=new Py,Cd=new ze;let ql=null;const Ni=(1+Math.sqrt(5))/2,Mr=1/Ni,bd=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ni,Mr),new D(0,Ni,-Mr),new D(Mr,0,Ni),new D(-Mr,0,Ni),new D(Ni,Mr,0),new D(-Ni,Mr,0)];class Ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ql=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$r||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:js,format:Ln,encoding:Zi,depthBuffer:!1},r=Ld(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dy(s)),this._blurMaterial=Ry(s,e,n)}return r}_compileMaterial(e){const n=new Jt(this._lodPlanes[0],e);this._renderer.compile(n,Xl)}_sceneToCubeUV(e,n,i,r){const a=new Vt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Cd),c.toneMapping=Xn,c.autoClear=!1;const g=new Fc({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new Jt(new us,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Cd),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const x=this._cubeSize;Vo(r,v*x,m>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$r||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bd[(r-1)%bd.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Jt(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ui-1),p=s/_,h=isFinite(s)?1+Math.floor(c*p):Ui;h>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ui}`);const m=[];let v=0;for(let L=0;L<Ui;++L){const y=L/p,b=Math.exp(-y*y/2);m.push(b),L===0?v+=b:L<h&&(v+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const M=this._sizeLods[r],w=3*M*(r>x-Tr?r-x+Tr:0),C=4*(this._cubeSize-M);Vo(n,w,C,3*M,2*M),l.setRenderTarget(n),l.render(f,Xl)}}function Dy(t){const e=[],n=[],i=[];let r=t;const s=t-Tr+1+Td.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Tr?l=Td[o-t+Tr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,p=3,h=2,m=1,v=new Float32Array(p*_*g),x=new Float32Array(h*_*g),M=new Float32Array(m*_*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,y=C>2?0:-1,b=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(b,p*_*C),x.set(d,h*_*C);const I=[C,C,C,C,C,C];M.set(I,m*_*C)}const w=new Kn;w.setAttribute("position",new Pn(v,p)),w.setAttribute("uv",new Pn(x,h)),w.setAttribute("faceIndex",new Pn(M,m)),e.push(w),r>Tr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ld(t,e,n){const i=new Qi(t,e,n);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ry(t,e,n){const i=new Float32Array(Ui),r=new D(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Pd(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Dd(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Iy(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cu||l===bu,c=l===$r||l===Yr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Ad(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Ad(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Fy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ny(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const g=f.morphAttributes;for(const _ in g){const p=g[_];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(f){const d=[],g=f.index,_=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let x=0,M=v.length;x<M;x+=3){const w=v[x+0],C=v[x+1],L=v[x+2];d.push(w,C,C,L,L,w)}}else{const v=_.array;p=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const w=x+0,C=x+1,L=x+2;d.push(w,C,C,L,L,w)}}const h=new(Mp(d)?Lp:Ap)(d,1);h.version=p;const m=s.get(f);m&&e.remove(m),s.set(f,h)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function zy(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){t.drawElements(s,g,a,d*l),n.update(g,s,1)}function f(d,g,_){if(_===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,d*l,_),n.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function ky(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Uy(t,e){return t[0]-e[0]}function Oy(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $l(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function By(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ge,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let V=function(){z.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let I=0;M===!0&&(I=1),w===!0&&(I=2),C===!0&&(I=3);let k=c.attributes.position.count*I,ne=1;k>e.maxTextureSize&&(ne=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const K=new Float32Array(k*ne*4*h),z=new Cp(K,k,ne,h);z.type=Bi,z.needsUpdate=!0;const $=I*4;for(let j=0;j<h;j++){const P=L[j],R=y[j],F=b[j],q=k*ne*4*j;for(let X=0;X<P.count;X++){const Z=X*$;M===!0&&(o.fromBufferAttribute(P,X),P.normalized===!0&&$l(o,P),K[q+Z+0]=o.x,K[q+Z+1]=o.y,K[q+Z+2]=o.z,K[q+Z+3]=0),w===!0&&(o.fromBufferAttribute(R,X),R.normalized===!0&&$l(o,R),K[q+Z+4]=o.x,K[q+Z+5]=o.y,K[q+Z+6]=o.z,K[q+Z+7]=0),C===!0&&(o.fromBufferAttribute(F,X),F.normalized===!0&&$l(o,F),K[q+Z+8]=o.x,K[q+Z+9]=o.y,K[q+Z+10]=o.z,K[q+Z+11]=F.itemSize===4?o.w:1)}}m={count:h,texture:z,size:new De(k,ne)},s.set(c,m),c.addEventListener("dispose",V)}let v=0;for(let M=0;M<g.length;M++)v+=g[M];const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",g),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let w=0;w<p;w++)h[w]=[w,0];i[c.id]=h}for(let w=0;w<p;w++){const C=h[w];C[0]=w,C[1]=g[w]}h.sort(Oy);for(let w=0;w<8;w++)w<p&&h[w][1]?(a[w][0]=h[w][0],a[w][1]=h[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Uy);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const C=a[w],L=C[0],y=C[1];L!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+w)!==m[L]&&c.setAttribute("morphTarget"+w,m[L]),v&&c.getAttribute("morphNormal"+w)!==v[L]&&c.setAttribute("morphNormal"+w,v[L]),r[w]=y,x+=y):(m&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const M=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",M),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Vy(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Ip=new nn,Fp=new Cp,Np=new Lv,zp=new Dp,Rd=[],Id=[],Fd=new Float32Array(16),Nd=new Float32Array(9),zd=new Float32Array(4);function cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rd[r];if(s===void 0&&(s=new Float32Array(r),Rd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Za(t,e){let n=Id[e];n===void 0&&(n=new Int32Array(e),Id[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Gy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function Wy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function jy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function Xy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;zd.set(i),t.uniformMatrix2fv(this.addr,!1,zd),Ct(n,i)}}function qy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Nd.set(i),t.uniformMatrix3fv(this.addr,!1,Nd),Ct(n,i)}}function $y(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Fd.set(i),t.uniformMatrix4fv(this.addr,!1,Fd),Ct(n,i)}}function Yy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Zy(t,e){const n=this.cache;Tt(n,e)||(t.uniform2iv(this.addr,e),Ct(n,e))}function Qy(t,e){const n=this.cache;Tt(n,e)||(t.uniform3iv(this.addr,e),Ct(n,e))}function Ky(t,e){const n=this.cache;Tt(n,e)||(t.uniform4iv(this.addr,e),Ct(n,e))}function Jy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function e1(t,e){const n=this.cache;Tt(n,e)||(t.uniform2uiv(this.addr,e),Ct(n,e))}function t1(t,e){const n=this.cache;Tt(n,e)||(t.uniform3uiv(this.addr,e),Ct(n,e))}function n1(t,e){const n=this.cache;Tt(n,e)||(t.uniform4uiv(this.addr,e),Ct(n,e))}function i1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ip,r)}function r1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Np,r)}function s1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zp,r)}function o1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fp,r)}function a1(t){switch(t){case 5126:return Gy;case 35664:return Hy;case 35665:return Wy;case 35666:return jy;case 35674:return Xy;case 35675:return qy;case 35676:return $y;case 5124:case 35670:return Yy;case 35667:case 35671:return Zy;case 35668:case 35672:return Qy;case 35669:case 35673:return Ky;case 5125:return Jy;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}function l1(t,e){t.uniform1fv(this.addr,e)}function u1(t,e){const n=cs(e,this.size,2);t.uniform2fv(this.addr,n)}function c1(t,e){const n=cs(e,this.size,3);t.uniform3fv(this.addr,n)}function f1(t,e){const n=cs(e,this.size,4);t.uniform4fv(this.addr,n)}function d1(t,e){const n=cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function h1(t,e){const n=cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function p1(t,e){const n=cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function m1(t,e){t.uniform1iv(this.addr,e)}function g1(t,e){t.uniform2iv(this.addr,e)}function v1(t,e){t.uniform3iv(this.addr,e)}function _1(t,e){t.uniform4iv(this.addr,e)}function x1(t,e){t.uniform1uiv(this.addr,e)}function y1(t,e){t.uniform2uiv(this.addr,e)}function S1(t,e){t.uniform3uiv(this.addr,e)}function M1(t,e){t.uniform4uiv(this.addr,e)}function w1(t,e,n){const i=e.length,r=Za(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Ip,r[s])}function E1(t,e,n){const i=e.length,r=Za(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||Np,r[s])}function T1(t,e,n){const i=e.length,r=Za(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||zp,r[s])}function C1(t,e,n){const i=e.length,r=Za(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Fp,r[s])}function b1(t){switch(t){case 5126:return l1;case 35664:return u1;case 35665:return c1;case 35666:return f1;case 35674:return d1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return _1;case 5125:return x1;case 36294:return y1;case 36295:return S1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return C1}}class A1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=a1(n.type)}}class L1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=b1(n.type)}}class P1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function kd(t,e){t.seq.push(e),t.map[e.id]=e}function D1(t,e,n){const i=t.name,r=i.length;for(Yl.lastIndex=0;;){const s=Yl.exec(i),o=Yl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){kd(n,u===void 0?new A1(a,t,e):new L1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new P1(a),kd(n,f)),n=f}}}class la{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);D1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ud(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let R1=0;function I1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function F1(t){switch(t){case Zi:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Od(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+I1(t.getShaderSource(e),o)}else return r}function N1(t,e){const n=F1(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function z1(t,e){let n;switch(e){case V0:n="Linear";break;case G0:n="Reinhard";break;case H0:n="OptimizedCineon";break;case W0:n="ACESFilmic";break;case j0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function k1(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function U1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function O1(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function As(t){return t!==""}function Bd(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(t){return t.replace(B1,V1)}function V1(t,e){const n=Ee[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ru(n)}const G1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(t){return t.replace(H1,kp).replace(G1,W1)}function W1(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),kp(t,e,n,i)}function kp(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bs&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $r:case Yr:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _p:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Z1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=j1(n),u=X1(n),c=q1(n),f=$1(n),d=Y1(n),g=n.isWebGL2?"":k1(n),_=U1(s),p=r.createProgram();let h,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[_].filter(As).join(`
`),h.length>0&&(h+=`
`),m=[g,_].filter(As).join(`
`),m.length>0&&(m+=`
`)):(h=[Hd(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[g,Hd(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xn?"#define TONE_MAPPING":"",n.toneMapping!==Xn?Ee.tonemapping_pars_fragment:"",n.toneMapping!==Xn?z1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,N1("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),o=Ru(o),o=Bd(o,n),o=Vd(o,n),a=Ru(a),a=Bd(a,n),a=Vd(a,n),o=Gd(o),a=Gd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+h+o,M=v+m+a,w=Ud(r,35633,x),C=Ud(r,35632,M);if(r.attachShader(p,w),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(C).trim();let ne=!0,K=!0;if(r.getProgramParameter(p,35714)===!1){ne=!1;const z=Od(r,w,"vertex"),$=Od(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+z+`
`+$)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(I===""||k==="")&&(K=!1);K&&(this.diagnostics={runnable:ne,programLog:b,vertexShader:{log:I,prefix:h},fragmentShader:{log:k,prefix:m}})}r.deleteShader(w),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new la(r,p)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=O1(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=C,this}let Q1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new J1(e);n.set(e,i)}return n.get(e)}}class J1{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}}function eS(t,e,n,i,r,s,o){const a=new bp,l=new K1,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,b,I,k,ne){const K=k.fog,z=ne.geometry,$=y.isMeshStandardMaterial?k.environment:null,V=(y.isMeshStandardMaterial?n:e).get(y.envMap||$),j=!!V&&V.mapping===$a?V.image.height:null,P=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const R=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,F=R!==void 0?R.length:0;let q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let X,Z,oe,de;if(P){const Ue=bn[P];X=Ue.vertexShader,Z=Ue.fragmentShader}else X=y.vertexShader,Z=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const G=t.getRenderTarget(),je=y.alphaTest>0,Te=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:c,shaderID:P,shaderName:y.type,vertexShader:X,fragmentShader:Z,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?t.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Zi,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:j,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===cv,tangentSpaceNormalMap:y.normalMapType===Dc,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ze,clearcoat:Te,clearcoatMap:Te&&!!y.clearcoatMap,clearcoatRoughnessMap:Te&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ur,alphaMap:!!y.alphaMap,alphaTest:je,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!K,useFog:y.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Xn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qr,flipSided:y.side===gn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)b.push(I),b.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(b,y),v(b,y),b.push(t.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),b.fog&&a.enable(33),y.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.morphTargets&&a.enable(4),b.morphNormals&&a.enable(5),b.morphColors&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),b.decodeVideoTexture&&a.enable(22),b.opaque&&a.enable(23),y.push(a.mask)}function x(y){const b=_[y.type];let I;if(b){const k=bn[b];I=Vv.clone(k.uniforms)}else I=y.uniforms;return I}function M(y,b){let I;for(let k=0,ne=u.length;k<ne;k++){const K=u[k];if(K.cacheKey===b){I=K,++I.usedTimes;break}}return I===void 0&&(I=new Z1(t,b,y,s),u.push(I)),I}function w(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:L}}function tS(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,g,_,p,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=p,m.group=h),e++,m}function a(f,d,g,_,p,h){const m=o(f,d,g,_,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(f,d,g,_,p,h){const m=o(f,d,g,_,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,d){n.length>1&&n.sort(f||nS),i.length>1&&i.sort(d||Wd),r.length>1&&r.sort(d||Wd)}function c(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function iS(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new jd,t.set(i,[s])):r>=t.get(i).length?(s=new jd,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function rS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new ze};break;case"SpotLight":n={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function sS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oS=0;function aS(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function lS(t,e){const n=new rS,i=sS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new D);const s=new D,o=new it,a=new it;function l(c,f){let d=0,g=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let p=0,h=0,m=0,v=0,x=0,M=0,w=0,C=0;c.sort(aS);const L=f!==!0?Math.PI:1;for(let b=0,I=c.length;b<I;b++){const k=c[b],ne=k.color,K=k.intensity,z=k.distance,$=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=ne.r*K*L,g+=ne.g*K*L,_+=ne.b*K*L;else if(k.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(k.sh.coefficients[V],K);else if(k.isDirectionalLight){const V=n.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const j=k.shadow,P=i.get(k);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,r.directionalShadow[p]=P,r.directionalShadowMap[p]=$,r.directionalShadowMatrix[p]=k.shadow.matrix,M++}r.directional[p]=V,p++}else if(k.isSpotLight){const V=n.get(k);if(V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(ne).multiplyScalar(K*L),V.distance=z,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,k.castShadow){const j=k.shadow,P=i.get(k);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,r.spotShadow[m]=P,r.spotShadowMap[m]=$,r.spotShadowMatrix[m]=k.shadow.matrix,C++}r.spot[m]=V,m++}else if(k.isRectAreaLight){const V=n.get(k);V.color.copy(ne).multiplyScalar(K),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=V,v++}else if(k.isPointLight){const V=n.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*L),V.distance=k.distance,V.decay=k.decay,k.castShadow){const j=k.shadow,P=i.get(k);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,P.shadowCameraNear=j.camera.near,P.shadowCameraFar=j.camera.far,r.pointShadow[h]=P,r.pointShadowMap[h]=$,r.pointShadowMatrix[h]=k.shadow.matrix,w++}r.point[h]=V,h++}else if(k.isHemisphereLight){const V=n.get(k);V.skyColor.copy(k.color).multiplyScalar(K*L),V.groundColor.copy(k.groundColor).multiplyScalar(K*L),r.hemi[x]=V,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==m||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==M||y.numPointShadows!==w||y.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,y.directionalLength=p,y.pointLength=h,y.spotLength=m,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=M,y.numPointShadows=w,y.numSpotShadows=C,r.version=oS++)}function u(c,f){let d=0,g=0,_=0,p=0,h=0;const m=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const M=c[v];if(M.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Xd(t,e){const n=new lS(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function uS(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Xd(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Xd(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class cS extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fS extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pS(t,e,n){let i=new Nc;const r=new De,s=new De,o=new Ge,a=new cS({depthPacking:uv}),l=new fS,u={},c=n.maxTextureSize,f={0:gn,1:Ws,2:qr},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:dS,fragmentShader:hS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new Kn;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp,this.render=function(M,w,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),I=t.state;I.setBlending(mi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let k=0,ne=M.length;k<ne;k++){const K=M[k],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null){const j=this.type!==bs?{minFilter:Pt,magFilter:Pt}:{};z.map=new Qi(r.x,r.y,j),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const V=z.getViewportCount();for(let j=0;j<V;j++){const P=z.getViewport(j);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),I.viewport(o),z.updateMatrices(K,j),i=z.getFrustum(),x(w,C,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===bs&&m(z,C),z.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(L,y,b)};function m(M,w){const C=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Qi(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,p,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(w,null,C,g,p,null)}function v(M,w,C,L,y,b){let I=null;const k=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0?I=k:I=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ne=I.uuid,K=w.uuid;let z=u[ne];z===void 0&&(z={},u[ne]=z);let $=z[K];$===void 0&&($=I.clone(),z[K]=$),I=$}return I.visible=w.visible,I.wireframe=w.wireframe,b===bs?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=L,I.farDistance=y),I}function x(M,w,C,L,y){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===bs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const k=e.update(M),ne=M.material;if(Array.isArray(ne)){const K=k.groups;for(let z=0,$=K.length;z<$;z++){const V=K[z],j=ne[V.materialIndex];if(j&&j.visible){const P=v(M,j,L,C.near,C.far,y);t.renderBufferDirect(C,null,k,P,M,V)}}}else if(ne.visible){const K=v(M,ne,L,C.near,C.far,y);t.renderBufferDirect(C,null,k,K,M,null)}}const I=M.children;for(let k=0,ne=I.length;k<ne;k++)x(I[k],w,C,L,y)}}function mS(t,e,n){const i=n.isWebGL2;function r(){let A=!1;const ie=new Ge;let te=null;const pe=new Ge(0,0,0,0);return{setMask:function(ce){te!==ce&&!A&&(t.colorMask(ce,ce,ce,ce),te=ce)},setLocked:function(ce){A=ce},setClear:function(ce,ve,J,_e,Ie){Ie===!0&&(ce*=_e,ve*=_e,J*=_e),ie.set(ce,ve,J,_e),pe.equals(ie)===!1&&(t.clearColor(ce,ve,J,_e),pe.copy(ie))},reset:function(){A=!1,te=null,pe.set(-1,0,0,0)}}}function s(){let A=!1,ie=null,te=null,pe=null;return{setTest:function(ce){ce?de(2929):G(2929)},setMask:function(ce){ie!==ce&&!A&&(t.depthMask(ce),ie=ce)},setFunc:function(ce){if(te!==ce){if(ce)switch(ce){case R0:t.depthFunc(512);break;case I0:t.depthFunc(519);break;case F0:t.depthFunc(513);break;case Tu:t.depthFunc(515);break;case N0:t.depthFunc(514);break;case z0:t.depthFunc(518);break;case k0:t.depthFunc(516);break;case U0:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);te=ce}},setLocked:function(ce){A=ce},setClear:function(ce){pe!==ce&&(t.clearDepth(ce),pe=ce)},reset:function(){A=!1,ie=null,te=null,pe=null}}}function o(){let A=!1,ie=null,te=null,pe=null,ce=null,ve=null,J=null,_e=null,Ie=null;return{setTest:function(Fe){A||(Fe?de(2960):G(2960))},setMask:function(Fe){ie!==Fe&&!A&&(t.stencilMask(Fe),ie=Fe)},setFunc:function(Fe,St,Sn){(te!==Fe||pe!==St||ce!==Sn)&&(t.stencilFunc(Fe,St,Sn),te=Fe,pe=St,ce=Sn)},setOp:function(Fe,St,Sn){(ve!==Fe||J!==St||_e!==Sn)&&(t.stencilOp(Fe,St,Sn),ve=Fe,J=St,_e=Sn)},setLocked:function(Fe){A=Fe},setClear:function(Fe){Ie!==Fe&&(t.clearStencil(Fe),Ie=Fe)},reset:function(){A=!1,ie=null,te=null,pe=null,ce=null,ve=null,J=null,_e=null,Ie=null}}}const a=new r,l=new s,u=new o;let c={},f={},d=new WeakMap,g=[],_=null,p=!1,h=null,m=null,v=null,x=null,M=null,w=null,C=null,L=!1,y=null,b=null,I=null,k=null,ne=null;const K=t.getParameter(35661);let z=!1,$=0;const V=t.getParameter(7938);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=$>=2);let j=null,P={};const R=t.getParameter(3088),F=t.getParameter(2978),q=new Ge().fromArray(R),X=new Ge().fromArray(F);function Z(A,ie,te){const pe=new Uint8Array(4),ce=t.createTexture();t.bindTexture(A,ce),t.texParameteri(A,10241,9728),t.texParameteri(A,10240,9728);for(let ve=0;ve<te;ve++)t.texImage2D(ie+ve,0,6408,1,1,0,6408,5121,pe);return ce}const oe={};oe[3553]=Z(3553,3553,1),oe[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(2929),l.setFunc(Tu),pt(!1),Lt(zf),de(2884),be(mi);function de(A){c[A]!==!0&&(t.enable(A),c[A]=!0)}function G(A){c[A]!==!1&&(t.disable(A),c[A]=!1)}function je(A,ie){return f[A]!==ie?(t.bindFramebuffer(A,ie),f[A]=ie,i&&(A===36009&&(f[36160]=ie),A===36160&&(f[36009]=ie)),!0):!1}function Te(A,ie){let te=g,pe=!1;if(A)if(te=d.get(ie),te===void 0&&(te=[],d.set(ie,te)),A.isWebGLMultipleRenderTargets){const ce=A.texture;if(te.length!==ce.length||te[0]!==36064){for(let ve=0,J=ce.length;ve<J;ve++)te[ve]=36064+ve;te.length=ce.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Se(A){return _!==A?(t.useProgram(A),_=A,!0):!1}const le={[Er]:32774,[S0]:32778,[M0]:32779};if(i)le[Bf]=32775,le[Vf]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(le[Bf]=A.MIN_EXT,le[Vf]=A.MAX_EXT)}const Ue={[w0]:0,[E0]:1,[T0]:768,[gp]:770,[D0]:776,[L0]:774,[b0]:772,[C0]:769,[vp]:771,[P0]:775,[A0]:773};function be(A,ie,te,pe,ce,ve,J,_e){if(A===mi){p===!0&&(G(3042),p=!1);return}if(p===!1&&(de(3042),p=!0),A!==y0){if(A!==h||_e!==L){if((m!==Er||M!==Er)&&(t.blendEquation(32774),m=Er,M=Er),_e)switch(A){case Ur:t.blendFuncSeparate(1,771,1,771);break;case kf:t.blendFunc(1,1);break;case Uf:t.blendFuncSeparate(0,769,0,1);break;case Of:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ur:t.blendFuncSeparate(770,771,1,771);break;case kf:t.blendFunc(770,1);break;case Uf:t.blendFuncSeparate(0,769,0,1);break;case Of:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}v=null,x=null,w=null,C=null,h=A,L=_e}return}ce=ce||ie,ve=ve||te,J=J||pe,(ie!==m||ce!==M)&&(t.blendEquationSeparate(le[ie],le[ce]),m=ie,M=ce),(te!==v||pe!==x||ve!==w||J!==C)&&(t.blendFuncSeparate(Ue[te],Ue[pe],Ue[ve],Ue[J]),v=te,x=pe,w=ve,C=J),h=A,L=null}function me(A,ie){A.side===qr?G(2884):de(2884);let te=A.side===gn;ie&&(te=!te),pt(te),A.blending===Ur&&A.transparent===!1?be(mi):be(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const pe=A.stencilWrite;u.setTest(pe),pe&&(u.setMask(A.stencilWriteMask),u.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),u.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),yn(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?de(32926):G(32926)}function pt(A){y!==A&&(A?t.frontFace(2304):t.frontFace(2305),y=A)}function Lt(A){A!==g0?(de(2884),A!==b&&(A===zf?t.cullFace(1029):A===v0?t.cullFace(1028):t.cullFace(1032))):G(2884),b=A}function kt(A){A!==I&&(z&&t.lineWidth(A),I=A)}function yn(A,ie,te){A?(de(32823),(k!==ie||ne!==te)&&(t.polygonOffset(ie,te),k=ie,ne=te)):G(32823)}function ct(A){A?de(3089):G(3089)}function Oe(A){A===void 0&&(A=33984+K-1),j!==A&&(t.activeTexture(A),j=A)}function In(A,ie){j===null&&Oe();let te=P[j];te===void 0&&(te={type:void 0,texture:void 0},P[j]=te),(te.type!==A||te.texture!==ie)&&(t.bindTexture(A,ie||oe[A]),te.type=A,te.texture=ie)}function Fn(){const A=P[j];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function T(){try{t.compressedTexImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function S(){try{t.texSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{t.texSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{t.texStorage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function B(){try{t.texImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(A){q.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),q.copy(A))}function fe(A){X.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),X.copy(A))}function ue(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},j=null,P={},f={},d=new WeakMap,g=[],_=null,p=!1,h=null,m=null,v=null,x=null,M=null,w=null,C=null,L=!1,y=null,b=null,I=null,k=null,ne=null,q.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:de,disable:G,bindFramebuffer:je,drawBuffers:Te,useProgram:Se,setBlending:be,setMaterial:me,setFlipSided:pt,setCullFace:Lt,setLineWidth:kt,setPolygonOffset:yn,setScissorTest:ct,activeTexture:Oe,bindTexture:In,unbindTexture:Fn,compressedTexImage2D:T,texImage2D:xe,texImage3D:B,texStorage2D:ee,texStorage3D:se,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:Q,scissor:he,viewport:fe,reset:ue}}function gS(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return m?new OffscreenCanvas(T,S):Xs("canvas")}function x(T,S,H,Q){let ee=1;if((T.width>Q||T.height>Q)&&(ee=Q/Math.max(T.width,T.height)),ee<1||S===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const se=S?Sa:Math.floor,xe=se(ee*T.width),B=se(ee*T.height);p===void 0&&(p=v(xe,B));const he=H?v(xe,B):p;return he.width=xe,he.height=B,he.getContext("2d").drawImage(T,0,0,xe,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+B+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Du(T.width)&&Du(T.height)}function w(T){return a?!1:T.wrapS!==mn||T.wrapT!==mn||T.minFilter!==Pt&&T.minFilter!==Yt}function C(T,S){return T.generateMipmaps&&S&&T.minFilter!==Pt&&T.minFilter!==Yt}function L(T){t.generateMipmap(T)}function y(T,S,H,Q,ee=!1){if(a===!1)return S;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=S;return S===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),S===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),S===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=Q===Ze&&ee===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(T,S,H){return C(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Pt&&T.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){return T===Pt||T===Gf||T===Hf?9728:9729}function k(T){const S=T.target;S.removeEventListener("dispose",k),K(S),S.isVideoTexture&&_.delete(S)}function ne(T){const S=T.target;S.removeEventListener("dispose",ne),$(S)}function K(T){const S=i.get(T);if(S.__webglInit===void 0)return;const H=T.source,Q=h.get(H);if(Q){const ee=Q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(T),Object.keys(Q).length===0&&h.delete(H)}i.remove(T)}function z(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const H=T.source,Q=h.get(H);delete Q[S.__cacheKey],o.memory.textures--}function $(T){const S=T.texture,H=i.get(T),Q=i.get(S);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer(H.__webglFramebuffer[ee]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,se=S.length;ee<se;ee++){const xe=i.get(S[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(T)}let V=0;function j(){V=0}function P(){const T=V;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),V+=1,T}function R(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function F(T,S){const H=i.get(T);if(T.isVideoTexture&&In(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,T,S);return}}n.activeTexture(33984+S),n.bindTexture(3553,H.__webglTexture)}function q(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Te(H,T,S);return}n.activeTexture(33984+S),n.bindTexture(35866,H.__webglTexture)}function X(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Te(H,T,S);return}n.activeTexture(33984+S),n.bindTexture(32879,H.__webglTexture)}function Z(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Se(H,T,S);return}n.activeTexture(33984+S),n.bindTexture(34067,H.__webglTexture)}const oe={[Au]:10497,[mn]:33071,[Lu]:33648},de={[Pt]:9728,[Gf]:9984,[Hf]:9986,[Yt]:9729,[X0]:9985,[Ya]:9987};function G(T,S,H){if(H?(t.texParameteri(T,10242,oe[S.wrapS]),t.texParameteri(T,10243,oe[S.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,oe[S.wrapR]),t.texParameteri(T,10240,de[S.magFilter]),t.texParameteri(T,10241,de[S.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(S.wrapS!==mn||S.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,I(S.magFilter)),t.texParameteri(T,10241,I(S.minFilter)),S.minFilter!==Pt&&S.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===js&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function je(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",k));const Q=S.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const se=R(S);if(se!==T.__cacheKey){ee[se]===void 0&&(ee[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[se].usedTimes++;const xe=ee[T.__cacheKey];xe!==void 0&&(ee[T.__cacheKey].usedTimes--,xe.usedTimes===0&&z(S)),T.__cacheKey=se,T.__webglTexture=ee[se].texture}return H}function Te(T,S,H){let Q=3553;S.isDataArrayTexture&&(Q=35866),S.isData3DTexture&&(Q=32879);const ee=je(T,S),se=S.source;if(n.activeTexture(33984+H),n.bindTexture(Q,T.__webglTexture),se.version!==se.__currentVersion||ee===!0){t.pixelStorei(37440,S.flipY),t.pixelStorei(37441,S.premultiplyAlpha),t.pixelStorei(3317,S.unpackAlignment),t.pixelStorei(37443,0);const xe=w(S)&&M(S.image)===!1;let B=x(S.image,xe,!1,c);B=Fn(S,B);const he=M(B)||a,fe=s.convert(S.format,S.encoding);let ue=s.convert(S.type),A=y(S.internalFormat,fe,ue,S.encoding,S.isVideoTexture);G(Q,S,he);let ie;const te=S.mipmaps,pe=a&&S.isVideoTexture!==!0,ce=se.__currentVersion===void 0||ee===!0,ve=b(S,B,he);if(S.isDepthTexture)A=6402,a?S.type===Bi?A=36012:S.type===Oi?A=33190:S.type===Or?A=35056:A=33189:S.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ji&&A===6402&&S.type!==yp&&S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Oi,ue=s.convert(S.type)),S.format===Zr&&A===6402&&(A=34041,S.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Or,ue=s.convert(S.type))),ce&&(pe?n.texStorage2D(3553,1,A,B.width,B.height):n.texImage2D(3553,0,A,B.width,B.height,0,fe,ue,null));else if(S.isDataTexture)if(te.length>0&&he){pe&&ce&&n.texStorage2D(3553,ve,A,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],pe?n.texSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ue,ie.data):n.texImage2D(3553,J,A,ie.width,ie.height,0,fe,ue,ie.data);S.generateMipmaps=!1}else pe?(ce&&n.texStorage2D(3553,ve,A,B.width,B.height),n.texSubImage2D(3553,0,0,0,B.width,B.height,fe,ue,B.data)):n.texImage2D(3553,0,A,B.width,B.height,0,fe,ue,B.data);else if(S.isCompressedTexture){pe&&ce&&n.texStorage2D(3553,ve,A,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],S.format!==Ln?fe!==null?pe?n.compressedTexSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ie.data):n.compressedTexImage2D(3553,J,A,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?n.texSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ue,ie.data):n.texImage2D(3553,J,A,ie.width,ie.height,0,fe,ue,ie.data)}else if(S.isDataArrayTexture)pe?(ce&&n.texStorage3D(35866,ve,A,B.width,B.height,B.depth),n.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,fe,ue,B.data)):n.texImage3D(35866,0,A,B.width,B.height,B.depth,0,fe,ue,B.data);else if(S.isData3DTexture)pe?(ce&&n.texStorage3D(32879,ve,A,B.width,B.height,B.depth),n.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,fe,ue,B.data)):n.texImage3D(32879,0,A,B.width,B.height,B.depth,0,fe,ue,B.data);else if(S.isFramebufferTexture){if(ce)if(pe)n.texStorage2D(3553,ve,A,B.width,B.height);else{let J=B.width,_e=B.height;for(let Ie=0;Ie<ve;Ie++)n.texImage2D(3553,Ie,A,J,_e,0,fe,ue,null),J>>=1,_e>>=1}}else if(te.length>0&&he){pe&&ce&&n.texStorage2D(3553,ve,A,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],pe?n.texSubImage2D(3553,J,0,0,fe,ue,ie):n.texImage2D(3553,J,A,fe,ue,ie);S.generateMipmaps=!1}else pe?(ce&&n.texStorage2D(3553,ve,A,B.width,B.height),n.texSubImage2D(3553,0,0,0,fe,ue,B)):n.texImage2D(3553,0,A,fe,ue,B);C(S,he)&&L(Q),se.__currentVersion=se.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Se(T,S,H){if(S.image.length!==6)return;const Q=je(T,S),ee=S.source;if(n.activeTexture(33984+H),n.bindTexture(34067,T.__webglTexture),ee.version!==ee.__currentVersion||Q===!0){t.pixelStorei(37440,S.flipY),t.pixelStorei(37441,S.premultiplyAlpha),t.pixelStorei(3317,S.unpackAlignment),t.pixelStorei(37443,0);const se=S.isCompressedTexture||S.image[0].isCompressedTexture,xe=S.image[0]&&S.image[0].isDataTexture,B=[];for(let J=0;J<6;J++)!se&&!xe?B[J]=x(S.image[J],!1,!0,u):B[J]=xe?S.image[J].image:S.image[J],B[J]=Fn(S,B[J]);const he=B[0],fe=M(he)||a,ue=s.convert(S.format,S.encoding),A=s.convert(S.type),ie=y(S.internalFormat,ue,A,S.encoding),te=a&&S.isVideoTexture!==!0,pe=ee.__currentVersion===void 0||Q===!0;let ce=b(S,he,fe);G(34067,S,fe);let ve;if(se){te&&pe&&n.texStorage2D(34067,ce,ie,he.width,he.height);for(let J=0;J<6;J++){ve=B[J].mipmaps;for(let _e=0;_e<ve.length;_e++){const Ie=ve[_e];S.format!==Ln?ue!==null?te?n.compressedTexSubImage2D(34069+J,_e,0,0,Ie.width,Ie.height,ue,Ie.data):n.compressedTexImage2D(34069+J,_e,ie,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?n.texSubImage2D(34069+J,_e,0,0,Ie.width,Ie.height,ue,A,Ie.data):n.texImage2D(34069+J,_e,ie,Ie.width,Ie.height,0,ue,A,Ie.data)}}}else{ve=S.mipmaps,te&&pe&&(ve.length>0&&ce++,n.texStorage2D(34067,ce,ie,B[0].width,B[0].height));for(let J=0;J<6;J++)if(xe){te?n.texSubImage2D(34069+J,0,0,0,B[J].width,B[J].height,ue,A,B[J].data):n.texImage2D(34069+J,0,ie,B[J].width,B[J].height,0,ue,A,B[J].data);for(let _e=0;_e<ve.length;_e++){const Fe=ve[_e].image[J].image;te?n.texSubImage2D(34069+J,_e+1,0,0,Fe.width,Fe.height,ue,A,Fe.data):n.texImage2D(34069+J,_e+1,ie,Fe.width,Fe.height,0,ue,A,Fe.data)}}else{te?n.texSubImage2D(34069+J,0,0,0,ue,A,B[J]):n.texImage2D(34069+J,0,ie,ue,A,B[J]);for(let _e=0;_e<ve.length;_e++){const Ie=ve[_e];te?n.texSubImage2D(34069+J,_e+1,0,0,ue,A,Ie.image[J]):n.texImage2D(34069+J,_e+1,ie,ue,A,Ie.image[J])}}}C(S,fe)&&L(34067),ee.__currentVersion=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function le(T,S,H,Q,ee){const se=s.convert(H.format,H.encoding),xe=s.convert(H.type),B=y(H.internalFormat,se,xe,H.encoding);i.get(S).__hasExternalTextures||(ee===32879||ee===35866?n.texImage3D(ee,0,B,S.width,S.height,S.depth,0,se,xe,null):n.texImage2D(ee,0,B,S.width,S.height,0,se,xe,null)),n.bindFramebuffer(36160,T),Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,Q,ee,i.get(H).__webglTexture,0,ct(S)):t.framebufferTexture2D(36160,Q,ee,i.get(H).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ue(T,S,H){if(t.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(H||Oe(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Bi?Q=36012:ee.type===Oi&&(Q=33190));const se=ct(S);Oe(S)?d.renderbufferStorageMultisampleEXT(36161,se,Q,S.width,S.height):t.renderbufferStorageMultisample(36161,se,Q,S.width,S.height)}else t.renderbufferStorage(36161,Q,S.width,S.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const Q=ct(S);H&&Oe(S)===!1?t.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):Oe(S)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):t.renderbufferStorage(36161,34041,S.width,S.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<Q.length;ee++){const se=Q[ee],xe=s.convert(se.format,se.encoding),B=s.convert(se.type),he=y(se.internalFormat,xe,B,se.encoding),fe=ct(S);H&&Oe(S)===!1?t.renderbufferStorageMultisample(36161,fe,he,S.width,S.height):Oe(S)?d.renderbufferStorageMultisampleEXT(36161,fe,he,S.width,S.height):t.renderbufferStorage(36161,he,S.width,S.height)}}t.bindRenderbuffer(36161,null)}function be(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,ee=ct(S);if(S.depthTexture.format===ji)Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):t.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===Zr)Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):t.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function me(T){const S=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[Q],T,!1)}else n.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function pt(T,S,H){const Q=i.get(T);S!==void 0&&le(Q.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&me(T)}function Lt(T){const S=T.texture,H=i.get(T),Q=i.get(S);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,xe=M(T)||a;if(ee){H.__webglFramebuffer=[];for(let B=0;B<6;B++)H.__webglFramebuffer[B]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),se)if(r.drawBuffers){const B=T.texture;for(let he=0,fe=B.length;he<fe;he++){const ue=i.get(B[he]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Oe(T)===!1){const B=se?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let he=0;he<B.length;he++){const fe=B[he];H.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(36161,H.__webglColorRenderbuffer[he]);const ue=s.convert(fe.format,fe.encoding),A=s.convert(fe.type),ie=y(fe.internalFormat,ue,A,fe.encoding),te=ct(T);t.renderbufferStorageMultisample(36161,te,ie,T.width,T.height),t.framebufferRenderbuffer(36160,36064+he,36161,H.__webglColorRenderbuffer[he])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(ee){n.bindTexture(34067,Q.__webglTexture),G(34067,S,xe);for(let B=0;B<6;B++)le(H.__webglFramebuffer[B],T,S,36064,34069+B);C(S,xe)&&L(34067),n.unbindTexture()}else if(se){const B=T.texture;for(let he=0,fe=B.length;he<fe;he++){const ue=B[he],A=i.get(ue);n.bindTexture(3553,A.__webglTexture),G(3553,ue,xe),le(H.__webglFramebuffer,T,ue,36064+he,3553),C(ue,xe)&&L(3553)}n.unbindTexture()}else{let B=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?B=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(B,Q.__webglTexture),G(B,S,xe),le(H.__webglFramebuffer,T,S,36064,B),C(S,xe)&&L(B),n.unbindTexture()}T.depthBuffer&&me(T)}function kt(T){const S=M(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,ee=H.length;Q<ee;Q++){const se=H[Q];if(C(se,S)){const xe=T.isWebGLCubeRenderTarget?34067:3553,B=i.get(se).__webglTexture;n.bindTexture(xe,B),L(xe),n.unbindTexture()}}}function yn(T){if(a&&T.samples>0&&Oe(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,Q=T.height;let ee=16384;const se=[],xe=T.stencilBuffer?33306:36096,B=i.get(T),he=T.isWebGLMultipleRenderTargets===!0;if(he)for(let fe=0;fe<S.length;fe++)n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,null),n.bindFramebuffer(36160,B.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,null,0);n.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,B.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){se.push(36064+fe),T.depthBuffer&&se.push(xe);const ue=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(ue===!1&&(T.depthBuffer&&(ee|=256),T.stencilBuffer&&(ee|=1024)),he&&t.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[fe]),ue===!0&&(t.invalidateFramebuffer(36008,[xe]),t.invalidateFramebuffer(36009,[xe])),he){const A=i.get(S[fe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,A,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,9728),g&&t.invalidateFramebuffer(36008,se)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),he)for(let fe=0;fe<S.length;fe++){n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,B.__webglColorRenderbuffer[fe]);const ue=i.get(S[fe]).__webglTexture;n.bindFramebuffer(36160,B.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,ue,0)}n.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function ct(T){return Math.min(f,T.samples)}function Oe(T){const S=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function In(T){const S=o.render.frame;_.get(T)!==S&&(_.set(T,S),T.update())}function Fn(T,S){const H=T.encoding,Q=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Pu||H!==Zi&&(H===Ze?a===!1?e.has("EXT_sRGB")===!0&&Q===Ln?(T.format=Pu,T.minFilter=Yt,T.generateMipmaps=!1):S=Ep.sRGBToLinear(S):(Q!==Ln||ee!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=F,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=pt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function vS(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Yi)return 5121;if(s===Z0)return 32819;if(s===Q0)return 32820;if(s===q0)return 5120;if(s===$0)return 5122;if(s===yp)return 5123;if(s===Y0)return 5124;if(s===Oi)return 5125;if(s===Bi)return 5126;if(s===js)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===K0)return 6406;if(s===Ln)return 6408;if(s===ev)return 6409;if(s===tv)return 6410;if(s===ji)return 6402;if(s===Zr)return 34041;if(s===nv)return 6403;if(s===J0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Pu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===iv)return 36244;if(s===rv)return 33319;if(s===sv)return 33320;if(s===ov)return 36249;if(s===yl||s===Sl||s===Ml||s===wl)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===yl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===yl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wf||s===jf||s===Xf||s===qf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===av)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$f||s===Yf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$f)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zf||s===Qf||s===Kf||s===Jf||s===ed||s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld||s===ud)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ed)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===td)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===id)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===od)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ld)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ud)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cd)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Or?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class _S extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Go extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new Go;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&d>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class yS extends nn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ji,c!==ji&&c!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ji&&(i=Oi),i===void 0&&c===Zr&&(i=Or),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class SS extends os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const _=n.getContextAttributes();let p=null,h=null;const m=[],v=[],x=new Vt;x.layers.enable(1),x.viewport=new Ge;const M=new Vt;M.layers.enable(2),M.viewport=new Ge;const w=[x,M],C=new _S;C.layers.enable(1),C.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let F=m[R];return F===void 0&&(F=new Zl,m[R]=F),F.getTargetRaySpace()},this.getControllerGrip=function(R){let F=m[R];return F===void 0&&(F=new Zl,m[R]=F),F.getGripSpace()},this.getHand=function(R){let F=m[R];return F===void 0&&(F=new Zl,m[R]=F),F.getHandSpace()};function b(R){const F=v.indexOf(R.inputSource);if(F===-1)return;const q=m[F];q!==void 0&&q.dispatchEvent({type:R.type,data:R.inputSource})}function I(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",k);for(let R=0;R<m.length;R++){const F=v[R];F!==null&&(v[R]=null,m[R].disconnect(F))}L=null,y=null,e.setRenderTarget(p),d=null,f=null,c=null,r=null,h=null,P.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",I),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:d}),h=new Qi(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:Yi,encoding:e.outputEncoding})}else{let F=null,q=null,X=null;_.depth&&(X=_.stencil?35056:33190,F=_.stencil?Zr:ji,q=_.stencil?Or:Oi);const Z={colorFormat:32856,depthFormat:X,scaleFactor:s};c=new XRWebGLBinding(r,n),f=c.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),h=new Qi(f.textureWidth,f.textureHeight,{format:Ln,type:Yi,depthTexture:new yS(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),P.setContext(r),P.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(R){for(let F=0;F<R.removed.length;F++){const q=R.removed[F],X=v.indexOf(q);X>=0&&(v[X]=null,m[X].dispatchEvent({type:"disconnected",data:q}))}for(let F=0;F<R.added.length;F++){const q=R.added[F];let X=v.indexOf(q);if(X===-1){for(let oe=0;oe<m.length;oe++)if(oe>=v.length){v.push(q),X=oe;break}else if(v[oe]===null){v[oe]=q,X=oe;break}if(X===-1)break}const Z=m[X];Z&&Z.dispatchEvent({type:"connected",data:q})}}const ne=new D,K=new D;function z(R,F,q){ne.setFromMatrixPosition(F.matrixWorld),K.setFromMatrixPosition(q.matrixWorld);const X=ne.distanceTo(K),Z=F.projectionMatrix.elements,oe=q.projectionMatrix.elements,de=Z[14]/(Z[10]-1),G=Z[14]/(Z[10]+1),je=(Z[9]+1)/Z[5],Te=(Z[9]-1)/Z[5],Se=(Z[8]-1)/Z[0],le=(oe[8]+1)/oe[0],Ue=de*Se,be=de*le,me=X/(-Se+le),pt=me*-Se;F.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(pt),R.translateZ(me),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Lt=de+me,kt=G+me,yn=Ue-pt,ct=be+(X-pt),Oe=je*G/kt*Lt,In=Te*G/kt*Lt;R.projectionMatrix.makePerspective(yn,ct,Oe,In,Lt,kt)}function $(R,F){F===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(F.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;C.near=M.near=x.near=R.near,C.far=M.far=x.far=R.far,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far);const F=R.parent,q=C.cameras;$(C,F);for(let Z=0;Z<q.length;Z++)$(q[Z],F);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),R.position.copy(C.position),R.quaternion.copy(C.quaternion),R.scale.copy(C.scale),R.matrix.copy(C.matrix),R.matrixWorld.copy(C.matrixWorld);const X=R.children;for(let Z=0,oe=X.length;Z<oe;Z++)X[Z].updateMatrixWorld(!0);q.length===2?z(C,x,M):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(R){f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)};let V=null;function j(R,F){if(u=F.getViewerPose(l||o),g=F,u!==null){const q=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let X=!1;q.length!==C.cameras.length&&(C.cameras.length=0,X=!0);for(let Z=0;Z<q.length;Z++){const oe=q[Z];let de=null;if(d!==null)de=d.getViewport(oe);else{const je=c.getViewSubImage(f,oe);de=je.viewport,Z===0&&(e.setRenderTargetTextures(h,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(h))}let G=w[Z];G===void 0&&(G=new Vt,G.layers.enable(Z),G.viewport=new Ge,w[Z]=G),G.matrix.fromArray(oe.transform.matrix),G.projectionMatrix.fromArray(oe.projectionMatrix),G.viewport.set(de.x,de.y,de.width,de.height),Z===0&&C.matrix.copy(G.matrix),X===!0&&C.cameras.push(G)}}for(let q=0;q<m.length;q++){const X=v[q],Z=m[q];X!==null&&Z!==void 0&&Z.update(X,F,l||o)}V&&V(R,F),g=null}const P=new Rp;P.setAnimationLoop(j),this.setAnimationLoop=function(R){V=R},this.dispose=function(){}}}function MS(t,e){function n(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===gn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===gn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===gn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wS(){const t=Xs("canvas");return t.style.display="block",t}function Up(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:wS(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,x=null,M=-1,w=null;const C=new Ge,L=new Ge;let y=null,b=e.width,I=e.height,k=1,ne=null,K=null;const z=new Ge(0,0,b,I),$=new Ge(0,0,b,I);let V=!1;const j=new Nc;let P=!1,R=!1,F=null;const q=new it,X=new De,Z=new D,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?k:1}let G=n;function je(E,N){for(let O=0;O<E.length;O++){const U=E[O],W=e.getContext(U,N);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",te,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),G=je(N,E),G===null)throw je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Se,le,Ue,be,me,pt,Lt,kt,yn,ct,Oe,In,Fn,T,S,H,Q,ee,se,xe,B,he;function fe(){Te=new Fy(G),Se=new by(G,Te,t),Te.init(Se),B=new vS(G,Te,Se),le=new mS(G,Te,Se),Ue=new ky,be=new tS,me=new gS(G,Te,le,be,Se,B,Ue),pt=new Ly(p),Lt=new Iy(p),kt=new $v(G,Se),he=new Ty(G,Te,kt,Se),yn=new Ny(G,kt,Ue,he),ct=new Vy(G,yn,kt,Ue),ee=new By(G,Se,me),S=new Ay(be),Oe=new eS(p,pt,Lt,Te,Se,he,S),In=new MS(p,be),Fn=new iS,T=new uS(Te,Se),Q=new Ey(p,pt,le,ct,c,o),H=new pS(p,ct,Se),se=new Cy(G,Te,Ue,Se),xe=new zy(G,Te,Ue,Se),Ue.programs=Oe.programs,p.capabilities=Se,p.extensions=Te,p.properties=be,p.renderLists=Fn,p.shadowMap=H,p.state=le,p.info=Ue}fe();const ue=new SS(p,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(b,I,!1))},this.getSize=function(E){return E.set(b,I)},this.setSize=function(E,N,O){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,I=N,e.width=Math.floor(E*k),e.height=Math.floor(N*k),O!==!1&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(b*k,I*k).floor()},this.setDrawingBufferSize=function(E,N,O){b=E,I=N,k=O,e.width=Math.floor(E*O),e.height=Math.floor(N*O),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,N,O,U){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,N,O,U),le.viewport(C.copy(z).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,N,O,U){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,O,U),le.scissor(L.copy($).multiplyScalar(k).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){le.setScissorTest(V=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(E=!0,N=!0,O=!0){let U=0;E&&(U|=16384),N&&(U|=256),O&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",te,!1),Fn.dispose(),T.dispose(),be.dispose(),pt.dispose(),Lt.dispose(),ct.dispose(),he.dispose(),Oe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ie),ue.removeEventListener("sessionend",Fe),F&&(F.dispose(),F=null),St.stop()};function A(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Ue.autoReset,N=H.enabled,O=H.autoUpdate,U=H.needsUpdate,W=H.type;fe(),Ue.autoReset=E,H.enabled=N,H.autoUpdate=O,H.needsUpdate=U,H.type=W}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){const N=E.target;N.removeEventListener("dispose",pe),ce(N)}function ce(E){ve(E),be.remove(E)}function ve(E){const N=be.get(E).programs;N!==void 0&&(N.forEach(function(O){Oe.releaseProgram(O)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,O,U,W,ge){N===null&&(N=oe);const ye=W.isMesh&&W.matrixWorld.determinant()<0,we=Qg(E,N,O,U,W);le.setMaterial(U,ye);let Me=O.index;const Ne=O.attributes.position;if(Me===null){if(Ne===void 0||Ne.count===0)return}else if(Me.count===0)return;let Ae=1;U.wireframe===!0&&(Me=yn.getWireframeAttribute(O),Ae=2),he.setup(W,U,we,O,Me);let Pe,Ye=se;Me!==null&&(Pe=kt.get(Me),Ye=xe,Ye.setIndex(Pe));const Pi=Me!==null?Me.count:Ne.count,or=O.drawRange.start*Ae,ar=O.drawRange.count*Ae,Mn=ge!==null?ge.start*Ae:0,Re=ge!==null?ge.count*Ae:1/0,lr=Math.max(or,Mn),et=Math.min(Pi,or+ar,Mn+Re)-1,wn=Math.max(0,et-lr+1);if(wn!==0){if(W.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*de()),Ye.setMode(1)):Ye.setMode(4);else if(W.isLine){let ei=U.linewidth;ei===void 0&&(ei=1),le.setLineWidth(ei*de()),W.isLineSegments?Ye.setMode(1):W.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else W.isPoints?Ye.setMode(0):W.isSprite&&Ye.setMode(4);if(W.isInstancedMesh)Ye.renderInstances(lr,wn,W.count);else if(O.isInstancedBufferGeometry){const ei=Math.min(O.instanceCount,O._maxInstanceCount);Ye.renderInstances(lr,wn,ei)}else Ye.render(lr,wn)}},this.compile=function(E,N){d=T.get(E),d.init(),_.push(d),E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(O){const U=O.material;if(U)if(Array.isArray(U))for(let W=0;W<U.length;W++){const ge=U[W];gl(ge,E,O)}else gl(U,E,O)}),_.pop(),d=null};let J=null;function _e(E){J&&J(E)}function Ie(){St.stop()}function Fe(){St.start()}const St=new Rp;St.setAnimationLoop(_e),typeof self!="undefined"&&St.setContext(self),this.setAnimationLoop=function(E){J=E,ue.setAnimationLoop(E),E===null?St.stop():St.start()},ue.addEventListener("sessionstart",Ie),ue.addEventListener("sessionend",Fe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,N,x),d=T.get(E,_.length),d.init(),_.push(d),q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(q),R=this.localClippingEnabled,P=S.init(this.clippingPlanes,R,N),f=Fn.get(E,g.length),f.init(),g.push(f),Sn(E,N,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ne,K),P===!0&&S.beginShadows();const O=d.state.shadowsArray;if(H.render(O,E,N),P===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(f,E),d.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const U=N.cameras;for(let W=0,ge=U.length;W<ge;W++){const ye=U[W];Df(f,E,ye,ye.viewport)}}else Df(f,E,N);x!==null&&(me.updateMultisampleRenderTarget(x),me.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(p,E,N),he.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function Sn(E,N,O,U){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){U&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const ye=ct.update(E),we=E.material;we.visible&&f.push(E,ye,we,O,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ue.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ue.render.frame),!E.frustumCulled||j.intersectsObject(E))){U&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const ye=ct.update(E),we=E.material;if(Array.isArray(we)){const Me=ye.groups;for(let Ne=0,Ae=Me.length;Ne<Ae;Ne++){const Pe=Me[Ne],Ye=we[Pe.materialIndex];Ye&&Ye.visible&&f.push(E,ye,Ye,O,Z.z,Pe)}}else we.visible&&f.push(E,ye,we,O,Z.z,null)}}const ge=E.children;for(let ye=0,we=ge.length;ye<we;ye++)Sn(ge[ye],N,O,U)}function Df(E,N,O,U){const W=E.opaque,ge=E.transmissive,ye=E.transparent;d.setupLightsView(O),ge.length>0&&Yg(W,N,O),U&&le.viewport(C.copy(U)),W.length>0&&yo(W,N,O),ge.length>0&&yo(ge,N,O),ye.length>0&&yo(ye,N,O),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Yg(E,N,O){const U=Se.isWebGL2;F===null&&(F=new Qi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?js:Yi,minFilter:Ya,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(X),U?F.setSize(X.x,X.y):F.setSize(Sa(X.x),Sa(X.y));const W=p.getRenderTarget();p.setRenderTarget(F),p.clear();const ge=p.toneMapping;p.toneMapping=Xn,yo(E,N,O),p.toneMapping=ge,me.updateMultisampleRenderTarget(F),me.updateRenderTargetMipmap(F),p.setRenderTarget(W)}function yo(E,N,O){const U=N.isScene===!0?N.overrideMaterial:null;for(let W=0,ge=E.length;W<ge;W++){const ye=E[W],we=ye.object,Me=ye.geometry,Ne=U===null?ye.material:U,Ae=ye.group;we.layers.test(O.layers)&&Zg(we,N,O,Me,Ne,Ae)}}function Zg(E,N,O,U,W,ge){E.onBeforeRender(p,N,O,U,W,ge),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(p,N,O,U,E,ge),W.transparent===!0&&W.side===qr?(W.side=gn,W.needsUpdate=!0,p.renderBufferDirect(O,N,U,W,E,ge),W.side=Ws,W.needsUpdate=!0,p.renderBufferDirect(O,N,U,W,E,ge),W.side=qr):p.renderBufferDirect(O,N,U,W,E,ge),E.onAfterRender(p,N,O,U,W,ge)}function gl(E,N,O){N.isScene!==!0&&(N=oe);const U=be.get(E),W=d.state.lights,ge=d.state.shadowsArray,ye=W.state.version,we=Oe.getParameters(E,W.state,ge,N,O),Me=Oe.getProgramCacheKey(we);let Ne=U.programs;U.environment=E.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(E.isMeshStandardMaterial?Lt:pt).get(E.envMap||U.environment),Ne===void 0&&(E.addEventListener("dispose",pe),Ne=new Map,U.programs=Ne);let Ae=Ne.get(Me);if(Ae!==void 0){if(U.currentProgram===Ae&&U.lightsStateVersion===ye)return Rf(E,we),Ae}else we.uniforms=Oe.getUniforms(E),E.onBuild(O,we,p),E.onBeforeCompile(we,p),Ae=Oe.acquireProgram(we,Me),Ne.set(Me,Ae),U.uniforms=we.uniforms;const Pe=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=S.uniform),Rf(E,we),U.needsLights=Jg(E),U.lightsStateVersion=ye,U.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotShadowMatrix.value=W.state.spotShadowMatrix,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const Ye=Ae.getUniforms(),Pi=la.seqWithValue(Ye.seq,Pe);return U.currentProgram=Ae,U.uniformsList=Pi,Ae}function Rf(E,N){const O=be.get(E);O.outputEncoding=N.outputEncoding,O.instancing=N.instancing,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function Qg(E,N,O,U,W){N.isScene!==!0&&(N=oe),me.resetTextureUnits();const ge=N.fog,ye=U.isMeshStandardMaterial?N.environment:null,we=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Zi,Me=(U.isMeshStandardMaterial?Lt:pt).get(U.envMap||ye),Ne=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!U.normalMap&&!!O.attributes.tangent,Pe=!!O.morphAttributes.position,Ye=!!O.morphAttributes.normal,Pi=!!O.morphAttributes.color,or=U.toneMapped?p.toneMapping:Xn,ar=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Mn=ar!==void 0?ar.length:0,Re=be.get(U),lr=d.state.lights;if(P===!0&&(R===!0||E!==w)){const En=E===w&&U.id===M;S.setState(U,E,En)}let et=!1;U.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==lr.state.version||Re.outputEncoding!==we||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Me||U.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==S.numPlanes||Re.numIntersection!==S.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Ae||Re.morphTargets!==Pe||Re.morphNormals!==Ye||Re.morphColors!==Pi||Re.toneMapping!==or||Se.isWebGL2===!0&&Re.morphTargetsCount!==Mn)&&(et=!0):(et=!0,Re.__version=U.version);let wn=Re.currentProgram;et===!0&&(wn=gl(U,N,W));let ei=!1,hs=!1,vl=!1;const Mt=wn.getUniforms(),ps=Re.uniforms;if(le.useProgram(wn.program)&&(ei=!0,hs=!0,vl=!0),U.id!==M&&(M=U.id,hs=!0),ei||w!==E){if(Mt.setValue(G,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&Mt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,hs=!0,vl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const En=Mt.map.cameraPosition;En!==void 0&&En.setValue(G,Z.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Mt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||W.isSkinnedMesh)&&Mt.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){Mt.setOptional(G,W,"bindMatrix"),Mt.setOptional(G,W,"bindMatrixInverse");const En=W.skeleton;En&&(Se.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Mt.setValue(G,"boneTexture",En.boneTexture,me),Mt.setValue(G,"boneTextureSize",En.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _l=O.morphAttributes;return(_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0&&Se.isWebGL2===!0)&&ee.update(W,O,U,wn),(hs||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,Mt.setValue(G,"receiveShadow",W.receiveShadow)),hs&&(Mt.setValue(G,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&Kg(ps,vl),ge&&U.fog===!0&&In.refreshFogUniforms(ps,ge),In.refreshMaterialUniforms(ps,U,k,I,F),la.upload(G,Re.uniformsList,ps,me)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(la.upload(G,Re.uniformsList,ps,me),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Mt.setValue(G,"center",W.center),Mt.setValue(G,"modelViewMatrix",W.modelViewMatrix),Mt.setValue(G,"normalMatrix",W.normalMatrix),Mt.setValue(G,"modelMatrix",W.matrixWorld),wn}function Kg(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Jg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,N,O){be.get(E.texture).__webglTexture=N,be.get(E.depthTexture).__webglTexture=O;const U=be.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const O=be.get(E);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,O=0){x=E,m=N,v=O;let U=!0;if(E){const Me=be.get(E);Me.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),U=!1):Me.__webglFramebuffer===void 0?me.setupRenderTarget(E):Me.__hasExternalTextures&&me.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture)}let W=null,ge=!1,ye=!1;if(E){const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(ye=!0);const Ne=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Ne[N],ge=!0):Se.isWebGL2&&E.samples>0&&me.useMultisampledRTT(E)===!1?W=be.get(E).__webglMultisampledFramebuffer:W=Ne,C.copy(E.viewport),L.copy(E.scissor),y=E.scissorTest}else C.copy(z).multiplyScalar(k).floor(),L.copy($).multiplyScalar(k).floor(),y=V;if(le.bindFramebuffer(36160,W)&&Se.drawBuffers&&U&&le.drawBuffers(E,W),le.viewport(C),le.scissor(L),le.setScissorTest(y),ge){const Me=be.get(E.texture);G.framebufferTexture2D(36160,36064,34069+N,Me.__webglTexture,O)}else if(ye){const Me=be.get(E.texture),Ne=N||0;G.framebufferTextureLayer(36160,36064,Me.__webglTexture,O||0,Ne)}M=-1},this.readRenderTargetPixels=function(E,N,O,U,W,ge,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){le.bindFramebuffer(36160,we);try{const Me=E.texture,Ne=Me.format,Ae=Me.type;if(Ne!==Ln&&B.convert(Ne)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ae===js&&(Te.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ae!==Yi&&B.convert(Ae)!==G.getParameter(35738)&&!(Ae===Bi&&(Se.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-U&&O>=0&&O<=E.height-W&&G.readPixels(N,O,U,W,B.convert(Ne),B.convert(Ae),ge)}finally{const Me=x!==null?be.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(E,N,O=0){const U=Math.pow(2,-O),W=Math.floor(N.image.width*U),ge=Math.floor(N.image.height*U);me.setTexture2D(N,0),G.copyTexSubImage2D(3553,O,0,0,E.x,E.y,W,ge),le.unbindTexture()},this.copyTextureToTexture=function(E,N,O,U=0){const W=N.image.width,ge=N.image.height,ye=B.convert(O.format),we=B.convert(O.type);me.setTexture2D(O,0),G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment),N.isDataTexture?G.texSubImage2D(3553,U,E.x,E.y,W,ge,ye,we,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(3553,U,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):G.texSubImage2D(3553,U,E.x,E.y,ye,we,N.image),U===0&&O.generateMipmaps&&G.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,N,O,U,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,ye=E.max.y-E.min.y+1,we=E.max.z-E.min.z+1,Me=B.convert(U.format),Ne=B.convert(U.type);let Ae;if(U.isData3DTexture)me.setTexture3D(U,0),Ae=32879;else if(U.isDataArrayTexture)me.setTexture2DArray(U,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Pe=G.getParameter(3314),Ye=G.getParameter(32878),Pi=G.getParameter(3316),or=G.getParameter(3315),ar=G.getParameter(32877),Mn=O.isCompressedTexture?O.mipmaps[0]:O.image;G.pixelStorei(3314,Mn.width),G.pixelStorei(32878,Mn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),O.isDataTexture||O.isData3DTexture?G.texSubImage3D(Ae,W,N.x,N.y,N.z,ge,ye,we,Me,Ne,Mn.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ae,W,N.x,N.y,N.z,ge,ye,we,Me,Mn.data)):G.texSubImage3D(Ae,W,N.x,N.y,N.z,ge,ye,we,Me,Ne,Mn),G.pixelStorei(3314,Pe),G.pixelStorei(32878,Ye),G.pixelStorei(3316,Pi),G.pixelStorei(3315,or),G.pixelStorei(32877,ar),W===0&&U.generateMipmaps&&G.generateMipmap(Ae),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){m=0,v=0,x=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ES extends Up{}ES.prototype.isWebGL1Renderer=!0;class TS extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class Qa extends Kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new D,d=new D,g=[],_=[],p=[],h=[];for(let m=0;m<=i;m++){const v=[],x=m/i;let M=0;m==0&&o==0?M=.5/n:m==i&&l==Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){const C=w/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),p.push(d.x,d.y,d.z),h.push(C+M,1-x),v.push(u++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const x=c[m][v+1],M=c[m][v],w=c[m+1][v],C=c[m+1][v+1];(m!==0||o>0)&&g.push(x,M,C),(m!==i-1||l<Math.PI)&&g.push(M,w,C)}this.setIndex(g),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(h,2))}static fromJSON(e){return new Qa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uc extends Kn{constructor(e=1,n=.4,i=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new D,f=new D,d=new D;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const p=_/r*s,h=g/i*Math.PI*2;f.x=(e+n*Math.cos(h))*Math.cos(p),f.y=(e+n*Math.cos(h))*Math.sin(p),f.z=n*Math.sin(h),a.push(f.x,f.y,f.z),c.x=e*Math.cos(p),c.y=e*Math.sin(p),d.subVectors(f,c).normalize(),l.push(d.x,d.y,d.z),u.push(_/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const p=(r+1)*g+_-1,h=(r+1)*(g-1)+_-1,m=(r+1)*(g-1)+_,v=(r+1)*g+_;o.push(p,h,v),o.push(h,m,v)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(u,2))}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Op extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class CS extends ls{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class bS{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const g=u[f],_=u[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return _}return null}}}const AS=new bS;class Bp{constructor(e){this.manager=e!==void 0?e:AS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class LS extends Bp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Xs("img");function l(){c(),qd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ka extends Bp{constructor(e){super(e)}load(e,n,i,r){const s=new nn,o=new LS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Vp extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const $d=new it,Yd=new D,Zd=new D;class PS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yd),Zd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zd),n.updateMatrixWorld(),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qd=new it,_s=new D,Ql=new D;class DS extends PS{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),i.position.copy(_s),Ql.copy(i.position),Ql.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ql),i.updateMatrixWorld(),r.makeTranslation(-_s.x,-_s.y,-_s.z),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}}class RS extends Vp{constructor(e,n,i=0,r=1){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new DS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IS extends Vp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);const FS=new Ka().load("Avatar.jpg"),Br=new Jt(new us(3,3,3),new Fc({map:FS})),NS=()=>{Br.position.z=-5,Br.position.x=2},Kd=t=>{Br.rotation.x+=t||.01,Br.rotation.y+=t||.01,Br.rotation.z+=t||.01},zS=new Ka().load("moon.jpg"),kS=new Ka().load("normal.jpg"),Ma=new Jt(new Qa(3,32,32),new Op({map:zS,normalMap:kS})),US=()=>{Ma.position.z=30,Ma.position.setX(-10)},Jd=t=>{Ma.rotation.x+=t||.005},Iu=[],OS=()=>{const t=new Qa(.25,24,24),e=new Op({color:16777215}),n=new Jt(t,e),[i,r,s]=Array(3).fill(null).map(()=>Sp.randFloatSpread(100));return n.position.set(i,r,s),n},BS=t=>{for(let e=1;e<=2e3;e++)Iu.push(OS());Iu.forEach(e=>t.add(e))},eh=()=>{Iu.forEach(t=>{const[e,n,i]=Array(3).fill(null).map(()=>Sp.randFloatSpread(.04));t.position.x+=e,t.position.y+=n,t.position.z+=i})},VS=new Uc(10,3,16,100),GS=new CS({color:16737095}),ua=new Jt(VS,GS),HS=()=>{},th=t=>{ua.rotation.x+=t||.01,ua.rotation.y+=t||.005,ua.rotation.z+=t||.01},WS=({camera:t,renderer:e,scene:n})=>{const i=()=>{const s=document.body.getBoundingClientRect().top;eh(),Kd(.02),th(.02),Jd(.1),t.position.z=s*-.01,t.position.x=s*-2e-4,t.rotation.y=s*-2e-4};document.body.onscroll=i,i();const r=()=>{requestAnimationFrame(r),eh(),Kd(),th(),Jd(),e.render(n,t)};return r},jS=new Ka().load("space.jpg"),XS=t=>t.background=jS,qS=()=>window.innerWidth/window.innerHeight,$S=()=>{const t=new TS,e=new Vt(75,qS(),.1,1e3),n=new Up;return{scene:t,camera:e,renderer:n}},YS=({camera:t,renderer:e,scene:n,configs:i})=>{i.forEach(r=>r()),t.position.setZ(30),t.position.setX(-3),e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.render(n,t)},Gp=new RS(16777215),ZS=new IS(16777215),QS=()=>{Gp.position.set(5,5,5)},{camera:Hp,renderer:Oc,scene:Ci}=$S();YS({camera:Hp,scene:Ci,renderer:Oc,configs:[QS,NS,US,HS]});XS(Ci);BS(Ci);Ci.add(Gp,ZS);Ci.add(Br);Ci.add(ua);Ci.add(Ma);WS({camera:Hp,renderer:Oc,scene:Ci})();const KS=Oc.domElement;var Ja={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=qa.exports,eM=Symbol.for("react.element"),tM=Symbol.for("react.fragment"),nM=Object.prototype.hasOwnProperty,iM=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rM={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)nM.call(e,i)&&!rM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:eM,type:t,key:s,ref:o,props:r,_owner:iM.current}}el.Fragment=tM;el.jsx=Wp;el.jsxs=Wp;Ja.exports=el;const Ke=Ja.exports.jsx,qs=Ja.exports.jsxs,sM=Ja.exports.Fragment,oM=()=>(qa.exports.useEffect(()=>{var t;return(t=document.querySelector("#bg"))==null||t.appendChild(KS),()=>{}},[]),Ke("div",{id:"bg"})),aM=()=>Ke("footer",{}),lM=()=>Ke("header",{children:Ke("h1",{children:"Welcome"})}),uM=({children:t})=>qs(sM,{children:[Ke(oM,{}),qs("div",{children:[Ke(lM,{}),Ke("main",{children:t}),Ke(aM,{})]})]}),Kl=({children:t})=>Ke("blockquote",{children:qs("p",{children:[" ",t||"Lorem ipsum, dolor sit amet consectetur"]})}),Jl=({className:t})=>qs("section",{className:t||"",children:[Ke("h2",{children:"\u{1F469}\u{1F3FD}\u200D\u{1F680} Projects"}),Ke("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Ke("br",{}),Ke("h2",{children:"\u{1F3C6} Accomplishments"}),Ke("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),cM=()=>qs(uM,{children:[Ke(Kl,{}),Ke(Jl,{className:"left"}),Ke(Jl,{}),Ke(Kl,{}),Ke(Jl,{className:"left"}),Ke(Kl,{children:"Thanks for watching !"})]});var jp={exports:{}},Xt={},Xp={exports:{}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,R){var F=P.length;P.push(R);e:for(;0<F;){var q=F-1>>>1,X=P[q];if(0<r(X,R))P[q]=R,P[F]=X,F=q;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var R=P[0],F=P.pop();if(F!==R){P[0]=F;e:for(var q=0,X=P.length,Z=X>>>1;q<Z;){var oe=2*(q+1)-1,de=P[oe],G=oe+1,je=P[G];if(0>r(de,F))G<X&&0>r(je,de)?(P[q]=je,P[G]=F,q=G):(P[q]=de,P[oe]=F,q=oe);else if(G<X&&0>r(je,F))P[q]=je,P[G]=F,q=G;else break e}}return R}function r(P,R){var F=P.sortIndex-R.sortIndex;return F!==0?F:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var R=n(u);R!==null;){if(R.callback===null)i(u);else if(R.startTime<=P)i(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function M(P){if(p=!1,x(P),!_)if(n(l)!==null)_=!0,V(w);else{var R=n(u);R!==null&&j(M,R.startTime-P)}}function w(P,R){_=!1,p&&(p=!1,m(y),y=-1),g=!0;var F=d;try{for(x(R),f=n(l);f!==null&&(!(f.expirationTime>R)||P&&!k());){var q=f.callback;if(typeof q=="function"){f.callback=null,d=f.priorityLevel;var X=q(f.expirationTime<=R);R=t.unstable_now(),typeof X=="function"?f.callback=X:f===n(l)&&i(l),x(R)}else i(l);f=n(l)}if(f!==null)var Z=!0;else{var oe=n(u);oe!==null&&j(M,oe.startTime-R),Z=!1}return Z}finally{f=null,d=F,g=!1}}var C=!1,L=null,y=-1,b=5,I=-1;function k(){return!(t.unstable_now()-I<b)}function ne(){if(L!==null){var P=t.unstable_now();I=P;var R=!0;try{R=L(!0,P)}finally{R?K():(C=!1,L=null)}}else C=!1}var K;if(typeof v=="function")K=function(){v(ne)};else if(typeof MessageChannel!="undefined"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=ne,K=function(){$.postMessage(null)}}else K=function(){h(ne,0)};function V(P){L=P,C||(C=!0,K())}function j(P,R){y=h(function(){P(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,V(w))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var F=d;d=R;try{return P()}finally{d=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=d;d=P;try{return R()}finally{d=F}},t.unstable_scheduleCallback=function(P,R,F){var q=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=F+X,P={id:c++,callback:R,priorityLevel:P,startTime:F,expirationTime:X,sortIndex:-1},F>q?(P.sortIndex=F,e(u,P),n(l)===null&&P===n(u)&&(p?(m(y),y=-1):p=!0,j(M,F-q))):(P.sortIndex=X,e(l,P),_||g||(_=!0,V(w))),P},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(P){var R=d;return function(){var F=d;d=R;try{return P.apply(this,arguments)}finally{d=F}}}})(qp);Xp.exports=qp;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=qa.exports,jt=Xp.exports;function Y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp=new Set,$s={};function rr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for($s[t]=e,t=0;t<e.length;t++)Yp.add(e[t])}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Fu=Object.prototype.hasOwnProperty,fM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nh={},ih={};function dM(t){return Fu.call(ih,t)?!0:Fu.call(nh,t)?!1:fM.test(t)?ih[t]=!0:(nh[t]=!0,!1)}function hM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pM(t,e,n,i){if(e===null||typeof e=="undefined"||hM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bc=/[\-:]([a-z])/g;function Vc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bc,Vc);ht[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bc,Vc);ht[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bc,Vc);ht[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,i){var r=ht.hasOwnProperty(e)?ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pM(e,n,r,i)&&(n=null),i||r===null?dM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Jn=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),ui=Symbol.for("react.lazy"),Kp=Symbol.for("react.offscreen"),rh=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,eu;function Ls(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+t}var tu=!1;function nu(t,e){if(!t||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function mM(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=nu(t.type,!1),t;case 11:return t=nu(t.type.render,!1),t;case 1:return t=nu(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Cr:return"Portal";case Nu:return"Profiler";case Hc:return"StrictMode";case zu:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qp:return(t.displayName||"Context")+".Consumer";case Zp:return(t._context.displayName||"Context")+".Provider";case Wc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jc:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case ui:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function gM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===Hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vM(t){var e=Jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=vM(t))}function em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ou(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tm(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function Bu(t,e){tm(t,e);var n=Ei(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function Vr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Y(92));if(Ps(n)){if(1<n.length)throw Error(Y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function nm(t,e){var n=Ei(e.value),i=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jo,rm=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_M=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){_M.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function sm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function om(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var xM=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(xM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Gr=null,Hr=null;function uh(t){if(t=_o(t)){if(typeof qu!="function")throw Error(Y(280));var e=t.stateNode;e&&(e=sl(e),qu(t.stateNode,t.type,e))}}function am(t){Gr?Hr?Hr.push(t):Hr=[t]:Gr=t}function lm(){if(Gr){var t=Gr,e=Hr;if(Hr=Gr=null,uh(t),e)for(t=0;t<e.length;t++)uh(e[t])}}function um(t,e){return t(e)}function cm(){}var iu=!1;function fm(t,e,n){if(iu)return t(e,n);iu=!0;try{return um(t,e,n)}finally{iu=!1,(Gr!==null||Hr!==null)&&(cm(),lm())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var i=sl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var $u=!1;if($n)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){$u=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{$u=!1}function yM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var zs=!1,Ea=null,Ta=!1,Yu=null,SM={onError:function(t){zs=!0,Ea=t}};function MM(t,e,n,i,r,s,o,a,l){zs=!1,Ea=null,yM.apply(SM,arguments)}function wM(t,e,n,i,r,s,o,a,l){if(MM.apply(this,arguments),zs){if(zs){var u=Ea;zs=!1,Ea=null}else throw Error(Y(198));Ta||(Ta=!0,Yu=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ch(t){if(sr(t)!==t)throw Error(Y(188))}function EM(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ch(r),t;if(s===i)return ch(r),e;s=s.sibling}throw Error(Y(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function hm(t){return t=EM(t),t!==null?pm(t):null}function pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pm(t);if(e!==null)return e;t=t.sibling}return null}var mm=jt.unstable_scheduleCallback,fh=jt.unstable_cancelCallback,TM=jt.unstable_shouldYield,CM=jt.unstable_requestPaint,Je=jt.unstable_now,bM=jt.unstable_getCurrentPriorityLevel,qc=jt.unstable_ImmediatePriority,gm=jt.unstable_UserBlockingPriority,Ca=jt.unstable_NormalPriority,AM=jt.unstable_LowPriority,vm=jt.unstable_IdlePriority,tl=null,Dn=null;function LM(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:RM,PM=Math.log,DM=Math.LN2;function RM(t){return t>>>=0,t===0?32:31-(PM(t)/DM|0)|0}var Xo=64,qo=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ds(a):(s&=o,s!==0&&(i=Ds(s)))}else o=n&~r,o!==0?i=Ds(o):s!==0&&(i=Ds(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vn(e),r=1<<n,i|=t[n],e&=~r;return i}function IM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=IM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _m(){var t=Xo;return Xo<<=1,(Xo&4194240)===0&&(Xo=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function NM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $c(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ke=0;function xm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ym,Yc,Sm,Mm,wm,Qu=!1,$o=[],gi=null,vi=null,_i=null,Qs=new Map,Ks=new Map,fi=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(e.pointerId)}}function Ss(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_o(e),e!==null&&Yc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kM(t,e,n,i,r){switch(e){case"focusin":return gi=Ss(gi,t,e,n,i,r),!0;case"dragenter":return vi=Ss(vi,t,e,n,i,r),!0;case"mouseover":return _i=Ss(_i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qs.set(s,Ss(Qs.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ks.set(s,Ss(Ks.get(s)||null,t,e,n,i,r)),!0}return!1}function Em(t){var e=Gi(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=dm(n),e!==null){t.blockedOn=e,wm(t.priority,function(){Sm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xu=i,n.target.dispatchEvent(i),Xu=null}else return e=_o(n),e!==null&&Yc(e),t.blockedOn=n,!1;e.shift()}return!0}function hh(t,e,n){ca(t)&&n.delete(e)}function UM(){Qu=!1,gi!==null&&ca(gi)&&(gi=null),vi!==null&&ca(vi)&&(vi=null),_i!==null&&ca(_i)&&(_i=null),Qs.forEach(hh),Ks.forEach(hh)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,UM)))}function Js(t){function e(r){return Ms(r,t)}if(0<$o.length){Ms($o[0],t);for(var n=1;n<$o.length;n++){var i=$o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gi!==null&&Ms(gi,t),vi!==null&&Ms(vi,t),_i!==null&&Ms(_i,t),Qs.forEach(e),Ks.forEach(e),n=0;n<fi.length;n++)i=fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fi.length&&(n=fi[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&fi.shift()}var Wr=Jn.ReactCurrentBatchConfig,Aa=!0;function OM(t,e,n,i){var r=ke,s=Wr.transition;Wr.transition=null;try{ke=1,Zc(t,e,n,i)}finally{ke=r,Wr.transition=s}}function BM(t,e,n,i){var r=ke,s=Wr.transition;Wr.transition=null;try{ke=4,Zc(t,e,n,i)}finally{ke=r,Wr.transition=s}}function Zc(t,e,n,i){if(Aa){var r=Ku(t,e,n,i);if(r===null)pu(t,e,i,La,n),dh(t,i);else if(kM(r,t,e,n,i))i.stopPropagation();else if(dh(t,i),e&4&&-1<zM.indexOf(t)){for(;r!==null;){var s=_o(r);if(s!==null&&ym(s),s=Ku(t,e,n,i),s===null&&pu(t,e,i,La,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(t,e,i,null,n)}}var La=null;function Ku(t,e,n,i){if(La=null,t=Xc(i),t=Gi(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return La=t,null}function Tm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bM()){case qc:return 1;case gm:return 4;case Ca:case AM:return 16;case vm:return 536870912;default:return 16}default:return 16}}var hi=null,Qc=null,fa=null;function Cm(){if(fa)return fa;var t,e=Qc,n=e.length,i,r="value"in hi?hi.value:hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fa=r.slice(t,1<i?1-i:void 0)}function da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function ph(){return!1}function qt(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:ph,this.isPropagationStopped=ph,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=qt(fs),vo=$e({},fs,{view:0,detail:0}),VM=qt(vo),su,ou,ws,nl=$e({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(su=t.screenX-ws.screenX,ou=t.screenY-ws.screenY):ou=su=0,ws=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),mh=qt(nl),GM=$e({},nl,{dataTransfer:0}),HM=qt(GM),WM=$e({},vo,{relatedTarget:0}),au=qt(WM),jM=$e({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),XM=qt(jM),qM=$e({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$M=qt(qM),YM=$e({},fs,{data:0}),gh=qt(YM),ZM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KM[t])?!!e[t]:!1}function Jc(){return JM}var ew=$e({},vo,{key:function(t){if(t.key){var e=ZM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tw=qt(ew),nw=$e({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=qt(nw),iw=$e({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),rw=qt(iw),sw=$e({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ow=qt(sw),aw=$e({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lw=qt(aw),uw=[9,13,27,32],ef=$n&&"CompositionEvent"in window,ks=null;$n&&"documentMode"in document&&(ks=document.documentMode);var cw=$n&&"TextEvent"in window&&!ks,bm=$n&&(!ef||ks&&8<ks&&11>=ks),_h=String.fromCharCode(32),xh=!1;function Am(t,e){switch(t){case"keyup":return uw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function fw(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(xh=!0,_h);case"textInput":return t=e.data,t===_h&&xh?null:t;default:return null}}function dw(t,e){if(Ar)return t==="compositionend"||!ef&&Am(t,e)?(t=Cm(),fa=Qc=hi=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bm&&e.locale!=="ko"?null:e.data;default:return null}}var hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hw[t.type]:e==="textarea"}function Pm(t,e,n,i){am(i),e=Pa(e,"onChange"),0<e.length&&(n=new Kc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Us=null,eo=null;function pw(t){Vm(t,0)}function il(t){var e=Dr(t);if(em(e))return t}function mw(t,e){if(t==="change")return e}var Dm=!1;if($n){var lu;if($n){var uu="oninput"in document;if(!uu){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),uu=typeof Sh.oninput=="function"}lu=uu}else lu=!1;Dm=lu&&(!document.documentMode||9<document.documentMode)}function Mh(){Us&&(Us.detachEvent("onpropertychange",Rm),eo=Us=null)}function Rm(t){if(t.propertyName==="value"&&il(eo)){var e=[];Pm(e,eo,t,Xc(t)),fm(pw,e)}}function gw(t,e,n){t==="focusin"?(Mh(),Us=e,eo=n,Us.attachEvent("onpropertychange",Rm)):t==="focusout"&&Mh()}function vw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(eo)}function _w(t,e){if(t==="click")return il(e)}function xw(t,e){if(t==="input"||t==="change")return il(e)}function yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:yw;function to(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!xn(t[r],e[r]))return!1}return!0}function wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eh(t,e){var n=wh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wh(n)}}function Im(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Im(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fm(){for(var t=window,e=wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wa(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sw(t){var e=Fm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Im(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Eh(n,s);var o=Eh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mw=$n&&"documentMode"in document&&11>=document.documentMode,Lr=null,Ju=null,Os=null,ec=!1;function Th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ec||Lr==null||Lr!==wa(i)||(i=Lr,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Os&&to(Os,i)||(Os=i,i=Pa(Ju,"onSelect"),0<i.length&&(e=new Kc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Lr)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},cu={},Nm={};$n&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function rl(t){if(cu[t])return cu[t];if(!Pr[t])return t;var e=Pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nm)return cu[t]=e[n];return t}var zm=rl("animationend"),km=rl("animationiteration"),Um=rl("animationstart"),Om=rl("transitionend"),Bm=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){Bm.set(t,e),rr(e,[t])}for(var fu=0;fu<Ch.length;fu++){var du=Ch[fu],ww=du.toLowerCase(),Ew=du[0].toUpperCase()+du.slice(1);bi(ww,"on"+Ew)}bi(zm,"onAnimationEnd");bi(km,"onAnimationIteration");bi(Um,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(Om,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wM(i,e,void 0,t),t.currentTarget=null}function Vm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;bh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;bh(r,a,u),s=l}}}if(Ta)throw t=Yu,Ta=!1,Yu=null,t}function Ve(t,e){var n=e[sc];n===void 0&&(n=e[sc]=new Set);var i=t+"__bubble";n.has(i)||(Gm(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),Gm(n,t,i,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[Qo]){t[Qo]=!0,Yp.forEach(function(n){n!=="selectionchange"&&(Tw.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,hu("selectionchange",!1,e))}}function Gm(t,e,n,i){switch(Tm(e)){case 1:var r=OM;break;case 4:r=BM;break;default:r=Zc}n=r.bind(null,e,n,t),r=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pu(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}fm(function(){var u=s,c=Xc(n),f=[];e:{var d=Bm.get(t);if(d!==void 0){var g=Kc,_=t;switch(t){case"keypress":if(da(n)===0)break e;case"keydown":case"keyup":g=tw;break;case"focusin":_="focus",g=au;break;case"focusout":_="blur",g=au;break;case"beforeblur":case"afterblur":g=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=HM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rw;break;case zm:case km:case Um:g=XM;break;case Om:g=ow;break;case"scroll":g=VM;break;case"wheel":g=lw;break;case"copy":case"cut":case"paste":g=$M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vh}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,m!==null&&(M=Zs(v,m),M!=null&&p.push(io(v,M,x)))),h)break;v=v.return}0<p.length&&(d=new g(d,_,null,n,c),f.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Xu&&(_=n.relatedTarget||n.fromElement)&&(Gi(_)||_[Yn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Gi(_):null,_!==null&&(h=sr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(p=mh,M="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=vh,M="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?d:Dr(g),x=_==null?d:Dr(_),d=new p(M,v+"leave",g,n,c),d.target=h,d.relatedTarget=x,M=null,Gi(c)===u&&(p=new p(m,v+"enter",_,n,c),p.target=x,p.relatedTarget=h,M=p),h=M,g&&_)t:{for(p=g,m=_,v=0,x=p;x;x=wr(x))v++;for(x=0,M=m;M;M=wr(M))x++;for(;0<v-x;)p=wr(p),v--;for(;0<x-v;)m=wr(m),x--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=wr(p),m=wr(m)}p=null}else p=null;g!==null&&Ah(f,d,g,p,!1),_!==null&&h!==null&&Ah(f,h,_,p,!0)}}e:{if(d=u?Dr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var w=mw;else if(yh(d))if(Dm)w=xw;else{w=vw;var C=gw}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=_w);if(w&&(w=w(t,u))){Pm(f,w,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Vu(d,"number",d.value)}switch(C=u?Dr(u):window,t){case"focusin":(yh(C)||C.contentEditable==="true")&&(Lr=C,Ju=u,Os=null);break;case"focusout":Os=Ju=Lr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Th(f,n,c);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":Th(f,n,c)}var L;if(ef)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ar?Am(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(bm&&n.locale!=="ko"&&(Ar||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ar&&(L=Cm()):(hi=c,Qc="value"in hi?hi.value:hi.textContent,Ar=!0)),C=Pa(u,y),0<C.length&&(y=new gh(y,t,null,n,c),f.push({event:y,listeners:C}),L?y.data=L:(L=Lm(n),L!==null&&(y.data=L)))),(L=cw?fw(t,n):dw(t,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(c=new gh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=L))}Vm(f,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zs(t,n),s!=null&&i.unshift(io(t,s,r)),s=Zs(t,e),s!=null&&i.push(io(t,s,r))),t=t.return}return i}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ah(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Zs(n,s),l!=null&&o.unshift(io(n,l,a))):r||(l=Zs(n,s),l!=null&&o.push(io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function Lh(t){return(typeof t=="string"?t:""+t).replace(Cw,`
`).replace(bw,"")}function Ko(t,e,n){if(e=Lh(e),Lh(t)!==e&&n)throw Error(Y(425))}function Da(){}var tc=null,nc=null;function ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,Aw=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,Lw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph!="undefined"?function(t){return Ph.resolve(null).then(t).catch(Pw)}:rc;function Pw(t){setTimeout(function(){throw t})}function mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Js(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Js(e)}function xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),An="__reactFiber$"+ds,ro="__reactProps$"+ds,Yn="__reactContainer$"+ds,sc="__reactEvents$"+ds,Dw="__reactListeners$"+ds,Rw="__reactHandles$"+ds;function Gi(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dh(t);t!==null;){if(n=t[An])return n;t=Dh(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[An]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Y(33))}function sl(t){return t[ro]||null}var oc=[],Rr=-1;function Ai(t){return{current:t}}function He(t){0>Rr||(t.current=oc[Rr],oc[Rr]=null,Rr--)}function Be(t,e){Rr++,oc[Rr]=t.current,t.current=e}var Ti={},yt=Ai(Ti),Ft=Ai(!1),Ji=Ti;function Jr(t,e){var n=t.type.contextTypes;if(!n)return Ti;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nt(t){return t=t.childContextTypes,t!=null}function Ra(){He(Ft),He(yt)}function Rh(t,e,n){if(yt.current!==Ti)throw Error(Y(168));Be(yt,e),Be(Ft,n)}function Hm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,gM(t)||"Unknown",r));return $e({},n,i)}function Ia(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ti,Ji=yt.current,Be(yt,t),Be(Ft,Ft.current),!0}function Ih(t,e,n){var i=t.stateNode;if(!i)throw Error(Y(169));n?(t=Hm(t,e,Ji),i.__reactInternalMemoizedMergedChildContext=t,He(Ft),He(yt),Be(yt,t)):He(Ft),Be(Ft,n)}var Gn=null,ol=!1,gu=!1;function Wm(t){Gn===null?Gn=[t]:Gn.push(t)}function Iw(t){ol=!0,Wm(t)}function Li(){if(!gu&&Gn!==null){gu=!0;var t=0,e=ke;try{var n=Gn;for(ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Gn=null,ol=!1}catch(r){throw Gn!==null&&(Gn=Gn.slice(t+1)),mm(qc,Li),r}finally{ke=e,gu=!1}}return null}var Ir=[],Fr=0,Fa=null,Na=0,Zt=[],Qt=0,er=null,Wn=1,jn="";function zi(t,e){Ir[Fr++]=Na,Ir[Fr++]=Fa,Fa=t,Na=e}function jm(t,e,n){Zt[Qt++]=Wn,Zt[Qt++]=jn,Zt[Qt++]=er,er=t;var i=Wn;t=jn;var r=32-vn(i)-1;i&=~(1<<r),n+=1;var s=32-vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wn=1<<32-vn(e)+r|n<<r|i,jn=s+t}else Wn=1<<s|n<<r|i,jn=t}function nf(t){t.return!==null&&(zi(t,1),jm(t,1,0))}function rf(t){for(;t===Fa;)Fa=Ir[--Fr],Ir[Fr]=null,Na=Ir[--Fr],Ir[Fr]=null;for(;t===er;)er=Zt[--Qt],Zt[Qt]=null,jn=Zt[--Qt],Zt[Qt]=null,Wn=Zt[--Qt],Zt[Qt]=null}var Wt=null,Gt=null,We=!1,pn=null;function Xm(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Gt=xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=er!==null?{id:Wn,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Gt=null,!0):!1;default:return!1}}function ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lc(t){if(We){var e=Gt;if(e){var n=e;if(!Fh(t,e)){if(ac(t))throw Error(Y(418));e=xi(n.nextSibling);var i=Wt;e&&Fh(t,e)?Xm(i,n):(t.flags=t.flags&-4097|2,We=!1,Wt=t)}}else{if(ac(t))throw Error(Y(418));t.flags=t.flags&-4097|2,We=!1,Wt=t}}}function Nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Jo(t){if(t!==Wt)return!1;if(!We)return Nh(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ic(t.type,t.memoizedProps)),e&&(e=Gt)){if(ac(t))throw qm(),Error(Y(418));for(;e;)Xm(t,e),e=xi(e.nextSibling)}if(Nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Wt?xi(t.stateNode.nextSibling):null;return!0}function qm(){for(var t=Gt;t;)t=xi(t.nextSibling)}function es(){Gt=Wt=null,We=!1}function sf(t){pn===null?pn=[t]:pn.push(t)}var Fw=Jn.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var za=Ai(null),ka=null,Nr=null,of=null;function af(){of=Nr=ka=null}function lf(t){var e=za.current;He(za),t._currentValue=e}function uc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function jr(t,e){ka=t,of=Nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(It=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Nr===null){if(ka===null)throw Error(Y(308));Nr=t,ka.dependencies={lanes:0,firstContext:t}}else Nr=Nr.next=t;return e}var Hi=null;function uf(t){Hi===null?Hi=[t]:Hi.push(t)}function $m(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zn(t,i)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ci=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zn(t,n)}return r=i.interleaved,r===null?(e.next=e,uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zn(t,n)}function ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$c(t,n)}}function zh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ua(t,e,n,i){var r=t.updateQueue;ci=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,p=a;switch(d=e,g=n,p.tag){case 1:if(_=p.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=$e({},f,d);break e;case 2:ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);nr|=o,t.lanes=o,t.memoizedState=f}}function kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var Zm=new $p.Component().refs;function cc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var al={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Et(),r=Mi(t),s=qn(i,r);s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,r),e!==null&&(_n(e,t,r,i),ha(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Et(),r=Mi(t),s=qn(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,r),e!==null&&(_n(e,t,r,i),ha(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),i=Mi(t),r=qn(n,i);r.tag=2,e!=null&&(r.callback=e),e=yi(t,r,i),e!==null&&(_n(e,t,i,n),ha(e,t,i))}};function Uh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!to(n,i)||!to(r,s):!0}function Qm(t,e,n){var i=!1,r=Ti,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(r=Nt(e)?Ji:yt.current,i=e.contextTypes,s=(i=i!=null)?Jr(t,r):Ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=al,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&al.enqueueReplaceState(e,e.state,null)}function fc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Zm,cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=sn(s):(s=Nt(e)?Ji:yt.current,r.context=Jr(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&al.enqueueReplaceState(r,r.state,null),Ua(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var i=n.stateNode}if(!i)throw Error(Y(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Zm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bh(t){var e=t._init;return e(t._payload)}function Km(t){function e(m,v){if(t){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=wi(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,M){return v===null||v.tag!==6?(v=wu(x,m.mode,M),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,M){var w=x.type;return w===br?c(m,v,x.props.children,M,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ui&&Bh(w)===v.type)?(M=r(v,x.props),M.ref=Es(m,v,x),M.return=m,M):(M=xa(x.type,x.key,x.props,null,m.mode,M),M.ref=Es(m,v,x),M.return=m,M)}function u(m,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Eu(x,m.mode,M),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function c(m,v,x,M,w){return v===null||v.tag!==7?(v=$i(x,m.mode,M,w),v.return=m,v):(v=r(v,x),v.return=m,v)}function f(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wu(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:return x=xa(v.type,v.key,v.props,null,m.mode,x),x.ref=Es(m,null,v),x.return=m,x;case Cr:return v=Eu(v,m.mode,x),v.return=m,v;case ui:var M=v._init;return f(m,M(v._payload),x)}if(Ps(v)||xs(v))return v=$i(v,m.mode,x,null),v.return=m,v;ea(m,v)}return null}function d(m,v,x,M){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(m,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ho:return x.key===w?l(m,v,x,M):null;case Cr:return x.key===w?u(m,v,x,M):null;case ui:return w=x._init,d(m,v,w(x._payload),M)}if(Ps(x)||xs(x))return w!==null?null:c(m,v,x,M,null);ea(m,x)}return null}function g(m,v,x,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(x)||null,a(v,m,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ho:return m=m.get(M.key===null?x:M.key)||null,l(v,m,M,w);case Cr:return m=m.get(M.key===null?x:M.key)||null,u(v,m,M,w);case ui:var C=M._init;return g(m,v,x,C(M._payload),w)}if(Ps(M)||xs(M))return m=m.get(x)||null,c(v,m,M,w,null);ea(v,M)}return null}function _(m,v,x,M){for(var w=null,C=null,L=v,y=v=0,b=null;L!==null&&y<x.length;y++){L.index>y?(b=L,L=null):b=L.sibling;var I=d(m,L,x[y],M);if(I===null){L===null&&(L=b);break}t&&L&&I.alternate===null&&e(m,L),v=s(I,v,y),C===null?w=I:C.sibling=I,C=I,L=b}if(y===x.length)return n(m,L),We&&zi(m,y),w;if(L===null){for(;y<x.length;y++)L=f(m,x[y],M),L!==null&&(v=s(L,v,y),C===null?w=L:C.sibling=L,C=L);return We&&zi(m,y),w}for(L=i(m,L);y<x.length;y++)b=g(L,m,y,x[y],M),b!==null&&(t&&b.alternate!==null&&L.delete(b.key===null?y:b.key),v=s(b,v,y),C===null?w=b:C.sibling=b,C=b);return t&&L.forEach(function(k){return e(m,k)}),We&&zi(m,y),w}function p(m,v,x,M){var w=xs(x);if(typeof w!="function")throw Error(Y(150));if(x=w.call(x),x==null)throw Error(Y(151));for(var C=w=null,L=v,y=v=0,b=null,I=x.next();L!==null&&!I.done;y++,I=x.next()){L.index>y?(b=L,L=null):b=L.sibling;var k=d(m,L,I.value,M);if(k===null){L===null&&(L=b);break}t&&L&&k.alternate===null&&e(m,L),v=s(k,v,y),C===null?w=k:C.sibling=k,C=k,L=b}if(I.done)return n(m,L),We&&zi(m,y),w;if(L===null){for(;!I.done;y++,I=x.next())I=f(m,I.value,M),I!==null&&(v=s(I,v,y),C===null?w=I:C.sibling=I,C=I);return We&&zi(m,y),w}for(L=i(m,L);!I.done;y++,I=x.next())I=g(L,m,y,I.value,M),I!==null&&(t&&I.alternate!==null&&L.delete(I.key===null?y:I.key),v=s(I,v,y),C===null?w=I:C.sibling=I,C=I);return t&&L.forEach(function(ne){return e(m,ne)}),We&&zi(m,y),w}function h(m,v,x,M){if(typeof x=="object"&&x!==null&&x.type===br&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ho:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===br){if(C.tag===7){n(m,C.sibling),v=r(C,x.props.children),v.return=m,m=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ui&&Bh(w)===C.type){n(m,C.sibling),v=r(C,x.props),v.ref=Es(m,C,x),v.return=m,m=v;break e}n(m,C);break}else e(m,C);C=C.sibling}x.type===br?(v=$i(x.props.children,m.mode,M,x.key),v.return=m,m=v):(M=xa(x.type,x.key,x.props,null,m.mode,M),M.ref=Es(m,v,x),M.return=m,m=M)}return o(m);case Cr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=Eu(x,m.mode,M),v.return=m,m=v}return o(m);case ui:return C=x._init,h(m,v,C(x._payload),M)}if(Ps(x))return _(m,v,x,M);if(xs(x))return p(m,v,x,M);ea(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,x),v.return=m,m=v):(n(m,v),v=wu(x,m.mode,M),v.return=m,m=v),o(m)):n(m,v)}return h}var ts=Km(!0),Jm=Km(!1),xo={},Rn=Ai(xo),so=Ai(xo),oo=Ai(xo);function Wi(t){if(t===xo)throw Error(Y(174));return t}function ff(t,e){switch(Be(oo,e),Be(so,t),Be(Rn,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hu(e,t)}He(Rn),Be(Rn,e)}function ns(){He(Rn),He(so),He(oo)}function eg(t){Wi(oo.current);var e=Wi(Rn.current),n=Hu(e,t.type);e!==n&&(Be(so,t),Be(Rn,n))}function df(t){so.current===t&&(He(Rn),He(so))}var Xe=Ai(0);function Oa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function hf(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var pa=Jn.ReactCurrentDispatcher,_u=Jn.ReactCurrentBatchConfig,tr=0,qe=null,st=null,lt=null,Ba=!1,Bs=!1,ao=0,Nw=0;function gt(){throw Error(Y(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(tr=s,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?Ow:Bw,t=n(i,r),Bs){s=0;do{if(Bs=!1,ao=0,25<=s)throw Error(Y(301));s+=1,lt=st=null,e.updateQueue=null,pa.current=Vw,t=n(i,r)}while(Bs)}if(pa.current=Va,e=st!==null&&st.next!==null,tr=0,lt=st=qe=null,Ba=!1,e)throw Error(Y(300));return t}function gf(){var t=ao!==0;return ao=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?qe.memoizedState=lt=t:lt=lt.next=t,lt}function on(){if(st===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=lt===null?qe.memoizedState:lt.next;if(e!==null)lt=e,st=t;else{if(t===null)throw Error(Y(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},lt===null?qe.memoizedState=lt=t:lt=lt.next=t}return lt}function lo(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=on(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=st,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,qe.lanes|=c,nr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,xn(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,qe.lanes|=s,nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=on(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);xn(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tg(){}function ng(t,e){var n=qe,i=on(),r=e(),s=!xn(i.memoizedState,r);if(s&&(i.memoizedState=r,It=!0),i=i.queue,vf(sg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,uo(9,rg.bind(null,n,i,r,e),void 0,null),ut===null)throw Error(Y(349));(tr&30)!==0||ig(n,e,r)}return r}function ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rg(t,e,n,i){e.value=n,e.getSnapshot=i,og(e)&&ag(t)}function sg(t,e,n){return n(function(){og(e)&&ag(t)})}function og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function ag(t){var e=Zn(t,1);e!==null&&_n(e,t,1,-1)}function Vh(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=Uw.bind(null,qe,t),[e.memoizedState,t]}function uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lg(){return on().memoizedState}function ma(t,e,n,i){var r=Cn();qe.flags|=t,r.memoizedState=uo(1|e,n,void 0,i===void 0?null:i)}function ll(t,e,n,i){var r=on();i=i===void 0?null:i;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=uo(e,n,s,i);return}}qe.flags|=t,r.memoizedState=uo(1|e,n,s,i)}function Gh(t,e){return ma(8390656,8,t,e)}function vf(t,e){return ll(2048,8,t,e)}function ug(t,e){return ll(4,2,t,e)}function cg(t,e){return ll(4,4,t,e)}function fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dg(t,e,n){return n=n!=null?n.concat([t]):null,ll(4,4,fg.bind(null,e,t),n)}function _f(){}function hg(t,e){var n=on();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function pg(t,e){var n=on();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mg(t,e,n){return(tr&21)===0?(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n):(xn(n,e)||(n=_m(),qe.lanes|=n,nr|=n,t.baseState=!0),e)}function zw(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var i=_u.transition;_u.transition={};try{t(!1),e()}finally{ke=n,_u.transition=i}}function gg(){return on().memoizedState}function kw(t,e,n){var i=Mi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vg(t))_g(e,n);else if(n=$m(t,e,n,i),n!==null){var r=Et();_n(n,t,i,r),xg(n,e,i)}}function Uw(t,e,n){var i=Mi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(t))_g(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,xn(a,o)){var l=e.interleaved;l===null?(r.next=r,uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$m(t,e,r,i),n!==null&&(r=Et(),_n(n,t,i,r),xg(n,e,i))}}function vg(t){var e=t.alternate;return t===qe||e!==null&&e===qe}function _g(t,e){Bs=Ba=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xg(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$c(t,n)}}var Va={readContext:sn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},Ow={readContext:sn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Gh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ma(4194308,4,fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return ma(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Cn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kw.bind(null,qe,t),[i.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:_f,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=zw.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=qe,r=Cn();if(We){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),ut===null)throw Error(Y(349));(tr&30)!==0||ig(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gh(sg.bind(null,i,s,t),[t]),i.flags|=2048,uo(9,rg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=ut.identifierPrefix;if(We){var n=jn,i=Wn;n=(i&~(1<<32-vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Nw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bw={readContext:sn,useCallback:hg,useContext:sn,useEffect:vf,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:xu,useRef:lg,useState:function(){return xu(lo)},useDebugValue:_f,useDeferredValue:function(t){var e=on();return mg(e,st.memoizedState,t)},useTransition:function(){var t=xu(lo)[0],e=on().memoizedState;return[t,e]},useMutableSource:tg,useSyncExternalStore:ng,useId:gg,unstable_isNewReconciler:!1},Vw={readContext:sn,useCallback:hg,useContext:sn,useEffect:vf,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:yu,useRef:lg,useState:function(){return yu(lo)},useDebugValue:_f,useDeferredValue:function(t){var e=on();return st===null?e.memoizedState=t:mg(e,st.memoizedState,t)},useTransition:function(){var t=yu(lo)[0],e=on().memoizedState;return[t,e]},useMutableSource:tg,useSyncExternalStore:ng,useId:gg,unstable_isNewReconciler:!1};function is(t,e){try{var n="",i=e;do n+=mM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function dc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gw=typeof WeakMap=="function"?WeakMap:Map;function yg(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ha||(Ha=!0,Mc=i),dc(t,e)},n}function Sg(t,e,n){n=qn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dc(t,e),typeof i!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nE.bind(null,t,e,n),e.then(t,t))}function Wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jh(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var Hw=Jn.ReactCurrentOwner,It=!1;function wt(t,e,n,i){e.child=t===null?Jm(e,null,n,i):ts(e,t.child,n,i)}function Xh(t,e,n,i,r){n=n.render;var s=e.ref;return jr(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qn(t,e,r)):(We&&n&&nf(e),e.flags|=1,wt(t,e,i,r),e.child)}function qh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mg(t,e,s,i,r)):(t=xa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(o,i)&&t.ref===e.ref)return Qn(t,e,r)}return e.flags|=1,t=wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Mg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(to(s,i)&&t.ref===e.ref)if(It=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,Qn(t,e,r)}return hc(t,e,n,i,r)}function wg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(kr,Bt),Bt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(kr,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Be(kr,Bt),Bt|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Be(kr,Bt),Bt|=i;return wt(t,e,r,n),e.child}function Eg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hc(t,e,n,i,r){var s=Nt(n)?Ji:yt.current;return s=Jr(e,s),jr(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qn(t,e,r)):(We&&i&&nf(e),e.flags|=1,wt(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(Nt(n)){var s=!0;Ia(e)}else s=!1;if(jr(e,r),e.stateNode===null)ga(t,e),Qm(e,n,i),fc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Nt(n)?Ji:yt.current,u=Jr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Oh(e,o,i,u),ci=!1;var d=e.memoizedState;o.state=d,Ua(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Ft.current||ci?(typeof c=="function"&&(cc(e,n,c,i),l=e.memoizedState),(a=ci||Uh(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ym(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=Nt(n)?Ji:yt.current,l=Jr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Oh(e,o,i,l),ci=!1,d=e.memoizedState,o.state=d,Ua(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||Ft.current||ci?(typeof g=="function"&&(cc(e,n,g,i),_=e.memoizedState),(u=ci||Uh(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return pc(t,e,n,i,s,r)}function pc(t,e,n,i,r,s){Eg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ih(e,n,!1),Qn(t,e,s);i=e.stateNode,Hw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,a,s)):wt(t,e,a,s),e.memoizedState=i.state,r&&Ih(e,n,!0),e.child}function Tg(t){var e=t.stateNode;e.pendingContext?Rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(t,e.context,!1),ff(t,e.containerInfo)}function Yh(t,e,n,i,r){return es(),sf(r),e.flags|=256,wt(t,e,n,i),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cg(t,e,n){var i=e.pendingProps,r=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Be(Xe,r&1),t===null)return lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,i,0,null),t=$i(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gc(n),e.memoizedState=mc,t):xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ww(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wi(a,s):(s=$i(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mc,i}return s=t.child,t=s.sibling,i=wi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xf(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&sf(i),ts(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ww(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Su(Error(Y(422))),ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fl({mode:"visible",children:i.children},r,0,null),s=$i(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ts(e,t.child,null,o),e.child.memoizedState=gc(o),e.memoizedState=mc,s);if((e.mode&1)===0)return ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=Su(s,i,void 0),ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,It||a){if(i=ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zn(t,r),_n(i,t,r,-1))}return Tf(),i=Su(Error(Y(421))),ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Gt=xi(r.nextSibling),Wt=e,We=!0,pn=null,t!==null&&(Zt[Qt++]=Wn,Zt[Qt++]=jn,Zt[Qt++]=er,Wn=t.id,jn=t.overflow,er=e),e=xf(e,i.children),e.flags|=4096,e)}function Zh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uc(t.return,e,n)}function Mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(wt(t,e,i.children,n),i=Xe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zh(t,n,e);else if(t.tag===19)Zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Be(Xe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Oa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Oa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jw(t,e,n){switch(e.tag){case 3:Tg(e),es();break;case 5:eg(e);break;case 1:Nt(e.type)&&Ia(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Be(za,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Be(Xe,Xe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Cg(t,e,n):(Be(Xe,Xe.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);Be(Xe,Xe.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Be(Xe,Xe.current),i)break;return null;case 22:case 23:return e.lanes=0,wg(t,e,n)}return Qn(t,e,n)}var Ag,vc,Lg,Pg;Ag=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vc=function(){};Lg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wi(Rn.current);var s=null;switch(n){case"input":r=Ou(t,r),i=Ou(t,i),s=[];break;case"select":r=$e({},r,{value:void 0}),i=$e({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Da)}Wu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ts(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xw(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Nt(e.type)&&Ra(),vt(e),null;case 3:return i=e.stateNode,ns(),He(Ft),He(yt),hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,pn!==null&&(Tc(pn),pn=null))),vc(t,e),vt(e),null;case 5:df(e);var r=Wi(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)Lg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return vt(e),null}if(t=Wi(Rn.current),Jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[An]=e,i[ro]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(r=0;r<Rs.length;r++)Ve(Rs[r],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":sh(i,s),Ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",i);break;case"textarea":ah(i,s),Ve("invalid",i)}Wu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,t),r=["children",""+a]):$s.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",i)}switch(n){case"input":Wo(i),oh(i,s,!0);break;case"textarea":Wo(i),lh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Da)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[An]=e,t[ro]=i,Ag(t,e,!1,!1),e.stateNode=t;e:{switch(o=ju(n,i),n){case"dialog":Ve("cancel",t),Ve("close",t),r=i;break;case"iframe":case"object":case"embed":Ve("load",t),r=i;break;case"video":case"audio":for(r=0;r<Rs.length;r++)Ve(Rs[r],t);r=i;break;case"source":Ve("error",t),r=i;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),r=i;break;case"details":Ve("toggle",t),r=i;break;case"input":sh(t,i),r=Ou(t,i),Ve("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=$e({},i,{value:void 0}),Ve("invalid",t);break;case"textarea":ah(t,i),r=Gu(t,i),Ve("invalid",t);break;default:r=i}Wu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?om(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($s.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",t):l!=null&&Gc(t,s,l,o))}switch(n){case"input":Wo(t),oh(t,i,!1);break;case"textarea":Wo(t),lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ei(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)Pg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(n=Wi(oo.current),Wi(Rn.current),Jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[An]=e,(s=i.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[An]=e,e.stateNode=i}return vt(e),null;case 13:if(He(Xe),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&Gt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)qm(),es(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[An]=e}else es(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else pn!==null&&(Tc(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Xe.current&1)!==0?ot===0&&(ot=3):Tf())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return ns(),vc(t,e),t===null&&no(e.stateNode.containerInfo),vt(e),null;case 10:return lf(e.type._context),vt(e),null;case 17:return Nt(e.type)&&Ra(),vt(e),null;case 19:if(He(Xe),s=e.memoizedState,s===null)return vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ts(s,!1);else{if(ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Oa(t),o!==null){for(e.flags|=128,Ts(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>rs&&(e.flags|=128,i=!0,Ts(s,!1),e.lanes=4194304)}else{if(!i)if(t=Oa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!We)return vt(e),null}else 2*Je()-s.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,i=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=Xe.current,Be(Xe,i?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Ef(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Bt&1073741824)!==0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function qw(t,e){switch(rf(e),e.tag){case 1:return Nt(e.type)&&Ra(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),He(Ft),He(yt),hf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(He(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Xe),null;case 4:return ns(),null;case 10:return lf(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var na=!1,xt=!1,$w=typeof WeakSet=="function"?WeakSet:Set,ae=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Qe(t,e,i)}else n.current=null}function _c(t,e,n){try{n()}catch(i){Qe(t,e,i)}}var Qh=!1;function Yw(t,e){if(tc=Aa,t=Fm(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:t,selectionRange:n},Aa=!1,ae=e;ae!==null;)if(e=ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ae=t;else for(;ae!==null;){e=ae;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:dn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(M){Qe(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}return _=Qh,Qh=!1,_}function Vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_c(e,n,s)}r=r.next}while(r!==i)}}function ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dg(t){var e=t.alternate;e!==null&&(t.alternate=null,Dg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[ro],delete e[sc],delete e[Dw],delete e[Rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rg(t){return t.tag===5||t.tag===3||t.tag===4}function Kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Da));else if(i!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}function Sc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sc(t,e,n),t=t.sibling;t!==null;)Sc(t,e,n),t=t.sibling}var ft=null,hn=!1;function li(t,e,n){for(n=n.child;n!==null;)Ig(t,e,n),n=n.sibling}function Ig(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:xt||zr(n,e);case 6:var i=ft,r=hn;ft=null,li(t,e,n),ft=i,hn=r,ft!==null&&(hn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(hn?(t=ft,n=n.stateNode,t.nodeType===8?mu(t.parentNode,n):t.nodeType===1&&mu(t,n),Js(t)):mu(ft,n.stateNode));break;case 4:i=ft,r=hn,ft=n.stateNode.containerInfo,hn=!0,li(t,e,n),ft=i,hn=r;break;case 0:case 11:case 14:case 15:if(!xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&_c(n,e,o),r=r.next}while(r!==i)}li(t,e,n);break;case 1:if(!xt&&(zr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Qe(n,e,a)}li(t,e,n);break;case 21:li(t,e,n);break;case 22:n.mode&1?(xt=(i=xt)||n.memoizedState!==null,li(t,e,n),xt=i):li(t,e,n);break;default:li(t,e,n)}}function Jh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $w),e.forEach(function(i){var r=rE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,hn=!1;break e;case 3:ft=a.stateNode.containerInfo,hn=!0;break e;case 4:ft=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(ft===null)throw Error(Y(160));Ig(s,o,r),ft=null,hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fg(e,t),e=e.sibling}function Fg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Tn(t),i&4){try{Vs(3,t,t.return),ul(3,t)}catch(p){Qe(t,t.return,p)}try{Vs(5,t,t.return)}catch(p){Qe(t,t.return,p)}}break;case 1:fn(e,t),Tn(t),i&512&&n!==null&&zr(n,n.return);break;case 5:if(fn(e,t),Tn(t),i&512&&n!==null&&zr(n,n.return),t.flags&32){var r=t.stateNode;try{Ys(r,"")}catch(p){Qe(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tm(r,s),ju(a,o);var u=ju(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?om(r,f):c==="dangerouslySetInnerHTML"?rm(r,f):c==="children"?Ys(r,f):Gc(r,c,f,u)}switch(a){case"input":Bu(r,s);break;case"textarea":nm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Vr(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vr(r,!!s.multiple,s.defaultValue,!0):Vr(r,!!s.multiple,s.multiple?[]:"",!1))}r[ro]=s}catch(p){Qe(t,t.return,p)}}break;case 6:if(fn(e,t),Tn(t),i&4){if(t.stateNode===null)throw Error(Y(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){Qe(t,t.return,p)}}break;case 3:if(fn(e,t),Tn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(p){Qe(t,t.return,p)}break;case 4:fn(e,t),Tn(t);break;case 13:fn(e,t),Tn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=Je())),i&4&&Jh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||c,fn(e,t),xt=u):fn(e,t),Tn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(ae=t,c=t.child;c!==null;){for(f=ae=c;ae!==null;){switch(d=ae,g=d.child,d.tag){case 0:case 11:case 14:case 15:Vs(4,d,d.return);break;case 1:zr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){Qe(i,n,p)}}break;case 5:zr(d,d.return);break;case 22:if(d.memoizedState!==null){tp(f);continue}}g!==null?(g.return=d,ae=g):tp(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sm("display",o))}catch(p){Qe(t,t.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){Qe(t,t.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:fn(e,t),Tn(t),i&4&&Jh(t);break;case 21:break;default:fn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rg(n)){var i=n;break e}n=n.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ys(r,""),i.flags&=-33);var s=Kh(t);Sc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kh(t);yc(t,a,o);break;default:throw Error(Y(161))}}catch(l){Qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zw(t,e,n){ae=t,Ng(t)}function Ng(t,e,n){for(var i=(t.mode&1)!==0;ae!==null;){var r=ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||xt;a=na;var u=xt;if(na=o,(xt=l)&&!u)for(ae=r;ae!==null;)o=ae,l=o.child,o.tag===22&&o.memoizedState!==null?np(r):l!==null?(l.return=o,ae=l):np(r);for(;s!==null;)ae=s,Ng(s),s=s.sibling;ae=r,na=a,xt=u}ep(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ae=s):ep(t)}}function ep(t){for(;ae!==null;){var e=ae;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:xt||ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Js(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}xt||e.flags&512&&xc(e)}catch(d){Qe(e,e.return,d)}}if(e===t){ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,ae=n;break}ae=e.return}}function tp(t){for(;ae!==null;){var e=ae;if(e===t){ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ae=n;break}ae=e.return}}function np(t){for(;ae!==null;){var e=ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ul(4,e)}catch(l){Qe(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{xc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{xc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===t){ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ae=a;break}ae=e.return}}var Qw=Math.ceil,Ga=Jn.ReactCurrentDispatcher,yf=Jn.ReactCurrentOwner,tn=Jn.ReactCurrentBatchConfig,Le=0,ut=null,nt=null,dt=0,Bt=0,kr=Ai(0),ot=0,co=null,nr=0,cl=0,Sf=0,Gs=null,Rt=null,Mf=0,rs=1/0,Vn=null,Ha=!1,Mc=null,Si=null,ia=!1,pi=null,Wa=0,Hs=0,wc=null,va=-1,_a=0;function Et(){return(Le&6)!==0?Je():va!==-1?va:va=Je()}function Mi(t){return(t.mode&1)===0?1:(Le&2)!==0&&dt!==0?dt&-dt:Fw.transition!==null?(_a===0&&(_a=_m()),_a):(t=ke,t!==0||(t=window.event,t=t===void 0?16:Tm(t.type)),t)}function _n(t,e,n,i){if(50<Hs)throw Hs=0,wc=null,Error(Y(185));go(t,n,i),((Le&2)===0||t!==ut)&&(t===ut&&((Le&2)===0&&(cl|=n),ot===4&&di(t,dt)),zt(t,i),n===1&&Le===0&&(e.mode&1)===0&&(rs=Je()+500,ol&&Li()))}function zt(t,e){var n=t.callbackNode;FM(t,e);var i=ba(t,t===ut?dt:0);if(i===0)n!==null&&fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fh(n),e===1)t.tag===0?Iw(ip.bind(null,t)):Wm(ip.bind(null,t)),Lw(function(){(Le&6)===0&&Li()}),n=null;else{switch(xm(i)){case 1:n=qc;break;case 4:n=gm;break;case 16:n=Ca;break;case 536870912:n=vm;break;default:n=Ca}n=Hg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(va=-1,_a=0,(Le&6)!==0)throw Error(Y(327));var n=t.callbackNode;if(Xr()&&t.callbackNode!==n)return null;var i=ba(t,t===ut?dt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=ja(t,i);else{e=i;var r=Le;Le|=2;var s=Ug();(ut!==t||dt!==e)&&(Vn=null,rs=Je()+500,qi(t,e));do try{eE();break}catch(a){kg(t,a)}while(1);af(),Ga.current=s,Le=r,nt!==null?e=0:(ut=null,dt=0,e=ot)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=Ec(t,r))),e===1)throw n=co,qi(t,0),di(t,i),zt(t,Je()),n;if(e===6)di(t,i);else{if(r=t.current.alternate,(i&30)===0&&!Kw(r)&&(e=ja(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=Ec(t,s))),e===1))throw n=co,qi(t,0),di(t,i),zt(t,Je()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:ki(t,Rt,Vn);break;case 3:if(di(t,i),(i&130023424)===i&&(e=Mf+500-Je(),10<e)){if(ba(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Et(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rc(ki.bind(null,t,Rt,Vn),e);break}ki(t,Rt,Vn);break;case 4:if(di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qw(i/1960))-i,10<i){t.timeoutHandle=rc(ki.bind(null,t,Rt,Vn),i);break}ki(t,Rt,Vn);break;case 5:ki(t,Rt,Vn);break;default:throw Error(Y(329))}}}return zt(t,Je()),t.callbackNode===n?zg.bind(null,t):null}function Ec(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(qi(t,e).flags|=256),t=ja(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Tc(e)),t}function Tc(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function Kw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function di(t,e){for(e&=~Sf,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),i=1<<n;t[n]=-1,e&=~i}}function ip(t){if((Le&6)!==0)throw Error(Y(327));Xr();var e=ba(t,0);if((e&1)===0)return zt(t,Je()),null;var n=ja(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=Ec(t,i))}if(n===1)throw n=co,qi(t,0),di(t,e),zt(t,Je()),n;if(n===6)throw Error(Y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,Rt,Vn),zt(t,Je()),null}function wf(t,e){var n=Le;Le|=1;try{return t(e)}finally{Le=n,Le===0&&(rs=Je()+500,ol&&Li())}}function ir(t){pi!==null&&pi.tag===0&&(Le&6)===0&&Xr();var e=Le;Le|=1;var n=tn.transition,i=ke;try{if(tn.transition=null,ke=1,t)return t()}finally{ke=i,tn.transition=n,Le=e,(Le&6)===0&&Li()}}function Ef(){Bt=kr.current,He(kr)}function qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Aw(n)),nt!==null)for(n=nt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ra();break;case 3:ns(),He(Ft),He(yt),hf();break;case 5:df(i);break;case 4:ns();break;case 13:He(Xe);break;case 19:He(Xe);break;case 10:lf(i.type._context);break;case 22:case 23:Ef()}n=n.return}if(ut=t,nt=t=wi(t.current,null),dt=Bt=e,ot=0,co=null,Sf=cl=nr=0,Rt=Gs=null,Hi!==null){for(e=0;e<Hi.length;e++)if(n=Hi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Hi=null}return t}function kg(t,e){do{var n=nt;try{if(af(),pa.current=Va,Ba){for(var i=qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ba=!1}if(tr=0,lt=st=qe=null,Bs=!1,ao=0,yf.current=null,n===null||n.return===null){ot=1,co=e,nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Wh(o);if(g!==null){g.flags&=-257,jh(g,o,a,s,e),g.mode&1&&Hh(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){Hh(s,u,e),Tf();break e}l=Error(Y(426))}}else if(We&&a.mode&1){var h=Wh(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),jh(h,o,a,s,e),sf(is(l,a));break e}}s=l=is(l,a),ot!==4&&(ot=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=yg(s,l,e);zh(s,m);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Si===null||!Si.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Sg(s,a,e);zh(s,M);break e}}s=s.return}while(s!==null)}Bg(n)}catch(w){e=w,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function Ug(){var t=Ga.current;return Ga.current=Va,t===null?Va:t}function Tf(){(ot===0||ot===3||ot===2)&&(ot=4),ut===null||(nr&268435455)===0&&(cl&268435455)===0||di(ut,dt)}function ja(t,e){var n=Le;Le|=2;var i=Ug();(ut!==t||dt!==e)&&(Vn=null,qi(t,e));do try{Jw();break}catch(r){kg(t,r)}while(1);if(af(),Le=n,Ga.current=i,nt!==null)throw Error(Y(261));return ut=null,dt=0,ot}function Jw(){for(;nt!==null;)Og(nt)}function eE(){for(;nt!==null&&!TM();)Og(nt)}function Og(t){var e=Gg(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?Bg(t):nt=e,yf.current=null}function Bg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Xw(n,e,Bt),n!==null){nt=n;return}}else{if(n=qw(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,nt=null;return}}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ot===0&&(ot=5)}function ki(t,e,n){var i=ke,r=tn.transition;try{tn.transition=null,ke=1,tE(t,e,n,i)}finally{tn.transition=r,ke=i}return null}function tE(t,e,n,i){do Xr();while(pi!==null);if((Le&6)!==0)throw Error(Y(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NM(t,s),t===ut&&(nt=ut=null,dt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ia||(ia=!0,Hg(Ca,function(){return Xr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=tn.transition,tn.transition=null;var o=ke;ke=1;var a=Le;Le|=4,yf.current=null,Yw(t,n),Fg(n,t),Sw(nc),Aa=!!tc,nc=tc=null,t.current=n,Zw(n),CM(),Le=a,ke=o,tn.transition=s}else t.current=n;if(ia&&(ia=!1,pi=t,Wa=r),s=t.pendingLanes,s===0&&(Si=null),LM(n.stateNode),zt(t,Je()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ha)throw Ha=!1,t=Mc,Mc=null,t;return(Wa&1)!==0&&t.tag!==0&&Xr(),s=t.pendingLanes,(s&1)!==0?t===wc?Hs++:(Hs=0,wc=t):Hs=0,Li(),null}function Xr(){if(pi!==null){var t=xm(Wa),e=tn.transition,n=ke;try{if(tn.transition=null,ke=16>t?16:t,pi===null)var i=!1;else{if(t=pi,pi=null,Wa=0,(Le&6)!==0)throw Error(Y(331));var r=Le;for(Le|=4,ae=t.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ae=u;ae!==null;){var c=ae;switch(c.tag){case 0:case 11:case 15:Vs(8,c,s)}var f=c.child;if(f!==null)f.return=c,ae=f;else for(;ae!==null;){c=ae;var d=c.sibling,g=c.return;if(Dg(c),c===u){ae=null;break}if(d!==null){d.return=g,ae=d;break}ae=g}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,ae=m;break e}ae=s.return}}var v=t.current;for(ae=v;ae!==null;){o=ae;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,ae=x;else e:for(o=v;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(w){Qe(a,a.return,w)}if(a===o){ae=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ae=M;break e}ae=a.return}}if(Le=r,Li(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(tl,t)}catch{}i=!0}return i}finally{ke=n,tn.transition=e}}return!1}function rp(t,e,n){e=is(n,e),e=yg(t,e,1),t=yi(t,e,1),e=Et(),t!==null&&(go(t,1,e),zt(t,e))}function Qe(t,e,n){if(t.tag===3)rp(t,t,n);else for(;e!==null;){if(e.tag===3){rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Si===null||!Si.has(i))){t=is(n,t),t=Sg(e,t,1),e=yi(e,t,1),t=Et(),e!==null&&(go(e,1,t),zt(e,t));break}}e=e.return}}function nE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(dt&n)===n&&(ot===4||ot===3&&(dt&130023424)===dt&&500>Je()-Mf?qi(t,0):Sf|=n),zt(t,e)}function Vg(t,e){e===0&&((t.mode&1)===0?e=1:(e=qo,qo<<=1,(qo&130023424)===0&&(qo=4194304)));var n=Et();t=Zn(t,e),t!==null&&(go(t,e,n),zt(t,n))}function iE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vg(t,n)}function rE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),Vg(t,n)}var Gg;Gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)It=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return It=!1,jw(t,e,n);It=(t.flags&131072)!==0}else It=!1,We&&(e.flags&1048576)!==0&&jm(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ga(t,e),t=e.pendingProps;var r=Jr(e,yt.current);jr(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(i)?(s=!0,Ia(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cf(e),r.updater=al,e.stateNode=r,r._reactInternals=e,fc(e,i,t,n),e=pc(null,e,i,!0,s,n)):(e.tag=0,We&&s&&nf(e),wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oE(i),t=dn(i,t),r){case 0:e=hc(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=Xh(null,e,i,t,n);break e;case 14:e=qh(null,e,i,dn(i.type,t),n);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dn(i,r),hc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dn(i,r),$h(t,e,i,r,n);case 3:e:{if(Tg(e),t===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ym(t,e),Ua(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=is(Error(Y(423)),e),e=Yh(t,e,i,n,r);break e}else if(i!==r){r=is(Error(Y(424)),e),e=Yh(t,e,i,n,r);break e}else for(Gt=xi(e.stateNode.containerInfo.firstChild),Wt=e,We=!0,pn=null,n=Jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),i===r){e=Qn(t,e,n);break e}wt(t,e,i,n)}e=e.child}return e;case 5:return eg(e),t===null&&lc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ic(i,r)?o=null:s!==null&&ic(i,s)&&(e.flags|=32),Eg(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&lc(e),null;case 13:return Cg(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ts(e,null,i,n):wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dn(i,r),Xh(t,e,i,r,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Be(za,i._currentValue),i._currentValue=o,s!==null)if(xn(s.value,o)){if(s.children===r.children&&!Ft.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,jr(e,n),r=sn(r),i=i(r),e.flags|=1,wt(t,e,i,n),e.child;case 14:return i=e.type,r=dn(i,e.pendingProps),r=dn(i.type,r),qh(t,e,i,r,n);case 15:return Mg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dn(i,r),ga(t,e),e.tag=1,Nt(i)?(t=!0,Ia(e)):t=!1,jr(e,n),Qm(e,i,r),fc(e,i,r,n),pc(null,e,i,!0,t,n);case 19:return bg(t,e,n);case 22:return wg(t,e,n)}throw Error(Y(156,e.tag))};function Hg(t,e){return mm(t,e)}function sE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,i){return new sE(t,e,n,i)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oE(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wc)return 11;if(t===jc)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case br:return $i(n.children,r,s,e);case Hc:o=8,r|=8;break;case Nu:return t=en(12,n,e,r|2),t.elementType=Nu,t.lanes=s,t;case zu:return t=en(13,n,e,r),t.elementType=zu,t.lanes=s,t;case ku:return t=en(19,n,e,r),t.elementType=ku,t.lanes=s,t;case Kp:return fl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zp:o=10;break e;case Qp:o=9;break e;case Wc:o=11;break e;case jc:o=14;break e;case ui:o=16,i=null;break e}throw Error(Y(130,t==null?t:typeof t,""))}return e=en(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $i(t,e,n,i){return t=en(7,t,i,e),t.lanes=n,t}function fl(t,e,n,i){return t=en(22,t,i,e),t.elementType=Kp,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Eu(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bf(t,e,n,i,r,s,o,a,l){return t=new aE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(s),t}function lE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wg(t){if(!t)return Ti;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(Y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(t.tag===1){var n=t.type;if(Nt(n))return Hm(t,n,e)}return e}function jg(t,e,n,i,r,s,o,a,l){return t=bf(n,i,!0,t,r,s,o,a,l),t.context=Wg(null),n=t.current,i=Et(),r=Mi(n),s=qn(i,r),s.callback=e!=null?e:null,yi(n,s,r),t.current.lanes=r,go(t,r,i),zt(t,i),t}function dl(t,e,n,i){var r=e.current,s=Et(),o=Mi(r);return n=Wg(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yi(r,e,o),t!==null&&(_n(t,r,o,s),ha(t,r,o)),o}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Af(t,e){sp(t,e),(t=t.alternate)&&sp(t,e)}function uE(){return null}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}hl.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));dl(t,e,null,null)};hl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ir(function(){dl(null,t,null,null)}),e[Yn]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fi.length&&e!==0&&e<fi[n].priority;n++);fi.splice(n,0,t),n===0&&Em(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function op(){}function cE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xa(o);s.call(u)}}var o=jg(e,i,t,0,null,!1,!1,"",op);return t._reactRootContainer=o,t[Yn]=o.current,no(t.nodeType===8?t.parentNode:t),ir(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xa(l);a.call(u)}}var l=bf(t,0,!1,null,null,!1,!1,"",op);return t._reactRootContainer=l,t[Yn]=l.current,no(t.nodeType===8?t.parentNode:t),ir(function(){dl(e,l,n,i)}),l}function ml(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xa(o);a.call(l)}}dl(e,o,t,r)}else o=cE(n,e,t,r,i);return Xa(o)}ym=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&($c(e,n|1),zt(e,Je()),(Le&6)===0&&(rs=Je()+500,Li()))}break;case 13:ir(function(){var i=Zn(t,1);if(i!==null){var r=Et();_n(i,t,1,r)}}),Af(t,1)}};Yc=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=Et();_n(e,t,134217728,n)}Af(t,134217728)}};Sm=function(t){if(t.tag===13){var e=Mi(t),n=Zn(t,e);if(n!==null){var i=Et();_n(n,t,e,i)}Af(t,e)}};Mm=function(){return ke};wm=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};qu=function(t,e,n){switch(e){case"input":if(Bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sl(i);if(!r)throw Error(Y(90));em(i),Bu(i,r)}}}break;case"textarea":nm(t,n);break;case"select":e=n.value,e!=null&&Vr(t,!!n.multiple,e,!1)}};um=wf;cm=ir;var fE={usingClientEntryPoint:!1,Events:[_o,Dr,sl,am,lm,wf]},Cs={findFiberByHostInstance:Gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dE={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hm(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||uE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{tl=ra.inject(dE),Dn=ra}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(Y(200));return lE(t,e,null,n)};Xt.createRoot=function(t,e){if(!Pf(t))throw Error(Y(299));var n=!1,i="",r=Xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bf(t,1,!1,null,null,n,!1,i,r),t[Yn]=e.current,no(t.nodeType===8?t.parentNode:t),new Lf(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=hm(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return ir(t)};Xt.hydrate=function(t,e,n){if(!pl(e))throw Error(Y(200));return ml(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(Y(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jg(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Yn]=e.current,no(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hl(e)};Xt.render=function(t,e,n){if(!pl(e))throw Error(Y(200));return ml(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!pl(t))throw Error(Y(40));return t._reactRootContainer?(ir(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};Xt.unstable_batchedUpdates=wf;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pl(n))throw Error(Y(200));if(t==null||t._reactInternals===void 0)throw Error(Y(38));return ml(t,e,n,!1,i)};Xt.version="18.2.0-next-9e3b772b8-20220608";function qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)}catch(t){console.error(t)}}qg(),jp.exports=Xt;var $g,ap=jp.exports;$g=ap.createRoot,ap.hydrateRoot;$g(document.getElementById("root")).render(Ke(cM,{}));
