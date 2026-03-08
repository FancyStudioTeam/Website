import Link from 'next/link';
import type { NavbarLink } from '#/lib/navbar/NavbarLinks.tsx';

export function NavbarDrawerContentLink({
	href,
	icon: Icon,
	target,
	text,
}: NavbarDrawerContentLinkProps) {
	return (
		<Link
			className='flex w-full items-center justify-between rounded-sm px-4 py-2 text-dark-foreground text-sm transition-colors hover:bg-dark-secondary hover:text-light-primary'
			href={href}
			target={target}
		>
			{text}
			<Icon
				className='size-5 shrink-0'
				weight='fill'
			/>
		</Link>
	);
}

export type NavbarDrawerContentLinkProps = NavbarLink;
