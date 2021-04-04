<script>
    import Controls from '../components/Controls.svelte'
    import nextgen from "../../static/nextgen.jpg"
    let TNGshowlist;
    let TNGshowlistcount;
    let visibleTNG = false

    async function getTNG(x) {
        let addr = `http://192.168.0.42:8888/intTNG?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            TNGshowlist = data
            TNGshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleTNG1 = () => {
        let promise = getTNG(`01`).catch(err => console.log(err));
    }

    let handleTNG2 = () => {
        let promise = getTNG(`02`).catch(err => console.log(err));
    }
    let handleTNG3 = () => {
        let promise = getTNG(`03`).catch(err => console.log(err));
    }
    let handleTNG4 = () => {
        let promise = getTNG(`04`).catch(err => console.log(err));
    }

    let handleTNG5 = () => {
        let promise = getTNG(`05`).catch(err => console.log(err));
    }

    let handleTNG6 = () => {
        let promise = getTNG(`06`).catch(err => console.log(err));
    }

    let handleTNG7 = () => {
        let promise = getTNG(`07`).catch(err => console.log(err));
    }

    let fuckTNG = () => {
        if (visibleTNG) {
            visibleTNG = false
        } else {
            visibleTNG = true
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

    let handlePlayTNG = (media) => {
        // if (LP) {
        //     console.log(media)

        //     let foo = media.split("TVShows", 2)
        //     let newpath = `http://192.168.0.42:8063` + media
        //     console.log(newpath)
        //     TVlocalplayURL.set(newpath)
        //     visibleTNG = false
        // } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleTNG = false
        // }
    }

</script>

<svelte:head>
	<title>Next Generation</title>
</svelte:head>

<img class="mypic" src={nextgen} alt="fuck" />

<svg viewBox="0 0 273 100">
    <rect on:click={handleTNG1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleTNG2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleTNG3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect on:click={handleTNG4} x="0" y="33" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleTNG5} x="97" y="33" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleTNG6} x="195" y="33" width="32%" height="30" style="fill:blue;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect on:click={handleTNG7} x="0" y="67" width="100%" height="30" style="fill:purple;stroke-width:1;stroke:rgb(0,0,0)" />

    <text on:click={handleTNG1}  x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleTNG2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleTNG3}  x="210" y="18" font-size=".7em" fill="white">Season 3</text>

    <text on:click={handleTNG4} x="23" y="51" font-size=".7em" fill="white">Season 4</text>
    <text on:click={handleTNG5} x="120" y="51" font-size=".7em" fill="white">Season 5</text>
    <text on:click={handleTNG6} x="210" y="51" font-size=".7em" fill="white">Season 6</text>
    <text on:click={handleTNG7} x="120" y="85" font-size=".7em" fill="white">Season 7</text>
</svg> 

<ul>
    {#if TNGshowlistcount > 0}
        {#each TNGshowlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayTNG(sshow.tvfspath)}>{sshow.title}</a>
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