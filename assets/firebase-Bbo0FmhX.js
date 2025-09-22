import { r as Ae } from './chunk-PVWAREVJ-CRWIe_p6.js';
import { g as Rd, f as Sd } from './i18nInstance-CYZvC-rk.js';
const Pd = (n, e, t, r) => {
    var o, a, u, h;
    const s = [t, { code: e, ...(r || {}) }];
    if (
      (a = (o = n == null ? void 0 : n.services) == null ? void 0 : o.logger) !=
        null &&
      a.forward
    )
      return n.services.logger.forward(s, 'warn', 'react-i18next::', !0);
    (Dt(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (h = (u = n == null ? void 0 : n.services) == null ? void 0 : u.logger) !=
        null && h.warn
        ? n.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s));
  },
  Fa = {},
  Ii = (n, e, t, r) => {
    (Dt(t) && Fa[t]) || (Dt(t) && (Fa[t] = new Date()), Pd(n, e, t, r));
  },
  gu = (n, e) => () => {
    if (n.isInitialized) e();
    else {
      const t = () => {
        (setTimeout(() => {
          n.off('initialized', t);
        }, 0),
          e());
      };
      n.on('initialized', t);
    }
  },
  vi = (n, e, t) => {
    n.loadNamespaces(e, gu(n, t));
  },
  Ba = (n, e, t, r) => {
    if (
      (Dt(t) && (t = [t]),
      n.options.preload && n.options.preload.indexOf(e) > -1)
    )
      return vi(n, t, r);
    (t.forEach((s) => {
      n.options.ns.indexOf(s) < 0 && n.options.ns.push(s);
    }),
      n.loadLanguages(e, gu(n, r)));
  },
  Cd = (n, e, t = {}) =>
    !e.languages || !e.languages.length
      ? (Ii(e, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: e.languages,
        }),
        !0)
      : e.hasLoadedNamespace(n, {
          lng: t.lng,
          precheck: (r, s) => {
            if (
              t.bindI18n &&
              t.bindI18n.indexOf('languageChanging') > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !s(r.isLanguageChangingTo, n)
            )
              return !1;
          },
        }),
  Dt = (n) => typeof n == 'string',
  bd = (n) => typeof n == 'object' && n !== null,
  kd = Ae.createContext();
class Vd {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Nd = (n, e) => {
    const t = Ae.useRef();
    return (
      Ae.useEffect(() => {
        t.current = n;
      }, [n, e]),
      t.current
    );
  },
  _u = (n, e, t, r) => n.getFixedT(e, t, r),
  Dd = (n, e, t, r) => Ae.useCallback(_u(n, e, t, r), [n, e, t, r]),
  lT = (n, e = {}) => {
    var Z, Ce, re, I;
    const { i18n: t } = e,
      { i18n: r, defaultNS: s } = Ae.useContext(kd) || {},
      o = t || r || Rd();
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new Vd()), !o)) {
      Ii(
        o,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next'
      );
      const m = (E, T) =>
          Dt(T)
            ? T
            : bd(T) && Dt(T.defaultValue)
              ? T.defaultValue
              : Array.isArray(E)
                ? E[E.length - 1]
                : E,
        g = [m, {}, !1];
      return ((g.t = m), (g.i18n = {}), (g.ready = !1), g);
    }
    (Z = o.options.react) != null &&
      Z.wait &&
      Ii(
        o,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const a = { ...Sd(), ...o.options.react, ...e },
      { useSuspense: u, keyPrefix: h } = a;
    let d = n || s || ((Ce = o.options) == null ? void 0 : Ce.defaultNS);
    ((d = Dt(d) ? [d] : d || ['translation']),
      (I = (re = o.reportNamespaces).addUsedNamespaces) == null ||
        I.call(re, d));
    const p =
        (o.isInitialized || o.initializedStoreOnce) &&
        d.every((m) => Cd(m, o, a)),
      y = Dd(o, e.lng || null, a.nsMode === 'fallback' ? d : d[0], h),
      v = () => y,
      C = () => _u(o, e.lng || null, a.nsMode === 'fallback' ? d : d[0], h),
      [b, O] = Ae.useState(v);
    let V = d.join();
    e.lng && (V = `${e.lng}${V}`);
    const j = Nd(V),
      U = Ae.useRef(!0);
    (Ae.useEffect(() => {
      const { bindI18n: m, bindI18nStore: g } = a;
      ((U.current = !0),
        !p &&
          !u &&
          (e.lng
            ? Ba(o, e.lng, d, () => {
                U.current && O(C);
              })
            : vi(o, d, () => {
                U.current && O(C);
              })),
        p && j && j !== V && U.current && O(C));
      const E = () => {
        U.current && O(C);
      };
      return (
        m && (o == null || o.on(m, E)),
        g && (o == null || o.store.on(g, E)),
        () => {
          ((U.current = !1),
            o && m && (m == null || m.split(' ').forEach((T) => o.off(T, E))),
            g && o && g.split(' ').forEach((T) => o.store.off(T, E)));
        }
      );
    }, [o, V]),
      Ae.useEffect(() => {
        U.current && p && O(v);
      }, [o, h, p]));
    const q = [b, o, p];
    if (((q.t = b), (q.i18n = o), (q.ready = p), p || (!p && !u))) return q;
    throw new Promise((m) => {
      e.lng ? Ba(o, e.lng, d, () => m()) : vi(o, d, () => m());
    });
  },
  Od = () => {};
var qa = {};
/**
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
 */ const yu = function (n) {
    const e = [];
    let t = 0;
    for (let r = 0; r < n.length; r++) {
      let s = n.charCodeAt(r);
      s < 128
        ? (e[t++] = s)
        : s < 2048
          ? ((e[t++] = (s >> 6) | 192), (e[t++] = (s & 63) | 128))
          : (s & 64512) === 55296 &&
              r + 1 < n.length &&
              (n.charCodeAt(r + 1) & 64512) === 56320
            ? ((s = 65536 + ((s & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
              (e[t++] = (s >> 18) | 240),
              (e[t++] = ((s >> 12) & 63) | 128),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128))
            : ((e[t++] = (s >> 12) | 224),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128));
    }
    return e;
  },
  Md = function (n) {
    const e = [];
    let t = 0,
      r = 0;
    for (; t < n.length; ) {
      const s = n[t++];
      if (s < 128) e[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const o = n[t++];
        e[r++] = String.fromCharCode(((s & 31) << 6) | (o & 63));
      } else if (s > 239 && s < 365) {
        const o = n[t++],
          a = n[t++],
          u = n[t++],
          h =
            (((s & 7) << 18) | ((o & 63) << 12) | ((a & 63) << 6) | (u & 63)) -
            65536;
        ((e[r++] = String.fromCharCode(55296 + (h >> 10))),
          (e[r++] = String.fromCharCode(56320 + (h & 1023))));
      } else {
        const o = n[t++],
          a = n[t++];
        e[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((o & 63) << 6) | (a & 63)
        );
      }
    }
    return e.join('');
  },
  Eu = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(n, e) {
      if (!Array.isArray(n))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < n.length; s += 3) {
        const o = n[s],
          a = s + 1 < n.length,
          u = a ? n[s + 1] : 0,
          h = s + 2 < n.length,
          d = h ? n[s + 2] : 0,
          p = o >> 2,
          y = ((o & 3) << 4) | (u >> 4);
        let v = ((u & 15) << 2) | (d >> 6),
          C = d & 63;
        (h || ((C = 64), a || (v = 64)), r.push(t[p], t[y], t[v], t[C]));
      }
      return r.join('');
    },
    encodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(n)
        : this.encodeByteArray(yu(n), e);
    },
    decodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(n)
        : Md(this.decodeStringToByteArray(n, e));
    },
    decodeStringToByteArray(n, e) {
      this.init_();
      const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < n.length; ) {
        const o = t[n.charAt(s++)],
          u = s < n.length ? t[n.charAt(s)] : 0;
        ++s;
        const d = s < n.length ? t[n.charAt(s)] : 64;
        ++s;
        const y = s < n.length ? t[n.charAt(s)] : 64;
        if ((++s, o == null || u == null || d == null || y == null))
          throw new Ld();
        const v = (o << 2) | (u >> 4);
        if ((r.push(v), d !== 64)) {
          const C = ((u << 4) & 240) | (d >> 2);
          if ((r.push(C), y !== 64)) {
            const b = ((d << 6) & 192) | y;
            r.push(b);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          ((this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n)));
      }
    },
  };
class Ld extends Error {
  constructor() {
    (super(...arguments), (this.name = 'DecodeBase64StringError'));
  }
}
const xd = function (n) {
    const e = yu(n);
    return Eu.encodeByteArray(e, !0);
  },
  es = function (n) {
    return xd(n).replace(/\./g, '');
  },
  Tu = function (n) {
    try {
      return Eu.decodeString(n, !0);
    } catch (e) {
      console.error('base64Decode failed: ', e);
    }
    return null;
  };
/**
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
 */ function Ud() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
  throw new Error('Unable to locate global object.');
}
/**
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
 */ const Fd = () => Ud().__FIREBASE_DEFAULTS__,
  Bd = () => {
    if (typeof process > 'u' || typeof qa > 'u') return;
    const n = qa.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  qd = () => {
    if (typeof document > 'u') return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = n && Tu(n[1]);
    return e && JSON.parse(e);
  },
  Is = () => {
    try {
      return Od() || Fd() || Bd() || qd();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  Iu = (n) => {
    var e, t;
    return (t = (e = Is()) == null ? void 0 : e.emulatorHosts) == null
      ? void 0
      : t[n];
  },
  jd = (n) => {
    const e = Iu(n);
    if (!e) return;
    const t = e.lastIndexOf(':');
    if (t <= 0 || t + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(t + 1), 10);
    return e[0] === '[' ? [e.substring(1, t - 1), r] : [e.substring(0, t), r];
  },
  vu = () => {
    var n;
    return (n = Is()) == null ? void 0 : n.config;
  },
  wu = (n) => {
    var e;
    return (e = Is()) == null ? void 0 : e[`_${n}`];
  };
/**
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
 */ class $d {
  constructor() {
    ((this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      })));
  }
  wrapCallback(e) {
    return (t, r) => {
      (t ? this.reject(t) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r)));
    };
  }
}
/**
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
 */ function mn(n) {
  try {
    return (
      n.startsWith('http://') || n.startsWith('https://')
        ? new URL(n).hostname
        : n
    ).endsWith('.cloudworkstations.dev');
  } catch {
    return !1;
  }
}
async function Au(n) {
  return (await fetch(n, { credentials: 'include' })).ok;
}
/**
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
 */ function zd(n, e) {
  if (n.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const t = { alg: 'none', type: 'JWT' },
    r = e || 'demo-project',
    s = n.iat || 0,
    o = n.sub || n.user_id;
  if (!o)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const a = {
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: s,
    exp: s + 3600,
    auth_time: s,
    sub: o,
    user_id: o,
    firebase: { sign_in_provider: 'custom', identities: {} },
    ...n,
  };
  return [es(JSON.stringify(t)), es(JSON.stringify(a)), ''].join('.');
}
const Hn = {};
function Hd() {
  const n = { prod: [], emulator: [] };
  for (const e of Object.keys(Hn)) Hn[e] ? n.emulator.push(e) : n.prod.push(e);
  return n;
}
function Wd(n) {
  let e = document.getElementById(n),
    t = !1;
  return (
    e ||
      ((e = document.createElement('div')), e.setAttribute('id', n), (t = !0)),
    { created: t, element: e }
  );
}
let ja = !1;
function Ru(n, e) {
  if (
    typeof window > 'u' ||
    typeof document > 'u' ||
    !mn(window.location.host) ||
    Hn[n] === e ||
    Hn[n] ||
    ja
  )
    return;
  Hn[n] = e;
  function t(v) {
    return `__firebase__banner__${v}`;
  }
  const r = '__firebase__banner',
    o = Hd().prod.length > 0;
  function a() {
    const v = document.getElementById(r);
    v && v.remove();
  }
  function u(v) {
    ((v.style.display = 'flex'),
      (v.style.background = '#7faaf0'),
      (v.style.position = 'fixed'),
      (v.style.bottom = '5px'),
      (v.style.left = '5px'),
      (v.style.padding = '.5em'),
      (v.style.borderRadius = '5px'),
      (v.style.alignItems = 'center'));
  }
  function h(v, C) {
    (v.setAttribute('width', '24'),
      v.setAttribute('id', C),
      v.setAttribute('height', '24'),
      v.setAttribute('viewBox', '0 0 24 24'),
      v.setAttribute('fill', 'none'),
      (v.style.marginLeft = '-6px'));
  }
  function d() {
    const v = document.createElement('span');
    return (
      (v.style.cursor = 'pointer'),
      (v.style.marginLeft = '16px'),
      (v.style.fontSize = '24px'),
      (v.innerHTML = ' &times;'),
      (v.onclick = () => {
        ((ja = !0), a());
      }),
      v
    );
  }
  function p(v, C) {
    (v.setAttribute('id', C),
      (v.innerText = 'Learn more'),
      (v.href =
        'https://firebase.google.com/docs/studio/preview-apps#preview-backend'),
      v.setAttribute('target', '__blank'),
      (v.style.paddingLeft = '5px'),
      (v.style.textDecoration = 'underline'));
  }
  function y() {
    const v = Wd(r),
      C = t('text'),
      b = document.getElementById(C) || document.createElement('span'),
      O = t('learnmore'),
      V = document.getElementById(O) || document.createElement('a'),
      j = t('preprendIcon'),
      U =
        document.getElementById(j) ||
        document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    if (v.created) {
      const q = v.element;
      (u(q), p(V, O));
      const Z = d();
      (h(U, j), q.append(U, b, V, Z), document.body.appendChild(q));
    }
    (o
      ? ((b.innerText = 'Preview backend disconnected.'),
        (U.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((U.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (b.innerText = 'Preview backend running in this workspace.')),
      b.setAttribute('id', C));
  }
  document.readyState === 'loading'
    ? window.addEventListener('DOMContentLoaded', y)
    : y();
}
/**
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
 */ function Ie() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function Gd() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())
  );
}
function Kd() {
  var e;
  const n = (e = Is()) == null ? void 0 : e.forceEnvironment;
  if (n === 'node') return !0;
  if (n === 'browser') return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === '[object process]'
    );
  } catch {
    return !1;
  }
}
function Qd() {
  return typeof navigator < 'u' && navigator.userAgent === 'Cloudflare-Workers';
}
function Jd() {
  const n =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
        ? browser.runtime
        : void 0;
  return typeof n == 'object' && n.id !== void 0;
}
function Yd() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function Xd() {
  const n = Ie();
  return n.indexOf('MSIE ') >= 0 || n.indexOf('Trident/') >= 0;
}
function Zd() {
  return (
    !Kd() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  );
}
function ef() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function tf() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        s = self.indexedDB.open(r);
      ((s.onsuccess = () => {
        (s.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0));
      }),
        (s.onupgradeneeded = () => {
          t = !1;
        }),
        (s.onerror = () => {
          var o;
          e(((o = s.error) == null ? void 0 : o.message) || '');
        }));
    } catch (t) {
      e(t);
    }
  });
}
/**
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
 */ const nf = 'FirebaseError';
class rt extends Error {
  constructor(e, t, r) {
    (super(t),
      (this.code = e),
      (this.customData = r),
      (this.name = nf),
      Object.setPrototypeOf(this, rt.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, or.prototype.create));
  }
}
class or {
  constructor(e, t, r) {
    ((this.service = e), (this.serviceName = t), (this.errors = r));
  }
  create(e, ...t) {
    const r = t[0] || {},
      s = `${this.service}/${e}`,
      o = this.errors[e],
      a = o ? rf(o, r) : 'Error',
      u = `${this.serviceName}: ${a} (${s}).`;
    return new rt(s, u, r);
  }
}
function rf(n, e) {
  return n.replace(sf, (t, r) => {
    const s = e[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const sf = /\{\$([^}]+)}/g;
function of(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
function Ot(n, e) {
  if (n === e) return !0;
  const t = Object.keys(n),
    r = Object.keys(e);
  for (const s of t) {
    if (!r.includes(s)) return !1;
    const o = n[s],
      a = e[s];
    if ($a(o) && $a(a)) {
      if (!Ot(o, a)) return !1;
    } else if (o !== a) return !1;
  }
  for (const s of r) if (!t.includes(s)) return !1;
  return !0;
}
function $a(n) {
  return n !== null && typeof n == 'object';
}
/**
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
 */ function ar(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r)
      ? r.forEach((s) => {
          e.push(encodeURIComponent(t) + '=' + encodeURIComponent(s));
        })
      : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function Bn(n) {
  const e = {};
  return (
    n
      .replace(/^\?/, '')
      .split('&')
      .forEach((r) => {
        if (r) {
          const [s, o] = r.split('=');
          e[decodeURIComponent(s)] = decodeURIComponent(o);
        }
      }),
    e
  );
}
function qn(n) {
  const e = n.indexOf('?');
  if (!e) return '';
  const t = n.indexOf('#', e);
  return n.substring(e, t > 0 ? t : void 0);
}
function af(n, e) {
  const t = new cf(n, e);
  return t.subscribe.bind(t);
}
class cf {
  constructor(e, t) {
    ((this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        }));
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    (this.forEachObserver((t) => {
      t.error(e);
    }),
      this.close(e));
  }
  complete() {
    (this.forEachObserver((e) => {
      e.complete();
    }),
      this.close());
  }
  subscribe(e, t, r) {
    let s;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    (uf(e, ['next', 'error', 'complete'])
      ? (s = e)
      : (s = { next: e, error: t, complete: r }),
      s.next === void 0 && (s.next = ui),
      s.error === void 0 && (s.error = ui),
      s.complete === void 0 && (s.complete = ui));
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? s.error(this.finalError) : s.complete();
          } catch {}
        }),
      this.observers.push(s),
      o
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        ((this.observers = void 0), (this.onNoObservers = void 0));
      }));
  }
}
function uf(n, e) {
  if (typeof n != 'object' || n === null) return !1;
  for (const t of e) if (t in n && typeof n[t] == 'function') return !0;
  return !1;
}
function ui() {}
/**
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
 */ function Re(n) {
  return n && n._delegate ? n._delegate : n;
}
class Mt {
  constructor(e, t, r) {
    ((this.name = e),
      (this.instanceFactory = t),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null));
  }
  setInstantiationMode(e) {
    return ((this.instantiationMode = e), this);
  }
  setMultipleInstances(e) {
    return ((this.multipleInstances = e), this);
  }
  setServiceProps(e) {
    return ((this.serviceProps = e), this);
  }
  setInstanceCreatedCallback(e) {
    return ((this.onInstanceCreated = e), this);
  }
}
/**
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
 */ const Vt = '[DEFAULT]';
/**
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
 */ class lf {
  constructor(e, t) {
    ((this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map()));
  }
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new $d();
      if (
        (this.instancesDeferred.set(t, r),
        this.isInitialized(t) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: t });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    const t = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      r = (e == null ? void 0 : e.optional) ?? !1;
    if (this.isInitialized(t) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: t });
      } catch (s) {
        if (r) return null;
        throw s;
      }
    else {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (df(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Vt });
        } catch {}
      for (const [t, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(t);
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: s });
          r.resolve(o);
        } catch {}
      }
    }
  }
  clearInstance(e = Vt) {
    (this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e));
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => '_delete' in t).map((t) => t._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Vt) {
    return this.instances.has(e);
  }
  getOptions(e = Vt) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t,
    });
    for (const [o, a] of this.instancesDeferred.entries()) {
      const u = this.normalizeInstanceIdentifier(o);
      r === u && a.resolve(s);
    }
    return s;
  }
  onInit(e, t) {
    const r = this.normalizeInstanceIdentifier(t),
      s = this.onInitCallbacks.get(r) ?? new Set();
    (s.add(e), this.onInitCallbacks.set(r, s));
    const o = this.instances.get(r);
    return (
      o && e(o, r),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const s of r)
        try {
          s(e, t);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: hf(e),
        options: t,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, t),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Vt) {
    return this.component ? (this.component.multipleInstances ? e : Vt) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function hf(n) {
  return n === Vt ? void 0 : n;
}
function df(n) {
  return n.instantiationMode === 'EAGER';
}
/**
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
 */ class ff {
  constructor(e) {
    ((this.name = e), (this.providers = new Map()));
  }
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    (this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e));
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const t = new lf(e, this);
    return (this.providers.set(e, t), t);
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
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
 */ var $;
(function (n) {
  ((n[(n.DEBUG = 0)] = 'DEBUG'),
    (n[(n.VERBOSE = 1)] = 'VERBOSE'),
    (n[(n.INFO = 2)] = 'INFO'),
    (n[(n.WARN = 3)] = 'WARN'),
    (n[(n.ERROR = 4)] = 'ERROR'),
    (n[(n.SILENT = 5)] = 'SILENT'));
})($ || ($ = {}));
const pf = {
    debug: $.DEBUG,
    verbose: $.VERBOSE,
    info: $.INFO,
    warn: $.WARN,
    error: $.ERROR,
    silent: $.SILENT,
  },
  mf = $.INFO,
  gf = {
    [$.DEBUG]: 'log',
    [$.VERBOSE]: 'log',
    [$.INFO]: 'info',
    [$.WARN]: 'warn',
    [$.ERROR]: 'error',
  },
  _f = (n, e, ...t) => {
    if (e < n.logLevel) return;
    const r = new Date().toISOString(),
      s = gf[e];
    if (s) console[s](`[${r}]  ${n.name}:`, ...t);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class Qi {
  constructor(e) {
    ((this.name = e),
      (this._logLevel = mf),
      (this._logHandler = _f),
      (this._userLogHandler = null));
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in $))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? pf[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    (this._userLogHandler && this._userLogHandler(this, $.DEBUG, ...e),
      this._logHandler(this, $.DEBUG, ...e));
  }
  log(...e) {
    (this._userLogHandler && this._userLogHandler(this, $.VERBOSE, ...e),
      this._logHandler(this, $.VERBOSE, ...e));
  }
  info(...e) {
    (this._userLogHandler && this._userLogHandler(this, $.INFO, ...e),
      this._logHandler(this, $.INFO, ...e));
  }
  warn(...e) {
    (this._userLogHandler && this._userLogHandler(this, $.WARN, ...e),
      this._logHandler(this, $.WARN, ...e));
  }
  error(...e) {
    (this._userLogHandler && this._userLogHandler(this, $.ERROR, ...e),
      this._logHandler(this, $.ERROR, ...e));
  }
}
const yf = (n, e) => e.some((t) => n instanceof t);
let za, Ha;
function Ef() {
  return (
    za ||
    (za = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Tf() {
  return (
    Ha ||
    (Ha = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Su = new WeakMap(),
  wi = new WeakMap(),
  Pu = new WeakMap(),
  li = new WeakMap(),
  Ji = new WeakMap();
function If(n) {
  const e = new Promise((t, r) => {
    const s = () => {
        (n.removeEventListener('success', o),
          n.removeEventListener('error', a));
      },
      o = () => {
        (t(ft(n.result)), s());
      },
      a = () => {
        (r(n.error), s());
      };
    (n.addEventListener('success', o), n.addEventListener('error', a));
  });
  return (
    e
      .then((t) => {
        t instanceof IDBCursor && Su.set(t, n);
      })
      .catch(() => {}),
    Ji.set(e, n),
    e
  );
}
function vf(n) {
  if (wi.has(n)) return;
  const e = new Promise((t, r) => {
    const s = () => {
        (n.removeEventListener('complete', o),
          n.removeEventListener('error', a),
          n.removeEventListener('abort', a));
      },
      o = () => {
        (t(), s());
      },
      a = () => {
        (r(n.error || new DOMException('AbortError', 'AbortError')), s());
      };
    (n.addEventListener('complete', o),
      n.addEventListener('error', a),
      n.addEventListener('abort', a));
  });
  wi.set(n, e);
}
let Ai = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === 'done') return wi.get(n);
      if (e === 'objectStoreNames') return n.objectStoreNames || Pu.get(n);
      if (e === 'store')
        return t.objectStoreNames[1]
          ? void 0
          : t.objectStore(t.objectStoreNames[0]);
    }
    return ft(n[e]);
  },
  set(n, e, t) {
    return ((n[e] = t), !0);
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in n;
  },
};
function wf(n) {
  Ai = n(Ai);
}
function Af(n) {
  return n === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...t) {
        const r = n.call(hi(this), e, ...t);
        return (Pu.set(r, e.sort ? e.sort() : [e]), ft(r));
      }
    : Tf().includes(n)
      ? function (...e) {
          return (n.apply(hi(this), e), ft(Su.get(this)));
        }
      : function (...e) {
          return ft(n.apply(hi(this), e));
        };
}
function Rf(n) {
  return typeof n == 'function'
    ? Af(n)
    : (n instanceof IDBTransaction && vf(n),
      yf(n, Ef()) ? new Proxy(n, Ai) : n);
}
function ft(n) {
  if (n instanceof IDBRequest) return If(n);
  if (li.has(n)) return li.get(n);
  const e = Rf(n);
  return (e !== n && (li.set(n, e), Ji.set(e, n)), e);
}
const hi = (n) => Ji.get(n);
function Sf(n, e, { blocked: t, upgrade: r, blocking: s, terminated: o } = {}) {
  const a = indexedDB.open(n, e),
    u = ft(a);
  return (
    r &&
      a.addEventListener('upgradeneeded', (h) => {
        r(ft(a.result), h.oldVersion, h.newVersion, ft(a.transaction), h);
      }),
    t && a.addEventListener('blocked', (h) => t(h.oldVersion, h.newVersion, h)),
    u
      .then((h) => {
        (o && h.addEventListener('close', () => o()),
          s &&
            h.addEventListener('versionchange', (d) =>
              s(d.oldVersion, d.newVersion, d)
            ));
      })
      .catch(() => {}),
    u
  );
}
const Pf = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  Cf = ['put', 'add', 'delete', 'clear'],
  di = new Map();
function Wa(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == 'string')) return;
  if (di.get(e)) return di.get(e);
  const t = e.replace(/FromIndex$/, ''),
    r = e !== t,
    s = Cf.includes(t);
  if (
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || Pf.includes(t))
  )
    return;
  const o = async function (a, ...u) {
    const h = this.transaction(a, s ? 'readwrite' : 'readonly');
    let d = h.store;
    return (
      r && (d = d.index(u.shift())),
      (await Promise.all([d[t](...u), s && h.done]))[0]
    );
  };
  return (di.set(e, o), o);
}
wf((n) => ({
  ...n,
  get: (e, t, r) => Wa(e, t) || n.get(e, t, r),
  has: (e, t) => !!Wa(e, t) || n.has(e, t),
}));
/**
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
 */ class bf {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (kf(t)) {
          const r = t.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((t) => t)
      .join(' ');
  }
}
function kf(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Ri = '@firebase/app',
  Ga = '0.14.2';
/**
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
 */ const Ze = new Qi('@firebase/app'),
  Vf = '@firebase/app-compat',
  Nf = '@firebase/analytics-compat',
  Df = '@firebase/analytics',
  Of = '@firebase/app-check-compat',
  Mf = '@firebase/app-check',
  Lf = '@firebase/auth',
  xf = '@firebase/auth-compat',
  Uf = '@firebase/database',
  Ff = '@firebase/data-connect',
  Bf = '@firebase/database-compat',
  qf = '@firebase/functions',
  jf = '@firebase/functions-compat',
  $f = '@firebase/installations',
  zf = '@firebase/installations-compat',
  Hf = '@firebase/messaging',
  Wf = '@firebase/messaging-compat',
  Gf = '@firebase/performance',
  Kf = '@firebase/performance-compat',
  Qf = '@firebase/remote-config',
  Jf = '@firebase/remote-config-compat',
  Yf = '@firebase/storage',
  Xf = '@firebase/storage-compat',
  Zf = '@firebase/firestore',
  ep = '@firebase/ai',
  tp = '@firebase/firestore-compat',
  np = 'firebase',
  rp = '12.2.0';
/**
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
 */ const Si = '[DEFAULT]',
  sp = {
    [Ri]: 'fire-core',
    [Vf]: 'fire-core-compat',
    [Df]: 'fire-analytics',
    [Nf]: 'fire-analytics-compat',
    [Mf]: 'fire-app-check',
    [Of]: 'fire-app-check-compat',
    [Lf]: 'fire-auth',
    [xf]: 'fire-auth-compat',
    [Uf]: 'fire-rtdb',
    [Ff]: 'fire-data-connect',
    [Bf]: 'fire-rtdb-compat',
    [qf]: 'fire-fn',
    [jf]: 'fire-fn-compat',
    [$f]: 'fire-iid',
    [zf]: 'fire-iid-compat',
    [Hf]: 'fire-fcm',
    [Wf]: 'fire-fcm-compat',
    [Gf]: 'fire-perf',
    [Kf]: 'fire-perf-compat',
    [Qf]: 'fire-rc',
    [Jf]: 'fire-rc-compat',
    [Yf]: 'fire-gcs',
    [Xf]: 'fire-gcs-compat',
    [Zf]: 'fire-fst',
    [tp]: 'fire-fst-compat',
    [ep]: 'fire-vertex',
    'fire-js': 'fire-js',
    [np]: 'fire-js-all',
  };
/**
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
 */ const ts = new Map(),
  ip = new Map(),
  Pi = new Map();
function Ka(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    Ze.debug(
      `Component ${e.name} failed to register with FirebaseApp ${n.name}`,
      t
    );
  }
}
function cn(n) {
  const e = n.name;
  if (Pi.has(e))
    return (
      Ze.debug(`There were multiple attempts to register component ${e}.`),
      !1
    );
  Pi.set(e, n);
  for (const t of ts.values()) Ka(t, n);
  for (const t of ip.values()) Ka(t, n);
  return !0;
}
function Yi(n, e) {
  const t = n.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return (t && t.triggerHeartbeat(), n.container.getProvider(e));
}
function be(n) {
  return n == null ? !1 : n.settings !== void 0;
}
/**
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
 */ const op = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  pt = new or('app', 'Firebase', op);
/**
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
 */ class ap {
  constructor(e, t, r) {
    ((this._isDeleted = !1),
      (this._options = { ...e }),
      (this._config = { ...t }),
      (this._name = t.name),
      (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Mt('app', () => this, 'PUBLIC')));
  }
  get automaticDataCollectionEnabled() {
    return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
  }
  set automaticDataCollectionEnabled(e) {
    (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
  }
  get name() {
    return (this.checkDestroyed(), this._name);
  }
  get options() {
    return (this.checkDestroyed(), this._options);
  }
  get config() {
    return (this.checkDestroyed(), this._config);
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw pt.create('app-deleted', { appName: this._name });
  }
}
/**
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
 */ const gn = rp;
function Cu(n, e = {}) {
  let t = n;
  typeof e != 'object' && (e = { name: e });
  const r = { name: Si, automaticDataCollectionEnabled: !0, ...e },
    s = r.name;
  if (typeof s != 'string' || !s)
    throw pt.create('bad-app-name', { appName: String(s) });
  if ((t || (t = vu()), !t)) throw pt.create('no-options');
  const o = ts.get(s);
  if (o) {
    if (Ot(t, o.options) && Ot(r, o.config)) return o;
    throw pt.create('duplicate-app', { appName: s });
  }
  const a = new ff(s);
  for (const h of Pi.values()) a.addComponent(h);
  const u = new ap(t, r, a);
  return (ts.set(s, u), u);
}
function bu(n = Si) {
  const e = ts.get(n);
  if (!e && n === Si && vu()) return Cu();
  if (!e) throw pt.create('no-app', { appName: n });
  return e;
}
function mt(n, e, t) {
  let r = sp[n] ?? n;
  t && (r += `-${t}`);
  const s = r.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${r}" with version "${e}":`];
    (s &&
      a.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push('and'),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Ze.warn(a.join(' ')));
    return;
  }
  cn(new Mt(`${r}-version`, () => ({ library: r, version: e }), 'VERSION'));
}
/**
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
 */ const cp = 'firebase-heartbeat-database',
  up = 1,
  Yn = 'firebase-heartbeat-store';
let fi = null;
function ku() {
  return (
    fi ||
      (fi = Sf(cp, up, {
        upgrade: (n, e) => {
          switch (e) {
            case 0:
              try {
                n.createObjectStore(Yn);
              } catch (t) {
                console.warn(t);
              }
          }
        },
      }).catch((n) => {
        throw pt.create('idb-open', { originalErrorMessage: n.message });
      })),
    fi
  );
}
async function lp(n) {
  try {
    const t = (await ku()).transaction(Yn),
      r = await t.objectStore(Yn).get(Vu(n));
    return (await t.done, r);
  } catch (e) {
    if (e instanceof rt) Ze.warn(e.message);
    else {
      const t = pt.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      Ze.warn(t.message);
    }
  }
}
async function Qa(n, e) {
  try {
    const r = (await ku()).transaction(Yn, 'readwrite');
    (await r.objectStore(Yn).put(e, Vu(n)), await r.done);
  } catch (t) {
    if (t instanceof rt) Ze.warn(t.message);
    else {
      const r = pt.create('idb-set', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Ze.warn(r.message);
    }
  }
}
function Vu(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
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
 */ const hp = 1024,
  dp = 30;
class fp {
  constructor(e) {
    ((this.container = e), (this._heartbeatsCache = null));
    const t = this.container.getProvider('app').getImmediate();
    ((this._storage = new mp(t)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r))));
  }
  async triggerHeartbeat() {
    var e, t;
    try {
      const s = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        o = Ja();
      if (
        (((e = this._heartbeatsCache) == null ? void 0 : e.heartbeats) ==
          null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((t = this._heartbeatsCache) == null ? void 0 : t.heartbeats) ==
            null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === o ||
        this._heartbeatsCache.heartbeats.some((a) => a.date === o)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: o, agent: s }),
        this._heartbeatsCache.heartbeats.length > dp)
      ) {
        const a = gp(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(a, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      Ze.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) == null ? void 0 : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return '';
      const t = Ja(),
        { heartbeatsToSend: r, unsentEntries: s } = pp(
          this._heartbeatsCache.heartbeats
        ),
        o = es(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        o
      );
    } catch (t) {
      return (Ze.warn(t), '');
    }
  }
}
function Ja() {
  return new Date().toISOString().substring(0, 10);
}
function pp(n, e = hp) {
  const t = [];
  let r = n.slice();
  for (const s of n) {
    const o = t.find((a) => a.agent === s.agent);
    if (o) {
      if ((o.dates.push(s.date), Ya(t) > e)) {
        o.dates.pop();
        break;
      }
    } else if ((t.push({ agent: s.agent, dates: [s.date] }), Ya(t) > e)) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: t, unsentEntries: r };
}
class mp {
  constructor(e) {
    ((this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return ef()
      ? tf()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await lp(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return Qa(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return Qa(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Ya(n) {
  return es(JSON.stringify({ version: 2, heartbeats: n })).length;
}
function gp(n) {
  if (n.length === 0) return -1;
  let e = 0,
    t = n[0].date;
  for (let r = 1; r < n.length; r++)
    n[r].date < t && ((t = n[r].date), (e = r));
  return e;
}
/**
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
 */ function _p(n) {
  (cn(new Mt('platform-logger', (e) => new bf(e), 'PRIVATE')),
    cn(new Mt('heartbeat', (e) => new fp(e), 'PRIVATE')),
    mt(Ri, Ga, n),
    mt(Ri, Ga, 'esm2020'),
    mt('fire-js', ''));
}
_p('');
var Xa =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var gt, Nu;
(function () {
  var n;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(I, m) {
    function g() {}
    ((g.prototype = m.prototype),
      (I.D = m.prototype),
      (I.prototype = new g()),
      (I.prototype.constructor = I),
      (I.C = function (E, T, A) {
        for (
          var _ = Array(arguments.length - 2), He = 2;
          He < arguments.length;
          He++
        )
          _[He - 2] = arguments[He];
        return m.prototype[T].apply(E, _);
      }));
  }
  function t() {
    this.blockSize = -1;
  }
  function r() {
    ((this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s());
  }
  (e(r, t),
    (r.prototype.s = function () {
      ((this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0));
    }));
  function s(I, m, g) {
    g || (g = 0);
    var E = Array(16);
    if (typeof m == 'string')
      for (var T = 0; 16 > T; ++T)
        E[T] =
          m.charCodeAt(g++) |
          (m.charCodeAt(g++) << 8) |
          (m.charCodeAt(g++) << 16) |
          (m.charCodeAt(g++) << 24);
    else
      for (T = 0; 16 > T; ++T)
        E[T] = m[g++] | (m[g++] << 8) | (m[g++] << 16) | (m[g++] << 24);
    ((m = I.g[0]), (g = I.g[1]), (T = I.g[2]));
    var A = I.g[3],
      _ = (m + (A ^ (g & (T ^ A))) + E[0] + 3614090360) & 4294967295;
    ((m = g + (((_ << 7) & 4294967295) | (_ >>> 25))),
      (_ = (A + (T ^ (m & (g ^ T))) + E[1] + 3905402710) & 4294967295),
      (A = m + (((_ << 12) & 4294967295) | (_ >>> 20))),
      (_ = (T + (g ^ (A & (m ^ g))) + E[2] + 606105819) & 4294967295),
      (T = A + (((_ << 17) & 4294967295) | (_ >>> 15))),
      (_ = (g + (m ^ (T & (A ^ m))) + E[3] + 3250441966) & 4294967295),
      (g = T + (((_ << 22) & 4294967295) | (_ >>> 10))),
      (_ = (m + (A ^ (g & (T ^ A))) + E[4] + 4118548399) & 4294967295),
      (m = g + (((_ << 7) & 4294967295) | (_ >>> 25))),
      (_ = (A + (T ^ (m & (g ^ T))) + E[5] + 1200080426) & 4294967295),
      (A = m + (((_ << 12) & 4294967295) | (_ >>> 20))),
      (_ = (T + (g ^ (A & (m ^ g))) + E[6] + 2821735955) & 4294967295),
      (T = A + (((_ << 17) & 4294967295) | (_ >>> 15))),
      (_ = (g + (m ^ (T & (A ^ m))) + E[7] + 4249261313) & 4294967295),
      (g = T + (((_ << 22) & 4294967295) | (_ >>> 10))),
      (_ = (m + (A ^ (g & (T ^ A))) + E[8] + 1770035416) & 4294967295),
      (m = g + (((_ << 7) & 4294967295) | (_ >>> 25))),
      (_ = (A + (T ^ (m & (g ^ T))) + E[9] + 2336552879) & 4294967295),
      (A = m + (((_ << 12) & 4294967295) | (_ >>> 20))),
      (_ = (T + (g ^ (A & (m ^ g))) + E[10] + 4294925233) & 4294967295),
      (T = A + (((_ << 17) & 4294967295) | (_ >>> 15))),
      (_ = (g + (m ^ (T & (A ^ m))) + E[11] + 2304563134) & 4294967295),
      (g = T + (((_ << 22) & 4294967295) | (_ >>> 10))),
      (_ = (m + (A ^ (g & (T ^ A))) + E[12] + 1804603682) & 4294967295),
      (m = g + (((_ << 7) & 4294967295) | (_ >>> 25))),
      (_ = (A + (T ^ (m & (g ^ T))) + E[13] + 4254626195) & 4294967295),
      (A = m + (((_ << 12) & 4294967295) | (_ >>> 20))),
      (_ = (T + (g ^ (A & (m ^ g))) + E[14] + 2792965006) & 4294967295),
      (T = A + (((_ << 17) & 4294967295) | (_ >>> 15))),
      (_ = (g + (m ^ (T & (A ^ m))) + E[15] + 1236535329) & 4294967295),
      (g = T + (((_ << 22) & 4294967295) | (_ >>> 10))),
      (_ = (m + (T ^ (A & (g ^ T))) + E[1] + 4129170786) & 4294967295),
      (m = g + (((_ << 5) & 4294967295) | (_ >>> 27))),
      (_ = (A + (g ^ (T & (m ^ g))) + E[6] + 3225465664) & 4294967295),
      (A = m + (((_ << 9) & 4294967295) | (_ >>> 23))),
      (_ = (T + (m ^ (g & (A ^ m))) + E[11] + 643717713) & 4294967295),
      (T = A + (((_ << 14) & 4294967295) | (_ >>> 18))),
      (_ = (g + (A ^ (m & (T ^ A))) + E[0] + 3921069994) & 4294967295),
      (g = T + (((_ << 20) & 4294967295) | (_ >>> 12))),
      (_ = (m + (T ^ (A & (g ^ T))) + E[5] + 3593408605) & 4294967295),
      (m = g + (((_ << 5) & 4294967295) | (_ >>> 27))),
      (_ = (A + (g ^ (T & (m ^ g))) + E[10] + 38016083) & 4294967295),
      (A = m + (((_ << 9) & 4294967295) | (_ >>> 23))),
      (_ = (T + (m ^ (g & (A ^ m))) + E[15] + 3634488961) & 4294967295),
      (T = A + (((_ << 14) & 4294967295) | (_ >>> 18))),
      (_ = (g + (A ^ (m & (T ^ A))) + E[4] + 3889429448) & 4294967295),
      (g = T + (((_ << 20) & 4294967295) | (_ >>> 12))),
      (_ = (m + (T ^ (A & (g ^ T))) + E[9] + 568446438) & 4294967295),
      (m = g + (((_ << 5) & 4294967295) | (_ >>> 27))),
      (_ = (A + (g ^ (T & (m ^ g))) + E[14] + 3275163606) & 4294967295),
      (A = m + (((_ << 9) & 4294967295) | (_ >>> 23))),
      (_ = (T + (m ^ (g & (A ^ m))) + E[3] + 4107603335) & 4294967295),
      (T = A + (((_ << 14) & 4294967295) | (_ >>> 18))),
      (_ = (g + (A ^ (m & (T ^ A))) + E[8] + 1163531501) & 4294967295),
      (g = T + (((_ << 20) & 4294967295) | (_ >>> 12))),
      (_ = (m + (T ^ (A & (g ^ T))) + E[13] + 2850285829) & 4294967295),
      (m = g + (((_ << 5) & 4294967295) | (_ >>> 27))),
      (_ = (A + (g ^ (T & (m ^ g))) + E[2] + 4243563512) & 4294967295),
      (A = m + (((_ << 9) & 4294967295) | (_ >>> 23))),
      (_ = (T + (m ^ (g & (A ^ m))) + E[7] + 1735328473) & 4294967295),
      (T = A + (((_ << 14) & 4294967295) | (_ >>> 18))),
      (_ = (g + (A ^ (m & (T ^ A))) + E[12] + 2368359562) & 4294967295),
      (g = T + (((_ << 20) & 4294967295) | (_ >>> 12))),
      (_ = (m + (g ^ T ^ A) + E[5] + 4294588738) & 4294967295),
      (m = g + (((_ << 4) & 4294967295) | (_ >>> 28))),
      (_ = (A + (m ^ g ^ T) + E[8] + 2272392833) & 4294967295),
      (A = m + (((_ << 11) & 4294967295) | (_ >>> 21))),
      (_ = (T + (A ^ m ^ g) + E[11] + 1839030562) & 4294967295),
      (T = A + (((_ << 16) & 4294967295) | (_ >>> 16))),
      (_ = (g + (T ^ A ^ m) + E[14] + 4259657740) & 4294967295),
      (g = T + (((_ << 23) & 4294967295) | (_ >>> 9))),
      (_ = (m + (g ^ T ^ A) + E[1] + 2763975236) & 4294967295),
      (m = g + (((_ << 4) & 4294967295) | (_ >>> 28))),
      (_ = (A + (m ^ g ^ T) + E[4] + 1272893353) & 4294967295),
      (A = m + (((_ << 11) & 4294967295) | (_ >>> 21))),
      (_ = (T + (A ^ m ^ g) + E[7] + 4139469664) & 4294967295),
      (T = A + (((_ << 16) & 4294967295) | (_ >>> 16))),
      (_ = (g + (T ^ A ^ m) + E[10] + 3200236656) & 4294967295),
      (g = T + (((_ << 23) & 4294967295) | (_ >>> 9))),
      (_ = (m + (g ^ T ^ A) + E[13] + 681279174) & 4294967295),
      (m = g + (((_ << 4) & 4294967295) | (_ >>> 28))),
      (_ = (A + (m ^ g ^ T) + E[0] + 3936430074) & 4294967295),
      (A = m + (((_ << 11) & 4294967295) | (_ >>> 21))),
      (_ = (T + (A ^ m ^ g) + E[3] + 3572445317) & 4294967295),
      (T = A + (((_ << 16) & 4294967295) | (_ >>> 16))),
      (_ = (g + (T ^ A ^ m) + E[6] + 76029189) & 4294967295),
      (g = T + (((_ << 23) & 4294967295) | (_ >>> 9))),
      (_ = (m + (g ^ T ^ A) + E[9] + 3654602809) & 4294967295),
      (m = g + (((_ << 4) & 4294967295) | (_ >>> 28))),
      (_ = (A + (m ^ g ^ T) + E[12] + 3873151461) & 4294967295),
      (A = m + (((_ << 11) & 4294967295) | (_ >>> 21))),
      (_ = (T + (A ^ m ^ g) + E[15] + 530742520) & 4294967295),
      (T = A + (((_ << 16) & 4294967295) | (_ >>> 16))),
      (_ = (g + (T ^ A ^ m) + E[2] + 3299628645) & 4294967295),
      (g = T + (((_ << 23) & 4294967295) | (_ >>> 9))),
      (_ = (m + (T ^ (g | ~A)) + E[0] + 4096336452) & 4294967295),
      (m = g + (((_ << 6) & 4294967295) | (_ >>> 26))),
      (_ = (A + (g ^ (m | ~T)) + E[7] + 1126891415) & 4294967295),
      (A = m + (((_ << 10) & 4294967295) | (_ >>> 22))),
      (_ = (T + (m ^ (A | ~g)) + E[14] + 2878612391) & 4294967295),
      (T = A + (((_ << 15) & 4294967295) | (_ >>> 17))),
      (_ = (g + (A ^ (T | ~m)) + E[5] + 4237533241) & 4294967295),
      (g = T + (((_ << 21) & 4294967295) | (_ >>> 11))),
      (_ = (m + (T ^ (g | ~A)) + E[12] + 1700485571) & 4294967295),
      (m = g + (((_ << 6) & 4294967295) | (_ >>> 26))),
      (_ = (A + (g ^ (m | ~T)) + E[3] + 2399980690) & 4294967295),
      (A = m + (((_ << 10) & 4294967295) | (_ >>> 22))),
      (_ = (T + (m ^ (A | ~g)) + E[10] + 4293915773) & 4294967295),
      (T = A + (((_ << 15) & 4294967295) | (_ >>> 17))),
      (_ = (g + (A ^ (T | ~m)) + E[1] + 2240044497) & 4294967295),
      (g = T + (((_ << 21) & 4294967295) | (_ >>> 11))),
      (_ = (m + (T ^ (g | ~A)) + E[8] + 1873313359) & 4294967295),
      (m = g + (((_ << 6) & 4294967295) | (_ >>> 26))),
      (_ = (A + (g ^ (m | ~T)) + E[15] + 4264355552) & 4294967295),
      (A = m + (((_ << 10) & 4294967295) | (_ >>> 22))),
      (_ = (T + (m ^ (A | ~g)) + E[6] + 2734768916) & 4294967295),
      (T = A + (((_ << 15) & 4294967295) | (_ >>> 17))),
      (_ = (g + (A ^ (T | ~m)) + E[13] + 1309151649) & 4294967295),
      (g = T + (((_ << 21) & 4294967295) | (_ >>> 11))),
      (_ = (m + (T ^ (g | ~A)) + E[4] + 4149444226) & 4294967295),
      (m = g + (((_ << 6) & 4294967295) | (_ >>> 26))),
      (_ = (A + (g ^ (m | ~T)) + E[11] + 3174756917) & 4294967295),
      (A = m + (((_ << 10) & 4294967295) | (_ >>> 22))),
      (_ = (T + (m ^ (A | ~g)) + E[2] + 718787259) & 4294967295),
      (T = A + (((_ << 15) & 4294967295) | (_ >>> 17))),
      (_ = (g + (A ^ (T | ~m)) + E[9] + 3951481745) & 4294967295),
      (I.g[0] = (I.g[0] + m) & 4294967295),
      (I.g[1] =
        (I.g[1] + (T + (((_ << 21) & 4294967295) | (_ >>> 11)))) & 4294967295),
      (I.g[2] = (I.g[2] + T) & 4294967295),
      (I.g[3] = (I.g[3] + A) & 4294967295));
  }
  ((r.prototype.u = function (I, m) {
    m === void 0 && (m = I.length);
    for (var g = m - this.blockSize, E = this.B, T = this.h, A = 0; A < m; ) {
      if (T == 0) for (; A <= g; ) (s(this, I, A), (A += this.blockSize));
      if (typeof I == 'string') {
        for (; A < m; )
          if (((E[T++] = I.charCodeAt(A++)), T == this.blockSize)) {
            (s(this, E), (T = 0));
            break;
          }
      } else
        for (; A < m; )
          if (((E[T++] = I[A++]), T == this.blockSize)) {
            (s(this, E), (T = 0));
            break;
          }
    }
    ((this.h = T), (this.o += m));
  }),
    (r.prototype.v = function () {
      var I = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      );
      I[0] = 128;
      for (var m = 1; m < I.length - 8; ++m) I[m] = 0;
      var g = 8 * this.o;
      for (m = I.length - 8; m < I.length; ++m) ((I[m] = g & 255), (g /= 256));
      for (this.u(I), I = Array(16), m = g = 0; 4 > m; ++m)
        for (var E = 0; 32 > E; E += 8) I[g++] = (this.g[m] >>> E) & 255;
      return I;
    }));
  function o(I, m) {
    var g = u;
    return Object.prototype.hasOwnProperty.call(g, I) ? g[I] : (g[I] = m(I));
  }
  function a(I, m) {
    this.h = m;
    for (var g = [], E = !0, T = I.length - 1; 0 <= T; T--) {
      var A = I[T] | 0;
      (E && A == m) || ((g[T] = A), (E = !1));
    }
    this.g = g;
  }
  var u = {};
  function h(I) {
    return -128 <= I && 128 > I
      ? o(I, function (m) {
          return new a([m | 0], 0 > m ? -1 : 0);
        })
      : new a([I | 0], 0 > I ? -1 : 0);
  }
  function d(I) {
    if (isNaN(I) || !isFinite(I)) return y;
    if (0 > I) return V(d(-I));
    for (var m = [], g = 1, E = 0; I >= g; E++)
      ((m[E] = (I / g) | 0), (g *= 4294967296));
    return new a(m, 0);
  }
  function p(I, m) {
    if (I.length == 0) throw Error('number format error: empty string');
    if (((m = m || 10), 2 > m || 36 < m))
      throw Error('radix out of range: ' + m);
    if (I.charAt(0) == '-') return V(p(I.substring(1), m));
    if (0 <= I.indexOf('-'))
      throw Error('number format error: interior "-" character');
    for (var g = d(Math.pow(m, 8)), E = y, T = 0; T < I.length; T += 8) {
      var A = Math.min(8, I.length - T),
        _ = parseInt(I.substring(T, T + A), m);
      8 > A
        ? ((A = d(Math.pow(m, A))), (E = E.j(A).add(d(_))))
        : ((E = E.j(g)), (E = E.add(d(_))));
    }
    return E;
  }
  var y = h(0),
    v = h(1),
    C = h(16777216);
  ((n = a.prototype),
    (n.m = function () {
      if (O(this)) return -V(this).m();
      for (var I = 0, m = 1, g = 0; g < this.g.length; g++) {
        var E = this.i(g);
        ((I += (0 <= E ? E : 4294967296 + E) * m), (m *= 4294967296));
      }
      return I;
    }),
    (n.toString = function (I) {
      if (((I = I || 10), 2 > I || 36 < I))
        throw Error('radix out of range: ' + I);
      if (b(this)) return '0';
      if (O(this)) return '-' + V(this).toString(I);
      for (var m = d(Math.pow(I, 6)), g = this, E = ''; ; ) {
        var T = Z(g, m).g;
        g = j(g, T.j(m));
        var A = ((0 < g.g.length ? g.g[0] : g.h) >>> 0).toString(I);
        if (((g = T), b(g))) return A + E;
        for (; 6 > A.length; ) A = '0' + A;
        E = A + E;
      }
    }),
    (n.i = function (I) {
      return 0 > I ? 0 : I < this.g.length ? this.g[I] : this.h;
    }));
  function b(I) {
    if (I.h != 0) return !1;
    for (var m = 0; m < I.g.length; m++) if (I.g[m] != 0) return !1;
    return !0;
  }
  function O(I) {
    return I.h == -1;
  }
  n.l = function (I) {
    return ((I = j(this, I)), O(I) ? -1 : b(I) ? 0 : 1);
  };
  function V(I) {
    for (var m = I.g.length, g = [], E = 0; E < m; E++) g[E] = ~I.g[E];
    return new a(g, ~I.h).add(v);
  }
  ((n.abs = function () {
    return O(this) ? V(this) : this;
  }),
    (n.add = function (I) {
      for (
        var m = Math.max(this.g.length, I.g.length), g = [], E = 0, T = 0;
        T <= m;
        T++
      ) {
        var A = E + (this.i(T) & 65535) + (I.i(T) & 65535),
          _ = (A >>> 16) + (this.i(T) >>> 16) + (I.i(T) >>> 16);
        ((E = _ >>> 16), (A &= 65535), (_ &= 65535), (g[T] = (_ << 16) | A));
      }
      return new a(g, g[g.length - 1] & -2147483648 ? -1 : 0);
    }));
  function j(I, m) {
    return I.add(V(m));
  }
  n.j = function (I) {
    if (b(this) || b(I)) return y;
    if (O(this)) return O(I) ? V(this).j(V(I)) : V(V(this).j(I));
    if (O(I)) return V(this.j(V(I)));
    if (0 > this.l(C) && 0 > I.l(C)) return d(this.m() * I.m());
    for (var m = this.g.length + I.g.length, g = [], E = 0; E < 2 * m; E++)
      g[E] = 0;
    for (E = 0; E < this.g.length; E++)
      for (var T = 0; T < I.g.length; T++) {
        var A = this.i(E) >>> 16,
          _ = this.i(E) & 65535,
          He = I.i(T) >>> 16,
          wn = I.i(T) & 65535;
        ((g[2 * E + 2 * T] += _ * wn),
          U(g, 2 * E + 2 * T),
          (g[2 * E + 2 * T + 1] += A * wn),
          U(g, 2 * E + 2 * T + 1),
          (g[2 * E + 2 * T + 1] += _ * He),
          U(g, 2 * E + 2 * T + 1),
          (g[2 * E + 2 * T + 2] += A * He),
          U(g, 2 * E + 2 * T + 2));
      }
    for (E = 0; E < m; E++) g[E] = (g[2 * E + 1] << 16) | g[2 * E];
    for (E = m; E < 2 * m; E++) g[E] = 0;
    return new a(g, 0);
  };
  function U(I, m) {
    for (; (I[m] & 65535) != I[m]; )
      ((I[m + 1] += I[m] >>> 16), (I[m] &= 65535), m++);
  }
  function q(I, m) {
    ((this.g = I), (this.h = m));
  }
  function Z(I, m) {
    if (b(m)) throw Error('division by zero');
    if (b(I)) return new q(y, y);
    if (O(I)) return ((m = Z(V(I), m)), new q(V(m.g), V(m.h)));
    if (O(m)) return ((m = Z(I, V(m))), new q(V(m.g), m.h));
    if (30 < I.g.length) {
      if (O(I) || O(m))
        throw Error('slowDivide_ only works with positive integers.');
      for (var g = v, E = m; 0 >= E.l(I); ) ((g = Ce(g)), (E = Ce(E)));
      var T = re(g, 1),
        A = re(E, 1);
      for (E = re(E, 2), g = re(g, 2); !b(E); ) {
        var _ = A.add(E);
        (0 >= _.l(I) && ((T = T.add(g)), (A = _)),
          (E = re(E, 1)),
          (g = re(g, 1)));
      }
      return ((m = j(I, T.j(m))), new q(T, m));
    }
    for (T = y; 0 <= I.l(m); ) {
      for (
        g = Math.max(1, Math.floor(I.m() / m.m())),
          E = Math.ceil(Math.log(g) / Math.LN2),
          E = 48 >= E ? 1 : Math.pow(2, E - 48),
          A = d(g),
          _ = A.j(m);
        O(_) || 0 < _.l(I);

      )
        ((g -= E), (A = d(g)), (_ = A.j(m)));
      (b(A) && (A = v), (T = T.add(A)), (I = j(I, _)));
    }
    return new q(T, I);
  }
  ((n.A = function (I) {
    return Z(this, I).h;
  }),
    (n.and = function (I) {
      for (
        var m = Math.max(this.g.length, I.g.length), g = [], E = 0;
        E < m;
        E++
      )
        g[E] = this.i(E) & I.i(E);
      return new a(g, this.h & I.h);
    }),
    (n.or = function (I) {
      for (
        var m = Math.max(this.g.length, I.g.length), g = [], E = 0;
        E < m;
        E++
      )
        g[E] = this.i(E) | I.i(E);
      return new a(g, this.h | I.h);
    }),
    (n.xor = function (I) {
      for (
        var m = Math.max(this.g.length, I.g.length), g = [], E = 0;
        E < m;
        E++
      )
        g[E] = this.i(E) ^ I.i(E);
      return new a(g, this.h ^ I.h);
    }));
  function Ce(I) {
    for (var m = I.g.length + 1, g = [], E = 0; E < m; E++)
      g[E] = (I.i(E) << 1) | (I.i(E - 1) >>> 31);
    return new a(g, I.h);
  }
  function re(I, m) {
    var g = m >> 5;
    m %= 32;
    for (var E = I.g.length - g, T = [], A = 0; A < E; A++)
      T[A] =
        0 < m ? (I.i(A + g) >>> m) | (I.i(A + g + 1) << (32 - m)) : I.i(A + g);
    return new a(T, I.h);
  }
  ((r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (Nu = r),
    (a.prototype.add = a.prototype.add),
    (a.prototype.multiply = a.prototype.j),
    (a.prototype.modulo = a.prototype.A),
    (a.prototype.compare = a.prototype.l),
    (a.prototype.toNumber = a.prototype.m),
    (a.prototype.toString = a.prototype.toString),
    (a.prototype.getBits = a.prototype.i),
    (a.fromNumber = d),
    (a.fromString = p),
    (gt = a));
}).apply(
  typeof Xa < 'u'
    ? Xa
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {}
);
var xr =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Du, jn, Ou, zr, Ci, Mu, Lu, xu;
(function () {
  var n,
    e =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (i, c, l) {
            return (
              i == Array.prototype || i == Object.prototype || (i[c] = l.value),
              i
            );
          };
  function t(i) {
    i = [
      typeof globalThis == 'object' && globalThis,
      i,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof xr == 'object' && xr,
    ];
    for (var c = 0; c < i.length; ++c) {
      var l = i[c];
      if (l && l.Math == Math) return l;
    }
    throw Error('Cannot find global object');
  }
  var r = t(this);
  function s(i, c) {
    if (c)
      e: {
        var l = r;
        i = i.split('.');
        for (var f = 0; f < i.length - 1; f++) {
          var w = i[f];
          if (!(w in l)) break e;
          l = l[w];
        }
        ((i = i[i.length - 1]),
          (f = l[i]),
          (c = c(f)),
          c != f &&
            c != null &&
            e(l, i, { configurable: !0, writable: !0, value: c }));
      }
  }
  function o(i, c) {
    i instanceof String && (i += '');
    var l = 0,
      f = !1,
      w = {
        next: function () {
          if (!f && l < i.length) {
            var R = l++;
            return { value: c(R, i[R]), done: !1 };
          }
          return ((f = !0), { done: !0, value: void 0 });
        },
      };
    return (
      (w[Symbol.iterator] = function () {
        return w;
      }),
      w
    );
  }
  s('Array.prototype.values', function (i) {
    return (
      i ||
      function () {
        return o(this, function (c, l) {
          return l;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var a = a || {},
    u = this || self;
  function h(i) {
    var c = typeof i;
    return (
      (c = c != 'object' ? c : i ? (Array.isArray(i) ? 'array' : c) : 'null'),
      c == 'array' || (c == 'object' && typeof i.length == 'number')
    );
  }
  function d(i) {
    var c = typeof i;
    return (c == 'object' && i != null) || c == 'function';
  }
  function p(i, c, l) {
    return i.call.apply(i.bind, arguments);
  }
  function y(i, c, l) {
    if (!i) throw Error();
    if (2 < arguments.length) {
      var f = Array.prototype.slice.call(arguments, 2);
      return function () {
        var w = Array.prototype.slice.call(arguments);
        return (Array.prototype.unshift.apply(w, f), i.apply(c, w));
      };
    }
    return function () {
      return i.apply(c, arguments);
    };
  }
  function v(i, c, l) {
    return (
      (v =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? p
          : y),
      v.apply(null, arguments)
    );
  }
  function C(i, c) {
    var l = Array.prototype.slice.call(arguments, 1);
    return function () {
      var f = l.slice();
      return (f.push.apply(f, arguments), i.apply(this, f));
    };
  }
  function b(i, c) {
    function l() {}
    ((l.prototype = c.prototype),
      (i.aa = c.prototype),
      (i.prototype = new l()),
      (i.prototype.constructor = i),
      (i.Qb = function (f, w, R) {
        for (
          var k = Array(arguments.length - 2), Q = 2;
          Q < arguments.length;
          Q++
        )
          k[Q - 2] = arguments[Q];
        return c.prototype[w].apply(f, k);
      }));
  }
  function O(i) {
    const c = i.length;
    if (0 < c) {
      const l = Array(c);
      for (let f = 0; f < c; f++) l[f] = i[f];
      return l;
    }
    return [];
  }
  function V(i, c) {
    for (let l = 1; l < arguments.length; l++) {
      const f = arguments[l];
      if (h(f)) {
        const w = i.length || 0,
          R = f.length || 0;
        i.length = w + R;
        for (let k = 0; k < R; k++) i[w + k] = f[k];
      } else i.push(f);
    }
  }
  class j {
    constructor(c, l) {
      ((this.i = c), (this.j = l), (this.h = 0), (this.g = null));
    }
    get() {
      let c;
      return (
        0 < this.h
          ? (this.h--, (c = this.g), (this.g = c.next), (c.next = null))
          : (c = this.i()),
        c
      );
    }
  }
  function U(i) {
    return /^[\s\xa0]*$/.test(i);
  }
  function q() {
    var i = u.navigator;
    return i && (i = i.userAgent) ? i : '';
  }
  function Z(i) {
    return (Z[' '](i), i);
  }
  Z[' '] = function () {};
  var Ce =
    q().indexOf('Gecko') != -1 &&
    !(q().toLowerCase().indexOf('webkit') != -1 && q().indexOf('Edge') == -1) &&
    !(q().indexOf('Trident') != -1 || q().indexOf('MSIE') != -1) &&
    q().indexOf('Edge') == -1;
  function re(i, c, l) {
    for (const f in i) c.call(l, i[f], f, i);
  }
  function I(i, c) {
    for (const l in i) c.call(void 0, i[l], l, i);
  }
  function m(i) {
    const c = {};
    for (const l in i) c[l] = i[l];
    return c;
  }
  const g =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    );
  function E(i, c) {
    let l, f;
    for (let w = 1; w < arguments.length; w++) {
      f = arguments[w];
      for (l in f) i[l] = f[l];
      for (let R = 0; R < g.length; R++)
        ((l = g[R]),
          Object.prototype.hasOwnProperty.call(f, l) && (i[l] = f[l]));
    }
  }
  function T(i) {
    var c = 1;
    i = i.split(':');
    const l = [];
    for (; 0 < c && i.length; ) (l.push(i.shift()), c--);
    return (i.length && l.push(i.join(':')), l);
  }
  function A(i) {
    u.setTimeout(() => {
      throw i;
    }, 0);
  }
  function _() {
    var i = Fs;
    let c = null;
    return (
      i.g &&
        ((c = i.g), (i.g = i.g.next), i.g || (i.h = null), (c.next = null)),
      c
    );
  }
  class He {
    constructor() {
      this.h = this.g = null;
    }
    add(c, l) {
      const f = wn.get();
      (f.set(c, l), this.h ? (this.h.next = f) : (this.g = f), (this.h = f));
    }
  }
  var wn = new j(
    () => new zh(),
    (i) => i.reset()
  );
  class zh {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(c, l) {
      ((this.h = c), (this.g = l), (this.next = null));
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let An,
    Rn = !1,
    Fs = new He(),
    Fo = () => {
      const i = u.Promise.resolve(void 0);
      An = () => {
        i.then(Hh);
      };
    };
  var Hh = () => {
    for (var i; (i = _()); ) {
      try {
        i.h.call(i.g);
      } catch (l) {
        A(l);
      }
      var c = wn;
      (c.j(i), 100 > c.h && (c.h++, (i.next = c.g), (c.g = i)));
    }
    Rn = !1;
  };
  function st() {
    ((this.s = this.s), (this.C = this.C));
  }
  ((st.prototype.s = !1),
    (st.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (st.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    }));
  function pe(i, c) {
    ((this.type = i), (this.g = this.target = c), (this.defaultPrevented = !1));
  }
  pe.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var Wh = (function () {
    if (!u.addEventListener || !Object.defineProperty) return !1;
    var i = !1,
      c = Object.defineProperty({}, 'passive', {
        get: function () {
          i = !0;
        },
      });
    try {
      const l = () => {};
      (u.addEventListener('test', l, c), u.removeEventListener('test', l, c));
    } catch {}
    return i;
  })();
  function Sn(i, c) {
    if (
      (pe.call(this, i ? i.type : ''),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ''),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ''),
      (this.i = null),
      i)
    ) {
      var l = (this.type = i.type),
        f =
          i.changedTouches && i.changedTouches.length
            ? i.changedTouches[0]
            : null;
      if (
        ((this.target = i.target || i.srcElement),
        (this.g = c),
        (c = i.relatedTarget))
      ) {
        if (Ce) {
          e: {
            try {
              Z(c.nodeName);
              var w = !0;
              break e;
            } catch {}
            w = !1;
          }
          w || (c = null);
        }
      } else
        l == 'mouseover'
          ? (c = i.fromElement)
          : l == 'mouseout' && (c = i.toElement);
      ((this.relatedTarget = c),
        f
          ? ((this.clientX = f.clientX !== void 0 ? f.clientX : f.pageX),
            (this.clientY = f.clientY !== void 0 ? f.clientY : f.pageY),
            (this.screenX = f.screenX || 0),
            (this.screenY = f.screenY || 0))
          : ((this.clientX = i.clientX !== void 0 ? i.clientX : i.pageX),
            (this.clientY = i.clientY !== void 0 ? i.clientY : i.pageY),
            (this.screenX = i.screenX || 0),
            (this.screenY = i.screenY || 0)),
        (this.button = i.button),
        (this.key = i.key || ''),
        (this.ctrlKey = i.ctrlKey),
        (this.altKey = i.altKey),
        (this.shiftKey = i.shiftKey),
        (this.metaKey = i.metaKey),
        (this.pointerId = i.pointerId || 0),
        (this.pointerType =
          typeof i.pointerType == 'string'
            ? i.pointerType
            : Gh[i.pointerType] || ''),
        (this.state = i.state),
        (this.i = i),
        i.defaultPrevented && Sn.aa.h.call(this));
    }
  }
  b(Sn, pe);
  var Gh = { 2: 'touch', 3: 'pen', 4: 'mouse' };
  Sn.prototype.h = function () {
    Sn.aa.h.call(this);
    var i = this.i;
    i.preventDefault ? i.preventDefault() : (i.returnValue = !1);
  };
  var yr = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    Kh = 0;
  function Qh(i, c, l, f, w) {
    ((this.listener = i),
      (this.proxy = null),
      (this.src = c),
      (this.type = l),
      (this.capture = !!f),
      (this.ha = w),
      (this.key = ++Kh),
      (this.da = this.fa = !1));
  }
  function Er(i) {
    ((i.da = !0),
      (i.listener = null),
      (i.proxy = null),
      (i.src = null),
      (i.ha = null));
  }
  function Tr(i) {
    ((this.src = i), (this.g = {}), (this.h = 0));
  }
  Tr.prototype.add = function (i, c, l, f, w) {
    var R = i.toString();
    ((i = this.g[R]), i || ((i = this.g[R] = []), this.h++));
    var k = qs(i, c, f, w);
    return (
      -1 < k
        ? ((c = i[k]), l || (c.fa = !1))
        : ((c = new Qh(c, this.src, R, !!f, w)), (c.fa = l), i.push(c)),
      c
    );
  };
  function Bs(i, c) {
    var l = c.type;
    if (l in i.g) {
      var f = i.g[l],
        w = Array.prototype.indexOf.call(f, c, void 0),
        R;
      ((R = 0 <= w) && Array.prototype.splice.call(f, w, 1),
        R && (Er(c), i.g[l].length == 0 && (delete i.g[l], i.h--)));
    }
  }
  function qs(i, c, l, f) {
    for (var w = 0; w < i.length; ++w) {
      var R = i[w];
      if (!R.da && R.listener == c && R.capture == !!l && R.ha == f) return w;
    }
    return -1;
  }
  var js = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    $s = {};
  function Bo(i, c, l, f, w) {
    if (Array.isArray(c)) {
      for (var R = 0; R < c.length; R++) Bo(i, c[R], l, f, w);
      return null;
    }
    return (
      (l = $o(l)),
      i && i[yr] ? i.K(c, l, d(f) ? !!f.capture : !1, w) : Jh(i, c, l, !1, f, w)
    );
  }
  function Jh(i, c, l, f, w, R) {
    if (!c) throw Error('Invalid event type');
    var k = d(w) ? !!w.capture : !!w,
      Q = Hs(i);
    if ((Q || (i[js] = Q = new Tr(i)), (l = Q.add(c, l, f, k, R)), l.proxy))
      return l;
    if (
      ((f = Yh()),
      (l.proxy = f),
      (f.src = i),
      (f.listener = l),
      i.addEventListener)
    )
      (Wh || (w = k),
        w === void 0 && (w = !1),
        i.addEventListener(c.toString(), f, w));
    else if (i.attachEvent) i.attachEvent(jo(c.toString()), f);
    else if (i.addListener && i.removeListener) i.addListener(f);
    else throw Error('addEventListener and attachEvent are unavailable.');
    return l;
  }
  function Yh() {
    function i(l) {
      return c.call(i.src, i.listener, l);
    }
    const c = Xh;
    return i;
  }
  function qo(i, c, l, f, w) {
    if (Array.isArray(c))
      for (var R = 0; R < c.length; R++) qo(i, c[R], l, f, w);
    else
      ((f = d(f) ? !!f.capture : !!f),
        (l = $o(l)),
        i && i[yr]
          ? ((i = i.i),
            (c = String(c).toString()),
            c in i.g &&
              ((R = i.g[c]),
              (l = qs(R, l, f, w)),
              -1 < l &&
                (Er(R[l]),
                Array.prototype.splice.call(R, l, 1),
                R.length == 0 && (delete i.g[c], i.h--))))
          : i &&
            (i = Hs(i)) &&
            ((c = i.g[c.toString()]),
            (i = -1),
            c && (i = qs(c, l, f, w)),
            (l = -1 < i ? c[i] : null) && zs(l)));
  }
  function zs(i) {
    if (typeof i != 'number' && i && !i.da) {
      var c = i.src;
      if (c && c[yr]) Bs(c.i, i);
      else {
        var l = i.type,
          f = i.proxy;
        (c.removeEventListener
          ? c.removeEventListener(l, f, i.capture)
          : c.detachEvent
            ? c.detachEvent(jo(l), f)
            : c.addListener && c.removeListener && c.removeListener(f),
          (l = Hs(c))
            ? (Bs(l, i), l.h == 0 && ((l.src = null), (c[js] = null)))
            : Er(i));
      }
    }
  }
  function jo(i) {
    return i in $s ? $s[i] : ($s[i] = 'on' + i);
  }
  function Xh(i, c) {
    if (i.da) i = !0;
    else {
      c = new Sn(c, this);
      var l = i.listener,
        f = i.ha || i.src;
      (i.fa && zs(i), (i = l.call(f, c)));
    }
    return i;
  }
  function Hs(i) {
    return ((i = i[js]), i instanceof Tr ? i : null);
  }
  var Ws = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
  function $o(i) {
    return typeof i == 'function'
      ? i
      : (i[Ws] ||
          (i[Ws] = function (c) {
            return i.handleEvent(c);
          }),
        i[Ws]);
  }
  function me() {
    (st.call(this), (this.i = new Tr(this)), (this.M = this), (this.F = null));
  }
  (b(me, st),
    (me.prototype[yr] = !0),
    (me.prototype.removeEventListener = function (i, c, l, f) {
      qo(this, i, c, l, f);
    }));
  function ve(i, c) {
    var l,
      f = i.F;
    if (f) for (l = []; f; f = f.F) l.push(f);
    if (((i = i.M), (f = c.type || c), typeof c == 'string')) c = new pe(c, i);
    else if (c instanceof pe) c.target = c.target || i;
    else {
      var w = c;
      ((c = new pe(f, i)), E(c, w));
    }
    if (((w = !0), l))
      for (var R = l.length - 1; 0 <= R; R--) {
        var k = (c.g = l[R]);
        w = Ir(k, f, !0, c) && w;
      }
    if (
      ((k = c.g = i), (w = Ir(k, f, !0, c) && w), (w = Ir(k, f, !1, c) && w), l)
    )
      for (R = 0; R < l.length; R++)
        ((k = c.g = l[R]), (w = Ir(k, f, !1, c) && w));
  }
  ((me.prototype.N = function () {
    if ((me.aa.N.call(this), this.i)) {
      var i = this.i,
        c;
      for (c in i.g) {
        for (var l = i.g[c], f = 0; f < l.length; f++) Er(l[f]);
        (delete i.g[c], i.h--);
      }
    }
    this.F = null;
  }),
    (me.prototype.K = function (i, c, l, f) {
      return this.i.add(String(i), c, !1, l, f);
    }),
    (me.prototype.L = function (i, c, l, f) {
      return this.i.add(String(i), c, !0, l, f);
    }));
  function Ir(i, c, l, f) {
    if (((c = i.i.g[String(c)]), !c)) return !0;
    c = c.concat();
    for (var w = !0, R = 0; R < c.length; ++R) {
      var k = c[R];
      if (k && !k.da && k.capture == l) {
        var Q = k.listener,
          le = k.ha || k.src;
        (k.fa && Bs(i.i, k), (w = Q.call(le, f) !== !1 && w));
      }
    }
    return w && !f.defaultPrevented;
  }
  function zo(i, c, l) {
    if (typeof i == 'function') l && (i = v(i, l));
    else if (i && typeof i.handleEvent == 'function') i = v(i.handleEvent, i);
    else throw Error('Invalid listener argument');
    return 2147483647 < Number(c) ? -1 : u.setTimeout(i, c || 0);
  }
  function Ho(i) {
    i.g = zo(() => {
      ((i.g = null), i.i && ((i.i = !1), Ho(i)));
    }, i.l);
    const c = i.h;
    ((i.h = null), i.m.apply(null, c));
  }
  class Zh extends st {
    constructor(c, l) {
      (super(),
        (this.m = c),
        (this.l = l),
        (this.h = null),
        (this.i = !1),
        (this.g = null));
    }
    j(c) {
      ((this.h = arguments), this.g ? (this.i = !0) : Ho(this));
    }
    N() {
      (super.N(),
        this.g &&
          (u.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null)));
    }
  }
  function Pn(i) {
    (st.call(this), (this.h = i), (this.g = {}));
  }
  b(Pn, st);
  var Wo = [];
  function Go(i) {
    (re(
      i.g,
      function (c, l) {
        this.g.hasOwnProperty(l) && zs(c);
      },
      i
    ),
      (i.g = {}));
  }
  ((Pn.prototype.N = function () {
    (Pn.aa.N.call(this), Go(this));
  }),
    (Pn.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented');
    }));
  var Gs = u.JSON.stringify,
    ed = u.JSON.parse,
    td = class {
      stringify(i) {
        return u.JSON.stringify(i, void 0);
      }
      parse(i) {
        return u.JSON.parse(i, void 0);
      }
    };
  function Ks() {}
  Ks.prototype.h = null;
  function Ko(i) {
    return i.h || (i.h = i.i());
  }
  function Qo() {}
  var Cn = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' };
  function Qs() {
    pe.call(this, 'd');
  }
  b(Qs, pe);
  function Js() {
    pe.call(this, 'c');
  }
  b(Js, pe);
  var Pt = {},
    Jo = null;
  function vr() {
    return (Jo = Jo || new me());
  }
  Pt.La = 'serverreachability';
  function Yo(i) {
    pe.call(this, Pt.La, i);
  }
  b(Yo, pe);
  function bn(i) {
    const c = vr();
    ve(c, new Yo(c));
  }
  Pt.STAT_EVENT = 'statevent';
  function Xo(i, c) {
    (pe.call(this, Pt.STAT_EVENT, i), (this.stat = c));
  }
  b(Xo, pe);
  function we(i) {
    const c = vr();
    ve(c, new Xo(c, i));
  }
  Pt.Ma = 'timingevent';
  function Zo(i, c) {
    (pe.call(this, Pt.Ma, i), (this.size = c));
  }
  b(Zo, pe);
  function kn(i, c) {
    if (typeof i != 'function')
      throw Error('Fn must not be null and must be a function');
    return u.setTimeout(function () {
      i();
    }, c);
  }
  function Vn() {
    this.g = !0;
  }
  Vn.prototype.xa = function () {
    this.g = !1;
  };
  function nd(i, c, l, f, w, R) {
    i.info(function () {
      if (i.g)
        if (R)
          for (var k = '', Q = R.split('&'), le = 0; le < Q.length; le++) {
            var G = Q[le].split('=');
            if (1 < G.length) {
              var ge = G[0];
              G = G[1];
              var _e = ge.split('_');
              k =
                2 <= _e.length && _e[1] == 'type'
                  ? k + (ge + '=' + G + '&')
                  : k + (ge + '=redacted&');
            }
          }
        else k = null;
      else k = R;
      return (
        'XMLHTTP REQ (' +
        f +
        ') [attempt ' +
        w +
        ']: ' +
        c +
        `
` +
        l +
        `
` +
        k
      );
    });
  }
  function rd(i, c, l, f, w, R, k) {
    i.info(function () {
      return (
        'XMLHTTP RESP (' +
        f +
        ') [ attempt ' +
        w +
        ']: ' +
        c +
        `
` +
        l +
        `
` +
        R +
        ' ' +
        k
      );
    });
  }
  function Ht(i, c, l, f) {
    i.info(function () {
      return 'XMLHTTP TEXT (' + c + '): ' + id(i, l) + (f ? ' ' + f : '');
    });
  }
  function sd(i, c) {
    i.info(function () {
      return 'TIMEOUT: ' + c;
    });
  }
  Vn.prototype.info = function () {};
  function id(i, c) {
    if (!i.g) return c;
    if (!c) return null;
    try {
      var l = JSON.parse(c);
      if (l) {
        for (i = 0; i < l.length; i++)
          if (Array.isArray(l[i])) {
            var f = l[i];
            if (!(2 > f.length)) {
              var w = f[1];
              if (Array.isArray(w) && !(1 > w.length)) {
                var R = w[0];
                if (R != 'noop' && R != 'stop' && R != 'close')
                  for (var k = 1; k < w.length; k++) w[k] = '';
              }
            }
          }
      }
      return Gs(l);
    } catch {
      return c;
    }
  }
  var wr = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    ea = {
      lb: 'complete',
      Hb: 'success',
      Ja: 'error',
      Ia: 'abort',
      zb: 'ready',
      Ab: 'readystatechange',
      TIMEOUT: 'timeout',
      vb: 'incrementaldata',
      yb: 'progress',
      ob: 'downloadprogress',
      Pb: 'uploadprogress',
    },
    Ys;
  function Ar() {}
  (b(Ar, Ks),
    (Ar.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (Ar.prototype.i = function () {
      return {};
    }),
    (Ys = new Ar()));
  function it(i, c, l, f) {
    ((this.j = i),
      (this.i = c),
      (this.l = l),
      (this.R = f || 1),
      (this.U = new Pn(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new ta()));
  }
  function ta() {
    ((this.i = null), (this.g = ''), (this.h = !1));
  }
  var na = {},
    Xs = {};
  function Zs(i, c, l) {
    ((i.L = 1), (i.v = Cr(We(c))), (i.m = l), (i.P = !0), ra(i, null));
  }
  function ra(i, c) {
    ((i.F = Date.now()), Rr(i), (i.A = We(i.v)));
    var l = i.A,
      f = i.R;
    (Array.isArray(f) || (f = [String(f)]),
      _a(l.i, 't', f),
      (i.C = 0),
      (l = i.j.J),
      (i.h = new ta()),
      (i.g = Ma(i.j, l ? c : null, !i.m)),
      0 < i.O && (i.M = new Zh(v(i.Y, i, i.g), i.O)),
      (c = i.U),
      (l = i.g),
      (f = i.ca));
    var w = 'readystatechange';
    Array.isArray(w) || (w && (Wo[0] = w.toString()), (w = Wo));
    for (var R = 0; R < w.length; R++) {
      var k = Bo(l, w[R], f || c.handleEvent, !1, c.h || c);
      if (!k) break;
      c.g[k.key] = k;
    }
    ((c = i.H ? m(i.H) : {}),
      i.m
        ? (i.u || (i.u = 'POST'),
          (c['Content-Type'] = 'application/x-www-form-urlencoded'),
          i.g.ea(i.A, i.u, i.m, c))
        : ((i.u = 'GET'), i.g.ea(i.A, i.u, null, c)),
      bn(),
      nd(i.i, i.u, i.A, i.l, i.R, i.m));
  }
  ((it.prototype.ca = function (i) {
    i = i.target;
    const c = this.M;
    c && Ge(i) == 3 ? c.j() : this.Y(i);
  }),
    (it.prototype.Y = function (i) {
      try {
        if (i == this.g)
          e: {
            const _e = Ge(this.g);
            var c = this.g.Ba();
            const Kt = this.g.Z();
            if (
              !(3 > _e) &&
              (_e != 3 || (this.g && (this.h.h || this.g.oa() || Aa(this.g))))
            ) {
              (this.J ||
                _e != 4 ||
                c == 7 ||
                (c == 8 || 0 >= Kt ? bn(3) : bn(2)),
                ei(this));
              var l = this.g.Z();
              this.X = l;
              t: if (sa(this)) {
                var f = Aa(this.g);
                i = '';
                var w = f.length,
                  R = Ge(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    (Ct(this), Nn(this));
                    var k = '';
                    break t;
                  }
                  this.h.i = new u.TextDecoder();
                }
                for (c = 0; c < w; c++)
                  ((this.h.h = !0),
                    (i += this.h.i.decode(f[c], {
                      stream: !(R && c == w - 1),
                    })));
                ((f.length = 0), (this.h.g += i), (this.C = 0), (k = this.h.g));
              } else k = this.g.oa();
              if (
                ((this.o = l == 200),
                rd(this.i, this.u, this.A, this.l, this.R, _e, l),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var Q,
                        le = this.g;
                      if (
                        (Q = le.g
                          ? le.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !U(Q)
                      ) {
                        var G = Q;
                        break t;
                      }
                    }
                    G = null;
                  }
                  if ((l = G))
                    (Ht(
                      this.i,
                      this.l,
                      l,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      ti(this, l));
                  else {
                    ((this.o = !1), (this.s = 3), we(12), Ct(this), Nn(this));
                    break e;
                  }
                }
                if (this.P) {
                  l = !0;
                  let Ne;
                  for (; !this.J && this.C < k.length; )
                    if (((Ne = od(this, k)), Ne == Xs)) {
                      (_e == 4 && ((this.s = 4), we(14), (l = !1)),
                        Ht(this.i, this.l, null, '[Incomplete Response]'));
                      break;
                    } else if (Ne == na) {
                      ((this.s = 4),
                        we(15),
                        Ht(this.i, this.l, k, '[Invalid Chunk]'),
                        (l = !1));
                      break;
                    } else (Ht(this.i, this.l, Ne, null), ti(this, Ne));
                  if (
                    (sa(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    _e != 4 ||
                      k.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), we(16), (l = !1)),
                    (this.o = this.o && l),
                    !l)
                  )
                    (Ht(this.i, this.l, k, '[Invalid Chunked Response]'),
                      Ct(this),
                      Nn(this));
                  else if (0 < k.length && !this.W) {
                    this.W = !0;
                    var ge = this.j;
                    ge.g == this &&
                      ge.ba &&
                      !ge.M &&
                      (ge.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          k.length
                      ),
                      ai(ge),
                      (ge.M = !0),
                      we(11));
                  }
                } else (Ht(this.i, this.l, k, null), ti(this, k));
                (_e == 4 && Ct(this),
                  this.o &&
                    !this.J &&
                    (_e == 4 ? Va(this.j, this) : ((this.o = !1), Rr(this))));
              } else
                (wd(this.g),
                  l == 400 && 0 < k.indexOf('Unknown SID')
                    ? ((this.s = 3), we(12))
                    : ((this.s = 0), we(13)),
                  Ct(this),
                  Nn(this));
            }
          }
      } catch {
      } finally {
      }
    }));
  function sa(i) {
    return i.g ? i.u == 'GET' && i.L != 2 && i.j.Ca : !1;
  }
  function od(i, c) {
    var l = i.C,
      f = c.indexOf(
        `
`,
        l
      );
    return f == -1
      ? Xs
      : ((l = Number(c.substring(l, f))),
        isNaN(l)
          ? na
          : ((f += 1),
            f + l > c.length
              ? Xs
              : ((c = c.slice(f, f + l)), (i.C = f + l), c)));
  }
  it.prototype.cancel = function () {
    ((this.J = !0), Ct(this));
  };
  function Rr(i) {
    ((i.S = Date.now() + i.I), ia(i, i.I));
  }
  function ia(i, c) {
    if (i.B != null) throw Error('WatchDog timer not null');
    i.B = kn(v(i.ba, i), c);
  }
  function ei(i) {
    i.B && (u.clearTimeout(i.B), (i.B = null));
  }
  it.prototype.ba = function () {
    this.B = null;
    const i = Date.now();
    0 <= i - this.S
      ? (sd(this.i, this.A),
        this.L != 2 && (bn(), we(17)),
        Ct(this),
        (this.s = 2),
        Nn(this))
      : ia(this, this.S - i);
  };
  function Nn(i) {
    i.j.G == 0 || i.J || Va(i.j, i);
  }
  function Ct(i) {
    ei(i);
    var c = i.M;
    (c && typeof c.ma == 'function' && c.ma(),
      (i.M = null),
      Go(i.U),
      i.g && ((c = i.g), (i.g = null), c.abort(), c.ma()));
  }
  function ti(i, c) {
    try {
      var l = i.j;
      if (l.G != 0 && (l.g == i || ni(l.h, i))) {
        if (!i.K && ni(l.h, i) && l.G == 3) {
          try {
            var f = l.Da.g.parse(c);
          } catch {
            f = null;
          }
          if (Array.isArray(f) && f.length == 3) {
            var w = f;
            if (w[0] == 0) {
              e: if (!l.u) {
                if (l.g)
                  if (l.g.F + 3e3 < i.F) (Or(l), Nr(l));
                  else break e;
                (oi(l), we(18));
              }
            } else
              ((l.za = w[1]),
                0 < l.za - l.T &&
                  37500 > w[2] &&
                  l.F &&
                  l.v == 0 &&
                  !l.C &&
                  (l.C = kn(v(l.Za, l), 6e3)));
            if (1 >= ca(l.h) && l.ca) {
              try {
                l.ca();
              } catch {}
              l.ca = void 0;
            }
          } else kt(l, 11);
        } else if (((i.K || l.g == i) && Or(l), !U(c)))
          for (w = l.Da.g.parse(c), c = 0; c < w.length; c++) {
            let G = w[c];
            if (((l.T = G[0]), (G = G[1]), l.G == 2))
              if (G[0] == 'c') {
                ((l.K = G[1]), (l.ia = G[2]));
                const ge = G[3];
                ge != null && ((l.la = ge), l.j.info('VER=' + l.la));
                const _e = G[4];
                _e != null && ((l.Aa = _e), l.j.info('SVER=' + l.Aa));
                const Kt = G[5];
                (Kt != null &&
                  typeof Kt == 'number' &&
                  0 < Kt &&
                  ((f = 1.5 * Kt),
                  (l.L = f),
                  l.j.info('backChannelRequestTimeoutMs_=' + f)),
                  (f = l));
                const Ne = i.g;
                if (Ne) {
                  const Lr = Ne.g
                    ? Ne.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null;
                  if (Lr) {
                    var R = f.h;
                    R.g ||
                      (Lr.indexOf('spdy') == -1 &&
                        Lr.indexOf('quic') == -1 &&
                        Lr.indexOf('h2') == -1) ||
                      ((R.j = R.l),
                      (R.g = new Set()),
                      R.h && (ri(R, R.h), (R.h = null)));
                  }
                  if (f.D) {
                    const ci = Ne.g
                      ? Ne.g.getResponseHeader('X-HTTP-Session-Id')
                      : null;
                    ci && ((f.ya = ci), Y(f.I, f.D, ci));
                  }
                }
                ((l.G = 3),
                  l.l && l.l.ua(),
                  l.ba &&
                    ((l.R = Date.now() - i.F),
                    l.j.info('Handshake RTT: ' + l.R + 'ms')),
                  (f = l));
                var k = i;
                if (((f.qa = Oa(f, f.J ? f.ia : null, f.W)), k.K)) {
                  ua(f.h, k);
                  var Q = k,
                    le = f.L;
                  (le && (Q.I = le), Q.B && (ei(Q), Rr(Q)), (f.g = k));
                } else ba(f);
                0 < l.i.length && Dr(l);
              } else (G[0] != 'stop' && G[0] != 'close') || kt(l, 7);
            else
              l.G == 3 &&
                (G[0] == 'stop' || G[0] == 'close'
                  ? G[0] == 'stop'
                    ? kt(l, 7)
                    : ii(l)
                  : G[0] != 'noop' && l.l && l.l.ta(G),
                (l.v = 0));
          }
      }
      bn(4);
    } catch {}
  }
  var ad = class {
    constructor(i, c) {
      ((this.g = i), (this.map = c));
    }
  };
  function oa(i) {
    ((this.l = i || 10),
      u.PerformanceNavigationTiming
        ? ((i = u.performance.getEntriesByType('navigation')),
          (i =
            0 < i.length &&
            (i[0].nextHopProtocol == 'hq' || i[0].nextHopProtocol == 'h2')))
        : (i = !!(
            u.chrome &&
            u.chrome.loadTimes &&
            u.chrome.loadTimes() &&
            u.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = i ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  function aa(i) {
    return i.h ? !0 : i.g ? i.g.size >= i.j : !1;
  }
  function ca(i) {
    return i.h ? 1 : i.g ? i.g.size : 0;
  }
  function ni(i, c) {
    return i.h ? i.h == c : i.g ? i.g.has(c) : !1;
  }
  function ri(i, c) {
    i.g ? i.g.add(c) : (i.h = c);
  }
  function ua(i, c) {
    i.h && i.h == c ? (i.h = null) : i.g && i.g.has(c) && i.g.delete(c);
  }
  oa.prototype.cancel = function () {
    if (((this.i = la(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && this.g.size !== 0) {
      for (const i of this.g.values()) i.cancel();
      this.g.clear();
    }
  };
  function la(i) {
    if (i.h != null) return i.i.concat(i.h.D);
    if (i.g != null && i.g.size !== 0) {
      let c = i.i;
      for (const l of i.g.values()) c = c.concat(l.D);
      return c;
    }
    return O(i.i);
  }
  function cd(i) {
    if (i.V && typeof i.V == 'function') return i.V();
    if (
      (typeof Map < 'u' && i instanceof Map) ||
      (typeof Set < 'u' && i instanceof Set)
    )
      return Array.from(i.values());
    if (typeof i == 'string') return i.split('');
    if (h(i)) {
      for (var c = [], l = i.length, f = 0; f < l; f++) c.push(i[f]);
      return c;
    }
    ((c = []), (l = 0));
    for (f in i) c[l++] = i[f];
    return c;
  }
  function ud(i) {
    if (i.na && typeof i.na == 'function') return i.na();
    if (!i.V || typeof i.V != 'function') {
      if (typeof Map < 'u' && i instanceof Map) return Array.from(i.keys());
      if (!(typeof Set < 'u' && i instanceof Set)) {
        if (h(i) || typeof i == 'string') {
          var c = [];
          i = i.length;
          for (var l = 0; l < i; l++) c.push(l);
          return c;
        }
        ((c = []), (l = 0));
        for (const f in i) c[l++] = f;
        return c;
      }
    }
  }
  function ha(i, c) {
    if (i.forEach && typeof i.forEach == 'function') i.forEach(c, void 0);
    else if (h(i) || typeof i == 'string')
      Array.prototype.forEach.call(i, c, void 0);
    else
      for (var l = ud(i), f = cd(i), w = f.length, R = 0; R < w; R++)
        c.call(void 0, f[R], l && l[R], i);
  }
  var da = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  );
  function ld(i, c) {
    if (i) {
      i = i.split('&');
      for (var l = 0; l < i.length; l++) {
        var f = i[l].indexOf('='),
          w = null;
        if (0 <= f) {
          var R = i[l].substring(0, f);
          w = i[l].substring(f + 1);
        } else R = i[l];
        c(R, w ? decodeURIComponent(w.replace(/\+/g, ' ')) : '');
      }
    }
  }
  function bt(i) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      i instanceof bt)
    ) {
      ((this.h = i.h),
        Sr(this, i.j),
        (this.o = i.o),
        (this.g = i.g),
        Pr(this, i.s),
        (this.l = i.l));
      var c = i.i,
        l = new Mn();
      ((l.i = c.i),
        c.g && ((l.g = new Map(c.g)), (l.h = c.h)),
        fa(this, l),
        (this.m = i.m));
    } else
      i && (c = String(i).match(da))
        ? ((this.h = !1),
          Sr(this, c[1] || '', !0),
          (this.o = Dn(c[2] || '')),
          (this.g = Dn(c[3] || '', !0)),
          Pr(this, c[4]),
          (this.l = Dn(c[5] || '', !0)),
          fa(this, c[6] || '', !0),
          (this.m = Dn(c[7] || '')))
        : ((this.h = !1), (this.i = new Mn(null, this.h)));
  }
  bt.prototype.toString = function () {
    var i = [],
      c = this.j;
    c && i.push(On(c, pa, !0), ':');
    var l = this.g;
    return (
      (l || c == 'file') &&
        (i.push('//'),
        (c = this.o) && i.push(On(c, pa, !0), '@'),
        i.push(
          encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (l = this.s),
        l != null && i.push(':', String(l))),
      (l = this.l) &&
        (this.g && l.charAt(0) != '/' && i.push('/'),
        i.push(On(l, l.charAt(0) == '/' ? fd : dd, !0))),
      (l = this.i.toString()) && i.push('?', l),
      (l = this.m) && i.push('#', On(l, md)),
      i.join('')
    );
  };
  function We(i) {
    return new bt(i);
  }
  function Sr(i, c, l) {
    ((i.j = l ? Dn(c, !0) : c), i.j && (i.j = i.j.replace(/:$/, '')));
  }
  function Pr(i, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || 0 > c))
        throw Error('Bad port number ' + c);
      i.s = c;
    } else i.s = null;
  }
  function fa(i, c, l) {
    c instanceof Mn
      ? ((i.i = c), gd(i.i, i.h))
      : (l || (c = On(c, pd)), (i.i = new Mn(c, i.h)));
  }
  function Y(i, c, l) {
    i.i.set(c, l);
  }
  function Cr(i) {
    return (
      Y(
        i,
        'zx',
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      i
    );
  }
  function Dn(i, c) {
    return i
      ? c
        ? decodeURI(i.replace(/%25/g, '%2525'))
        : decodeURIComponent(i)
      : '';
  }
  function On(i, c, l) {
    return typeof i == 'string'
      ? ((i = encodeURI(i).replace(c, hd)),
        l && (i = i.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        i)
      : null;
  }
  function hd(i) {
    return (
      (i = i.charCodeAt(0)),
      '%' + ((i >> 4) & 15).toString(16) + (i & 15).toString(16)
    );
  }
  var pa = /[#\/\?@]/g,
    dd = /[#\?:]/g,
    fd = /[#\?]/g,
    pd = /[#\?@]/g,
    md = /#/g;
  function Mn(i, c) {
    ((this.h = this.g = null), (this.i = i || null), (this.j = !!c));
  }
  function ot(i) {
    i.g ||
      ((i.g = new Map()),
      (i.h = 0),
      i.i &&
        ld(i.i, function (c, l) {
          i.add(decodeURIComponent(c.replace(/\+/g, ' ')), l);
        }));
  }
  ((n = Mn.prototype),
    (n.add = function (i, c) {
      (ot(this), (this.i = null), (i = Wt(this, i)));
      var l = this.g.get(i);
      return (l || this.g.set(i, (l = [])), l.push(c), (this.h += 1), this);
    }));
  function ma(i, c) {
    (ot(i),
      (c = Wt(i, c)),
      i.g.has(c) && ((i.i = null), (i.h -= i.g.get(c).length), i.g.delete(c)));
  }
  function ga(i, c) {
    return (ot(i), (c = Wt(i, c)), i.g.has(c));
  }
  ((n.forEach = function (i, c) {
    (ot(this),
      this.g.forEach(function (l, f) {
        l.forEach(function (w) {
          i.call(c, w, f, this);
        }, this);
      }, this));
  }),
    (n.na = function () {
      ot(this);
      const i = Array.from(this.g.values()),
        c = Array.from(this.g.keys()),
        l = [];
      for (let f = 0; f < c.length; f++) {
        const w = i[f];
        for (let R = 0; R < w.length; R++) l.push(c[f]);
      }
      return l;
    }),
    (n.V = function (i) {
      ot(this);
      let c = [];
      if (typeof i == 'string')
        ga(this, i) && (c = c.concat(this.g.get(Wt(this, i))));
      else {
        i = Array.from(this.g.values());
        for (let l = 0; l < i.length; l++) c = c.concat(i[l]);
      }
      return c;
    }),
    (n.set = function (i, c) {
      return (
        ot(this),
        (this.i = null),
        (i = Wt(this, i)),
        ga(this, i) && (this.h -= this.g.get(i).length),
        this.g.set(i, [c]),
        (this.h += 1),
        this
      );
    }),
    (n.get = function (i, c) {
      return i ? ((i = this.V(i)), 0 < i.length ? String(i[0]) : c) : c;
    }));
  function _a(i, c, l) {
    (ma(i, c),
      0 < l.length &&
        ((i.i = null), i.g.set(Wt(i, c), O(l)), (i.h += l.length)));
  }
  n.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return '';
    const i = [],
      c = Array.from(this.g.keys());
    for (var l = 0; l < c.length; l++) {
      var f = c[l];
      const R = encodeURIComponent(String(f)),
        k = this.V(f);
      for (f = 0; f < k.length; f++) {
        var w = R;
        (k[f] !== '' && (w += '=' + encodeURIComponent(String(k[f]))),
          i.push(w));
      }
    }
    return (this.i = i.join('&'));
  };
  function Wt(i, c) {
    return ((c = String(c)), i.j && (c = c.toLowerCase()), c);
  }
  function gd(i, c) {
    (c &&
      !i.j &&
      (ot(i),
      (i.i = null),
      i.g.forEach(function (l, f) {
        var w = f.toLowerCase();
        f != w && (ma(this, f), _a(this, w, l));
      }, i)),
      (i.j = c));
  }
  function _d(i, c) {
    const l = new Vn();
    if (u.Image) {
      const f = new Image();
      ((f.onload = C(at, l, 'TestLoadImage: loaded', !0, c, f)),
        (f.onerror = C(at, l, 'TestLoadImage: error', !1, c, f)),
        (f.onabort = C(at, l, 'TestLoadImage: abort', !1, c, f)),
        (f.ontimeout = C(at, l, 'TestLoadImage: timeout', !1, c, f)),
        u.setTimeout(function () {
          f.ontimeout && f.ontimeout();
        }, 1e4),
        (f.src = i));
    } else c(!1);
  }
  function yd(i, c) {
    const l = new Vn(),
      f = new AbortController(),
      w = setTimeout(() => {
        (f.abort(), at(l, 'TestPingServer: timeout', !1, c));
      }, 1e4);
    fetch(i, { signal: f.signal })
      .then((R) => {
        (clearTimeout(w),
          R.ok
            ? at(l, 'TestPingServer: ok', !0, c)
            : at(l, 'TestPingServer: server error', !1, c));
      })
      .catch(() => {
        (clearTimeout(w), at(l, 'TestPingServer: error', !1, c));
      });
  }
  function at(i, c, l, f, w) {
    try {
      (w &&
        ((w.onload = null),
        (w.onerror = null),
        (w.onabort = null),
        (w.ontimeout = null)),
        f(l));
    } catch {}
  }
  function Ed() {
    this.g = new td();
  }
  function Td(i, c, l) {
    const f = l || '';
    try {
      ha(i, function (w, R) {
        let k = w;
        (d(w) && (k = Gs(w)), c.push(f + R + '=' + encodeURIComponent(k)));
      });
    } catch (w) {
      throw (c.push(f + 'type=' + encodeURIComponent('_badmap')), w);
    }
  }
  function br(i) {
    ((this.l = i.Ub || null), (this.j = i.eb || !1));
  }
  (b(br, Ks),
    (br.prototype.g = function () {
      return new kr(this.l, this.j);
    }),
    (br.prototype.i = (function (i) {
      return function () {
        return i;
      };
    })({})));
  function kr(i, c) {
    (me.call(this),
      (this.D = i),
      (this.o = c),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ''),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = 'GET'),
      (this.A = ''),
      (this.g = !1),
      (this.v = this.j = this.l = null));
  }
  (b(kr, me),
    (n = kr.prototype),
    (n.open = function (i, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'));
      ((this.B = i), (this.A = c), (this.readyState = 1), xn(this));
    }),
    (n.send = function (i) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '));
      this.g = !0;
      const c = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      (i && (c.body = i),
        (this.D || u)
          .fetch(new Request(this.A, c))
          .then(this.Sa.bind(this), this.ga.bind(this)));
    }),
    (n.abort = function () {
      ((this.response = this.responseText = ''),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Ln(this)),
        (this.readyState = 0));
    }),
    (n.Sa = function (i) {
      if (
        this.g &&
        ((this.l = i),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = i.headers),
          (this.readyState = 2),
          xn(this)),
        this.g && ((this.readyState = 3), xn(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          i.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof u.ReadableStream < 'u' && 'body' in i) {
          if (((this.j = i.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ''),
              (this.v = new TextDecoder()));
          ya(this);
        } else i.text().then(this.Ra.bind(this), this.ga.bind(this));
    }));
  function ya(i) {
    i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i));
  }
  ((n.Pa = function (i) {
    if (this.g) {
      if (this.o && i.value) this.response.push(i.value);
      else if (!this.o) {
        var c = i.value ? i.value : new Uint8Array(0);
        (c = this.v.decode(c, { stream: !i.done })) &&
          (this.response = this.responseText += c);
      }
      (i.done ? Ln(this) : xn(this), this.readyState == 3 && ya(this));
    }
  }),
    (n.Ra = function (i) {
      this.g && ((this.response = this.responseText = i), Ln(this));
    }),
    (n.Qa = function (i) {
      this.g && ((this.response = i), Ln(this));
    }),
    (n.ga = function () {
      this.g && Ln(this);
    }));
  function Ln(i) {
    ((i.readyState = 4), (i.l = null), (i.j = null), (i.v = null), xn(i));
  }
  ((n.setRequestHeader = function (i, c) {
    this.u.append(i, c);
  }),
    (n.getResponseHeader = function (i) {
      return (this.h && this.h.get(i.toLowerCase())) || '';
    }),
    (n.getAllResponseHeaders = function () {
      if (!this.h) return '';
      const i = [],
        c = this.h.entries();
      for (var l = c.next(); !l.done; )
        ((l = l.value), i.push(l[0] + ': ' + l[1]), (l = c.next()));
      return i.join(`\r
`);
    }));
  function xn(i) {
    i.onreadystatechange && i.onreadystatechange.call(i);
  }
  Object.defineProperty(kr.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include';
    },
    set: function (i) {
      this.m = i ? 'include' : 'same-origin';
    },
  });
  function Ea(i) {
    let c = '';
    return (
      re(i, function (l, f) {
        ((c += f),
          (c += ':'),
          (c += l),
          (c += `\r
`));
      }),
      c
    );
  }
  function si(i, c, l) {
    e: {
      for (f in l) {
        var f = !1;
        break e;
      }
      f = !0;
    }
    f ||
      ((l = Ea(l)),
      typeof i == 'string'
        ? l != null && encodeURIComponent(String(l))
        : Y(i, c, l));
  }
  function te(i) {
    (me.call(this),
      (this.headers = new Map()),
      (this.o = i || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ''),
      (this.m = 0),
      (this.l = ''),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ''),
      (this.J = !1));
  }
  b(te, me);
  var Id = /^https?$/i,
    vd = ['POST', 'PUT'];
  ((n = te.prototype),
    (n.Ha = function (i) {
      this.J = i;
    }),
    (n.ea = function (i, c, l, f) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            i
        );
      ((c = c ? c.toUpperCase() : 'GET'),
        (this.D = i),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : Ys.g()),
        (this.v = this.o ? Ko(this.o) : Ko(Ys)),
        (this.g.onreadystatechange = v(this.Ea, this)));
      try {
        ((this.B = !0), this.g.open(c, String(i), !0), (this.B = !1));
      } catch (R) {
        Ta(this, R);
        return;
      }
      if (((i = l || ''), (l = new Map(this.headers)), f))
        if (Object.getPrototypeOf(f) === Object.prototype)
          for (var w in f) l.set(w, f[w]);
        else if (typeof f.keys == 'function' && typeof f.get == 'function')
          for (const R of f.keys()) l.set(R, f.get(R));
        else throw Error('Unknown input type for opt_headers: ' + String(f));
      ((f = Array.from(l.keys()).find(
        (R) => R.toLowerCase() == 'content-type'
      )),
        (w = u.FormData && i instanceof u.FormData),
        !(0 <= Array.prototype.indexOf.call(vd, c, void 0)) ||
          f ||
          w ||
          l.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          ));
      for (const [R, k] of l) this.g.setRequestHeader(R, k);
      (this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J));
      try {
        (wa(this), (this.u = !0), this.g.send(i), (this.u = !1));
      } catch (R) {
        Ta(this, R);
      }
    }));
  function Ta(i, c) {
    ((i.h = !1),
      i.g && ((i.j = !0), i.g.abort(), (i.j = !1)),
      (i.l = c),
      (i.m = 5),
      Ia(i),
      Vr(i));
  }
  function Ia(i) {
    i.A || ((i.A = !0), ve(i, 'complete'), ve(i, 'error'));
  }
  ((n.abort = function (i) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = i || 7),
      ve(this, 'complete'),
      ve(this, 'abort'),
      Vr(this));
  }),
    (n.N = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Vr(this, !0)),
        te.aa.N.call(this));
    }),
    (n.Ea = function () {
      this.s || (this.B || this.u || this.j ? va(this) : this.bb());
    }),
    (n.bb = function () {
      va(this);
    }));
  function va(i) {
    if (i.h && typeof a < 'u' && (!i.v[1] || Ge(i) != 4 || i.Z() != 2)) {
      if (i.u && Ge(i) == 4) zo(i.Ea, 0, i);
      else if ((ve(i, 'readystatechange'), Ge(i) == 4)) {
        i.h = !1;
        try {
          const k = i.Z();
          e: switch (k) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break e;
            default:
              c = !1;
          }
          var l;
          if (!(l = c)) {
            var f;
            if ((f = k === 0)) {
              var w = String(i.D).match(da)[1] || null;
              (!w &&
                u.self &&
                u.self.location &&
                (w = u.self.location.protocol.slice(0, -1)),
                (f = !Id.test(w ? w.toLowerCase() : '')));
            }
            l = f;
          }
          if (l) (ve(i, 'complete'), ve(i, 'success'));
          else {
            i.m = 6;
            try {
              var R = 2 < Ge(i) ? i.g.statusText : '';
            } catch {
              R = '';
            }
            ((i.l = R + ' [' + i.Z() + ']'), Ia(i));
          }
        } finally {
          Vr(i);
        }
      }
    }
  }
  function Vr(i, c) {
    if (i.g) {
      wa(i);
      const l = i.g,
        f = i.v[0] ? () => {} : null;
      ((i.g = null), (i.v = null), c || ve(i, 'ready'));
      try {
        l.onreadystatechange = f;
      } catch {}
    }
  }
  function wa(i) {
    i.I && (u.clearTimeout(i.I), (i.I = null));
  }
  n.isActive = function () {
    return !!this.g;
  };
  function Ge(i) {
    return i.g ? i.g.readyState : 0;
  }
  ((n.Z = function () {
    try {
      return 2 < Ge(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (n.oa = function () {
      try {
        return this.g ? this.g.responseText : '';
      } catch {
        return '';
      }
    }),
    (n.Oa = function (i) {
      if (this.g) {
        var c = this.g.responseText;
        return (i && c.indexOf(i) == 0 && (c = c.substring(i.length)), ed(c));
      }
    }));
  function Aa(i) {
    try {
      if (!i.g) return null;
      if ('response' in i.g) return i.g.response;
      switch (i.H) {
        case '':
        case 'text':
          return i.g.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in i.g)
            return i.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function wd(i) {
    const c = {};
    i = ((i.g && 2 <= Ge(i) && i.g.getAllResponseHeaders()) || '').split(`\r
`);
    for (let f = 0; f < i.length; f++) {
      if (U(i[f])) continue;
      var l = T(i[f]);
      const w = l[0];
      if (((l = l[1]), typeof l != 'string')) continue;
      l = l.trim();
      const R = c[w] || [];
      ((c[w] = R), R.push(l));
    }
    I(c, function (f) {
      return f.join(', ');
    });
  }
  ((n.Ba = function () {
    return this.m;
  }),
    (n.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l);
    }));
  function Un(i, c, l) {
    return (l && l.internalChannelParams && l.internalChannelParams[i]) || c;
  }
  function Ra(i) {
    ((this.Aa = 0),
      (this.i = []),
      (this.j = new Vn()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = Un('failFast', !1, i)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = Un('baseRetryDelayMs', 5e3, i)),
      (this.cb = Un('retryDelaySeedMs', 1e4, i)),
      (this.Wa = Un('forwardChannelMaxRetries', 2, i)),
      (this.wa = Un('forwardChannelRequestTimeoutMs', 2e4, i)),
      (this.pa = (i && i.xmlHttpFactory) || void 0),
      (this.Xa = (i && i.Tb) || void 0),
      (this.Ca = (i && i.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (i && i.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new oa(i && i.concurrentRequestLimit)),
      (this.Da = new Ed()),
      (this.P = (i && i.fastHandshake) || !1),
      (this.O = (i && i.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (i && i.Rb) || !1),
      i && i.xa && this.j.xa(),
      i && i.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && i && i.detectBufferingProxy) || !1),
      (this.ja = void 0),
      i &&
        i.longPollingTimeout &&
        0 < i.longPollingTimeout &&
        (this.ja = i.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null));
  }
  ((n = Ra.prototype),
    (n.la = 8),
    (n.G = 1),
    (n.connect = function (i, c, l, f) {
      (we(0),
        (this.W = i),
        (this.H = c || {}),
        l && f !== void 0 && ((this.H.OSID = l), (this.H.OAID = f)),
        (this.F = this.X),
        (this.I = Oa(this, null, this.W)),
        Dr(this));
    }));
  function ii(i) {
    if ((Sa(i), i.G == 3)) {
      var c = i.U++,
        l = We(i.I);
      if (
        (Y(l, 'SID', i.K),
        Y(l, 'RID', c),
        Y(l, 'TYPE', 'terminate'),
        Fn(i, l),
        (c = new it(i, i.j, c)),
        (c.L = 2),
        (c.v = Cr(We(l))),
        (l = !1),
        u.navigator && u.navigator.sendBeacon)
      )
        try {
          l = u.navigator.sendBeacon(c.v.toString(), '');
        } catch {}
      (!l && u.Image && ((new Image().src = c.v), (l = !0)),
        l || ((c.g = Ma(c.j, null)), c.g.ea(c.v)),
        (c.F = Date.now()),
        Rr(c));
    }
    Da(i);
  }
  function Nr(i) {
    i.g && (ai(i), i.g.cancel(), (i.g = null));
  }
  function Sa(i) {
    (Nr(i),
      i.u && (u.clearTimeout(i.u), (i.u = null)),
      Or(i),
      i.h.cancel(),
      i.s && (typeof i.s == 'number' && u.clearTimeout(i.s), (i.s = null)));
  }
  function Dr(i) {
    if (!aa(i.h) && !i.s) {
      i.s = !0;
      var c = i.Ga;
      (An || Fo(), Rn || (An(), (Rn = !0)), Fs.add(c, i), (i.B = 0));
    }
  }
  function Ad(i, c) {
    return ca(i.h) >= i.h.j - (i.s ? 1 : 0)
      ? !1
      : i.s
        ? ((i.i = c.D.concat(i.i)), !0)
        : i.G == 1 || i.G == 2 || i.B >= (i.Va ? 0 : i.Wa)
          ? !1
          : ((i.s = kn(v(i.Ga, i, c), Na(i, i.B))), i.B++, !0);
  }
  n.Ga = function (i) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!i) {
          ((this.U = Math.floor(1e5 * Math.random())), (i = this.U++));
          const w = new it(this, this.j, i);
          let R = this.o;
          if (
            (this.S && (R ? ((R = m(R)), E(R, this.S)) : (R = this.S)),
            this.m !== null || this.O || ((w.H = R), (R = null)),
            this.P)
          )
            e: {
              for (var c = 0, l = 0; l < this.i.length; l++) {
                t: {
                  var f = this.i[l];
                  if (
                    '__data__' in f.map &&
                    ((f = f.map.__data__), typeof f == 'string')
                  ) {
                    f = f.length;
                    break t;
                  }
                  f = void 0;
                }
                if (f === void 0) break;
                if (((c += f), 4096 < c)) {
                  c = l;
                  break e;
                }
                if (c === 4096 || l === this.i.length - 1) {
                  c = l + 1;
                  break e;
                }
              }
              c = 1e3;
            }
          else c = 1e3;
          ((c = Ca(this, w, c)),
            (l = We(this.I)),
            Y(l, 'RID', i),
            Y(l, 'CVER', 22),
            this.D && Y(l, 'X-HTTP-Session-Id', this.D),
            Fn(this, l),
            R &&
              (this.O
                ? (c = 'headers=' + encodeURIComponent(String(Ea(R))) + '&' + c)
                : this.m && si(l, this.m, R)),
            ri(this.h, w),
            this.Ua && Y(l, 'TYPE', 'init'),
            this.P
              ? (Y(l, '$req', c),
                Y(l, 'SID', 'null'),
                (w.T = !0),
                Zs(w, l, null))
              : Zs(w, l, c),
            (this.G = 2));
        }
      } else
        this.G == 3 &&
          (i ? Pa(this, i) : this.i.length == 0 || aa(this.h) || Pa(this));
  };
  function Pa(i, c) {
    var l;
    c ? (l = c.l) : (l = i.U++);
    const f = We(i.I);
    (Y(f, 'SID', i.K),
      Y(f, 'RID', l),
      Y(f, 'AID', i.T),
      Fn(i, f),
      i.m && i.o && si(f, i.m, i.o),
      (l = new it(i, i.j, l, i.B + 1)),
      i.m === null && (l.H = i.o),
      c && (i.i = c.D.concat(i.i)),
      (c = Ca(i, l, 1e3)),
      (l.I = Math.round(0.5 * i.wa) + Math.round(0.5 * i.wa * Math.random())),
      ri(i.h, l),
      Zs(l, f, c));
  }
  function Fn(i, c) {
    (i.H &&
      re(i.H, function (l, f) {
        Y(c, f, l);
      }),
      i.l &&
        ha({}, function (l, f) {
          Y(c, f, l);
        }));
  }
  function Ca(i, c, l) {
    l = Math.min(i.i.length, l);
    var f = i.l ? v(i.l.Na, i.l, i) : null;
    e: {
      var w = i.i;
      let R = -1;
      for (;;) {
        const k = ['count=' + l];
        R == -1
          ? 0 < l
            ? ((R = w[0].g), k.push('ofs=' + R))
            : (R = 0)
          : k.push('ofs=' + R);
        let Q = !0;
        for (let le = 0; le < l; le++) {
          let G = w[le].g;
          const ge = w[le].map;
          if (((G -= R), 0 > G)) ((R = Math.max(0, w[le].g - 100)), (Q = !1));
          else
            try {
              Td(ge, k, 'req' + G + '_');
            } catch {
              f && f(ge);
            }
        }
        if (Q) {
          f = k.join('&');
          break e;
        }
      }
    }
    return ((i = i.i.splice(0, l)), (c.D = i), f);
  }
  function ba(i) {
    if (!i.g && !i.u) {
      i.Y = 1;
      var c = i.Fa;
      (An || Fo(), Rn || (An(), (Rn = !0)), Fs.add(c, i), (i.v = 0));
    }
  }
  function oi(i) {
    return i.g || i.u || 3 <= i.v
      ? !1
      : (i.Y++, (i.u = kn(v(i.Fa, i), Na(i, i.v))), i.v++, !0);
  }
  ((n.Fa = function () {
    if (
      ((this.u = null),
      ka(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var i = 2 * this.R;
      (this.j.info('BP detection timer enabled: ' + i),
        (this.A = kn(v(this.ab, this), i)));
    }
  }),
    (n.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        we(10),
        Nr(this),
        ka(this));
    }));
  function ai(i) {
    i.A != null && (u.clearTimeout(i.A), (i.A = null));
  }
  function ka(i) {
    ((i.g = new it(i, i.j, 'rpc', i.Y)),
      i.m === null && (i.g.H = i.o),
      (i.g.O = 0));
    var c = We(i.qa);
    (Y(c, 'RID', 'rpc'),
      Y(c, 'SID', i.K),
      Y(c, 'AID', i.T),
      Y(c, 'CI', i.F ? '0' : '1'),
      !i.F && i.ja && Y(c, 'TO', i.ja),
      Y(c, 'TYPE', 'xmlhttp'),
      Fn(i, c),
      i.m && i.o && si(c, i.m, i.o),
      i.L && (i.g.I = i.L));
    var l = i.g;
    ((i = i.ia),
      (l.L = 1),
      (l.v = Cr(We(c))),
      (l.m = null),
      (l.P = !0),
      ra(l, i));
  }
  n.Za = function () {
    this.C != null && ((this.C = null), Nr(this), oi(this), we(19));
  };
  function Or(i) {
    i.C != null && (u.clearTimeout(i.C), (i.C = null));
  }
  function Va(i, c) {
    var l = null;
    if (i.g == c) {
      (Or(i), ai(i), (i.g = null));
      var f = 2;
    } else if (ni(i.h, c)) ((l = c.D), ua(i.h, c), (f = 1));
    else return;
    if (i.G != 0) {
      if (c.o)
        if (f == 1) {
          ((l = c.m ? c.m.length : 0), (c = Date.now() - c.F));
          var w = i.B;
          ((f = vr()), ve(f, new Zo(f, l)), Dr(i));
        } else ba(i);
      else if (
        ((w = c.s),
        w == 3 ||
          (w == 0 && 0 < c.X) ||
          !((f == 1 && Ad(i, c)) || (f == 2 && oi(i))))
      )
        switch ((l && 0 < l.length && ((c = i.h), (c.i = c.i.concat(l))), w)) {
          case 1:
            kt(i, 5);
            break;
          case 4:
            kt(i, 10);
            break;
          case 3:
            kt(i, 6);
            break;
          default:
            kt(i, 2);
        }
    }
  }
  function Na(i, c) {
    let l = i.Ta + Math.floor(Math.random() * i.cb);
    return (i.isActive() || (l *= 2), l * c);
  }
  function kt(i, c) {
    if ((i.j.info('Error code ' + c), c == 2)) {
      var l = v(i.fb, i),
        f = i.Xa;
      const w = !f;
      ((f = new bt(f || '//www.google.com/images/cleardot.gif')),
        (u.location && u.location.protocol == 'http') || Sr(f, 'https'),
        Cr(f),
        w ? _d(f.toString(), l) : yd(f.toString(), l));
    } else we(2);
    ((i.G = 0), i.l && i.l.sa(c), Da(i), Sa(i));
  }
  n.fb = function (i) {
    i
      ? (this.j.info('Successfully pinged google.com'), we(2))
      : (this.j.info('Failed to ping google.com'), we(1));
  };
  function Da(i) {
    if (((i.G = 0), (i.ka = []), i.l)) {
      const c = la(i.h);
      ((c.length != 0 || i.i.length != 0) &&
        (V(i.ka, c),
        V(i.ka, i.i),
        (i.h.i.length = 0),
        O(i.i),
        (i.i.length = 0)),
        i.l.ra());
    }
  }
  function Oa(i, c, l) {
    var f = l instanceof bt ? We(l) : new bt(l);
    if (f.g != '') (c && (f.g = c + '.' + f.g), Pr(f, f.s));
    else {
      var w = u.location;
      ((f = w.protocol),
        (c = c ? c + '.' + w.hostname : w.hostname),
        (w = +w.port));
      var R = new bt(null);
      (f && Sr(R, f), c && (R.g = c), w && Pr(R, w), l && (R.l = l), (f = R));
    }
    return (
      (l = i.D),
      (c = i.ya),
      l && c && Y(f, l, c),
      Y(f, 'VER', i.la),
      Fn(i, f),
      f
    );
  }
  function Ma(i, c, l) {
    if (c && !i.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (c = i.Ca && !i.pa ? new te(new br({ eb: l })) : new te(i.pa)),
      c.Ha(i.J),
      c
    );
  }
  n.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function La() {}
  ((n = La.prototype),
    (n.ua = function () {}),
    (n.ta = function () {}),
    (n.sa = function () {}),
    (n.ra = function () {}),
    (n.isActive = function () {
      return !0;
    }),
    (n.Na = function () {}));
  function Mr() {}
  Mr.prototype.g = function (i, c) {
    return new Pe(i, c);
  };
  function Pe(i, c) {
    (me.call(this),
      (this.g = new Ra(c)),
      (this.l = i),
      (this.h = (c && c.messageUrlParams) || null),
      (i = (c && c.messageHeaders) || null),
      c &&
        c.clientProtocolHeaderRequired &&
        (i
          ? (i['X-Client-Protocol'] = 'webchannel')
          : (i = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = i),
      (i = (c && c.initMessageHeaders) || null),
      c &&
        c.messageContentType &&
        (i
          ? (i['X-WebChannel-Content-Type'] = c.messageContentType)
          : (i = { 'X-WebChannel-Content-Type': c.messageContentType })),
      c &&
        c.va &&
        (i
          ? (i['X-WebChannel-Client-Profile'] = c.va)
          : (i = { 'X-WebChannel-Client-Profile': c.va })),
      (this.g.S = i),
      (i = c && c.Sb) && !U(i) && (this.g.m = i),
      (this.v = (c && c.supportsCrossDomainXhr) || !1),
      (this.u = (c && c.sendRawJson) || !1),
      (c = c && c.httpSessionIdParam) &&
        !U(c) &&
        ((this.g.D = c),
        (i = this.h),
        i !== null && c in i && ((i = this.h), c in i && delete i[c])),
      (this.j = new Gt(this)));
  }
  (b(Pe, me),
    (Pe.prototype.m = function () {
      ((this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0));
    }),
    (Pe.prototype.close = function () {
      ii(this.g);
    }),
    (Pe.prototype.o = function (i) {
      var c = this.g;
      if (typeof i == 'string') {
        var l = {};
        ((l.__data__ = i), (i = l));
      } else this.u && ((l = {}), (l.__data__ = Gs(i)), (i = l));
      (c.i.push(new ad(c.Ya++, i)), c.G == 3 && Dr(c));
    }),
    (Pe.prototype.N = function () {
      ((this.g.l = null),
        delete this.j,
        ii(this.g),
        delete this.g,
        Pe.aa.N.call(this));
    }));
  function xa(i) {
    (Qs.call(this),
      i.__headers__ &&
        ((this.headers = i.__headers__),
        (this.statusCode = i.__status__),
        delete i.__headers__,
        delete i.__status__));
    var c = i.__sm__;
    if (c) {
      e: {
        for (const l in c) {
          i = l;
          break e;
        }
        i = void 0;
      }
      ((this.i = i) &&
        ((i = this.i), (c = c !== null && i in c ? c[i] : void 0)),
        (this.data = c));
    } else this.data = i;
  }
  b(xa, Qs);
  function Ua() {
    (Js.call(this), (this.status = 1));
  }
  b(Ua, Js);
  function Gt(i) {
    this.g = i;
  }
  (b(Gt, La),
    (Gt.prototype.ua = function () {
      ve(this.g, 'a');
    }),
    (Gt.prototype.ta = function (i) {
      ve(this.g, new xa(i));
    }),
    (Gt.prototype.sa = function (i) {
      ve(this.g, new Ua());
    }),
    (Gt.prototype.ra = function () {
      ve(this.g, 'b');
    }),
    (Mr.prototype.createWebChannel = Mr.prototype.g),
    (Pe.prototype.send = Pe.prototype.o),
    (Pe.prototype.open = Pe.prototype.m),
    (Pe.prototype.close = Pe.prototype.close),
    (xu = function () {
      return new Mr();
    }),
    (Lu = function () {
      return vr();
    }),
    (Mu = Pt),
    (Ci = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (wr.NO_ERROR = 0),
    (wr.TIMEOUT = 8),
    (wr.HTTP_ERROR = 6),
    (zr = wr),
    (ea.COMPLETE = 'complete'),
    (Ou = ea),
    (Qo.EventType = Cn),
    (Cn.OPEN = 'a'),
    (Cn.CLOSE = 'b'),
    (Cn.ERROR = 'c'),
    (Cn.MESSAGE = 'd'),
    (me.prototype.listen = me.prototype.K),
    (jn = Qo),
    (te.prototype.listenOnce = te.prototype.L),
    (te.prototype.getLastError = te.prototype.Ka),
    (te.prototype.getLastErrorCode = te.prototype.Ba),
    (te.prototype.getStatus = te.prototype.Z),
    (te.prototype.getResponseJson = te.prototype.Oa),
    (te.prototype.getResponseText = te.prototype.oa),
    (te.prototype.send = te.prototype.ea),
    (te.prototype.setWithCredentials = te.prototype.Ha),
    (Du = te));
}).apply(
  typeof xr < 'u'
    ? xr
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {}
);
const Za = '@firebase/firestore',
  ec = '4.9.1';
/**
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
 */ class Ee {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
((Ee.UNAUTHENTICATED = new Ee(null)),
  (Ee.GOOGLE_CREDENTIALS = new Ee('google-credentials-uid')),
  (Ee.FIRST_PARTY = new Ee('first-party-uid')),
  (Ee.MOCK_USER = new Ee('mock-user')));
/**
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
 */ let _n = '12.2.0';
/**
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
 */ const Lt = new Qi('@firebase/firestore');
function Qt() {
  return Lt.logLevel;
}
function N(n, ...e) {
  if (Lt.logLevel <= $.DEBUG) {
    const t = e.map(Xi);
    Lt.debug(`Firestore (${_n}): ${n}`, ...t);
  }
}
function et(n, ...e) {
  if (Lt.logLevel <= $.ERROR) {
    const t = e.map(Xi);
    Lt.error(`Firestore (${_n}): ${n}`, ...t);
  }
}
function un(n, ...e) {
  if (Lt.logLevel <= $.WARN) {
    const t = e.map(Xi);
    Lt.warn(`Firestore (${_n}): ${n}`, ...t);
  }
}
function Xi(n) {
  if (typeof n == 'string') return n;
  try {
    /**
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
     */ return (function (t) {
      return JSON.stringify(t);
    })(n);
  } catch {
    return n;
  }
}
/**
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
 */ function x(n, e, t) {
  let r = 'Unexpected state';
  (typeof e == 'string' ? (r = e) : (t = e), Uu(n, r, t));
}
function Uu(n, e, t) {
  let r = `FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;
  if (t !== void 0)
    try {
      r += ' CONTEXT: ' + JSON.stringify(t);
    } catch {
      r += ' CONTEXT: ' + t;
    }
  throw (et(r), new Error(r));
}
function K(n, e, t, r) {
  let s = 'Unexpected state';
  (typeof t == 'string' ? (s = t) : (r = t), n || Uu(e, s, r));
}
function B(n, e) {
  return n;
}
/**
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
 */ const S = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
};
class D extends rt {
  constructor(e, t) {
    (super(e, t),
      (this.code = e),
      (this.message = t),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`));
  }
}
/**
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
 */ class _t {
  constructor() {
    this.promise = new Promise((e, t) => {
      ((this.resolve = e), (this.reject = t));
    });
  }
}
/**
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
 */ class Fu {
  constructor(e, t) {
    ((this.user = t),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`));
  }
}
class yp {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, t) {
    e.enqueueRetryable(() => t(Ee.UNAUTHENTICATED));
  }
  shutdown() {}
}
class Ep {
  constructor(e) {
    ((this.token = e), (this.changeListener = null));
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, t) {
    ((this.changeListener = t), e.enqueueRetryable(() => t(this.token.user)));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Tp {
  constructor(e) {
    ((this.t = e),
      (this.currentUser = Ee.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null));
  }
  start(e, t) {
    K(this.o === void 0, 42304);
    let r = this.i;
    const s = (h) => (this.i !== r ? ((r = this.i), t(h)) : Promise.resolve());
    let o = new _t();
    this.o = () => {
      (this.i++,
        (this.currentUser = this.u()),
        o.resolve(),
        (o = new _t()),
        e.enqueueRetryable(() => s(this.currentUser)));
    };
    const a = () => {
        const h = o;
        e.enqueueRetryable(async () => {
          (await h.promise, await s(this.currentUser));
        });
      },
      u = (h) => {
        (N('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = h),
          this.o && (this.auth.addAuthTokenListener(this.o), a()));
      };
    (this.t.onInit((h) => u(h)),
      setTimeout(() => {
        if (!this.auth) {
          const h = this.t.getImmediate({ optional: !0 });
          h
            ? u(h)
            : (N('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              o.resolve(),
              (o = new _t()));
        }
      }, 0),
      a());
  }
  getToken() {
    const e = this.i,
      t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(t)
            .then((r) =>
              this.i !== e
                ? (N(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : r
                  ? (K(typeof r.accessToken == 'string', 31837, { l: r }),
                    new Fu(r.accessToken, this.currentUser))
                  : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0));
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return (K(e === null || typeof e == 'string', 2055, { h: e }), new Ee(e));
  }
}
class Ip {
  constructor(e, t, r) {
    ((this.P = e),
      (this.T = t),
      (this.I = r),
      (this.type = 'FirstParty'),
      (this.user = Ee.FIRST_PARTY),
      (this.A = new Map()));
  }
  R() {
    return this.I ? this.I() : null;
  }
  get headers() {
    this.A.set('X-Goog-AuthUser', this.P);
    const e = this.R();
    return (
      e && this.A.set('Authorization', e),
      this.T && this.A.set('X-Goog-Iam-Authorization-Token', this.T),
      this.A
    );
  }
}
class vp {
  constructor(e, t, r) {
    ((this.P = e), (this.T = t), (this.I = r));
  }
  getToken() {
    return Promise.resolve(new Ip(this.P, this.T, this.I));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(Ee.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class tc {
  constructor(e) {
    ((this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value));
  }
}
class wp {
  constructor(e, t) {
    ((this.V = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.m = null),
      (this.p = null),
      be(e) && e.settings.appCheckToken && (this.p = e.settings.appCheckToken));
  }
  start(e, t) {
    K(this.o === void 0, 3512);
    const r = (o) => {
      o.error != null &&
        N(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`
        );
      const a = o.token !== this.m;
      return (
        (this.m = o.token),
        N(
          'FirebaseAppCheckTokenProvider',
          `Received ${a ? 'new' : 'existing'} token.`
        ),
        a ? t(o.token) : Promise.resolve()
      );
    };
    this.o = (o) => {
      e.enqueueRetryable(() => r(o));
    };
    const s = (o) => {
      (N('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = o),
        this.o && this.appCheck.addTokenListener(this.o));
    };
    (this.V.onInit((o) => s(o)),
      setTimeout(() => {
        if (!this.appCheck) {
          const o = this.V.getImmediate({ optional: !0 });
          o
            ? s(o)
            : N('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
        }
      }, 0));
  }
  getToken() {
    if (this.p) return Promise.resolve(new tc(this.p));
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((t) =>
              t
                ? (K(typeof t.token == 'string', 44558, { tokenResult: t }),
                  (this.m = t.token),
                  new tc(t.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0));
  }
}
/**
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
 */ function Ap(n) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    t = new Uint8Array(n);
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(t);
  else for (let r = 0; r < n; r++) t[r] = Math.floor(256 * Math.random());
  return t;
}
/**
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
 */ class Zi {
  static newId() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      t = 62 * Math.floor(4.129032258064516);
    let r = '';
    for (; r.length < 20; ) {
      const s = Ap(40);
      for (let o = 0; o < s.length; ++o)
        r.length < 20 && s[o] < t && (r += e.charAt(s[o] % 62));
    }
    return r;
  }
}
function z(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function bi(n, e) {
  const t = Math.min(n.length, e.length);
  for (let r = 0; r < t; r++) {
    const s = n.charAt(r),
      o = e.charAt(r);
    if (s !== o) return pi(s) === pi(o) ? z(s, o) : pi(s) ? 1 : -1;
  }
  return z(n.length, e.length);
}
const Rp = 55296,
  Sp = 57343;
function pi(n) {
  const e = n.charCodeAt(0);
  return e >= Rp && e <= Sp;
}
function ln(n, e, t) {
  return n.length === e.length && n.every((r, s) => t(r, e[s]));
}
/**
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
 */ const nc = '__name__';
class xe {
  constructor(e, t, r) {
    (t === void 0
      ? (t = 0)
      : t > e.length && x(637, { offset: t, range: e.length }),
      r === void 0
        ? (r = e.length - t)
        : r > e.length - t && x(1746, { length: r, range: e.length - t }),
      (this.segments = e),
      (this.offset = t),
      (this.len = r));
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return xe.comparator(this, e) === 0;
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof xe
        ? e.forEach((r) => {
            t.push(r);
          })
        : t.push(e),
      this.construct(t)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let t = 0; t < this.length; t++)
      if (this.get(t) !== e.get(t)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let t = 0; t < this.length; t++)
      if (this.get(t) !== e.get(t)) return !1;
    return !0;
  }
  forEach(e) {
    for (let t = this.offset, r = this.limit(); t < r; t++) e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, t) {
    const r = Math.min(e.length, t.length);
    for (let s = 0; s < r; s++) {
      const o = xe.compareSegments(e.get(s), t.get(s));
      if (o !== 0) return o;
    }
    return z(e.length, t.length);
  }
  static compareSegments(e, t) {
    const r = xe.isNumericId(e),
      s = xe.isNumericId(t);
    return r && !s
      ? -1
      : !r && s
        ? 1
        : r && s
          ? xe.extractNumericId(e).compare(xe.extractNumericId(t))
          : bi(e, t);
  }
  static isNumericId(e) {
    return e.startsWith('__id') && e.endsWith('__');
  }
  static extractNumericId(e) {
    return gt.fromString(e.substring(4, e.length - 2));
  }
}
class J extends xe {
  construct(e, t, r) {
    return new J(e, t, r);
  }
  canonicalString() {
    return this.toArray().join('/');
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/');
  }
  static fromString(...e) {
    const t = [];
    for (const r of e) {
      if (r.indexOf('//') >= 0)
        throw new D(
          S.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      t.push(...r.split('/').filter((s) => s.length > 0));
    }
    return new J(t);
  }
  static emptyPath() {
    return new J([]);
  }
}
const Pp = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class de extends xe {
  construct(e, t, r) {
    return new de(e, t, r);
  }
  static isValidIdentifier(e) {
    return Pp.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          de.isValidIdentifier(e) || (e = '`' + e + '`'),
          e
        )
      )
      .join('.');
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === nc;
  }
  static keyField() {
    return new de([nc]);
  }
  static fromServerFormat(e) {
    const t = [];
    let r = '',
      s = 0;
    const o = () => {
      if (r.length === 0)
        throw new D(
          S.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      (t.push(r), (r = ''));
    };
    let a = !1;
    for (; s < e.length; ) {
      const u = e[s];
      if (u === '\\') {
        if (s + 1 === e.length)
          throw new D(
            S.INVALID_ARGUMENT,
            'Path has trailing escape character: ' + e
          );
        const h = e[s + 1];
        if (h !== '\\' && h !== '.' && h !== '`')
          throw new D(
            S.INVALID_ARGUMENT,
            'Path has invalid escape sequence: ' + e
          );
        ((r += h), (s += 2));
      } else
        u === '`'
          ? ((a = !a), s++)
          : u !== '.' || a
            ? ((r += u), s++)
            : (o(), s++);
    }
    if ((o(), a))
      throw new D(S.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
    return new de(t);
  }
  static emptyPath() {
    return new de([]);
  }
}
/**
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
 */ class M {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new M(J.fromString(e));
  }
  static fromName(e) {
    return new M(J.fromString(e).popFirst(5));
  }
  static empty() {
    return new M(J.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && J.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return J.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new M(new J(e.slice()));
  }
}
/**
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
 */ function Bu(n, e, t) {
  if (!t)
    throw new D(
      S.INVALID_ARGUMENT,
      `Function ${n}() cannot be called with an empty ${e}.`
    );
}
function Cp(n, e, t, r) {
  if (e === !0 && r === !0)
    throw new D(S.INVALID_ARGUMENT, `${n} and ${t} cannot be used together.`);
}
function rc(n) {
  if (!M.isDocumentKey(n))
    throw new D(
      S.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`
    );
}
function sc(n) {
  if (M.isDocumentKey(n))
    throw new D(
      S.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`
    );
}
function qu(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    (Object.getPrototypeOf(n) === Object.prototype ||
      Object.getPrototypeOf(n) === null)
  );
}
function vs(n) {
  if (n === void 0) return 'undefined';
  if (n === null) return 'null';
  if (typeof n == 'string')
    return (
      n.length > 20 && (n = `${n.substring(0, 20)}...`),
      JSON.stringify(n)
    );
  if (typeof n == 'number' || typeof n == 'boolean') return '' + n;
  if (typeof n == 'object') {
    if (n instanceof Array) return 'an array';
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(n);
      return e ? `a custom ${e} object` : 'an object';
    }
  }
  return typeof n == 'function' ? 'a function' : x(12329, { type: typeof n });
}
function ns(n, e) {
  if (('_delegate' in n && (n = n._delegate), !(n instanceof e))) {
    if (e.name === n.constructor.name)
      throw new D(
        S.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const t = vs(n);
      throw new D(
        S.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${t}`
      );
    }
  }
  return n;
}
/**
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
 */ function oe(n, e) {
  const t = { typeString: n };
  return (e && (t.value = e), t);
}
function cr(n, e) {
  if (!qu(n)) throw new D(S.INVALID_ARGUMENT, 'JSON must be an object');
  let t;
  for (const r in e)
    if (e[r]) {
      const s = e[r].typeString,
        o = 'value' in e[r] ? { value: e[r].value } : void 0;
      if (!(r in n)) {
        t = `JSON missing required field: '${r}'`;
        break;
      }
      const a = n[r];
      if (s && typeof a !== s) {
        t = `JSON field '${r}' must be a ${s}.`;
        break;
      }
      if (o !== void 0 && a !== o.value) {
        t = `Expected '${r}' field to equal '${o.value}'`;
        break;
      }
    }
  if (t) throw new D(S.INVALID_ARGUMENT, t);
  return !0;
}
/**
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
 */ const ic = -62135596800,
  oc = 1e6;
class X {
  static now() {
    return X.fromMillis(Date.now());
  }
  static fromDate(e) {
    return X.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const t = Math.floor(e / 1e3),
      r = Math.floor((e - 1e3 * t) * oc);
    return new X(t, r);
  }
  constructor(e, t) {
    if (((this.seconds = e), (this.nanoseconds = t), t < 0))
      throw new D(
        S.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + t
      );
    if (t >= 1e9)
      throw new D(
        S.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + t
      );
    if (e < ic)
      throw new D(S.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
    if (e >= 253402300800)
      throw new D(S.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / oc;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? z(this.nanoseconds, e.nanoseconds)
      : z(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    );
  }
  toJSON() {
    return {
      type: X._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds,
    };
  }
  static fromJSON(e) {
    if (cr(e, X._jsonSchema)) return new X(e.seconds, e.nanoseconds);
  }
  valueOf() {
    const e = this.seconds - ic;
    return (
      String(e).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
    );
  }
}
((X._jsonSchemaVersion = 'firestore/timestamp/1.0'),
  (X._jsonSchema = {
    type: oe('string', X._jsonSchemaVersion),
    seconds: oe('number'),
    nanoseconds: oe('number'),
  }));
/**
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
 */ class F {
  static fromTimestamp(e) {
    return new F(e);
  }
  static min() {
    return new F(new X(0, 0));
  }
  static max() {
    return new F(new X(253402300799, 999999999));
  }
  constructor(e) {
    this.timestamp = e;
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')';
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
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
 */ const Xn = -1;
function bp(n, e) {
  const t = n.toTimestamp().seconds,
    r = n.toTimestamp().nanoseconds + 1,
    s = F.fromTimestamp(r === 1e9 ? new X(t + 1, 0) : new X(t, r));
  return new Et(s, M.empty(), e);
}
function kp(n) {
  return new Et(n.readTime, n.key, Xn);
}
class Et {
  constructor(e, t, r) {
    ((this.readTime = e), (this.documentKey = t), (this.largestBatchId = r));
  }
  static min() {
    return new Et(F.min(), M.empty(), Xn);
  }
  static max() {
    return new Et(F.max(), M.empty(), Xn);
  }
}
function Vp(n, e) {
  let t = n.readTime.compareTo(e.readTime);
  return t !== 0
    ? t
    : ((t = M.comparator(n.documentKey, e.documentKey)),
      t !== 0 ? t : z(n.largestBatchId, e.largestBatchId));
}
/**
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
 */ const Np =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class Dp {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
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
 */ async function yn(n) {
  if (n.code !== S.FAILED_PRECONDITION || n.message !== Np) throw n;
  N('LocalStore', 'Unexpectedly lost primary lease');
}
/**
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
 */ class P {
  constructor(e) {
    ((this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (t) => {
          ((this.isDone = !0),
            (this.result = t),
            this.nextCallback && this.nextCallback(t));
        },
        (t) => {
          ((this.isDone = !0),
            (this.error = t),
            this.catchCallback && this.catchCallback(t));
        }
      ));
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t) {
    return (
      this.callbackAttached && x(59440),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(t, this.error)
          : this.wrapSuccess(e, this.result)
        : new P((r, s) => {
            ((this.nextCallback = (o) => {
              this.wrapSuccess(e, o).next(r, s);
            }),
              (this.catchCallback = (o) => {
                this.wrapFailure(t, o).next(r, s);
              }));
          })
    );
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(e) {
    try {
      const t = e();
      return t instanceof P ? t : P.resolve(t);
    } catch (t) {
      return P.reject(t);
    }
  }
  wrapSuccess(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : P.resolve(t);
  }
  wrapFailure(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : P.reject(t);
  }
  static resolve(e) {
    return new P((t, r) => {
      t(e);
    });
  }
  static reject(e) {
    return new P((t, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new P((t, r) => {
      let s = 0,
        o = 0,
        a = !1;
      (e.forEach((u) => {
        (++s,
          u.next(
            () => {
              (++o, a && o === s && t());
            },
            (h) => r(h)
          ));
      }),
        (a = !0),
        o === s && t());
    });
  }
  static or(e) {
    let t = P.resolve(!1);
    for (const r of e) t = t.next((s) => (s ? P.resolve(s) : r()));
    return t;
  }
  static forEach(e, t) {
    const r = [];
    return (
      e.forEach((s, o) => {
        r.push(t.call(this, s, o));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, t) {
    return new P((r, s) => {
      const o = e.length,
        a = new Array(o);
      let u = 0;
      for (let h = 0; h < o; h++) {
        const d = h;
        t(e[d]).next(
          (p) => {
            ((a[d] = p), ++u, u === o && r(a));
          },
          (p) => s(p)
        );
      }
    });
  }
  static doWhile(e, t) {
    return new P((r, s) => {
      const o = () => {
        e() === !0
          ? t().next(() => {
              o();
            }, s)
          : r();
      };
      o();
    });
  }
}
function Op(n) {
  const e = n.match(/Android ([\d.]+)/i),
    t = e ? e[1].split('.').slice(0, 2).join('.') : '-1';
  return Number(t);
}
function En(n) {
  return n.name === 'IndexedDbTransactionError';
}
/**
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
 */ class ws {
  constructor(e, t) {
    ((this.previousValue = e),
      t &&
        ((t.sequenceNumberHandler = (r) => this.ae(r)),
        (this.ue = (r) => t.writeSequenceNumber(r))));
  }
  ae(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return (this.ue && this.ue(e), e);
  }
}
ws.ce = -1;
/**
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
 */ const eo = -1;
function As(n) {
  return n == null;
}
function rs(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function Mp(n) {
  return (
    typeof n == 'number' &&
    Number.isInteger(n) &&
    !rs(n) &&
    n <= Number.MAX_SAFE_INTEGER &&
    n >= Number.MIN_SAFE_INTEGER
  );
}
/**
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
 */ const ju = '';
function Lp(n) {
  let e = '';
  for (let t = 0; t < n.length; t++)
    (e.length > 0 && (e = ac(e)), (e = xp(n.get(t), e)));
  return ac(e);
}
function xp(n, e) {
  let t = e;
  const r = n.length;
  for (let s = 0; s < r; s++) {
    const o = n.charAt(s);
    switch (o) {
      case '\0':
        t += '';
        break;
      case ju:
        t += '';
        break;
      default:
        t += o;
    }
  }
  return t;
}
function ac(n) {
  return n + ju + '';
}
/**
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
 */ function cc(n) {
  let e = 0;
  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e++;
  return e;
}
function Bt(n, e) {
  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e(t, n[t]);
}
function $u(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
/**
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
 */ class ee {
  constructor(e, t) {
    ((this.comparator = e), (this.root = t || he.EMPTY));
  }
  insert(e, t) {
    return new ee(
      this.comparator,
      this.root
        .insert(e, t, this.comparator)
        .copy(null, null, he.BLACK, null, null)
    );
  }
  remove(e) {
    return new ee(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, he.BLACK, null, null)
    );
  }
  get(e) {
    let t = this.root;
    for (; !t.isEmpty(); ) {
      const r = this.comparator(e, t.key);
      if (r === 0) return t.value;
      r < 0 ? (t = t.left) : r > 0 && (t = t.right);
    }
    return null;
  }
  indexOf(e) {
    let t = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const s = this.comparator(e, r.key);
      if (s === 0) return t + r.left.size;
      s < 0 ? (r = r.left) : ((t += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t, r) => (e(t, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((t, r) => (e.push(`${t}:${r}`), !1)),
      `{${e.join(', ')}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new Ur(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Ur(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Ur(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Ur(this.root, e, this.comparator, !0);
  }
}
class Ur {
  constructor(e, t, r, s) {
    ((this.isReverse = s), (this.nodeStack = []));
    let o = 1;
    for (; !e.isEmpty(); )
      if (((o = t ? r(e.key, t) : 1), t && s && (o *= -1), o < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (o === 0) {
          this.nodeStack.push(e);
          break;
        }
        (this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left));
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) (this.nodeStack.push(e), (e = e.right));
    else
      for (e = e.right; !e.isEmpty(); ) (this.nodeStack.push(e), (e = e.left));
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class he {
  constructor(e, t, r, s, o) {
    ((this.key = e),
      (this.value = t),
      (this.color = r ?? he.RED),
      (this.left = s ?? he.EMPTY),
      (this.right = o ?? he.EMPTY),
      (this.size = this.left.size + 1 + this.right.size));
  }
  copy(e, t, r, s, o) {
    return new he(
      e ?? this.key,
      t ?? this.value,
      r ?? this.color,
      s ?? this.left,
      o ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, t, r) {
    let s = this;
    const o = r(e, s.key);
    return (
      (s =
        o < 0
          ? s.copy(null, null, null, s.left.insert(e, t, r), null)
          : o === 0
            ? s.copy(null, t, null, null, null)
            : s.copy(null, null, null, null, s.right.insert(e, t, r))),
      s.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return he.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, t) {
    let r,
      s = this;
    if (t(e, s.key) < 0)
      (s.left.isEmpty() ||
        s.left.isRed() ||
        s.left.left.isRed() ||
        (s = s.moveRedLeft()),
        (s = s.copy(null, null, null, s.left.remove(e, t), null)));
    else {
      if (
        (s.left.isRed() && (s = s.rotateRight()),
        s.right.isEmpty() ||
          s.right.isRed() ||
          s.right.left.isRed() ||
          (s = s.moveRedRight()),
        t(e, s.key) === 0)
      ) {
        if (s.right.isEmpty()) return he.EMPTY;
        ((r = s.right.min()),
          (s = s.copy(r.key, r.value, null, null, s.right.removeMin())));
      }
      s = s.copy(null, null, null, null, s.right.remove(e, t));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())),
      e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, he.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, he.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw x(43730, { key: this.key, value: this.value });
    if (this.right.isRed())
      throw x(14113, { key: this.key, value: this.value });
    const e = this.left.check();
    if (e !== this.right.check()) throw x(27949);
    return e + (this.isRed() ? 0 : 1);
  }
}
((he.EMPTY = null), (he.RED = !0), (he.BLACK = !1));
he.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw x(57766);
  }
  get value() {
    throw x(16141);
  }
  get color() {
    throw x(16727);
  }
  get left() {
    throw x(29726);
  }
  get right() {
    throw x(36894);
  }
  copy(e, t, r, s, o) {
    return this;
  }
  insert(e, t, r) {
    return new he(e, t);
  }
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
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
 */ class ae {
  constructor(e) {
    ((this.comparator = e), (this.data = new ee(this.comparator)));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((t, r) => (e(t), !1));
  }
  forEachInRange(e, t) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const s = r.getNext();
      if (this.comparator(s.key, e[1]) >= 0) return;
      t(s.key);
    }
  }
  forEachWhile(e, t) {
    let r;
    for (
      r = t !== void 0 ? this.data.getIteratorFrom(t) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new uc(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new uc(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return (
      t.size < e.size && ((t = e), (e = this)),
      e.forEach((r) => {
        t = t.add(r);
      }),
      t
    );
  }
  isEqual(e) {
    if (!(e instanceof ae) || this.size !== e.size) return !1;
    const t = this.data.getIterator(),
      r = e.data.getIterator();
    for (; t.hasNext(); ) {
      const s = t.getNext().key,
        o = r.getNext().key;
      if (this.comparator(s, o) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((t) => {
        e.push(t);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return (this.forEach((t) => e.push(t)), 'SortedSet(' + e.toString() + ')');
  }
  copy(e) {
    const t = new ae(this.comparator);
    return ((t.data = e), t);
  }
}
class uc {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
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
 */ class De {
  constructor(e) {
    ((this.fields = e), e.sort(de.comparator));
  }
  static empty() {
    return new De([]);
  }
  unionWith(e) {
    let t = new ae(de.comparator);
    for (const r of this.fields) t = t.add(r);
    for (const r of e) t = t.add(r);
    return new De(t.toArray());
  }
  covers(e) {
    for (const t of this.fields) if (t.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return ln(this.fields, e.fields, (t, r) => t.isEqual(r));
  }
}
/**
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
 */ class zu extends Error {
  constructor() {
    (super(...arguments), (this.name = 'Base64DecodeError'));
  }
}
/**
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
 */ class fe {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = (function (s) {
      try {
        return atob(s);
      } catch (o) {
        throw typeof DOMException < 'u' && o instanceof DOMException
          ? new zu('Invalid base64 string: ' + o)
          : o;
      }
    })(e);
    return new fe(t);
  }
  static fromUint8Array(e) {
    const t = (function (s) {
      let o = '';
      for (let a = 0; a < s.length; ++a) o += String.fromCharCode(s[a]);
      return o;
    })(e);
    return new fe(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (t) {
      return btoa(t);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (t) {
      const r = new Uint8Array(t.length);
      for (let s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return z(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
fe.EMPTY_BYTE_STRING = new fe('');
const Up = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Tt(n) {
  if ((K(!!n, 39018), typeof n == 'string')) {
    let e = 0;
    const t = Up.exec(n);
    if ((K(!!t, 46558, { timestamp: n }), t[1])) {
      let s = t[1];
      ((s = (s + '000000000').substr(0, 9)), (e = Number(s)));
    }
    const r = new Date(n);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: ne(n.seconds), nanos: ne(n.nanos) };
}
function ne(n) {
  return typeof n == 'number' ? n : typeof n == 'string' ? Number(n) : 0;
}
function It(n) {
  return typeof n == 'string' ? fe.fromBase64String(n) : fe.fromUint8Array(n);
}
/**
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
 */ const Hu = 'server_timestamp',
  Wu = '__type__',
  Gu = '__previous_value__',
  Ku = '__local_write_time__';
function to(n) {
  var t, r;
  return (
    ((r = (((t = n == null ? void 0 : n.mapValue) == null
      ? void 0
      : t.fields) || {})[Wu]) == null
      ? void 0
      : r.stringValue) === Hu
  );
}
function Rs(n) {
  const e = n.mapValue.fields[Gu];
  return to(e) ? Rs(e) : e;
}
function Zn(n) {
  const e = Tt(n.mapValue.fields[Ku].timestampValue);
  return new X(e.seconds, e.nanos);
}
/**
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
 */ class Fp {
  constructor(e, t, r, s, o, a, u, h, d, p) {
    ((this.databaseId = e),
      (this.appId = t),
      (this.persistenceKey = r),
      (this.host = s),
      (this.ssl = o),
      (this.forceLongPolling = a),
      (this.autoDetectLongPolling = u),
      (this.longPollingOptions = h),
      (this.useFetchStreams = d),
      (this.isUsingEmulator = p));
  }
}
const ss = '(default)';
class er {
  constructor(e, t) {
    ((this.projectId = e), (this.database = t || ss));
  }
  static empty() {
    return new er('', '');
  }
  get isDefaultDatabase() {
    return this.database === ss;
  }
  isEqual(e) {
    return (
      e instanceof er &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
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
 */ const Qu = '__type__',
  Bp = '__max__',
  Fr = { mapValue: {} },
  Ju = '__vector__',
  is = 'value';
function vt(n) {
  return 'nullValue' in n
    ? 0
    : 'booleanValue' in n
      ? 1
      : 'integerValue' in n || 'doubleValue' in n
        ? 2
        : 'timestampValue' in n
          ? 3
          : 'stringValue' in n
            ? 5
            : 'bytesValue' in n
              ? 6
              : 'referenceValue' in n
                ? 7
                : 'geoPointValue' in n
                  ? 8
                  : 'arrayValue' in n
                    ? 9
                    : 'mapValue' in n
                      ? to(n)
                        ? 4
                        : jp(n)
                          ? 9007199254740991
                          : qp(n)
                            ? 10
                            : 11
                      : x(28295, { value: n });
}
function ze(n, e) {
  if (n === e) return !0;
  const t = vt(n);
  if (t !== vt(e)) return !1;
  switch (t) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === e.booleanValue;
    case 4:
      return Zn(n).isEqual(Zn(e));
    case 3:
      return (function (s, o) {
        if (
          typeof s.timestampValue == 'string' &&
          typeof o.timestampValue == 'string' &&
          s.timestampValue.length === o.timestampValue.length
        )
          return s.timestampValue === o.timestampValue;
        const a = Tt(s.timestampValue),
          u = Tt(o.timestampValue);
        return a.seconds === u.seconds && a.nanos === u.nanos;
      })(n, e);
    case 5:
      return n.stringValue === e.stringValue;
    case 6:
      return (function (s, o) {
        return It(s.bytesValue).isEqual(It(o.bytesValue));
      })(n, e);
    case 7:
      return n.referenceValue === e.referenceValue;
    case 8:
      return (function (s, o) {
        return (
          ne(s.geoPointValue.latitude) === ne(o.geoPointValue.latitude) &&
          ne(s.geoPointValue.longitude) === ne(o.geoPointValue.longitude)
        );
      })(n, e);
    case 2:
      return (function (s, o) {
        if ('integerValue' in s && 'integerValue' in o)
          return ne(s.integerValue) === ne(o.integerValue);
        if ('doubleValue' in s && 'doubleValue' in o) {
          const a = ne(s.doubleValue),
            u = ne(o.doubleValue);
          return a === u ? rs(a) === rs(u) : isNaN(a) && isNaN(u);
        }
        return !1;
      })(n, e);
    case 9:
      return ln(n.arrayValue.values || [], e.arrayValue.values || [], ze);
    case 10:
    case 11:
      return (function (s, o) {
        const a = s.mapValue.fields || {},
          u = o.mapValue.fields || {};
        if (cc(a) !== cc(u)) return !1;
        for (const h in a)
          if (a.hasOwnProperty(h) && (u[h] === void 0 || !ze(a[h], u[h])))
            return !1;
        return !0;
      })(n, e);
    default:
      return x(52216, { left: n });
  }
}
function tr(n, e) {
  return (n.values || []).find((t) => ze(t, e)) !== void 0;
}
function hn(n, e) {
  if (n === e) return 0;
  const t = vt(n),
    r = vt(e);
  if (t !== r) return z(t, r);
  switch (t) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return z(n.booleanValue, e.booleanValue);
    case 2:
      return (function (o, a) {
        const u = ne(o.integerValue || o.doubleValue),
          h = ne(a.integerValue || a.doubleValue);
        return u < h
          ? -1
          : u > h
            ? 1
            : u === h
              ? 0
              : isNaN(u)
                ? isNaN(h)
                  ? 0
                  : -1
                : 1;
      })(n, e);
    case 3:
      return lc(n.timestampValue, e.timestampValue);
    case 4:
      return lc(Zn(n), Zn(e));
    case 5:
      return bi(n.stringValue, e.stringValue);
    case 6:
      return (function (o, a) {
        const u = It(o),
          h = It(a);
        return u.compareTo(h);
      })(n.bytesValue, e.bytesValue);
    case 7:
      return (function (o, a) {
        const u = o.split('/'),
          h = a.split('/');
        for (let d = 0; d < u.length && d < h.length; d++) {
          const p = z(u[d], h[d]);
          if (p !== 0) return p;
        }
        return z(u.length, h.length);
      })(n.referenceValue, e.referenceValue);
    case 8:
      return (function (o, a) {
        const u = z(ne(o.latitude), ne(a.latitude));
        return u !== 0 ? u : z(ne(o.longitude), ne(a.longitude));
      })(n.geoPointValue, e.geoPointValue);
    case 9:
      return hc(n.arrayValue, e.arrayValue);
    case 10:
      return (function (o, a) {
        var v, C, b, O;
        const u = o.fields || {},
          h = a.fields || {},
          d = (v = u[is]) == null ? void 0 : v.arrayValue,
          p = (C = h[is]) == null ? void 0 : C.arrayValue,
          y = z(
            ((b = d == null ? void 0 : d.values) == null ? void 0 : b.length) ||
              0,
            ((O = p == null ? void 0 : p.values) == null ? void 0 : O.length) ||
              0
          );
        return y !== 0 ? y : hc(d, p);
      })(n.mapValue, e.mapValue);
    case 11:
      return (function (o, a) {
        if (o === Fr.mapValue && a === Fr.mapValue) return 0;
        if (o === Fr.mapValue) return 1;
        if (a === Fr.mapValue) return -1;
        const u = o.fields || {},
          h = Object.keys(u),
          d = a.fields || {},
          p = Object.keys(d);
        (h.sort(), p.sort());
        for (let y = 0; y < h.length && y < p.length; ++y) {
          const v = bi(h[y], p[y]);
          if (v !== 0) return v;
          const C = hn(u[h[y]], d[p[y]]);
          if (C !== 0) return C;
        }
        return z(h.length, p.length);
      })(n.mapValue, e.mapValue);
    default:
      throw x(23264, { he: t });
  }
}
function lc(n, e) {
  if (typeof n == 'string' && typeof e == 'string' && n.length === e.length)
    return z(n, e);
  const t = Tt(n),
    r = Tt(e),
    s = z(t.seconds, r.seconds);
  return s !== 0 ? s : z(t.nanos, r.nanos);
}
function hc(n, e) {
  const t = n.values || [],
    r = e.values || [];
  for (let s = 0; s < t.length && s < r.length; ++s) {
    const o = hn(t[s], r[s]);
    if (o) return o;
  }
  return z(t.length, r.length);
}
function dn(n) {
  return ki(n);
}
function ki(n) {
  return 'nullValue' in n
    ? 'null'
    : 'booleanValue' in n
      ? '' + n.booleanValue
      : 'integerValue' in n
        ? '' + n.integerValue
        : 'doubleValue' in n
          ? '' + n.doubleValue
          : 'timestampValue' in n
            ? (function (t) {
                const r = Tt(t);
                return `time(${r.seconds},${r.nanos})`;
              })(n.timestampValue)
            : 'stringValue' in n
              ? n.stringValue
              : 'bytesValue' in n
                ? (function (t) {
                    return It(t).toBase64();
                  })(n.bytesValue)
                : 'referenceValue' in n
                  ? (function (t) {
                      return M.fromName(t).toString();
                    })(n.referenceValue)
                  : 'geoPointValue' in n
                    ? (function (t) {
                        return `geo(${t.latitude},${t.longitude})`;
                      })(n.geoPointValue)
                    : 'arrayValue' in n
                      ? (function (t) {
                          let r = '[',
                            s = !0;
                          for (const o of t.values || [])
                            (s ? (s = !1) : (r += ','), (r += ki(o)));
                          return r + ']';
                        })(n.arrayValue)
                      : 'mapValue' in n
                        ? (function (t) {
                            const r = Object.keys(t.fields || {}).sort();
                            let s = '{',
                              o = !0;
                            for (const a of r)
                              (o ? (o = !1) : (s += ','),
                                (s += `${a}:${ki(t.fields[a])}`));
                            return s + '}';
                          })(n.mapValue)
                        : x(61005, { value: n });
}
function Hr(n) {
  switch (vt(n)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const e = Rs(n);
      return e ? 16 + Hr(e) : 16;
    case 5:
      return 2 * n.stringValue.length;
    case 6:
      return It(n.bytesValue).approximateByteSize();
    case 7:
      return n.referenceValue.length;
    case 9:
      return (function (r) {
        return (r.values || []).reduce((s, o) => s + Hr(o), 0);
      })(n.arrayValue);
    case 10:
    case 11:
      return (function (r) {
        let s = 0;
        return (
          Bt(r.fields, (o, a) => {
            s += o.length + Hr(a);
          }),
          s
        );
      })(n.mapValue);
    default:
      throw x(13486, { value: n });
  }
}
function dc(n, e) {
  return {
    referenceValue: `projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`,
  };
}
function Vi(n) {
  return !!n && 'integerValue' in n;
}
function no(n) {
  return !!n && 'arrayValue' in n;
}
function fc(n) {
  return !!n && 'nullValue' in n;
}
function pc(n) {
  return !!n && 'doubleValue' in n && isNaN(Number(n.doubleValue));
}
function Wr(n) {
  return !!n && 'mapValue' in n;
}
function qp(n) {
  var t, r;
  return (
    ((r = (((t = n == null ? void 0 : n.mapValue) == null
      ? void 0
      : t.fields) || {})[Qu]) == null
      ? void 0
      : r.stringValue) === Ju
  );
}
function Wn(n) {
  if (n.geoPointValue) return { geoPointValue: { ...n.geoPointValue } };
  if (n.timestampValue && typeof n.timestampValue == 'object')
    return { timestampValue: { ...n.timestampValue } };
  if (n.mapValue) {
    const e = { mapValue: { fields: {} } };
    return (Bt(n.mapValue.fields, (t, r) => (e.mapValue.fields[t] = Wn(r))), e);
  }
  if (n.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let t = 0; t < (n.arrayValue.values || []).length; ++t)
      e.arrayValue.values[t] = Wn(n.arrayValue.values[t]);
    return e;
  }
  return { ...n };
}
function jp(n) {
  return (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === Bp;
}
/**
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
 */ class ke {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new ke({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((t = (t.mapValue.fields || {})[e.get(r)]), !Wr(t))) return null;
      return ((t = (t.mapValue.fields || {})[e.lastSegment()]), t || null);
    }
  }
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Wn(t);
  }
  setAll(e) {
    let t = de.emptyPath(),
      r = {},
      s = [];
    e.forEach((a, u) => {
      if (!t.isImmediateParentOf(u)) {
        const h = this.getFieldsMap(t);
        (this.applyChanges(h, r, s), (r = {}), (s = []), (t = u.popLast()));
      }
      a ? (r[u.lastSegment()] = Wn(a)) : s.push(u.lastSegment());
    });
    const o = this.getFieldsMap(t);
    this.applyChanges(o, r, s);
  }
  delete(e) {
    const t = this.field(e.popLast());
    Wr(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return ze(this.value, e.value);
  }
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let s = t.mapValue.fields[e.get(r)];
      ((Wr(s) && s.mapValue.fields) ||
        ((s = { mapValue: { fields: {} } }), (t.mapValue.fields[e.get(r)] = s)),
        (t = s));
    }
    return t.mapValue.fields;
  }
  applyChanges(e, t, r) {
    Bt(t, (s, o) => (e[s] = o));
    for (const s of r) delete e[s];
  }
  clone() {
    return new ke(Wn(this.value));
  }
}
function Yu(n) {
  const e = [];
  return (
    Bt(n.fields, (t, r) => {
      const s = new de([t]);
      if (Wr(r)) {
        const o = Yu(r.mapValue).fields;
        if (o.length === 0) e.push(s);
        else for (const a of o) e.push(s.child(a));
      } else e.push(s);
    }),
    new De(e)
  );
}
/**
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
 */ class Te {
  constructor(e, t, r, s, o, a, u) {
    ((this.key = e),
      (this.documentType = t),
      (this.version = r),
      (this.readTime = s),
      (this.createTime = o),
      (this.data = a),
      (this.documentState = u));
  }
  static newInvalidDocument(e) {
    return new Te(e, 0, F.min(), F.min(), F.min(), ke.empty(), 0);
  }
  static newFoundDocument(e, t, r, s) {
    return new Te(e, 1, t, F.min(), r, s, 0);
  }
  static newNoDocument(e, t) {
    return new Te(e, 2, t, F.min(), F.min(), ke.empty(), 0);
  }
  static newUnknownDocument(e, t) {
    return new Te(e, 3, t, F.min(), F.min(), ke.empty(), 2);
  }
  convertToFoundDocument(e, t) {
    return (
      !this.createTime.isEqual(F.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = t),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = ke.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = ke.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return ((this.documentState = 2), this);
  }
  setHasLocalMutations() {
    return ((this.documentState = 1), (this.version = F.min()), this);
  }
  setReadTime(e) {
    return ((this.readTime = e), this);
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof Te &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new Te(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
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
 */ class os {
  constructor(e, t) {
    ((this.position = e), (this.inclusive = t));
  }
}
function mc(n, e, t) {
  let r = 0;
  for (let s = 0; s < n.position.length; s++) {
    const o = e[s],
      a = n.position[s];
    if (
      (o.field.isKeyField()
        ? (r = M.comparator(M.fromName(a.referenceValue), t.key))
        : (r = hn(a, t.data.field(o.field))),
      o.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function gc(n, e) {
  if (n === null) return e === null;
  if (
    e === null ||
    n.inclusive !== e.inclusive ||
    n.position.length !== e.position.length
  )
    return !1;
  for (let t = 0; t < n.position.length; t++)
    if (!ze(n.position[t], e.position[t])) return !1;
  return !0;
}
/**
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
 */ class as {
  constructor(e, t = 'asc') {
    ((this.field = e), (this.dir = t));
  }
}
function $p(n, e) {
  return n.dir === e.dir && n.field.isEqual(e.field);
}
/**
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
 */ class Xu {}
class ie extends Xu {
  constructor(e, t, r) {
    (super(), (this.field = e), (this.op = t), (this.value = r));
  }
  static create(e, t, r) {
    return e.isKeyField()
      ? t === 'in' || t === 'not-in'
        ? this.createKeyFieldInFilter(e, t, r)
        : new Hp(e, t, r)
      : t === 'array-contains'
        ? new Kp(e, r)
        : t === 'in'
          ? new Qp(e, r)
          : t === 'not-in'
            ? new Jp(e, r)
            : t === 'array-contains-any'
              ? new Yp(e, r)
              : new ie(e, t, r);
  }
  static createKeyFieldInFilter(e, t, r) {
    return t === 'in' ? new Wp(e, r) : new Gp(e, r);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return this.op === '!='
      ? t !== null &&
          t.nullValue === void 0 &&
          this.matchesComparison(hn(t, this.value))
      : t !== null &&
          vt(this.value) === vt(t) &&
          this.matchesComparison(hn(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case '<':
        return e < 0;
      case '<=':
        return e <= 0;
      case '==':
        return e === 0;
      case '!=':
        return e !== 0;
      case '>':
        return e > 0;
      case '>=':
        return e >= 0;
      default:
        return x(47266, { operator: this.op });
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Me extends Xu {
  constructor(e, t) {
    (super(), (this.filters = e), (this.op = t), (this.Pe = null));
  }
  static create(e, t) {
    return new Me(e, t);
  }
  matches(e) {
    return Zu(this)
      ? this.filters.find((t) => !t.matches(e)) === void 0
      : this.filters.find((t) => t.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.Pe !== null ||
        (this.Pe = this.filters.reduce(
          (e, t) => e.concat(t.getFlattenedFilters()),
          []
        )),
      this.Pe
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Zu(n) {
  return n.op === 'and';
}
function el(n) {
  return zp(n) && Zu(n);
}
function zp(n) {
  for (const e of n.filters) if (e instanceof Me) return !1;
  return !0;
}
function Ni(n) {
  if (n instanceof ie)
    return n.field.canonicalString() + n.op.toString() + dn(n.value);
  if (el(n)) return n.filters.map((e) => Ni(e)).join(',');
  {
    const e = n.filters.map((t) => Ni(t)).join(',');
    return `${n.op}(${e})`;
  }
}
function tl(n, e) {
  return n instanceof ie
    ? (function (r, s) {
        return (
          s instanceof ie &&
          r.op === s.op &&
          r.field.isEqual(s.field) &&
          ze(r.value, s.value)
        );
      })(n, e)
    : n instanceof Me
      ? (function (r, s) {
          return s instanceof Me &&
            r.op === s.op &&
            r.filters.length === s.filters.length
            ? r.filters.reduce((o, a, u) => o && tl(a, s.filters[u]), !0)
            : !1;
        })(n, e)
      : void x(19439);
}
function nl(n) {
  return n instanceof ie
    ? (function (t) {
        return `${t.field.canonicalString()} ${t.op} ${dn(t.value)}`;
      })(n)
    : n instanceof Me
      ? (function (t) {
          return (
            t.op.toString() + ' {' + t.getFilters().map(nl).join(' ,') + '}'
          );
        })(n)
      : 'Filter';
}
class Hp extends ie {
  constructor(e, t, r) {
    (super(e, t, r), (this.key = M.fromName(r.referenceValue)));
  }
  matches(e) {
    const t = M.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
}
class Wp extends ie {
  constructor(e, t) {
    (super(e, 'in', t), (this.keys = rl('in', t)));
  }
  matches(e) {
    return this.keys.some((t) => t.isEqual(e.key));
  }
}
class Gp extends ie {
  constructor(e, t) {
    (super(e, 'not-in', t), (this.keys = rl('not-in', t)));
  }
  matches(e) {
    return !this.keys.some((t) => t.isEqual(e.key));
  }
}
function rl(n, e) {
  var t;
  return (((t = e.arrayValue) == null ? void 0 : t.values) || []).map((r) =>
    M.fromName(r.referenceValue)
  );
}
class Kp extends ie {
  constructor(e, t) {
    super(e, 'array-contains', t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return no(t) && tr(t.arrayValue, this.value);
  }
}
class Qp extends ie {
  constructor(e, t) {
    super(e, 'in', t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return t !== null && tr(this.value.arrayValue, t);
  }
}
class Jp extends ie {
  constructor(e, t) {
    super(e, 'not-in', t);
  }
  matches(e) {
    if (tr(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
    const t = e.data.field(this.field);
    return (
      t !== null && t.nullValue === void 0 && !tr(this.value.arrayValue, t)
    );
  }
}
class Yp extends ie {
  constructor(e, t) {
    super(e, 'array-contains-any', t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return (
      !(!no(t) || !t.arrayValue.values) &&
      t.arrayValue.values.some((r) => tr(this.value.arrayValue, r))
    );
  }
}
/**
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
 */ class Xp {
  constructor(e, t = null, r = [], s = [], o = null, a = null, u = null) {
    ((this.path = e),
      (this.collectionGroup = t),
      (this.orderBy = r),
      (this.filters = s),
      (this.limit = o),
      (this.startAt = a),
      (this.endAt = u),
      (this.Te = null));
  }
}
function _c(n, e = null, t = [], r = [], s = null, o = null, a = null) {
  return new Xp(n, e, t, r, s, o, a);
}
function ro(n) {
  const e = B(n);
  if (e.Te === null) {
    let t = e.path.canonicalString();
    (e.collectionGroup !== null && (t += '|cg:' + e.collectionGroup),
      (t += '|f:'),
      (t += e.filters.map((r) => Ni(r)).join(',')),
      (t += '|ob:'),
      (t += e.orderBy
        .map((r) =>
          (function (o) {
            return o.field.canonicalString() + o.dir;
          })(r)
        )
        .join(',')),
      As(e.limit) || ((t += '|l:'), (t += e.limit)),
      e.startAt &&
        ((t += '|lb:'),
        (t += e.startAt.inclusive ? 'b:' : 'a:'),
        (t += e.startAt.position.map((r) => dn(r)).join(','))),
      e.endAt &&
        ((t += '|ub:'),
        (t += e.endAt.inclusive ? 'a:' : 'b:'),
        (t += e.endAt.position.map((r) => dn(r)).join(','))),
      (e.Te = t));
  }
  return e.Te;
}
function so(n, e) {
  if (n.limit !== e.limit || n.orderBy.length !== e.orderBy.length) return !1;
  for (let t = 0; t < n.orderBy.length; t++)
    if (!$p(n.orderBy[t], e.orderBy[t])) return !1;
  if (n.filters.length !== e.filters.length) return !1;
  for (let t = 0; t < n.filters.length; t++)
    if (!tl(n.filters[t], e.filters[t])) return !1;
  return (
    n.collectionGroup === e.collectionGroup &&
    !!n.path.isEqual(e.path) &&
    !!gc(n.startAt, e.startAt) &&
    gc(n.endAt, e.endAt)
  );
}
function Di(n) {
  return (
    M.isDocumentKey(n.path) &&
    n.collectionGroup === null &&
    n.filters.length === 0
  );
}
/**
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
 */ class ur {
  constructor(
    e,
    t = null,
    r = [],
    s = [],
    o = null,
    a = 'F',
    u = null,
    h = null
  ) {
    ((this.path = e),
      (this.collectionGroup = t),
      (this.explicitOrderBy = r),
      (this.filters = s),
      (this.limit = o),
      (this.limitType = a),
      (this.startAt = u),
      (this.endAt = h),
      (this.Ie = null),
      (this.Ee = null),
      (this.de = null),
      this.startAt,
      this.endAt);
  }
}
function Zp(n, e, t, r, s, o, a, u) {
  return new ur(n, e, t, r, s, o, a, u);
}
function sl(n) {
  return new ur(n);
}
function yc(n) {
  return (
    n.filters.length === 0 &&
    n.limit === null &&
    n.startAt == null &&
    n.endAt == null &&
    (n.explicitOrderBy.length === 0 ||
      (n.explicitOrderBy.length === 1 &&
        n.explicitOrderBy[0].field.isKeyField()))
  );
}
function il(n) {
  return n.collectionGroup !== null;
}
function Gn(n) {
  const e = B(n);
  if (e.Ie === null) {
    e.Ie = [];
    const t = new Set();
    for (const o of e.explicitOrderBy)
      (e.Ie.push(o), t.add(o.field.canonicalString()));
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : 'asc';
    ((function (a) {
      let u = new ae(de.comparator);
      return (
        a.filters.forEach((h) => {
          h.getFlattenedFilters().forEach((d) => {
            d.isInequality() && (u = u.add(d.field));
          });
        }),
        u
      );
    })(e).forEach((o) => {
      t.has(o.canonicalString()) || o.isKeyField() || e.Ie.push(new as(o, r));
    }),
      t.has(de.keyField().canonicalString()) ||
        e.Ie.push(new as(de.keyField(), r)));
  }
  return e.Ie;
}
function Ue(n) {
  const e = B(n);
  return (e.Ee || (e.Ee = em(e, Gn(n))), e.Ee);
}
function em(n, e) {
  if (n.limitType === 'F')
    return _c(
      n.path,
      n.collectionGroup,
      e,
      n.filters,
      n.limit,
      n.startAt,
      n.endAt
    );
  {
    e = e.map((s) => {
      const o = s.dir === 'desc' ? 'asc' : 'desc';
      return new as(s.field, o);
    });
    const t = n.endAt ? new os(n.endAt.position, n.endAt.inclusive) : null,
      r = n.startAt ? new os(n.startAt.position, n.startAt.inclusive) : null;
    return _c(n.path, n.collectionGroup, e, n.filters, n.limit, t, r);
  }
}
function Oi(n, e) {
  const t = n.filters.concat([e]);
  return new ur(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    t,
    n.limit,
    n.limitType,
    n.startAt,
    n.endAt
  );
}
function Mi(n, e, t) {
  return new ur(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    n.filters.slice(),
    e,
    t,
    n.startAt,
    n.endAt
  );
}
function Ss(n, e) {
  return so(Ue(n), Ue(e)) && n.limitType === e.limitType;
}
function ol(n) {
  return `${ro(Ue(n))}|lt:${n.limitType}`;
}
function Jt(n) {
  return `Query(target=${(function (t) {
    let r = t.path.canonicalString();
    return (
      t.collectionGroup !== null &&
        (r += ' collectionGroup=' + t.collectionGroup),
      t.filters.length > 0 &&
        (r += `, filters: [${t.filters.map((s) => nl(s)).join(', ')}]`),
      As(t.limit) || (r += ', limit: ' + t.limit),
      t.orderBy.length > 0 &&
        (r += `, orderBy: [${t.orderBy
          .map((s) =>
            (function (a) {
              return `${a.field.canonicalString()} (${a.dir})`;
            })(s)
          )
          .join(', ')}]`),
      t.startAt &&
        ((r += ', startAt: '),
        (r += t.startAt.inclusive ? 'b:' : 'a:'),
        (r += t.startAt.position.map((s) => dn(s)).join(','))),
      t.endAt &&
        ((r += ', endAt: '),
        (r += t.endAt.inclusive ? 'a:' : 'b:'),
        (r += t.endAt.position.map((s) => dn(s)).join(','))),
      `Target(${r})`
    );
  })(Ue(n))}; limitType=${n.limitType})`;
}
function Ps(n, e) {
  return (
    e.isFoundDocument() &&
    (function (r, s) {
      const o = s.key.path;
      return r.collectionGroup !== null
        ? s.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(o)
        : M.isDocumentKey(r.path)
          ? r.path.isEqual(o)
          : r.path.isImmediateParentOf(o);
    })(n, e) &&
    (function (r, s) {
      for (const o of Gn(r))
        if (!o.field.isKeyField() && s.data.field(o.field) === null) return !1;
      return !0;
    })(n, e) &&
    (function (r, s) {
      for (const o of r.filters) if (!o.matches(s)) return !1;
      return !0;
    })(n, e) &&
    (function (r, s) {
      return !(
        (r.startAt &&
          !(function (a, u, h) {
            const d = mc(a, u, h);
            return a.inclusive ? d <= 0 : d < 0;
          })(r.startAt, Gn(r), s)) ||
        (r.endAt &&
          !(function (a, u, h) {
            const d = mc(a, u, h);
            return a.inclusive ? d >= 0 : d > 0;
          })(r.endAt, Gn(r), s))
      );
    })(n, e)
  );
}
function tm(n) {
  return (
    n.collectionGroup ||
    (n.path.length % 2 == 1
      ? n.path.lastSegment()
      : n.path.get(n.path.length - 2))
  );
}
function al(n) {
  return (e, t) => {
    let r = !1;
    for (const s of Gn(n)) {
      const o = nm(s, e, t);
      if (o !== 0) return o;
      r = r || s.field.isKeyField();
    }
    return 0;
  };
}
function nm(n, e, t) {
  const r = n.field.isKeyField()
    ? M.comparator(e.key, t.key)
    : (function (o, a, u) {
        const h = a.data.field(o),
          d = u.data.field(o);
        return h !== null && d !== null ? hn(h, d) : x(42886);
      })(n.field, e, t);
  switch (n.dir) {
    case 'asc':
      return r;
    case 'desc':
      return -1 * r;
    default:
      return x(19790, { direction: n.dir });
  }
}
/**
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
 */ class qt {
  constructor(e, t) {
    ((this.mapKeyFn = e),
      (this.equalsFn = t),
      (this.inner = {}),
      (this.innerSize = 0));
  }
  get(e) {
    const t = this.mapKeyFn(e),
      r = this.inner[t];
    if (r !== void 0) {
      for (const [s, o] of r) if (this.equalsFn(s, e)) return o;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, t) {
    const r = this.mapKeyFn(e),
      s = this.inner[r];
    if (s === void 0)
      return ((this.inner[r] = [[e, t]]), void this.innerSize++);
    for (let o = 0; o < s.length; o++)
      if (this.equalsFn(s[o][0], e)) return void (s[o] = [e, t]);
    (s.push([e, t]), this.innerSize++);
  }
  delete(e) {
    const t = this.mapKeyFn(e),
      r = this.inner[t];
    if (r === void 0) return !1;
    for (let s = 0; s < r.length; s++)
      if (this.equalsFn(r[s][0], e))
        return (
          r.length === 1 ? delete this.inner[t] : r.splice(s, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    Bt(this.inner, (t, r) => {
      for (const [s, o] of r) e(s, o);
    });
  }
  isEmpty() {
    return $u(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
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
 */ const rm = new ee(M.comparator);
function tt() {
  return rm;
}
const cl = new ee(M.comparator);
function $n(...n) {
  let e = cl;
  for (const t of n) e = e.insert(t.key, t);
  return e;
}
function ul(n) {
  let e = cl;
  return (n.forEach((t, r) => (e = e.insert(t, r.overlayedDocument))), e);
}
function Nt() {
  return Kn();
}
function ll() {
  return Kn();
}
function Kn() {
  return new qt(
    (n) => n.toString(),
    (n, e) => n.isEqual(e)
  );
}
const sm = new ee(M.comparator),
  im = new ae(M.comparator);
function H(...n) {
  let e = im;
  for (const t of n) e = e.add(t);
  return e;
}
const om = new ae(z);
function am() {
  return om;
}
/**
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
 */ function io(n, e) {
  if (n.useProto3Json) {
    if (isNaN(e)) return { doubleValue: 'NaN' };
    if (e === 1 / 0) return { doubleValue: 'Infinity' };
    if (e === -1 / 0) return { doubleValue: '-Infinity' };
  }
  return { doubleValue: rs(e) ? '-0' : e };
}
function hl(n) {
  return { integerValue: '' + n };
}
function cm(n, e) {
  return Mp(e) ? hl(e) : io(n, e);
}
/**
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
 */ class Cs {
  constructor() {
    this._ = void 0;
  }
}
function um(n, e, t) {
  return n instanceof cs
    ? (function (s, o) {
        const a = {
          fields: {
            [Wu]: { stringValue: Hu },
            [Ku]: {
              timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
            },
          },
        };
        return (
          o && to(o) && (o = Rs(o)),
          o && (a.fields[Gu] = o),
          { mapValue: a }
        );
      })(t, e)
    : n instanceof nr
      ? fl(n, e)
      : n instanceof rr
        ? pl(n, e)
        : (function (s, o) {
            const a = dl(s, o),
              u = Ec(a) + Ec(s.Ae);
            return Vi(a) && Vi(s.Ae) ? hl(u) : io(s.serializer, u);
          })(n, e);
}
function lm(n, e, t) {
  return n instanceof nr ? fl(n, e) : n instanceof rr ? pl(n, e) : t;
}
function dl(n, e) {
  return n instanceof us
    ? (function (r) {
        return (
          Vi(r) ||
          (function (o) {
            return !!o && 'doubleValue' in o;
          })(r)
        );
      })(e)
      ? e
      : { integerValue: 0 }
    : null;
}
class cs extends Cs {}
class nr extends Cs {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function fl(n, e) {
  const t = ml(e);
  for (const r of n.elements) t.some((s) => ze(s, r)) || t.push(r);
  return { arrayValue: { values: t } };
}
class rr extends Cs {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function pl(n, e) {
  let t = ml(e);
  for (const r of n.elements) t = t.filter((s) => !ze(s, r));
  return { arrayValue: { values: t } };
}
class us extends Cs {
  constructor(e, t) {
    (super(), (this.serializer = e), (this.Ae = t));
  }
}
function Ec(n) {
  return ne(n.integerValue || n.doubleValue);
}
function ml(n) {
  return no(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function hm(n, e) {
  return (
    n.field.isEqual(e.field) &&
    (function (r, s) {
      return (r instanceof nr && s instanceof nr) ||
        (r instanceof rr && s instanceof rr)
        ? ln(r.elements, s.elements, ze)
        : r instanceof us && s instanceof us
          ? ze(r.Ae, s.Ae)
          : r instanceof cs && s instanceof cs;
    })(n.transform, e.transform)
  );
}
class dm {
  constructor(e, t) {
    ((this.version = e), (this.transformResults = t));
  }
}
class Ye {
  constructor(e, t) {
    ((this.updateTime = e), (this.exists = t));
  }
  static none() {
    return new Ye();
  }
  static exists(e) {
    return new Ye(void 0, e);
  }
  static updateTime(e) {
    return new Ye(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function Gr(n, e) {
  return n.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(n.updateTime)
    : n.exists === void 0 || n.exists === e.isFoundDocument();
}
class bs {}
function gl(n, e) {
  if (!n.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return n.isNoDocument()
      ? new yl(n.key, Ye.none())
      : new lr(n.key, n.data, Ye.none());
  {
    const t = n.data,
      r = ke.empty();
    let s = new ae(de.comparator);
    for (let o of e.fields)
      if (!s.has(o)) {
        let a = t.field(o);
        (a === null && o.length > 1 && ((o = o.popLast()), (a = t.field(o))),
          a === null ? r.delete(o) : r.set(o, a),
          (s = s.add(o)));
      }
    return new jt(n.key, r, new De(s.toArray()), Ye.none());
  }
}
function fm(n, e, t) {
  n instanceof lr
    ? (function (s, o, a) {
        const u = s.value.clone(),
          h = Ic(s.fieldTransforms, o, a.transformResults);
        (u.setAll(h),
          o.convertToFoundDocument(a.version, u).setHasCommittedMutations());
      })(n, e, t)
    : n instanceof jt
      ? (function (s, o, a) {
          if (!Gr(s.precondition, o))
            return void o.convertToUnknownDocument(a.version);
          const u = Ic(s.fieldTransforms, o, a.transformResults),
            h = o.data;
          (h.setAll(_l(s)),
            h.setAll(u),
            o.convertToFoundDocument(a.version, h).setHasCommittedMutations());
        })(n, e, t)
      : (function (s, o, a) {
          o.convertToNoDocument(a.version).setHasCommittedMutations();
        })(0, e, t);
}
function Qn(n, e, t, r) {
  return n instanceof lr
    ? (function (o, a, u, h) {
        if (!Gr(o.precondition, a)) return u;
        const d = o.value.clone(),
          p = vc(o.fieldTransforms, h, a);
        return (
          d.setAll(p),
          a.convertToFoundDocument(a.version, d).setHasLocalMutations(),
          null
        );
      })(n, e, t, r)
    : n instanceof jt
      ? (function (o, a, u, h) {
          if (!Gr(o.precondition, a)) return u;
          const d = vc(o.fieldTransforms, h, a),
            p = a.data;
          return (
            p.setAll(_l(o)),
            p.setAll(d),
            a.convertToFoundDocument(a.version, p).setHasLocalMutations(),
            u === null
              ? null
              : u
                  .unionWith(o.fieldMask.fields)
                  .unionWith(o.fieldTransforms.map((y) => y.field))
          );
        })(n, e, t, r)
      : (function (o, a, u) {
          return Gr(o.precondition, a)
            ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null)
            : u;
        })(n, e, t);
}
function pm(n, e) {
  let t = null;
  for (const r of n.fieldTransforms) {
    const s = e.data.field(r.field),
      o = dl(r.transform, s || null);
    o != null && (t === null && (t = ke.empty()), t.set(r.field, o));
  }
  return t || null;
}
function Tc(n, e) {
  return (
    n.type === e.type &&
    !!n.key.isEqual(e.key) &&
    !!n.precondition.isEqual(e.precondition) &&
    !!(function (r, s) {
      return (
        (r === void 0 && s === void 0) ||
        (!(!r || !s) && ln(r, s, (o, a) => hm(o, a)))
      );
    })(n.fieldTransforms, e.fieldTransforms) &&
    (n.type === 0
      ? n.value.isEqual(e.value)
      : n.type !== 1 ||
        (n.data.isEqual(e.data) && n.fieldMask.isEqual(e.fieldMask)))
  );
}
class lr extends bs {
  constructor(e, t, r, s = []) {
    (super(),
      (this.key = e),
      (this.value = t),
      (this.precondition = r),
      (this.fieldTransforms = s),
      (this.type = 0));
  }
  getFieldMask() {
    return null;
  }
}
class jt extends bs {
  constructor(e, t, r, s, o = []) {
    (super(),
      (this.key = e),
      (this.data = t),
      (this.fieldMask = r),
      (this.precondition = s),
      (this.fieldTransforms = o),
      (this.type = 1));
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function _l(n) {
  const e = new Map();
  return (
    n.fieldMask.fields.forEach((t) => {
      if (!t.isEmpty()) {
        const r = n.data.field(t);
        e.set(t, r);
      }
    }),
    e
  );
}
function Ic(n, e, t) {
  const r = new Map();
  K(n.length === t.length, 32656, { Re: t.length, Ve: n.length });
  for (let s = 0; s < t.length; s++) {
    const o = n[s],
      a = o.transform,
      u = e.data.field(o.field);
    r.set(o.field, lm(a, u, t[s]));
  }
  return r;
}
function vc(n, e, t) {
  const r = new Map();
  for (const s of n) {
    const o = s.transform,
      a = t.data.field(s.field);
    r.set(s.field, um(o, a, e));
  }
  return r;
}
class yl extends bs {
  constructor(e, t) {
    (super(),
      (this.key = e),
      (this.precondition = t),
      (this.type = 2),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
class mm extends bs {
  constructor(e, t) {
    (super(),
      (this.key = e),
      (this.precondition = t),
      (this.type = 3),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
/**
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
 */ class gm {
  constructor(e, t, r, s) {
    ((this.batchId = e),
      (this.localWriteTime = t),
      (this.baseMutations = r),
      (this.mutations = s));
  }
  applyToRemoteDocument(e, t) {
    const r = t.mutationResults;
    for (let s = 0; s < this.mutations.length; s++) {
      const o = this.mutations[s];
      o.key.isEqual(e.key) && fm(o, e, r[s]);
    }
  }
  applyToLocalView(e, t) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (t = Qn(r, e, t, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (t = Qn(r, e, t, this.localWriteTime));
    return t;
  }
  applyToLocalDocumentSet(e, t) {
    const r = ll();
    return (
      this.mutations.forEach((s) => {
        const o = e.get(s.key),
          a = o.overlayedDocument;
        let u = this.applyToLocalView(a, o.mutatedFields);
        u = t.has(s.key) ? null : u;
        const h = gl(a, u);
        (h !== null && r.set(s.key, h),
          a.isValidDocument() || a.convertToNoDocument(F.min()));
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), H());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      ln(this.mutations, e.mutations, (t, r) => Tc(t, r)) &&
      ln(this.baseMutations, e.baseMutations, (t, r) => Tc(t, r))
    );
  }
}
class oo {
  constructor(e, t, r, s) {
    ((this.batch = e),
      (this.commitVersion = t),
      (this.mutationResults = r),
      (this.docVersions = s));
  }
  static from(e, t, r) {
    K(e.mutations.length === r.length, 58842, {
      me: e.mutations.length,
      fe: r.length,
    });
    let s = (function () {
      return sm;
    })();
    const o = e.mutations;
    for (let a = 0; a < o.length; a++) s = s.insert(o[a].key, r[a].version);
    return new oo(e, t, r, s);
  }
}
/**
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
 */ class _m {
  constructor(e, t) {
    ((this.largestBatchId = e), (this.mutation = t));
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
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
 */ class ym {
  constructor(e, t) {
    ((this.count = e), (this.unchangedNames = t));
  }
}
/**
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
 */ var se, W;
function Em(n) {
  switch (n) {
    case S.OK:
      return x(64938);
    case S.CANCELLED:
    case S.UNKNOWN:
    case S.DEADLINE_EXCEEDED:
    case S.RESOURCE_EXHAUSTED:
    case S.INTERNAL:
    case S.UNAVAILABLE:
    case S.UNAUTHENTICATED:
      return !1;
    case S.INVALID_ARGUMENT:
    case S.NOT_FOUND:
    case S.ALREADY_EXISTS:
    case S.PERMISSION_DENIED:
    case S.FAILED_PRECONDITION:
    case S.ABORTED:
    case S.OUT_OF_RANGE:
    case S.UNIMPLEMENTED:
    case S.DATA_LOSS:
      return !0;
    default:
      return x(15467, { code: n });
  }
}
function El(n) {
  if (n === void 0) return (et('GRPC error has no .code'), S.UNKNOWN);
  switch (n) {
    case se.OK:
      return S.OK;
    case se.CANCELLED:
      return S.CANCELLED;
    case se.UNKNOWN:
      return S.UNKNOWN;
    case se.DEADLINE_EXCEEDED:
      return S.DEADLINE_EXCEEDED;
    case se.RESOURCE_EXHAUSTED:
      return S.RESOURCE_EXHAUSTED;
    case se.INTERNAL:
      return S.INTERNAL;
    case se.UNAVAILABLE:
      return S.UNAVAILABLE;
    case se.UNAUTHENTICATED:
      return S.UNAUTHENTICATED;
    case se.INVALID_ARGUMENT:
      return S.INVALID_ARGUMENT;
    case se.NOT_FOUND:
      return S.NOT_FOUND;
    case se.ALREADY_EXISTS:
      return S.ALREADY_EXISTS;
    case se.PERMISSION_DENIED:
      return S.PERMISSION_DENIED;
    case se.FAILED_PRECONDITION:
      return S.FAILED_PRECONDITION;
    case se.ABORTED:
      return S.ABORTED;
    case se.OUT_OF_RANGE:
      return S.OUT_OF_RANGE;
    case se.UNIMPLEMENTED:
      return S.UNIMPLEMENTED;
    case se.DATA_LOSS:
      return S.DATA_LOSS;
    default:
      return x(39323, { code: n });
  }
}
(((W = se || (se = {}))[(W.OK = 0)] = 'OK'),
  (W[(W.CANCELLED = 1)] = 'CANCELLED'),
  (W[(W.UNKNOWN = 2)] = 'UNKNOWN'),
  (W[(W.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (W[(W.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (W[(W.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (W[(W.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (W[(W.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (W[(W.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (W[(W.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (W[(W.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (W[(W.ABORTED = 10)] = 'ABORTED'),
  (W[(W.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (W[(W.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (W[(W.INTERNAL = 13)] = 'INTERNAL'),
  (W[(W.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (W[(W.DATA_LOSS = 15)] = 'DATA_LOSS'));
/**
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
 */ function Tm() {
  return new TextEncoder();
}
/**
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
 */ const Im = new gt([4294967295, 4294967295], 0);
function wc(n) {
  const e = Tm().encode(n),
    t = new Nu();
  return (t.update(e), new Uint8Array(t.digest()));
}
function Ac(n) {
  const e = new DataView(n.buffer),
    t = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    s = e.getUint32(8, !0),
    o = e.getUint32(12, !0);
  return [new gt([t, r], 0), new gt([s, o], 0)];
}
class ao {
  constructor(e, t, r) {
    if (
      ((this.bitmap = e),
      (this.padding = t),
      (this.hashCount = r),
      t < 0 || t >= 8)
    )
      throw new zn(`Invalid padding: ${t}`);
    if (r < 0) throw new zn(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new zn(`Invalid hash count: ${r}`);
    if (e.length === 0 && t !== 0)
      throw new zn(`Invalid padding when bitmap length is 0: ${t}`);
    ((this.ge = 8 * e.length - t), (this.pe = gt.fromNumber(this.ge)));
  }
  ye(e, t, r) {
    let s = e.add(t.multiply(gt.fromNumber(r)));
    return (
      s.compare(Im) === 1 && (s = new gt([s.getBits(0), s.getBits(1)], 0)),
      s.modulo(this.pe).toNumber()
    );
  }
  we(e) {
    return !!(this.bitmap[Math.floor(e / 8)] & (1 << e % 8));
  }
  mightContain(e) {
    if (this.ge === 0) return !1;
    const t = wc(e),
      [r, s] = Ac(t);
    for (let o = 0; o < this.hashCount; o++) {
      const a = this.ye(r, s, o);
      if (!this.we(a)) return !1;
    }
    return !0;
  }
  static create(e, t, r) {
    const s = e % 8 == 0 ? 0 : 8 - (e % 8),
      o = new Uint8Array(Math.ceil(e / 8)),
      a = new ao(o, s, t);
    return (r.forEach((u) => a.insert(u)), a);
  }
  insert(e) {
    if (this.ge === 0) return;
    const t = wc(e),
      [r, s] = Ac(t);
    for (let o = 0; o < this.hashCount; o++) {
      const a = this.ye(r, s, o);
      this.Se(a);
    }
  }
  Se(e) {
    const t = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[t] |= 1 << r;
  }
}
class zn extends Error {
  constructor() {
    (super(...arguments), (this.name = 'BloomFilterError'));
  }
}
/**
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
 */ class ks {
  constructor(e, t, r, s, o) {
    ((this.snapshotVersion = e),
      (this.targetChanges = t),
      (this.targetMismatches = r),
      (this.documentUpdates = s),
      (this.resolvedLimboDocuments = o));
  }
  static createSynthesizedRemoteEventForCurrentChange(e, t, r) {
    const s = new Map();
    return (
      s.set(e, hr.createSynthesizedTargetChangeForCurrentChange(e, t, r)),
      new ks(F.min(), s, new ee(z), tt(), H())
    );
  }
}
class hr {
  constructor(e, t, r, s, o) {
    ((this.resumeToken = e),
      (this.current = t),
      (this.addedDocuments = r),
      (this.modifiedDocuments = s),
      (this.removedDocuments = o));
  }
  static createSynthesizedTargetChangeForCurrentChange(e, t, r) {
    return new hr(r, t, H(), H(), H());
  }
}
/**
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
 */ class Kr {
  constructor(e, t, r, s) {
    ((this.be = e), (this.removedTargetIds = t), (this.key = r), (this.De = s));
  }
}
class Tl {
  constructor(e, t) {
    ((this.targetId = e), (this.Ce = t));
  }
}
class Il {
  constructor(e, t, r = fe.EMPTY_BYTE_STRING, s = null) {
    ((this.state = e),
      (this.targetIds = t),
      (this.resumeToken = r),
      (this.cause = s));
  }
}
class Rc {
  constructor() {
    ((this.ve = 0),
      (this.Fe = Sc()),
      (this.Me = fe.EMPTY_BYTE_STRING),
      (this.xe = !1),
      (this.Oe = !0));
  }
  get current() {
    return this.xe;
  }
  get resumeToken() {
    return this.Me;
  }
  get Ne() {
    return this.ve !== 0;
  }
  get Be() {
    return this.Oe;
  }
  Le(e) {
    e.approximateByteSize() > 0 && ((this.Oe = !0), (this.Me = e));
  }
  ke() {
    let e = H(),
      t = H(),
      r = H();
    return (
      this.Fe.forEach((s, o) => {
        switch (o) {
          case 0:
            e = e.add(s);
            break;
          case 2:
            t = t.add(s);
            break;
          case 1:
            r = r.add(s);
            break;
          default:
            x(38017, { changeType: o });
        }
      }),
      new hr(this.Me, this.xe, e, t, r)
    );
  }
  qe() {
    ((this.Oe = !1), (this.Fe = Sc()));
  }
  Qe(e, t) {
    ((this.Oe = !0), (this.Fe = this.Fe.insert(e, t)));
  }
  $e(e) {
    ((this.Oe = !0), (this.Fe = this.Fe.remove(e)));
  }
  Ue() {
    this.ve += 1;
  }
  Ke() {
    ((this.ve -= 1), K(this.ve >= 0, 3241, { ve: this.ve }));
  }
  We() {
    ((this.Oe = !0), (this.xe = !0));
  }
}
class vm {
  constructor(e) {
    ((this.Ge = e),
      (this.ze = new Map()),
      (this.je = tt()),
      (this.Je = Br()),
      (this.He = Br()),
      (this.Ye = new ee(z)));
  }
  Ze(e) {
    for (const t of e.be)
      e.De && e.De.isFoundDocument()
        ? this.Xe(t, e.De)
        : this.et(t, e.key, e.De);
    for (const t of e.removedTargetIds) this.et(t, e.key, e.De);
  }
  tt(e) {
    this.forEachTarget(e, (t) => {
      const r = this.nt(t);
      switch (e.state) {
        case 0:
          this.rt(t) && r.Le(e.resumeToken);
          break;
        case 1:
          (r.Ke(), r.Ne || r.qe(), r.Le(e.resumeToken));
          break;
        case 2:
          (r.Ke(), r.Ne || this.removeTarget(t));
          break;
        case 3:
          this.rt(t) && (r.We(), r.Le(e.resumeToken));
          break;
        case 4:
          this.rt(t) && (this.it(t), r.Le(e.resumeToken));
          break;
        default:
          x(56790, { state: e.state });
      }
    });
  }
  forEachTarget(e, t) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(t)
      : this.ze.forEach((r, s) => {
          this.rt(s) && t(s);
        });
  }
  st(e) {
    const t = e.targetId,
      r = e.Ce.count,
      s = this.ot(t);
    if (s) {
      const o = s.target;
      if (Di(o))
        if (r === 0) {
          const a = new M(o.path);
          this.et(t, a, Te.newNoDocument(a, F.min()));
        } else K(r === 1, 20013, { expectedCount: r });
      else {
        const a = this._t(t);
        if (a !== r) {
          const u = this.ut(e),
            h = u ? this.ct(u, e, a) : 1;
          if (h !== 0) {
            this.it(t);
            const d =
              h === 2
                ? 'TargetPurposeExistenceFilterMismatchBloom'
                : 'TargetPurposeExistenceFilterMismatch';
            this.Ye = this.Ye.insert(t, d);
          }
        }
      }
    }
  }
  ut(e) {
    const t = e.Ce.unchangedNames;
    if (!t || !t.bits) return null;
    const {
      bits: { bitmap: r = '', padding: s = 0 },
      hashCount: o = 0,
    } = t;
    let a, u;
    try {
      a = It(r).toUint8Array();
    } catch (h) {
      if (h instanceof zu)
        return (
          un(
            'Decoding the base64 bloom filter in existence filter failed (' +
              h.message +
              '); ignoring the bloom filter and falling back to full re-query.'
          ),
          null
        );
      throw h;
    }
    try {
      u = new ao(a, s, o);
    } catch (h) {
      return (
        un(
          h instanceof zn
            ? 'BloomFilter error: '
            : 'Applying bloom filter failed: ',
          h
        ),
        null
      );
    }
    return u.ge === 0 ? null : u;
  }
  ct(e, t, r) {
    return t.Ce.count === r - this.Pt(e, t.targetId) ? 0 : 2;
  }
  Pt(e, t) {
    const r = this.Ge.getRemoteKeysForTarget(t);
    let s = 0;
    return (
      r.forEach((o) => {
        const a = this.Ge.ht(),
          u = `projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;
        e.mightContain(u) || (this.et(t, o, null), s++);
      }),
      s
    );
  }
  Tt(e) {
    const t = new Map();
    this.ze.forEach((o, a) => {
      const u = this.ot(a);
      if (u) {
        if (o.current && Di(u.target)) {
          const h = new M(u.target.path);
          this.It(h).has(a) ||
            this.Et(a, h) ||
            this.et(a, h, Te.newNoDocument(h, e));
        }
        o.Be && (t.set(a, o.ke()), o.qe());
      }
    });
    let r = H();
    (this.He.forEach((o, a) => {
      let u = !0;
      (a.forEachWhile((h) => {
        const d = this.ot(h);
        return (
          !d || d.purpose === 'TargetPurposeLimboResolution' || ((u = !1), !1)
        );
      }),
        u && (r = r.add(o)));
    }),
      this.je.forEach((o, a) => a.setReadTime(e)));
    const s = new ks(e, t, this.Ye, this.je, r);
    return (
      (this.je = tt()),
      (this.Je = Br()),
      (this.He = Br()),
      (this.Ye = new ee(z)),
      s
    );
  }
  Xe(e, t) {
    if (!this.rt(e)) return;
    const r = this.Et(e, t.key) ? 2 : 0;
    (this.nt(e).Qe(t.key, r),
      (this.je = this.je.insert(t.key, t)),
      (this.Je = this.Je.insert(t.key, this.It(t.key).add(e))),
      (this.He = this.He.insert(t.key, this.dt(t.key).add(e))));
  }
  et(e, t, r) {
    if (!this.rt(e)) return;
    const s = this.nt(e);
    (this.Et(e, t) ? s.Qe(t, 1) : s.$e(t),
      (this.He = this.He.insert(t, this.dt(t).delete(e))),
      (this.He = this.He.insert(t, this.dt(t).add(e))),
      r && (this.je = this.je.insert(t, r)));
  }
  removeTarget(e) {
    this.ze.delete(e);
  }
  _t(e) {
    const t = this.nt(e).ke();
    return (
      this.Ge.getRemoteKeysForTarget(e).size +
      t.addedDocuments.size -
      t.removedDocuments.size
    );
  }
  Ue(e) {
    this.nt(e).Ue();
  }
  nt(e) {
    let t = this.ze.get(e);
    return (t || ((t = new Rc()), this.ze.set(e, t)), t);
  }
  dt(e) {
    let t = this.He.get(e);
    return (t || ((t = new ae(z)), (this.He = this.He.insert(e, t))), t);
  }
  It(e) {
    let t = this.Je.get(e);
    return (t || ((t = new ae(z)), (this.Je = this.Je.insert(e, t))), t);
  }
  rt(e) {
    const t = this.ot(e) !== null;
    return (t || N('WatchChangeAggregator', 'Detected inactive target', e), t);
  }
  ot(e) {
    const t = this.ze.get(e);
    return t && t.Ne ? null : this.Ge.At(e);
  }
  it(e) {
    (this.ze.set(e, new Rc()),
      this.Ge.getRemoteKeysForTarget(e).forEach((t) => {
        this.et(e, t, null);
      }));
  }
  Et(e, t) {
    return this.Ge.getRemoteKeysForTarget(e).has(t);
  }
}
function Br() {
  return new ee(M.comparator);
}
function Sc() {
  return new ee(M.comparator);
}
const wm = { asc: 'ASCENDING', desc: 'DESCENDING' },
  Am = {
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY',
  },
  Rm = { and: 'AND', or: 'OR' };
class Sm {
  constructor(e, t) {
    ((this.databaseId = e), (this.useProto3Json = t));
  }
}
function Li(n, e) {
  return n.useProto3Json || As(e) ? e : { value: e };
}
function ls(n, e) {
  return n.useProto3Json
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function vl(n, e) {
  return n.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function Pm(n, e) {
  return ls(n, e.toTimestamp());
}
function Fe(n) {
  return (
    K(!!n, 49232),
    F.fromTimestamp(
      (function (t) {
        const r = Tt(t);
        return new X(r.seconds, r.nanos);
      })(n)
    )
  );
}
function co(n, e) {
  return xi(n, e).canonicalString();
}
function xi(n, e) {
  const t = (function (s) {
    return new J(['projects', s.projectId, 'databases', s.database]);
  })(n).child('documents');
  return e === void 0 ? t : t.child(e);
}
function wl(n) {
  const e = J.fromString(n);
  return (K(Cl(e), 10190, { key: e.toString() }), e);
}
function Ui(n, e) {
  return co(n.databaseId, e.path);
}
function mi(n, e) {
  const t = wl(e);
  if (t.get(1) !== n.databaseId.projectId)
    throw new D(
      S.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        t.get(1) +
        ' vs ' +
        n.databaseId.projectId
    );
  if (t.get(3) !== n.databaseId.database)
    throw new D(
      S.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        t.get(3) +
        ' vs ' +
        n.databaseId.database
    );
  return new M(Rl(t));
}
function Al(n, e) {
  return co(n.databaseId, e);
}
function Cm(n) {
  const e = wl(n);
  return e.length === 4 ? J.emptyPath() : Rl(e);
}
function Fi(n) {
  return new J([
    'projects',
    n.databaseId.projectId,
    'databases',
    n.databaseId.database,
  ]).canonicalString();
}
function Rl(n) {
  return (
    K(n.length > 4 && n.get(4) === 'documents', 29091, { key: n.toString() }),
    n.popFirst(5)
  );
}
function Pc(n, e, t) {
  return { name: Ui(n, e), fields: t.value.mapValue.fields };
}
function bm(n, e) {
  let t;
  if ('targetChange' in e) {
    e.targetChange;
    const r = (function (d) {
        return d === 'NO_CHANGE'
          ? 0
          : d === 'ADD'
            ? 1
            : d === 'REMOVE'
              ? 2
              : d === 'CURRENT'
                ? 3
                : d === 'RESET'
                  ? 4
                  : x(39313, { state: d });
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      s = e.targetChange.targetIds || [],
      o = (function (d, p) {
        return d.useProto3Json
          ? (K(p === void 0 || typeof p == 'string', 58123),
            fe.fromBase64String(p || ''))
          : (K(
              p === void 0 || p instanceof Buffer || p instanceof Uint8Array,
              16193
            ),
            fe.fromUint8Array(p || new Uint8Array()));
      })(n, e.targetChange.resumeToken),
      a = e.targetChange.cause,
      u =
        a &&
        (function (d) {
          const p = d.code === void 0 ? S.UNKNOWN : El(d.code);
          return new D(p, d.message || '');
        })(a);
    t = new Il(r, s, o, u || null);
  } else if ('documentChange' in e) {
    e.documentChange;
    const r = e.documentChange;
    (r.document, r.document.name, r.document.updateTime);
    const s = mi(n, r.document.name),
      o = Fe(r.document.updateTime),
      a = r.document.createTime ? Fe(r.document.createTime) : F.min(),
      u = new ke({ mapValue: { fields: r.document.fields } }),
      h = Te.newFoundDocument(s, o, a, u),
      d = r.targetIds || [],
      p = r.removedTargetIds || [];
    t = new Kr(d, p, h.key, h);
  } else if ('documentDelete' in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const s = mi(n, r.document),
      o = r.readTime ? Fe(r.readTime) : F.min(),
      a = Te.newNoDocument(s, o),
      u = r.removedTargetIds || [];
    t = new Kr([], u, a.key, a);
  } else if ('documentRemove' in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const s = mi(n, r.document),
      o = r.removedTargetIds || [];
    t = new Kr([], o, s, null);
  } else {
    if (!('filter' in e)) return x(11601, { Rt: e });
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: s = 0, unchangedNames: o } = r,
        a = new ym(s, o),
        u = r.targetId;
      t = new Tl(u, a);
    }
  }
  return t;
}
function km(n, e) {
  let t;
  if (e instanceof lr) t = { update: Pc(n, e.key, e.value) };
  else if (e instanceof yl) t = { delete: Ui(n, e.key) };
  else if (e instanceof jt)
    t = { update: Pc(n, e.key, e.data), updateMask: Fm(e.fieldMask) };
  else {
    if (!(e instanceof mm)) return x(16599, { Vt: e.type });
    t = { verify: Ui(n, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (t.updateTransforms = e.fieldTransforms.map((r) =>
        (function (o, a) {
          const u = a.transform;
          if (u instanceof cs)
            return {
              fieldPath: a.field.canonicalString(),
              setToServerValue: 'REQUEST_TIME',
            };
          if (u instanceof nr)
            return {
              fieldPath: a.field.canonicalString(),
              appendMissingElements: { values: u.elements },
            };
          if (u instanceof rr)
            return {
              fieldPath: a.field.canonicalString(),
              removeAllFromArray: { values: u.elements },
            };
          if (u instanceof us)
            return { fieldPath: a.field.canonicalString(), increment: u.Ae };
          throw x(20930, { transform: a.transform });
        })(0, r)
      )),
    e.precondition.isNone ||
      (t.currentDocument = (function (s, o) {
        return o.updateTime !== void 0
          ? { updateTime: Pm(s, o.updateTime) }
          : o.exists !== void 0
            ? { exists: o.exists }
            : x(27497);
      })(n, e.precondition)),
    t
  );
}
function Vm(n, e) {
  return n && n.length > 0
    ? (K(e !== void 0, 14353),
      n.map((t) =>
        (function (s, o) {
          let a = s.updateTime ? Fe(s.updateTime) : Fe(o);
          return (
            a.isEqual(F.min()) && (a = Fe(o)),
            new dm(a, s.transformResults || [])
          );
        })(t, e)
      ))
    : [];
}
function Nm(n, e) {
  return { documents: [Al(n, e.path)] };
}
function Dm(n, e) {
  const t = { structuredQuery: {} },
    r = e.path;
  let s;
  (e.collectionGroup !== null
    ? ((s = r),
      (t.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((s = r.popLast()),
      (t.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (t.parent = Al(n, s)));
  const o = (function (d) {
    if (d.length !== 0) return Pl(Me.create(d, 'and'));
  })(e.filters);
  o && (t.structuredQuery.where = o);
  const a = (function (d) {
    if (d.length !== 0)
      return d.map((p) =>
        (function (v) {
          return { field: Yt(v.field), direction: Lm(v.dir) };
        })(p)
      );
  })(e.orderBy);
  a && (t.structuredQuery.orderBy = a);
  const u = Li(n, e.limit);
  return (
    u !== null && (t.structuredQuery.limit = u),
    e.startAt &&
      (t.structuredQuery.startAt = (function (d) {
        return { before: d.inclusive, values: d.position };
      })(e.startAt)),
    e.endAt &&
      (t.structuredQuery.endAt = (function (d) {
        return { before: !d.inclusive, values: d.position };
      })(e.endAt)),
    { ft: t, parent: s }
  );
}
function Om(n) {
  let e = Cm(n.parent);
  const t = n.structuredQuery,
    r = t.from ? t.from.length : 0;
  let s = null;
  if (r > 0) {
    K(r === 1, 65062);
    const p = t.from[0];
    p.allDescendants ? (s = p.collectionId) : (e = e.child(p.collectionId));
  }
  let o = [];
  t.where &&
    (o = (function (y) {
      const v = Sl(y);
      return v instanceof Me && el(v) ? v.getFilters() : [v];
    })(t.where));
  let a = [];
  t.orderBy &&
    (a = (function (y) {
      return y.map((v) =>
        (function (b) {
          return new as(
            Xt(b.field),
            (function (V) {
              switch (V) {
                case 'ASCENDING':
                  return 'asc';
                case 'DESCENDING':
                  return 'desc';
                default:
                  return;
              }
            })(b.direction)
          );
        })(v)
      );
    })(t.orderBy));
  let u = null;
  t.limit &&
    (u = (function (y) {
      let v;
      return ((v = typeof y == 'object' ? y.value : y), As(v) ? null : v);
    })(t.limit));
  let h = null;
  t.startAt &&
    (h = (function (y) {
      const v = !!y.before,
        C = y.values || [];
      return new os(C, v);
    })(t.startAt));
  let d = null;
  return (
    t.endAt &&
      (d = (function (y) {
        const v = !y.before,
          C = y.values || [];
        return new os(C, v);
      })(t.endAt)),
    Zp(e, s, a, o, u, 'F', h, d)
  );
}
function Mm(n, e) {
  const t = (function (s) {
    switch (s) {
      case 'TargetPurposeListen':
        return null;
      case 'TargetPurposeExistenceFilterMismatch':
        return 'existence-filter-mismatch';
      case 'TargetPurposeExistenceFilterMismatchBloom':
        return 'existence-filter-mismatch-bloom';
      case 'TargetPurposeLimboResolution':
        return 'limbo-document';
      default:
        return x(28987, { purpose: s });
    }
  })(e.purpose);
  return t == null ? null : { 'goog-listen-tags': t };
}
function Sl(n) {
  return n.unaryFilter !== void 0
    ? (function (t) {
        switch (t.unaryFilter.op) {
          case 'IS_NAN':
            const r = Xt(t.unaryFilter.field);
            return ie.create(r, '==', { doubleValue: NaN });
          case 'IS_NULL':
            const s = Xt(t.unaryFilter.field);
            return ie.create(s, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            const o = Xt(t.unaryFilter.field);
            return ie.create(o, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            const a = Xt(t.unaryFilter.field);
            return ie.create(a, '!=', { nullValue: 'NULL_VALUE' });
          case 'OPERATOR_UNSPECIFIED':
            return x(61313);
          default:
            return x(60726);
        }
      })(n)
    : n.fieldFilter !== void 0
      ? (function (t) {
          return ie.create(
            Xt(t.fieldFilter.field),
            (function (s) {
              switch (s) {
                case 'EQUAL':
                  return '==';
                case 'NOT_EQUAL':
                  return '!=';
                case 'GREATER_THAN':
                  return '>';
                case 'GREATER_THAN_OR_EQUAL':
                  return '>=';
                case 'LESS_THAN':
                  return '<';
                case 'LESS_THAN_OR_EQUAL':
                  return '<=';
                case 'ARRAY_CONTAINS':
                  return 'array-contains';
                case 'IN':
                  return 'in';
                case 'NOT_IN':
                  return 'not-in';
                case 'ARRAY_CONTAINS_ANY':
                  return 'array-contains-any';
                case 'OPERATOR_UNSPECIFIED':
                  return x(58110);
                default:
                  return x(50506);
              }
            })(t.fieldFilter.op),
            t.fieldFilter.value
          );
        })(n)
      : n.compositeFilter !== void 0
        ? (function (t) {
            return Me.create(
              t.compositeFilter.filters.map((r) => Sl(r)),
              (function (s) {
                switch (s) {
                  case 'AND':
                    return 'and';
                  case 'OR':
                    return 'or';
                  default:
                    return x(1026);
                }
              })(t.compositeFilter.op)
            );
          })(n)
        : x(30097, { filter: n });
}
function Lm(n) {
  return wm[n];
}
function xm(n) {
  return Am[n];
}
function Um(n) {
  return Rm[n];
}
function Yt(n) {
  return { fieldPath: n.canonicalString() };
}
function Xt(n) {
  return de.fromServerFormat(n.fieldPath);
}
function Pl(n) {
  return n instanceof ie
    ? (function (t) {
        if (t.op === '==') {
          if (pc(t.value))
            return { unaryFilter: { field: Yt(t.field), op: 'IS_NAN' } };
          if (fc(t.value))
            return { unaryFilter: { field: Yt(t.field), op: 'IS_NULL' } };
        } else if (t.op === '!=') {
          if (pc(t.value))
            return { unaryFilter: { field: Yt(t.field), op: 'IS_NOT_NAN' } };
          if (fc(t.value))
            return { unaryFilter: { field: Yt(t.field), op: 'IS_NOT_NULL' } };
        }
        return {
          fieldFilter: { field: Yt(t.field), op: xm(t.op), value: t.value },
        };
      })(n)
    : n instanceof Me
      ? (function (t) {
          const r = t.getFilters().map((s) => Pl(s));
          return r.length === 1
            ? r[0]
            : { compositeFilter: { op: Um(t.op), filters: r } };
        })(n)
      : x(54877, { filter: n });
}
function Fm(n) {
  const e = [];
  return (
    n.fields.forEach((t) => e.push(t.canonicalString())),
    { fieldPaths: e }
  );
}
function Cl(n) {
  return n.length >= 4 && n.get(0) === 'projects' && n.get(2) === 'databases';
}
/**
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
 */ class dt {
  constructor(
    e,
    t,
    r,
    s,
    o = F.min(),
    a = F.min(),
    u = fe.EMPTY_BYTE_STRING,
    h = null
  ) {
    ((this.target = e),
      (this.targetId = t),
      (this.purpose = r),
      (this.sequenceNumber = s),
      (this.snapshotVersion = o),
      (this.lastLimboFreeSnapshotVersion = a),
      (this.resumeToken = u),
      (this.expectedCount = h));
  }
  withSequenceNumber(e) {
    return new dt(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(e, t) {
    return new dt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    );
  }
  withExpectedCount(e) {
    return new dt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new dt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
    );
  }
}
/**
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
 */ class Bm {
  constructor(e) {
    this.yt = e;
  }
}
function qm(n) {
  const e = Om({ parent: n.parent, structuredQuery: n.structuredQuery });
  return n.limitType === 'LAST' ? Mi(e, e.limit, 'L') : e;
}
/**
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
 */ class jm {
  constructor() {
    this.Cn = new $m();
  }
  addToCollectionParentIndex(e, t) {
    return (this.Cn.add(t), P.resolve());
  }
  getCollectionParents(e, t) {
    return P.resolve(this.Cn.getEntries(t));
  }
  addFieldIndex(e, t) {
    return P.resolve();
  }
  deleteFieldIndex(e, t) {
    return P.resolve();
  }
  deleteAllFieldIndexes(e) {
    return P.resolve();
  }
  createTargetIndexes(e, t) {
    return P.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return P.resolve(null);
  }
  getIndexType(e, t) {
    return P.resolve(0);
  }
  getFieldIndexes(e, t) {
    return P.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return P.resolve(null);
  }
  getMinOffset(e, t) {
    return P.resolve(Et.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return P.resolve(Et.min());
  }
  updateCollectionGroup(e, t, r) {
    return P.resolve();
  }
  updateIndexEntries(e, t) {
    return P.resolve();
  }
}
class $m {
  constructor() {
    this.index = {};
  }
  add(e) {
    const t = e.lastSegment(),
      r = e.popLast(),
      s = this.index[t] || new ae(J.comparator),
      o = !s.has(r);
    return ((this.index[t] = s.add(r)), o);
  }
  has(e) {
    const t = e.lastSegment(),
      r = e.popLast(),
      s = this.index[t];
    return s && s.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new ae(J.comparator)).toArray();
  }
}
/**
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
 */ const Cc = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0,
  },
  bl = 41943040;
class Se {
  static withCacheSize(e) {
    return new Se(
      e,
      Se.DEFAULT_COLLECTION_PERCENTILE,
      Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    );
  }
  constructor(e, t, r) {
    ((this.cacheSizeCollectionThreshold = e),
      (this.percentileToCollect = t),
      (this.maximumSequenceNumbersToCollect = r));
  }
}
/**
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
 */ ((Se.DEFAULT_COLLECTION_PERCENTILE = 10),
  (Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (Se.DEFAULT = new Se(
    bl,
    Se.DEFAULT_COLLECTION_PERCENTILE,
    Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (Se.DISABLED = new Se(-1, 0, 0)));
/**
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
 */ class fn {
  constructor(e) {
    this.ar = e;
  }
  next() {
    return ((this.ar += 2), this.ar);
  }
  static ur() {
    return new fn(0);
  }
  static cr() {
    return new fn(-1);
  }
}
/**
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
 */ const bc = 'LruGarbageCollector',
  zm = 1048576;
function kc([n, e], [t, r]) {
  const s = z(n, t);
  return s === 0 ? z(e, r) : s;
}
class Hm {
  constructor(e) {
    ((this.Ir = e), (this.buffer = new ae(kc)), (this.Er = 0));
  }
  dr() {
    return ++this.Er;
  }
  Ar(e) {
    const t = [e, this.dr()];
    if (this.buffer.size < this.Ir) this.buffer = this.buffer.add(t);
    else {
      const r = this.buffer.last();
      kc(t, r) < 0 && (this.buffer = this.buffer.delete(r).add(t));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class Wm {
  constructor(e, t, r) {
    ((this.garbageCollector = e),
      (this.asyncQueue = t),
      (this.localStore = r),
      (this.Rr = null));
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Vr(6e4);
  }
  stop() {
    this.Rr && (this.Rr.cancel(), (this.Rr = null));
  }
  get started() {
    return this.Rr !== null;
  }
  Vr(e) {
    (N(bc, `Garbage collection scheduled in ${e}ms`),
      (this.Rr = this.asyncQueue.enqueueAfterDelay(
        'lru_garbage_collection',
        e,
        async () => {
          this.Rr = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (t) {
            En(t)
              ? N(bc, 'Ignoring IndexedDB error during garbage collection: ', t)
              : await yn(t);
          }
          await this.Vr(3e5);
        }
      )));
  }
}
class Gm {
  constructor(e, t) {
    ((this.mr = e), (this.params = t));
  }
  calculateTargetCount(e, t) {
    return this.mr.gr(e).next((r) => Math.floor((t / 100) * r));
  }
  nthSequenceNumber(e, t) {
    if (t === 0) return P.resolve(ws.ce);
    const r = new Hm(t);
    return this.mr
      .forEachTarget(e, (s) => r.Ar(s.sequenceNumber))
      .next(() => this.mr.pr(e, (s) => r.Ar(s)))
      .next(() => r.maxValue);
  }
  removeTargets(e, t, r) {
    return this.mr.removeTargets(e, t, r);
  }
  removeOrphanedDocuments(e, t) {
    return this.mr.removeOrphanedDocuments(e, t);
  }
  collect(e, t) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? (N('LruGarbageCollector', 'Garbage collection skipped; disabled'),
        P.resolve(Cc))
      : this.getCacheSize(e).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? (N(
                'LruGarbageCollector',
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
              ),
              Cc)
            : this.yr(e, t)
        );
  }
  getCacheSize(e) {
    return this.mr.getCacheSize(e);
  }
  yr(e, t) {
    let r, s, o, a, u, h, d;
    const p = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect)
      .next(
        (y) => (
          y > this.params.maximumSequenceNumbersToCollect
            ? (N(
                'LruGarbageCollector',
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`
              ),
              (s = this.params.maximumSequenceNumbersToCollect))
            : (s = y),
          (a = Date.now()),
          this.nthSequenceNumber(e, s)
        )
      )
      .next((y) => ((r = y), (u = Date.now()), this.removeTargets(e, r, t)))
      .next(
        (y) => ((o = y), (h = Date.now()), this.removeOrphanedDocuments(e, r))
      )
      .next(
        (y) => (
          (d = Date.now()),
          Qt() <= $.DEBUG &&
            N(
              'LruGarbageCollector',
              `LRU Garbage Collection
	Counted targets in ${a - p}ms
	Determined least recently used ${s} in ` +
                (u - a) +
                `ms
	Removed ${o} targets in ` +
                (h - u) +
                `ms
	Removed ${y} documents in ` +
                (d - h) +
                `ms
Total Duration: ${d - p}ms`
            ),
          P.resolve({
            didRun: !0,
            sequenceNumbersCollected: s,
            targetsRemoved: o,
            documentsRemoved: y,
          })
        )
      );
  }
}
function Km(n, e) {
  return new Gm(n, e);
}
/**
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
 */ class Qm {
  constructor() {
    ((this.changes = new qt(
      (e) => e.toString(),
      (e, t) => e.isEqual(t)
    )),
      (this.changesApplied = !1));
  }
  addEntry(e) {
    (this.assertNotApplied(), this.changes.set(e.key, e));
  }
  removeEntry(e, t) {
    (this.assertNotApplied(),
      this.changes.set(e, Te.newInvalidDocument(e).setReadTime(t)));
  }
  getEntry(e, t) {
    this.assertNotApplied();
    const r = this.changes.get(t);
    return r !== void 0 ? P.resolve(r) : this.getFromCache(e, t);
  }
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  apply(e) {
    return (
      this.assertNotApplied(),
      (this.changesApplied = !0),
      this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
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
 *//**
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
 */ class Jm {
  constructor(e, t) {
    ((this.overlayedDocument = e), (this.mutatedFields = t));
  }
}
/**
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
 */ class Ym {
  constructor(e, t, r, s) {
    ((this.remoteDocumentCache = e),
      (this.mutationQueue = t),
      (this.documentOverlayCache = r),
      (this.indexManager = s));
  }
  getDocument(e, t) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, t)
      .next((s) => ((r = s), this.remoteDocumentCache.getEntry(e, t)))
      .next((s) => (r !== null && Qn(r.mutation, s, De.empty(), X.now()), s));
  }
  getDocuments(e, t) {
    return this.remoteDocumentCache
      .getEntries(e, t)
      .next((r) => this.getLocalViewOfDocuments(e, r, H()).next(() => r));
  }
  getLocalViewOfDocuments(e, t, r = H()) {
    const s = Nt();
    return this.populateOverlays(e, s, t).next(() =>
      this.computeViews(e, t, s, r).next((o) => {
        let a = $n();
        return (
          o.forEach((u, h) => {
            a = a.insert(u, h.overlayedDocument);
          }),
          a
        );
      })
    );
  }
  getOverlayedDocuments(e, t) {
    const r = Nt();
    return this.populateOverlays(e, r, t).next(() =>
      this.computeViews(e, t, r, H())
    );
  }
  populateOverlays(e, t, r) {
    const s = [];
    return (
      r.forEach((o) => {
        t.has(o) || s.push(o);
      }),
      this.documentOverlayCache.getOverlays(e, s).next((o) => {
        o.forEach((a, u) => {
          t.set(a, u);
        });
      })
    );
  }
  computeViews(e, t, r, s) {
    let o = tt();
    const a = Kn(),
      u = (function () {
        return Kn();
      })();
    return (
      t.forEach((h, d) => {
        const p = r.get(d.key);
        s.has(d.key) && (p === void 0 || p.mutation instanceof jt)
          ? (o = o.insert(d.key, d))
          : p !== void 0
            ? (a.set(d.key, p.mutation.getFieldMask()),
              Qn(p.mutation, d, p.mutation.getFieldMask(), X.now()))
            : a.set(d.key, De.empty());
      }),
      this.recalculateAndSaveOverlays(e, o).next(
        (h) => (
          h.forEach((d, p) => a.set(d, p)),
          t.forEach((d, p) => u.set(d, new Jm(p, a.get(d) ?? null))),
          u
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, t) {
    const r = Kn();
    let s = new ee((a, u) => a - u),
      o = H();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, t)
      .next((a) => {
        for (const u of a)
          u.keys().forEach((h) => {
            const d = t.get(h);
            if (d === null) return;
            let p = r.get(h) || De.empty();
            ((p = u.applyToLocalView(d, p)), r.set(h, p));
            const y = (s.get(u.batchId) || H()).add(h);
            s = s.insert(u.batchId, y);
          });
      })
      .next(() => {
        const a = [],
          u = s.getReverseIterator();
        for (; u.hasNext(); ) {
          const h = u.getNext(),
            d = h.key,
            p = h.value,
            y = ll();
          (p.forEach((v) => {
            if (!o.has(v)) {
              const C = gl(t.get(v), r.get(v));
              (C !== null && y.set(v, C), (o = o.add(v)));
            }
          }),
            a.push(this.documentOverlayCache.saveOverlays(e, d, y)));
        }
        return P.waitFor(a);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache
      .getEntries(e, t)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, t, r, s) {
    return (function (a) {
      return (
        M.isDocumentKey(a.path) &&
        a.collectionGroup === null &&
        a.filters.length === 0
      );
    })(t)
      ? this.getDocumentsMatchingDocumentQuery(e, t.path)
      : il(t)
        ? this.getDocumentsMatchingCollectionGroupQuery(e, t, r, s)
        : this.getDocumentsMatchingCollectionQuery(e, t, r, s);
  }
  getNextDocuments(e, t, r, s) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, t, r, s)
      .next((o) => {
        const a =
          s - o.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                t,
                r.largestBatchId,
                s - o.size
              )
            : P.resolve(Nt());
        let u = Xn,
          h = o;
        return a.next((d) =>
          P.forEach(
            d,
            (p, y) => (
              u < y.largestBatchId && (u = y.largestBatchId),
              o.get(p)
                ? P.resolve()
                : this.remoteDocumentCache.getEntry(e, p).next((v) => {
                    h = h.insert(p, v);
                  })
            )
          )
            .next(() => this.populateOverlays(e, d, o))
            .next(() => this.computeViews(e, h, d, H()))
            .next((p) => ({ batchId: u, changes: ul(p) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new M(t)).next((r) => {
      let s = $n();
      return (r.isFoundDocument() && (s = s.insert(r.key, r)), s);
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, r, s) {
    const o = t.collectionGroup;
    let a = $n();
    return this.indexManager.getCollectionParents(e, o).next((u) =>
      P.forEach(u, (h) => {
        const d = (function (y, v) {
          return new ur(
            v,
            null,
            y.explicitOrderBy.slice(),
            y.filters.slice(),
            y.limit,
            y.limitType,
            y.startAt,
            y.endAt
          );
        })(t, h.child(o));
        return this.getDocumentsMatchingCollectionQuery(e, d, r, s).next(
          (p) => {
            p.forEach((y, v) => {
              a = a.insert(y, v);
            });
          }
        );
      }).next(() => a)
    );
  }
  getDocumentsMatchingCollectionQuery(e, t, r, s) {
    let o;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, t.path, r.largestBatchId)
      .next(
        (a) => (
          (o = a),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, r, o, s)
        )
      )
      .next((a) => {
        o.forEach((h, d) => {
          const p = d.getKey();
          a.get(p) === null && (a = a.insert(p, Te.newInvalidDocument(p)));
        });
        let u = $n();
        return (
          a.forEach((h, d) => {
            const p = o.get(h);
            (p !== void 0 && Qn(p.mutation, d, De.empty(), X.now()),
              Ps(t, d) && (u = u.insert(h, d)));
          }),
          u
        );
      });
  }
}
/**
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
 */ class Xm {
  constructor(e) {
    ((this.serializer = e), (this.Lr = new Map()), (this.kr = new Map()));
  }
  getBundleMetadata(e, t) {
    return P.resolve(this.Lr.get(t));
  }
  saveBundleMetadata(e, t) {
    return (
      this.Lr.set(
        t.id,
        (function (s) {
          return { id: s.id, version: s.version, createTime: Fe(s.createTime) };
        })(t)
      ),
      P.resolve()
    );
  }
  getNamedQuery(e, t) {
    return P.resolve(this.kr.get(t));
  }
  saveNamedQuery(e, t) {
    return (
      this.kr.set(
        t.name,
        (function (s) {
          return {
            name: s.name,
            query: qm(s.bundledQuery),
            readTime: Fe(s.readTime),
          };
        })(t)
      ),
      P.resolve()
    );
  }
}
/**
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
 */ class Zm {
  constructor() {
    ((this.overlays = new ee(M.comparator)), (this.qr = new Map()));
  }
  getOverlay(e, t) {
    return P.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const r = Nt();
    return P.forEach(t, (s) =>
      this.getOverlay(e, s).next((o) => {
        o !== null && r.set(s, o);
      })
    ).next(() => r);
  }
  saveOverlays(e, t, r) {
    return (
      r.forEach((s, o) => {
        this.St(e, t, o);
      }),
      P.resolve()
    );
  }
  removeOverlaysForBatchId(e, t, r) {
    const s = this.qr.get(r);
    return (
      s !== void 0 &&
        (s.forEach((o) => (this.overlays = this.overlays.remove(o))),
        this.qr.delete(r)),
      P.resolve()
    );
  }
  getOverlaysForCollection(e, t, r) {
    const s = Nt(),
      o = t.length + 1,
      a = new M(t.child('')),
      u = this.overlays.getIteratorFrom(a);
    for (; u.hasNext(); ) {
      const h = u.getNext().value,
        d = h.getKey();
      if (!t.isPrefixOf(d.path)) break;
      d.path.length === o && h.largestBatchId > r && s.set(h.getKey(), h);
    }
    return P.resolve(s);
  }
  getOverlaysForCollectionGroup(e, t, r, s) {
    let o = new ee((d, p) => d - p);
    const a = this.overlays.getIterator();
    for (; a.hasNext(); ) {
      const d = a.getNext().value;
      if (d.getKey().getCollectionGroup() === t && d.largestBatchId > r) {
        let p = o.get(d.largestBatchId);
        (p === null && ((p = Nt()), (o = o.insert(d.largestBatchId, p))),
          p.set(d.getKey(), d));
      }
    }
    const u = Nt(),
      h = o.getIterator();
    for (
      ;
      h.hasNext() &&
      (h.getNext().value.forEach((d, p) => u.set(d, p)), !(u.size() >= s));

    );
    return P.resolve(u);
  }
  St(e, t, r) {
    const s = this.overlays.get(r.key);
    if (s !== null) {
      const a = this.qr.get(s.largestBatchId).delete(r.key);
      this.qr.set(s.largestBatchId, a);
    }
    this.overlays = this.overlays.insert(r.key, new _m(t, r));
    let o = this.qr.get(t);
    (o === void 0 && ((o = H()), this.qr.set(t, o)),
      this.qr.set(t, o.add(r.key)));
  }
}
/**
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
 */ class eg {
  constructor() {
    this.sessionToken = fe.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return P.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    return ((this.sessionToken = t), P.resolve());
  }
}
/**
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
 */ class uo {
  constructor() {
    ((this.Qr = new ae(ce.$r)), (this.Ur = new ae(ce.Kr)));
  }
  isEmpty() {
    return this.Qr.isEmpty();
  }
  addReference(e, t) {
    const r = new ce(e, t);
    ((this.Qr = this.Qr.add(r)), (this.Ur = this.Ur.add(r)));
  }
  Wr(e, t) {
    e.forEach((r) => this.addReference(r, t));
  }
  removeReference(e, t) {
    this.Gr(new ce(e, t));
  }
  zr(e, t) {
    e.forEach((r) => this.removeReference(r, t));
  }
  jr(e) {
    const t = new M(new J([])),
      r = new ce(t, e),
      s = new ce(t, e + 1),
      o = [];
    return (
      this.Ur.forEachInRange([r, s], (a) => {
        (this.Gr(a), o.push(a.key));
      }),
      o
    );
  }
  Jr() {
    this.Qr.forEach((e) => this.Gr(e));
  }
  Gr(e) {
    ((this.Qr = this.Qr.delete(e)), (this.Ur = this.Ur.delete(e)));
  }
  Hr(e) {
    const t = new M(new J([])),
      r = new ce(t, e),
      s = new ce(t, e + 1);
    let o = H();
    return (
      this.Ur.forEachInRange([r, s], (a) => {
        o = o.add(a.key);
      }),
      o
    );
  }
  containsKey(e) {
    const t = new ce(e, 0),
      r = this.Qr.firstAfterOrEqual(t);
    return r !== null && e.isEqual(r.key);
  }
}
class ce {
  constructor(e, t) {
    ((this.key = e), (this.Yr = t));
  }
  static $r(e, t) {
    return M.comparator(e.key, t.key) || z(e.Yr, t.Yr);
  }
  static Kr(e, t) {
    return z(e.Yr, t.Yr) || M.comparator(e.key, t.key);
  }
}
/**
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
 */ class tg {
  constructor(e, t) {
    ((this.indexManager = e),
      (this.referenceDelegate = t),
      (this.mutationQueue = []),
      (this.tr = 1),
      (this.Zr = new ae(ce.$r)));
  }
  checkEmpty(e) {
    return P.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, t, r, s) {
    const o = this.tr;
    (this.tr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]);
    const a = new gm(o, t, r, s);
    this.mutationQueue.push(a);
    for (const u of s)
      ((this.Zr = this.Zr.add(new ce(u.key, o))),
        this.indexManager.addToCollectionParentIndex(e, u.key.path.popLast()));
    return P.resolve(a);
  }
  lookupMutationBatch(e, t) {
    return P.resolve(this.Xr(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const r = t + 1,
      s = this.ei(r),
      o = s < 0 ? 0 : s;
    return P.resolve(
      this.mutationQueue.length > o ? this.mutationQueue[o] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return P.resolve(this.mutationQueue.length === 0 ? eo : this.tr - 1);
  }
  getAllMutationBatches(e) {
    return P.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const r = new ce(t, 0),
      s = new ce(t, Number.POSITIVE_INFINITY),
      o = [];
    return (
      this.Zr.forEachInRange([r, s], (a) => {
        const u = this.Xr(a.Yr);
        o.push(u);
      }),
      P.resolve(o)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let r = new ae(z);
    return (
      t.forEach((s) => {
        const o = new ce(s, 0),
          a = new ce(s, Number.POSITIVE_INFINITY);
        this.Zr.forEachInRange([o, a], (u) => {
          r = r.add(u.Yr);
        });
      }),
      P.resolve(this.ti(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const r = t.path,
      s = r.length + 1;
    let o = r;
    M.isDocumentKey(o) || (o = o.child(''));
    const a = new ce(new M(o), 0);
    let u = new ae(z);
    return (
      this.Zr.forEachWhile((h) => {
        const d = h.key.path;
        return !!r.isPrefixOf(d) && (d.length === s && (u = u.add(h.Yr)), !0);
      }, a),
      P.resolve(this.ti(u))
    );
  }
  ti(e) {
    const t = [];
    return (
      e.forEach((r) => {
        const s = this.Xr(r);
        s !== null && t.push(s);
      }),
      t
    );
  }
  removeMutationBatch(e, t) {
    (K(this.ni(t.batchId, 'removed') === 0, 55003), this.mutationQueue.shift());
    let r = this.Zr;
    return P.forEach(t.mutations, (s) => {
      const o = new ce(s.key, t.batchId);
      return (
        (r = r.delete(o)),
        this.referenceDelegate.markPotentiallyOrphaned(e, s.key)
      );
    }).next(() => {
      this.Zr = r;
    });
  }
  ir(e) {}
  containsKey(e, t) {
    const r = new ce(t, 0),
      s = this.Zr.firstAfterOrEqual(r);
    return P.resolve(t.isEqual(s && s.key));
  }
  performConsistencyCheck(e) {
    return (this.mutationQueue.length, P.resolve());
  }
  ni(e, t) {
    return this.ei(e);
  }
  ei(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  Xr(e) {
    const t = this.ei(e);
    return t < 0 || t >= this.mutationQueue.length
      ? null
      : this.mutationQueue[t];
  }
}
/**
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
 */ class ng {
  constructor(e) {
    ((this.ri = e),
      (this.docs = (function () {
        return new ee(M.comparator);
      })()),
      (this.size = 0));
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, t) {
    const r = t.key,
      s = this.docs.get(r),
      o = s ? s.size : 0,
      a = this.ri(t);
    return (
      (this.docs = this.docs.insert(r, { document: t.mutableCopy(), size: a })),
      (this.size += a - o),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const t = this.docs.get(e);
    t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
  }
  getEntry(e, t) {
    const r = this.docs.get(t);
    return P.resolve(r ? r.document.mutableCopy() : Te.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let r = tt();
    return (
      t.forEach((s) => {
        const o = this.docs.get(s);
        r = r.insert(
          s,
          o ? o.document.mutableCopy() : Te.newInvalidDocument(s)
        );
      }),
      P.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, t, r, s) {
    let o = tt();
    const a = t.path,
      u = new M(a.child('__id-9223372036854775808__')),
      h = this.docs.getIteratorFrom(u);
    for (; h.hasNext(); ) {
      const {
        key: d,
        value: { document: p },
      } = h.getNext();
      if (!a.isPrefixOf(d.path)) break;
      d.path.length > a.length + 1 ||
        Vp(kp(p), r) <= 0 ||
        ((s.has(p.key) || Ps(t, p)) && (o = o.insert(p.key, p.mutableCopy())));
    }
    return P.resolve(o);
  }
  getAllFromCollectionGroup(e, t, r, s) {
    x(9500);
  }
  ii(e, t) {
    return P.forEach(this.docs, (r) => t(r));
  }
  newChangeBuffer(e) {
    return new rg(this);
  }
  getSize(e) {
    return P.resolve(this.size);
  }
}
class rg extends Qm {
  constructor(e) {
    (super(), (this.Nr = e));
  }
  applyChanges(e) {
    const t = [];
    return (
      this.changes.forEach((r, s) => {
        s.isValidDocument()
          ? t.push(this.Nr.addEntry(e, s))
          : this.Nr.removeEntry(r);
      }),
      P.waitFor(t)
    );
  }
  getFromCache(e, t) {
    return this.Nr.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.Nr.getEntries(e, t);
  }
}
/**
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
 */ class sg {
  constructor(e) {
    ((this.persistence = e),
      (this.si = new qt((t) => ro(t), so)),
      (this.lastRemoteSnapshotVersion = F.min()),
      (this.highestTargetId = 0),
      (this.oi = 0),
      (this._i = new uo()),
      (this.targetCount = 0),
      (this.ai = fn.ur()));
  }
  forEachTarget(e, t) {
    return (this.si.forEach((r, s) => t(s)), P.resolve());
  }
  getLastRemoteSnapshotVersion(e) {
    return P.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return P.resolve(this.oi);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.ai.next()),
      P.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, t, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      t > this.oi && (this.oi = t),
      P.resolve()
    );
  }
  Pr(e) {
    this.si.set(e.target, e);
    const t = e.targetId;
    (t > this.highestTargetId &&
      ((this.ai = new fn(t)), (this.highestTargetId = t)),
      e.sequenceNumber > this.oi && (this.oi = e.sequenceNumber));
  }
  addTargetData(e, t) {
    return (this.Pr(t), (this.targetCount += 1), P.resolve());
  }
  updateTargetData(e, t) {
    return (this.Pr(t), P.resolve());
  }
  removeTargetData(e, t) {
    return (
      this.si.delete(t.target),
      this._i.jr(t.targetId),
      (this.targetCount -= 1),
      P.resolve()
    );
  }
  removeTargets(e, t, r) {
    let s = 0;
    const o = [];
    return (
      this.si.forEach((a, u) => {
        u.sequenceNumber <= t &&
          r.get(u.targetId) === null &&
          (this.si.delete(a),
          o.push(this.removeMatchingKeysForTargetId(e, u.targetId)),
          s++);
      }),
      P.waitFor(o).next(() => s)
    );
  }
  getTargetCount(e) {
    return P.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const r = this.si.get(t) || null;
    return P.resolve(r);
  }
  addMatchingKeys(e, t, r) {
    return (this._i.Wr(t, r), P.resolve());
  }
  removeMatchingKeys(e, t, r) {
    this._i.zr(t, r);
    const s = this.persistence.referenceDelegate,
      o = [];
    return (
      s &&
        t.forEach((a) => {
          o.push(s.markPotentiallyOrphaned(e, a));
        }),
      P.waitFor(o)
    );
  }
  removeMatchingKeysForTargetId(e, t) {
    return (this._i.jr(t), P.resolve());
  }
  getMatchingKeysForTargetId(e, t) {
    const r = this._i.Hr(t);
    return P.resolve(r);
  }
  containsKey(e, t) {
    return P.resolve(this._i.containsKey(t));
  }
}
/**
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
 */ class kl {
  constructor(e, t) {
    ((this.ui = {}),
      (this.overlays = {}),
      (this.ci = new ws(0)),
      (this.li = !1),
      (this.li = !0),
      (this.hi = new eg()),
      (this.referenceDelegate = e(this)),
      (this.Pi = new sg(this)),
      (this.indexManager = new jm()),
      (this.remoteDocumentCache = (function (s) {
        return new ng(s);
      })((r) => this.referenceDelegate.Ti(r))),
      (this.serializer = new Bm(t)),
      (this.Ii = new Xm(this.serializer)));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return ((this.li = !1), Promise.resolve());
  }
  get started() {
    return this.li;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    return (t || ((t = new Zm()), (this.overlays[e.toKey()] = t)), t);
  }
  getMutationQueue(e, t) {
    let r = this.ui[e.toKey()];
    return (
      r || ((r = new tg(t, this.referenceDelegate)), (this.ui[e.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.hi;
  }
  getTargetCache() {
    return this.Pi;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ii;
  }
  runTransaction(e, t, r) {
    N('MemoryPersistence', 'Starting transaction:', e);
    const s = new ig(this.ci.next());
    return (
      this.referenceDelegate.Ei(),
      r(s)
        .next((o) => this.referenceDelegate.di(s).next(() => o))
        .toPromise()
        .then((o) => (s.raiseOnCommittedEvent(), o))
    );
  }
  Ai(e, t) {
    return P.or(Object.values(this.ui).map((r) => () => r.containsKey(e, t)));
  }
}
class ig extends Dp {
  constructor(e) {
    (super(), (this.currentSequenceNumber = e));
  }
}
class lo {
  constructor(e) {
    ((this.persistence = e), (this.Ri = new uo()), (this.Vi = null));
  }
  static mi(e) {
    return new lo(e);
  }
  get fi() {
    if (this.Vi) return this.Vi;
    throw x(60996);
  }
  addReference(e, t, r) {
    return (
      this.Ri.addReference(r, t),
      this.fi.delete(r.toString()),
      P.resolve()
    );
  }
  removeReference(e, t, r) {
    return (
      this.Ri.removeReference(r, t),
      this.fi.add(r.toString()),
      P.resolve()
    );
  }
  markPotentiallyOrphaned(e, t) {
    return (this.fi.add(t.toString()), P.resolve());
  }
  removeTarget(e, t) {
    this.Ri.jr(t.targetId).forEach((s) => this.fi.add(s.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, t.targetId)
      .next((s) => {
        s.forEach((o) => this.fi.add(o.toString()));
      })
      .next(() => r.removeTargetData(e, t));
  }
  Ei() {
    this.Vi = new Set();
  }
  di(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return P.forEach(this.fi, (r) => {
      const s = M.fromPath(r);
      return this.gi(e, s).next((o) => {
        o || t.removeEntry(s, F.min());
      });
    }).next(() => ((this.Vi = null), t.apply(e)));
  }
  updateLimboDocument(e, t) {
    return this.gi(e, t).next((r) => {
      r ? this.fi.delete(t.toString()) : this.fi.add(t.toString());
    });
  }
  Ti(e) {
    return 0;
  }
  gi(e, t) {
    return P.or([
      () => P.resolve(this.Ri.containsKey(t)),
      () => this.persistence.getTargetCache().containsKey(e, t),
      () => this.persistence.Ai(e, t),
    ]);
  }
}
class hs {
  constructor(e, t) {
    ((this.persistence = e),
      (this.pi = new qt(
        (r) => Lp(r.path),
        (r, s) => r.isEqual(s)
      )),
      (this.garbageCollector = Km(this, t)));
  }
  static mi(e, t) {
    return new hs(e, t);
  }
  Ei() {}
  di(e) {
    return P.resolve();
  }
  forEachTarget(e, t) {
    return this.persistence.getTargetCache().forEachTarget(e, t);
  }
  gr(e) {
    const t = this.wr(e);
    return this.persistence
      .getTargetCache()
      .getTargetCount(e)
      .next((r) => t.next((s) => r + s));
  }
  wr(e) {
    let t = 0;
    return this.pr(e, (r) => {
      t++;
    }).next(() => t);
  }
  pr(e, t) {
    return P.forEach(this.pi, (r, s) =>
      this.br(e, r, s).next((o) => (o ? P.resolve() : t(s)))
    );
  }
  removeTargets(e, t, r) {
    return this.persistence.getTargetCache().removeTargets(e, t, r);
  }
  removeOrphanedDocuments(e, t) {
    let r = 0;
    const s = this.persistence.getRemoteDocumentCache(),
      o = s.newChangeBuffer();
    return s
      .ii(e, (a) =>
        this.br(e, a, t).next((u) => {
          u || (r++, o.removeEntry(a, F.min()));
        })
      )
      .next(() => o.apply(e))
      .next(() => r);
  }
  markPotentiallyOrphaned(e, t) {
    return (this.pi.set(t, e.currentSequenceNumber), P.resolve());
  }
  removeTarget(e, t) {
    const r = t.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, r);
  }
  addReference(e, t, r) {
    return (this.pi.set(r, e.currentSequenceNumber), P.resolve());
  }
  removeReference(e, t, r) {
    return (this.pi.set(r, e.currentSequenceNumber), P.resolve());
  }
  updateLimboDocument(e, t) {
    return (this.pi.set(t, e.currentSequenceNumber), P.resolve());
  }
  Ti(e) {
    let t = e.key.toString().length;
    return (e.isFoundDocument() && (t += Hr(e.data.value)), t);
  }
  br(e, t, r) {
    return P.or([
      () => this.persistence.Ai(e, t),
      () => this.persistence.getTargetCache().containsKey(e, t),
      () => {
        const s = this.pi.get(t);
        return P.resolve(s !== void 0 && s > r);
      },
    ]);
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e);
  }
}
/**
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
 */ class ho {
  constructor(e, t, r, s) {
    ((this.targetId = e), (this.fromCache = t), (this.Es = r), (this.ds = s));
  }
  static As(e, t) {
    let r = H(),
      s = H();
    for (const o of t.docChanges)
      switch (o.type) {
        case 0:
          r = r.add(o.doc.key);
          break;
        case 1:
          s = s.add(o.doc.key);
      }
    return new ho(e, t.fromCache, r, s);
  }
}
/**
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
 */ class og {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
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
 */ class ag {
  constructor() {
    ((this.Rs = !1),
      (this.Vs = !1),
      (this.fs = 100),
      (this.gs = (function () {
        return Zd() ? 8 : Op(Ie()) > 0 ? 6 : 4;
      })()));
  }
  initialize(e, t) {
    ((this.ps = e), (this.indexManager = t), (this.Rs = !0));
  }
  getDocumentsMatchingQuery(e, t, r, s) {
    const o = { result: null };
    return this.ys(e, t)
      .next((a) => {
        o.result = a;
      })
      .next(() => {
        if (!o.result)
          return this.ws(e, t, s, r).next((a) => {
            o.result = a;
          });
      })
      .next(() => {
        if (o.result) return;
        const a = new og();
        return this.Ss(e, t, a).next((u) => {
          if (((o.result = u), this.Vs)) return this.bs(e, t, a, u.size);
        });
      })
      .next(() => o.result);
  }
  bs(e, t, r, s) {
    return r.documentReadCount < this.fs
      ? (Qt() <= $.DEBUG &&
          N(
            'QueryEngine',
            'SDK will not create cache indexes for query:',
            Jt(t),
            'since it only creates cache indexes for collection contains',
            'more than or equal to',
            this.fs,
            'documents'
          ),
        P.resolve())
      : (Qt() <= $.DEBUG &&
          N(
            'QueryEngine',
            'Query:',
            Jt(t),
            'scans',
            r.documentReadCount,
            'local documents and returns',
            s,
            'documents as results.'
          ),
        r.documentReadCount > this.gs * s
          ? (Qt() <= $.DEBUG &&
              N(
                'QueryEngine',
                'The SDK decides to create cache indexes for query:',
                Jt(t),
                'as using cache indexes may help improve performance.'
              ),
            this.indexManager.createTargetIndexes(e, Ue(t)))
          : P.resolve());
  }
  ys(e, t) {
    if (yc(t)) return P.resolve(null);
    let r = Ue(t);
    return this.indexManager.getIndexType(e, r).next((s) =>
      s === 0
        ? null
        : (t.limit !== null && s === 1 && ((t = Mi(t, null, 'F')), (r = Ue(t))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((o) => {
            const a = H(...o);
            return this.ps.getDocuments(e, a).next((u) =>
              this.indexManager.getMinOffset(e, r).next((h) => {
                const d = this.Ds(t, u);
                return this.Cs(t, d, a, h.readTime)
                  ? this.ys(e, Mi(t, null, 'F'))
                  : this.vs(e, d, t, h);
              })
            );
          }))
    );
  }
  ws(e, t, r, s) {
    return yc(t) || s.isEqual(F.min())
      ? P.resolve(null)
      : this.ps.getDocuments(e, r).next((o) => {
          const a = this.Ds(t, o);
          return this.Cs(t, a, r, s)
            ? P.resolve(null)
            : (Qt() <= $.DEBUG &&
                N(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  s.toString(),
                  Jt(t)
                ),
              this.vs(e, a, t, bp(s, Xn)).next((u) => u));
        });
  }
  Ds(e, t) {
    let r = new ae(al(e));
    return (
      t.forEach((s, o) => {
        Ps(e, o) && (r = r.add(o));
      }),
      r
    );
  }
  Cs(e, t, r, s) {
    if (e.limit === null) return !1;
    if (r.size !== t.size) return !0;
    const o = e.limitType === 'F' ? t.last() : t.first();
    return !!o && (o.hasPendingWrites || o.version.compareTo(s) > 0);
  }
  Ss(e, t, r) {
    return (
      Qt() <= $.DEBUG &&
        N('QueryEngine', 'Using full collection scan to execute query:', Jt(t)),
      this.ps.getDocumentsMatchingQuery(e, t, Et.min(), r)
    );
  }
  vs(e, t, r, s) {
    return this.ps.getDocumentsMatchingQuery(e, r, s).next(
      (o) => (
        t.forEach((a) => {
          o = o.insert(a.key, a);
        }),
        o
      )
    );
  }
}
/**
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
 */ const fo = 'LocalStore',
  cg = 3e8;
class ug {
  constructor(e, t, r, s) {
    ((this.persistence = e),
      (this.Fs = t),
      (this.serializer = s),
      (this.Ms = new ee(z)),
      (this.xs = new qt((o) => ro(o), so)),
      (this.Os = new Map()),
      (this.Ns = e.getRemoteDocumentCache()),
      (this.Pi = e.getTargetCache()),
      (this.Ii = e.getBundleCache()),
      this.Bs(r));
  }
  Bs(e) {
    ((this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new Ym(
        this.Ns,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.Ns.setIndexManager(this.indexManager),
      this.Fs.initialize(this.localDocuments, this.indexManager));
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      'Collect garbage',
      'readwrite-primary',
      (t) => e.collect(t, this.Ms)
    );
  }
}
function lg(n, e, t, r) {
  return new ug(n, e, t, r);
}
async function Vl(n, e) {
  const t = B(n);
  return await t.persistence.runTransaction(
    'Handle user change',
    'readonly',
    (r) => {
      let s;
      return t.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (o) => ((s = o), t.Bs(e), t.mutationQueue.getAllMutationBatches(r))
        )
        .next((o) => {
          const a = [],
            u = [];
          let h = H();
          for (const d of s) {
            a.push(d.batchId);
            for (const p of d.mutations) h = h.add(p.key);
          }
          for (const d of o) {
            u.push(d.batchId);
            for (const p of d.mutations) h = h.add(p.key);
          }
          return t.localDocuments
            .getDocuments(r, h)
            .next((d) => ({ Ls: d, removedBatchIds: a, addedBatchIds: u }));
        });
    }
  );
}
function hg(n, e) {
  const t = B(n);
  return t.persistence.runTransaction(
    'Acknowledge batch',
    'readwrite-primary',
    (r) => {
      const s = e.batch.keys(),
        o = t.Ns.newChangeBuffer({ trackRemovals: !0 });
      return (function (u, h, d, p) {
        const y = d.batch,
          v = y.keys();
        let C = P.resolve();
        return (
          v.forEach((b) => {
            C = C.next(() => p.getEntry(h, b)).next((O) => {
              const V = d.docVersions.get(b);
              (K(V !== null, 48541),
                O.version.compareTo(V) < 0 &&
                  (y.applyToRemoteDocument(O, d),
                  O.isValidDocument() &&
                    (O.setReadTime(d.commitVersion), p.addEntry(O))));
            });
          }),
          C.next(() => u.mutationQueue.removeMutationBatch(h, y))
        );
      })(t, r, e, o)
        .next(() => o.apply(r))
        .next(() => t.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          t.documentOverlayCache.removeOverlaysForBatchId(r, s, e.batch.batchId)
        )
        .next(() =>
          t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (u) {
              let h = H();
              for (let d = 0; d < u.mutationResults.length; ++d)
                u.mutationResults[d].transformResults.length > 0 &&
                  (h = h.add(u.batch.mutations[d].key));
              return h;
            })(e)
          )
        )
        .next(() => t.localDocuments.getDocuments(r, s));
    }
  );
}
function Nl(n) {
  const e = B(n);
  return e.persistence.runTransaction(
    'Get last remote snapshot version',
    'readonly',
    (t) => e.Pi.getLastRemoteSnapshotVersion(t)
  );
}
function dg(n, e) {
  const t = B(n),
    r = e.snapshotVersion;
  let s = t.Ms;
  return t.persistence
    .runTransaction('Apply remote event', 'readwrite-primary', (o) => {
      const a = t.Ns.newChangeBuffer({ trackRemovals: !0 });
      s = t.Ms;
      const u = [];
      e.targetChanges.forEach((p, y) => {
        const v = s.get(y);
        if (!v) return;
        u.push(
          t.Pi.removeMatchingKeys(o, p.removedDocuments, y).next(() =>
            t.Pi.addMatchingKeys(o, p.addedDocuments, y)
          )
        );
        let C = v.withSequenceNumber(o.currentSequenceNumber);
        (e.targetMismatches.get(y) !== null
          ? (C = C.withResumeToken(
              fe.EMPTY_BYTE_STRING,
              F.min()
            ).withLastLimboFreeSnapshotVersion(F.min()))
          : p.resumeToken.approximateByteSize() > 0 &&
            (C = C.withResumeToken(p.resumeToken, r)),
          (s = s.insert(y, C)),
          (function (O, V, j) {
            return O.resumeToken.approximateByteSize() === 0 ||
              V.snapshotVersion.toMicroseconds() -
                O.snapshotVersion.toMicroseconds() >=
                cg
              ? !0
              : j.addedDocuments.size +
                  j.modifiedDocuments.size +
                  j.removedDocuments.size >
                  0;
          })(v, C, p) && u.push(t.Pi.updateTargetData(o, C)));
      });
      let h = tt(),
        d = H();
      if (
        (e.documentUpdates.forEach((p) => {
          e.resolvedLimboDocuments.has(p) &&
            u.push(t.persistence.referenceDelegate.updateLimboDocument(o, p));
        }),
        u.push(
          fg(o, a, e.documentUpdates).next((p) => {
            ((h = p.ks), (d = p.qs));
          })
        ),
        !r.isEqual(F.min()))
      ) {
        const p = t.Pi.getLastRemoteSnapshotVersion(o).next((y) =>
          t.Pi.setTargetsMetadata(o, o.currentSequenceNumber, r)
        );
        u.push(p);
      }
      return P.waitFor(u)
        .next(() => a.apply(o))
        .next(() => t.localDocuments.getLocalViewOfDocuments(o, h, d))
        .next(() => h);
    })
    .then((o) => ((t.Ms = s), o));
}
function fg(n, e, t) {
  let r = H(),
    s = H();
  return (
    t.forEach((o) => (r = r.add(o))),
    e.getEntries(n, r).next((o) => {
      let a = tt();
      return (
        t.forEach((u, h) => {
          const d = o.get(u);
          (h.isFoundDocument() !== d.isFoundDocument() && (s = s.add(u)),
            h.isNoDocument() && h.version.isEqual(F.min())
              ? (e.removeEntry(u, h.readTime), (a = a.insert(u, h)))
              : !d.isValidDocument() ||
                  h.version.compareTo(d.version) > 0 ||
                  (h.version.compareTo(d.version) === 0 && d.hasPendingWrites)
                ? (e.addEntry(h), (a = a.insert(u, h)))
                : N(
                    fo,
                    'Ignoring outdated watch update for ',
                    u,
                    '. Current version:',
                    d.version,
                    ' Watch version:',
                    h.version
                  ));
        }),
        { ks: a, qs: s }
      );
    })
  );
}
function pg(n, e) {
  const t = B(n);
  return t.persistence.runTransaction(
    'Get next mutation batch',
    'readonly',
    (r) => (
      e === void 0 && (e = eo),
      t.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  );
}
function mg(n, e) {
  const t = B(n);
  return t.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let s;
      return t.Pi.getTargetData(r, e).next((o) =>
        o
          ? ((s = o), P.resolve(s))
          : t.Pi.allocateTargetId(r).next(
              (a) => (
                (s = new dt(
                  e,
                  a,
                  'TargetPurposeListen',
                  r.currentSequenceNumber
                )),
                t.Pi.addTargetData(r, s).next(() => s)
              )
            )
      );
    })
    .then((r) => {
      const s = t.Ms.get(r.targetId);
      return (
        (s === null || r.snapshotVersion.compareTo(s.snapshotVersion) > 0) &&
          ((t.Ms = t.Ms.insert(r.targetId, r)), t.xs.set(e, r.targetId)),
        r
      );
    });
}
async function Bi(n, e, t) {
  const r = B(n),
    s = r.Ms.get(e),
    o = t ? 'readwrite' : 'readwrite-primary';
  try {
    t ||
      (await r.persistence.runTransaction('Release target', o, (a) =>
        r.persistence.referenceDelegate.removeTarget(a, s)
      ));
  } catch (a) {
    if (!En(a)) throw a;
    N(fo, `Failed to update sequence numbers for target ${e}: ${a}`);
  }
  ((r.Ms = r.Ms.remove(e)), r.xs.delete(s.target));
}
function Vc(n, e, t) {
  const r = B(n);
  let s = F.min(),
    o = H();
  return r.persistence.runTransaction('Execute query', 'readwrite', (a) =>
    (function (h, d, p) {
      const y = B(h),
        v = y.xs.get(p);
      return v !== void 0 ? P.resolve(y.Ms.get(v)) : y.Pi.getTargetData(d, p);
    })(r, a, Ue(e))
      .next((u) => {
        if (u)
          return (
            (s = u.lastLimboFreeSnapshotVersion),
            r.Pi.getMatchingKeysForTargetId(a, u.targetId).next((h) => {
              o = h;
            })
          );
      })
      .next(() =>
        r.Fs.getDocumentsMatchingQuery(a, e, t ? s : F.min(), t ? o : H())
      )
      .next((u) => (gg(r, tm(e), u), { documents: u, Qs: o }))
  );
}
function gg(n, e, t) {
  let r = n.Os.get(e) || F.min();
  (t.forEach((s, o) => {
    o.readTime.compareTo(r) > 0 && (r = o.readTime);
  }),
    n.Os.set(e, r));
}
class Nc {
  constructor() {
    this.activeTargetIds = am();
  }
  zs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  js(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  Gs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class _g {
  constructor() {
    ((this.Mo = new Nc()),
      (this.xo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null));
  }
  addPendingMutation(e) {}
  updateMutationState(e, t, r) {}
  addLocalQueryTarget(e, t = !0) {
    return (t && this.Mo.zs(e), this.xo[e] || 'not-current');
  }
  updateQueryState(e, t, r) {
    this.xo[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.Mo.js(e);
  }
  isLocalQueryTarget(e) {
    return this.Mo.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.xo[e];
  }
  getAllActiveQueryTargets() {
    return this.Mo.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.Mo.activeTargetIds.has(e);
  }
  start() {
    return ((this.Mo = new Nc()), Promise.resolve());
  }
  handleUserChange(e, t, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
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
 */ class yg {
  Oo(e) {}
  shutdown() {}
}
/**
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
 */ const Dc = 'ConnectivityMonitor';
class Oc {
  constructor() {
    ((this.No = () => this.Bo()),
      (this.Lo = () => this.ko()),
      (this.qo = []),
      this.Qo());
  }
  Oo(e) {
    this.qo.push(e);
  }
  shutdown() {
    (window.removeEventListener('online', this.No),
      window.removeEventListener('offline', this.Lo));
  }
  Qo() {
    (window.addEventListener('online', this.No),
      window.addEventListener('offline', this.Lo));
  }
  Bo() {
    N(Dc, 'Network connectivity changed: AVAILABLE');
    for (const e of this.qo) e(0);
  }
  ko() {
    N(Dc, 'Network connectivity changed: UNAVAILABLE');
    for (const e of this.qo) e(1);
  }
  static v() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
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
 */ let qr = null;
function qi() {
  return (
    qr === null
      ? (qr = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : qr++,
    '0x' + qr.toString(16)
  );
}
/**
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
 */ const gi = 'RestConnection',
  Eg = {
    BatchGetDocuments: 'batchGet',
    Commit: 'commit',
    RunQuery: 'runQuery',
    RunAggregationQuery: 'runAggregationQuery',
  };
class Tg {
  get $o() {
    return !1;
  }
  constructor(e) {
    ((this.databaseInfo = e), (this.databaseId = e.databaseId));
    const t = e.ssl ? 'https' : 'http',
      r = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database);
    ((this.Uo = t + '://' + e.host),
      (this.Ko = `projects/${r}/databases/${s}`),
      (this.Wo =
        this.databaseId.database === ss
          ? `project_id=${r}`
          : `project_id=${r}&database_id=${s}`));
  }
  Go(e, t, r, s, o) {
    const a = qi(),
      u = this.zo(e, t.toUriEncodedString());
    N(gi, `Sending RPC '${e}' ${a}:`, u, r);
    const h = {
      'google-cloud-resource-prefix': this.Ko,
      'x-goog-request-params': this.Wo,
    };
    this.jo(h, s, o);
    const { host: d } = new URL(u),
      p = mn(d);
    return this.Jo(e, u, h, r, p).then(
      (y) => (N(gi, `Received RPC '${e}' ${a}: `, y), y),
      (y) => {
        throw (
          un(
            gi,
            `RPC '${e}' ${a} failed with error: `,
            y,
            'url: ',
            u,
            'request:',
            r
          ),
          y
        );
      }
    );
  }
  Ho(e, t, r, s, o, a) {
    return this.Go(e, t, r, s, o);
  }
  jo(e, t, r) {
    ((e['X-Goog-Api-Client'] = (function () {
      return 'gl-js/ fire/' + _n;
    })()),
      (e['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (e['X-Firebase-GMPID'] = this.databaseInfo.appId),
      t && t.headers.forEach((s, o) => (e[o] = s)),
      r && r.headers.forEach((s, o) => (e[o] = s)));
  }
  zo(e, t) {
    const r = Eg[e];
    return `${this.Uo}/v1/${t}:${r}`;
  }
  terminate() {}
}
/**
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
 */ class Ig {
  constructor(e) {
    ((this.Yo = e.Yo), (this.Zo = e.Zo));
  }
  Xo(e) {
    this.e_ = e;
  }
  t_(e) {
    this.n_ = e;
  }
  r_(e) {
    this.i_ = e;
  }
  onMessage(e) {
    this.s_ = e;
  }
  close() {
    this.Zo();
  }
  send(e) {
    this.Yo(e);
  }
  o_() {
    this.e_();
  }
  __() {
    this.n_();
  }
  a_(e) {
    this.i_(e);
  }
  u_(e) {
    this.s_(e);
  }
}
/**
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
 */ const ye = 'WebChannelConnection';
class vg extends Tg {
  constructor(e) {
    (super(e),
      (this.c_ = []),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions));
  }
  Jo(e, t, r, s, o) {
    const a = qi();
    return new Promise((u, h) => {
      const d = new Du();
      (d.setWithCredentials(!0),
        d.listenOnce(Ou.COMPLETE, () => {
          try {
            switch (d.getLastErrorCode()) {
              case zr.NO_ERROR:
                const y = d.getResponseJson();
                (N(ye, `XHR for RPC '${e}' ${a} received:`, JSON.stringify(y)),
                  u(y));
                break;
              case zr.TIMEOUT:
                (N(ye, `RPC '${e}' ${a} timed out`),
                  h(new D(S.DEADLINE_EXCEEDED, 'Request time out')));
                break;
              case zr.HTTP_ERROR:
                const v = d.getStatus();
                if (
                  (N(
                    ye,
                    `RPC '${e}' ${a} failed with status:`,
                    v,
                    'response text:',
                    d.getResponseText()
                  ),
                  v > 0)
                ) {
                  let C = d.getResponseJson();
                  Array.isArray(C) && (C = C[0]);
                  const b = C == null ? void 0 : C.error;
                  if (b && b.status && b.message) {
                    const O = (function (j) {
                      const U = j.toLowerCase().replace(/_/g, '-');
                      return Object.values(S).indexOf(U) >= 0 ? U : S.UNKNOWN;
                    })(b.status);
                    h(new D(O, b.message));
                  } else
                    h(
                      new D(
                        S.UNKNOWN,
                        'Server responded with status ' + d.getStatus()
                      )
                    );
                } else h(new D(S.UNAVAILABLE, 'Connection failed.'));
                break;
              default:
                x(9055, {
                  l_: e,
                  streamId: a,
                  h_: d.getLastErrorCode(),
                  P_: d.getLastError(),
                });
            }
          } finally {
            N(ye, `RPC '${e}' ${a} completed.`);
          }
        }));
      const p = JSON.stringify(s);
      (N(ye, `RPC '${e}' ${a} sending request:`, s),
        d.send(t, 'POST', p, r, 15));
    });
  }
  T_(e, t, r) {
    const s = qi(),
      o = [this.Uo, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      a = xu(),
      u = Lu(),
      h = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      d = this.longPollingOptions.timeoutSeconds;
    (d !== void 0 && (h.longPollingTimeout = Math.round(1e3 * d)),
      this.useFetchStreams && (h.useFetchStreams = !0),
      this.jo(h.initMessageHeaders, t, r),
      (h.encodeInitMessageHeaders = !0));
    const p = o.join('');
    N(ye, `Creating RPC '${e}' stream ${s}: ${p}`, h);
    const y = a.createWebChannel(p, h);
    this.I_(y);
    let v = !1,
      C = !1;
    const b = new Ig({
        Yo: (V) => {
          C
            ? N(ye, `Not sending because RPC '${e}' stream ${s} is closed:`, V)
            : (v ||
                (N(ye, `Opening RPC '${e}' stream ${s} transport.`),
                y.open(),
                (v = !0)),
              N(ye, `RPC '${e}' stream ${s} sending:`, V),
              y.send(V));
        },
        Zo: () => y.close(),
      }),
      O = (V, j, U) => {
        V.listen(j, (q) => {
          try {
            U(q);
          } catch (Z) {
            setTimeout(() => {
              throw Z;
            }, 0);
          }
        });
      };
    return (
      O(y, jn.EventType.OPEN, () => {
        C || (N(ye, `RPC '${e}' stream ${s} transport opened.`), b.o_());
      }),
      O(y, jn.EventType.CLOSE, () => {
        C ||
          ((C = !0),
          N(ye, `RPC '${e}' stream ${s} transport closed`),
          b.a_(),
          this.E_(y));
      }),
      O(y, jn.EventType.ERROR, (V) => {
        C ||
          ((C = !0),
          un(
            ye,
            `RPC '${e}' stream ${s} transport errored. Name:`,
            V.name,
            'Message:',
            V.message
          ),
          b.a_(new D(S.UNAVAILABLE, 'The operation could not be completed')));
      }),
      O(y, jn.EventType.MESSAGE, (V) => {
        var j;
        if (!C) {
          const U = V.data[0];
          K(!!U, 16349);
          const q = U,
            Z =
              (q == null ? void 0 : q.error) ||
              ((j = q[0]) == null ? void 0 : j.error);
          if (Z) {
            N(ye, `RPC '${e}' stream ${s} received error:`, Z);
            const Ce = Z.status;
            let re = (function (g) {
                const E = se[g];
                if (E !== void 0) return El(E);
              })(Ce),
              I = Z.message;
            (re === void 0 &&
              ((re = S.INTERNAL),
              (I =
                'Unknown error status: ' + Ce + ' with message ' + Z.message)),
              (C = !0),
              b.a_(new D(re, I)),
              y.close());
          } else (N(ye, `RPC '${e}' stream ${s} received:`, U), b.u_(U));
        }
      }),
      O(u, Mu.STAT_EVENT, (V) => {
        V.stat === Ci.PROXY
          ? N(ye, `RPC '${e}' stream ${s} detected buffering proxy`)
          : V.stat === Ci.NOPROXY &&
            N(ye, `RPC '${e}' stream ${s} detected no buffering proxy`);
      }),
      setTimeout(() => {
        b.__();
      }, 0),
      b
    );
  }
  terminate() {
    (this.c_.forEach((e) => e.close()), (this.c_ = []));
  }
  I_(e) {
    this.c_.push(e);
  }
  E_(e) {
    this.c_ = this.c_.filter((t) => t === e);
  }
}
function _i() {
  return typeof document < 'u' ? document : null;
}
/**
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
 */ function Vs(n) {
  return new Sm(n, !0);
}
/**
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
 */ class Dl {
  constructor(e, t, r = 1e3, s = 1.5, o = 6e4) {
    ((this.Mi = e),
      (this.timerId = t),
      (this.d_ = r),
      (this.A_ = s),
      (this.R_ = o),
      (this.V_ = 0),
      (this.m_ = null),
      (this.f_ = Date.now()),
      this.reset());
  }
  reset() {
    this.V_ = 0;
  }
  g_() {
    this.V_ = this.R_;
  }
  p_(e) {
    this.cancel();
    const t = Math.floor(this.V_ + this.y_()),
      r = Math.max(0, Date.now() - this.f_),
      s = Math.max(0, t - r);
    (s > 0 &&
      N(
        'ExponentialBackoff',
        `Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`
      ),
      (this.m_ = this.Mi.enqueueAfterDelay(
        this.timerId,
        s,
        () => ((this.f_ = Date.now()), e())
      )),
      (this.V_ *= this.A_),
      this.V_ < this.d_ && (this.V_ = this.d_),
      this.V_ > this.R_ && (this.V_ = this.R_));
  }
  w_() {
    this.m_ !== null && (this.m_.skipDelay(), (this.m_ = null));
  }
  cancel() {
    this.m_ !== null && (this.m_.cancel(), (this.m_ = null));
  }
  y_() {
    return (Math.random() - 0.5) * this.V_;
  }
}
/**
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
 */ const Mc = 'PersistentStream';
class Ol {
  constructor(e, t, r, s, o, a, u, h) {
    ((this.Mi = e),
      (this.S_ = r),
      (this.b_ = s),
      (this.connection = o),
      (this.authCredentialsProvider = a),
      (this.appCheckCredentialsProvider = u),
      (this.listener = h),
      (this.state = 0),
      (this.D_ = 0),
      (this.C_ = null),
      (this.v_ = null),
      (this.stream = null),
      (this.F_ = 0),
      (this.M_ = new Dl(e, t)));
  }
  x_() {
    return this.state === 1 || this.state === 5 || this.O_();
  }
  O_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    ((this.F_ = 0), this.state !== 4 ? this.auth() : this.N_());
  }
  async stop() {
    this.x_() && (await this.close(0));
  }
  B_() {
    ((this.state = 0), this.M_.reset());
  }
  L_() {
    this.O_() &&
      this.C_ === null &&
      (this.C_ = this.Mi.enqueueAfterDelay(this.S_, 6e4, () => this.k_()));
  }
  q_(e) {
    (this.Q_(), this.stream.send(e));
  }
  async k_() {
    if (this.O_()) return this.close(0);
  }
  Q_() {
    this.C_ && (this.C_.cancel(), (this.C_ = null));
  }
  U_() {
    this.v_ && (this.v_.cancel(), (this.v_ = null));
  }
  async close(e, t) {
    (this.Q_(),
      this.U_(),
      this.M_.cancel(),
      this.D_++,
      e !== 4
        ? this.M_.reset()
        : t && t.code === S.RESOURCE_EXHAUSTED
          ? (et(t.toString()),
            et(
              'Using maximum backoff delay to prevent overloading the backend.'
            ),
            this.M_.g_())
          : t &&
            t.code === S.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.K_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.r_(t));
  }
  K_() {}
  auth() {
    this.state = 1;
    const e = this.W_(this.D_),
      t = this.D_;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, s]) => {
        this.D_ === t && this.G_(r, s);
      },
      (r) => {
        e(() => {
          const s = new D(
            S.UNKNOWN,
            'Fetching auth token failed: ' + r.message
          );
          return this.z_(s);
        });
      }
    );
  }
  G_(e, t) {
    const r = this.W_(this.D_);
    ((this.stream = this.j_(e, t)),
      this.stream.Xo(() => {
        r(() => this.listener.Xo());
      }),
      this.stream.t_(() => {
        r(
          () => (
            (this.state = 2),
            (this.v_ = this.Mi.enqueueAfterDelay(
              this.b_,
              1e4,
              () => (this.O_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.t_()
          )
        );
      }),
      this.stream.r_((s) => {
        r(() => this.z_(s));
      }),
      this.stream.onMessage((s) => {
        r(() => (++this.F_ == 1 ? this.J_(s) : this.onNext(s)));
      }));
  }
  N_() {
    ((this.state = 5),
      this.M_.p_(async () => {
        ((this.state = 0), this.start());
      }));
  }
  z_(e) {
    return (
      N(Mc, `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  W_(e) {
    return (t) => {
      this.Mi.enqueueAndForget(() =>
        this.D_ === e
          ? t()
          : (N(Mc, 'stream callback skipped by getCloseGuardedDispatcher.'),
            Promise.resolve())
      );
    };
  }
}
class wg extends Ol {
  constructor(e, t, r, s, o, a) {
    (super(
      e,
      'listen_stream_connection_backoff',
      'listen_stream_idle',
      'health_check_timeout',
      t,
      r,
      s,
      a
    ),
      (this.serializer = o));
  }
  j_(e, t) {
    return this.connection.T_('Listen', e, t);
  }
  J_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.M_.reset();
    const t = bm(this.serializer, e),
      r = (function (o) {
        if (!('targetChange' in o)) return F.min();
        const a = o.targetChange;
        return a.targetIds && a.targetIds.length
          ? F.min()
          : a.readTime
            ? Fe(a.readTime)
            : F.min();
      })(e);
    return this.listener.H_(t, r);
  }
  Y_(e) {
    const t = {};
    ((t.database = Fi(this.serializer)),
      (t.addTarget = (function (o, a) {
        let u;
        const h = a.target;
        if (
          ((u = Di(h) ? { documents: Nm(o, h) } : { query: Dm(o, h).ft }),
          (u.targetId = a.targetId),
          a.resumeToken.approximateByteSize() > 0)
        ) {
          u.resumeToken = vl(o, a.resumeToken);
          const d = Li(o, a.expectedCount);
          d !== null && (u.expectedCount = d);
        } else if (a.snapshotVersion.compareTo(F.min()) > 0) {
          u.readTime = ls(o, a.snapshotVersion.toTimestamp());
          const d = Li(o, a.expectedCount);
          d !== null && (u.expectedCount = d);
        }
        return u;
      })(this.serializer, e)));
    const r = Mm(this.serializer, e);
    (r && (t.labels = r), this.q_(t));
  }
  Z_(e) {
    const t = {};
    ((t.database = Fi(this.serializer)), (t.removeTarget = e), this.q_(t));
  }
}
class Ag extends Ol {
  constructor(e, t, r, s, o, a) {
    (super(
      e,
      'write_stream_connection_backoff',
      'write_stream_idle',
      'health_check_timeout',
      t,
      r,
      s,
      a
    ),
      (this.serializer = o));
  }
  get X_() {
    return this.F_ > 0;
  }
  start() {
    ((this.lastStreamToken = void 0), super.start());
  }
  K_() {
    this.X_ && this.ea([]);
  }
  j_(e, t) {
    return this.connection.T_('Write', e, t);
  }
  J_(e) {
    return (
      K(!!e.streamToken, 31322),
      (this.lastStreamToken = e.streamToken),
      K(!e.writeResults || e.writeResults.length === 0, 55816),
      this.listener.ta()
    );
  }
  onNext(e) {
    (K(!!e.streamToken, 12678),
      (this.lastStreamToken = e.streamToken),
      this.M_.reset());
    const t = Vm(e.writeResults, e.commitTime),
      r = Fe(e.commitTime);
    return this.listener.na(r, t);
  }
  ra() {
    const e = {};
    ((e.database = Fi(this.serializer)), this.q_(e));
  }
  ea(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => km(this.serializer, r)),
    };
    this.q_(t);
  }
}
/**
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
 */ class Rg {}
class Sg extends Rg {
  constructor(e, t, r, s) {
    (super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = t),
      (this.connection = r),
      (this.serializer = s),
      (this.ia = !1));
  }
  sa() {
    if (this.ia)
      throw new D(
        S.FAILED_PRECONDITION,
        'The client has already been terminated.'
      );
  }
  Go(e, t, r, s) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, a]) => this.connection.Go(e, xi(t, r), s, o, a))
        .catch((o) => {
          throw o.name === 'FirebaseError'
            ? (o.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new D(S.UNKNOWN, o.toString());
        })
    );
  }
  Ho(e, t, r, s, o) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([a, u]) => this.connection.Ho(e, xi(t, r), s, a, u, o))
        .catch((a) => {
          throw a.name === 'FirebaseError'
            ? (a.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              a)
            : new D(S.UNKNOWN, a.toString());
        })
    );
  }
  terminate() {
    ((this.ia = !0), this.connection.terminate());
  }
}
class Pg {
  constructor(e, t) {
    ((this.asyncQueue = e),
      (this.onlineStateHandler = t),
      (this.state = 'Unknown'),
      (this.oa = 0),
      (this._a = null),
      (this.aa = !0));
  }
  ua() {
    this.oa === 0 &&
      (this.ca('Unknown'),
      (this._a = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this._a = null),
          this.la("Backend didn't respond within 10 seconds."),
          this.ca('Offline'),
          Promise.resolve()
        )
      )));
  }
  ha(e) {
    this.state === 'Online'
      ? this.ca('Unknown')
      : (this.oa++,
        this.oa >= 1 &&
          (this.Pa(),
          this.la(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.ca('Offline')));
  }
  set(e) {
    (this.Pa(), (this.oa = 0), e === 'Online' && (this.aa = !1), this.ca(e));
  }
  ca(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  la(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.aa ? (et(t), (this.aa = !1)) : N('OnlineStateTracker', t);
  }
  Pa() {
    this._a !== null && (this._a.cancel(), (this._a = null));
  }
}
/**
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
 */ const xt = 'RemoteStore';
class Cg {
  constructor(e, t, r, s, o) {
    ((this.localStore = e),
      (this.datastore = t),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.Ta = []),
      (this.Ia = new Map()),
      (this.Ea = new Set()),
      (this.da = []),
      (this.Aa = o),
      this.Aa.Oo((a) => {
        r.enqueueAndForget(async () => {
          $t(this) &&
            (N(xt, 'Restarting streams for network reachability change.'),
            await (async function (h) {
              const d = B(h);
              (d.Ea.add(4),
                await dr(d),
                d.Ra.set('Unknown'),
                d.Ea.delete(4),
                await Ns(d));
            })(this));
        });
      }),
      (this.Ra = new Pg(r, s)));
  }
}
async function Ns(n) {
  if ($t(n)) for (const e of n.da) await e(!0);
}
async function dr(n) {
  for (const e of n.da) await e(!1);
}
function Ml(n, e) {
  const t = B(n);
  t.Ia.has(e.targetId) ||
    (t.Ia.set(e.targetId, e), _o(t) ? go(t) : Tn(t).O_() && mo(t, e));
}
function po(n, e) {
  const t = B(n),
    r = Tn(t);
  (t.Ia.delete(e),
    r.O_() && Ll(t, e),
    t.Ia.size === 0 && (r.O_() ? r.L_() : $t(t) && t.Ra.set('Unknown')));
}
function mo(n, e) {
  if (
    (n.Va.Ue(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(F.min()) > 0)
  ) {
    const t = n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(t);
  }
  Tn(n).Y_(e);
}
function Ll(n, e) {
  (n.Va.Ue(e), Tn(n).Z_(e));
}
function go(n) {
  ((n.Va = new vm({
    getRemoteKeysForTarget: (e) => n.remoteSyncer.getRemoteKeysForTarget(e),
    At: (e) => n.Ia.get(e) || null,
    ht: () => n.datastore.serializer.databaseId,
  })),
    Tn(n).start(),
    n.Ra.ua());
}
function _o(n) {
  return $t(n) && !Tn(n).x_() && n.Ia.size > 0;
}
function $t(n) {
  return B(n).Ea.size === 0;
}
function xl(n) {
  n.Va = void 0;
}
async function bg(n) {
  n.Ra.set('Online');
}
async function kg(n) {
  n.Ia.forEach((e, t) => {
    mo(n, e);
  });
}
async function Vg(n, e) {
  (xl(n), _o(n) ? (n.Ra.ha(e), go(n)) : n.Ra.set('Unknown'));
}
async function Ng(n, e, t) {
  if ((n.Ra.set('Online'), e instanceof Il && e.state === 2 && e.cause))
    try {
      await (async function (s, o) {
        const a = o.cause;
        for (const u of o.targetIds)
          s.Ia.has(u) &&
            (await s.remoteSyncer.rejectListen(u, a),
            s.Ia.delete(u),
            s.Va.removeTarget(u));
      })(n, e);
    } catch (r) {
      (N(xt, 'Failed to remove targets %s: %s ', e.targetIds.join(','), r),
        await ds(n, r));
    }
  else if (
    (e instanceof Kr ? n.Va.Ze(e) : e instanceof Tl ? n.Va.st(e) : n.Va.tt(e),
    !t.isEqual(F.min()))
  )
    try {
      const r = await Nl(n.localStore);
      t.compareTo(r) >= 0 &&
        (await (function (o, a) {
          const u = o.Va.Tt(a);
          return (
            u.targetChanges.forEach((h, d) => {
              if (h.resumeToken.approximateByteSize() > 0) {
                const p = o.Ia.get(d);
                p && o.Ia.set(d, p.withResumeToken(h.resumeToken, a));
              }
            }),
            u.targetMismatches.forEach((h, d) => {
              const p = o.Ia.get(h);
              if (!p) return;
              (o.Ia.set(
                h,
                p.withResumeToken(fe.EMPTY_BYTE_STRING, p.snapshotVersion)
              ),
                Ll(o, h));
              const y = new dt(p.target, h, d, p.sequenceNumber);
              mo(o, y);
            }),
            o.remoteSyncer.applyRemoteEvent(u)
          );
        })(n, t));
    } catch (r) {
      (N(xt, 'Failed to raise snapshot:', r), await ds(n, r));
    }
}
async function ds(n, e, t) {
  if (!En(e)) throw e;
  (n.Ea.add(1),
    await dr(n),
    n.Ra.set('Offline'),
    t || (t = () => Nl(n.localStore)),
    n.asyncQueue.enqueueRetryable(async () => {
      (N(xt, 'Retrying IndexedDB access'),
        await t(),
        n.Ea.delete(1),
        await Ns(n));
    }));
}
function Ul(n, e) {
  return e().catch((t) => ds(n, t, e));
}
async function Ds(n) {
  const e = B(n),
    t = wt(e);
  let r = e.Ta.length > 0 ? e.Ta[e.Ta.length - 1].batchId : eo;
  for (; Dg(e); )
    try {
      const s = await pg(e.localStore, r);
      if (s === null) {
        e.Ta.length === 0 && t.L_();
        break;
      }
      ((r = s.batchId), Og(e, s));
    } catch (s) {
      await ds(e, s);
    }
  Fl(e) && Bl(e);
}
function Dg(n) {
  return $t(n) && n.Ta.length < 10;
}
function Og(n, e) {
  n.Ta.push(e);
  const t = wt(n);
  t.O_() && t.X_ && t.ea(e.mutations);
}
function Fl(n) {
  return $t(n) && !wt(n).x_() && n.Ta.length > 0;
}
function Bl(n) {
  wt(n).start();
}
async function Mg(n) {
  wt(n).ra();
}
async function Lg(n) {
  const e = wt(n);
  for (const t of n.Ta) e.ea(t.mutations);
}
async function xg(n, e, t) {
  const r = n.Ta.shift(),
    s = oo.from(r, e, t);
  (await Ul(n, () => n.remoteSyncer.applySuccessfulWrite(s)), await Ds(n));
}
async function Ug(n, e) {
  (e &&
    wt(n).X_ &&
    (await (async function (r, s) {
      if (
        (function (a) {
          return Em(a) && a !== S.ABORTED;
        })(s.code)
      ) {
        const o = r.Ta.shift();
        (wt(r).B_(),
          await Ul(r, () => r.remoteSyncer.rejectFailedWrite(o.batchId, s)),
          await Ds(r));
      }
    })(n, e)),
    Fl(n) && Bl(n));
}
async function Lc(n, e) {
  const t = B(n);
  (t.asyncQueue.verifyOperationInProgress(),
    N(xt, 'RemoteStore received new credentials'));
  const r = $t(t);
  (t.Ea.add(3),
    await dr(t),
    r && t.Ra.set('Unknown'),
    await t.remoteSyncer.handleCredentialChange(e),
    t.Ea.delete(3),
    await Ns(t));
}
async function Fg(n, e) {
  const t = B(n);
  e
    ? (t.Ea.delete(2), await Ns(t))
    : e || (t.Ea.add(2), await dr(t), t.Ra.set('Unknown'));
}
function Tn(n) {
  return (
    n.ma ||
      ((n.ma = (function (t, r, s) {
        const o = B(t);
        return (
          o.sa(),
          new wg(
            r,
            o.connection,
            o.authCredentials,
            o.appCheckCredentials,
            o.serializer,
            s
          )
        );
      })(n.datastore, n.asyncQueue, {
        Xo: bg.bind(null, n),
        t_: kg.bind(null, n),
        r_: Vg.bind(null, n),
        H_: Ng.bind(null, n),
      })),
      n.da.push(async (e) => {
        e
          ? (n.ma.B_(), _o(n) ? go(n) : n.Ra.set('Unknown'))
          : (await n.ma.stop(), xl(n));
      })),
    n.ma
  );
}
function wt(n) {
  return (
    n.fa ||
      ((n.fa = (function (t, r, s) {
        const o = B(t);
        return (
          o.sa(),
          new Ag(
            r,
            o.connection,
            o.authCredentials,
            o.appCheckCredentials,
            o.serializer,
            s
          )
        );
      })(n.datastore, n.asyncQueue, {
        Xo: () => Promise.resolve(),
        t_: Mg.bind(null, n),
        r_: Ug.bind(null, n),
        ta: Lg.bind(null, n),
        na: xg.bind(null, n),
      })),
      n.da.push(async (e) => {
        e
          ? (n.fa.B_(), await Ds(n))
          : (await n.fa.stop(),
            n.Ta.length > 0 &&
              (N(
                xt,
                `Stopping write stream with ${n.Ta.length} pending writes`
              ),
              (n.Ta = [])));
      })),
    n.fa
  );
}
/**
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
 */ class yo {
  constructor(e, t, r, s, o) {
    ((this.asyncQueue = e),
      (this.timerId = t),
      (this.targetTimeMs = r),
      (this.op = s),
      (this.removalCallback = o),
      (this.deferred = new _t()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((a) => {}));
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, t, r, s, o) {
    const a = Date.now() + r,
      u = new yo(e, t, a, s, o);
    return (u.start(r), u);
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new D(S.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function Eo(n, e) {
  if ((et('AsyncQueue', `${e}: ${n}`), En(n)))
    return new D(S.UNAVAILABLE, `${e}: ${n}`);
  throw n;
}
/**
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
 */ class tn {
  static emptySet(e) {
    return new tn(e.comparator);
  }
  constructor(e) {
    ((this.comparator = e
      ? (t, r) => e(t, r) || M.comparator(t.key, r.key)
      : (t, r) => M.comparator(t.key, r.key)),
      (this.keyedMap = $n()),
      (this.sortedSet = new ee(this.comparator)));
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const t = this.keyedMap.get(e);
    return t ? this.sortedSet.indexOf(t) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((t, r) => (e(t), !1));
  }
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  delete(e) {
    const t = this.get(e);
    return t
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof tn) || this.size !== e.size) return !1;
    const t = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; t.hasNext(); ) {
      const s = t.getNext().key,
        o = r.getNext().key;
      if (!s.isEqual(o)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((t) => {
        e.push(t.toString());
      }),
      e.length === 0
        ? 'DocumentSet ()'
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, t) {
    const r = new tn();
    return (
      (r.comparator = this.comparator),
      (r.keyedMap = e),
      (r.sortedSet = t),
      r
    );
  }
}
/**
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
 */ class xc {
  constructor() {
    this.ga = new ee(M.comparator);
  }
  track(e) {
    const t = e.doc.key,
      r = this.ga.get(t);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.ga = this.ga.insert(t, e))
        : e.type === 3 && r.type !== 1
          ? (this.ga = this.ga.insert(t, { type: r.type, doc: e.doc }))
          : e.type === 2 && r.type === 2
            ? (this.ga = this.ga.insert(t, { type: 2, doc: e.doc }))
            : e.type === 2 && r.type === 0
              ? (this.ga = this.ga.insert(t, { type: 0, doc: e.doc }))
              : e.type === 1 && r.type === 0
                ? (this.ga = this.ga.remove(t))
                : e.type === 1 && r.type === 2
                  ? (this.ga = this.ga.insert(t, { type: 1, doc: r.doc }))
                  : e.type === 0 && r.type === 1
                    ? (this.ga = this.ga.insert(t, { type: 2, doc: e.doc }))
                    : x(63341, { Rt: e, pa: r })
      : (this.ga = this.ga.insert(t, e));
  }
  ya() {
    const e = [];
    return (
      this.ga.inorderTraversal((t, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class pn {
  constructor(e, t, r, s, o, a, u, h, d) {
    ((this.query = e),
      (this.docs = t),
      (this.oldDocs = r),
      (this.docChanges = s),
      (this.mutatedKeys = o),
      (this.fromCache = a),
      (this.syncStateChanged = u),
      (this.excludesMetadataChanges = h),
      (this.hasCachedResults = d));
  }
  static fromInitialDocuments(e, t, r, s, o) {
    const a = [];
    return (
      t.forEach((u) => {
        a.push({ type: 0, doc: u });
      }),
      new pn(e, t, tn.emptySet(t), a, r, s, !0, !1, o)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Ss(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const t = this.docChanges,
      r = e.docChanges;
    if (t.length !== r.length) return !1;
    for (let s = 0; s < t.length; s++)
      if (t[s].type !== r[s].type || !t[s].doc.isEqual(r[s].doc)) return !1;
    return !0;
  }
}
/**
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
 */ class Bg {
  constructor() {
    ((this.wa = void 0), (this.Sa = []));
  }
  ba() {
    return this.Sa.some((e) => e.Da());
  }
}
class qg {
  constructor() {
    ((this.queries = Uc()),
      (this.onlineState = 'Unknown'),
      (this.Ca = new Set()));
  }
  terminate() {
    (function (t, r) {
      const s = B(t),
        o = s.queries;
      ((s.queries = Uc()),
        o.forEach((a, u) => {
          for (const h of u.Sa) h.onError(r);
        }));
    })(this, new D(S.ABORTED, 'Firestore shutting down'));
  }
}
function Uc() {
  return new qt((n) => ol(n), Ss);
}
async function jg(n, e) {
  const t = B(n);
  let r = 3;
  const s = e.query;
  let o = t.queries.get(s);
  o ? !o.ba() && e.Da() && (r = 2) : ((o = new Bg()), (r = e.Da() ? 0 : 1));
  try {
    switch (r) {
      case 0:
        o.wa = await t.onListen(s, !0);
        break;
      case 1:
        o.wa = await t.onListen(s, !1);
        break;
      case 2:
        await t.onFirstRemoteStoreListen(s);
    }
  } catch (a) {
    const u = Eo(a, `Initialization of query '${Jt(e.query)}' failed`);
    return void e.onError(u);
  }
  (t.queries.set(s, o),
    o.Sa.push(e),
    e.va(t.onlineState),
    o.wa && e.Fa(o.wa) && To(t));
}
async function $g(n, e) {
  const t = B(n),
    r = e.query;
  let s = 3;
  const o = t.queries.get(r);
  if (o) {
    const a = o.Sa.indexOf(e);
    a >= 0 &&
      (o.Sa.splice(a, 1),
      o.Sa.length === 0 ? (s = e.Da() ? 0 : 1) : !o.ba() && e.Da() && (s = 2));
  }
  switch (s) {
    case 0:
      return (t.queries.delete(r), t.onUnlisten(r, !0));
    case 1:
      return (t.queries.delete(r), t.onUnlisten(r, !1));
    case 2:
      return t.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function zg(n, e) {
  const t = B(n);
  let r = !1;
  for (const s of e) {
    const o = s.query,
      a = t.queries.get(o);
    if (a) {
      for (const u of a.Sa) u.Fa(s) && (r = !0);
      a.wa = s;
    }
  }
  r && To(t);
}
function Hg(n, e, t) {
  const r = B(n),
    s = r.queries.get(e);
  if (s) for (const o of s.Sa) o.onError(t);
  r.queries.delete(e);
}
function To(n) {
  n.Ca.forEach((e) => {
    e.next();
  });
}
var ji, Fc;
(((Fc = ji || (ji = {})).Ma = 'default'), (Fc.Cache = 'cache'));
class Wg {
  constructor(e, t, r) {
    ((this.query = e),
      (this.xa = t),
      (this.Oa = !1),
      (this.Na = null),
      (this.onlineState = 'Unknown'),
      (this.options = r || {}));
  }
  Fa(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const s of e.docChanges) s.type !== 3 && r.push(s);
      e = new pn(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let t = !1;
    return (
      this.Oa
        ? this.Ba(e) && (this.xa.next(e), (t = !0))
        : this.La(e, this.onlineState) && (this.ka(e), (t = !0)),
      (this.Na = e),
      t
    );
  }
  onError(e) {
    this.xa.error(e);
  }
  va(e) {
    this.onlineState = e;
    let t = !1;
    return (
      this.Na &&
        !this.Oa &&
        this.La(this.Na, e) &&
        (this.ka(this.Na), (t = !0)),
      t
    );
  }
  La(e, t) {
    if (!e.fromCache || !this.Da()) return !0;
    const r = t !== 'Offline';
    return (
      (!this.options.qa || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || t === 'Offline')
    );
  }
  Ba(e) {
    if (e.docChanges.length > 0) return !0;
    const t = this.Na && this.Na.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !t) && this.options.includeMetadataChanges === !0
    );
  }
  ka(e) {
    ((e = pn.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.Oa = !0),
      this.xa.next(e));
  }
  Da() {
    return this.options.source !== ji.Cache;
  }
}
/**
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
 */ class ql {
  constructor(e) {
    this.key = e;
  }
}
class jl {
  constructor(e) {
    this.key = e;
  }
}
class Gg {
  constructor(e, t) {
    ((this.query = e),
      (this.Ya = t),
      (this.Za = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Xa = H()),
      (this.mutatedKeys = H()),
      (this.eu = al(e)),
      (this.tu = new tn(this.eu)));
  }
  get nu() {
    return this.Ya;
  }
  ru(e, t) {
    const r = t ? t.iu : new xc(),
      s = t ? t.tu : this.tu;
    let o = t ? t.mutatedKeys : this.mutatedKeys,
      a = s,
      u = !1;
    const h =
        this.query.limitType === 'F' && s.size === this.query.limit
          ? s.last()
          : null,
      d =
        this.query.limitType === 'L' && s.size === this.query.limit
          ? s.first()
          : null;
    if (
      (e.inorderTraversal((p, y) => {
        const v = s.get(p),
          C = Ps(this.query, y) ? y : null,
          b = !!v && this.mutatedKeys.has(v.key),
          O =
            !!C &&
            (C.hasLocalMutations ||
              (this.mutatedKeys.has(C.key) && C.hasCommittedMutations));
        let V = !1;
        (v && C
          ? v.data.isEqual(C.data)
            ? b !== O && (r.track({ type: 3, doc: C }), (V = !0))
            : this.su(v, C) ||
              (r.track({ type: 2, doc: C }),
              (V = !0),
              ((h && this.eu(C, h) > 0) || (d && this.eu(C, d) < 0)) &&
                (u = !0))
          : !v && C
            ? (r.track({ type: 0, doc: C }), (V = !0))
            : v &&
              !C &&
              (r.track({ type: 1, doc: v }), (V = !0), (h || d) && (u = !0)),
          V &&
            (C
              ? ((a = a.add(C)), (o = O ? o.add(p) : o.delete(p)))
              : ((a = a.delete(p)), (o = o.delete(p)))));
      }),
      this.query.limit !== null)
    )
      for (; a.size > this.query.limit; ) {
        const p = this.query.limitType === 'F' ? a.last() : a.first();
        ((a = a.delete(p.key)),
          (o = o.delete(p.key)),
          r.track({ type: 1, doc: p }));
      }
    return { tu: a, iu: r, Cs: u, mutatedKeys: o };
  }
  su(e, t) {
    return (
      e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
    );
  }
  applyChanges(e, t, r, s) {
    const o = this.tu;
    ((this.tu = e.tu), (this.mutatedKeys = e.mutatedKeys));
    const a = e.iu.ya();
    (a.sort(
      (p, y) =>
        (function (C, b) {
          const O = (V) => {
            switch (V) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return x(20277, { Rt: V });
            }
          };
          return O(C) - O(b);
        })(p.type, y.type) || this.eu(p.doc, y.doc)
    ),
      this.ou(r),
      (s = s ?? !1));
    const u = t && !s ? this._u() : [],
      h = this.Xa.size === 0 && this.current && !s ? 1 : 0,
      d = h !== this.Za;
    return (
      (this.Za = h),
      a.length !== 0 || d
        ? {
            snapshot: new pn(
              this.query,
              e.tu,
              o,
              a,
              e.mutatedKeys,
              h === 0,
              d,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            au: u,
          }
        : { au: u }
    );
  }
  va(e) {
    return this.current && e === 'Offline'
      ? ((this.current = !1),
        this.applyChanges(
          { tu: this.tu, iu: new xc(), mutatedKeys: this.mutatedKeys, Cs: !1 },
          !1
        ))
      : { au: [] };
  }
  uu(e) {
    return (
      !this.Ya.has(e) && !!this.tu.has(e) && !this.tu.get(e).hasLocalMutations
    );
  }
  ou(e) {
    e &&
      (e.addedDocuments.forEach((t) => (this.Ya = this.Ya.add(t))),
      e.modifiedDocuments.forEach((t) => {}),
      e.removedDocuments.forEach((t) => (this.Ya = this.Ya.delete(t))),
      (this.current = e.current));
  }
  _u() {
    if (!this.current) return [];
    const e = this.Xa;
    ((this.Xa = H()),
      this.tu.forEach((r) => {
        this.uu(r.key) && (this.Xa = this.Xa.add(r.key));
      }));
    const t = [];
    return (
      e.forEach((r) => {
        this.Xa.has(r) || t.push(new jl(r));
      }),
      this.Xa.forEach((r) => {
        e.has(r) || t.push(new ql(r));
      }),
      t
    );
  }
  cu(e) {
    ((this.Ya = e.Qs), (this.Xa = H()));
    const t = this.ru(e.documents);
    return this.applyChanges(t, !0);
  }
  lu() {
    return pn.fromInitialDocuments(
      this.query,
      this.tu,
      this.mutatedKeys,
      this.Za === 0,
      this.hasCachedResults
    );
  }
}
const Io = 'SyncEngine';
class Kg {
  constructor(e, t, r) {
    ((this.query = e), (this.targetId = t), (this.view = r));
  }
}
class Qg {
  constructor(e) {
    ((this.key = e), (this.hu = !1));
  }
}
class Jg {
  constructor(e, t, r, s, o, a) {
    ((this.localStore = e),
      (this.remoteStore = t),
      (this.eventManager = r),
      (this.sharedClientState = s),
      (this.currentUser = o),
      (this.maxConcurrentLimboResolutions = a),
      (this.Pu = {}),
      (this.Tu = new qt((u) => ol(u), Ss)),
      (this.Iu = new Map()),
      (this.Eu = new Set()),
      (this.du = new ee(M.comparator)),
      (this.Au = new Map()),
      (this.Ru = new uo()),
      (this.Vu = {}),
      (this.mu = new Map()),
      (this.fu = fn.cr()),
      (this.onlineState = 'Unknown'),
      (this.gu = void 0));
  }
  get isPrimaryClient() {
    return this.gu === !0;
  }
}
async function Yg(n, e, t = !0) {
  const r = Kl(n);
  let s;
  const o = r.Tu.get(e);
  return (
    o
      ? (r.sharedClientState.addLocalQueryTarget(o.targetId), (s = o.view.lu()))
      : (s = await $l(r, e, t, !0)),
    s
  );
}
async function Xg(n, e) {
  const t = Kl(n);
  await $l(t, e, !0, !1);
}
async function $l(n, e, t, r) {
  const s = await mg(n.localStore, Ue(e)),
    o = s.targetId,
    a = n.sharedClientState.addLocalQueryTarget(o, t);
  let u;
  return (
    r && (u = await Zg(n, e, o, a === 'current', s.resumeToken)),
    n.isPrimaryClient && t && Ml(n.remoteStore, s),
    u
  );
}
async function Zg(n, e, t, r, s) {
  n.pu = (y, v, C) =>
    (async function (O, V, j, U) {
      let q = V.view.ru(j);
      q.Cs &&
        (q = await Vc(O.localStore, V.query, !1).then(({ documents: I }) =>
          V.view.ru(I, q)
        ));
      const Z = U && U.targetChanges.get(V.targetId),
        Ce = U && U.targetMismatches.get(V.targetId) != null,
        re = V.view.applyChanges(q, O.isPrimaryClient, Z, Ce);
      return (qc(O, V.targetId, re.au), re.snapshot);
    })(n, y, v, C);
  const o = await Vc(n.localStore, e, !0),
    a = new Gg(e, o.Qs),
    u = a.ru(o.documents),
    h = hr.createSynthesizedTargetChangeForCurrentChange(
      t,
      r && n.onlineState !== 'Offline',
      s
    ),
    d = a.applyChanges(u, n.isPrimaryClient, h);
  qc(n, t, d.au);
  const p = new Kg(e, t, a);
  return (
    n.Tu.set(e, p),
    n.Iu.has(t) ? n.Iu.get(t).push(e) : n.Iu.set(t, [e]),
    d.snapshot
  );
}
async function e_(n, e, t) {
  const r = B(n),
    s = r.Tu.get(e),
    o = r.Iu.get(s.targetId);
  if (o.length > 1)
    return (
      r.Iu.set(
        s.targetId,
        o.filter((a) => !Ss(a, e))
      ),
      void r.Tu.delete(e)
    );
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(s.targetId),
      r.sharedClientState.isActiveQueryTarget(s.targetId) ||
        (await Bi(r.localStore, s.targetId, !1)
          .then(() => {
            (r.sharedClientState.clearQueryState(s.targetId),
              t && po(r.remoteStore, s.targetId),
              $i(r, s.targetId));
          })
          .catch(yn)))
    : ($i(r, s.targetId), await Bi(r.localStore, s.targetId, !0));
}
async function t_(n, e) {
  const t = B(n),
    r = t.Tu.get(e),
    s = t.Iu.get(r.targetId);
  t.isPrimaryClient &&
    s.length === 1 &&
    (t.sharedClientState.removeLocalQueryTarget(r.targetId),
    po(t.remoteStore, r.targetId));
}
async function n_(n, e, t) {
  const r = u_(n);
  try {
    const s = await (function (a, u) {
      const h = B(a),
        d = X.now(),
        p = u.reduce((C, b) => C.add(b.key), H());
      let y, v;
      return h.persistence
        .runTransaction('Locally write mutations', 'readwrite', (C) => {
          let b = tt(),
            O = H();
          return h.Ns.getEntries(C, p)
            .next((V) => {
              ((b = V),
                b.forEach((j, U) => {
                  U.isValidDocument() || (O = O.add(j));
                }));
            })
            .next(() => h.localDocuments.getOverlayedDocuments(C, b))
            .next((V) => {
              y = V;
              const j = [];
              for (const U of u) {
                const q = pm(U, y.get(U.key).overlayedDocument);
                q != null &&
                  j.push(new jt(U.key, q, Yu(q.value.mapValue), Ye.exists(!0)));
              }
              return h.mutationQueue.addMutationBatch(C, d, j, u);
            })
            .next((V) => {
              v = V;
              const j = V.applyToLocalDocumentSet(y, O);
              return h.documentOverlayCache.saveOverlays(C, V.batchId, j);
            });
        })
        .then(() => ({ batchId: v.batchId, changes: ul(y) }));
    })(r.localStore, e);
    (r.sharedClientState.addPendingMutation(s.batchId),
      (function (a, u, h) {
        let d = a.Vu[a.currentUser.toKey()];
        (d || (d = new ee(z)),
          (d = d.insert(u, h)),
          (a.Vu[a.currentUser.toKey()] = d));
      })(r, s.batchId, t),
      await fr(r, s.changes),
      await Ds(r.remoteStore));
  } catch (s) {
    const o = Eo(s, 'Failed to persist write');
    t.reject(o);
  }
}
async function zl(n, e) {
  const t = B(n);
  try {
    const r = await dg(t.localStore, e);
    (e.targetChanges.forEach((s, o) => {
      const a = t.Au.get(o);
      a &&
        (K(
          s.addedDocuments.size +
            s.modifiedDocuments.size +
            s.removedDocuments.size <=
            1,
          22616
        ),
        s.addedDocuments.size > 0
          ? (a.hu = !0)
          : s.modifiedDocuments.size > 0
            ? K(a.hu, 14607)
            : s.removedDocuments.size > 0 && (K(a.hu, 42227), (a.hu = !1)));
    }),
      await fr(t, r, e));
  } catch (r) {
    await yn(r);
  }
}
function Bc(n, e, t) {
  const r = B(n);
  if ((r.isPrimaryClient && t === 0) || (!r.isPrimaryClient && t === 1)) {
    const s = [];
    (r.Tu.forEach((o, a) => {
      const u = a.view.va(e);
      u.snapshot && s.push(u.snapshot);
    }),
      (function (a, u) {
        const h = B(a);
        h.onlineState = u;
        let d = !1;
        (h.queries.forEach((p, y) => {
          for (const v of y.Sa) v.va(u) && (d = !0);
        }),
          d && To(h));
      })(r.eventManager, e),
      s.length && r.Pu.H_(s),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e));
  }
}
async function r_(n, e, t) {
  const r = B(n);
  r.sharedClientState.updateQueryState(e, 'rejected', t);
  const s = r.Au.get(e),
    o = s && s.key;
  if (o) {
    let a = new ee(M.comparator);
    a = a.insert(o, Te.newNoDocument(o, F.min()));
    const u = H().add(o),
      h = new ks(F.min(), new Map(), new ee(z), a, u);
    (await zl(r, h), (r.du = r.du.remove(o)), r.Au.delete(e), vo(r));
  } else
    await Bi(r.localStore, e, !1)
      .then(() => $i(r, e, t))
      .catch(yn);
}
async function s_(n, e) {
  const t = B(n),
    r = e.batch.batchId;
  try {
    const s = await hg(t.localStore, e);
    (Wl(t, r, null),
      Hl(t, r),
      t.sharedClientState.updateMutationState(r, 'acknowledged'),
      await fr(t, s));
  } catch (s) {
    await yn(s);
  }
}
async function i_(n, e, t) {
  const r = B(n);
  try {
    const s = await (function (a, u) {
      const h = B(a);
      return h.persistence.runTransaction(
        'Reject batch',
        'readwrite-primary',
        (d) => {
          let p;
          return h.mutationQueue
            .lookupMutationBatch(d, u)
            .next(
              (y) => (
                K(y !== null, 37113),
                (p = y.keys()),
                h.mutationQueue.removeMutationBatch(d, y)
              )
            )
            .next(() => h.mutationQueue.performConsistencyCheck(d))
            .next(() =>
              h.documentOverlayCache.removeOverlaysForBatchId(d, p, u)
            )
            .next(() =>
              h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d, p)
            )
            .next(() => h.localDocuments.getDocuments(d, p));
        }
      );
    })(r.localStore, e);
    (Wl(r, e, t),
      Hl(r, e),
      r.sharedClientState.updateMutationState(e, 'rejected', t),
      await fr(r, s));
  } catch (s) {
    await yn(s);
  }
}
function Hl(n, e) {
  ((n.mu.get(e) || []).forEach((t) => {
    t.resolve();
  }),
    n.mu.delete(e));
}
function Wl(n, e, t) {
  const r = B(n);
  let s = r.Vu[r.currentUser.toKey()];
  if (s) {
    const o = s.get(e);
    (o && (t ? o.reject(t) : o.resolve(), (s = s.remove(e))),
      (r.Vu[r.currentUser.toKey()] = s));
  }
}
function $i(n, e, t = null) {
  n.sharedClientState.removeLocalQueryTarget(e);
  for (const r of n.Iu.get(e)) (n.Tu.delete(r), t && n.Pu.yu(r, t));
  (n.Iu.delete(e),
    n.isPrimaryClient &&
      n.Ru.jr(e).forEach((r) => {
        n.Ru.containsKey(r) || Gl(n, r);
      }));
}
function Gl(n, e) {
  n.Eu.delete(e.path.canonicalString());
  const t = n.du.get(e);
  t !== null &&
    (po(n.remoteStore, t), (n.du = n.du.remove(e)), n.Au.delete(t), vo(n));
}
function qc(n, e, t) {
  for (const r of t)
    r instanceof ql
      ? (n.Ru.addReference(r.key, e), o_(n, r))
      : r instanceof jl
        ? (N(Io, 'Document no longer in limbo: ' + r.key),
          n.Ru.removeReference(r.key, e),
          n.Ru.containsKey(r.key) || Gl(n, r.key))
        : x(19791, { wu: r });
}
function o_(n, e) {
  const t = e.key,
    r = t.path.canonicalString();
  n.du.get(t) ||
    n.Eu.has(r) ||
    (N(Io, 'New document in limbo: ' + t), n.Eu.add(r), vo(n));
}
function vo(n) {
  for (; n.Eu.size > 0 && n.du.size < n.maxConcurrentLimboResolutions; ) {
    const e = n.Eu.values().next().value;
    n.Eu.delete(e);
    const t = new M(J.fromString(e)),
      r = n.fu.next();
    (n.Au.set(r, new Qg(t)),
      (n.du = n.du.insert(t, r)),
      Ml(
        n.remoteStore,
        new dt(Ue(sl(t.path)), r, 'TargetPurposeLimboResolution', ws.ce)
      ));
  }
}
async function fr(n, e, t) {
  const r = B(n),
    s = [],
    o = [],
    a = [];
  r.Tu.isEmpty() ||
    (r.Tu.forEach((u, h) => {
      a.push(
        r.pu(h, e, t).then((d) => {
          var p;
          if ((d || t) && r.isPrimaryClient) {
            const y = d
              ? !d.fromCache
              : (p = t == null ? void 0 : t.targetChanges.get(h.targetId)) ==
                  null
                ? void 0
                : p.current;
            r.sharedClientState.updateQueryState(
              h.targetId,
              y ? 'current' : 'not-current'
            );
          }
          if (d) {
            s.push(d);
            const y = ho.As(h.targetId, d);
            o.push(y);
          }
        })
      );
    }),
    await Promise.all(a),
    r.Pu.H_(s),
    await (async function (h, d) {
      const p = B(h);
      try {
        await p.persistence.runTransaction(
          'notifyLocalViewChanges',
          'readwrite',
          (y) =>
            P.forEach(d, (v) =>
              P.forEach(v.Es, (C) =>
                p.persistence.referenceDelegate.addReference(y, v.targetId, C)
              ).next(() =>
                P.forEach(v.ds, (C) =>
                  p.persistence.referenceDelegate.removeReference(
                    y,
                    v.targetId,
                    C
                  )
                )
              )
            )
        );
      } catch (y) {
        if (!En(y)) throw y;
        N(fo, 'Failed to update sequence numbers: ' + y);
      }
      for (const y of d) {
        const v = y.targetId;
        if (!y.fromCache) {
          const C = p.Ms.get(v),
            b = C.snapshotVersion,
            O = C.withLastLimboFreeSnapshotVersion(b);
          p.Ms = p.Ms.insert(v, O);
        }
      }
    })(r.localStore, o));
}
async function a_(n, e) {
  const t = B(n);
  if (!t.currentUser.isEqual(e)) {
    N(Io, 'User change. New user:', e.toKey());
    const r = await Vl(t.localStore, e);
    ((t.currentUser = e),
      (function (o, a) {
        (o.mu.forEach((u) => {
          u.forEach((h) => {
            h.reject(new D(S.CANCELLED, a));
          });
        }),
          o.mu.clear());
      })(t, "'waitForPendingWrites' promise is rejected due to a user change."),
      t.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await fr(t, r.Ls));
  }
}
function c_(n, e) {
  const t = B(n),
    r = t.Au.get(e);
  if (r && r.hu) return H().add(r.key);
  {
    let s = H();
    const o = t.Iu.get(e);
    if (!o) return s;
    for (const a of o) {
      const u = t.Tu.get(a);
      s = s.unionWith(u.view.nu);
    }
    return s;
  }
}
function Kl(n) {
  const e = B(n);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = zl.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = c_.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = r_.bind(null, e)),
    (e.Pu.H_ = zg.bind(null, e.eventManager)),
    (e.Pu.yu = Hg.bind(null, e.eventManager)),
    e
  );
}
function u_(n) {
  const e = B(n);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = s_.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = i_.bind(null, e)),
    e
  );
}
class fs {
  constructor() {
    ((this.kind = 'memory'), (this.synchronizeTabs = !1));
  }
  async initialize(e) {
    ((this.serializer = Vs(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.Du(e)),
      (this.persistence = this.Cu(e)),
      await this.persistence.start(),
      (this.localStore = this.vu(e)),
      (this.gcScheduler = this.Fu(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Mu(e, this.localStore)));
  }
  Fu(e, t) {
    return null;
  }
  Mu(e, t) {
    return null;
  }
  vu(e) {
    return lg(this.persistence, new ag(), e.initialUser, this.serializer);
  }
  Cu(e) {
    return new kl(lo.mi, this.serializer);
  }
  Du(e) {
    return new _g();
  }
  async terminate() {
    var e, t;
    ((e = this.gcScheduler) == null || e.stop(),
      (t = this.indexBackfillerScheduler) == null || t.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown());
  }
}
fs.provider = { build: () => new fs() };
class l_ extends fs {
  constructor(e) {
    (super(), (this.cacheSizeBytes = e));
  }
  Fu(e, t) {
    K(this.persistence.referenceDelegate instanceof hs, 46915);
    const r = this.persistence.referenceDelegate.garbageCollector;
    return new Wm(r, e.asyncQueue, t);
  }
  Cu(e) {
    const t =
      this.cacheSizeBytes !== void 0
        ? Se.withCacheSize(this.cacheSizeBytes)
        : Se.DEFAULT;
    return new kl((r) => hs.mi(r, t), this.serializer);
  }
}
class zi {
  async initialize(e, t) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(t)),
      (this.remoteStore = this.createRemoteStore(t)),
      (this.eventManager = this.createEventManager(t)),
      (this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        Bc(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = a_.bind(
        null,
        this.syncEngine
      )),
      await Fg(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return (function () {
      return new qg();
    })();
  }
  createDatastore(e) {
    const t = Vs(e.databaseInfo.databaseId),
      r = (function (o) {
        return new vg(o);
      })(e.databaseInfo);
    return (function (o, a, u, h) {
      return new Sg(o, a, u, h);
    })(e.authCredentials, e.appCheckCredentials, r, t);
  }
  createRemoteStore(e) {
    return (function (r, s, o, a, u) {
      return new Cg(r, s, o, a, u);
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (t) => Bc(this.syncEngine, t, 0),
      (function () {
        return Oc.v() ? new Oc() : new yg();
      })()
    );
  }
  createSyncEngine(e, t) {
    return (function (s, o, a, u, h, d, p) {
      const y = new Jg(s, o, a, u, h, d);
      return (p && (y.gu = !0), y);
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      t
    );
  }
  async terminate() {
    var e, t;
    (await (async function (s) {
      const o = B(s);
      (N(xt, 'RemoteStore shutting down.'),
        o.Ea.add(5),
        await dr(o),
        o.Aa.shutdown(),
        o.Ra.set('Unknown'));
    })(this.remoteStore),
      (e = this.datastore) == null || e.terminate(),
      (t = this.eventManager) == null || t.terminate());
  }
}
zi.provider = { build: () => new zi() };
/**
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
 *//**
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
 */ class h_ {
  constructor(e) {
    ((this.observer = e), (this.muted = !1));
  }
  next(e) {
    this.muted || (this.observer.next && this.Ou(this.observer.next, e));
  }
  error(e) {
    this.muted ||
      (this.observer.error
        ? this.Ou(this.observer.error, e)
        : et('Uncaught Error in snapshot listener:', e.toString()));
  }
  Nu() {
    this.muted = !0;
  }
  Ou(e, t) {
    setTimeout(() => {
      this.muted || e(t);
    }, 0);
  }
}
/**
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
 */ const At = 'FirestoreClient';
class d_ {
  constructor(e, t, r, s, o) {
    ((this.authCredentials = e),
      (this.appCheckCredentials = t),
      (this.asyncQueue = r),
      (this.databaseInfo = s),
      (this.user = Ee.UNAUTHENTICATED),
      (this.clientId = Zi.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = o),
      this.authCredentials.start(r, async (a) => {
        (N(At, 'Received user=', a.uid),
          await this.authCredentialListener(a),
          (this.user = a));
      }),
      this.appCheckCredentials.start(
        r,
        (a) => (
          N(At, 'Received new app check token=', a),
          this.appCheckCredentialListener(a, this.user)
        )
      ));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new _t();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          (this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve());
        } catch (t) {
          const r = Eo(t, 'Failed to shutdown persistence');
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function yi(n, e) {
  (n.asyncQueue.verifyOperationInProgress(),
    N(At, 'Initializing OfflineComponentProvider'));
  const t = n.configuration;
  await e.initialize(t);
  let r = t.initialUser;
  (n.setCredentialChangeListener(async (s) => {
    r.isEqual(s) || (await Vl(e.localStore, s), (r = s));
  }),
    e.persistence.setDatabaseDeletedListener(() => n.terminate()),
    (n._offlineComponents = e));
}
async function jc(n, e) {
  n.asyncQueue.verifyOperationInProgress();
  const t = await f_(n);
  (N(At, 'Initializing OnlineComponentProvider'),
    await e.initialize(t, n.configuration),
    n.setCredentialChangeListener((r) => Lc(e.remoteStore, r)),
    n.setAppCheckTokenChangeListener((r, s) => Lc(e.remoteStore, s)),
    (n._onlineComponents = e));
}
async function f_(n) {
  if (!n._offlineComponents)
    if (n._uninitializedComponentsProvider) {
      N(At, 'Using user provided OfflineComponentProvider');
      try {
        await yi(n, n._uninitializedComponentsProvider._offline);
      } catch (e) {
        const t = e;
        if (
          !(function (s) {
            return s.name === 'FirebaseError'
              ? s.code === S.FAILED_PRECONDITION || s.code === S.UNIMPLEMENTED
              : !(typeof DOMException < 'u' && s instanceof DOMException) ||
                  s.code === 22 ||
                  s.code === 20 ||
                  s.code === 11;
          })(t)
        )
          throw t;
        (un(
          'Error using user provided cache. Falling back to memory cache: ' + t
        ),
          await yi(n, new fs()));
      }
    } else
      (N(At, 'Using default OfflineComponentProvider'),
        await yi(n, new l_(void 0)));
  return n._offlineComponents;
}
async function Ql(n) {
  return (
    n._onlineComponents ||
      (n._uninitializedComponentsProvider
        ? (N(At, 'Using user provided OnlineComponentProvider'),
          await jc(n, n._uninitializedComponentsProvider._online))
        : (N(At, 'Using default OnlineComponentProvider'),
          await jc(n, new zi()))),
    n._onlineComponents
  );
}
function p_(n) {
  return Ql(n).then((e) => e.syncEngine);
}
async function m_(n) {
  const e = await Ql(n),
    t = e.eventManager;
  return (
    (t.onListen = Yg.bind(null, e.syncEngine)),
    (t.onUnlisten = e_.bind(null, e.syncEngine)),
    (t.onFirstRemoteStoreListen = Xg.bind(null, e.syncEngine)),
    (t.onLastRemoteStoreUnlisten = t_.bind(null, e.syncEngine)),
    t
  );
}
function g_(n, e, t = {}) {
  const r = new _t();
  return (
    n.asyncQueue.enqueueAndForget(async () =>
      (function (o, a, u, h, d) {
        const p = new h_({
            next: (v) => {
              (p.Nu(),
                a.enqueueAndForget(() => $g(o, y)),
                v.fromCache && h.source === 'server'
                  ? d.reject(
                      new D(
                        S.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : d.resolve(v));
            },
            error: (v) => d.reject(v),
          }),
          y = new Wg(u, p, { includeMetadataChanges: !0, qa: !0 });
        return jg(o, y);
      })(await m_(n), n.asyncQueue, e, t, r)
    ),
    r.promise
  );
}
/**
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
 */ function Jl(n) {
  const e = {};
  return (
    n.timeoutSeconds !== void 0 && (e.timeoutSeconds = n.timeoutSeconds),
    e
  );
}
/**
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
 */ const $c = new Map();
/**
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
 */ const Yl = 'firestore.googleapis.com',
  zc = !0;
class Hc {
  constructor(e) {
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new D(
          S.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      ((this.host = Yl), (this.ssl = zc));
    } else ((this.host = e.host), (this.ssl = e.ssl ?? zc));
    if (
      ((this.isUsingEmulator = e.emulatorOptions !== void 0),
      (this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = bl;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < zm)
        throw new D(
          S.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (Cp(
      'experimentalForceLongPolling',
      e.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = Jl(
        e.experimentalLongPollingOptions ?? {}
      )),
      (function (r) {
        if (r.timeoutSeconds !== void 0) {
          if (isNaN(r.timeoutSeconds))
            throw new D(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`
            );
          if (r.timeoutSeconds < 5)
            throw new D(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (r.timeoutSeconds > 30)
            throw new D(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams));
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, s) {
        return r.timeoutSeconds === s.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class Os {
  constructor(e, t, r, s) {
    ((this._authCredentials = e),
      (this._appCheckCredentials = t),
      (this._databaseId = r),
      (this._app = s),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new Hc({})),
      (this._settingsFrozen = !1),
      (this._emulatorOptions = {}),
      (this._terminateTask = 'notTerminated'));
  }
  get app() {
    if (!this._app)
      throw new D(
        S.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== 'notTerminated';
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new D(
        S.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    ((this._settings = new Hc(e)),
      (this._emulatorOptions = e.emulatorOptions || {}),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new yp();
          switch (r.type) {
            case 'firstParty':
              return new vp(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null
              );
            case 'provider':
              return r.client;
            default:
              throw new D(
                S.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              );
          }
        })(e.credentials)));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return ((this._settingsFrozen = !0), this._settings);
  }
  _delete() {
    return (
      this._terminateTask === 'notTerminated' &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === 'notTerminated'
      ? await this._terminate()
      : (this._terminateTask = 'notTerminated');
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (t) {
        const r = $c.get(t);
        r &&
          (N('ComponentProvider', 'Removing Datastore'),
          $c.delete(t),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function __(n, e, t, r = {}) {
  var d;
  n = ns(n, Os);
  const s = mn(e),
    o = n._getSettings(),
    a = { ...o, emulatorOptions: n._getEmulatorOptions() },
    u = `${e}:${t}`;
  (s && (Au(`https://${u}`), Ru('Firestore', !0)),
    o.host !== Yl &&
      o.host !== u &&
      un(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ));
  const h = { ...o, host: u, ssl: s, emulatorOptions: r };
  if (!Ot(h, a) && (n._setSettings(h), r.mockUserToken)) {
    let p, y;
    if (typeof r.mockUserToken == 'string')
      ((p = r.mockUserToken), (y = Ee.MOCK_USER));
    else {
      p = zd(
        r.mockUserToken,
        (d = n._app) == null ? void 0 : d.options.projectId
      );
      const v = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!v)
        throw new D(
          S.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      y = new Ee(v);
    }
    n._authCredentials = new Ep(new Fu(p, y));
  }
}
/**
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
 */ class In {
  constructor(e, t, r) {
    ((this.converter = t),
      (this._query = r),
      (this.type = 'query'),
      (this.firestore = e));
  }
  withConverter(e) {
    return new In(this.firestore, e, this._query);
  }
}
class ue {
  constructor(e, t, r) {
    ((this.converter = t),
      (this._key = r),
      (this.type = 'document'),
      (this.firestore = e));
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new yt(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new ue(this.firestore, e, this._key);
  }
  toJSON() {
    return { type: ue._jsonSchemaVersion, referencePath: this._key.toString() };
  }
  static fromJSON(e, t, r) {
    if (cr(t, ue._jsonSchema))
      return new ue(e, r || null, new M(J.fromString(t.referencePath)));
  }
}
((ue._jsonSchemaVersion = 'firestore/documentReference/1.0'),
  (ue._jsonSchema = {
    type: oe('string', ue._jsonSchemaVersion),
    referencePath: oe('string'),
  }));
class yt extends In {
  constructor(e, t, r) {
    (super(e, t, sl(r)), (this._path = r), (this.type = 'collection'));
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new ue(this.firestore, null, new M(e));
  }
  withConverter(e) {
    return new yt(this.firestore, e, this._path);
  }
}
function y_(n, e, ...t) {
  if (((n = Re(n)), Bu('collection', 'path', e), n instanceof Os)) {
    const r = J.fromString(e, ...t);
    return (sc(r), new yt(n, null, r));
  }
  {
    if (!(n instanceof ue || n instanceof yt))
      throw new D(
        S.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = n._path.child(J.fromString(e, ...t));
    return (sc(r), new yt(n.firestore, null, r));
  }
}
function E_(n, e, ...t) {
  if (
    ((n = Re(n)),
    arguments.length === 1 && (e = Zi.newId()),
    Bu('doc', 'path', e),
    n instanceof Os)
  ) {
    const r = J.fromString(e, ...t);
    return (rc(r), new ue(n, null, new M(r)));
  }
  {
    if (!(n instanceof ue || n instanceof yt))
      throw new D(
        S.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = n._path.child(J.fromString(e, ...t));
    return (
      rc(r),
      new ue(n.firestore, n instanceof yt ? n.converter : null, new M(r))
    );
  }
}
/**
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
 */ const Wc = 'AsyncQueue';
class Gc {
  constructor(e = Promise.resolve()) {
    ((this.Xu = []),
      (this.ec = !1),
      (this.tc = []),
      (this.nc = null),
      (this.rc = !1),
      (this.sc = !1),
      (this.oc = []),
      (this.M_ = new Dl(this, 'async_queue_retry')),
      (this._c = () => {
        const r = _i();
        (r && N(Wc, 'Visibility state changed to ' + r.visibilityState),
          this.M_.w_());
      }),
      (this.ac = e));
    const t = _i();
    t &&
      typeof t.addEventListener == 'function' &&
      t.addEventListener('visibilitychange', this._c);
  }
  get isShuttingDown() {
    return this.ec;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    (this.uc(), this.cc(e));
  }
  enterRestrictedMode(e) {
    if (!this.ec) {
      ((this.ec = !0), (this.sc = e || !1));
      const t = _i();
      t &&
        typeof t.removeEventListener == 'function' &&
        t.removeEventListener('visibilitychange', this._c);
    }
  }
  enqueue(e) {
    if ((this.uc(), this.ec)) return new Promise(() => {});
    const t = new _t();
    return this.cc(() =>
      this.ec && this.sc
        ? Promise.resolve()
        : (e().then(t.resolve, t.reject), t.promise)
    ).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Xu.push(e), this.lc()));
  }
  async lc() {
    if (this.Xu.length !== 0) {
      try {
        (await this.Xu[0](), this.Xu.shift(), this.M_.reset());
      } catch (e) {
        if (!En(e)) throw e;
        N(Wc, 'Operation failed with retryable error: ' + e);
      }
      this.Xu.length > 0 && this.M_.p_(() => this.lc());
    }
  }
  cc(e) {
    const t = this.ac.then(
      () => (
        (this.rc = !0),
        e()
          .catch((r) => {
            throw (
              (this.nc = r),
              (this.rc = !1),
              et('INTERNAL UNHANDLED ERROR: ', Kc(r)),
              r
            );
          })
          .then((r) => ((this.rc = !1), r))
      )
    );
    return ((this.ac = t), t);
  }
  enqueueAfterDelay(e, t, r) {
    (this.uc(), this.oc.indexOf(e) > -1 && (t = 0));
    const s = yo.createAndSchedule(this, e, t, r, (o) => this.hc(o));
    return (this.tc.push(s), s);
  }
  uc() {
    this.nc && x(47125, { Pc: Kc(this.nc) });
  }
  verifyOperationInProgress() {}
  async Tc() {
    let e;
    do ((e = this.ac), await e);
    while (e !== this.ac);
  }
  Ic(e) {
    for (const t of this.tc) if (t.timerId === e) return !0;
    return !1;
  }
  Ec(e) {
    return this.Tc().then(() => {
      this.tc.sort((t, r) => t.targetTimeMs - r.targetTimeMs);
      for (const t of this.tc)
        if ((t.skipDelay(), e !== 'all' && t.timerId === e)) break;
      return this.Tc();
    });
  }
  dc(e) {
    this.oc.push(e);
  }
  hc(e) {
    const t = this.tc.indexOf(e);
    this.tc.splice(t, 1);
  }
}
function Kc(n) {
  let e = n.message || '';
  return (
    n.stack &&
      (e = n.stack.includes(n.message)
        ? n.stack
        : n.message +
          `
` +
          n.stack),
    e
  );
}
class wo extends Os {
  constructor(e, t, r, s) {
    (super(e, t, r, s),
      (this.type = 'firestore'),
      (this._queue = new Gc()),
      (this._persistenceKey = (s == null ? void 0 : s.name) || '[DEFAULT]'));
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      ((this._queue = new Gc(e)), (this._firestoreClient = void 0), await e);
    }
  }
}
function T_(n, e) {
  const t = typeof n == 'object' ? n : bu(),
    r = typeof n == 'string' ? n : ss,
    s = Yi(t, 'firestore').getImmediate({ identifier: r });
  if (!s._initialized) {
    const o = jd('firestore');
    o && __(s, ...o);
  }
  return s;
}
function Xl(n) {
  if (n._terminated)
    throw new D(
      S.FAILED_PRECONDITION,
      'The client has already been terminated.'
    );
  return (n._firestoreClient || I_(n), n._firestoreClient);
}
function I_(n) {
  var r, s, o;
  const e = n._freezeSettings(),
    t = (function (u, h, d, p) {
      return new Fp(
        u,
        h,
        d,
        p.host,
        p.ssl,
        p.experimentalForceLongPolling,
        p.experimentalAutoDetectLongPolling,
        Jl(p.experimentalLongPollingOptions),
        p.useFetchStreams,
        p.isUsingEmulator
      );
    })(
      n._databaseId,
      ((r = n._app) == null ? void 0 : r.options.appId) || '',
      n._persistenceKey,
      e
    );
  (n._componentsProvider ||
    ((s = e.localCache) != null &&
      s._offlineComponentProvider &&
      (o = e.localCache) != null &&
      o._onlineComponentProvider &&
      (n._componentsProvider = {
        _offline: e.localCache._offlineComponentProvider,
        _online: e.localCache._onlineComponentProvider,
      })),
    (n._firestoreClient = new d_(
      n._authCredentials,
      n._appCheckCredentials,
      n._queue,
      t,
      n._componentsProvider &&
        (function (u) {
          const h = u == null ? void 0 : u._online.build();
          return {
            _offline: u == null ? void 0 : u._offline.build(h),
            _online: h,
          };
        })(n._componentsProvider)
    )));
}
/**
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
 */ class Ve {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Ve(fe.fromBase64String(e));
    } catch (t) {
      throw new D(
        S.INVALID_ARGUMENT,
        'Failed to construct data from Base64 string: ' + t
      );
    }
  }
  static fromUint8Array(e) {
    return new Ve(fe.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')';
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
  toJSON() {
    return { type: Ve._jsonSchemaVersion, bytes: this.toBase64() };
  }
  static fromJSON(e) {
    if (cr(e, Ve._jsonSchema)) return Ve.fromBase64String(e.bytes);
  }
}
((Ve._jsonSchemaVersion = 'firestore/bytes/1.0'),
  (Ve._jsonSchema = {
    type: oe('string', Ve._jsonSchemaVersion),
    bytes: oe('string'),
  }));
/**
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
 */ class Ao {
  constructor(...e) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].length === 0)
        throw new D(
          S.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        );
    this._internalPath = new de(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
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
 */ class Zl {
  constructor(e) {
    this._methodName = e;
  }
}
/**
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
 */ class Be {
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new D(
        S.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      );
    if (!isFinite(t) || t < -180 || t > 180)
      throw new D(
        S.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + t
      );
    ((this._lat = e), (this._long = t));
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  _compareTo(e) {
    return z(this._lat, e._lat) || z(this._long, e._long);
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: Be._jsonSchemaVersion,
    };
  }
  static fromJSON(e) {
    if (cr(e, Be._jsonSchema)) return new Be(e.latitude, e.longitude);
  }
}
((Be._jsonSchemaVersion = 'firestore/geoPoint/1.0'),
  (Be._jsonSchema = {
    type: oe('string', Be._jsonSchemaVersion),
    latitude: oe('number'),
    longitude: oe('number'),
  }));
/**
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
 */ class qe {
  constructor(e) {
    this._values = (e || []).map((t) => t);
  }
  toArray() {
    return this._values.map((e) => e);
  }
  isEqual(e) {
    return (function (r, s) {
      if (r.length !== s.length) return !1;
      for (let o = 0; o < r.length; ++o) if (r[o] !== s[o]) return !1;
      return !0;
    })(this._values, e._values);
  }
  toJSON() {
    return { type: qe._jsonSchemaVersion, vectorValues: this._values };
  }
  static fromJSON(e) {
    if (cr(e, qe._jsonSchema)) {
      if (
        Array.isArray(e.vectorValues) &&
        e.vectorValues.every((t) => typeof t == 'number')
      )
        return new qe(e.vectorValues);
      throw new D(
        S.INVALID_ARGUMENT,
        "Expected 'vectorValues' field to be a number array"
      );
    }
  }
}
((qe._jsonSchemaVersion = 'firestore/vectorValue/1.0'),
  (qe._jsonSchema = {
    type: oe('string', qe._jsonSchemaVersion),
    vectorValues: oe('object'),
  }));
/**
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
 */ const v_ = /^__.*__$/;
class w_ {
  constructor(e, t, r) {
    ((this.data = e), (this.fieldMask = t), (this.fieldTransforms = r));
  }
  toMutation(e, t) {
    return this.fieldMask !== null
      ? new jt(e, this.data, this.fieldMask, t, this.fieldTransforms)
      : new lr(e, this.data, t, this.fieldTransforms);
  }
}
function eh(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw x(40011, { Ac: n });
  }
}
class Ro {
  constructor(e, t, r, s, o, a) {
    ((this.settings = e),
      (this.databaseId = t),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = s),
      o === void 0 && this.Rc(),
      (this.fieldTransforms = o || []),
      (this.fieldMask = a || []));
  }
  get path() {
    return this.settings.path;
  }
  get Ac() {
    return this.settings.Ac;
  }
  Vc(e) {
    return new Ro(
      { ...this.settings, ...e },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  mc(e) {
    var s;
    const t = (s = this.path) == null ? void 0 : s.child(e),
      r = this.Vc({ path: t, fc: !1 });
    return (r.gc(e), r);
  }
  yc(e) {
    var s;
    const t = (s = this.path) == null ? void 0 : s.child(e),
      r = this.Vc({ path: t, fc: !1 });
    return (r.Rc(), r);
  }
  wc(e) {
    return this.Vc({ path: void 0, fc: !0 });
  }
  Sc(e) {
    return ps(
      e,
      this.settings.methodName,
      this.settings.bc || !1,
      this.path,
      this.settings.Dc
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((t) => e.isPrefixOf(t)) !== void 0 ||
      this.fieldTransforms.find((t) => e.isPrefixOf(t.field)) !== void 0
    );
  }
  Rc() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.gc(this.path.get(e));
  }
  gc(e) {
    if (e.length === 0) throw this.Sc('Document fields must not be empty');
    if (eh(this.Ac) && v_.test(e))
      throw this.Sc('Document fields cannot begin and end with "__"');
  }
}
class A_ {
  constructor(e, t, r) {
    ((this.databaseId = e),
      (this.ignoreUndefinedProperties = t),
      (this.serializer = r || Vs(e)));
  }
  Cc(e, t, r, s = !1) {
    return new Ro(
      { Ac: e, methodName: t, Dc: r, path: de.emptyPath(), fc: !1, bc: s },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function th(n) {
  const e = n._freezeSettings(),
    t = Vs(n._databaseId);
  return new A_(n._databaseId, !!e.ignoreUndefinedProperties, t);
}
function R_(n, e, t, r, s, o = {}) {
  const a = n.Cc(o.merge || o.mergeFields ? 2 : 0, e, t, s);
  sh('Data must be an object, but it was:', a, r);
  const u = nh(r, a);
  let h, d;
  if (o.merge) ((h = new De(a.fieldMask)), (d = a.fieldTransforms));
  else if (o.mergeFields) {
    const p = [];
    for (const y of o.mergeFields) {
      const v = P_(e, y, t);
      if (!a.contains(v))
        throw new D(
          S.INVALID_ARGUMENT,
          `Field '${v}' is specified in your field mask but missing from your input data.`
        );
      b_(p, v) || p.push(v);
    }
    ((h = new De(p)), (d = a.fieldTransforms.filter((y) => h.covers(y.field))));
  } else ((h = null), (d = a.fieldTransforms));
  return new w_(new ke(u), h, d);
}
function S_(n, e, t, r = !1) {
  return So(t, n.Cc(r ? 4 : 3, e));
}
function So(n, e) {
  if (rh((n = Re(n)))) return (sh('Unsupported field value:', e, n), nh(n, e));
  if (n instanceof Zl)
    return (
      (function (r, s) {
        if (!eh(s.Ac))
          throw s.Sc(
            `${r._methodName}() can only be used with update() and set()`
          );
        if (!s.path)
          throw s.Sc(
            `${r._methodName}() is not currently supported inside arrays`
          );
        const o = r._toFieldTransform(s);
        o && s.fieldTransforms.push(o);
      })(n, e),
      null
    );
  if (n === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), n instanceof Array)) {
    if (e.settings.fc && e.Ac !== 4)
      throw e.Sc('Nested arrays are not supported');
    return (function (r, s) {
      const o = [];
      let a = 0;
      for (const u of r) {
        let h = So(u, s.wc(a));
        (h == null && (h = { nullValue: 'NULL_VALUE' }), o.push(h), a++);
      }
      return { arrayValue: { values: o } };
    })(n, e);
  }
  return (function (r, s) {
    if ((r = Re(r)) === null) return { nullValue: 'NULL_VALUE' };
    if (typeof r == 'number') return cm(s.serializer, r);
    if (typeof r == 'boolean') return { booleanValue: r };
    if (typeof r == 'string') return { stringValue: r };
    if (r instanceof Date) {
      const o = X.fromDate(r);
      return { timestampValue: ls(s.serializer, o) };
    }
    if (r instanceof X) {
      const o = new X(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: ls(s.serializer, o) };
    }
    if (r instanceof Be)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof Ve) return { bytesValue: vl(s.serializer, r._byteString) };
    if (r instanceof ue) {
      const o = s.databaseId,
        a = r.firestore._databaseId;
      if (!a.isEqual(o))
        throw s.Sc(
          `Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`
        );
      return {
        referenceValue: co(
          r.firestore._databaseId || s.databaseId,
          r._key.path
        ),
      };
    }
    if (r instanceof qe)
      return (function (a, u) {
        return {
          mapValue: {
            fields: {
              [Qu]: { stringValue: Ju },
              [is]: {
                arrayValue: {
                  values: a.toArray().map((d) => {
                    if (typeof d != 'number')
                      throw u.Sc(
                        'VectorValues must only contain numeric values.'
                      );
                    return io(u.serializer, d);
                  }),
                },
              },
            },
          },
        };
      })(r, s);
    throw s.Sc(`Unsupported field value: ${vs(r)}`);
  })(n, e);
}
function nh(n, e) {
  const t = {};
  return (
    $u(n)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Bt(n, (r, s) => {
          const o = So(s, e.mc(r));
          o != null && (t[r] = o);
        }),
    { mapValue: { fields: t } }
  );
}
function rh(n) {
  return !(
    typeof n != 'object' ||
    n === null ||
    n instanceof Array ||
    n instanceof Date ||
    n instanceof X ||
    n instanceof Be ||
    n instanceof Ve ||
    n instanceof ue ||
    n instanceof Zl ||
    n instanceof qe
  );
}
function sh(n, e, t) {
  if (!rh(t) || !qu(t)) {
    const r = vs(t);
    throw r === 'an object' ? e.Sc(n + ' a custom object') : e.Sc(n + ' ' + r);
  }
}
function P_(n, e, t) {
  if ((e = Re(e)) instanceof Ao) return e._internalPath;
  if (typeof e == 'string') return ih(n, e);
  throw ps('Field path arguments must be of type string or ', n, !1, void 0, t);
}
const C_ = new RegExp('[~\\*/\\[\\]]');
function ih(n, e, t) {
  if (e.search(C_) >= 0)
    throw ps(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      n,
      !1,
      void 0,
      t
    );
  try {
    return new Ao(...e.split('.'))._internalPath;
  } catch {
    throw ps(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      !1,
      void 0,
      t
    );
  }
}
function ps(n, e, t, r, s) {
  const o = r && !r.isEmpty(),
    a = s !== void 0;
  let u = `Function ${e}() called with invalid data`;
  (t && (u += ' (via `toFirestore()`)'), (u += '. '));
  let h = '';
  return (
    (o || a) &&
      ((h += ' (found'),
      o && (h += ` in field ${r}`),
      a && (h += ` in document ${s}`),
      (h += ')')),
    new D(S.INVALID_ARGUMENT, u + n + h)
  );
}
function b_(n, e) {
  return n.some((t) => t.isEqual(e));
}
/**
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
 */ class oh {
  constructor(e, t, r, s, o) {
    ((this._firestore = e),
      (this._userDataWriter = t),
      (this._key = r),
      (this._document = s),
      (this._converter = o));
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new ue(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new k_(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const t = this._document.data.field(Po('DocumentSnapshot.get', e));
      if (t !== null) return this._userDataWriter.convertValue(t);
    }
  }
}
class k_ extends oh {
  data() {
    return super.data();
  }
}
function Po(n, e) {
  return typeof e == 'string'
    ? ih(n, e)
    : e instanceof Ao
      ? e._internalPath
      : e._delegate._internalPath;
}
/**
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
 */ function V_(n) {
  if (n.limitType === 'L' && n.explicitOrderBy.length === 0)
    throw new D(
      S.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    );
}
class Co {}
class N_ extends Co {}
function dT(n, e, ...t) {
  let r = [];
  (e instanceof Co && r.push(e),
    (r = r.concat(t)),
    (function (o) {
      const a = o.filter((h) => h instanceof bo).length,
        u = o.filter((h) => h instanceof Ms).length;
      if (a > 1 || (a > 0 && u > 0))
        throw new D(
          S.INVALID_ARGUMENT,
          'InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.'
        );
    })(r));
  for (const s of r) n = s._apply(n);
  return n;
}
class Ms extends N_ {
  constructor(e, t, r) {
    (super(),
      (this._field = e),
      (this._op = t),
      (this._value = r),
      (this.type = 'where'));
  }
  static _create(e, t, r) {
    return new Ms(e, t, r);
  }
  _apply(e) {
    const t = this._parse(e);
    return (ah(e._query, t), new In(e.firestore, e.converter, Oi(e._query, t)));
  }
  _parse(e) {
    const t = th(e.firestore);
    return (function (o, a, u, h, d, p, y) {
      let v;
      if (d.isKeyField()) {
        if (p === 'array-contains' || p === 'array-contains-any')
          throw new D(
            S.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${p}' queries on documentId().`
          );
        if (p === 'in' || p === 'not-in') {
          Jc(y, p);
          const b = [];
          for (const O of y) b.push(Qc(h, o, O));
          v = { arrayValue: { values: b } };
        } else v = Qc(h, o, y);
      } else
        ((p !== 'in' && p !== 'not-in' && p !== 'array-contains-any') ||
          Jc(y, p),
          (v = S_(u, a, y, p === 'in' || p === 'not-in')));
      return ie.create(d, p, v);
    })(
      e._query,
      'where',
      t,
      e.firestore._databaseId,
      this._field,
      this._op,
      this._value
    );
  }
}
function fT(n, e, t) {
  const r = e,
    s = Po('where', n);
  return Ms._create(s, r, t);
}
class bo extends Co {
  constructor(e, t) {
    (super(), (this.type = e), (this._queryConstraints = t));
  }
  static _create(e, t) {
    return new bo(e, t);
  }
  _parse(e) {
    const t = this._queryConstraints
      .map((r) => r._parse(e))
      .filter((r) => r.getFilters().length > 0);
    return t.length === 1 ? t[0] : Me.create(t, this._getOperator());
  }
  _apply(e) {
    const t = this._parse(e);
    return t.getFilters().length === 0
      ? e
      : ((function (s, o) {
          let a = s;
          const u = o.getFlattenedFilters();
          for (const h of u) (ah(a, h), (a = Oi(a, h)));
        })(e._query, t),
        new In(e.firestore, e.converter, Oi(e._query, t)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === 'and' ? 'and' : 'or';
  }
}
function Qc(n, e, t) {
  if (typeof (t = Re(t)) == 'string') {
    if (t === '')
      throw new D(
        S.INVALID_ARGUMENT,
        'Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.'
      );
    if (!il(e) && t.indexOf('/') !== -1)
      throw new D(
        S.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`
      );
    const r = e.path.child(J.fromString(t));
    if (!M.isDocumentKey(r))
      throw new D(
        S.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
      );
    return dc(n, new M(r));
  }
  if (t instanceof ue) return dc(n, t._key);
  throw new D(
    S.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vs(t)}.`
  );
}
function Jc(n, e) {
  if (!Array.isArray(n) || n.length === 0)
    throw new D(
      S.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
}
function ah(n, e) {
  const t = (function (s, o) {
    for (const a of s)
      for (const u of a.getFlattenedFilters())
        if (o.indexOf(u.op) >= 0) return u.op;
    return null;
  })(
    n.filters,
    (function (s) {
      switch (s) {
        case '!=':
          return ['!=', 'not-in'];
        case 'array-contains-any':
        case 'in':
          return ['not-in'];
        case 'not-in':
          return ['array-contains-any', 'in', 'not-in', '!='];
        default:
          return [];
      }
    })(e.op)
  );
  if (t !== null)
    throw t === e.op
      ? new D(
          S.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`
        )
      : new D(
          S.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`
        );
}
class D_ {
  convertValue(e, t = 'none') {
    switch (vt(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ne(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(It(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 11:
        return this.convertObject(e.mapValue, t);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw x(62114, { value: e });
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  convertObjectMap(e, t = 'none') {
    const r = {};
    return (
      Bt(e, (s, o) => {
        r[s] = this.convertValue(o, t);
      }),
      r
    );
  }
  convertVectorValue(e) {
    var r, s, o;
    const t =
      (o =
        (s = (r = e.fields) == null ? void 0 : r[is].arrayValue) == null
          ? void 0
          : s.values) == null
        ? void 0
        : o.map((a) => ne(a.doubleValue));
    return new qe(t);
  }
  convertGeoPoint(e) {
    return new Be(ne(e.latitude), ne(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map((r) => this.convertValue(r, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case 'previous':
        const r = Rs(e);
        return r == null ? null : this.convertValue(r, t);
      case 'estimate':
        return this.convertTimestamp(Zn(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = Tt(e);
    return new X(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const r = J.fromString(e);
    K(Cl(r), 9688, { name: e });
    const s = new er(r.get(1), r.get(3)),
      o = new M(r.popFirst(5));
    return (
      s.isEqual(t) ||
        et(
          `Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`
        ),
      o
    );
  }
}
/**
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
 */ function O_(n, e, t) {
  let r;
  return ((r = n ? n.toFirestore(e) : e), r);
}
class jr {
  constructor(e, t) {
    ((this.hasPendingWrites = e), (this.fromCache = t));
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class nn extends oh {
  constructor(e, t, r, s, o, a) {
    (super(e, t, r, s, a),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = o));
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const t = new Qr(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(t, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, t = {}) {
    if (this._document) {
      const r = this._document.data.field(Po('DocumentSnapshot.get', e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, t.serverTimestamps);
    }
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new D(
        S.FAILED_PRECONDITION,
        'DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().'
      );
    const e = this._document,
      t = {};
    return (
      (t.type = nn._jsonSchemaVersion),
      (t.bundle = ''),
      (t.bundleSource = 'DocumentSnapshot'),
      (t.bundleName = this._key.toString()),
      !e || !e.isValidDocument() || !e.isFoundDocument()
        ? t
        : (this._userDataWriter.convertObjectMap(
            e.data.value.mapValue.fields,
            'previous'
          ),
          (t.bundle = (this._firestore, this.ref.path, 'NOT SUPPORTED')),
          t)
    );
  }
}
((nn._jsonSchemaVersion = 'firestore/documentSnapshot/1.0'),
  (nn._jsonSchema = {
    type: oe('string', nn._jsonSchemaVersion),
    bundleSource: oe('string', 'DocumentSnapshot'),
    bundleName: oe('string'),
    bundle: oe('string'),
  }));
class Qr extends nn {
  data(e = {}) {
    return super.data(e);
  }
}
class rn {
  constructor(e, t, r, s) {
    ((this._firestore = e),
      (this._userDataWriter = t),
      (this._snapshot = s),
      (this.metadata = new jr(s.hasPendingWrites, s.fromCache)),
      (this.query = r));
  }
  get docs() {
    const e = [];
    return (this.forEach((t) => e.push(t)), e);
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, t) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        t,
        new Qr(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new jr(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const t = !!e.includeMetadataChanges;
    if (t && this._snapshot.excludesMetadataChanges)
      throw new D(
        S.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === t) ||
        ((this._cachedChanges = (function (s, o) {
          if (s._snapshot.oldDocs.isEmpty()) {
            let a = 0;
            return s._snapshot.docChanges.map((u) => {
              const h = new Qr(
                s._firestore,
                s._userDataWriter,
                u.doc.key,
                u.doc,
                new jr(
                  s._snapshot.mutatedKeys.has(u.doc.key),
                  s._snapshot.fromCache
                ),
                s.query.converter
              );
              return (
                u.doc,
                { type: 'added', doc: h, oldIndex: -1, newIndex: a++ }
              );
            });
          }
          {
            let a = s._snapshot.oldDocs;
            return s._snapshot.docChanges
              .filter((u) => o || u.type !== 3)
              .map((u) => {
                const h = new Qr(
                  s._firestore,
                  s._userDataWriter,
                  u.doc.key,
                  u.doc,
                  new jr(
                    s._snapshot.mutatedKeys.has(u.doc.key),
                    s._snapshot.fromCache
                  ),
                  s.query.converter
                );
                let d = -1,
                  p = -1;
                return (
                  u.type !== 0 &&
                    ((d = a.indexOf(u.doc.key)), (a = a.delete(u.doc.key))),
                  u.type !== 1 &&
                    ((a = a.add(u.doc)), (p = a.indexOf(u.doc.key))),
                  { type: M_(u.type), doc: h, oldIndex: d, newIndex: p }
                );
              });
          }
        })(this, t)),
        (this._cachedChangesIncludeMetadataChanges = t)),
      this._cachedChanges
    );
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new D(
        S.FAILED_PRECONDITION,
        'QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().'
      );
    const e = {};
    ((e.type = rn._jsonSchemaVersion),
      (e.bundleSource = 'QuerySnapshot'),
      (e.bundleName = Zi.newId()),
      this._firestore._databaseId.database,
      this._firestore._databaseId.projectId);
    const t = [],
      r = [],
      s = [];
    return (
      this.docs.forEach((o) => {
        o._document !== null &&
          (t.push(o._document),
          r.push(
            this._userDataWriter.convertObjectMap(
              o._document.data.value.mapValue.fields,
              'previous'
            )
          ),
          s.push(o.ref.path));
      }),
      (e.bundle =
        (this._firestore, this.query._query, e.bundleName, 'NOT SUPPORTED')),
      e
    );
  }
}
function M_(n) {
  switch (n) {
    case 0:
      return 'added';
    case 2:
    case 3:
      return 'modified';
    case 1:
      return 'removed';
    default:
      return x(61501, { type: n });
  }
}
((rn._jsonSchemaVersion = 'firestore/querySnapshot/1.0'),
  (rn._jsonSchema = {
    type: oe('string', rn._jsonSchemaVersion),
    bundleSource: oe('string', 'QuerySnapshot'),
    bundleName: oe('string'),
    bundle: oe('string'),
  }));
class L_ extends D_ {
  constructor(e) {
    (super(), (this.firestore = e));
  }
  convertBytes(e) {
    return new Ve(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new ue(this.firestore, null, t);
  }
}
function pT(n) {
  n = ns(n, In);
  const e = ns(n.firestore, wo),
    t = Xl(e),
    r = new L_(e);
  return (V_(n._query), g_(t, n._query).then((s) => new rn(e, r, n, s)));
}
function x_(n, e) {
  const t = ns(n.firestore, wo),
    r = E_(n),
    s = O_(n.converter, e);
  return U_(t, [
    R_(
      th(n.firestore),
      'addDoc',
      r._key,
      s,
      n.converter !== null,
      {}
    ).toMutation(r._key, Ye.exists(!1)),
  ]).then(() => r);
}
function U_(n, e) {
  return (function (r, s) {
    const o = new _t();
    return (
      r.asyncQueue.enqueueAndForget(async () => n_(await p_(r), s, o)),
      o.promise
    );
  })(Xl(n), e);
}
(function (e, t = !0) {
  ((function (s) {
    _n = s;
  })(gn),
    cn(
      new Mt(
        'firestore',
        (r, { instanceIdentifier: s, options: o }) => {
          const a = r.getProvider('app').getImmediate(),
            u = new wo(
              new Tp(r.getProvider('auth-internal')),
              new wp(a, r.getProvider('app-check-internal')),
              (function (d, p) {
                if (
                  !Object.prototype.hasOwnProperty.apply(d.options, [
                    'projectId',
                  ])
                )
                  throw new D(
                    S.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new er(d.options.projectId, p);
              })(a, s),
              a
            );
          return ((o = { useFetchStreams: t, ...o }), u._setSettings(o), u);
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    mt(Za, ec, e),
    mt(Za, ec, 'esm2020'));
})();
function ch() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const F_ = ch,
  uh = new or('auth', 'Firebase', ch());
/**
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
 */ const ms = new Qi('@firebase/auth');
function B_(n, ...e) {
  ms.logLevel <= $.WARN && ms.warn(`Auth (${gn}): ${n}`, ...e);
}
function Jr(n, ...e) {
  ms.logLevel <= $.ERROR && ms.error(`Auth (${gn}): ${n}`, ...e);
}
/**
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
 */ function Le(n, ...e) {
  throw ko(n, ...e);
}
function je(n, ...e) {
  return ko(n, ...e);
}
function lh(n, e, t) {
  const r = { ...F_(), [e]: t };
  return new or('auth', 'Firebase', r).create(e, { appName: n.name });
}
function Xe(n) {
  return lh(
    n,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp'
  );
}
function ko(n, ...e) {
  if (typeof n != 'string') {
    const t = e[0],
      r = [...e.slice(1)];
    return (r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r));
  }
  return uh.create(n, ...e);
}
function L(n, e, ...t) {
  if (!n) throw ko(e, ...t);
}
function Qe(n) {
  const e = 'INTERNAL ASSERTION FAILED: ' + n;
  throw (Jr(e), new Error(e));
}
function nt(n, e) {
  n || Qe(e);
}
/**
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
 */ function Hi() {
  var n;
  return (
    (typeof self < 'u' && ((n = self.location) == null ? void 0 : n.href)) || ''
  );
}
function q_() {
  return Yc() === 'http:' || Yc() === 'https:';
}
function Yc() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) == null ? void 0 : n.protocol)) ||
    null
  );
}
/**
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
 */ function j_() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (q_() || Jd() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function $_() {
  if (typeof navigator > 'u') return null;
  const n = navigator;
  return (n.languages && n.languages[0]) || n.language || null;
}
/**
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
 */ class pr {
  constructor(e, t) {
    ((this.shortDelay = e),
      (this.longDelay = t),
      nt(t > e, 'Short delay should be less than long delay!'),
      (this.isMobile = Gd() || Yd()));
  }
  get() {
    return j_()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
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
 */ function Vo(n, e) {
  nt(n.emulator, 'Emulator should always be set here');
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith('/') ? e.slice(1) : e}` : t;
}
/**
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
 */ class hh {
  static initialize(e, t, r) {
    ((this.fetchImpl = e),
      t && (this.headersImpl = t),
      r && (this.responseImpl = r));
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    Qe(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    Qe(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    Qe(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
}
/**
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
 */ const z_ = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
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
 */ const H_ = [
    '/v1/accounts:signInWithCustomToken',
    '/v1/accounts:signInWithEmailLink',
    '/v1/accounts:signInWithIdp',
    '/v1/accounts:signInWithPassword',
    '/v1/accounts:signInWithPhoneNumber',
    '/v1/token',
  ],
  W_ = new pr(3e4, 6e4);
function Rt(n, e) {
  return n.tenantId && !e.tenantId ? { ...e, tenantId: n.tenantId } : e;
}
async function St(n, e, t, r, s = {}) {
  return dh(n, s, async () => {
    let o = {},
      a = {};
    r && (e === 'GET' ? (a = r) : (o = { body: JSON.stringify(r) }));
    const u = ar({ key: n.config.apiKey, ...a }).slice(1),
      h = await n._getAdditionalHeaders();
    ((h['Content-Type'] = 'application/json'),
      n.languageCode && (h['X-Firebase-Locale'] = n.languageCode));
    const d = { method: e, headers: h, ...o };
    return (
      Qd() || (d.referrerPolicy = 'no-referrer'),
      n.emulatorConfig &&
        mn(n.emulatorConfig.host) &&
        (d.credentials = 'include'),
      hh.fetch()(await fh(n, n.config.apiHost, t, u), d)
    );
  });
}
async function dh(n, e, t) {
  n._canInitEmulator = !1;
  const r = { ...z_, ...e };
  try {
    const s = new K_(n),
      o = await Promise.race([t(), s.promise]);
    s.clearNetworkTimeout();
    const a = await o.json();
    if ('needConfirmation' in a)
      throw $r(n, 'account-exists-with-different-credential', a);
    if (o.ok && !('errorMessage' in a)) return a;
    {
      const u = o.ok ? a.errorMessage : a.error.message,
        [h, d] = u.split(' : ');
      if (h === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw $r(n, 'credential-already-in-use', a);
      if (h === 'EMAIL_EXISTS') throw $r(n, 'email-already-in-use', a);
      if (h === 'USER_DISABLED') throw $r(n, 'user-disabled', a);
      const p = r[h] || h.toLowerCase().replace(/[_\s]+/g, '-');
      if (d) throw lh(n, p, d);
      Le(n, p);
    }
  } catch (s) {
    if (s instanceof rt) throw s;
    Le(n, 'network-request-failed', { message: String(s) });
  }
}
async function mr(n, e, t, r, s = {}) {
  const o = await St(n, e, t, r, s);
  return (
    'mfaPendingCredential' in o &&
      Le(n, 'multi-factor-auth-required', { _serverResponse: o }),
    o
  );
}
async function fh(n, e, t, r) {
  const s = `${e}${t}?${r}`,
    o = n,
    a = o.config.emulator ? Vo(n.config, s) : `${n.config.apiScheme}://${s}`;
  return H_.includes(t) &&
    (await o._persistenceManagerAvailable, o._getPersistenceType() === 'COOKIE')
    ? o._getPersistence()._getFinalTarget(a).toString()
    : a;
}
function G_(n) {
  switch (n) {
    case 'ENFORCE':
      return 'ENFORCE';
    case 'AUDIT':
      return 'AUDIT';
    case 'OFF':
      return 'OFF';
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED';
  }
}
class K_ {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    ((this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((t, r) => {
        this.timer = setTimeout(
          () => r(je(this.auth, 'network-request-failed')),
          W_.get()
        );
      })));
  }
}
function $r(n, e, t) {
  const r = { appName: n.name };
  (t.email && (r.email = t.email),
    t.phoneNumber && (r.phoneNumber = t.phoneNumber));
  const s = je(n, e, r);
  return ((s.customData._tokenResponse = t), s);
}
function Xc(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class Q_ {
  constructor(e) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined');
    ((this.siteKey = e.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState));
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return G_(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === 'ENFORCE' ||
      this.getProviderEnforcementState(e) === 'AUDIT'
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled('EMAIL_PASSWORD_PROVIDER') ||
      this.isProviderEnabled('PHONE_PROVIDER')
    );
  }
}
async function J_(n, e) {
  return St(n, 'GET', '/v2/recaptchaConfig', Rt(n, e));
}
/**
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
 */ async function Y_(n, e) {
  return St(n, 'POST', '/v1/accounts:delete', e);
}
async function gs(n, e) {
  return St(n, 'POST', '/v1/accounts:lookup', e);
}
/**
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
 */ function Jn(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function X_(n, e = !1) {
  const t = Re(n),
    r = await t.getIdToken(e),
    s = No(r);
  L(s && s.exp && s.auth_time && s.iat, t.auth, 'internal-error');
  const o = typeof s.firebase == 'object' ? s.firebase : void 0,
    a = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: s,
    token: r,
    authTime: Jn(Ei(s.auth_time)),
    issuedAtTime: Jn(Ei(s.iat)),
    expirationTime: Jn(Ei(s.exp)),
    signInProvider: a || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null,
  };
}
function Ei(n) {
  return Number(n) * 1e3;
}
function No(n) {
  const [e, t, r] = n.split('.');
  if (e === void 0 || t === void 0 || r === void 0)
    return (Jr('JWT malformed, contained fewer than 3 sections'), null);
  try {
    const s = Tu(t);
    return s
      ? JSON.parse(s)
      : (Jr('Failed to decode base64 JWT payload'), null);
  } catch (s) {
    return (
      Jr(
        'Caught error parsing JWT payload as JSON',
        s == null ? void 0 : s.toString()
      ),
      null
    );
  }
}
function Zc(n) {
  const e = No(n);
  return (
    L(e, 'internal-error'),
    L(typeof e.exp < 'u', 'internal-error'),
    L(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  );
}
/**
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
 */ async function sr(n, e, t = !1) {
  if (t) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      r instanceof rt &&
        Z_(r) &&
        n.auth.currentUser === n &&
        (await n.auth.signOut()),
      r
    );
  }
}
function Z_({ code: n }) {
  return n === 'auth/user-disabled' || n === 'auth/user-token-expired';
}
/**
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
 */ class ey {
  constructor(e) {
    ((this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4));
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    if (e) {
      const t = this.errorBackoff;
      return ((this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), t);
    } else {
      this.errorBackoff = 3e4;
      const r =
        (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, r);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === 'auth/network-request-failed' &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
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
 */ class Wi {
  constructor(e, t) {
    ((this.createdAt = e), (this.lastLoginAt = t), this._initializeTime());
  }
  _initializeTime() {
    ((this.lastSignInTime = Jn(this.lastLoginAt)),
      (this.creationTime = Jn(this.createdAt)));
  }
  _copy(e) {
    ((this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime());
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
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
 */ async function _s(n) {
  var y;
  const e = n.auth,
    t = await n.getIdToken(),
    r = await sr(n, gs(e, { idToken: t }));
  L(r == null ? void 0 : r.users.length, e, 'internal-error');
  const s = r.users[0];
  n._notifyReloadListener(s);
  const o =
      (y = s.providerUserInfo) != null && y.length
        ? ph(s.providerUserInfo)
        : [],
    a = ny(n.providerData, o),
    u = n.isAnonymous,
    h = !(n.email && s.passwordHash) && !(a != null && a.length),
    d = u ? h : !1,
    p = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new Wi(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(n, p);
}
async function ty(n) {
  const e = Re(n);
  (await _s(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e));
}
function ny(n, e) {
  return [
    ...n.filter((r) => !e.some((s) => s.providerId === r.providerId)),
    ...e,
  ];
}
function ph(n) {
  return n.map(({ providerId: e, ...t }) => ({
    providerId: e,
    uid: t.rawId || '',
    displayName: t.displayName || null,
    email: t.email || null,
    phoneNumber: t.phoneNumber || null,
    photoURL: t.photoUrl || null,
  }));
}
/**
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
 */ async function ry(n, e) {
  const t = await dh(n, {}, async () => {
    const r = ar({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: s, apiKey: o } = n.config,
      a = await fh(n, s, '/v1/token', `key=${o}`),
      u = await n._getAdditionalHeaders();
    u['Content-Type'] = 'application/x-www-form-urlencoded';
    const h = { method: 'POST', headers: u, body: r };
    return (
      n.emulatorConfig &&
        mn(n.emulatorConfig.host) &&
        (h.credentials = 'include'),
      hh.fetch()(a, h)
    );
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token,
  };
}
async function sy(n, e) {
  return St(n, 'POST', '/v2/accounts:revokeToken', Rt(n, e));
}
/**
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
 */ class sn {
  constructor() {
    ((this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null));
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    (L(e.idToken, 'internal-error'),
      L(typeof e.idToken < 'u', 'internal-error'),
      L(typeof e.refreshToken < 'u', 'internal-error'));
    const t =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : Zc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    L(e.length !== 0, 'internal-error');
    const t = Zc(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired
      ? this.accessToken
      : (L(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: s, expiresIn: o } = await ry(e, t);
    this.updateTokensAndExpiration(r, s, Number(o));
  }
  updateTokensAndExpiration(e, t, r) {
    ((this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3));
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: s, expirationTime: o } = t,
      a = new sn();
    return (
      r &&
        (L(typeof r == 'string', 'internal-error', { appName: e }),
        (a.refreshToken = r)),
      s &&
        (L(typeof s == 'string', 'internal-error', { appName: e }),
        (a.accessToken = s)),
      o &&
        (L(typeof o == 'number', 'internal-error', { appName: e }),
        (a.expirationTime = o)),
      a
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    ((this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime));
  }
  _clone() {
    return Object.assign(new sn(), this.toJSON());
  }
  _performRefresh() {
    return Qe('not implemented');
  }
}
/**
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
 */ function ct(n, e) {
  L(typeof n == 'string' || typeof n > 'u', 'internal-error', { appName: e });
}
class Oe {
  constructor({ uid: e, auth: t, stsTokenManager: r, ...s }) {
    ((this.providerId = 'firebase'),
      (this.proactiveRefresh = new ey(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = e),
      (this.auth = t),
      (this.stsTokenManager = r),
      (this.accessToken = r.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Wi(s.createdAt || void 0, s.lastLoginAt || void 0)));
  }
  async getIdToken(e) {
    const t = await sr(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      L(t, this.auth, 'internal-error'),
      this.accessToken !== t &&
        ((this.accessToken = t),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      t
    );
  }
  getIdTokenResult(e) {
    return X_(this, e);
  }
  reload() {
    return ty(this);
  }
  _assign(e) {
    this !== e &&
      (L(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((t) => ({ ...t }))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new Oe({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone(),
    });
    return (t.metadata._copy(this.metadata), t);
  }
  _onReload(e) {
    (L(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null)));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    (e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      t && (await _s(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this));
  }
  async delete() {
    if (be(this.auth.app)) return Promise.reject(Xe(this.auth));
    const e = await this.getIdToken();
    return (
      await sr(this, Y_(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return {
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => ({ ...e })),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId,
      ...this.metadata.toJSON(),
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name,
    };
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(e, t) {
    const r = t.displayName ?? void 0,
      s = t.email ?? void 0,
      o = t.phoneNumber ?? void 0,
      a = t.photoURL ?? void 0,
      u = t.tenantId ?? void 0,
      h = t._redirectEventId ?? void 0,
      d = t.createdAt ?? void 0,
      p = t.lastLoginAt ?? void 0,
      {
        uid: y,
        emailVerified: v,
        isAnonymous: C,
        providerData: b,
        stsTokenManager: O,
      } = t;
    L(y && O, e, 'internal-error');
    const V = sn.fromJSON(this.name, O);
    (L(typeof y == 'string', e, 'internal-error'),
      ct(r, e.name),
      ct(s, e.name),
      L(typeof v == 'boolean', e, 'internal-error'),
      L(typeof C == 'boolean', e, 'internal-error'),
      ct(o, e.name),
      ct(a, e.name),
      ct(u, e.name),
      ct(h, e.name),
      ct(d, e.name),
      ct(p, e.name));
    const j = new Oe({
      uid: y,
      auth: e,
      email: s,
      emailVerified: v,
      displayName: r,
      isAnonymous: C,
      photoURL: a,
      phoneNumber: o,
      tenantId: u,
      stsTokenManager: V,
      createdAt: d,
      lastLoginAt: p,
    });
    return (
      b && Array.isArray(b) && (j.providerData = b.map((U) => ({ ...U }))),
      h && (j._redirectEventId = h),
      j
    );
  }
  static async _fromIdTokenResponse(e, t, r = !1) {
    const s = new sn();
    s.updateFromServerResponse(t);
    const o = new Oe({
      uid: t.localId,
      auth: e,
      stsTokenManager: s,
      isAnonymous: r,
    });
    return (await _s(o), o);
  }
  static async _fromGetAccountInfoResponse(e, t, r) {
    const s = t.users[0];
    L(s.localId !== void 0, 'internal-error');
    const o = s.providerUserInfo !== void 0 ? ph(s.providerUserInfo) : [],
      a = !(s.email && s.passwordHash) && !(o != null && o.length),
      u = new sn();
    u.updateFromIdToken(r);
    const h = new Oe({
        uid: s.localId,
        auth: e,
        stsTokenManager: u,
        isAnonymous: a,
      }),
      d = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: o,
        metadata: new Wi(s.createdAt, s.lastLoginAt),
        isAnonymous: !(s.email && s.passwordHash) && !(o != null && o.length),
      };
    return (Object.assign(h, d), h);
  }
}
/**
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
 */ const eu = new Map();
function Je(n) {
  nt(n instanceof Function, 'Expected a class definition');
  let e = eu.get(n);
  return e
    ? (nt(e instanceof n, 'Instance stored in cache mismatched with class'), e)
    : ((e = new n()), eu.set(n, e), e);
}
/**
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
 */ class mh {
  constructor() {
    ((this.type = 'NONE'), (this.storage = {}));
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
mh.type = 'NONE';
const tu = mh;
/**
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
 */ function Yr(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class on {
  constructor(e, t, r) {
    ((this.persistence = e), (this.auth = t), (this.userKey = r));
    const { config: s, name: o } = this.auth;
    ((this.fullUserKey = Yr(this.userKey, s.apiKey, o)),
      (this.fullPersistenceKey = Yr('persistence', s.apiKey, o)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler));
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e) return null;
    if (typeof e == 'string') {
      const t = await gs(this.auth, { idToken: e }).catch(() => {});
      return t ? Oe._fromGetAccountInfoResponse(this.auth, t, e) : null;
    }
    return Oe._fromJSON(this.auth, e);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const t = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), t))
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = 'authUser') {
    if (!t.length) return new on(Je(tu), e, r);
    const s = (
      await Promise.all(
        t.map(async (d) => {
          if (await d._isAvailable()) return d;
        })
      )
    ).filter((d) => d);
    let o = s[0] || Je(tu);
    const a = Yr(r, e.config.apiKey, e.name);
    let u = null;
    for (const d of t)
      try {
        const p = await d._get(a);
        if (p) {
          let y;
          if (typeof p == 'string') {
            const v = await gs(e, { idToken: p }).catch(() => {});
            if (!v) break;
            y = await Oe._fromGetAccountInfoResponse(e, v, p);
          } else y = Oe._fromJSON(e, p);
          (d !== o && (u = y), (o = d));
          break;
        }
      } catch {}
    const h = s.filter((d) => d._shouldAllowMigration);
    return !o._shouldAllowMigration || !h.length
      ? new on(o, e, r)
      : ((o = h[0]),
        u && (await o._set(a, u.toJSON())),
        await Promise.all(
          t.map(async (d) => {
            if (d !== o)
              try {
                await d._remove(a);
              } catch {}
          })
        ),
        new on(o, e, r));
  }
}
/**
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
 */ function nu(n) {
  const e = n.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera';
  if (Eh(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (gh(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (Ih(e)) return 'Blackberry';
  if (vh(e)) return 'Webos';
  if (_h(e)) return 'Safari';
  if ((e.includes('chrome/') || yh(e)) && !e.includes('edge/')) return 'Chrome';
  if (Th(e)) return 'Android';
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function gh(n = Ie()) {
  return /firefox\//i.test(n);
}
function _h(n = Ie()) {
  const e = n.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function yh(n = Ie()) {
  return /crios\//i.test(n);
}
function Eh(n = Ie()) {
  return /iemobile/i.test(n);
}
function Th(n = Ie()) {
  return /android/i.test(n);
}
function Ih(n = Ie()) {
  return /blackberry/i.test(n);
}
function vh(n = Ie()) {
  return /webos/i.test(n);
}
function Do(n = Ie()) {
  return (
    /iphone|ipad|ipod/i.test(n) || (/macintosh/i.test(n) && /mobile/i.test(n))
  );
}
function iy(n = Ie()) {
  var e;
  return Do(n) && !!((e = window.navigator) != null && e.standalone);
}
function oy() {
  return Xd() && document.documentMode === 10;
}
function wh(n = Ie()) {
  return Do(n) || Th(n) || vh(n) || Ih(n) || /windows phone/i.test(n) || Eh(n);
}
/**
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
 */ function Ah(n, e = []) {
  let t;
  switch (n) {
    case 'Browser':
      t = nu(Ie());
      break;
    case 'Worker':
      t = `${nu(Ie())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${t}/JsCore/${gn}/${r}`;
}
/**
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
 */ class ay {
  constructor(e) {
    ((this.auth = e), (this.queue = []));
  }
  pushCallback(e, t) {
    const r = (o) =>
      new Promise((a, u) => {
        try {
          const h = e(o);
          a(h);
        } catch (h) {
          u(h);
        }
      });
    ((r.onAbort = t), this.queue.push(r));
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const t = [];
    try {
      for (const r of this.queue) (await r(e), r.onAbort && t.push(r.onAbort));
    } catch (r) {
      t.reverse();
      for (const s of t)
        try {
          s();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
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
 */ async function cy(n, e = {}) {
  return St(n, 'GET', '/v2/passwordPolicy', Rt(n, e));
}
/**
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
 */ const uy = 6;
class ly {
  constructor(e) {
    var r;
    const t = e.customStrengthOptions;
    ((this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        t.minPasswordLength ?? uy),
      t.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength),
      t.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          t.containsLowercaseCharacter),
      t.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          t.containsUppercaseCharacter),
      t.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          t.containsNumericCharacter),
      t.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          t.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        ((r = e.allowedNonAlphanumericCharacters) == null
          ? void 0
          : r.join('')) ?? ''),
      (this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1),
      (this.schemaVersion = e.schemaVersion));
  }
  validatePassword(e) {
    const t = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, t),
      this.validatePasswordCharacterOptions(e, t),
      t.isValid && (t.isValid = t.meetsMinPasswordLength ?? !0),
      t.isValid && (t.isValid = t.meetsMaxPasswordLength ?? !0),
      t.isValid && (t.isValid = t.containsLowercaseLetter ?? !0),
      t.isValid && (t.isValid = t.containsUppercaseLetter ?? !0),
      t.isValid && (t.isValid = t.containsNumericCharacter ?? !0),
      t.isValid && (t.isValid = t.containsNonAlphanumericCharacter ?? !0),
      t
    );
  }
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength,
      s = this.customStrengthOptions.maxPasswordLength;
    (r && (t.meetsMinPasswordLength = e.length >= r),
      s && (t.meetsMaxPasswordLength = e.length <= s));
  }
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
    let r;
    for (let s = 0; s < e.length; s++)
      ((r = e.charAt(s)),
        this.updatePasswordCharacterOptionsStatuses(
          t,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r)
        ));
  }
  updatePasswordCharacterOptionsStatuses(e, t, r, s, o) {
    (this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = s)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = o)));
  }
}
/**
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
 */ class hy {
  constructor(e, t, r, s) {
    ((this.app = e),
      (this.heartbeatServiceProvider = t),
      (this.appCheckServiceProvider = r),
      (this.config = s),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new ru(this)),
      (this.idTokenSubscription = new ru(this)),
      (this.beforeStateQueue = new ay(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = uh),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = s.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (o) => (this._resolvePersistenceManagerAvailable = o)
      )));
  }
  _initializeWithPersistence(e, t) {
    return (
      t && (this._popupRedirectResolver = Je(t)),
      (this._initializationPromise = this.queue(async () => {
        var r, s, o;
        if (
          !this._deleted &&
          ((this.persistenceManager = await on.create(this, e)),
          (r = this._resolvePersistenceManagerAvailable) == null ||
            r.call(this),
          !this._deleted)
        ) {
          if (
            (s = this._popupRedirectResolver) != null &&
            s._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          (await this.initializeCurrentUser(t),
            (this.lastNotifiedUid =
              ((o = this.currentUser) == null ? void 0 : o.uid) || null),
            !this._deleted && (this._isInitialized = !0));
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        (this._currentUser._assign(e), await this.currentUser.getIdToken());
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await gs(this, { idToken: e }),
        r = await Oe._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      (console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        t
      ),
        await this.directlySetCurrentUser(null));
    }
  }
  async initializeCurrentUser(e) {
    var o;
    if (be(this.app)) {
      const a = this.app.settings.authIdToken;
      return a
        ? new Promise((u) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(a).then(u, u)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const t = await this.assertedPersistence.getCurrentUser();
    let r = t,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a = (o = this.redirectUser) == null ? void 0 : o._redirectEventId,
        u = r == null ? void 0 : r._redirectEventId,
        h = await this.tryRedirectSignIn(e);
      (!a || a === u) && h != null && h.user && ((r = h.user), (s = !0));
    }
    if (!r) return this.directlySetCurrentUser(null);
    if (!r._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(r);
        } catch (a) {
          ((r = t),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(a)
            ));
        }
      return r
        ? this.reloadAndSetCurrentUserOrClear(r)
        : this.directlySetCurrentUser(null);
    }
    return (
      L(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === r._redirectEventId
        ? this.directlySetCurrentUser(r)
        : this.reloadAndSetCurrentUserOrClear(r)
    );
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await _s(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = $_();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (be(this.app)) return Promise.reject(Xe(this));
    const t = e ? Re(e) : null;
    return (
      t &&
        L(
          t.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token'
        ),
      this._updateCurrentUser(t && t._clone(this))
    );
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return (
        e && L(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        t || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          (await this.directlySetCurrentUser(e), this.notifyAuthListeners());
        })
      );
  }
  async signOut() {
    return be(this.app)
      ? Promise.reject(Xe(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return be(this.app)
      ? Promise.reject(Xe(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(Je(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {}
          )
        )
      : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await cy(this),
      t = new ly(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = t)
      : (this._tenantPasswordPolicies[this.tenantId] = t);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new or('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          (r(), e());
        }, t);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: t,
        };
      (this.tenantId != null && (r.tenantId = this.tenantId),
        await sy(this, r));
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) == null ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = (e && Je(e)) || this._popupRedirectResolver;
      (L(t, this, 'argument-error'),
        (this.redirectPersistenceManager = await on.create(
          this,
          [Je(t._redirectPersistence)],
          'redirectUser'
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser()));
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((t = this._currentUser) == null ? void 0 : t._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) == null ? void 0 : r._redirectEventId) === e
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh());
  }
  _stopProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh());
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const e = ((t = this.currentUser) == null ? void 0 : t.uid) ?? null;
    this.lastNotifiedUid !== e &&
      ((this.lastNotifiedUid = e),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, s) {
    if (this._deleted) return () => {};
    const o = typeof t == 'function' ? t : t.next.bind(t);
    let a = !1;
    const u = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (L(u, this, 'internal-error'),
      u.then(() => {
        a || o(this.currentUser);
      }),
      typeof t == 'function')
    ) {
      const h = e.addObserver(t, r, s);
      return () => {
        ((a = !0), h());
      };
    } else {
      const h = e.addObserver(t);
      return () => {
        ((a = !0), h());
      };
    }
  }
  async directlySetCurrentUser(e) {
    (this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser());
  }
  queue(e) {
    return ((this.operations = this.operations.then(e, e)), this.operations);
  }
  get assertedPersistence() {
    return (
      L(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = Ah(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var s;
    const e = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (e['X-Firebase-gmpid'] = this.app.options.appId);
    const t = await ((s = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) == null
      ? void 0
      : s.getHeartbeatsHeader());
    t && (e['X-Firebase-Client'] = t);
    const r = await this._getAppCheckToken();
    return (r && (e['X-Firebase-AppCheck'] = r), e);
  }
  async _getAppCheckToken() {
    var t;
    if (be(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) == null
      ? void 0
      : t.getToken());
    return (
      e != null &&
        e.error &&
        B_(`Error while retrieving App Check token: ${e.error}`),
      e == null ? void 0 : e.token
    );
  }
}
function zt(n) {
  return Re(n);
}
class ru {
  constructor(e) {
    ((this.auth = e),
      (this.observer = null),
      (this.addObserver = af((t) => (this.observer = t))));
  }
  get next() {
    return (
      L(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
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
 */ let Ls = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function dy(n) {
  Ls = n;
}
function Rh(n) {
  return Ls.loadJS(n);
}
function fy() {
  return Ls.recaptchaEnterpriseScript;
}
function py() {
  return Ls.gapiScript;
}
function my(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
class gy {
  constructor() {
    this.enterprise = new _y();
  }
  ready(e) {
    e();
  }
  execute(e, t) {
    return Promise.resolve('token');
  }
  render(e, t) {
    return '';
  }
}
class _y {
  ready(e) {
    e();
  }
  execute(e, t) {
    return Promise.resolve('token');
  }
  render(e, t) {
    return '';
  }
}
const yy = 'recaptcha-enterprise',
  Sh = 'NO_RECAPTCHA';
class Ey {
  constructor(e) {
    ((this.type = yy), (this.auth = zt(e)));
  }
  async verify(e = 'verify', t = !1) {
    async function r(o) {
      if (!t) {
        if (o.tenantId == null && o._agentRecaptchaConfig != null)
          return o._agentRecaptchaConfig.siteKey;
        if (
          o.tenantId != null &&
          o._tenantRecaptchaConfigs[o.tenantId] !== void 0
        )
          return o._tenantRecaptchaConfigs[o.tenantId].siteKey;
      }
      return new Promise(async (a, u) => {
        J_(o, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then((h) => {
            if (h.recaptchaKey === void 0)
              u(new Error('recaptcha Enterprise site key undefined'));
            else {
              const d = new Q_(h);
              return (
                o.tenantId == null
                  ? (o._agentRecaptchaConfig = d)
                  : (o._tenantRecaptchaConfigs[o.tenantId] = d),
                a(d.siteKey)
              );
            }
          })
          .catch((h) => {
            u(h);
          });
      });
    }
    function s(o, a, u) {
      const h = window.grecaptcha;
      Xc(h)
        ? h.enterprise.ready(() => {
            h.enterprise
              .execute(o, { action: e })
              .then((d) => {
                a(d);
              })
              .catch(() => {
                a(Sh);
              });
          })
        : u(Error('No reCAPTCHA enterprise script loaded.'));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new gy().execute('siteKey', { action: 'verify' })
      : new Promise((o, a) => {
          r(this.auth)
            .then((u) => {
              if (!t && Xc(window.grecaptcha)) s(u, o, a);
              else {
                if (typeof window > 'u') {
                  a(
                    new Error('RecaptchaVerifier is only supported in browser')
                  );
                  return;
                }
                let h = fy();
                (h.length !== 0 && (h += u),
                  Rh(h)
                    .then(() => {
                      s(u, o, a);
                    })
                    .catch((d) => {
                      a(d);
                    }));
              }
            })
            .catch((u) => {
              a(u);
            });
        });
  }
}
async function su(n, e, t, r = !1, s = !1) {
  const o = new Ey(n);
  let a;
  if (s) a = Sh;
  else
    try {
      a = await o.verify(t);
    } catch {
      a = await o.verify(t, !0);
    }
  const u = { ...e };
  if (t === 'mfaSmsEnrollment' || t === 'mfaSmsSignIn') {
    if ('phoneEnrollmentInfo' in u) {
      const h = u.phoneEnrollmentInfo.phoneNumber,
        d = u.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(u, {
        phoneEnrollmentInfo: {
          phoneNumber: h,
          recaptchaToken: d,
          captchaResponse: a,
          clientType: 'CLIENT_TYPE_WEB',
          recaptchaVersion: 'RECAPTCHA_ENTERPRISE',
        },
      });
    } else if ('phoneSignInInfo' in u) {
      const h = u.phoneSignInInfo.recaptchaToken;
      Object.assign(u, {
        phoneSignInInfo: {
          recaptchaToken: h,
          captchaResponse: a,
          clientType: 'CLIENT_TYPE_WEB',
          recaptchaVersion: 'RECAPTCHA_ENTERPRISE',
        },
      });
    }
    return u;
  }
  return (
    r
      ? Object.assign(u, { captchaResp: a })
      : Object.assign(u, { captchaResponse: a }),
    Object.assign(u, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(u, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    u
  );
}
async function Gi(n, e, t, r, s) {
  var o;
  if (
    (o = n._getRecaptchaConfig()) != null &&
    o.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const a = await su(n, e, t, t === 'getOobCode');
    return r(n, a);
  } else
    return r(n, e).catch(async (a) => {
      if (a.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const u = await su(n, e, t, t === 'getOobCode');
        return r(n, u);
      } else return Promise.reject(a);
    });
}
/**
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
 */ function Ty(n, e) {
  const t = Yi(n, 'auth');
  if (t.isInitialized()) {
    const s = t.getImmediate(),
      o = t.getOptions();
    if (Ot(o, e ?? {})) return s;
    Le(s, 'already-initialized');
  }
  return t.initialize({ options: e });
}
function Iy(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(t) ? t : [t]).map(Je);
  (e != null && e.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    ));
}
function vy(n, e, t) {
  const r = zt(n);
  L(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const s = !1,
    o = Ph(e),
    { host: a, port: u } = wy(e),
    h = u === null ? '' : `:${u}`,
    d = { url: `${o}//${a}${h}/` },
    p = Object.freeze({
      host: a,
      port: u,
      protocol: o.replace(':', ''),
      options: Object.freeze({ disableWarnings: s }),
    });
  if (!r._canInitEmulator) {
    (L(r.config.emulator && r.emulatorConfig, r, 'emulator-config-failed'),
      L(
        Ot(d, r.config.emulator) && Ot(p, r.emulatorConfig),
        r,
        'emulator-config-failed'
      ));
    return;
  }
  ((r.config.emulator = d),
    (r.emulatorConfig = p),
    (r.settings.appVerificationDisabledForTesting = !0),
    mn(a) ? (Au(`${o}//${a}${h}`), Ru('Auth', !0)) : Ay());
}
function Ph(n) {
  const e = n.indexOf(':');
  return e < 0 ? '' : n.substr(0, e + 1);
}
function wy(n) {
  const e = Ph(n),
    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t) return { host: '', port: null };
  const r = t[2].split('@').pop() || '',
    s = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (s) {
    const o = s[1];
    return { host: o, port: iu(r.substr(o.length + 1)) };
  } else {
    const [o, a] = r.split(':');
    return { host: o, port: iu(a) };
  }
}
function iu(n) {
  if (!n) return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Ay() {
  function n() {
    const e = document.createElement('p'),
      t = e.style;
    ((e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (t.position = 'fixed'),
      (t.width = '100%'),
      (t.backgroundColor = '#ffffff'),
      (t.border = '.1em solid #000000'),
      (t.color = '#b50000'),
      (t.bottom = '0px'),
      (t.left = '0px'),
      (t.margin = '0px'),
      (t.zIndex = '10000'),
      (t.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e));
  }
  (typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', n)
        : n()));
}
/**
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
 */ class Oo {
  constructor(e, t) {
    ((this.providerId = e), (this.signInMethod = t));
  }
  toJSON() {
    return Qe('not implemented');
  }
  _getIdTokenResponse(e) {
    return Qe('not implemented');
  }
  _linkToIdToken(e, t) {
    return Qe('not implemented');
  }
  _getReauthenticationResolver(e) {
    return Qe('not implemented');
  }
}
async function Ry(n, e) {
  return St(n, 'POST', '/v1/accounts:signUp', e);
}
/**
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
 */ async function Sy(n, e) {
  return mr(n, 'POST', '/v1/accounts:signInWithPassword', Rt(n, e));
}
/**
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
 */ async function Py(n, e) {
  return mr(n, 'POST', '/v1/accounts:signInWithEmailLink', Rt(n, e));
}
async function Cy(n, e) {
  return mr(n, 'POST', '/v1/accounts:signInWithEmailLink', Rt(n, e));
}
/**
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
 */ class ir extends Oo {
  constructor(e, t, r, s = null) {
    (super('password', r),
      (this._email = e),
      (this._password = t),
      (this._tenantId = s));
  }
  static _fromEmailAndPassword(e, t) {
    return new ir(e, t, 'password');
  }
  static _fromEmailAndCode(e, t, r = null) {
    return new ir(e, t, 'emailLink', r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e;
    if (t != null && t.email && t != null && t.password) {
      if (t.signInMethod === 'password')
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === 'emailLink')
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return Gi(e, t, 'signInWithPassword', Sy);
      case 'emailLink':
        return Py(e, { email: this._email, oobCode: this._password });
      default:
        Le(e, 'internal-error');
    }
  }
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case 'password':
        const r = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return Gi(e, r, 'signUpPassword', Ry);
      case 'emailLink':
        return Cy(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Le(e, 'internal-error');
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
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
 */ async function an(n, e) {
  return mr(n, 'POST', '/v1/accounts:signInWithIdp', Rt(n, e));
}
/**
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
 */ const by = 'http://localhost';
class Ut extends Oo {
  constructor() {
    (super(...arguments), (this.pendingToken = null));
  }
  static _fromParams(e) {
    const t = new Ut(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (t.idToken = e.idToken),
          e.accessToken && (t.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (t.nonce = e.nonce),
          e.pendingToken && (t.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : Le('argument-error'),
      t
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: s, ...o } = t;
    if (!r || !s) return null;
    const a = new Ut(r, s);
    return (
      (a.idToken = o.idToken || void 0),
      (a.accessToken = o.accessToken || void 0),
      (a.secret = o.secret),
      (a.nonce = o.nonce),
      (a.pendingToken = o.pendingToken || null),
      a
    );
  }
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return an(e, t);
  }
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return ((r.idToken = t), an(e, r));
  }
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return ((t.autoCreate = !1), an(e, t));
  }
  buildRequest() {
    const e = { requestUri: by, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const t = {};
      (this.idToken && (t.id_token = this.idToken),
        this.accessToken && (t.access_token = this.accessToken),
        this.secret && (t.oauth_token_secret = this.secret),
        (t.providerId = this.providerId),
        this.nonce && !this.pendingToken && (t.nonce = this.nonce),
        (e.postBody = ar(t)));
    }
    return e;
  }
}
/**
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
 */ function ky(n) {
  switch (n) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function Vy(n) {
  const e = Bn(qn(n)).link,
    t = e ? Bn(qn(e)).deep_link_id : null,
    r = Bn(qn(n)).deep_link_id;
  return (r ? Bn(qn(r)).link : null) || r || t || e || n;
}
class Mo {
  constructor(e) {
    const t = Bn(qn(e)),
      r = t.apiKey ?? null,
      s = t.oobCode ?? null,
      o = ky(t.mode ?? null);
    (L(r && s && o, 'argument-error'),
      (this.apiKey = r),
      (this.operation = o),
      (this.code = s),
      (this.continueUrl = t.continueUrl ?? null),
      (this.languageCode = t.lang ?? null),
      (this.tenantId = t.tenantId ?? null));
  }
  static parseLink(e) {
    const t = Vy(e);
    try {
      return new Mo(t);
    } catch {
      return null;
    }
  }
}
/**
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
 */ class vn {
  constructor() {
    this.providerId = vn.PROVIDER_ID;
  }
  static credential(e, t) {
    return ir._fromEmailAndPassword(e, t);
  }
  static credentialWithLink(e, t) {
    const r = Mo.parseLink(t);
    return (
      L(r, 'argument-error'),
      ir._fromEmailAndCode(e, r.code, r.tenantId)
    );
  }
}
vn.PROVIDER_ID = 'password';
vn.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
vn.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
/**
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
 */ class Ch {
  constructor(e) {
    ((this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {}));
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return ((this.customParameters = e), this);
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
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
 */ class gr extends Ch {
  constructor() {
    (super(...arguments), (this.scopes = []));
  }
  addScope(e) {
    return (this.scopes.includes(e) || this.scopes.push(e), this);
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
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
 */ class ut extends gr {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return Ut._fromParams({
      providerId: ut.PROVIDER_ID,
      signInMethod: ut.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return ut.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return ut.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return ut.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
ut.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
ut.PROVIDER_ID = 'facebook.com';
/**
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
 */ class Ke extends gr {
  constructor() {
    (super('google.com'), this.addScope('profile'));
  }
  static credential(e, t) {
    return Ut._fromParams({
      providerId: Ke.PROVIDER_ID,
      signInMethod: Ke.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t,
    });
  }
  static credentialFromResult(e) {
    return Ke.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Ke.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r) return null;
    try {
      return Ke.credential(t, r);
    } catch {
      return null;
    }
  }
}
Ke.GOOGLE_SIGN_IN_METHOD = 'google.com';
Ke.PROVIDER_ID = 'google.com';
/**
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
 */ class lt extends gr {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return Ut._fromParams({
      providerId: lt.PROVIDER_ID,
      signInMethod: lt.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return lt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return lt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return lt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
lt.GITHUB_SIGN_IN_METHOD = 'github.com';
lt.PROVIDER_ID = 'github.com';
/**
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
 */ class ht extends gr {
  constructor() {
    super('twitter.com');
  }
  static credential(e, t) {
    return Ut._fromParams({
      providerId: ht.PROVIDER_ID,
      signInMethod: ht.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t,
    });
  }
  static credentialFromResult(e) {
    return ht.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return ht.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r) return null;
    try {
      return ht.credential(t, r);
    } catch {
      return null;
    }
  }
}
ht.TWITTER_SIGN_IN_METHOD = 'twitter.com';
ht.PROVIDER_ID = 'twitter.com';
/**
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
 */ async function Ny(n, e) {
  return mr(n, 'POST', '/v1/accounts:signUp', Rt(n, e));
}
/**
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
 */ class Ft {
  constructor(e) {
    ((this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType));
  }
  static async _fromIdTokenResponse(e, t, r, s = !1) {
    const o = await Oe._fromIdTokenResponse(e, r, s),
      a = ou(r);
    return new Ft({
      user: o,
      providerId: a,
      _tokenResponse: r,
      operationType: t,
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(r, !0);
    const s = ou(r);
    return new Ft({
      user: e,
      providerId: s,
      _tokenResponse: r,
      operationType: t,
    });
  }
}
function ou(n) {
  return n.providerId ? n.providerId : 'phoneNumber' in n ? 'phone' : null;
}
/**
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
 */ class ys extends rt {
  constructor(e, t, r, s) {
    (super(t.code, t.message),
      (this.operationType = r),
      (this.user = s),
      Object.setPrototypeOf(this, ys.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: e.tenantId ?? void 0,
        _serverResponse: t.customData._serverResponse,
        operationType: r,
      }));
  }
  static _fromErrorAndOperation(e, t, r, s) {
    return new ys(e, t, r, s);
  }
}
function bh(n, e, t, r) {
  return (
    e === 'reauthenticate'
      ? t._getReauthenticationResolver(n)
      : t._getIdTokenResponse(n)
  ).catch((o) => {
    throw o.code === 'auth/multi-factor-auth-required'
      ? ys._fromErrorAndOperation(n, o, e, r)
      : o;
  });
}
async function Dy(n, e, t = !1) {
  const r = await sr(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return Ft._forOperation(n, 'link', r);
}
/**
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
 */ async function Oy(n, e, t = !1) {
  const { auth: r } = n;
  if (be(r.app)) return Promise.reject(Xe(r));
  const s = 'reauthenticate';
  try {
    const o = await sr(n, bh(r, s, e, n), t);
    L(o.idToken, r, 'internal-error');
    const a = No(o.idToken);
    L(a, r, 'internal-error');
    const { sub: u } = a;
    return (L(n.uid === u, r, 'user-mismatch'), Ft._forOperation(n, s, o));
  } catch (o) {
    throw (
      (o == null ? void 0 : o.code) === 'auth/user-not-found' &&
        Le(r, 'user-mismatch'),
      o
    );
  }
}
/**
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
 */ async function kh(n, e, t = !1) {
  if (be(n.app)) return Promise.reject(Xe(n));
  const r = 'signIn',
    s = await bh(n, r, e),
    o = await Ft._fromIdTokenResponse(n, r, s);
  return (t || (await n._updateCurrentUser(o.user)), o);
}
async function My(n, e) {
  return kh(zt(n), e);
}
/**
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
 */ async function Vh(n) {
  const e = zt(n);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function Ly(n, e, t) {
  if (be(n.app)) return Promise.reject(Xe(n));
  const r = zt(n),
    a = await Gi(
      r,
      {
        returnSecureToken: !0,
        email: e,
        password: t,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      Ny
    ).catch((h) => {
      throw (h.code === 'auth/password-does-not-meet-requirements' && Vh(n), h);
    }),
    u = await Ft._fromIdTokenResponse(r, 'signIn', a);
  return (await r._updateCurrentUser(u.user), u);
}
function xy(n, e, t) {
  return be(n.app)
    ? Promise.reject(Xe(n))
    : My(Re(n), vn.credential(e, t)).catch(async (r) => {
        throw (
          r.code === 'auth/password-does-not-meet-requirements' && Vh(n),
          r
        );
      });
}
function Uy(n, e, t, r) {
  return Re(n).onIdTokenChanged(e, t, r);
}
function Fy(n, e, t) {
  return Re(n).beforeAuthStateChanged(e, t);
}
function By(n, e, t, r) {
  return Re(n).onAuthStateChanged(e, t, r);
}
function qy(n) {
  return Re(n).signOut();
}
const Es = '__sak';
/**
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
 */ class Nh {
  constructor(e, t) {
    ((this.storageRetriever = e), (this.type = t));
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Es, '1'),
          this.storage.removeItem(Es),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return (this.storage.setItem(e, JSON.stringify(t)), Promise.resolve());
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return (this.storage.removeItem(e), Promise.resolve());
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
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
 */ const jy = 1e3,
  $y = 10;
class Dh extends Nh {
  constructor() {
    (super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = wh()),
      (this._shouldAllowMigration = !0));
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t),
        s = this.localCache[t];
      r !== s && e(t, s, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((a, u, h) => {
        this.notifyListeners(a, h);
      });
      return;
    }
    const r = e.key;
    t ? this.detachListener() : this.stopPolling();
    const s = () => {
        const a = this.storage.getItem(r);
        (!t && this.localCache[r] === a) || this.notifyListeners(r, a);
      },
      o = this.storage.getItem(r);
    oy() && o !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(s, $y)
      : s();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const s of Array.from(r)) s(t && JSON.parse(t));
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, t, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: t, newValue: r }),
            !0
          );
        });
      }, jy)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(e, t) {
    (Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(t));
  }
  _removeListener(e, t) {
    (this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling()));
  }
  async _set(e, t) {
    (await super._set(e, t), (this.localCache[e] = JSON.stringify(t)));
  }
  async _get(e) {
    const t = await super._get(e);
    return ((this.localCache[e] = JSON.stringify(t)), t);
  }
  async _remove(e) {
    (await super._remove(e), delete this.localCache[e]);
  }
}
Dh.type = 'LOCAL';
const zy = Dh;
/**
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
 */ class Oh extends Nh {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
Oh.type = 'SESSION';
const Mh = Oh;
/**
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
 */ function Hy(n) {
  return Promise.all(
    n.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (t) {
        return { fulfilled: !1, reason: t };
      }
    })
  );
}
/**
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
 */ class xs {
  constructor(e) {
    ((this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this)));
  }
  static _getInstance(e) {
    const t = this.receivers.find((s) => s.isListeningto(e));
    if (t) return t;
    const r = new xs(e);
    return (this.receivers.push(r), r);
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const t = e,
      { eventId: r, eventType: s, data: o } = t.data,
      a = this.handlersMap[s];
    if (!(a != null && a.size)) return;
    t.ports[0].postMessage({ status: 'ack', eventId: r, eventType: s });
    const u = Array.from(a).map(async (d) => d(t.origin, o)),
      h = await Hy(u);
    t.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: s,
      response: h,
    });
  }
  _subscribe(e, t) {
    (Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t));
  }
  _unsubscribe(e, t) {
    (this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener(
          'message',
          this.boundEventHandler
        ));
  }
}
xs.receivers = [];
/**
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
 */ function Lo(n = '', e = 10) {
  let t = '';
  for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
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
 */ class Wy {
  constructor(e) {
    ((this.target = e), (this.handlers = new Set()));
  }
  removeMessageHandler(e) {
    (e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e));
  }
  async _send(e, t, r = 50) {
    const s = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!s) throw new Error('connection_unavailable');
    let o, a;
    return new Promise((u, h) => {
      const d = Lo('', 20);
      s.port1.start();
      const p = setTimeout(() => {
        h(new Error('unsupported_event'));
      }, r);
      ((a = {
        messageChannel: s,
        onMessage(y) {
          const v = y;
          if (v.data.eventId === d)
            switch (v.data.status) {
              case 'ack':
                (clearTimeout(p),
                  (o = setTimeout(() => {
                    h(new Error('timeout'));
                  }, 3e3)));
                break;
              case 'done':
                (clearTimeout(o), u(v.data.response));
                break;
              default:
                (clearTimeout(p),
                  clearTimeout(o),
                  h(new Error('invalid_response')));
                break;
            }
        },
      }),
        this.handlers.add(a),
        s.port1.addEventListener('message', a.onMessage),
        this.target.postMessage({ eventType: e, eventId: d, data: t }, [
          s.port2,
        ]));
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
}
/**
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
 */ function $e() {
  return window;
}
function Gy(n) {
  $e().location.href = n;
}
/**
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
 */ function Lh() {
  return (
    typeof $e().WorkerGlobalScope < 'u' &&
    typeof $e().importScripts == 'function'
  );
}
async function Ky() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Qy() {
  var n;
  return (
    ((n = navigator == null ? void 0 : navigator.serviceWorker) == null
      ? void 0
      : n.controller) || null
  );
}
function Jy() {
  return Lh() ? self : null;
}
/**
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
 */ const xh = 'firebaseLocalStorageDb',
  Yy = 1,
  Ts = 'firebaseLocalStorage',
  Uh = 'fbase_key';
class _r {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      (this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          t(this.request.error);
        }));
    });
  }
}
function Us(n, e) {
  return n.transaction([Ts], e ? 'readwrite' : 'readonly').objectStore(Ts);
}
function Xy() {
  const n = indexedDB.deleteDatabase(xh);
  return new _r(n).toPromise();
}
function Ki() {
  const n = indexedDB.open(xh, Yy);
  return new Promise((e, t) => {
    (n.addEventListener('error', () => {
      t(n.error);
    }),
      n.addEventListener('upgradeneeded', () => {
        const r = n.result;
        try {
          r.createObjectStore(Ts, { keyPath: Uh });
        } catch (s) {
          t(s);
        }
      }),
      n.addEventListener('success', async () => {
        const r = n.result;
        r.objectStoreNames.contains(Ts)
          ? e(r)
          : (r.close(), await Xy(), e(await Ki()));
      }));
  });
}
async function au(n, e, t) {
  const r = Us(n, !0).put({ [Uh]: e, value: t });
  return new _r(r).toPromise();
}
async function Zy(n, e) {
  const t = Us(n, !1).get(e),
    r = await new _r(t).toPromise();
  return r === void 0 ? null : r.value;
}
function cu(n, e) {
  const t = Us(n, !0).delete(e);
  return new _r(t).toPromise();
}
const eE = 800,
  tE = 3;
class Fh {
  constructor() {
    ((this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        )));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Ki()), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > tE) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Lh() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    ((this.receiver = xs._getInstance(Jy())),
      this.receiver._subscribe('keyChanged', async (e, t) => ({
        keyProcessed: (await this._poll()).includes(t.key),
      })),
      this.receiver._subscribe('ping', async (e, t) => ['keyChanged']));
  }
  async initializeSender() {
    var t, r;
    if (((this.activeServiceWorker = await Ky()), !this.activeServiceWorker))
      return;
    this.sender = new Wy(this.activeServiceWorker);
    const e = await this.sender._send('ping', {}, 800);
    e &&
      (t = e[0]) != null &&
      t.fulfilled &&
      (r = e[0]) != null &&
      r.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        Qy() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await Ki();
      return (await au(e, Es, '1'), await cu(e, Es), !0);
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => au(r, e, t)),
        (this.localCache[e] = t),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const t = await this._withRetries((r) => Zy(r, e));
    return ((this.localCache[e] = t), t);
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((t) => cu(t, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((s) => {
      const o = Us(s, !1).getAll();
      return new _r(o).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const t = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: s, value: o } of e)
        (r.add(s),
          JSON.stringify(this.localCache[s]) !== JSON.stringify(o) &&
            (this.notifyListeners(s, o), t.push(s)));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] &&
        !r.has(s) &&
        (this.notifyListeners(s, null), t.push(s));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const s of Array.from(r)) s(t);
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), eE)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, t) {
    (Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(t));
  }
  _removeListener(e, t) {
    (this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling());
  }
}
Fh.type = 'LOCAL';
const nE = Fh;
new pr(3e4, 6e4);
/**
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
 */ function rE(n, e) {
  return e
    ? Je(e)
    : (L(n._popupRedirectResolver, n, 'argument-error'),
      n._popupRedirectResolver);
}
/**
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
 */ class xo extends Oo {
  constructor(e) {
    (super('custom', 'custom'), (this.params = e));
  }
  _getIdTokenResponse(e) {
    return an(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return an(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return an(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return (e && (t.idToken = e), t);
  }
}
function sE(n) {
  return kh(n.auth, new xo(n), n.bypassAuthState);
}
function iE(n) {
  const { auth: e, user: t } = n;
  return (L(t, e, 'internal-error'), Oy(t, new xo(n), n.bypassAuthState));
}
async function oE(n) {
  const { auth: e, user: t } = n;
  return (L(t, e, 'internal-error'), Dy(t, new xo(n), n.bypassAuthState));
}
/**
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
 */ class Bh {
  constructor(e, t, r, s, o = !1) {
    ((this.auth = e),
      (this.resolver = r),
      (this.user = s),
      (this.bypassAuthState = o),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(t) ? t : [t]));
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        ((this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this));
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: t,
      sessionId: r,
      postBody: s,
      tenantId: o,
      error: a,
      type: u,
    } = e;
    if (a) {
      this.reject(a);
      return;
    }
    const h = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: o || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(u)(h));
    } catch (d) {
      this.reject(d);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return sE;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return oE;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return iE;
      default:
        Le(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    (nt(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp());
  }
  reject(e) {
    (nt(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp());
  }
  unregisterAndCleanUp() {
    (this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp());
  }
}
/**
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
 */ const aE = new pr(2e3, 1e4);
class Zt extends Bh {
  constructor(e, t, r, s, o) {
    (super(e, t, s, o),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Zt.currentPopupAction && Zt.currentPopupAction.cancel(),
      (Zt.currentPopupAction = this));
  }
  async executeNotNull() {
    const e = await this.execute();
    return (L(e, this.auth, 'internal-error'), e);
  }
  async onExecution() {
    nt(this.filter.length === 1, 'Popup operations only handle one event');
    const e = Lo();
    ((this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((t) => {
        this.reject(t);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
        t || this.reject(je(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation());
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) == null ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(je(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    (this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Zt.currentPopupAction = null));
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (
        (r = (t = this.authWindow) == null ? void 0 : t.window) != null &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          ((this.pollId = null),
            this.reject(je(this.auth, 'popup-closed-by-user')));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, aE.get());
    };
    e();
  }
}
Zt.currentPopupAction = null;
/**
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
 */ const cE = 'pendingRedirect',
  Xr = new Map();
class uE extends Bh {
  constructor(e, t, r = !1) {
    (super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      t,
      void 0,
      r
    ),
      (this.eventId = null));
  }
  async execute() {
    let e = Xr.get(this.auth._key());
    if (!e) {
      try {
        const r = (await lE(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      Xr.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        Xr.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
    if (e.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t) return ((this.user = t), super.onAuthEvent(e));
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function lE(n, e) {
  const t = fE(e),
    r = dE(n);
  if (!(await r._isAvailable())) return !1;
  const s = (await r._get(t)) === 'true';
  return (await r._remove(t), s);
}
function hE(n, e) {
  Xr.set(n._key(), e);
}
function dE(n) {
  return Je(n._redirectPersistence);
}
function fE(n) {
  return Yr(cE, n.config.apiKey, n.name);
}
async function pE(n, e, t = !1) {
  if (be(n.app)) return Promise.reject(Xe(n));
  const r = zt(n),
    s = rE(r, e),
    a = await new uE(r, s, t).execute();
  return (
    a &&
      !t &&
      (delete a.user._redirectEventId,
      await r._persistUserIfCurrent(a.user),
      await r._setRedirectUser(null, e)),
    a
  );
}
/**
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
 */ const mE = 600 * 1e3;
class gE {
  constructor(e) {
    ((this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now()));
  }
  registerConsumer(e) {
    (this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null)));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let t = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((t = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !_E(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        t || ((this.queuedRedirectEvent = e), (t = !0))),
      t
    );
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !qh(e)) {
      const s =
        ((r = e.error.code) == null ? void 0 : r.split('auth/')[1]) ||
        'internal-error';
      t.onError(je(this.auth, s));
    } else t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= mE &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(uu(e))
    );
  }
  saveEventToCache(e) {
    (this.cachedEventUids.add(uu(e)),
      (this.lastProcessedEventTime = Date.now()));
  }
}
function uu(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId]
    .filter((e) => e)
    .join('-');
}
function qh({ type: n, error: e }) {
  return (
    n === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event'
  );
}
function _E(n) {
  switch (n.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return qh(n);
    default:
      return !1;
  }
}
/**
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
 */ async function yE(n, e = {}) {
  return St(n, 'GET', '/v1/projects', e);
}
/**
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
 */ const EE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  TE = /^https?/;
async function IE(n) {
  if (n.config.emulator) return;
  const { authorizedDomains: e } = await yE(n);
  for (const t of e)
    try {
      if (vE(t)) return;
    } catch {}
  Le(n, 'unauthorized-domain');
}
function vE(n) {
  const e = Hi(),
    { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith('chrome-extension://')) {
    const a = new URL(n);
    return a.hostname === '' && r === ''
      ? t === 'chrome-extension:' &&
          n.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : t === 'chrome-extension:' && a.hostname === r;
  }
  if (!TE.test(t)) return !1;
  if (EE.test(n)) return r === n;
  const s = n.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + s + '|' + s + ')$', 'i').test(r);
}
/**
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
 */ const wE = new pr(3e4, 6e4);
function lu() {
  const n = $e().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (
        ((n.H[e].r = n.H[e].r || []),
        (n.H[e].L = n.H[e].L || []),
        (n.H[e].r = [...n.H[e].L]),
        n.CP)
      )
        for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
  }
}
function AE(n) {
  return new Promise((e, t) => {
    var s, o, a;
    function r() {
      (lu(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            (lu(), t(je(n, 'network-request-failed')));
          },
          timeout: wE.get(),
        }));
    }
    if ((o = (s = $e().gapi) == null ? void 0 : s.iframes) != null && o.Iframe)
      e(gapi.iframes.getContext());
    else if ((a = $e().gapi) != null && a.load) r();
    else {
      const u = my('iframefcb');
      return (
        ($e()[u] = () => {
          gapi.load ? r() : t(je(n, 'network-request-failed'));
        }),
        Rh(`${py()}?onload=${u}`).catch((h) => t(h))
      );
    }
  }).catch((e) => {
    throw ((Zr = null), e);
  });
}
let Zr = null;
function RE(n) {
  return ((Zr = Zr || AE(n)), Zr);
}
/**
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
 */ const SE = new pr(5e3, 15e3),
  PE = '__/auth/iframe',
  CE = 'emulator/auth/iframe',
  bE = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  kE = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function VE(n) {
  const e = n.config;
  L(e.authDomain, n, 'auth-domain-config-required');
  const t = e.emulator ? Vo(e, CE) : `https://${n.config.authDomain}/${PE}`,
    r = { apiKey: e.apiKey, appName: n.name, v: gn },
    s = kE.get(n.config.apiHost);
  s && (r.eid = s);
  const o = n._getFrameworks();
  return (o.length && (r.fw = o.join(',')), `${t}?${ar(r).slice(1)}`);
}
async function NE(n) {
  const e = await RE(n),
    t = $e().gapi;
  return (
    L(t, n, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: VE(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: bE,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (s, o) => {
          await r.restyle({ setHideOnLeave: !1 });
          const a = je(n, 'network-request-failed'),
            u = $e().setTimeout(() => {
              o(a);
            }, SE.get());
          function h() {
            ($e().clearTimeout(u), s(r));
          }
          r.ping(h).then(h, () => {
            o(a);
          });
        })
    )
  );
}
/**
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
 */ const DE = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  OE = 500,
  ME = 600,
  LE = '_blank',
  xE = 'http://localhost';
class hu {
  constructor(e) {
    ((this.window = e), (this.associatedEvent = null));
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function UE(n, e, t, r = OE, s = ME) {
  const o = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
    a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let u = '';
  const h = {
      ...DE,
      width: r.toString(),
      height: s.toString(),
      top: o,
      left: a,
    },
    d = Ie().toLowerCase();
  (t && (u = yh(d) ? LE : t), gh(d) && ((e = e || xE), (h.scrollbars = 'yes')));
  const p = Object.entries(h).reduce((v, [C, b]) => `${v}${C}=${b},`, '');
  if (iy(d) && u !== '_self') return (FE(e || '', u), new hu(null));
  const y = window.open(e || '', u, p);
  L(y, n, 'popup-blocked');
  try {
    y.focus();
  } catch {}
  return new hu(y);
}
function FE(n, e) {
  const t = document.createElement('a');
  ((t.href = n), (t.target = e));
  const r = document.createEvent('MouseEvent');
  (r.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    t.dispatchEvent(r));
}
/**
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
 */ const BE = '__/auth/handler',
  qE = 'emulator/auth/handler',
  jE = encodeURIComponent('fac');
async function du(n, e, t, r, s, o) {
  (L(n.config.authDomain, n, 'auth-domain-config-required'),
    L(n.config.apiKey, n, 'invalid-api-key'));
  const a = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: gn,
    eventId: s,
  };
  if (e instanceof Ch) {
    (e.setDefaultLanguage(n.languageCode),
      (a.providerId = e.providerId || ''),
      of(e.getCustomParameters()) ||
        (a.customParameters = JSON.stringify(e.getCustomParameters())));
    for (const [p, y] of Object.entries({})) a[p] = y;
  }
  if (e instanceof gr) {
    const p = e.getScopes().filter((y) => y !== '');
    p.length > 0 && (a.scopes = p.join(','));
  }
  n.tenantId && (a.tid = n.tenantId);
  const u = a;
  for (const p of Object.keys(u)) u[p] === void 0 && delete u[p];
  const h = await n._getAppCheckToken(),
    d = h ? `#${jE}=${encodeURIComponent(h)}` : '';
  return `${$E(n)}?${ar(u).slice(1)}${d}`;
}
function $E({ config: n }) {
  return n.emulator ? Vo(n, qE) : `https://${n.authDomain}/${BE}`;
}
/**
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
 */ const Ti = 'webStorageSupport';
class zE {
  constructor() {
    ((this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Mh),
      (this._completeRedirectFn = pE),
      (this._overrideRedirectResult = hE));
  }
  async _openPopup(e, t, r, s) {
    var a;
    nt(
      (a = this.eventManagers[e._key()]) == null ? void 0 : a.manager,
      '_initialize() not called before _openPopup()'
    );
    const o = await du(e, t, r, Hi(), s);
    return UE(e, o, Lo());
  }
  async _openRedirect(e, t, r, s) {
    await this._originValidation(e);
    const o = await du(e, t, r, Hi(), s);
    return (Gy(o), new Promise(() => {}));
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: s, promise: o } = this.eventManagers[t];
      return s
        ? Promise.resolve(s)
        : (nt(o, 'If manager is not set, promise should be'), o);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[t] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[t];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const t = await NE(e),
      r = new gE(e);
    return (
      t.register(
        'authEvent',
        (s) => (
          L(s == null ? void 0 : s.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(s.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = t),
      r
    );
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(
      Ti,
      { type: Ti },
      (s) => {
        var a;
        const o = (a = s == null ? void 0 : s[0]) == null ? void 0 : a[Ti];
        (o !== void 0 && t(!!o), Le(e, 'internal-error'));
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const t = e._key();
    return (
      this.originValidationPromises[t] ||
        (this.originValidationPromises[t] = IE(e)),
      this.originValidationPromises[t]
    );
  }
  get _shouldInitProactively() {
    return wh() || _h() || Do();
  }
}
const HE = zE;
var fu = '@firebase/auth',
  pu = '1.11.0';
/**
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
 */ class WE {
  constructor(e) {
    ((this.auth = e), (this.internalListeners = new Map()));
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) == null ? void 0 : e.uid) || null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const t = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    (this.internalListeners.set(e, t), this.updateProactiveRefresh());
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    L(
      this.auth._initializationPromise,
      'dependent-sdk-initialized-before-auth'
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
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
 */ function GE(n) {
  switch (n) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    case 'WebExtension':
      return 'web-extension';
    default:
      return;
  }
}
function KE(n) {
  (cn(
    new Mt(
      'auth',
      (e, { options: t }) => {
        const r = e.getProvider('app').getImmediate(),
          s = e.getProvider('heartbeat'),
          o = e.getProvider('app-check-internal'),
          { apiKey: a, authDomain: u } = r.options;
        L(a && !a.includes(':'), 'invalid-api-key', { appName: r.name });
        const h = {
            apiKey: a,
            authDomain: u,
            clientPlatform: n,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: Ah(n),
          },
          d = new hy(r, s, o, h);
        return (Iy(d, t), d);
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, t, r) => {
        e.getProvider('auth-internal').initialize();
      })
  ),
    cn(
      new Mt(
        'auth-internal',
        (e) => {
          const t = zt(e.getProvider('auth').getImmediate());
          return ((r) => new WE(r))(t);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    mt(fu, pu, GE(n)),
    mt(fu, pu, 'esm2020'));
}
/**
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
 */ const QE = 300,
  JE = wu('authIdTokenMaxAge') || QE;
let mu = null;
const YE = (n) => async (e) => {
  const t = e && (await e.getIdTokenResult()),
    r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > JE) return;
  const s = t == null ? void 0 : t.token;
  mu !== s &&
    ((mu = s),
    await fetch(n, {
      method: s ? 'POST' : 'DELETE',
      headers: s ? { Authorization: `Bearer ${s}` } : {},
    }));
};
function XE(n = bu()) {
  const e = Yi(n, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const t = Ty(n, { popupRedirectResolver: HE, persistence: [nE, zy, Mh] }),
    r = wu('authTokenSyncURL');
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const o = new URL(r, location.origin);
    if (location.origin === o.origin) {
      const a = YE(o.toString());
      (Fy(t, a, () => a(t.currentUser)), Uy(t, (u) => a(u)));
    }
  }
  const s = Iu('auth');
  return (s && vy(t, `http://${s}`), t);
}
function ZE() {
  var n;
  return (
    ((n = document.getElementsByTagName('head')) == null ? void 0 : n[0]) ??
    document
  );
}
dy({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement('script');
      (r.setAttribute('src', n),
        (r.onload = e),
        (r.onerror = (s) => {
          const o = je('internal-error');
          ((o.customData = s), t(o));
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        ZE().appendChild(r));
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
KE('Browser');
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function eT(
  n,
  e,
  t,
  r
) {
  function s(o) {
    return o instanceof t
      ? o
      : new t(function (a) {
          a(o);
        });
  }
  return new (t || (t = Promise))(function (o, a) {
    function u(p) {
      try {
        d(r.next(p));
      } catch (y) {
        a(y);
      }
    }
    function h(p) {
      try {
        d(r.throw(p));
      } catch (y) {
        a(y);
      }
    }
    function d(p) {
      p.done ? o(p.value) : s(p.value).then(u, h);
    }
    d((r = r.apply(n, [])).next());
  });
}
function tT(n, e) {
  var t = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    s,
    o,
    a;
  return (
    (a = { next: u(0), throw: u(1), return: u(2) }),
    typeof Symbol == 'function' &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function u(d) {
    return function (p) {
      return h([d, p]);
    };
  }
  function h(d) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; t; )
      try {
        if (
          ((r = 1),
          s &&
            (o =
              d[0] & 2
                ? s.return
                : d[0]
                  ? s.throw || ((o = s.return) && o.call(s), 0)
                  : s.next) &&
            !(o = o.call(s, d[1])).done)
        )
          return o;
        switch (((s = 0), o && (d = [d[0] & 2, o.value]), d[0])) {
          case 0:
          case 1:
            o = d;
            break;
          case 4:
            return (t.label++, { value: d[1], done: !1 });
          case 5:
            (t.label++, (s = d[1]), (d = [0]));
            continue;
          case 7:
            ((d = t.ops.pop()), t.trys.pop());
            continue;
          default:
            if (
              ((o = t.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!o || (d[1] > o[0] && d[1] < o[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < o[1]) {
              ((t.label = o[1]), (o = d));
              break;
            }
            if (o && t.label < o[2]) {
              ((t.label = o[2]), t.ops.push(d));
              break;
            }
            (o[2] && t.ops.pop(), t.trys.pop());
            continue;
        }
        d = e.call(n, t);
      } catch (p) {
        ((d = [6, p]), (s = 0));
      } finally {
        r = o = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var en =
    function () {
      return (
        (en =
          Object.assign ||
          function (e) {
            for (var t, r = 1, s = arguments.length; r < s; r++) {
              t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        en.apply(this, arguments)
      );
    },
  jh = function (n) {
    return { loading: n == null, value: n };
  },
  nT = function () {
    return function (n, e) {
      switch (e.type) {
        case 'error':
          return en(en({}, n), { error: e.error, loading: !1, value: void 0 });
        case 'reset':
          return jh(e.defaultValue);
        case 'value':
          return en(en({}, n), { error: void 0, loading: !1, value: e.value });
        default:
          return n;
      }
    };
  },
  rT = function (n) {
    var e = n ? n() : void 0,
      t = Ae.useReducer(nT(), jh(e)),
      r = t[0],
      s = t[1],
      o = Ae.useCallback(
        function () {
          var h = n ? n() : void 0;
          s({ type: 'reset', defaultValue: h });
        },
        [n]
      ),
      a = Ae.useCallback(function (h) {
        s({ type: 'error', error: h });
      }, []),
      u = Ae.useCallback(function (h) {
        s({ type: 'value', value: h });
      }, []);
    return Ae.useMemo(
      function () {
        return {
          error: r.error,
          loading: r.loading,
          reset: o,
          setError: a,
          setValue: u,
          value: r.value,
        };
      },
      [r.error, r.loading, o, a, u, r.value]
    );
  },
  mT = function (n, e) {
    var t = rT(function () {
        return n.currentUser;
      }),
      r = t.error,
      s = t.loading,
      o = t.setError,
      a = t.setValue,
      u = t.value;
    return (
      Ae.useEffect(
        function () {
          var h = By(
            n,
            function (d) {
              return eT(void 0, void 0, void 0, function () {
                var p;
                return tT(this, function (y) {
                  switch (y.label) {
                    case 0:
                      return [3, 4];
                    case 1:
                      return (
                        y.trys.push([1, 3, , 4]),
                        [4, e.onUserChanged(d)]
                      );
                    case 2:
                      return (y.sent(), [3, 4]);
                    case 3:
                      return ((p = y.sent()), o(p), [3, 4]);
                    case 4:
                      return (a(d), [2]);
                  }
                });
              });
            },
            o
          );
          return function () {
            h();
          };
        },
        [n]
      ),
      [u, s, r]
    );
  },
  sT = 'firebase',
  iT = '12.2.1';
/**
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
 */ mt(sT, iT, 'app');
const oT = {
    apiKey: 'AIzaSyA0YriaxC_aAKMFqAhChtSTLEhzlFtJVcM',
    authDomain: 'rest-client-app-29c25.firebaseapp.com',
    projectId: 'rest-client-app-29c25',
    storageBucket: 'rest-client-app-29c25.firebasestorage.app',
    messagingSenderId: '233485874411',
    appId: '1:233485874411:web:b3770d824f82e2325cbaae',
    measurementId: 'G-9XHJDC2W06',
  },
  $h = Cu(oT),
  Uo = XE($h),
  aT = T_($h);
new Ke();
const gT = async (n, e) => {
    try {
      await xy(Uo, n, e);
    } catch (t) {
      const r = t;
      (console.error(r), alert(r.message));
    }
  },
  _T = async ({ username: n, email: e, password: t }) => {
    try {
      const s = (await Ly(Uo, e, t)).user;
      await x_(y_(aT, 'users'), {
        uid: s.uid,
        username: n,
        authProvider: ' local ',
        email: e,
      });
    } catch (r) {
      const s = r;
      (console.error(s), alert(s.message));
    }
  },
  yT = () => {
    qy(Uo);
  };
export {
  mT as a,
  Uo as b,
  y_ as c,
  aT as d,
  gT as e,
  pT as g,
  yT as l,
  dT as q,
  _T as r,
  lT as u,
  fT as w,
};
