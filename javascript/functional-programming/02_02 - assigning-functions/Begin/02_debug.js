// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 02

const DEBUG_MODE_ENABLED = true

var debug

function printDebugMessage(message) {
  console.log("DEBUG: " + message)
}

function doNothing() {
}

if (DEBUG_MODE_ENABLED) {
  debug = printDebugMessage
} else {
  debug = doNothing
}


// ...

debug("Some debug message")

// ...

// function printDebugMessage(message) {
//   console.log("DEBUG: " + message)
// }
//
// function doNothing() { }
