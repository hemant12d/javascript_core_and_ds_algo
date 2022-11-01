// 1) Implement all the helper function

// 2) Fit them to main function

// getDigit(3434, 2) => 4     
// getDigit(3434, 1) => 3     
// getDigit(3434, 3) => 3     
// getDigit(455, 3) => 0     

const getDigit = (value, index) => {

    // 1) Approach 1

    // let str = value.toString();
    // if (str.length <= index) return 0;
    // return str[str.length - (index + 1)];

    // 2) Approach 2 (Looks simple & clean)
    return Math.floor(Math.abs(value) / Math.pow(10, index)) % 10;
}

const digitCount = value => {
    if (value === 0) return 1;
    return Math.floor(Math.log10(Math.abs(value))) + 1;
}

const mostDigit = arr => {

    let mostDigit = 0;
    for (let i = 0; i < arr.length; i++)
        mostDigit = Math.max(mostDigit, digitCount(arr[i]))

    return mostDigit;

}

console.log(mostDigit([3, 534, 343, 23, 534, 34343, 343434, 3432423]))
console.log(mostDigit([3, 534, 343, 23, 534]))
console.log(mostDigit([3, 34343, 343434, 3432423]))
console.log(mostDigit([3, ,]))