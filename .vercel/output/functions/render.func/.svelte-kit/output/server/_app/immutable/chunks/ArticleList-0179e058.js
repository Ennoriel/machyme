import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "./index-b484806f.js";
const ArticleList_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-rrrtwc{margin-bottom:1rem}",
  map: null
};
const ArticleList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayPosts;
  let groups;
  let { posts } = $$props;
  let { keyword = void 0 } = $$props;
  const x = { latest: [], oldest: [] };
  const now = new Date().getTime();
  const MS_IN_30_DAYS = 1e3 * 60 * 60 * 24 * 30;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.keyword === void 0 && $$bindings.keyword && keyword !== void 0)
    $$bindings.keyword(keyword);
  $$result.css.add(css);
  displayPosts = keyword ? posts.filter((post) => post.keywords.includes(keyword)) : posts;
  groups = displayPosts.reduce((groups2, post) => {
    if (now - new Date(post.date).getTime() < MS_IN_30_DAYS) {
      groups2.latest.push(post);
    } else {
      groups2.oldest.push(post);
    }
    return groups2;
  }, x);
  return `${groups.latest.length && groups.oldest.length ? `<h1>Latest publications</h1>` : ``}
${groups.latest.length ? `<ul>${each(groups.latest, (post) => {
    var _a;
    return `<li class="${"svelte-rrrtwc"}"><a${add_attribute("href", `/blog/${post.slug}`, 0)}>${escape(post.title)}</a>, ${escape((_a = post.keywords) == null ? void 0 : _a.join(" \u2013 "))}
			</li>`;
  })}</ul>` : ``}
${groups.latest.length && groups.oldest.length ? `<h1>Published earlier</h1>` : ``}
${groups.oldest.length ? `<ul>${each(groups.oldest, (post) => {
    var _a;
    return `<li class="${"svelte-rrrtwc"}"><a${add_attribute("href", `/blog/${post.slug}`, 0)}>${escape(post.title)}</a>, ${escape((_a = post.keywords) == null ? void 0 : _a.join(" \u2013 "))}
			</li>`;
  })}</ul>` : ``}

<h1>RSS</h1>

<a href="${"/rss.xml"}">subscribe to RSS \u{1F9E0}\u{1F680}</a>`;
});
export {
  ArticleList as A
};
