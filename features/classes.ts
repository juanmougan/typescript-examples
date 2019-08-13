class Vehicle {
  // Using 'public' saves us to declare 'color' as a property
  constructor(public color: string) {}

  // all public by default
  protected drive(): void {
    console.log('driving');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
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

const car = new Car(4, 'black');
car.startDriving();
car.honk();
