import { error } from '@sveltejs/kit';

export async function load({ fetch, params, setHeaders, locals }) {
	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data = await res.json();

	if (data.message) {
		throw error(404, {
			message: data.message
		});
	}

	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return {
		episode: data,
		user: locals.user
	};
}
