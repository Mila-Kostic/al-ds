class Colors {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let colorsOne = new Colors("green");
let colorsTwo = new Colors("blue");
console.log(colorsOne);
console.log(colorsTwo);
console.log(colorsOne.getColor());
console.log(colorsTwo.getColor());
console.log(colorsOne.setColor("yellow"));
console.log(colorsOne.getColor());
