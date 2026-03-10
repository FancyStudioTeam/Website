import { NavbarLeftHandLinks } from './NavbarLeftHandLinks.tsx';

export function NavbarLeftHand() {
	return (
		<section className='mr-auto hidden md:flex'>
			<ul className='flex flex-row'>
				<NavbarLeftHandLinks />
			</ul>
		</section>
	);
}
