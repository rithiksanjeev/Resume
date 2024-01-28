// Async api call with await instead of promise we can use this
// Await is a function call that waits till the Api call is over
const AsyncGetcall = async() => {
    const apiCall = await fetch('https://jan-project-aa287-default-rtdb.asia-southeast1.firebasedatabase.app/rithik.json')
    console.log(apiCall);
}