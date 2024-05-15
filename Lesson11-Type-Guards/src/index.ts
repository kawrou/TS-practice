//---
// type guards
//---

type Id = number | string;

//We can check the data type of arg by using method "typeof"
function swapIdType(id: Id) {
 if (typeof id === "string") {
  // can use string methods
  return parseInt(id);
 } else {
  // can use int methods
  return id.toString();
 }
}

const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, idTwo);

//---
// tagged interfaces
//---

//There are no methods that can check the types or properties of interfaces.
//So what we can do instead is by giving the interfaces a common property.
//In this case, we gave it "type:"

interface User {
 type: "user";
 username: string;
 email: string;
 id: Id;
}

interface Person {
 type: "person";
 firstname: string;
 age: number;
 id: Id;
}

//Now we can check the "type" property and control what code to execute
function logDetails(value: User | Person): void {
 if (value.type === "user") {
  console.log(value.email, value.username);
 }
 if (value.type === "person") {
  console.log(value.firstname, value.age);
 }
}

//An alternative is to create another function that checks for "Type" which is called
//in the logDetails function

// function isUser(entity: User | Person): entity is User {
//  if (entity !== null && typeof entity === "object" && "email" in entity) {
//   return true;
//  }
//  return false;
// }

// function logDetails(value: User | Person): void {
//  if (isUser(value)) {
//   return console.log(value.email, value.username);
//  }
//  return console.log(value.firstname, value.age);
// }


const user: User = {
 type: "user",
 username: "Mario",
 email: "mario@nintendo.com",
 id: 1,
};

const person: Person = {
 type: "person",
 firstname: "Alan",
 age: 34,
 id: 1,
};

logDetails(user);
logDetails(person);
