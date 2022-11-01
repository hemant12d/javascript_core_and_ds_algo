console.log(
  "In this lesson we will learn about class, constructor, objects, and inheritence"
);

// Creating a Class

class employee {

  constructor(Name, Age, Salary) {
    this.name = Name;
    this.age = Age;
    this.salary = Salary;
  }

  increment() {
    return `${this.name} got increment of ${
      (this.salary * 10) / 100
    } in 6 month`;
  }

  getSalary() {
    return ` ${this.name} got salary ${this.salary}`;
  }

  static add(a, b) {
    return a + b;
  }

}
// Tip: Class's function will be accessing only from obj or class...

// creating a objects
hemant = new employee("Hemant", 21, 38000);
console.log(hemant);

console.log("\n End is Here");
// Creating an another object
shubham = new employee("Shubham", 24, 37000);
console.log(shubham);
// Access function with the help of objects
console.log(hemant.increment());
console.log(hemant.getSalary());
// Access function with the help of class
// console.log(employee.add(8, 9));

// Create an another class with the help of inheritence.
// We can create a class with the help of inheritence but through inheritence class we can't access the function of extends class
class programmer extends employee 
{
  constructor(Name, Age, Salary, Experience, Language)
  {
    super(Name, Age, Salary);
    //super() is show that this constructor's element is already defined access from defined place.
    // Learn javascript with patiencely, js is so powerful...#learnJavaScript.
    this.experience = Experience;
    this.language = Language;
    // console.log("Yes! When you are creating a constructor then it will definiately executed during the object instantiation");
  }
  favourite_Language()
  {
    if (this.language == "Javascript")
    {
      return `JS`;
    } 
    else
    {
      return `TS`;
    }
  }
  static add(a, b) {
    return a * b;
  }
}
ravi = new programmer("Ravi", 23, 40000, 1, 'TypeScript');
// console.log(ravi);
// console.log(ravi.favourite_Language());
// console.log(programmer.add(8,7));

