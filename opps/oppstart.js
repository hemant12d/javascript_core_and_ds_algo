function generalCar(name, speed){
    this.name = name;
    this.speed = speed;
    this.run = () => console.log(`${this.name} is running smoothly.\n`);
    this.analyze = () => console.log(`${this.name} is slower by ${200 - this.speed} Km/h than Tesla \n`);
}

let tataNexon = new generalCar('Tata Nexon', 180);
// tataNexon.run();
// tataNexon.analyze();

// console.log(tataNexon);