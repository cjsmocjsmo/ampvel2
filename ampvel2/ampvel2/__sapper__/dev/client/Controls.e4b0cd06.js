import { y as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, a as svg_element, t as text, c as claim_element, b as children, f as detach_dev, e as claim_text, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, A as listen_dev, n as noop, B as run_all } from './client.2ebd688a.js';

//MediaCenter
const omxaddr = writable(`http://192.168.0.42:8888`);


//movies http
// export const movaddr = writable(`http://192.168.0.42:8081`)
const movaddr = writable(`http://192.168.0.42:8062`);

//omxserver
const movhttp = writable(`192.168.0.42:8181`);

/* src/components/Controls.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/components/Controls.svelte";

function create_fragment(ctx) {
	let svg;
	let circle0;
	let circle1;
	let circle2;
	let circle3;
	let text0;
	let t0;
	let text1;
	let t1;
	let text2;
	let t2;
	let text3;
	let t3;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			circle0 = svg_element("circle");
			circle1 = svg_element("circle");
			circle2 = svg_element("circle");
			circle3 = svg_element("circle");
			text0 = svg_element("text");
			t0 = text("Play");
			text1 = svg_element("text");
			t1 = text("Next");
			text2 = svg_element("text");
			t2 = text("Prev");
			text3 = svg_element("text");
			t3 = text("Stop");
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(nodes, "svg", { viewBox: true }, 1);
			var svg_nodes = children(svg);

			circle0 = claim_element(
				svg_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					stroke: true,
					"stroke-width": true,
					fill: true
				},
				1
			);

			children(circle0).forEach(detach_dev);

			circle1 = claim_element(
				svg_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					stroke: true,
					"stroke-width": true,
					fill: true
				},
				1
			);

			children(circle1).forEach(detach_dev);

			circle2 = claim_element(
				svg_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					stroke: true,
					"stroke-width": true,
					fill: true
				},
				1
			);

			children(circle2).forEach(detach_dev);

			circle3 = claim_element(
				svg_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					stroke: true,
					"stroke-width": true,
					fill: true
				},
				1
			);

			children(circle3).forEach(detach_dev);

			text0 = claim_element(
				svg_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text0_nodes = children(text0);
			t0 = claim_text(text0_nodes, "Play");
			text0_nodes.forEach(detach_dev);

			text1 = claim_element(
				svg_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text1_nodes = children(text1);
			t1 = claim_text(text1_nodes, "Next");
			text1_nodes.forEach(detach_dev);

			text2 = claim_element(
				svg_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text2_nodes = children(text2);
			t2 = claim_text(text2_nodes, "Prev");
			text2_nodes.forEach(detach_dev);

			text3 = claim_element(
				svg_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text3_nodes = children(text3);
			t3 = claim_text(text3_nodes, "Stop");
			text3_nodes.forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle0, "cx", "0");
			attr_dev(circle0, "cy", "0");
			attr_dev(circle0, "r", "205");
			attr_dev(circle0, "stroke", "black");
			attr_dev(circle0, "stroke-width", "1");
			attr_dev(circle0, "fill", "purple");
			add_location(circle0, file, 83, 1, 2060);
			attr_dev(circle1, "cx", "0");
			attr_dev(circle1, "cy", "0");
			attr_dev(circle1, "r", "145");
			attr_dev(circle1, "stroke", "black");
			attr_dev(circle1, "stroke-width", "1");
			attr_dev(circle1, "fill", "blue");
			add_location(circle1, file, 84, 1, 2168);
			attr_dev(circle2, "cx", "0");
			attr_dev(circle2, "cy", "0");
			attr_dev(circle2, "r", "95");
			attr_dev(circle2, "stroke", "black");
			attr_dev(circle2, "stroke-width", "1");
			attr_dev(circle2, "fill", "white");
			add_location(circle2, file, 85, 1, 2278);
			attr_dev(circle3, "cx", "0");
			attr_dev(circle3, "cy", "0");
			attr_dev(circle3, "r", "50");
			attr_dev(circle3, "stroke", "black");
			attr_dev(circle3, "stroke-width", "1");
			attr_dev(circle3, "fill", "red");
			add_location(circle3, file, 86, 1, 2384);
			attr_dev(text0, "x", "7");
			attr_dev(text0, "y", "20");
			attr_dev(text0, "font-size", ".75em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 87, 1, 2460);
			attr_dev(text1, "x", "56");
			attr_dev(text1, "y", "20");
			attr_dev(text1, "font-size", ".75em");
			attr_dev(text1, "fill", "black");
			add_location(text1, file, 88, 1, 2523);
			attr_dev(text2, "x", "106");
			attr_dev(text2, "y", "20");
			attr_dev(text2, "font-size", ".75em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 89, 1, 2616);
			attr_dev(text3, "x", "160");
			attr_dev(text3, "y", "20");
			attr_dev(text3, "font-size", ".75em");
			attr_dev(text3, "fill", "white");
			add_location(text3, file, 90, 1, 2713);
			attr_dev(svg, "viewBox", "0 0 205 35");
			add_location(svg, file, 82, 0, 2032);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, circle0);
			append_dev(svg, circle1);
			append_dev(svg, circle2);
			append_dev(svg, circle3);
			append_dev(svg, text0);
			append_dev(text0, t0);
			append_dev(svg, text1);
			append_dev(text1, t1);
			append_dev(svg, text2);
			append_dev(text2, t2);
			append_dev(svg, text3);
			append_dev(text3, t3);

			if (!mounted) {
				dispose = [
					listen_dev(circle0, "click", /*handleStopSubmit*/ ctx[1], false, false, false),
					listen_dev(circle1, "click", /*handlePreviousSubmit*/ ctx[2], false, false, false),
					listen_dev(circle2, "click", /*handleNextSubmit*/ ctx[0], false, false, false),
					listen_dev(text1, "click", /*handleNextSubmit*/ ctx[0], false, false, false),
					listen_dev(text2, "click", /*handlePreviousSubmit*/ ctx[2], false, false, false),
					listen_dev(text3, "click", /*handleStopSubmit*/ ctx[1], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Controls", slots, []);
	let movhttp_value;

	const unsubampvel = movhttp.subscribe(value => {
		movhttp_value = value;
	});

	const ADDR = "http://" + movhttp_value;
	const NADDR = ADDR + "/Next";
	const SADDR = ADDR + "/Stop";
	const PREADDR = ADDR + "/Previous";
	const PADDR = ADDR + "/Pause";
	const PLAYADDR = ADDR + "/Play";

	async function getNext() {
		fetch(NADDR, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handleNextSubmit = () => {
		let promise = getNext().catch(err => console.log(err));
	};

	async function getStop() {
		fetch(SADDR, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handleStopSubmit = () => {
		let promise = getStop().catch(err => console.log(err));
	};

	async function getPrevious() {
		fetch(PREADDR, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePreviousSubmit = () => {
		let promise = getPrevious().catch(err => console.log(err));
	};

	async function getPause() {
		fetch(PADDR, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePauseSubmit = () => {
		let promise = getPause().catch(err => console.log(err));
		fuck();
	};

	async function getPlay() {
		fetch(PLAYADDR, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePlaySubmit = () => {
		let promise = getPlay().catch(err => console.log(err));
		fuck();
	};

	let visible = false;

	let fuck = () => {
		if (visible) {
			visible = false;
		} else {
			visible = true;
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Controls> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		movhttp,
		movhttp_value,
		unsubampvel,
		ADDR,
		NADDR,
		SADDR,
		PREADDR,
		PADDR,
		PLAYADDR,
		getNext,
		handleNextSubmit,
		getStop,
		handleStopSubmit,
		getPrevious,
		handlePreviousSubmit,
		getPause,
		handlePauseSubmit,
		getPlay,
		handlePlaySubmit,
		visible,
		fuck
	});

	$$self.$inject_state = $$props => {
		if ("movhttp_value" in $$props) movhttp_value = $$props.movhttp_value;
		if ("handleNextSubmit" in $$props) $$invalidate(0, handleNextSubmit = $$props.handleNextSubmit);
		if ("handleStopSubmit" in $$props) $$invalidate(1, handleStopSubmit = $$props.handleStopSubmit);
		if ("handlePreviousSubmit" in $$props) $$invalidate(2, handlePreviousSubmit = $$props.handlePreviousSubmit);
		if ("handlePauseSubmit" in $$props) handlePauseSubmit = $$props.handlePauseSubmit;
		if ("handlePlaySubmit" in $$props) handlePlaySubmit = $$props.handlePlaySubmit;
		if ("visible" in $$props) visible = $$props.visible;
		if ("fuck" in $$props) fuck = $$props.fuck;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [handleNextSubmit, handleStopSubmit, handlePreviousSubmit];
}

class Controls extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Controls",
			options,
			id: create_fragment.name
		});
	}
}

export { Controls as C, movaddr as m, omxaddr as o };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuZTRiMGNkMDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllclN0b3JlLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29udHJvbHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IHNvbmdVUkxzdG9yZSA9IHdyaXRhYmxlKFwiZnVja1wiKTtcbmV4cG9ydCBjb25zdCBhcnRpc3RzdG9yZSA9IHdyaXRhYmxlKFwiQkFSXCIpO1xuZXhwb3J0IGNvbnN0IHNvbmdzdG9yZSA9IHdyaXRhYmxlKFwiQkFaXCIpO1xuZXhwb3J0IGNvbnN0IHNvbmdpZHN0b3JlID0gd3JpdGFibGUoXCJGT09cIik7XG4vLyBleHBvcnQgY29uc3QgbG9jYWxwbGF5VVJMID0gd3JpdGFibGUoXCJVUkxcIilcbmV4cG9ydCBjb25zdCBUVmxvY2FscGxheVVSTCA9IHdyaXRhYmxlKFwiVVJMXCIpXG5cblxuZXhwb3J0IGNvbnN0IHBsYXlsaXN0c3RvcmUgPSB3cml0YWJsZShcIkJPT1pFXCIpO1xuZXhwb3J0IGNvbnN0IHBsYXlsaXN0aWRzdG9yZSA9IHdyaXRhYmxlKFwiSE9VTkRcIik7XG5cbi8vYW1wdmVsXG5leHBvcnQgY29uc3QgYW1wdmVsID0gd3JpdGFibGUoYGh0dHA6Ly8xOTIuMTY4LjAuNzQ6Njc5MGApXG5cbi8vTWVkaWFDZW50ZXJcbmV4cG9ydCBjb25zdCBvbXhhZGRyID0gd3JpdGFibGUoYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OGApXG5cblxuLy9tb3ZpZXMgaHR0cFxuLy8gZXhwb3J0IGNvbnN0IG1vdmFkZHIgPSB3cml0YWJsZShgaHR0cDovLzE5Mi4xNjguMC40Mjo4MDgxYClcbmV4cG9ydCBjb25zdCBtb3ZhZGRyID0gd3JpdGFibGUoYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODA2MmApXG5cbi8vb214c2VydmVyXG5leHBvcnQgY29uc3QgbW92aHR0cCA9IHdyaXRhYmxlKGAxOTIuMTY4LjAuNDI6ODE4MWApXG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBtb3ZodHRwIH0gZnJvbSAnLi9QbGF5ZXJTdG9yZS5qcydcblx0XG5cdGxldCBtb3ZodHRwX3ZhbHVlO1xuXHRjb25zdCB1bnN1YmFtcHZlbCA9IG1vdmh0dHAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIG1vdmh0dHBfdmFsdWUgPSB2YWx1ZVxuXHR9KVxuXHRjb25zdCBBRERSID0gXCJodHRwOi8vXCIgKyBtb3ZodHRwX3ZhbHVlXG5cdGNvbnN0IE5BRERSID0gQUREUiArIFwiL05leHRcIlxuXHRjb25zdCBTQUREUiA9IEFERFIgKyBcIi9TdG9wXCJcblx0Y29uc3QgUFJFQUREUiA9IEFERFIgKyBcIi9QcmV2aW91c1wiXG5cdGNvbnN0IFBBRERSID0gQUREUiArIFwiL1BhdXNlXCJcblx0Y29uc3QgUExBWUFERFIgPSBBRERSICsgXCIvUGxheVwiXG5cblx0XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dCgpIHtcblx0XHRmZXRjaChOQUREUiwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cbiAgICBsZXQgaGFuZGxlTmV4dFN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXROZXh0KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRTdG9wKCkge1xuXHRcdGZldGNoKFNBRERSLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVTdG9wU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFN0b3AoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRQcmV2aW91cygpIHtcblx0XHRmZXRjaChQUkVBRERSLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQcmV2aW91c1N1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQcmV2aW91cygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldFBhdXNlKCkge1xuXHRcdGZldGNoKFBBRERSLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQYXVzZVN1Ym1pdCA9ICgpID0+IHtcblx0ICAgIGxldCBwcm9taXNlID0gZ2V0UGF1c2UoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdFx0ZnVjaygpXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRQbGF5KCkge1xuXHRcdGZldGNoKFBMQVlBRERSLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQbGF5U3VibWl0ID0gKCkgPT4ge1xuXHQgICAgbGV0IHByb21pc2UgPSBnZXRQbGF5KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHRcdGZ1Y2soKVxuXHR9XG5cblx0bGV0IHZpc2libGUgPSBmYWxzZTtcbiAgICBsZXQgZnVjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaWJsZSA9IHRydWVcbiAgICAgICAgfVxuXHR9XG48L3NjcmlwdD5cblxuPHN2ZyB2aWV3Qm94PVwiMCAwIDIwNSAzNVwiPlxuXHQ8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCIyMDVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwicHVycGxlXCIgb246Y2xpY2s9e2hhbmRsZVN0b3BTdWJtaXR9IC8+XG5cdDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjE0NVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJibHVlXCIgb246Y2xpY2s9e2hhbmRsZVByZXZpb3VzU3VibWl0fSAvPlxuXHQ8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCI5NVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJ3aGl0ZVwiIG9uOmNsaWNrPXtoYW5kbGVOZXh0U3VibWl0fSAvPlxuXHQ8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCI1MFwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJyZWRcIiAvPlxuXHQ8dGV4dCB4PVwiN1wiIHk9XCIyMFwiIGZvbnQtc2l6ZT1cIi43NWVtXCIgZmlsbD1cIndoaXRlXCI+UGxheTwvdGV4dD5cblx0PHRleHQgeD1cIjU2XCIgeT1cIjIwXCIgZm9udC1zaXplPVwiLjc1ZW1cIiBmaWxsPVwiYmxhY2tcIiBvbjpjbGljaz17aGFuZGxlTmV4dFN1Ym1pdH0gPk5leHQ8L3RleHQ+XG5cdDx0ZXh0IHg9XCIxMDZcIiB5PVwiMjBcIiBmb250LXNpemU9XCIuNzVlbVwiIGZpbGw9XCJ3aGl0ZVwiIG9uOmNsaWNrPXtoYW5kbGVQcmV2aW91c1N1Ym1pdH0+UHJldjwvdGV4dD5cblx0PHRleHQgeD1cIjE2MFwiIHk9XCIyMFwiIGZvbnQtc2l6ZT1cIi43NWVtXCIgZmlsbD1cIndoaXRlXCIgb246Y2xpY2s9e2hhbmRsZVN0b3BTdWJtaXR9PlN0b3A8L3RleHQ+XG48L3N2Zz5cblxuXG5cbjxzdHlsZT48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQTtBQUNZLE1BQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEVBQUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDWSxNQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFDO0FBQzNEO0FBQ0E7QUFDTyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
