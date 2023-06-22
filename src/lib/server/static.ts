import type { BlogPost } from '$lib/types/blogPost.type';
import type { Tip } from '$lib/types/tips.types';

type GlobReturn<T> = Record<string, () => Promise<{ metadata: T }>>;
type Glob<T> = [string, () => Promise<{ metadata: T }>];

async function convertMetadata<T>([path, page]: Glob<T>) {
	return {
		...(await page()).metadata,
		filename: path.split('/').pop()?.split('.').shift()
	};
}

export async function getPosts() {
	const posts = await Promise.all(
		Object.entries(
			import.meta.glob('/src/routes/\\(app\\)/blog/**/*.md') as GlobReturn<BlogPost>
		).map(async (arg) => convertMetadata(arg))
	);
	posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
	return posts;
}

export async function getTips() {
	const tips = await Promise.all(
		Object.entries(
			import.meta.glob('/src/routes/\\(app\\)/tips/data/**/*.md') as GlobReturn<Tip>
		).map(async (arg) => convertMetadata(arg))
	);
	tips.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
	return tips;
}
