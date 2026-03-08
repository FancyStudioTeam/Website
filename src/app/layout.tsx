import './globals.css';
import './highlight.css';
import './tailwind.css';

import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import LocalFont from 'next/font/local';
import type { ReactNode } from 'react';
import { Navbar } from '#/components/navbar/Navbar.tsx';
import { METADATA_PAGE_INFORMATION, MetadataPage } from '#/lib/Metadata.ts';
import { createMetadataObject } from '#/utils/createMetadataObject.ts';

const GeistMono = Geist_Mono({
	variable: '--font-geist-mono',
});
const GeneralSansFont = LocalFont({
	src: '../../public/fonts/GeneralSans.woff2',
	variable: '--font-general-sans',
});
const StardomFont = LocalFont({
	src: '../../public/fonts/Stardom.woff2',
	variable: '--font-stardom',
});

const { variable: GeistMonoVariable } = GeistMono;
const { variable: GeneralSansVariable } = GeneralSansFont;
const { variable: StardomVariable } = StardomFont;

/*
 * biome-ignore lint/style/useComponentExportOnlyModules: This export
 * represents the metadata of the page.
 */
export const metadata: Metadata = createMetadataObject({
	...METADATA_PAGE_INFORMATION[MetadataPage.Home],
	robots: 'index, follow',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en-US'>
			<body
				className={`${GeistMonoVariable} ${GeneralSansVariable} ${StardomVariable} size-full bg-dark-primary font-general-sans text-light-primary antialiased selection:bg-light-primary selection:text-dark-primary`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
