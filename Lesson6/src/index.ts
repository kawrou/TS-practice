//---
// any type
//---

//Variable can be of any Type, meaning it's Type can change.
//This sort of goes against the principles of Types.
//You won't get any useful error messages as it won't know what Type to expect.
let age: any;

//The 'any' type is infered here as a variable is declared but no Type was assigned.
let title;

age = 30;
age = false;

title = 25;
title = {
 hello: "world",
};

//---
// any type in arrays
//---

let things: any[] = ["hello", true, 30, null];

things.push({ id: 123 });

//---
//functions & any
//---

function addTogether(value: any): any {
 return value + value;
}

const resultOne = addTogether("hello");
const resultTwo = addTogether(3);

//useful when migrating from js to ts
//because using any won't cause errors initially
