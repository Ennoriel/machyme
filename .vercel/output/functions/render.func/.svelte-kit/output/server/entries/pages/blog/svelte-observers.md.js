import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-b484806f.js";
import { B as Blog_layout } from "../../../_app/immutable/chunks/blog.layout-39decd1b.js";
import "../../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import "../../../_app/immutable/chunks/stores-690b6d8b.js";
const Gist_svelte_svelte_type_style_lang = "";
const css = {
  code: "iframe.svelte-16lk2yp{border:0;width:100%;height:100%}",
  map: null
};
const Gist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uri = "" } = $$props;
  let frame;
  if ($$props.uri === void 0 && $$bindings.uri && uri !== void 0)
    $$bindings.uri(uri);
  $$result.css.add(css);
  return `<iframe title="${"Gist"}" class="${"svelte-16lk2yp"}"${add_attribute("this", frame, 0)}></iframe>`;
});
const metadata = {
  "date": "Sat Apr 30 2022 11:58:32 GMT+0200 (UTC)",
  "slug": "svelte-observers",
  "title": "vh observer & dpr observer \u{1F50D}",
  "description": "The easiest way to implement a vh observer and a dpr observer in svelte. These components are useful in almost any svelte project.",
  "keywords": ["svelte", "observers", "vh", "dpr"]
};
const Svelte_observers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Blog_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"vh-observer"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#vh-observer"}"><span class="${"icon icon-link"}"></span></a>vh observer</h2>
<p><code>vh</code> does not work very well on all mobile browsers. This is because they include from time to time a native header with the notification icons and a native footer with navigations buttons. The footer is not always present and when it is, it is not always taken into account for the css <code>vh</code> value sometimes resulting in hiding content behind.</p>
<p>There is a very good article and native javascript implementation on <a href="${"https://css-tricks.com/the-trick-to-viewport-units-on-mobile/"}" rel="${"nofollow"}">css-tricks</a> that I recommend to use. The corresponding implementation in svelte is below.</p>
${validate_component(Gist, "Gist").$$render($$result, {
        uri: "Ennoriel/8c89dc3615292f0a40b04f4f876afd77"
      }, {}, {})}
<p>With that implementation, you can use the <code>var(--vh)</code> value in your css.</p>
<h2 id="${"dpr-observer"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#dpr-observer"}"><span class="${"icon icon-link"}"></span></a>dpr observer</h2>
<blockquote><p>The device pixel ratio <code>window.devicePixelRatio</code> is the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device. <a href="${"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio"}" rel="${"nofollow"}">MDN</a></p></blockquote>
<p>Most developers would consider two different kind of users visiting their website: those who have a retenia screen (<code>dpr = 2</code>) and the others (<code>dpr = 1</code>). To solve that, every one would be served an image twice the size of the physical space.</p>
<p>That assumption was not true yesterday. That is even less true today with higher resolution screens.</p>
<p>The dpr is a computation of two factors:</p>
<ul><li>the ratio set at the OS level (on my laptop, it is <code>1.5</code> which means that 3 physical pixels are shown as 2 CSS pixesls).</li>
<li>the ratio set at the browser level (on my laptop, <code>80%</code> which means that 8 OS level pixels are shown as 10 CSS pixels).</li></ul>
<p>Browsers do not compute the dpr the same way. On Firefox, there is an approximation made by the browser. With my configuration, I get a dpr of 1.2 (<code>1.5 x 0.8</code>). You do not need to know these values to use the device pixel ratio.</p>
<p>The dpr is really useful in two distinct cases:</p>
<ul><li>when you need to load an image with the user resolution (or with a higher resolution).</li>
<li>when you need to draw lines with the same width (the <code>1px</code> that sometimes is shown as 1 physical pixel, sometimes as 2 physical pixels on the same screen).</li></ul>
<p>In the first case, if you have a service that returns an image with the user resolution, you can use the <code>dpr</code> value in the url. In the second case, you can use the <code>dpr</code> value in the css: <code>border: {1/dpr}px solid black</code>. You might be warned by your IDE that the value is not correct since a length in pixel should not be decimal. But that is only correct in terms of physical pixels.</p>
<p>The dpr value can change through the lifetime of any page. For example, if a user feels that the text on your site is too small, he might zoom in. To take that into account, you\u2019d have to recompute the dpr value with an observer!</p>
${validate_component(Gist, "Gist").$$render($$result, {
        uri: "Ennoriel/02efec514c6107e48a88f0f84486a7ac"
      }, {}, {})}`;
    }
  })}`;
});
export {
  Svelte_observers as default,
  metadata
};
