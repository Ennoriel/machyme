<script>
	import { Seo } from 'chyme-svelte';

	const projects = [
		{
			title: 'Trouve Ton Sport',
			url: 'https://www.trouvetonsport.com/',
			description:
				'Moteur de recherche de créneaux sportifs près de chez vous. Filtres par sport, âge, sexe, jour, type de pratique... Avec géolocalisation des équipements sportifs à proximité.',
			image: {
				src: '/projects/trouve-ton-sport.webp',
				alt: "maquettes mobiles de 'Trouve Ton Sport'. Avec les résultats de la recherche, la carte et le panneau de filtrage."
			}
		},
		{
			title: 'SlowLettuce',
			url: 'https://slowlettuce.io/',
			description:
				"SlowLettuce est une petite équipe de passionnée par le design. Ils couvrent à la fois la stratégie d'entreprise, le design UX UI, et tous les autres éléments essentiels de la conception de produits pour les besoins des startups technologiques en phase de démarrage.",
			image: {
				src: '/projects/slowlettuce.webp',
				alt: "Page d'accueil du site web SlowLettuce. Présentation de l'agence berlinoise de conception de produits.",
				class: 'shadow'
			}
		},
		{
			title: 'Bead weaving pattern editor',
			url: 'https://ennoriel.github.io/bead-pattern/',
			description:
				'Application web pour créer des motifs de bracelets et de broches en perles. Conçue spécifiquement pour les perles Miyuki. Plus de 2000 perles Miyuki disponibles pour les modèles.',
			image: {
				src: '/projects/bead-weaving.webp',
				alt: 'Éditeur de modèles de tissage de perles. Avec le pokémon Togepi',
				class: 'shadow'
			}
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
		<p>{project.description} <a href={project.url} target="_blank">Link to the website</a>.</p>
		<img {...project.image} width="500" height="350" alt="" />
	{/each}
</section>

<p>
	Vous souhaitez savoir nous pourrions travailler ensemble ? <a href="/services"
		>Voir ce que je propose</a
	>.
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
	}
</style>
