<script>
	//import { createQuery } from '@tanstack/svelte-query';
	import Line from '../lib/Line.svelte';
	import Data from '../content/mainpage.js';

	const pageData = Data.split('\n');

	/*let maxLineNumber = 0;

	pageData.forEach(() => (maxLineNumber += 1)); */

	/* const pageData = fetch(Data)
		.then((res) => res.text())
		.then((data) => data.split('\n')); */

	/* function getPageData() {
		const data = fetch(`/content/mainpage.txt`)
			.then((response) => response.text())
			.then((text) => text.split('\n'));

		return data;
	}

	const query = createQuery({
		queryKey: ['pagedata'],
		queryFn: () => getPageData()
	});

	function setLineBgSize() {
		const digitSize = maxLineNumber.toString().length;
		const line = document?.querySelectorAll('.lineNumberBg');
		line.style.width = `${digitSize * 10}px`;
	} */

	/* window?.addEventListener('load', () => {
		if ($query.data) {
			let currentViewY = 0;
			document.addEventListener('keydown', (e) => {
				e.stopPropagation();
				if (e.key === 'ArrowUp') {
					e.preventDefault();
					window.scroll(currentViewY, currentViewY - 24);
					if (currentViewY >= 24) {
						currentViewY -= 24;
					}
				}
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					window.scroll(currentViewY, currentViewY + 24);
					if (currentViewY < maxLineNumber * 24) {
						currentViewY += 24;
					}
				}
			});

			document.addEventListener(
				'wheel',
				(e) => {
					e.stopPropagation();
					if (e.deltaY < 0) {
						e.preventDefault();
						window.scroll(currentViewY, currentViewY - 24);
						if (currentViewY >= 24) {
							currentViewY -= 24;
						}
					}
					if (e.deltaY > 0) {
						e.preventDefault();
						window.scroll(currentViewY, currentViewY + 24);
						if (currentViewY < maxLineNumber * 24) {
							currentViewY += 24;
						}
					}
				},
				{ passive: false }
			);
		}
	}); */
</script>

<!-- <div id="line-list">
	{#if $query.isLoading}
		<p>Loading...</p>
	{:else if $query.isError}
		<p>Error: {$query.error.message}</p>
	{:else if $query.isSuccess}
		{#each $query.data as lineText, i}
			<Line lineNumber={i} {lineText} />
		{/each}
	{/if}
</div> -->
<div id="line-list">
	{#each pageData as lineText, i}
		<Line lineNumber={i} {lineText} />
	{/each}
</div>
