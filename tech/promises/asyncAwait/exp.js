const asynFn = async ()=>{
    let value;

    setTimeout(()=>{
        value = 18;
    }, 4000);

    return value;
}


async function hello(){

    console.log("Inside Hello function");
    let value = await asynFn();

    console.log("Value of value is ", value);
    console.log("I am last line of async function");

}

console.log("First line of program");
hello();
console.log("Last line of program");