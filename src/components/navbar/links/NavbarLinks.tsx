import type { NavbarLink as NavbarLinkInterface } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarLink } from './NavbarLink.tsx';

export function NavbarLinks({ links }: NavbarLinksProps) {
	return links.map(({ text, ...props }) => (
		<li key={text}>
			<NavbarLink
				text={text}
				{...props}
			/>
		</li>
	));
}

export interface NavbarLinksProps {
	links: NavbarLinkInterface[];
}
