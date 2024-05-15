//---
// tuples
//---
var person = ["mario", 30, true];
//---
// tuples examples
//---
// A colour code: hue, saturation, luminance, alpha
// Has a very specific order
var hsla;
hsla = [200, "100%", "50%", 1];
var xy;
xy = [94.7, 20.1];
function useCoords() {
    //get coords
    var lat = 100;
    var long = 50;
    return [lat, long];
}
var _a = useCoords(), lat = _a[0], long = _a[1];
//---
// named tuples
//---
var user;
user = ["peach", 25];
console.log(user[0]);
