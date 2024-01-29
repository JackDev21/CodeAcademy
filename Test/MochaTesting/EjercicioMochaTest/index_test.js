// Importa la biblioteca assert para realizar afirmaciones en las pruebas
const assert = require("assert");
// Importa el objeto Calculate que contiene el método sum
const Calculate = require("../index.js");

// Describe un conjunto de pruebas para el objeto Calculate
describe("Calculate", () => {
    // Describe un conjunto de pruebas para el método sum
    describe(".sum", () => {
        // Prueba 1: Verifica si el método sum devuelve la suma correcta de un array de números
        it("returns the sum of an array of numbers", () => {
            // Valor esperado después de sumar [1, 2, 3]
            const expectedResult = 6;
            // Array de entrada
            const inputArray = [1, 2, 3];

            // Llama al método sum con el array de entrada
            const result = Calculate.sum(inputArray);

            // Utiliza assert.strictEqual para afirmar que el resultado es igual al valor esperado
            assert.strictEqual(result, expectedResult);
        });

        // Prueba 2: Verifica si el método sum devuelve la suma correcta de un array de cuatro números
        it("returns the sum of a four item list", () => {
            // Valor esperado después de sumar [4, 6, 5, 7]
            const expectedResult = 22;
            // Array de entrada
            const inputArray = [4, 6, 5, 7];

            // Llama al método sum con el array de entrada
            const result = Calculate.sum(inputArray);

            // Utiliza assert.strictEqual para afirmar que el resultado es igual al valor esperado
            assert.strictEqual(result, expectedResult);
        });

        // Prueba 3: Verifica si el método sum devuelve 0 cuando el array está vacío
        it("returns zero when the array is empty", () => {
            // Valor esperado cuando el array está vacío
            const expectedResult = 0;
            // Array de entrada vacío
            const inputArray = [];

            // Llama al método sum con el array de entrada vacío
            const result = Calculate.sum(inputArray);

            // Utiliza assert.strictEqual para afirmar que el resultado es igual al valor esperado
            assert.strictEqual(result, expectedResult);
        });
    });
});
