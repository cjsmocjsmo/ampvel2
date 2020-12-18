import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.ba1b2344.js';
import { C as Controls } from './Controls.97557875.js';

/* src/routes/lastship.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/lastship.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (85:4) {#if LSshowlistcount > 0}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*LSshowlist*/ ctx[0];
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
			if (dirty & /*LSshowlist, handlePlayLS*/ 65) {
				each_value = /*LSshowlist*/ ctx[0];
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
		source: "(85:4) {#if LSshowlistcount > 0}",
		ctx
	});

	return block;
}

// (86:8) {#each LSshowlist as sshow }
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
			add_location(a, file, 87, 16, 3026);
			attr_dev(span, "class", "svelte-7aului");
			add_location(span, file, 88, 16, 3118);
			attr_dev(li, "class", "svelte-7aului");
			add_location(li, file, 86, 12, 3005);
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
						if (is_function(/*handlePlayLS*/ ctx[6](/*sshow*/ ctx[8].tvfspath))) /*handlePlayLS*/ ctx[6](/*sshow*/ ctx[8].tvfspath).apply(this, arguments);
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
			if (dirty & /*LSshowlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[8].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*LSshowlist*/ 1 && t2_value !== (t2_value = /*sshow*/ ctx[8].episode + "")) set_data_dev(t2, t2_value);
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
		source: "(86:8) {#each LSshowlist as sshow }",
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
	let rect2;
	let rect3;
	let text0;
	let t3;
	let text1;
	let t4;
	let text2;
	let t5;
	let text3;
	let t6;
	let t7;
	let ul;
	let current;
	let mounted;
	let dispose;
	controls = new Controls({ $$inline: true });
	let if_block = /*LSshowlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("The Last Ship");
			t1 = space();
			create_component(controls.$$.fragment);
			t2 = space();
			svg = svg_element("svg");
			rect0 = svg_element("rect");
			rect1 = svg_element("rect");
			rect2 = svg_element("rect");
			rect3 = svg_element("rect");
			text0 = svg_element("text");
			t3 = text("Season 1");
			text1 = svg_element("text");
			t4 = text("Season 2");
			text2 = svg_element("text");
			t5 = text("Season 3");
			text3 = svg_element("text");
			t6 = text("Season 4");
			t7 = space();
			ul = element("ul");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "The Last Ship");
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

			rect2 = claim_element(
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

			children(rect2).forEach(detach_dev);

			rect3 = claim_element(
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

			children(rect3).forEach(detach_dev);

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
			t5 = claim_text(text2_nodes, "Season 3");
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
			t6 = claim_text(text3_nodes, "Season 4");
			text3_nodes.forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-7aului");
			add_location(h1, file, 66, 0, 1857);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "32%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 69, 4, 1924);
			attr_dev(rect1, "x", "97");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "32%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 70, 4, 2053);
			attr_dev(rect2, "x", "195");
			attr_dev(rect2, "y", "0");
			attr_dev(rect2, "width", "32%");
			attr_dev(rect2, "height", "30");
			set_style(rect2, "fill", "green");
			set_style(rect2, "stroke-width", "1");
			set_style(rect2, "stroke", "rgb(0,0,0)");
			add_location(rect2, file, 72, 4, 2235);
			attr_dev(rect3, "x", "0");
			attr_dev(rect3, "y", "34");
			attr_dev(rect3, "width", "100%");
			attr_dev(rect3, "height", "30");
			set_style(rect3, "fill", "purple");
			set_style(rect3, "stroke-width", "1");
			set_style(rect3, "stroke", "rgb(0,0,0)");
			add_location(rect3, file, 73, 4, 2359);
			attr_dev(text0, "x", "23");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 75, 4, 2485);
			attr_dev(text1, "x", "120");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 76, 4, 2577);
			attr_dev(text2, "x", "210");
			attr_dev(text2, "y", "18");
			attr_dev(text2, "font-size", ".7em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 79, 4, 2731);
			attr_dev(text3, "x", "120");
			attr_dev(text3, "y", "53");
			attr_dev(text3, "font-size", ".7em");
			attr_dev(text3, "fill", "white");
			add_location(text3, file, 80, 4, 2824);
			attr_dev(svg, "viewBox", "0 0 273 68");
			add_location(svg, file, 68, 0, 1893);
			attr_dev(ul, "class", "svelte-7aului");
			add_location(ul, file, 83, 0, 2921);
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
			append_dev(svg, rect2);
			append_dev(svg, rect3);
			append_dev(svg, text0);
			append_dev(text0, t3);
			append_dev(svg, text1);
			append_dev(text1, t4);
			append_dev(svg, text2);
			append_dev(text2, t5);
			append_dev(svg, text3);
			append_dev(text3, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, ul, anchor);
			if (if_block) if_block.m(ul, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(rect0, "click", /*handleLS1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleLS2*/ ctx[3], false, false, false),
					listen_dev(rect2, "click", /*handleLS3*/ ctx[4], false, false, false),
					listen_dev(rect3, "click", /*handleLS4*/ ctx[5], false, false, false),
					listen_dev(text0, "click", /*handleLS1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleLS2*/ ctx[3], false, false, false),
					listen_dev(text2, "click", /*handleLS3*/ ctx[4], false, false, false),
					listen_dev(text3, "click", /*handleLS4*/ ctx[5], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*LSshowlistcount*/ ctx[1] > 0) {
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
			if (detaching) detach_dev(t7);
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
	let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`;

	fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Lastship", slots, []);
	let LSshowlist;
	let LSshowlistcount;

	async function getLS(x) {
		let addr = `http://192.168.0.42:8888/intLastShip?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(0, LSshowlist = data);
			$$invalidate(1, LSshowlistcount = data.length);
		}).catch(err => console.log(err));
	}

	let handleLS1 = () => {
		let promise = getLS(`01`).catch(err => console.log(err));
	};

	let handleLS2 = () => {
		let promise = getLS(`02`).catch(err => console.log(err));
	};

	let handleLS3 = () => {
		let promise = getLS(`03`).catch(err => console.log(err));
	};

	let handleLS4 = () => {
		let promise = getLS(`04`).catch(err => console.log(err));
	};

	let handlePlayLS = media => {
		// if (LP) {
		//     console.log(media)
		//     let foo = media.split("TVShows", 2)
		//     let newpath = `http://192.168.0.42:8063` + foo[1]
		//     console.log(newpath)
		//     TVlocalplayURL.set(newpath)
		//     visibleLS = false
		// } else {
		let promise = getPlayMedia(media).catch(err => console.log(err));

		visibleLS = false;
	}; // }

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Lastship> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		LSshowlist,
		LSshowlistcount,
		getLS,
		handleLS1,
		handleLS2,
		handleLS3,
		handleLS4,
		getPlayMedia,
		handlePlayLS
	});

	$$self.$inject_state = $$props => {
		if ("LSshowlist" in $$props) $$invalidate(0, LSshowlist = $$props.LSshowlist);
		if ("LSshowlistcount" in $$props) $$invalidate(1, LSshowlistcount = $$props.LSshowlistcount);
		if ("handleLS1" in $$props) $$invalidate(2, handleLS1 = $$props.handleLS1);
		if ("handleLS2" in $$props) $$invalidate(3, handleLS2 = $$props.handleLS2);
		if ("handleLS3" in $$props) $$invalidate(4, handleLS3 = $$props.handleLS3);
		if ("handleLS4" in $$props) $$invalidate(5, handleLS4 = $$props.handleLS4);
		if ("handlePlayLS" in $$props) $$invalidate(6, handlePlayLS = $$props.handlePlayLS);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		LSshowlist,
		LSshowlistcount,
		handleLS1,
		handleLS2,
		handleLS3,
		handleLS4,
		handlePlayLS
	];
}

class Lastship extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Lastship",
			options,
			id: create_fragment.name
		});
	}
}

export default Lastship;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdHNoaXAuZWFhNDY0YmEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbGFzdHNoaXAuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJvbHMuc3ZlbHRlJ1xuICAgIGxldCBMU3Nob3dsaXN0O1xuICAgIGxldCBMU3Nob3dsaXN0Y291bnQ7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMUyh4KSB7XG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9pbnRMYXN0U2hpcD9zZWFzb249JHt4fWBcbiAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIExTc2hvd2xpc3QgPSBkYXRhXG4gICAgICAgICAgICBMU3Nob3dsaXN0Y291bnQgPSBkYXRhLmxlbmd0aFxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZUxTMSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRMUyhgMDFgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZUxTMiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRMUyhgMDJgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICAgIGxldCBoYW5kbGVMUzMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TFMoYDAzYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgICBsZXQgaGFuZGxlTFM0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldExTKGAwNGApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cblxuICAgIC8vIGxldCB2aXNpYmxlTFMgPSBmYWxzZVxuICAgIC8vIGxldCBmdWNrTFMgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmICh2aXNpYmxlTFMpIHtcbiAgICAvLyAgICAgICAgIHZpc2libGVMUyA9IGZhbHNlXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB2aXNpYmxlTFMgPSB0cnVlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5TWVkaWEoeCkge1xuICAgICAgICBsZXQgeSA9IFwiL21lZGlhL3BpL1BpVEIvbWVkaWEvVFZTaG93c1wiICsgeFxuICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvcGxheU1lZGlhUmVhY3Q/bW92aWU9JHt5fWBcbiAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlUGxheUxTID0gKG1lZGlhKSA9PiB7XG4gICAgICAgIC8vIGlmIChMUCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWVkaWEpXG5cbiAgICAgICAgLy8gICAgIGxldCBmb28gPSBtZWRpYS5zcGxpdChcIlRWU2hvd3NcIiwgMilcbiAgICAgICAgLy8gICAgIGxldCBuZXdwYXRoID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODA2M2AgKyBmb29bMV1cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5ld3BhdGgpXG4gICAgICAgIC8vICAgICBUVmxvY2FscGxheVVSTC5zZXQobmV3cGF0aClcbiAgICAgICAgLy8gICAgIHZpc2libGVMUyA9IGZhbHNlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFBsYXlNZWRpYShtZWRpYSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgdmlzaWJsZUxTID0gZmFsc2VcbiAgICAgICAgLy8gfVxuICAgIH1cblxuPC9zY3JpcHQ+XG5cbjxoMT5UaGUgTGFzdCBTaGlwPC9oMT5cbjxDb250cm9scyAvPlxuPHN2ZyB2aWV3Qm94PVwiMCAwIDI3MyA2OFwiPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVMUzF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJnYigwLDAsMjU1KTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZUxTMn0geD1cIjk3XCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJlZDtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPCEtLSB0aHJlZSBhbmQgZm91ciBuZWVkIHRvIGJlIGltcGxlbWVudGVkIG9uIHNlcnZlciAtLT5cbiAgICA8cmVjdCBvbjpjbGljaz17aGFuZGxlTFMzfSB4PVwiMTk1XCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOmdyZWVuO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8cmVjdCBvbjpjbGljaz17aGFuZGxlTFM0fSB4PVwiMFwiIHk9XCIzNFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnB1cnBsZTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlTFMxfSAgeD1cIjIzXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVMUzJ9IHg9XCIxMjBcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDI8L3RleHQ+XG5cbiAgICA8IS0tIHRocmVlIGFuZCBmb3VyIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQgb24gc2VydmVyIC0tPlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVMUzN9ICB4PVwiMjEwXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAzPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVMUzR9IHg9XCIxMjBcIiB5PVwiNTNcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDQ8L3RleHQ+XG48L3N2Zz4gXG5cbjx1bD5cbiAgICB7I2lmIExTc2hvd2xpc3Rjb3VudCA+IDB9XG4gICAgICAgIHsjZWFjaCBMU3Nob3dsaXN0IGFzIHNzaG93IH1cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidHZzaG93c1wiIG9uOmNsaWNrPXtoYW5kbGVQbGF5TFMoc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuXG48c3R5bGU+XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAvKiBidXR0b24ge1xuICAgICAgICB3aWR0aDo0OSU7XG4gICAgICAgIHBhZGRpbmc6N3B4O1xuICAgICAgICBtYXJnaW46LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgNjIsIDE1Myk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSAqL1xuICAgIC8qIC5ib28ge1xuICAgICAgICB3aWR0aDozMiU7XG4gICAgICAgIG1hcmdpbjouNXB4O1xuICAgIH1cbiAgICAuYmFyIHtcbiAgICAgICAgd2lkdGg6OTguNSU7XG4gICAgfSAqL1xuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBcUZlLEdBQVU7Ozs7Z0NBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FBQyxHQUFVOzs7OytCQUFmLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUU2RCxHQUFLLElBQUMsS0FBSzs7OzswQkFDL0QsR0FBSyxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQURRLEdBQVksY0FBQyxHQUFLLElBQUMsUUFBUSxxQkFBM0IsR0FBWSxjQUFDLEdBQUssSUFBQyxRQUFROzs7Ozs7Ozs7Ozs7c0VBQUksR0FBSyxJQUFDLEtBQUs7c0VBQy9ELEdBQUssSUFBQyxP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
