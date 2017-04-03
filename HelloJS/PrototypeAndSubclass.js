
const log = console.log;


function MyClass(){
  // this.x = 'x in MyClass'
}
MyClass.prototype.x = 'x in MyClass.prototype';

function Foo(){
  this.x = 'x in Foo';
}

var obj = new MyClass();

log(obj.x)

obj.x = 'override x in obj'
log(obj.x)

log('obj.__proto__ : ', obj.__proto__) //直接输出该对象，不调用toString转成字符串。原理？
// log('obj.__proto__ : ' + obj.__proto__) //为了拼接字符串，会调用toString(),不好不好

log('Object.getPrototypeOf(obj) : ', Object.getPrototypeOf(obj))
log('obj.prototype : ', obj.prototype)
log('MyClass.prototype : ', MyClass.prototype)
log('obj.constructor : ' , obj.constructor)
log('obj.constructor.prototype : ' , obj.constructor.prototype)

// log(MyClass)
// log(MyClass.toString().prototype)
// log(String(MyClass))

// log(obj)
// log(obj.toString())
// log(String(obj)) //本质就是调用 obj.toString

log('x' in obj)

log(Object.getOwnPropertyDescriptor(obj,'x'))

String.prototype.test = 'Test'
var testObj = 'x'

function MyString (){}
MyString.prototype = new String()
var testObj2 = new MyString()


log('String: ' ,String)
log('String.prototype : ' ,String.prototype)
log('testObj.__proto__ : ' , testObj.__proto__)
log('testObj2.__proto__ : ' ,testObj2.__proto__)
log('testObj2.__proto__.__proto__ : ' ,testObj2.__proto__.__proto)

// -------------------------------------------------------------------


log('-------------------------------------------------------------------')

// 直接重写prototype，相当于创建了一个新的object赋值给prototype，所以这个object的constructor当然是Object啦！
function Base(){
  this.base = 'base value'
}
log(Base.prototype)
Base.prototype = {
  valueToDerive : 'Value to Derive' ,
  description : function description(){
    var desc = ''
    for (var variable in this) {
      if (this.hasOwnProperty(variable)) {
        desc += variable + ' : ' + this[variable] + '\n'
      }
    }
    return desc
  }
}
log(Base.prototype)
Base.prototype.constructor = Base
log(Base.prototype)

function Derived(val){
  Base()
  this.der = val
}
Derived.prototype = Object.create(Base.prototype , {
  description : {
    value : function desc(){
      var desc = Base.prototype.description.call(this)
      desc += 'Called in derived'
      return desc
    }
  }
})
Derived.prototype.constructor = Derived


var base = new Base()
log(base.base)
// log(base.description())

log('base.constructor : ' , base.constructor)
var der = new Derived('derived value')

log('der.constructor : ' , der.constructor)

// log(der.der)
// log(der.base)
// log(der.valueToDerive)
// log(der.description())
// log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(der),'description'))
// log('Base.prototype.des: ' , Object.getOwnPropertyDescriptor(Object.getPrototypeOf(base),'description'))


// -------------------------------------------------------------------
log('-------------------------------------------------------------------')
// Achieve privacy
function Person(name,gender){
  this.name = name
  this.gender = gender
  log(this)
}

Person.prototype = (function(){
// private var
  var saving = 0
  var password = ''
// private func
  function checkPassword(psw){

    return password == psw
  }
  return {
    constructor : Person,

    setAccount : function (psw ,money){
      password = psw
      saving = money

    } ,
    getAccountInfo : function (psw){
      // log(this)
      if(checkPassword(psw)){
         return 'Hi , ' + this.name + '  , Saving Left : ' + saving
      }else{
        return 'Incorrect password'
      }
    } ,
    spendMoney : function (psw,amount){
      if (checkPassword(psw)){
        if (saving >= amount){
          saving -= amount
          return 'Hi , ' + this.name + ' , Money well spent !'
        }else{
          return 'Not enough saving left ! '
        }
      }else{
          return 'Incorrect password'
      }
    }
  }
})()

const psw = '123'
var john = new Person('John','Male')
log(john.constructor)
john.setAccount(psw,500)
log(john.getAccountInfo('1234'))
log(john.getAccountInfo(psw))
log(john.spendMoney(psw,222))
log(john.spendMoney(psw,402))
log(john.getAccountInfo(psw))



// -------------------------------------------------------------------
log('-------------------------------------------------------------------')

function A(){
  this.a = 'a'
  function methodA() {}
}

function B(){
  // do something
  // this._init = A
  // this._init()
  // delete this._init

  A.call(this)
}

B.prototype = new A()
// B.prototype = (function(){
//   return{
//     a : 'a '
//   }
// })()
B.prototype.constructor = B

var b1 = new B()
var b2 = new B()

log(b1)
//
log(b1.a)
log(b2.a)

log(B.__proto__ === A)
log(B.__proto__ === A.prototype)
