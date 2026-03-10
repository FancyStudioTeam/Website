import { NAVBAR_USEFUL_LINKS } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarLeftHandLink } from './NavbarLeftHandLink.tsx';

export function NavbarLeftHandLinks() {
	return NAVBAR_USEFUL_LINKS.map(({ text, ...props }) => (
		<li key={text}>
			<NavbarLeftHandLink
				text={text}
				{...props}
			/>
		</li>
	));
}
