const websockets = (expressServer) => {
    let clients = {};
    let WSServer = require('ws').Server;
    let server = require('http').createServer(expressServer);
    const wss = new WSServer({
        path: "/websockets",
        server: server
    });

    wss.on('request', function (request) {
        console.log(request)
        // const connection = request.accept(null, request.origin);
        // clients[userID] = connection;
    })

    wss.on('connection', function connection(ws) {

        ws.on('message', function incoming(message) {

            console.log(`received: ${message}`);

            ws.send(JSON.stringify({

                answer: 42
            }));
        });
    });

    return server;
};

module.exports = websockets;