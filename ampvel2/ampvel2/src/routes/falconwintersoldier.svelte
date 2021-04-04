<script>
    import Controls from '../components/Controls.svelte'
    let FWSshowlist;
    let FWSshowlistcount;
    let visibleOrv = false

    async function getFalconWinterSoldier(x) {

        let addr = `http://192.168.0.42:8888/intFalconWinterSoldier?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            FWSshowlist = data
            FWSshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleFWS1 = () => {
        let promise = getFalconWinterSoldier(`01`).catch(err => console.log(err));
    }
    let handleFWS2 = () => {
        let promise = getFalconWinterSoldier(`02`).catch(err => console.log(err));
    }
    // let handleFWS3 = () => {
    //     let promise = getFalconWinterSoldier(`03`).catch(err => console.log(err));
    // }

    // let fuckOrv = () => {
    //     if (visibleOrv) {
    //         visibleOrv = false
    //     } else {
    //         visibleOrv = true
    //     }
    // }

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
        // if (LP) {
        //     let foo = media.split("TVShows", 2)
        //     let newpath = `http://192.168.0.42:8063` + media
        //     TVlocalplayURL.set(newpath)
        //     visibleOrv = false
        // } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleOrv = false
        // }
    }
    import fws from "../../static/falconwintersoldier.jpg"
</script>

<svelte:head>
	<title>The Falcon And The Winter Soldier</title>
</svelte:head>

<img class="mypic" src={fws} alt="fuck" />

<!-- <h1>The Falcon And The Winter Soldier</h1> -->

<svg viewBox="0 0 273 34">
    <rect on:click={handleFWS1} x="0" y="0" width="100%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <!-- <rect on:click={handleFWS2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" /> -->
    <!-- <rect on:click={handleFWS3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" /> -->
    <text on:click={handleFWS1} x="110" y="18" font-size=".7em" fill="white">Season 1</text>
    <!-- <text on:click={handleFWS2} x="120" y="18" font-size=".7em" fill="white">Season 2</text> -->
    <!-- <text on:click={handleFWS3} x="210" y="18" font-size=".7em" fill="white">Season 3</text> -->
</svg> 

<ul>
    {#if FWSshowlistcount > 0}
        {#each FWSshowlist as sshow }
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

    /* h1 {
        color: white;
    } */
    .mypic {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        margin-bottom: 2em;
    }
</style>