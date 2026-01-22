import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
    site: 'https://will-ai-replace.me',
    output: 'server',
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
    integrations: [preact({ compat: true })],
    vite: {
        plugins: [
            tailwindcss(),
            wasm(),
            topLevelAwait()
        ],
    },
});
