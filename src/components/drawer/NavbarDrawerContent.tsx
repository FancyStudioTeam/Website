import { DisclosurePanel } from '@headlessui/react';
import {
	NAVBAR_SOCIAL_MEDIA_LINKS,
	NAVBAR_USEFUL_LINKS,
} from '#/lib/navbar/NavbarLinks.tsx';
import { NavbarDrawerContentHeader } from './header/NavbarDrawerContentHeader.tsx';
import { NavbarDrawerContentLinks } from './links/NavbarDrawerContentLinks.tsx';

export function NavbarDrawerContent() {
	return (
		<DisclosurePanel className='group fixed inset-0 z-50 backdrop-blur-xs data-open:animate-duration-150 data-open:animate-fade-in'>
			<div className='flex flex-col gap-6 border-dark-border border-b bg-dark-primary p-6 group-data-open:animate-duration-150 group-data-open:animate-slide-in-top'>
				<NavbarDrawerContentHeader />
				<NavbarDrawerContentLinks
					links={NAVBAR_USEFUL_LINKS}
					name='Useful Links'
				/>
				<NavbarDrawerContentLinks
					links={NAVBAR_SOCIAL_MEDIA_LINKS}
					name='Social Media Links'
				/>
			</div>
		</DisclosurePanel>
	);
}
