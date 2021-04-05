<script>
    import Controls from '../components/Controls.svelte'
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getSeanCarrol(x) {
        let addr = `http://192.168.0.42:8888/intSeanCarrol?season=01`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data[0].episode)
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleSeanCarrol1 = () => {
        let promise = getSeanCarrol(`01`).catch(err => console.log(err));
    }

    async function getPlayMedia(x) {
        let y = "/media/pi/PiTB/media/TVShows" + x
        console.log("this is y")
        console.log(y)
        let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`
        console.log(addr)
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err));
    }

     let handlePlayShow = (media) => {
        let promise = getPlayMedia(media).catch(err => console.log(err));
        visibleDis = false
    }
</script>

<svelte:head>
	<title>Sean Carrol</title>
</svelte:head>

<h1>Sean Carroll Phd</h1>

<Controls />

<svg viewBox="0 0 273 35">
    <rect on:click={handleSeanCarrol1} x="0" y="0" width="100%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <!-- <rect on:click={handleSeanCarrol2} x="135" y="0" width="49%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleSeanCarrol1} x="48" y="18" font-size=".7em" fill="white">Season 1</text> -->
    <text on:click={handleSeanCarrol1} x="112" y="18" font-size=".7em" fill="white">Season 1</text>
</svg> 

<ul>
    {#if showlistcount > 0}
        {#each showlist as sshow }
            <li>
                <a href="tvshows" on:click={handlePlayShow(sshow.tvfspath)}>{sshow.title}</a>
                <!-- <span>{sshow.episode}</span> -->
            </li>
        {/each}
    {/if}
</ul>

<style>

    ul {
        list-style: none;
    }

    li {
        margin: 10px;
        text-decoration: underline;
        
    }

    a {
        color: white;
        font-size: 22px;
    }

    h1 {
        color: white;
    }

    h1 {
        color: white;
    }

</style>