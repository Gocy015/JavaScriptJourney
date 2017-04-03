function registerButtonTap() {
    $('button.foo[name="addlink"]').click(
        function () {
            var myDiv = $('div#myjq_div.hehe');
            console.log(myDiv);
            if (myDiv.length <= 0) {
                $('<div><a></a></div>')
                    .attr('id', 'myjq_div')
                    .addClass('hehe') //return self (div)
                    .find('a') //return a 
                    .text('jQuery.com') // return self (a)
                    .attr('href', 'http://jQuery.com') // return self (a)
                    .attr('target', '_blank') // return self(a)
                    .end() // return parent (div)
                    .appendTo('body')
                    .bind('click', function () {
                        console.log('div clicked');
                    });
            }
            // var myDiv = $('div#myjq_div');
            // var myA = myDiv.find('a');
            // myA.text('Go to jQuery.com');
            // var ele = myA.end();
            // console.log(myA);
        }
    );

    // padding
    $('button.foo[name="addpadding"]').click(
        function () {
            $('body')
                .children('button[name][name!=""]')
                .html(function (index, oldStr) {
                    return oldStr + index;
                })
                .end()
        }
    );

    var namedBtn = $('button[name="named"]');
    // namedBtn.bind('click', function (event) {
    //     alert('What do you want');
    // });
    // namedBtn.bind({ // a dict to bind events
    //     'mouseover': function () {
    //         // this.value = 'Hi ~';
    //         $(this).text('Hi ~');
    //     },
    //     'mouseleave': function (event) {
    //         $(this).text('Bye ~');
    //     },
    //     'click': function () {
    //         console.log('unbind')
    //         $(this).unbind(); // unbind everything,including self
    //     }
    // });

    function namedClicked(event) {
        console.log(event.data.name);
    }

    function namedOver(event) {
        console.log('named over');
    }

    function namedLeave(event) {
        console.log('named out');
    }
    namedBtn.on('click', {
        'name': "my data"
    }, namedClicked);


    //https://www.w3schools.com/jquery/event_on.asp
}

function initialize(s) {
    function buttonTapped(event) {
        console.log(event.currentTarget.innerHTML);
        console.log(event.data.desc());
    }

    $('body').on("click", "button[name][name!='']", {
        desc: function () {
            return new Date();
        }
    }, buttonTapped);

    var addButton = (function _genCreatetor() {
        var counter = 1;
        var prevButton = undefined;
        return function () {
            if (prevButton == undefined) {
                prevButton = $(this);
            }
            prevButton = $("<button></button>")
                .text('creator' + counter)
                .attr('name', 'creator' + counter)
                .insertAfter(prevButton)
                .hide(0) //只能这么蠢？好吧也不是很蠢，ios也是alpha先搞成0
                .show(220, "linear");
            counter++;
        }
    })();
    $("#ButtonCreator").on('click', addButton);
}

function addAJAX() {
    $('#get_hupu').on('click', doAJAX);
    $(document).ajaxStart(_onAjaxStart);
    $(document).ajaxStop(_onAjaxStop);

    function _onAjaxStart() {
        console.log('ajax started');
    }

    function _onAjaxStop() {
        console.log('ajax stopped');
    }
}

function doAJAX() {
    $.ajax("../Resources/Gocy - 知乎.htm", {
        type: 'GET',
        success: function (data, status, xhr) {
            console.log(data);
            // console.log(status);
            // console.log(xhr);
            console.log('ajax1 success;')
        },
        error: function (xhr, status, err) {
            // console.log(xhr);
            // console.log(status);
            // console.log(err);
            console.log('ajax1 failed;')
        },
        global: true
    });
    $.ajax("../Resources/Gocy - 知乎.htm", {
        type: 'GET',
        success: function (data, status, xhr) {
            // console.log(data);
            // console.log(status);
            // console.log(xhr);
            console.log('ajax2 success;')
        },
        error: function (xhr, status, err) {
            // console.log(xhr);
            // console.log(status);
            // console.log(err);
            console.log('ajax2 failed;')
        },
        global: true //false ,document.ajaxXXXX will not triggered by this
    });

}


function testDefer(success, succ) {
    var longTermOp = function () {

        var d = $.Deferred();
        setTimeout(function _opDone() { // fetch or sth.
            if (success == true) {
                d.resolve('success', ['op1 succ']);
            } else {
                d.reject('failed', ['op1 failed']);
            }
        }, 200);

        return d.promise();
    }
    var longTermOp2 = function (code, op1Args) {

        var d = $.Deferred();
        setTimeout(function _opDone() { // fetch or sth.
            if (succ == true) {
                d.resolve('success', op1Args.concat(['op2 succ']));
            } else {
                d.reject('failed', op1Args.concat(['op2 failed']));
            }
        }, 200);

        return d.promise();
    }

    longTermOp()
        .pipe(longTermOp2)
        .done(function _opSuccess(code, args) {
            console.log(code);
            console.log(args);
        })
        .fail(function _opFailed(code, args) {
            console.log(code);
            console.log(args);
        })
        .always(function _opComplete(code, args) {
            console.log('opCompleted with code : ', code);
            console.log(args);
        });
}

function addTipsy() {

    $("button#show_me_tip").attr('tipMsg', 'Tips for u');

    $("button#show_me_tip").tipsy({
        title: 'tipMsg',
        fade: true,
        gravity: 'w'
    });


}

$(document).ready(function () {
    console.log('$0');
});

window.onload = function () {
    console.log('onload');
    // registerButtonTap(); 
    initialize();
    addAJAX();
    testDefer(true, false);
    addTipsy();
}


$(function () {
    console.log("$1");
});