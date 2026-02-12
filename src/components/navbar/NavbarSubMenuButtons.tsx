import {
	type NavbarSubMenuButtonProps as NavbarButtonItem,
	NavbarSubMenuButton,
} from './NavbarSubMenuButton.js';

const NAVBAR_BUTTON_ITEM: NavbarButtonItem[] = [
	{
		href: 'https://discord.gg/yWjeDA6ewJ',
		name: 'Discord',
	},
	{
		href: 'https://github.com/FancyStudioTeam',
		name: 'GitHub',
	},
];

export function NavbarSubMenuButtons() {
	return (
		<div className='inline-flex divide-x divide-neutral-700'>
			{NAVBAR_BUTTON_ITEM.map(({ href, name }) => (
				<NavbarSubMenuButton
					href={href}
					key={name}
					name={name}
				/>
			))}
		</div>
	);
}
