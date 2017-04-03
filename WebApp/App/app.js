$(document).ready(function _docReady() {
    createDivs();
});

function createDivs() {
    var body = $("body");

    var docFrag = document.createDocumentFragment();

    var menu = $("<div></div")
        .addClass('menu')
        .appendTo(docFrag);

    for (i = 0; i < 5; ++i) {
        $("<div></div>")
            .addClass('page')
            .attr('name', i + 1)
            .text(i + 1)
            .css('background-color', randomColor())
            .appendTo(docFrag);

        $("<button></button>")
            .text("Go to page " + (i + 1))
            .addClass('jumpButton')
            .attr("id", i + 1)
            .appendTo(menu)
            // .height('10px')
            // .width('120px')
            .on('click', function (event) {
                menuItemClicked(event.currentTarget);
            });

    }
    $("<button></button>")
        .text('change url')
        .on('click', function _changeUrl() {
            window.history.pushState({
                dataFromThisPage: "dataFromThisPage"
            }, 'search', window.location.href + '/search')
        })
        .appendTo(menu);

    $("<button></button>")
        .text('log history')
        .on('click', function _changeUrl() {
            console.log(window.history);
        })
        .appendTo(menu);

    body.append(docFrag);
}

function menuItemClicked(item) {
    // gotoPage(item.id);
    window.location.hash = "page=" + item.id;
}

window.onhashchange = function _windowHashChanged() {
    var page = window.location.hash.match(/page=([0-9]+)/)[1];
    //arr[0] is the whole matched str ,followed by capture groups
    if (!isNaN(page)) {
        gotoPage(page);
    }
}

window.onpopstate = function _windowPopstateChanged() {
    var pathnames = location.pathname
    // console.log(pathnames)
    // console.log(history.state); 
}

function gotoPage(p) {
    var page = $("div.page[name='" + p + "'")[0];
    // page.scrollTop = 0;
    var offset = 364 * (p - 1);
    $("body").animate({
        scrollTop: offset
    }, 800);
    // console.log("To Page ", p);

}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}