import type { LinksFunction, MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [{ title: 'Postman Clone' }];
};
export const links: LinksFunction = () => [
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
  {
    rel: 'shortcut icon',
    href: 'public/postman_128px_6C5DF7.svg',
    type: 'image/svg+xml',
  },
];
