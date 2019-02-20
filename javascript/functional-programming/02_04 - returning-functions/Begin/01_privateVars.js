// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

function createCounter() {
  var count = 0
  return {
    increment: function() {
      count += 1
    },
    currentValue: function() {
      return count
    }
  }
}

myCounter = createCounter()

console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

// the following is now impossible
//myCounter.count = 999 // uh oh!

console.log(myCounter.currentValue())
