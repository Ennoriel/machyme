---
date: Fri Apr 22 2022 06:17:15 GMT+0200 (UTC)
slug: hello-world
title: 'Hello World! (easter-egg guaranteed) 🌴'
description: The first commit, the first time, the first article.
keywords:
  - svelte
---

It works!

While doing this article, I wanted to add an easter egg in the form of a HTML comment. But I couldn't find a way to do it. I tried to use the `<!--` and `-->` tags, but they didn't work. I then tried a more sophisticated method, but it didn't work either:

```html
<script>
	const test = '<!-- Hello World! -->';
</script>

{test}
```

One solution is not that far, you'd have to use the `@html` directive:

```html
{@html "<!-- Hello World! -->"}
```

And voilà!

So, is there an easter egg in this page?

{@html "<!-- I'd like to work with you! Contact me on Github or LinkedIn! (links in the footer) -->"}
