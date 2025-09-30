class ABC {
  static left = 0;
  static right = 0;

  constructor() {
    this.cool = "cool"; // valid js code
  }

  static getValue() {
    this.depth = 1; // valid js code
    console.log(this.left, this.right, this.depth);
  }
}
