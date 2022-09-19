---
date: Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)
slug: use-mdsvex
title: How to build this blog 🔨
description: With the use of the mdsvex & mdsvex libraries, we can now easily create a blog post with very few boilerplate to write.
keywords:
  - svelte-kit
  - svelte
  - mdsvex
---

In the article, we'll see how to configure a [SvelteKit](https://kit.svelte.dev/) markdown based blog with the help of the [mdsvex](https://mdsvex.com/) library. The blog we are going to build is:

- mobile first
- fast & accessible
- can be hosted in most of the popular hosting services
- build with SEO in mind
- and is easy to maintain. 😮‍💨

## Init SvelteKit project

> [SvelteKit](https://kit.svelte.dev/) is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. Unlike single-page apps, SvelteKit doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.

You can initialize a SvelteKit project with the following command:

```bash
npm init svelte app-name
```

The command will scaffold a new project in the app-name directory asking you if you'd like to set up some basic tooling such as TypeScript. Let's chose the skeleton project and enable all other options (typescript, prettier, etc.)

## Configure mdsvex

mdsvex is a markdown preprocessor for Svelte components. This preprocessor allows you to use Svelte components in your markdown, or markdown in your Svelte components. mdsvex supports all Svelte syntax and almost all markdown syntax.

In addition to mdsvex, we'll also install 2 other libraries in order to generate header links automatically:

- [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)
- [rehype-slug](https://github.com/rehypejs/rehype-slug)

```bash
pnpm i -D mdsvex rehype-autolink-headings rehype-slug
```

Then configure the `svelte.config.js` file:

```js
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/layout/blog.layout.svelte',
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		// whatever
	}
};
```

And finally create the `blog.layout.svelte` file with this minimum required markup. It allows using markdown configuration as props:

```svelte
<script>
	const { title } = $$restProps;
</script>

{title}

<slot />
```

And that's it! Any markdown file will be converted to HTML and then rendered with the layout. The markdown configuration will be passed to the `$$restProps` props.

Here is a blog example. It exports a title:

```md
---
title: It works!
---

Yes, it does!
```

## configuring the blog list

The blog list is added to the `locals` and `session` objects in the `hooks.ts` file:

```svelte
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
			return { ...metadata, filename };
		})
	);
	posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

	event.locals.posts = posts;
	return resolve(event);
};
```

It is displayed in the `/blog/index.html` file:

```svelte
<script>
	export let data;
</script>

<ul>
	{#each data.props.posts as post}
		<li>
			<a href={`/blog/${post.slug}`}>{post.title}</a>
		</li>
	{/each}
</ul>
```

## Going further

- you'd like to customize the style with this [layout stylesheet](https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/layout/blog.layout.svelte)
- you'd like to add meta tags for SEO with this [Open Graph Component](https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/components/OpenGraph.svelte)
- you'd like to filter the posts by a tag (not done yet 😜)
