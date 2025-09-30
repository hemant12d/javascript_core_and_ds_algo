// Date: 17/02/2021 at 3:00 PM
let reg_Exp = /hemant/; //This is regular expression literal in javascript.
// let reg_Exp = /hemant/g; // g means globally
// let reg_Exp = /hemant/i; // i means insensitively

// console.log(reg_Exp); // /hemant/
// console.log(reg_Exp.source); // hemant


 let str_to_check = "This is great code with hemant and also hemant";
//  Functions to match expressions in javascript


// 1.exex();
// .exex function will return an array on match or return null on no match.
// let result = reg_Exp.exec(str_to_check);
// console.log(result);
 // ["hemant", index: 24, input: "This is great code with hemant and also hemant", groups: undefined]


// 2.test()
// .text function return true on match or return false on no match.

// result = reg_Exp.test(str_to_check);
// console.log(result); // true

// 3.match()
// .match() is a liitle different function compare to .exex() or .test() 
// .match() function return  an array of result or null
// result = str_to_check.match(reg_Exp);
// console.log(result); 
// ["hemant", index: 24, input: "This is great code with hemant and also hemant", groups: undefined]

// 4.search()
// .search is similar to .match() function
// .search() return only index of match on match or return -1 on no match.
// result = str_to_check.search(reg_Exp);
// console.log(result);

// *Imp

// 5.replace() // similar to .match() or .search()
// .replace() Returns new replaced string  with all the replacemens
// con-I(If no flag is given, first match will be replaced)
// con-II(If g flag is given, all match will be replaced)

// result = str_to_check.replace(reg_Exp, "yuvan");
// console.log(result);
// Now from there, we are learning some more things about Regular Expression