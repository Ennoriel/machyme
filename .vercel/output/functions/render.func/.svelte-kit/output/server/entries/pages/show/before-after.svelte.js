import { c as create_ssr_component, h as add_styles, b as add_attribute } from "../../../_app/immutable/chunks/index-b484806f.js";
import "chyme";
const beforeAfter_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1q6q65f{position:relative;width:100%;max-width:700px;margin:auto;aspect-ratio:1150 / 680}.slider.svelte-1q6q65f,.slider.svelte-1q6q65f:after,img.svelte-1q6q65f{position:absolute;top:0;bottom:0}.slider.svelte-1q6q65f{left:calc(var(--clip) - 6px);width:10px}.slider.svelte-1q6q65f,.icon.svelte-1q6q65f{cursor:col-resize}.slider.svelte-1q6q65f:active,.icon.svelte-1q6q65f:active{cursor:grabbing}.slider.svelte-1q6q65f:after{content:'';left:4.5px;width:1px;background-color:black}.icon.svelte-1q6q65f{position:absolute;top:50%;transform:translateY(-50%);user-select:none}.icon-left.svelte-1q6q65f{left:calc(var(--clip) - 25px)}.icon-right.svelte-1q6q65f{left:calc(var(--clip) + 10px)}img.svelte-1q6q65f{inset:0;width:100%;max-width:100%;user-select:none}.overlay.svelte-1q6q65f{clip-path:polygon(var(--clip) 0, 100% 0, 100% 100%, var(--clip) 100%)}",
  map: null
};
const Before_after = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wrapper;
  let clip = 34;
  $$result.css.add(css);
  return `

<div class="${"wrapper svelte-1q6q65f"}"${add_styles({ "--clip": `${clip}%` })}${add_attribute("this", wrapper, 0)}><img src="${"/art.svg"}" alt="${"random ellipsis that unblurs as you scroll by"}" class="${"svelte-1q6q65f"}"${add_styles({ "filter": `blur(4px)` })}>
	<img class="${"overlay svelte-1q6q65f"}" src="${"/art.svg"}" alt="${"random ellipsis that unblurs as you scroll by"}">
	<div class="${"slider svelte-1q6q65f"}"></div>
	<span class="${"icon icon-left svelte-1q6q65f"}">\u2190</span>
	<span class="${"icon icon-right svelte-1q6q65f"}">\u2192</span>
</div>`;
});
export {
  Before_after as default
};
