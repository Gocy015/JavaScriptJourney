$(document).ready(function () {
    var body = $("body");

    $('li').each(function _each_li(idx, ele) {
        ele.ondragstart = function (evt) {
            evt.dataTransfer.setData('text/plain', evt.target.textContent);
            evt.dataTransfer.setData('text/uri-list', document.location.href);
            if (idx == 0) {
                var img = new Image();
                img.src = 'https://s-media-cache-ak0.pinimg.com/236x/ac/44/63/ac4463fca083250d38b13a02588245d9.jpg';

                evt.dataTransfer.setDragImage(img, 0, 0);
            }
        };

    })

    var drophere = $('div#drop_here')
        .on(
            'dragover',
            function _ondragover(evt) {
                // console.log('drag over ', event);
                var event = evt.originalEvent;
                event.preventDefault();
                for (var i = 0; i < event.dataTransfer.types.length; ++i) {
                    if (event.dataTransfer.types[i] === 'text/plain') {
                        event.preventDefault();
                        break;
                    }
                }
            }
        )
        .on(
            'drop',
            function (event) {
                var evt = event.originalEvent;
                var data = evt.dataTransfer.getData('text/plain');
                // console.log('data : ', data);
                if (data.length) {
                    alert('what you dropped is ' + data);
                } else {
                    if (evt.dataTransfer.files.length > 0) {
                        var body = $('body');
                        for (var i = 0; i < evt.dataTransfer.files.length; i++) {
                            var file = evt.dataTransfer.files[i];
                            if (String(file.type).startsWith('image')) {
                                console.log(file);
                                var reader = new FileReader();

                                var blob = file.slice(0, file.size / 2);

                                reader.onload = function _readComplete(e) {
                                    var imgNode = $('<img></img>')
                                        .addClass('drop-img')
                                        .appendTo(body);
                                    console.log(e.target.result); //data:image/png(MIME);base64,(base64 data str)
                                    imgNode.attr('src', e.target.result);
                                };
                                reader.onerror = function _readError(e) {

                                };

                                // reader.readAsDataURL(blob);
                                reader.readAsDataURL(file);
                            }
                        }
                        evt.preventDefault();
                    }
                }
            }
        )
        .on('dragenter',
            function _ondragenter(evt) {
                $(this).removeClass('droppable-leave');
                $(this).addClass('droppable-enter');
                // $(this).css('background-color', 'red');
            })
        .on('dragleave',
            function _ondragleave(evt) {
                $(this).removeClass('droppable-enter');
                $(this).addClass('droppable-leave')
            })
        .on('drop',
            function _ondragleave(evt) {
                $(this).removeClass('droppable-enter');
                $(this).addClass('droppable-leave')
            });
    // jq传进来的参数是r.Event类型， 而不是DragEvent

    $('input#file-selector').on({
        change: function _selectorChange(event) {
            var e = event.originalEvent;
            var file = e.target.files[0];
            console.log(file.name);
        }
    });

    $('#gen-blob').click(function _genBlob() {
        var data = btoa('<h1>Hello ,World!</h1>');
        // document.location.href = 'data:text/html.base64,' + data;

    });

});