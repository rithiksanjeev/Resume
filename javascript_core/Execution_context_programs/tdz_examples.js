// program 1
// here a,b,c are undefined
// function add is defined in memory creation phase 1
// so during execution all variables are available in memory and then take


var a =10;
var b =20;

var c = add(a,b);

console.log(c);

function add(x,y)  {
    return x+y;
}

// program 2
// here a,b,c are undefined
// var add is undefined in memory creation phase 1
// and also var add is undefined first as it is a variable and not a function
// so during execution add is undefined so we will get Uncaught TypeError: add is not a function when called


var a =10;
var b =20;

var c = add(a,b);

console.log(c);

var add = (x,y) => {
    return x+y;
}


// TDZ (temporal dead zone for const and let)
// program 3
// here a,b,c,
// add is uninitlized since it is const funtion
// since add is const it will be in TDZ and can not be accessed until it has some value (uninitlized currently)
// During execution phase when add function is called since it is uninitized and value is unavailable it will give 
// Uncaught ReferenceError: Cannot access 'add' before initialization

// in memory creation phase d value will be unavailable
// so during execution phase it will print Cannot access 'd' before initialization (TDZ)

console.log(d); // value unavailable (hoisting can not be done for let varaible)
let d = 40;

var a =10;
var b =20;

var c = add(a,b);

console.log(c);

// Arrow function
const add = (x,y) => {
    return x+y;
}




