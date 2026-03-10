import Link from 'next/link';
import type { NavbarLink as NavbarLinkInterface } from '#/lib/navbar/NavbarLinks.tsx';

export function NavbarLink({ href, target, text }: NavbarLinkProps) {
	return (
		<Link
			className='grid size-full place-items-center px-6 text-dark-foreground text-sm transition-colors hover:bg-dark-secondary hover:text-light-primary'
			href={href}
			target={target}
		>
			{text}
		</Link>
	);
}

export type NavbarLinkProps = NavbarLinkInterface;
