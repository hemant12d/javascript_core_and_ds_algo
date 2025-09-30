// Create constructor with prototype

function bookDetails(bookName, bookAuthor, bookType)
    {
        this.Name = bookName;
        this.Author = bookAuthor;
        this.Type = bookType;
    }

function Display()
{

}
Display.prototype.validate = function(book){
if (book.Name.length<3 || book.Author.length<3){
    return false;
}
else
{
    return true;
}
}

Display.prototype.add = function(book){
  let tableBody = document.getElementById('tableBody');
  let uiString =  `<tr>
  <td>${book.Name}</td>
  <td>${book.Author}</td>
  <td>${book.Type}</td>                         
</tr>`;
  tableBody.innerHTML += uiString;
}

// constructor's function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.show = function(type, message, pharse){
let msg = document.getElementById('msg');
msg.innerHTML = `<div class="alert alert-${type}" role="alert">
<h4 class="alert-heading">${pharse}</h4>
<p>${message}</p>
</div>`;

setInterval(() => {
    msg.innerHTML = '';
}, 3000);
let libraryForm = document.getElementById('libraryForm');
libraryForm.reset();
} 
// get form details through eventlistener

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', getDetails);
function getDetails(e){
    // console.log("You have clicked on submit event");
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    
let fiction = document.getElementById('fiction');
let programming = document.getElementById('programming');
let literature = document.getElementById('literature');    
let type;
    if (fiction.checked){
        type = fiction.value;
    } 
    else if(programming.checked){
        type = programming.value;
    }
    else
    {
        type = literature.value;
    }
    let book = new bookDetails(bookName, author, type);
    console.log(book);    
    let display = new Display();
    e.preventDefault();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your note has successfully added', 'Well done!');
    }
    else
    {        
        display.show('danger', 'Your note has not added', 'Oops!');
    }
    
};
