<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		/* max-width: 56em; */
		max-width: 62em;

		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: rgb(33, 6, 77);
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>