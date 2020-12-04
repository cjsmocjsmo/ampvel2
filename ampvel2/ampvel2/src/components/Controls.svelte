<script>
	import { movhttp } from './PlayerStore.js'
	
	let movhttp_value;
	const unsubampvel = movhttp.subscribe(value => {
      movhttp_value = value
	})
	const ADDR = "http://" + movhttp_value
	const NADDR = ADDR + "/Next"
	const SADDR = ADDR + "/Stop"
	const PREADDR = ADDR + "/Previous"
	const PADDR = ADDR + "/Pause"
	const PLAYADDR = ADDR + "/Play"

	
    async function getNext() {
		fetch(NADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleNextSubmit = () => {
        let promise = getNext().catch(err => console.log(err));
    }

	async function getStop() {
		fetch(SADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleStopSubmit = () => {
        let promise = getStop().catch(err => console.log(err));
	}

	async function getPrevious() {
		fetch(PREADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePreviousSubmit = () => {
        let promise = getPrevious().catch(err => console.log(err));
	}

	async function getPause() {
		fetch(PADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePauseSubmit = () => {
	    let promise = getPause().catch(err => console.log(err));
		fuck()
	}

	async function getPlay() {
		fetch(PLAYADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePlaySubmit = () => {
	    let promise = getPlay().catch(err => console.log(err));
		fuck()
	}

	let visible = false;
    let fuck = () => {
        if (visible) {
            visible = false
        } else {
            visible = true
        }
	}
</script>

<svg viewBox="0 0 205 35">
	<circle cx="0" cy="0" r="205" stroke="black" stroke-width="1" fill="purple" on:click={handleStopSubmit} />
	<circle cx="0" cy="0" r="145" stroke="black" stroke-width="1" fill="blue" on:click={handlePreviousSubmit} />
	<circle cx="0" cy="0" r="95" stroke="black" stroke-width="1" fill="white" on:click={handleNextSubmit} />
	<circle cx="0" cy="0" r="50" stroke="black" stroke-width="1" fill="red" />
	<text x="7" y="20" font-size=".75em" fill="white">Play</text>
	<text x="56" y="20" font-size=".75em" fill="black" on:click={handleNextSubmit} >Next</text>
	<text x="106" y="20" font-size=".75em" fill="white" on:click={handlePreviousSubmit}>Prev</text>
	<text x="160" y="20" font-size=".75em" fill="white" on:click={handleStopSubmit}>Stop</text>
</svg>



<style></style>