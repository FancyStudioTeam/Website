import { NavbarLogo } from './NavbarLogo.js';
import { NavbarSubMenu } from './NavbarSubMenu.js';

export function Navbar() {
	return (
		<nav className='sticky top-0 w-full border-neutral-700'>
			<div className='h-12.5 border-neutral-700 border-b sm:grid sm:grid-cols-3'>
				<div className='col-start-2 m-auto'>
					<NavbarLogo />
				</div>
			</div>
			<NavbarSubMenu />
		</nav>
	);
}
