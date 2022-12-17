const inputStr = ['geeksforgeeks', 'hemant', 'naveen', 'naveeen'];

const compressString = (str) => {
    let charFrequency = {};
    for (const char of str)
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    return charFrequency;
}

const maxFrequnecy = (charFreObj) =>{
    let maxFreObj = 0;
    for(let key in charFreObj){
        charFreObj[key] > maxFreObj ? maxFreObj = charFreObj[key] : null;
    }
    return maxFreObj;
} 

for(let input of inputStr){
    const strFre = compressString(input);
    const maxFreCharCount = maxFrequnecy(strFre);
    const removedCharCount = input.length - maxFreCharCount;
    console.log({removedCharCount});
}