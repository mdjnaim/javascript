//1. Hoisting
sayHello(); 
function sayHello() {
    console.log("Hello, World!");
}


//2. Closures
function createCounter(){
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log("Current count:", counter.getCount());