// Write the implementaion of insertion Sort

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {

        let currentVal = arr[i];

        for (var j = (i - 1); (j >= 0) && (arr[j] > currentVal); j--)
            arr[j + 1] = arr[j];

        arr[j + 1] = currentVal;
    }

    return arr;
}

console.log(insertionSort([5, 4, 56, 3, 67, 34, 12]));

console.log(insertionSort([5, 4, 34, 12]));
console.log(insertionSort([5, 4, 67, 34, 12]));