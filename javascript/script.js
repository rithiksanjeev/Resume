// first program - single line comment
/**
 * Multi line comment
 */
console.log("Hello JS")

// variable name declaration
var pen = 10;
var SmartPhone = 10;

/**
 * casing in programming
 * smartPhone - camelcase
 * smart_phone - snake_case
 * smart-phone - kebab-case
 * SmartPhone - PascalCase
 */

// Data types

var price = 100
console.log(price);

// String datatype
price = 'changing to string'
price = "changing to string"
price = "changing'this'to string"
console.log(price);

// number

var num =10;
var num =10.0;
var num =10.0000;

var Ismale = true;
var Ismale = false;

// undefined value not defined
var clock; //undefined
console.log(clock);

var clock = null; //undefined
console.log(clock);

// NaN not a number
var num = 10/'a';
console.log(num);

// big int
var bigNum = BigInt(123123123123123213213123123123123123123213213123123123123123123213213123);


// objects
var lamp = {
    // properties
    heightInMeter: 1,
    color: 'black',
    operateson: 'plug',

    // method
    brightning: function()
    {
        // code
    },
    videoStreaming: function()
    {
        // code
        console.log('video is streaming');
    }
}

console.log(lamp.color);
console.log(lamp.videoStreaming());

// operators
var num =10;
console.log(++num);

// true - this checks direct value
// this does coersion (automatic converion of data type)
// below will convert number to string and then compare
console.log(2 == '2');
// false - this checks direct value - Strict check here it checks data type
// here coersion (automatic converion of data type) doesnot happen
console.log(2 === '2');