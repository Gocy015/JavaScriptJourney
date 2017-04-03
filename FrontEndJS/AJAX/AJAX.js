var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function _readyStateChange(evt) {
    console.log('readyState : ', this.readyState);
    console.log('status : ', this.status);
    // console.log(evt);
    if (this.readyState == 4) {
        // document.body.innerHTML = this.responseText;
        console.log(this.responseText);
    }
};

xhr.open('GET',
    'http://voice.hupu.com/nba/2125130.html',
    true);
// xhr.setRequestHeader('If-Modified-Since', Date.now().toString());
// xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
// xhr.setRequestHeader('Origin', 'https://www.baidu.com');
xhr.send(null);