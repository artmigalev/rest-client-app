import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
  },
});
// const config = {
//   plugins: [reactRouter()],
// };
// console.log(
//   'Plugins:',
//   config.plugins.map((p) => p.name)
// );
