/*Variables de JavaScript que se declaran fuera de bloques o funciones pueden existir en el alcance global, lo que significa que son accesibles en todo un programa. 
Las variables declaradas fuera de ámbitos más pequeños de bloques o funciones son accesibles dentro de esos ámbitos más pequeños.

Nota: Es una buena práctica mantener al mínimo las variables globales.  */

// Variable declared globally
const color = 'blue';

function printColor() {
    console.log(color);
}

printColor(); // Prints: blue