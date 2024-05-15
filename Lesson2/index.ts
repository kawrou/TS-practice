//explicit type annotation. TS can also infer types. 
let age: number = 30;
let firstName: string = "Mario";
let isFictional: boolean; 

//Type errors example

// age = 'hello'
// Type error as 'age' is type of number
age = 31

// firstName = 100
// Type error as 'firstName' is type of string
firstName = 'Luigi'

// isFictional = 'false'
// Type error as 'isFictional' is type of boolean
isFictional = true



//auto type inference. If you hover over the variable, you can see type
let planet = "Earth";
let moons = 1;
let isLarge = false;

//You can see similar type error as above in following examples if you uncomment
// planet = 1
planet = 'Saturn'

// moons = '145'
moons = 145

// isLarge = 'yes'
isLarge = true; 


//null & undefined
let something: null
let anotherThing: undefined

// something = 10
something = null
// anotherThing = 'hello, world'
anotherThing = undefined