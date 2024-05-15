//---
// type aliases
//---
function getRandomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
var colorOne = getRandomColor();
var colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
var userOne = { name: "Mario", score: 75 };
function formatUser(user) {
    console.log("".concat(user.name, " has a score of ").concat(user.score));
}
formatUser(userOne);
formatUser({ name: "Yoshi", score: 100 });
