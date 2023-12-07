/* Funciones de Flecha (ES6)
Las expresiones de funciones de flecha fueron introducidas en ES6. Estas expresiones son limpias y concisas. La sintaxis para una expresión de función de flecha 
no requiere la palabra clave `function` y utiliza una flecha gruesa `=>` para separar el/los parámetro(s) del cuerpo.

Existen varias variaciones de funciones de flecha:

Las funciones de flecha con un solo parámetro no requieren `()` alrededor de la lista de parámetros.
Las funciones de flecha con una sola expresión pueden usar el cuerpo de función conciso que devuelve el resultado de la expresión sin la palabra clave `return`.*/



// Arrow function with two parameters 
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: 7 

// Arrow function with no parameters 
const printHello = () => {
    console.log('hello');
};
printHello(); // Prints: hello

// Arrow functions with a single parameter 
const checkWeight = weight => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms.


// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60 