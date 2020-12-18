import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as validate_each_argument, v as validate_slots, J as onMount, z as globals, F as element, c as claim_element, g as attr_dev, h as add_location, j as insert_dev, A as listen_dev, I as is_function, f as detach_dev, t as text, l as space, m as create_component, b as children, e as claim_text, o as claim_space, p as claim_component, k as append_dev, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, E as destroy_each } from './client.b4611b38.js';
import { C as Controls, o as omxaddr, m as movaddr } from './Controls.c253bb0b.js';

/* src/routes/brucewillis.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/brucewillis.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (60:0) {#each NewDat as N}
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
			add_location(img, file, 60, 1, 1511);
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
		source: "(60:0) {#each NewDat as N}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
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
	let nav;
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
			button0 = element("button");
			a0 = element("a");
			t0 = text("Back");
			t1 = space();
			h1 = element("h1");
			t2 = text("Bruce Willis");
			t3 = space();
			create_component(controls0.$$.fragment);
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			create_component(controls1.$$.fragment);
			t6 = space();
			nav = element("nav");
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
			button0 = claim_element(nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			a0 = claim_element(button0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Back");
			a0_nodes.forEach(detach_dev);
			button0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Bruce Willis");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(controls0.$$.fragment, nodes);
			t4 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t5 = claim_space(nodes);
			claim_component(controls1.$$.fragment, nodes);
			t6 = claim_space(nodes);
			nav = claim_element(nodes, "NAV", {});
			var nav_nodes = children(nav);
			button1 = claim_element(nav_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			a1 = claim_element(button1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t7 = claim_text(a1_nodes, "Back");
			a1_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			t8 = claim_space(nav_nodes);
			button2 = claim_element(nav_nodes, "BUTTON", {});
			var button2_nodes = children(button2);
			a2 = claim_element(button2_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			t9 = claim_text(a2_nodes, "Back");
			a2_nodes.forEach(detach_dev);
			button2_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", ".");
			add_location(a0, file, 56, 19, 1425);
			attr_dev(button0, "class", "b1 svelte-r8m8ks");
			add_location(button0, file, 56, 0, 1406);
			attr_dev(h1, "class", "svelte-r8m8ks");
			add_location(h1, file, 57, 0, 1455);
			attr_dev(a1, "href", ".");
			add_location(a1, file, 64, 20, 1647);
			attr_dev(button1, "class", "b1 svelte-r8m8ks");
			add_location(button1, file, 64, 1, 1628);
			attr_dev(a2, "href", ".");
			add_location(a2, file, 65, 9, 1686);
			add_location(button2, file, 65, 1, 1678);
			add_location(nav, file, 63, 0, 1621);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button0, anchor);
			append_dev(button0, a0);
			append_dev(a0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h1, anchor);
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
			insert_dev(target, nav, anchor);
			append_dev(nav, button1);
			append_dev(button1, a1);
			append_dev(a1, t7);
			append_dev(nav, t8);
			append_dev(nav, button2);
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
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			destroy_component(controls0, detaching);
			if (detaching) detach_dev(t4);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t5);
			destroy_component(controls1, detaching);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(nav);
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
	validate_slots("Brucewillis", slots, []);
	let NewDat = [];

	onMount(async () => {
		await fetch(`http://192.168.0.42:8888/intBruceWillis`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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

		console.log(NewDat);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Brucewillis> was created with unknown prop '${key}'`);
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

class Brucewillis extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Brucewillis",
			options,
			id: create_fragment.name
		});
	}
}

export default Brucewillis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ1Y2V3aWxsaXMuMmRhMDE4MmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYnJ1Y2V3aWxsaXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSdcblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IG9teGFkZHIsIG1vdmFkZHIgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllclN0b3JlJ1xuXG5cdGxldCBOZXdEYXQgPSBbXTtcblx0Y29uc3QgYWRkciA9IFwiaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L1wiXG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50QnJ1Y2VXaWxsaXNgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdE5ld0RhdCA9IGRhdGEubWFwKGRhID0+IHtcblx0XHRcdFx0bGV0IG5wID0gZGEudGh1bWJwYXRoLnNwbGl0KFwiL1wiKVxuXHRcdFx0XHRsZXQgbmV3cGF0aCA9ICBucFsxXSArIFwiL1wiICsgbnBbMl1cblx0XHRcdFx0Y29uc3QgdGh1bWJwYXRoID0gYWRkciArIG5ld3BhdGhcblx0XHRcdFx0cmV0dXJuIHtcIm1vdmZzcGF0aFwiOmRhLm1vdmZzcGF0aCwgXCJtb3ZuYW1lXCI6ZGEubW92bmFtZSwgXCJ0aHVtYnBhdGhcIjp0aHVtYnBhdGh9XG5cdFx0XHR9KVxuXHR9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdGNvbnNvbGUubG9nKE5ld0RhdClcbn0pXG5cblxubGV0IG9teGFkZHJfdmFsdWU7XG5jb25zdCB1bnN1YmFtcHZlbCA9IG9teGFkZHIuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgb214YWRkcl92YWx1ZSA9IHZhbHVlXG59KVxuXG5sZXQgbW92YWRkcl92YWx1ZTtcbmNvbnN0IHVuc3VibW92YWRkciA9IG1vdmFkZHIuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgbW92YWRkcl92YWx1ZSA9IHZhbHVlXG59KVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBsYXlNb3YobW92KSB7XG5cdGxldCBhZGRyID0gYCR7b214YWRkcl92YWx1ZX0vcGxheU1lZGlhUmVhY3Q/bW92aWU9JHttb3Z9YFxuXHRjb25zb2xlLmxvZyhhZGRyKVxuXHRhd2FpdCBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdC50aGVuKGRhdGEgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn1cbmxldCBoYW5kbGVnZXRNb3ZDbGljayA9ICh4KSA9PiB7XG5cdC8vIGlmIChtb3ZMT0NBTFBMQVkpIHtcblx0Ly8gXHRsZXQgZm9vID0geC5zcGxpdChcIk1vdmllc1wiLCAyKVxuXHQvLyBcdGxldCBuZXdwYXRoID0gbW92YWRkcl92YWx1ZSArIGZvb1sxXVxuXHQvLyBcdGxvY2FscGxheVVSTC5zZXQobmV3cGF0aClcblx0Ly8gXHRjb25zb2xlLmxvZyhuZXdwYXRoKVxuXHQvLyB9IGVsc2Uge1xuXHRcdGxldCBwcm9taXNlID0gZ2V0UGxheU1vdih4KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdC8vIH1cbn1cblxuPC9zY3JpcHQ+XG5cblxuPGJ1dHRvbiBjbGFzcz1cImIxXCI+PGEgaHJlZj1cIi5cIj5CYWNrPC9hPjwvYnV0dG9uPlxuPGgxPkJydWNlIFdpbGxpczwvaDE+XG48Q29udHJvbHMgLz5cbnsjZWFjaCBOZXdEYXQgYXMgTn1cblx0PGltZyBvbjpjbGljaz17aGFuZGxlZ2V0TW92Q2xpY2soTltcIm1vdmZzcGF0aFwiXSl9IHNyYz17TltcInRodW1icGF0aFwiXX0gYWx0PVwiZnVja2VkIHVwXCIvPlxuey9lYWNofVxuPENvbnRyb2xzIC8+XG48bmF2PlxuXHQ8YnV0dG9uIGNsYXNzPVwiYjFcIj48YSBocmVmPVwiLlwiPkJhY2s8L2E+PC9idXR0b24+XG5cdDxidXR0b24+PGEgaHJlZj1cIi5cIj5CYWNrPC9hPjwvYnV0dG9uPlxuPC9uYXY+XG5cbjxzdHlsZT5cblx0LmIxIHtcblx0XHRmbG9hdDpyaWdodDtcblx0fVxuXHRoMSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cdGltZyB7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxOTVweDtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0E0RHdELEdBQUMsSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7OzRDQUFyRCxHQUFpQixVQUFDLEdBQUMsSUFBQyxXQUFXLDJCQUEvQixHQUFpQixVQUFDLEdBQUMsSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7O2tFQUFTLEdBQUMsSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRDlELEdBQU07Ozs7Z0NBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQUMsR0FBTTs7OzsrQkFBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFyREMsSUFBSSxHQUFHLDJCQUEyQjs7Ozs7S0FEcEMsTUFBTTs7Q0FFVixPQUFPO1FBQ0EsS0FBSyw4Q0FBNkMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUNsRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO21CQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDZixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRztRQUMzQixPQUFPLEdBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7VUFDM0IsU0FBUyxHQUFHLElBQUksR0FBRyxPQUFPOzs7S0FDeEIsV0FBVyxFQUFDLEVBQUUsQ0FBQyxTQUFTO0tBQUUsU0FBUyxFQUFDLEVBQUUsQ0FBQyxPQUFPO0tBQWMsU0FBUzs7O0tBRTdFLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOztFQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07OztLQUlmLGFBQWE7O09BQ1gsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztFQUN6QyxhQUFhLEdBQUcsS0FBSzs7O0tBR25CLGFBQWE7O09BQ1gsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztFQUMxQyxhQUFhLEdBQUcsS0FBSzs7O2dCQUlSLFVBQVUsQ0FBQyxHQUFHO01BQ3hCLElBQUksTUFBTSxhQUFhLHlCQUF5QixHQUFHO0VBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7UUFDVixLQUFLLENBQUMsSUFBSSxJQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtHQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtLQUNkLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FFNUIsaUJBQWlCLEdBQUksQ0FBQzs7Ozs7OztNQU9wQixPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
