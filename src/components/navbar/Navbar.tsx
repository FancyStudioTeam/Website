import { Navbar as DesktopNavbar } from './desktop/Navbar.js';

export function Navbar({ isFullScreen, url }: NavbarProps) {
	return (
		<DesktopNavbar
			isFullScreen={isFullScreen}
			url={url}
		/>
	);
}

export interface NavbarProps {
	isFullScreen?: boolean;
	url: URL;
}
