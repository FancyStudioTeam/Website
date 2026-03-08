import { CloseButton } from '@headlessui/react';
import { XIcon } from '@phosphor-icons/react';

export function NavbarDrawerContentHeaderCloseButton() {
	return (
		<CloseButton className='flex cursor-pointer items-center gap-2 text-dark-foreground text-sm transition-colors hover:text-light-primary'>
			Close
			<XIcon
				className='size-7 shrink-0'
				weight='fill'
			/>
		</CloseButton>
	);
}
