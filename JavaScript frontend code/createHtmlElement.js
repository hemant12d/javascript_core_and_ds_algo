// In this lesson we will learn about the How to Create the Element.

// Create the element
let created_Element = document.createElement('div');
let val = localStorage.getItem('text');
text = document.createTextNode('You have to start');
let created_Txt;
if (val == null)
    text = document.createTextNode('You have to start');

else
    text = document.createTextNode('text');

// Add the attribute to the created element.
created_Element.setAttribute('id', 'created_Id');
created_Element.setAttribute('class', 'created_Class');
created_Element.setAttribute('title', 'created_Element');
created_Element.setAttribute('style', 'padding: 16px 0px; border: 2px solid red; color: whitesmoke; background: red; height: 80px; width:200px')
created_Element.appendChild(created_Txt);

// Now the element is ready.
console.log(created_Element);

// Get Container to append the created element.
let get_Ul = document.querySelector('#cont');

// Get another element to append the created element just before him.
let elem = document.querySelector('.child-1');

// Now we are appending the element.
get_Ul.insertBefore(created_Element, elem);

// Now we are adding eventListener into Created div.
created_Element.addEventListener('click', function(){
console.log('You have clicked on the button');
let noTextArea = document.getElementsByClassName('textarea').length;
console.log(noTextArea);
 if(noTextArea == 0){   
    let html = created_Id.innerHTML;
    created_Id.innerHTML = `<textarea name="textArea" id="text456" class="textarea" cols="10" rows="3"> ${html} </textarea>`;
}
let textarea = document.getElementById('text456');
textarea.addEventListener('blur', function(){
created_Id.innerHTML = textarea.value;
localStorage.setItem('text', elem.innerHTML);
});
});