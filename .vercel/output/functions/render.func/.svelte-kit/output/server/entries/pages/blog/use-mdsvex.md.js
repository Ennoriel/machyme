import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-b484806f.js";
import { B as Blog_layout } from "../../../_app/immutable/chunks/blog.layout-39decd1b.js";
import "../../../_app/immutable/chunks/OpenGraph-d7d8ef87.js";
import "../../../_app/immutable/chunks/stores-690b6d8b.js";
const metadata = {
  "date": "Fri Apr 27 2022 06:17:15 GMT+0200 (UTC)",
  "slug": "use-mdsvex",
  "title": "How to build this blog \u{1F528}",
  "description": "With the use of the mdsvex & mdsvex libraries, we can now easily create a blog post with very few boilerplate to write.",
  "keywords": ["svelte-kit", "svelte", "mdsvex"]
};
const Use_mdsvex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Blog_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>In the article, we\u2019ll see how to configure a <a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a> markdown based blog with the help of the <a href="${"https://mdsvex.com/"}" rel="${"nofollow"}">mdsvex</a> library. The blog we are going to build is:</p>
<ul><li>mobile first</li>
<li>fast &amp; accessible</li>
<li>can be hosted in most of the popular hosting services</li>
<li>build with SEO in mind</li>
<li>and is easy to maintain. \u{1F62E}\u200D\u{1F4A8}</li></ul>
<h2 id="${"init-sveltekit-project"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#init-sveltekit-project"}"><span class="${"icon icon-link"}"></span></a>Init SvelteKit project</h2>
<blockquote><p><a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a> is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. Unlike single-page apps, SvelteKit doesn\u2019t compromise on SEO, progressive enhancement or the initial load experience \u2014 but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.</p></blockquote>
<p>You can initialize a SvelteKit project with the following command:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> init svelte app-name</code>`}<!-- HTML_TAG_END --></pre>
<p>The command will scaffold a new project in the app-name directory asking you if you\u2019d like to set up some basic tooling such as TypeScript. Let\u2019s chose the skeleton project and enable all other options (typescript, prettier, etc.)</p>
<h2 id="${"configure-mdsvex"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#configure-mdsvex"}"><span class="${"icon icon-link"}"></span></a>Configure mdsvex</h2>
<p>mdsvex is a markdown preprocessor for Svelte components. This preprocessor allows you to use Svelte components in your markdown, or markdown in your Svelte components. mdsvex supports all Svelte syntax and almost all markdown syntax.</p>
<p>In addition to mdsvex, we\u2019ll also install 2 other libraries in order to generate header links automatically:</p>
<ul><li><a href="${"https://github.com/rehypejs/rehype-autolink-headings"}" rel="${"nofollow"}">rehype-autolink-headings</a></li>
<li><a href="${"https://github.com/rehypejs/rehype-slug"}" rel="${"nofollow"}">rehype-slug</a></li></ul>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">pnpm</span> i -D mdsvex rehype-autolink-headings rehype-slug</code>`}<!-- HTML_TAG_END --></pre>
<p>Then configure the <code>svelte.config.js</code> file:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">mdsvex</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">'./src/lib/layout/blog.layout.svelte'</span><span class="token punctuation">,</span>
			<span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>rehypeSlug<span class="token punctuation">,</span> rehypeAutolinkHeadings<span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.svelte'</span><span class="token punctuation">,</span> <span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// whatever</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And finally create the <code>blog.layout.svelte</code> file with this minimum required markup. It allows using markdown configuration as props:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> title <span class="token punctuation">&#125;</span> <span class="token operator">=</span> $$restProps<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>And that\u2019s it! Any markdown file will be converted to HTML and then rendered with the layout. The markdown configuration will be passed to the <code>$$restProps</code> props.</p>
<p>Here is a blog example. It exports a title:</p>
<pre class="${"language-md"}"><!-- HTML_TAG_START -->${`<code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">title: It works!</span>
<span class="token punctuation">---</span></span>

Yes, it does!</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"configuring-the-blog-list"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#configuring-the-blog-list"}"><span class="${"icon icon-link"}"></span></a>configuring the blog list</h2>
<p>The blog list is added to the <code>locals</code> and <code>session</code> objects in the <code>hooks.ts</code> file:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte">import type <span class="token language-javascript"><span class="token punctuation">&#123;</span> Handle<span class="token punctuation">,</span> GetSession <span class="token punctuation">&#125;</span></span> from '@sveltejs/kit';

export const getSession: GetSession = async (<span class="token language-javascript"><span class="token punctuation">&#123;</span> locals <span class="token punctuation">&#125;</span></span>) => <span class="token language-javascript"><span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">posts</span><span class="token operator">:</span> locals<span class="token punctuation">.</span>posts
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></span>;

export const handle: Handle = async (<span class="token language-javascript"><span class="token punctuation">&#123;</span> event<span class="token punctuation">,</span> resolve <span class="token punctuation">&#125;</span></span>) => <span class="token language-javascript"><span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
		Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'/src/routes/blog/*.md'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>path<span class="token punctuation">,</span> page<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> metadata <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> filename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>metadata<span class="token punctuation">,</span> filename <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
	posts<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>date<span class="token punctuation">)</span> <span class="token operator">-</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	event<span class="token punctuation">.</span>locals<span class="token punctuation">.</span>posts <span class="token operator">=</span> posts<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></span>;</code>`}<!-- HTML_TAG_END --></pre>
<p>It is displayed in the <code>/blog/index.html</code> file:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">const</span> prerender <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> session <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">const</span> posts <span class="token operator">=</span> session<span class="token punctuation">.</span>posts<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> posts <span class="token punctuation">&#125;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">let</span> posts<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
	<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">posts </span><span class="token keyword">as</span> <span class="token language-javascript">post<span class="token punctuation">&#125;</span></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>post<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"going-further"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#going-further"}"><span class="${"icon icon-link"}"></span></a>Going further</h2>
<ul><li>you\u2019d like to customize the style with this <a href="${"https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/layout/blog.layout.svelte"}" rel="${"nofollow"}">layout stylesheet</a></li>
<li>you\u2019d like to add meta tags for SEO with this <a href="${"https://github.com/Ennoriel/machyme/blob/edf654885b8a5bea0b6090ec28bf8a43a7ca84a2/src/lib/components/OpenGraph.svelte"}" rel="${"nofollow"}">Open Graph Component</a></li>
<li>you\u2019d like to filter the posts by a tag (not done yet \u{1F61C})</li></ul>`;
    }
  })}`;
});
export {
  Use_mdsvex as default,
  metadata
};
