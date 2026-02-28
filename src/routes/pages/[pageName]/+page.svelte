<script>
	import Line from '$lib/Line.svelte';

	const { data } = $props();

	const lines = $derived(data.lines);
	const maxLineNumber = $derived(data.maxLineNumber);
</script>

<div id="line-list">
	{#each lines as lineText, i}
		<Line lineNumber={i} {maxLineNumber} {lineText} />
	{/each}
</div>
