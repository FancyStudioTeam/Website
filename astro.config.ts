import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

const WEIGHT_BOLD = 700;
const WEIGHT_NORMAL = 400;

export default defineConfig({
	experimental: {
		fonts: [
			{
				cssVariable: '--font-general-sans',
				name: 'General Sans',
				provider: fontProviders.fontshare(),
				weights: [
					WEIGHT_NORMAL,
					WEIGHT_BOLD,
				],
			},
			{
				cssVariable: '--font-stardom',
				name: 'Stardom',
				provider: fontProviders.fontshare(),
			},
		],
	},
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
