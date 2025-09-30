// Implement a function called countUniqueValues, which accepts a sorted array, & counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([-1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8]) // 9
// countUniqueValues([]) // 0

// countUniqueValues([6, 8, 7, 7, 7, 6, 8]) // 3


// Time Complexity => O(n*n)

// const countUniqueValues = array => {

//     console.log("Hellow")
//     let newArr = [];

//     for (let i = 0; i < array.length; i++) {
//         if (!newArr.includes(array[i]))
//             newArr.push(array[i]);
//     }

//     return newArr.length;
// }


// Refactor & new optimized solution


// Time Complexity => O(n)
const countUniqueValues = arr => {

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    console.log(arr);

    return (i + 1);
}

console.log(countUniqueValues([-1, -1, -1, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]));