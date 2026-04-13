// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ivanckyS.github.io',
  base: '/Landing_page_Gymubb',
  vite: {
    plugins: [tailwindcss()]
  }
});
