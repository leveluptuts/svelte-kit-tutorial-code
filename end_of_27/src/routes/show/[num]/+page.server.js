import { error, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

import { LUT_API } from '$env/static/private';
console.log('LUT_API', LUT_API);

export async function load({ fetch, params, setHeaders, locals }) {
	if (!locals?.user?.id) throw redirect(307, '/');

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
