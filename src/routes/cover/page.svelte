<!-- <img src="/cover.png" alt="" width="400" /> -->
<div class="cover">
	<div class="maxime">
		<img class="logo" src="/android-chrome-512x512.png" alt="" width="280" />
		<div class="text">
			<h1>Maxime Dupont</h1>
			<p>Développeur Web Senior</p>
			<p>Freelance</p>
		</div>
		<img class="svelte" src="/svelte-logo.svg" alt="" width="120" />
	</div>

	<div class="code-block">
		<div class="code-header">
			<ul aria-hidden="true">
				<li class="dot red" />
				<li class="dot yellow" />
				<li class="dot green" />
			</ul>
			<h2>machyme.fr</h2>
		</div>
		<pre><code
				><span class="red">function</span> <span class="yellow">work</span>() &lcub;
    <span class="green">happy_to_work</span>();
    <span class="green">and_to_meet_you</span>();
&rcub;</code
			></pre>
	</div>
</div>

<style>
	.cover {
		/* border: 1px solid; */
		width: 1080px;
		height: 720px;
		padding: 48px;
		transform: scale(0.6666666667);
		transform-origin: top left;
		box-sizing: border-box;
		overflow: hidden;
	}
	.maxime {
		display: flex;
		align-items: center;
		gap: 64px;
	}
	h1 {
		font-size: 44px;
	}
	.text {
		background-color: #e2f1ff;
		margin: -22px -500px -22px -200px;
		padding: 22px 500px 22px 200px;
		z-index: -1;
	}
	p {
		font-size: 32px;
		font-weight: 500;
	}
	h1,
	p {
		margin: 0;
		line-height: 1.5;
		color: #333;
	}
	.code-block {
		margin: 64px;
		padding: 24px;
		border-radius: 16px;
		background-color: #f5f5f5;
	}
	.code-header {
		display: flex;
		gap: 240px;
	}
	.code-header h2 {
		margin: 0;
		color: grey;
		font-size: 28px;
		font-weight: 600;
		margin-top: -12px;
	}
	ul {
		display: flex;
		padding: 0;
		margin: 0;
		gap: 16px;
	}
	.dot {
		list-style: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
	.dot.red {
		background-color: #df433d;
	}
	.dot.yellow {
		background-color: #dea123;
	}
	.dot.green {
		background-color: #1aab29;
	}
	pre {
		margin-top: 36px;
		margin-bottom: 4px;
		font-size: 24px;
		line-height: 1.35;
		font-weight: 600;
	}
	code .red {
		color: #df433d;
	}
	code .yellow {
		color: #dea123;
	}
	code .green {
		color: #1aab29;
	}

	h1,
	h2,
	p {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
	}
	h2 {
		font-style: italic;
	}
</style>
