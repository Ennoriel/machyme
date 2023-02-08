---
layout: blog
date: Fri Apr 22 2022 06:17:15 GMT+0200 (UTC)
slug: hello-world
title: 'My first ever article! (easter-egg guaranteed) 🌴'
description: When building anything, the first thing you should do is to try deploying it, while there is few to no content. Why? because if it's not working, it'll be easier to debug. That is what this article is for ;)
keywords:
  - svelte
---

It works!

While doing this article, I wanted to add an easter egg in the form of a HTML comment. But I couldn't find a way to do it in Svelte. I tried to use the `<!--` and `-->` tags, but they didn't work. I then tried a more sophisticated method, but it didn't work either:

```html
<script>
	const test = '<!-- Hello World! -->';
</script>

{test}
```

This does not work because Svelte does not interpret the HTML unless you ask it to (thankfully!). To do so, you only have to use the `@html` directive:

```html
{@html "<!-- Hello World! -->"}
```

And voilà!

So, is there an easter egg in this page?

{@html "<!-- I'd like to work with you! Contact me on Github or LinkedIn! (links in the footer) -->"}
