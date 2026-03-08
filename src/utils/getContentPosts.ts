import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

const contentPostsPath = join(cwd(), 'content');

export function getContentPosts() {
	const contentFiles = readdirSync(contentPostsPath, {
		withFileTypes: true,
	});

	return contentFiles.map(({ name }) => {
		const contentFilePath = join(contentPostsPath, name);
		const content = readFileSync(contentFilePath, 'utf-8');

		const id = name.replace(/.md/, '');

		return {
			content,
			id,
		};
	});
}
