<script>
	import { page } from "$app/stores";
	import { routes } from "$lib/components/layout/routes";
	import glasses from "./glasses";
</script>

<div class="grid">
	<div class="laptop"></div>
	<nav class="black flex">
		{#each routes.filter((route) => route.top) as route}
			{@const active = $page.url.pathname === route.path}
			<a href={route.path} aria-current={(active && 'page') || undefined} style:--s="8vw" style:--m="4vw">
				{route.label}
			</a>
		{/each}
	</nav>
	<div class="mobile"></div>
	<div class="black">
		<h1>
			<div class="compact" style:--s="21.8vw" style:--m="10.7vw" style:transform="scaleY(0.5)" style:line-height=".45">MAXIME</div>
			<div class="compact" style:--s="22.2vw" style:--m="11.0vw">DUPONT</div>
		</h1>
	</div>
	<div class="laptop"></div>
	<div></div>
	<div class="black">
		<p style:margin-top="0">experienced</p>
		<p>senior</p>
		<p style:margin-bottom="0">developer</p>
	</div>
	<div class="mobile"></div>
	<div class="black">
		<h2 class="comh2act" style:--s="19.8vw" style:--m="9.8vw">services</h2>
		<p>create</p>
		<p>extend</p>
		<p>review</p>
		<p style:--s="3.7vw" style:--m="1.9vw" style:margin-bottom="0">I do everything for &nbsp;<strong style:--s="7.7vw" style:--m="3.8vw" style:line-height="1.9vw">your website</strong></p>
	</div>
	<div class="laptop"></div>
	<div></div>
	<div class="black">
		<pre class="center" style:--s="0.8vw" style:--m="0.4vw" aria-hidden="true">{glasses}</pre>
		<h2 class="compact" style:--s="17.8vw" style:--m="8.8vw">Expertise</h2>
		<p>SEO</p>
		<p>accessibility</p>
		<p>reusability</p>
		<p style:margin-bottom="0">user experience</p>
	</div>
	<div class="mobile"></div>
	<div class="black" style:padding="0 4px">
		<p style:--s="4.2vw" style:--m="2.1vw" style:margin="0" style:text-align="justify">Brutalism is characterized by minimalism that showcase the bare elements. The style makes use of angular geometric shapes and a predominantly monochrome black color palette.</p>
		<p style:margin="0 0 4px" style:border-bottom="2.5px solid white"><a href="https://en.wikipedia.org/wiki/Brutalist_architecture" target="_blank" rel="noreferrer" style:--s="4.2vw" style:--m="2.2vw" style:letter-spacing=".4px" style:display="flex" style:text-decoration="none" style:margin-bottom="-2px">Learn more about&nbsp;<span class="mobile">&nbsp;&nbsp;</span><span style:--s="9.1vw" style:--m="4.5vw" style:line-height="2.3vw" style:transform="scaleY(1.5)" style:margin-bottom="-2vw">Brutalism</span></a></p>
	</div>
	<div class="laptop"></div>
	<div></div>
	<div class="black">
		<h2 class="compact" style:--s="22vw" style:--m="11vw">Contact</h2>
		<p><a href="mailto:m.dupont103@gmail.com" style:--s="8vw" style:--m="4vw">Mail</a></p>
		<p><a href="https://www.linkedin.com/in/maxime-dupont-dev/" target="_blank" rel="noreferrer" style:--s="8vw" style:--m="4vw">LinkedIn</a></p>
		<p style:margin-bottom="0"><a href="https://github.com/Ennoriel/" target="_blank" rel="noreferrer" style:--s="8vw" style:--m="4vw">Github</a></p>
	</div>
</div>

<style>
	* {
		font-size: var(--s) !important;
	}
	.laptop {
		display: none;
	}

	h1, h2 {
		margin: 0;
		line-height: .75;
		font-weight: normal;
	}
	.grid {
		display: grid;
	}
	div {
		min-height: 40px;
	}

	.black {
		background-color: black;
		color: white;
		padding: 8px 4px;
	}
	.black:hover {
		animation: color-rotate 4s linear 0s infinite;
	}
	@media (prefers-reduced-motion) {
		.black:hover {
			animation: none;
		}
	}


	.compact {
		margin: 0;
		line-height: .75;
	}

	.center {
		margin: auto;
		width: fit-content;
	}

	.margin {
		margin: 4rem 0;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		padding: 0 4px;
	}

	a {
		color: white;
	}

	@media screen and (min-width: 768px) {
		* {
			font-size: var(--m) !important;
		}
		.laptop {
			display: block;
		}
		.mobile {
			display: none;
		}
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@keyframes color-rotate {
		0% {
			background-color: #ff0000;
		}
		17.2% {
			background-color: #ffff00;
		}
		18.2% {
			background-color: #ffff00;
		}
		33.3% {
			background-color: #00ff00;
		}
		49.5% {
			background-color: #00ffff;
		}
		51.5% {
			background-color: #00ffff;
		}
		67.7% {
			background-color: #0000ff;
		}
		83.3% {
			background-color: #ff00ff;
		}
		100% {
			background-color: #ff0000;
		}
	}
</style>