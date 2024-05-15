"use strict";
//---
//arrays
//---
let names = ["Mario", "Luigi", "Peach"];
let ages = [25, 28, 24];
names.push("Bowser");
ages.push(35);
//---
//type inference with arrays
//---
let fruits = ["apples", "pears", "bananas"];
fruits.push("mangos");
const f = fruits[3];
//This array contains 3 different types. A union type
let things = [1, true, "hello"];
//If you hover over 't', you'll see it that the array can contain
//types: string | number | boolean
const t = things[0];
//---
//object literals
//---
let user = {
    firstName: "mario",
    age: 30,
    id: 1,
};
user.firstName = "peach";
user.id = 2;
//---
//type inference with object literals
//---
let person = {
    name: "Luigi",
    score: 35,
};
person.name = "Bowser";
person.score = 40;
const score = person.score;
