import type { HTMLAttributeAnchorTarget } from 'react';

export function NavbarSubMenuItem({
	href,
	name,
	target,
}: NavbarSubMenuItemProps) {
	return (
		<a
			className='flex items-center px-6 text-neutral-400 text-sm transition-colors hover:text-neutral-50'
			href={href}
			target={target}
		>
			{name}
		</a>
	);
}

interface NavbarSubMenuItemProps {
	href: string;
	name: string;
	target?: HTMLAttributeAnchorTarget;
}
