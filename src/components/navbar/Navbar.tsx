'use client';

import { Disclosure } from '@headlessui/react';
import { NavbarDrawer } from './drawer/NavbarDrawer.tsx';
import { NavbarLeftHand } from './left/NavbarLeftHand.tsx';
import { NavbarMiddleHand } from './middle/NavbarMiddleHand.tsx';
import { NavbarRightHand } from './right/NavbarRightHand.tsx';

export function Navbar() {
	return (
		<header className='sticky top-0 h-10 w-full border-light-border border-b bg-inherit dark:border-dark-border'>
			<Disclosure
				as='nav'
				className='mx-auto grid size-full max-w-7xl grid-cols-1 md:grid-cols-3'
			>
				{({ open }) => (
					<>
						<NavbarLeftHand />
						<NavbarMiddleHand open={open} />
						<NavbarRightHand />

						<NavbarDrawer />
					</>
				)}
			</Disclosure>
		</header>
	);
}
