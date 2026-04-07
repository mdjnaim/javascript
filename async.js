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


//3. Chained Promises
function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, title: "Post 1"}])
        }, 2000);
    });
}
getUser()
    .then(user => getPosts(user.id))
    .then(posts => console.log("Posts for user:", posts));