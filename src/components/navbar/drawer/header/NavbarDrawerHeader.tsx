import { NavbarLogo } from '#/components/navbar/NavbarLogo.tsx';
import { NavbarDrawerHeaderCloseButton } from './NavbarDrawerHeaderCloseButton.tsx';

export function NavbarDrawerHeader() {
	return (
		<header className='mx-4 flex items-center justify-between'>
			<NavbarLogo />
			<NavbarDrawerHeaderCloseButton />
		</header>
	);
}
