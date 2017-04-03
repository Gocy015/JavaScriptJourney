
const log = console.log


var x = 1
{
  var x = 2
}
log(x.toString(2))

log(isEqual(1,'1'))


function isEqual(a,b){
  if (Number(a) == NaN || Number(b) == NaN){
    return a === b
  }

  return Number(a) == Number(b)
}

//label

labelOuterLoop:
while (true){
  'use strict'
  log('Outer')
  var inner = 2
  for (var i = 0; i < 2; i++) {
    log('Inner')
    break labelOuterLoop
  }
  log('After Inner')
}



// for in loop
function dump_props_through_key(obj, obj_name) {
  var result = "";
  for (var i in obj) {
     result += obj_name + "." + i + " = " + obj[i] + "\n";
  }

  return result;
}

// for .. of 只能用于可迭代对象(数组？) http://www.infoq.com/cn/articles/es6-in-depth-iterators-and-the-for-of-loop
// function dump_props_through_value(obj){
//   var result = "";
//   for (item of obj) {
//     result += item + '\n'
//   }
//   return result;
// }

var car = {}
car.make = 'Ford'
car.model = 'Mustang'

log(dump_props_through_key(car,'car'))



//exception
function Person(name,birth){
  this.name = name
  this.age = new Date().getFullYear() - Number(birth)

  function PersonException_HasNoName(){
  this.msg = 'This guy has no name !'
}

  function PersonException_NoAPerson(){
  this.msg = 'That\'s not a person at all'
}

//所以这里instanceof更像是一个运算符
  this.sayHi = function (to){
    var name = to instanceof Person ? to.name : undefined
    if (!name){
      throw new PersonException_NoAPerson()
    }
    if (name.length <= 0){
      throw new PersonException_HasNoName()
    }
    log("Hi , " + name + " , my name is " + this.name + " at the age of " + this.age.toString())
  }
}

try{

  var john = new Person('John' , 1990)
  var harold = new Person('Harold',1992)
  john.sayHi(harold)

  var john = new Person('John',1994)
  john.sayHi('Lionel')

} catch (e){
  log(e.msg)
}



//这里的全局this没指向window，指到一个空Obj了，而这里的上下文又不知道是哪里
//this scope
var Inner = function(){
  this.a = 0
  this.b = 0
}

//对象字面量不能new
// var Inner = {
//   x : 0,
//   y : 0
// }

var outerObject = {
  x : 0,
  y : 0,
  moveTo : function(x,y){
    //work as expected ， 相当于 outerObject.moveTo() ，上下文是outerObject
    // this.x = x
    // this.y = y

    //-------------------------------------------------------------------
    // var x = 0
    // var y = 0
    // //相当于outerObject.moveTo.moveX/Y()，上下文是global ? 而不是moveTo
    // var moveX = function(x){
    //   this.x = x
    // }
    // var moveY = function(y){
    //   this.y = y
    //   // log(this)
    //   // log(this === global) // this is global
    // }
    //
    // moveX(x)
    // moveY(y)


    // -------------------------------------------------------------------

    log(this)
    this.innerObject.a = x
    this.innerObject.b = y
  },
  innerObject : new Inner()

}

outerObject.toString = function() {
  var me = 'x : ' + this.x + ' , y : ' + this.y
  var inner = 'inner.a : ' + this.innerObject.a + ' , inner.b : ' + this.innerObject.b

  return me + '\n' + inner
}
outerObject.moveTo(1,1)
log(outerObject.toString())

// -------------------------------------------------------------------
var objA = {
  x : 0 ,
  y : 0
}
var objB = new function(){
  this.x = 0
  this.y = 0
}
log(objA)
log(objB)

log(objA == objB)
log(objA === objB)

// -------------------------------------------------------------------
