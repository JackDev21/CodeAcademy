/*Parámetros de Función
Los valores de entrada a las funciones se conocen como parámetros cuando se declara o define una función. Los parámetros se utilizan como variables dentro 
del cuerpo de la función. Cuando se llama a la función, estos parámetros tendrán el valor de lo que sea que se pase como argumentos. 
Es posible definir una función sin parámetros.*/

// The parameter is name
function sayHello(name) {
    return `Hello, ${name}!`;
}


const name = 'John';

console.log(sayHello('John'))