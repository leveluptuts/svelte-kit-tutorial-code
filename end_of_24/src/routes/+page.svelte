<script>
	import { navigating, page, updated, getStores } from '$app/stores';
	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data;

	$: console.log($navigating, $page);

	$: ({ latest_episode } = data);
	// const { latest_episode } = data;
</script>

<h3>{latest_episode.title}</h3>

<Test />
