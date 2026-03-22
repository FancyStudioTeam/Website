import type { NextConfig } from 'next';

export default {
	reactCompiler: true,
	redirects() {
		return [
			{
				destination: 'https://github.com/FancyStudioTeam',
				permanent: true,
				source: '/github',
			},
			{
				destination: 'https://discord.gg/yWjeDA6ewJ',
				permanent: true,
				source: '/discord',
			},
		];
	},
} as NextConfig;
