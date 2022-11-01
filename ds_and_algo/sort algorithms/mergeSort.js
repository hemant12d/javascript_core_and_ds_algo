// Write the implementation of mergeSort

// 1) Implement the mergeSortedArray function implementation 🤝
// 2) write the implementation of divideArray (Recursive function) 🤝
// 3) Fit them into mergeSort 🤝
// 4) Look back & optimized

// Combine & sort the sorted array
function mergeSortedArray(arr1, arr2) {

    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }

    // If value are still there in first array (arr1) then added to results
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // If value are still there in second array (arr2) then added to results
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    // new sorted array from 2 sorted arrays
    return results;

}


// Implement the merge sort
function mergeSort(arr) {

    // Base Cases
    if (arr.length <= 1) return arr;

    // Implement the divide array logic
    let middle = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, middle);
    let arr2 = arr.slice(middle, arr.length);

    // Return the Sorted Array from sorted arrays
    return mergeSortedArray(mergeSort(arr1), mergeSort(arr2));

}

// Testing the merge sort 

console.log(mergeSort([56, 55, 54, 63, 62, 34, 2]));
console.log(mergeSort([56, 55, 62, 34, 2]));
console.log(mergeSort([62, 34, 2]));
console.log(mergeSort([5, 4]));