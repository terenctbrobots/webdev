(self.webpackChunkBigBadRobots=self.webpackChunkBigBadRobots||[]).push([[524],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!a(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},7475:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement("div",{className:"pt-2 pb-2 mx-10 border-8 border-gray-500"},e.children)}},3143:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){return n.createElement("div",{className:"text-center my-2 italic pb-6"},"All images, text are copyright to Big Bad Robots Sdn Bhd unless otherwise mentioned.",n.createElement("br",null),n.createElement("a",{href:"https://www.freepik.com/vectors/business"},"Business vector created by macrovector_official - www.freepik.com"))}},2135:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),o=r.p+"static/banner-4ea46ca4526c4966c3ee57ea1393d609.png",a=r.p+"static/nav_claw-5e2321bcac4f1e395a604ed9ab922c07.png",i=function(e){var t=["home","products","services","workshops","contact"],r=t.indexOf(e.page),i=0===r?null:1==r?"/":"/"+t[r-1],c=r===t.length-1?null:"/"+t[r+1];return n.createElement("div",null,n.createElement("img",{className:"mx-auto",src:o,alt:"banner"}),n.createElement("div",{className:"absolute w-full top-17 md:hidden"},n.createElement("div",{className:"flex justify-between bg-nav-texture"},n.createElement("a",{className:null===i?"invisible":"text-nav",href:i},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}))),n.createElement("div",{className:"flex items-center"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"home"===e.page?"h-6 w-6":"hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"products"===e.page?"h-6 w-6":"hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"services"===e.page?"h-6 w-6":"hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"workshops"===e.page?"h-6 w-6":"hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),n.createElement("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"contact"===e.page?"h-6 w-6":"hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),n.createElement("span",{className:"text-white mt-2 text-xs"},{home:"Home",products:"Products",services:"Services",workshops:"Workshops",contact:"Contact"}[e.page])),n.createElement("a",{className:null===c?"invisible":"text-nav",href:c},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}))))),n.createElement("div",{className:"absolute w-full top-28 hidden md:block"},n.createElement("div",{className:"flex items-center mx-40"},n.createElement("img",{src:a,alt:"claw"}),n.createElement("div",{className:"flex justify-around bg-nav-texture font-nav text-nav h-8 w-full"},n.createElement("div",{className:"home"===e.page&&"text-white"},n.createElement("a",{className:"flex justify-center mt-2",href:"index"===e.page?"#":"/"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 lg:h-6 lg:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})),n.createElement("span",{className:"text-xs lg:text-base"},"Home"))),n.createElement("div",{className:"products"===e.page&&"text-white"},n.createElement("a",{className:"flex justify-center mt-2",href:"products"===e.page?"#":"/products"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 lg:h-6 lg:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})),n.createElement("span",{className:"text-xs lg:text-base"},"Products"))),n.createElement("div",{className:"services"===e.page&&"text-white"},n.createElement("a",{className:"flex justify-center mt-2",href:"services"===e.page?"#":"/services"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 lg:h-6 lg:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),n.createElement("span",{className:"text-xs lg:text-base"},"Services"))),n.createElement("div",{className:"workshops"===e.page&&"text-white"},n.createElement("a",{className:"flex justify-center mt-2",href:"workshops"===e.page?"#":"/workshops"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 lg:h-6 lg:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),n.createElement("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})),n.createElement("span",{className:"text-xs lg:text-base"},"Workshops"))),n.createElement("div",{className:"contact"===e.page&&"text-white"},n.createElement("a",{className:"flex justify-center mt-2",href:"contact"===e.page?"#":"/contact"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 lg:h-6 lg:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),n.createElement("span",{className:"text-xs lg:text-base"},"Contact")))))))}},9856:function(e,t,r){"use strict";r.d(t,{Z:function(){return Ee}});var n,o,a,i,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),f=r.n(u),p=r(2993),d=r.n(p),m=r(6494),h=r.n(m),w="bodyAttributes",v="htmlAttributes",g="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(y).map((function(e){return y[e]})),"charset"),E="cssText",T="href",x="http-equiv",k="innerHTML",C="itemprop",A="name",O="property",S="rel",j="src",N="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",B="encodeSpecialCharacters",I="onChangeClientState",R="titleTemplate",z=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),H=[y.NOSCRIPT,y.SCRIPT,y.STYLE],_="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,y.TITLE),r=J(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,L);return t||n||void 0},Z=function(e){return J(e,I)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||r===S&&"canonical"===e[r].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==k&&c!==E&&c!==C||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(y.BODY,n),se(y.HTML,o),ce(f,p);var d={baseTag:le(y.BASE,r),linkTags:le(y.LINK,a),metaTags:le(y.META,i),noscriptTags:le(y.NOSCRIPT,c),scriptTags:le(y.SCRIPT,l),styleTags:le(y.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(y.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(_):r.getAttribute(_)!==i.join(",")&&r.setAttribute(_,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(y.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(_,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,o=fe(r,n),[c.createElement(y.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case w:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=M[e]||e;if(r===k||r===E){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(y.BASE,t,n),bodyAttributes:pe(w,r,n),htmlAttributes:pe(v,o,n),link:pe(y.LINK,a,n),meta:pe(y.META,i,n),noscript:pe(y.NOSCRIPT,c,n),script:pe(y.SCRIPT,s,n),style:pe(y.STYLE,l,n),title:pe(y.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:Q([T,N],e),bodyAttributes:$(w,e),defer:J(e,P),encode:J(e,B),htmlAttributes:$(v,e),linkTags:G(y.LINK,[S,T],e),metaTags:G(y.META,[A,b,x,O,C],e),noscriptTags:G(y.NOSCRIPT,[k],e),onChangeClientState:Z(e),scriptTags:G(y.SCRIPT,[j,k],e),styleTags:G(y.STYLE,[E],e),title:W(e),titleAttributes:$(g,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return q(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case y.TITLE:return F({},o,((t={})[n.type]=i,t.titleAttributes=F({},a),t));case y.BODY:return F({},o,{bodyAttributes:F({},a)});case y.HTML:return F({},o,{htmlAttributes:F({},a)})}return F({},o,((r={})[n.type]=F({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var we=r(9499),ve=r(5444),ge=function(e){var t=e.title,r=e.description,n=(0,we.useLocation)().pathname,o=(0,ve.useStaticQuery)(be).site.siteMetadata,a=o.defaultTitle,i=o.defaultDescription,s={title:t||a,description:r||i,url:""+o.siteUrl+n};return c.createElement(he,{title:s.title},c.createElement("html",{lang:"en"}),c.createElement("meta",{name:"description",content:s.description}),s.url&&c.createElement("meta",{property:"og:url",content:s.url}),s.title&&c.createElement("meta",{property:"og:title",content:s.title}),s.description&&c.createElement("meta",{property:"og:description",content:s.description}))},ye=ge;ge.defaultProps={title:null,description:null};var be="3458129946",Ee=function(e){return c.createElement("main",{className:"text-white bg-black"},c.createElement(ye,null),e.children)}},3070:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement("h1",{className:"font-bold text-xl lg:text-2xl mb-5 bg-title-texture from-red-500 w-48 lg:w-64 pl-2 text-nav"},t)}}}]);
//# sourceMappingURL=c45d14a043e56ab54e831de02d7a9d412993bad5-f375e9870ab9d182020d.js.map