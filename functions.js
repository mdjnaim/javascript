//1. Factorial
function  factorial(n) {
    if ( n<=1 ) 
        return 1;
    return n*factorial(n-1);
}
console.log("Factorial of 5 is:", factorial(5));


//2. Arrow Function
const square = n => n*n;
console.log(square(5));


//3. Callback Function
function runAfter4Sec(callback){
    setTimeout(callback, 4000);
}
runAfter4Sec(() => console.log("This runs after 4 seconds"));


//4. Sum all
function sumAll(...numbers){
    return numbers.reduce((total, current) => total + current, 0);
}
console.log("Sum of 1, 2, 3, 4, 5 is:", sumAll(1, 2, 3, 4, 5));


//5. Call counter
function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(`Called ${count} times`);
    }
}
const counter = createCounter();
counter();
counter();
counter();


//6. Greeting by time
function greetByTime(){
    const hour = new Date().getHours();
    if (hour < 12) {
        console.log("Good Morning");
    } else if (hour < 18) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
}
greetByTime();


//7. Apply twice
function applyTwice(func, value){
    return func(func(value));
}
console.log(applyTwice(x => x * 2, 5));


//8. Sum of digits
function sumOfDigits(n){
    if (n < 10)
        return n;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
console.log("Sum of digits in 1234 is:", sumOfDigits(1234));


//9. Memoization
function memoize(fn) {
    const cache = {};
    return function(n) {
        if (cache[n] !== undefined) 
            return cache[n];
        cache[n] = fn(n);
        return cache[n];
    }
}
const memoizedFactorial = memoize(factorial);
console.log("Memoized factorial of 5 is:", memoizedFactorial(5));


//10. Return multiple values
function getUser(){
    return {
        name: "John Doe",
        age: 30,
        city: "New York"
    };
}
const {name, age, city} = getUser();
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);