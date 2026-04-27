const a=5,b=6;
const sum=a+b;
console.log('Sum = '+sum)


//////////

const n = parseFloat(prompt('Enter a num = '));
const m = parseFloat(prompt('Enter a num = '));

const sum1=n+m;

console.log(`The sum of ${n} and ${m} is ${sum1}`)

////////////////

function summ(x,y){
   return (x+y);
}
const x = parseInt(prompt('Enter first value : '));
const y = parseInt(prompt('Enter second value : '));
console.log('Sum = '+summ(x,y));


//////////

const c=parseInt(prompt('1st value : '));
const d=parseInt(prompt('2nd value : '));

const summm=(c,d)=>{
    return c+d
}
console.log('Sum = '+summm(c,d));

//////////////

const a = parseFloat(prompt('Enter first value : '));
const b = parseFloat(prompt('Enter first value : '));
const c = parseFloat(prompt('Enter first value : '));
const g = parseFloat(prompt('Enter first value : '));
let large;

if(a>b && a>c && a>g){
    large=a;
}
else if(b>a && b>c && b>g){
    large=b;
}
else if(c>a && c>b &&c>g){
    large=c;
}
else {
    large=g;
}
console.log('Lagrest value is : '+large);

/////////////

const d = parseFloat(prompt('Enter first value : '));
const e = parseFloat(prompt('Enter first value : '));
const f = parseFloat(prompt('Enter first value : '));
const h = parseFloat(prompt('Enter first value : '));
let small;

if (d<e && d<f && d<h){
    small = d;
}
else if(e<d && e<f && e<h){
    small = e;
}
else if(f<e && f<d && f<h){
    small = f
}
else{
    small = h;
}
console.log('Smallest value is : '+small);

///////////

const a = parseFloat(prompt('Enter first value : '));
const b = parseFloat(prompt('Enter second value : '));
const c = parseFloat(prompt('Enter third value : '));
const d = parseFloat(prompt('Enter fourth value : '));

const largest = Math.max(a,b,c,d);

console.log('The largest number is '+ largest);

//////////////////

const e = parseFloat(prompt('Enter 1st value : '));
const f = parseFloat(prompt('Enter 2nd value : '));
const g = parseFloat(prompt('Enter 3rd value : '));
const h = parseFloat(prompt('Enter 4th value : '));

const small = Math.min(e,f,g,h);

console.log('The smallest number is '+small);

////////////////////

function large(num1,num2){
   let large;
   if(num1>num2){
       large = num1;
   }else{
       large = num2;
   }
   return large;
}
const num1 = parseInt(prompt('Enter 1st value : '));
const num2 = parseInt(prompt('Enter 2nd value : '));

console.log('Largest value is : '+large(num1,num2));

////////////////

const num1 = parseInt(prompt('Enter 1st value : '));
const num2 = parseInt(prompt('Enter 2nd value : '));

let min = (num1 > num2) ? num1 : num2;

while(true){
    if (min % num1 == 0 && min % num2 == 0){
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}

///////////////

const num = parseInt(prompt('Enter a positive number : '));
let sum = 0;
 for (i=0; i<=num; i++){
     sum += i;
 }
 
 console.log('The sum of natural number is : ' +sum);

  ////////////
 
 const num1 = parseInt(prompt('Enter a positive number : '));
 let result = 0, i = 0;
 
 while(i <= num1){
     result += i;
     i++;
 }
 console.log('The sum of natural numbers : '+result);

 /////////////////

 function sum(num){
    if(num > 0){
        return num + sum (num - 1);
    }else{
        return num;
    }
}

const number = parseInt(prompt('Enter a positive integer : '));
const result = sum(number);
console.log(`The sum is ${result}`);

//guess number game
let num = 56;
let guess = parseInt(prompt('Guess a number between 1 and 100 : '));
while(guess !== num){
    if(guess < num){
        console.log('Too low! Try again.');
    }else{
        console.log('Too high! Try again.');
    }
    guess = parseInt(prompt('Guess a number between 1 and 100 : '));
}
console.log('Congratulations! You guessed the number.');


//////
let num = prompt('Enter a number: ');
    if(10<=num && 30>=num){
        console.log('This is a number between 10 to 30.')
    }
    else if(50<=num && 90>=num && num%2!==0){
        console.log('This is a odd number between 50 to 90.')
    }else{
        console.log('Input a correct number between 10 to 30 and 50 to 90.')
    }


    /////////////////
    let marks = [85,97,44,37,76,60];
let sum=0
for(let val of marks){
    sum = sum + val;
    console.log("Total mark is : ", sum);
}
let avg = sum/marks.length;
console.log("Average mark is : "+avg);

////////////////

let items = [250,645,300,900,50];
console.log('Actual price: ',items);
for(let i=0; i<=items.length-1;i++){
   let offer = (items[i]*10) /100;
   items[i] = items[i] - offer;
}
console.log('Offer price: ',items)

//////////////
function countVowel(str){
    let count=0;
    for(let i=0; i<=str.length-1; i++){
        let char = str[i];
        if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
            count++;
        }
    }
    console.log('vowel count : ', count);
}
countVowel('hgfryhgtll');

/////////////////
const vowel = (str) => {
    let count = 0;
    for (let i = 0; i <= str.length-1; i++){
        let char = str[i];
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log('Vowel count: ',count);
}
vowel('asdfghjklzxcvbnmqwertyuiop');

///////////////
function squareNum(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]*arr[i]);
    }
}
squareNum();

///////////////////

const squareNum = () =>{
    sqr = [1,2,3,4,5,6,7,8,9,10];
    for(val of sqr){
       console.log(val*val);
    }
}
squareNum();

//////////////////
let arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach((num) =>{
    console.log(num*num);
});

////////////////

let arr = [1,2,3,4,5,6,7,8,9,10]
let expNum = (num) => {
    console.log(num**2);
}
arr.forEach((expNum)); 

//////////////////

let arr = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr.map((val) => {
    if(val%2==0){
         return val**2; 
    }
  
});
console.log(newArr);

////////////////

let arr = [1,2,3,4,5,6,7,8,9,10]
let newArr2 = arr.filter((val) => {
    if(val%2==0){
         return val**2; 
    }
  
});
console.log(newArr2);

/////////

let arr = [1,2,3,4,5,6,7,8,9,10]
let newArr3 = arr.reduce((pre, cur) => {
return pre+cur; 
});
console.log(newArr3);

///////////////

let arr = [15,56,86,91,35,0,6,89,36,48,9,10]

let newArr4 = arr.reduce((pre, cur) => {
return pre > cur ? pre : cur; 
});
console.log(newArr4);

///////////////////////

let arr = [15,97,56,86,91,35,92,0,6,96,89,90,36,48,94,10]

let newArr5 = arr.filter((marks) => {
return marks>=90; 
});
console.log(newArr5);

/////////////////

let n = prompt('Enter a valid number : ');
let arr = [];
for (let i=1; i<=n; i++){
    arr[i-1] = i;
}
let sumOfn = arr.reduce((pre,cur) => {
    return pre + cur;
});
console.log("Sum of those value is : ",sumOfn);

let mulOfn = arr.reduce((prev, curr) =>{
    return prev*curr;
});
console.log("Multiply of those value is : ",mulOfn);

  ////////////

  //Simple greeting function
function greetName(name){
    console.log('Hello ',name);
}
greetName('Naim');

//Find out max value
function findMax(a,b){
    if(a>b){
        console.log(`${a} is max value.`);
    }else{
        console.log(`${b} is max value.`);
    }
}
findMax(506,98);

//Odd even function
function oddEven(num){
    if(num % 2 == 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
oddEven(9);

////////
//Reverse array

function reverseArray(arr){
    const print = arr.reverse();
    console.log('Reverse array : ',print);
}
reverseArray(['apple','banana','orange']);

//Reverse string

function reverseString(str){
    const reverse = str.split('').reverse().join('');
    console.log('Reverse string: ', reverse);
}
reverseString('amar sonar bangla');

///////////////

//Remove duplicate array
function removeDuplicate(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
       if(!result.includes(arr[i])){
           result.push(arr[i]);
       }
    }
    console.log('Without duplicate value: ',result);
}
removeDuplicate([1,4,5,6,4,6,2,3,8,9,8,3,9]);

//Remove duplicate array

function removeArray(arr){
    const unique = [...new Set(arr)];
    console.log('Without duplicate value: ',unique);
}
removeArray([1,4,5,6,4,6,2,3,8,9,8,3,9]);

///////////////

// Word count
function countWord(sentence, word){
    let words = sentence.split(' ');
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(words[i] === word){
            count++;
        }
    }
    return count;
}
console.log(countWord('the cat sat on the mat', 'the'));

// Object 

let person1 = {
    name: 'naim',
    age: 25,
    city: 'dhaka'
}
let person2 = {
    name: 'Naim',
    age: 26,
    city: 'Dhaka'
}
console.log(person1);
console.log(person2.age);

// Object 

let person1 = {
    name: 'naim',
    age: 25,
    city: 'dhaka'
}
let person2 = {
    name: 'Naim',
    age: 26,
    city: 'Dhaka'
}
console.log(person1);
console.log(person2.age);

// Car object
let car1 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2025
}
console.log(car1);

//Bank object
let bank1 = {
    deposit:5000,
    withdraw:200,
    balance:10000
}
console.log(bank1);

//Student object
let student = [
    {name:'naim', marks:50},
    {name:'fahim', marks:60},
    {name:'nahin', marks:70}]
for (person of student){
    console.log(person);
    console.log(person.name);
    console.log(person.marks);
}

// Car object
let car1 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2005,
    showInfo(){
        console.log(`This is ${this.brand} ${this.model} since ${this.year}`)
    }
}
car1.showInfo();

// Bank object with method

let bank = {
    balance: 50000,
    deposit(amount){
        this.balance += amount;
        console.log(`Your account is debited ${amount} TK now your available balance is ${this.balance} TK.`);
    },
    withdraw(amount){
        if(this.balance<amount){
            console.log(`You don't have enough money.`);
        }else{
            this.balance -= amount;
            console.log(`Your account is credited ${amount} TK now your available balance is ${this.balance} TK.`);
        }
    }
};
bank.deposit(500);
bank.withdraw(1000);
bank.withdraw(60000);

//////////////////

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    info(){
        console.log(`Dog name is ${this.name} and age is ${this.age} years old.`);
    }
}
const dog1 = new Animal('Ricky', 3 );
dog1.info();

//////////////////////

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        this.area = this.height * this.width;
        console.log(`The area of rectangle is ${this.area}.`);
    }
    perimeter(){
        this.perimeter = 2 * (this.height + this.width);
        console.log(`The perimeter of rectangle is ${this.perimeter}.`)
    }
}
const m = new Rectangle(4,5);
m.area();
m.perimeter();

///////////////

class Student{
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }
    result(){
        if (this.marks>33){
            console.log(`You are pass. You obtain ${this.marks} marks.`);
        }else{
            console.log(`You are fail. You obtain ${this.marks} marks.`);
        }
    }
}
const check1 = new Student('Naim', 55);
const check2 = new Student('Fahim', 25);
check1.result();
check2.result();


//////////////////////////

class BankAccount{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Mr/Mrs ${this.name} Your deposit amount is ${amount} tk and your available balance is ${this.balance} tk.`);
    }
    withdraw(amount){
        this.balance -= amount;
        console.log(`Mr/Mrs ${this.name} Your withdaw amount is ${amount} and your available balance is ${this.balance} tk.`);
    }
    showBalance(){
        console.log(`Mr/Mrs ${this.name} Your available balance is ${this.balance} tk.`);
    }
}
const quary1 = new BankAccount('Naim', 5000);
const quary2 = new BankAccount('Fahim', 7000);
quary1.deposit(500);
quary2.deposit(1000);
quary1.withdraw(5000);
quary2.showBalance();

///////////////

function vowelsAndConsonants(s) {
    for(let i=0; i<s.length; i++){
        let vowel = s[i];
        if(vowel=='a' || vowel=='e' || vowel=='i' || vowel=='o' || vowel=='u'){
            console.log(vowel);
        }
    } 
    for (let i=0; i<s.length; i++){
        let consonant = s[i];
        if(consonant!='a' && consonant!='e' && consonant!='i' && consonant!='o' && consonant!='u'){
            console.log(consonant);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

//////////////


function regexVar() {
    const re = /^([aeiou]).*\1$|^[aeiou]$/;
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}

///////////

function performOperation(secondInteger, secondDecimal, secondString) {
   
    const firstInteger = 4;
    
    const firstDecimal = 4.0;
    
    const firstString = 'HackerRank ';
    
    console.log(firstInteger + parseInt(secondInteger));
    
    console.log(firstDecimal + parseFloat(secondDecimal));
    
    console.log(firstString + secondString);

}   


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}

//////////////////

function reverseString(s) {
    try{
        
        let rev = s.split("").reverse().join("");
    console.log(rev);
    }catch(error){
        console.log(error.message);
        console.log(s)
    }
}



function main() {
    const s = eval(readLine());
    
    reverseString(s);
}

////////////////

function factorial(n){
    let result = 1;
   for(let i=n; i>0; i--){
     result *= i;
   }
   console.log(`Factorial of ${n} is : ${result}`);
   return result;
}
factorial(5);

/////////////////

function isPositive(a) {
    if(a==0){
        console.log("Zero Error");
    }else if(a<0){
        console.log("Negative Error");  
    }else{
        console.log("YES"); 
    }
}
isPositive(5);
isPositive(9);
isPositive(0);
isPositive(0);
isPositive(-6);
isPositive(-3);

////////////////

function main(r) {
    const PI = Math.PI;
    
    
    let area = PI*r*r;
    let perimeter = 2*PI*r;
    console.log('Area :',area);
    console.log('Perimeter :',perimeter);
}

main(2.5);
main(2);

///////////////

function getLetter(s) {
    let letter;
    switch(s[0]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          letter = 'A';
          break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
          letter = 'B';
          break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
          letter = 'C';
          break;
        default:
          letter = 'D';
    }
    return letter;
}
console.log(getLetter('rtyui'));

////////////////

