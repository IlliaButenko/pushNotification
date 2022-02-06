console.log("Service Worker Loaded...");
var GlinkUrl = ''
self.addEventListener('push', event => {
    const data = event.data.json()
    GlinkUrl = data.url;
    const option = {
        body: data.description,
        image: data.image,
        icon: data.icon,
        vibrate: [100, 50, 100],
    }
    console.log('New notification', data, option)
    event.waitUntil(
        self.registration.showNotification(data.title, option)
    );
})
self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == GlinkUrl && 'focus' in client)
                return client.focus();
        }
        if (clients.openWindow)
            return clients.openWindow(GlinkUrl);
    }));
});