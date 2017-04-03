const print = console.log

function Person(){
  var privateVal = 'private value'
  this.name = 'Unknown'
  function privateMethod(){
    print(this.name)
    print(privateVal)
  }

  this.publicMethod = function(){
    privateMethod.call(this)
  }

  this.publicMethod2 = function(){
    this.publicMethod()
  }
}

var john = new Person()
john.publicMethod2()
// -----------------------------------------------------------

// function Event(){
//   this.status = false
//   // this.listener = undefined //无需显示赋值为undefined
//   this.trigger = function(){
//     this.status = true
//     this.listener(this)
//   }
// }
//
// function Listener(){
//   this.handle = function(success){
//     print(success == true ? 'success' : 'failed')
//   }
//   this.listen = function(toEvt){
//     var handleByMe = this.handle.bind(this)
//
//     toEvt.listener = function(evt){
//       handleByMe(evt.status)
//     }
//   }
// }
//
// var evt = new Event()
// var listener = new Listener()
//
// listener.listen(evt)
// evt.trigger()


// -----------------------------------------------------------


// function SimpleClass(){
//   this.val = "I am a javascript instance"
//   this.log = function(){
//     print(this.val)
//   }
// }
//
// function globalLog(){
//   print(this.val)
// }
// globalLog()
//
// var simple = new SimpleClass()
// simple.log()
//
// simple.log = function(){
//   print("new log , " + this.val)
// }
//
// simple.log()
