<script>
    import Controls from '../components/Controls.svelte'
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getSTTV(x) {
        let addr = `http://192.168.0.42:8888/intSTTV?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleSTTVClick1 = () => {
        let promise = getSTTV(`01`).catch(err => console.log(err));
    }

    let handleSTTVClick2 = () => {
        let promise = getSTTV(`02`).catch(err => console.log(err));
    }
    let handleSTTVClick3 = () => {
        let promise = getSTTV(`03`).catch(err => console.log(err));
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
        let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`
        
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err));
    }

    let handlePlayShowSTTV = (media) => {
        // if (LP) {
        //     console.log(media)

        //     let foo = media.split("TVShows", 2)
        //     let newpath = `http://192.168.0.42:8063` + media
        //     console.log(newpath)
        //     TVlocalplayURL.set(newpath)
        //     visibleDis = false
        // } else {
        let promise = getPlayMedia(media).catch(err => console.log(err));
        visibleDis = false
        // }
    }
</script>

<h1>Star Trek</h1>
<Controls />
<svg viewBox="0 0 273 32">
    <rect on:click={handleSTTVClick1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleSTTVClick2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleSTTVClick3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect x="0" y="33" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect x="97" y="33" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect x="195" y="33" width="32%" height="30" style="fill:blue;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect x="0" y="67" width="100%" height="30" style="fill:purple;stroke-width:1;stroke:rgb(0,0,0)" />

    <text on:click={handleSTTVClick1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleSTTVClick2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleSTTVClick3} x="210" y="18" font-size=".7em" fill="white">Season 3</text>

    <text x="23" y="51" font-size=".7em" fill="white">Season 4</text>
    <text x="120" y="51" font-size=".7em" fill="white">Season 5</text>
    <text x="210" y="51" font-size=".7em" fill="white">Season 6</text>
    <text x="120" y="85" font-size=".7em" fill="white">Season 7</text>
</svg> 

<!-- <nav>
    <button class="baz" on:click={handleSTTVClick1}>Season 1</button>
    <button class="baz" on:click={handleSTTVClick2}>Season 2</button>
    <button class="baz" on:click={handleSTTVClick3}>Season 3</button>
</nav> -->

<ul>
    {#if showlistcount > 0}
        {#each showlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayShowSTTV(sshow.tvfspath)}>{sshow.title}</a>
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