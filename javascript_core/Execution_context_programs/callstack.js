debugger // works in code execution phase
// phase1: refer screenshot for memory creation phase where variables are undefined and function code is present
var a = 10
var b = 40


function add(x,y){
    var z=x+y;
    return z;
}
// when execution comes here callstack willl have callstack add function refer screenshot
// callstack - points to what program is running
// callstack - anonyomus (global)
// callstack - add (next program) will go to callstack
var c = add(a,b)
console.log(c)