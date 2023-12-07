/*El método `.reduce()` itera a través de un array y devuelve un único valor.

En el ejemplo de código anterior, el método `.reduce()` sumará todos los elementos del array. Toma como argumento una función de devolución de llamada 
con dos parámetros `(acumulador, valorActual)`. En cada iteración, el acumulador es el valor devuelto por la última iteración, y el valorActual es el elemento actual. 
Opcionalmente, se puede pasar un segundo argumento que actúa como el valor inicial del acumulador.*/

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // 10