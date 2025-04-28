self.addEventListener('fetch', (event) => {
	if (event.request.method === 'GET') {
		event.respondWith(
			fetch(event.request).then((response) => {
				// Clone the response
				const newResponse = response.clone();

				// Create new response with modified headers
				return newResponse.blob().then((blob) => {
					const newHeaders = new Headers(response.headers);
					newHeaders.set('Server', 'nginx/1.14.0 PHP/5.4.21');

					return new Response(blob, {
						status: newResponse.status,
						statusText: newResponse.statusText,
						headers: newHeaders
					});
				});
			})
		);
	} else {
		event.respondWith(fetch(event.request));
	}
});
