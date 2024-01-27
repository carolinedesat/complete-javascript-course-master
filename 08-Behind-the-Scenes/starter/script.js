'use strict';

/*function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, You are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Conn';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Caroline';
calcAge(1994);

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Caroline';
let job = 'IT Specialist';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(1994);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAgeArrow(1996);

const caroline = {
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

caroline.calcAge();

const conn = {
  year: 1996,
};

conn.calcAge = caroline.calcAge;
conn.calcAge();

const f = caroline.calcAge;
//f();

//var firstName = 'Conn';

const caroline = {
  firstName: 'Caroline',
  year: 1994,
  calcAge: function () {
    //console.log(this);
    console.log(2024 - this.year);

    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

caroline.greet();
caroline.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

let age = 29;
let oldAge = age;
age = 30;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Caroline',
  age: 29,
};
const friend = me;
friend.age = 32;
console.log('Friend:', friend);
console.log('Me:', me);*/

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const pamela = {
  firstName: 'Pamela',
  lastName: 'Lima',
  age: 32,
};

const marriedPamela = pamela;
marriedPamela.lastName = 'Teixeira';
console.log('Before marriage:', pamela);
console.log('After marriage:', marriedPamela);

//marriedPamela = {};

//Copying objects
const pamela2 = {
  firstName: 'Pamela',
  lastName: 'Lima',
  age: 32,
  family: ['Valdete', 'Antonio'],
};

const pamelaCopy = Object.assign({}, pamela2);
pamelaCopy.lastName = 'Teixeira';

pamelaCopy.family.push('Fernanda');
pamelaCopy.family.push('Sarah');

console.log('Before marriage:', pamela2);
console.log('After marriage:', pamelaCopy);
