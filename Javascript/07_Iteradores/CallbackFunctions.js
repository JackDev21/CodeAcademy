/* En JavaScript, una función de devolución de llamada es una función que se pasa como argumento a otra función. Esta función puede ser invocada durante la ejecución de esa función de orden superior (de la que es un argumento).

Dado que, en JavaScript, las funciones son objetos, estas pueden ser pasadas como argumentos.*/


const isEven = (n) => {
    return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.



