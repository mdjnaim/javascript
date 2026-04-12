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


