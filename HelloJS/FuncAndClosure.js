const log = console.log

doit()

function doit(){
  // fn() // crash
  // var fn = function(){log('fn()') }

  var doitValue = 1

  fn2()
  function fn2(){
    log('fn2()')
  }
}

//-------------------------------------------------------------------
function letScope(){
  'use strict'
  let x = 1
  {
    // log(x) // crash
    let x = 2
    log('letScope\'s x : ' ,x)
  }
}

letScope()
// -------------------------------------------------------------------


function varScope(){

  var x = 1
  inner()
  function inner(){
    log('varScope.inner \'s x : ' ,x)
    var x = 2
    log('varScope.inner \'s x : ' ,x)
  }

}

varScope()


// -------------------------------------------------------------------

var someFunc = function anomyous(){

}
log(someFunc)

function statFunc(){

}
someFunc = statFunc
log(someFunc)

// -------------------------------------------------------------------


function outer(){
  var outerValue = 1
  function inner(){
    log('Inner accessing outer : ' , outerValue)
  }
  return inner
}

outer()()

// -------------------------------------------------------------------
log('-------------------------------------------------------------------')


function MyButton(){
  this.callbackMap = {}
}
MyButton.prototype = (function(){
  function executeCallbacks(){
    log(this)
    for (var key in this.callbackMap) {
      if (this.callbackMap.hasOwnProperty(key)) {
        this.callbackMap[key](this)
      }
    }
  }
  return {
    constructor : MyButton ,

    registerCallBack : function(key ,func){
      this.callbackMap[key] = func
    } ,

    unregisterCallback : function(key){
      delete this.callbackMap[key]
    } ,

    toString : function(){
      return 'I Am MyButton'
    },

    _ : function(func){
      var btn = this
      return function(){ //arguments是函数隐藏的本地变量。
        return func.apply(btn,arguments)  //不用return也可以，只不过如果func有返回值，就无法返回了，所以这里要return
      }
    } ,

    onClick : function(){
      this._(executeCallbacks)()
      // executeCallbacks()
    }

  }
})()

function DerivedButton(){
  // MyButton()
}

DerivedButton.prototype = new MyButton()

DerivedButton.prototype.constructor = DerivedButton

//override
DerivedButton.prototype.toString = function (){
  var str = MyButton.prototype.toString.call(this)
  str += ' , But Im Derived'
  return str
}

var button = new MyButton()

button.registerCallBack('printhello',function(sender){
  log('hello ! ' , sender.toString())
})

button.registerCallBack('printbye',function(sender){
  log('bye , ' , sender.toString())
})

button.unregisterCallback('printhello')

log(button.callbackMap)

button.onClick()

var derivedButton = new DerivedButton()

derivedButton.registerCallBack('printhello',function(sender){
  log('hello ~ ' , sender.toString())
})

log(derivedButton.callbackMap)

derivedButton.onClick()

// -------------------------------------------------------------------
log('-------------------------------------------------------------------')

var go = function(){
  log(this.gocy)
}

var gocyone = {gocy:'gocy in one'}

go.call(gocyone)

var gocytwo = {gocy:'gocy in two'}

var gotwo = go.bind(gocytwo)

gotwo.call(gocyone) // bind优先级更高


// -------------------------------------------------------------------
log('-------------------------------------------------------------------')


function argTest(first , sec){
  log(arguments)
}

argTest(1,2,3)
