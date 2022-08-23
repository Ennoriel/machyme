import { c as create_ssr_component } from "../../../_app/immutable/chunks/index-b484806f.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-obne4w{max-width:800px;margin:auto}",
  map: null
};
const Show = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-obne4w"}"><h1>Animations</h1>
	<ul><li><a href="${"/show/before-after"}">Before-After effect</a></li>
		<li><a href="${"/show/floating-squares"}">Floating squares</a></li>
		<li><a href="${"/show/scroll"}">Image effect on scroll</a></li>
		<li><a href="${"/show/moving-bg/color"}">Moving colored background</a></li>
		<li><a href="${"/show/moving-bg/image"}">Moving image background</a></li>
		<li><a href="${"/show/toto"}">Animated svg</a></li></ul>
</nav>`;
});
export {
  Show as default
};
