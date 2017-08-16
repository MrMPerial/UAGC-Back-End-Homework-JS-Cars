class Vehicle {
  constructor(wheels, topSpeed, color) {
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.color = color;
    this.travelTime = function() {
      let mpm = 60 / topSpeed;
      let q = .25;
      let min = mpm * q;
      let time = min * 60;

      return 'This car will travel ' + time + ' seconds in a quarter mile at ' + topSpeed + ' MPH.';
    };
  }
}

let myCar = new Vehicle(4, 120, 'Green');
let jodisCar = new Vehicle(4, 160, 'Red');

console.log(myCar, myCar.travelTime());
console.log(jodisCar, jodisCar.travelTime());
