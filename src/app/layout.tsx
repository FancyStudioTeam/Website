import './globals.css';
import './highlight.css';
import './tailwind.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { Navbar } from '#/components/navbar/Navbar.tsx';
import { GeistMonoVariable, GeneralSansVariable, StardomVariable } from '#/lib/Fonts.ts';
import { MetadataPage } from '#/lib/Metadata.ts';
import { createMetadataObject } from '#/utils/createMetadataObject.ts';

export const metadata: Metadata = createMetadataObject(MetadataPage.Home);

export default function ({ children }: { children: ReactNode }) {
	return (
		<html
			lang='en-US'
			suppressHydrationWarning={true}
		>
			<body
				className={`${GeistMonoVariable} ${GeneralSansVariable} ${StardomVariable} size-full bg-light-primary font-general-sans text-dark-primary antialiased selection:bg-dark-primary selection:text-light-primary dark:bg-dark-primary dark:text-light-primary dark:selection:bg-light-primary dark:selection:text-dark-primary`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
