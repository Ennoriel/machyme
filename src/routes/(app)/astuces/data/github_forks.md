---
layout: tip
component: _3
title: "Obtenir la liste des forks Github d'un repo"
technologies:
  - github
date: Wed Feb 01 2023 16:28:02 GMT+0100 (UTC)
---

Pour obtenir la liste des forks Github d'un dépôt, remplacez le propriétaire et le nom du dépôt dans l'url suivante et copiez-la dans un navigateur :

```
https://api.github.com/repos/<propriétaire>/<nom du repo>/forks
```

Voici un <a href="https://api.github.com/repos/Ennoriel/svelte-awesome-color-picker/forks" target="_blank" rel="noreferrer">exemple pour la librairie svelte-awesome-color-picker</a>.
