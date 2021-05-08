<script>
    import Controls from '../components/Controls.svelte'
    import tbb from "../../static/thebadbatch.jpg"
    let tbbshowlist;
    let tbbshowlistcount;
    let visibleDis = false

    async function getTheBadBatch(x) {
        console.log(x)
        let addr = `http://192.168.0.42:8888/intTheBadBatch?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data[0].episode)
            tbbshowlist = data
            tbbshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleTheBadBatch1 = () => {
        let promise = getTheBadBatch("01").catch(err => console.log(err));
    }
//
    // let handleFuck2 = () => {
    //     let promise = getTheBadBatch(`02`).catch(err => console.log(err));
    // }

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
	<title>The Bad Batch</title>
</svelte:head>

<img class="mypic" src={tbb} alt="fuck" />

<svg viewBox="0 0 273 35">
    <rect on:click={handleTheBadBatch1} x="0" y="0" width="100%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <!-- <rect on:click={handleFuck2} x="135" y="0" width="49%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" /> -->
    <text on:click={handleTheBadBatch1} x="110" y="18" font-size=".7em" fill="white">Season 1</text>
    <!-- <text on:click={handleFuck2} x="177" y="18" font-size=".7em" fill="white">Season 2</text> -->
</svg> 

<ul>
    {#if tbbshowlistcount > 0}
        {#each tbbshowlist as sshow }
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