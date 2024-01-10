/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob)

let country = 'Brasil';
let continent = 'South America';
let population = 214;

console.log(country + ", " + continent + ", " + population);

true;
console.log(true);
let javascriptIsFun = true;

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const FirstName = 'Jonas';
const LastName = 'Schmedtmann';
console.log(FirstName + '' + LastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparisson operators
console.log(ageJonas > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// ASSIGNMENTS
const country = 'Brasil';
const continent = 'South America';
let population = 214;

console.log(country + ', ' + continent + ', ' + population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'Portuguese';
console.log(typeof language);

const splitInHalf = population / 2;
console.log(splitInHalf);
population++;
console.log(population);

const finlandPopulation = 6;
if (population > finlandPopulation) {
    console.log('My country has more people than Finland');
} else {
    console.log('My country have less people than Finland');
}

const averagePopulation = 33;
if (averagePopulation > population) {
    console.log('My country has less people than the average country');
} else {
    console.log('My country has more people than the average country');
}

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description)

// CHALLENGES
const marksMass = 0;
const marksHeight = 0;
const johnsMass = 0;
const johnsHeight = 0;

function calculate(marksMass, marksHeight, johnsMass, johnsHeight) {
    const marksBMI = marksMass / marksHeight ** 2;
    const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
    console.log('Marks BMI: ' + marksBMI);
    console.log('Johns BMI: ' + johnsBMI);

    const markHigherBMI = marksBMI > johnsBMI;

    if (marksBMI > johnsBMI) {
        console.log(markHigherBMI);
    } else {
        console.log(markHigherBMI);
    }
}

calculate(78, 1.69, 92, 1.95);
calculate(95, 1.88, 85, 1.76);







