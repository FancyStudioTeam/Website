import { Sparkles } from 'lucide-react';

export function PageAside() {
	return (
		<aside className='flex items-center gap-2 rounded-sm border-l-4 bg-light-tertiary p-4 text-light-foreground text-sm shadow-md dark:bg-dark-tertiary dark:text-dark-foreground'>
			<Sparkles className='size-5 shrink-0' />
			<span>
				<strong>Would you like to join our team?</strong> Join our{' '}
				<a
					href='https://discord.gg/yWjeDA6ewJ'
					rel='noopener'
					target='_blank'
				>
					<strong>Discord server</strong>
				</a>{' '}
				for a chance to become part of our team!
			</span>
		</aside>
	);
}
