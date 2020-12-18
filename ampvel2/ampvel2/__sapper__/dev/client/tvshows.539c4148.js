import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, l as space, a as svg_element, t as text, q as query_selector_all, f as detach_dev, o as claim_space, c as claim_element, b as children, e as claim_text, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, n as noop, m as create_component, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.b4611b38.js';
import { C as Controls } from './Controls.c253bb0b.js';

/* src/components/tvsvg.svelte generated by Svelte v3.30.0 */

const file = "src/components/tvsvg.svelte";

function create_fragment(ctx) {
	let t0;
	let svg;
	let a0;
	let text0;
	let t1;
	let a1;
	let text1;
	let t2;
	let a2;
	let text2;
	let t3;
	let a3;
	let text3;
	let t4;
	let a4;
	let text4;
	let t5;
	let a5;
	let text5;
	let t6;
	let a6;
	let text6;
	let t7;
	let a7;
	let text7;
	let t8;
	let a8;
	let text8;
	let t9;
	let a9;
	let text9;
	let t10;
	let a10;
	let text10;
	let t11;
	let a11;
	let text11;
	let t12;
	let a12;
	let text12;
	let t13;
	let a13;
	let text13;
	let t14;
	let a14;
	let text14;
	let t15;
	let t16;

	const block = {
		c: function create() {
			t0 = space();
			svg = svg_element("svg");
			a0 = svg_element("a");
			text0 = svg_element("text");
			t1 = text("Altered Carbon");
			a1 = svg_element("a");
			text1 = svg_element("text");
			t2 = text("Lost In Space");
			a2 = svg_element("a");
			text2 = svg_element("text");
			t3 = text("Orville");
			a3 = svg_element("a");
			text3 = svg_element("text");
			t4 = text("Raised By Wolves");
			a4 = svg_element("a");
			text4 = svg_element("text");
			t5 = text("STTV");
			a5 = svg_element("a");
			text5 = svg_element("text");
			t6 = text("Voyager");
			a6 = svg_element("a");
			text6 = svg_element("text");
			t7 = text("Next Generation");
			a7 = svg_element("a");
			text7 = svg_element("text");
			t8 = text("Picard");
			a8 = svg_element("a");
			text8 = svg_element("text");
			t9 = text("Mandalorian");
			a9 = svg_element("a");
			text9 = svg_element("text");
			t10 = text("Discovery");
			a10 = svg_element("a");
			text10 = svg_element("text");
			t11 = text("Lower Decks");
			a11 = svg_element("a");
			text11 = svg_element("text");
			t12 = text("The Last Ship");
			a12 = svg_element("a");
			text12 = svg_element("text");
			t13 = text("SpaceTime");
			a13 = svg_element("a");
			text13 = svg_element("text");
			t14 = text("Sean Carroll");
			a14 = svg_element("a");
			text14 = svg_element("text");
			t15 = text("Star Trek");
			t16 = text("\n\n\tSorry, your browser does not support inline SVG.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ymcrg4\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			svg = claim_element(nodes, "svg", { viewBox: true }, 1);
			var svg_nodes = children(svg);
			a0 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a0_nodes = children(a0);

			text0 = claim_element(
				a0_nodes,
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
			t1 = claim_text(text0_nodes, "Altered Carbon");
			text0_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			a1 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a1_nodes = children(a1);

			text1 = claim_element(
				a1_nodes,
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
			t2 = claim_text(text1_nodes, "Lost In Space");
			text1_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			a2 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a2_nodes = children(a2);

			text2 = claim_element(
				a2_nodes,
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
			t3 = claim_text(text2_nodes, "Orville");
			text2_nodes.forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			a3 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a3_nodes = children(a3);

			text3 = claim_element(
				a3_nodes,
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
			t4 = claim_text(text3_nodes, "Raised By Wolves");
			text3_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			a4 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a4_nodes = children(a4);

			text4 = claim_element(
				a4_nodes,
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
			t5 = claim_text(text4_nodes, "STTV");
			text4_nodes.forEach(detach_dev);
			a4_nodes.forEach(detach_dev);
			a5 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a5_nodes = children(a5);

			text5 = claim_element(
				a5_nodes,
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
			t6 = claim_text(text5_nodes, "Voyager");
			text5_nodes.forEach(detach_dev);
			a5_nodes.forEach(detach_dev);
			a6 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a6_nodes = children(a6);

			text6 = claim_element(
				a6_nodes,
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
			t7 = claim_text(text6_nodes, "Next Generation");
			text6_nodes.forEach(detach_dev);
			a6_nodes.forEach(detach_dev);
			a7 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a7_nodes = children(a7);

			text7 = claim_element(
				a7_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text7_nodes = children(text7);
			t8 = claim_text(text7_nodes, "Picard");
			text7_nodes.forEach(detach_dev);
			a7_nodes.forEach(detach_dev);
			a8 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a8_nodes = children(a8);

			text8 = claim_element(
				a8_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text8_nodes = children(text8);
			t9 = claim_text(text8_nodes, "Mandalorian");
			text8_nodes.forEach(detach_dev);
			a8_nodes.forEach(detach_dev);
			a9 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a9_nodes = children(a9);

			text9 = claim_element(
				a9_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text9_nodes = children(text9);
			t10 = claim_text(text9_nodes, "Discovery");
			text9_nodes.forEach(detach_dev);
			a9_nodes.forEach(detach_dev);
			a10 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a10_nodes = children(a10);

			text10 = claim_element(
				a10_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text10_nodes = children(text10);
			t11 = claim_text(text10_nodes, "Lower Decks");
			text10_nodes.forEach(detach_dev);
			a10_nodes.forEach(detach_dev);
			a11 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a11_nodes = children(a11);

			text11 = claim_element(
				a11_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text11_nodes = children(text11);
			t12 = claim_text(text11_nodes, "The Last Ship");
			text11_nodes.forEach(detach_dev);
			a11_nodes.forEach(detach_dev);
			a12 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a12_nodes = children(a12);

			text12 = claim_element(
				a12_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text12_nodes = children(text12);
			t13 = claim_text(text12_nodes, "SpaceTime");
			text12_nodes.forEach(detach_dev);
			a12_nodes.forEach(detach_dev);
			a13 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a13_nodes = children(a13);

			text13 = claim_element(
				a13_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text13_nodes = children(text13);
			t14 = claim_text(text13_nodes, "Sean Carroll");
			text13_nodes.forEach(detach_dev);
			a13_nodes.forEach(detach_dev);
			a14 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a14_nodes = children(a14);

			text14 = claim_element(
				a14_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text14_nodes = children(text14);
			t15 = claim_text(text14_nodes, "Star Trek");
			text14_nodes.forEach(detach_dev);
			a14_nodes.forEach(detach_dev);
			t16 = claim_text(svg_nodes, "\n\n\tSorry, your browser does not support inline SVG.");
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "TV Shows";
			attr_dev(text0, "x", "0");
			attr_dev(text0, "y", "7");
			attr_dev(text0, "font-size", "1em");
			attr_dev(text0, "fill", "grey");
			add_location(text0, file, 7, 25, 112);
			attr_dev(a0, "href", "alteredcarbon");
			add_location(a0, file, 7, 1, 88);
			attr_dev(text1, "x", "135");
			attr_dev(text1, "y", "7");
			attr_dev(text1, "font-size", "1em");
			attr_dev(text1, "fill", "grey");
			add_location(text1, file, 8, 23, 207);
			attr_dev(a1, "href", "lostinspace");
			add_location(a1, file, 8, 1, 185);
			attr_dev(text2, "x", "251");
			attr_dev(text2, "y", "7");
			attr_dev(text2, "font-size", "1em");
			attr_dev(text2, "fill", "grey");
			add_location(text2, file, 9, 19, 299);
			attr_dev(a2, "href", "orville");
			add_location(a2, file, 9, 1, 281);
			attr_dev(text3, "x", "0");
			attr_dev(text3, "y", "27");
			attr_dev(text3, "font-size", "1em");
			attr_dev(text3, "fill", "grey");
			add_location(text3, file, 11, 26, 393);
			attr_dev(a3, "href", "raisedbywolves");
			add_location(a3, file, 11, 1, 368);
			attr_dev(text4, "x", "135");
			attr_dev(text4, "y", "27");
			attr_dev(text4, "font-size", "1em");
			attr_dev(text4, "fill", "grey");
			add_location(text4, file, 12, 16, 484);
			attr_dev(a4, "href", "sttv");
			add_location(a4, file, 12, 1, 469);
			attr_dev(text5, "x", "241");
			attr_dev(text5, "y", "27");
			attr_dev(text5, "font-size", "1em");
			attr_dev(text5, "fill", "grey");
			add_location(text5, file, 13, 19, 568);
			attr_dev(a5, "href", "voyager");
			add_location(a5, file, 13, 1, 550);
			attr_dev(text6, "x", "0");
			attr_dev(text6, "y", "46");
			attr_dev(text6, "font-size", "1em");
			attr_dev(text6, "fill", "grey");
			add_location(text6, file, 15, 26, 663);
			attr_dev(a6, "href", "nextgeneration");
			add_location(a6, file, 15, 1, 638);
			attr_dev(text7, "x", "135");
			attr_dev(text7, "y", "46");
			attr_dev(text7, "font-size", "1em");
			attr_dev(text7, "fill", "grey");
			add_location(text7, file, 16, 18, 755);
			attr_dev(a7, "href", "picard");
			add_location(a7, file, 16, 1, 738);
			attr_dev(text8, "x", "209");
			attr_dev(text8, "y", "46");
			attr_dev(text8, "font-size", "1em");
			attr_dev(text8, "fill", "grey");
			add_location(text8, file, 17, 23, 845);
			attr_dev(a8, "href", "mandalorian");
			add_location(a8, file, 17, 1, 823);
			attr_dev(text9, "x", "0");
			attr_dev(text9, "y", "64");
			attr_dev(text9, "font-size", "1em");
			attr_dev(text9, "fill", "grey");
			add_location(text9, file, 19, 21, 939);
			attr_dev(a9, "href", "discovery");
			add_location(a9, file, 19, 1, 919);
			attr_dev(text10, "x", "100");
			attr_dev(text10, "y", "64");
			attr_dev(text10, "font-size", "1em");
			attr_dev(text10, "fill", "grey");
			add_location(text10, file, 20, 22, 1029);
			attr_dev(a10, "href", "lowerdecks");
			add_location(a10, file, 20, 1, 1008);
			attr_dev(text11, "x", "205");
			attr_dev(text11, "y", "64");
			attr_dev(text11, "font-size", "1em");
			attr_dev(text11, "fill", "grey");
			add_location(text11, file, 21, 20, 1121);
			attr_dev(a11, "href", "lastship");
			add_location(a11, file, 21, 1, 1102);
			attr_dev(text12, "x", "0");
			attr_dev(text12, "y", "82");
			attr_dev(text12, "font-size", "1em");
			attr_dev(text12, "fill", "grey");
			add_location(text12, file, 23, 21, 1217);
			attr_dev(a12, "href", "spacetime");
			add_location(a12, file, 23, 1, 1197);
			attr_dev(text13, "x", "100");
			attr_dev(text13, "y", "82");
			attr_dev(text13, "font-size", "1em");
			attr_dev(text13, "fill", "grey");
			add_location(text13, file, 24, 22, 1307);
			attr_dev(a13, "href", "seancarrol");
			add_location(a13, file, 24, 1, 1286);
			attr_dev(text14, "x", "230");
			attr_dev(text14, "y", "82");
			attr_dev(text14, "font-size", "1em");
			attr_dev(text14, "fill", "grey");
			add_location(text14, file, 25, 20, 1400);
			attr_dev(a14, "href", "startrek");
			add_location(a14, file, 25, 1, 1381);
			attr_dev(svg, "viewBox", "0 -5 300 120");
			add_location(svg, file, 6, 0, 57);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, svg, anchor);
			append_dev(svg, a0);
			append_dev(a0, text0);
			append_dev(text0, t1);
			append_dev(svg, a1);
			append_dev(a1, text1);
			append_dev(text1, t2);
			append_dev(svg, a2);
			append_dev(a2, text2);
			append_dev(text2, t3);
			append_dev(svg, a3);
			append_dev(a3, text3);
			append_dev(text3, t4);
			append_dev(svg, a4);
			append_dev(a4, text4);
			append_dev(text4, t5);
			append_dev(svg, a5);
			append_dev(a5, text5);
			append_dev(text5, t6);
			append_dev(svg, a6);
			append_dev(a6, text6);
			append_dev(text6, t7);
			append_dev(svg, a7);
			append_dev(a7, text7);
			append_dev(text7, t8);
			append_dev(svg, a8);
			append_dev(a8, text8);
			append_dev(text8, t9);
			append_dev(svg, a9);
			append_dev(a9, text9);
			append_dev(text9, t10);
			append_dev(svg, a10);
			append_dev(a10, text10);
			append_dev(text10, t11);
			append_dev(svg, a11);
			append_dev(a11, text11);
			append_dev(text11, t12);
			append_dev(svg, a12);
			append_dev(a12, text12);
			append_dev(text12, t13);
			append_dev(svg, a13);
			append_dev(a13, text13);
			append_dev(text13, t14);
			append_dev(svg, a14);
			append_dev(a14, text14);
			append_dev(text14, t15);
			append_dev(svg, t16);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(svg);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Tvsvg", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tvsvg> was created with unknown prop '${key}'`);
	});

	return [];
}

class Tvsvg extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tvsvg",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/tvshows.svelte generated by Svelte v3.30.0 */

function create_fragment$1(ctx) {
	let t0;
	let tvsvg;
	let t1;
	let controls;
	let current;
	tvsvg = new Tvsvg({ $$inline: true });
	controls = new Controls({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(tvsvg.$$.fragment);
			t1 = space();
			create_component(controls.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ymcrg4\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(tvsvg.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(controls.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "TV Shows";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(tvsvg, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(controls, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(tvsvg.$$.fragment, local);
			transition_in(controls.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tvsvg.$$.fragment, local);
			transition_out(controls.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(tvsvg, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(controls, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Tvshows", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tvshows> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ TVSVG: Tvsvg, Controls });
	return [];
}

class Tvshows extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tvshows",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Tvshows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzaG93cy41MzljNDE0OC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
