import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.ba1b2344.js';
import { C as Controls } from './Controls.97557875.js';

/* src/routes/seancarrol.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/seancarrol.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
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
			if (dirty & /*handlePlayShow, showlist*/ 9) {
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
	let t0_value = /*sshow*/ ctx[6].title + "";
	let t0;
	let t1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
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
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", "tvshows");
			attr_dev(a, "class", "svelte-sbonpt");
			add_location(a, file, 79, 16, 2590);
			attr_dev(li, "class", "svelte-sbonpt");
			add_location(li, file, 78, 12, 2569);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);

			if (!mounted) {
				dispose = listen_dev(
					a,
					"click",
					function () {
						if (is_function(/*handlePlayShow*/ ctx[3](/*sshow*/ ctx[6].tvfspath))) /*handlePlayShow*/ ctx[3](/*sshow*/ ctx[6].tvfspath).apply(this, arguments);
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
			if (dirty & /*showlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[6].title + "")) set_data_dev(t0, t0_value);
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
	let rect;
	let text_1;
	let t3;
	let t4;
	let ul;
	let current;
	let mounted;
	let dispose;
	controls = new Controls({ $$inline: true });
	let if_block = /*showlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Sean Carroll Phd");
			t1 = space();
			create_component(controls.$$.fragment);
			t2 = space();
			svg = svg_element("svg");
			rect = svg_element("rect");
			text_1 = svg_element("text");
			t3 = text("Season 1");
			t4 = space();
			ul = element("ul");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Sean Carroll Phd");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(controls.$$.fragment, nodes);
			t2 = claim_space(nodes);
			svg = claim_element(nodes, "svg", { viewBox: true }, 1);
			var svg_nodes = children(svg);

			rect = claim_element(
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

			children(rect).forEach(detach_dev);

			text_1 = claim_element(
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

			var text_1_nodes = children(text_1);
			t3 = claim_text(text_1_nodes, "Season 1");
			text_1_nodes.forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-sbonpt");
			add_location(h1, file, 66, 0, 1938);
			attr_dev(rect, "x", "0");
			attr_dev(rect, "y", "0");
			attr_dev(rect, "width", "100%");
			attr_dev(rect, "height", "30");
			set_style(rect, "fill", "rgb(0,0,255)");
			set_style(rect, "stroke-width", "1");
			set_style(rect, "stroke", "rgb(0,0,0)");
			add_location(rect, file, 69, 4, 2008);
			attr_dev(text_1, "x", "112");
			attr_dev(text_1, "y", "18");
			attr_dev(text_1, "font-size", ".7em");
			attr_dev(text_1, "fill", "white");
			add_location(text_1, file, 72, 4, 2384);
			attr_dev(svg, "viewBox", "0 0 273 35");
			add_location(svg, file, 68, 0, 1977);
			attr_dev(ul, "class", "svelte-sbonpt");
			add_location(ul, file, 75, 0, 2489);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			mount_component(controls, target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, svg, anchor);
			append_dev(svg, rect);
			append_dev(svg, text_1);
			append_dev(text_1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, ul, anchor);
			if (if_block) if_block.m(ul, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(rect, "click", /*handleSeanCarrol1*/ ctx[2], false, false, false),
					listen_dev(text_1, "click", /*handleSeanCarrol1*/ ctx[2], false, false, false)
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
			if (detaching) detach_dev(t4);
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
	validate_slots("Seancarrol", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	// onMount(
	async function getSeanCarrol(x) {
		let addr = `http://192.168.0.42:8888/intSeanCarrol?season=01`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	//)
	let handleSeanCarrol1 = () => {
		let promise = getSeanCarrol().catch(err => console.log(err));
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Seancarrol> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getSeanCarrol,
		handleSeanCarrol1,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleSeanCarrol1" in $$props) $$invalidate(2, handleSeanCarrol1 = $$props.handleSeanCarrol1);
		if ("handlePlayShow" in $$props) $$invalidate(3, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showlist, showlistcount, handleSeanCarrol1, handlePlayShow];
}

class Seancarrol extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Seancarrol",
			options,
			id: create_fragment.name
		});
	}
}

export default Seancarrol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhbmNhcnJvbC5lMTMzZmNjYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zZWFuY2Fycm9sLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcbiAgICBsZXQgc2hvd2xpc3Q7XG4gICAgbGV0IHNob3dsaXN0Y291bnQ7XG4gICAgbGV0IHZpc2libGVEaXMgPSBmYWxzZVxuXG4gICAgLy8gb25Nb3VudChcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2VhbkNhcnJvbCh4KSB7XG4gICAgICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50U2VhbkNhcnJvbD9zZWFzb249MDFgXG4gICAgICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmVwaXNvZGUpXG4gICAgICAgICAgICAgICAgc2hvd2xpc3QgPSBkYXRhXG4gICAgICAgICAgICAgICAgc2hvd2xpc3Rjb3VudCA9IGRhdGEubGVuZ3RoXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH1cbiAgICAvLylcblxuICAgIGxldCBoYW5kbGVTZWFuQ2Fycm9sMSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRTZWFuQ2Fycm9sKGAwMWApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICAvLyBsZXQgaGFuZGxlU2VhbkNhcnJvbDIgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxldCBwcm9taXNlID0gZ2V0U2VhbkNhcnJvbChgMDJgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgLy8gfVxuXG4gICAgLy8gbGV0IGZ1Y2tEaXMgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmICh2aXNpYmxlRGlzKSB7XG4gICAgLy8gICAgICAgICB2aXNpYmxlRGlzID0gZmFsc2VcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHZpc2libGVEaXMgPSB0cnVlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5TWVkaWEoeCkge1xuICAgICAgICBsZXQgeSA9IFwiL21lZGlhL3BpL1BpVEIvbWVkaWEvVFZTaG93c1wiICsgeFxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgeVwiKVxuICAgICAgICBjb25zb2xlLmxvZyh5KVxuICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvcGxheU1lZGlhUmVhY3Q/bW92aWU9JHt5fWBcbiAgICAgICAgY29uc29sZS5sb2coYWRkcilcbiAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICAgbGV0IGhhbmRsZVBsYXlTaG93ID0gKG1lZGlhKSA9PiB7XG4gICAgICAgIC8vIGlmIChMUCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWVkaWEpXG5cbiAgICAgICAgLy8gICAgIGxldCBmb28gPSBtZWRpYS5zcGxpdChcIlRWU2hvd3NcIiwgMilcbiAgICAgICAgLy8gICAgIGxldCBuZXdwYXRoID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODA2M2AgKyBcIi9cIiArIG1lZGlhXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXdwYXRoKVxuICAgICAgICAvLyAgICAgVFZsb2NhbHBsYXlVUkwuc2V0KG5ld3BhdGgpXG4gICAgICAgIC8vICAgICB2aXNpYmxlRGlzID0gZmFsc2VcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gZ2V0UGxheU1lZGlhKG1lZGlhKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICB2aXNpYmxlRGlzID0gZmFsc2VcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD5cblxuPGgxPlNlYW4gQ2Fycm9sbCBQaGQ8L2gxPlxuPENvbnRyb2xzIC8+XG48c3ZnIHZpZXdCb3g9XCIwIDAgMjczIDM1XCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVNlYW5DYXJyb2wxfSB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmdiKDAsMCwyNTUpO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8IS0tIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVTZWFuQ2Fycm9sMn0geD1cIjEzNVwiIHk9XCIwXCIgd2lkdGg9XCI0OSVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZWQ7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVTZWFuQ2Fycm9sMX0geD1cIjQ4XCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PiAtLT5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlU2VhbkNhcnJvbDF9IHg9XCIxMTJcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDE8L3RleHQ+XG48L3N2Zz4gXG5cbjx1bD5cbiAgICB7I2lmIHNob3dsaXN0Y291bnQgPiAwfVxuICAgICAgICB7I2VhY2ggc2hvd2xpc3QgYXMgc3Nob3cgfVxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0dnNob3dzXCIgb246Y2xpY2s9e2hhbmRsZVBsYXlTaG93KHNzaG93LnR2ZnNwYXRoKX0+e3NzaG93LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8IS0tIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj4gLS0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgey9pZn1cbjwvdWw+XG5cblxuPHN0eWxlPlxuICAgIC8qIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfSAqL1xuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIFxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC8qIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOjk5JTtcbiAgICAgICAgcGFkZGluZzo3cHg7XG4gICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDYyLCAxNTMpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gKi9cbiAgICAvKiAuYm9vIHtcbiAgICAgICAgd2lkdGg6MzElO1xuICAgICAgICBtYXJnaW46MnB4O1xuICAgIH0gKi9cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBNkVlLEdBQVE7Ozs7Z0NBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQyxHQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUUrRCxHQUFLLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FBNUMsR0FBYyxjQUFDLEdBQUssSUFBQyxRQUFRLHVCQUE3QixHQUFjLGNBQUMsR0FBSyxJQUFDLFFBQVE7Ozs7Ozs7Ozs7OztvRUFBSSxHQUFLLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUgvRSxHQUFhLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQVBOLEdBQWlCO3VEQUdqQixHQUFpQjs7Ozs7Ozt5QkFJNUIsR0FBYSxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBeENQLFlBQVksQ0FBQyxDQUFDO0tBQ3JCLENBQUMsR0FBRyw4QkFBOEIsR0FBRyxDQUFDO0NBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztDQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVCxJQUFJLG9EQUFvRCxDQUFDO0NBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7Q0FDaEIsS0FBSyxDQUFDLElBQUksSUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQ3ZDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7RUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7SUFDakIsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7OztLQTVDL0IsUUFBUTtLQUNSLGFBQWE7S0FDYixVQUFVLEdBQUcsS0FBSzs7O2dCQUdILGFBQWEsQ0FBQyxDQUFDO01BQ3RCLElBQUk7O0VBQ1IsS0FBSyxDQUFDLElBQUksSUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQ3ZDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7R0FDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7R0FDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU87bUJBQzNCLFFBQVEsR0FBRyxJQUFJO21CQUNmLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTTtLQUM1QixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7OztLQUluQyxpQkFBaUI7TUFDYixPQUFPLEdBQUcsYUFBYSxHQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0E0QjdELGNBQWMsR0FBSSxLQUFLOzs7Ozs7Ozs7TUFVaEIsT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7O0VBQzlELFVBQVUsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
