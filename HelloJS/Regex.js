const log = console.log;


/*
旗标：
g 全局旗标，使用之后，会在多次调用 exec 的时候寻找下一个匹配。
i ignore cases
m 多行模式。

*/

var str = 'aBc def ghi jkl';

var regex = /([a-z]+)\s([a-z]+)/g;

// log(regex.exec(str));

while(true){
  var result = regex.exec(str);
  if (result != null){
    for (val of result) {
      log(val);
    }
    log("------------");
  }else{
    break;
  }
}

log(str.match(regex)); //[ 'c def', 'ghi jkl' ]
log(str.replace(regex,"厉害"));
log(str.split(regex)); //[ 'aB', 'c', 'def', ' ', 'ghi', 'jkl', '' ] 看不懂了
log(str.split(regex,2)); //[ 'aB', 'c' ] 仅仅起截取作用。
log(str.search(regex)); //first index.


var htmlText = "<div id = someid><div class = someclass>adsfasdfadf< div zname = havefun ><p></p></div></div></div>";

var htmlRegex = /<(\s*)div([^=]*)=([^>]*)>/g;
log(htmlText.replace(htmlRegex,"<$1段落的$2是$3>"));
