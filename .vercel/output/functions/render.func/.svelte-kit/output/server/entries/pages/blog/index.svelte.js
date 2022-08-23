import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-b484806f.js";
import { O as OpenGraph } from "../../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import { A as ArticleList } from "../../../_app/immutable/chunks/ArticleList-0179e058.js";
import "../../../_app/immutable/chunks/stores-690b6d8b.js";
const load = async ({ session }) => {
  const posts = session.posts;
  return { props: { posts } };
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `${validate_component(OpenGraph, "OpenGraph").$$render($$result, {
    data: {
      description: "The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.",
      title: "Machyme - dev blog",
      keywords: "blog, tutorial, news, articles"
    }
  }, {}, {})}

${validate_component(ArticleList, "ArticleList").$$render($$result, { posts }, {}, {})}`;
});
export {
  Blog as default,
  load
};
