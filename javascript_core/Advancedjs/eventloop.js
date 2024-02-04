setTimeout(() => {
    console.log('hi 0');
}, 0);

console.log('hi first');

a=10
b=20
c=a+b
console.log(30);

// in short certain webapis like setTimeout will wait in task queue which will delay the execution
// egs: webapis that will go to task queue -> Set timeout,interval,event Listeners,Fetch,promises
// Task queue will be executed by Event loop
/*
output:
hi first
30
hi 0 -> this will have task queue so execution will be slow
*/