// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02
function callWith2Arguments(arg1, arg2, func) {
  return func(arg1, arg2)
}

callWith2Arguments(1, 2, add)
callWith2Arguments(9, 4, subtract)
callWith2Arguments(10, 5, function(x, y) {
  x * y
})

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}
