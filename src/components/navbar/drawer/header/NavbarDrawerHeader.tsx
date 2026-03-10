import { NavbarContentLogo } from '#/components/navbar/NavbarContentLogo.tsx';
import { NavbarDrawerHeaderCloseButton } from './NavbarDrawerHeaderCloseButton.tsx';

export function NavbarDrawerHeader() {
	return (
		<header className='mx-4 flex items-center justify-between'>
			<NavbarContentLogo />
			<NavbarDrawerHeaderCloseButton />
		</header>
	);
}
