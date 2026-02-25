import type { ReactNode } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export function MediaQuery({ children, mediaQuery }: MediaQueryProps) {
	const matches = useMediaQuery(mediaQuery);

	if (!matches) {
		return null;
	}

	return children;
}

export interface MediaQueryProps {
	children: ReactNode;
	mediaQuery: string;
}
