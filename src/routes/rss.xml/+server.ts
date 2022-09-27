import { getPosts } from '$lib/server/posts';

function formatDate(date: string) {
	return new Date(Date.parse(date)).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

function formatDescription(description: string) {
	return description.replace(/src="\//g, 'src="https://www.machyme.fr/');
}

export const GET: import('@sveltejs/kit').RequestHandler = async () => {
	const ttlInMin = 360;
	const posts = await getPosts();
	const rssPosts = posts
		.map(
			(entry) => `
                <item>
                    <title>${formatDate(entry.date)}</title>
                    <link>https://www.machyme.fr/blog/${entry.slug}</link>
                    <pubDate>${new Date(Date.parse(entry.date)).toUTCString()}</pubDate>
                    <description>${formatDescription(entry.description)}'</description>
                </item>
            `
		)
		.join('');
	const rssDocument = `
	<?xml version="1.0"?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <title>Machyme blog articles</title>
                <description>New blog articles</description>
                <link>https://www.machyme.fr/blog/</link>
                <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
                <pubDate>${new Date(posts[0].date).toUTCString()}</pubDate>
                <ttl>${ttlInMin}</ttl>
                <atom:link href="https://www.machyme.fr/changelog/rss.xml" rel="self" type="application/rss+xml" />
                ${rssPosts}
            </channel>
        </rss>
        `;
	return new Response(String(rssDocument), {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${ttlInMin * 60}`,
			'Content-Type': 'application/rss+xml'
		}
	});
};
