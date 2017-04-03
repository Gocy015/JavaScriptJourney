function initTouchEvent() {
    var foo = document.getElementById('foo');
    foo.addEventListener('click',
        function _fooClicked(event) {
            var msg = document.getElementById('message');
            if (event.target === msg) {
                return;
            }
            var pos = getPosition(event);
            msg.style.left = pos.x + 'px';
            msg.style.top = pos.y + 'px';
            console.log(pos);
        });
}

function getPosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    var r = event.target.getBoundingClientRect();
    x -= r.left;
    y -= r.top;
    return {
        x: x,
        y: y
    };
}

window.onload = initTouchEvent;