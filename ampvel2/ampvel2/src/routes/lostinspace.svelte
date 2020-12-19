<script>
    import Controls from '../components/Controls.svelte'
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

    // let fuckLIS = () => {
    //     if (visibleLIS) {
    //         visibleLIS = false
    //     } else {
    //         visibleLIS = true
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

    let handlePlayShowLIS = (media) => {
        // if (LP) {
        //     console.log(media)
        //     let foo = media.split("TVShows", 2)
        //     let newpath = `http://192.168.0.42:8063` + media
        //     console.log(newpath)
        //     TVlocalplayURL.set(newpath)
        //     visibleLIS = false
        // } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleLIS = false
        // }
    }
</script>

<h1>Lost In Space</h1>
<Controls />
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