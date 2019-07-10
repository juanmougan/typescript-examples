const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// This doesn't create an Array, just defines a Type
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
//pepsi[0] = 40;    // this would break the model

// as a tuple
const carSpecs: [number, number] = [400, 3354];

// More descriptive as an object
const carStats = {
  horsePower: 400,
  weight: 3354
};
