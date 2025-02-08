<script>
	//let { skinUrl } = $props();

	let rotationX = $state(0);
	let rotationY = $state(0);
	let isDragging = $state(false);
	let startX = $state(0);
	let startY = $state(0);

	function handleMouseDown(e) {
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
	}

	function handleMouseMove(e) {
		if (isDragging) {
			const deltaX = e.clientX - startX;
			const deltaY = e.clientY - startY;

			rotationY = (rotationY + deltaX * 0.5) % 360;
			rotationX = Math.max(-90, Math.min(90, rotationX + deltaY * 0.5)); // Limit vertical rotation

			startX = e.clientX;
			startY = e.clientY;
		}
	}

	function handleMouseUp() {
		isDragging = false;
	}
</script>

<!--eslint-disable-->
<div
	class="character-container bg-blue-200"
	role="button"
	tabindex="-1"
	onmousedown={(e) => handleMouseDown(e)}
	onmousemove={(e) => handleMouseMove(e)}
	onmouseup={(e) => handleMouseUp(e)}
	onmouseleave={(e) => handleMouseUp(e)}
>
	<div class="character" style:transform="rotateY({rotationY}deg)">
		<div class="cube head">
			<div class="face front" style:background-position="16px 8px"></div>
			<div class="face back" style:background-position="72px 8px"></div>
			<div class="face right" style:background-position="16px 8px"></div>
			<div class="face left" style:background-position="0px 8px"></div>
			<div class="face top" style:background-position="24px 0px"></div>
			<div class="face bottom" style:background-position="32px 0px"></div>
		</div>

		<div class="cube body">
			<div class="face front" style:background-position="20px 20px"></div>
			<div class="face back" style:background-position="32px 20px"></div>
			<div class="face right" style:background-position="16px 20px"></div>
			<div class="face left" style:background-position="28px 20px"></div>
			<div class="face top" style:background-position="20px 16px"></div>
			<div class="face bottom" style:background-position="28px 16px"></div>
		</div>

		<div class="cube right-arm">
			<div class="face front" style:background-position="44px 20px"></div>
			<div class="face back" style:background-position="52px 20px"></div>
			<div class="face right" style:background-position="40px 20px"></div>
			<div class="face left" style:background-position="48px 20px"></div>
			<div class="face top" style:background-position="44px 16px"></div>
			<div class="face bottom" style:background-position="48px 16px"></div>
		</div>

		<div class="cube left-arm">
			<div class="face front" style:background-position="36px 52px"></div>
			<div class="face back" style:background-position="44px 52px"></div>
			<div class="face right" style:background-position="32px 52px"></div>
			<div class="face left" style:background-position="40px 52px"></div>
			<div class="face top" style:background-position="36px 48px"></div>
			<div class="face bottom" style:background-position="40px 48px"></div>
		</div>

		<div class="cube right-leg">
			<div class="face front" style:background-position="4px 20px"></div>
			<div class="face back" style:background-position="12px 20px"></div>
			<div class="face right" style:background-position="0px 20px"></div>
			<div class="face left" style:background-position="8px 20px"></div>
			<div class="face top" style:background-position="4px 16px"></div>
			<div class="face bottom" style:background-position="8px 16px"></div>
		</div>
		<div class="cube left-leg">
			<div class="face front" style:background-position="20px 52px"></div>
			<div class="face back" style:background-position="28px 52px"></div>
			<div class="face right" style:background-position="16px 52px"></div>
			<div class="face left" style:background-position="24px 52px"></div>
			<div class="face top" style:background-position="20px 48px"></div>
			<div class="face bottom" style:background-position="24px 48px"></div>
		</div>
	</div>
</div>

<!--eslint-enable-->

<style>
	.character-container {
		perspective: 1000px;
		width: 200px;
		height: 200px;
		margin: 100px auto;
	}

	.character {
		position: relative;
		transform-style: preserve-3d;
		width: 100%;
		height: 100%;
		transition: transform 0.1s;
	}

	.cube {
		position: absolute;
		transform-style: preserve-3d;
	}

	.head {
		width: 64px;
		height: 64px;
		transform: translateZ(100px);
	}

	.head .face {
		background-size: 256px 256px;
	}

	.body {
		width: 64px;
		height: 96px;
		transform: translateY(76px) translateZ(100px);
	}

	.body .face {
		background-size: 256px 256px;
	}

	.right-arm {
		width: 32px;
		height: 96px;
		transform: translateX(-40px) translateY(76px) translateZ(108px);
	}

	.right-arm .face {
		background-size: 256px 256px;
	}

	.left-arm {
		width: 32px;
		height: 96px;
		transform: translateX(72px) translateY(76px) translateZ(100px);
	}

	.left-arm .face {
		background-size: 256px 256px;
	}

	.right-leg {
		width: 32px;
		height: 96px;
		transform: translateX(0px) translateY(180px) translateZ(100px);
	}

	.right-leg .face {
		background-size: 256px 256px;
	}

	.left-leg {
		width: 32px;
		height: 96px;
		transform: translateX(32px) translateY(180px) translateZ(100px);
	}

	.left-leg .face {
		background-size: 256px 256px;
	}

	.face {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url('/beyaz.png');
		image-rendering: pixelated;
		backface-visibility: hidden;
	}

	.face.front {
		transform: translateZ(32px);
	}

	.face.back {
		transform: rotateY(180deg) translateZ(32px);
	}

	.face.right {
		transform: rotateY(90deg) translateZ(32px);
	}

	.face.left {
		transform: rotateY(-90deg) translateZ(32px);
	}

	.face.top {
		transform: rotateX(90deg) translateZ(32px);
	}

	.face.bottom {
		transform: rotateX(-90deg) translateZ(32px);
	}

	.right-arm .face,
	.left-arm .face,
	.right-leg .face,
	.left-leg .face {
		transform-origin: center;
	}

	.right-arm .face.front,
	.left-arm .face.front,
	.right-leg .face.front,
	.left-leg .face.front {
		transform: translateZ(8px);
	}

	.right-arm .face.back,
	.left-arm .face.back,
	.right-leg .face.back,
	.left-leg .face.back {
		transform: rotateY(180deg) translateZ(8px);
	}

	.right-arm .face.right,
	.left-arm .face.right,
	.right-leg .face.right,
	.left-leg .face.right {
		transform: rotateY(90deg) translateZ(8px);
	}

	.right-arm .face.left,
	.left-arm .face.left,
	.right-leg .face.left,
	.left-leg .face.left {
		transform: rotateY(-90deg) translateZ(8px);
	}

	.right-arm .face.top,
	.left-arm .face.top,
	.right-leg .face.top,
	.left-leg .face.top {
		transform: rotateX(90deg) translateZ(8px);
	}

	.right-arm .face.bottom,
	.left-arm .face.bottom,
	.right-leg .face.bottom,
	.left-leg .face.bottom {
		transform: rotateX(-90deg) translateZ(8px);
	}
</style>
