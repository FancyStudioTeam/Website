import { Geist_Mono } from 'next/font/google';
import LocalFont from 'next/font/local';

export const GeistMono = Geist_Mono({
	variable: '--font-geist-mono',
});
export const GeneralSansFont = LocalFont({
	src: '../../public/fonts/GeneralSans.woff2',
	variable: '--font-general-sans',
});
export const StardomFont = LocalFont({
	src: '../../public/fonts/Stardom.woff2',
	variable: '--font-stardom',
});

export const { variable: GeistMonoVariable } = GeistMono;
export const { variable: GeneralSansVariable } = GeneralSansFont;
export const { variable: StardomVariable } = StardomFont;
