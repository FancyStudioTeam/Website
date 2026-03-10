import { NavbarDrawerButton } from '../drawer/NavbarDrawerButton.tsx';
import { NavbarContentLogo } from '../NavbarContentLogo.tsx';

export function NavbarMiddleHand({ open }: NavbarMiddleHandProps) {
	return (
		<section className='flex items-center justify-between border-dark-border md:justify-center md:border-x'>
			<NavbarContentLogo className='mx-6 grid h-full place-items-center' />
			<NavbarDrawerButton open={open} />
		</section>
	);
}

export interface NavbarMiddleHandProps {
	open: boolean;
}
