// Write a function called sumZero that contain sorted array of integers as an argument, and find first pair of elements in array which sum is equal to 0 & return the pair if not find any pair then return undefined.

// sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]) // [-4, 4]
// sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]) // [-4, 4]
// sumZero([-9, -7, -6, -1, 0, 1, 2, 3, 4]) // [-1, 1]
// sumZero([-9, -7, -6, -3, 0, 1, 2, 4, 5]) // [-1, 1]
// sumZero([0, 1, 2, 3, 4]) // undefined
   
// Try to keep optimized time complexity   
   
// Time Complexity => O(n*n)
// Hint: Sorted array

// const sumZero = arr => {
//     // Check for sum pairs in arr
//     for (let i = 0; i < (arr.length - 1); i++) {

//         for (let j = (i + 1); j < arr.length; j++) {
//             // return pair, if element's pair's sum is zero
//             if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//         }

//     }


//     // if pair is not found there, then return undefined
//     return undefined;
// }


// ______________________________________________________________


// let's optimized the solution (step-5) [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

// const sumZero = arr => {

//     // Check for sum pairs in arr
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];

//         if ((arr[left] + arr[right]) > 0)
//             right--;

//         else
//             left++;
//     }

//     // if pair is not found there, then return undefined
//     return undefined;
// }

const sumZero = arr =>{
    if(!(arr instanceof Array)) return {error: "typeError"}

    if(arr.length < 2) return {error: "argumentError"}

    let left = 0;
    let right = arr.length - 1;

    // Use file when array contains n numbers of element
    while(left < right){

        if(arr[left] + arr[right] === 0) return [arr[left], arr[right]];

        if(arr[left] + arr[right] > 0) right--;

        if(arr[left] + arr[right] < 0) left++;        

    }

    return undefined;
}


// * Understand again 

console.log(sumZero([-9, -7, -6, -4, -2, -1, 1, 2, 3, 5, 6, 13, 14, 15]))
console.log(sumZero([-9, -7, -6, -4, -2]))


