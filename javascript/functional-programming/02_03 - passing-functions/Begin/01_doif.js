// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 01

function doIf(condition, func) {
  if (condition) {
    func()
  }
}

const x = 1

doIf(x === 1, function() {
  console.log("x is equal to 1")
})

doIf(x === "Bananas", () => console.log("x is equal to 'Bananas'"))

doIf(x < 10 && x > 0, sayXisBetween0And10)

function sayXisBetween0And10() { console.log("x is between 0 and 10") }
