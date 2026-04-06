// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/gym-ubb',
  vite: {
    plugins: [tailwindcss()]
  }
});
