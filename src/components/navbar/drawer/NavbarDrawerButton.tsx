import { DisclosureButton } from '@headlessui/react';
import { ListIcon, XIcon } from '@phosphor-icons/react';

export function NavbarDrawerButton({ open }: { open: boolean }) {
	return (
		<DisclosureButton className='h-full cursor-pointer border-dark-border border-l px-6 transition-colors hover:bg-dark-secondary md:hidden'>
			{open ? (
				<XIcon
					className='size-5 shrink-0'
					weight='bold'
				/>
			) : (
				<ListIcon
					className='size-5 shrink-0'
					weight='bold'
				/>
			)}
		</DisclosureButton>
	);
}
