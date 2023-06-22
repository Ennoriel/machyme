---
layout: blog
date: Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)
slug: svelte-inkjs
title: 'Écrire des histoires interactives avec InkJs et SvelteKit 🎢'
description: 'Créez une histoire interactive ou le visiteur et le héros de son parcours, avec InkJs et SvelteKit.'
keywords:
  - svelte
  - inkjs
---

## Qu'est-ce que InkJs ?

[InkJs](https://github.com/y-lohse/inkjs) est le portage javascript de la bibliothèque Ink. [Ink](https://github.com/inkle/ink) est un langage de script pour écrire des récits interactifs, aussi bien pour les jeux centrés sur le texte que pour les jeux plus graphiques qui contiennent des histoires très ramifiées. Il est conçu pour être facile à apprendre, mais avec des fonctionnalités suffisamment puissantes pour permettre un niveau avancé de structuration.

## Setup

### Démarrer un nouveau projet SvelteKit

```shell
mkdir my-app
npm init svelte .
# choisissez votre option de projet (Skeleton, Typescript, ESLint, Prettier, Playwright, etc.)
npm i
```

### Intégrer InkJs

A partir du fichier app.html, nous pouvons télécharger une version UMD d'InkJs. Vous pouvez utiliser un CDN ou télécharger une version depuis le registre npmjs. Bien que la première option soit plus facile, vous aurez plus de difficultés à garder toutes vos dépendances à jour puisque vous les aurez définies à différents endroits. J'ai choisi la deuxième option :

1. Téléchargez la bibliothèque InkJs depuis le registre npmjs.

```shell
npm i -D inkjs
```

2. Modifiez le script npm prepare pour copier la librairie InkJs dans le dossier `static`. Avec ce script, lorsque quelqu'un installe les dépendances de votre projet avec `npm i`, la bibliothèque InkJs sera copiée dans le dossier `static`. De plus, vous pouvez l'ajouter au fichier `.gitignore` si vous ne voulez pas qu'il soit commité dans votre repo git.

```json
{
	"scripts": {
		"prepare": "svelte-kit sync && cp node_modules/inkjs/dist/ink.js ./static/ink.js"
	}
}
```

3. Chargez la bibliothèque InkJs dans le fichier `app.html`.

```html
<!-- ajouter cette ligne dans la balise head -->
<script src="%sveltekit.assets%/ink.js"></script>
```

4. Créez un fichier d'histoire. Pour les besoins de cet article, j'ai choisi d'exporter un fichier `.ts` car il est plus facile à intégrer, mais vous pouvez utiliser un fichier json ou un endpoint. Vous pouvez trouver un exemple d'histoire [ici] (https://github.com/y-lohse/inkjs/blob/master/templates/browser_serverless/story.js).

```typescript
// lib/story.ts
const story = { ... };

export default JSON.stringify(story);
```

5. Importez et utilisez l'histoire dans le fichier de route `index.svelte` :

```svelte
<script>
	import { onMount } from 'svelte';
	import storyJson from '..$lib/story';

	let story;
	let storyContainer;

	onMount(() => {
		// L'histoire peut être chargée à partir d'un point final ou d'un autre endroit.
		story = new window.inkjs.Story(storyJson);
	});

	$: if (story && storyContainer) continueStory();

	/**
	 * Le code ci-dessous est copié-collé à partir des exemples Ink.js
	 * https://github.com/y-lohse/inkjs/blob/master/templates/browser_with_server/main.js
	 */
	function showAfter(delay, el) {
		/** ... */
	}
	function scrollToBottom() {
		/** ... */
	}
	function continueStory() {
		/** ... */
	}
</script>

<div bind:this={storyContainer} />
```

Et voilà ! Vous pouvez maintenant commencer à écrire votre histoire.
