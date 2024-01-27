// Callback


// callback function is a function that is passed into another function as a an argument
function squareOfNumber(number)
{
    return number**2;
}

function printSquare(squareOfNum,number)
{
    sq = squareOfNum(9)
    console.log("Square of number is "+sq);
}
// printSquare (squareOfNumber,10)
// replace squareOfNumber as a arrow function then it becomes callback function
printSquare((number)=>
{
    return number**2;
},10)

console.log('Async Js');

// function is passed as an argument which is called as a callback function
// ()=>{
//     console.log('Rithik sanjeev');
// }

// Browser Api's function setInterval and setTimeout

// setInterval(()=>{
//     console.log('Rithik sanjeev');
// },1000)



// Example 2:
// Create pomo doro app
// repeat code after some time
counter = 0
interval = setInterval( 
    ()=>{
    console.log(counter);
    counter++;
    if(counter==5)
    {
        stop();
    }
}
,1000) // time in millisec 1000 = 1sec

function stop() 
{
    clearInterval(interval);
}

// // SET Timeout - Execute code after some time
setTimeout(
    ()=> {
    alert("Its two sec now")}
,2000) // time in millisec 2000 = 2sec

console.log('Before');
setTimeout(
    () => {
        console.log('Set time out');
    }
)
console.log('After');

// Promise

const mypromise = new Promise(
    (resolve,reject) => {
    setTimeout( // this is browser api method
        () => {
            resolve("My promise is resolved") // value that i will get is 20, in real time it will be be api result
        },2000)
    // setTimeout(
    //     () => {
    //             reject(new Error('promise rejected'))
    //  },2000)
})
console.log(mypromise);

// after fullfilled then print or if error catch it
mypromise
.then(val => {
    console.log(val); // resolved case
})
.catch(
    err => {
        console.log("catch block"+err); // rejected case
    }
)