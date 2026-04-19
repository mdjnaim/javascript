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