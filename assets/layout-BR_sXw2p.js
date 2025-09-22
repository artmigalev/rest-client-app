import {
  w as n,
  u as m,
  r as c,
  j as t,
  N as r,
} from './chunk-PVWAREVJ-CRWIe_p6.js';
import p from './Login-C3sitPjD.js';
import l from './Registered-BdIYBFqr.js';
import { u } from './hooks-CiLZUmm3.js';
import { s as x } from './i18nInstance-CYZvC-rk.js';
import { u as g } from './firebase-Bbo0FmhX.js';
import './index.esm-ouDacLO7.js';
import './index.esm-qcliokgG.js';
/* empty css              */ import './react-redux-BgHxNhCb.js';
const h = () => {
    const a = m(),
      s = u(x),
      { t: o, i18n: i } = g('header');
    return (
      c.useEffect(() => {
        i.changeLanguage(s);
      }, [s]),
      t.jsxs('div', {
        className: 'z-99 w-[350px] h-[80%] m-auto  pt-1 auth text-[2rem] ',
        children: [
          t.jsxs('div', {
            className: 'border-b text-center',
            children: [
              t.jsxs(r, {
                to: '/login',
                className: ({ isActive: e }) =>
                  e ? 'text-blue-800' : 'text-white',
                children: [o('login'), ' '],
              }),
              '/',
              t.jsxs(r, {
                to: '/register',
                className: ({ isActive: e }) =>
                  e ? 'text-blue-800' : 'text-white',
                children: [' ', o('register')],
              }),
            ],
          }),
          a.pathname === '/register' ? t.jsx(l, {}) : t.jsx(p, {}),
        ],
      })
    );
  },
  R = n(h);
export { R as default };
