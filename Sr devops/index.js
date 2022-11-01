
// let value = 499;

// switch (value){
   
//     case 0:
//     console.log("Sunday");
//     case 1:
//     console.log("Monday");
//     case 2:
//     console.log("Tue");
//     case 3:
//     console.log("Wed");
//     case 4:
//     console.log("Thur");
//     break;
//     case 5:
//     console.log("Fri");
//     case 6:
//     console.log("Sat");
 

// }




let arrOfObjects = [
    {
        "name": "Car A",
        "price": 234444,
        "engine": 1000
    },
    {
        "name": "Car B",
        "price": 2454444,
        "engine": 1100
    },
    {
        "name": "Car C",
        "price": 256444,
        "engine": 1500
    },
    {
        "name": "Car D",
        "price": 256444,
        "engine": 700
    }
];

let filterCars = arrOfObjects.filter(car =>{
    return car.engine < 800 
})

console.log(filterCars)