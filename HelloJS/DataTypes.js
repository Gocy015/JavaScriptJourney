const log = console.log
// var scope
// var myvar = "my value";
//
// (function() {
//   log(myvar) // undefined ?
//   var myvar = "local value"
//   log(myvar)
// })();
//
// log(myvar)


//func & var declaration
//先声明 func ，再 var， var 覆盖 func ， 但反过来就有问题
// var f = 5
//
// function f(){log('1')}
//
// var f
//
// log(f)
//
// log(f())


//array syntax
var myList = [ , 'home', , 'school',];

log(myList.length)


// "object syntax"
// var foo = {a: "alpha", 2: "two"};
// console.log(foo.a);    // alpha
// console.log(foo[2]);   // two
// //console.log(foo.2);  // Error: missing ) after argument list
// //console.log(foo[a]); // Error: a is not defined
// console.log(foo["a"]); // alpha
// console.log(foo["2"]); // two


var myProperty = {
  "computers" : {1 : '\u00A9 PS4' , one : 'Laptop'}
}

log(myProperty.computers[1])
log(myProperty.computers['1'])
log(myProperty.computers.one)

// 在ES2015，对象字面值扩展支持在创建时设置原型，简写foo：foo分配，定义方法，加工父函数（super calls），计算属性名(动态)。总之，这些也带来了对象字面值和类声明紧密联系起来，让基于对象的设计得益于一些同样的便利。
//
// var obj = {
//     // __proto__
//     __proto__: theProtoObj,
//     // Shorthand for ‘handler: handler’
//     handler,
//     // Methods
//     toString() {
//      // Super calls
//      return "d " + super.toString();
//     },
//     // Computed (dynamic) property names
//     [ 'prop_' + (() => 42)() ]: 42
// };
