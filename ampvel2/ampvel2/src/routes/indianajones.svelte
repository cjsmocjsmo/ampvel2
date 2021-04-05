<script>
	import Controls from '../components/Controls.svelte'
	import { onMount } from 'svelte';

	let NewDat = [];
	const addr = "http://192.168.0.42:8888/"
	onMount(async () => {
		await fetch(`http://192.168.0.42:8888/intIndianaJones`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			NewDat = data.map(da => {
				let np = da.thumbpath.split("/")
				let newpath =  np[1] + "/" + np[2]
				const thumbpath = addr + newpath
				return {"movfspath":da.movfspath, "movname":da.movname, "thumbpath":thumbpath}
			})
	}).catch(err => console.log(err));
})
import { omxaddr, movaddr } from '../components/PlayerStore.js'

let omxaddr_value;
const unsubampvel = omxaddr.subscribe(value => {
  omxaddr_value = value
})

let movaddr_value;
const unsubmovaddr = movaddr.subscribe(value => {
  movaddr_value = value
})

async function getPlayMov(mov) {
	let addr = `${omxaddr_value}/playMediaReact?movie=${mov}`
	console.log(addr)
	await fetch(addr, {mode: "cors", method: "GET"})
	.then(r => r.json())
	.then(data => {
		console.log(data)
	}).catch(err => console.log(err));
}
let handlegetMovClick = (x) => {
	let promise = getPlayMov(x).catch(err => console.log(err));
}

</script>

<svelte:head>
	<title>Indiana Jones</title>
</svelte:head>

<nav>
	<button class="b1"><a href=".">Back</a></button>
	<h1>Indiana Jones</h1>
</nav>
<Controls />

{#each NewDat as N}
	<img on:click={handlegetMovClick(N["movfspath"])} src={N["thumbpath"]} alt="fucked up"/>
{/each}

<Controls />

<nav>
	<button class="b1"><a href=".">Back</a></button>
	<button><a href=".">Back</a></button>
</nav>

<style>

	.b1 {
		float:right;
	}

	h1 {
		color: white;
	}

	img {
        width: 130px;
        height: 195px;
        padding: 1px;
    }
	
</style>