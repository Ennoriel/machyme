<script>
	import Keywords from '$lib/components/blog/Keywords.svelte';
	import { Seo } from 'chyme-svelte';

	const projects = [
		{
			title: 'Trouve Ton Sport',
			url: 'https://www.trouvetonsport.com/',
			description:
				'Moteur de recherche de créneaux sportifs près de chez vous. Filtres par sport, âge, sexe, jour, type de pratique... Avec géolocalisation des équipements sportifs à proximité.',
			image: {
				src: '/projets/trouve-ton-sport.webp',
				alt: "maquettes mobiles de 'Trouve Ton Sport'. Avec les résultats de la recherche, la carte et le panneau de filtrage."
			},
			keywords: ['svelte-kit', 'conception', 'mongoDB', 'leafletJs']
		},
		{
			title: 'svelte-awesome-color-picker',
			url: 'https://svelte-awesome-color-picker.vercel.app/',
			description:
				'Librairie Svelte pour afficher un color picker. Le composant est conçu de manière à être complètement customisable. La navigation clavier est intégré, il est responsive et peut même fonctionner sans javascript.',
			image: {
				src: '/projets/svelte-awesome-color-picker.webp',
				alt: 'color picker avec possibilité de saisir une couleur. La couleur actuelle est un bleu.',
				class: 'shadow'
			},
			keywords: ['svelte', 'librairie', 'open source']
		},
		{
			title: 'SlowLettuce',
			url: 'https://slowlettuce.io/',
			description:
				"SlowLettuce est une petite équipe de passionnée par le design. Ils couvrent à la fois la stratégie d'entreprise, le design UX UI, et tous les autres éléments essentiels de la conception de produits pour les besoins des startups technologiques en phase de démarrage.",
			image: {
				src: '/projets/slowlettuce.webp',
				alt: "Page d'accueil du site web SlowLettuce. Présentation de l'agence berlinoise de conception de produits.",
				class: 'shadow'
			},
			keywords: ['svelte-kit', 'marketing', 'animations']
		},
		{
			title: 'Bead weaving pattern editor',
			url: 'https://ennoriel.github.io/bead-pattern/',
			description:
				'Application web pour créer des motifs de bracelets et de broches en perles. Conçue spécifiquement pour les perles Miyuki. Plus de 2000 perles Miyuki disponibles pour les modèles.',
			image: {
				src: '/projets/bead-weaving.webp',
				alt: 'Éditeur de modèles de tissage de perles. Avec le pokémon Togepi',
				class: 'shadow'
			},
			keywords: ['svelte-kit', 'web app']
		}
	];
</script>

<Seo
	description="Trouve Ton Sport, SlowLettuce... présentation des 	projets sur lesquels j'ai travaillé"
	title="Maxime Dupont - projets"
/>

<h1>Projets précédents</h1>

<section>
	{#each projects as project}
		<h2>{project.title}</h2>
		<p>{project.description} <a href={project.url} target="_blank">accéder au site web</a>.</p>
		<Keywords keywords={project.keywords} />
		<img {...project.image} width="500" height="350" alt="" />
	{/each}
</section>

<p>
	Vous souhaitez travailler ensemble ? <a href="/services">Voir ce que je propose</a>.
</p>

<style>
	img {
		display: block;
		max-width: 100%;
		height: auto;
		margin: 32px auto 96px;
	}

	section :global(.shadow) {
		box-shadow: 0 0 10px #cecede, 0 0 30px #eaeafa;
		border-radius: 8px;
	}
</style>
