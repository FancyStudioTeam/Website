import rehypeClassNames from 'rehype-class-names';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStarryNight from 'rehype-starry-night';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import {
	remarkFrontmatterExtractor,
	remarkFrontmatterExtractorValidator,
} from './ProcessorFunctions.ts';
import {
	REHYPE_CLASS_NAMES_OPTIONS,
	REMARK_FRONTMATTER_OPTIONS,
} from './ProcessorOptions.ts';

export const processor = unified()
	.use(remarkParse)
	.use(remarkFrontmatter, REMARK_FRONTMATTER_OPTIONS)
	.use(remarkFrontmatterExtractor)
	.use(remarkFrontmatterExtractorValidator)
	.use(remarkRehype)
	.use(rehypeSanitize)
	.use(rehypeClassNames, REHYPE_CLASS_NAMES_OPTIONS)
	.use(rehypeStarryNight)
	.use(rehypeStringify);
