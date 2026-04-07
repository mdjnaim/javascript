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


//3. Regular vs arrow functions
const obj = {
    name: "Alice",
    regular: function(){
        console.log("Regular function:", this.name);
    },
    arrow: () => {
        console.log("Arrow function:", this?.name);
    }
}
obj.regular(); 
obj.arrow();   


//4. Prototype
function Person(name) {
    this.name = name;
}
Person.prototype.speak = function(){
    console.log(`Hi, I'm ${this.name}`);
}
const alice = new Person("Alice");
alice.speak();