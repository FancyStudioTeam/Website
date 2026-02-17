export function PageContent() {
	return (
		<main className='mx-auto grid size-full min-h-dvh max-w-7xl place-content-center p-6'>
			<section className='flex flex-col gap-4'>
				<h1 className='text-center font-stardom text-5xl tracking-tighter'>
					404 - Not Found
				</h1>
				<a
					className='rounded-sm bg-dark-primary px-4 py-2 text-center text-light-primary text-sm shadow-md hover:opacity-75 dark:bg-light-primary dark:text-dark-primary'
					href='/'
				>
					Go to Home Page
				</a>
			</section>
		</main>
	);
}
