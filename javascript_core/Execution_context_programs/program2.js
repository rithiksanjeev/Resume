// Program enters execution context

// Hoisiting - Accessing variables and function before its declaration
console.log(d) // Hoisiting
var d = 10
console.log(d)

// phase 1 - memory execution
//scans program and stores valirable
// var a = undefined

// phase 2 execution
// console.log(a) - this will print undefined because in phase 1 variable is assigned with undefined value
// var a= 10 -> here value 10 will be intialised to undefined value
// console.log(a) -> this will print 10