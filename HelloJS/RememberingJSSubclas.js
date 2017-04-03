const log = console.log;

var person = {
  name : "person",
  age : 0,
  greet : function(){
    log('My name is ' + this.name + ' ,at the age of ' + this.age);
  }
};

var john = Object.create(person);
log(person)
log(john);
person.name = 'human';
john.greet();
john.name = "john";
john.age = 30;
john.greet();


function Person(name){
  this.name = name;
}
Person.prototype.greet = function(){ log("Hi ,my name is " + this.name)};

// var harold = new Person('harold');
var harold = makePerson('harold')
log(harold);

log(Object.getPrototypeOf(harold));
harold.greet();

function makePerson(name){
  var person = Object.create(Person.prototype);
  // person.name = name;
  Person.call(person,name);
  return person;
}



var root = makePerson('root');
root.greet();

log(root.__proto__);



function Male(name){
  Person.call(this,name);
  this.gender = 'male';
}
Male.prototype = Object.create(Person.prototype);
Male.prototype.introduce = function (){log("I am a male !")};
Male.prototype.constructor = Male;
var fusco = new Male('Fusco');
fusco.greet();
fusco.introduce();

log(fusco);
log(Male.prototype);
log(Person.prototype);
