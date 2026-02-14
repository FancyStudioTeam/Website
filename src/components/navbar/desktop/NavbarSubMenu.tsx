import { NavbarSubMenuButtons } from './NavbarSubMenuButtons.js';
import { NavbarSubMenuItems } from './NavbarSubMenuItems.js';

export function NavbarSubMenu() {
	return (
		<nav className='mx-auto flex h-10 w-full max-w-7xl justify-between'>
			<NavbarSubMenuItems />
			<NavbarSubMenuButtons />
		</nav>
	);
}
