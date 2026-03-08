import { NavbarContentLogo } from '#/components/navbar/NavbarContentLogo.tsx';
import { NavbarDrawerContentHeaderCloseButton } from './NavbarDrawerContentHeaderCloseButton.tsx';

export function NavbarDrawerContentHeader() {
	return (
		<header className='mx-4 flex items-center justify-between'>
			<NavbarContentLogo />
			<NavbarDrawerContentHeaderCloseButton />
		</header>
	);
}
