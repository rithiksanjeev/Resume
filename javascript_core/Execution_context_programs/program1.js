// Execution context
// JS programs executes in execution context
// in Execution context it has 2phases(memory creation,program execution)

//phase 1 - memory creation 
//phase 2 - program execution 

// sample program for eg

var a = 10
var b = 40

function add(x,y){
    z=x+y;
    return z;
}

var c = add(a,b)
console.log(c)

//phase 1 - memory creation 
// Java script program will go through complete program
// Initilises the variables with undefined values
// saves the cuntion code

// pase 1: Memory creation phase for above program
// a:undefined
// b:undefined
// c:undefined
// full function code just gets added in memory -> 
// function add(x,y){
//     z=x+y;
//     return z;
// }

//phase 2 - program execution 

// will run first line of code intitialzes values for the valriabless
// var a = 10
// var b = 20
// var c = add(a,b) -> this is a funtion call to run a program so a seperate execution context will be created here 

// below program again goes to execution context
// function add(x,y){
//     z=x+y;
//     return z;
// }
// Phase 1 - Memory execution
// x: undefined
// y: undefined
// z: undefined

// Phase 2 - Execution phase
// z= x+ y (10+20)
//  return 30

// after return the execution context will get deleted

// return to main execution context
// 4. console.log(c) => 30