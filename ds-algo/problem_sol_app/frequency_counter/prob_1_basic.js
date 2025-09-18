// Write a function called same, which accept two arrays. The function should return true if every value in the array has it's corresponding squared value in the second array. The frequency of values must be the same.

// same([1, 3, 4], [1, 16, 9]) //  true
// same([1, 3, 4], [1, 16, 4]) //  false
// same([1, 3, 4], [1, 16]) //  false
// same([1, 3, 4]) //  false
// same([1, 3], [1, 9, 12, 34]) //  true
// same([1, 9, 12, 34], [1, 3]) //  true
// same() //  false

// tricky cases 
same([1, 3, 4, 4], [1, 6, 16, 34]); // false

// same("hdkfskd", "785894") //  {error: 'typeError'}


// Approach One

// Time Complexity => O(n*n)

// function same(arr1 = false, arr2 = false) {

// // if following argument is not present
//     if (!Array.isArray(arr1) || !Array.isArray(arr2) || !(arr1.length === arr2.length)) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         // Check if first array element has squred value in another array or not

//         // Method 1)
//         if (!arr2.includes(arr1[i] ** 2)) return false
        
//         // Method 2)
//         // if (arr2.indexOf(arr1[i] ** 2) === -1) return false
//     }

//     return true;

// }



// _________________________________________________________________________

// Refortor the solution with time complexity => O(n)

// Compress element of array into object
function compressArray(array) {
    let compressObj = {};

    for (value of array)
        // counting the frequencies of array element
        compressObj[value] = (compressObj[value] || 0) + 1;

    return compressObj
}

function same(arr1 = false, arr2 = false) {

    // If follwing argument is not array
    if (
        !arr1 || !arr2 
        || !(arr1 instanceof Array) 
        || !(arr2 instanceof Array) 
        || !(arr1.length === arr2.length)
    ) return false;

    // compress repeatable elements in array 1
    let frequencyCounter1 = compressArray(arr1);

    // compress repeatable elements in array 2
    let frequencyCounter2 = compressArray(arr2);

    for (let key in frequencyCounter1) {
        // check array 1 element's square is present in the array 2 
        if (!(key ** 2 in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
    }

    return true;
}


console.log(same([1, 3, 2, 2, 3, 3, 2], [1, 9, 4, 4, 9, 9, 4]));