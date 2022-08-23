function formatDate(date) {
  return new Date(Date.parse(date)).toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function formatDescription(description) {
  return description.replace(/src="\//g, 'src="https://www.machyme.fr/');
}
const get = async ({ locals }) => {
  const ttlInMin = 360;
  const posts = locals.posts.map((entry) => `
                <item>
                    <title>${formatDate(entry.date)}</title>
                    <link>https://www.machyme.fr/blog/${entry.slug}</link>
                    <pubDate>${new Date(Date.parse(entry.date)).toUTCString()}</pubDate>
                    <description>${formatDescription(entry.description)}'</description>
                </item>
            `).join("");
  const rssDocument = `
	<?xml version="1.0"?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <title>Machyme blog articles</title>
                <description>New blog articles</description>
                <link>https://www.machyme.fr/blog/</link>
                <lastBuildDate>${new Date(locals.posts[0].date).toUTCString()}</lastBuildDate>
                <pubDate>${new Date(locals.posts[0].date).toUTCString()}</pubDate>
                <ttl>${ttlInMin}</ttl>
                <atom:link href="https://www.machyme.fr/changelog/rss.xml" rel="self" type="application/rss+xml" />
                ${posts}
            </channel>
        </rss>
        `;
  return {
    body: rssDocument,
    headers: {
      "Cache-Control": `max-age=0, s-max-age=${ttlInMin * 60}`,
      "Content-Type": "application/rss+xml"
    }
  };
};
export {
  get
};
