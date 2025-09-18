console.log('Welcome to the Coding World');
let cont = document.querySelector('.cont');
cont.addEventListener("mouseenter", function(e){
console.log('Tapa Tap Tapa Tap malum na');
document.body.style.background = `rgba(${e.offsetX}, ${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
});

cont = document.querySelector('.cont');
cont.addEventListener("mouseleave", function(e){
console.log('Jai Hind Dosto');
});

cont = document.querySelector('.cont');
cont.addEventListener("dblclick", function(e){
console.log('Aye Ekta chal maffi mang kabutar saali Darta nhi me tere se kuch bhi ukhad le');
});

cont = document.querySelector('.cont');
cont.addEventListener("click", function(e){
console.log('Apne tin jawan jo sahid hue unko bhavpurn shardanjali');
});

