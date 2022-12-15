<script>
	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data;

	$: ({ latest_episode, all_episodes } = data);
	// const { latest_episode } = data;
</script>

<h3>{latest_episode.title}</h3>
<nav>
	<ul>
		{#each all_episodes as episode}
			<li>
				<a href="">{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<Test />
