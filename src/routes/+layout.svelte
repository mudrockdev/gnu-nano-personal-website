<script>
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Option from '$lib/Option.svelte';
	import ErrorPage from './+error.svelte';
	import TheCube from '$lib/TheCube.svelte';
	import { page } from '$app/stores';
	import './tailwind.css';
	const queryClient = new QueryClient();
	let weebMode = false;
	if (localStorage.getItem('weebMode') === null || localStorage.getItem('weebMode') === 'false') {
		weebMode = false;
	} else {
		weebMode = true;
	}

	function setWeebMode() {
		weebMode = !weebMode;

		weebMode === true
			? localStorage.setItem('weebMode', 'true')
			: localStorage.setItem('weebMode', 'false');
	}
</script>

{#if $page.status === 404}
	<ErrorPage />
{:else}
	<head>
		<title>Mudrock's website</title>
	</head>

	<QueryClientProvider client={queryClient}>
		<main class="max-w-screen max-h-screen">
			<div class="fixed w-screen">
				<div class="flex justify-between px-8 bg-[#3465A4]" id="nav">
					<p>GNU nano 8.2</p>
					<p>www.mudrock.dev</p>
					<div class="flex">
						I
						<a
							class="ml-4"
							href={'#'}
							on:click={() => {
								setWeebMode();
							}}>x</a
						>
					</div>
				</div>
			</div>
			<div class="flex">
				<slot />
				{#if weebMode}
					<div class="ml-auto mt-32 mr-32">
						<TheCube class="fixed right-0 bottom-0" />
					</div>
				{/if}
				<div class="fixed bottom-0 w-screen bg-black" id="footer">
					<div class="@container flex justify-between">
						<div class="flex flex-wrap justify-between sm:w-[20%] w-[30%]">
							<div>
								<Option optionKey="^G" optionName="Help" />
								<Option optionKey="^X" optionName="Exit" />
							</div>
							<div>
								<Option optionKey="^O" optionName="Write Out" />
								<Option optionKey="^R" optionName="Read File" />
							</div>
						</div>
						<div class="flex flex-wrap justify-between sm:w-[20%] w-[30%]">
							<div>
								<Option optionKey="^F" optionName="Where Is" />
								<Option optionKey={`^\\`} optionName="Replace" />
							</div>
							<div>
								<Option optionKey="^K" optionName="Cut" />
								<Option optionKey="^U" optionName="Paste" />
							</div>
						</div>
						<div class="flex flex-wrap justify-between sm:w-[20%] w-[30%]">
							<div>
								<Option optionKey="^T" optionName="Execute" />
								<Option optionKey="^J" optionName="Justify" />
							</div>
							<div>
								<Option optionKey="^C" optionName="Location" />
								<Option optionKey="^/" optionName="Go To Line" />
							</div>
						</div>
						<div class="hidden sm:block pr-8 w-[10%]">
							<Option optionKey="^M-U" optionName="Undo" wideBG="true" />
							<Option optionKey="^M-E" optionName="Redo" wideBG="true" />
						</div>
					</div>
				</div>
			</div>
		</main>
	</QueryClientProvider>
{/if}
