<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import { Seo } from 'chyme-svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Seo
	description="Articles de développements informatiques par Maxime Dupont, à propos de Svelte, d'accessibilité et de data-viz"
	title="Maxime Dupont"
/>

<div style:margin-top="0">
	<p>
		<strong>Hey, moi, c'est Maxime, un développeur freelance FullStack.</strong> Je construis des sites
		web depuis plus de 7 ans. J'ai toujours accordé une grande importance aux questions de référencement,
		d'accessibilité et de performance.
	</p>

	<p>
		<a href="mailto:m.dupont103@gmail.com">Contactez-moi</a> si vous souhaitez que je prototype, construise
		ou fasse une revue de votre projet.
	</p>
</div>

<h1 style:margin-top="64px">Publications</h1>

<ArticleList posts={data.posts} top3 />

<a href="/blog">Lire les articles plus anciens</a>

<div>
	<h2 style:margin-top="0">Astuces</h2>

	<p style:margin-bottom="0">
		<strong
			>Lorsque l'on construit des choses, on est confronté à des dizaines, voire des centaines de
			problèmes par jour.</strong
		>
		Certaines sont faciles à résoudre, et vous avez probablement déjà réglé certains. D'autres sont plus
		délicates, et vous devez ouvrir plus d'un post StackOverflow. C'est pourquoi je partage avec vous
		quelques-uns des <a href="/astuces">trucs et astuces</a> les plus courants mais les plus délicats.
	</p>
</div>

<h2>Services</h2>

<p>
	<strong>Je suis un freelance expérimenté</strong>. Si vous êtes une startup ou une entreprise, et
	que vous souhaitez construire quelque chose d'étonnant pour vos clients, n'hésitez pas à me le
	faire savoir ou à <a href="/services">voir ce que je peux vous proposer</a>.
</p>

<style>
	div {
		position: relative;
		z-index: 0;
		padding: 48px 64px;
		margin: 64px -64px;
		background-color: var(--primary-color-25);
	}
</style>
