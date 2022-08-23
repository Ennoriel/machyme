import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../_app/immutable/chunks/index-b484806f.js";
import { C as Canvas } from "../../../../_app/immutable/chunks/Canvas-5ef3cfb6.js";
import { P as Point, D as DistributiveGrid } from "../../../../_app/immutable/chunks/Point-e996a246.js";
import "chyme";
const ImgPoint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ctx } = $$props;
  let { pos } = $$props;
  let { redraw } = $$props;
  let { size } = $$props;
  let { i } = $$props;
  let { j } = $$props;
  let { focusSize } = $$props;
  let { restSize } = $$props;
  let { threshold } = $$props;
  let { width } = $$props;
  let { margin } = $$props;
  const img = new Image();
  img.src = "/art.svg";
  function draw(ratio, gap, squareSize) {
    const imgRatio = width / 1150 * window.devicePixelRatio;
    ctx.clearRect(margin.width + size * i, margin.height + size * j, size, size);
    ctx.drawImage(img, (size * i + gap) / imgRatio, (size * j + gap) / imgRatio, squareSize / imgRatio, squareSize / imgRatio, margin.width + size * i + gap, margin.height + size * j + gap, squareSize, squareSize);
  }
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.j === void 0 && $$bindings.j && j !== void 0)
    $$bindings.j(j);
  if ($$props.focusSize === void 0 && $$bindings.focusSize && focusSize !== void 0)
    $$bindings.focusSize(focusSize);
  if ($$props.restSize === void 0 && $$bindings.restSize && restSize !== void 0)
    $$bindings.restSize(restSize);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  return `${validate_component(Point, "Point").$$render($$result, {
    pos,
    redraw,
    size,
    i,
    j,
    focusSize,
    restSize,
    draw,
    threshold
  }, {}, {})}`;
});
const image_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-jktuw{display:flex;flex-wrap:wrap;justify-content:center}label.svelte-jktuw{display:flex;align-items:center;gap:8px;box-shadow:0 0 4px #ddd;padding:8px 16px;margin:8px;background-color:white}",
  map: null
};
const Image$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let SIZE = 60;
  let REST_SIZE = 5;
  let FOCUS_SIZE = 55;
  let threshold = 500;
  $$result.css.add(css);
  return `${validate_component(Canvas, "Canvas").$$render($$result, { mouseGenerateRedraw: true }, {}, {
    default: ({ ctx, rect, redraw, pos, width }) => {
      return `${validate_component(DistributiveGrid, "DistributiveGrid").$$render($$result, { rect, size: SIZE }, {}, {
        default: ({ i, j, margin }) => {
          return `${ctx ? `${validate_component(ImgPoint, "ImgPoint").$$render($$result, {
            ctx,
            pos,
            redraw,
            width,
            i,
            j,
            margin,
            size: SIZE,
            restSize: REST_SIZE,
            focusSize: FOCUS_SIZE,
            threshold
          }, {}, {})}` : ``}`;
        }
      })}`;
    }
  })}

<p>Inspiration from <a href="${"https://loke.dev/"}">Loke Carlsson blog</a>.
</p>
<div class="${"svelte-jktuw"}"><label class="${"svelte-jktuw"}">Size of a grid cell
		<input type="${"range"}" min="${"30"}" max="${"100"}" step="${"5"}"${add_attribute("value", SIZE, 0)}></label>
	<label class="${"svelte-jktuw"}">Size of a square
		<input type="${"range"}" min="${"0"}" max="${"100"}" step="${"5"}"${add_attribute("value", REST_SIZE, 0)}></label>
	<label class="${"svelte-jktuw"}">Size of a focused square
		<input type="${"range"}" min="${"0"}" max="${"100"}" step="${"5"}"${add_attribute("value", FOCUS_SIZE, 0)}></label>
	<label class="${"svelte-jktuw"}">Effect threshold
		<input type="${"range"}" min="${"50"}" max="${"750"}" step="${"50"}"${add_attribute("value", threshold, 0)}></label>
</div>`;
});
export {
  Image$1 as default
};
