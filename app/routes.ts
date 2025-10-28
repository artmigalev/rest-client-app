import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

const routes = [
  layout('routes/Index.tsx', [
    index('routes/Main.tsx'),
    layout('routes/Auth.tsx', [
      route('sign-in', 'components/auth/SignInComponent.tsx'),
      route('sign-up', 'components/auth/RegisterComponent.tsx'),
    ]),
    layout('./components/ProtectedLayout.tsx', [
      route('rest-client', 'routes/RestfulClient.tsx'),
      route('history', 'routes/History.tsx'),
      route('variables', 'routes/Variables.tsx'),
    ]),
  ]),
  route('not-found', 'routes/NotFound.tsx'),
] satisfies RouteConfig;
export default routes;

export type AppRoutes = typeof routes;
