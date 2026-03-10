import Link from 'next/link';

export default function () {
	return (
		<main className='grid h-dvh-without-nav place-content-center'>
			<section className='flex flex-col gap-4'>
				<h1 className='font-stardom text-5xl tracking-tighter'>
					404 - Not Found
				</h1>
				<Link
					className='rounded-sm border border-dark-border px-4 py-2 text-center text-sm transition-colors hover:border-transparent hover:bg-light-primary hover:text-dark-primary'
					href='/'
				>
					Return Home
				</Link>
			</section>
		</main>
	);
}
