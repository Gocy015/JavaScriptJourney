$(document).ready(function _docReady() {

    //connect server
    connectServer();

    initUIComponents();

    // alert('ready');
});
var webSocket = null;

function connectServer() {
    console.log("Connecting .. ");
    webSocket = new WebSocket('ws://localhost:8080');
    webSocket.onopen = function _socketOpened(event) {
        console.log('Connected.');
        alert('connected');
    }
    webSocket.onerror = function _socketError(event) {
        console.log(event);
        alert('error')
    }

    webSocket.onmessage = function _socketMessage(event) {
        console.log('Client get message : ', event);
        var chatData = JSON.parse(event.data);

        $('<p></p>')
            .text(chatData.user + " : " + chatData.msg)
            .appendTo($('body'));
    }
}


function initUIComponents() {

    var username = $('input#user_name').on('keydown', function _nameKeydown(event) {
        // console.log(event.keyCode);
        if (event.keyCode === 13) { // hit return
            // console.log(this.value);
        }
    });

    var message = $('input#message').on('keydown', function _messageKeydown(event) {
        // console.log(event.keyCode);
        if (event.keyCode === 13) { // hit return
            // console.log(this.value);
            sendMessage(username.val(), this.value);
        }
    });
}

function sendMessage(name, message) {
    console.log('check');
    if (name.count <= 0 || message.count <= 0) {
        alert('Invalid name or message!');
        return;
    }
    if (webSocket == null) {
        alert('Connection not established yet.');
        return;
    }

    var chatData = {
        user: name,
        msg: message
    };

    webSocket.send(JSON.stringify(chatData));
    console.log('message sent');
}