//  In this file we will learn about the HTML DOM element selector...

console.log("Welcome to the session of Coding World You can learn everything but focus on one thing at a time that you want to learn");
// Select the Html Dom element with the help of document.getElementById('Id_name')

// let element = document.getElementById('child-third');
// console.log(element);

// element.children me only tags and important information...
// element = element.children;
// console.log(element);

// element.childNodes me contant, tags, comments and information bhi include hogi...
// element = element.childNodes;
// console.log(element);

//element.parentNode me uske parent ko access kar sakte hain 
// element = element.parentNode;
// console.log(element);


// Once you select the html DOM with the help of id selector then you also find the element's class..
// such as

// element = element.className;
// console.log(element);


// Select the html DOM element with the help of class document.getElementsByClassName('child');
// element = document.getElementsByClassName('child'); 

// Once you select the HTML DOM element with the help id selector then you can also edit the css.
// And you also use the html property in javascript...
// Example mentioned below:

// element.style.color = 'whitesmoke';
// element.style.backgroundColor = 'red';
// element.style.fontSize = '30px';
// element.innerText = 'This is text that is written in javascript';
// element.innerHTML = '<em>This is text that is <strong> written </strong> in javascript</em>';
// console.log(element);


//Query selector start from Here...

// Query selector with Id...

// let sel = document.querySelector('#child-third');
// sel.style.color = 'whiteSmoke';
// sel.style.fontSize = '30px';
// sel.style.backgroundColor = 'red';
// sel.innerText = 'This is the text that is written javascript';
// sel.innerHTML = '<em> This is the text that is written javascript</em>';
// sel = sel.parentNode;
// console.log(sel);

// Query selector with Classes...

// let sel1 = document.querySelector('.rbg');
// sel1.style.color = 'whiteSmoke';
// sel1.style.backgroundColor = 'red';
// sel1.style.fontSize = '20px';
// sel1.innerText = 'This is text that is written in java script';
// sel1.innerHTML = '<strong> This is text that is written in java script</strong>';
// console.log(sel1);

// Query Selector with Tags
let tag = document.querySelector('div');
tag = tag.childNodes;
console.log(tag);