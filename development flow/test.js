// let arr = [
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' },
//   { id: 0 }
// ]

// for(let value of arr){
//     console.log(value, value.id !== 0)
// }

// Modifying each words
// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

// const modifiedWords = words.filter( (word, index, arr) => {
//   arr[index+1] +=' extra'
//   return word.length < 6
// })


// Append word to array
// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   arr.push('new')
//   return word.length < 6
// })

// console.log(appendedWords);
// console.log(words);


// Deleting words
// words = ['spray', 'limit', 'exuberant', 'demo', 'destruction', 'elite', 'present']
// const deleteWords = words.filter( (word, index, arr) => {
//   arr.pop()
//   return word.length < 6
// })

// console.log(deleteWords)
// console.log('5'-2)

// let num = 12_500;

// if( num > 12400 ){
//   console.log("Working ", num);
// }

// a = 34;
// console.log(a);
// let a;

// var a = 34;

var a = 1;

function func(){
  a = 2;
  console.log(a);
  var a;
}

func();

console.log(a);

// if(!('b' in window)){
//   var b = 1;
// }

// console.log(b);