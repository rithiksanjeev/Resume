// objects
const smartTablet = {
    model: 'iPad 9 Gen',
    company: 'apple',
    color: 'grey'
}

const ShallowcopySmartTablet = smartTablet; // shallow copy
ShallowcopySmartTablet.color ='white'

console.log(smartTablet); // color of smartTablet will get updated because in heap memory the refernce will get updated

// deep copy - prefer this
// stringify ->it converts object into string
// parsing -> Converts string into object
console.log(JSON.stringify(smartTablet)); //{"model":"iPad 9 Gen","company":"apple","color":"white"}
const deepCopySmartTablet = JSON.parse(JSON.stringify(smartTablet)); // this will create dedicated object in memory
deepCopySmartTablet.color = 'red'
console.log(smartTablet); // this won't change color to red
console.log(deepCopySmartTablet);

console.log('this',this); // global object

const smartTabletthis = {
    model: 'iPad 9 Gen',
    company: 'apple',
    color: 'grey',
    // arrow function does not change values even when this is used
    getColor:function() {
        console.log("hello color",this.color); // this can get color of defined variable in function
    },
    
    getGlobal:() => {
        console.log('this',this);
    }
}
smartTabletthis.getColor()
smartTabletthis.getGlobal

function greet() {
    console.log(this); // global object
    console.log('hello world');
}
greet()