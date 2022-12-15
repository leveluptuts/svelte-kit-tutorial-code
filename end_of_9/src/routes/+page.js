export async function load({ fetch }) {
	const res = await fetch('https://syntax.fm/api/shows/latest');
	const all_ep_res = await fetch('https://syntax.fm/api/shows');
	const data = await res.json();
	const all_ep_data = await all_ep_res.json();

	return {
		latest_episode: data,
		all_episodes: all_ep_data
	};
}
