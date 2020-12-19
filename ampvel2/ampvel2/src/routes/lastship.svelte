<script>
    import Controls from '../components/Controls.svelte'
    let LSshowlist;
    let LSshowlistcount;

    async function getLS(x) {
        let addr = `http://192.168.0.42:8888/intLastShip?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            LSshowlist = data
            LSshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleLS1 = () => {
        let promise = getLS(`01`).catch(err => console.log(err));
    }

    let handleLS2 = () => {
        let promise = getLS(`02`).catch(err => console.log(err));
    }
    let handleLS3 = () => {
        let promise = getLS(`03`).catch(err => console.log(err));
    }
    let handleLS4 = () => {
        let promise = getLS(`04`).catch(err => console.log(err));
    }


    // let visibleLS = false
    // let fuckLS = () => {
    //     if (visibleLS) {
    //         visibleLS = false
    //     } else {
    //         visibleLS = true
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

    let handlePlayLS = (media) => {
        // if (LP) {
        //     console.log(media)

        //     let foo = media.split("TVShows", 2)
        //     let newpath = `http://192.168.0.42:8063` + foo[1]
        //     console.log(newpath)
        //     TVlocalplayURL.set(newpath)
        //     visibleLS = false
        // } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleLS = false
        // }
    }

</script>

<h1>The Last Ship</h1>
<Controls />
<svg viewBox="0 0 273 68">
    <rect on:click={handleLS1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleLS2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <!-- three and four need to be implemented on server -->
    <rect on:click={handleLS3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleLS4} x="0" y="34" width="100%" height="30" style="fill:purple;stroke-width:1;stroke:rgb(0,0,0)" />

    <text on:click={handleLS1}  x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleLS2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>

    <!-- three and four need to be implemented on server -->
    <text on:click={handleLS3}  x="210" y="18" font-size=".7em" fill="white">Season 3</text>
    <text on:click={handleLS4} x="120" y="53" font-size=".7em" fill="white">Season 4</text>
</svg> 

<ul>
    {#if LSshowlistcount > 0}
        {#each LSshowlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayLS(sshow.tvfspath)}>{sshow.title}</a>
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
        text-decoration: underline;
    }

    a {
        color:white;
        font-size: 22px;
    }


    h1 {
        color: white;
    }
</style>