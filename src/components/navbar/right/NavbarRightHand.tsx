import{ NavbarRightHandButtons}from "./NavbarRightHandButtons.tsx";

export function NavbarRightHand() {
	return (
		<section className='ml-auto hidden md:flex'>
			<ul className='flex flex-row'>
				<NavbarRightHandButtons />
			</ul>
		</section>
	);
}
