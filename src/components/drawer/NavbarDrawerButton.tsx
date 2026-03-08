import { DisclosureButton } from '@headlessui/react';
import { ListIcon, XIcon } from '@phosphor-icons/react';

export function NavbarDrawerButton({ open }: { open: boolean }) {
	return (
		<DisclosureButton className='cursor-pointer transition-opacity hover:opacity-75 md:hidden'>
			{open ? (
				<XIcon
					className='size-7 shrink-0'
					weight='fill'
				/>
			) : (
				<ListIcon
					className='size-7 shrink-0'
					weight='fill'
				/>
			)}
		</DisclosureButton>
	);
}
