//---
// union types
//---

let someId: number | string;

someId = 1;
someId = "2";

// Example: When a user is logged in, it might have a string value
// otherwise it'll be null.
let email: string | null = null;

email = "mario@netninja.dev";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "1klkjadf";
anotherId = 5;

//---
// union type pitfall
//---

function swapIdType(id: Id): Id {
 // can only use props and methods common to
 // both number and string types
 // parseInt(id) --> not allowed as it only works for strings and not int

 parseInt(id);
 
 return id;
}

swapIdType("5");
