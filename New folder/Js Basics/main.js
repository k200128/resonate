// Scope of variables :-

// Block scope
// Function scope
// Global scope

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

/*CLOSURE*/
//  function outer (){
//      let counter =0;
//      function inner (){
//          counter++;
//          console.log(counter)

//      }
//     return inner;

//  }
// const fn = outer();
// fn();
// fn();

// // Function currying

// function sum(a,b,c){
//     return a+b+c;

// }
// console.log(sum(2,3,5))
// // sum(2,3,5)  sum((2)(3)(5))
// function curry (fn){
// return function (a){
//     return function(b){
//         return function(c){
//         return fn(a,b,c)
//         }

//     }
// }}

// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);
 
//this

//how to determine this 

//Implicit binding 
// const person = {
//     name : "parth",
//     sayMyName : function (){
//         console.log (`My name is ${this.name}`)
//     }
// }
// person.sayMyName()

// explicit binding 
// const person = {
//     name : "gaurav",
//     }
//     function sayMyName(){
//         console.log(`my name is ${this.name}`)
//     }
//     sayMyName.call(person);
// //  new binding
// function Person(name){
//     this.name = name;
// }
// const p1 = new Person("Parth");
// const p2 = new  Person ("Gaurav");
// console.log (p1.name, p2.name);
//  default binding 

// Prototype 

function person (fName, lName){
    this.firstName = fName;
    this.lastName = lName;

}
const person1 = new person('parth' , 'dumra');
const person2 = new person ('gaurav', 'dumra');

person1.getFullName = function() {
    return this.firstName + "" + this.lastName;
}
console.log (person1.getFullName())

// for making it work for all tye of person we use prototype

person.prototype.getFullName = function (){
    return this.firstName + "" + this.lastName;
}
console.log (person1.getFullName())
console.log (person2.getFullName())

// inheritance 

function SuperHero (fName, lName){
    person.call(this, fName,lName)
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function(){
    console.log("Fighting Crime")
}
SuperHero.prototype = Object.create(person.prototype)
const batman = new SuperHero('parth', 'dumra')

SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())

//Iterators and Iterables 

//for..of loop :-
const str = "parth";
for(const char of str){
    console.log(char);
}
 const arr = [1,2,3,4];
 for(const item of arr ){
     console.log (item);
 }