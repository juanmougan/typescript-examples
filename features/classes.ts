class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // all public by default
  protected drive(): void {
    console.log('driving');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  protected drive(): void {
    console.log('brooom');
  }

  private brand(): String {
    return 'brand';
  }

  startDriving(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car('black');
car.startDriving();
car.honk();
