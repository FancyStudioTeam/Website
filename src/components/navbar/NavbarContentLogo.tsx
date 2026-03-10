import Link from 'next/link';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function NavbarContentLogo({
	className,
	...props
}: NavbarContentLogoProps) {
	return (
		<Link
			{...props}
			aria-label='FancyStudio Home Page'
			className={twMerge(
				'font-stardom text-xl tracking-tighter transition-opacity hover:opacity-75',
				className,
			)}
			href='/'
		>
			FancyStudio
		</Link>
	);
}

export type NavbarContentLogoProps = Omit<ComponentProps<typeof Link>, 'href'>;
