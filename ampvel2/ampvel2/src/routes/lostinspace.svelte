<script>
    import Controls from '../components/Controls.svelte'
    import lis from "../../static/lostinspace.jpg"
    let LISshowlist;
    let LISshowlistcount;
    let visibleLIS = false

    async function getLostInSpace(x) {
        let addr = `http://192.168.0.42:8888/intLostInSpace?season=${x}`
        console.log(addr)
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            LISshowlist = data
            LISshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleLIS1 = () => {
        let promise = getLostInSpace(`01`).catch(err => console.log(err));
    }
    let handleLIS2 = () => {
        let promise = getLostInSpace(`02`).catch(err => console.log(err));
    }

    let handleLIS3 = () => {
        let promise = getLostInSpace(`03`).catch(err => console.log(err));
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

    let handlePlayShowLIS = (media) => {
        let promise = getPlayMedia(media).catch(err => console.log(err));
        visibleLIS = false
    }
    
</script>

<svelte:head>
	<title>Lost In Space</title>
</svelte:head>

<img class="mypic" src={lis} alt="fuck" />

<svg viewBox="0 0 273 36">
    <rect on:click={handleLIS1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleLIS2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleLIS3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleLIS1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleLIS2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleLIS3} x="210" y="18" font-size=".7em" fill="white">Season 3</text>
</svg> 

<ul>
    {#if LISshowlistcount > 0}
        {#each LISshowlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayShowLIS(sshow.tvfspath)}>{sshow.title}</a>
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