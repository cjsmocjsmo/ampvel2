<script>
    import Controls from '../components/Controls.svelte'
    import mando from "../../static/mandalorian.jpg"
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getMandalorian(x) {
        let addr = `http://192.168.0.42:8888/intMandalorian?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data[0].episode)
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleMandalorian1 = () => {
        let promise = getMandalorian(`01`).catch(err => console.log(err));
    }

    let handleMandalorian2 = () => {
        let promise = getMandalorian(`02`).catch(err => console.log(err));
    }

    let handleMandalorian3 = () => {
        let promise = getMandalorian(`03`).catch(err => console.log(err));
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
	<title>Mandalorian</title>
</svelte:head>

<img class="mypic" src={mando} alt="fuck" />

<svg viewBox="0 0 273 36">
    <rect on:click={handleMandalorian1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleMandalorian2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleMandalorian3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleMandalorian1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleMandalorian2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleMandalorian3} x="210" y="18" font-size=".7em" fill="white">Season 3</text>
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

<Controls />

<style>
   
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