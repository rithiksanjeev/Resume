// var - old (it is prone to errors) - avoid using this

// let,const - new (robust - less prone to errors)
// good practice to use let and const 

//console.log(a); using here will throw not intizied errors (TDZ)
// variable where the value is going to change use let
let a =10;
a=20
console.log(a);

// It's better to use const over let if the value of variable is not going to change and if it tried to change error will be thrown
// cannot change this value from anywhere (Better control)
const interest = 6.8;
// interest=40; // TypeError: Assignment to constant variable.

// scopes of let and const and var
// let and const have block scope

// var is a function(local) scope it does not have block scope so recently change value will be taken
function examplevarScope()
{
    var x = 10;
    if(true) {
        var x =20; // since it is var it doesnot have block memory so always updates local memory value
        console.log("var inside if "+x);  // it will always take recently changed value as there is no block scope
    }
    console.log("var local "+x);
}
examplevarScope();

// let  have block scope
// in below program in block scope block value will be taken and outside block local value will be taken unlike var
function exampleletScope()
{
    let x =10; // local Scope - memory
    if(true) {
        let x =20; // Block Scope - memory
        console.log("let block "+x);
    }
    console.log("let local "+x);
}
exampleletScope();

// const have block scope
// in below program in block scope block value will be taken and outside block local value will be taken unlike var
function exampleConstScope()
{
    const x =10; // local Scope - memory
    if(true) {
        const x =20; // Block Scope - memory
        console.log("const block "+x);
    }
    console.log("const local "+x);
}
exampleConstScope();
