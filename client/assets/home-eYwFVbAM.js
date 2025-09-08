import{r as W,R as Nt,j as p,d as Y,N as Ua,u as Ha,w as Ga,O as Ba}from"./chunk-PVWAREVJ-pGN1tkak.js";import{L as Xa}from"./index-Ds-nC7YN.js";import Va from"./layout-DzyOLeNd.js";import{a as Ja,b as Ka,s as qa}from"./userSlice-CTIN-T6I.js";import Qa from"./signOut-Dtb0uRiA.js";import"./signIn-BYWYBC6a.js";function Tt(e,t){window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:t}))}const qe=(e,t)=>{const a=JSON.stringify(t);window.localStorage.setItem(e,a),Tt(e,a)},Za=e=>{window.localStorage.removeItem(e),Tt(e,null)},Qe=e=>window.localStorage.getItem(e),er=e=>(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),tr=()=>{throw Error("useLocalStorage is a client-only hook")};function _t(e,t){const a=()=>Qe(e),r=W.useSyncExternalStore(er,a,tr),n=W.useCallback(o=>{try{const i=typeof o=="function"?o(JSON.parse(r)):o;i==null?Za(e):qe(e,i)}catch(i){console.warn(i)}},[e,r]);return W.useEffect(()=>{Qe(e)===null&&typeof t<"u"&&qe(e,t)},[e,t]),[r?JSON.parse(r):t,n]}/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var ar={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ee(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function rr(e){if(Array.isArray(e))return e}function nr(e){if(Array.isArray(e))return Ee(e)}function ir(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function or(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Lt(r.key),r)}}function sr(e,t,a){return t&&or(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=ze(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function g(e,t,a){return(t=Lt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function lr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=o.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return s}}function ur(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ze(Object(a),!0).forEach(function(r){g(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ze(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function de(e,t){return rr(e)||fr(e,t)||ze(e,t)||ur()}function O(e){return nr(e)||lr(e)||ze(e)||cr()}function dr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lt(e){var t=dr(e,"string");return typeof t=="symbol"?t:t+""}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(e)}function ze(e,t){if(e){if(typeof e=="string")return Ee(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ee(e,t):void 0}}var et=function(){},We={},Mt={},$t=null,Rt={mark:et,measure:et};try{typeof window<"u"&&(We=window),typeof document<"u"&&(Mt=document),typeof MutationObserver<"u"&&($t=MutationObserver),typeof performance<"u"&&(Rt=performance)}catch{}var mr=We.navigator||{},tt=mr.userAgent,at=tt===void 0?"":tt,$=We,S=Mt,rt=$t,ne=Rt;$.document;var M=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Dt=~at.indexOf("MSIE")||~at.indexOf("Trident/"),ye,vr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,hr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,zt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},pr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Wt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],E="classic",te="duotone",Yt="sharp",Ut="sharp-duotone",Ht="chisel",Gt="etch",Bt="jelly",Xt="jelly-duo",Vt="jelly-fill",Jt="notdog",Kt="notdog-duo",qt="slab",Qt="slab-press",Zt="thumbprint",ea="whiteboard",gr="Classic",br="Duotone",yr="Sharp",xr="Sharp Duotone",Sr="Chisel",wr="Etch",Ar="Jelly",kr="Jelly Duo",Ir="Jelly Fill",Er="Notdog",Pr="Notdog Duo",jr="Slab",Or="Slab Press",Fr="Thumbprint",Cr="Whiteboard",ta=[E,te,Yt,Ut,Ht,Gt,Bt,Xt,Vt,Jt,Kt,qt,Qt,Zt,ea];ye={},g(g(g(g(g(g(g(g(g(g(ye,E,gr),te,br),Yt,yr),Ut,xr),Ht,Sr),Gt,wr),Bt,Ar),Xt,kr),Vt,Ir),Jt,Er),g(g(g(g(g(ye,Kt,Pr),qt,jr),Qt,Or),Zt,Fr),ea,Cr);var Nr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Tr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},_r=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Lr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},aa=["fak","fa-kit","fakd","fa-kit-duotone"],nt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mr=["kit"],$r="kit",Rr="kit-duotone",Dr="Kit",zr="Kit Duotone";g(g({},$r,Dr),Rr,zr);var Wr={kit:{"fa-kit":"fak"}},Yr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ur={kit:{fak:"fa-kit"}},it={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},xe,ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Gr="classic",Br="duotone",Xr="sharp",Vr="sharp-duotone",Jr="chisel",Kr="etch",qr="jelly",Qr="jelly-duo",Zr="jelly-fill",en="notdog",tn="notdog-duo",an="slab",rn="slab-press",nn="thumbprint",on="whiteboard",sn="Classic",ln="Duotone",fn="Sharp",un="Sharp Duotone",cn="Chisel",dn="Etch",mn="Jelly",vn="Jelly Duo",hn="Jelly Fill",pn="Notdog",gn="Notdog Duo",bn="Slab",yn="Slab Press",xn="Thumbprint",Sn="Whiteboard";xe={},g(g(g(g(g(g(g(g(g(g(xe,Gr,sn),Br,ln),Xr,fn),Vr,un),Jr,cn),Kr,dn),qr,mn),Qr,vn),Zr,hn),en,pn),g(g(g(g(g(xe,tn,gn),an,bn),rn,yn),nn,xn),on,Sn);var wn="kit",An="kit-duotone",kn="Kit",In="Kit Duotone";g(g({},wn,kn),An,In);var En={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Pn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Pe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},jn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ra=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Hr,jn),On=["solid","regular","light","thin","duotone","brands","semibold"],na=[1,2,3,4,5,6,7,8,9,10],Fn=na.concat([11,12,13,14,15,16,17,18,19,20]),Cn=["aw","fw","pull-left","pull-right"],Nn=[].concat(O(Object.keys(Pn)),On,Cn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(na.map(function(e){return"".concat(e,"x")})).concat(Fn.map(function(e){return"w-".concat(e)})),Tn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",je=16,ia="fa",oa="svg-inline--fa",U="data-fa-i2svg",Oe="data-fa-pseudo-element",_n="data-fa-pseudo-element-pending",Ye="data-prefix",Ue="data-icon",ot="fontawesome-i2svg",Ln="async",Mn=["HTML","HEAD","STYLE","SCRIPT"],sa=["::before","::after",":before",":after"],la=(function(){try{return!0}catch{return!1}})();function ae(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[E]}})}var fa=f({},zt);fa[E]=f(f(f(f({},{"fa-duotone":"duotone"}),zt[E]),nt.kit),nt["kit-duotone"]);var $n=ae(fa),Fe=f({},Lr);Fe[E]=f(f(f(f({},{duotone:"fad"}),Fe[E]),it.kit),it["kit-duotone"]);var st=ae(Fe),Ce=f({},Pe);Ce[E]=f(f({},Ce[E]),Ur.kit);var ua=ae(Ce),Ne=f({},En);Ne[E]=f(f({},Ne[E]),Wr.kit);ae(Ne);var Rn=vr,ca="fa-layers-text",Dn=hr,zn=f({},Nr);ae(zn);var Wn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Se=pr,Yn=[].concat(O(Mr),O(Nn)),Q=$.FontAwesomeConfig||{};function Un(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(S&&typeof S.querySelector=="function"){var Gn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gn.forEach(function(e){var t=de(e,2),a=t[0],r=t[1],n=Hn(Un(a));n!=null&&(Q[r]=n)})}var da={styleDefault:"solid",familyDefault:E,cssPrefix:ia,replacementClass:oa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var J=f(f({},da),Q);J.autoReplaceSvg||(J.observeMutations=!1);var m={};Object.keys(da).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){J[e]=a,Z.forEach(function(r){return r(m)})},get:function(){return J[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,Z.forEach(function(a){return a(m)})},get:function(){return J.cssPrefix}});$.FontAwesomeConfig=m;var Z=[];function Bn(e){return Z.push(e),function(){Z.splice(Z.indexOf(e),1)}}var G=je,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xn(e){if(!(!e||!M)){var t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=S.head.childNodes,r=null,n=a.length-1;n>-1;n--){var o=a[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return S.head.insertBefore(t,r),e}}var Vn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var e=12,t="";e-- >0;)t+=Vn[Math.random()*62|0];return t}function K(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function He(e){return e.classList?K(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ma(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(ma(e[a]),'" ')},"").trim()}function me(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Ge(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Kn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function qn(e){var t=e.transform,a=e.width,r=a===void 0?je:a,n=e.height,o=n===void 0?je:n,i="";return Dt?i+="translate(".concat(t.x/G-r/2,"em, ").concat(t.y/G-o/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "),i+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Qn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
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
    animation: none !important;
    transition: none !important;
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
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
}`;function va(){var e=ia,t=oa,a=m.cssPrefix,r=m.replacementClass,n=Qn;if(a!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var ft=!1;function we(){m.autoAddCss&&!ft&&(Xn(va()),ft=!0)}var Zn={mixout:function(){return{dom:{css:va,insertCss:we}}},hooks:function(){return{beforeDOMElementCreation:function(){we()},beforeI2svg:function(){we()}}}},L=$||{};L[_]||(L[_]={});L[_].styles||(L[_].styles={});L[_].hooks||(L[_].hooks={});L[_].shims||(L[_].shims=[]);var j=L[_],ha=[],pa=function(){S.removeEventListener("DOMContentLoaded",pa),ue=1,ha.map(function(t){return t()})},ue=!1;M&&(ue=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),ue||S.addEventListener("DOMContentLoaded",pa));function ei(e){M&&(ue?setTimeout(e,0):ha.push(e))}function re(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?ma(e):"<".concat(t," ").concat(Jn(r),">").concat(o.map(re).join(""),"</").concat(t,">")}function ut(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ae=function(t,a,r,n){var o=Object.keys(t),i=o.length,s=a,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<i;l++)u=o[l],c=s(c,t[u],u,t);return c};function ga(e){return O(e).length!==1?null:e.codePointAt(0).toString(16)}function ct(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function ba(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,o=ct(t);typeof j.hooks.addPack=="function"&&!n?j.hooks.addPack(e,ct(t)):j.styles[e]=f(f({},j.styles[e]||{}),o),e==="fas"&&ba("fa",t)}var ee=j.styles,ti=j.shims,ya=Object.keys(ua),ai=ya.reduce(function(e,t){return e[t]=Object.keys(ua[t]),e},{}),Be=null,xa={},Sa={},wa={},Aa={},ka={};function ri(e){return~Yn.indexOf(e)}function ni(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!ri(n)?n:null}var Ia=function(){var t=function(o){return Ae(ee,function(i,s,l){return i[l]=Ae(s,o,{}),i},{})};xa=t(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),Sa=t(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),ka=t(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var a="far"in ee||m.autoFetchSvg,r=Ae(ti,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});wa=r.names,Aa=r.unicodes,Be=ve(m.styleDefault,{family:m.familyDefault})};Bn(function(e){Be=ve(e.styleDefault,{family:m.familyDefault})});Ia();function Xe(e,t){return(xa[e]||{})[t]}function ii(e,t){return(Sa[e]||{})[t]}function z(e,t){return(ka[e]||{})[t]}function Ea(e){return wa[e]||{prefix:null,iconName:null}}function oi(e){var t=Aa[e],a=Xe("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function R(){return Be}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function si(e){var t=E,a=ya.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return ta.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ai[r].includes(n)}))&&(t=r)}),t}function ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?E:a,n=$n[r][e];if(r===te&&!e)return"fad";var o=st[r][e]||st[r][n],i=e in j.styles?e:null,s=o||i||null;return s}function li(e){var t=[],a=null;return e.forEach(function(r){var n=ni(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function dt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var mt=ra.concat(aa);function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,o=dt(e.filter(function(v){return mt.includes(v)})),i=dt(e.filter(function(v){return!mt.includes(v)})),s=o.filter(function(v){return n=v,!Wt.includes(v)}),l=de(s,1),u=l[0],c=u===void 0?null:u,d=si(o),h=f(f({},li(i)),{},{prefix:ve(c,{family:d})});return f(f(f({},h),di({values:e,family:d,styles:ee,config:m,canonical:h,givenPrefix:n})),fi(r,n,h))}function fi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=t==="fa"?Ea(n):{},i=z(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!ee.far&&ee.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ui=ta.filter(function(e){return e!==E||e!==te}),ci=Object.keys(Pe).filter(function(e){return e!==E}).map(function(e){return Object.keys(Pe[e])}).flat();function di(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,c=a===te,d=t.includes("fa-duotone")||t.includes("fad"),h=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(d||h||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ui.includes(a)){var x=Object.keys(s).find(function(w){return ci.includes(w)});if(x||u.autoFetchSvg){var y=_r.get(a).defaultShortPrefixId;r.prefix=y,r.iconName=z(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=R()||"fas"),r}var mi=(function(){function e(){ir(this,e),this.definitions={}}return sr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),i[s]),ba(s,i[s]),Ia()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,u=i.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}])})(),vt=[],X={},V={},vi=Object.keys(V);function hi(e,t){var a=t.mixoutsTo;return vt=e,X={},Object.keys(V).forEach(function(r){vi.indexOf(r)===-1&&delete V[r]}),vt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),fe(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){X[i]||(X[i]=[]),X[i].push(o[i])})}r.provides&&r.provides(V)}),a}function Te(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var o=X[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(r))}),t}function H(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=X[e]||[];n.forEach(function(o){o.apply(null,a)})}function D(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return V[e]?V[e].apply(null,t):void 0}function _e(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||R();if(t)return t=z(a,t)||t,ut(ja.definitions,a,t)||ut(j.styles,a,t)}var ja=new mi,pi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,H("noAuto")},gi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(H("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ei(function(){yi({autoReplaceSvgRoot:a}),H("watch",t)})}},bi={icon:function(t){if(t===null)return null;if(fe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ve(t[0]);return{prefix:r,iconName:z(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Rn))){var n=he(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||R(),iconName:z(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var o=R();return{prefix:o,iconName:z(o,t)||t}}}},P={noAuto:pi,config:m,dom:gi,parse:bi,library:ja,findIconDefinition:_e,toHtml:re},yi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?S:a;(Object.keys(j.styles).length>0||m.autoFetchSvg)&&M&&m.autoReplaceSvg&&P.dom.i2svg({node:r})};function pe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return re(r)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var r=S.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(Ge(i)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=me(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Si(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:i}),children:r}]}]}function wi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Ve(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,d=c===void 0?!1:c,h=r.found?r:a,v=h.width,x=h.height,y=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":o,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!wi(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),d&&(w.attributes[U]="");var A=f(f({},w),{},{prefix:n,iconName:o,main:a,mask:r,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),k=r.found&&a.found?D("generateAbstractMask",A)||{children:[],attributes:{}}:D("generateAbstractIcon",A)||{children:[],attributes:{}},I=k.children,C=k.attributes;return A.children=I,A.attributes=C,s?Si(A):xi(A)}function ht(e){var t=e.content,a=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[U]="");var u=f({},o.styles);Ge(n)&&(u.transform=qn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var c=me(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function Ai(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=me(a.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}var ke=j.styles;function Le(e){var t=e[0],a=e[1],r=e.slice(4),n=de(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Se.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Se.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Se.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var ki={found:!1,width:512,height:512};function Ii(e,t){!la&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Me(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=R()),new Promise(function(r,n){if(a==="fa"){var o=Ea(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ke[t]&&ke[t][e]){var i=ke[t][e];return r(Le(i))}Ii(e,t),r(f(f({},ki),{},{icon:m.showMissingIcons&&e?D("missingIconAbstract")||{}:{}}))})}var pt=function(){},$e=m.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:pt,measure:pt},q='FA "7.0.0"',Ei=function(t){return $e.mark("".concat(q," ").concat(t," begins")),function(){return Oa(t)}},Oa=function(t){$e.mark("".concat(q," ").concat(t," ends")),$e.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},Je={begin:Ei,end:Oa},se=function(){};function gt(e){var t=e.getAttribute?e.getAttribute(U):null;return typeof t=="string"}function Pi(e){var t=e.getAttribute?e.getAttribute(Ye):null,a=e.getAttribute?e.getAttribute(Ue):null;return t&&a}function ji(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Oi(){if(m.autoReplaceSvg===!0)return le.replace;var e=le[m.autoReplaceSvg];return e||le.replace}function Fi(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function Ci(e){return S.createElement(e)}function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Fi:Ci:a;if(typeof e=="string")return S.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(Fa(i,{ceFn:r}))}),n}function Ni(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var le={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Fa(n),a)}),a.getAttribute(U)===null&&m.keepOriginalSource){var r=S.createComment(Ni(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~He(a).indexOf(m.replacementClass))return le.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return re(s)}).join(`
`);a.setAttribute(U,""),a.innerHTML=i}};function bt(e){e()}function Ca(e,t){var a=typeof t=="function"?t:se;if(e.length===0)a();else{var r=bt;m.mutateApproach===Ln&&(r=$.requestAnimationFrame||bt),r(function(){var n=Oi(),o=Je.begin("mutate");e.map(n),o(),a()})}}var Ke=!1;function Na(){Ke=!0}function Re(){Ke=!1}var ce=null;function yt(e){if(rt&&m.observeMutations){var t=e.treeCallback,a=t===void 0?se:t,r=e.nodeCallback,n=r===void 0?se:r,o=e.pseudoElementsCallback,i=o===void 0?se:o,s=e.observeMutationsRoot,l=s===void 0?S:s;ce=new rt(function(u){if(!Ke){var c=R();K(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!gt(d.addedNodes[0])&&(m.searchPseudoElements&&i(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&gt(d.target)&&~Wn.indexOf(d.attributeName))if(d.attributeName==="class"&&Pi(d.target)){var h=he(He(d.target)),v=h.prefix,x=h.iconName;d.target.setAttribute(Ye,v||c),x&&d.target.setAttribute(Ue,x)}else ji(d.target)&&n(d.target)})}}),M&&ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ti(){ce&&ce.disconnect()}function _i(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),a}function Li(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=he(He(e));return n.prefix||(n.prefix=R()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ii(n.prefix,e.innerText)||Xe(n.prefix,ga(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Mi(e){var t=K(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function $i(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Li(e),r=a.iconName,n=a.prefix,o=a.rest,i=Mi(e),s=Te("parseNodeAttributes",{},e),l=t.styleParser?_i(e):[];return f({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Ri=j.styles;function Ta(e){var t=m.autoReplaceSvg==="nest"?xt(e,{styleParser:!1}):xt(e);return~t.extra.classes.indexOf(ca)?D("generateLayersText",e,t):D("generateSvgReplacementMutation",e,t)}function Di(){return[].concat(O(aa),O(ra))}function St(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=S.documentElement.classList,r=function(d){return a.add("".concat(ot,"-").concat(d))},n=function(d){return a.remove("".concat(ot,"-").concat(d))},o=m.autoFetchSvg?Di():Wt.concat(Object.keys(Ri));o.includes("fa")||o.push("fa");var i=[".".concat(ca,":not([").concat(U,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(U,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=K(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Je.begin("onTree"),u=s.reduce(function(c,d){try{var h=Ta(d);h&&c.push(h)}catch(v){la||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){Ca(h,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ta(e).then(function(a){a&&Ca([a],t)})}function Wi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_e(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:_e(n||{})),e(r,f(f({},a),{},{mask:n}))}}var Yi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.classes,h=d===void 0?[]:d,v=a.attributes,x=v===void 0?{}:v,y=a.styles,w=y===void 0?{}:y;if(t){var A=t.prefix,k=t.iconName,I=t.icon;return pe(f({type:"icon"},t),function(){return H("beforeDOMElementCreation",{iconDefinition:t,params:a}),Ve({icons:{main:Le(I),mask:l?Le(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:f(f({},F),n),symbol:i,maskId:c,extra:{attributes:x,styles:w,classes:h}})})}},Ui={mixout:function(){return{icon:Wi(Yi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=St,a.nodeCallback=zi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?S:r,o=a.callback,i=o===void 0?function(){}:o;return St(n,i)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(d,h){Promise.all([Me(n,o),l.iconName?Me(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=de(v,2),y=x[0],w=x[1];d([a,Ve({icons:{main:y,mask:w},prefix:o,iconName:n,transform:i,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.transform,s=a.styles,l=me(s);l.length>0&&(n.style=l);var u;return Ge(i)&&(u=D("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:n}}}},Hi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return pe({type:"layer"},function(){H("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(O(o)).join(" ")},children:i}]})}}}},Gi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,u=l===void 0?{}:l;return pe({type:"counter",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:r}),Ai({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(O(o))}})})}}}},Bi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?F:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return pe({type:"text",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:r}),ht({content:a,transform:f(f({},F),o),extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,o=r.extra,i=null,s=null;if(Dt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([a,ht({content:a.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},_a=new RegExp('"',"ug"),wt=[1105920,1112319],At=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Tr),Tn),Yr),De=Object.keys(At).reduce(function(e,t){return e[t.toLowerCase()]=At[t],e},{}),Xi=Object.keys(De).reduce(function(e,t){var a=De[t];return e[t]=a[900]||O(Object.entries(a))[0][1],e},{});function Vi(e){var t=e.replace(_a,"");return ga(O(t)[0]||"")}function Ji(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(_a,""),n=r.codePointAt(0),o=n>=wt[0]&&n<=wt[1],i=r.length===2?r[0]===r[1]:!1;return o||i||t}function Ki(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(De[a]||{})[n]||Xi[a]}function kt(e,t){var a="".concat(_n).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var o=K(e.children),i=o.filter(function(ge){return ge.getAttribute(Oe)===t})[0],s=$.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(Dn),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),v=Ki(l,c),x=Vi(h),y=u[0].startsWith("FontAwesome"),w=Ji(s),A=Xe(v,x),k=A;if(y){var I=oi(x);I.iconName&&I.prefix&&(A=I.iconName,v=I.prefix)}if(A&&!w&&(!i||i.getAttribute(Ye)!==v||i.getAttribute(Ue)!==k)){e.setAttribute(a,k),i&&e.removeChild(i);var C=$i(),b=C.extra;b.attributes[Oe]=t,Me(A,v).then(function(ge){var Wa=Ve(f(f({},C),{},{icons:{main:ge,mask:Pa()},prefix:v,iconName:k,extra:b,watchable:!0})),be=S.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=Wa.map(function(Ya){return re(Ya)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function qi(e){return Promise.all([kt(e,"::before"),kt(e,"::after")])}function Qi(e){return e.parentNode!==document.head&&!~Mn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Zi=function(t){return!!t&&sa.some(function(a){return t.includes(a)})},eo=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],o=function(){var v=s[i];r=r.flatMap(function(x){return x.split(v).map(function(y){return y.replace(/,\s*$/,"").trim()})})},i=0,s=n;i<s.length;i++)o();r=r.flatMap(function(h){return h.includes("(")?h:h.split(",").map(function(v){return v.trim()})});var l=oe(r),u;try{for(l.s();!(u=l.n()).done;){var c=u.value;if(Zi(c)){var d=sa.reduce(function(h,v){return h.replace(v,"")},c);d!==""&&d!=="*"&&a.add(d)}}}catch(h){l.e(h)}finally{l.f()}return a};function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=oe(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=oe(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=eo(u.selectorText),d=oe(c),h;try{for(d.s();!(h=d.n()).done;){var v=h.value;r.add(v)}}catch(y){d.e(y)}finally{d.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){n.e(y)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(y,w){var A=K(a).filter(Qi).map(qi),k=Je.begin("searchPseudoElements");Na(),Promise.all(A).then(function(){k(),Re(),y()}).catch(function(){k(),Re(),w()})})}}var to={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=It,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?S:r;m.searchPseudoElements&&It(n)}}},Et=!1,ao={mixout:function(){return{dom:{unwatch:function(){Na(),Et=!0}}}},hooks:function(){return{bootstrap:function(){yt(Te("mutationObserverCallbacks",{}))},noAuto:function(){Ti()},watch:function(a){var r=a.observeMutationsRoot;Et?Re():yt(Te("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},ro={mixout:function(){return{parse:{transform:function(a){return Pt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Pt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},Ie={x:0,y:0,width:"100%",height:"100%"};function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function no(e){return e.tag==="g"?e.children:[e]}var io={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),o=n?he(n.split(" ").map(function(i){return i.trim()})):Pa();return o.prefix||(o.prefix=R()),a.mask=o,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,u=o.width,c=o.icon,d=i.width,h=i.icon,v=Kn({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:f(f({},Ie),{},{fill:"white"})},y=c.children?{children:c.children.map(jt)}:{},w={tag:"g",attributes:f({},v.inner),children:[jt(f({tag:c.tag,attributes:f(f({},c.attributes),v.path)},y))]},A={tag:"g",attributes:f({},v.outer),children:[w]},k="mask-".concat(s||lt()),I="clip-".concat(s||lt()),C={tag:"mask",attributes:f(f({},Ie),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,A]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:no(h)},C]};return r.push(b,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},Ie)}),{children:r,attributes:n}}}},oo={provides:function(t){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},so={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return a.symbol=o,a}}}},lo=[Zn,Ui,Hi,Gi,Bi,to,ao,ro,io,oo,so];hi(lo,{mixoutsTo:P});P.noAuto;var fo=P.config;P.library;P.dom;var La=P.parse;P.findIconDefinition;P.toHtml;var uo=P.icon;P.layer;P.text;P.counter;function co(e){return e=e-0,e===e}function Ma(e){return co(e)?e:(e=e.replaceAll(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function mo(e){return e.charAt(0).toUpperCase()+e.slice(1)}var B=new Map,vo=1e3;function ho(e){if(B.has(e))return B.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),o=n===-1?r:n,i=e.slice(a,o).trim();if(i){const s=i.indexOf(":");if(s>0){const l=i.slice(0,s).trim(),u=i.slice(s+1).trim();if(l&&u){const c=Ma(l);t[c.startsWith("webkit")?mo(c):c]=u}}}a=o+1}if(B.size===vo){const n=B.keys().next().value;n&&B.delete(n)}return B.set(e,t),t}function $a(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(u=>$a(e,u)),n=t.attributes||{},o={};for(const[u,c]of Object.entries(n))switch(!0){case u==="class":{o.className=c,delete n.class;break}case u==="style":{o.style=ho(String(c));break}case u.startsWith("aria-"):case u.startsWith("data-"):{o[u.toLowerCase()]=c;break}default:o[Ma(u)]=c}const{style:i,"aria-label":s,...l}=a;return i&&(o.style=o.style?{...o.style,...i}:i),s&&(o["aria-label"]=s,o["aria-hidden"]="false"),e(t.tag,{...l,...o},...r)}var Ot=(e,t)=>{const a=W.useId();return e||(t?a:void 0)},po=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},go="searchPseudoElementsFullScan"in fo?"7.0.0":"6.0.0",bo=Number.parseInt(go)>=7,N={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},yo={left:"fa-pull-left",right:"fa-pull-right"},xo={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},So={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},T={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function wo(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:o,spin:i,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:c,inverse:d,border:h,flip:v,size:x,rotation:y,pull:w,swapOpacity:A,rotateBy:k,widthAuto:I,className:C}=e,b=[];return C&&b.push(...C.split(" ")),t&&b.push(N.beat),a&&b.push(N.fade),r&&b.push(N.beatFade),n&&b.push(N.bounce),o&&b.push(N.shake),i&&b.push(N.spin),l&&b.push(N.spinReverse),s&&b.push(N.spinPulse),u&&b.push(N.pulse),c&&b.push(T.fixedWidth),d&&b.push(T.inverse),h&&b.push(T.border),v===!0&&b.push(T.flip),(v==="horizontal"||v==="both")&&b.push(T.flipHorizontal),(v==="vertical"||v==="both")&&b.push(T.flipVertical),x!=null&&b.push(So[x]),y!=null&&y!==0&&b.push(xo[y]),w!=null&&b.push(yo[w]),A&&b.push(T.swapOpacity),bo&&(k&&b.push(T.rotateBy),I&&b.push(T.widthAuto)),b}var Ao=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Ft(e){if(e)return Ao(e)?e:La.icon(e)}function ko(e){return Object.keys(e)}var Ct=new po("FontAwesomeIcon"),Ra={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Io=new Set(Object.keys(Ra)),Da=Nt.forwardRef((e,t)=>{const a={...Ra,...e},{icon:r,mask:n,symbol:o,title:i,titleId:s,maskId:l,transform:u}=a,c=Ot(l,!!n),d=Ot(s,!!i),h=Ft(r);if(!h)return Ct.error("Icon lookup is undefined",r),null;const v=wo(a),x=typeof u=="string"?La.transform(u):u,y=Ft(n),w=uo(h,{...v.length>0&&{classes:v},...x&&{transform:x},...y&&{mask:y},symbol:o,title:i,titleId:d,maskId:c});if(!w)return Ct.error("Could not find icon",h),null;const{abstract:A}=w,k={ref:t};for(const I of ko(a))Io.has(I)||(k[I]=a[I]);return Eo(A[0],k)});Da.displayName="FontAwesomeIcon";var Eo=$a.bind(null,Nt.createElement);const za=W.memo(()=>p.jsxs("footer",{className:"w-[95%] m-auto border rounded-2xl p-[2rem] flex flex-row items-center justify-around text-[250%]",children:[p.jsx(Y,{to:"https://github.com/artmigalev",children:p.jsx(Da,{icon:ar})}),p.jsx("span",{children:"2025"}),p.jsx(Y,{to:"https://rs.school/courses/reactjs",children:p.jsx("img",{className:"w-[50px]",src:"/rss-logo.svg",alt:""})})]}));za.displayName="Footer";const Po=({children:e})=>p.jsx("header",{className:"p-[2rem] border rounded-2xl w-[95%] m-auto text-[250%]",children:e}),jo=["REST Client","History","Variables"],Oo=()=>p.jsx("ul",{className:" flex flex-row justify-between w-[90%] p-4 text-4xl border absolute bottom-5 ",children:jo.map(e=>p.jsx("li",{children:p.jsx(Ua,{to:`${e.toLowerCase()}`,children:e})},e))}),Fo=({username:e,isLogin:t})=>p.jsxs(p.Fragment,{children:[p.jsx("h1",{className:"text-center w-[100%]",children:"Welcome!"}),p.jsx("nav",{className:"flex flex-row  justify-center w-[100%] gap-[2rem] p-[1rem]",children:t?p.jsxs(p.Fragment,{children:[e,p.jsx(Oo,{})]}):p.jsxs(p.Fragment,{children:[p.jsx(Y,{to:"/login",children:"Sing In"}),p.jsx(Y,{to:"/register",children:"Sing Up"})]})})]});Ja.withTypes();const Co=Ka.withTypes(),No=({isLogin:e})=>{const[t]=_t("user"),a=Co(qa)||t.username,r=Ha(),n=r.pathname==="/login"||r.pathname==="/register";return p.jsx("main",{className:" text-[2rem] relative w-[95%] border m-auto  h-[100%] flex-1 flex flex-col justify-center  border-t-0 border-b-0",children:n?p.jsx(Va,{}):p.jsx(Fo,{username:a,isLogin:e})})},To=({isLogin:e})=>p.jsxs("nav",{className:" flex  justify-around items-center  w-[100%]",children:[p.jsx(Y,{to:"/",children:p.jsx("img",{src:"/postman2csharp.png",alt:"logo",className:"max-w-[50px]"})}),p.jsxs("select",{className:" bg-black cursor-pointer",name:"language",id:"pet-select",children:[p.jsx("option",{className:"cursor-pointer",value:"english",children:"English"}),p.jsx("option",{className:"cursor-pointer",value:"russian",children:"Russian"})]}),e?p.jsx(Qa,{}):p.jsxs(p.Fragment,{children:[p.jsx(Y,{to:"login",children:"Sing in"}),p.jsx(Y,{to:"register",children:"Sing up"})]})]}),zo=Ga(function(){const[t]=_t("isLogin",!1),[a,r]=W.useState(!1);return W.useEffect(()=>{r(!0)},[]),a?p.jsxs(p.Fragment,{children:[p.jsx(Po,{children:p.jsx(To,{isLogin:t})}),p.jsx(No,{isLogin:t,children:p.jsx(Ba,{})}),p.jsx(za,{})]}):p.jsx(Xa,{})});export{zo as default};
