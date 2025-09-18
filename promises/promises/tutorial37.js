// In this lesson we will learn about the callback function
console.log("In this lesson we will learn about the call back function");
const students = [{name:"HemantSoni", subject:"JavaScript"},
                  {name:"AjaySoni", subject:"UI-Design"},
                  {name:"JagdishYadav", subject:"C-language"}];
function endrollstudents(endrollStudent, callback)
{
setTimeout(() => {
  students.push(endrollStudent);
  console.log("Student has successfully added");
  callback();
}, 3000);
}

function getStudent(){
    setTimeout(() => {
        let str = '';
        students.forEach(student => {
            str += `<li>Name: ${student.name}, Subject: ${student.subject}</li>`;
        });
        ulid = document.getElementById('ulid');
        ulid.innerHTML = str;
        console.log("Student Name are shown");
    }, 400);
}
let NewStu = {name:"RaviSoni", subject:"JavaScript"};
endrollstudents(NewStu, getStudent);