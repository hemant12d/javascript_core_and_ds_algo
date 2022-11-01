
let singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let tensDigit = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

let elevent_To_Nineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fiften', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let thirdDigit = ['hundred']

let thousands = ['thousand', 'ten thousand'];

const numberToWordConverter = num =>{

    // Handle invalid output

    // isNan detect them
    // "lsdjids", {}, [3, 5, 5], {name: "Hemant"},
    
    // isNan not return general expected output with =>  true, []

    if( isNaN(num) || (num instanceof Array) || (typeof num == 'boolean') )
        return 'Please Enter Valid Number';
    
    if( num > 1_000_00 )
    return 'Currently availabe range is one lakh';
    
    let numIndex = 0;
    let numStr = num.toString();

    // Handle one digit
    if(num >= 0 && num < 10)
        return singleDigit[num];
    

    // Handle two digit
    if(num > 9 && num < 100){

        // Handle 11-19
        if(num > 10 && num < 20)
            return elevent_To_Nineteen[numStr[1] - 1]
        
        // Handle tens digit
        if(numStr.endsWith('0'))
            return tensDigit[numStr[0] - 1]
        
        // Handle 21 to 99
        if(num > 20 && num < 100)
            return `${tensDigit[numStr[0]-1]} ${numberToWordConverter(numStr[1])}`;
    }

    // Handle third digit
    if(num > 99 && num < 1000){

        // Handle hundreds digit
        if(numStr.endsWith('00'))
            return `${singleDigit[numStr[0]]} ${thirdDigit[0]}`;
        
        // 101 - 199
        // 201 - 299
        // ... so on

        return `${singleDigit[numStr[0]]} ${thirdDigit[0]} ${numberToWordConverter(numStr.slice(1, 3))}`;

    }
    
    // Handle four digit
    if( num > 999 && num < 10000){
        // Handle thousands
        if(numStr.endsWith('000'))
            return `${singleDigit[numStr[0]]} ${thousands[0]}`;
        
        // Handle 1001 to 9999
        if(num > 1000 && num < 10000)
            return `${singleDigit[numStr[0]]} ${thousands[0]} ${numberToWordConverter(numStr.slice(1, 4))}`;
    }

    // Handle five digit
    10_000 - 99_999
    if(num > 9_999 && num < 1_000_00){   
        // Handle ten thousands
        if(numStr.endsWith('000'))
        return `${numberToWordConverter(numStr.slice(0, 2))} ${thousands[0]}`;

        // Handle 10_001 to 99_999
        return `${numberToWordConverter(numStr.slice(0, 2))} ${thousands[0]} ${numberToWordConverter(numStr.slice(2, 5))}`;
    }


    return "Something went wrong, sorry for the inconvenice";
    
}

// for(let i =1; i < 100; i++)
// console.log(i*1000, ' ', numberToWordConverter(i*1000));



    





