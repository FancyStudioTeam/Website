import { NavbarDrawerButton } from '../drawer/NavbarDrawerButton.tsx';
import { NavbarLogo } from '../NavbarLogo.tsx';

export function NavbarMiddleHand({ open }: NavbarMiddleHandProps) {
	return (
		<section className='grid grid-cols-2 divide-x divide-light-border border-light-border md:grid-cols-1 md:place-items-center md:divide-x-0 md:border-x dark:divide-dark-border dark:border-dark-border'>
			<NavbarLogo className='grid place-items-center' />
			<NavbarDrawerButton open={open} />
		</section>
	);
}

export interface NavbarMiddleHandProps {
	open: boolean;
}
