interface Vehicle {
  name: string;
  year: Date; // Not only primitives, also composite types
  broken: boolean;
  summary(): string; // And functions!
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
