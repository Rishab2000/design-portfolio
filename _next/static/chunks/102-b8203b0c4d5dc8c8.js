"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{102:function(e,t,r){r.d(t,{x:function(){return l}});var n,o,u={exports:{}},a={},i={exports:{}},f={};i.exports=function(){if(n)return f;n=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var S=b.prototype=new v;S.constructor=b,_(S,m.prototype),S.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function R(t,r,n){var o,u={},a=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,o)&&!g.hasOwnProperty(o)&&(u[o]=r[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var c=Array(f),s=0;s<f;s++)c[s]=arguments[s+2];u.children=c}if(t&&t.defaultProps)for(o in f=t.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:e,type:t,key:a,ref:i,props:u,_owner:w.current}}function $(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var j=/\/+/g;function C(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function x(r,n,o){if(null==r)return r;var u=[],a=0;return function r(n,o,u,a,i){var f,c,s,l=typeof n;("undefined"===l||"boolean"===l)&&(n=null);var p=!1;if(null===n)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(n.$$typeof){case e:case t:p=!0}}if(p)return i=i(p=n),n=""===a?"."+C(p,0):a,E(i)?(u="",null!=n&&(u=n.replace(j,"$&/")+"/"),r(i,o,u,"",function(e){return e})):null!=i&&($(i)&&(f=i,c=u+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+n,i={$$typeof:e,type:f.type,key:c,ref:f.ref,props:f.props,_owner:f._owner}),o.push(i)),1;if(p=0,a=""===a?".":a+":",E(n))for(var d=0;d<n.length;d++){var _=a+C(l=n[d],d);p+=r(l,o,u,_,i)}else if("function"==typeof(_=null===(s=n)||"object"!=typeof s?null:"function"==typeof(s=y&&s[y]||s["@@iterator"])?s:null))for(n=_.call(n),d=0;!(l=n.next()).done;)_=a+C(l=l.value,d++),p+=r(l,o,u,_,i);else if("object"===l)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(n))?"object with keys {"+Object.keys(n).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return p}(r,u,"","",function(e){return n.call(o,e,a++)}),u}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},V={transition:null};return f.Children={map:x,forEach:function(e,t,r){x(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return x(e,function(){t++}),t},toArray:function(e){return x(e,function(e){return e})||[]},only:function(e){if(!$(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},f.Component=m,f.Fragment=r,f.Profiler=u,f.PureComponent=b,f.StrictMode=o,f.Suspense=s,f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:V,ReactCurrentOwner:w},f.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=_({},t.props),u=t.key,a=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=w.current),void 0!==r.key&&(u=""+r.key),t.type&&t.type.defaultProps)var f=t.type.defaultProps;for(c in r)k.call(r,c)&&!g.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==f?f[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){f=Array(c);for(var s=0;s<c;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:e,type:t.type,key:u,ref:a,props:o,_owner:i}},f.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},f.createElement=R,f.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},f.createRef=function(){return{current:null}},f.forwardRef=function(e){return{$$typeof:c,render:e}},f.isValidElement=$,f.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},f.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},f.startTransition=function(e){var t=V.transition;V.transition={};try{e()}finally{V.transition=t}},f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},f.useCallback=function(e,t){return P.current.useCallback(e,t)},f.useContext=function(e){return P.current.useContext(e)},f.useDebugValue=function(){},f.useDeferredValue=function(e){return P.current.useDeferredValue(e)},f.useEffect=function(e,t){return P.current.useEffect(e,t)},f.useId=function(){return P.current.useId()},f.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},f.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},f.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},f.useMemo=function(e,t){return P.current.useMemo(e,t)},f.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},f.useRef=function(e){return P.current.useRef(e)},f.useState=function(e){return P.current.useState(e)},f.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},f.useTransition=function(){return P.current.useTransition()},f.version="18.2.0",f}();var c=i.exports;u.exports=function(){if(o)return a;o=1;var e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(t,o,a){var i,f={},c=null,s=null;for(i in void 0!==a&&(c=""+a),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(s=o.ref),o)r.call(o,i)&&!u.hasOwnProperty(i)&&(f[i]=o[i]);if(t&&t.defaultProps)for(i in o=t.defaultProps)void 0===f[i]&&(f[i]=o[i]);return{$$typeof:e,type:t,key:c,ref:s,props:f,_owner:n.current}}return a.Fragment=t,a.jsx=i,a.jsxs=i,a}();let s=u.exports.jsx,l=c.forwardRef(({icon:e,onClick:t,as:r,weight:n,fill:o=!1,grade:u,size:a,style:i,color:f,className:c,...l},p)=>{let y={color:f,...i};return o&&(y.fontVariationSettings=[y.fontVariationSettings,'"FILL" 1'].filter(Boolean).join(", ")),n&&(y.fontVariationSettings=[y.fontVariationSettings,`"wght" ${n}`].filter(Boolean).join(", ")),u&&(y.fontVariationSettings=[y.fontVariationSettings,`"GRAD" ${u}`].filter(Boolean).join(", ")),a&&(y.fontVariationSettings=[y.fontVariationSettings,`"opsz" ${a}`].filter(Boolean).join(", "),y.fontSize=a),s(void 0!==t?"button":r??"span",{...l,ref:p,style:y,onClick:t,className:function(...e){return e.filter(Boolean).map(e=>e.trim()).join(" ")}("material-symbols",c),children:e})})}}]);