import type { VFile } from 'vfile';
import { matter } from 'vfile-matter';
import { parse } from 'zod/mini';
import { ProcessorFrontmatterSchema } from './ProcessorSchemas.ts';

export function remarkFrontmatterExtractor() {
	return (_: unknown, file: VFile) => {
		matter(file);
	};
}

export function remarkFrontmatterExtractorValidator() {
	return (_: unknown, file: VFile) => {
		const { data } = file;
		const { matter } = data;

		parse(ProcessorFrontmatterSchema, matter);
	};
}
