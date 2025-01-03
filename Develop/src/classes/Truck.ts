import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Vehicle): void {
    const vehicleMakeModel = (vehicle as any).make && (vehicle as any).model ? `${(vehicle as any).make} ${(vehicle as any).model}` : 'the vehicle';

    if ((vehicle as any).weight <= this.towingCapacity) {
      console.log(`${vehicleMakeModel} is being towed by the truck.`);
    } else {
      console.log(`${vehicleMakeModel} is too heavy to be towed by the truck.`);
    }

    if (vehicle instanceof Motorbike) {
      console.log(`The truck is towing a motorbike: ${vehicleMakeModel}`);
    } else if (vehicle instanceof Car) {
      console.log(`The truck is towing a car: ${vehicleMakeModel}`);
    } else {
      console.log(`The truck is towing an unknown type of vehicle: ${vehicleMakeModel}`);
    }
  }

  /**
   * Override the printDetails method from the Vehicle class.
   * This method prints the details of the truck, including its VIN, color, make, model, year, weight, top speed, towing capacity, and details of its wheels.
   */
  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);


  }
}

export default Truck;

