import type { HTMLAttributeAnchorTarget } from 'react';

export function NavbarSubMenuItem({
	href,
	name,
	target,
}: NavbarSubMenuItemProps) {
	return (
		<a
			className='flex items-center px-6 text-sm transition-colors dark:hover:text-neutral-50'
			href={href}
			target={target}
		>
			{name}
		</a>
	);
}

export interface NavbarSubMenuItemProps {
	href: string;
	name: string;
	target?: HTMLAttributeAnchorTarget;
}
