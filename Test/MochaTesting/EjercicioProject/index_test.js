// Importa la librería de aserciones (assert) para realizar pruebas
let assert = require("assert");

// Importa el módulo que contiene la función a probar
let Calculate = require('./index.js')

// Describe un conjunto de pruebas para la función factorial de Calculate
describe('Calculate', () => {
    describe('.factorial', () => {

        // Prueba 1: Verifica si el factorial de 5 es igual a 120
        it('test if factorial 5 equal 120 ', () => {
            // Configuración de la prueba
            const inputNumber = 5;  // Número para calcular el factorial
            const expected = 120;   // Resultado esperado

            // Ejecución de la función a probar
            const result = Calculate.factorial(inputNumber)

            // Verificación del resultado usando la aserción (assert)
            assert.equal(result, expected)
        })

        // Prueba 2: Verifica si el factorial de 3 es igual a 6
        it('test if factorial 3 equal 6', () => {
            // Configuración de la prueba
            const inputNumber = 3;  // Número para calcular el factorial
            const expected = 6;     // Resultado esperado

            // Ejecución de la función a probar
            const result = Calculate.factorial(inputNumber)

            // Verificación del resultado usando la aserción (assert)
            assert.equal(result, expected)
        })

        // Prueba 3: Verifica si el factorial de 0 es igual a 1
        it("returns 1 when you pass in 0.", () => {
            // Configuración de la prueba
            const inputNumber = 0;  // Número para calcular el factorial
            const expected = 1;     // Resultado esperado

            // Ejecución de la función a probar
            const result = Calculate.factorial(inputNumber)

            // Verificación del resultado usando la aserción (assert)
            assert.equal(result, expected)
        })
    });
});
