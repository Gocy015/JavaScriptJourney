const log = console.log

var arr = ['one' , 'two' , , 'four']

arr.forEach(function(element,index,arr){ //仅仅遍历有效元素
  log('element ' + element + ' at ' + index + ' in ' , arr)
  // arr.splice(index,1) //会出错，不会智能地“往前遍历”

})

for (element of arr) { //undefined 也会遍历
  log(element)
}


// -------------------------------------------------------------------
log('-------------------------------------------------------------------')


var numArr = [1,3,0,4,7]
numArr.sort(function(a,b){return b-a})
log(numArr)
Object.freeze(numArr)
// numArr.sort() // read-only


// -----------------------------------------------------------
log('-----------------------------------------------------------')

var originArr = [1,3,2]
var anotherArr = originArr // anotherArr 和 origin 指向同一个数组空间
anotherArr[0] = 0
log(originArr) //被改变。

var sliceArr = [].slice(0,originArr.length) // concat 也是类似的。
sliceArr[0] = 100
log(originArr) // 没被改变。 sliceArr 和 origin指向不同空间

var objArr = [{x:2}]
var sliceObjArr = [].concat(objArr)

sliceObjArr[0].x = 66

log(objArr)// changed

sliceObjArr[0] = {x:99}

log(objArr) // not changed
// 和 oc 中单层深复制一样的。


// -----------------------------------------------------------
log('-----------------------------------------------------------')

var arrToIterate = ['zero','one','two']

// log(arrToIterate[Symbol.iterator])

var it = arrToIterate[Symbol.iterator]() // iterator 是内建的。。,没发现能 new Iterator(arr,true)
log(it.next())

for (var obj of it){
  log(obj)
}

// -----------------------------------------------------------
log('-----------------------------------------------------------')


function * loop_generator(){
  for (var j = 0 ; j < 5 ; ++j){
   var reset = yield j// yield xxx ，相当于执行 next的时候，返回 xxx
   if (reset){
     j = -1
   }
  }
}

var gen = loop_generator()
// for (var item of gen){
//   log(item)
// }

log(gen.next())
log(gen.next())
log(gen.next(false))
log(gen.next(true))
