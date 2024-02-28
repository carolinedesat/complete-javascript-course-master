'use strict';
/*
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

Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
}
Person.hey();

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

console.log(caroline.__proto__);
// Object.prototype (top of prototype chain)
console.log(caroline.__proto__.__proto__);
console.log(caroline.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

////////////////////////////////////////////////
// Coding Challenge #1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const car1 = new Car('BMW', 120);
console.log(car1);
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();

const car2 = new Car('Mercedes', 95);
console.log(car2);
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();

////////////////////////////////////////////////

// Class expression
// const personCl = class { }

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey, ${this.firstName}!`);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const antonio = new PersonCl('Antonio de Souza Teixeira', 1955);
console.log(antonio);
antonio.calcAge();
console.log(antonio.age);

console.log(antonio.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

antonio.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1957);

PersonCl.hey();

const account = {
    owner: 'caroline',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-2).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const caroline = Object.create(PersonProto);
console.log(caroline);
caroline.name = 'Caroline';
caroline.birthYear = 1994;
caroline.calcAge();

console.log(caroline.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2014);
sarah.calcAge();

////////////////////////////////////////////////
// Coding Challenge #2

class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    break() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        return this.speed * 1.6;
    }
}

const car1 = new CarCl('Ford', 120);
console.log(car1.speedUS);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.break();
car1.speedUS = 50;
console.log(car1);

////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const caroline = new Student('Caroline', 1994, 'Computer Science');
console.log(caroline);
caroline.introduce();
caroline.calcAge();

console.log(caroline.__proto__);
console.log(caroline.__proto__.__proto__);

console.log(caroline instanceof Student);
console.log(caroline instanceof Person);
console.log(caroline instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

////////////////////////////////////////////////
// Coding Challenge #3

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    return this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const car1 = new EV('Tesla', 120, 23);
car1.chargeBattery(90);
console.log(car1);
car1.break();
car1.accelerate();

////////////////////////////////////////////////

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey, ${this.firstName}!`);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2024 - this.birthYear} years old, but as a student I feel more like ${2024 - this.birthYear + 10}`);
    }
}

const caroline = new StudentCl('Caroline de Sa Teixeira', 1994, 'Computer Science');
caroline.introduce();
caroline.calcAge();

// PROBABLY THE BEST WAY OF DOING OOP IN JAVASCRIPT
const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const caroline = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}

const conn = Object.create(StudentProto);
conn.init('Conn', 1996, 'Teaching');
conn.introduce();
conn.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (There is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }

    // 3) Public methods
    // Public Interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    static helper() {
        console.log('Helper');
    }

    // Protected method
    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`)
            return this;
        }
    }

    // 4) Private methods
    _approveLoan(val) {
        return true;
    }

}

const acc1 = new Account('Caroline', 'EUR', 3103);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
acc1.getMovements();
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#movements);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

////////////////////////////////////////////////
// Coding Challenge #4

class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    break() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        return this.speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
}

const car1 = new EVCl('Rivian', 120, 23);
console.log(car1);

car1.accelerate().break().chargeBattery(50).accelerate().break();
console.log(car1.speedUS);




