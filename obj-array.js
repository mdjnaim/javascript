//1. Destructuring
const { name: userName, age: userAge } = {name: "Alice", age: 30};
const [first, second] = [10, 20];
console.log(userName, userAge,first, second);


//2. Merge objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const merged = {...obj1, ...obj2};
console.log(merged);


//3. Map
const doubled = [1, 2, 3].map(x => x * 2);
console.log(doubled);

const a = [1,2,3,4,5,6,7,8,9,10].map(n=>n*3);
console.log(a);


//4. Filter
const oddNumbers = [1,2,3,4,5,6,7,8,9,10].filter(n => n % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

const evenNumbers = [1,2,3,4,5,6,7,8,9,10].filter(n => n% 2===0);
console.log("Even numbers:", evenNumbers);
