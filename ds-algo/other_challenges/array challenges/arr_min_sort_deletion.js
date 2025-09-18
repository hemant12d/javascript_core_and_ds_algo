// For string
let input = "xyzzyx";
let sum =0;
let reverse = 0;
for(let i=0;i<input.length-1;i++){
    if(input.charCodeAt(i) > input.charCodeAt(i+1)){
        sum++
    }else{
        reverse++
    }
}
console.log({sum,reverse})

// For array
let input = [30, 40, 2, 5, 1, 7, 45, 50, 8];
let x =1;
let y = 0;
for(let i=0;i<input.length-1;i++){
    if(input[i] > input[i+1]){
        x++
    }else{
        y++
    }
}

let total = x > y ? y : x;
console.log({total})
