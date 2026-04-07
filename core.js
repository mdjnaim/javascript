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


//5. Object creation
const parent = {greet(){
    console.log("Hello from parent");
}}
const child = Object.create(parent);
child.greet();

//6. == vs ===
console.log(5 == '5');  
console.log(5 === '5'); 

//7. IIFE (Immediately Invoked Function Expression)
const appConfig = (function() {
    const version = "1.0.0";
    return { version };
})();
console.log("App version:", appConfig.version);


//8. var in loop issue
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); 
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); 
}

