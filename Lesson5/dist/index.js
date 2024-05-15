//---
// functions
//---
//Specify the type of the args passed to funciton and the type of return value.
function addTwoNumbers(a, b) {
    return a + b;
}
// This won't work as the function expect args to be of type number
// addTwoNumbers('a', 'b');
addTwoNumbers(1, 2);
var subtractTwoNumbers = function (a, b) {
    return a - b;
};
// This won't work as the function expect args to be of type number
// subtractTwoNumbers(10, '7');
subtractTwoNumbers(10, 7);
function addAllNumbers(items) {
    var total = items.reduce(function (a, c) { return a + c; }, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
