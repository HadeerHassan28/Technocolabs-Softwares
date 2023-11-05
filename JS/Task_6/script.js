"use strict";

// Kelvin temperature
const kelvin = 0;

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Fahrenheit conversion formula
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Newton conversion formula
let newton = celsius * (33 / 100);

// Round down the Newton temperature
newton = Math.floor(newton);

//Output:
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// 400K => 260C, 0K => -460C

// Output the temperature in Newton using string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);
//-91N
