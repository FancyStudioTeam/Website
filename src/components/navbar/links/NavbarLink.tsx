import Link from 'next/link';
import type { NavbarLink as NavbarLinkInterface } from '#/lib/navbar/NavbarLinks.tsx';

export function NavbarLink({ href, target, text }: NavbarLinkProps) {
	return (
		<Link
			className='grid size-full place-items-center px-6 text-light-foreground text-sm hover:bg-light-secondary hover:text-dark-primary dark:text-dark-foreground dark:hover:bg-dark-secondary dark:hover:text-light-primary'
			href={href}
			target={target}
		>
			{text}
		</Link>
	);
}

export type NavbarLinkProps = NavbarLinkInterface;
