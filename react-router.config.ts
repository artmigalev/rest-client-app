import type { Config } from '@react-router/dev/config';
import type { Route } from './.react-router/types/app/+types/root';
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // basename:'/postman-clone',
  ssr: false,
} satisfies Config;
export function meta() {
  return [{ title: 'Postman Clone' }];
}
export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },


];
