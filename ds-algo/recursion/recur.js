// Find factorial of a number
// 5! = 5 * 4!

// Recursive Approach
// const calculateFactorial = number =>{
//     if(number === 1) return 1; // base condition
//     return number * calculateFactorial(number-1);
// }

// Loop approach
// const calculateFactorial = number =>{
//     let fact = 1;
//     for(let i = number; i > 0; i--){
//         fact *=i;
//     }
//     return fact;
// }

console.log({factorial: calculateFactorial(5)});
console.log({factorial: calculateFactorial(6)});
console.log({factorial: calculateFactorial(7)});
console.log({factorial: calculateFactorial(7)});
console.log({factorial: calculateFactorial(9)});