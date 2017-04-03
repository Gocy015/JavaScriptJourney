$(document).ready(function _ready() {
    $('<p></p>')
        .text('Data From Main : ' + localStorage.mydata)
        .appendTo($('body'));
    $(window).on('storage', _storageChanged); // not firing
});

function _storageChanged(event) {
    console.log(event);
}