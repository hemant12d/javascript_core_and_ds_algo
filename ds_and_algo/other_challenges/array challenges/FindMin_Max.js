// Write a function that find minimum & maximum element in the array 

// findMinMax([4, 3, 6, 2, 7, 33, 34, 2]) // {max: 34, min: 2}
// findMinMax([4, 3, 6, 2, 7, 33, 34, 2]) // [34, 2]

const findMinMax = arr => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {

        // Find Max element
        if (arr[i] > max) max = arr[i];

        // Find Min element
        if (arr[i] < min) min = arr[i];
    }


    return { max: max, min: min }
}

console.log(findMinMax([]));