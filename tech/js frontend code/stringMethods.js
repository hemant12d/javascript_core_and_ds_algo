// In this lesson we will learn about string.slice, string.str, string.substring methods ......

console.log("Hemant soni you are a great person you can do anything that you thing about life, you can change the world with the help of your intelligence");
console.log("Please write down your progress and your experience about amli\'s journer for the future");

let str = "Hemant Soni is a great person and he is a intelligent and smart person";
console.log(str);
console.log(str.indexOf('is'));
console.log(str.lastIndexOf('is'));
//  We use the slice method to access the element from the string
var unit = str.slice(0, 7);
console.log(unit);

unit = str.substring(0, 7);
console.log(unit);
//  We use the substring method to access the element from the string.
// So, what is the difference the between the slice the substring.
// In the slice we can access the negative value but in the substring we can't access the value.
//  substr is about the calculate length. For the example, we take a example that is mationed below
// in this example 
unit= str.substr(0, 6);
console.log(unit);