'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

const caroline = new Person('Caroline', 1994);
console.log(caroline);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically returns {}

const conn = new Person('Conn', 1996);
const sarah = new Person('Sarah', 2014);
console.log(conn, sarah);

console.log(caroline instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

caroline.calcAge();
conn.calcAge();
sarah.calcAge();

console.log(caroline.__proto__);
console.log(caroline.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(caroline)); // true
console.log(Person.prototype.isPrototypeOf(conn)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(caroline.species, conn.species);

console.log(caroline.hasOwnProperty('firstName')); // true
console.log(caroline.hasOwnProperty('species')); // false
