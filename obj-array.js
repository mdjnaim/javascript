//1. Destructuring
const { name: userName, age: userAge } = {name: "Alice", age: 30};
const [first, second] = [10, 20];
console.log(userName, userAge,first, second);


//2. Merge objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const merged = {...obj1, ...obj2};
console.log(merged);