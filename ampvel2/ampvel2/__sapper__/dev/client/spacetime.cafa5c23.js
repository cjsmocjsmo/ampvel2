import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.44a3e033.js';
import { C as Controls } from './Controls.4f553e5e.js';

/* src/routes/spacetime.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/spacetime.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (49:4) {#if showlistcount > 0}
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
		source: "(49:4) {#if showlistcount > 0}",
		ctx
	});

	return block;
}

// (50:8) {#each showlist as sshow }
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
			attr_dev(a, "class", "svelte-s06rxp");
			add_location(a, file, 51, 16, 1614);
			attr_dev(li, "class", "svelte-s06rxp");
			add_location(li, file, 50, 12, 1593);
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
		source: "(50:8) {#each showlist as sshow }",
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
			t0 = text("PBS SpaceTime");
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
			t0 = claim_text(h1_nodes, "PBS SpaceTime");
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
			attr_dev(h1, "class", "svelte-s06rxp");
			add_location(h1, file, 40, 0, 1205);
			attr_dev(rect, "x", "0");
			attr_dev(rect, "y", "0");
			attr_dev(rect, "width", "100%");
			attr_dev(rect, "height", "30");
			set_style(rect, "fill", "rgb(0,0,255)");
			set_style(rect, "stroke-width", "1");
			set_style(rect, "stroke", "rgb(0,0,0)");
			add_location(rect, file, 43, 4, 1272);
			attr_dev(text_1, "x", "112");
			attr_dev(text_1, "y", "18");
			attr_dev(text_1, "font-size", ".7em");
			attr_dev(text_1, "fill", "white");
			add_location(text_1, file, 44, 4, 1409);
			attr_dev(svg, "viewBox", "0 0 273 35");
			add_location(svg, file, 42, 0, 1241);
			attr_dev(ul, "class", "svelte-s06rxp");
			add_location(ul, file, 47, 0, 1513);
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
					listen_dev(rect, "click", /*handleSpaceTime1*/ ctx[2], false, false, false),
					listen_dev(text_1, "click", /*handleSpaceTime1*/ ctx[2], false, false, false)
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
	validate_slots("Spacetime", slots, []);
	let showlist;
	let showlistcount;
	let visibleDis = false;

	async function getSpaceTime(x) {
		let addr = `http://192.168.0.42:8888/intSpaceTime?season=01`;

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			console.log(data[0].episode);
			$$invalidate(0, showlist = data);
			$$invalidate(1, showlistcount = data.length);
		}).catch(err => console.log(err));
	}

	let handleSpaceTime1 = () => {
		let promise = getSpaceTime().catch(err => console.log(err));
	};

	let handlePlayShow = media => {
		let promise = getPlayMedia(media).catch(err => console.log(err));
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Spacetime> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		showlist,
		showlistcount,
		visibleDis,
		getSpaceTime,
		handleSpaceTime1,
		getPlayMedia,
		handlePlayShow
	});

	$$self.$inject_state = $$props => {
		if ("showlist" in $$props) $$invalidate(0, showlist = $$props.showlist);
		if ("showlistcount" in $$props) $$invalidate(1, showlistcount = $$props.showlistcount);
		if ("visibleDis" in $$props) visibleDis = $$props.visibleDis;
		if ("handleSpaceTime1" in $$props) $$invalidate(2, handleSpaceTime1 = $$props.handleSpaceTime1);
		if ("handlePlayShow" in $$props) $$invalidate(3, handlePlayShow = $$props.handlePlayShow);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showlist, showlistcount, handleSpaceTime1, handlePlayShow];
}

class Spacetime extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Spacetime",
			options,
			id: create_fragment.name
		});
	}
}

export default Spacetime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2V0aW1lLmNhZmE1YzIzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NwYWNldGltZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cm9scy5zdmVsdGUnXG4gICAgbGV0IHNob3dsaXN0O1xuICAgIGxldCBzaG93bGlzdGNvdW50O1xuICAgIGxldCB2aXNpYmxlRGlzID0gZmFsc2VcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNwYWNlVGltZSh4KSB7XG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9pbnRTcGFjZVRpbWU/c2Vhc29uPTAxYFxuICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uZXBpc29kZSlcbiAgICAgICAgICAgIHNob3dsaXN0ID0gZGF0YVxuICAgICAgICAgICAgc2hvd2xpc3Rjb3VudCA9IGRhdGEubGVuZ3RoXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlU3BhY2VUaW1lMSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRTcGFjZVRpbWUoYDAxYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlNZWRpYSh4KSB7XG4gICAgICAgIGxldCB5ID0gXCIvbWVkaWEvcGkvUGlUQi9tZWRpYS9UVlNob3dzXCIgKyB4XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB5XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHkpXG4gICAgICAgIGxldCBhZGRyID0gYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9wbGF5TWVkaWFSZWFjdD9tb3ZpZT0ke3l9YFxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxuICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgICBsZXQgaGFuZGxlUGxheVNob3cgPSAobWVkaWEpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQbGF5TWVkaWEobWVkaWEpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG48L3NjcmlwdD5cblxuPGgxPlBCUyBTcGFjZVRpbWU8L2gxPlxuPENvbnRyb2xzIC8+XG48c3ZnIHZpZXdCb3g9XCIwIDAgMjczIDM1XCI+XG4gICAgPHJlY3Qgb246Y2xpY2s9e2hhbmRsZVNwYWNlVGltZTF9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZ2IoMCwwLDI1NSk7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDx0ZXh0IG9uOmNsaWNrPXtoYW5kbGVTcGFjZVRpbWUxfSB4PVwiMTEyXCIgeT1cIjE4XCIgZm9udC1zaXplPVwiLjdlbVwiIGZpbGw9XCJ3aGl0ZVwiPlNlYXNvbiAxPC90ZXh0PlxuPC9zdmc+IFxuXG48dWw+XG4gICAgeyNpZiBzaG93bGlzdGNvdW50ID4gMH1cbiAgICAgICAgeyNlYWNoIHNob3dsaXN0IGFzIHNzaG93IH1cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidHZzaG93c1wiIG9uOmNsaWNrPXtoYW5kbGVQbGF5U2hvdyhzc2hvdy50dmZzcGF0aCl9Pntzc2hvdy50aXRsZX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgey9pZn1cbjwvdWw+XG5cblxuPHN0eWxlPlxuXG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgXG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFpRGUsR0FBUTs7OztnQ0FBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQVE7Ozs7K0JBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRStELEdBQUssSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQUE1QyxHQUFjLGNBQUMsR0FBSyxJQUFDLFFBQVEsdUJBQTdCLEdBQWMsY0FBQyxHQUFLLElBQUMsUUFBUTs7Ozs7Ozs7Ozs7O29FQUFJLEdBQUssSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSC9FLEdBQWEsTUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0RBTE4sR0FBZ0I7c0RBQ2hCLEdBQWdCOzs7Ozs7O3lCQUkzQixHQUFhLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUExQlAsWUFBWSxDQUFDLENBQUM7S0FDckIsQ0FBQyxHQUFHLDhCQUE4QixHQUFHLENBQUM7Q0FDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO0NBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNULElBQUksb0RBQW9ELENBQUM7Q0FDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJOztDQUNoQixLQUFLLENBQUMsSUFBSSxJQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDdkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtFQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtJQUNqQixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7Ozs7O0tBOUIvQixRQUFRO0tBQ1IsYUFBYTtLQUNiLFVBQVUsR0FBRyxLQUFLOztnQkFFUCxZQUFZLENBQUMsQ0FBQztNQUNyQixJQUFJOztFQUNSLEtBQUssQ0FBQyxJQUFJLElBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO0dBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0dBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPO21CQUMzQixRQUFRLEdBQUcsSUFBSTttQkFDZixhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU07S0FDNUIsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztLQUcvQixnQkFBZ0I7TUFDWixPQUFPLEdBQUcsWUFBWSxHQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FnQjVELGNBQWMsR0FBSSxLQUFLO01BQ3BCLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
