import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as globals, C as validate_each_argument, D as empty, j as insert_dev, E as destroy_each, f as detach_dev, F as element, t as text, l as space, c as claim_element, b as children, e as claim_text, o as claim_space, g as attr_dev, h as add_location, k as append_dev, A as listen_dev, I as is_function, G as set_data_dev, m as create_component, a as svg_element, p as claim_component, H as set_style, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as run_all } from './client.ba1b2344.js';
import { C as Controls } from './Controls.97557875.js';

/* src/routes/lostinspace.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/lostinspace.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (75:4) {#if LISshowlistcount > 0}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*LISshowlist*/ ctx[0];
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
			if (dirty & /*LISshowlist, handlePlayShowLIS*/ 33) {
				each_value = /*LISshowlist*/ ctx[0];
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
		source: "(75:4) {#if LISshowlistcount > 0}",
		ctx
	});

	return block;
}

// (76:8) {#each LISshowlist as sshow }
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
			attr_dev(a, "class", "svelte-1try2ru");
			add_location(a, file, 77, 16, 2698);
			attr_dev(span, "class", "svelte-1try2ru");
			add_location(span, file, 78, 16, 2795);
			attr_dev(li, "class", "svelte-1try2ru");
			add_location(li, file, 76, 12, 2677);
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
						if (is_function(/*handlePlayShowLIS*/ ctx[5](/*sshow*/ ctx[8].tvfspath))) /*handlePlayShowLIS*/ ctx[5](/*sshow*/ ctx[8].tvfspath).apply(this, arguments);
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
			if (dirty & /*LISshowlist*/ 1 && t0_value !== (t0_value = /*sshow*/ ctx[8].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*LISshowlist*/ 1 && t2_value !== (t2_value = /*sshow*/ ctx[8].episode + "")) set_data_dev(t2, t2_value);
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
		source: "(76:8) {#each LISshowlist as sshow }",
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
	let if_block = /*LISshowlistcount*/ ctx[1] > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Lost In Space");
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
			t0 = claim_text(h1_nodes, "Lost In Space");
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
			add_location(h1, file, 62, 0, 1864);
			attr_dev(rect0, "x", "0");
			attr_dev(rect0, "y", "0");
			attr_dev(rect0, "width", "32%");
			attr_dev(rect0, "height", "30");
			set_style(rect0, "fill", "rgb(0,0,255)");
			set_style(rect0, "stroke-width", "1");
			set_style(rect0, "stroke", "rgb(0,0,0)");
			add_location(rect0, file, 65, 4, 1931);
			attr_dev(rect1, "x", "97");
			attr_dev(rect1, "y", "0");
			attr_dev(rect1, "width", "32%");
			attr_dev(rect1, "height", "30");
			set_style(rect1, "fill", "red");
			set_style(rect1, "stroke-width", "1");
			set_style(rect1, "stroke", "rgb(0,0,0)");
			add_location(rect1, file, 66, 4, 2061);
			attr_dev(rect2, "x", "195");
			attr_dev(rect2, "y", "0");
			attr_dev(rect2, "width", "32%");
			attr_dev(rect2, "height", "30");
			set_style(rect2, "fill", "green");
			set_style(rect2, "stroke-width", "1");
			set_style(rect2, "stroke", "rgb(0,0,0)");
			add_location(rect2, file, 67, 4, 2183);
			attr_dev(text0, "x", "23");
			attr_dev(text0, "y", "18");
			attr_dev(text0, "font-size", ".7em");
			attr_dev(text0, "fill", "white");
			add_location(text0, file, 68, 4, 2308);
			attr_dev(text1, "x", "120");
			attr_dev(text1, "y", "18");
			attr_dev(text1, "font-size", ".7em");
			attr_dev(text1, "fill", "white");
			add_location(text1, file, 69, 4, 2400);
			attr_dev(text2, "x", "210");
			attr_dev(text2, "y", "18");
			attr_dev(text2, "font-size", ".7em");
			attr_dev(text2, "fill", "white");
			add_location(text2, file, 70, 4, 2493);
			attr_dev(svg, "viewBox", "0 0 273 36");
			add_location(svg, file, 64, 0, 1900);
			attr_dev(ul, "class", "svelte-1try2ru");
			add_location(ul, file, 73, 0, 2591);
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
					listen_dev(rect0, "click", /*handleLIS1*/ ctx[2], false, false, false),
					listen_dev(rect1, "click", /*handleLIS2*/ ctx[3], false, false, false),
					listen_dev(rect2, "click", /*handleLIS3*/ ctx[4], false, false, false),
					listen_dev(text0, "click", /*handleLIS1*/ ctx[2], false, false, false),
					listen_dev(text1, "click", /*handleLIS2*/ ctx[3], false, false, false),
					listen_dev(text2, "click", /*handleLIS3*/ ctx[4], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*LISshowlistcount*/ ctx[1] > 0) {
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
	let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`;

	fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Lostinspace", slots, []);
	let LISshowlist;
	let LISshowlistcount;
	let visibleLIS = false;

	async function getLostInSpace(x) {
		let addr = `http://192.168.0.42:8888/intLostInSpace?season=${x}`;
		console.log(addr);

		fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			$$invalidate(0, LISshowlist = data);
			$$invalidate(1, LISshowlistcount = data.length);
		}).catch(err => console.log(err));
	}

	let handleLIS1 = () => {
		let promise = getLostInSpace(`01`).catch(err => console.log(err));
	};

	let handleLIS2 = () => {
		let promise = getLostInSpace(`02`).catch(err => console.log(err));
	};

	let handleLIS3 = () => {
		let promise = getLostInSpace(`03`).catch(err => console.log(err));
	};

	let handlePlayShowLIS = media => {
		// if (LP) {
		//     console.log(media)
		//     let foo = media.split("TVShows", 2)
		//     let newpath = `http://192.168.0.42:8063` + media
		//     console.log(newpath)
		//     TVlocalplayURL.set(newpath)
		//     visibleLIS = false
		// } else {
		let promise = getPlayMedia(media).catch(err => console.log(err));

		visibleLIS = false;
	}; // }

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Lostinspace> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		LISshowlist,
		LISshowlistcount,
		visibleLIS,
		getLostInSpace,
		handleLIS1,
		handleLIS2,
		handleLIS3,
		getPlayMedia,
		handlePlayShowLIS
	});

	$$self.$inject_state = $$props => {
		if ("LISshowlist" in $$props) $$invalidate(0, LISshowlist = $$props.LISshowlist);
		if ("LISshowlistcount" in $$props) $$invalidate(1, LISshowlistcount = $$props.LISshowlistcount);
		if ("visibleLIS" in $$props) visibleLIS = $$props.visibleLIS;
		if ("handleLIS1" in $$props) $$invalidate(2, handleLIS1 = $$props.handleLIS1);
		if ("handleLIS2" in $$props) $$invalidate(3, handleLIS2 = $$props.handleLIS2);
		if ("handleLIS3" in $$props) $$invalidate(4, handleLIS3 = $$props.handleLIS3);
		if ("handlePlayShowLIS" in $$props) $$invalidate(5, handlePlayShowLIS = $$props.handlePlayShowLIS);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		LISshowlist,
		LISshowlistcount,
		handleLIS1,
		handleLIS2,
		handleLIS3,
		handlePlayShowLIS
	];
}

class Lostinspace extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Lostinspace",
			options,
			id: create_fragment.name
		});
	}
}

export default Lostinspace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9zdGluc3BhY2UuMzZmZTE4ODkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9zdGluc3BhY2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJvbHMuc3ZlbHRlJ1xuICAgIGxldCBMSVNzaG93bGlzdDtcbiAgICBsZXQgTElTc2hvd2xpc3Rjb3VudDtcbiAgICBsZXQgdmlzaWJsZUxJUyA9IGZhbHNlXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExvc3RJblNwYWNlKHgpIHtcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L2ludExvc3RJblNwYWNlP3NlYXNvbj0ke3h9YFxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxuICAgICAgICBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIExJU3Nob3dsaXN0ID0gZGF0YVxuICAgICAgICAgICAgTElTc2hvd2xpc3Rjb3VudCA9IGRhdGEubGVuZ3RoXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gICAgbGV0IGhhbmRsZUxJUzEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TG9zdEluU3BhY2UoYDAxYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgICBsZXQgaGFuZGxlTElTMiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRMb3N0SW5TcGFjZShgMDJgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZUxJUzMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TG9zdEluU3BhY2UoYDAzYCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIC8vIGxldCBmdWNrTElTID0gKCkgPT4ge1xuICAgIC8vICAgICBpZiAodmlzaWJsZUxJUykge1xuICAgIC8vICAgICAgICAgdmlzaWJsZUxJUyA9IGZhbHNlXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB2aXNpYmxlTElTID0gdHJ1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheU1lZGlhKHgpIHtcbiAgICAgICAgbGV0IHkgPSBcIi9tZWRpYS9waS9QaVRCL21lZGlhL1RWU2hvd3NcIiArIHhcbiAgICAgICAgbGV0IGFkZHIgPSBgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L3BsYXlNZWRpYVJlYWN0P21vdmllPSR7eX1gXG4gICAgICAgIGZldGNoKGFkZHIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVBsYXlTaG93TElTID0gKG1lZGlhKSA9PiB7XG4gICAgICAgIC8vIGlmIChMUCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWVkaWEpXG4gICAgICAgIC8vICAgICBsZXQgZm9vID0gbWVkaWEuc3BsaXQoXCJUVlNob3dzXCIsIDIpXG4gICAgICAgIC8vICAgICBsZXQgbmV3cGF0aCA9IGBodHRwOi8vMTkyLjE2OC4wLjQyOjgwNjNgICsgbWVkaWFcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5ld3BhdGgpXG4gICAgICAgIC8vICAgICBUVmxvY2FscGxheVVSTC5zZXQobmV3cGF0aClcbiAgICAgICAgLy8gICAgIHZpc2libGVMSVMgPSBmYWxzZVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQbGF5TWVkaWEobWVkaWEpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIHZpc2libGVMSVMgPSBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxoMT5Mb3N0IEluIFNwYWNlPC9oMT5cbjxDb250cm9scyAvPlxuPHN2ZyB2aWV3Qm94PVwiMCAwIDI3MyAzNlwiPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVMSVMxfSB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpyZ2IoMCwwLDI1NSk7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlOnJnYigwLDAsMClcIiAvPlxuICAgIDxyZWN0IG9uOmNsaWNrPXtoYW5kbGVMSVMyfSB4PVwiOTdcIiB5PVwiMFwiIHdpZHRoPVwiMzIlXCIgaGVpZ2h0PVwiMzBcIiBzdHlsZT1cImZpbGw6cmVkO3N0cm9rZS13aWR0aDoxO3N0cm9rZTpyZ2IoMCwwLDApXCIgLz5cbiAgICA8cmVjdCBvbjpjbGljaz17aGFuZGxlTElTM30geD1cIjE5NVwiIHk9XCIwXCIgd2lkdGg9XCIzMiVcIiBoZWlnaHQ9XCIzMFwiIHN0eWxlPVwiZmlsbDpncmVlbjtzdHJva2Utd2lkdGg6MTtzdHJva2U6cmdiKDAsMCwwKVwiIC8+XG4gICAgPHRleHQgb246Y2xpY2s9e2hhbmRsZUxJUzF9IHg9XCIyM1wiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMTwvdGV4dD5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlTElTMn0geD1cIjEyMFwiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMjwvdGV4dD5cbiAgICA8dGV4dCBvbjpjbGljaz17aGFuZGxlTElTM30geD1cIjIxMFwiIHk9XCIxOFwiIGZvbnQtc2l6ZT1cIi43ZW1cIiBmaWxsPVwid2hpdGVcIj5TZWFzb24gMzwvdGV4dD5cbjwvc3ZnPiBcblxuPHVsPlxuICAgIHsjaWYgTElTc2hvd2xpc3Rjb3VudCA+IDB9XG4gICAgICAgIHsjZWFjaCBMSVNzaG93bGlzdCBhcyBzc2hvdyB9XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInR2c2hvd3NcIiBvbjpjbGljaz17aGFuZGxlUGxheVNob3dMSVMoc3Nob3cudHZmc3BhdGgpfT57c3Nob3cudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzc2hvdy5lcGlzb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuPC91bD5cblxuPHN0eWxlPlxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgXG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAvKiBidXR0b24ge1xuICAgICAgICB3aWR0aDo0NyU7XG4gICAgICAgIHBhZGRpbmc6N3B4O1xuICAgICAgICBtYXJnaW46MnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCA2MiwgMTUzKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJvbyB7XG4gICAgICAgIHdpZHRoOjMxJTtcbiAgICAgICAgbWFyZ2luOjJweDtcbiAgICB9ICovXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0EyRWUsR0FBVzs7OztnQ0FBaEIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FBQyxHQUFXOzs7OytCQUFoQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFa0UsR0FBSyxJQUFDLEtBQUs7Ozs7MEJBQ3BFLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FEUSxHQUFpQixjQUFDLEdBQUssSUFBQyxRQUFRLDBCQUFoQyxHQUFpQixjQUFDLEdBQUssSUFBQyxRQUFROzs7Ozs7Ozs7Ozs7dUVBQUksR0FBSyxJQUFDLEtBQUs7dUVBQ3BFLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBSjNCLEdBQWdCLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FUVCxHQUFVOytDQUNWLEdBQVU7K0NBQ1YsR0FBVTsrQ0FDVixHQUFVOytDQUNWLEdBQVU7K0NBQ1YsR0FBVTs7Ozs7Ozs0QkFJckIsR0FBZ0IsTUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXJDVixZQUFZLENBQUMsQ0FBQztLQUNyQixDQUFDLEdBQUcsOEJBQThCLEdBQUcsQ0FBQztLQUN0QyxJQUFJLG9EQUFvRCxDQUFDOztDQUM3RCxLQUFLLENBQUMsSUFBSSxJQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDdkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtFQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtJQUNqQixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7Ozs7O0tBMUMvQixXQUFXO0tBQ1gsZ0JBQWdCO0tBQ2hCLFVBQVUsR0FBRyxLQUFLOztnQkFHUCxjQUFjLENBQUMsQ0FBQztNQUN2QixJQUFJLHFEQUFxRCxDQUFDO0VBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7RUFDaEIsS0FBSyxDQUFDLElBQUksSUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQ3ZDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7R0FDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7bUJBQ2hCLFdBQVcsR0FBRyxJQUFJO21CQUNsQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTTtLQUMvQixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRS9CLFVBQVU7TUFDTixPQUFPLEdBQUcsY0FBYyxPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FFL0QsVUFBVTtNQUNOLE9BQU8sR0FBRyxjQUFjLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztLQUcvRCxVQUFVO01BQ04sT0FBTyxHQUFHLGNBQWMsT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBcUIvRCxpQkFBaUIsR0FBSSxLQUFLOzs7Ozs7Ozs7TUFTbEIsT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7O0VBQzlELFVBQVUsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
