//1. Set timeout
setTimeout(() => 
    console.log("This runs after 2 seconds"), 2000);


//2. Promise with fake delay
function getUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Alice", age: 30});
        }, 3000);
});
}
getUser().then(user => console.log("User data:", user));