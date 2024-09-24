<script>
	import Line from '$lib/Line.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const lines = data.lines;
	const maxLineNumber = data.maxLineNumber;
</script>

<div id="line-list">
	{#each lines as lineText, i}
		<Line lineNumber={i} {maxLineNumber} {lineText} />
	{/each}
</div>
