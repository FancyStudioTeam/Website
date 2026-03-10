import { DisclosureButton } from '@headlessui/react';
import { ListIcon, XIcon } from '@phosphor-icons/react';

export function NavbarDrawerButton({ open }: { open: boolean }) {
	return (
		<DisclosureButton className='flex cursor-pointer items-center justify-center gap-2 border-dark-border font-stardom text-md tracking-tighter transition-colors hover:bg-dark-secondary md:hidden'>
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
			Menu
		</DisclosureButton>
	);
}
