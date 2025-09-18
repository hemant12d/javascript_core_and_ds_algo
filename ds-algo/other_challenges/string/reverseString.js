const str = "nodejs";

// Reverse String

// 1) 
// const reverseString = str => {
//     let reverseStr = '';
//     let start = (str.length - 1);
//     let end = 0;
//     for(let i = start; i >= end; i--){
//         reverseStr +=str[i]
//     }
//    return reverseStr;
// }


// 2
// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// reverseString("hello");

// 3
const reverseString = str => {
    if(str === '') return '';
    return reverseString(str.substr(1)) + str.substr(0, 1);
}

console.log({value: reverseString("welcome")});