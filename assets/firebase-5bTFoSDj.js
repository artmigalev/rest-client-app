const go=()=>{};var cr={};/**
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
 */const Jr=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},mo=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],l=i[n++],w=i[n++],I=((a&7)<<18|(c&63)<<12|(l&63)<<6|w&63)-65536;e[s++]=String.fromCharCode(55296+(I>>10)),e[s++]=String.fromCharCode(56320+(I&1023))}else{const c=i[n++],l=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],l=a+1<i.length,w=l?i[a+1]:0,I=a+2<i.length,E=I?i[a+2]:0,C=c>>2,S=(c&3)<<4|w>>4;let A=(w&15)<<2|E>>6,x=E&63;I||(x=64,l||(A=64)),s.push(n[C],n[S],n[A],n[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Jr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):mo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],w=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const S=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||w==null||E==null||S==null)throw new yo;const A=c<<2|w>>4;if(s.push(A),E!==64){const x=w<<4&240|E>>2;if(s.push(x),S!==64){const U=E<<6&192|S;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class yo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _o=function(i){const e=Jr(i);return Xr.encodeByteArray(e,!0)},Xt=function(i){return _o(i).replace(/\./g,"")},Yr=function(i){try{return Xr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wo=()=>vo().__FIREBASE_DEFAULTS__,Io=()=>{if(typeof process>"u"||typeof cr>"u")return;const i=cr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Eo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Yr(i[1]);return e&&JSON.parse(e)},Qn=()=>{try{return go()||wo()||Io()||Eo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},To=i=>Qn()?.emulatorHosts?.[i],Ao=i=>{const e=To(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qr=()=>Qn()?.config,So=i=>Qn()?.[`_${i}`];/**
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
 */class bo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function on(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Co(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Po(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Xt(JSON.stringify(n)),Xt(JSON.stringify(l)),""].join(".")}const _t={};function ko(){const i={prod:[],emulator:[]};for(const e of Object.keys(_t))_t[e]?i.emulator.push(e):i.prod.push(e);return i}function Ro(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let lr=!1;function No(i,e){if(typeof window>"u"||typeof document>"u"||!on(window.location.host)||_t[i]===e||_t[i]||lr)return;_t[i]=e;function n(A){return`__firebase__banner__${A}`}const s="__firebase__banner",c=ko().prod.length>0;function l(){const A=document.getElementById(s);A&&A.remove()}function w(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function I(A,x){A.setAttribute("width","24"),A.setAttribute("id",x),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function E(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{lr=!0,l()},A}function C(A,x){A.setAttribute("id",x),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=Ro(s),x=n("text"),U=document.getElementById(x)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),K=n("preprendIcon"),J=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const Y=A.element;w(Y),C(M,V);const pe=E();I(J,K),Y.append(J,U,M,pe),document.body.appendChild(Y)}c?(U.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Do(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Oo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uo(){const i=X();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function xo(){try{return typeof indexedDB=="object"}catch{return!1}}function Fo(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Vo="FirebaseError";class de extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Vo,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pt.prototype.create)}}class Pt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],l=c?jo(c,s):"Error",w=`${this.serviceName}: ${l} (${a}).`;return new de(a,w,s)}}function jo(i,e){return i.replace(Bo,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Bo=/\{\$([^}]+)}/g;function Tt(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],l=e[a];if(ur(c)&&ur(l)){if(!Tt(c,l))return!1}else if(c!==l)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function ur(i){return i!==null&&typeof i=="object"}/**
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
 */function Zr(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function yt(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function Ho(i,e){const n=new $o(i,e);return n.subscribe.bind(n)}class $o{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zo(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Mn),a.error===void 0&&(a.error=Mn),a.complete===void 0&&(a.complete=Mn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zo(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Mn(){}/**
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
 */function fe(i){return i&&i._delegate?i._delegate:i}class je{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Oe="[DEFAULT]";/**
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
 */class qo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Go(e))try{this.getOrInitializeService({instanceIdentifier:Oe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oe){return this.instances.has(e)}getOptions(e=Oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,l]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(c);s===w&&l.resolve(a)}return a}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Wo(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Oe){return this.component?this.component.multipleInstances?e:Oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wo(i){return i===Oe?void 0:i}function Go(i){return i.instantiationMode==="EAGER"}/**
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
 */class Ko{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(D||(D={}));const Jo={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Xo=D.INFO,Yo={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Qo=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=Yo[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zn{constructor(e){this.name=e,this._logLevel=Xo,this._logHandler=Qo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Zo=(i,e)=>e.some(n=>i instanceof n);let dr,fr;function ea(){return dr||(dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ta(){return fr||(fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const es=new WeakMap,zn=new WeakMap,ts=new WeakMap,Un=new WeakMap,ei=new WeakMap;function na(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(Te(i.result)),a()},l=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&es.set(n,i)}).catch(()=>{}),ei.set(e,i),e}function ia(i){if(zn.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),a()},l=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});zn.set(i,e)}let qn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return zn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ts.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ra(i){qn=i(qn)}function sa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(xn(this),e,...n);return ts.set(s,e.sort?e.sort():[e]),Te(s)}:ta().includes(i)?function(...e){return i.apply(xn(this),e),Te(es.get(this))}:function(...e){return Te(i.apply(xn(this),e))}}function oa(i){return typeof i=="function"?sa(i):(i instanceof IDBTransaction&&ia(i),Zo(i,ea())?new Proxy(i,qn):i)}function Te(i){if(i instanceof IDBRequest)return na(i);if(Un.has(i))return Un.get(i);const e=oa(i);return e!==i&&(Un.set(i,e),ei.set(e,i)),e}const xn=i=>ei.get(i);function aa(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const l=indexedDB.open(i,e),w=Te(l);return s&&l.addEventListener("upgradeneeded",I=>{s(Te(l.result),I.oldVersion,I.newVersion,Te(l.transaction),I)}),n&&l.addEventListener("blocked",I=>n(I.oldVersion,I.newVersion,I)),w.then(I=>{c&&I.addEventListener("close",()=>c()),a&&I.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),w}const ha=["get","getKey","getAll","getAllKeys","count"],ca=["put","add","delete","clear"],Fn=new Map;function pr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Fn.get(e))return Fn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=ca.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||ha.includes(n)))return;const c=async function(l,...w){const I=this.transaction(l,a?"readwrite":"readonly");let E=I.store;return s&&(E=E.index(w.shift())),(await Promise.all([E[n](...w),a&&I.done]))[0]};return Fn.set(e,c),c}ra(i=>({...i,get:(e,n,s)=>pr(e,n)||i.get(e,n,s),has:(e,n)=>!!pr(e,n)||i.has(e,n)}));/**
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
 */class la{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ua(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ua(i){return i.getComponent()?.type==="VERSION"}const Wn="@firebase/app",gr="0.14.4";/**
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
 */const ue=new Zn("@firebase/app"),da="@firebase/app-compat",fa="@firebase/analytics-compat",pa="@firebase/analytics",ga="@firebase/app-check-compat",ma="@firebase/app-check",ya="@firebase/auth",_a="@firebase/auth-compat",va="@firebase/database",wa="@firebase/data-connect",Ia="@firebase/database-compat",Ea="@firebase/functions",Ta="@firebase/functions-compat",Aa="@firebase/installations",Sa="@firebase/installations-compat",ba="@firebase/messaging",Ca="@firebase/messaging-compat",Pa="@firebase/performance",ka="@firebase/performance-compat",Ra="@firebase/remote-config",Na="@firebase/remote-config-compat",Da="@firebase/storage",Oa="@firebase/storage-compat",La="@firebase/firestore",Ma="@firebase/ai",Ua="@firebase/firestore-compat",xa="firebase",Fa="12.4.0";/**
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
 */const Gn="[DEFAULT]",Va={[Wn]:"fire-core",[da]:"fire-core-compat",[pa]:"fire-analytics",[fa]:"fire-analytics-compat",[ma]:"fire-app-check",[ga]:"fire-app-check-compat",[ya]:"fire-auth",[_a]:"fire-auth-compat",[va]:"fire-rtdb",[wa]:"fire-data-connect",[Ia]:"fire-rtdb-compat",[Ea]:"fire-fn",[Ta]:"fire-fn-compat",[Aa]:"fire-iid",[Sa]:"fire-iid-compat",[ba]:"fire-fcm",[Ca]:"fire-fcm-compat",[Pa]:"fire-perf",[ka]:"fire-perf-compat",[Ra]:"fire-rc",[Na]:"fire-rc-compat",[Da]:"fire-gcs",[Oa]:"fire-gcs-compat",[La]:"fire-fst",[Ua]:"fire-fst-compat",[Ma]:"fire-vertex","fire-js":"fire-js",[xa]:"fire-js-all"};/**
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
 */const Yt=new Map,ja=new Map,Kn=new Map;function mr(i,e){try{i.container.addComponent(e)}catch(n){ue.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Xe(i){const e=i.name;if(Kn.has(e))return ue.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,i);for(const n of Yt.values())mr(n,i);for(const n of ja.values())mr(n,i);return!0}function ns(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function ae(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Ba={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new Pt("app","Firebase",Ba);/**
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
 */class Ha{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
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
 */const an=Fa;function is(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:Gn,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Ae.create("bad-app-name",{appName:String(a)});if(n||(n=Qr()),!n)throw Ae.create("no-options");const c=Yt.get(a);if(c){if(Tt(n,c.options)&&Tt(s,c.config))return c;throw Ae.create("duplicate-app",{appName:a})}const l=new Ko(a);for(const I of Kn.values())l.addComponent(I);const w=new Ha(n,s,l);return Yt.set(a,w),w}function $a(i=Gn){const e=Yt.get(i);if(!e&&i===Gn&&Qr())return is();if(!e)throw Ae.create("no-app",{appName:i});return e}function Se(i,e,n){let s=Va[i]??i;n&&(s+=`-${n}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const l=[`Unable to register library "${s}" with version "${e}":`];a&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ue.warn(l.join(" "));return}Xe(new je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const za="firebase-heartbeat-database",qa=1,At="firebase-heartbeat-store";let Vn=null;function rs(){return Vn||(Vn=aa(za,qa,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(At)}catch(n){console.warn(n)}}}}).catch(i=>{throw Ae.create("idb-open",{originalErrorMessage:i.message})})),Vn}async function Wa(i){try{const n=(await rs()).transaction(At),s=await n.objectStore(At).get(ss(i));return await n.done,s}catch(e){if(e instanceof de)ue.warn(e.message);else{const n=Ae.create("idb-get",{originalErrorMessage:e?.message});ue.warn(n.message)}}}async function yr(i,e){try{const s=(await rs()).transaction(At,"readwrite");await s.objectStore(At).put(e,ss(i)),await s.done}catch(n){if(n instanceof de)ue.warn(n.message);else{const s=Ae.create("idb-set",{originalErrorMessage:n?.message});ue.warn(s.message)}}}function ss(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Ga=1024,Ka=30;class Ja{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ya(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_r();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Ka){const a=Qa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ue.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_r(),{heartbeatsToSend:n,unsentEntries:s}=Xa(this._heartbeatsCache.heartbeats),a=Xt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return ue.warn(e),""}}}function _r(){return new Date().toISOString().substring(0,10)}function Xa(i,e=Ga){const n=[];let s=i.slice();for(const a of i){const c=n.find(l=>l.agent===a.agent);if(c){if(c.dates.push(a.date),vr(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),vr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ya{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xo()?Fo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wa(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vr(i){return Xt(JSON.stringify({version:2,heartbeats:i})).length}function Qa(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function Za(i){Xe(new je("platform-logger",e=>new la(e),"PRIVATE")),Xe(new je("heartbeat",e=>new Ja(e),"PRIVATE")),Se(Wn,gr,i),Se(Wn,gr,"esm2020"),Se("fire-js","")}Za("");/**
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
 */function eh(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function os(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const th=eh,nh=os,as=new Pt("auth","Firebase",os());/**
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
 */const Qt=new Zn("@firebase/auth");function ih(i,...e){Qt.logLevel<=D.WARN&&Qt.warn(`Auth (${an}): ${i}`,...e)}function Kt(i,...e){Qt.logLevel<=D.ERROR&&Qt.error(`Auth (${an}): ${i}`,...e)}/**
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
 */function Ye(i,...e){throw ni(i,...e)}function ti(i,...e){return ni(i,...e)}function hs(i,e,n){const s={...nh(),[e]:n};return new Pt("auth","Firebase",s).create(e,{appName:i.name})}function xe(i){return hs(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ni(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return as.create(i,...e)}function N(i,e,...n){if(!i)throw ni(e,...n)}function le(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Kt(e),new Error(e)}function Zt(i,e){i||le(e)}function rh(){return wr()==="http:"||wr()==="https:"}function wr(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function sh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rh()||Lo()||"connection"in navigator)?navigator.onLine:!0}function oh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class kt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Do()||Mo()}get(){return sh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ah(i,e){Zt(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cs{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ch=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lh=new kt(3e4,6e4);function He(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ce(i,e,n,s,a={}){return ls(i,a,async()=>{let c={},l={};s&&(e==="GET"?l=s:c={body:JSON.stringify(s)});const w=Zr({key:i.config.apiKey,...l}).slice(1),I=await i._getAdditionalHeaders();I["Content-Type"]="application/json",i.languageCode&&(I["X-Firebase-Locale"]=i.languageCode);const E={method:e,headers:I,...c};return Oo()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&on(i.emulatorConfig.host)&&(E.credentials="include"),cs.fetch()(await us(i,i.config.apiHost,n,w),E)})}async function ls(i,e,n){i._canInitEmulator=!1;const s={...hh,...e};try{const a=new dh(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw qt(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const w=c.ok?l.errorMessage:l.error.message,[I,E]=w.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw qt(i,"credential-already-in-use",l);if(I==="EMAIL_EXISTS")throw qt(i,"email-already-in-use",l);if(I==="USER_DISABLED")throw qt(i,"user-disabled",l);const C=s[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw hs(i,C,E);Ye(i,C)}}catch(a){if(a instanceof de)throw a;Ye(i,"network-request-failed",{message:String(a)})}}async function hn(i,e,n,s,a={}){const c=await Ce(i,e,n,s,a);return"mfaPendingCredential"in c&&Ye(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function us(i,e,n,s){const a=`${e}${n}?${s}`,c=i,l=c.config.emulator?ah(i.config,a):`${i.config.apiScheme}://${a}`;return ch.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}function uh(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ti(this.auth,"network-request-failed")),lh.get())})}}function qt(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=ti(i,e,s);return a.customData._tokenResponse=n,a}function Ir(i){return i!==void 0&&i.enterprise!==void 0}class fh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ph(i,e){return Ce(i,"GET","/v2/recaptchaConfig",He(i,e))}/**
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
 */async function gh(i,e){return Ce(i,"POST","/v1/accounts:delete",e)}async function en(i,e){return Ce(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function vt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mh(i,e=!1){const n=fe(i),s=await n.getIdToken(e),a=ds(s);N(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,l=c?.sign_in_provider;return{claims:a,token:s,authTime:vt(jn(a.auth_time)),issuedAtTime:vt(jn(a.iat)),expirationTime:vt(jn(a.exp)),signInProvider:l||null,signInSecondFactor:c?.sign_in_second_factor||null}}function jn(i){return Number(i)*1e3}function ds(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const a=Yr(n);return a?JSON.parse(a):(Kt("Failed to decode base64 JWT payload"),null)}catch(a){return Kt("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Er(i){const e=ds(i);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof de&&yh(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function yh({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class _h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vt(this.lastLoginAt),this.creationTime=vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nn(i){const e=i.auth,n=await i.getIdToken(),s=await tn(i,en(e,{idToken:n}));N(s?.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const c=a.providerUserInfo?.length?fs(a.providerUserInfo):[],l=wh(i.providerData,c),w=i.isAnonymous,I=!(i.email&&a.passwordHash)&&!l?.length,E=w?I:!1,C={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Jn(a.createdAt,a.lastLoginAt),isAnonymous:E};Object.assign(i,C)}async function vh(i){const e=fe(i);await nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wh(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function fs(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ih(i,e){const n=await ls(i,{},async()=>{const s=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,l=await us(i,a,"/v1/token",`key=${c}`),w=await i._getAdditionalHeaders();w["Content-Type"]="application/x-www-form-urlencoded";const I={method:"POST",headers:w,body:s};return i.emulatorConfig&&on(i.emulatorConfig.host)&&(I.credentials="include"),cs.fetch()(l,I)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Eh(i,e){return Ce(i,"POST","/v2/accounts:revokeToken",He(i,e))}/**
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
 */class Ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Er(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=Er(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await Ih(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,l=new Ge;return s&&(N(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),a&&(N(typeof a=="string","internal-error",{appName:e}),l.accessToken=a),c&&(N(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ge,this.toJSON())}_performRefresh(){return le("not implemented")}}/**
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
 */function Ee(i,e){N(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class te{constructor({uid:e,auth:n,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new _h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Jn(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await tn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mh(this,e)}reload(){return vh(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new te({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await nn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ae(this.auth.app))return Promise.reject(xe(this.auth));const e=await this.getIdToken();return await tn(this,gh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,a=n.email??void 0,c=n.phoneNumber??void 0,l=n.photoURL??void 0,w=n.tenantId??void 0,I=n._redirectEventId??void 0,E=n.createdAt??void 0,C=n.lastLoginAt??void 0,{uid:S,emailVerified:A,isAnonymous:x,providerData:U,stsTokenManager:V}=n;N(S&&V,e,"internal-error");const M=Ge.fromJSON(this.name,V);N(typeof S=="string",e,"internal-error"),Ee(s,e.name),Ee(a,e.name),N(typeof A=="boolean",e,"internal-error"),N(typeof x=="boolean",e,"internal-error"),Ee(c,e.name),Ee(l,e.name),Ee(w,e.name),Ee(I,e.name),Ee(E,e.name),Ee(C,e.name);const K=new te({uid:S,auth:e,email:a,emailVerified:A,displayName:s,isAnonymous:x,photoURL:l,phoneNumber:c,tenantId:w,stsTokenManager:M,createdAt:E,lastLoginAt:C});return U&&Array.isArray(U)&&(K.providerData=U.map(J=>({...J}))),I&&(K._redirectEventId=I),K}static async _fromIdTokenResponse(e,n,s=!1){const a=new Ge;a.updateFromServerResponse(n);const c=new te({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await nn(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];N(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?fs(a.providerUserInfo):[],l=!(a.email&&a.passwordHash)&&!c?.length,w=new Ge;w.updateFromIdToken(s);const I=new te({uid:a.localId,auth:e,stsTokenManager:w,isAnonymous:l}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Jn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(I,E),I}}/**
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
 */const Tr=new Map;function Me(i){Zt(i instanceof Function,"Expected a class definition");let e=Tr.get(i);return e?(Zt(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Tr.set(i,e),e)}/**
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
 */class ps{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ps.type="NONE";const Ar=ps;/**
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
 */function Bn(i,e,n){return`firebase:${i}:${e}:${n}`}class Ke{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Bn(this.userKey,a.apiKey,c),this.fullPersistenceKey=Bn("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await en(this.auth,{idToken:e}).catch(()=>{});return n?te._fromGetAccountInfoResponse(this.auth,n,e):null}return te._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ke(Me(Ar),e,s);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||Me(Ar);const l=Bn(s,e.config.apiKey,e.name);let w=null;for(const E of n)try{const C=await E._get(l);if(C){let S;if(typeof C=="string"){const A=await en(e,{idToken:C}).catch(()=>{});if(!A)break;S=await te._fromGetAccountInfoResponse(e,A,C)}else S=te._fromJSON(e,C);E!==c&&(w=S),c=E;break}}catch{}const I=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!I.length?new Ke(c,e,s):(c=I[0],w&&await c._set(l,w.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new Ke(c,e,s))}}/**
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
 */function Sr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Th(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ys(e))return"Blackberry";if(_s(e))return"Webos";if(Ah(e))return"Safari";if((e.includes("chrome/")||Sh(e))&&!e.includes("edge/"))return"Chrome";if(ms(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if(s?.length===2)return s[1]}return"Other"}function Th(i=X()){return/firefox\//i.test(i)}function Ah(i=X()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sh(i=X()){return/crios\//i.test(i)}function gs(i=X()){return/iemobile/i.test(i)}function ms(i=X()){return/android/i.test(i)}function ys(i=X()){return/blackberry/i.test(i)}function _s(i=X()){return/webos/i.test(i)}function bh(i=X()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Ch(){return Uo()&&document.documentMode===10}function Ph(i=X()){return bh(i)||ms(i)||_s(i)||ys(i)||/windows phone/i.test(i)||gs(i)}/**
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
 */function vs(i,e=[]){let n;switch(i){case"Browser":n=Sr(X());break;case"Worker":n=`${Sr(X())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${an}/${s}`}/**
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
 */class kh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((l,w)=>{try{const I=e(c);l(I)}catch(I){w(I)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Rh(i,e={}){return Ce(i,"GET","/v2/passwordPolicy",He(i,e))}/**
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
 */const Nh=6;class Dh{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Nh,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Oh{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new br(this),this.idTokenSubscription=new br(this),this.beforeStateQueue=new kh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=as,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Me(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ke.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await en(this,{idToken:e}),s=await te._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ae(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,l=s?._redirectEventId,w=await this.tryRedirectSignIn(e);(!c||c===l)&&w?.user&&(s=w.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ae(this.app))return Promise.reject(xe(this));const n=e?fe(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ae(this.app)?Promise.reject(xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ae(this.app)?Promise.reject(xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rh(this),n=new Dh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Eh(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Me(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Ke.create(this,[Me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(w,this,"internal-error"),w.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const I=e.addObserver(n,s,a);return()=>{l=!0,I()}}else{const I=e.addObserver(n);return()=>{l=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ae(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ih(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Rt(i){return fe(i)}class br{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ho(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ii={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lh(i){ii=i}function Mh(i){return ii.loadJS(i)}function Uh(){return ii.recaptchaEnterpriseScript}class xh{constructor(){this.enterprise=new Fh}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Fh{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Vh="recaptcha-enterprise",ws="NO_RECAPTCHA";class jh{constructor(e){this.type=Vh,this.auth=Rt(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(l,w)=>{ph(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(I=>{if(I.recaptchaKey===void 0)w(new Error("recaptcha Enterprise site key undefined"));else{const E=new fh(I);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,l(E.siteKey)}}).catch(I=>{w(I)})})}function a(c,l,w){const I=window.grecaptcha;Ir(I)?I.enterprise.ready(()=>{I.enterprise.execute(c,{action:e}).then(E=>{l(E)}).catch(()=>{l(ws)})}):w(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xh().execute("siteKey",{action:"verify"}):new Promise((c,l)=>{s(this.auth).then(w=>{if(!n&&Ir(window.grecaptcha))a(w,c,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let I=Uh();I.length!==0&&(I+=w),Mh(I).then(()=>{a(w,c,l)}).catch(E=>{l(E)})}}).catch(w=>{l(w)})})}}async function Cr(i,e,n,s=!1,a=!1){const c=new jh(i);let l;if(a)l=ws;else try{l=await c.verify(n)}catch{l=await c.verify(n,!0)}const w={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in w){const I=w.phoneEnrollmentInfo.phoneNumber,E=w.phoneEnrollmentInfo.recaptchaToken;Object.assign(w,{phoneEnrollmentInfo:{phoneNumber:I,recaptchaToken:E,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in w){const I=w.phoneSignInInfo.recaptchaToken;Object.assign(w,{phoneSignInInfo:{recaptchaToken:I,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return w}return s?Object.assign(w,{captchaResp:l}):Object.assign(w,{captchaResponse:l}),Object.assign(w,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(w,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),w}async function Xn(i,e,n,s,a){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Cr(i,e,n,n==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Cr(i,e,n,n==="getOobCode");return s(i,l)}else return Promise.reject(c)})}/**
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
 */function Bh(i,e){const n=ns(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Tt(c,e??{}))return a;Ye(a,"already-initialized")}return n.initialize({options:e})}function Hh(i,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Me);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}/**
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
 */class $h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,n){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}}async function zh(i,e){return Ce(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qh(i,e){return hn(i,"POST","/v1/accounts:signInWithPassword",He(i,e))}/**
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
 */async function Wh(i,e){return hn(i,"POST","/v1/accounts:signInWithEmailLink",He(i,e))}async function Gh(i,e){return hn(i,"POST","/v1/accounts:signInWithEmailLink",He(i,e))}/**
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
 */class St extends $h{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new St(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new St(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(e,n,"signInWithPassword",qh);case"emailLink":return Wh(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(e,s,"signUpPassword",zh);case"emailLink":return Gh(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function Kh(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jh(i){const e=mt(yt(i)).link,n=e?mt(yt(e)).deep_link_id:null,s=mt(yt(i)).deep_link_id;return(s?mt(yt(s)).link:null)||s||n||e||i}class ri{constructor(e){const n=mt(yt(e)),s=n.apiKey??null,a=n.oobCode??null,c=Kh(n.mode??null);N(s&&a&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Jh(e);try{return new ri(n)}catch{return null}}}/**
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
 */class Ze{constructor(){this.providerId=Ze.PROVIDER_ID}static credential(e,n){return St._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ri.parseLink(n);return N(s,"argument-error"),St._fromEmailAndCode(e,s.code,s.tenantId)}}Ze.PROVIDER_ID="password";Ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */async function Xh(i,e){return hn(i,"POST","/v1/accounts:signUp",He(i,e))}/**
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
 */class bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await te._fromIdTokenResponse(e,s,a),l=Pr(s);return new bt({user:c,providerId:l,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Pr(s);return new bt({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Pr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class rn extends de{constructor(e,n,s,a){super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,rn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new rn(e,n,s,a)}}function Yh(i,e,n,s){return n._getIdTokenResponse(i).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?rn._fromErrorAndOperation(i,c,e,s):c})}/**
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
 */async function Qh(i,e,n=!1){if(ae(i.app))return Promise.reject(xe(i));const s="signIn",a=await Yh(i,s,e),c=await bt._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}async function Zh(i,e){return Qh(Rt(i),e)}/**
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
 */async function Is(i){const e=Rt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Wc(i,e,n){if(ae(i.app))return Promise.reject(xe(i));const s=Rt(i),l=await Xn(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xh).catch(I=>{throw I.code==="auth/password-does-not-meet-requirements"&&Is(i),I}),w=await bt._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(w.user),w}function Gc(i,e,n){return ae(i.app)?Promise.reject(xe(i)):Zh(fe(i),Ze.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Is(i),s})}/**
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
 */async function ec(i,e){return Ce(i,"POST","/v1/accounts:update",e)}/**
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
 */async function Kc(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=fe(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await tn(s,ec(s.auth,c));s.displayName=l.displayName||null,s.photoURL=l.photoUrl||null;const w=s.providerData.find(({providerId:I})=>I==="password");w&&(w.displayName=s.displayName,w.photoURL=s.photoURL),await s._updateTokensIfNecessary(l)}/**
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
 */function tc(i,e){return fe(i).setPersistence(e)}function Jc(i,e,n,s){return fe(i).onAuthStateChanged(e,n,s)}function Xc(i){return fe(i).signOut()}const kr="__sak";/**
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
 */class Es{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kr,"1"),this.storage.removeItem(kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nc=1e3,ic=10;class Ts extends Es{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ph(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,w,I)=>{this.notifyListeners(l,I)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const l=this.storage.getItem(s);!n&&this.localCache[s]===l||this.notifyListeners(s,l)},c=this.storage.getItem(s);Ch()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,ic):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ts.type="LOCAL";const As=Ts;/**
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
 */class rc extends Es{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rc.type="SESSION";new kt(3e4,6e4);/**
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
 */new kt(2e3,1e4);/**
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
 */new kt(3e4,6e4);/**
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
 */new kt(5e3,15e3);var Rr="@firebase/auth",Nr="1.11.0";/**
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
 */class sc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oc(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ac(i){Xe(new je("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:w}=s.options;N(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const I={apiKey:l,authDomain:w,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vs(i)},E=new Oh(s,a,c,I);return Hh(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xe(new je("auth-internal",e=>{const n=Rt(e.getProvider("auth").getImmediate());return(s=>new sc(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(Rr,Nr,oc(i)),Se(Rr,Nr,"esm2020")}/**
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
 */const hc=300;So("authIdTokenMaxAge");function cc(){return document.getElementsByTagName("head")?.[0]??document}Lh({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=ti("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",cc().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ac("Browser");var lc="firebase",uc="12.4.0";/**
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
 */Se(lc,uc,"app");var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var si;(function(){var i;/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/function e(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,_){for(var d=Array(arguments.length-2),G=2;G<arguments.length;G++)d[G-2]=arguments[G];return u.prototype[p].apply(m,d)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let _=g.g[3],d;d=u+(_^f&(p^_))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(p^u&(f^p))+m[1]+3905402710&4294967295,_=u+(d<<12&4294967295|d>>>20),d=p+(f^_&(u^f))+m[2]+606105819&4294967295,p=_+(d<<17&4294967295|d>>>15),d=f+(u^p&(_^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(_^f&(p^_))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(p^u&(f^p))+m[5]+1200080426&4294967295,_=u+(d<<12&4294967295|d>>>20),d=p+(f^_&(u^f))+m[6]+2821735955&4294967295,p=_+(d<<17&4294967295|d>>>15),d=f+(u^p&(_^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(_^f&(p^_))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(p^u&(f^p))+m[9]+2336552879&4294967295,_=u+(d<<12&4294967295|d>>>20),d=p+(f^_&(u^f))+m[10]+4294925233&4294967295,p=_+(d<<17&4294967295|d>>>15),d=f+(u^p&(_^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(_^f&(p^_))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(p^u&(f^p))+m[13]+4254626195&4294967295,_=u+(d<<12&4294967295|d>>>20),d=p+(f^_&(u^f))+m[14]+2792965006&4294967295,p=_+(d<<17&4294967295|d>>>15),d=f+(u^p&(_^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^_&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^p&(u^f))+m[6]+3225465664&4294967295,_=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(_^u))+m[11]+643717713&4294967295,p=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(p^_))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^_&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^p&(u^f))+m[10]+38016083&4294967295,_=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(_^u))+m[15]+3634488961&4294967295,p=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(p^_))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^_&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^p&(u^f))+m[14]+3275163606&4294967295,_=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(_^u))+m[3]+4107603335&4294967295,p=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(p^_))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^_&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^p&(u^f))+m[2]+4243563512&4294967295,_=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(_^u))+m[7]+1735328473&4294967295,p=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(p^_))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^_)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^p)+m[8]+2272392833&4294967295,_=u+(d<<11&4294967295|d>>>21),d=p+(_^u^f)+m[11]+1839030562&4294967295,p=_+(d<<16&4294967295|d>>>16),d=f+(p^_^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^_)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^p)+m[4]+1272893353&4294967295,_=u+(d<<11&4294967295|d>>>21),d=p+(_^u^f)+m[7]+4139469664&4294967295,p=_+(d<<16&4294967295|d>>>16),d=f+(p^_^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^_)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^p)+m[0]+3936430074&4294967295,_=u+(d<<11&4294967295|d>>>21),d=p+(_^u^f)+m[3]+3572445317&4294967295,p=_+(d<<16&4294967295|d>>>16),d=f+(p^_^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^_)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^p)+m[12]+3873151461&4294967295,_=u+(d<<11&4294967295|d>>>21),d=p+(_^u^f)+m[15]+530742520&4294967295,p=_+(d<<16&4294967295|d>>>16),d=f+(p^_^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~_))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~p))+m[7]+1126891415&4294967295,_=u+(d<<10&4294967295|d>>>22),d=p+(u^(_|~f))+m[14]+2878612391&4294967295,p=_+(d<<15&4294967295|d>>>17),d=f+(_^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~_))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~p))+m[3]+2399980690&4294967295,_=u+(d<<10&4294967295|d>>>22),d=p+(u^(_|~f))+m[10]+4293915773&4294967295,p=_+(d<<15&4294967295|d>>>17),d=f+(_^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~_))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~p))+m[15]+4264355552&4294967295,_=u+(d<<10&4294967295|d>>>22),d=p+(u^(_|~f))+m[6]+2734768916&4294967295,p=_+(d<<15&4294967295|d>>>17),d=f+(_^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~_))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~p))+m[11]+3174756917&4294967295,_=u+(d<<10&4294967295|d>>>22),d=p+(u^(_|~f))+m[2]+718787259&4294967295,p=_+(d<<15&4294967295|d>>>17),d=f+(_^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+_&4294967295}s.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,_=0;for(;_<u;){if(p==0)for(;_<=f;)a(this,g,_),_+=this.blockSize;if(typeof g=="string"){for(;_<u;)if(m[p++]=g.charCodeAt(_++),p==this.blockSize){a(this,m),p=0;break}}else for(;_<u;)if(m[p++]=g[_++],p==this.blockSize){a(this,m),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function c(g,u){var f=w;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function l(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const _=g[p]|0;m&&_==u||(f[p]=_,m=!1)}this.g=f}var w={};function I(g){return-128<=g&&g<128?c(g,function(u){return new l([u|0],u<0?-1:0)}):new l([g|0],g<0?-1:0)}function E(g){if(isNaN(g)||!isFinite(g))return S;if(g<0)return M(E(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new l(u,0)}function C(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return M(C(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=E(Math.pow(u,8));let m=S;for(let _=0;_<g.length;_+=8){var p=Math.min(8,g.length-_);const d=parseInt(g.substring(_,_+p),u);p<8?(p=E(Math.pow(u,p)),m=m.j(p).add(E(d))):(m=m.j(f),m=m.add(E(d)))}return m}var S=I(0),A=I(1),x=I(16777216);i=l.prototype,i.m=function(){if(V(this))return-M(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(U(this))return"0";if(V(this))return"-"+M(this).toString(g);const u=E(Math.pow(g,6));var f=this;let m="";for(;;){const p=pe(f,u).g;f=K(f,p.j(u));let _=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,U(f))return _+m;for(;_.length<6;)_="0"+_;m=_+m}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function U(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function V(g){return g.h==-1}i.l=function(g){return g=K(this,g),V(g)?-1:U(g)?0:1};function M(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new l(f,~g.h).add(A)}i.abs=function(){return V(this)?M(this):this},i.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let _=m+(this.i(p)&65535)+(g.i(p)&65535),d=(_>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,_&=65535,d&=65535,f[p]=d<<16|_}return new l(f,f[f.length-1]&-2147483648?-1:0)};function K(g,u){return g.add(M(u))}i.j=function(g){if(U(this)||U(g))return S;if(V(this))return V(g)?M(this).j(M(g)):M(M(this).j(g));if(V(g))return M(this.j(M(g)));if(this.l(x)<0&&g.l(x)<0)return E(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const _=this.i(m)>>>16,d=this.i(m)&65535,G=g.i(p)>>>16,Pe=g.i(p)&65535;f[2*m+2*p]+=d*Pe,J(f,2*m+2*p),f[2*m+2*p+1]+=_*Pe,J(f,2*m+2*p+1),f[2*m+2*p+1]+=d*G,J(f,2*m+2*p+1),f[2*m+2*p+2]+=_*G,J(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new l(f,0)};function J(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function Y(g,u){this.g=g,this.h=u}function pe(g,u){if(U(u))throw Error("division by zero");if(U(g))return new Y(S,S);if(V(g))return u=pe(M(g),u),new Y(M(u.g),M(u.h));if(V(u))return u=pe(g,M(u)),new Y(M(u.g),u.h);if(g.g.length>30){if(V(g)||V(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,m=u;m.l(g)<=0;)f=ge(f),m=ge(m);var p=Q(f,1),_=Q(m,1);for(m=Q(m,2),f=Q(f,2);!U(m);){var d=_.add(m);d.l(g)<=0&&(p=p.add(f),_=d),m=Q(m,1),f=Q(f,1)}return u=K(g,p.j(u)),new Y(p,u)}for(p=S;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),_=E(f),d=_.j(u);V(d)||d.l(g)>0;)f-=m,_=E(f),d=_.j(u);U(_)&&(_=A),p=p.add(_),g=K(g,d)}return new Y(p,g)}i.B=function(g){return pe(this,g).h},i.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new l(f,this.h&g.h)},i.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new l(f,this.h|g.h)},i.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new l(f,this.h^g.h)};function ge(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new l(f,g.h)}function Q(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let _=0;_<m;_++)p[_]=u>0?g.i(_+f)>>>u|g.i(_+f+1)<<32-u:g.i(_+f);return new l(p,g.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=C,si=l}).apply(typeof Dr<"u"?Dr:typeof self<"u"?self:typeof window<"u"?window:{});var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wt=="object"&&Wt];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=n(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var h=0;h<t.length-1;h++){var y=t[h];if(!(y in o))break e;o=o[y]}t=t[t.length-1],h=o[t],r=r(h),r!=h&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(r){var o=[],h;for(h in r)Object.prototype.hasOwnProperty.call(r,h)&&o.push([h,r[h]]);return o}});/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function w(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function I(t,r,o){return t.call.apply(t.bind,arguments)}function E(t,r,o){return E=I,E.apply(null,arguments)}function C(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var h=o.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function S(t,r){function o(){}o.prototype=r.prototype,t.Z=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Ob=function(h,y,v){for(var T=Array(arguments.length-2),b=2;b<arguments.length;b++)T[b-2]=arguments[b];return r.prototype[y].apply(h,T)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function x(t){const r=t.length;if(r>0){const o=Array(r);for(let h=0;h<r;h++)o[h]=t[h];return o}return[]}function U(t,r){for(let h=1;h<arguments.length;h++){const y=arguments[h];var o=typeof y;if(o=o!="object"?o:y?Array.isArray(y)?"array":o:"null",o=="array"||o=="object"&&typeof y.length=="number"){o=t.length||0;const v=y.length||0;t.length=o+v;for(let T=0;T<v;T++)t[o+T]=y[T]}else t.push(y)}}class V{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function M(t){l.setTimeout(()=>{throw t},0)}function K(){var t=g;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class J{constructor(){this.h=this.g=null}add(r,o){const h=Y.get();h.set(r,o),this.h?this.h.next=h:this.g=h,this.h=h}}var Y=new V(()=>new pe,t=>t.reset());class pe{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,Q=!1,g=new J,u=()=>{const t=Promise.resolve(void 0);ge=()=>{t.then(f)}};function f(){for(var t;t=K();){try{t.h.call(t.g)}catch(o){M(o)}var r=Y;r.j(t),r.h<100&&(r.h++,t.next=r.g,r.g=t)}Q=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var _=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};l.addEventListener("test",o,r),l.removeEventListener("test",o,r)}catch{}return t})();function d(t){return/^[\s\xa0]*$/.test(t)}function G(t,r){p.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,r)}S(G,p),G.prototype.init=function(t,r){const o=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget,r||(o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement)),this.relatedTarget=r,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),Ls=0;function Ms(t,r,o,h,y){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!h,this.ha=y,this.key=++Ls,this.da=this.fa=!1}function Ot(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Lt(t,r,o){for(const h in t)r.call(o,t[h],h,t)}function Us(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function li(t){const r={};for(const o in t)r[o]=t[o];return r}const ui="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function di(t,r){let o,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(o in h)t[o]=h[o];for(let v=0;v<ui.length;v++)o=ui[v],Object.prototype.hasOwnProperty.call(h,o)&&(t[o]=h[o])}}function Mt(t){this.src=t,this.g={},this.h=0}Mt.prototype.add=function(t,r,o,h,y){const v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);const T=ln(t,r,h,y);return T>-1?(r=t[T],o||(r.fa=!1)):(r=new Ms(r,this.src,v,!!h,y),r.fa=o,t.push(r)),r};function cn(t,r){const o=r.type;if(o in t.g){var h=t.g[o],y=Array.prototype.indexOf.call(h,r,void 0),v;(v=y>=0)&&Array.prototype.splice.call(h,y,1),v&&(Ot(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function ln(t,r,o,h){for(let y=0;y<t.length;++y){const v=t[y];if(!v.da&&v.listener==r&&v.capture==!!o&&v.ha==h)return y}return-1}var un="closure_lm_"+(Math.random()*1e6|0),dn={};function fi(t,r,o,h,y){if(Array.isArray(r)){for(let v=0;v<r.length;v++)fi(t,r[v],o,h,y);return null}return o=mi(o),t&&t[Pe]?t.J(r,o,w(h)?!!h.capture:!1,y):xs(t,r,o,!1,h,y)}function xs(t,r,o,h,y,v){if(!r)throw Error("Invalid event type");const T=w(y)?!!y.capture:!!y;let b=pn(t);if(b||(t[un]=b=new Mt(t)),o=b.add(r,o,h,T,v),o.proxy)return o;if(h=Fs(),o.proxy=h,h.src=t,h.listener=o,t.addEventListener)_||(y=T),y===void 0&&(y=!1),t.addEventListener(r.toString(),h,y);else if(t.attachEvent)t.attachEvent(gi(r.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Fs(){function t(o){return r.call(t.src,t.listener,o)}const r=Vs;return t}function pi(t,r,o,h,y){if(Array.isArray(r))for(var v=0;v<r.length;v++)pi(t,r[v],o,h,y);else h=w(h)?!!h.capture:!!h,o=mi(o),t&&t[Pe]?(t=t.i,v=String(r).toString(),v in t.g&&(r=t.g[v],o=ln(r,o,h,y),o>-1&&(Ot(r[o]),Array.prototype.splice.call(r,o,1),r.length==0&&(delete t.g[v],t.h--)))):t&&(t=pn(t))&&(r=t.g[r.toString()],t=-1,r&&(t=ln(r,o,h,y)),(o=t>-1?r[t]:null)&&fn(o))}function fn(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[Pe])cn(r.i,t);else{var o=t.type,h=t.proxy;r.removeEventListener?r.removeEventListener(o,h,t.capture):r.detachEvent?r.detachEvent(gi(o),h):r.addListener&&r.removeListener&&r.removeListener(h),(o=pn(r))?(cn(o,t),o.h==0&&(o.src=null,r[un]=null)):Ot(t)}}}function gi(t){return t in dn?dn[t]:dn[t]="on"+t}function Vs(t,r){if(t.da)t=!0;else{r=new G(r,this);const o=t.listener,h=t.ha||t.src;t.fa&&fn(t),t=o.call(h,r)}return t}function pn(t){return t=t[un],t instanceof Mt?t:null}var gn="__closure_events_fn_"+(Math.random()*1e9>>>0);function mi(t){return typeof t=="function"?t:(t[gn]||(t[gn]=function(r){return t.handleEvent(r)}),t[gn])}function $(){m.call(this),this.i=new Mt(this),this.M=this,this.G=null}S($,m),$.prototype[Pe]=!0,$.prototype.removeEventListener=function(t,r,o,h){pi(this,t,r,o,h)};function z(t,r){var o,h=t.G;if(h)for(o=[];h;h=h.G)o.push(h);if(t=t.M,h=r.type||r,typeof r=="string")r=new p(r,t);else if(r instanceof p)r.target=r.target||t;else{var y=r;r=new p(h,t),di(r,y)}y=!0;let v,T;if(o)for(T=o.length-1;T>=0;T--)v=r.g=o[T],y=Ut(v,h,!0,r)&&y;if(v=r.g=t,y=Ut(v,h,!0,r)&&y,y=Ut(v,h,!1,r)&&y,o)for(T=0;T<o.length;T++)v=r.g=o[T],y=Ut(v,h,!1,r)&&y}$.prototype.N=function(){if($.Z.N.call(this),this.i){var t=this.i;for(const r in t.g){const o=t.g[r];for(let h=0;h<o.length;h++)Ot(o[h]);delete t.g[r],t.h--}}this.G=null},$.prototype.J=function(t,r,o,h){return this.i.add(String(t),r,!1,o,h)},$.prototype.K=function(t,r,o,h){return this.i.add(String(t),r,!0,o,h)};function Ut(t,r,o,h){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();let y=!0;for(let v=0;v<r.length;++v){const T=r[v];if(T&&!T.da&&T.capture==o){const b=T.listener,B=T.ha||T.src;T.fa&&cn(t.i,T),y=b.call(B,h)!==!1&&y}}return y&&!h.defaultPrevented}function js(t,r){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:l.setTimeout(t,r||0)}function yi(t){t.g=js(()=>{t.g=null,t.i&&(t.i=!1,yi(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Bs extends m{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:yi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(t){m.call(this),this.h=t,this.g={}}S(et,m);var _i=[];function vi(t){Lt(t.g,function(r,o){this.g.hasOwnProperty(o)&&fn(r)},t),t.g={}}et.prototype.N=function(){et.Z.N.call(this),vi(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mn=l.JSON.stringify,Hs=l.JSON.parse,$s=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function wi(){}function zs(){}var tt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yn(){p.call(this,"d")}S(yn,p);function _n(){p.call(this,"c")}S(_n,p);var $e={},Ii=null;function vn(){return Ii=Ii||new $}$e.Ia="serverreachability";function Ei(t){p.call(this,$e.Ia,t)}S(Ei,p);function nt(t){const r=vn();z(r,new Ei(r))}$e.STAT_EVENT="statevent";function Ti(t,r){p.call(this,$e.STAT_EVENT,t),this.stat=r}S(Ti,p);function q(t){const r=vn();z(r,new Ti(r,t))}$e.Ja="timingevent";function Ai(t,r){p.call(this,$e.Ja,t),this.size=r}S(Ai,p);function it(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},r)}function rt(){this.g=!0}rt.prototype.ua=function(){this.g=!1};function qs(t,r,o,h,y,v){t.info(function(){if(t.g)if(v){var T="",b=v.split("&");for(let O=0;O<b.length;O++){var B=b[O].split("=");if(B.length>1){const H=B[0];B=B[1];const re=H.split("_");T=re.length>=2&&re[1]=="type"?T+(H+"="+B+"&"):T+(H+"=redacted&")}}}else T=null;else T=v;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+r+`
`+o+`
`+T})}function Ws(t,r,o,h,y,v,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+r+`
`+o+`
`+v+" "+T})}function ze(t,r,o,h){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+Ks(t,o)+(h?" "+h:"")})}function Gs(t,r){t.info(function(){return"TIMEOUT: "+r})}rt.prototype.info=function(){};function Ks(t,r){if(!t.g)return r;if(!r)return null;try{const v=JSON.parse(r);if(v){for(t=0;t<v.length;t++)if(Array.isArray(v[t])){var o=v[t];if(!(o.length<2)){var h=o[1];if(Array.isArray(h)&&!(h.length<1)){var y=h[0];if(y!="noop"&&y!="stop"&&y!="close")for(let T=1;T<h.length;T++)h[T]=""}}}}return mn(v)}catch{return r}}var wn={NO_ERROR:0,TIMEOUT:8},Js={},Si;function In(){}S(In,wi),In.prototype.g=function(){return new XMLHttpRequest},Si=new In;function st(t){return encodeURIComponent(String(t))}function Xs(t){var r=1;t=t.split(":");const o=[];for(;r>0&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function me(t,r,o,h){this.j=t,this.i=r,this.l=o,this.S=h||1,this.V=new et(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bi}function bi(){this.i=null,this.g="",this.h=!1}var Ci={},En={};function Tn(t,r,o){t.M=1,t.A=Ft(ie(r)),t.u=o,t.R=!0,Pi(t,null)}function Pi(t,r){t.F=Date.now(),xt(t),t.B=ie(t.A);var o=t.B,h=t.S;Array.isArray(h)||(h=[String(h)]),Bi(o.i,"t",h),t.C=0,o=t.j.L,t.h=new bi,t.g=sr(t.j,o?r:null,!t.u),t.P>0&&(t.O=new Bs(E(t.Y,t,t.g),t.P)),r=t.V,o=t.g,h=t.ba;var y="readystatechange";Array.isArray(y)||(y&&(_i[0]=y.toString()),y=_i);for(let v=0;v<y.length;v++){const T=fi(o,y[v],h||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=t.J?li(t.J):{},t.u?(t.v||(t.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,r)):(t.v="GET",t.g.ea(t.B,t.v,null,r)),nt(),qs(t.i,t.v,t.B,t.l,t.S,t.u)}me.prototype.ba=function(t){t=t.target;const r=this.O;r&&ve(t)==3?r.j():this.Y(t)},me.prototype.Y=function(t){try{if(t==this.g)e:{const b=ve(this.g),B=this.g.ya(),O=this.g.ca();if(!(b<3)&&(b!=3||this.g&&(this.h.h||this.g.la()||Ki(this.g)))){this.K||b!=4||B==7||(B==8||O<=0?nt(3):nt(2)),An(this);var r=this.g.ca();this.X=r;var o=Ys(this);if(this.o=r==200,Ws(this.i,this.v,this.B,this.l,this.S,b,r),this.o){if(this.U&&!this.L){t:{if(this.g){var h,y=this.g;if((h=y.g?y.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(h)){var v=h;break t}}v=null}if(t=v)ze(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Sn(this,t);else{this.o=!1,this.m=3,q(12),ke(this),ot(this);break e}}if(this.R){t=!0;let H;for(;!this.K&&this.C<o.length;)if(H=Qs(this,o),H==En){b==4&&(this.m=4,q(14),t=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(H==Ci){this.m=4,q(15),ze(this.i,this.l,o,"[Invalid Chunk]"),t=!1;break}else ze(this.i,this.l,H,null),Sn(this,H);if(ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),b!=4||o.length!=0||this.h.h||(this.m=1,q(16),t=!1),this.o=this.o&&t,!t)ze(this.i,this.l,o,"[Invalid Chunked Response]"),ke(this),ot(this);else if(o.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),On(T),T.P=!0,q(11))}}else ze(this.i,this.l,o,null),Sn(this,o);b==4&&ke(this),this.o&&!this.K&&(b==4?tr(this.j,this):(this.o=!1,xt(this)))}else fo(this.g),r==400&&o.indexOf("Unknown SID")>0?(this.m=3,q(12)):(this.m=0,q(13)),ke(this),ot(this)}}}catch{}finally{}};function Ys(t){if(!ki(t))return t.g.la();const r=Ki(t.g);if(r==="")return"";let o="";const h=r.length,y=ve(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return ke(t),ot(t),"";t.h.i=new l.TextDecoder}for(let v=0;v<h;v++)t.h.h=!0,o+=t.h.i.decode(r[v],{stream:!(y&&v==h-1)});return r.length=0,t.h.g+=o,t.C=0,t.h.g}function ki(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Qs(t,r){var o=t.C,h=r.indexOf(`
`,o);return h==-1?En:(o=Number(r.substring(o,h)),isNaN(o)?Ci:(h+=1,h+o>r.length?En:(r=r.slice(h,h+o),t.C=h+o,r)))}me.prototype.cancel=function(){this.K=!0,ke(this)};function xt(t){t.T=Date.now()+t.H,Ri(t,t.H)}function Ri(t,r){if(t.D!=null)throw Error("WatchDog timer not null");t.D=it(E(t.aa,t),r)}function An(t){t.D&&(l.clearTimeout(t.D),t.D=null)}me.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Gs(this.i,this.B),this.M!=2&&(nt(),q(17)),ke(this),this.m=2,ot(this)):Ri(this,this.T-t)};function ot(t){t.j.I==0||t.K||tr(t.j,t)}function ke(t){An(t);var r=t.O;r&&typeof r.dispose=="function"&&r.dispose(),t.O=null,vi(t.V),t.g&&(r=t.g,t.g=null,r.abort(),r.dispose())}function Sn(t,r){try{var o=t.j;if(o.I!=0&&(o.g==t||bn(o.h,t))){if(!t.L&&bn(o.h,t)&&o.I==3){try{var h=o.Ba.g.parse(r)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){e:if(!o.v){if(o.g)if(o.g.F+3e3<t.F)$t(o),Bt(o);else break e;Dn(o),q(18)}}else o.xa=y[1],0<o.xa-o.K&&y[2]<37500&&o.F&&o.A==0&&!o.C&&(o.C=it(E(o.Va,o),6e3));Oi(o.h)<=1&&o.ta&&(o.ta=void 0)}else Ne(o,11)}else if((t.L||o.g==t)&&$t(o),!d(r))for(y=o.Ba.g.parse(r),r=0;r<y.length;r++){let O=y[r];const H=O[0];if(!(H<=o.K))if(o.K=H,O=O[1],o.I==2)if(O[0]=="c"){o.M=O[1],o.ba=O[2];const re=O[3];re!=null&&(o.ka=re,o.j.info("VER="+o.ka));const De=O[4];De!=null&&(o.za=De,o.j.info("SVER="+o.za));const we=O[5];we!=null&&typeof we=="number"&&we>0&&(h=1.5*we,o.O=h,o.j.info("backChannelRequestTimeoutMs_="+h)),h=o;const Ie=t.g;if(Ie){const zt=Ie.g?Ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zt){var v=h.h;v.g||zt.indexOf("spdy")==-1&&zt.indexOf("quic")==-1&&zt.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Cn(v,v.h),v.h=null))}if(h.G){const Ln=Ie.g?Ie.g.getResponseHeader("X-HTTP-Session-Id"):null;Ln&&(h.wa=Ln,L(h.J,h.G,Ln))}}o.I=3,o.l&&o.l.ra(),o.aa&&(o.T=Date.now()-t.F,o.j.info("Handshake RTT: "+o.T+"ms")),h=o;var T=t;if(h.na=rr(h,h.L?h.ba:null,h.W),T.L){Li(h.h,T);var b=T,B=h.O;B&&(b.H=B),b.D&&(An(b),xt(b)),h.g=T}else Zi(h);o.i.length>0&&Ht(o)}else O[0]!="stop"&&O[0]!="close"||Ne(o,7);else o.I==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?Ne(o,7):Nn(o):O[0]!="noop"&&o.l&&o.l.qa(O),o.A=0)}}nt(4)}catch{}}var Zs=class{constructor(t,r){this.g=t,this.map=r}};function Ni(t){this.l=t||10,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Di(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Oi(t){return t.h?1:t.g?t.g.size:0}function bn(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function Cn(t,r){t.g?t.g.add(r):t.h=r}function Li(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}Ni.prototype.cancel=function(){if(this.i=Mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mi(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.G);return r}return x(t.i)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eo(t,r){if(t){t=t.split("&");for(let o=0;o<t.length;o++){const h=t[o].indexOf("=");let y,v=null;h>=0?(y=t[o].substring(0,h),v=t[o].substring(h+1)):y=t[o],r(y,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ye(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;t instanceof ye?(this.l=t.l,at(this,t.j),this.o=t.o,this.g=t.g,ht(this,t.u),this.h=t.h,Pn(this,Hi(t.i)),this.m=t.m):t&&(r=String(t).match(Ui))?(this.l=!1,at(this,r[1]||"",!0),this.o=ct(r[2]||""),this.g=ct(r[3]||"",!0),ht(this,r[4]),this.h=ct(r[5]||"",!0),Pn(this,r[6]||"",!0),this.m=ct(r[7]||"")):(this.l=!1,this.i=new ut(null,this.l))}ye.prototype.toString=function(){const t=[];var r=this.j;r&&t.push(lt(r,xi,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push(lt(r,xi,!0),"@"),t.push(st(o).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.u,o!=null&&t.push(":",String(o))),(o=this.h)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(lt(o,o.charAt(0)=="/"?io:no,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",lt(o,so)),t.join("")},ye.prototype.resolve=function(t){const r=ie(this);let o=!!t.j;o?at(r,t.j):o=!!t.o,o?r.o=t.o:o=!!t.g,o?r.g=t.g:o=t.u!=null;var h=t.h;if(o)ht(r,t.u);else if(o=!!t.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var y=r.h.lastIndexOf("/");y!=-1&&(h=r.h.slice(0,y+1)+h)}if(y=h,y==".."||y==".")h="";else if(y.indexOf("./")!=-1||y.indexOf("/.")!=-1){h=y.lastIndexOf("/",0)==0,y=y.split("/");const v=[];for(let T=0;T<y.length;){const b=y[T++];b=="."?h&&T==y.length&&v.push(""):b==".."?((v.length>1||v.length==1&&v[0]!="")&&v.pop(),h&&T==y.length&&v.push("")):(v.push(b),h=!0)}h=v.join("/")}else h=y}return o?r.h=h:o=t.i.toString()!=="",o?Pn(r,Hi(t.i)):o=!!t.m,o&&(r.m=t.m),r};function ie(t){return new ye(t)}function at(t,r,o){t.j=o?ct(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function ht(t,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);t.u=r}else t.u=null}function Pn(t,r,o){r instanceof ut?(t.i=r,oo(t.i,t.l)):(o||(r=lt(r,ro)),t.i=new ut(r,t.l))}function L(t,r,o){t.i.set(r,o)}function Ft(t){return L(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function ct(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lt(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,to),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function to(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xi=/[#\/\?@]/g,no=/[#\?:]/g,io=/[#\?]/g,ro=/[#\?@]/g,so=/#/g;function ut(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function Re(t){t.g||(t.g=new Map,t.h=0,t.i&&eo(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=ut.prototype,i.add=function(t,r){Re(this),this.i=null,t=qe(this,t);let o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function Fi(t,r){Re(t),r=qe(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Vi(t,r){return Re(t),r=qe(t,r),t.g.has(r)}i.forEach=function(t,r){Re(this),this.g.forEach(function(o,h){o.forEach(function(y){t.call(r,y,h,this)},this)},this)};function ji(t,r){Re(t);let o=[];if(typeof r=="string")Vi(t,r)&&(o=o.concat(t.g.get(qe(t,r))));else for(t=Array.from(t.g.values()),r=0;r<t.length;r++)o=o.concat(t[r]);return o}i.set=function(t,r){return Re(this),this.i=null,t=qe(this,t),Vi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=ji(this,t),t.length>0?String(t[0]):r):r};function Bi(t,r,o){Fi(t,r),o.length>0&&(t.i=null,t.g.set(qe(t,r),x(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(let h=0;h<r.length;h++){var o=r[h];const y=st(o);o=ji(this,o);for(let v=0;v<o.length;v++){let T=y;o[v]!==""&&(T+="="+st(o[v])),t.push(T)}}return this.i=t.join("&")};function Hi(t){const r=new ut;return r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),r}function qe(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function oo(t,r){r&&!t.j&&(Re(t),t.i=null,t.g.forEach(function(o,h){const y=h.toLowerCase();h!=y&&(Fi(this,h),Bi(this,y,o))},t)),t.j=r}function ao(t,r){const o=new rt;if(l.Image){const h=new Image;h.onload=C(_e,o,"TestLoadImage: loaded",!0,r,h),h.onerror=C(_e,o,"TestLoadImage: error",!1,r,h),h.onabort=C(_e,o,"TestLoadImage: abort",!1,r,h),h.ontimeout=C(_e,o,"TestLoadImage: timeout",!1,r,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else r(!1)}function ho(t,r){const o=new rt,h=new AbortController,y=setTimeout(()=>{h.abort(),_e(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:h.signal}).then(v=>{clearTimeout(y),v.ok?_e(o,"TestPingServer: ok",!0,r):_e(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(y),_e(o,"TestPingServer: error",!1,r)})}function _e(t,r,o,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(o)}catch{}}function co(){this.g=new $s}function kn(t){this.i=t.Sb||null,this.h=t.ab||!1}S(kn,wi),kn.prototype.g=function(){return new Vt(this.i,this.h)};function Vt(t,r){$.call(this),this.H=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Vt,$),i=Vt.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=r,this.readyState=1,ft(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(r.body=t),(this.H||l).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,dt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ft(this)),this.g&&(this.readyState=3,ft(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$i(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function $i(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?dt(this):ft(this),this.readyState==3&&$i(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,dt(this))},i.Na=function(t){this.g&&(this.response=t,dt(this))},i.ga=function(){this.g&&dt(this)};function dt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,ft(t)}i.setRequestHeader=function(t,r){this.A.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function ft(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function zi(t){let r="";return Lt(t,function(o,h){r+=h,r+=":",r+=o,r+=`\r
`}),r}function Rn(t,r,o){e:{for(h in o){var h=!1;break e}h=!0}h||(o=zi(o),typeof t=="string"?o!=null&&st(o):L(t,r,o))}function F(t){$.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(F,$);var lo=/^https?$/i,uo=["POST","PUT"];i=F.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,r,o,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Si.g(),this.g.onreadystatechange=A(E(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(v){qi(this,v);return}if(t=o||"",o=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)o.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const v of h.keys())o.set(v,h.get(v));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(o.keys()).find(v=>v.toLowerCase()=="content-type"),y=l.FormData&&t instanceof l.FormData,!(Array.prototype.indexOf.call(uo,r,void 0)>=0)||h||y||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,T]of o)this.g.setRequestHeader(v,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(v){qi(this,v)}};function qi(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.o=5,Wi(t),jt(t)}function Wi(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,z(this,"complete"),z(this,"abort"),jt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),F.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Gi(this):this.Xa())},i.Xa=function(){Gi(this)};function Gi(t){if(t.h&&typeof c<"u"){if(t.v&&ve(t)==4)setTimeout(t.Ca.bind(t),0);else if(z(t,"readystatechange"),ve(t)==4){t.h=!1;try{const v=t.ca();e:switch(v){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var h;if(h=v===0){let T=String(t.D).match(Ui)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),h=!lo.test(T?T.toLowerCase():"")}o=h}if(o)z(t,"complete"),z(t,"success");else{t.o=6;try{var y=ve(t)>2?t.g.statusText:""}catch{y=""}t.l=y+" ["+t.ca()+"]",Wi(t)}}finally{jt(t)}}}}function jt(t,r){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const o=t.g;t.g=null,r||z(t,"ready");try{o.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function ve(t){return t.g?t.g.readyState:0}i.ca=function(){try{return ve(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),Hs(r)}};function Ki(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fo(t){const r={};t=(t.g&&ve(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(d(t[h]))continue;var o=Xs(t[h]);const y=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const v=r[y]||[];r[y]=v,v.push(o)}Us(r,function(h){return h.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function pt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function Ji(t){this.za=0,this.i=[],this.j=new rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=pt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=pt("baseRetryDelayMs",5e3,t),this.Za=pt("retryDelaySeedMs",1e4,t),this.Ta=pt("forwardChannelMaxRetries",2,t),this.va=pt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Ni(t&&t.concurrentRequestLimit),this.Ba=new co,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ji.prototype,i.ka=8,i.I=1,i.connect=function(t,r,o,h){q(0),this.W=t,this.H=r||{},o&&h!==void 0&&(this.H.OSID=o,this.H.OAID=h),this.F=this.X,this.J=rr(this,null,this.W),Ht(this)};function Nn(t){if(Xi(t),t.I==3){var r=t.V++,o=ie(t.J);if(L(o,"SID",t.M),L(o,"RID",r),L(o,"TYPE","terminate"),gt(t,o),r=new me(t,t.j,r),r.M=2,r.A=Ft(ie(o)),o=!1,l.navigator&&l.navigator.sendBeacon)try{o=l.navigator.sendBeacon(r.A.toString(),"")}catch{}!o&&l.Image&&(new Image().src=r.A,o=!0),o||(r.g=sr(r.j,null),r.g.ea(r.A)),r.F=Date.now(),xt(r)}ir(t)}function Bt(t){t.g&&(On(t),t.g.cancel(),t.g=null)}function Xi(t){Bt(t),t.v&&(l.clearTimeout(t.v),t.v=null),$t(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Ht(t){if(!Di(t.h)&&!t.m){t.m=!0;var r=t.Ea;ge||u(),Q||(ge(),Q=!0),g.add(r,t),t.D=0}}function po(t,r){return Oi(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=r.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=it(E(t.Ea,t,r),nr(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const y=new me(this,this.j,t);let v=this.o;if(this.U&&(v?(v=li(v),di(v,this.U)):v=this.U),this.u!==null||this.R||(y.J=v,v=null),this.S)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var h=this.i[o];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(r+=h,r>4096){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=Qi(this,y,r),o=ie(this.J),L(o,"RID",t),L(o,"CVER",22),this.G&&L(o,"X-HTTP-Session-Id",this.G),gt(this,o),v&&(this.R?r="headers="+st(zi(v))+"&"+r:this.u&&Rn(o,this.u,v)),Cn(this.h,y),this.Ra&&L(o,"TYPE","init"),this.S?(L(o,"$req",r),L(o,"SID","null"),y.U=!0,Tn(y,o,null)):Tn(y,o,r),this.I=2}}else this.I==3&&(t?Yi(this,t):this.i.length==0||Di(this.h)||Yi(this))};function Yi(t,r){var o;r?o=r.l:o=t.V++;const h=ie(t.J);L(h,"SID",t.M),L(h,"RID",o),L(h,"AID",t.K),gt(t,h),t.u&&t.o&&Rn(h,t.u,t.o),o=new me(t,t.j,o,t.D+1),t.u===null&&(o.J=t.o),r&&(t.i=r.G.concat(t.i)),r=Qi(t,o,1e3),o.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Cn(t.h,o),Tn(o,h,r)}function gt(t,r){t.H&&Lt(t.H,function(o,h){L(r,h,o)}),t.l&&Lt({},function(o,h){L(r,h,o)})}function Qi(t,r,o){o=Math.min(t.i.length,o);const h=t.l?E(t.l.Ka,t.l,t):null;e:{var y=t.i;let b=-1;for(;;){const B=["count="+o];b==-1?o>0?(b=y[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let O=!0;for(let H=0;H<o;H++){var v=y[H].g;const re=y[H].map;if(v-=b,v<0)b=Math.max(0,y[H].g-100),O=!1;else try{v="req"+v+"_"||"";try{var T=re instanceof Map?re:Object.entries(re);for(const[De,we]of T){let Ie=we;w(we)&&(Ie=mn(we)),B.push(v+De+"="+encodeURIComponent(Ie))}}catch(De){throw B.push(v+"type="+encodeURIComponent("_badmap")),De}}catch{h&&h(re)}}if(O){T=B.join("&");break e}}T=void 0}return t=t.i.splice(0,o),r.G=t,T}function Zi(t){if(!t.g&&!t.v){t.Y=1;var r=t.Da;ge||u(),Q||(ge(),Q=!0),g.add(r,t),t.A=0}}function Dn(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=it(E(t.Da,t),nr(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,er(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=it(E(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,q(10),Bt(this),er(this))};function On(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function er(t){t.g=new me(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var r=ie(t.na);L(r,"RID","rpc"),L(r,"SID",t.M),L(r,"AID",t.K),L(r,"CI",t.F?"0":"1"),!t.F&&t.ia&&L(r,"TO",t.ia),L(r,"TYPE","xmlhttp"),gt(t,r),t.u&&t.o&&Rn(r,t.u,t.o),t.O&&(t.g.H=t.O);var o=t.g;t=t.ba,o.M=1,o.A=Ft(ie(r)),o.u=null,o.R=!0,Pi(o,t)}i.Va=function(){this.C!=null&&(this.C=null,Bt(this),Dn(this),q(19))};function $t(t){t.C!=null&&(l.clearTimeout(t.C),t.C=null)}function tr(t,r){var o=null;if(t.g==r){$t(t),On(t),t.g=null;var h=2}else if(bn(t.h,r))o=r.G,Li(t.h,r),h=1;else return;if(t.I!=0){if(r.o)if(h==1){o=r.u?r.u.length:0,r=Date.now()-r.F;var y=t.D;h=vn(),z(h,new Ai(h,o)),Ht(t)}else Zi(t);else if(y=r.m,y==3||y==0&&r.X>0||!(h==1&&po(t,r)||h==2&&Dn(t)))switch(o&&o.length>0&&(r=t.h,r.i=r.i.concat(o)),y){case 1:Ne(t,5);break;case 4:Ne(t,10);break;case 3:Ne(t,6);break;default:Ne(t,2)}}}function nr(t,r){let o=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(o*=2),o*r}function Ne(t,r){if(t.j.info("Error code "+r),r==2){var o=E(t.bb,t),h=t.Ua;const y=!h;h=new ye(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||at(h,"https"),Ft(h),y?ao(h.toString(),o):ho(h.toString(),o)}else q(2);t.I=0,t.l&&t.l.pa(r),ir(t),Xi(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function ir(t){if(t.I=0,t.ja=[],t.l){const r=Mi(t.h);(r.length!=0||t.i.length!=0)&&(U(t.ja,r),U(t.ja,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.oa()}}function rr(t,r,o){var h=o instanceof ye?ie(o):new ye(o);if(h.g!="")r&&(h.g=r+"."+h.g),ht(h,h.u);else{var y=l.location;h=y.protocol,r=r?r+"."+y.hostname:y.hostname,y=+y.port;const v=new ye(null);h&&at(v,h),r&&(v.g=r),y&&ht(v,y),o&&(v.h=o),h=v}return o=t.G,r=t.wa,o&&r&&L(h,o,r),L(h,"VER",t.ka),gt(t,h),h}function sr(t,r,o){if(r&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Aa&&!t.ma?new F(new kn({ab:o})):new F(t.ma),r.Fa(t.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function or(){}i=or.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Z(t,r){$.call(this),this.g=new Ji(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(t?t["X-WebChannel-Client-Profile"]=r.sa:t={"X-WebChannel-Client-Profile":r.sa}),this.g.U=t,(t=r&&r.Qb)&&!d(t)&&(this.g.u=t),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new We(this)}S(Z,$),Z.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Z.prototype.close=function(){Nn(this.g)},Z.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.v&&(o={},o.__data__=mn(t),t=o);r.i.push(new Zs(r.Ya++,t)),r.I==3&&Ht(r)},Z.prototype.N=function(){this.g.l=null,delete this.j,Nn(this.g),delete this.g,Z.Z.N.call(this)};function ar(t){yn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}S(ar,yn);function hr(){_n.call(this),this.status=1}S(hr,_n);function We(t){this.g=t}S(We,or),We.prototype.ra=function(){z(this.g,"a")},We.prototype.qa=function(t){z(this.g,new ar(t))},We.prototype.pa=function(t){z(this.g,new hr)},We.prototype.oa=function(){z(this.g,"b")},Z.prototype.send=Z.prototype.o,Z.prototype.open=Z.prototype.m,Z.prototype.close=Z.prototype.close,wn.NO_ERROR=0,wn.TIMEOUT=8,wn.HTTP_ERROR=6,Js.COMPLETE="complete",zs.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",$.prototype.listen=$.prototype.J,F.prototype.listenOnce=F.prototype.K,F.prototype.getLastError=F.prototype.Ha,F.prototype.getLastErrorCode=F.prototype.ya,F.prototype.getStatus=F.prototype.ca,F.prototype.getResponseJson=F.prototype.La,F.prototype.getResponseText=F.prototype.la,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Fa}).apply(typeof Wt<"u"?Wt:typeof self<"u"?self:typeof window<"u"?window:{});const Or="@firebase/firestore",Lr="4.9.2";/**
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
*/class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
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
*/let Nt="12.3.0";/**
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
*/const Qe=new Zn("@firebase/firestore");function ne(i,...e){if(Qe.logLevel<=D.DEBUG){const n=e.map(oi);Qe.debug(`Firestore (${Nt}): ${i}`,...n)}}function Ss(i,...e){if(Qe.logLevel<=D.ERROR){const n=e.map(oi);Qe.error(`Firestore (${Nt}): ${i}`,...n)}}function dc(i,...e){if(Qe.logLevel<=D.WARN){const n=e.map(oi);Qe.warn(`Firestore (${Nt}): ${i}`,...n)}}function oi(i){if(typeof i=="string")return i;try{/**
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
*/return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
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
*/function Ct(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,bs(i,s,n)}function bs(i,e,n){let s=`FIRESTORE (${Nt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ss(s),new Error(s)}function wt(i,e,n,s){let a="Unexpected state";typeof n=="string"?a=n:s=n,i||bs(e,a,s)}/**
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
*/const k={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class R extends de{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class It{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
*/class Cs{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class pc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gc{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){wt(this.o===void 0,42304);let s=this.i;const a=I=>this.i!==s?(s=this.i,n(I)):Promise.resolve();let c=new It;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new It,e.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const I=c;e.enqueueRetryable(async()=>{await I.promise,await a(this.currentUser)})},w=I=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(I=>w(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?w(I):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new It)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(wt(typeof s.accessToken=="string",31837,{l:s}),new Cs(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return wt(e===null||typeof e=="string",2055,{h:e}),new W(e)}}class mc{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=W.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yc{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new mc(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _c{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ae(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){wt(this.o===void 0,3512);const s=c=>{c.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,ne("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const a=c=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Mr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(wt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Mr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function vc(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
*/class wc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=vc(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%62))}return s}}function be(i,e){return i<e?-1:i>e?1:0}function Ic(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const a=i.charAt(s),c=e.charAt(s);if(a!==c)return Hn(a)===Hn(c)?be(a,c):Hn(a)?1:-1}return be(i.length,e.length)}const Ec=55296,Tc=57343;function Hn(i){const e=i.charCodeAt(0);return e>=Ec&&e<=Tc}/**
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
*/const Ur="__name__";class se{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ct(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ct(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return se.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof se?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=se.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return be(e.length,n.length)}static compareSegments(e,n){const s=se.isNumericId(e),a=se.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?se.extractNumericId(e).compare(se.extractNumericId(n)):Ic(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return si.fromString(e.substring(4,e.length-2))}}class ee extends se{construct(e,n,s){return new ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new R(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const Ac=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends se{construct(e,n,s){return new Le(e,n,s)}static isValidIdentifier(e){return Ac.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ur}static keyField(){return new Le([Ur])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new R(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let l=!1;for(;a<e.length;){const w=e[a];if(w==="\\"){if(a+1===e.length)throw new R(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const I=e[a+1];if(I!=="\\"&&I!=="."&&I!=="`")throw new R(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=I,a+=2}else w==="`"?(l=!l,a++):w!=="."||l?(s+=w,a++):(c(),a++)}if(c(),l)throw new R(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
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
*/class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(ee.fromString(e))}static fromName(e){return new Ue(ee.fromString(e).popFirst(5))}static empty(){return new Ue(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new ee(e.slice()))}}function Sc(i,e,n,s){if(e===!0&&s===!0)throw new R(k.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function bc(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Cc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ct(12329,{type:typeof i})}function Pc(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new R(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(i);throw new R(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
* @license
* Copyright 2025 Google LLC
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
*/function j(i,e){const n={typeString:i};return e&&(n.value=e),n}function Dt(i,e){if(!bc(i))throw new R(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const a=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const l=i[s];if(a&&typeof l!==a){n=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&l!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new R(k.INVALID_ARGUMENT,n);return!0}/**
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
*/const xr=-62135596800,Fr=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Fr);return new oe(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xr)throw new R(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fr}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dt(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:j("string",oe._jsonSchemaVersion),seconds:j("number"),nanoseconds:j("number")};function kc(i){return i.name==="IndexedDbTransactionError"}/**
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
*/class Rc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Rc("Invalid base64 string: "+c):c}})(e);return new Be(n)}static fromUint8Array(e){const n=(function(a){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);return c})(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Yn="(default)";class sn{constructor(e,n){this.projectId=e,this.database=n||Yn}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Yn}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/class Nc{constructor(e,n=null,s=[],a=[],c=null,l="F",w=null,I=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=l,this.startAt=w,this.endAt=I,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Dc(i){return new Nc(i)}/**
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
*/var Vr,P;(P=Vr||(Vr={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new si([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Oc=41943040;/**
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
*/const Lc=1048576;function $n(){return typeof document<"u"?document:null}/**
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
*/class Mc{constructor(e,n,s=1e3,a=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=a,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-s);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/class ai{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const l=Date.now()+s,w=new ai(e,n,l,a,c);return w.start(s),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var jr,Br;(Br=jr||(jr={})).Ma="default",Br.Cache="cache";/**
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
*/function Uc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
*/const Hr=new Map;/**
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
*/const Ps="firestore.googleapis.com",$r=!0;class zr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new R(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ps,this.ssl=$r}else this.host=e.host,this.ssl=e.ssl??$r;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Oc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lc)throw new R(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uc(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ks{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new R(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new R(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new fc;switch(s.type){case"firstParty":return new yc(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new R(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Hr.get(n);s&&(ne("ComponentProvider","Removing Datastore"),Hr.delete(n),s.terminate())})(this),Promise.resolve()}}function xc(i,e,n,s={}){i=Pc(i,ks);const a=on(e),c=i._getSettings(),l={...c,emulatorOptions:i._getEmulatorOptions()},w=`${e}:${n}`;a&&(Co(`https://${w}`),No("Firestore",!0)),c.host!==Ps&&c.host!==w&&dc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const I={...c,host:w,ssl:a,emulatorOptions:s};if(!Tt(I,l)&&(i._setSettings(I),s.mockUserToken)){let E,C;if(typeof s.mockUserToken=="string")E=s.mockUserToken,C=W.MOCK_USER;else{E=Po(s.mockUserToken,i._app?.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new R(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new W(S)}i._authCredentials=new pc(new Cs(E,C))}}/**
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
*/class hi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class he{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Dt(n,he._jsonSchema))return new he(e,s||null,new Ue(ee.fromString(n.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:j("string",he._jsonSchemaVersion),referencePath:j("string")};class ci extends hi{constructor(e,n,s){super(e,n,Dc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new Ue(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}/**
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
*/const qr="AsyncQueue";class Wr{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mc(this,"async_queue_retry"),this._c=()=>{const s=$n();s&&ne(qr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=$n();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$n();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new It;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!kc(e))throw e;ne(qr,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ss("INTERNAL UNHANDLED ERROR: ",Gr(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=ai.createAndSchedule(this,e,n,s,c=>this.hc(c));return this.tc.push(a),a}uc(){this.nc&&Ct(47125,{Pc:Gr(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Gr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Fc extends ks{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Wr,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wr(e),this._firestoreClient=void 0,await e}}}function Vc(i,e){const n=typeof i=="object"?i:$a(),s=typeof i=="string"?i:Yn,a=ns(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=Ao("firestore");c&&xc(a,...c)}return a}/**
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
*/class ce{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ce(Be.fromBase64String(e))}catch(n){throw new R(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ce(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ce._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dt(e,ce._jsonSchema))return ce.fromBase64String(e.bytes)}}ce._jsonSchemaVersion="firestore/bytes/1.0",ce._jsonSchema={type:j("string",ce._jsonSchemaVersion),bytes:j("string")};/**
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
*/class Rs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class Fe{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fe._jsonSchemaVersion}}static fromJSON(e){if(Dt(e,Fe._jsonSchema))return new Fe(e.latitude,e.longitude)}}Fe._jsonSchemaVersion="firestore/geoPoint/1.0",Fe._jsonSchema={type:j("string",Fe._jsonSchemaVersion),latitude:j("number"),longitude:j("number")};/**
* @license
* Copyright 2024 Google LLC
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
*/class Ve{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ve._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dt(e,Ve._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ve(e.vectorValues);throw new R(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ve._jsonSchemaVersion="firestore/vectorValue/1.0",Ve._jsonSchema={type:j("string",Ve._jsonSchemaVersion),vectorValues:j("object")};const jc=new RegExp("[~\\*/\\[\\]]");function Bc(i,e,n){if(e.search(jc)>=0)throw Kr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Rs(...e.split("."))._internalPath}catch{throw Kr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Kr(i,e,n,s,a){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new R(k.INVALID_ARGUMENT,c+i+l)}/**
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
*/class Ns{constructor(e,n,s,a,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ds("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hc extends Ns{data(){return super.data()}}function Ds(i,e){return typeof e=="string"?Bc(i,e):e instanceof Rs?e._internalPath:e._delegate._internalPath}class Gt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Je extends Ns{constructor(e,n,s,a,c,l){super(e,n,s,a,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ds("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new R(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Je._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Je._jsonSchemaVersion="firestore/documentSnapshot/1.0",Je._jsonSchema={type:j("string",Je._jsonSchemaVersion),bundleSource:j("string","DocumentSnapshot"),bundleName:j("string"),bundle:j("string")};class Jt extends Je{data(e={}){return super.data(e)}}class Et{constructor(e,n,s,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new Gt(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Jt(this._firestore,this._userDataWriter,s.key,s,new Gt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let l=0;return a._snapshot.docChanges.map(w=>{const I=new Jt(a._firestore,a._userDataWriter,w.doc.key,w.doc,new Gt(a._snapshot.mutatedKeys.has(w.doc.key),a._snapshot.fromCache),a.query.converter);return w.doc,{type:"added",doc:I,oldIndex:-1,newIndex:l++}})}{let l=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(w=>c||w.type!==3).map(w=>{const I=new Jt(a._firestore,a._userDataWriter,w.doc.key,w.doc,new Gt(a._snapshot.mutatedKeys.has(w.doc.key),a._snapshot.fromCache),a.query.converter);let E=-1,C=-1;return w.type!==0&&(E=l.indexOf(w.doc.key),l=l.delete(w.doc.key)),w.type!==1&&(l=l.add(w.doc),C=l.indexOf(w.doc.key)),{type:$c(w.type),doc:I,oldIndex:E,newIndex:C}})}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new R(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Et._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],a=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $c(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ct(61501,{type:i})}}Et._jsonSchemaVersion="firestore/querySnapshot/1.0",Et._jsonSchema={type:j("string",Et._jsonSchemaVersion),bundleSource:j("string","QuerySnapshot"),bundleName:j("string"),bundle:j("string")};(function(e,n=!0){(function(a){Nt=a})(an),Xe(new je("firestore",(s,{instanceIdentifier:a,options:c})=>{const l=s.getProvider("app").getImmediate(),w=new Fc(new gc(s.getProvider("auth-internal")),new _c(l,s.getProvider("app-check-internal")),(function(E,C){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new R(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(E.options.projectId,C)})(l,a),l);return c={useFetchStreams:n,...c},w._setSettings(c),w},"PUBLIC").setMultipleInstances(!0)),Se(Or,Lr,e),Se(Or,Lr,"esm2020")})();const zc={apiKey:"AIzaSyA0YriaxC_aAKMFqAhChtSTLEhzlFtJVcM",authDomain:"rest-client-app-29c25.firebaseapp.com",projectId:"rest-client-app-29c25",storageBucket:"rest-client-app-29c25.firebasestorage.app",messagingSenderId:"233485874411",appId:"1:233485874411:web:b3770d824f82e2325cbaae",measurementId:"G-9XHJDC2W06"},Os=is(zc),qc=Bh(Os,{errorMap:th,persistence:As});Vc(Os);tc(qc,As).then(()=>console.log("localStorage Persistence")).catch(()=>console.log("persistence error"));export{de as F,qc as a,Gc as b,Wc as c,Jc as o,Xc as s,Kc as u};
