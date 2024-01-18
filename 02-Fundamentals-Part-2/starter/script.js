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
console.log(jonas);

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

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // Adds to the end
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds to the start
console.log(friends);

friends.pop(); // Removes the last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // Removes the first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven')); // True
console.log(friends.includes('Bob')); // False
console.log(friends.includes(23)); // True
console.log(friends.includes('23')); // False

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// Object Literal Syntax, use for unstructured data
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

//console.log('Lifting weights repetition 1');

// For loop keeps running while condition (middle) is true
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {

    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Fillin the types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray [i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);

// Continue and break
console.log('----- ONLY STRINGS -----');
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('----- BREAK WITH NUMBER -----');
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i])
}

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Starting exercise ${exercise} -----`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

for(let rep = 1; rep <= 10; rep++) {
    console.log(`FOR: Lifting weights repetition ${rep}`);
}*/

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

// ASSIGNMENTS

/*function describeCountry(country, population, capitalCity) {
    const str = `${ country } has ${ population } million people and its capital city is ${ capitalCity }`
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
    return `${ country } has ${ population } million people, which is about ${ percentage } % of the world.`;
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
        console.log(`Dolphins win(${ avgDolphins } vs ${ avgKoalas })`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win(${ avgKoalas } vs ${ avgDolphins })`);
    } else {
        console.log('No team wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0]) + (tips[0]), (bills[1]) + (tips[1]), (bills[2]) + (tips[2])];
console.log(bills, tips, totals);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}*/
