console.log("In this exercise we will learn about if else statement");
let marks = 23;
if (marks>100) {
    console.log("Please enter marks between 0 to 100");
}
else if (marks>=90) {
    console.log("You are very intelligent boy and we appericiate your knowledge");
}
else if (marks>=75) {
    console.log("You are intelligent boy we also appericiate your knowledge");
}
else if (marks>=60) {
    console.log("You got first division we hope next you will do better");
}

else{
    console.log(" we think you may work on your educational skills ");
}

let obj = window;
console.log(obj);  

let info0 = window.alert("Allow us to excess your data");
//  prompt wiil show a box on the browser screen ask user to write something.
// console.log(info0);
let info = prompt('Enter your name here');
console.log(info); 
// confrim return a boolean expression depend what user select...
let info1 = confirm("Are You Sure!");
console.log(info1); 
let histo = window.history;
console.log(histo);