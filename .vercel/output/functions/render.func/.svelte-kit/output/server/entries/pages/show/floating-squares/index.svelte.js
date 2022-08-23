import { c as create_ssr_component, b as add_attribute, v as validate_component, e as each, h as add_styles } from "../../../../_app/immutable/chunks/index-b484806f.js";
import { C as Canvas } from "../../../../_app/immutable/chunks/Canvas-5ef3cfb6.js";
const Square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let x;
  let y;
  let angle;
  let size;
  let halfSize;
  let width;
  let { ctx } = $$props;
  let { rect } = $$props;
  let { redraw } = $$props;
  let { config } = $$props;
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  if ($$props.rect === void 0 && $$bindings.rect && rect !== void 0)
    $$bindings.rect(rect);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  x = rect.width * config.center.x * window.devicePixelRatio;
  y = rect.height * config.center.y * window.devicePixelRatio;
  angle = config.angle * Math.PI / 180;
  size = config.size;
  halfSize = size / 2;
  width = config.width;
  {
    if (ctx && redraw) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = config.color;
      ctx.rotate(angle);
      ctx.fillRect(-halfSize, -halfSize, width, size);
      ctx.fillRect(-halfSize, -halfSize, size, width);
      ctx.fillRect(-halfSize, halfSize, size, width);
      ctx.fillRect(halfSize, -halfSize, width, size);
      ctx.restore();
    }
  }
  return ``;
});
const SquareBg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-cfkumf{margin:-16px}.max-width.svelte-cfkumf{max-width:800px;margin:auto;padding:16px}.wrapper.svelte-cfkumf canvas{position:absolute;pointer-events:none}",
  map: null
};
const SquareBg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { squares } = $$props;
  let ctx = void 0;
  let { redraw } = $$props;
  let wrapper;
  let getHeight = () => 1e3 - 60;
  if ($$props.squares === void 0 && $$bindings.squares && squares !== void 0)
    $$bindings.squares(squares);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (redraw) {
        ctx == null ? void 0 : ctx.clearRect(0, 0, 1e6, 1e6);
      }
    }
    $$rendered = `<div class="${"wrapper svelte-cfkumf"}"${add_attribute("this", wrapper, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { getHeight, ctx, redraw }, {
      ctx: ($$value) => {
        ctx = $$value;
        $$settled = false;
      },
      redraw: ($$value) => {
        redraw = $$value;
        $$settled = false;
      }
    }, {
      default: ({ ctx: ctx2, redraw: redraw2, rect }) => {
        return `${ctx2 && rect ? `${each(squares, (square) => {
          return `${validate_component(Square, "Square").$$render($$result, { ctx: ctx2, redraw: redraw2, rect, config: square }, {}, {})}`;
        })}` : ``}`;
      }
    })}

	<div class="${"max-width svelte-cfkumf"}"${add_styles({ "height": `${getHeight()}px` })}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const _customize_svelte_svelte_type_style_lang = "";
const Test = "/_app/immutable/assets/home-8aec6f54.svg";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-fk4ex1{margin-top:200px}.subtitle.svelte-fk4ex1{color:var(--color-blue-1)}",
  map: null
};
const Floating_squares = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let squares;
  let redraw;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SquareBg, "SquareBg").$$render($$result, { squares, redraw }, {
      redraw: ($$value) => {
        redraw = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"svelte-fk4ex1"}"><h1>Maxime Dupont \xB7 <span class="${"subtitle svelte-fk4ex1"}">personal website</span></h1>
		<p>Where I write, share and present some of my works.</p></div>

	<img${add_attribute("src", Test, 0)}>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Floating_squares as default
};
