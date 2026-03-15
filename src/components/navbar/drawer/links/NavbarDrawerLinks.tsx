import type { NavbarLink } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarDrawerLink } from './NavbarDrawerLink.tsx';

export function NavbarDrawerLinks({ name, links }: NavbarDrawerLinksProps) {
	return (
		<section className='flex flex-col gap-2'>
			<span className='mx-4 font-stardom text-xs uppercase tracking-tighter'>{name}</span>
			<section>
				{links.map(({ text, ...props }) => (
					<NavbarDrawerLink
						key={text}
						text={text}
						{...props}
					/>
				))}
			</section>
		</section>
	);
}

export interface NavbarDrawerLinksProps {
	links: NavbarLink[];
	name: string;
}
