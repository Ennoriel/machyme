import { c as create_ssr_component, h as add_styles, b as add_attribute, d as escape, v as validate_component } from "../../../../_app/immutable/chunks/index-b484806f.js";
import { floor } from "chyme";
const _scrollImg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-ti66nn{width:100%;transition:filter 0.1s}summary.svelte-ti66nn{color:var(--primary-color)}pre.svelte-ti66nn{overflow-x:auto;padding-bottom:8px;margin-bottom:8px}strong.svelte-ti66nn{font-weight:900}label.svelte-ti66nn{display:block}",
  map: null
};
const ScrollImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let res;
  let filter;
  let { config } = $$props;
  let i;
  let j = 1e4;
  let a = config.a.default;
  let b = config.b.default;
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$1);
  res = Math.max(0, floor(a * j + b, 0.1));
  filter = `${config.effect.name}(${res}${config.effect.unit})`;
  return `

<img src="${"/art.svg"}" alt="${"random ellipsis that unblurs as you scroll by"}" class="${"svelte-ti66nn"}"${add_styles({ filter })}${add_attribute("this", i, 0)}>
<details><summary class="${"svelte-ti66nn"}">${escape(config.effect.name)} - more details</summary>
	<pre class="${"svelte-ti66nn"}">middle of the image is at <strong class="${"svelte-ti66nn"}">j=${escape(j)}px</strong> from to top of your screen
image is blurred with the following formula:
${escape(config.effect.name)} = a * j + b
${escape(" ".repeat(config.effect.name.length))} = ${escape(a)} * ${escape(j)} + ${escape(b)}
${escape(" ".repeat(config.effect.name.length))} = ${escape(res)}${escape(config.effect.unit)}</pre>
	<label class="${"svelte-ti66nn"}">a
		<input type="${"range"}"${add_attribute("min", config.a.min, 0)}${add_attribute("max", config.a.max, 0)}${add_attribute("step", config.a.step, 0)}${add_attribute("value", a, 0)}></label>
	<label class="${"svelte-ti66nn"}">b
		<input type="${"range"}"${add_attribute("min", config.b.min, 0)}${add_attribute("max", config.b.max, 0)}${add_attribute("step", config.b.step, 0)}${add_attribute("value", b, 0)}></label>
</details>`;
});
const LOREM = {
  IPSUM: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper sapien, et consectetur nisl. Aenean magna erat, ultrices sit amet auctor quis, finibus at odio. Nulla finibus tempor molestie. Etiam maximus non lectus et auctor. In auctor feugiat massa sed tempus. Maecenas euismod nisi id metus ornare lobortis. Proin arcu tortor, ornare in ante vitae, porta convallis sem. Maecenas id nisl hendrerit, suscipit arcu et, feugiat urna. Proin rutrum nulla sed enim interdum, vitae ultrices lacus dapibus. Integer egestas dictum dignissim. Ut congue nisi augue. Quisque gravida ipsum id odio commodo bibendum.",
  PRESENT: "Praesent elementum a ante eget sollicitudin. Nunc vestibulum, ex id mollis suscipit, quam ante fermentum massa, in pulvinar libero tortor sed lacus. Ut convallis nisl leo. Proin a sapien eu ante vestibulum venenatis id et leo. Cras at vulputate massa. Suspendisse fringilla dictum metus. Nulla non purus congue, suscipit arcu nec, facilisis risus. Maecenas lectus neque, egestas non rhoncus id, interdum vel dolor. Maecenas sit amet leo consequat nulla consectetur rhoncus.",
  MAECENAS: "Maecenas justo nunc, dignissim ut euismod ut, tempus in felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin interdum convallis sapien. Fusce hendrerit rutrum nisl sit amet egestas. Quisque tincidunt eros odio, et accumsan mi suscipit vitae. Sed nec libero ac purus feugiat placerat. Quisque eu sagittis tellus, quis porttitor neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent magna diam, dictum eget molestie id, feugiat vitae justo.",
  SUSPENDISSE: "Suspendisse efficitur libero in lorem rhoncus, vel dapibus nunc blandit. Etiam tristique dictum tempus. Morbi eget justo rhoncus, interdum sapien ac, posuere purus. Suspendisse elementum lorem id hendrerit consectetur. Proin auctor mollis lorem, egestas rutrum nulla hendrerit nec. Nunc bibendum consequat nisi. Suspendisse fringilla non velit ac posuere. Integer laoreet ipsum id consequat ultricies. Duis ut augue tellus. Maecenas lacus libero, imperdiet ut pulvinar eu, porttitor quis erat. Curabitur in nisl non lacus accumsan pharetra.",
  NUNC: "Nunc consequat iaculis lectus, non venenatis mi interdum pretium. Sed lacinia ante vitae enim fermentum feugiat. Praesent vestibulum ligula dui, sed fringilla libero iaculis quis. Proin faucibus ligula at sapien venenatis, lacinia semper arcu laoreet. Etiam ultrices, elit at tristique sodales, dui leo vehicula massa, nec laoreet lorem ligula vitae elit. Cras tristique a sem id pretium. Vivamus in egestas libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices interdum tristique."
};
const SETTINGS = {
  BLUR: {
    a: {
      min: -1,
      max: 1,
      default: 0.05,
      step: 0.01
    },
    b: {
      min: -100,
      max: 100,
      default: -15,
      step: 5
    },
    effect: {
      name: "blur",
      unit: "px"
    }
  },
  HUE_ROTATE: {
    a: {
      min: -1,
      max: 2,
      default: 1,
      step: 0.1
    },
    b: {
      min: -100,
      max: 100,
      default: -10,
      step: 5
    },
    effect: {
      name: "hue-rotate",
      unit: "deg"
    }
  },
  GRAYSCALE: {
    a: {
      min: -1,
      max: 1,
      default: 0.2,
      step: 0.01
    },
    b: {
      min: -100,
      max: 100,
      default: -60,
      step: 5
    },
    effect: {
      name: "grayscale",
      unit: "%"
    }
  },
  OPACITY: {
    a: {
      min: -1,
      max: 1,
      default: -0.1,
      step: 0.01
    },
    b: {
      min: -100,
      max: 100,
      default: 60,
      step: 5
    },
    effect: {
      name: "opacity",
      unit: "%"
    }
  }
};
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-obspg6{max-width:800px;margin:auto}",
  map: null
};
const Scroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-obspg6"}"><p>${escape(LOREM.IPSUM)}</p>
	${validate_component(ScrollImg, "ScrollImg").$$render($$result, { config: SETTINGS.BLUR }, {}, {})}
	<p>${escape(LOREM.PRESENT)}</p>
	${validate_component(ScrollImg, "ScrollImg").$$render($$result, { config: SETTINGS.HUE_ROTATE }, {}, {})}
	<p>${escape(LOREM.MAECENAS)}</p>
	${validate_component(ScrollImg, "ScrollImg").$$render($$result, { config: SETTINGS.GRAYSCALE }, {}, {})}
	<p>${escape(LOREM.SUSPENDISSE)}</p>
	${validate_component(ScrollImg, "ScrollImg").$$render($$result, { config: SETTINGS.OPACITY }, {}, {})}
	<p>${escape(LOREM.NUNC)}</p>
</div>`;
});
export {
  Scroll as default
};
