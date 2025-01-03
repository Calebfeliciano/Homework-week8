// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

//Motorbike class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  //Constructor
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 && wheels.every(wheel => wheel instanceof Wheel) ? wheels : [new Wheel(), new Wheel()];
  }

  // Wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }


  // PrintDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}


// Export the Motorbike class as the default export
export default Motorbike;
