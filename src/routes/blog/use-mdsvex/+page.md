---
layout: blog
date: Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)
slug: use-mdsvex
title: How to build this blog 🔨
description: Build your blog (like this one) in no time and with outstanding performance with SvelteKit and Mdsvex
keywords:
  - svelte-kit
  - svelte
  - mdsvex
---

Are you a code learner? Here is the [Github repo of this blog](https://github.com/Ennoriel/machyme).

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
npm init svelte <app-name>
```

The command will scaffold a new project in the `app-name` directory asking you if you'd like to set up some basic tooling such as TypeScript. Let's chose the skeleton project and enable all other options (typescript, prettier, etc.)

## Configure mdsvex

mdsvex is a markdown preprocessor for Svelte components. This preprocessor allows you to use Svelte components in your markdown, or markdown in your Svelte components. mdsvex supports all Svelte syntax and almost all markdown syntax.

In addition to mdsvex, we'll also install 2 other libraries in order to generate header links automatically:

- [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings): add links around your titles
- [rehype-slug](https://github.com/rehypejs/rehype-slug): add slug ids to your titles

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

You can then create a markdown file under `/routes/blog/url-of-your-article`. The layout props are written in the top section as a `yaml` document and the article goes below:

```md
---
title: It works!
---

Yes, it does!
```

## configuring the blog list

The blog list is needed to display the blog list. In order to retrieve it, we need to pass it through the SvelteKit data mechanism. To do so, we define a `+layout.server.ts` where the logic goes:

```typescript
import type { LayoutServerLoad } from './$types';

type BlogPost = {
	title: string;
};

export const load = (async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/**/*.md')).map(async ([path, page]) => {
			const { metadata } = (await page()) as { metadata: BlogPost };
			const filename = path.split('/').pop();
			return {
				...metadata,
				filename
			};
		})
	);

	return { posts };
}) satisfies LayoutServerLoad;
```

Doing the logic in the main layout will allow to get the data anywhere in the site. In particular, in the blog list file: `/blog/+page.svelte`:

```svelte
<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Publications</h1>

<ArticleList posts={data.posts} />
```

## Going further

- you'd like to customize the style with this [layout stylesheet](https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/layout/blog.layout.svelte)
- you'd like to add meta tags for SEO with this [Open Graph Component](https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/components/OpenGraph.svelte)
- you'd like to filter the posts by a tag (not done yet 😜)
