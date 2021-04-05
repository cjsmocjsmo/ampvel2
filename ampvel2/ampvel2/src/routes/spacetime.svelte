<script>
    import Controls from '../components/Controls.svelte'
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getSpaceTime(x) {
        let addr = `http://192.168.0.42:8888/intSpaceTime?season=01`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data[0].episode)
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleSpaceTime1 = () => {
        let promise = getSpaceTime(`01`).catch(err => console.log(err));
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
    }

</script>

<svelte:head>
	<title>SpaceTime</title>
</svelte:head>

<h1>PBS SpaceTime</h1>

<Controls />

<svg viewBox="0 0 273 35">
    <rect on:click={handleSpaceTime1} x="0" y="0" width="100%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleSpaceTime1} x="112" y="18" font-size=".7em" fill="white">Season 1</text>
</svg> 

<ul>
    {#if showlistcount > 0}
        {#each showlist as sshow }
            <li>
                <a href="tvshows" on:click={handlePlayShow(sshow.tvfspath)}>{sshow.title}</a>
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
 
</style>