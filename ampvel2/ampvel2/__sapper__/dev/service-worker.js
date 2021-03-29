(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1617027665255;

	const files = [
		"/service-worker-index.html",
		"/favicon.png",
		"/global.css",
		"/logo-192.png",
		"/logo-512.png",
		"/manifest.json"
	];

	const shell = [
		"/client/client.a914ecfe.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.6d73d0ee.js",
		"/client/Controls.0752ead6.js",
		"/client/nextgeneration.829564ba.js",
		"/client/raisedbywolves.0a79c629.js",
		"/client/alteredcarbon.00fd6ed6.js",
		"/client/forallmankind.b72d8738.js",
		"/client/indianajones.2366b7c3.js",
		"/client/jurassicpark.d91fc080.js",
		"/client/alienworlds.46b3571d.js",
		"/client/brucewillis.b1473f46.js",
		"/client/documentary.d12f7f83.js",
		"/client/harrypotter.67fca597.js",
		"/client/lostinspace.689bc07c.js",
		"/client/mandalorian.a348f239.js",
		"/client/enterprise.877055e4.js",
		"/client/lowerdecks.e5bf9ccf.js",
		"/client/meninblack.96fb0590.js",
		"/client/seancarrol.95830af5.js",
		"/client/superheros.62bb485f.js",
		"/client/discovery.e57f2e52.js",
		"/client/johnwayne.b8c8d6a0.js",
		"/client/spacetime.d118cef1.js",
		"/client/tomcruize.14d7be6d.js",
		"/client/cartoons.636ee198.js",
		"/client/godzilla.2f6d84da.js",
		"/client/johnwick.0e606fcc.js",
		"/client/kingsmen.514410c2.js",
		"/client/lastship.edd541d3.js",
		"/client/startrek.f8fa93c1.js",
		"/client/starwars.f5f1fda2.js",
		"/client/fantasy.0e5ef05b.js",
		"/client/orville.2493a3fb.js",
		"/client/pirates.5147be3b.js",
		"/client/riddick.759113c5.js",
		"/client/therock.bca76c90.js",
		"/client/tremors.d6e08b19.js",
		"/client/tvshows.e5d70086.js",
		"/client/voyager.4934123d.js",
		"/client/action.f3412ea2.js",
		"/client/comedy.fec939e4.js",
		"/client/picard.19d6775f.js",
		"/client/drama.466aa2a3.js",
		"/client/scifi.4c67497d.js",
		"/client/misc.9a3898a4.js",
		"/client/sttv.a8721bce.js",
		"/client/xmen.92fc8b21.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxNzAyNzY2NTI1NTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2dsb2JhbC5jc3NcIixcblx0XCIvbG9nby0xOTIucG5nXCIsXG5cdFwiL2xvZ28tNTEyLnBuZ1wiLFxuXHRcIi9tYW5pZmVzdC5qc29uXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCIvY2xpZW50L2NsaWVudC5hOTE0ZWNmZS5qc1wiLFxuXHRcIi9jbGllbnQvaW5qZWN0X3N0eWxlcy41NjA3YWVjNi5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguNmQ3M2QwZWUuanNcIixcblx0XCIvY2xpZW50L0NvbnRyb2xzLjA3NTJlYWQ2LmpzXCIsXG5cdFwiL2NsaWVudC9uZXh0Z2VuZXJhdGlvbi44Mjk1NjRiYS5qc1wiLFxuXHRcIi9jbGllbnQvcmFpc2VkYnl3b2x2ZXMuMGE3OWM2MjkuanNcIixcblx0XCIvY2xpZW50L2FsdGVyZWRjYXJib24uMDBmZDZlZDYuanNcIixcblx0XCIvY2xpZW50L2ZvcmFsbG1hbmtpbmQuYjcyZDg3MzguanNcIixcblx0XCIvY2xpZW50L2luZGlhbmFqb25lcy4yMzY2YjdjMy5qc1wiLFxuXHRcIi9jbGllbnQvanVyYXNzaWNwYXJrLmQ5MWZjMDgwLmpzXCIsXG5cdFwiL2NsaWVudC9hbGllbndvcmxkcy40NmIzNTcxZC5qc1wiLFxuXHRcIi9jbGllbnQvYnJ1Y2V3aWxsaXMuYjE0NzNmNDYuanNcIixcblx0XCIvY2xpZW50L2RvY3VtZW50YXJ5LmQxMmY3ZjgzLmpzXCIsXG5cdFwiL2NsaWVudC9oYXJyeXBvdHRlci42N2ZjYTU5Ny5qc1wiLFxuXHRcIi9jbGllbnQvbG9zdGluc3BhY2UuNjg5YmMwN2MuanNcIixcblx0XCIvY2xpZW50L21hbmRhbG9yaWFuLmEzNDhmMjM5LmpzXCIsXG5cdFwiL2NsaWVudC9lbnRlcnByaXNlLjg3NzA1NWU0LmpzXCIsXG5cdFwiL2NsaWVudC9sb3dlcmRlY2tzLmU1YmY5Y2NmLmpzXCIsXG5cdFwiL2NsaWVudC9tZW5pbmJsYWNrLjk2ZmIwNTkwLmpzXCIsXG5cdFwiL2NsaWVudC9zZWFuY2Fycm9sLjk1ODMwYWY1LmpzXCIsXG5cdFwiL2NsaWVudC9zdXBlcmhlcm9zLjYyYmI0ODVmLmpzXCIsXG5cdFwiL2NsaWVudC9kaXNjb3ZlcnkuZTU3ZjJlNTIuanNcIixcblx0XCIvY2xpZW50L2pvaG53YXluZS5iOGM4ZDZhMC5qc1wiLFxuXHRcIi9jbGllbnQvc3BhY2V0aW1lLmQxMThjZWYxLmpzXCIsXG5cdFwiL2NsaWVudC90b21jcnVpemUuMTRkN2JlNmQuanNcIixcblx0XCIvY2xpZW50L2NhcnRvb25zLjYzNmVlMTk4LmpzXCIsXG5cdFwiL2NsaWVudC9nb2R6aWxsYS4yZjZkODRkYS5qc1wiLFxuXHRcIi9jbGllbnQvam9obndpY2suMGU2MDZmY2MuanNcIixcblx0XCIvY2xpZW50L2tpbmdzbWVuLjUxNDQxMGMyLmpzXCIsXG5cdFwiL2NsaWVudC9sYXN0c2hpcC5lZGQ1NDFkMy5qc1wiLFxuXHRcIi9jbGllbnQvc3RhcnRyZWsuZjhmYTkzYzEuanNcIixcblx0XCIvY2xpZW50L3N0YXJ3YXJzLmY1ZjFmZGEyLmpzXCIsXG5cdFwiL2NsaWVudC9mYW50YXN5LjBlNWVmMDViLmpzXCIsXG5cdFwiL2NsaWVudC9vcnZpbGxlLjI0OTNhM2ZiLmpzXCIsXG5cdFwiL2NsaWVudC9waXJhdGVzLjUxNDdiZTNiLmpzXCIsXG5cdFwiL2NsaWVudC9yaWRkaWNrLjc1OTExM2M1LmpzXCIsXG5cdFwiL2NsaWVudC90aGVyb2NrLmJjYTc2YzkwLmpzXCIsXG5cdFwiL2NsaWVudC90cmVtb3JzLmQ2ZTA4YjE5LmpzXCIsXG5cdFwiL2NsaWVudC90dnNob3dzLmU1ZDcwMDg2LmpzXCIsXG5cdFwiL2NsaWVudC92b3lhZ2VyLjQ5MzQxMjNkLmpzXCIsXG5cdFwiL2NsaWVudC9hY3Rpb24uZjM0MTJlYTIuanNcIixcblx0XCIvY2xpZW50L2NvbWVkeS5mZWM5MzllNC5qc1wiLFxuXHRcIi9jbGllbnQvcGljYXJkLjE5ZDY3NzVmLmpzXCIsXG5cdFwiL2NsaWVudC9kcmFtYS40NjZhYTJhMy5qc1wiLFxuXHRcIi9jbGllbnQvc2NpZmkuNGM2NzQ5N2QuanNcIixcblx0XCIvY2xpZW50L21pc2MuOWEzODk4YTQuanNcIixcblx0XCIvY2xpZW50L3N0dHYuYTg3MjFiY2UuanNcIixcblx0XCIvY2xpZW50L3htZW4uOTJmYzhiMjEuanNcIixcblx0XCIvY2xpZW50L3NhcHBlci1kZXYtY2xpZW50LjFlN2E0YTVlLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbmV4dGdlbmVyYXRpb25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3JhaXNlZGJ5d29sdmVzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hbHRlcmVkY2FyYm9uXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9mb3JhbGxtYW5raW5kXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9pbmRpYW5ham9uZXNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2p1cmFzc2ljcGFya1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWxpZW53b3JsZHNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2JydWNld2lsbGlzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kb2N1bWVudGFyeVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvaGFycnlwb3R0ZXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2xvc3RpbnNwYWNlXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9tYW5kYWxvcmlhblxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZW50ZXJwcmlzZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbG93ZXJkZWNrc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbWVuaW5ibGFja1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc2VhbmNhcnJvbFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3VwZXJoZXJvc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGlzY292ZXJ5XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9qb2hud2F5bmVcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3NwYWNldGltZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvdG9tY3J1aXplXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9jYXJ0b29uc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZ29kemlsbGFcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2pvaG53aWNrXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9raW5nc21lblxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbGFzdHNoaXBcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3N0YXJ0cmVrXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdGFyd2Fyc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZmFudGFzeVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvb3J2aWxsZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcGlyYXRlc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcmlkZGlja1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvdGhlcm9ja1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvdHJlbW9yc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvdHZzaG93c1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvdm95YWdlclxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWN0aW9uXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9jb21lZHlcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3BpY2FyZFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZHJhbWFcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3NjaWZpXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9taXNjXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdHR2XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC94bWVuXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBzdGF0aWNBc3NldHMgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3BlbihBU1NFVFMpXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnNraXBXYWl0aW5nKCk7XG5cdFx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG5cdFx0XHQvLyBkZWxldGUgb2xkIGNhY2hlc1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XG5cdFx0fSlcblx0KTtcbn0pO1xuXG5cbi8qKlxuICogRmV0Y2ggdGhlIGFzc2V0IGZyb20gdGhlIG5ldHdvcmsgYW5kIHN0b3JlIGl0IGluIHRoZSBjYWNoZS4gXG4gKiBGYWxsIGJhY2sgdG8gdGhlIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kQ2FjaGUocmVxdWVzdCkge1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YClcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG5cdFx0Y2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChyZXF1ZXN0KTtcblx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuXHRcdHRocm93IGVycjtcblx0fVxufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuXHRpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuXHQvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuXHRjb25zdCBpc0h0dHAgPSB1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpO1xuXHRjb25zdCBpc0RldlNlcnZlclJlcXVlc3QgPSB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydDtcblx0Y29uc3QgaXNTdGF0aWNBc3NldCA9IHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgc3RhdGljQXNzZXRzLmhhcyh1cmwucGF0aG5hbWUpO1xuXHRjb25zdCBza2lwQmVjYXVzZVVuY2FjaGVkID0gZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJyAmJiAhaXNTdGF0aWNBc3NldDtcblxuXHRpZiAoaXNIdHRwICYmICFpc0RldlNlcnZlclJlcXVlc3QgJiYgIXNraXBCZWNhdXNlVW5jYWNoZWQpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlLlxuXHRcdFx0XHQvLyBpZiB5b3VyIGFwcGxpY2F0aW9uIGhhcyBvdGhlciBVUkxzIHdpdGggZGF0YSB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlLFxuXHRcdFx0XHQvLyBzZXQgdGhpcyB2YXJpYWJsZSB0byB0cnVlIGZvciB0aGVtIGFuZCB0aGV5IHdpbGwgb25seSBiZSBmZXRjaGVkIG9uY2UuXG5cdFx0XHRcdGNvbnN0IGNhY2hlZEFzc2V0ID0gaXNTdGF0aWNBc3NldCAmJiBhd2FpdCBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cblx0XHRcdFx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHRcdFx0XHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0XHRcdFx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGlmICghY2FjaGVkQXNzZXQgJiYgdXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQqL1xuXG5cdFx0XHRcdHJldHVybiBjYWNoZWRBc3NldCB8fCBmZXRjaEFuZENhY2hlKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0fSkoKVxuXHRcdCk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsZUFBZTtDQUNoQixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLENBQUM7QUFFRjtDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsNEJBQTRCO0NBQzdCLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsOEJBQThCO0NBQy9C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
