<script lang="ts">
	import SuzuranAngy from '../assets/suzuran-angy.gif';
	import SuzuranHappy from '../assets/suzuran-happy.gif';
	import SuzuranTail from '../assets/suzuran-tail.gif';
	import VulpisfogliaCry from '../assets/vulpisfoglia-cry.gif';
	import VulpisfogliaGroom from '../assets/vulpisfoglia-groom.gif';
	import VulpisfogliaPleading from '../assets/vulpisfoglia-pleading.gif';
</script>

<div class="container">
	<div class="prism">
		<div class="face front">
			<img src={SuzuranAngy} alt="" />
		</div>
		<div class="face back">
			<img src={VulpisfogliaCry} alt="" />
		</div>
		<div class="face right">
			<img src={SuzuranHappy} alt="" />
		</div>
		<div class="face left">
			<img src={VulpisfogliaGroom} alt="" />
		</div>
		<div class="face top">
			<img src={SuzuranTail} alt="" />
		</div>
		<div class="face bottom">
			<img src={VulpisfogliaPleading} alt="" />
		</div>
	</div>
</div>

<style>
	.container {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.prism {
		position: relative;
		width: 200px;
		height: 200px;
		transform-style: preserve-3d;
		animation: rotate 10s infinite linear;
	}

	.face {
		position: absolute;
		width: 200px;
		height: 200px;
		background-color: rgba(255, 255, 255, 1);
		border: 2px solid #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		color: white;
		border-radius: 10px;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 10px;
		}
	}

	.front {
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1);
	}

	.back {
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -100, 1);
	}

	.right {
		transform: matrix3d(0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 100, 0, 0, 1);
	}

	.left {
		transform: matrix3d(0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, 0, 0, 1);
	}

	.top {
		transform: matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 100, 0, 1);
	}

	.bottom {
		transform: matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, 0, 1);
	}

	@keyframes rotate {
		from {
			transform: rotateX(0) rotateY(0) rotateZ(0);
		}
		to {
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
		}
	}
</style>
