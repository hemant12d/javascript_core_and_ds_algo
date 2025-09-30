
let marks = [ 45, 45, 23, 64, 75, 34];

// find the element's index in the array...

marks.indexOf(23); // => 2

marks.push(99); // insert the element to end

marks.unshift(77); // insert the element in starting

marks.pop(); // remove & return last element from array

marks.shift(); //  remove & return first element from starting 

// arrayname.splice (indexStarting(Closed), indexEnding(SemiClosed) ) 

let arr1 = [23, 53, 56, 34, 56];
arr1.splice(0, 2); // it returns remove elements as array

arr1.reverse(); // reverse the element of array

//  Concatenate the array


arr1 = [1, 2].concat([9, 8, 7], 6, [5, 4], [[11, 12, 13], 14], {}, {name:"hemant"}, [[{name: "jd"}], {name:[]}] );
console.log(arr1)


