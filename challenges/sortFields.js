let obj = {
    name: "hemant",
    age: 34,
    role: "Backend Developer",
    preference: "Backend Development",
    skills: ['JavaScript', "Express", "Node"],
    salary: 45000,
    value: "High"
}

const filterProperty = (newObj, ...selected_Fields)=>{

    Object.keys(newObj).forEach(key =>{
        if(selected_Fields.includes(key)) delete newObj[key];
    })

    return newObj;
}

console.log(filterProperty(obj, 'name', 'age', 'value'));
