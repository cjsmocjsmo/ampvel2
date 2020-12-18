import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.03656131.js';
import { C as Controls } from './Controls.de1a8cd0.js';

/* src/routes/sttv.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/sttv.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (93:4) {#if showlistcount > 0}
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
			if (dirty & /*showlist, handlePlayShowSTTV*/ 33) {
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
		source: "(93:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (94:8) {#each showlist as sshow }
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
			attr_dev(a, "class", "svelte-hv4tyq");
			add_location(a, file, 95, 16, 3551);
			attr_dev(span, "class", "svelte-hv4tyq");
			add_location(span, file, 96, 16, 3649);
			attr_dev(li, "class", "svelte-hv4tyq");
			add_location(li, file, 94, 12, 3530);
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
						if (is_function(/*handlePlayShowSTTV*/ ctx[5](/*sshow*/ ctx[9].tvfspath))) /*handlePlayShowSTTV*/ ctx[5](/*sshow*/ ctx[9].tvfspath).apply(this, arguments);
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
		source: "(94:8) {#each showlist as sshow }",
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
	let if_block = /*showlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Star Trek");
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
			t0 = claim_text(h1_nodes, "Star Trek");
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
			add_location(h1, file, 62, 0, 1761);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "32%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 65, 4, 1824);
			attr_dev(rect1, "x", "97");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "32%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 66, 4, 1960);
			attr_dev(rect2, "x", "195");
			attr_dev(rect2, "y", "0");
			attr_dev(rect2, "width", "32%");
			attr_dev(rect2, "height", "30");
			set_style(rect2, "fill", "green");
			set_style(rect2, "stroke-width", "1");
			set_style(rect2, "stroke", "rgb(0,0,0)");
			add_location(rect2, file, 67, 4, 2088);
			attr_dev(rect3, "x", "0");
			attr_dev(rect3, "y", "33");
			attr_dev(rect3, "width", "32%");
			attr_dev(rect3, "height", "30");
			set_style(rect3, "fill", "red");
			set_style(rect3, "stroke-width", "1");
			set_style(rect3, "stroke", "rgb(0,0,0)");
			add_location(rect3, file, 69, 4, 2220);
			attr_dev(rect4, "x", "97");
			attr_dev(rect4, "y", "33");
			attr_dev(rect4, "width", "32%");
			attr_dev(rect4, "height", "30");
			set_style(rect4, "fill", "green");
			set_style(rect4, "stroke-width", "1");
			set_style(rect4, "stroke", "rgb(0,0,0)");
			add_location(rect4, file, 70, 4, 2320);
			attr_dev(rect5, "x", "195");
			attr_dev(rect5, "y", "33");
			attr_dev(rect5, "width", "32%");
			attr_dev(rect5, "height", "30");
			set_style(rect5, "fill", "blue");
			set_style(rect5, "stroke-width", "1");
			set_style(rect5, "stroke", "rgb(0,0,0)");
			add_location(rect5, file, 71, 4, 2423);
			attr_dev(rect6, "x", "0");
			attr_dev(rect6, "y", "67");
			attr_dev(rect6, "width", "100%");
			attr_dev(rect6, "height", "30");
			set_style(rect6, "fill", "purple");
			set_style(rect6, "stroke-width", "1");
			set_style(rect6, "stroke", "rgb(0,0,0)");
			add_location(rect6, file, 73, 4, 2527);
			attr_dev(text0, "x", "23");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 75, 4, 2632);
			attr_dev(text1, "x", "120");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 76, 4, 2730);
			attr_dev(text2, "x", "210");
			attr_dev(text2, "y", "18");
			attr_dev(text2, "font-size", ".7em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 77, 4, 2829);
			attr_dev(text3, "x", "23");
			attr_dev(text3, "y", "51");
			attr_dev(text3, "font-size", ".7em");
			attr_dev(text3, "fill", "white");
			add_location(text3, file, 79, 4, 2929);
			attr_dev(text4, "x", "120");
			attr_dev(text4, "y", "51");
			attr_dev(text4, "font-size", ".7em");
			attr_dev(text4, "fill", "white");
			add_location(text4, file, 80, 4, 2999);
			attr_dev(text5, "x", "210");
			attr_dev(text5, "y", "51");
			attr_dev(text5, "font-size", ".7em");
			attr_dev(text5, "fill", "white");
			add_location(text5, file, 81, 4, 3070);
			attr_dev(text6, "x", "120");
			attr_dev(text6, "y", "85");
			attr_dev(text6, "font-size", ".7em");
			attr_dev(text6, "fill", "white");
			add_location(text6, file, 82, 4, 3141);
			attr_dev(svg, "viewBox", "0 0 273 32");
			add_location(svg, file, 64, 0, 1793);
			attr_dev(ul, "class", "svelte-hv4tyq");
			add_location(ul, file, 91, 0, 3450);
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
					listen_dev(rect0, "click", /*handleSTTVClick1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleSTTVClick2*/ ctx[3], false, false, false),
					listen_dev(rect2, "click", /*handleSTTVClick3*/ ctx[4], false, false, false),
					listen_dev(text0, "click", /*handleSTTVClick1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleSTTVClick2*/ ctx[3], false, false, false),
					listen_dev(text2, "click", /*handleSTTVClick3*/ ctx[4], false, false, false)
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
	validate_slots("Sttv", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	async function getSTTV(x) {
		let addr = `http://192.168.0.42:8888/intSTTV?season=${x}`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	let handleSTTVClick1 = () => {
		let promise = getSTTV(`01`).catch(err => console.log(err));
	};

	let handleSTTVClick2 = () => {
		let promise = getSTTV(`02`).catch(err => console.log(err));
	};

	let handleSTTVClick3 = () => {
		let promise = getSTTV(`03`).catch(err => console.log(err));
	};

	let fuckDis = () => {
		if (visibleDis) {
			visibleDis = false;
		} else {
			visibleDis = true;
		}
	};

	let handlePlayShowSTTV = media => {
		// if (LP) {
		//     console.log(media)
		//     let foo = media.split("TVShows", 2)
		//     let newpath = `http://192.168.0.42:8063` + media
		//     console.log(newpath)
		//     TVlocalplayURL.set(newpath)
		//     visibleDis = false
		// } else {
		let promise = getPlayMedia(media).catch(err => console.log(err));

		visibleDis = false;
	}; // }

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Sttv> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getSTTV,
		handleSTTVClick1,
		handleSTTVClick2,
		handleSTTVClick3,
		fuckDis,
		getPlayMedia,
		handlePlayShowSTTV
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleSTTVClick1" in $$props) $$invalidate(2, handleSTTVClick1 = $$props.handleSTTVClick1);
		if ("handleSTTVClick2" in $$props) $$invalidate(3, handleSTTVClick2 = $$props.handleSTTVClick2);
		if ("handleSTTVClick3" in $$props) $$invalidate(4, handleSTTVClick3 = $$props.handleSTTVClick3);
		if ("fuckDis" in $$props) fuckDis = $$props.fuckDis;
		if ("handlePlayShowSTTV" in $$props) $$invalidate(5, handlePlayShowSTTV = $$props.handlePlayShowSTTV);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		showlist,
		showlistcount,
		handleSTTVClick1,
		handleSTTVClick2,
		handleSTTVClick3,
		handlePlayShowSTTV
	];
}

class Sttv extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Sttv",
			options,
			id: create_fragment.name
		});
	}
}

export default Sttv;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R0di5hZDg3ODU5My5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zdHR2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcbiAgICBsZXQgc2hvd2xpc3Q7XG4gICAgbGV0IHNob3dsaXN0Y291bnQ7XG4gICAgbGV0IHZpc2libGVEaXMgPSBmYWxzZVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U1RUVih4KSB7XG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9pbnRTVFRWP3NlYXNvbj0ke3h9YFxuICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgc2hvd2xpc3QgPSBkYXRhXG4gICAgICAgICAgICBzaG93bGlzdGNvdW50ID0gZGF0YS5sZW5ndGhcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVTVFRWQ2xpY2sxID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFNUVFYoYDAxYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVTVFRWQ2xpY2syID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFNUVFYoYDAyYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgICBsZXQgaGFuZGxlU1RUVkNsaWNrMyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRTVFRWKGAwM2ApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgZnVja0RpcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGVEaXMpIHtcbiAgICAgICAgICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlNZWRpYSh4KSB7XG4gICAgICAgIGxldCB5ID0gXCIvbWVkaWEvcGkvUGlUQi9tZWRpYS9UVlNob3dzXCIgKyB4XG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9wbGF5TWVkaWFSZWFjdD9tb3ZpZT0ke3l9YFxuICAgICAgICBcbiAgICAgICAgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlUGxheVNob3dTVFRWID0gKG1lZGlhKSA9PiB7XG4gICAgICAgIC8vIGlmIChMUCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWVkaWEpXG5cbiAgICAgICAgLy8gICAgIGxldCBmb28gPSBtZWRpYS5zcGxpdChcIlRWU2hvd3NcIiwgMilcbiAgICAgICAgLy8gICAgIGxldCBuZXdwYXRoID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODA2M2AgKyBtZWRpYVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3cGF0aClcbiAgICAgICAgLy8gICAgIFRWbG9jYWxwbGF5VVJMLnNldChuZXdwYXRoKVxuICAgICAgICAvLyAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0UGxheU1lZGlhKG1lZGlhKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIHZpc2libGVEaXMgPSBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxoMT5TdGFyIFRyZWs8L2gxPlxuPENvbnRyb2xzIC8+XG48c3ZnIHZpZXdCb3g9XCIwIDAgMjczIDMyXCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVNUVFZDbGljazF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJnYigwLDAsMjU1KTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVNUVFZDbGljazJ9IHg9XCI5N1wiIHk9XCIwXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZWQ7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVTVFRWQ2xpY2szfSB4PVwiMTk1XCIgeT1cIjBcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOmdyZWVuO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cblxuICAgIDxyZWN0IHg9XCIwXCIgeT1cIjMzXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZWQ7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IHg9XCI5N1wiIHk9XCIzM1wiIHdpZHRoPVwiMzIlXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6Z3JlZW47c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IHg9XCIxOTVcIiB5PVwiMzNcIiB3aWR0aD1cIjMyJVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOmJsdWU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuXG4gICAgPHJlY3QgeD1cIjBcIiB5PVwiNjdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpwdXJwbGU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuXG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZVNUVFZDbGljazF9IHg9XCIyM1wiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMTwvdGV4dD5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlU1RUVkNsaWNrMn0geD1cIjEyMFwiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMjwvdGV4dD5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlU1RUVkNsaWNrM30geD1cIjIxMFwiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMzwvdGV4dD5cblxuICAgIDx0ZXh0IHg9XCIyM1wiIHk9XCI1MVwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gNDwvdGV4dD5cbiAgICA8dGV4dCB4PVwiMTIwXCIgeT1cIjUxXCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiA1PC90ZXh0PlxuICAgIDx0ZXh0IHg9XCIyMTBcIiB5PVwiNTFcIiBmb250LXNpemU9XCIuN2VtXCIgZmlsbD1cIndoaXRlXCI+U2Vhc29uIDY8L3RleHQ+XG4gICAgPHRleHQgeD1cIjEyMFwiIHk9XCI4NVwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gNzwvdGV4dD5cbjwvc3ZnPiBcblxuPCEtLSA8bmF2PlxuICAgIDxidXR0b24gY2xhc3M9XCJiYXpcIiBvbjpjbGljaz17aGFuZGxlU1RUVkNsaWNrMX0+U2Vhc29uIDE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYmF6XCIgb246Y2xpY2s9e2hhbmRsZVNUVFZDbGljazJ9PlNlYXNvbiAyPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJhelwiIG9uOmNsaWNrPXtoYW5kbGVTVFRWQ2xpY2szfT5TZWFzb24gMzwvYnV0dG9uPlxuPC9uYXY+IC0tPlxuXG48dWw+XG4gICAgeyNpZiBzaG93bGlzdGNvdW50ID4gMH1cbiAgICAgICAgeyNlYWNoIHNob3dsaXN0IGFzIHNzaG93IH1cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidHZzaG93c1wiIG9uOmNsaWNrPXtoYW5kbGVQbGF5U2hvd1NUVFYoc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuXG48c3R5bGU+XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC8qIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOjQ1JTtcbiAgICAgICAgcGFkZGluZzo3cHg7XG4gICAgICAgIG1hcmdpbjouNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCA2MiwgMTUzKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJheiB7XG4gICAgICAgIHdpZHRoOjMyJTtcbiAgICAgICAgbWFyZ2luOi41cHg7XG4gICAgfSAqL1xuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBNkZlLEdBQVE7Ozs7Z0NBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQyxHQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVtRSxHQUFLLElBQUMsS0FBSzs7OzswQkFDckUsR0FBSyxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQURRLEdBQWtCLGNBQUMsR0FBSyxJQUFDLFFBQVEsMkJBQWpDLEdBQWtCLGNBQUMsR0FBSyxJQUFDLFFBQVE7Ozs7Ozs7Ozs7OztvRUFBSSxHQUFLLElBQUMsS0FBSztvRUFDckUsR0FBSyxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FKM0IsR0FBYSxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREEzQk4sR0FBZ0I7cURBQ2hCLEdBQWdCO3FEQUNoQixHQUFnQjtxREFRaEIsR0FBZ0I7cURBQ2hCLEdBQWdCO3FEQUNoQixHQUFnQjs7Ozs7Ozt5QkFlM0IsR0FBYSxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBekRQLFlBQVksQ0FBQyxDQUFDO0tBQ3JCLENBQUMsR0FBRyw4QkFBOEIsR0FBRyxDQUFDO0tBQ3RDLElBQUksb0RBQW9ELENBQUM7O0NBRTdELEtBQUssQ0FBQyxJQUFJLElBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO0VBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0lBQ2pCLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7Ozs7S0F6Qy9CLFFBQVE7S0FDUixhQUFhO0tBQ2IsVUFBVSxHQUFHLEtBQUs7O2dCQUVQLE9BQU8sQ0FBQyxDQUFDO01BQ2hCLElBQUksOENBQThDLENBQUM7O0VBQ3ZELEtBQUssQ0FBQyxJQUFJLElBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO21CQUNOLFFBQVEsR0FBRyxJQUFJO21CQUNmLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTTtLQUM1QixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRy9CLGdCQUFnQjtNQUNaLE9BQU8sR0FBRyxPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztLQUd4RCxnQkFBZ0I7TUFDWixPQUFPLEdBQUcsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FFeEQsZ0JBQWdCO01BQ1osT0FBTyxHQUFHLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBR3hELE9BQU87TUFDSCxVQUFVO0dBQ1YsVUFBVSxHQUFHLEtBQUs7O0dBRWxCLFVBQVUsR0FBRyxJQUFJOzs7O0tBZXJCLGtCQUFrQixHQUFJLEtBQUs7Ozs7Ozs7OztNQVV2QixPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7RUFDOUQsVUFBVSxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
