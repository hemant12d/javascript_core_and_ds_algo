// Implement the quick sort algo

// 1) Implement the povit point function

// 2) Implement the SwapValuesInArray function

// 3) Implement the Recursive QuickSort

// 4) Fit them smartely for best performance

// Swap function

function SwapValuesInArray(arr, swapIndexLocation, swapIndex) {
    let temp = arr[swapIndexLocation];
    arr[swapIndexLocation] = arr[swapIndex]
    arr[swapIndex] = temp;
}

const povitPoint = (arr, start = 0, end = arr.length) => {


    // Count the less value compare to start
    let povitCounter = start;

    for (let j = (start + 1); j < end; j++) {

        if (arr[start] >= arr[j]) {

            // Increment the counter to put the start's value to correct position
            // Also increment the counter to swap the next small value

            povitCounter++;

            if (arr[povitCounter] !== arr[j]) {
                // put all the small value compare to start, in the start
                SwapValuesInArray(arr, povitCounter, j)
            }

        }

    }

    // Swap, to put the start at the right position
    SwapValuesInArray(arr, start, povitCounter)

    return povitCounter;
}


function QuickSort(arr, left = 0, right = arr.length) {

    if (arr.length <= 1) return arr;

    if (left === right || left === (right - 1)) return;

    let arrangedIndexPosition = povitPoint(arr, left, right);

    // Left...
    QuickSort(arr, left, arrangedIndexPosition);

    // Right...
    QuickSort(arr, arrangedIndexPosition + 1, right);

    return arr;
}
let arrexp = [4, 45, 34, 645, 34, 3, 645, 756, 545];

console.log(QuickSort([45, 343, 534, 343, 23, 5, 4, 3, 534, 343, 3, 4, 4]));
console.log(QuickSort([45, 343, 534, 343, 23, 5]));
console.log(QuickSort([45]));
console.log(QuickSort([45, 343]));
console.log(QuickSort([545, 343]));


