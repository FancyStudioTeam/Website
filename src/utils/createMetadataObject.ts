import type { Metadata } from 'next';
import type { MakeRequired } from '#/lib/Types';

export function createMetadataObject(
	metadata: MakeRequired<Metadata, 'description' | 'title' | 'robots'>,
): Metadata {
	const { description, title } = metadata;

	if (!(description && title)) {
		throw new TypeError(
			'Missing required properties at createMetadataObject',
		);
	}

	return {
		description,
		keywords: [
			'FancyStudio',
			'Vanguard',
			'Discord',
		],
		openGraph: {
			countryName: 'Spain',
			description,
			locale: 'en_US',
			siteName: 'FancyStudio',
			title,
			type: 'website',
		},
		title: `${title} - FancyStudio.xyz`,
		twitter: {
			description,
			title,
		},
	};
}
