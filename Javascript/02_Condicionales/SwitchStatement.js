/*Las declaraciones switch proporcionan un medio para verificar una expresión contra múltiples cláusulas case. Si un caso coincide, se ejecuta el código dentro de esa cláusula.

La cláusula case debería terminar con la palabra clave break. Si ningún caso coincide pero se incluye una cláusula default, se ejecutará el código dentro de default.

Nota: Si se omite break en el bloque de un caso, la declaración switch seguirá verificando los valores de los casos hasta que se encuentre un break o se interrumpa el flujo.*/


const food = 'salad';

switch (food) {
    case 'oyster':
        console.log('The taste of the sea 🦪');
        break;
    case 'pizza':
        console.log('A delicious pie 🍕');
        break;
    default:
        console.log('Enjoy your meal');
}

// Prints: Enjoy your meal