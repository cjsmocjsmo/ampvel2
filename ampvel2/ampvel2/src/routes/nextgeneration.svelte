<script>
    import Controls from '../components/Controls.svelte'
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

<h1>The Next Generation</h1>
<Controls />
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
<!-- <nav>
    <button class="boo" on:click={handleTNG1}>Season 1</button>
    <button class="boo" on:click={handleTNG2}>Season 2</button>
    <button class="boo" on:click={handleTNG3}>Season 3</button>
</nav> -->
<!-- <nav>
    
    <button class="boo" on:click={handleTNG4}>Season 4</button>
    <button class="boo" on:click={handleTNG5}>Season 5</button>
    <button class="boo" on:click={handleTNG6}>Season 6</button>
    <button class="bar" on:click={handleTNG7}>Season 7</button>
</nav> -->

<ul>
    {#if TNGshowlistcount > 0}
        {#each TNGshowlist as sshow }
            <li>
                <a href="tvshows" on:click={handlePlayTNG(sshow.tvfspath)}>{sshow.title}</a>
                <span>{sshow.episode}</span>
            </li>
        {/each}
    {/if}
</ul>


<style>
    span {
        margin-left: 20px;
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
    /* button {
        width:49%;
        padding:7px;
        margin:.5px;
        background-color: rgb(192, 62, 153);
        font-size: 16px;
        font-weight: bold;
    } */
    /* .boo {
        width:32%;
        margin:.5px;
    }
    .bar {
        width:98.5%;
    } */
</style>