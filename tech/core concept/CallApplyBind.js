let name = {
    fname: "hemant",
    lname: "soni",
    // fullName: function(){
    //     console.log(this.fname+this.lname)
    // }
}

let fullName = function(){
    console.log(this.fname+this.lname)
};

name2 = {
    fname: "Shubham ",
    lname: "Sharma"
}

// Function browing
// name.fullName.call(name2);

// Use with general function
// fullName.call(name2);

// pass argument to fullName
// fullName.call(name2, 'Backend Developer', 'Mumbai')

// apply method
// fullName.apply(name2, ['Backend Developer', 'Mumbai']);

// Bind method

// let bindFullName = fullName.bind(name2, 'Backend-Developer', "Mumbai");
// bindFullName();

// 1) Task create your own bind method
// 2) You can use call for this

Function.prototype.createBind = function(obj){
    let fn = this;
    return function(){
        fn.apply(obj);
    }
}

const myBind = fullName.createBind(name2);
myBind();


