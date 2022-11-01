// function greet()
// {
    // console.log("Good Afternoon Hemant Soni Have a Great Evening");
    // return "Good Afternoon Hemant Soni Have a Great Evening";
// }
// greet();

// Arrow function start from here

// Arrow function with multiple statement
// greet = ()=> {
    //     console.log("This is arrow function's statement 1");
    //     console.log("This is arrow function's statement 2");
    //     console.log("This is arrow function's statement 3");
    // }
    // greet();
    
    // Arrow function with one liner statement
    // greet = () => console.log("This is arrow function");
    // greet();
    // console.log(greet());

    // Arrow function with return value 
    // greet = () => "I am the value of Arrow type of return function";
    // // greet();
    // console.log(greet());

    // Arrow function with one argument
    // greet = (name)=> name;
    // let onename = "Hemant Soni";
    // console.log(greet(onename));

    // Arrow function with more than one argument 
    greet = (name, age)=> `Name is ${name} and age is ${age}`;
console.log(greet("Hemant Soni", 19));