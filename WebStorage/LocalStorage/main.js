$(document).ready(function _docReady() {

    //localStorage only supports string
    localStorage.mydata = JSON.stringify([]);

    $("<button></button>")
        .text('Jump')
        .on('click', function _jump() {
            // location.href = 'sub.html' //相对路径还是绝对路径，取决于url。
            // 给个真的网址 https:// 它就直接绝对路径跳了
            window.open('sub.html', '_blank');
        })
        .css('display', 'block')
        .appendTo($('body'));

    var input = $('<input>')
        .attr('type', 'text')
        .attr('id', 'data_input')
        .css('display', 'block')
        .appendTo($('body'));

    $("<button></button>")
        .text('Add Data')
        .on('click', function _addData() {
            console.log('Push ' + input.val());
            var data = JSON.parse(localStorage.mydata);
            data.push(input.val());
            localStorage.mydata = JSON.stringify(data);
        })
        .css('display', 'block')
        .appendTo($('body'));
})