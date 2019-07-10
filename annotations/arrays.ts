const carMakers = ['ford', 'toyota', 'chevy'];
// also possible
// const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const emptyArray: string[] = [];

const dates = [new Date(), new Date()];

// 2 dim
const carsByMaker = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible
// carMakers.push(100);

// Help with 'map'
carMakers.map(
  (car: string): string => {
    return car.toUpperCase(); // Autocomplete here
  }
);

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(123); // error
