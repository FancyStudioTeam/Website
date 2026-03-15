import type { Options as RehypeClassNamesOptions } from 'rehype-class-names';
import type { Options as RemarkFrontmatterOptions } from 'remark-frontmatter';
import { twMerge } from 'tailwind-merge';

export const REHYPE_CLASS_NAMES_OPTIONS: RehypeClassNamesOptions = {
	code: twMerge('font-geist-mono'),
	h1: twMerge('text-xl'),
	pre: twMerge('overfloy-x-auto rounded-sm bg-dark-secondary p-4 font-bold font-geist-mono'),
};

export const REMARK_FRONTMATTER_OPTIONS: RemarkFrontmatterOptions = {
	marker: '-',
	type: 'yaml',
};
