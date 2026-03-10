'use client';

import { Disclosure } from '@headlessui/react';
import { NavbarDrawerContent } from './drawer/NavbarDrawerContent.tsx';
import { NavbarLeftHand } from './left/NavbarLeftHand.tsx';
import { NavbarMiddleHand } from './middle/NavbarMiddleHand.tsx';
import { NavbarRightHand } from './right/NavbarRightHand.tsx';

export function Navbar() {
	return (
		<header className='sticky top-0 h-10 w-full border-dark-border border-b bg-dark-primary'>
			<Disclosure
				as='nav'
				className='mx-auto grid size-full max-w-7xl grid-cols-1 md:grid-cols-3'
			>
				{({ open }) => (
					<>
						<NavbarLeftHand />
						<NavbarMiddleHand open={open} />
						<NavbarRightHand />

						<NavbarDrawerContent />
					</>
				)}
			</Disclosure>
		</header>
	);
}
