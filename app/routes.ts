import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
  route('', './routes/home.tsx', [
    layout('./auth/layout.tsx', [
      route('login', './auth/Login.tsx'),
      route('register', './auth/Registered.tsx'),
    ]),
    layout('./components/Rest-Client/Layout.tsx', [
      route('rest-client', './components/Rest-Client/Client.tsx'),
      // route('history', './routes/History.tsx'),
    ]),
  ]),
  // index('./components/Rest-Client/Client.tsx')
] satisfies RouteConfig;
