<script>
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Option from '$lib/Option.svelte';
	import ErrorPage from './+error.svelte';
	import { page } from '$app/stores';
	import './tailwind.css';

	const queryClient = new QueryClient();
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
					<p>GNU nano 8.1</p>
					<p>www.mudrock.dev</p>
					<p>I</p>
				</div>
			</div>
			<slot />
			<div class="fixed bottom-0 w-screen bg-black" id="footer">
				<div class="flex justify-between pr-32">
					<div>
						<Option optionKey="^G" optionName="Help" />
						<Option optionKey="^X" optionName="Exit" />
					</div>
					<div>
						<Option optionKey="^O" optionName="Write Out" />
						<Option optionKey="^R" optionName="Read File" />
					</div>
					<div>
						<Option optionKey="^F" optionName="Where Is" />
						<Option optionKey={`^\\`} optionName="Replace" />
					</div>
					<div>
						<Option optionKey="^K" optionName="Cut" />
						<Option optionKey="^U" optionName="Paste" />
					</div>
					<div>
						<Option optionKey="^T" optionName="Execute" />
						<Option optionKey="^J" optionName="Justify" />
					</div>
					<div>
						<Option optionKey="^C" optionName="Location" />
						<Option optionKey="^/" optionName="Go To Line" />
					</div>
					<div>
						<Option optionKey="^M-U" optionName="Undo" wideBG="true" />
						<Option optionKey="^M-E" optionName="Redo" wideBG="true" />
					</div>
				</div>
			</div>
		</main>
	</QueryClientProvider>
{/if}
