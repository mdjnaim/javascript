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
