import { NavbarDrawerButton } from '../drawer/NavbarDrawerButton.tsx';
import { NavbarLogo } from '../NavbarLogo.tsx';

export function NavbarMiddleHand({ open }: NavbarMiddleHandProps) {
	return (
		<section className='grid grid-cols-2 divide-x divide-dark-border border-dark-border md:grid-cols-1 md:place-items-center md:divide-x-0 md:border-x'>
			<NavbarLogo className='grid place-items-center' />
			<NavbarDrawerButton open={open} />
		</section>
	);
}

export interface NavbarMiddleHandProps {
	open: boolean;
}
