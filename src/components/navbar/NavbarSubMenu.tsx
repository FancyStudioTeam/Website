import { NavbarSubMenuButtons } from './NavbarSubMenuButtons.js';
import { NavbarSubMenuItems } from './NavbarSubMenuItems.js';

export function NavbarSubMenu() {
	return (
		<nav className='flex h-10 w-full justify-between border-neutral-700 border-b'>
			<NavbarSubMenuItems />
			<NavbarSubMenuButtons />
		</nav>
	);
}
