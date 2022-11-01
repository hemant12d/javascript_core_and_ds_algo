// In this lesson we will learn about the local and sessional storage

// Add a key value pair inside the local storage...

// localStorage.setItem('Name', 'Shubham');
// localStorage.setItem('Name1', 'Nikhil');
// localStorage.setItem('Name2', 'Arjun');


// An another way to add a key value pair inside the local storage...
localStorage.Name4 = 'Balu';


// This function is used for delete the data...
// localStorage.clear();


// This function is used to remove a particular data from localStorage...
localStorage.removeItem('Name');


// Retrive an item from localStorage...
localStorage.getItem('Name');
localStorage.getItem('Name1');
localStorage.getItem('Name2');
// let storage_item = localStorage.getItem('Name4');


// Print retrive item...
// console.log(storage_item);


let arr = ['pyaz', 'bindi', 'muli', 'tamatar'];
localStorage.setItem('sabzi', JSON.stringify(arr));


let get_word = JSON.parse(localStorage.getItem('sabzi'));
console.log(get_word);


// sessionStorage.setItem('sessionName', 'Shubham');
// sessionStorage.setItem('sessionName1', 'Nikhil');
// sessionStorage.setItem('sessionName2', 'Arjun');