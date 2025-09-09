import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
  route('', './routes/home.tsx', [
    layout('./auth/layout.tsx', [
      route('login', './auth/Login.tsx'),
      route('register', './auth/Registered.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
