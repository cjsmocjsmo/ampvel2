import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as validate_each_argument, v as validate_slots, J as onMount, z as globals, F as element, c as claim_element, g as attr_dev, h as add_location, j as insert_dev, A as listen_dev, I as is_function, f as detach_dev, t as text, l as space, m as create_component, b as children, e as claim_text, o as claim_space, p as claim_component, k as append_dev, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, E as destroy_each } from './client.4ad2f459.js';
import { C as Controls, o as omxaddr, m as movaddr } from './Controls.dd956444.js';

/* src/routes/cartoons.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/cartoons.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (59:0) {#each NewDat as N}
function create_each_block(ctx) {
	let img;
	let img_src_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*N*/ ctx[7]["thumbpath"])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "fucked up");
			attr_dev(img, "class", "svelte-r8m8ks");
			add_location(img, file, 59, 1, 1499);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);

			if (!mounted) {
				dispose = listen_dev(
					img,
					"click",
					function () {
						if (is_function(/*handlegetMovClick*/ ctx[1](/*N*/ ctx[7]["movfspath"]))) /*handlegetMovClick*/ ctx[1](/*N*/ ctx[7]["movfspath"]).apply(this, arguments);
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

			if (dirty & /*NewDat*/ 1 && img.src !== (img_src_value = /*N*/ ctx[7]["thumbpath"])) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(59:0) {#each NewDat as N}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let nav0;
	let button0;
	let a0;
	let t0;
	let t1;
	let h1;
	let t2;
	let t3;
	let controls0;
	let t4;
	let t5;
	let controls1;
	let t6;
	let nav1;
	let button1;
	let a1;
	let t7;
	let t8;
	let button2;
	let a2;
	let t9;
	let current;
	controls0 = new Controls({ $$inline: true });
	let each_value = /*NewDat*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	controls1 = new Controls({ $$inline: true });

	const block = {
		c: function create() {
			nav0 = element("nav");
			button0 = element("button");
			a0 = element("a");
			t0 = text("Back");
			t1 = space();
			h1 = element("h1");
			t2 = text("Cartoons");
			t3 = space();
			create_component(controls0.$$.fragment);
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			create_component(controls1.$$.fragment);
			t6 = space();
			nav1 = element("nav");
			button1 = element("button");
			a1 = element("a");
			t7 = text("Back");
			t8 = space();
			button2 = element("button");
			a2 = element("a");
			t9 = text("Back");
			this.h();
		},
		l: function claim(nodes) {
			nav0 = claim_element(nodes, "NAV", {});
			var nav0_nodes = children(nav0);
			button0 = claim_element(nav0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			a0 = claim_element(button0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Back");
			a0_nodes.forEach(detach_dev);
			button0_nodes.forEach(detach_dev);
			t1 = claim_space(nav0_nodes);
			h1 = claim_element(nav0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Cartoons");
			h1_nodes.forEach(detach_dev);
			nav0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(controls0.$$.fragment, nodes);
			t4 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t5 = claim_space(nodes);
			claim_component(controls1.$$.fragment, nodes);
			t6 = claim_space(nodes);
			nav1 = claim_element(nodes, "NAV", {});
			var nav1_nodes = children(nav1);
			button1 = claim_element(nav1_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			a1 = claim_element(button1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t7 = claim_text(a1_nodes, "Back");
			a1_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			t8 = claim_space(nav1_nodes);
			button2 = claim_element(nav1_nodes, "BUTTON", {});
			var button2_nodes = children(button2);
			a2 = claim_element(button2_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			t9 = claim_text(a2_nodes, "Back");
			a2_nodes.forEach(detach_dev);
			button2_nodes.forEach(detach_dev);
			nav1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", ".");
			add_location(a0, file, 54, 20, 1409);
			attr_dev(button0, "class", "b1 svelte-r8m8ks");
			add_location(button0, file, 54, 1, 1390);
			attr_dev(h1, "class", "svelte-r8m8ks");
			add_location(h1, file, 55, 1, 1440);
			add_location(nav0, file, 53, 0, 1383);
			attr_dev(a1, "href", ".");
			add_location(a1, file, 63, 20, 1635);
			attr_dev(button1, "class", "b1 svelte-r8m8ks");
			add_location(button1, file, 63, 1, 1616);
			attr_dev(a2, "href", ".");
			add_location(a2, file, 64, 9, 1674);
			add_location(button2, file, 64, 1, 1666);
			add_location(nav1, file, 62, 0, 1609);
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav0, anchor);
			append_dev(nav0, button0);
			append_dev(button0, a0);
			append_dev(a0, t0);
			append_dev(nav0, t1);
			append_dev(nav0, h1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			mount_component(controls0, target, anchor);
			insert_dev(target, t4, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t5, anchor);
			mount_component(controls1, target, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, nav1, anchor);
			append_dev(nav1, button1);
			append_dev(button1, a1);
			append_dev(a1, t7);
			append_dev(nav1, t8);
			append_dev(nav1, button2);
			append_dev(button2, a2);
			append_dev(a2, t9);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*NewDat, handlegetMovClick*/ 3) {
				each_value = /*NewDat*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t5.parentNode, t5);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(controls0.$$.fragment, local);
			transition_in(controls1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(controls0.$$.fragment, local);
			transition_out(controls1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav0);
			if (detaching) detach_dev(t3);
			destroy_component(controls0, detaching);
			if (detaching) detach_dev(t4);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t5);
			destroy_component(controls1, detaching);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(nav1);
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

const addr = "http://192.168.0.42:8888/";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Cartoons", slots, []);
	let NewDat = [];

	onMount(async () => {
		await fetch(`http://192.168.0.42:8888/intCartoons`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(0, NewDat = data.map(da => {
				let np = da.thumbpath.split("/");
				let newpath = np[1] + "/" + np[2];
				const thumbpath = addr + newpath;

				return {
					"movfspath": da.movfspath,
					"movname": da.movname,
					thumbpath
				};
			}));
		}).catch(err => console.log(err));
	});

	let omxaddr_value;

	const unsubampvel = omxaddr.subscribe(value => {
		omxaddr_value = value;
	});

	let movaddr_value;

	const unsubmovaddr = movaddr.subscribe(value => {
		movaddr_value = value;
	});

	async function getPlayMov(mov) {
		let addr = `${omxaddr_value}/playMediaReact?movie=${mov}`;
		console.log(addr);

		await fetch(addr, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlegetMovClick = x => {
		// if (movLOCALPLAY) {
		// 	let foo = x.split("Movies", 2)
		// 	let newpath = movaddr_value + foo[1]
		// 	localplayURL.set(newpath)
		// 	console.log(newpath)
		// } else {
		let promise = getPlayMov(x).catch(err => console.log(err));
	}; // }

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Cartoons> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		onMount,
		omxaddr,
		movaddr,
		NewDat,
		addr,
		omxaddr_value,
		unsubampvel,
		movaddr_value,
		unsubmovaddr,
		getPlayMov,
		handlegetMovClick
	});

	$$self.$inject_state = $$props => {
		if ("NewDat" in $$props) $$invalidate(0, NewDat = $$props.NewDat);
		if ("omxaddr_value" in $$props) omxaddr_value = $$props.omxaddr_value;
		if ("movaddr_value" in $$props) movaddr_value = $$props.movaddr_value;
		if ("handlegetMovClick" in $$props) $$invalidate(1, handlegetMovClick = $$props.handlegetMovClick);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [NewDat, handlegetMovClick];
}

class Cartoons extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cartoons",
			options,
			id: create_fragment.name
		});
	}
}

export default Cartoons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydG9vbnMuNjhlYjYxZTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY2FydG9vbnMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IG9teGFkZHIsIG1vdmFkZHIgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllclN0b3JlLmpzJ1xuXG5cdGxldCBOZXdEYXQgPSBbXTtcblx0Y29uc3QgYWRkciA9IFwiaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L1wiXG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50Q2FydG9vbnNgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdE5ld0RhdCA9IGRhdGEubWFwKGRhID0+IHtcblx0XHRcdFx0bGV0IG5wID0gZGEudGh1bWJwYXRoLnNwbGl0KFwiL1wiKVxuXHRcdFx0XHRsZXQgbmV3cGF0aCA9ICBucFsxXSArIFwiL1wiICsgbnBbMl1cblx0XHRcdFx0Y29uc3QgdGh1bWJwYXRoID0gYWRkciArIG5ld3BhdGhcblx0XHRcdFx0cmV0dXJuIHtcIm1vdmZzcGF0aFwiOmRhLm1vdmZzcGF0aCwgXCJtb3ZuYW1lXCI6ZGEubW92bmFtZSwgXCJ0aHVtYnBhdGhcIjp0aHVtYnBhdGh9XG5cdFx0XHR9KVxuXHR9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59KVxuXG5cbmxldCBvbXhhZGRyX3ZhbHVlO1xuY29uc3QgdW5zdWJhbXB2ZWwgPSBvbXhhZGRyLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gIG9teGFkZHJfdmFsdWUgPSB2YWx1ZVxufSlcblxubGV0IG1vdmFkZHJfdmFsdWU7XG5jb25zdCB1bnN1Ym1vdmFkZHIgPSBtb3ZhZGRyLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gIG1vdmFkZHJfdmFsdWUgPSB2YWx1ZVxufSlcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRQbGF5TW92KG1vdikge1xuXHRsZXQgYWRkciA9IGAke29teGFkZHJfdmFsdWV9L3BsYXlNZWRpYVJlYWN0P21vdmllPSR7bW92fWBcblx0Y29uc29sZS5sb2coYWRkcilcblx0YXdhaXQgZmV0Y2goYWRkciwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHQudGhlbihyID0+IHIuanNvbigpKVxuXHQudGhlbihkYXRhID0+IHtcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHR9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59XG5sZXQgaGFuZGxlZ2V0TW92Q2xpY2sgPSAoeCkgPT4ge1xuXHQvLyBpZiAobW92TE9DQUxQTEFZKSB7XG5cdC8vIFx0bGV0IGZvbyA9IHguc3BsaXQoXCJNb3ZpZXNcIiwgMilcblx0Ly8gXHRsZXQgbmV3cGF0aCA9IG1vdmFkZHJfdmFsdWUgKyBmb29bMV1cblx0Ly8gXHRsb2NhbHBsYXlVUkwuc2V0KG5ld3BhdGgpXG5cdC8vIFx0Y29uc29sZS5sb2cobmV3cGF0aClcblx0Ly8gfSBlbHNlIHtcblx0XHRsZXQgcHJvbWlzZSA9IGdldFBsYXlNb3YoeCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHQvLyB9XG59XG5cbjwvc2NyaXB0PlxuPG5hdj5cblx0PGJ1dHRvbiBjbGFzcz1cImIxXCI+PGEgaHJlZj1cIi5cIj5CYWNrPC9hPjwvYnV0dG9uPlxuXHQ8aDE+Q2FydG9vbnM8L2gxPlxuPC9uYXY+XG48Q29udHJvbHMgLz5cbnsjZWFjaCBOZXdEYXQgYXMgTn1cblx0PGltZyBvbjpjbGljaz17aGFuZGxlZ2V0TW92Q2xpY2soTltcIm1vdmZzcGF0aFwiXSl9IHNyYz17TltcInRodW1icGF0aFwiXX0gYWx0PVwiZnVja2VkIHVwXCIvPlxuey9lYWNofVxuPENvbnRyb2xzIC8+XG48bmF2PlxuXHQ8YnV0dG9uIGNsYXNzPVwiYjFcIj48YSBocmVmPVwiLlwiPkJhY2s8L2E+PC9idXR0b24+XG5cdDxidXR0b24+PGEgaHJlZj1cIi5cIj5CYWNrPC9hPjwvYnV0dG9uPlxuPC9uYXY+XG5cblxuXG5cblxuPHN0eWxlPlxuXHQuYjEge1xuXHRcdGZsb2F0OnJpZ2h0O1xuXHR9XG5cdGgxIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cblx0aW1nIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDE5NXB4O1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQTJEd0QsR0FBQyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7NENBQXJELEdBQWlCLFVBQUMsR0FBQyxJQUFDLFdBQVcsMkJBQS9CLEdBQWlCLFVBQUMsR0FBQyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7a0VBQVMsR0FBQyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRDlELEdBQU07Ozs7Z0NBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQUMsR0FBTTs7OzsrQkFBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcERDLElBQUksR0FBRywyQkFBMkI7Ozs7O0tBRHBDLE1BQU07O0NBRVYsT0FBTztRQUNBLEtBQUssMkNBQTBDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDL0UsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTttQkFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDM0IsT0FBTyxHQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQzNCLFNBQVMsR0FBRyxJQUFJLEdBQUcsT0FBTzs7O0tBQ3hCLFdBQVcsRUFBQyxFQUFFLENBQUMsU0FBUztLQUFFLFNBQVMsRUFBQyxFQUFFLENBQUMsT0FBTztLQUFjLFNBQVM7OztLQUU3RSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBSTVCLGFBQWE7O09BQ1gsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztFQUN6QyxhQUFhLEdBQUcsS0FBSzs7O0tBR25CLGFBQWE7O09BQ1gsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztFQUMxQyxhQUFhLEdBQUcsS0FBSzs7O2dCQUlSLFVBQVUsQ0FBQyxHQUFHO01BQ3hCLElBQUksTUFBTSxhQUFhLHlCQUF5QixHQUFHO0VBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7UUFDVixLQUFLLENBQUMsSUFBSSxJQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtHQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtLQUNkLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FFNUIsaUJBQWlCLEdBQUksQ0FBQzs7Ozs7OztNQU9wQixPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
