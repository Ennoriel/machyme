<script lang="ts">
	export let ctx: CanvasRenderingContext2D;
	export let rect: DOMRect;
	export let redraw: number;

	export let config: {
		center: XY;
		size: number;
		angle: number;
		width: number;
		color: string;
	};

	type XY = {
		x: number;
		y: number;
	};

	$: x = rect.width * config.center.x;
	$: y = rect.height * config.center.y;
	$: angle = (config.angle * Math.PI) / 180;
	$: size = config.size;
	$: halfSize = size / 2;
	$: width = config.width;

	$: if (ctx && redraw) {
		ctx.save();
		ctx.translate(x, y);
		ctx.fillStyle = config.color;
		ctx.rotate(angle);
		ctx.fillRect(-halfSize, -halfSize, width, size);
		ctx.fillRect(-halfSize, -halfSize, size, width);
		ctx.fillRect(-halfSize, halfSize, size, width);
		ctx.fillRect(halfSize, -halfSize, width, size);
		ctx.restore();
	}
</script>
