import { NavbarLogo } from './NavbarLogo.js';
import { NavbarSubMenu } from './NavbarSubMenu.js';

export function Navbar() {
	return (
		<nav className='sticky top-0 w-full border-neutral-700'>
			<div className='flex h-12.5 items-center justify-between border-neutral-700 border-b sm:justify-center'>
				<NavbarLogo />
			</div>
			<NavbarSubMenu />
		</nav>
	);
}
