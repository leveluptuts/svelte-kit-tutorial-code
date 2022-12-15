export async function load({ fetch }) {
	const all_ep_res = await fetch('https://syntax.fm/api/shows');
	const all_ep_data = await all_ep_res.json();
	return {
		all_episodes: all_ep_data
	};
}
