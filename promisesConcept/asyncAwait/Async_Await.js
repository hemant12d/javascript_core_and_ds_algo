// In this lesson we will learn about the Async and Await

async function awaitFn(){
    let users = "Hemant Soni";
    console.log('Inside await function');
    // const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    //  users = await response.json();
    console.log('user resolved');
    return users;
}

async function getUser(){
    let fetchUsers = "Fetch User";
    fetchUsers = await awaitFn();
    console.log("hello world");
    return fetchUsers;
}

async function callgetUser(){
    let getUserResponse =  await getUser();
    console.log("Last line of call getUser");
    return getUserResponse;
}

console.log("Before calling await")
let a = callgetUser();

console.log('After calling await');
console.log("Value of a : ", a);

a.then(data => console.log(data));
console.log('This is the last line of file');

