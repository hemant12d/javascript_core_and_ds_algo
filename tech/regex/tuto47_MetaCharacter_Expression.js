console.log('This file is linked with the html file');
// let reg_Exp = /^hem/; // ^ means match when start with regular Expression
// let reg_Exp = /van$/;// ^ means match when ends with regular Expression
// let reg_Exp = /k.own/;// .means any one character can be here
// let reg_Exp = /k*own/;// *means any more than one character or 0 character can be here // In simple words kuch bhi ho sakta hain or nahi bhi
// let reg_Exp = /kn?own/; // means the character before question mark(?) is optional
let reg_Exp = /k\*own/; // This is for match special character, means match only one special character is present
let str = "hemant and i am and playing cricket at ground on six pm k*own as the yuvan";
// let result = reg_Exp.exec(str);
if (reg_Exp.test(str))
{    
    console.log(`${reg_Exp.source} match with the ${str}`);
}
else
{
    console.log(`${reg_Exp.source} does not match with the ${str}`);
}

