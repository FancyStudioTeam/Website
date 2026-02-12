import type { HTMLAttributeAnchorTarget } from 'react';

export function NavbarSubMenuButton({ href, name }: NavbarSubMenuButtonProps) {
	return (
		<a
			className='flex items-center px-6 text-sm transition-all hover:bg-neutral-900 hover:opacity-75'
			href={href}
			target='_blank'
		>
			{name}
		</a>
	);
}

export interface NavbarSubMenuButtonProps {
	href: string;
	name: string;
	target?: HTMLAttributeAnchorTarget;
}
