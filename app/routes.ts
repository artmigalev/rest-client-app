import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
  route('', './routes/home.tsx'),
  layout('./auth/layout.tsx', [
    route('login', './auth/signIn.tsx'),
    route('register', './auth/signOut.tsx'),
  ]),
] satisfies RouteConfig;
