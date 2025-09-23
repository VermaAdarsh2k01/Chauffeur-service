// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), sanity({
    projectId: '8rbpmdsj',  
    dataset: 'production',
    apiVersion: '2024-03-22',
    useCdn:false,
  })],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});