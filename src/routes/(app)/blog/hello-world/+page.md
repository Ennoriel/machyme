---
layout: blog
date: Fri Apr 22 2022 06:17:15 GMT+0200 (UTC)
slug: hello-world
title: 'Mon tout premier article! (suprise incluse !) 🌴'
description: Lorsque vous construisez quelque chose, la première chose à faire est d'essayer de le déployer, alors qu'il y a peu ou pas de contenu. Pourquoi ? parce que si ça ne marche pas, ce sera plus facile à déboguer. C'est la raison d'être de cet article ;)
keywords:
  - svelte
---

Ça marche !

Lors de l'écriture de cet article, j'ai voulu ajouter une surprise sous la forme d'un commentaire HTML. Mais je n'ai pas trouvé le moyen de le faire avec Svelte. J'ai essayé d'utiliser les balises `<!--` et `-->`, mais cela n'a pas fonctionné. J'ai ensuite essayé une méthode plus sophistiquée, mais elle n'a pas fonctionné non plus :

```html
<script>
	const test = '<!-- Hello World! -->';
</script>

{test}
```

Cela ne fonctionne pas car Svelte n'interprète pas le HTML à moins que vous ne le lui demandiez (heureusement !). Pour cela, il suffit d'utiliser la directive `@html` :

```html
{@html "<!-- Hello World! -->"}
```

Et voilà !

Alors, y a-t-il une surprise dans cette page ?

{@html "<!-- J'aimerais travailler avec vous ! Contactez-moi sur Github ou LinkedIn ! (liens en bas de page) -->"}
