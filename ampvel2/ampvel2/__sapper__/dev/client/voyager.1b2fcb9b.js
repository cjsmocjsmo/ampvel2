import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.7af498d9.js';
import { C as Controls } from './Controls.1a00a806.js';

/* src/routes/voyager.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/voyager.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (101:4) {#if VOYshowlistcount > 0}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*VOYshowlist*/ ctx[0];
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
			if (dirty & /*VOYshowlist, handlePlayVOY*/ 513) {
				each_value = /*VOYshowlist*/ ctx[0];
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
		source: "(101:4) {#if VOYshowlistcount > 0}",
		ctx
	});

	return block;
}

// (102:8) {#each VOYshowlist as sshow }
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*sshow*/ ctx[13].title + "";
	let t0;
	let t1;
	let span;
	let t2_value = /*sshow*/ ctx[13].episode + "";
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
			attr_dev(a, "class", "svelte-hv4tyq");
			add_location(a, file, 103, 16, 3860);
			attr_dev(span, "class", "svelte-hv4tyq");
			add_location(span, file, 104, 16, 3953);
			attr_dev(li, "class", "svelte-hv4tyq");
			add_location(li, file, 102, 12, 3839);
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
						if (is_function(/*handlePlayVOY*/ ctx[9](/*sshow*/ ctx[13].tvfspath))) /*handlePlayVOY*/ ctx[9](/*sshow*/ ctx[13].tvfspath).apply(this, arguments);
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
			if (dirty & /*VOYshowlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[13].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*VOYshowlist*/ 1 && t2_value !== (t2_value = /*sshow*/ ctx[13].episode + "")) set_data_dev(t2, t2_value);
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
		source: "(102:8) {#each VOYshowlist as sshow }",
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
	let rect4;
	let rect5;
	let rect6;
	let text0;
	let t3;
	let text1;
	let t4;
	let text2;
	let t5;
	let text3;
	let t6;
	let text4;
	let t7;
	let text5;
	let t8;
	let text6;
	let t9;
	let t10;
	let ul;
	let current;
	let mounted;
	let dispose;
	controls = new Controls({ $$inline: true });
	let if_block = /*VOYshowlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Voyager");
			t1 = space();
			create_component(controls.$$.fragment);
			t2 = space();
			svg = svg_element("svg");
			rect0 = svg_element("rect");
			rect1 = svg_element("rect");
			rect2 = svg_element("rect");
			rect3 = svg_element("rect");
			rect4 = svg_element("rect");
			rect5 = svg_element("rect");
			rect6 = svg_element("rect");
			text0 = svg_element("text");
			t3 = text("Season 1");
			text1 = svg_element("text");
			t4 = text("Season 2");
			text2 = svg_element("text");
			t5 = text("Season 3");
			text3 = svg_element("text");
			t6 = text("Season 4");
			text4 = svg_element("text");
			t7 = text("Season 5");
			text5 = svg_element("text");
			t8 = text("Season 6");
			text6 = svg_element("text");
			t9 = text("Season 7");
			t10 = space();
			ul = element("ul");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Voyager");
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

			rect4 = claim_element(
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

			children(rect4).forEach(detach_dev);

			rect5 = claim_element(
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

			children(rect5).forEach(detach_dev);

			rect6 = claim_element(
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

			children(rect6).forEach(detach_dev);

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

			text4 = claim_element(
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

			var text4_nodes = children(text4);
			t7 = claim_text(text4_nodes, "Season 5");
			text4_nodes.forEach(detach_dev);

			text5 = claim_element(
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

			var text5_nodes = children(text5);
			t8 = claim_text(text5_nodes, "Season 6");
			text5_nodes.forEach(detach_dev);

			text6 = claim_element(
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

			var text6_nodes = children(text6);
			t9 = claim_text(text6_nodes, "Season 7");
			text6_nodes.forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-hv4tyq");
			add_location(h1, file, 76, 0, 2159);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "32%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 79, 4, 2221);
			attr_dev(rect1, "x", "97");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "32%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 80, 4, 2351);
			attr_dev(rect2, "x", "195");
			attr_dev(rect2, "y", "0");
			attr_dev(rect2, "width", "32%");
			attr_dev(rect2, "height", "30");
			set_style(rect2, "fill", "green");
			set_style(rect2, "stroke-width", "1");
			set_style(rect2, "stroke", "rgb(0,0,0)");
			add_location(rect2, file, 81, 4, 2473);
			attr_dev(rect3, "x", "0");
			attr_dev(rect3, "y", "33");
			attr_dev(rect3, "width", "32%");
			attr_dev(rect3, "height", "30");
			set_style(rect3, "fill", "red");
			set_style(rect3, "stroke-width", "1");
			set_style(rect3, "stroke", "rgb(0,0,0)");
			add_location(rect3, file, 83, 4, 2599);
			attr_dev(rect4, "x", "97");
			attr_dev(rect4, "y", "33");
			attr_dev(rect4, "width", "32%");
			attr_dev(rect4, "height", "30");
			set_style(rect4, "fill", "green");
			set_style(rect4, "stroke-width", "1");
			set_style(rect4, "stroke", "rgb(0,0,0)");
			add_location(rect4, file, 84, 4, 2721);
			attr_dev(rect5, "x", "195");
			attr_dev(rect5, "y", "33");
			attr_dev(rect5, "width", "32%");
			attr_dev(rect5, "height", "30");
			set_style(rect5, "fill", "blue");
			set_style(rect5, "stroke-width", "1");
			set_style(rect5, "stroke", "rgb(0,0,0)");
			add_location(rect5, file, 85, 4, 2846);
			attr_dev(rect6, "x", "0");
			attr_dev(rect6, "y", "66");
			attr_dev(rect6, "width", "100%");
			attr_dev(rect6, "height", "30");
			set_style(rect6, "fill", "purple");
			set_style(rect6, "stroke-width", "1");
			set_style(rect6, "stroke", "rgb(0,0,0)");
			add_location(rect6, file, 87, 4, 2972);
			attr_dev(text0, "x", "23");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 89, 4, 3099);
			attr_dev(text1, "x", "120");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 90, 4, 3191);
			attr_dev(text2, "x", "210");
			attr_dev(text2, "y", "18");
			attr_dev(text2, "font-size", ".7em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 91, 4, 3284);
			attr_dev(text3, "x", "23");
			attr_dev(text3, "y", "51");
			attr_dev(text3, "font-size", ".7em");
			attr_dev(text3, "fill", "white");
			add_location(text3, file, 93, 4, 3378);
			attr_dev(text4, "x", "120");
			attr_dev(text4, "y", "51");
			attr_dev(text4, "font-size", ".7em");
			attr_dev(text4, "fill", "white");
			add_location(text4, file, 94, 4, 3470);
			attr_dev(text5, "x", "210");
			attr_dev(text5, "y", "51");
			attr_dev(text5, "font-size", ".7em");
			attr_dev(text5, "fill", "white");
			add_location(text5, file, 95, 4, 3563);
			attr_dev(text6, "x", "120");
			attr_dev(text6, "y", "85");
			attr_dev(text6, "font-size", ".7em");
			attr_dev(text6, "fill", "white");
			add_location(text6, file, 96, 4, 3656);
			attr_dev(svg, "viewBox", "0 0 273 100");
			add_location(svg, file, 78, 0, 2189);
			attr_dev(ul, "class", "svelte-hv4tyq");
			add_location(ul, file, 99, 0, 3753);
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
			append_dev(svg, rect4);
			append_dev(svg, rect5);
			append_dev(svg, rect6);
			append_dev(svg, text0);
			append_dev(text0, t3);
			append_dev(svg, text1);
			append_dev(text1, t4);
			append_dev(svg, text2);
			append_dev(text2, t5);
			append_dev(svg, text3);
			append_dev(text3, t6);
			append_dev(svg, text4);
			append_dev(text4, t7);
			append_dev(svg, text5);
			append_dev(text5, t8);
			append_dev(svg, text6);
			append_dev(text6, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, ul, anchor);
			if (if_block) if_block.m(ul, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(rect0, "click", /*handleVOY1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleVOY2*/ ctx[3], false, false, false),
					listen_dev(rect2, "click", /*handleVOY3*/ ctx[4], false, false, false),
					listen_dev(rect3, "click", /*handleVOY4*/ ctx[5], false, false, false),
					listen_dev(rect4, "click", /*handleVOY5*/ ctx[6], false, false, false),
					listen_dev(rect5, "click", /*handleVOY6*/ ctx[7], false, false, false),
					listen_dev(rect6, "click", /*handleVOY7*/ ctx[8], false, false, false),
					listen_dev(text0, "click", /*handleVOY1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleVOY2*/ ctx[3], false, false, false),
					listen_dev(text2, "click", /*handleVOY3*/ ctx[4], false, false, false),
					listen_dev(text3, "click", /*handleVOY4*/ ctx[5], false, false, false),
					listen_dev(text4, "click", /*handleVOY5*/ ctx[6], false, false, false),
					listen_dev(text5, "click", /*handleVOY6*/ ctx[7], false, false, false),
					listen_dev(text6, "click", /*handleVOY7*/ ctx[8], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*VOYshowlistcount*/ ctx[1] > 0) {
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
			if (detaching) detach_dev(t10);
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
	validate_slots("Voyager", slots, []);
	let VOYshowlist;
	let VOYshowlistcount;
	let visibleVoy = false;

	async function getVOY(x) {
		let addr = `http://192.168.0.42:8888/intVoyager?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(0, VOYshowlist = data);
			$$invalidate(1, VOYshowlistcount = data.length);
		}).catch(err => console.log(err));
	}

	let handleVOY1 = () => {
		let promise = getVOY(`01`).catch(err => console.log(err));
	};

	let handleVOY2 = () => {
		let promise = getVOY(`02`).catch(err => console.log(err));
	};

	let handleVOY3 = () => {
		let promise = getVOY(`03`).catch(err => console.log(err));
	};

	let handleVOY4 = () => {
		let promise = getVOY(`04`).catch(err => console.log(err));
	};

	let handleVOY5 = () => {
		let promise = getVOY(`05`).catch(err => console.log(err));
	};

	let handleVOY6 = () => {
		let promise = getVOY(`06`).catch(err => console.log(err));
	};

	let handleVOY7 = () => {
		let promise = getVOY(`07`).catch(err => console.log(err));
	};

	let fuckVOY = () => {
		if (visibleVoy) {
			visibleVoy = false;
		} else {
			visibleVoy = true;
		}
	};

	let handlePlayVOY = media => {
		// if (LP) {
		//     console.log(media)
		//     let foo = media.split("TVShows", 2)
		//     let newpath = `http://192.168.0.42:8063` + media
		//     console.log(newpath)
		//     TVlocalplayURL.set(newpath)
		//     visibleVOY = false
		// } else {
		let promise = getPlayMedia(media).catch(err => console.log(err));

		visibleVOY = false;
	}; // }

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Voyager> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		VOYshowlist,
		VOYshowlistcount,
		visibleVoy,
		getVOY,
		handleVOY1,
		handleVOY2,
		handleVOY3,
		handleVOY4,
		handleVOY5,
		handleVOY6,
		handleVOY7,
		fuckVOY,
		getPlayMedia,
		handlePlayVOY
	});

	$$self.$inject_state = $$props => {
		if ("VOYshowlist" in $$props) $$invalidate(0, VOYshowlist = $$props.VOYshowlist);
		if ("VOYshowlistcount" in $$props) $$invalidate(1, VOYshowlistcount = $$props.VOYshowlistcount);
		if ("visibleVoy" in $$props) visibleVoy = $$props.visibleVoy;
		if ("handleVOY1" in $$props) $$invalidate(2, handleVOY1 = $$props.handleVOY1);
		if ("handleVOY2" in $$props) $$invalidate(3, handleVOY2 = $$props.handleVOY2);
		if ("handleVOY3" in $$props) $$invalidate(4, handleVOY3 = $$props.handleVOY3);
		if ("handleVOY4" in $$props) $$invalidate(5, handleVOY4 = $$props.handleVOY4);
		if ("handleVOY5" in $$props) $$invalidate(6, handleVOY5 = $$props.handleVOY5);
		if ("handleVOY6" in $$props) $$invalidate(7, handleVOY6 = $$props.handleVOY6);
		if ("handleVOY7" in $$props) $$invalidate(8, handleVOY7 = $$props.handleVOY7);
		if ("fuckVOY" in $$props) fuckVOY = $$props.fuckVOY;
		if ("handlePlayVOY" in $$props) $$invalidate(9, handlePlayVOY = $$props.handlePlayVOY);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		VOYshowlist,
		VOYshowlistcount,
		handleVOY1,
		handleVOY2,
		handleVOY3,
		handleVOY4,
		handleVOY5,
		handleVOY6,
		handleVOY7,
		handlePlayVOY
	];
}

class Voyager extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Voyager",
			options,
			id: create_fragment.name
		});
	}
}

export default Voyager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm95YWdlci4xYjJmY2I5Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy92b3lhZ2VyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcbiAgICBsZXQgVk9Zc2hvd2xpc3Q7XG4gICAgbGV0IFZPWXNob3dsaXN0Y291bnQ7XG4gICAgbGV0IHZpc2libGVWb3kgPSBmYWxzZVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Vk9ZKHgpIHtcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L2ludFZveWFnZXI/c2Vhc29uPSR7eH1gXG4gICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBWT1lzaG93bGlzdCA9IGRhdGFcbiAgICAgICAgICAgIFZPWXNob3dsaXN0Y291bnQgPSBkYXRhLmxlbmd0aFxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVZPWTEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0Vk9ZKGAwMWApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlVk9ZMiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRWT1koYDAyYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgICBsZXQgaGFuZGxlVk9ZMyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRWT1koYDAzYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgICBsZXQgaGFuZGxlVk9ZNCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRWT1koYDA0YCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVWT1k1ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFZPWShgMDVgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVZPWTYgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0Vk9ZKGAwNmApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlVk9ZNyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRWT1koYDA3YCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBmdWNrVk9ZID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZVZveSkge1xuICAgICAgICAgICAgdmlzaWJsZVZveSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXNpYmxlVm95ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheU1lZGlhKHgpIHtcbiAgICAgICAgbGV0IHkgPSBcIi9tZWRpYS9waS9QaVRCL21lZGlhL1RWU2hvd3NcIiArIHhcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L3BsYXlNZWRpYVJlYWN0P21vdmllPSR7eX1gXG4gICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVBsYXlWT1kgPSAobWVkaWEpID0+IHtcbiAgICAgICAgLy8gaWYgKExQKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhtZWRpYSlcblxuICAgICAgICAvLyAgICAgbGV0IGZvbyA9IG1lZGlhLnNwbGl0KFwiVFZTaG93c1wiLCAyKVxuICAgICAgICAvLyAgICAgbGV0IG5ld3BhdGggPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4MDYzYCArIG1lZGlhXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXdwYXRoKVxuICAgICAgICAvLyAgICAgVFZsb2NhbHBsYXlVUkwuc2V0KG5ld3BhdGgpXG4gICAgICAgIC8vICAgICB2aXNpYmxlVk9ZID0gZmFsc2VcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gZ2V0UGxheU1lZGlhKG1lZGlhKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICB2aXNpYmxlVk9ZID0gZmFsc2VcbiAgICAgICAgLy8gfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48aDE+Vm95YWdlcjwvaDE+XG48Q29udHJvbHMgLz5cbjxzdmcgdmlld0JveD1cIjAgMCAyNzMgMTAwXCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVZPWTF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJnYigwLDAsMjU1KTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVZPWTJ9IHg9XCI5N1wiIHk9XCIwXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZWQ7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVWT1kzfSB4PVwiMTk1XCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOmdyZWVuO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cblxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVWT1k0fSB4PVwiMFwiIHk9XCIzM1wiIHdpZHRoPVwiMzIlXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmVkO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8cmVjdCBvbjpjbGljaz17aGFuZGxlVk9ZNX0geD1cIjk3XCIgeT1cIjMzXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpncmVlbjtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVZPWTZ9IHg9XCIxOTVcIiB5PVwiMzNcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOmJsdWU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuXG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVZPWTd9IHg9XCIwXCIgeT1cIjY2XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cHVycGxlO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cblxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVWT1kxfSB4PVwiMjNcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDE8L3RleHQ+XG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZVZPWTJ9IHg9XCIxMjBcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDI8L3RleHQ+XG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZVZPWTN9IHg9XCIyMTBcIiB5PVwiMThcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDM8L3RleHQ+XG5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlVk9ZNH0geD1cIjIzXCIgeT1cIjUxXCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiA0PC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVWT1k1fSB4PVwiMTIwXCIgeT1cIjUxXCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiA1PC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVWT1k2fSB4PVwiMjEwXCIgeT1cIjUxXCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiA2PC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVWT1k3fSB4PVwiMTIwXCIgeT1cIjg1XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiA3PC90ZXh0PlxuPC9zdmc+XG5cbjx1bD5cbiAgICB7I2lmIFZPWXNob3dsaXN0Y291bnQgPiAwfVxuICAgICAgICB7I2VhY2ggVk9Zc2hvd2xpc3QgYXMgc3Nob3cgfVxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0dnNob3dzXCIgb246Y2xpY2s9e2hhbmRsZVBsYXlWT1koc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuPHN0eWxlPlxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgXG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAvKiBidXR0b24ge1xuICAgICAgICB3aWR0aDo0NSU7XG4gICAgICAgIHBhZGRpbmc6N3B4O1xuICAgICAgICBtYXJnaW46LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgNjIsIDE1Myk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5iYXoge1xuICAgICAgICB3aWR0aDozMiU7XG4gICAgICAgIG1hcmdpbjouNXB4O1xuICAgIH0gKi9cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQXFHZSxHQUFXOzs7O2dDQUFoQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUFDLEdBQVc7Ozs7K0JBQWhCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUU4RCxHQUFLLEtBQUMsS0FBSzs7OzswQkFDaEUsR0FBSyxLQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQURRLEdBQWEsY0FBQyxHQUFLLEtBQUMsUUFBUSxzQkFBNUIsR0FBYSxjQUFDLEdBQUssS0FBQyxRQUFROzs7Ozs7Ozs7Ozs7dUVBQUksR0FBSyxLQUFDLEtBQUs7dUVBQ2hFLEdBQUssS0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
