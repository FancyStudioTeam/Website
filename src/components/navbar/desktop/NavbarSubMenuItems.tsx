import type { HTMLAttributeAnchorTarget } from 'react';
import { NavbarSubMenuItem } from './NavbarSubMenuItem.js';

const NAVBAR_LINK_ITEM: NavbarLinkItem[] = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/projects',
		name: 'Projects',
	},
	{
		href: '/team',
		name: 'Team',
	},
];

export function NavbarSubMenuItems() {
	return (
		<div className='inline-flex'>
			{NAVBAR_LINK_ITEM.map(({ href, name, target }) => (
				<NavbarSubMenuItem
					href={href}
					key={name}
					name={name}
					target={target}
				/>
			))}
		</div>
	);
}

interface NavbarLinkItem {
	href: string;
	name: string;
	target?: HTMLAttributeAnchorTarget;
}
