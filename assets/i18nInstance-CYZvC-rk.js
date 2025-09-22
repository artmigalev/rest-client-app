function _(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ie = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  ae = Ie,
  J = () => Math.random().toString(36).substring(7).split('').join('.'),
  ze = {
    INIT: `@@redux/INIT${J()}`,
    REPLACE: `@@redux/REPLACE${J()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${J()}`,
  },
  L = ze;
function ce(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ge(e, t, r) {
  if (typeof e != 'function') throw new Error(_(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(_(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(_(1));
    return r(ge)(e, t);
  }
  let n = e,
    i = t,
    o = new Map(),
    c = o,
    s = 0,
    f = !1;
  function a() {
    c === o &&
      ((c = new Map()),
      o.forEach((p, g) => {
        c.set(g, p);
      }));
  }
  function u() {
    if (f) throw new Error(_(3));
    return i;
  }
  function l(p) {
    if (typeof p != 'function') throw new Error(_(4));
    if (f) throw new Error(_(5));
    let g = !0;
    a();
    const P = s++;
    return (
      c.set(P, p),
      function () {
        if (g) {
          if (f) throw new Error(_(6));
          ((g = !1), a(), c.delete(P), (o = null));
        }
      }
    );
  }
  function h(p) {
    if (!ce(p)) throw new Error(_(7));
    if (typeof p.type > 'u') throw new Error(_(8));
    if (typeof p.type != 'string') throw new Error(_(17));
    if (f) throw new Error(_(9));
    try {
      ((f = !0), (i = n(i, p)));
    } finally {
      f = !1;
    }
    return (
      (o = c).forEach((P) => {
        P();
      }),
      p
    );
  }
  function E(p) {
    if (typeof p != 'function') throw new Error(_(10));
    ((n = p), h({ type: L.REPLACE }));
  }
  function v() {
    const p = l;
    return {
      subscribe(g) {
        if (typeof g != 'object' || g === null) throw new Error(_(11));
        function P() {
          const d = g;
          d.next && d.next(u());
        }
        return (P(), { unsubscribe: p(P) });
      },
      [ae]() {
        return this;
      },
    };
  }
  return (
    h({ type: L.INIT }),
    { dispatch: h, subscribe: l, getState: u, replaceReducer: E, [ae]: v }
  );
}
function xe(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: L.INIT }) > 'u') throw new Error(_(12));
    if (typeof r(void 0, { type: L.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(_(13));
  });
}
function je(e) {
  const t = Object.keys(e),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const c = t[o];
    typeof e[c] == 'function' && (r[c] = e[c]);
  }
  const n = Object.keys(r);
  let i;
  try {
    xe(r);
  } catch (o) {
    i = o;
  }
  return function (c = {}, s) {
    if (i) throw i;
    let f = !1;
    const a = {};
    for (let u = 0; u < n.length; u++) {
      const l = n[u],
        h = r[l],
        E = c[l],
        v = h(E, s);
      if (typeof v > 'u') throw (s && s.type, new Error(_(14)));
      ((a[l] = v), (f = f || v !== E));
    }
    return ((f = f || n.length !== Object.keys(c).length), f ? a : c);
  };
}
function W(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n))
        );
}
function Fe(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(_(15));
    };
    const c = { getState: i.getState, dispatch: (f, ...a) => o(f, ...a) },
      s = e.map((f) => f(c));
    return ((o = W(...s)(i.dispatch)), { ...i, dispatch: o });
  };
}
function Be(e) {
  return ce(e) && 'type' in e && typeof e.type == 'string';
}
var be = Symbol.for('immer-nothing'),
  le = Symbol.for('immer-draftable'),
  b = Symbol.for('immer-state');
function C(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var N = Object.getPrototypeOf;
function M(e) {
  return !!e && !!e[b];
}
function R(e) {
  var t;
  return e
    ? Ee(e) ||
        Array.isArray(e) ||
        !!e[le] ||
        !!((t = e.constructor) != null && t[le]) ||
        j(e) ||
        G(e)
    : !1;
}
var $e = Object.prototype.constructor.toString();
function Ee(e) {
  if (!e || typeof e != 'object') return !1;
  const t = N(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object
    ? !0
    : typeof r == 'function' && Function.toString.call(r) === $e;
}
function U(e, t) {
  X(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function X(e) {
  const t = e[b];
  return t ? t.type_ : Array.isArray(e) ? 1 : j(e) ? 2 : G(e) ? 3 : 0;
}
function V(e, t) {
  return X(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ce(e, t, r) {
  const n = X(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function Ke(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function j(e) {
  return e instanceof Map;
}
function G(e) {
  return e instanceof Set;
}
function A(e) {
  return e.copy_ || e.base_;
}
function ee(e, t) {
  if (j(e)) return new Map(e);
  if (G(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = Ee(e);
  if (t === !0 || (t === 'class_only' && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[b];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const c = i[o],
        s = n[c];
      (s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (n[c] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[c],
          }));
    }
    return Object.create(N(e), n);
  } else {
    const n = N(e);
    if (n !== null && r) return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function se(e, t = !1) {
  return (
    Q(e) ||
      M(e) ||
      !R(e) ||
      (X(e) > 1 &&
        Object.defineProperties(e, {
          set: { value: B },
          add: { value: B },
          clear: { value: B },
          delete: { value: B },
        }),
      Object.freeze(e),
      t && Object.values(e).forEach((r) => se(r, !0))),
    e
  );
}
function B() {
  C(2);
}
function Q(e) {
  return Object.isFrozen(e);
}
var Le = {};
function k(e) {
  const t = Le[e];
  return (t || C(0, e), t);
}
var z;
function Pe() {
  return z;
}
function We(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function de(e, t) {
  t &&
    (k('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function te(e) {
  (re(e), e.drafts_.forEach(Ue), (e.drafts_ = null));
}
function re(e) {
  e === z && (z = e.parent_);
}
function ye(e) {
  return (z = We(z, e));
}
function Ue(e) {
  const t = e[b];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function pe(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[b].modified_ && (te(t), C(4)),
        R(e) && ((e = q(t, e)), t.parent_ || H(t, e)),
        t.patches_ &&
          k('Patches').generateReplacementPatches_(
            r[b].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = q(t, r, [])),
    te(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== be ? e : void 0
  );
}
function q(e, t, r) {
  if (Q(t)) return t;
  const n = t[b];
  if (!n) return (U(t, (i, o) => he(e, n, t, i, o, r)), t);
  if (n.scope_ !== e) return t;
  if (!n.modified_) return (H(e, n.base_, !0), n.base_);
  if (!n.finalized_) {
    ((n.finalized_ = !0), n.scope_.unfinalizedDrafts_--);
    const i = n.copy_;
    let o = i,
      c = !1;
    (n.type_ === 3 && ((o = new Set(i)), i.clear(), (c = !0)),
      U(o, (s, f) => he(e, n, i, s, f, r, c)),
      H(e, i, !1),
      r &&
        e.patches_ &&
        k('Patches').generatePatches_(n, r, e.patches_, e.inversePatches_));
  }
  return n.copy_;
}
function he(e, t, r, n, i, o, c) {
  if (M(i)) {
    const s =
        o && t && t.type_ !== 3 && !V(t.assigned_, n) ? o.concat(n) : void 0,
      f = q(e, i, s);
    if ((Ce(r, n, f), M(f))) e.canAutoFreeze_ = !1;
    else return;
  } else c && r.add(i);
  if (R(i) && !Q(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    (q(e, i),
      (!t || !t.scope_.parent_) &&
        typeof n != 'symbol' &&
        (j(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) &&
        H(e, i));
  }
}
function H(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && se(t, r);
}
function qe(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : Pe(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = n,
    o = ue;
  r && ((i = [n]), (o = x));
  const { revoke: c, proxy: s } = Proxy.revocable(i, o);
  return ((n.draft_ = s), (n.revoke_ = c), s);
}
var ue = {
    get(e, t) {
      if (t === b) return e;
      const r = A(e);
      if (!V(r, t)) return He(e, r, t);
      const n = r[t];
      return e.finalized_ || !R(n)
        ? n
        : n === Y(e.base_, t)
          ? (Z(e), (e.copy_[t] = ie(n, e)))
          : n;
    },
    has(e, t) {
      return t in A(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(A(e));
    },
    set(e, t, r) {
      const n = Se(A(e), t);
      if (n != null && n.set) return (n.set.call(e.draft_, r), !0);
      if (!e.modified_) {
        const i = Y(A(e), t),
          o = i == null ? void 0 : i[b];
        if (o && o.base_ === r)
          return ((e.copy_[t] = r), (e.assigned_[t] = !1), !0);
        if (Ke(r, i) && (r !== void 0 || V(e.base_, t))) return !0;
        (Z(e), ne(e));
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Y(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Z(e), ne(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = A(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      C(11);
    },
    getPrototypeOf(e) {
      return N(e.base_);
    },
    setPrototypeOf() {
      C(12);
    },
  },
  x = {};
U(ue, (e, t) => {
  x[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
});
x.deleteProperty = function (e, t) {
  return x.set.call(this, e, t, void 0);
};
x.set = function (e, t, r) {
  return ue.set.call(this, e[0], t, r, e[0]);
};
function Y(e, t) {
  const r = e[b];
  return (r ? A(r) : e)[t];
}
function He(e, t, r) {
  var i;
  const n = Se(t, r);
  return n
    ? 'value' in n
      ? n.value
      : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function Se(e, t) {
  if (!(t in e)) return;
  let r = N(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = N(r);
  }
}
function ne(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ne(e.parent_));
}
function Z(e) {
  e.copy_ || (e.copy_ = ee(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Xe = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const o = r;
          r = t;
          const c = this;
          return function (f = o, ...a) {
            return c.produce(f, (u) => r.call(this, u, ...a));
          };
        }
        (typeof r != 'function' && C(6),
          n !== void 0 && typeof n != 'function' && C(7));
        let i;
        if (R(t)) {
          const o = ye(this),
            c = ie(t, void 0);
          let s = !0;
          try {
            ((i = r(c)), (s = !1));
          } finally {
            s ? te(o) : re(o);
          }
          return (de(o, n), pe(i, o));
        } else if (!t || typeof t != 'object') {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === be && (i = void 0),
            this.autoFreeze_ && se(i, !0),
            n)
          ) {
            const o = [],
              c = [];
            (k('Patches').generateReplacementPatches_(t, i, o, c), n(o, c));
          }
          return i;
        } else C(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (c, ...s) => this.produceWithPatches(c, (f) => t(f, ...s));
        let n, i;
        return [
          this.produce(t, r, (c, s) => {
            ((n = c), (i = s));
          }),
          n,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy));
  }
  createDraft(e) {
    (R(e) || C(8), M(e) && (e = Ge(e)));
    const t = ye(this),
      r = ie(e, void 0);
    return ((r[b].isManual_ = !0), re(t), r);
  }
  finishDraft(e, t) {
    const r = e && e[b];
    (!r || !r.isManual_) && C(9);
    const { scope_: n } = r;
    return (de(n, t), pe(void 0, n));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === 'replace') {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = k('Patches').applyPatches_;
    return M(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function ie(e, t) {
  const r = j(e)
    ? k('MapSet').proxyMap_(e, t)
    : G(e)
      ? k('MapSet').proxySet_(e, t)
      : qe(e, t);
  return ((t ? t.scope_ : Pe()).drafts_.push(r), r);
}
function Ge(e) {
  return (M(e) || C(10, e), Oe(e));
}
function Oe(e) {
  if (!R(e) || Q(e)) return e;
  const t = e[b];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0), (r = ee(e, t.scope_.immer_.useStrictShallowCopy_)));
  } else r = ee(e, !0);
  return (
    U(r, (n, i) => {
      Ce(r, n, Oe(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var Qe = new Xe(),
  Re = Qe.produce;
function ve(e) {
  return ({ dispatch: r, getState: n }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(r, n, e) : i(o);
}
var Je = ve(),
  Ye = ve,
  Ze =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? W
              : W.apply(null, arguments);
        };
function _e(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(O(0));
      return {
        type: e,
        payload: i.payload,
        ...('meta' in i && { meta: i.meta }),
        ...('error' in i && { error: i.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => Be(n) && n.type === e),
    r
  );
}
var Te = class I extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, I.prototype));
  }
  static get [Symbol.species]() {
    return I;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new I(...t[0].concat(this))
      : new I(...t.concat(this));
  }
};
function we(e) {
  return R(e) ? Re(e, () => {}) : e;
}
function $(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Ve(e) {
  return typeof e == 'boolean';
}
var et = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let c = new Te();
      return (r && (Ve(r) ? c.push(Je) : c.push(Ye(r.extraArgument))), c);
    },
  tt = 'RTK_autoBatch',
  me = (e) => (t) => {
    setTimeout(t, e);
  },
  rt =
    (e = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let i = !0,
        o = !1,
        c = !1;
      const s = new Set(),
        f =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : me(10)
              : e.type === 'callback'
                ? e.queueNotification
                : me(e.timeout),
        a = () => {
          ((c = !1), o && ((o = !1), s.forEach((u) => u())));
        };
      return Object.assign({}, n, {
        subscribe(u) {
          const l = () => i && u(),
            h = n.subscribe(l);
          return (
            s.add(u),
            () => {
              (h(), s.delete(u));
            }
          );
        },
        dispatch(u) {
          var l;
          try {
            return (
              (i = !((l = u == null ? void 0 : u.meta) != null && l[tt])),
              (o = !i),
              o && (c || ((c = !0), f(a))),
              n.dispatch(u)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  nt = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let i = new Te(e);
      return (n && i.push(rt(typeof n == 'object' ? n : void 0)), i);
    };
function Et(e) {
  const t = et(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: c = void 0,
    } = e || {};
  let s;
  if (typeof r == 'function') s = r;
  else if (ce(r)) s = je(r);
  else throw new Error(O(1));
  let f;
  typeof n == 'function' ? (f = n(t)) : (f = t());
  let a = W;
  i && (a = Ze({ trace: !1, ...(typeof i == 'object' && i) }));
  const u = Fe(...f),
    l = nt(u);
  let h = typeof c == 'function' ? c(l) : l();
  const E = a(...h);
  return ge(s, o, E);
}
function De(e) {
  const t = {},
    r = [];
  let n;
  const i = {
    addCase(o, c) {
      const s = typeof o == 'string' ? o : o.type;
      if (!s) throw new Error(O(28));
      if (s in t) throw new Error(O(29));
      return ((t[s] = c), i);
    },
    addAsyncThunk(o, c) {
      return (
        c.pending && (t[o.pending.type] = c.pending),
        c.rejected && (t[o.rejected.type] = c.rejected),
        c.fulfilled && (t[o.fulfilled.type] = c.fulfilled),
        c.settled && r.push({ matcher: o.settled, reducer: c.settled }),
        i
      );
    },
    addMatcher(o, c) {
      return (r.push({ matcher: o, reducer: c }), i);
    },
    addDefaultCase(o) {
      return ((n = o), i);
    },
  };
  return (e(i), [t, r, n]);
}
function it(e) {
  return typeof e == 'function';
}
function ot(e, t) {
  let [r, n, i] = De(t),
    o;
  if (it(e)) o = () => we(e());
  else {
    const s = we(e);
    o = () => s;
  }
  function c(s = o(), f) {
    let a = [
      r[f.type],
      ...n.filter(({ matcher: u }) => u(f)).map(({ reducer: u }) => u),
    ];
    return (
      a.filter((u) => !!u).length === 0 && (a = [i]),
      a.reduce((u, l) => {
        if (l)
          if (M(u)) {
            const E = l(u, f);
            return E === void 0 ? u : E;
          } else {
            if (R(u)) return Re(u, (h) => l(h, f));
            {
              const h = l(u, f);
              if (h === void 0) {
                if (u === null) return u;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined'
                );
              }
              return h;
            }
          }
        return u;
      }, s)
    );
  }
  return ((c.getInitialState = o), c);
}
var ct = Symbol.for('rtk-slice-createasyncthunk');
function st(e, t) {
  return `${e}/${t}`;
}
function ut({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[ct];
  return function (i) {
    const { name: o, reducerPath: c = o } = i;
    if (!o) throw new Error(O(11));
    const s =
        (typeof i.reducers == 'function' ? i.reducers(lt()) : i.reducers) || {},
      f = Object.keys(s),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      u = {
        addCase(d, y) {
          const w = typeof d == 'string' ? d : d.type;
          if (!w) throw new Error(O(12));
          if (w in a.sliceCaseReducersByType) throw new Error(O(13));
          return ((a.sliceCaseReducersByType[w] = y), u);
        },
        addMatcher(d, y) {
          return (a.sliceMatchers.push({ matcher: d, reducer: y }), u);
        },
        exposeAction(d, y) {
          return ((a.actionCreators[d] = y), u);
        },
        exposeCaseReducer(d, y) {
          return ((a.sliceCaseReducersByName[d] = y), u);
        },
      };
    f.forEach((d) => {
      const y = s[d],
        w = {
          reducerName: d,
          type: st(o, d),
          createNotation: typeof i.reducers == 'function',
        };
      yt(y) ? ht(w, y, u, t) : dt(w, y, u);
    });
    function l() {
      const [d = {}, y = [], w = void 0] =
          typeof i.extraReducers == 'function'
            ? De(i.extraReducers)
            : [i.extraReducers],
        T = { ...d, ...a.sliceCaseReducersByType };
      return ot(i.initialState, (S) => {
        for (let m in T) S.addCase(m, T[m]);
        for (let m of a.sliceMatchers) S.addMatcher(m.matcher, m.reducer);
        for (let m of y) S.addMatcher(m.matcher, m.reducer);
        w && S.addDefaultCase(w);
      });
    }
    const h = (d) => d,
      E = new Map(),
      v = new WeakMap();
    let D;
    function p(d, y) {
      return (D || (D = l()), D(d, y));
    }
    function g() {
      return (D || (D = l()), D.getInitialState());
    }
    function P(d, y = !1) {
      function w(S) {
        let m = S[d];
        return (typeof m > 'u' && y && (m = $(v, w, g)), m);
      }
      function T(S = h) {
        const m = $(E, y, () => new WeakMap());
        return $(m, S, () => {
          const fe = {};
          for (const [ke, Ne] of Object.entries(i.selectors ?? {}))
            fe[ke] = ft(Ne, S, () => $(v, S, g), y);
          return fe;
        });
      }
      return {
        reducerPath: d,
        getSelectors: T,
        get selectors() {
          return T(w);
        },
        selectSlice: w,
      };
    }
    const F = {
      name: o,
      reducer: p,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: g,
      ...P(c),
      injectInto(d, { reducerPath: y, ...w } = {}) {
        const T = y ?? c;
        return (
          d.inject({ reducerPath: T, reducer: p }, w),
          { ...F, ...P(T, !0) }
        );
      },
    };
    return F;
  };
}
function ft(e, t, r, n) {
  function i(o, ...c) {
    let s = t(o);
    return (typeof s > 'u' && n && (s = r()), e(s, ...c));
  }
  return ((i.unwrapped = e), i);
}
var at = ut();
function lt() {
  function e(t, r) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function dt({ type: e, reducerName: t, createNotation: r }, n, i) {
  let o, c;
  if ('reducer' in n) {
    if (r && !pt(n)) throw new Error(O(17));
    ((o = n.reducer), (c = n.prepare));
  } else o = n;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, c ? _e(e, c) : _e(e));
}
function yt(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function pt(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function ht({ type: e, reducerName: t }, r, n, i) {
  if (!i) throw new Error(O(18));
  const {
      payloadCreator: o,
      fulfilled: c,
      pending: s,
      rejected: f,
      settled: a,
      options: u,
    } = r,
    l = i(e, o, u);
  (n.exposeAction(t, l),
    c && n.addCase(l.fulfilled, c),
    s && n.addCase(l.pending, s),
    f && n.addCase(l.rejected, f),
    a && n.addMatcher(l.settled, a),
    n.exposeCaseReducer(t, {
      fulfilled: c || K,
      pending: s || K,
      rejected: f || K,
      settled: a || K,
    }));
}
function K() {}
function O(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const _t = { lng: 'en' },
  Ae = at({
    name: 'lang',
    initialState: _t,
    reducers: {
      changeByValue: (e, t) => {
        e.lng = t.payload;
      },
    },
  }),
  { changeByValue: Ct } = Ae.actions,
  Pt = (e) => e.lang.lng,
  St = Ae.reducer,
  wt =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  mt = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  gt = (e) => mt[e],
  bt = (e) => e.replace(wt, gt);
let oe = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: bt,
};
const Ot = (e = {}) => {
    oe = { ...oe, ...e };
  },
  Rt = () => oe;
let Me;
const vt = (e) => {
    Me = e;
  },
  Tt = () => Me;
export {
  at as a,
  Et as b,
  Ct as c,
  Ot as d,
  vt as e,
  Rt as f,
  Tt as g,
  St as l,
  Pt as s,
};
