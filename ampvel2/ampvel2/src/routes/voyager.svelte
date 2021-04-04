<script>
    import Controls from '../components/Controls.svelte'
    import voy from "../../static/voyager.jpg"
    let VOYshowlist;
    let VOYshowlistcount;
    let visibleVoy = false

    async function getVOY(x) {
        let addr = `http://192.168.0.42:8888/intVoyager?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            VOYshowlist = data
            VOYshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleVOY1 = () => {
        let promise = getVOY(`01`).catch(err => console.log(err));
    }

    let handleVOY2 = () => {
        let promise = getVOY(`02`).catch(err => console.log(err));
    }
    let handleVOY3 = () => {
        let promise = getVOY(`03`).catch(err => console.log(err));
    }
    let handleVOY4 = () => {
        let promise = getVOY(`04`).catch(err => console.log(err));
    }

    let handleVOY5 = () => {
        let promise = getVOY(`05`).catch(err => console.log(err));
    }

    let handleVOY6 = () => {
        let promise = getVOY(`06`).catch(err => console.log(err));
    }

    let handleVOY7 = () => {
        let promise = getVOY(`07`).catch(err => console.log(err));
    }

    let fuckVOY = () => {
        if (visibleVoy) {
            visibleVoy = false
        } else {
            visibleVoy = true
        }
    }

    async function getPlayMedia(x) {
        let y = "/media/pi/PiTB/media/TVShows" + x
        let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err));
    }

    let handlePlayVOY = (media) => {
        let promise = getPlayMedia(media).catch(err => console.log(err));
        visibleVOY = false
    }

</script>

<svelte:head>
	<title>Voyager</title>
</svelte:head>

<img class="mypic" src={voy} alt="fuck" />

<svg viewBox="0 0 273 100">
    <rect on:click={handleVOY1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleVOY2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleVOY3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect on:click={handleVOY4} x="0" y="33" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleVOY5} x="97" y="33" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleVOY6} x="195" y="33" width="32%" height="30" style="fill:blue;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect on:click={handleVOY7} x="0" y="66" width="100%" height="30" style="fill:purple;stroke-width:1;stroke:rgb(0,0,0)" />

    <text on:click={handleVOY1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleVOY2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleVOY3} x="210" y="18" font-size=".7em" fill="white">Season 3</text>

    <text on:click={handleVOY4} x="23" y="51" font-size=".7em" fill="white">Season 4</text>
    <text on:click={handleVOY5} x="120" y="51" font-size=".7em" fill="white">Season 5</text>
    <text on:click={handleVOY6} x="210" y="51" font-size=".7em" fill="white">Season 6</text>
    <text on:click={handleVOY7} x="120" y="85" font-size=".7em" fill="white">Season 7</text>
</svg>

<ul>
    {#if VOYshowlistcount > 0}
        {#each VOYshowlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayVOY(sshow.tvfspath)}>{sshow.title}</a>
            </li>
        {/each}
    {/if}
</ul>

<Controls />

<style>

    span {
        margin-right: 20px;
        color: white;
    }

    ul {
        list-style: none;
    }

    li {
        margin: 10px;
        text-decoration: none;
        
    }

    a {
        color:white;
        font-size: 22px;
    }

    .mypic {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        margin-bottom: 2em;
    }

</style>