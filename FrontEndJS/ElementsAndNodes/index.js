// window.onload = function windowOnload(){
//     console.log('onload');
// }
const log = console.log;

(function _gets()
{
    return ;
    var docElement = document.documentElement;
    var myDiv = document.getElementById('gocy_div');
    var divs = document.getElementsByTagName('div');
    
    var allSpans = document.getElementsByTagName('span');
    var cySpans = myDiv.getElementsByTagName('span');

    log(allSpans.length);

    var newSpan = document.createElement('span');
    docElement.appendChild(newSpan);

    log(allSpans.length);

    log('-----------------------------------------------------------');
})();

(function _nodeHierarchy(){
    return;
    var docBody = document.body;
    var subnodes = docBody.childNodes;
    log('print subnodes:\n',subnodes); //会包含空白字符。NodeList

    var children = docBody.children;
    log('print children:\n',children); // HTMLCollection.还包含所有children的属性
                                        // 很神奇：print children，其中的div元素是object形式
    log('print children.gocy_div:\n',children.gocy_div); //直接print children[0] 或者这样，都直接输出innerHTML

    // log('childElementCount : ' + docBody.childElementCount);

    // xpath
    var res = document.evaluate('//body/div[contains(@class , "gocy_class")]',document.documentElement,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
    log(res);
    for(i = 0 ; i < res.snapshotLength ; ++i){
        var match = res.snapshotItem(i); //getter func
        log(match);
    }

    var selectorExp = '*.gocy_class';
    // selector
    var elem = document.querySelector( //get first match
        // 'div#someRanDiv > span > input[name="usernameInput"]'
        selectorExp
    );
    log('selector: ' + selectorExp + '\n' ,elem);

    log('-----------------------------------------------------------');
})();



(function _nodeManagement(){
    return ;
    var doc = document.documentElement;
    log('document : \n',doc.innerHTML);

    var newGocyClass = '<div class = "new_gocy_class">\nnew gocy class comes here\n</div>';


    var gocyNodes = document.querySelectorAll('div.gocy_class');
    // log(gocyclasses.innerHTML);
    log(gocyNodes);
    // gocyNodes.parentNode.replaceChild(newNode,gocyNode);
    for(i = 0 ; i < gocyNodes.length ; ++i){
        var gocyNode = gocyNodes[i];
        
        var newNode = elementFromHTMLText(newGocyClass); // by ref
        gocyNode.parentNode.replaceChild(newNode,gocyNode);
    }
    
    var frag = document.createDocumentFragment();
    log('frag : \n',frag);
    for(i = 0 ; i < 5 ; ++i){
        var newDiv = document.createElement('div');
        newDiv.className = 'new_added';
        newDiv.innerHTML = 'I am new div number' + i;
        frag.appendChild(newDiv);
    }
    document.body.appendChild(frag);
    
    log('altered document : \n',doc.innerHTML);
})();



(function _performance(){
    return ;
    var docElement = document.documentElement;

    for (i = 0 ; i < 1000 ; ++i){
        var newSpan = document.createElement('span');
        docElement.appendChild(newSpan);
    }

    var spanList = document.getElementsByTagName('span');

    console.time('for loop on span list');
    for( i = 0 ; i < spanList.length ; ++i){
        // spanList[i];
    }
    console.timeEnd('for loop on span list');

    console.time('convert list to array');
    // var spanArray = Array.from(spanList);
    var spanArray = Array.prototype.slice.call(spanList);
    console.timeEnd('convert list to array');

    console.time('for loop on span array');
    for( i = 0 ; i < spanArray.length ; ++i){
        // spanArray[i];
    }
    console.timeEnd('for loop on span array');

    console.time('foreach on span array');
    spanArray.forEach(function (val,idx,arr){
        val;
    },this);
    console.timeEnd('foreach on span array');

    log('-----------------------------------------------------------');
})();



function elementFromHTMLText(html) {
    var temp = document.createElement('template');
    temp.innerHTML = html;
    return temp.content.firstChild;
}