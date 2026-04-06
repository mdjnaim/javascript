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


//6. Skip multiples of 2 & 3
for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0 || i % 2 === 0) 
        continue;
    console.log(i);
}


//7. Largest of Three Numbers
function largestOfThree(a, b, c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && b >= c)
        return b;
    else 
        return c;
}
console.log("Largest number from 30, 65, and 45 is:", largestOfThree(30, 65, 45));


//8. Celsius to Fahrenheit
function cTof(celsius){
    return (celsius * 9/5) + 32;
}
console.log("35 degrees celsius is equal to", cTof(35) + " degrees fahrenheit");


//9. Palindrome Check
function isPalindrome(str){
    const cleaned = str.toUpperCase().replace(/[^A-Z]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log("Is 'madam' a palindrome?", isPalindrome("madam"));
console.log("Is '12321' a palindrome?", isPalindrome("12321"));


//10. Vowels Count
function countVowels(str){
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}
console.log("Number of vowels in 'Hello World':", countVowels("Hello World"));