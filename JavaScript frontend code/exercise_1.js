// In this lesson we will learn about the event listener... 
// console.log("Welcome to the Coding World\n");
// let arra = ['orange', 2, 'mango', 4, 'banana'];
// // console.log(arra);
// arra.forEach(element =>{
//     console.log(element);
// });
// let element = document.getElementById('cont');
// element.style.color = 'red';
// Multiple element selector 
// let element = document.getElementsByClassName('child')
// console.log(element[0]);
// console.log(element[1]);
// console.log(element[2]);
let btn = document.getElementById('btn');
btn.style.border = '1px solid red';
btn.style.color = 'red';
btn.addEventListener('mouseenter', func_enter);
function func_enter(e){
 
    console.log("You Enter Your Mouse in the Botton, You respect the great ideas!");
    console.log(e);
}


