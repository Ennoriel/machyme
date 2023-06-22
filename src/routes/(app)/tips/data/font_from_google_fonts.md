---
layout: tip
component: _4
title: 'Télécharger une police à partir de Google Font'
technologies:
  - font
date: Mon Feb 06 2023 08:35:48 GMT+0100 (UTC)
---

Vous n'avez pas toujours besoin d'une police personnalisée pour votre site web. Mais lorsque c'est le cas, il est parfois difficile de la télécharger.

Pour certaines raisons (performance, confidentialité des données, etc.), vous pouvez vouloir stocker la police sur votre propre serveur (ce que je recommande fortement). Si vous voulez le faire, Google Fonts vous permet de télécharger la police sous forme de fichier `.woff2`, ce qui est très pratique.

Cependant, au moment de la rédaction de cette astuce, le fichier de police que vous téléchargez directement sur Google Fonts contient toutes les gammes unicode (cyrillique, vietnamien, etc.) et vous n'aurez peut-être pas besoin de toutes les utiliser. Cela augmente le temps d'affichage du premier contenu de votre site web !

Pour télécharger le minimum de fichiers dont vous avez besoin, ajoutez les tags `link` de google fonts sur votre site web (ceux qui permettent d'ajouter la police via Google Fonts), inspectez le réseau et vérifiez l'appel d'api réellement effectué. Ouvrez un nouvel onglet, copiez cette URL. Le téléchargement du fichier de police devrait commencer immédiatement ! Copiez ce fichier dans la partie statique de votre serveur et supprimez les balises `link` de google fonts.

Copiez ensuite ceci dans votre css :

```css
html {
	font-name: '<font name>', 'sans-serif';
}
@font-face {
	font-family: <font name>;
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: url('<location to where you stored your font>') format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
		U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

Vous pouvez l'adapater si vous avez plusieurs grasses (thin, light, normal, bold) de polices ! Vous pouvez d'ailleurs le retrouver dans les requêtes faites au serveurs Google Font.

Veillez à utiliser les polices de remplacement appropriées, les plus proches de votre famille de polices !
