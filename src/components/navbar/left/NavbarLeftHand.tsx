import { NAVBAR_USEFUL_LINKS } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarLinks } from '../links/NavbarLinks.tsx';

export function NavbarLeftHand() {
	return (
		<section className='mr-auto hidden md:flex'>
			<ul className='flex flex-row'>
				<NavbarLinks links={NAVBAR_USEFUL_LINKS} />
			</ul>
		</section>
	);
}
