const log = console.log;

var op = new Promise(function (resolve,reject){

  log('Begin Sleep , ' + new Date());
  setTimeout(function(){

    resolve("Success");
  },3000);

  setTimeout(function(){
    reject("Failed");
  },2500); // resolve / reject 之后不会再往下走

})

op.then(function fulfilled(val){
  log("Fullfilled with " + val);
}).catch(function rejected(val){

    log("Rejected in catch with " + val);
});
