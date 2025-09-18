// Write an function called reverseArray that accepts an integer array & return the reverse of array in array format

// reverseArray([2, 3, 4, 5, 5]) // [5, 5, 4, 3, 2]
// reverseArray([6, 1, 4, 9, 7, 7, 8, 8]) // [8, 8, 7, 7, 9, 4, 1, 6]
// reverseArray([]) // []

const reverseArray = arr => {

    let newArr = arr.split('');
    let length = newArr.length;
    let start = 0;
    let end = (length - 1);
    // Let's reverse the array with optimized solution, that's what noob coder don't do
    while (start < end) {
        let temp = newArr[start];
        newArr[start] = newArr[end];
        newArr[end] = temp;
        start++;
        end--;
    }

    return newArr.join('');
}
console.log(reverseArray("Hemant"));


// How to solve a problem

// Understand the problem, write down this to paper
// Check expected input & ask for expected return
// Devide into sub parts
// Pick easy
// start,
// Look back & optimized the code

