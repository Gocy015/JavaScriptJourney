var ws = require('nodejs-websocket');

var server = ws.createServer(function _onConnect(conn) {
    // console.log("New connection ", conn);
    var s = this;
    conn.on('text', function _getNewChatMessage(msg) {
        console.log('New message : ' + msg);
        s.broadcast(msg);
    });
    conn.on('close', function _connectClosed(code, reason) {
        console.log('connection closed.');
        // conn.end()
    });
    conn.on('error', function (err) {
        if (err.code !== 'ECONNRESET') {
            // Ignore ECONNRESET and re throw anything else
            throw err
        }
    })
}).listen(8080);

server.broadcast = function _broadcast(data) {
    const WebSocket = require('ws');
    server.connections.forEach(function _forEachConnection(conn) {
        if (conn.readyState == WebSocket.OPEN) {
            conn.send(data);
        }
    });
}

console.log('Good to go.');