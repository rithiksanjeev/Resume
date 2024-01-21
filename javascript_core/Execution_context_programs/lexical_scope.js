// lexical scope - passes value between execution context once it is defined in any callstack
// JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.
function a()
{
    var x = 10;
    function b()
    {
        var y =20;
         function c()
         {
            var z =30;
            console.log(x);
        }
        c();
    }
    b();
}
a();

// closure
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

function a1() {
    var x1 =10;
    function b1()
    {
        var result = 40+x1; // Js knows can be executed only when x1 value we get so it packages with depended function this is called closure
        return result;
    }
    return b1; // this is retrun not a function call
}
var c1 = a1();
console.log(c1());

//eg:2
function a() {
    var x = 10;

    function b() {
        var y = 30;

        function c() {
            var z = 50;

            function d() {
                var result =  y + z;       // closure (a) closure (b) closure (c) 
                return result;
            }
            return d;
        }
        return c();
    }
    return b();
}
var p = a();
var result1 = p()

// eg:3

function a() {
    var x = 10;

    function b() {
        var y = 30;

        // can have functions as well
        function add(j, k) {
            return j+k;  
        }

        function c() {
            var z = 50;

            function d() {
                var result = add(x , y) + z;
                return result;
            }
            return d;
        }
        return c();
    }
    return b();
}

var p = a();

var result = p()