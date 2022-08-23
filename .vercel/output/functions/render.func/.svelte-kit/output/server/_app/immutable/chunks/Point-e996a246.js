import { c as create_ssr_component, e as each, v as validate_component } from "./index-b484806f.js";
import { floor, floor2 } from "chyme";
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `${width && height ? `${each(Array(width), (_, i) => {
    return `${each(Array(height), (_2, j) => {
      return `${slots.default ? slots.default({ i, j }) : ``}`;
    })}`;
  })}` : ``}`;
});
const DistributiveGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size } = $$props;
  let { rect } = $$props;
  let width;
  let height;
  let margin;
  function resize() {
    if (rect && size) {
      width = Math.floor(window.devicePixelRatio * rect.width / size);
      height = Math.floor(window.devicePixelRatio * rect.height / size);
      margin = {
        width: floor(window.devicePixelRatio * rect.width % size / 2, 1),
        height: floor(window.devicePixelRatio * rect.height % size / 2, 1)
      };
    }
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.rect === void 0 && $$bindings.rect && rect !== void 0)
    $$bindings.rect(rect);
  {
    if (rect && size)
      resize();
  }
  return `

${validate_component(Grid, "Grid").$$render($$result, { width, height }, {}, {
    default: ({ i, j }) => {
      return `${slots.default ? slots.default({ i, j, margin }) : ``}`;
    }
  })}`;
});
const Point = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let center;
  let { pos } = $$props;
  let { redraw } = $$props;
  let { size } = $$props;
  let { i } = $$props;
  let { j } = $$props;
  let { focusSize } = $$props;
  let { restSize } = $$props;
  let { threshold } = $$props;
  let { draw } = $$props;
  const img = new Image();
  img.src = "/wallpaper.jpg";
  let distanceX, distanceY, distance, ratio, position, squareSize, flooredGap, flooredSquareSize;
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
  if ($$props.draw === void 0 && $$bindings.draw && draw !== void 0)
    $$bindings.draw(draw);
  center = { x: size * (i + 0.5), y: size * (j + 0.5) };
  {
    if (redraw) {
      distanceX = Math.abs(center.x - pos.x * window.devicePixelRatio);
      distanceY = Math.abs(center.y - pos.y * window.devicePixelRatio);
      distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      ratio = distance < threshold ? 1 - distance / threshold : 0;
      position = (size - (restSize - (restSize - focusSize) * ratio)) / 2;
      squareSize = size - 2 * position;
      flooredSquareSize = floor2(squareSize);
      flooredGap = (size - flooredSquareSize) / 2;
      draw(ratio, flooredGap, flooredSquareSize);
    }
  }
  return ``;
});
export {
  DistributiveGrid as D,
  Point as P
};
