// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01
var _ = require("lodash")

var employees = [
  { name: "John",   salary: 60000,  age: 27, gender: 'M' },
  { name: "Mary",   salary: 110000, age: 50, gender: 'F' },
  { name: "Susan",  salary: 50000,  age: 21, gender: 'F' },
  { name: "Greg",   salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry",  salary: 90000,  age: 39, gender: 'M' },
  { name: "Barb",   salary: 95000,  age: 36, gender: 'F' }
]

var males = _.filter(employees, (emp) => emp.gender === 'M')
var maleAges = _.map(males, (male) => male.age)
var maleAgeTotal = _.reduce(maleAges, (acc, age) => acc + age)
var maleAgeAverage = maleAgeTotal / males.length

console.log("Average male age: " + maleAgeAverage)

var females = _.filter(employees, (emp) => emp.gender === 'F')
var femaleAges = _.map(females, (female) => female.age)
var femaleAgeTotal = _.reduce(femaleAges, (acc, age) => acc + age)
var femaleAgeAverage = femaleAgeTotal / females.length

console.log("Average female age: " + femaleAgeAverage)