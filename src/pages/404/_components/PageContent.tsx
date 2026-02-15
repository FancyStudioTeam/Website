export function PageContent() {
	return (
		<main className='mx-auto grid size-full min-h-dvh max-w-7xl place-content-center'>
			<section className='flex flex-col gap-4'>
				<h1 className='text-center font-stardom text-5xl tracking-tighter'>
					404 - Not Found
				</h1>
				<a
					className='rounded-xs border border-light-border bg-transparent px-4 py-2 text-center text-inherit text-sm transition-colors hover:bg-light-secondary dark:border-dark-border hover:dark:bg-dark-secondary'
					href='/'
				>
					Go to Home Page
				</a>
			</section>
		</main>
	);
}
