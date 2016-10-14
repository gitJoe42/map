var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots ist [1, 2, 3], numbers ist immernoch [1, 4, 9]
console.log("Numbers:");
numbers.forEach(function (element, index, array) {console.log(element)});
console.log("Roots:");
roots.forEach(function (element, index, array) {console.log(element)});