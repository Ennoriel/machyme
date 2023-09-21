<script lang="ts">
	import { clamp } from 'chyme';

	let wrapper: HTMLDivElement;
	let clip = 34;
	let down = false;

	function onMousedown() {
		down = true;
	}

	function onMouseup() {
		down = false;
	}

	function onMousemove(e: MouseEvent | TouchEvent) {
		if (down) {
			const rect = wrapper.getBoundingClientRect();
			const clientX = 'clientX' in e ? e.clientX : e.changedTouches[0].clientX;
			clip = clamp((100 * (clientX - rect.left)) / rect.width, 0, 100);
		}
	}

	function onkeypress(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			clip = clamp(clip - 1, 0, 100);
		} else if (e.key === 'ArrowRight') {
			clip = clamp(clip + 1, 0, 100);
		}
	}
</script>

<svelte:window on:mouseup={onMouseup} on:mousemove|preventDefault|stopPropagation={onMousemove} />

<div bind:this={wrapper} class="wrapper" style:--clip="{clip}%">
	<img
		src="/art.svg"
		alt="random ellipsis that unblurs as you scroll by"
		style:filter="blur(4px)"
	/>
	<img class="overlay" src="/art.svg" alt="random ellipsis that unblurs as you scroll by" />
	<button
		class="slider"
		on:mousedown={onMousedown}
		on:touchstart={onMousedown}
		on:touchend={onMouseup}
		on:touchmove|preventDefault|stopPropagation={onMousemove}
		on:keydown={onkeypress}
	/>
	<button
		class="icon icon-left"
		on:mousedown={onMousedown}
		on:touchstart={onMousedown}
		tabindex="-1"
	>
		←
	</button>
	<button
		class="icon icon-right"
		on:mousedown={onMousedown}
		on:touchstart={onMousedown}
		tabindex="-1"
	>
		→
	</button>
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
		max-width: 800px;
		margin: auto;
		aspect-ratio: 1150 / 680;
	}
	.slider,
	.slider:after,
	img {
		position: absolute;
		top: 0;
		bottom: 0;
	}
	.slider {
		left: calc(var(--clip) - 6px);
		width: 10px;
	}
	.slider,
	.icon {
		cursor: col-resize;
		background-color: transparent;
		padding: 0;
	}
	.slider:active,
	.icon:active {
		cursor: grabbing;
	}
	.slider:after {
		content: '';
		left: 4.5px;
		width: 1px;
		background-color: black;
	}
	.icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		user-select: none;
	}
	.icon-left {
		left: calc(var(--clip) - 25px);
	}
	.icon-right {
		left: calc(var(--clip) + 10px);
	}
	img {
		inset: 0;
		width: 100%;
		max-width: 100%;
		user-select: none;
	}
	.overlay {
		clip-path: polygon(var(--clip) 0, 100% 0, 100% 100%, var(--clip) 100%);
	}
</style>
