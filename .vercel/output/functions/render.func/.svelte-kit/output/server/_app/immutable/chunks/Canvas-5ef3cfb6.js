import { c as create_ssr_component, b as add_attribute } from "./index-b484806f.js";
const Canvas_svelte_svelte_type_style_lang = "";
const css = {
  code: "canvas.svelte-bcx88k{width:100%;display:block}",
  map: null
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { canvas = void 0 } = $$props;
  let { ctx = void 0 } = $$props;
  let { rect = void 0 } = $$props;
  let { redraw = 0 } = $$props;
  let { pos = { x: -1e4, y: -1e4 } } = $$props;
  let { mouseGenerateRedraw = false } = $$props;
  let { getWidth = () => {
    var _a, _b;
    return (_b = (_a = document == null ? void 0 : document.body) == null ? void 0 : _a.getBoundingClientRect()) == null ? void 0 : _b.width;
  } } = $$props;
  let { getHeight = (width) => width ? Math.max(300, width / 4) : 500 } = $$props;
  function resize() {
    if (canvas) {
      const width = getWidth();
      const height = getHeight(width);
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      redraw++;
    }
  }
  if ($$props.canvas === void 0 && $$bindings.canvas && canvas !== void 0)
    $$bindings.canvas(canvas);
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  if ($$props.rect === void 0 && $$bindings.rect && rect !== void 0)
    $$bindings.rect(rect);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  if ($$props.mouseGenerateRedraw === void 0 && $$bindings.mouseGenerateRedraw && mouseGenerateRedraw !== void 0)
    $$bindings.mouseGenerateRedraw(mouseGenerateRedraw);
  if ($$props.getWidth === void 0 && $$bindings.getWidth && getWidth !== void 0)
    $$bindings.getWidth(getWidth);
  if ($$props.getHeight === void 0 && $$bindings.getHeight && getHeight !== void 0)
    $$bindings.getHeight(getHeight);
  if ($$props.resize === void 0 && $$bindings.resize && resize !== void 0)
    $$bindings.resize(resize);
  $$result.css.add(css);
  ctx = canvas == null ? void 0 : canvas.getContext("2d");
  {
    if (ctx)
      resize();
  }
  rect = canvas == null ? void 0 : canvas.getBoundingClientRect();
  return `

<canvas height="${"100"}" class="${"svelte-bcx88k"}"${add_attribute("this", canvas, 0)}></canvas>
${ctx ? `${slots.default ? slots.default({
    ctx,
    rect,
    redraw,
    pos,
    width: (rect == null ? void 0 : rect.width) || 0
  }) : ``}` : ``}`;
});
export {
  Canvas as C
};
