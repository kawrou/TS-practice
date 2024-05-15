//---
// functions
//---

//Specify the type of the args passed to funciton and the type of return value.
function addTwoNumbers(a: number, b: number): number {
 return a + b;
}

// This won't work as the function expect args to be of type number
// addTwoNumbers('a', 'b');
addTwoNumbers(1, 2);

const subtractTwoNumbers = (a: number, b: number): number => {
 return a - b;
};

// This won't work as the function expect args to be of type number
// subtractTwoNumbers(10, '7');
subtractTwoNumbers(10, 7);

function addAllNumbers(items: number[]): void {
 const total = items.reduce((a, c) => a + c, 0);
 console.log(total);
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1]);

//---
// return type inference
//---

function formatGreeting(name: string, greeting: string) {
 return `${greeting}, ${name}`;
}

const result = formatGreeting("Mario", "Hello")