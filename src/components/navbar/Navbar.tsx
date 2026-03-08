import { NavbarContent } from './NavbarContent.tsx';

export function Navbar() {
	return (
		<header className='sticky top-0 h-10 w-full border-dark-border border-b bg-dark-primary'>
			<NavbarContent />
		</header>
	);
}
