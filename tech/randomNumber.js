const generateRandomPhoneNo = () =>{
    // Generate random number
    let phoneNo = '';

    for(let i = 0; i < 10; i++){
        phoneNo += parseInt(Math.random()*10).toString();
    }

    return phoneNo;
}

// Basic overview
// 0.1 - 0.99 => Range of a simple random number function
// below 0.50 convert to => 1
// above 0.50 convert to => 2

// Run the code
let countForOne = 0, countForTwo = 0;
for(let i = 0; i < 80; i++){
   
}

console.log("count for one ", countForOne);
console.log("count for two ", countForTwo);