// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Domeniul tău GitHub Pages (fără trailing slash)
  site: 'https://usebastian97.github.io',

  // Dacă repo-ul se numește "portfolio", păstrează linia de mai jos.
  // Dacă repo-ul se numește exact "usebastian97.github.io", ȘTERGE această linie.
  base: '/sebastian-utoiu-portfolio-website/',

  vite: {
    plugins: [tailwindcss()],
  },
});
