import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-b484806f.js";
import { B as Blog_layout } from "../../../_app/immutable/chunks/blog.layout-39decd1b.js";
import "../../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import "../../../_app/immutable/chunks/stores-690b6d8b.js";
const metadata = {
  "date": "Fri Apr 22 2022 06:17:15 GMT+0200 (UTC)",
  "slug": "hello-world",
  "title": "Hello World! (easter-egg guaranteed) \u{1F334}",
  "description": "The first commit, the first time, the first article.",
  "keywords": ["svelte"]
};
const Hello_world = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Blog_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>It works!</p>
<p>While doing this article, I wanted to add an easter egg in the form of a HTML comment. But I couldn\u2019t find a way to do it. I tried to use the <code>&lt;!--</code> and <code>--&gt;</code> tags, but they didn\u2019t work. I then tried a more sophisticated method, but it didn\u2019t work either:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>
	const test = '<span class="token comment">&lt;!-- Hello World! --></span>';
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

&#123;test&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>One solution is not that far, you\u2019d have to use the <code>@html</code> directive:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">&#123;@html "<span class="token comment">&lt;!-- Hello World! --></span>"&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>And voil\xE0!</p>
<p>So, is there an easter egg in this page?</p>
<!-- HTML_TAG_START -->${"<!-- I'd like to work with you! Contact me on Github or LinkedIn! (links in the footer) -->"}<!-- HTML_TAG_END -->`;
    }
  })}`;
});
export {
  Hello_world as default,
  metadata
};
