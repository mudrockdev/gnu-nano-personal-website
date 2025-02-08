<script>
	export let optionName;
	export let optionKey;
	export let wideBG = '';
</script>

<div class="flex h-[50%]">
	{#if wideBG}
		<a class="bg-[#3465A4] w-[42px] break-normal" href={'/404'}>{optionKey}</a>
	{:else if optionKey === '^/'}
		<a class="bg-[#3465A4] w-[24px]" href={'/404'}>{optionKey}</a>
	{:else}
		<a class="bg-[#3465A4] w-[22px]" href={'/404'}>{optionKey}</a>
	{/if}

	<p class="ml-4">{optionName}</p>
</div>
