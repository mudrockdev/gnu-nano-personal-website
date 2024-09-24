<script>
	export let optionName;
	export let optionKey;
	export let wideBG = '';
</script>

<div class="flex">
	{#if wideBG}
		<a class="bg-[#3465A4] w-[42px] break-normal" href={'#'}>{optionKey}</a>
	{:else}
		<a class="bg-[#3465A4] w-[22px]" href={'#'}>{optionKey}</a>
	{/if}

	<p class="ml-4">{optionName}</p>
</div>
