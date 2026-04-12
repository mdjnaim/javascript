//1. Destructuring
const { name: userName, age: userAge } = {name: "Alice", age: 30};
const [first, second] = [10, 20];
console.log(userName, userAge, first, second);


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


//5. Reduce 
const cart = [{item:"Book", price:200}, {item:"Pen", price:50}, {item:"Notebook", price:100}];
const total = cart.reduce ((sum, product) => 
    sum + product.price, 0);
console.log("Total price:", total);


//6. Find specific user
const user = [{ id: 1, name:"Alice"},{ id: 2, name:"Bob"}];
const found = user.find(n => n.id === 1);
console.log("Found user:", found);


//7. Sort alphabetically
const names = ["Charlie", "Alice", "Bob"];
names.sort((a, b) => a.localeCompare(b));
console.log("Sorted names:", names);


//8. Flatten array
const nested = [1, [2, [3, [4]]]];
console.log("Flattened array:", nested.flat(Infinity));


//9. Object entries
const person = { name: "Alice", age: 30 };
console.log("Object entries:", Object.entries(person));

//10. Remove duplicates
const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log("Unique numbers:", unique);