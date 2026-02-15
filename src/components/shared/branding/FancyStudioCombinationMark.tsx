import { FancyStudioLogo } from './FancyStudioLogo.js';
import { FancyStudioSymbol } from './FancyStudioSymbol.js';

export function FancyStudioCombinationMark() {
	return (
		<a
			aria-label='FancyStudio Home'
			className='flex select-none items-center gap-0.5 transition-opacity hover:opacity-75'
			href='/'
		>
			<FancyStudioSymbol />
			<FancyStudioLogo />
		</a>
	);
}
