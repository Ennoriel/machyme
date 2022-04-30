---
date: Sat Apr 30 2022 11:58:32 GMT+0200 (UTC)
slug: svelte-observers
title: 'Svelte very-utils: vh, dpr 🔍'
description: The easiest way to implement a vh observer and a dpr observer in svelte. These components are useful in almost any svelte project.
keywords:
  - svelte
  - observers
  - vh
  - dpr
---

<script>
    import Gist from '$lib/components/Gist.svelte';
</script>

## vh observer

`vh` does not work very well on all mobile browsers. This is because they include from time to time a native header with the notification icons and a native footer with navigations buttons. The footer is not always present and when it is, it is not always taken into account for the css `vh` value sometimes resulting in hiding content behind.

There is a very good article and native javascript implementation on [css-tricks](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) that I recommend to use. The corresponding implementation in svelte is below.

<Gist uri="Ennoriel/8c89dc3615292f0a40b04f4f876afd77"/>

With that implementation, you can use the `var(--vh)` value in your css.

## dpr

> The device pixel ratio `window.devicePixelRatio` is the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)

Most developers would consider two different kind of users visiting their website: those who have a retenia screen (`dpr = 2`) and the others (`dpr = 1`). To solve that, every one would be served an image twice the size of the physical space.

That assumption was not true yesterday. That is even less true today with higher resolution screens.

The dpr is a computation of two factors:

- the ratio set at the OS level (on my laptop, it is `1.5` which means that 3 physical pixels are shown as 2 CSS pixesls).
- the ratio set at the browser level (on my laptop, `80%` which means that 8 OS level pixels are shown as 10 CSS pixels).

Browsers do not compute the dpr the same way. On Firefox, there is an approximation made by the browser. With my configuration, I get a dpr of 1.2 (`1.5 x 0.8`). You do not need to know these values to use the device pixel ratio.

The dpr is really useful in two distinct cases:

- when you need to load an image with the user resolution (or with a higher resolution).
- when you need to draw lines with the same width (the `1px` that sometimes is shown as 1 physical pixel, sometimes as 2 physical pixels on the same screen).

In the first case, if you have a service that returns an image with the user resolution, you can use the `dpr` value in the url. In the second case, you can use the `dpr` value in the css: `border: {1/dpr}px solid black`. You might be warned by your IDE that the value is not correct since a length in pixel should not be decimal. But that is only correct in terms of physical pixels.

The dpr value can change through the lifetime of any page. For example, if a user feels that the text on your site is too small, he might zoom in. To take that into account, you'd have to recompute the dpr value with an observer!

<Gist uri="Ennoriel/02efec514c6107e48a88f0f84486a7ac"/>


