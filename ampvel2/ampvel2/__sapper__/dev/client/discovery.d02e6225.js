import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.f395beed.js';
import { C as Controls } from './Controls.c8544919.js';

/* src/routes/discovery.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/discovery.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (84:4) {#if showlistcount > 0}
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
			if (dirty & /*showlist, handlePlayShow*/ 33) {
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
		source: "(84:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (85:8) {#each showlist as sshow }
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*sshow*/ ctx[9].title + "";
	let t0;
	let t1;
	let span;
	let t2_value = /*sshow*/ ctx[9].episode + "";
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
			attr_dev(a, "class", "svelte-1try2ru");
			add_location(a, file, 86, 16, 2880);
			attr_dev(span, "class", "svelte-1try2ru");
			add_location(span, file, 87, 16, 2974);
			attr_dev(li, "class", "svelte-1try2ru");
			add_location(li, file, 85, 12, 2859);
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
						if (is_function(/*handlePlayShow*/ ctx[5](/*sshow*/ ctx[9].tvfspath))) /*handlePlayShow*/ ctx[5](/*sshow*/ ctx[9].tvfspath).apply(this, arguments);
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
			if (dirty & /*showlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[9].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*showlist*/ 1 && t2_value !== (t2_value = /*sshow*/ ctx[9].episode + "")) set_data_dev(t2, t2_value);
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
		source: "(85:8) {#each showlist as sshow }",
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
	let text0;
	let t3;
	let text1;
	let t4;
	let text2;
	let t5;
	let t6;
	let ul;
	let current;
	let mounted;
	let dispose;
	controls = new Controls({ $$inline: true });
	let if_block = /*showlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Discovery");
			t1 = space();
			create_component(controls.$$.fragment);
			t2 = space();
			svg = svg_element("svg");
			rect0 = svg_element("rect");
			rect1 = svg_element("rect");
			rect2 = svg_element("rect");
			text0 = svg_element("text");
			t3 = text("Season 1");
			text1 = svg_element("text");
			t4 = text("Season 2");
			text2 = svg_element("text");
			t5 = text("Season 3");
			t6 = space();
			ul = element("ul");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Discovery");
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
			svg_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1try2ru");
			add_location(h1, file, 71, 0, 2020);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "32%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 74, 4, 2083);
			attr_dev(rect1, "x", "97");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "32%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 75, 4, 2219);
			attr_dev(rect2, "x", "195");
			attr_dev(rect2, "y", "0");
			attr_dev(rect2, "width", "32%");
			attr_dev(rect2, "height", "30");
			set_style(rect2, "fill", "green");
			set_style(rect2, "stroke-width", "1");
			set_style(rect2, "stroke", "rgb(0,0,0)");
			add_location(rect2, file, 76, 4, 2347);
			attr_dev(text0, "x", "23");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 77, 4, 2478);
			attr_dev(text1, "x", "120");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 78, 4, 2576);
			attr_dev(text2, "x", "210");
			attr_dev(text2, "y", "18");
			attr_dev(text2, "font-size", ".7em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 79, 4, 2675);
			attr_dev(svg, "viewBox", "0 0 273 36");
			add_location(svg, file, 73, 0, 2052);
			attr_dev(ul, "class", "svelte-1try2ru");
			add_location(ul, file, 82, 0, 2779);
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
			append_dev(svg, text0);
			append_dev(text0, t3);
			append_dev(svg, text1);
			append_dev(text1, t4);
			append_dev(svg, text2);
			append_dev(text2, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, ul, anchor);
			if (if_block) if_block.m(ul, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(rect0, "click", /*handleDiscovery1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleDiscovery2*/ ctx[3], false, false, false),
					listen_dev(rect2, "click", /*handleDiscovery3*/ ctx[4], false, false, false),
					listen_dev(text0, "click", /*handleDiscovery1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleDiscovery2*/ ctx[3], false, false, false),
					listen_dev(text2, "click", /*handleDiscovery3*/ ctx[4], false, false, false)
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
			if (detaching) detach_dev(t6);
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
	validate_slots("Discovery", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	// onMount(
	async function getDiscovery(x) {
		let addr = `http://192.168.0.42:8888/intDiscovery?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	//)
	let handleDiscovery1 = () => {
		let promise = getDiscovery(`01`).catch(err => console.log(err));
	};

	let handleDiscovery2 = () => {
		let promise = getDiscovery(`02`).catch(err => console.log(err));
	};

	let handleDiscovery3 = () => {
		let promise = getDiscovery(`03`).catch(err => console.log(err));
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Discovery> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getDiscovery,
		handleDiscovery1,
		handleDiscovery2,
		handleDiscovery3,
		fuckDis,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleDiscovery1" in $$props) $$invalidate(2, handleDiscovery1 = $$props.handleDiscovery1);
		if ("handleDiscovery2" in $$props) $$invalidate(3, handleDiscovery2 = $$props.handleDiscovery2);
		if ("handleDiscovery3" in $$props) $$invalidate(4, handleDiscovery3 = $$props.handleDiscovery3);
		if ("fuckDis" in $$props) fuckDis = $$props.fuckDis;
		if ("handlePlayShow" in $$props) $$invalidate(5, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		showlist,
		showlistcount,
		handleDiscovery1,
		handleDiscovery2,
		handleDiscovery3,
		handlePlayShow
	];
}

class Discovery extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Discovery",
			options,
			id: create_fragment.name
		});
	}
}

export default Discovery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY292ZXJ5LmQwMmU2MjI1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Rpc2NvdmVyeS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cm9scy5zdmVsdGUnXG4gICAgbGV0IHNob3dsaXN0O1xuICAgIGxldCBzaG93bGlzdGNvdW50O1xuICAgIGxldCB2aXNpYmxlRGlzID0gZmFsc2VcblxuICAgIC8vIG9uTW91bnQoXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldERpc2NvdmVyeSh4KSB7XG4gICAgICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50RGlzY292ZXJ5P3NlYXNvbj0ke3h9YFxuICAgICAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5lcGlzb2RlKVxuICAgICAgICAgICAgICAgIHNob3dsaXN0ID0gZGF0YVxuICAgICAgICAgICAgICAgIHNob3dsaXN0Y291bnQgPSBkYXRhLmxlbmd0aFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICB9XG4gICAgLy8pXG5cbiAgICBsZXQgaGFuZGxlRGlzY292ZXJ5MSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXREaXNjb3ZlcnkoYDAxYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVEaXNjb3ZlcnkyID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldERpc2NvdmVyeShgMDJgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZURpc2NvdmVyeTMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0RGlzY292ZXJ5KGAwM2ApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cblxuICAgIGxldCBmdWNrRGlzID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZURpcykge1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXNpYmxlRGlzID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheU1lZGlhKHgpIHtcbiAgICAgICAgbGV0IHkgPSBcIi9tZWRpYS9waS9QaVRCL21lZGlhL1RWU2hvd3NcIiArIHhcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHlcIilcbiAgICAgICAgY29uc29sZS5sb2coeSlcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L3BsYXlNZWRpYVJlYWN0P21vdmllPSR7eX1gXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXG4gICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgIGxldCBoYW5kbGVQbGF5U2hvdyA9IChtZWRpYSkgPT4ge1xuICAgICAgICAvLyBpZiAoTFApIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1lZGlhKVxuXG4gICAgICAgIC8vICAgICBsZXQgZm9vID0gbWVkaWEuc3BsaXQoXCJUVlNob3dzXCIsIDIpXG4gICAgICAgIC8vICAgICBsZXQgbmV3cGF0aCA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjgwNjNgICsgXCIvXCIgKyBtZWRpYVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3cGF0aClcbiAgICAgICAgLy8gICAgIFRWbG9jYWxwbGF5VVJMLnNldChuZXdwYXRoKVxuICAgICAgICAvLyAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFBsYXlNZWRpYShtZWRpYSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxoMT5EaXNjb3Zlcnk8L2gxPlxuPENvbnRyb2xzIC8+XG48c3ZnIHZpZXdCb3g9XCIwIDAgMjczIDM2XCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZURpc2NvdmVyeTF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJnYigwLDAsMjU1KTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZURpc2NvdmVyeTJ9IHg9XCI5N1wiIHk9XCIwXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZWQ7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVEaXNjb3ZlcnkzfSB4PVwiMTk1XCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOmdyZWVuO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlRGlzY292ZXJ5MX0geD1cIjIzXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVEaXNjb3ZlcnkyfSB4PVwiMTIwXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAyPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVEaXNjb3ZlcnkzfSB4PVwiMjEwXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAzPC90ZXh0PlxuPC9zdmc+IFxuXG48dWw+XG4gICAgeyNpZiBzaG93bGlzdGNvdW50ID4gMH1cbiAgICAgICAgeyNlYWNoIHNob3dsaXN0IGFzIHNzaG93IH1cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidHZzaG93c1wiIG9uOmNsaWNrPXtoYW5kbGVQbGF5U2hvdyhzc2hvdy50dmZzcGF0aCl9Pntzc2hvdy50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3NzaG93LmVwaXNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgey9lYWNofVxuICAgIHsvaWZ9XG48L3VsPlxuXG48c3R5bGU+XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC8qIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOjQ3JTtcbiAgICAgICAgcGFkZGluZzo3cHg7XG4gICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDYyLCAxNTMpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYm9vIHtcbiAgICAgICAgd2lkdGg6MzElO1xuICAgICAgICBtYXJnaW46MnB4O1xuICAgIH0gKi9cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQW9GZSxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBQUMsR0FBUTs7OzsrQkFBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFK0QsR0FBSyxJQUFDLEtBQUs7Ozs7MEJBQ2pFLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FEUSxHQUFjLGNBQUMsR0FBSyxJQUFDLFFBQVEsdUJBQTdCLEdBQWMsY0FBQyxHQUFLLElBQUMsUUFBUTs7Ozs7Ozs7Ozs7O29FQUFJLEdBQUssSUFBQyxLQUFLO29FQUNqRSxHQUFLLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUozQixHQUFhLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
