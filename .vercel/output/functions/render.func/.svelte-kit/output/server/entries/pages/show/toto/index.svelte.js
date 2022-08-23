import { n as noop, a as subscribe, r as run_all, i as safe_not_equal, j as is_function, c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, h as add_styles, e as each } from "../../../../_app/immutable/chunks/index-b484806f.js";
import { randomHexColor, colorRange } from "chyme";
const toto_paths = [
  ["M 67.6,73.8 C 68.0,82.3 81.4,94.4 87.8,94.7"],
  [
    "m 107.7,36.0 c -0.3,14.2 -0.9,19.5 16.5,27.9 10.8,5.1 12.4,6.3 17.7,13.0 -5.6,-5.4 -18.0,-8.9 -28.3,-1.2 -10.3,7.6 -23.6,6.5 -25.1,-8.0"
  ],
  ["m 143.9,66.0 c 33.7,-24.5 56.1,-14.4 74.0,8.9 4.5,-13.1 -1.9,-32.3 10.7,-40.2"],
  ["m 252.8,65.8 c -3.4,0.0 -9.0,2.1 -13.3,4.1"],
  ["m 257.8,85.6 c -5.1,-3.4 -10.3,-5.5 -15.7,-6.0 20.7,18.1 4.9,39.0 1.8,58.9"],
  ["m 219.7,107.3 c 0.9,3.7 0.3,7.1 -0.4,10.5"],
  ["m 186.1,70.1 c 2.2,1.1 4.8,3.3 8.3,7.4"],
  [
    "m 175.7,90.2 c -6.0,-3.9 -12.0,-6.8 -18.3,-8.0 -0.7,5.5 0.8,11.2 -0.3,15.8 -3.9,-3.1 -8.7,-6.1 -13.0,-8.0"
  ],
  [
    "m 175.3,103.7 -37.5,14.6 c -6.1,-4.6 -21.4,-46.4 -41.5,-1.8 -7.7,26.1 -22.9,21.7 -31.0,18.3",
    "M 137.7,118.4 C 104.1,59.1 98.1,142.4 73.2,107.0"
  ],
  [
    "m 204.9,103.4 -50.0,20.4 c 29.5,4.4 24.6,2.1 39.0,29.4 12.1,-23.7 66.1,-14.0 44.3,28.7 -5.5,25.1 22.6,54.0 27.3,71.2 -22.7,-48.2 -33.2,-40.0 -43.0,-65.5 41.4,-18.2 12.2,-49.9 -16.3,-28.5 6.7,-2.1 17.6,2.9 8.1,12.1"
  ],
  [
    "m 96.0,153.5 c 2.5,-26.4 14.1,-24.3 18.0,-37.2 -10.3,33.4 9.7,21.6 -8.0,86.3 7.0,-1.3 13.6,-2.8 19.5,-4.6 -1.7,2.6 -2.7,5.2 -6.3,8.3 7.6,79.1 50.7,48.2 56.4,5.5 2.6,-20.5 14.6,-21.0 20.1,-45.0",
    "m 149.5,254.2 c 17.8,-7.4 35.0,-16.8 52.9,-27.0 -21.2,22.7 3.8,51.6 5.8,58.2 -6.9,-11.0 -20.9,-44.9 -30.5,-44.4 -3.7,0.1 17.1,-0.6 15.3,2"
  ],
  ["m 136.8,156.3 c 7.4,27.6 13.9,23.4 19.7,-2.7"]
];
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
const keyPressed = writable({
  ArrowLeft: 0,
  ArrowUp: 0,
  ArrowRight: 0,
  ArrowDown: 0
});
derived(keyPressed, ($keyPressed) => {
  return {
    ...$keyPressed,
    ArrowV: $keyPressed.ArrowUp + $keyPressed.ArrowDown,
    ArrowH: $keyPressed.ArrowLeft + $keyPressed.ArrowRight,
    ArrowVH: $keyPressed.ArrowUp + $keyPressed.ArrowDown + $keyPressed.ArrowLeft + $keyPressed.ArrowRight
  };
});
const Picker_svelte_svelte_type_style_lang = "";
const Slider_svelte_svelte_type_style_lang = "";
const Alpha_svelte_svelte_type_style_lang = "";
const TextInput_svelte_svelte_type_style_lang = "";
const SliderIndicator_svelte_svelte_type_style_lang$2 = "";
const PickerIndicator_svelte_svelte_type_style_lang$2 = "";
const PickerWrapper_svelte_svelte_type_style_lang$2 = "";
const SliderWrapper_svelte_svelte_type_style_lang$2 = "";
const Input_svelte_svelte_type_style_lang$2 = "";
const Wrapper_svelte_svelte_type_style_lang$2 = "";
const Input_svelte_svelte_type_style_lang$1 = "";
const PickerIndicator_svelte_svelte_type_style_lang$1 = "";
const PickerWrapper_svelte_svelte_type_style_lang$1 = "";
const SliderIndicator_svelte_svelte_type_style_lang$1 = "";
const SliderWrapper_svelte_svelte_type_style_lang$1 = "";
const Wrapper_svelte_svelte_type_style_lang$1 = "";
const Input_svelte_svelte_type_style_lang = "";
const PickerIndicator_svelte_svelte_type_style_lang = "";
const PickerWrapper_svelte_svelte_type_style_lang = "";
const SliderIndicator_svelte_svelte_type_style_lang = "";
const SliderWrapper_svelte_svelte_type_style_lang = "";
const Wrapper_svelte_svelte_type_style_lang = "";
const InputColorPicker_svelte_svelte_type_style_lang = "";
const InputNumber_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "label.svelte-4mc0y9.svelte-4mc0y9{display:flex;align-items:center;gap:8px}input.svelte-4mc0y9.svelte-4mc0y9{height:20px;width:40px;border-radius:3px;text-align:center;border:1px solid #ddd;padding:0;transition:all 0.2s ease-in-out}input.svelte-4mc0y9.svelte-4mc0y9:focus{outline:none}label.svelte-4mc0y9:hover input.svelte-4mc0y9{background-color:#ddd;border:1px solid white}input.svelte-4mc0y9.svelte-4mc0y9::-webkit-outer-spin-button,input.svelte-4mc0y9.svelte-4mc0y9::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input.svelte-4mc0y9.svelte-4mc0y9{-moz-appearance:textfield}",
  map: null
};
const InputNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$1);
  return `<label class="${"input-like svelte-4mc0y9"}"><input type="${"number"}" class="${"svelte-4mc0y9"}"${add_attribute("value", value, 0)}>
	${escape(label)}
</label>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".commands.svelte-14i6sys{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin:16px}.commands.svelte-14i6sys .wrapper{top:192px}@media(min-width: 720px){.commands.svelte-14i6sys .wrapper{left:72px}}button.svelte-14i6sys{padding:10px 20px 10px 10px;background-color:white;border:none;border-radius:3px;box-shadow:0 0 5px #ccc;cursor:pointer;transition:background-color 0.2s ease-in-out}button.svelte-14i6sys:hover{background-color:#ddd}svg.svelte-14i6sys{display:block;max-width:500px;margin:-50px}@media(min-width: 500px){svg.svelte-14i6sys{margin:-50px auto}}",
  map: null
};
const Toto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let r;
  let { visible } = $$props;
  let x = 0;
  let delay = 400;
  let duration = 1e3;
  let c1 = randomHexColor();
  let c2 = randomHexColor();
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    r = colorRange(c1, c2, toto_paths.length) || [];
    {
      if (visible) {
        x = 0;
        if (!delay) {
          setTimeout(() => x = 1e4, 0);
        }
      }
    }
    $$rendered = `<div class="${"commands svelte-14i6sys"}">${validate_component(InputNumber, "InputNumber").$$render($$result, { label: "Delay", value: delay }, {
      value: ($$value) => {
        delay = $$value;
        $$settled = false;
      }
    }, {})}
	${validate_component(InputNumber, "InputNumber").$$render($$result, { label: "Duration", value: duration }, {
      value: ($$value) => {
        duration = $$value;
        $$settled = false;
      }
    }, {})}

	${`<div class="${"input-like"}"${add_styles({ "width": `140px` })}></div>
		<div class="${"input-like"}"${add_styles({ "width": `140px` })}></div>`}

	<button class="${"svelte-14i6sys"}">Restart animation </button></div>

${visible ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 320"}" class="${"svelte-14i6sys"}"><g fill="${"none"}" stroke-width="${"7"}" stroke-linejoin="${"round"}" stroke-linecap="${"round"}">${each(toto_paths, (toto_path, index) => {
      return `${each(toto_path, (d) => {
        return `${x > index ? `<path${add_attribute("stroke", r[index], 0)}${add_attribute("d", d, 0)}></path>` : ``}`;
      })}`;
    })}</g></svg>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Toto as default
};
