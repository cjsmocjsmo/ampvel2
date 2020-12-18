import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.03656131.js';
import { C as Controls } from './Controls.de1a8cd0.js';

/* src/routes/picard.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/picard.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
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
		source: "(77:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (78:8) {#each showlist as sshow }
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
			attr_dev(a, "class", "svelte-ueno44");
			add_location(a, file, 79, 16, 2500);
			attr_dev(span, "class", "svelte-ueno44");
			add_location(span, file, 80, 16, 2594);
			attr_dev(li, "class", "svelte-ueno44");
			add_location(li, file, 78, 12, 2479);
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
			t0 = text("Picard");
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
			t0 = claim_text(h1_nodes, "Picard");
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
			add_location(h1, file, 66, 0, 1884);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "49%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 69, 4, 1944);
			attr_dev(rect1, "x", "135");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "49%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 70, 4, 2077);
			attr_dev(text0, "x", "48");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 71, 4, 2203);
			attr_dev(text1, "x", "177");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 72, 4, 2298);
			attr_dev(svg, "viewBox", "0 0 273 35");
			add_location(svg, file, 68, 0, 1913);
			attr_dev(ul, "class", "svelte-ueno44");
			add_location(ul, file, 75, 0, 2399);
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
					listen_dev(rect0, "click", /*handlePicard1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handlePicard2*/ ctx[3], false, false, false),
					listen_dev(text0, "click", /*handlePicard1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handlePicard2*/ ctx[3], false, false, false)
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
	validate_slots("Picard", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	// onMount(
	async function getPicard(x) {
		let addr = `http://192.168.0.42:8888/intPicard?season=01`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	//)
	let handlePicard1 = () => {
		let promise = getPicard().catch(err => console.log(err));
	};

	let handlePicard2 = () => {
		let promise = getPicard().catch(err => console.log(err));
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Picard> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getPicard,
		handlePicard1,
		handlePicard2,
		fuckDis,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handlePicard1" in $$props) $$invalidate(2, handlePicard1 = $$props.handlePicard1);
		if ("handlePicard2" in $$props) $$invalidate(3, handlePicard2 = $$props.handlePicard2);
		if ("fuckDis" in $$props) fuckDis = $$props.fuckDis;
		if ("handlePlayShow" in $$props) $$invalidate(4, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showlist, showlistcount, handlePicard1, handlePicard2, handlePlayShow];
}

class Picard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Picard",
			options,
			id: create_fragment.name
		});
	}
}

export default Picard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljYXJkLmQxYjQ0YmYzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3BpY2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cm9scy5zdmVsdGUnXG4gICAgbGV0IHNob3dsaXN0O1xuICAgIGxldCBzaG93bGlzdGNvdW50O1xuICAgIGxldCB2aXNpYmxlRGlzID0gZmFsc2VcblxuICAgIC8vIG9uTW91bnQoXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBpY2FyZCh4KSB7XG4gICAgICAgICAgICBsZXQgYWRkciA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50UGljYXJkP3NlYXNvbj0wMWBcbiAgICAgICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uZXBpc29kZSlcbiAgICAgICAgICAgICAgICBzaG93bGlzdCA9IGRhdGFcbiAgICAgICAgICAgICAgICBzaG93bGlzdGNvdW50ID0gZGF0YS5sZW5ndGhcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfVxuICAgIC8vKVxuXG4gICAgbGV0IGhhbmRsZVBpY2FyZDEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0UGljYXJkKGAwMWApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlUGljYXJkMiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQaWNhcmQoYDAyYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBmdWNrRGlzID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZURpcykge1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXNpYmxlRGlzID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheU1lZGlhKHgpIHtcbiAgICAgICAgbGV0IHkgPSBcIi9tZWRpYS9waS9QaVRCL21lZGlhL1RWU2hvd3NcIiArIHhcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHlcIilcbiAgICAgICAgY29uc29sZS5sb2coeSlcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L3BsYXlNZWRpYVJlYWN0P21vdmllPSR7eX1gXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXG4gICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgIGxldCBoYW5kbGVQbGF5U2hvdyA9IChtZWRpYSkgPT4ge1xuICAgICAgICAvLyBpZiAoTFApIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1lZGlhKVxuXG4gICAgICAgIC8vICAgICBsZXQgZm9vID0gbWVkaWEuc3BsaXQoXCJUVlNob3dzXCIsIDIpXG4gICAgICAgIC8vICAgICBsZXQgbmV3cGF0aCA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjgwNjNgICsgXCIvXCIgKyBtZWRpYVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3cGF0aClcbiAgICAgICAgLy8gICAgIFRWbG9jYWxwbGF5VVJMLnNldChuZXdwYXRoKVxuICAgICAgICAvLyAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFBsYXlNZWRpYShtZWRpYSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgdmlzaWJsZURpcyA9IGZhbHNlXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxoMT5QaWNhcmQ8L2gxPlxuPENvbnRyb2xzIC8+XG48c3ZnIHZpZXdCb3g9XCIwIDAgMjczIDM1XCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVBpY2FyZDF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjQ5JVwiIGhlaWdodD1cIjMwXCIgc3R5bGU9XCJmaWxsOnJnYigwLDAsMjU1KTtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVBpY2FyZDJ9IHg9XCIxMzVcIiB5PVwiMFwiIHdpZHRoPVwiNDklXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmVkO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlUGljYXJkMX0geD1cIjQ4XCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVQaWNhcmQyfSB4PVwiMTc3XCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAyPC90ZXh0PlxuPC9zdmc+IFxuXG48dWw+XG4gICAgeyNpZiBzaG93bGlzdGNvdW50ID4gMH1cbiAgICAgICAgeyNlYWNoIHNob3dsaXN0IGFzIHNzaG93IH1cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidHZzaG93c1wiIG9uOmNsaWNrPXtoYW5kbGVQbGF5U2hvdyhzc2hvdy50dmZzcGF0aCl9Pntzc2hvdy50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3NzaG93LmVwaXNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgey9lYWNofVxuICAgIHsvaWZ9XG48L3VsPlxuPHN0eWxlPlxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIFxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC8qIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOjQ3JTtcbiAgICAgICAgcGFkZGluZzo3cHg7XG4gICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDYyLCAxNTMpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gKi9cbiAgICAvKiAuYm9vIHtcbiAgICAgICAgd2lkdGg6MzElO1xuICAgICAgICBtYXJnaW46MnB4O1xuICAgIH0gKi9cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQTZFZSxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
