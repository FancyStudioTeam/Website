import type { HTMLAttributeAnchorTarget } from 'react';

export function NavbarSubMenuButton({ href, name }: NavbarSubMenuButtonProps) {
	return (
		<a
			className='flex items-center px-6 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900'
			href={href}
			target='_blank'
		>
			{name}
		</a>
	);
}

interface NavbarSubMenuButtonProps {
	href: string;
	name: string;
	target?: HTMLAttributeAnchorTarget;
}
