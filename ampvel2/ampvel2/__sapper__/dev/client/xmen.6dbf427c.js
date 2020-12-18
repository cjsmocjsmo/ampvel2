import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as validate_each_argument, v as validate_slots, J as onMount, z as globals, F as element, c as claim_element, g as attr_dev, h as add_location, j as insert_dev, A as listen_dev, I as is_function, f as detach_dev, t as text, l as space, m as create_component, b as children, e as claim_text, o as claim_space, p as claim_component, k as append_dev, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, E as destroy_each } from './client.44a3e033.js';
import { C as Controls, o as omxaddr, m as movaddr } from './Controls.4f553e5e.js';

/* src/routes/xmen.svelte generated by Svelte v3.30.0 */

const { console: console_1 } = globals;
const file = "src/routes/xmen.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (57:1) {#each NewDat as N}
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
			add_location(img, file, 57, 2, 1492);
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
		source: "(57:1) {#each NewDat as N}",
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
			t2 = text("X-Men");
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
			t2 = claim_text(h1_nodes, "X-Men");
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
			add_location(a0, file, 52, 20, 1402);
			attr_dev(button0, "class", "b1 svelte-r8m8ks");
			add_location(button0, file, 52, 1, 1383);
			attr_dev(h1, "class", "svelte-r8m8ks");
			add_location(h1, file, 53, 1, 1433);
			add_location(nav0, file, 51, 0, 1376);
			attr_dev(a1, "href", ".");
			add_location(a1, file, 61, 20, 1630);
			attr_dev(button1, "class", "b1 svelte-r8m8ks");
			add_location(button1, file, 61, 1, 1611);
			attr_dev(a2, "href", ".");
			add_location(a2, file, 62, 9, 1669);
			add_location(button2, file, 62, 1, 1661);
			add_location(nav1, file, 60, 0, 1604);
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
	validate_slots("Xmen", slots, []);
	let NewDat = [];

	onMount(async () => {
		await fetch(`http://192.168.0.42:8888/intXMen`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Xmen> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Controls,
		onMount,
		NewDat,
		addr,
		omxaddr,
		movaddr,
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

class Xmen extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Xmen",
			options,
			id: create_fragment.name
		});
	}
}

export default Xmen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1lbi42ZGJmNDI3Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy94bWVuLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cm9scy5zdmVsdGUnXG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXG5cdGxldCBOZXdEYXQgPSBbXTtcblx0Y29uc3QgYWRkciA9IFwiaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L1wiXG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvaW50WE1lbmAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0TmV3RGF0ID0gZGF0YS5tYXAoZGEgPT4ge1xuXHRcdFx0XHRsZXQgbnAgPSBkYS50aHVtYnBhdGguc3BsaXQoXCIvXCIpXG5cdFx0XHRcdGxldCBuZXdwYXRoID0gIG5wWzFdICsgXCIvXCIgKyBucFsyXVxuXHRcdFx0XHRjb25zdCB0aHVtYnBhdGggPSBhZGRyICsgbmV3cGF0aFxuXHRcdFx0XHRyZXR1cm4ge1wibW92ZnNwYXRoXCI6ZGEubW92ZnNwYXRoLCBcIm1vdm5hbWVcIjpkYS5tb3ZuYW1lLCBcInRodW1icGF0aFwiOnRodW1icGF0aH1cblx0XHRcdH0pXG5cdH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn0pXG5pbXBvcnQgeyBvbXhhZGRyLCBtb3ZhZGRyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXJTdG9yZS5qcydcblxubGV0IG9teGFkZHJfdmFsdWU7XG5jb25zdCB1bnN1YmFtcHZlbCA9IG9teGFkZHIuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgb214YWRkcl92YWx1ZSA9IHZhbHVlXG59KVxuXG5sZXQgbW92YWRkcl92YWx1ZTtcbmNvbnN0IHVuc3VibW92YWRkciA9IG1vdmFkZHIuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgbW92YWRkcl92YWx1ZSA9IHZhbHVlXG59KVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBsYXlNb3YobW92KSB7XG5cdGxldCBhZGRyID0gYCR7b214YWRkcl92YWx1ZX0vcGxheU1lZGlhUmVhY3Q/bW92aWU9JHttb3Z9YFxuXHRjb25zb2xlLmxvZyhhZGRyKVxuXHRhd2FpdCBmZXRjaChhZGRyLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdC50aGVuKGRhdGEgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn1cbmxldCBoYW5kbGVnZXRNb3ZDbGljayA9ICh4KSA9PiB7XG5cdC8vIGlmIChtb3ZMT0NBTFBMQVkpIHtcblx0Ly8gXHRsZXQgZm9vID0geC5zcGxpdChcIk1vdmllc1wiLCAyKVxuXHQvLyBcdGxldCBuZXdwYXRoID0gbW92YWRkcl92YWx1ZSArIGZvb1sxXVxuXHQvLyBcdGxvY2FscGxheVVSTC5zZXQobmV3cGF0aClcblx0Ly8gXHRjb25zb2xlLmxvZyhuZXdwYXRoKVxuXHQvLyB9IGVsc2Uge1xuXHRcdGxldCBwcm9taXNlID0gZ2V0UGxheU1vdih4KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdC8vIH1cbn1cbjwvc2NyaXB0PlxuPG5hdj5cblx0PGJ1dHRvbiBjbGFzcz1cImIxXCI+PGEgaHJlZj1cIi5cIj5CYWNrPC9hPjwvYnV0dG9uPlxuXHQ8aDE+WC1NZW48L2gxPlxuPC9uYXY+XG5cdDxDb250cm9scyAvPlxuXHR7I2VhY2ggTmV3RGF0IGFzIE59XG5cdFx0PGltZyBvbjpjbGljaz17aGFuZGxlZ2V0TW92Q2xpY2soTltcIm1vdmZzcGF0aFwiXSl9IHNyYz17TltcInRodW1icGF0aFwiXX0gYWx0PVwiZnVja2VkIHVwXCIvPlxuXHR7L2VhY2h9XG5cdDxDb250cm9scyAvPlxuPG5hdj5cblx0PGJ1dHRvbiBjbGFzcz1cImIxXCI+PGEgaHJlZj1cIi5cIj5CYWNrPC9hPjwvYnV0dG9uPlxuXHQ8YnV0dG9uPjxhIGhyZWY9XCIuXCI+QmFjazwvYT48L2J1dHRvbj5cbjwvbmF2PlxuXG5cblxuXG5cbjxzdHlsZT5cblx0LmIxIHtcblx0XHRmbG9hdDpyaWdodDtcblx0fVxuXHRoMSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cdGltZyB7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxOTVweDtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0F5RHlELEdBQUMsSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7OzRDQUFyRCxHQUFpQixVQUFDLEdBQUMsSUFBQyxXQUFXLDJCQUEvQixHQUFpQixVQUFDLEdBQUMsSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7O2tFQUFTLEdBQUMsSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUQ5RCxHQUFNOzs7O2dDQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUFDLEdBQU07Ozs7K0JBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW5EQSxJQUFJLEdBQUcsMkJBQTJCOzs7OztLQURwQyxNQUFNOztDQUVWLE9BQU87UUFDQSxLQUFLLHVDQUFzQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQzNFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7bUJBQ1QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQzNCLE9BQU8sR0FBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztVQUMzQixTQUFTLEdBQUcsSUFBSSxHQUFHLE9BQU87OztLQUN4QixXQUFXLEVBQUMsRUFBRSxDQUFDLFNBQVM7S0FBRSxTQUFTLEVBQUMsRUFBRSxDQUFDLE9BQU87S0FBYyxTQUFTOzs7S0FFN0UsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztLQUk1QixhQUFhOztPQUNYLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7RUFDekMsYUFBYSxHQUFHLEtBQUs7OztLQUduQixhQUFhOztPQUNYLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7RUFDMUMsYUFBYSxHQUFHLEtBQUs7OztnQkFJUixVQUFVLENBQUMsR0FBRztNQUN4QixJQUFJLE1BQU0sYUFBYSx5QkFBeUIsR0FBRztFQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7O1FBQ1YsS0FBSyxDQUFDLElBQUksSUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQzdDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7R0FDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7S0FDZCxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRTVCLGlCQUFpQixHQUFJLENBQUM7Ozs7Ozs7TUFPcEIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
