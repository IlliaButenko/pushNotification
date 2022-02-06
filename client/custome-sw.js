console.log("Service Worker Loaded...");
self.addEventListener('push', event => {
    const data = event.data.json()
    const option = {
        body: data.description,
        image: data.image,
        icon: data.icon,
        vibrate: [100, 50, 100],
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
    }
    console.log('New notification', data, option)
    event.waitUntil(
        self.registration.showNotification(data.title, option)
    );
})