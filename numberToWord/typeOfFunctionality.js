
//  We used to typeof operator to identify the type of data
// Syntax: (typeof variablename)

// let num = String(811612);
// console.log(num, typeof num);

// Convert string into number
// let unit = '0987654321';
// unit = Number('8529363446');

// console.log(unit, (typeof unit));

//  Task is convert boolean into string.

// let boolean = true
// let boolean = String(true); 
// console.log(boolean, (typeof true));
//  Soory you can't convert boolean into string...
// convert boolean into string is not valid in javascript..
//boolean's bydefault type is boolean 

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1, (typeof arr1));
// array's by default type is object...

// Convert array into string..
// let arr1 = String([1, 2, 3, 4, 5]);
// console.log(arr1, typeof arr1);

// There is one method to calculate the length of array..
// The method is arrayname.length..
// console.log( ' length is ' + arr1.length);

// Find the type of date in js
// let date = new Date();
// console.log(date, (typeof date));
// date's by default type is object, and we can convert it into string...

// date's by default type is object, and now we are converting into string...
// let date = String(new Date());
// console.log(date, (typeof date);


// console.clear();

// let num1 = Number("8529363446");
//  console.log(num1, (typeof num1));
// This is another method to convert data type into string.
// let i = 8529;
// console.log(i, (typeof i)); 
// let abc = i.toString();
// console.log(i, (typeof abc));

// We know we can't convert boolean into string. I have a question Does we convert boolean into number?
// Yes! we convert boolean into
//  Convert boolean into number.
//  true return 1; || false return 0;

//Convert into Number...
// let unit = true;
// console.log(unit, (typeof unit));

// let unit1 = Number(true);
// let unit2 = Number(false);
// console.log(unit1, (typeof unit1));
// console.log(unit2, (typeof unit1));

// Convert array into number;
// Array's element is number but you can't convert array into number....
// NaN = Not a Number
// let arr2 = Number([2, 4, 6, 8, 0]);
// console.log(arr2);
// console.log(arr2, (typeof arr2));


// parse is start from here...
// let num2 = '345';
// num2 = Number('345');
// console.log(num2, (typeof num2));
// num2 = parseInt('345');
// console.log(num2, (typeof num2));
// let num3 = '85.29';
// num3 = parseInt('85.29');

// variable.toFixed(); , In this function we will decide how decimal number we want in our number... 
// console.log(num3.toFixed(3)); 

// Let's do a small experiment with the tofixed()...
let pi = 22/7;
console.log(pi.toFixed(6));