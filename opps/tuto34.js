
// Create a class library
class library{
constructor(bookList, studentName){
this.bookName = bookList;
this.name = studentName;
    }

    // Class's function, and this function will be accessing only from object
    getBookList(){
       for (let index = 0; index < this.bookName.length; index++) {
          console.log((index+1), this.bookName[index]);           
       }
        return `This books are avilable for ${this.name}`;
    }

    issueBook(book, name = this.name){
        // this.name = name;
     this.book = this.bookName[book-1];
     return `${this.book} has issued to ${this.name}`;
    }

    returnBook(book){
        if (this.bookName[book-1] == this.book) {
            return `${this.name} has returned ${this.book}`;            
        }
        else{
            return `${this.name} has not returned right book`;
            // 1212 12 12 12 12 12 12 12 12 12 12 12 12 12 
        }
    }
}

// Create by default array of book list's 
let bookList = ["You Can Win", "Think and Grow Rich", "The Magic of BIg Thinking", "Eat that Frog", "Rich Dad and Poor Dad"];


// Creating a object with new keywords.
hemant = new library(bookList, "Hemant");
console.log(hemant);

// Accessing classes's function with object to perform  specific tasks
console.log(hemant.getBookList());
console.log(hemant.issueBook(3));
console.log(hemant.returnBook(3));

// During this exercise you will feel like you are work on creating app.
// This is the reason why classes, objects, inheritence is important in javascript..
// JavaScript is so powerfull, With the help of js you can improve your conding skills and also do contribute in webDevelopment