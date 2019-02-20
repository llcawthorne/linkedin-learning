// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02

var x = 1

console.log("x is originally " + x)

setTimeout( function() {
    x = 99
    console.log("x has been changed, and now is " + x)
    setTimeout( function() {
        x = 1000000
        console.log("x has been changed again, and now is " + x)
    }, 1000)
}, 3000)

console.log("the value of x is " + x)