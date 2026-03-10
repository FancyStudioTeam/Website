import Link from 'next/link';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function NavbarLogo({ className, ...props }: NavbarLogoProps) {
	return (
		<Link
			aria-label='FancyStudio Home Page'
			className={twMerge(
				'font-stardom text-xl tracking-tighter transition-opacity hover:opacity-75',
				className,
			)}
			href='/'
			{...props}
		>
			FancyStudio
		</Link>
	);
}

export type NavbarLogoProps = Omit<ComponentProps<typeof Link>, 'href'>;
