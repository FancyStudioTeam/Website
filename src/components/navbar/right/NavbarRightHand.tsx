import { NAVBAR_SOCIAL_MEDIA_LINKS } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarLinks } from '../links/NavbarLinks.tsx';

export function NavbarRightHand() {
	return (
		<section className='ml-auto hidden md:flex'>
			<ul className='flex flex-row'>
				<NavbarLinks links={NAVBAR_SOCIAL_MEDIA_LINKS} />
			</ul>
		</section>
	);
}
