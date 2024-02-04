// first program - single line comment
/**
 * Multi line comment
 */
// https://javascript.info/ - read

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

//BOM
console.log(window);
//console.log(window.alert(20));

// Document object model
console.log(window.document); //window keyword is optional
console.log(document.body);
console.log(document.head);

//Accessing elements in js -similar to selectors in css
//since html documents elements are wrtitten in a tree like structure it uses dfs for getting the element
console.log(document.getElementById('top').innerText = "Manipulate heading ")
console.log(document.getElementsByTagName('p'))
console.log(document.getElementsByClassName('our-class'))
console.log(document.getElementsByName('rithik'))
// Dom tree
// below will optimise the recursion in tree as we are finding the element first and then searching within that subtree using that id element
const id_element = document.getElementById('span-1')
console.log(id_element.getElementsByTagNameNS("http://www.w3.org/1999/xhtml",'span'))

// query selector - query on elements
console.log(document.querySelector('#top'));
// selects only first one
console.log(document.querySelector('.our-class'));
//selector all returns all the elements with below class name
console.log(document.querySelectorAll('.our-class'));
console.log(document.querySelectorAll('p'));

//select last one
//real use case of query selector will be below one
// query on elements
console.log(document.querySelector('ul li:last-child').innerText = "i am the last child");
// select nth elements
console.log(document.querySelector('ul li:nth-child(3').innerText = "i am the third child");


//Manipulate element -DOM manipulation in js
const listItems = document.getElementsByTagName('li')
// below is accessing
console.log(listItems[0].innerText); //first element
console.log(listItems[0].innerHTML); //first element
console.log(listItems[0].textContent); //first element
// below is manipulating
// with inner html we can manipulate like a html element like below

listItems[1].innerText = '<span style="color: red">RIthik</span> is here'
listItems[0].innerHTML = '<span style="color: red">RIthik</span> is here'
const firstElement = listItems[0]
// listItems[0].style.color = 'blue'
firstElement.style.fontSize = '28px'
firstElement.style.border = '2px solid black'

//ATTRIBUTES
// firstElement.innerHTML = 'attributes'
firstElement.classList.add('some-class')
firstElement.classList.add('additional-class')
firstElement.classList.remove('additional-class')
firstElement.classList.toggle('toggle-class') // on and off

firstElement.setAttribute('id','first-item')
firstElement.setAttribute('style','color:black')
