import { c as create_ssr_component, d as escape } from "../../_app/immutable/chunks/index-b484806f.js";
const load = ({ error, status }) => {
  {
    return { status: 301, redirect: "/" };
  }
};
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<h1>${escape(title)}</h1>`;
});
export {
  _error as default,
  load
};
