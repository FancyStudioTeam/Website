import { SeniorManagementGroup } from './groups/SeniorManagementGroup.js';
import { PageAside } from './PageAside.js';

export function PageContent() {
	return (
		<main className='mx-auto flex size-full max-w-7xl flex-col gap-6 p-6'>
			<PageAside />
			<h1 className='font-stardom text-3xl tracking-tighter'>
				Meet our Team
			</h1>
			<SeniorManagementGroup />
		</main>
	);
}
