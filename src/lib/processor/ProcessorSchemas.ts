import { maxLength, minLength, object, string } from 'zod/mini';

const MAXIMUM_FRONTMATTER_TITLE_LENGTH = 100;

const ProcessorFrontmatterTitleSchema = string().check(
	minLength(10),
	maxLength(MAXIMUM_FRONTMATTER_TITLE_LENGTH),
);

export const ProcessorFrontmatterSchema = object({
	title: ProcessorFrontmatterTitleSchema,
});
