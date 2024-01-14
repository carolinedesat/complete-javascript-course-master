'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name os Jonas');
}

// Calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1994);

console.log(age1, age2);

// ASSIGNMENTS

function describeCountry(country, population, capitalCity) {
    const str = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return str;
}

const brazil = describeCountry('Brazil', 214, 'Brasilia');
const ireland = describeCountry('Ireland', 5, 'Dublin');
console.log(brazil);
console.log(ireland);
console.log(describeCountry('Brazil', 214, 'Brasilia'));
console.log(describeCountry('Ireland', 5, 'Dublin'));

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const china1 = percentageOfWorld1(1411);
const india1 = percentageOfWorld1(1392);
const usa1 = percentageOfWorld1(335);

console.log(china1, india1, usa1);

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const china2 = percentageOfWorld2(1411);
const india2 = percentageOfWorld2(1392);
const usa2 = percentageOfWorld2(335);

console.log(china2, india2, usa2);