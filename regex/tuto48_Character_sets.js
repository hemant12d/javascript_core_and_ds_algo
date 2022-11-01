/*
---------------------------------------------------------------------------------
   In this lesson we will learn about the Character Sets of Regular Expression
---------------------------------------------------------------------------------
*/

// Character Sets --> []

// let reg_Exp = /h[a-zA-Z]man[0-9]/; 
// [a-z] means from there can be character from a to z
// [a-zA-Z] means from there can be character from a to z or A to Z
//  reg_Exp = /h[^efgh]man[0-9]/; //not will be e, f, g or h
//  reg_Exp = /heman[0-9]/;// number from 1 to 9
    // reg_Exp = /heman[0-9tTUu\^]/;// number from 1 to 9
    // let str = " hemant soni is also yuvan soni";

    // Quantifires Sets --> {}

//     reg_Exp = /nave{2,3}n/;// number from 1 to 9
// let str1 = 'naveen is also a son of goutam ji soni';
// let result = reg_Exp.exec(str1);
// console.log(result);
// if (reg_Exp.test(str1)) 
// {  console.log(`${reg_Exp.source} match with ${str1}`);  }
// else
// {  console.log(`${reg_Exp.source} not match with ${str1}`);  }

// Grouping in Regular Expression

let reg_Exp_to_Grouping = /(hemant){2}([0-9]r){3}/;
string = "hemanthemant1r2r4r";
let result = reg_Exp_to_Grouping.test(string)
if (result) 
{  console.log(`${reg_Exp_to_Grouping.source} match with ${string}`);  }
else
{  console.log(`${reg_Exp_to_Grouping.source} not match with ${string}`);  }