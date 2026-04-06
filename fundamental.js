//1. Data Types
let name = "naim";
let age = 25;
let isStudent = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent); 


//2. Variables and Operators
let a = 11, b = 21;
let sum = a + b;
let difference = a - b;
let product = a * b;
let division = a / b;
console.log(sum);
console.log(difference);
console.log(product);
console.log(division);


//3. Swapping Variables
[a, b] = [b, a];
console.log("After swapping:", a, b);


//4. Even or Odd
console.log(a % 2 === 0 ? "Even" : "Odd");


//5. Calculator using Switch Case
function cal(a, b, operator){
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return b !== 0 ? a/b: "Can't divide by zero";
        default:
            return "Invalid operator";
    }
}
console.log(cal(10, 5, '+'));
console.log(cal(10, 50, '-'));
console.log(cal(10, 5, '*'));
console.log(cal(10, 5, '/'));
console.log(cal(10, 0, '/'));