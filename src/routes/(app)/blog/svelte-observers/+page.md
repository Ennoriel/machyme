---
layout: blog
date: Sat Apr 30 2022 11:58:32 GMT+0200 (UTC)
slug: svelte-observers
title: "Réglez les problèmes d'affichage avec les observeurs customisés (vh et dpr) 🔍"
description: "La façon la plus simple d'implémenter un observateur vh et un observateur dpr dans Svelte. Ces composants sont utiles dans presque tous les projets svelte."
keywords:
  - svelte
  - observers
---

<script>
    import Gist from '$lib/components/blog/Gist.svelte';
</script>

## observeur vh

L'unité css `vh` ne fonctionne pas très bien sur tous les navigateurs mobiles. Cela est dû au fait qu'ils incluent de temps en temps un la barre de navigation supérieure ou inférieure. Celle inférieure n'est pas toujours présente et lorsqu'elle l'est, ellle n'est pas toujours prise en compte dans la valeur css `vh`. Cela peut conduire à un contenu caché en dessous.

Il y a un très bon article et une implémentation native en javascript sur [css-tricks] (https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) que je recommande d'utiliser. L'implémentation correspondante dans svelte est ci-dessous.

<Gist uri="Ennoriel/8c89dc3615292f0a40b04f4f876afd77"/>

Avec cette implémentation, vous pouvez utiliser la valeur `var(--vh)` dans votre css n'importe où dans votre application.

## observeur dpr

> Le rapport de pixels du périphérique `window.devicePixelRatio` est le rapport entre la résolution en pixels physiques et la résolution en pixels CSS pour un périphérique d'affichage donné. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)

Le dpr est un calcul de deux facteurs :

- le ratio défini au niveau du système d'exploitation (sur mon ordinateur portable, il est de 1,5, ce qui signifie que 3 pixels physiques sont affichés sous la forme de 2 pixels CSS).
- le rapport défini au niveau du navigateur (sur mon ordinateur portable, il est de `80%`, ce qui signifie que 8 pixels au niveau du système d'exploitation sont affichés sous la forme de 10 pixels CSS).

Les navigateurs ne calculent pas le dpr de la même manière. Sur Firefox, il y a une approximation faite par le navigateur. Avec ma configuration, j'obtiens un dpr de 1,2 (`1,5 x 0,8`). Il n'est pas nécessaire de connaître ces valeurs pour utiliser le rapport de pixel de l'appareil.

Le dpr est vraiment utile lorsque vous avez besoin de tracer des lignes de même largeur (le `1px` qui est parfois affiché comme 1 pixel physique, parfois comme 2 pixels physiques sur le même écran).

Vous pouvez utiliser la valeur `dpr` dans le css : `border : {1/dpr}px solid black`.

La valeur dpr peut changer au cours de la vie d'une page. Par exemple, si un utilisateur estime que le texte de votre site est trop petit, il peut l'agrandir. Pour en tenir compte, il faudrait recalculer la valeur dpr à l'aide d'un observeur !

Voici l'implémentation avec Svelte :

<Gist uri="Ennoriel/02efec514c6107e48a88f0f84486a7ac"/>
