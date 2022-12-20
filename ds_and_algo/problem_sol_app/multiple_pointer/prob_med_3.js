// Problem link: https://workat.tech/problem-solving/practice/three-sum


// Solution
// input: [1, 1, 0, -1, -2]
// tripletSumEqToZero: [
//   [-2, 1, 1],
//   [-1, 0, 1]
// ]

// Find unique combition with 3 sets values
const uniqueCombition = findUniqueCombition(arr);

// Find if sum is equal to zero or not
const setOfSumZero = findSetOfZero(uniqueCombition);

// Sort zero sum triplete element ( No need to sort all the possible pair)
const result = sortArrayElement(setOfSumZero);

return result;
