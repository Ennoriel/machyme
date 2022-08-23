import { c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, v as validate_component } from "../../_app/immutable/chunks/index-b484806f.js";
import { p as page } from "../../_app/immutable/chunks/stores-690b6d8b.js";
const VhObserver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-1hla01n{display:flex;justify-content:space-around;align-items:center;height:60px;max-width:800px;margin:auto}hr.svelte-1hla01n{border:0;border-bottom:0.1px solid var(--text-color)}a.svelte-1hla01n{height:40px;line-height:40px;color:inherit;text-decoration:none}@media(min-width: 768px){a.svelte-1hla01n{padding:0 1rem;letter-spacing:0.5rem}a.svelte-1hla01n:hover{color:var(--primary-color)}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = [
    { label: "\u{1F3E1}Home", path: "/" },
    { label: "\u{1F4DC}Blog", path: "/blog" },
    { label: "\u{1F52D}Show", path: "/show" }
  ];
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<nav aria-label="${"primary"}" class="${"svelte-1hla01n"}">${each(routes, (route) => {
    let active = $page.url.pathname === route.path;
    return `
		<a${add_attribute("href", route.path, 0)}${add_attribute("aria-current", active && "page" || void 0, 0)} class="${"svelte-1hla01n"}">${escape(route.label)}
		</a>`;
  })}</nav>
<hr class="${"svelte-1hla01n"}">`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-khypal{height:40px;line-height:40px;display:flex;justify-content:center}ul.svelte-khypal{margin:0;padding:0}li.svelte-khypal{display:inline;list-style:none;margin:0 0.5rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-khypal"}"><ul class="${"svelte-khypal"}"><li class="${"svelte-khypal"}"><a target="${"_blank"}" href="${"https://www.linkedin.com/in/maxime-dupont-dev/"}">\u{1F919} LinkedIn</a></li>
		<li class="${"svelte-khypal"}"><a target="${"_blank"}" href="${"https://github.com/Ennoriel/"}">\u{1F419} Github</a></li></ul>
</footer>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `main.svelte-1tvw6kv{width:100%;padding:16px;min-height:calc(var(--vh, 1vh) * 100 - 100px)}*{margin:0;padding:0;text-decoration-thickness:0.01em;box-sizing:border-box}a{color:var(--primary-color);transition:color 0.1s;text-decoration:none}body{--color-blue-1:#1C2EFF;--color-blue-2:#000EB2;--color-yellow-1:#FFED32;--color-yellow-2:#B2A642;--primary-color:#ed1f3a;--secondary-color:#002395;--text-color:#555;--focus-color:var(--primary-color);--bg-color:#f7f7fa;--header-height:60px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;font-size:16px;line-height:1.5em;color:var(--text-color);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23dce5ff' fill-opacity='0.41' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")}ul{padding-left:3rem;list-style-type:'\u2013  ';margin:1rem 0}button{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;font-weight:300;font-size:16px}h1,h2,h3,h4{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;font-weight:400;margin:1rem 0 0.5rem 0;line-height:1}p{margin:1rem 0}h1{font-size:30px}h2{font-size:24px}:focus-visible{outline:2px solid var(--focus-color);outline-offset:2px}.input-like{padding:10px 20px 10px 10px;background-color:white;border:none;border-radius:3px;box-shadow:0 0 5px #ccc;cursor:pointer;transition:background-color 0.2s ease-in-out}.input-like:hover{background-color:#ddd}*{--dark:#ccc;--light:#00000000;scrollbar-width:thin;scrollbar-color:var(--dark) var(--light);scroll-behavior:smooth}*::-webkit-scrollbar-track{background:var(--light)}*::-webkit-scrollbar-thumb{background-color:var(--dark)}*::-webkit-scrollbar{width:7px}`,
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(VhObserver, "VhObserver").$$render($$result, {}, {}, {})}

${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<main class="${"svelte-1tvw6kv"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  _layout as default
};
