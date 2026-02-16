import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		react(),
		sitemap(),
	],
	site: 'https://www.fancystudio.xyz',
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
});
