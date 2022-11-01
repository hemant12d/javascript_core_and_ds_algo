const obj1 = {
    name: "Hemant Soni",
    role: "Backend Developer",
    age: 20
}

// Object reference by address
// const obj2 = obj1

// Object destructuring ( make copy of object )
const obj2 = {...obj1};

delete obj1.name;
delete obj1.role;

console.log(obj1)
console.log(obj2)