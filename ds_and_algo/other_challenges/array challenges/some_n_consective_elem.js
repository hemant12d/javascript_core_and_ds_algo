// Highest sum of same n consective elements

const sumOfNum = (num, count)=>{
  let newSum = 0;
  for(let i = 0; i < count; i++)
    newSum +=num; 

  return newSum;
}

const highestSum = (arr)=>{
  let sum = 0;
  let counter = 1;
  let elem = arr[0];
  let i = 1;
  while(i < arr.length){
    if(elem === arr[i]){
      counter++;
    }
    else {
      // calculate previous sum
      let newSum=sumOfNum(elem, counter);

      // Find highest sum
      sum = newSum > sum ? newSum : sum;

      elem = arr[i]; // Point to new element
      counter = 1; // reset counter
    }

    i++;
  }

  // calculate previous sum
  let newSum = sumOfNum(elem, counter);

  // Find highest sum
  sum = newSum > sum ? newSum : sum;

  // return the result
  return sum;
}

// let input = [9, 8, 7, 6, 1, 3, 4, 5, 6, 7, 8, 2];
// const result = highestSum(input);
// console.log({sum: result})



// Highest sum of given n (not same element sum) consective elements
// const highestSum = (arr, n)=>{
//   let start = 0, end = arr.length - (n-1), sum = 0;
//   while(start < end){
//     let tempSum = arr[start];
//     for(let j = start + 1; j < (start+n); j++){
//       tempSum += arr[j]
//     }
//     sum = tempSum > sum ? tempSum : sum;
//     start++;
//   }
//   return sum;
// }
// let input = [9, 8, 7, 6, 1, 3, 4, 5, 6, 7, 8, 2];
// console.log({sum: highestSum(input, 3)})

// let input = [9, 8, 7, 6, 1, 3, 4, 5, 6, 7, 8, 2];
// console.log(maxSum(input, 4));
