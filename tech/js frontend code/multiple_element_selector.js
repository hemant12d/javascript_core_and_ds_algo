// In this lesson we will learn about Multiple Html... 

// console.log('Welcome to the Coding World');
// let element = document.getElementsByClassName('child');
// console.log(element);


// let element = document.getElementsByClassName('container');
// console.log(element[0].getElementsByClassName('child'));


// With the help of tag selector we can select the whole Tag...
// Example mentioned below:
let element = document.getElementsByTagName('div');
console.log(element);

Array.from(element).forEach(element => {
    console.log(element);
});