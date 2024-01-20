// js is a case senstive language
// condition statements

// if ()
// {

// }
// else if
// {

// }
// else
// {

// }

/**
 * functions
 */

// default function
function greet()
{
    console.log('welcome Rithik ');
}
greet();

// function with param
function add(x,y){
    z=x+y;
    console.log(z);
}
add(10,11);

// function with string param
function namefun(name){
    console.log('welocome pass value '+name);
}

namefun('rithik')

// default parametrised function
function namedefault(name = 'rithiksanjeev'){
    console.log('welocome default params '+name);
}
namedefault('hi');
namedefault();

// function with variable asssign
var random;
let random1;
function greet1(name = 'rithik') {
    return 'welcome ' + name;
}

// Assign function to a variable - possible in js
random = greet1;
random1 = greet1;

console.log(random('sanjeev'));
console.log(random1('sanjeev random2'));


// Anonymous function before param no name
// Assinged to a variable and function is written
// function nofunnamehere(name ='rithik')
var greet2 = function (name ='rithik') {
    console.log('Anonymous fun ' + name);
}
greet2('Anonymous call does not have name to function')

//without params
var greet2 = function() {
    console.log('Anonymous fun without param');
}
greet2()

// multiple function call

var a =10;
var b =20;
var c =30;

function add(x,y){
    return x+y;
}


function calc(op,a,b,c)
{
    // function passed inside another function
    var val = op(a,c);
    var res = val/b;
    console.log(res);
}
// Normal call
calc(add,a,b,c)
// Anonymous call without function declarion just passing so it assign to above op variable
// op is assigned with anonymous function function(x,y) { return x+y } - callback function since we don't know when it will be called
calc(function(x,y) { return x+y} , a , b, c);


// in js function can be called from anywhere
// to get more control use arrow function so calling of funtion can be done only after the function declaration
greet4()
function greet4()
{
    console.log("hllo world");
}

// Immediatelt invoked function expression - IIFE
(function()
{
    console.log("Self invoking function");
})();

// Arrow Function 
// Replace funtion key word with arrow keyword


var greet6 = function (name) { // Anonymous function
    return ("welcome"+name);
}
greet6("arro")

// modified above normal function to arrow function

var greet10 =  (name1,name2) => { // Anonymous function
    return ("welcome"+name1+name2);
}

// short hands
// if only one param parenthesis can be removed
var greet7 =  name => { 
    return ("welcome "+name);
}
console.log(greet7("Shorthand 1 -> remove parenthis in name is single param arrow greet 7"));

// shorthand 2 without return make sure enclosed within parenthises() and not braces {}
var greet8 =  name => ( "welcome "+name )
console.log(greet8("Shorthand - 2 -arrow greet 8"));

// TypeError: add1 is not a function if declared at top -> Hoisting 
// add1(2,4)
var add1 = (x,y) =>
{
    return x+y;
}
console.log(add1(2,4));

/**
 * ARRAY in JS
 */

var names = ['rithik','sanjeev','sakthi','vishaal']
console.log(names);

var allval = [true,false,10,'string',{name:'rithik',place:'coimbatore'}]
console.log(allval);
console.log(allval[4]);

// type of array is object
console.log(typeof names);

// Nested arrays
var matrix = [
    [1,2,3,4,5],
    [6,7,8,9,10]
]
console.log(matrix);
// first array third index
console.log(matrix[0][3]);


// ARRAY METHODS

// push pop (add and removes at last)
// shift unshit (add and removes from first)
var nums = [1,2,3,4]
// push adds elements at last in array
nums.push(5) // [1,2,3,4,5]
nums.push(6) // [1,2,3,4,5,6]
console.log("push-> "+nums);
// pop removed last elemet
nums.pop() // [1,2,3,4,5]
nums.pop() // [1,2,3,4]
console.log("pop-> "+nums);
// add in front
nums.unshift(10) // [10,1,2,3,4]
nums.unshift(11) // [11,10,1,2,3,4]
nums.unshift(12) // [12,11,10,1,2,3,4]
console.log("unshift-> "+nums);
// shift will remove item from frot 
nums.shift() // [11,10,1,2,3,4]
nums.shift() // [10,1,2,3,4]
console.log("shift-> "+nums);
// splice - Add and remove to and from array
// (startingindex,numberof items to be deleted from starting index,add extra elemts after removing)
// in splice we can add elemnts after removing as well
var extra_Arr = [50,51,52]
var deleted1 = nums.splice(1,2,...extra_Arr) // [10,50,51,52,3,4]
console.log("splice-> "+nums); // [10,50,51,52,3,4]
console.log("deleted 1 in splice-> "+deleted1); // [1,2]
// -> starting from my current index,delete number of elements
// in below example starting from 1st index including me delete 2 elements so index elements of 1 and 2 alone is deleted
var deleted2 = nums.splice(1,2) // [50,51]
console.log("splice-> "+nums); // [10,52,3,4]
console.log("deleted 3 elements in splice-> "+deleted2); //[50,51] (1,2) 
// slice -> return copy of a section of array without removing unlike splice
// want the value in array without modifying then use slice
var slicearr = nums.slice(0,3) // last index is excluded i.e. 3rd index in current example
console.log("original array even after slicing->"+nums); // [10,52,3,4]
console.log("sliced val->"+slicearr); // [10,52,3]

// reverse in array
nums.reverse()
console.log("Reversed array -> "+nums);

// sort an array
// Ascensing order
nums.sort((a, b) => a - b)
console.log("Ascending order Sorted array -> "+nums); // 3,4,10,52
// Descending order
nums.sort((a, b) => b - a)
console.log("Descending order Sorted array -> "+nums); // 52,10,4,3

// Index of method
console.log("Index of element "+nums.indexOf(10)) // 1
nums.push(10)
console.log("num "+nums); // [52,10,4,3,10]
// Last index of
console.log("Last Index of element "+nums.lastIndexOf(10)) // 4
// includes of value check [true,false]
console.log("Does number present in array include of -> "+nums.includes(10));
console.log("Does number present in array include of -> "+nums.includes(100));

// join
var names_mem = ['ash','bala','harsh','amy','rithik','vishaal']
// () can use any values to join -,$,#
console.log(names_mem.join('###')); // ash###bala###harsh###amy###rithik###vishaal

// Filter function
console.log("nums "+nums); // [52,10,4,3,10]
// filter will do a for loop on the whole array and returns the filtered values based on condition defined
// this does not modify the original array
// runs for loop for each values in array i.e filter
var filteredArr = nums.filter( n=>{
    return n%2==0
})
var filteredArrshort = nums.filter( n => n%2==0 )
console.log("filters shorthand "+filteredArrshort); // stores only even value
console.log("filtered array "+filteredArr); // stores only even value
console.log("nums "+nums); // stores only even value

// ✨ REDUCE - reduces the array to a single value.
var sum = nums.reduce((total, num) => total + num);
console.log("Reduce to a single value -> "+sum);                           // 55

// Map Function
// Doesnot modify original array
// updates each elements in the arrar after doing some modification

var mappedArr = nums.map(n => n+100)
console.log("Mapped array -> "+mappedArr);
console.log("Mapped array -> "+nums);

var cubeArr = nums.map(n=>n**3)
console.log("Cube array -> "+cubeArr);

