// Write the implementation of bubble  sort
// bubbleSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// bubbleSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// bubbleSort([9, 56, 5, 6]) // [5, 6, 9, 56]
// bubbleSort([3, 5, 7, 43, 5, 2]) // [5, 6, 9, 43, 54, 56]

const bubbleSort = arr => {

    for (let i = 1; i < arr.length; i++) {

        let noSwap = true;

        for (let j = 0; j < (arr.length - i); j++) {

            // if value j index is less then i index, then swap
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }

        if (noSwap) break;
    }



    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {

    //         // if value j index is less then i index, then swap
    //         if (arr[j] > arr[i]) {
    //             let temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }

    return arr;
}

// console.log(bubbleSort([9, 56, 3, 5, 3, 5, 6]))
// console.log(bubbleSort([9, 56, 5, 6]))
console.log(bubbleSort([3, 2, 5, 7, 9, 11, 21, 2]))