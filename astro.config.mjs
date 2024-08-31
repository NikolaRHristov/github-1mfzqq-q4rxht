import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
// import compressor from 'astro-compressor';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: false,
  integrations: [
    svelte(),
    tailwind(),
    playformCompress({
      Image: false,
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          ignoreCustomFragments: false,
          // ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]\*?\?>/],
          continueOnParseError: true,
        },
      },
    }),
    // compressor(),
  ],
  prefetch: true,
});
