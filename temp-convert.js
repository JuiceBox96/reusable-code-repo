// Kelvin
const kelvin = 293;

// Celcius converted
const celcius = kelvin - 273;

// Fahrenheit
let fahrenheit = celcius * (9 / 5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`);

