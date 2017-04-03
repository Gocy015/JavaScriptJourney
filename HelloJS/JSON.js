const log = console.log;


var obj = {
  x : 1,
  y : 2,
};

var jsonRep = JSON.stringify(obj); //  不属于6中类型的属性不会被stringify。
log(jsonRep);

var parsed = JSON.parse(jsonRep);
log(parsed);

for (prop in obj) {
  log(prop);
}


// -----------------------------------------------------------

log("-----------------------------------------------------------");

var alteredParse = JSON.parse(jsonRep,function(key,value){
  log(key + " = " + value) //会输出一个obj是什么鬼。
  if (typeof value == 'number'){
    return value * 2;
  }
  return value;
});

log(alteredParse);

var alteredRep = JSON.stringify(obj,function(key,val){
return val;
},"?");

log(alteredRep);


// -----------------------------------------------------------
log("-----------------------------------------------------------");

var dt = new Date();
// log(dt.getTime());
// log(Date.now());
// log(dt.getTimezoneOffset());

// log(dt.toLocaleDateString())
log(dt.toLocaleTimeString())

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(2000).then(function (){

  var timeElapsed = Date.now() - dt.getTime();

  log(timeElapsed / 1000);
});


// async function demo() {
//   console.log('Taking a break...');
//   await sleep(2000);
//   console.log('Two second later');
// }
//
// demo();
