'use client';

import { Disclosure } from '@headlessui/react';
import { NavbarDrawerButton } from './drawer/NavbarDrawerButton.tsx';
import { NavbarDrawerContent } from './drawer/NavbarDrawerContent.tsx';
import { NavbarLogo } from './NavbarLogo.tsx';

export function NavbarContent() {
	return (
		<Disclosure
			as='nav'
			className='mx-auto flex size-full max-w-7xl items-center justify-between px-6'
		>
			{({ open }) => (
				<>
					<NavbarLogo />
					<NavbarDrawerButton open={open} />
					<NavbarDrawerContent />
				</>
			)}
		</Disclosure>
	);
}
