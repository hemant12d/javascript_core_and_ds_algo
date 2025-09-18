// Count the frequency of consective element

// Examples
// Input => [3, 3, 4, 4, 5, 5, 3, 3, 6, 4, 4, 4] 
// Output => {'3': 2, '4': 2, '5': 2, '3': 2, '6': 1, '4': 3}
const consecutiveArrFreCount = arr => {

    let unique = arr[0];
    let consArrFreCt = [];
    let uniqueCount = 0;

    for(const value of arr){
        if(value === unique){
            uniqueCount++;   
        }
        else{
            consArrFreCt.push(uniqueCount);
            uniqueCount = 0; // count reset
            unique = value;
            uniqueCount++;   
        }
    }

    consArrFreCt.push(uniqueCount);

    return consArrFreCt;

}

console.log(consecutiveArrFreCount([3, 3, 4, 4, 5, 5, 3, 3, 6, 4, 4, 4]));
