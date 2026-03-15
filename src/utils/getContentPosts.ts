import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

const contentPostsPath = join(cwd(), 'content');

// biome-ignore lint/suspicious/useAwait: (x)
export async function getContentPosts(): Promise<Map<string, ContentPost>> {
	const contentPostsMap = new Map<string, ContentPost>();
	const contentFiles = readdirSync(contentPostsPath, {
		withFileTypes: true,
	});

	for (const { name } of contentFiles) {
		const contentFilePath = join(contentPostsPath, name);
		const content = readFileSync(contentFilePath, 'utf-8');

		const slug = name.replace(/.md/, '');

		contentPostsMap.set(slug, {
			content,
			slug,
		});
	}

	return contentPostsMap;
}

export interface ContentPost {
	content: string;
	slug: string;
}
