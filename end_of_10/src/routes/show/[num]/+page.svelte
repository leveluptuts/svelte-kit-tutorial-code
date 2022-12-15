<script>
	export let data;
	$: ({ episode } = data);
</script>

<h1>{episode.title}</h1>

{@html episode.html}
