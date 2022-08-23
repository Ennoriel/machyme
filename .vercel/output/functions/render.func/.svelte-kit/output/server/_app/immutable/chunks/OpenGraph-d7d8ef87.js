import { c as create_ssr_component, a as subscribe, d as escape, b as add_attribute } from "./index-b484806f.js";
import { p as page } from "./stores-690b6d8b.js";
const OpenGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { description, title, keywords = "dev environment, developer environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review", type = "website" } = data || {};
  const url = $page.url.toString();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-1jor9ag"><meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1jor9ag"><meta property="${"og:site_name"}" content="${"Machyme"}" data-svelte="svelte-1jor9ag"><meta property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1jor9ag"><meta property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-1jor9ag"><meta property="${"og:type"}"${add_attribute("content", type, 0)} data-svelte="svelte-1jor9ag"><meta property="${"og:url"}"${add_attribute("content", url, 0)} data-svelte="svelte-1jor9ag">`, ""}`;
});
export {
  OpenGraph as O
};
