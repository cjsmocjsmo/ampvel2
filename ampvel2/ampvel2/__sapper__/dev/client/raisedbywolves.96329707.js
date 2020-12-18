import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.9ae1898a.js';
import { C as Controls } from './Controls.af18e3fd.js';

/* src/routes/raisedbywolves.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/raisedbywolves.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (77:4) {#if showlistcount > 0}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*showlist*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*showlist, handlePlayShow*/ 17) {
				each_value = /*showlist*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(77:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (78:8) {#each showlist as sshow }
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*sshow*/ ctx[8].title + "";
	let t0;
	let t1;
	let span;
	let t2_value = /*sshow*/ ctx[8].episode + "";
	let t2;
	let t3;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			span = element("span");
			t2 = text(t2_value);
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			span = claim_element(li_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, t2_value);
			span_nodes.forEach(detach_dev);
			t3 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", "tvshows");
			attr_dev(a, "class", "svelte-1li3j29");
			add_location(a, file, 79, 16, 2590);
			attr_dev(span, "class", "svelte-1li3j29");
			add_location(span, file, 80, 16, 2684);
			attr_dev(li, "class", "svelte-1li3j29");
			add_location(li, file, 78, 12, 2569);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
			append_dev(li, span);
			append_dev(span, t2);
			append_dev(li, t3);

			if (!mounted) {
				dispose = listen_dev(
					a,
					"click",
					function () {
						if (is_function(/*handlePlayShow*/ ctx[4](/*sshow*/ ctx[8].tvfspath))) /*handlePlayShow*/ ctx[4](/*sshow*/ ctx[8].tvfspath).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*showlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[8].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*showlist*/ 1 && t2_value !== (t2_value = /*sshow*/ ctx[8].episode + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(78:8) {#each showlist as sshow }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let controls;
	let t2;
	let svg;
	let rect0;
	let rect1;
	let text0;
	let t3;
	let text1;
	let t4;
	let t5;
	let ul;
	let current;
	let mounted;
	let dispose;
	controls = new Controls({ $$inline: true });
	let if_block = /*showlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Raised By Wolves");
			t1 = space();
			create_component(controls.$$.fragment);
			t2 = space();
			svg = svg_element("svg");
			rect0 = svg_element("rect");
			rect1 = svg_element("rect");
			text0 = svg_element("text");
			t3 = text("Season 1");
			text1 = svg_element("text");
			t4 = text("Season 2");
			t5 = space();
			ul = element("ul");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Raised By Wolves");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(controls.$$.fragment, nodes);
			t2 = claim_space(nodes);
			svg = claim_element(nodes, "svg", { viewBox: true }, 1);
			var svg_nodes = children(svg);

			rect0 = claim_element(
				svg_nodes,
				"rect",
				{
					x: true,
					y: true,
					width: true,
					height: true,
					style: true
				},
				1
			);

			children(rect0).forEach(detach_dev);

			rect1 = claim_element(
				svg_nodes,
				"rect",
				{
					x: true,
					y: true,
					width: true,
					height: true,
					style: true
				},
				1
			);

			children(rect1).forEach(detach_dev);

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
			t3 = claim_text(text0_nodes, "Season 1");
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
			t4 = claim_text(text1_nodes, "Season 2");
			text1_nodes.forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1li3j29");
			add_location(h1, file, 66, 0, 1932);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "49%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 69, 4, 2002);
			attr_dev(rect1, "x", "135");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "49%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 70, 4, 2143);
			attr_dev(text0, "x", "48");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 71, 4, 2277);
			attr_dev(text1, "x", "177");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 72, 4, 2380);
			attr_dev(svg, "viewBox", "0 0 273 35");
			add_location(svg, file, 68, 0, 1971);
			attr_dev(ul, "class", "svelte-1li3j29");
			add_location(ul, file, 75, 0, 2489);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			mount_component(controls, target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, svg, anchor);
			append_dev(svg, rect0);
			append_dev(svg, rect1);
			append_dev(svg, text0);
			append_dev(text0, t3);
			append_dev(svg, text1);
			append_dev(text1, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, ul, anchor);
			if (if_block) if_block.m(ul, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(rect0, "click", /*handleRaisedByWolves1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleRaisedByWolves2*/ ctx[3], false, false, false),
					listen_dev(text0, "click", /*handleRaisedByWolves1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleRaisedByWolves2*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*showlistcount*/ ctx[1] > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(ul, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(controls.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(controls.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			destroy_component(controls, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(svg);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(ul);
			if (if_block) if_block.d();
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

async function getPlayMedia(x) {
	let y = "/media/pi/PiTB/media/TVShows" + x;
	console.log("this is y");
	console.log(y);
	let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`;
	console.log(addr);

	fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Raisedbywolves", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	// onMount(
	async function getRaisedByWolves(x) {
		let addr = `http://192.168.0.42:8888/intRaisedByWolves?season=01`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	//)
	let handleRaisedByWolves1 = () => {
		let promise = getRaisedByWolves().catch(err => console.log(err));
	};

	let handleRaisedByWolves2 = () => {
		let promise = getRaisedByWolves().catch(err => console.log(err));
	};

	let fuckDis = () => {
		if (visibleDis) {
			visibleDis = false;
		} else {
			visibleDis = true;
		}
	};

	let handlePlayShow = media => {
		// if (LP) {
		//     console.log(media)
		//     let foo = media.split("TVShows", 2)
		//     let newpath = `http://192.168.0.42:8063` + "/" + media
		//     console.log(newpath)
		//     TVlocalplayURL.set(newpath)
		//     visibleDis = false
		// } else {
		let promise = getPlayMedia(media).catch(err => console.log(err));

		visibleDis = false;
	}; // }

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Raisedbywolves> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getRaisedByWolves,
		handleRaisedByWolves1,
		handleRaisedByWolves2,
		fuckDis,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleRaisedByWolves1" in $$props) $$invalidate(2, handleRaisedByWolves1 = $$props.handleRaisedByWolves1);
		if ("handleRaisedByWolves2" in $$props) $$invalidate(3, handleRaisedByWolves2 = $$props.handleRaisedByWolves2);
		if ("fuckDis" in $$props) fuckDis = $$props.fuckDis;
		if ("handlePlayShow" in $$props) $$invalidate(4, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		showlist,
		showlistcount,
		handleRaisedByWolves1,
		handleRaisedByWolves2,
		handlePlayShow
	];
}

class Raisedbywolves extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Raisedbywolves",
			options,
			id: create_fragment.name
		});
	}
}

export default Raisedbywolves;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkYnl3b2x2ZXMuOTYzMjk3MDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmFpc2VkYnl3b2x2ZXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJvbHMuc3ZlbHRlJ1xuICAgIGxldCBzaG93bGlzdDtcbiAgICBsZXQgc2hvd2xpc3Rjb3VudDtcbiAgICBsZXQgdmlzaWJsZURpcyA9IGZhbHNlXG5cbiAgICAvLyBvbk1vdW50KFxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRSYWlzZWRCeVdvbHZlcyh4KSB7XG4gICAgICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50UmFpc2VkQnlXb2x2ZXM/c2Vhc29uPTAxYFxuICAgICAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5lcGlzb2RlKVxuICAgICAgICAgICAgICAgIHNob3dsaXN0ID0gZGF0YVxuICAgICAgICAgICAgICAgIHNob3dsaXN0Y291bnQgPSBkYXRhLmxlbmd0aFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICB9XG4gICAgLy8pXG5cbiAgICBsZXQgaGFuZGxlUmFpc2VkQnlXb2x2ZXMxID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFJhaXNlZEJ5V29sdmVzKGAwMWApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlUmFpc2VkQnlXb2x2ZXMyID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFJhaXNlZEJ5V29sdmVzKGAwMmApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgZnVja0RpcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGVEaXMpIHtcbiAgICAgICAgICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlNZWRpYSh4KSB7XG4gICAgICAgIGxldCB5ID0gXCIvbWVkaWEvcGkvUGlUQi9tZWRpYS9UVlNob3dzXCIgKyB4XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB5XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHkpXG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9wbGF5TWVkaWFSZWFjdD9tb3ZpZT0ke3l9YFxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxuICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgICBsZXQgaGFuZGxlUGxheVNob3cgPSAobWVkaWEpID0+IHtcbiAgICAgICAgLy8gaWYgKExQKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhtZWRpYSlcblxuICAgICAgICAvLyAgICAgbGV0IGZvbyA9IG1lZGlhLnNwbGl0KFwiVFZTaG93c1wiLCAyKVxuICAgICAgICAvLyAgICAgbGV0IG5ld3BhdGggPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4MDYzYCArIFwiL1wiICsgbWVkaWFcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5ld3BhdGgpXG4gICAgICAgIC8vICAgICBUVmxvY2FscGxheVVSTC5zZXQobmV3cGF0aClcbiAgICAgICAgLy8gICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQbGF5TWVkaWEobWVkaWEpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cbjwvc2NyaXB0PlxuXG48aDE+UmFpc2VkIEJ5IFdvbHZlczwvaDE+XG48Q29udHJvbHMgLz5cbjxzdmcgdmlld0JveD1cIjAgMCAyNzMgMzVcIj5cbiAgICA8cmVjdCBvbjpjbGljaz17aGFuZGxlUmFpc2VkQnlXb2x2ZXMxfSB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0OSVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZ2IoMCwwLDI1NSk7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVSYWlzZWRCeVdvbHZlczJ9IHg9XCIxMzVcIiB5PVwiMFwiIHdpZHRoPVwiNDklXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmVkO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlUmFpc2VkQnlXb2x2ZXMxfSB4PVwiNDhcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDE8L3RleHQ+XG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZVJhaXNlZEJ5V29sdmVzMn0geD1cIjE3N1wiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMjwvdGV4dD5cbjwvc3ZnPiBcblxuPHVsPlxuICAgIHsjaWYgc2hvd2xpc3Rjb3VudCA+IDB9XG4gICAgICAgIHsjZWFjaCBzaG93bGlzdCBhcyBzc2hvdyB9XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInR2c2hvd3NcIiBvbjpjbGljaz17aGFuZGxlUGxheVNob3coc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuXG48c3R5bGU+XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgXG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLyogYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6OTklO1xuICAgICAgICBwYWRkaW5nOjdweDtcbiAgICAgICAgbWFyZ2luOjJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgNjIsIDE1Myk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSAqL1xuICAgIC8qIC5ib28ge1xuICAgICAgICB3aWR0aDozMSU7XG4gICAgICAgIG1hcmdpbjoycHg7XG4gICAg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
