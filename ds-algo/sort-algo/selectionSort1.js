// selectionSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// selectionSort([9, 56, 3, 5, 3, 5, 6]) // [3, 3, 5, 5, 6, 9, 56]
// selectionSort([9, 56, 5, 6]) // [5, 6, 9, 56]
// selectionSort([3, 5, 7, 43, 5, 2]) // [5, 6, 9, 43, 54, 56]


const selectionSort = arr => {

    for (let i = 0; i < (arr.length - 1); i++) {

        let lowest = i;

        for (let j = (i + 1); j < arr.length; j++) {

            // If there are any lowest in the following, compare to start
            // then replace the starting lowest to follwing lowest
            if (arr[lowest] > arr[j])
                lowest = j;
        }

        if (i !== lowest) {
            // Swap the lowest to i position

            // let temp = arr[i];
            // arr[i] = arr[lowest];
            // arr[lowest] = temp;
        }

    }

    return arr;

}

console.log(selectionSort([9, 56, 3, 5, 3, 5, 6])); // [3, 3, 5, 5, 6, 9, 56]
console.log(selectionSort([9, 56, 3, 5, 3, 5, 6])); // [3, 3, 5, 5, 6, 9, 56]
console.log(selectionSort([9, 56, 5, 6])); // [5, 6, 9, 56]
console.log(selectionSort([3, 5, 7, 43, 5, 2])); // [5, 6, 9, 43, 54, 56]