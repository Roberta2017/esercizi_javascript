class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(param) { //se il parametro inserito  è uguale a side (in questo caso side corrisponde a 4) allora moltiplica il parametro inserito (side,4)
    // per se stesso (latoxlato)
    if (param.side) {
      return param.side * param.side;
    } else if (param.width && param.height) { //se invece viene rilevato che param è = a width e height allora moltiplicali fra loro
      return param.width * param.height;
    } else if (param.radius) { //se viene rilevato un param=a radius fai blablabla
      return param.radius * param.radius * 3.14;
    } else {
      return "o jolly"
    }

  }

}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));