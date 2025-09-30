// You have a function that accepts two strings & check if the second argument is the anagram of first or not

// Concreate Example
// validAnagram('cat', 'tac') // true
// validAnagram('cate', 'tac') // false
// validAnagram('ann', 'naa') // false
// validAnagram('awesome', 'somawe') // false

// Tip => Try to use frequent Counter

const compressString = (str) => {
    let compressObject = {};
    for (char of str) compressObject[char] = (compressObject[char] || 0) + 1;
    return compressObject;
}


// const validAnagram = (str1, str2) => {

//     // Check if strings contains valid character for anagram or not
//     if (str1.length !== str2.length) return false;

//     // Compress the key to use frequent counter approach
//     let frequentCounter1 = compressString(str1);
//     let frequentCounter2 = compressString(str2);

//     for (key in frequentCounter1) {

//         if (
//             !key in frequentCounter2 //Check key existance
                    // Compare exists key length
//             || !(frequentCounter1[key] === frequentCounter2[key])
//         )
//             return false;
//     }

//     return true;
// }


// Refector the solution
const validAnagram = (str1, str2) => {

    // Check if strings contains valid character for anagram or not
    if (str1.length !== str2.length) return false;

    // Compress the key to use frequent counter approach
    let frequentCounter1 = compressString(str1);

    for (char of str2) {

        //Check key existance
        if (!frequentCounter1[char]) return false;

        // reduce the limit if exists
        frequentCounter1[char] -= 1;
    }

    return true;
}

console.log(validAnagram('careeeac', 'crsaceeee'))