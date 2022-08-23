import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../_app/immutable/chunks/index-b484806f.js";
import { O as OpenGraph } from "../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import "../../_app/immutable/chunks/stores-690b6d8b.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-obspg6{max-width:800px;margin:auto}",
  map: null
};
const load = async ({ session }) => {
  const posts = session.posts;
  return { props: { posts } };
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keywords;
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  keywords = [...new Set(posts.map(({ keywords: keywords2 }) => keywords2).flat())].sort();
  return `${validate_component(OpenGraph, "OpenGraph").$$render($$result, {
    data: {
      description: "The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.",
      title: "Machyme - dev blog",
      keywords: "blog, tutorial, news, articles"
    }
  }, {}, {})}

<div class="${"svelte-obspg6"}"><h1>Hello, it&#39;s me!</h1>

	<p>A minimalist blog written by a minimalist developer that enjoys building software for a more
		sustainable &amp; accessible web.
	</p>

	<p>Built with no external fonts, stylesheets or cookies.</p>

	<p>Subjects that I already wrote about:</p>

	<ul>${each(keywords, (keyword) => {
    return `<li><a${add_attribute("href", `/blog/${keyword}`, 0)}>${escape(keyword)}</a>
			</li>`;
  })}</ul>
</div>`;
});
export {
  Routes as default,
  load
};
