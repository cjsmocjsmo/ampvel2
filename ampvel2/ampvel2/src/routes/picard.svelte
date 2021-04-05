<script>
    import Controls from '../components/Controls.svelte'
    import picard from "../../static/picard.jpg"
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getPicard(x) {
        let addr = `http://192.168.0.42:8888/intPicard?season=01`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data[0].episode)
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handlePicard1 = () => {
        let promise = getPicard(`01`).catch(err => console.log(err));
    }

    let handlePicard2 = () => {
        let promise = getPicard(`02`).catch(err => console.log(err));
    }

    let fuckDis = () => {
        if (visibleDis) {
            visibleDis = false
        } else {
            visibleDis = true
        }
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
	<title>Picard</title>
</svelte:head>

<img class="mypic" src={picard} alt="fuck" />

<svg viewBox="0 0 273 35">
    <rect on:click={handlePicard1} x="0" y="0" width="49%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handlePicard2} x="135" y="0" width="49%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handlePicard1} x="48" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handlePicard2} x="177" y="18" font-size=".7em" fill="white">Season 2</text>
</svg> 

<ul>
    {#if showlistcount > 0}
        {#each showlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayShow(sshow.tvfspath)}>{sshow.title}</a>
                
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
        text-decoration: underline;
        
    }

    a {
        color: white;
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