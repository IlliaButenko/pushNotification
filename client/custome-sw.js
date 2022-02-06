console.log("Service Worker Loaded...");
self.addEventListener('push', event => {
    const data = event.data.json()
    console.log('New notification', data)
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.description,
            image: data.image,
            icon: data.icon,
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },

            actions: [
                {
                    action: 'explore', title: 'Go to the site',
                    icon: data.image
                },
                {
                    action: 'close', title: 'Close the notification',
                    icon: data.icon
                },
            ],
        })
    );
})