// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = (arr) => {
    // Utiliza el método reverse para invertir el orden de los elementos del array
    let reversedArray = arr.slice().reverse(); // slice() crea una copia para no mutar el array original

    // Iteramos por cada elemento del array invertido
    for (let i = 0; i < reversedArray.length; i++) {
        // Si el índice es impar (recuerda que empezamos desde 0), multiplica el dígito por 2
        if (i % 2 !== 0) {
            reversedArray[i] *= 2;
            // Si el resultado es mayor a 9, resta 9 al elemento actual
            if (reversedArray[i] > 9) {
                reversedArray[i] -= 9;
            }
        }
    }

    // Suma todos los dígitos
    const sum = reversedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Si el total es múltiplo de 10, el número es válido; de lo contrario, no es válido
    return sum % 10 === 0;
}


const findInvalidCards = (arr) => {

    const invalidCards = arr.filter(card => !validateCred(card)) // Se filtran los elementos que no cumplan la condición de la función validateCred().
    return invalidCards;

}

const idInvalidCardCompanies = (invalidCards) => {

    const companies = [] // Array para almacenar las compañías inválidas.

    for (const card of invalidCards) {  // Iteramos por cada número de tarjeta en el array arr.  

        switch (card[0]) { // Obtenemos el primer dígito del número de tarjeta.
            case 3:
                if (!companies.includes('Amex')) {   // Si la dirección no está en el array companies, la agregamos.
                    companies.push('Amex');
                }
                break;
            case 4:
                if (!companies.includes('Visa')) {
                    companies.push('Visa');
                }
                break;
            case 5:
                if (!companies.includes('Mastercard')) {
                    companies.push('Mastercard');
                }
                break;
            case 6:
                if (!companies.includes('Discover')) {
                    companies.push('Discover');
                }
                break;
            default:
                console.log('Company not found');
                break;
        }
    }

    return companies; // Devolvemos el array companies.  El array companies contiene las compañías inválidas.
}

// Función adicional a continuación

// Función que toma una cadena (tarjeta) y devuelve la cadena como una matriz de caracteres
const cardNumberToString = (card) => {
    return card.split("");
};

const generateCardNumber = () => {
    // Declara un arreglo vacío para almacenar el número de la tarjeta generado
    let card = [];
    // Declara una variable vacía para la suma de los números
    let sum = 0;
    // Declara una variable vacía para el dígito de control
    let checkDigit = 0;

    // Bucle for que inserta un número aleatorio entre 0 y 9 en el arreglo mientras la longitud del arreglo sea menor que 16.
    for (let i = 0; card.length < 16; i++) {
        card.push(Math.floor(Math.random() * 10));
    }

    // Elimina el último dígito
    card = card.slice(0, card.length - 1);

    // Invierte el orden de los números de la tarjeta
    card = card.reverse();

    // Recorre el arreglo de la tarjeta, doblando cada otro número. Misma lógica que validateCred()
    for (let i = 1; i < card.length; i += 2) {
        // Duplica el dígito en el índice [i]
        card[i] *= 2;
        // Si el arreglo en el índice [i] es mayor que 9, resta 9
        if (card[i] > 9) {
            card[i] -= 9;
        }
    }

    // Suma todos los números
    sum = card.reduce((a, b) => a + b, 0);

    // Asigna a checkDigit el módulo 10 de la suma, que es el dígito de control válido
    checkDigit = sum % 10;

    // Invierte el orden de los números de la tarjeta de nuevo y luego agrega el dígito de control al final
    card = card.reverse().concat(checkDigit);
    card = card.concat(checkDigit);
    return card;
};

// Pruebas
console.log(idInvalidCardCompanies([invalid1])); // Debería imprimir ['visa']
console.log(idInvalidCardCompanies([invalid2])); // Debería imprimir ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Debería imprimir ['Visa', 'Mastercard', 'Amex', 'Discover'] el orden depende de la función
console.log(validateCred(invalid1)); // Debería imprimir false
console.log(validateCred(mystery1)); // Debería imprimir false
console.log(validateCred(mystery2)); // Debería imprimir true
console.log(validateCred(valid1)); // Debería imprimir true
console.log(generateCardNumber());