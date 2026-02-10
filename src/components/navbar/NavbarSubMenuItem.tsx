export function NavbarSubMenuItem({
	href,
	name,
	target,
}: NavbarSubMenuItemProps) {
	return (
		<a
			className='flex items-center px-6 text-sm transition-colors hover:text-2xl'
			href={href}
			target={target}
		>
			{name}
		</a>
	);
}

interface NavbarSubMenuItemProps {
	href: string;
	name: string;
	target?: string;
}
