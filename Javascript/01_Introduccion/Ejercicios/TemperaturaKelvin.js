// Creamos variable llamada Kelvin almacenando 293
const Kelvin = 0;
// Creamos variable llamada Celsius, para calcular celsius se resta Kelvin - 273
const Celsius = Kelvin - 273;
// calculo de Fahrenheit
let Fahrenheit = Celsius * (9 / 5) + 32;
//Redondeo de numero hacia abajo.
Fahrenheit = Math.floor(Fahrenheit);

console.log(`The temparature is ${Fahrenheit} degrees Fahrenheit`)
