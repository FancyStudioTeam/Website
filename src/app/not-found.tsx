import type { Metadata } from 'next';
import Link from 'next/link';
import { METADATA_PAGE_INFORMATION, MetadataPage } from '#/lib/Metadata.ts';
import { createMetadataObject } from '#/utils/createMetadataObject.ts';

export const metadata: Metadata = createMetadataObject({
	...METADATA_PAGE_INFORMATION[MetadataPage.NotFound],
	robots: 'noindex, nofollow',
});

export default function () {
	return (
		<main className='grid h-dvh-without-nav place-content-center'>
			<section className='flex flex-col gap-4'>
				<h1 className='font-stardom text-5xl tracking-tighter'>
					404 - Not Found
				</h1>
				<Link
					className='rounded-sm border border-dark-border px-4 py-2 text-center text-sm transition-colors hover:bg-dark-secondary'
					href='/'
				>
					Return Home
				</Link>
			</section>
		</main>
	);
}
