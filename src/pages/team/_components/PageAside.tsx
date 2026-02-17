import { SparkleIcon } from '@phosphor-icons/react';

export function PageAside() {
	return (
		<aside className='flex items-center gap-2 rounded-sm bg-light-tertiary p-4 text-light-foreground text-sm shadow-md dark:bg-dark-tertiary dark:text-dark-foreground'>
			<SparkleIcon
				className='size-5 shrink-0'
				weight='fill'
			/>
			<span>
				Would you like to join our team? Join our Discord server for a
				chance to become part of our team!
			</span>
		</aside>
	);
}
