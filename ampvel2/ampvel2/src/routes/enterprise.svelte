<script>
    import Controls from '../components/Controls.svelte'
    import ent from "../../static/enterprise.jpg"
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getEnterprise(x) {
        let addr = `http://192.168.0.42:8888/intEnterprise?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleEnterpriseClick1 = () => {
        let promise = getEnterprise(`01`).catch(err => console.log(err));
    }

    let handleEnterpriseClick2 = () => {
        let promise = getEnterprise(`02`).catch(err => console.log(err));
    }
    let handleEnterpriseClick3 = () => {
        let promise = getEnterprise(`03`).catch(err => console.log(err));
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

    let handlePlayShowEnterprise = (media) => {
        let promise = getPlayMedia(media).catch(err => console.log(err));
        visibleDis = false
    }

</script>

<svelte:head>
	<title>Star Trek</title>
</svelte:head>

<img class="mypic" src={ent} alt="fuck" />

<svg viewBox="0 0 273 32">
    <rect on:click={handleEnterpriseClick1} x="0" y="0" width="32%" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleEnterpriseClick2} x="97" y="0" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect on:click={handleEnterpriseClick3} x="195" y="0" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect x="0" y="33" width="32%" height="30" style="fill:red;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect x="97" y="33" width="32%" height="30" style="fill:green;stroke-width:1;stroke:rgb(0,0,0)" />
    <rect x="195" y="33" width="32%" height="30" style="fill:blue;stroke-width:1;stroke:rgb(0,0,0)" />

    <rect x="0" y="67" width="100%" height="30" style="fill:purple;stroke-width:1;stroke:rgb(0,0,0)" />

    <text on:click={handleEnterpriseClick1} x="23" y="18" font-size=".7em" fill="white">Season 1</text>
    <text on:click={handleEnterpriseClick2} x="120" y="18" font-size=".7em" fill="white">Season 2</text>
    <text on:click={handleEnterpriseClick3} x="210" y="18" font-size=".7em" fill="white">Season 3</text>

    <text x="23" y="51" font-size=".7em" fill="white">Season 4</text>
    <text x="120" y="51" font-size=".7em" fill="white">Season 5</text>
    <text x="210" y="51" font-size=".7em" fill="white">Season 6</text>
    <text x="120" y="85" font-size=".7em" fill="white">Season 7</text>
</svg>

<ul>
    {#if showlistcount > 0}
        {#each showlist as sshow }
            <li>
                <span>{sshow.episode}</span>
                <a href="tvshows" on:click={handlePlayShowEnterprise(sshow.tvfspath)}>{sshow.title}</a>
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