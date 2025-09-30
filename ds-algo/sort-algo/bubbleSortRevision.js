// Write the implementation of bubble  sort
// bubbleSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// bubbleSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// bubbleSort([9, 56, 5, 6]) // [5, 6, 9, 56]
// bubbleSort([3, 5, 7, 43, 5, 2]) // [2, 3, 5, 5, 7, 43]


const bubbleSort = arr => {
    for (let i = 1; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }

    return arr;
}

console.log(bubbleSort([9, 56, 3, 5, 3, 5, 6])); // [3, 3, 5, 5, 6, 9, 56]
console.log(bubbleSort([9, 56, 5, 6])); // [5, 6, 9, 56]
console.log(bubbleSort([3, 5, 7, 43, 5, 2])); // [2, 3, 5, 5, 7, 43]
console.log(bubbleSort([3, 5])); // [2, 3, 5, 5, 7, 43]
console.log(bubbleSort([])); // [2, 3, 5, 5, 7, 43]