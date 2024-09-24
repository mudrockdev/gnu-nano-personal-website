import { createQuery } from '@tanstack/svelte-query';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const query = createQuery({
		queryKey: params.pageName,
		queryFn: () => fetch(`/content/${params.pageName}.txt`).then((res) => res.text())
	});

	let maxLineNumber = 0;

	query?.data.split('\n').forEach(() => {
		maxLineNumber += 1;
	});

	return {
		lines: query.data.split('\n'),
		maxLineNumber
	};
}
