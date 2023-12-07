/*El método `.filter()` ejecuta una función de devolución de llamada en cada elemento de un array. La función de devolución de llamada para cada uno de los elementos 
debe devolver verdadero (true) o falso (false). El array devuelto es un nuevo array con aquellos elementos para los cuales la función de devolución de llamada devuelve verdadero.

En el ejemplo de código anterior, el array `filteredArray` contendrá todos los elementos de `randomNumbers` excepto el 4.*/


const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {
    return n > 5;
});