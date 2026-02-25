import { DrawerPreview as Drawer } from '@base-ui/react';
import { NavbarDrawerTriggerButton } from './NavbarDrawerTriggerButton.js';

const { Root: DrawerRoot } = Drawer;

export function NavbarDrawer() {
	return (
		<DrawerRoot>
			<NavbarDrawerTriggerButton />
		</DrawerRoot>
	);
}
