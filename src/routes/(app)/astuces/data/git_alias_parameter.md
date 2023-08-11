---
layout: tip
component: _2
title: 'Définir un alias git avec un paramètre'
technologies:
  - git
date: Sun Jan 29 2023 13:30:23 GMT+0100 (UTC)
---

Si l'argument vient en argument final de la commande git, vous pouvez définir l'alias comme suit :

```shell
git config --global alias.<nom d\'alias> '<command>'

# exemple
git config --global alias.cm 'commit -m'

# utilisation
git cm "message de commit"
```

Sinon, deux solutions s'offrent à vous. La première permet de définir l'alias en ligne de commande (attention aux deux ";") :

```shell
git config --global alias.<nom d\'alias> '!f() { <commande avec $1 pour le premier paramètres>; }; f'

# exemple
git config --global alias.aliasd '!f() { git config --global --unset alias.$1; }; f'

# utilisation
git aliasd <nom d\'alias>
```

La seconde est plus concise mais devra directement être ajouté dans votre fichier `.gitconfig` :

```shell
[alias]
	<nom d'alias> = "!<commande avec $1 pour le premier paramètres>"

# exemple
  aliasd '!git config --global --unset alias.$1'

# utilisation
git aliasd <nom d'alias>
```
