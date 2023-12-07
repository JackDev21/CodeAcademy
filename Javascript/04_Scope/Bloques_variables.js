/*Variables `const` y `let` son variables con ámbito de bloque, lo que significa que solo son accesibles dentro de su bloque o bloques anidados. En el bloque de código dado, 
intentar imprimir el `statusMessage` usando el método `console.log()` resultará en un ReferenceError. Esta variable solo es accesible dentro de ese bloque if.*/


const isLoggedIn = true;

if (isLoggedIn == true) {
    const statusMessage = 'User is logged in.';
}

console.log(statusMessage);

// Uncaught ReferenceError: statusMessage is not defined