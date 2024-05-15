//---
// type guards
//---
//We can check the data type of arg by using method "typeof"
function swapIdType(id) {
    if (typeof id === "string") {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use int methods
        return id.toString();
    }
}
var idOne = swapIdType(1);
var idTwo = swapIdType("2");
console.log(idOne, idTwo);
//Now we can check the "type" property and control what code to execute
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstname, value.age);
    }
}
var user = {
    type: "user",
    username: "Mario",
    email: "mario@nintendo.com",
    id: 1,
};
var person = {
    type: "person",
    firstname: "Alan",
    age: 34,
    id: 1,
};
logDetails(user);
logDetails(person);
