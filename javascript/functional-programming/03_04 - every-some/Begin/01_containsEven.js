// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01
var _ = require("lodash")

var numbers = [ 2, 4, 6, 8, 10, 12 ]

var arrayContainsEven = _.some(numbers, (e) => e % 2 === 0)

var arrayIsAllEven = _.every(numbers, (e) => e % 2 === 0)

console.log("Array contains even?: " + arrayContainsEven) 
console.log("Array is all even?: " + arrayIsAllEven)