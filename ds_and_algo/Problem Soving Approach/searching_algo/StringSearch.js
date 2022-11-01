// Write a function that accepts two strings as input, try to find the character of second argument string into a first argument character. If found match then return the number of how many times you find match

// stringSearch("hemant hemanh soni", "ant") // 1
// stringSearch("shubham sharma", "sh") // 2

const stringSearch = (longStr, shortStr) => {
    let count = 0;

    for ( let i = 0; i < longStr.length; i++ ) {
        
        for ( let j = 0; j < shortStr.length; j++ ) {

            if ( longStr[i + j] !== shortStr[j] ) break;

            if ( j === (shortStr.length - 1) ) count++;

        }
    }

    return count;

}

console.log(stringSearch("hemant hemanh soni", "ant"));
console.log(stringSearch("shubhamlodu sharma", "lodu"));
console.log(stringSearch("shubhamchutiya sharma", "lodu"));