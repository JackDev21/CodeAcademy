/*El método `.forEach()` ejecuta una función de devolución de llamada en cada uno de los elementos de un array en orden.

En el ejemplo de código anterior, la función de devolución de llamada que contiene un método `console.log()` se ejecutará 5 veces, una vez por cada elemento.*/

const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {
    console.log(number);
});

