 // In this lesson we will learn about object


// Object literal for creating objects.
let car = {
    name: "LandRover",
    speed:147,
    run: function(){
        console.log("LandRover is running");
    }
};
console.log(car);

// Creating a Constractor...
function genCars(enterName, enterSpeed){

    this.name = enterName;
    this.speed = enterSpeed;
    this.run = function(){
        console.log(`This car is slower of ${250 - this.speed} from fast speed`);
    }
    
};


car1 = new genCars('Wagener', 90);
console.log(car1);

car2 = new genCars('alto-800', 80);
console.log(car2);
console.log(car2.run());

car3 = new genCars('tesla', 140);
console.log(car3);
console.log(car3.run());