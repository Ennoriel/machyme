import { c as create_ssr_component, v as validate_component, d as escape } from "../../../_app/immutable/chunks/index-b484806f.js";
import { O as OpenGraph } from "../../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import { A as ArticleList } from "../../../_app/immutable/chunks/ArticleList-0179e058.js";
import "../../../_app/immutable/chunks/stores-690b6d8b.js";
const prerender = true;
const load = async ({ session, params }) => {
  return {
    props: {
      posts: session.posts,
      keyword: params.keyword
    }
  };
};
const U5Bkeywordu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let { keyword } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.keyword === void 0 && $$bindings.keyword && keyword !== void 0)
    $$bindings.keyword(keyword);
  return `${validate_component(OpenGraph, "OpenGraph").$$render($$result, {
    data: {
      description: "The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.",
      title: "Machyme - dev blogs",
      keywords: "blog, tutorial, news, articles"
    }
  }, {}, {})}

<h1>Blog articles about ${escape(keyword)}</h1>

${validate_component(ArticleList, "ArticleList").$$render($$result, { posts, keyword }, {}, {})}`;
});
export {
  U5Bkeywordu5D as default,
  load,
  prerender
};
