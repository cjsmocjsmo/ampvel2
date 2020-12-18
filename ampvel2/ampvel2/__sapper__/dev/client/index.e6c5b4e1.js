import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as svg_element, t as text, c as claim_element, b as children, e as claim_text, f as detach_dev, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, n as noop, l as space, m as create_component, q as query_selector_all, o as claim_space, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.e7756e59.js';
import { C as Controls } from './Controls.ccbc4af1.js';

/* src/components/movsvg.svelte generated by Svelte v3.30.0 */

const file = "src/components/movsvg.svelte";

function create_fragment(ctx) {
	let svg;
	let a0;
	let text0;
	let t0;
	let a1;
	let text1;
	let t1;
	let a2;
	let text2;
	let t2;
	let a3;
	let text3;
	let t3;
	let a4;
	let text4;
	let t4;
	let a5;
	let text5;
	let t5;
	let a6;
	let text6;
	let t6;
	let a7;
	let text7;
	let t7;
	let a8;
	let text8;
	let t8;
	let a9;
	let text9;
	let t9;
	let a10;
	let text10;
	let t10;
	let a11;
	let text11;
	let t11;
	let a12;
	let text12;
	let t12;
	let a13;
	let text13;
	let t13;
	let a14;
	let text14;
	let t14;
	let a15;
	let text15;
	let t15;
	let a16;
	let text16;
	let t16;
	let a17;
	let text17;
	let t17;
	let a18;
	let text18;
	let t18;
	let a19;
	let text19;
	let t19;
	let a20;
	let text20;
	let t20;
	let a21;
	let text21;
	let t21;
	let a22;
	let text22;
	let t22;
	let a23;
	let text23;
	let t23;
	let a24;
	let text24;
	let t24;
	let a25;
	let text25;
	let t25;
	let t26;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			a0 = svg_element("a");
			text0 = svg_element("text");
			t0 = text("Action");
			a1 = svg_element("a");
			text1 = svg_element("text");
			t1 = text("Jurassic Park");
			a2 = svg_element("a");
			text2 = svg_element("text");
			t2 = text("Fantasy");
			a3 = svg_element("a");
			text3 = svg_element("text");
			t3 = text("Cartoons");
			a4 = svg_element("a");
			text4 = svg_element("text");
			t4 = text("Indiana Jones");
			a5 = svg_element("a");
			text5 = svg_element("text");
			t5 = text("Comedy");
			a6 = svg_element("a");
			text6 = svg_element("text");
			t6 = text("Godzilla");
			a7 = svg_element("a");
			text7 = svg_element("text");
			t7 = text("Harry Potter");
			a8 = svg_element("a");
			text8 = svg_element("text");
			t8 = text("Drama");
			a9 = svg_element("a");
			text9 = svg_element("text");
			t9 = text("John Wick");
			a10 = svg_element("a");
			text10 = svg_element("text");
			t10 = text("Kings Men");
			a11 = svg_element("a");
			text11 = svg_element("text");
			t11 = text("John Wayne");
			a12 = svg_element("a");
			text12 = svg_element("text");
			t12 = text("Pirates");
			a13 = svg_element("a");
			text13 = svg_element("text");
			t13 = text("Star Trek");
			a14 = svg_element("a");
			text14 = svg_element("text");
			t14 = text("Star Wars");
			a15 = svg_element("a");
			text15 = svg_element("text");
			t15 = text("Men In Black");
			a16 = svg_element("a");
			text16 = svg_element("text");
			t16 = text("Super Heros");
			a17 = svg_element("a");
			text17 = svg_element("text");
			t17 = text("Bruce Willis");
			a18 = svg_element("a");
			text18 = svg_element("text");
			t18 = text("Tom Cruize");
			a19 = svg_element("a");
			text19 = svg_element("text");
			t19 = text("SciFi");
			a20 = svg_element("a");
			text20 = svg_element("text");
			t20 = text("Riddick");
			a21 = svg_element("a");
			text21 = svg_element("text");
			t21 = text("Misc");
			a22 = svg_element("a");
			text22 = svg_element("text");
			t22 = text("X-Men");
			a23 = svg_element("a");
			text23 = svg_element("text");
			t23 = text("Documentary");
			a24 = svg_element("a");
			text24 = svg_element("text");
			t24 = text("Tremors");
			a25 = svg_element("a");
			text25 = svg_element("text");
			t25 = text("The Rock");
			t26 = text("\n\tSorry, your browser does not support inline SVG.");
			this.h();
		},
		l: function claim(nodes) {
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
			t0 = claim_text(text0_nodes, "Action");
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
			t1 = claim_text(text1_nodes, "Jurassic Park");
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
			t2 = claim_text(text2_nodes, "Fantasy");
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
			t3 = claim_text(text3_nodes, "Cartoons");
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
			t4 = claim_text(text4_nodes, "Indiana Jones");
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
			t5 = claim_text(text5_nodes, "Comedy");
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
			t6 = claim_text(text6_nodes, "Godzilla");
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
			t7 = claim_text(text7_nodes, "Harry Potter");
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
			t8 = claim_text(text8_nodes, "Drama");
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
			t9 = claim_text(text9_nodes, "John Wick");
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
			t10 = claim_text(text10_nodes, "Kings Men");
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
			t11 = claim_text(text11_nodes, "John Wayne");
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
			t12 = claim_text(text12_nodes, "Pirates");
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
			t13 = claim_text(text13_nodes, "Star Trek");
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
			t14 = claim_text(text14_nodes, "Star Wars");
			text14_nodes.forEach(detach_dev);
			a14_nodes.forEach(detach_dev);
			a15 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a15_nodes = children(a15);

			text15 = claim_element(
				a15_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text15_nodes = children(text15);
			t15 = claim_text(text15_nodes, "Men In Black");
			text15_nodes.forEach(detach_dev);
			a15_nodes.forEach(detach_dev);
			a16 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a16_nodes = children(a16);

			text16 = claim_element(
				a16_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text16_nodes = children(text16);
			t16 = claim_text(text16_nodes, "Super Heros");
			text16_nodes.forEach(detach_dev);
			a16_nodes.forEach(detach_dev);
			a17 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a17_nodes = children(a17);

			text17 = claim_element(
				a17_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text17_nodes = children(text17);
			t17 = claim_text(text17_nodes, "Bruce Willis");
			text17_nodes.forEach(detach_dev);
			a17_nodes.forEach(detach_dev);
			a18 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a18_nodes = children(a18);

			text18 = claim_element(
				a18_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text18_nodes = children(text18);
			t18 = claim_text(text18_nodes, "Tom Cruize");
			text18_nodes.forEach(detach_dev);
			a18_nodes.forEach(detach_dev);
			a19 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a19_nodes = children(a19);

			text19 = claim_element(
				a19_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text19_nodes = children(text19);
			t19 = claim_text(text19_nodes, "SciFi");
			text19_nodes.forEach(detach_dev);
			a19_nodes.forEach(detach_dev);
			a20 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a20_nodes = children(a20);

			text20 = claim_element(
				a20_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text20_nodes = children(text20);
			t20 = claim_text(text20_nodes, "Riddick");
			text20_nodes.forEach(detach_dev);
			a20_nodes.forEach(detach_dev);
			a21 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a21_nodes = children(a21);

			text21 = claim_element(
				a21_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text21_nodes = children(text21);
			t21 = claim_text(text21_nodes, "Misc");
			text21_nodes.forEach(detach_dev);
			a21_nodes.forEach(detach_dev);
			a22 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a22_nodes = children(a22);

			text22 = claim_element(
				a22_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text22_nodes = children(text22);
			t22 = claim_text(text22_nodes, "X-Men");
			text22_nodes.forEach(detach_dev);
			a22_nodes.forEach(detach_dev);
			a23 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a23_nodes = children(a23);

			text23 = claim_element(
				a23_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text23_nodes = children(text23);
			t23 = claim_text(text23_nodes, "Documentary");
			text23_nodes.forEach(detach_dev);
			a23_nodes.forEach(detach_dev);
			a24 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a24_nodes = children(a24);

			text24 = claim_element(
				a24_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text24_nodes = children(text24);
			t24 = claim_text(text24_nodes, "Tremors");
			text24_nodes.forEach(detach_dev);
			a24_nodes.forEach(detach_dev);
			a25 = claim_element(svg_nodes, "a", { href: true }, 1);
			var a25_nodes = children(a25);

			text25 = claim_element(
				a25_nodes,
				"text",
				{
					x: true,
					y: true,
					"font-size": true,
					fill: true
				},
				1
			);

			var text25_nodes = children(text25);
			t25 = claim_text(text25_nodes, "The Rock");
			text25_nodes.forEach(detach_dev);
			a25_nodes.forEach(detach_dev);
			t26 = claim_text(svg_nodes, "\n\tSorry, your browser does not support inline SVG.");
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(text0, "x", "0");
			attr_dev(text0, "y", "7");
			attr_dev(text0, "font-size", "1em");
			attr_dev(text0, "fill", "grey");
			add_location(text0, file, 6, 18, 70);
			attr_dev(a0, "href", "action");
			add_location(a0, file, 6, 1, 53);
			attr_dev(text1, "x", "100");
			attr_dev(text1, "y", "7");
			attr_dev(text1, "font-size", "1em");
			attr_dev(text1, "fill", "grey");
			add_location(text1, file, 7, 24, 159);
			attr_dev(a1, "href", "jurassicpark");
			add_location(a1, file, 7, 1, 136);
			attr_dev(text2, "x", "244");
			attr_dev(text2, "y", "7");
			attr_dev(text2, "font-size", "1em");
			attr_dev(text2, "fill", "grey");
			add_location(text2, file, 8, 19, 251);
			attr_dev(a2, "href", "fantasy");
			add_location(a2, file, 8, 1, 233);
			attr_dev(text3, "x", "0");
			attr_dev(text3, "y", "27");
			attr_dev(text3, "font-size", "1em");
			attr_dev(text3, "fill", "grey");
			add_location(text3, file, 10, 20, 339);
			attr_dev(a3, "href", "cartoons");
			add_location(a3, file, 10, 1, 320);
			attr_dev(text4, "x", "100");
			attr_dev(text4, "y", "27");
			attr_dev(text4, "font-size", "1em");
			attr_dev(text4, "fill", "grey");
			add_location(text4, file, 11, 24, 431);
			attr_dev(a4, "href", "indianajones");
			add_location(a4, file, 11, 1, 408);
			attr_dev(text5, "x", "241");
			attr_dev(text5, "y", "27");
			attr_dev(text5, "font-size", "1em");
			attr_dev(text5, "fill", "grey");
			add_location(text5, file, 12, 18, 523);
			attr_dev(a5, "href", "comedy");
			add_location(a5, file, 12, 1, 506);
			attr_dev(text6, "x", "0");
			attr_dev(text6, "y", "46");
			attr_dev(text6, "font-size", "1em");
			attr_dev(text6, "fill", "grey");
			add_location(text6, file, 14, 20, 611);
			attr_dev(a6, "href", "godzilla");
			add_location(a6, file, 14, 1, 592);
			attr_dev(text7, "x", "100");
			attr_dev(text7, "y", "46");
			attr_dev(text7, "font-size", "1em");
			attr_dev(text7, "fill", "grey");
			add_location(text7, file, 15, 23, 701);
			attr_dev(a7, "href", "harrypotter");
			add_location(a7, file, 15, 1, 679);
			attr_dev(text8, "x", "252");
			attr_dev(text8, "y", "46");
			attr_dev(text8, "font-size", "1em");
			attr_dev(text8, "fill", "grey");
			add_location(text8, file, 16, 17, 791);
			attr_dev(a8, "href", "drama");
			add_location(a8, file, 16, 1, 775);
			attr_dev(text9, "x", "0");
			attr_dev(text9, "y", "64");
			attr_dev(text9, "font-size", "1em");
			attr_dev(text9, "fill", "grey");
			add_location(text9, file, 18, 20, 878);
			attr_dev(a9, "href", "johnwick");
			add_location(a9, file, 18, 1, 859);
			attr_dev(text10, "x", "100");
			attr_dev(text10, "y", "64");
			attr_dev(text10, "font-size", "1em");
			attr_dev(text10, "fill", "grey");
			add_location(text10, file, 19, 20, 966);
			attr_dev(a10, "href", "kingsmen");
			add_location(a10, file, 19, 1, 947);
			attr_dev(text11, "x", "212");
			attr_dev(text11, "y", "64");
			attr_dev(text11, "font-size", "1em");
			attr_dev(text11, "fill", "grey");
			add_location(text11, file, 20, 21, 1057);
			attr_dev(a11, "href", "johnwayne");
			add_location(a11, file, 20, 1, 1037);
			attr_dev(text12, "x", "0");
			attr_dev(text12, "y", "82");
			attr_dev(text12, "font-size", "1em");
			attr_dev(text12, "fill", "grey");
			add_location(text12, file, 22, 19, 1148);
			attr_dev(a12, "href", "pirates");
			add_location(a12, file, 22, 1, 1130);
			attr_dev(text13, "x", "100");
			attr_dev(text13, "y", "82");
			attr_dev(text13, "font-size", "1em");
			attr_dev(text13, "fill", "grey");
			add_location(text13, file, 23, 20, 1234);
			attr_dev(a13, "href", "startrek");
			add_location(a13, file, 23, 1, 1215);
			attr_dev(text14, "x", "230");
			attr_dev(text14, "y", "82");
			attr_dev(text14, "font-size", "1em");
			attr_dev(text14, "fill", "grey");
			add_location(text14, file, 24, 20, 1324);
			attr_dev(a14, "href", "starwars");
			add_location(a14, file, 24, 1, 1305);
			attr_dev(text15, "x", "0");
			attr_dev(text15, "y", "99");
			attr_dev(text15, "font-size", "1em");
			attr_dev(text15, "fill", "grey");
			add_location(text15, file, 26, 22, 1418);
			attr_dev(a15, "href", "meninblack");
			add_location(a15, file, 26, 1, 1397);
			attr_dev(text16, "x", "100");
			attr_dev(text16, "y", "99");
			attr_dev(text16, "font-size", "1em");
			attr_dev(text16, "fill", "grey");
			add_location(text16, file, 27, 22, 1511);
			attr_dev(a16, "href", "superheros");
			add_location(a16, file, 27, 1, 1490);
			attr_dev(text17, "x", "214");
			attr_dev(text17, "y", "99");
			attr_dev(text17, "font-size", "1em");
			attr_dev(text17, "fill", "grey");
			add_location(text17, file, 28, 23, 1606);
			attr_dev(a17, "href", "brucewillis");
			add_location(a17, file, 28, 1, 1584);
			attr_dev(text18, "x", "0");
			attr_dev(text18, "y", "119");
			attr_dev(text18, "font-size", "1em");
			attr_dev(text18, "fill", "grey");
			add_location(text18, file, 30, 21, 1702);
			attr_dev(a18, "href", "tomcruize");
			add_location(a18, file, 30, 1, 1682);
			attr_dev(text19, "x", "100");
			attr_dev(text19, "y", "119");
			attr_dev(text19, "font-size", "1em");
			attr_dev(text19, "fill", "grey");
			add_location(text19, file, 31, 17, 1789);
			attr_dev(a19, "href", "scifi");
			add_location(a19, file, 31, 1, 1773);
			attr_dev(text20, "x", "245");
			attr_dev(text20, "y", "119");
			attr_dev(text20, "font-size", "1em");
			attr_dev(text20, "fill", "grey");
			add_location(text20, file, 32, 19, 1875);
			attr_dev(a20, "href", "riddick");
			add_location(a20, file, 32, 1, 1857);
			attr_dev(text21, "x", "0");
			attr_dev(text21, "y", "139");
			attr_dev(text21, "font-size", "1em");
			attr_dev(text21, "fill", "grey");
			add_location(text21, file, 34, 16, 1961);
			attr_dev(a21, "href", "misc");
			add_location(a21, file, 34, 1, 1946);
			attr_dev(text22, "x", "100");
			attr_dev(text22, "y", "139");
			attr_dev(text22, "font-size", "1em");
			attr_dev(text22, "fill", "grey");
			add_location(text22, file, 35, 16, 2041);
			attr_dev(a22, "href", "xmen");
			add_location(a22, file, 35, 1, 2026);
			attr_dev(text23, "x", "199");
			attr_dev(text23, "y", "139");
			attr_dev(text23, "font-size", "1em");
			attr_dev(text23, "fill", "grey");
			add_location(text23, file, 36, 23, 2131);
			attr_dev(a23, "href", "documentary");
			add_location(a23, file, 36, 1, 2109);
			attr_dev(text24, "x", "0");
			attr_dev(text24, "y", "159");
			attr_dev(text24, "font-size", "1em");
			attr_dev(text24, "fill", "grey");
			add_location(text24, file, 38, 19, 2224);
			attr_dev(a24, "href", "tremors");
			add_location(a24, file, 38, 1, 2206);
			attr_dev(text25, "x", "100");
			attr_dev(text25, "y", "159");
			attr_dev(text25, "font-size", "1em");
			attr_dev(text25, "fill", "grey");
			add_location(text25, file, 39, 19, 2310);
			attr_dev(a25, "href", "therock");
			add_location(a25, file, 39, 1, 2292);
			attr_dev(svg, "viewBox", "0 -5 300 170");
			add_location(svg, file, 5, 0, 22);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, a0);
			append_dev(a0, text0);
			append_dev(text0, t0);
			append_dev(svg, a1);
			append_dev(a1, text1);
			append_dev(text1, t1);
			append_dev(svg, a2);
			append_dev(a2, text2);
			append_dev(text2, t2);
			append_dev(svg, a3);
			append_dev(a3, text3);
			append_dev(text3, t3);
			append_dev(svg, a4);
			append_dev(a4, text4);
			append_dev(text4, t4);
			append_dev(svg, a5);
			append_dev(a5, text5);
			append_dev(text5, t5);
			append_dev(svg, a6);
			append_dev(a6, text6);
			append_dev(text6, t6);
			append_dev(svg, a7);
			append_dev(a7, text7);
			append_dev(text7, t7);
			append_dev(svg, a8);
			append_dev(a8, text8);
			append_dev(text8, t8);
			append_dev(svg, a9);
			append_dev(a9, text9);
			append_dev(text9, t9);
			append_dev(svg, a10);
			append_dev(a10, text10);
			append_dev(text10, t10);
			append_dev(svg, a11);
			append_dev(a11, text11);
			append_dev(text11, t11);
			append_dev(svg, a12);
			append_dev(a12, text12);
			append_dev(text12, t12);
			append_dev(svg, a13);
			append_dev(a13, text13);
			append_dev(text13, t13);
			append_dev(svg, a14);
			append_dev(a14, text14);
			append_dev(text14, t14);
			append_dev(svg, a15);
			append_dev(a15, text15);
			append_dev(text15, t15);
			append_dev(svg, a16);
			append_dev(a16, text16);
			append_dev(text16, t16);
			append_dev(svg, a17);
			append_dev(a17, text17);
			append_dev(text17, t17);
			append_dev(svg, a18);
			append_dev(a18, text18);
			append_dev(text18, t18);
			append_dev(svg, a19);
			append_dev(a19, text19);
			append_dev(text19, t19);
			append_dev(svg, a20);
			append_dev(a20, text20);
			append_dev(text20, t20);
			append_dev(svg, a21);
			append_dev(a21, text21);
			append_dev(text21, t21);
			append_dev(svg, a22);
			append_dev(a22, text22);
			append_dev(text22, t22);
			append_dev(svg, a23);
			append_dev(a23, text23);
			append_dev(text23, t23);
			append_dev(svg, a24);
			append_dev(a24, text24);
			append_dev(text24, t24);
			append_dev(svg, a25);
			append_dev(a25, text25);
			append_dev(text25, t25);
			append_dev(svg, t26);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
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
	validate_slots("Movsvg", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Movsvg> was created with unknown prop '${key}'`);
	});

	return [];
}

class Movsvg extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Movsvg",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.30.0 */

function create_fragment$1(ctx) {
	let t0;
	let movsvg;
	let t1;
	let controls;
	let current;
	movsvg = new Movsvg({ $$inline: true });
	controls = new Controls({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(movsvg.$$.fragment);
			t1 = space();
			create_component(controls.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ut9aeh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(movsvg.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(controls.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Movies";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(movsvg, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(controls, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(movsvg.$$.fragment, local);
			transition_in(controls.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(movsvg.$$.fragment, local);
			transition_out(controls.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(movsvg, detaching);
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
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ MOVSVG: Movsvg, Controls });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTZjNWI0ZTEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
