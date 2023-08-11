<script>
	import { Seo } from 'chyme-svelte';

	const SKILLS = [
		['🦧', 'Performance', 'optimisation SEO'],
		['🐢', 'Optimisation', 'optimisation des images, polices, etc.'],
		['🦢', 'Design System', 'Librairie de composants réutilisable'],
		['🐬', 'Bonnes pratiques', 'Conventions de nommage, cycle de mise en production court'],
		['🐳', 'Accessibilité', 'WAI']
	];
</script>

<Seo
	description="Les services que j'offre en tant que développeur front senior depuis 7 ans : développer, améliorer, revue de projet"
	title="Maxime Dupont - services"
/>

<h1>Services</h1>

<p>
	J'aide les entreprises et les startups à se concentrer sur leur domaine d'expertise en
	construisant des sites web rapides et orientés vers l'utilisateur qui peuvent mettre en valeur
	leur produit ou service. Je développe ou fait également des revues des sites web existants pour
	améliorer l'expérience utilisateur ou la performance et économiser du temps et du stress sur le
	long terme.
</p>
<blockquote>
	Je suis les meilleures pratiques du moment, non seulement en ce qui concerne les conventions de
	nommage et les modèles clairs, mais aussi l'accessibilité, l'internationalisation, le
	référencement SEO, etc.
</blockquote>
<p>
	Je suis passionné par la performance et la qualité du code ! J'ai une solide expérience dans le
	développement d'applications web maintenables en utilisant des frameworks de composants,
	TypeScript ainsi que les bonnes pratiques.
	<a href="/projets">Voir mes expériences passées</a>.
</p>
<p>
	J'aime faire du code maintenable, testé et documenté. Je peux rédiger des guides et des documents
	pour que l'application continue de tourner quoi qu'il arrive. Laissez-moi l'opportunité de de
	faire de votre produit ou service un succès !
</p>

<h2>Vous êtes une startup ?</h2>
<p>
	Je peux vous aider à réaliser le prototype d'une maquette en un temps record tout en faisant les
	bons choix pour votre future architecture. votre future architecture car vous ne voulez pas
	recommencer à chaque itération.
</p>
<p>
	Vous serez en mesure de valider vos hypothèses de croissance et de faire de votre produit ou
	service un succès.
</p>

<h2>Vous êtes une entreprise ?</h2>
<p>
	Je peux vous aider à développer ou à étendre votre projet (SEO, conception, composants
	réutilisables, etc.). Je vais droit au but pour atteindre vos objectifs tout en suggérant des
	améliorations là où c'est possible.
</p>
<p>
	J'audit votre projet ou l'organisation de votre équipe et vous donnerai des conseils fondés sur
	mes expériences passées.
</p>

<h2>Compétences</h2>

<ul>
	{#each SKILLS as [animal, skill, tools]}
		<li style:line-height="1.8">
			<span style:font-size="17px" style:margin-right="8px">{animal}</span>
			<strong>{skill}</strong>
			{#if tools}
				<span>&nbsp;–&nbsp; {tools}</span>
			{/if}
		</li>
	{/each}
</ul>

<p style:margin-top="72px">
	Si vous souhaitez que l'on travaille ensemble, <a href="mailto:m.dupont103@gmail.com">
		envoyez-moi un email !
	</a>
</p>
