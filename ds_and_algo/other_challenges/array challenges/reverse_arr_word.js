// Reverse the word of string

const input = "welcome coding";
// output = "emoclew ot eht dlrow fo dnekcab repoleved";

const reverseString = str => {
    let reverseStr = '';
    let start = str.length - 1;
    let end = 0;
    for(let i = start; i >= end; i--){
        reverseStr +=str[i]
    }
   return reverseStr;
}

const arrRevWord = str => {
    const arrChunks = input.split(" "); // n number of chunks
    const resultArr = [];

    for(let chunk of arrChunks){
        const revWord = reverseString(chunk);
        resultArr.push(revWord);
    }

    return resultArr.join(" ");
};

console.log(arrRevWord(input));
// console.log({value: reverseString("welcome")});