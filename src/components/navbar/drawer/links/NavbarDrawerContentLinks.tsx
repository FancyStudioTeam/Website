import type { NavbarLink } from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarDrawerContentLink } from './NavbarDrawerContentLink.tsx';

export function NavbarDrawerContentLinks({
	name,
	links,
}: NavbarDrawerContentLinksProps) {
	return (
		<section className='flex flex-col gap-2'>
			<span className='mx-4 font-stardom text-xs uppercase tracking-tighter'>
				{name}
			</span>
			<span>
				{links.map(({ text, ...props }) => (
					<NavbarDrawerContentLink
						key={text}
						text={text}
						{...props}
					/>
				))}
			</span>
		</section>
	);
}

export interface NavbarDrawerContentLinksProps {
	links: NavbarLink[];
	name: string;
}
