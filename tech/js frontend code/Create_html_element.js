// In this lesson we will learn, How to replace the Html element...
console.log('You Can Win!');

// Create the li element...
let created_element = document.createElement('li');

// Add id or class name to the element...
created_element.className = 'created_class';
created_element.id = 'created_id';

// Add attribute to the element...
created_element.setAttribute('title', 'Created_Title');

// Add text into created element(li)...

// add the text with the help of innerText property...
// created_element.innerText = ' I am the created Text in javascript ';

// Another way to create the text for Html element..
let created_text = document.createTextNode('I am the created Text in javascript');

// Add text into the created element...
created_element.appendChild(created_text);

// Now our element is created with class, id, attribute, and text
// :) Our created Yodha is ready for fight with Guns, armer, and granade  
console.log(created_element);

// Added created element into the Html Dom

// Now select the Dom element to add the created element...
let catch_up_element = document.querySelector('ul');

// Now, added the element into the select element with the help of appendChild() property..
catch_up_element.appendChild(created_element);
// console.log(catch_up_element);

// Yes! the element has added successfully :) :)


// Let's start a exercise...















// let unit = document.createElement('li');
// unit.className = 'unitcl';
// unit.id = 'unitid';
// unit.setAttribute('title', 'This is title');
// console.log(unit);
// unit.innerText = 'This is text inside js-2';
// let get = document.querySelector('ul');
// console.log(get);
// get.appendChild(unit);