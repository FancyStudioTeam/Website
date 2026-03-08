import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

const contentPostsPath = join(cwd(), 'content');

export function getContentPosts(): Map<string, ContentPost> {
	const contentPostsMap = new Map<string, ContentPost>();
	const contentFiles = readdirSync(contentPostsPath, {
		withFileTypes: true,
	});

	for (const { name } of contentFiles) {
		const contentFilePath = join(contentPostsPath, name);
		const content = readFileSync(contentFilePath, 'utf-8');

		const id = name.replace(/.md/, '');

		contentPostsMap.set(id, {
			content,
		});
	}

	return contentPostsMap;
}

export interface ContentPost {
	content: string;
}
