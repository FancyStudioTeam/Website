import { FancyStudioLogo } from './FancyStudioLogo.js';
import { FancyStudioSymbol } from './FancyStudioSymbol.js';

export function FancyStudioCombinationMark() {
	return (
		<a
			aria-label='FancyStudio Home'
			className='inline-flex select-none items-center gap-2 transition-opacity hover:opacity-75'
			href='/'
		>
			<FancyStudioSymbol />
			<FancyStudioLogo />
		</a>
	);
}
