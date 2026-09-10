// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://xn--diseopaginas-dhb.cl',
  base: '/diseno-web-automotoras',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
