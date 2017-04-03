$(document).ready(function _docReady() {
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;

    var db = null;
    var openRequest = indexedDB.open('testDB', '3'); // 一旦升级了版本，回不去了
    openRequest.onsuccess = function _openRequestSucceed(event) {
        db = event.target.result;

        console.log(db);

    };
    openRequest.onerror = function _openRequestError(event) {
        alert('Open testDB failed');
        console.log(event);
    }

    openRequest.onupgradeneeded = function _upgradeNeeded(event) {
        console.log('need upgrade');
    }
})