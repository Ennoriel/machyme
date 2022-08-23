import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-b484806f.js";
import { B as Blog_layout } from "../../../_app/immutable/chunks/blog.layout-39decd1b.js";
import "../../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import "../../../_app/immutable/chunks/stores-690b6d8b.js";
const metadata = {
  "date": "Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)",
  "slug": "svelte-inkjs",
  "title": "Write interactive stories with InkJs & SvelteKit \u{1F3A2}",
  "description": "How to integrate InkJs in a new skeleton SvelteKit project: a fast and easy way to start an interactive narrative based story website.",
  "keywords": ["svelte", "inkjs", "universal module definition (UMD)"]
};
const Svelte_inkjs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Blog_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"what-is-inkjs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-inkjs"}"><span class="${"icon icon-link"}"></span></a>What is InkJs?</h2>
<p>InkJs is javascript port of <a href="${"https://github.com/y-lohse/inkjs"}" rel="${"nofollow"}">Ink</a> library. <a href="${"https://github.com/inkle/ink"}" rel="${"nofollow"}">Ink</a> is inkle\u2019s scripting language for writing interactive narrative, both for text-centric games as well as more graphical games that contain highly branching stories. It\u2019s designed to be easy to learn, but with powerful enough features to allow an advanced level of structuring.</p>
<h2 id="${"setup"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#setup"}"><span class="${"icon icon-link"}"></span></a>Setup</h2>
<h3 id="${"start-a-fresh-sveltekit-project"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#start-a-fresh-sveltekit-project"}"><span class="${"icon icon-link"}"></span></a>Start a fresh SvelteKit project</h3>
<pre class="${"language-shell"}"><!-- HTML_TAG_START -->${`<code class="language-shell"><span class="token function">mkdir</span> my-app
<span class="token function">npm</span> init svelte <span class="token builtin class-name">.</span>
<span class="token comment"># choose your project options (Skeleton, Typescript, ESLint, Prettier, Playwright, etc.)</span>
<span class="token function">npm</span> i</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"integrate-inkjs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#integrate-inkjs"}"><span class="${"icon icon-link"}"></span></a>Integrate InkJs</h3>
<p>From the app.html file, we can download a UMD version of InkJs. You can either use a CDN or download a version from the npmjs registry. While the first one is easier, you\u2019ll have more difficulties to keep all your dependencies up to date since you\u2019ll have them defined at different places. I went with the second option:</p>
<ol><li>Download the InkJs library from the npmjs registry.</li></ol>
<pre class="${"language-shell"}"><!-- HTML_TAG_START -->${`<code class="language-shell"><span class="token function">npm</span> i -D inkjs</code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"2"}"><li>Modify the npm prepare script to copy the InkJs library to the static folder. With this script set, when someone installs the dependencies of your project with <code>npm i</code>, the InkJs library will be copied to the static folder. Additionally, you can add it to the <code>.gitignore</code> file if you don\u2019t want to track it in the repository.</li></ol>
<pre class="${"language-json"}"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"prepare"</span><span class="token operator">:</span> <span class="token string">"svelte-kit sync &amp;&amp; cp node_modules/inkjs/dist/ink.js ./static/ink.js"</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"3"}"><li>Load the InkJs library in the <code>app.html</code> file.</li></ol>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token comment">&lt;!-- add this line in the head tag --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%sveltekit.assets%/ink.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"4"}"><li>Create a story file. For the purpose of this article, I chose to export a <code>.ts</code> file as it is easier to integrate but fill free to use a json file or an endpoint. You can find an example story <a href="${"https://github.com/y-lohse/inkjs/blob/master/templates/browser_serverless/story.js"}" rel="${"nofollow"}">here</a>.</li></ol>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token comment">// lib/story.ts</span>
<span class="token keyword">const</span> story <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>story<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"5"}"><li>Import and use the story in the <code>index.svelte</code> route file:</li></ol>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> storyJson <span class="token keyword">from</span> <span class="token string">'.$lib/story'</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> story<span class="token punctuation">;</span>
	<span class="token keyword">let</span> storyContainer<span class="token punctuation">;</span>

	<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// The story could be loaded from an endpoint or somewhere else</span>
		story <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>inkjs<span class="token punctuation">.</span>Story</span><span class="token punctuation">(</span>storyJson<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>story <span class="token operator">&amp;&amp;</span> storyContainer<span class="token punctuation">)</span> <span class="token function">continueStory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * The code below is copy-pasted from the Ink.js examples
	 * https://github.com/y-lohse/inkjs/blob/master/templates/browser_with_server/main.js
	 */</span>
	<span class="token keyword">function</span> <span class="token function">showAfter</span><span class="token punctuation">(</span><span class="token parameter">delay<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">/** ... */</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">function</span> <span class="token function">scrollToBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">/** ... */</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">function</span> <span class="token function">continueStory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">/** ... */</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome to SvelteKit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Visit <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://kit.svelte.dev<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>kit.svelte.dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to read the documentation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>storyContainer<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>And voil\xE0! You can now start writing your story.</p>`;
    }
  })}`;
});
export {
  Svelte_inkjs as default,
  metadata
};
