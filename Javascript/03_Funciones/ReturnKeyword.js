/*Palabra clave "return"
Las funciones devuelven (pasan de vuelta) valores usando la palabra clave `return`. `return` termina la ejecución de la función y devuelve el valor 
especificado al lugar desde donde fue llamada. Un error común es olvidar la palabra clave `return`, en cuyo caso la función devolverá `undefined` por defecto. */

// With return
function sum(num1, num2) {
    return num1 + num2;
}

// Without return, so the function doesn't output the sum
function sum(num1, num2) {
    num1 + num2;
}