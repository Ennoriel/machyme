import { c as create_ssr_component, f as compute_rest_props, v as validate_component, h as add_styles, d as escape } from "./index-b484806f.js";
import { O as OpenGraph } from "./OpenGraph-d7d8ef87.js";
const blog_layout = "";
const blog_layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-acqmp{border:none;background-color:var(--primary-color);color:white;cursor:pointer;padding:0.3rem 0.6rem;border-radius:4px;text-decoration:none;text-align:center}button.svelte-acqmp{border:none;background-color:var(--primary-color);color:white;cursor:pointer;padding:0.3rem 0.6rem;border-radius:4px;text-decoration:none}nav.svelte-acqmp{display:flex;gap:8px;justify-content:center}",
  map: null
};
const Blog_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedDate;
  let $$restProps = compute_rest_props($$props, []);
  const { date, title, description, keywords } = $$restProps;
  $$result.css.add(css);
  formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
  return `${validate_component(OpenGraph, "OpenGraph").$$render($$result, {
    data: {
      title,
      description,
      keywords,
      type: "article"
    }
  }, {}, {})}

<p${add_styles({ "text-align": `right` })}>published ${escape(formattedDate)}</p>
<h1>${escape(title)}</h1>

${slots.default ? slots.default({}) : ``}

<nav aria-label="${"secondary"}" class="${"svelte-acqmp"}"><button class="${"svelte-acqmp"}">Scroll to the top of the page
	</button>

	<a href="${"/blog"}" class="${"svelte-acqmp"}">Go back to the list of articles</a>
</nav>`;
});
export {
  Blog_layout as B
};
