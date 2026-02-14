import { NavbarLogo } from './NavbarLogo.js';
import { NavbarSubMenu } from './NavbarSubMenu.js';

export function Navbar() {
	return (
		<nav className='fixed top-0 w-full divide-y divide-light-border border-light-border border-b bg-light-primary/75 backdrop-blur-xl dark:divide-dark-border dark:border-dark-border dark:bg-dark-primary/75'>
			<NavbarLogo />
			<NavbarSubMenu />
		</nav>
	);
}
