<script>
	const { lineText, lineNumber } = $props();

	let stringWithWhiteSpaces = $state('');
	// svelte-ignore state_referenced_locally
	lineText.split().forEach((char) => {
		if (char === '') {
			stringWithWhiteSpaces += '&nbsp;';
		} else {
			stringWithWhiteSpaces += char;
		}
		console.log(stringWithWhiteSpaces);
	});

	/* onMount(() => {
		const digitSize = lineNumber.toString().length;
		const line = document?.querySelectorAll('.lineNumberBg');
		line.style.width = `${digitSize * 10}px`;
	}); */
</script>

<div class="" id={`line-${lineNumber}`}>
	<div class="flex">
		<div class="flex flex-row-reverse bg-[#3465A4] lineNumberBg">
			<p class="break-normal" href={'#'}>{lineNumber}</p>
		</div>
		<p class="pl-2">
			<!-- eslint-disable -->
			{@html stringWithWhiteSpaces}
			<!-- eslint-enable -->
		</p>
	</div>
</div>
