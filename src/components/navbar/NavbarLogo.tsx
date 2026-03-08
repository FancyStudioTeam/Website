import Link from 'next/link';

export function NavbarLogo() {
	return (
		<Link
			aria-label='FancyStudio Page'
			className='font-stardom text-xl tracking-tighter transition-opacity hover:opacity-75'
			href='/'
		>
			FancyStudio
		</Link>
	);
}
