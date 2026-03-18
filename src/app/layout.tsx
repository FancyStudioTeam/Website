import './globals.css';
import './highlight.css';
import './tailwind.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Navbar } from '#/components/navbar/Navbar.tsx';
import { GeistMonoVariable, GeneralSansVariable, StardomVariable } from '#/lib/Fonts.ts';
import { MetadataPage } from '#/lib/Metadata.ts';
import { createMetadataObject } from '#/utils/createMetadataObject.ts';

export const metadata: Metadata = createMetadataObject(MetadataPage.Home);

export default function ({ children }: { children: ReactNode }) {
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
