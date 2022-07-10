---
date: Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)
slug: svelte-inkjs
title: 'Write interactive stories with InkJs & SvelteKit 🎢'
description: 'How to integrate InkJs in a new skeleton SvelteKit project: a fast and easy way to start an interactive narrative based story website.'
keywords:
  - svelte
  - inkjs
  - 'universal module definition (UMD)'
---

## What is InkJs?

InkJs is javascript port of [Ink](https://github.com/y-lohse/inkjs) library. [Ink](https://github.com/inkle/ink) is inkle's scripting language for writing interactive narrative, both for text-centric games as well as more graphical games that contain highly branching stories. It's designed to be easy to learn, but with powerful enough features to allow an advanced level of structuring.

## Setup

### Start a fresh SvelteKit project

```shell
mkdir my-app
npm init svelte .
# choose your project options (Skeleton, Typescript, ESLint, Prettier, Playwright, etc.)
npm i
```

### Integrate InkJs

From the app.html file, we can download a UMD version of InkJs. You can either use a CDN or download a version from the npmjs registry. While the first one is easier, you'll have more difficulties to keep all your dependencies up to date since you'll have them defined at different places. I went with the second option:

1. Download the InkJs library from the npmjs registry.

```shell
npm i -D inkjs
```

2. Modify the npm prepare script to copy the InkJs library to the static folder. With this script set, when someone installs the dependencies of your project with `npm i`, the InkJs library will be copied to the static folder. Additionally, you can add it to the `.gitignore` file if you don't want to track it in the repository.

```json
{
	"scripts": {
		"prepare": "svelte-kit sync && cp node_modules/inkjs/dist/ink.js ./static/ink.js"
	}
}
```

3. Load the InkJs library in the `app.html` file.

```html
<!-- add this line in the head tag -->
<script src="%sveltekit.assets%/ink.js"></script>
```

4. Create a story file. For the purpose of this article, I chose to export a `.ts` file as it is easier to integrate but fill free to use a json file or an endpoint. You can find an example story [here](https://github.com/y-lohse/inkjs/blob/master/templates/browser_serverless/story.js).

```typescript
// lib/story.ts
const story = { ... };

export default JSON.stringify(story);
```

5. Import and use the story in the `index.svelte` route file:

```svelte
<script>
	import { onMount } from 'svelte';
	import storyJson from '.$lib/story';

	let story;
	let storyContainer;

	onMount(() => {
		// The story could be loaded from an endpoint or somewhere else
		story = new window.inkjs.Story(storyJson);
	});

	$: if (story && storyContainer) continueStory();

	/**
	 * The code below is copy-pasted from the Ink.js examples
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

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div bind:this={storyContainer} />
```

And voilà! You can now start writing your story.
