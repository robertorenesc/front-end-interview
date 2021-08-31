function doSomething() {
    console.log(this);
}
doSomething();

const doSomethingElse = () => {
    console.log(this);
}
doSomethingElse()




function myFunction() {
    console.log(arguments);
} 
myFunction('a', 'b')

const myArrowFunction = () => {
    console.log(arguments);
}
myArrowFunction('a', 'b')