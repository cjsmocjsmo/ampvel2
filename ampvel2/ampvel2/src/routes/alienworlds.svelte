<script>
    import Controls from '../components/Controls.svelte'
    import AW from "../../static/alienworlds.jpg"
    let AWorldsshowlist;
    let AWorldsshowlistcount;
    let visibleOrv = false

    async function getAlienWorlds(x) {
        let addr = `http://192.168.0.42:8888/intAlienWorlds?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            AWorldsshowlist = data
            AWorldsshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleAlienWorlds1 = () => {
        let promise = getAlienWorlds(`01`).catch(err => console.log(err));
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

    let handlePlayShowOr = (media) => {
        let promise = getPlayMedia(media).catch(err => console.log(err));
        visibleOrv = false
    }
    
</script>

<svelte:head>
	<title>Alien Worlds</title>
</svelte:head>

<img class="mypic" src={AW} alt='fuck' />

<svg viewBox="0 0 273 34">
    <rect on:click={handleAlienWorlds1} x="0" y="0" width="100%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleAlienWorlds1} x="123" y="18" font-size=".7em" fill="white">Season 1</text>
</svg> 

<ul>
    {#if AWorldsshowlistcount > 0}
        {#each AWorldsshowlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayShowOr(sshow.tvfspath)}>{sshow.title}</a>
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