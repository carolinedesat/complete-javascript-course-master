'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);

const flight = 'LH234';
const caroline = {
  name: 'Caroline de Sa Teixeira',
  passport: 420534957,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 420534957) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, caroline);
// console.log(flight);
// console.log(caroline);

// Is the same as doing...
// const flightNum = flight;
// const passenger = caroline;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(caroline);
checkIn(flight, caroline);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Caroline', 'Fernanda', 'Valdete'].forEach(high5);

// My higher-order function

const items = ['Juice', 'Milk', 'Chicken'];

const removeLastItem = function () {
  return items.pop();
};

const shoppingList = function (fn) {
  console.log(`My items: ${items}`);
  console.log(`Removed items: ${fn()}`);
  console.log(`Modified by: ${fn.name}`);
};

shoppingList(removeLastItem);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Caroline');
greeterHey('Conn');

greet('Hello')('Caroline');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greetArr('Hey');
greeterHey('Caroline');
greeterHey('Conn');

greetArr('Hello')('Caroline');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Caroline de Sa Teixeira');
lufthansa.book(635, 'Conn Hannigan');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Valdete Tavares de Sa');

// Call method
book.call(eurowings, 23, 'Valdete Tavares de Sa');
console.log(eurowings);

book.call(lufthansa, 239, 'Fernanda de Sa Teixeira');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Sarah de Sa Araujo');
console.log(swiss);

// Apply method
const flightData = [583, 'Sarah de Sa Araujo'];
book.apply(swiss, flightData);
console.log(swiss);

// Same as the apply methods above
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Antonio de Souza Teixeira');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Caroline de Sa Teixeira');
bookEW23('Conn Hannigan');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this)

  this.planes++;
  console.log(this.planes)
}
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (pre set parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT = addTax(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
*/

//////////////////////////////////////////////////

// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(prompt('What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)'));
  },
};

poll.registerNewAnswer();