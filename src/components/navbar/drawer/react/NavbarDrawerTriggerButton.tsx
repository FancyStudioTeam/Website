import { DrawerPreview as Drawer } from '@base-ui/react';
import { ListIcon } from '@phosphor-icons/react';

const { Trigger: DrawerTrigger } = Drawer;

export function NavbarDrawerTriggerButton() {
	return (
		<DrawerTrigger className='inline-flex size-full cursor-pointer items-center px-6 text-sm hover:bg-light-secondary hover:dark:bg-dark-secondary'>
			<ListIcon
				className='size-5 shrink-0'
				weight='fill'
			/>
		</DrawerTrigger>
	);
}
