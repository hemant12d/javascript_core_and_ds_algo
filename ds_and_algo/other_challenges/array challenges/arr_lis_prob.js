// ________ LIS ( Longest increase sequence ) Problem _________
let input = [2, 11, 3, 10, 4, 5, 2, 1, 20];

const findLIS = arr => {
    let LISLen = 0;
    let LISArr;
    for(let i = 0; i < arr.length; i++){

        let tempElem = arr[i];
        let tempLisLen = 1;
        let tempArr = [];
        tempArr.push(tempElem);

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] > tempElem){
                tempArr.push(arr[j]);
                tempLisLen++;
                tempElem = arr[j];
            }
        }

        // Find LIS
        if(tempLisLen > LISLen){
            LISArr = tempArr;
            LISLen = tempLisLen;
        }

    }

    return {LISArr, LISLen}
}

console.log(findLIS(input));
