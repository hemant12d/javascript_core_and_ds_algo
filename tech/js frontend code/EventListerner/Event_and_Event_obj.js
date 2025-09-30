console.log("In this lesson we will learn about events and eventlistener");
let elem = document.getElementById('btn');
let elem1 = document.getElementById('para');
elem.addEventListener('click', function(e){
    let vari;
    console.log("You have clicked the button");
    // elem1.style.display = 'none';
    // location.href = '//facebook.com';
    veri = e.target;
    console.log(veri);
});
let head = document.getElementById('head');
head.style.color = 'white';
head.style.backgroundColor = '#692f82b3';

// console.log(elem);