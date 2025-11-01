import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

const routes = [
  layout('routes/Index.tsx', [

    index('routes/Welcome.tsx'),
    layout('routes/Auth.tsx', [
      route('/sign-in', 'routes/auth/SignInComponent.tsx'),
      route('/sign-up', 'routes/auth/RegisterComponent.tsx'),
      route('/logout', 'routes/auth/LogoutRoute.tsx')
    ]),
    layout('./components/ProtectedLayout.tsx', [
      route('/rest-client', 'routes/RestFullClient.tsx'),
      route('/history', 'routes/History.tsx'),
      route('/variables', 'routes/Variables.tsx'),
    ]),
  ]),
  route('not-found', 'routes/NotFound.tsx')
] satisfies RouteConfig;
export default routes;

export type AppRoutes = typeof routes;
