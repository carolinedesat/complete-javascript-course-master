'use strict';

/*let hasDriversLicense = false;
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

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1994, 'Caroline'));
console.log(yearsUntilRetirement(1950, 'Conn'));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // Finds the last value

friends[2] = 'Jay';
console.log(friends);

const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);*/

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// ASSIGNMENTS

/*function describeCountry(country, population, capitalCity) {
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

const percentageOfWorld3 = population => (population / 7900) * 100;
const china3 = percentageOfWorld3(1411);
const india3 = percentageOfWorld3(1392);
const usa3 = percentageOfWorld3(335);
console.log(china3, india3, usa3);

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation('Brazil', 214));
console.log(describePopulation('Ireland', 5));*/

// CHALLENGES

/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/
