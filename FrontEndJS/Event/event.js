function eventChains() {

    const log = console.log;
    var button = document.querySelector('div > span > button[type="mybut"]');
    button.addEventListener('click',
        function _buttonDidClick1(event) {
            log('button click 1 , bubble');
            // event.stopImmediatePropagation();
            // event.stopPropagation();
            // log(event);
        },
        false)
    button.onclick = function _myButtonClicked(event) {
        log('onclick');
        // log(event);
    }
    button.addEventListener('click',
        function _buttonDidClick2() {
            log('button click 2 , bubble');
        },
        false);
    button.addEventListener('click',
        function _buttonWillClick() {
            log('button will click , capture');
        },
        true);
    window.addEventListener('click',
        function _windowWillClick(event) {
            log('window will click');
            log(event); // 打断点，某些值显示才是正确的。（比如 currentTarget）
            // 我也不知道为什么打印出来的会变，估计是直接打出来对象的引用了
        },
        true);

    window.addEventListener('click',
        function _windowDidClick(event) {
            log('window did click');
            log(event); // 隐式参数
        },
        false);
}

function mouseMoveEvent() {
    const log = console.log;
    var btn = document.querySelector('button[type = "mybut"]');

    btn.addEventListener('mousemove',
        function _mousemove(event) {
            console.count('mouse move');
        });

    btn.addEventListener('mouseenter',
        function _mouseenter(event) {
            console.count('mouse enter');
        });


    btn.addEventListener('mouseover',
        function _mouseover(event) {
            console.count('mouse over');
        });

    btn.addEventListener('mouseout',
        function _mouseout(event) {
            console.count('mouse out');
        });

    btn.addEventListener('mouseleave',
        function _mouseleave(event) {
            console.count('mouse leave');
        });

}

window.onload = mouseMoveEvent;