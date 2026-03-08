import { NavbarLogo } from '#/components/NavbarLogo.tsx';
import { NavbarDrawerContentHeaderCloseButton } from './NavbarDrawerContentHeaderCloseButton.tsx';

export function NavbarDrawerContentHeader() {
	return (
		<header className='mx-4 flex items-center justify-between'>
			<NavbarLogo />
			<NavbarDrawerContentHeaderCloseButton />
		</header>
	);
}
