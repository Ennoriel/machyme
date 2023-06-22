---
layout: blog
date: Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)
slug: use-mdsvex
title: Comment construire ce blog 🔨
description: Construisez votre blog (comme celui-ci) en un rien de temps et avec des performances exceptionnelles grâce à SvelteKit et Mdsvex
keywords:
  - svelte-kit
  - svelte
  - mdsvex
---

Vous apprenez le code ? Voici le [repo Github de ce blog] (https://github.com/Ennoriel/machyme).

Dans cet article, nous verrons comment configurer un blog [SvelteKit](https://kit.svelte.dev/) basé sur le markdown avec l'aide de la bibliothèque [mdsvex](https://mdsvex.com/). Le blog que nous allons construire est :

- compatible mobile
- rapide et accessible
- peut être hébergé dans la plupart des services d'hébergement populaires
- construit en tenant compte de l'optimisation pour les moteurs de recherche
- et est facile à entretenir. 😮‍💨

## Init SvelteKit project

> [SvelteKit] (https://kit.svelte.dev/) est un framework pour construire des applications web de toutes tailles, avec une belle expérience de développement et un routage flexible basé sur le système de fichiers. Contrairement aux applications à page unique, SvelteKit ne fait aucun compromis sur le référencement, l'amélioration progressive ou l'expérience de chargement initial - mais contrairement aux applications traditionnelles avec rendu serveur, la navigation est instantanée pour donner l'impression d'être dans une application.

Vous pouvez initialiser un projet SvelteKit avec la commande suivante :

```bash
npm init svelte <app-name>
```

La commande va créer un nouveau projet dans le répertoire `app-name` en vous demandant si vous souhaitez mettre en place des outils de base tels que TypeScript. Choisissons le projet squelette et activons toutes les autres options (typescript, prettier, etc.)

## Configurer mdsvex

mdsvex est un préprocesseur markdown pour les composants Svelte. Ce préprocesseur vous permet d'utiliser du markdown dans vos composants Svelte et des composants Svelte dans votre markdown. Mdsvex supporte toute la syntaxe Svelte et presque toute la syntaxe markdown.

En plus de mdsvex, nous installerons également 2 autres bibliothèques afin de générer automatiquement des liens d'en-tête :

- [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings): ajoutez des liens autour de vos titres
- [rehype-slug](https://github.com/rehypejs/rehype-slug): ajoutez des identifiants à vos titres

```bash
pnpm i -D mdsvex rehype-autolink-headings rehype-slug
```

Configurez ensuite le fichier `svelte.config.js` :

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

Enfin, créez le fichier `blog.layout.svelte` avec ce balisage minimum requis. Il permet d'utiliser la configuration markdown comme accessoire :

```svelte
<script>
	const { title } = $$restProps;
</script>

{title}

<slot />
```

Et c'est tout ! Tout fichier markdown sera converti en HTML puis rendu avec la mise en page. La configuration markdown sera passée aux props `$$restProps`.

Vous pouvez alors créer un fichier markdown sous `/routes/blog/url-de-votre-article`. Les propriété de mise en page sont écrits dans la section supérieure sous la forme d'un document `yaml` et l'article se trouve en dessous :

```md
---
title: It works!
---

Yes, it does!
```

## Affichage de la liste d'articles

Pour récupérer la liste des articles, nous devons la faire passer par le mécanisme de données de SvelteKit. Pour ce faire, nous définissons un `+layout.server.ts` avec :

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

Le fait d'ajouter la logique dans le fichier +layout.svelte principal permettra d'obtenir les données n'importe où dans le site. En particulier, dans le fichier de la liste des blogs : `/blog/+page.svelte` :

```svelte
<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Publications</h1>

<ArticleList posts={data.posts} />
```

## Pour aller plus loin

- vous pouvez personnaliser le style avec cette [feuille de style de mise en page](https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/layout/blog.layout.svelte)
- vous pouvez ajouter des balises méta pour le référencement avec ce [composant Open Graph](https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/components/OpenGraph.svelte)
