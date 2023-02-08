---
layout: tip
component: _4
title: 'Download a font from Google Font'
technologies:
  - git
date: Mon Feb 06 2023 08:35:48 GMT+0100 (UTC)
---

You don't always need a custom font for your website. But when you do, it's sometimes a pain to download it.

For some reasons (performance, data privacy, etc.) you may want to store the font on your own server (which I strongly recommend). If you want to do so, Google Fonts allow you to download the font as a `.woff2` file which is nice.

However, at the time of writing this tip, the font file you directly download on Google Fonts embeds all unicode ranges (cyrillic, vietnamese, etc.) and you might not need all of them. It increases the first content load of your website!

To download the minimum files you need, include the google fonts `link` tags to your website, inspect the network and check the api call really made. Open a new tab, copy this URL and the font file should start to download right away! Copy this file to your static part of your server and delete the google fonts `link` tags.

Then copy this into your css:

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
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

Be sure to use the proper fallback fonts, the closest one to your font family!
