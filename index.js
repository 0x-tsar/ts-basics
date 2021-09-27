"use strict";
//basic types
let id = 5;
let company = "No Rats";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [];
//Tuple
let person = [1, "Me", true];
//Tuple array
let employee;
employee = [
    [1, "one"],
    [2, "two"],
    [3, "three"],
];
//union
let pid;
pid = 2; //or string
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John Doe",
};
// Type Assertion
let cid = 1;
// let customerId = <number>id;
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
function log(msg) {
    console.log(msg);
}
const log2 = (msg) => {
    console.log(`msg: ${msg}`);
};
const user1 = {
    id: 1,
    name: "John Doe",
};
const add3 = (x, y) => x + y;
// Classes
let tid = 0;
class Person {
    constructor(id, name) {
        this.r = () => {
            return `${this.name} was registered`;
        };
        tid++;
        this.id = tid;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const userOne = new Person(1, "userOne");
const userTwo = new Person(2, "userTwo");
//subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "emp1", "developer");
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["one", "two", "three", "four"]);
numArray.push(2, 3);
// console.log(numArray);
