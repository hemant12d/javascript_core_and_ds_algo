// Take input from cmd in javascript

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
      
// readline.question(`Enter number `, num => {console.log("Enter number is ", num)
//     readline.close();
// })

// setTimeout(()=>{
//     console.log("Settimeout - 1");
//     Promise.resolve().then(()=>{
//         console.log("First task from micor task queue")
//     })
// }, 0)
// setTimeout(()=>{
//     console.log("Settimeout - 2");
//     Promise.resolve().then(()=>{
//     })
// }, 0)
// setTimeout(()=>{
//     console.log("Settimeout - 2");
//     Promise.resolve().then(()=>{
//     })
// }, 0)

// for(let i = 1; i < 10; i++) 
//     if(i % 2 === 0) { console.log(i); console.log(i+10)}
  
// let value = 5;
// console.log(++value+value++);
// console.log(value);

// Chunck of string
// const chunckOfString = str => str.split(" ");

// const reverseString = (str)=> (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);


// const reverseStrChunks = (arrOfStr) => {
//     return arrOfStr.map(chunk =>{
//         return reverseString(chunk);
//     })
// }

// const joinChunks = arrOfStr => arrOfStr.join(" ");

// let str = "Welcome to the coding world";
// const wordOfStr = chunckOfString(str);
// const reverseStrArr = reverseStrChunks(wordOfStr);
// const reverseStr = joinChunks(reverseStrArr);
// console.log(reverseStr);



// const findSum = (num) => {
//     if(num < 10){
//        return num;
//     }
//     const lastDigit = num % 10;
//     const remainingNum = Math.floor(num / 10);
//     return findSum(lastDigit + findSum(remainingNum));
//  }
//  const main = (num) => findSum(num);
//  console.log(main(12345)); // output 6
//  console.log(findSum(12345));
//  console.log(findSum(123));
//  console.log(findSum(1234));


// console.log("Hello World !");
// let a = "string_value";

let counter = 1;

while(counter > 0){
    console.log(counter);
    counter++;
    if(counter === 5) break;
}