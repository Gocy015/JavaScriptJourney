console.time('jsExecutionTime');

var hello = 'Hello , JavaScript! I am back again !'

console.log('console.log');

console.debug('console.debug');

document.write(hello + '<br>');
window.onload = function () {
  // body...
  console.timeEnd('jsExecutionTime');
  // var btn = document.getElementById('id_mybutton');
  var btn = document.getElementById('id_mybutton');
  btn.onclick = function () {
    buttonClick(this)
  };

  btn.addEventListener('click', function listener(event) {
    console.log("Event Listener Called : " + event);
  });

}

function buttonClick(btn) {
  // console.log(btn.id);
  // console.trace();
  // console.dir(btn);
  // console.dirxml(btn);
  // console.count('Btn Click Count');

  // (function () {
  //   console.log('Call anoynmous with no name');
  //   (function _click() {
  //     console.log('Call anoynmous named click');
  //   })();
  // })();

  console.log('location.href : ' + location.href);
  console.log('document.cookie : ' + document.cookie)

  // console.log(navigator.userAgent.indexOf('MSIE')); // -1
  // console.log(window.navigator === navigator); // true
}