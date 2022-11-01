let questionObj = {
    name: "Hemant",
    role: "Backend Web Developer",
    skills: ["Javascript", "Node", "Express", "MongoDb"],
    preference: ["web developer", "api development"],
    age: 23,
    address: "Main Market Rshmi",
    price: [34, 34, 34],
    duration: [34, 64, 54]
};

const findAndReplaceArray = (obj, ...ignored_Fields)=>{

 Object.keys(obj).forEach(key=>{

    if(!ignored_Fields.includes(key)){
        if(Array.isArray(obj[key])){
            obj[key] = obj[key][0];
        }
    }

 })
 return obj;
}

let pureObj = findAndReplaceArray(questionObj, 'price', 'duration');

console.log(pureObj);