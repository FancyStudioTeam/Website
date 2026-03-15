import type { Metadata } from 'next';
import Link from 'next/link';
import { MetadataPage } from '#/lib/Metadata.ts';
import { createMetadataObject } from '#/utils/createMetadataObject.ts';

export const metadata: Metadata = createMetadataObject(MetadataPage.NotFound);

export default function () {
	return (
		<main className='grid h-dvh-without-nav place-content-center'>
			<section className='flex flex-col gap-4'>
				<h1 className='font-stardom text-5xl tracking-tighter'>404 - Not Found</h1>
				<Link
					className='rounded-sm bg-light-primary px-4 py-2 text-center text-dark-primary text-sm transition-opacity hover:opacity-75'
					href='/'
				>
					Return Home
				</Link>
			</section>
		</main>
	);
}
