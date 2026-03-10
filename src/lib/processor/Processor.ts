import rehypeClassNames from 'rehype-class-names';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStarryNight from 'rehype-starry-night';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { twMerge } from 'tailwind-merge';
import { unified } from 'unified';
import type { VFile } from 'vfile';
import { matter } from 'vfile-matter';
import { parse } from 'zod/mini';
import { ProcessorFrontmatterSchema } from './ProcessorSchemas.ts';

function remarkFrontmatterExtractor() {
	return (_: unknown, file: VFile) => {
		matter(file);
	};
}

function remarkFrontmatterExtractorValidator() {
	return (_: unknown, file: VFile) => {
		const { data } = file;
		const { matter } = data;

		parse(ProcessorFrontmatterSchema, matter);
	};
}

export const processor = unified()
	.use(remarkParse)
	.use(remarkFrontmatter, {
		marker: '-',
		type: 'yaml',
	})
	.use(remarkFrontmatterExtractor)
	.use(remarkFrontmatterExtractorValidator)
	.use(remarkRehype)
	.use(rehypeSanitize)
	.use(rehypeClassNames, {
		code: twMerge('font-geist-mono'),
		h1: twMerge('text-xl'),
		pre: twMerge(
			'overfloy-x-auto rounded-sm bg-dark-secondary p-4 font-bold font-geist-mono',
		),
	})
	.use(rehypeStarryNight)
	.use(rehypeStringify);
