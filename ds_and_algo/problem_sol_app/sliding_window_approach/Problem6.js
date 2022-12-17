// Write a function called maxSubArray which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubArray([], 4) // null
// maxSubArray([3, 4, 5, 5], 0) // null
// maxSubArray([3, 4, 5, 5], 2) // 10
// maxSubArray([3, 4, 5], 4) // null
// maxSubArray([3, 4, 5, 5, 6, 7], 3) // 18

// const maxSubArray = ( arr, n ) => {
//     // Check if array is empty or the n is greater than size of array
//     if ( arr.length === 0 ) return 0;

//     if ( n > arr.length ) return null;

//     // set the loop limit, to keep in boundary to calculate the sum on n consecutive
//     const loopLimit = (arr.length - n) + 1;

//     let maxSum = 0;
//     let tempSum = 0;

//     for ( let i = 0; i < loopLimit; i++ ) {
//         tempSum = arr[i];

//         // find sum of n element
//         for ( let j = (i + 1); j < (i + n); j++ )
//             tempSum += arr[j];

//         // Compare current sum to prveious sum
//         if ( tempSum > maxSum ) maxSum = tempSum;
//     }

//     return maxSum;
// }


// Refactor solution

// const maxSubArray = ( arr, n ) => {
//     // Check if array is empty or the n is greater than size of array
//     if ( arr.length === 0 || n > arr.length ) return null;

//     let maxSum = 0;
//     let tempSum = 0;

//     // Get initial sum
//     for ( let i = 0; i < n; i++ ) {
//         maxSum += arr[i];
//     }

//     // Find the sum of n element
//     for ( let j = n; j < arr.length; j++ ) {
//         tempSum = ( maxSum + arr[j] ) - arr[j - n]
//         if ( tempSum > maxSum ) maxSum = tempSum;
//     }

//     return maxSum;
// }


console.log(maxSubArray([3, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 10], 3))
console.log(maxSubArray([1], 1))


