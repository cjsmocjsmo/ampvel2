<script>
    import Controls from '../components/Controls.svelte'
    let FAMKshowlist;
    let FAMKshowlistcount;
    let visibleOrv = false

    async function getForAllManKind(x) {

        let addr = `http://192.168.0.42:8888/intForAllManKind?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            FAMKshowlist = data
            FAMKshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleFAMK1 = () => {
        let promise = getForAllManKind(`01`).catch(err => console.log(err));
    }
    let handleFAMK2 = () => {
        let promise = getForAllManKind(`02`).catch(err => console.log(err));
    }
    // let handleFAMK3 = () => {
    //     let promise = getForAllManKind(`03`).catch(err => console.log(err));
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

    import foobar from "../../static/forallmankind.jpg"
</script>

<svelte:head>
	<title>For All ManKind</title>
</svelte:head>

<img class="mypic" src={foobar} alt="fuck"/>

<svg viewBox="0 0 273 34">
    <rect on:click={handleFAMK1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleFAMK2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleFAMK1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleFAMK2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text x="210" y="18" font-size=".7em" fill="white">Season 3</text>
</svg> 

<ul>
    {#if FAMKshowlistcount > 0}
        {#each FAMKshowlist as sshow }
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