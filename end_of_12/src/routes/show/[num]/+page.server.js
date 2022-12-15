export async function load({ fetch, params }) {
	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data = await res.json();

	return {
		episode: data
	};
}
