import { getRss } from 'chyme';
import { getPosts } from '$lib/server/posts';

export const GET: import('@sveltejs/kit').RequestHandler = async () => {
	const ttlInMin = 24 * 60;
	const posts = (await getPosts()).map(({ slug, ...post }) => ({
		...post,
		link: `https://www.machyme.fr/blog/${slug}`
	}));

	const rss = getRss({
		title: 'Machyme blog articles',
		description: 'New blog articles',
		link: 'https://www.machyme.fr/blog/',
		rssLink: 'https://www.machyme.fr/rss.xml',
		ttlInMin,
		posts
	});

	return new Response(String(rss), {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${ttlInMin * 60}`,
			'Content-Type': 'application/rss+xml'
		}
	});
};
