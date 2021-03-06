console.log("Service Worker Loaded...");
let data = {};
self.addEventListener('push', event => {
    data = event.data.json()
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
    fetch(`https://block-test.duckdns.org/users/api/notification/clickEvent`, {
        method: 'POST',
        body: JSON.stringify({
            n_id: data.n_id
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
        })
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == data.url && 'focus' in client)
                return client.focus();
        }
        if (clients.openWindow)
            return clients.openWindow(data.url);
    }));
});

