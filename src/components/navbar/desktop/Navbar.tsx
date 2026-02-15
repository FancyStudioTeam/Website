import { twMerge } from 'tailwind-merge';
import type { NavbarProps } from '../Navbar.js';
import { NavbarLogo } from './NavbarLogo.js';
import { NavbarSubMenu } from './NavbarSubMenu.js';

export function Navbar({ isFullScreen }: NavbarProps) {
	return (
		<nav
			className={twMerge(
				'top-0 w-full divide-y divide-light-border border-light-border border-b bg-light-primary/75 backdrop-blur-xl dark:divide-dark-border dark:border-dark-border dark:bg-dark-primary/75',
				isFullScreen ? 'fixed' : 'sticky',
			)}
		>
			<NavbarLogo />
			<NavbarSubMenu />
		</nav>
	);
}
