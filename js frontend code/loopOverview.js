console.log("Lession about loop");

// let i = 0;
// i=31;
// while (i >= 1) {
//     console.log(i);
//     i-=1;
// }


// do{
//     console.log(i);
//     i+=1;
// }while( i <=11);


// for(i=7; i<=9; ++i){
//     console.log(i);
// }

//  Suppose you have a loop you that print value from 1 to 10, Lbut you want to escape number 4 and 5 from the loop
// let j;
// for(let j = 1; j<11; j++){
//     if(j === 5){
//         console.log("The loop has escaped" +" "+ j);
//         continue;
//     }
//     if(j === 6){
//         console.log("The loop has escaped" +" "+ j);
//         continue;
//     }
//     console.log(j);
// }

//  Print the array's value with the help of for loop or for each loop.
// console.clear();
//  Print arr with the help of for loop

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    let other = arr[i];
    console.log(other);
}

console.log("The Program has done")
// Print arr with the help of for each loop.

arr.forEach(function (element, index) {
    console.log(element, index)
});

// For eact loop in arrow function 
// arr.array.forEach(element => {

// });
// let myobj = {
//     name:'Hemant Soni',
//     age: 56,
//     type: 'Dangerous Programmer',
//     os:"Ubuntu"
// }
// // for(let key in myobj){
//     console.log(`The ${key} of object is ${obj[key]}`);
// }
console.log("The Program has done")