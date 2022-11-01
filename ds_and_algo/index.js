// Porblem : 1)

// Write a function that count the character of the string

// Step: Intitial) Do fast like pramod sir not like shambhu sir

// Get all the things to escape the disturbance

// Steps to solve a problem

    // Understand the problem

    // Contrete the example

    // Break the problem

    // Solve & simplify

    // Lookback & refactor

    // Find the exact reason that where you are stucking

    // Better approach to handle the stuck point

// That's sit 🧑‍🏫

// countChar("Hemant") // {h:1, e:1, m:1, a:1, n:1, t:1}
// countChar("Heeeemaaantttt") // {h:1, e:4, m:1, a: 3, n:1, t:4}
// countChar("") // {}
// countChar(34434343) // {error: typeError}
// countChar("$%$334%4#6$%4Heeeemaaantttt") // {h:1, e:4, m:1, a: 3, n:1, t:4}

// Count Char & if number is present throw an error
// countChar("343dsfsfsdfdfsdsdf") // {error: typeError}
// countChar("#$#$#][][p[[[]]sfsfsdfdfsdsdf") // {error: typeError}
// countChar("Hemant") // {h:1, e:1, m:1, a:1, n:1, t:1}

// function countChar(str) {
//     let result = {};

// Count all the words
//     for (let i = 0; i < str.length; i++) {

//         // Convert to lover
//         const char = str[i].toLowerCase();

//         // Check for char if present count
//         if (/[0-9a-z]/.test(char)) {

//             // if character already exists then increment
//             if (result[char]) result[char]++;

//             // if charter not exist then create property for character
//             else result[char] = 1;
//         }

//         // if not character then return an error  
//         // else
//         // return { error: 'typeError' }
//     }
//     return result;
// }


// let's Refector this
function countChar(str, strictMode = false) {
    let result = {};

    for (let char of str) {

        // Check for character or number
        if (isCharAndNumber(char)) {

            // Convert to lower case
            char = char.toLowerCase();

            // if character already present then just increment
            if (result[char]) result[char]++;

            // if character not present then create new property for character
            else result[char] = 1;

        }

        // if not character then return an custom error  
        else{
            if(strictMode) return { error: 'typeError' }
        }

    }
    return result;
}

// console.log(countChar("Hemant Soni is a Backend Developer"));


// Porblem : 2) Create a function that check if given input is character/number then return true, else return false

// isCharNumber('a') // true
// isCharNumber('@/#/$/[/]/\/') // false  


// Check if given input is character/number or not

function isCharAndNumber(char) {
    // For fast performance we are not using regex
    let code = char.charCodeAt();

    //if character & number not present then return false
    if (
        !(code > 96 && code < 123) && // [a-z]
        !(code > 64 && code < 91) &&  // [A-Z]
        !(code > 47 && code < 58) // [48-57]
    )
        return false;

    // Check for character & number, if present then return true
    else return true;

}



// You can right the following syntax like this:

// 1) Approach 1

// if (result[char]) result[char]++;
// else result[char] = 1;

// 2) Approach 2
// result[char] = ++result[char] || 1;

console.log(countChar("$%$334%4#6$%4Heeeemaaantttt"))