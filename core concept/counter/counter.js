function counter(){

    let count = 1
    
    this.increment = ()=>{
        count++;
        console.log(count);
    }

    this.decrement = ()=>{
        count--;
        console.log(count);
    }

}

let counter1 = new counter();

counter1.increment();
counter1.increment();
counter1.increment();

let counter2 = new counter();

counter2.increment();
counter2.increment();
counter2.increment();

