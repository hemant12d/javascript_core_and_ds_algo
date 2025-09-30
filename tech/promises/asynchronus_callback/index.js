let students = ["Hemant", "Shubham", "Ravi"];

// added new student to existing list
const entollStudent = newStudent =>{
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           students.push(newStudent);
           resolve(newStudent);
       }, 3000)
   })
}

// show the student list
// Promise Api
// entollStudent("simple").then(res => {
//     console.log(res);
// });



const studentList = async ()=>{
    // Mention line is not a part of asynchronous function
    console.log("Student list is running");
    console.log("Student list is running");

    // Here is we are consuming promise
    const newUser = await entollStudent("simple");
    students.map(el => {
        console.log(el);
    });
}
studentList();
console.log("Hello World");