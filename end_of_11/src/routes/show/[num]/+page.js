export async function load({ fetch, params, parent }) {
	const parent_data = await parent();
	console.log('parent_data', parent_data);
	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data = await res.json();
	return {
		episode: data
	};
}
