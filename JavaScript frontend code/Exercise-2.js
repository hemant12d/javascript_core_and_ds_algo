console.log("In this exercise we will learn about classes");

class invester {
  constructor(getName, getAmount, getReturns) {
    this.Name = getName;
    this.Amount = getAmount;
    this.Returns = getReturns;
  }

  getReturn(duration) {
    return `${this.Name} earn amout ${
      (this.Amount / 100) * 10
    } in ${duration} year from stock market`;
  }

  static checkEligibility(age) {
    if (age >= 18 && age<=104) {
      return "You can open your demat and trading account at online platforms";
    }
     else if (age > 105) {
      return "Age is not valid";
    }
     else {
      return "You can't open account at online platform, since you are not above 18";
    }
  }
}

let invester1 = new invester("Arpit", 4000000, 15);
console.log(invester1);
console.log(invester1.getReturn(3));
console.log(invester.checkEligibility(14));