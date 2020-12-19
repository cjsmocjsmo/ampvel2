<script>
    import Controls from '../components/Controls.svelte'
    let ORVshowlist;
    let ORVshowlistcount;
    let visibleOrv = false

    async function getOrville(x) {

        let addr = `http://192.168.0.42:8888/intOrville?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            ORVshowlist = data
            ORVshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleOR1 = () => {
        let promise = getOrville(`01`).catch(err => console.log(err));
    }
    let handleOR2 = () => {
        let promise = getOrville(`02`).catch(err => console.log(err));
    }
    let handleOR3 = () => {
        let promise = getOrville(`03`).catch(err => console.log(err));
    }

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
</script>

<h1>The Orville</h1>
<Controls />
<svg viewBox="0 0 273 36">
    <rect on:click={handleOR1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleOR2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleOR3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <text on:click={handleOR1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleOR2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleOR3} x="210" y="18" font-size=".7em" fill="white">Season 3</text>
</svg> 

<ul>
    {#if ORVshowlistcount > 0}
        {#each ORVshowlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayShowOr(sshow.tvfspath)}>{sshow.title}</a>
            </li>
        {/each}
    {/if}
</ul>
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

    h1 {
        color: white;
    }

</style>