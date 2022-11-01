console.log("In this today's world hard work is not enough, you have to do hard work after hard work");

// How to push array into localStorage...


// Daclare array
let notes = [];

let text3 = "This is text3 ";
let text4 = "This is text4 ";

// Add text into array
notes.push(text3);

// Add array into localStorage
localStorage.setItem('note', JSON.stringify(notes));

notes = JSON.parse(localStorage.getItem("note"));
console.log(notes);

notes.push(text4);
console.log(notes);
localStorage.setItem('note', JSON.stringify(notes));