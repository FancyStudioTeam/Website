import { Construction } from 'lucide-react';

export function PageAside() {
	return (
		<aside className='flex items-center gap-2 rounded-sm border-l-4 bg-light-tertiary p-4 text-light-foreground text-sm shadow-md dark:bg-dark-tertiary dark:text-dark-foreground'>
			<Construction className='size-5 shrink-0' />
			<span>
				<strong>This page is under development</strong>. You may
				experience issues while navigating.
			</span>
		</aside>
	);
}
