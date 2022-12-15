// GET request for route
export async function load({ fetch }) {
	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();

	return {
		latest_episode: data
	};
}
