import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
  // index('./routes/home.tsx'),
  route('home', './routes/home.tsx'),
  layout('./auth/layout.tsx', [
    route('login', './auth/login.tsx'),
    route('register', './auth/register.tsx'),
  ]),
] satisfies RouteConfig;
