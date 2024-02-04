// undefined vs not defined
// imp interview question
console.log(a); // undefined in memory phase, during execution phase picks the undefined value
console.log(c); // not present in memory phase, during execution looks in memory but its not defined
// ReferenceError: c is not defined 

var a =10;
var b= 20;