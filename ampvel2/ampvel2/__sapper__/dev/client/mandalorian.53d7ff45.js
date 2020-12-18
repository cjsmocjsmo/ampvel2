import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.ba1b2344.js';
import { C as Controls } from './Controls.97557875.js';

/* src/routes/mandalorian.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/mandalorian.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (82:4) {#if showlistcount > 0}
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
		source: "(82:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (83:8) {#each showlist as sshow }
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
			add_location(a, file, 84, 16, 2921);
			attr_dev(span, "class", "svelte-7aului");
			add_location(span, file, 85, 16, 3015);
			attr_dev(li, "class", "svelte-7aului");
			add_location(li, file, 83, 12, 2900);
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
						if (is_function(/*handlePlayShow*/ ctx[5](/*sshow*/ ctx[8].tvfspath))) /*handlePlayShow*/ ctx[5](/*sshow*/ ctx[8].tvfspath).apply(this, arguments);
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
		source: "(83:8) {#each showlist as sshow }",
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
			t0 = text("Mandalorian");
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
			t0 = claim_text(h1_nodes, "Mandalorian");
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
			attr_dev(h1, "class", "svelte-7aului");
			add_location(h1, file, 69, 0, 2047);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "32%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 72, 4, 2112);
			attr_dev(rect1, "x", "97");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "32%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 73, 4, 2250);
			attr_dev(rect2, "x", "195");
			attr_dev(rect2, "y", "0");
			attr_dev(rect2, "width", "32%");
			attr_dev(rect2, "height", "30");
			set_style(rect2, "fill", "green");
			set_style(rect2, "stroke-width", "1");
			set_style(rect2, "stroke", "rgb(0,0,0)");
			add_location(rect2, file, 74, 4, 2380);
			attr_dev(text0, "x", "23");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 75, 4, 2513);
			attr_dev(text1, "x", "120");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 76, 4, 2613);
			attr_dev(text2, "x", "210");
			attr_dev(text2, "y", "18");
			attr_dev(text2, "font-size", ".7em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 77, 4, 2714);
			attr_dev(svg, "viewBox", "0 0 273 36");
			add_location(svg, file, 71, 0, 2081);
			attr_dev(ul, "class", "svelte-7aului");
			add_location(ul, file, 80, 0, 2820);
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
					listen_dev(rect0, "click", /*handleMandalorian1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleMandalorian2*/ ctx[3], false, false, false),
					listen_dev(rect2, "click", /*handleMandalorian3*/ ctx[4], false, false, false),
					listen_dev(text0, "click", /*handleMandalorian1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleMandalorian2*/ ctx[3], false, false, false),
					listen_dev(text2, "click", /*handleMandalorian3*/ ctx[4], false, false, false)
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
	validate_slots("Mandalorian", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	// onMount(
	async function getMandalorian(x) {
		let addr = `http://192.168.0.42:8888/intMandalorian?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	//)
	let handleMandalorian1 = () => {
		let promise = getMandalorian(`01`).catch(err => console.log(err));
	};

	let handleMandalorian2 = () => {
		let promise = getMandalorian(`02`).catch(err => console.log(err));
	};

	let handleMandalorian3 = () => {
		let promise = getMandalorian(`03`).catch(err => console.log(err));
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Mandalorian> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getMandalorian,
		handleMandalorian1,
		handleMandalorian2,
		handleMandalorian3,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleMandalorian1" in $$props) $$invalidate(2, handleMandalorian1 = $$props.handleMandalorian1);
		if ("handleMandalorian2" in $$props) $$invalidate(3, handleMandalorian2 = $$props.handleMandalorian2);
		if ("handleMandalorian3" in $$props) $$invalidate(4, handleMandalorian3 = $$props.handleMandalorian3);
		if ("handlePlayShow" in $$props) $$invalidate(5, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		showlist,
		showlistcount,
		handleMandalorian1,
		handleMandalorian2,
		handleMandalorian3,
		handlePlayShow
	];
}

class Mandalorian extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Mandalorian",
			options,
			id: create_fragment.name
		});
	}
}

export default Mandalorian;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZGFsb3JpYW4uNTNkN2ZmNDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbWFuZGFsb3JpYW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJvbHMuc3ZlbHRlJ1xuICAgIGxldCBzaG93bGlzdDtcbiAgICBsZXQgc2hvd2xpc3Rjb3VudDtcbiAgICBsZXQgdmlzaWJsZURpcyA9IGZhbHNlXG5cbiAgICAvLyBvbk1vdW50KFxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRNYW5kYWxvcmlhbih4KSB7XG4gICAgICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50TWFuZGFsb3JpYW4/c2Vhc29uPSR7eH1gXG4gICAgICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmVwaXNvZGUpXG4gICAgICAgICAgICAgICAgc2hvd2xpc3QgPSBkYXRhXG4gICAgICAgICAgICAgICAgc2hvd2xpc3Rjb3VudCA9IGRhdGEubGVuZ3RoXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH1cbiAgICAvLylcblxuICAgIGxldCBoYW5kbGVNYW5kYWxvcmlhbjEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TWFuZGFsb3JpYW4oYDAxYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVNYW5kYWxvcmlhbjIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TWFuZGFsb3JpYW4oYDAyYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVNYW5kYWxvcmlhbjMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TWFuZGFsb3JpYW4oYDAzYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIC8vIGxldCBmdWNrRGlzID0gKCkgPT4ge1xuICAgIC8vICAgICBpZiAodmlzaWJsZURpcykge1xuICAgIC8vICAgICAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB2aXNpYmxlRGlzID0gdHJ1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheU1lZGlhKHgpIHtcbiAgICAgICAgbGV0IHkgPSBcIi9tZWRpYS9waS9QaVRCL21lZGlhL1RWU2hvd3NcIiArIHhcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHlcIilcbiAgICAgICAgY29uc29sZS5sb2coeSlcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L3BsYXlNZWRpYVJlYWN0P21vdmllPSR7eX1gXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXG4gICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgIGxldCBoYW5kbGVQbGF5U2hvdyA9IChtZWRpYSkgPT4ge1xuICAgICAgICAvLyBpZiAoTFApIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1lZGlhKVxuXG4gICAgICAgIC8vICAgICBsZXQgZm9vID0gbWVkaWEuc3BsaXQoXCJUVlNob3dzXCIsIDIpXG4gICAgICAgIC8vICAgICBsZXQgbmV3cGF0aCA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjgwNjNgICsgXCIvXCIgKyBtZWRpYVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3cGF0aClcbiAgICAgICAgLy8gICAgIFRWbG9jYWxwbGF5VVJMLnNldChuZXdwYXRoKVxuICAgICAgICAvLyAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFBsYXlNZWRpYShtZWRpYSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPGgxPk1hbmRhbG9yaWFuPC9oMT5cbjxDb250cm9scyAvPlxuPHN2ZyB2aWV3Qm94PVwiMCAwIDI3MyAzNlwiPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVNYW5kYWxvcmlhbjF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJnYigwLDAsMjU1KTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZU1hbmRhbG9yaWFuMn0geD1cIjk3XCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJlZDtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZU1hbmRhbG9yaWFuM30geD1cIjE5NVwiIHk9XCIwXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpncmVlbjtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZU1hbmRhbG9yaWFuMX0geD1cIjIzXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVNYW5kYWxvcmlhbjJ9IHg9XCIxMjBcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDI8L3RleHQ+XG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZU1hbmRhbG9yaWFuM30geD1cIjIxMFwiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMzwvdGV4dD5cbjwvc3ZnPiBcblxuPHVsPlxuICAgIHsjaWYgc2hvd2xpc3Rjb3VudCA+IDB9XG4gICAgICAgIHsjZWFjaCBzaG93bGlzdCBhcyBzc2hvdyB9XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInR2c2hvd3NcIiBvbjpjbGljaz17aGFuZGxlUGxheVNob3coc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuPHN0eWxlPlxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLyogYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6NDklO1xuICAgICAgICBwYWRkaW5nOjdweDtcbiAgICAgICAgbWFyZ2luOi41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDYyLCAxNTMpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gKi9cbiAgICAvKiAuYm9vIHtcbiAgICAgICAgd2lkdGg6MzIlO1xuICAgICAgICBtYXJnaW46LjVweDtcbiAgICB9XG4gICAgLmJhciB7XG4gICAgICAgIHdpZHRoOjk4LjUlO1xuICAgIH0gKi9cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWtGZSxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBQUMsR0FBUTs7OzsrQkFBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFK0QsR0FBSyxJQUFDLEtBQUs7Ozs7MEJBQ2pFLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FEUSxHQUFjLGNBQUMsR0FBSyxJQUFDLFFBQVEsdUJBQTdCLEdBQWMsY0FBQyxHQUFLLElBQUMsUUFBUTs7Ozs7Ozs7Ozs7O29FQUFJLEdBQUssSUFBQyxLQUFLO29FQUNqRSxHQUFLLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUozQixHQUFhLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
