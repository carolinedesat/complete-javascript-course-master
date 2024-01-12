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

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 👽`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear) // Converts string to number
console.log(Number(inputYear) + 18);

// NaN means an invalid number
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// We can only convert to string, number and boolean

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3); // Number converted to string
console.log('23' - '10' - 3); // String converted to number
console.log('23' * '2'); // String converted to number
console.log('23' / '2'); // String converted to number

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values: false, 0, '', undefined, null, NaN
// Everything else: truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); //empty object
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '16';
if (age === 18) console.log('You just became an adult');
if (age == 18) console.log('You just became an adult'); // Avoid

if (age >= 20) {
    console.log('A');
} else if (age < 30) {
    console.log('B');
} else {
    console.log('None');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite)
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    23
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?')

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

// ASSIGNMENTS
/*
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
console.log(description);
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders');
}

const country = 'Ireland';
const language = 'English';
const population = 5;
const isIsland = true;

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`)
}

const day = prompt('Enter the day:');

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day')
}

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day == 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day')
}

// Expression and Operator: Piece of code that produces a value
3 + 4
1991
true && false && !false

// Statement: Bigger piece of code that is executed but does not produce a value
if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2037 - 1991} years old.`) // Expression

// Statements are the rigid structure that holds our program together,
// while expressions fill in the details.
*/

const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

/*
// CHALLENGES
const marksMass = 0;
const marksHeight = 0;
const johnsMass = 0;
const johnsHeight = 0;

function calculate(marksMass, marksHeight, johnsMass, johnsHeight) {
    const marksBMI = marksMass / marksHeight ** 2;
    const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

    if (marksBMI > johnsBMI) {
        console.log(`Mark's BMI (${marksBMI}) is higher than John's(${ johnsBMI })!`);
    } else {
        console.log(`John's BMI (${johnsBMI}) is higher than Mark's(${ marksBMI })!`);
    }
}

calculate(78, 1.69, 92, 1.95);
calculate(95, 1.88, 85, 1.76);

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}
*/



