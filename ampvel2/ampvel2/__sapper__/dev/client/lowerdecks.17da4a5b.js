import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.2ebd688a.js';
import { C as Controls } from './Controls.e4b0cd06.js';

/* src/routes/lowerdecks.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/lowerdecks.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (89:4) {#if showlistcount > 0}
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
		source: "(89:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (90:8) {#each showlist as sshow }
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
			attr_dev(a, "class", "svelte-7aului");
			add_location(a, file, 91, 16, 2904);
			attr_dev(span, "class", "svelte-7aului");
			add_location(span, file, 92, 16, 2998);
			attr_dev(li, "class", "svelte-7aului");
			add_location(li, file, 90, 12, 2883);
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
		source: "(90:8) {#each showlist as sshow }",
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
			t0 = text("Lower Decks");
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
			t0 = claim_text(h1_nodes, "Lower Decks");
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
			attr_dev(h1, "class", "svelte-7aului");
			add_location(h1, file, 66, 0, 1910);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "49%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 69, 4, 1975);
			attr_dev(rect1, "x", "135");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "49%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 70, 4, 2112);
			attr_dev(text0, "x", "48");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 71, 4, 2242);
			attr_dev(text1, "x", "177");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 72, 4, 2341);
			attr_dev(svg, "viewBox", "0 0 273 35");
			add_location(svg, file, 68, 0, 1944);
			attr_dev(ul, "class", "svelte-7aului");
			add_location(ul, file, 87, 0, 2803);
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
					listen_dev(rect0, "click", /*handleLowerDecks1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleLowerDecks2*/ ctx[3], false, false, false),
					listen_dev(text0, "click", /*handleLowerDecks1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleLowerDecks2*/ ctx[3], false, false, false)
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
	validate_slots("Lowerdecks", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	// onMount(
	async function getLowerDecks(x) {
		let addr = `http://192.168.0.42:8888/intLowerDecks?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	//)
	let handleLowerDecks1 = () => {
		let promise = getLowerDecks(`01`).catch(err => console.log(err));
	};

	let handleLowerDecks2 = () => {
		let promise = getLowerDecks(`02`).catch(err => console.log(err));
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Lowerdecks> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getLowerDecks,
		handleLowerDecks1,
		handleLowerDecks2,
		fuckDis,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleLowerDecks1" in $$props) $$invalidate(2, handleLowerDecks1 = $$props.handleLowerDecks1);
		if ("handleLowerDecks2" in $$props) $$invalidate(3, handleLowerDecks2 = $$props.handleLowerDecks2);
		if ("fuckDis" in $$props) fuckDis = $$props.fuckDis;
		if ("handlePlayShow" in $$props) $$invalidate(4, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showlist, showlistcount, handleLowerDecks1, handleLowerDecks2, handlePlayShow];
}

class Lowerdecks extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Lowerdecks",
			options,
			id: create_fragment.name
		});
	}
}

export default Lowerdecks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93ZXJkZWNrcy4xN2RhNGE1Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9sb3dlcmRlY2tzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcbiAgICBsZXQgc2hvd2xpc3Q7XG4gICAgbGV0IHNob3dsaXN0Y291bnQ7XG4gICAgbGV0IHZpc2libGVEaXMgPSBmYWxzZVxuXG4gICAgLy8gb25Nb3VudChcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG93ZXJEZWNrcyh4KSB7XG4gICAgICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50TG93ZXJEZWNrcz9zZWFzb249JHt4fWBcbiAgICAgICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uZXBpc29kZSlcbiAgICAgICAgICAgICAgICBzaG93bGlzdCA9IGRhdGFcbiAgICAgICAgICAgICAgICBzaG93bGlzdGNvdW50ID0gZGF0YS5sZW5ndGhcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfVxuICAgIC8vKVxuXG4gICAgbGV0IGhhbmRsZUxvd2VyRGVja3MxID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldExvd2VyRGVja3MoYDAxYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVMb3dlckRlY2tzMiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRMb3dlckRlY2tzKGAwMmApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgZnVja0RpcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGVEaXMpIHtcbiAgICAgICAgICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlNZWRpYSh4KSB7XG4gICAgICAgIGxldCB5ID0gXCIvbWVkaWEvcGkvUGlUQi9tZWRpYS9UVlNob3dzXCIgKyB4XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB5XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHkpXG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9wbGF5TWVkaWFSZWFjdD9tb3ZpZT0ke3l9YFxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxuICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgICBsZXQgaGFuZGxlUGxheVNob3cgPSAobWVkaWEpID0+IHtcbiAgICAgICAgLy8gaWYgKExQKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhtZWRpYSlcblxuICAgICAgICAvLyAgICAgbGV0IGZvbyA9IG1lZGlhLnNwbGl0KFwiVFZTaG93c1wiLCAyKVxuICAgICAgICAvLyAgICAgbGV0IG5ld3BhdGggPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4MDYzYCArIFwiL1wiICsgbWVkaWFcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5ld3BhdGgpXG4gICAgICAgIC8vICAgICBUVmxvY2FscGxheVVSTC5zZXQobmV3cGF0aClcbiAgICAgICAgLy8gICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQbGF5TWVkaWEobWVkaWEpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cbjwvc2NyaXB0PlxuXG48aDE+TG93ZXIgRGVja3M8L2gxPlxuPENvbnRyb2xzIC8+XG48c3ZnIHZpZXdCb3g9XCIwIDAgMjczIDM1XCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZUxvd2VyRGVja3MxfSB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0OSVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZ2IoMCwwLDI1NSk7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVMb3dlckRlY2tzMn0geD1cIjEzNVwiIHk9XCIwXCIgd2lkdGg9XCI0OSVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZWQ7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVMb3dlckRlY2tzMX0geD1cIjQ4XCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVMb3dlckRlY2tzMn0geD1cIjE3N1wiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMjwvdGV4dD5cbjwvc3ZnPiBcbjwhLS0gPG5hdj5cbiAgICA8YnV0dG9uPlNlYXNvbiAxPC9idXR0b24+XG4gICAgPGJ1dHRvbj5TZWFzb24gMjwvYnV0dG9uPlxuPC9uYXY+IC0tPlxuPCEtLSA8bmF2PlxuICAgIDxidXR0b24gY2xhc3M9XCJib29cIj5TZWFzb24gMTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJib29cIj5TZWFzb24gMjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJib29cIj5TZWFzb24gMzwvYnV0dG9uPlxuPC9uYXY+IC0tPlxuPCEtLSA8bmF2PlxuICAgIDxidXR0b24gb246Y2xpY2s9e2hhbmRsZUxvd2VyRGVja3MxfT5zMTwvYnV0dG9uPlxuICAgIDxidXR0b24gb246Y2xpY2s9e2hhbmRsZUxvd2VyRGVja3MyfT5zMjwvYnV0dG9uPlxuPC9uYXY+IC0tPlxuPHVsPlxuICAgIHsjaWYgc2hvd2xpc3Rjb3VudCA+IDB9XG4gICAgICAgIHsjZWFjaCBzaG93bGlzdCBhcyBzc2hvdyB9XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInR2c2hvd3NcIiBvbjpjbGljaz17aGFuZGxlUGxheVNob3coc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuPHN0eWxlPlxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLyogYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6NDklO1xuICAgICAgICBwYWRkaW5nOjdweDtcbiAgICAgICAgbWFyZ2luOi41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDYyLCAxNTMpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gKi9cbiAgICAvKiAuYm9vIHtcbiAgICAgICAgd2lkdGg6MzIlO1xuICAgICAgICBtYXJnaW46LjVweDtcbiAgICB9XG4gICAgLmJhciB7XG4gICAgICAgIHdpZHRoOjk4LjUlO1xuICAgIH0gKi9cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXlGZSxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBQUMsR0FBUTs7OzsrQkFBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFK0QsR0FBSyxJQUFDLEtBQUs7Ozs7MEJBQ2pFLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FEUSxHQUFjLGNBQUMsR0FBSyxJQUFDLFFBQVEsdUJBQTdCLEdBQWMsY0FBQyxHQUFLLElBQUMsUUFBUTs7Ozs7Ozs7Ozs7O29FQUFJLEdBQUssSUFBQyxLQUFLO29FQUNqRSxHQUFLLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUozQixHQUFhLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBbkJOLEdBQWlCO3NEQUNqQixHQUFpQjtzREFDakIsR0FBaUI7c0RBQ2pCLEdBQWlCOzs7Ozs7O3lCQWdCNUIsR0FBYSxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBcERQLFlBQVksQ0FBQyxDQUFDO0tBQ3JCLENBQUMsR0FBRyw4QkFBOEIsR0FBRyxDQUFDO0NBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztDQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVCxJQUFJLG9EQUFvRCxDQUFDO0NBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7Q0FDaEIsS0FBSyxDQUFDLElBQUksSUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQ3ZDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7RUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7SUFDakIsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7OztLQTVDL0IsUUFBUTtLQUNSLGFBQWE7S0FDYixVQUFVLEdBQUcsS0FBSzs7O2dCQUdILGFBQWEsQ0FBQyxDQUFDO01BQ3RCLElBQUksb0RBQW9ELENBQUM7O0VBQzdELEtBQUssQ0FBQyxJQUFJLElBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO0dBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0dBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPO21CQUMzQixRQUFRLEdBQUcsSUFBSTttQkFDZixhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU07S0FDNUIsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7S0FJbkMsaUJBQWlCO01BQ2IsT0FBTyxHQUFHLGFBQWEsT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRzlELGlCQUFpQjtNQUNiLE9BQU8sR0FBRyxhQUFhLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztLQUc5RCxPQUFPO01BQ0gsVUFBVTtHQUNWLFVBQVUsR0FBRyxLQUFLOztHQUVsQixVQUFVLEdBQUcsSUFBSTs7OztLQWlCcEIsY0FBYyxHQUFJLEtBQUs7Ozs7Ozs7OztNQVVoQixPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7RUFDOUQsVUFBVSxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
