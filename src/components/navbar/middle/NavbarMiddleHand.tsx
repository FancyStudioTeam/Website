import { NavbarDrawerButton } from '../drawer/NavbarDrawerButton.tsx';
import { NavbarLogo } from '../NavbarLogo.tsx';

export function NavbarMiddleHand({ open }: NavbarMiddleHandProps) {
	return (
		<section className='flex items-center justify-between border-dark-border md:border-x'>
			<NavbarLogo className='mx-6 grid h-full place-items-center md:mx-auto' />
			<NavbarDrawerButton open={open} />
		</section>
	);
}

export interface NavbarMiddleHandProps {
	open: boolean;
}
