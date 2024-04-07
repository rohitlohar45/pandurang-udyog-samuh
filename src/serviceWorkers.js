self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("firebase-cache").then((cache) => {
			return cache.addAll([
				"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/awards.png?alt=media&token=0b4b2051-1624-4542-a44c-1c7dc50eb058",
				"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/logo-2.png?alt=media&token=8e04a245-c22d-4823-b621-77f927a0771a",
				"assets/img/logo-2.png",
				"assets/img/footer/bg.png",
				"assets/img/banner/awards.png",
				"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/best-banana-bunch-award.jpg?alt=media&token=9635ef0a-45cb-4475-ab5c-3ea8fb060cfe",
			]);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return (
				response ||
				fetch(event.request).then((response) => {
					// If the request is for an image, cache it
					if (response && response.url && response.url.match(/\.(jpe?g|png|gif|svg)$/)) {
						const clonedResponse = response.clone();
						caches.open("firebase-cache").then((cache) => {
							cache.put(event.request, clonedResponse);
						});
					}
					// console.log(response);
					return response;
				})
			);
		})
	);
});
