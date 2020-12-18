import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.d500114e.js';
import { C as Controls } from './Controls.83048264.js';

/* src/routes/alteredcarbon.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/alteredcarbon.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (75:4) {#if showlistcount > 0}
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
		source: "(75:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (76:8) {#each showlist as sshow }
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*sshow*/ ctx[7].title + "";
	let t0;
	let t1;
	let span;
	let t2_value = /*sshow*/ ctx[7].episode + "";
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
			attr_dev(a, "class", "svelte-ueno44");
			add_location(a, file, 77, 16, 2577);
			attr_dev(span, "class", "svelte-ueno44");
			add_location(span, file, 78, 16, 2671);
			attr_dev(li, "class", "svelte-ueno44");
			add_location(li, file, 76, 12, 2556);
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
						if (is_function(/*handlePlayShow*/ ctx[4](/*sshow*/ ctx[7].tvfspath))) /*handlePlayShow*/ ctx[4](/*sshow*/ ctx[7].tvfspath).apply(this, arguments);
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
			if (dirty & /*showlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[7].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*showlist*/ 1 && t2_value !== (t2_value = /*sshow*/ ctx[7].episode + "")) set_data_dev(t2, t2_value);
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
		source: "(76:8) {#each showlist as sshow }",
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
			t0 = text("Altered Carbon");
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
			t0 = claim_text(h1_nodes, "Altered Carbon");
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
			attr_dev(h1, "class", "svelte-ueno44");
			add_location(h1, file, 64, 0, 1925);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "49%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 67, 4, 1993);
			attr_dev(rect1, "x", "135");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "49%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 68, 4, 2133);
			attr_dev(text0, "x", "48");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 69, 4, 2266);
			attr_dev(text1, "x", "177");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 70, 4, 2368);
			attr_dev(svg, "viewBox", "0 0 273 35");
			add_location(svg, file, 66, 0, 1962);
			attr_dev(ul, "class", "svelte-ueno44");
			add_location(ul, file, 73, 0, 2476);
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
					listen_dev(rect0, "click", /*handleAlteredCarbon1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleAlteredCarbon2*/ ctx[3], false, false, false),
					listen_dev(text0, "click", /*handleAlteredCarbon1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleAlteredCarbon2*/ ctx[3], false, false, false)
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
	validate_slots("Alteredcarbon", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	async function getAlteredCarbon(x) {
		let addr = `http://192.168.0.42:8888/intAlteredCarbon?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	let handleAlteredCarbon1 = () => {
		let promise = getAlteredCarbon(`01`).catch(err => console.log(err));
	};

	let handleAlteredCarbon2 = () => {
		let promise = getAlteredCarbon(`02`).catch(err => console.log(err));
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Alteredcarbon> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getAlteredCarbon,
		handleAlteredCarbon1,
		handleAlteredCarbon2,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleAlteredCarbon1" in $$props) $$invalidate(2, handleAlteredCarbon1 = $$props.handleAlteredCarbon1);
		if ("handleAlteredCarbon2" in $$props) $$invalidate(3, handleAlteredCarbon2 = $$props.handleAlteredCarbon2);
		if ("handlePlayShow" in $$props) $$invalidate(4, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		showlist,
		showlistcount,
		handleAlteredCarbon1,
		handleAlteredCarbon2,
		handlePlayShow
	];
}

class Alteredcarbon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Alteredcarbon",
			options,
			id: create_fragment.name
		});
	}
}

export default Alteredcarbon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJlZGNhcmJvbi5jN2IzNTBiMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hbHRlcmVkY2FyYm9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcbiAgICBsZXQgc2hvd2xpc3Q7XG4gICAgbGV0IHNob3dsaXN0Y291bnQ7XG4gICAgbGV0IHZpc2libGVEaXMgPSBmYWxzZVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsdGVyZWRDYXJib24oeCkge1xuICAgICAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L2ludEFsdGVyZWRDYXJib24/c2Vhc29uPSR7eH1gXG4gICAgICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmVwaXNvZGUpXG4gICAgICAgICAgICAgICAgc2hvd2xpc3QgPSBkYXRhXG4gICAgICAgICAgICAgICAgc2hvd2xpc3Rjb3VudCA9IGRhdGEubGVuZ3RoXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH1cblxuICAgIGxldCBoYW5kbGVBbHRlcmVkQ2FyYm9uMSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRBbHRlcmVkQ2FyYm9uKGAwMWApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlQWx0ZXJlZENhcmJvbjIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0QWx0ZXJlZENhcmJvbihgMDJgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgLy8gbGV0IGZ1Y2tEaXMgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmICh2aXNpYmxlRGlzKSB7XG4gICAgLy8gICAgICAgICB2aXNpYmxlRGlzID0gZmFsc2VcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHZpc2libGVEaXMgPSB0cnVlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5TWVkaWEoeCkge1xuICAgICAgICBsZXQgeSA9IFwiL21lZGlhL3BpL1BpVEIvbWVkaWEvVFZTaG93c1wiICsgeFxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgeVwiKVxuICAgICAgICBjb25zb2xlLmxvZyh5KVxuICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvcGxheU1lZGlhUmVhY3Q/bW92aWU9JHt5fWBcbiAgICAgICAgY29uc29sZS5sb2coYWRkcilcbiAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICAgbGV0IGhhbmRsZVBsYXlTaG93ID0gKG1lZGlhKSA9PiB7XG4gICAgICAgIC8vIGlmIChMUCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWVkaWEpXG5cbiAgICAgICAgLy8gICAgIGxldCBmb28gPSBtZWRpYS5zcGxpdChcIlRWU2hvd3NcIiwgMilcbiAgICAgICAgLy8gICAgIGxldCBuZXdwYXRoID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODA2M2AgKyBcIi9cIiArIG1lZGlhXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXdwYXRoKVxuICAgICAgICAvLyAgICAgVFZsb2NhbHBsYXlVUkwuc2V0KG5ld3BhdGgpXG4gICAgICAgIC8vICAgICB2aXNpYmxlRGlzID0gZmFsc2VcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gZ2V0UGxheU1lZGlhKG1lZGlhKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICB2aXNpYmxlRGlzID0gZmFsc2VcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD5cblxuPGgxPkFsdGVyZWQgQ2FyYm9uPC9oMT5cbjxDb250cm9scyAvPlxuPHN2ZyB2aWV3Qm94PVwiMCAwIDI3MyAzNVwiPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVBbHRlcmVkQ2FyYm9uMX0geD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNDklXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmdiKDAsMCwyNTUpO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8cmVjdCBvbjpjbGljaz17aGFuZGxlQWx0ZXJlZENhcmJvbjJ9IHg9XCIxMzVcIiB5PVwiMFwiIHdpZHRoPVwiNDklXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmVkO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlQWx0ZXJlZENhcmJvbjF9IHg9XCI0OFwiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMTwvdGV4dD5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlQWx0ZXJlZENhcmJvbjJ9IHg9XCIxNzdcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDI8L3RleHQ+XG48L3N2Zz4gXG5cbjx1bD5cbiAgICB7I2lmIHNob3dsaXN0Y291bnQgPiAwfVxuICAgICAgICB7I2VhY2ggc2hvd2xpc3QgYXMgc3Nob3cgfVxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0dnNob3dzXCIgb246Y2xpY2s9e2hhbmRsZVBsYXlTaG93KHNzaG93LnR2ZnNwYXRoKX0+e3NzaG93LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57c3Nob3cuZXBpc29kZX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgey9pZn1cbjwvdWw+XG5cblxuPHN0eWxlPlxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIFxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC8qIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOjQ3JTtcbiAgICAgICAgcGFkZGluZzo3cHg7XG4gICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDYyLCAxNTMpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gKi9cbiAgICAvKiAuYm9vIHtcbiAgICAgICAgd2lkdGg6MzElO1xuICAgICAgICBtYXJnaW46MnB4O1xuICAgIH0gKi9cbjwvc3R5bGU+Il0s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
