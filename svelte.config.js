import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
    compilerOptions: {
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
    },
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            // Impostato su 404.html: essenziale per GitHub Pages se ci sono percorsi dinamici
            fallback: '404.html', 
            precompress: false,
            strict: true
        }),
        paths: {
            // Diciamo a SvelteKit qual è la tua sottocartella su GitHub
            base: process.argv.includes('dev') ? '' : '/2026-02-sveltekit'
        }
    }
};

export default config;