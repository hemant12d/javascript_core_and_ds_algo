// Write the implementation of  selectionSort
// selectionSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// selectionSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// selectionSort([9, 56, 5, 6]) // [5, 6, 9, 56]
// selectionSort([3, 5, 7, 43, 5, 2]) // [5, 6, 9, 43, 54, 56]

[2, 3, 5, 7, 5, 43]

const selectionSort = arr => {

    for (let i = 0; i < (arr.length - 1); i++) {

        let lowest = i;

        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[lowest] > arr[j]) lowest = j;
        }

        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;

    }

    return arr;
}

console.log(selectionSort([9, 56, 3, 5, 3, 5, 6]))
console.log(selectionSort([9, 56, 5, 6]))
console.log(selectionSort([3, 2, 5, 7, 9, 11, 21, 2]))