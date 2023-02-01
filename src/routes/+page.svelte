<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import { Seo } from 'chyme-svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Seo
	description="The latest dev blogs by Maxime Dupont, about Svelte, Accessibility and DataViz"
	title= "Maxime Dupont"
/>

<div style:margin-top="0">
	<p>
		<strong>Hi, I'm Maxime, a frontend engineer.</strong> I've been building website for 7 years. I have
		always placed great importance on SEO, accessibility and performance issues. This blog is a place where
		I intend to share some tips and some longer insights on web development.
	</p>
	
	<p>
		Feel free to <a href="mailto:m.dupont103@gmail.com">contact me</a> if you want me to prototype, extend
		or review your project .
	</p>
</div>

<h1 style:margin-top="64px">Publications</h1>

<ArticleList posts={data.posts} top3 />

<a href="/blog">Read previous articles</a>

<div>
	<h2 style:margin-top="0">Tips & tricks</h2>

	<p style:margin-bottom="0">
		<strong>When building things, you are faced with tens and hundreds of problems a day.</strong>
		Some are easy to solve, and you have already encountered some of them. Some are tricker, you
		need to open more than one StackOverflow post. That is why I share some of the most common but
		trickiest <a href="/tips">tips and tricks</a>.
	</p>
</div>

<h2>Services</h2>

<p>
	<strong>I am an experienced freelancer</strong>. If you're a startup or a company, and you want to
	build something astonishing for your customers, please let me know or see what
	<a href="/services">I can offer</a>.
</p>

<br />
<br />
<br />
<br />

<style>
	div {
		position: relative;
		z-index: 0;
		padding: 64px 0;
		margin: 64px 0;
	}
	div::before {
		content: '';
		position: absolute;
		width: var(--100vw, 99vw);
		left: 50%;
		top: 0;
		bottom: 0;
		z-index: -1;
		background-color: var(--primary-color-200);
		transform: translateX(-50%) skew(0, -2deg);
		box-sizing: border-box;
	}
</style>
