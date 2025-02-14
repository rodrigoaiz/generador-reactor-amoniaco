// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.DEV ? "." : "/amoniaco",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(
    {
    include: {
      bi: ['facebook', 'threads', 'twitter-x', 'youtube', 'instagram', 'linkedin', 'box-arrow-in-right','envelope-paper-heart','file-earmark-arrow-down', 'box-arrow-in-right', 'link-45deg', 'arrow-bar-right', 'arrow-bar-left', 'calendar', 'clock', 'pin-map', 'file-earmark-pdf-fill', 'file-earmark-medical-fill','file-text-fill','book-fill']
    }
  }
  )]
});
