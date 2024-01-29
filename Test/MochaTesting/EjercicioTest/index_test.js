const assert = require("assert");
const Rooster = require("../index");

// Suite de pruebas para el objeto Rooster
describe("Rooster", () => {

    // Suite de pruebas para la función announceDawn
    describe(".announceDawn", () => {
        it("returns a rooster call", () => {
            // Configuración (setup)
            const expected = "cock-a-doodle-doo!";

            // Ejecución (exercise)
            const actual = Rooster.announceDawn();

            // Verificación (verify)
            assert.equal(actual, expected);
        });
    });

    // Suite de pruebas para la función timeAtDawn
    describe(".timeAtDawn", () => {
        it("return its argument as a string", () => {
            // Configuración (setup)
            const inputNumber = 12;
            const expected = "12";

            // Ejecución (exercise)
            const actual = Rooster.timeAtDawn(inputNumber);

            // Verificación (verify)
            assert.equal(actual, expected);
        });

        it("throws an error if passed a number less than 0", () => {
            // Configuración (setup)
            const inputNumber = -1;
            const expected = RangeError;

            // Verificación (verify)
            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber);
                // Ejecución (exercise)
            }, expected);
        });

        it("throws an error if passed a number more than 23", () => {
            // Configuración (setup)
            const inputNumber = 24;
            const expected = RangeError;

            // Verificación (verify)
            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber);
                // Ejecución (exercise)
            }, expected);
        });
    });
});
