// Minimize deletion or append to make consecutive occurrence of all elements equal
// Given an array arr[] of size N having positive elements, the task is to find the minimum number of deletion or append operations to make consecutive occurrences of all elements equal. ( balance array )

// Examples

// 1) 
// Input: arr[1, 1, 2, 2]
// Output: 0 ( Remove or append element count )

// 2) 
// Input: [5, 5, 5, 6, 2, 2, 5, 5] ( Here, deletion is less expensive task )
// Output: 2  ( Remove or append element count )

// 3) 
// Input: [5, 6, 2, 2, 5, 5] ( Here, deletion is less expensive task )
// Output: 2  ( Remove or append element count )

// Hint ( Median mathematics value )

// 1) The problem can be solved is based on the mathematical concept of the median value.

// In N numbers, the median is the number that has the least sum difference from all of the numbers present. Same in the problem we have to find the minimum number of operations such that all the elements have the same frequency. Therefore, we need to find a frequency of an element which has the least sum difference from all of the present frequencies. So, we can use the concept of the median here.

const countElemOccurence = arr => {
    const elemOccurence = {};
    for(value of arr)
        elemOccurence[value] ? elemOccurence[value]++ : elemOccurence[value] = 1;

    return elemOccurence;
}

const checkIfOccurrenceEqual = occurrenceValue => {
    // const occurrenceValue = Object.values(occurrenceCount);
    if(!occurrenceValue.length) return true;
    let first = occurrenceValue[0];
    for(let i = 1; i < occurrenceValue.length; i++){
        if(first !== occurrenceValue[i]) return false;        
    }
    return true;
}

const consecutiveArrFreCount = arr => {

    let pre = arr[0];
    let consArrFreCt = [];
    let uniqueCount = 1;

    for(let i = 1; i < arr.length; i++){
        if(pre === arr[i]){
            uniqueCount++;   
        }
        else{
            consArrFreCt.push(uniqueCount);
            uniqueCount = 1; // count reset
            pre = arr[i];  
        }
    }

    consArrFreCt.push(uniqueCount);
    return consArrFreCt.sort();
}



const findMinOrderDeletionOrAppend = () => {
    
    // count arr frequency
    const conArrFreCt = consecutiveArrFreCount(arr);
    
    // Check if occurrences of all elements is already equal.
    const isOccrrenceEqual = checkIfOccurrenceEqual(conArrFreCt);
    if(isOccrrenceEqual) return 0;

    // Use median algorithems to find absolute difference
}

console.log(consecutiveArrFreCount([2, 2, 2, 2]));
console.log(consecutiveArrFreCount([2, 2, 2, 3, 3, 4, 5]));

[2, 2, 2, 3, 3, 4]
