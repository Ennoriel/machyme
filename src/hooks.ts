import type { Handle, GetSession } from '@sveltejs/kit';

export const getSession: GetSession = async ({ locals }) => {
	return {
		posts: locals.posts
	};
};

export const handle: Handle = async ({ event, resolve }) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const filename = path.split('/').pop();
			return {
				...metadata,
				filename,
				keywords: metadata.keywords.split(',')
			};
		})
	);
	posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

	event.locals.posts = posts;
	return resolve(event);
};
