import { NAVBAR_SOCIAL_MEDIA_LINKS } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarRightHandButton } from './NavbarRightHandButton.tsx';

export function NavbarRightHandButtons() {
	return NAVBAR_SOCIAL_MEDIA_LINKS.map(({ text, ...props }) => (
		<li key={text}>
			<NavbarRightHandButton
				text={text}
				{...props}
			/>
		</li>
	));
}
