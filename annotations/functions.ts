// Return type annotation could be removed, but we would lose type safety
const add = (a: number, b: number): number => {
  return a + b;
};

// Subtle bug, here we're returning void (no return!)
const substract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// Never execute the function completely
const throwError = (message: string): never => {
  throw new Error(message);
};

// If it can throw an error, annotate with string anyway
const throwErrorIfNoMessage = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);

// ES2015: destructuring first, then after annotation
const es6LogWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

es6LogWeather(forecast);
