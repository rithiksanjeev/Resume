// issue:

// for below program

//memory phase 
// a: undefined
// result:undefined

// execution phase
// result: a * 30
// since a is var undefined * 30 is not a number (NAN)

var result = a * 30
console.log(result); // NAN
var a = 10;

// undefined vairable is accessed above which gives NAN to make it robut use const/let see below reasons so it gives proper errors

// Temporal dead zone (Uncaught ReferenceError) Gives proper run time errors during this timeframe
// For let and const
// from undefined to any anyvalue for let and const variable can not be accessed  (TDZ)
// until initialization of value for let and const acces of the variable can not be done
// TIme between decalation and initialization of variable is TDZ.
// you can not access these variable in this time
// let and const works in same fashion

// for below program

//memory phase 
// a: undefined
// result:undefined

// execution phase
// result: a * 30
// since a is const/let this cannot be access since it is undefined and cannot be acccessed

const result1 = a * 30 // Uncaught ReferenceError: a is not defined
console.log(result); 
const a = 10;
