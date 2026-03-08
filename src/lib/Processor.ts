import rehypeClassNames from 'rehype-class-names';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStarryNight from 'rehype-starry-night';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { twMerge } from 'tailwind-merge';
import { unified } from 'unified';

export const processor = unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypeSanitize)
	.use(rehypeClassNames, {
		code: twMerge('font-geist-mono'),
		h1: twMerge('text-xl'),
		pre: twMerge(
			'rounded-sm bg-dark-secondary p-4 font-bold font-geist-mono',
		),
	})
	.use(rehypeStarryNight)
	.use(rehypeStringify);
