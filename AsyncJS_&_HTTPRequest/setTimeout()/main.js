// Imprime un mensaje inicial
console.log("I'm learning about");

// Inicia un bucle for que simula una tarea que toma tiempo
for (let idx = 0; idx < 999999999; idx++) { }

// La ejecución del bucle for retrasa la impresión del siguiente mensaje
console.log("the Event Loop");

// Imprime un mensaje adicional
console.log("I’m learning about");

// Utiliza setTimeout() para programar la ejecución de una función después de 2000 milisegundos (2 segundos)
setTimeout(() => {
    // La función se ejecutará después del tiempo especificado, mostrando un mensaje adicional
    console.log("Event Loop");
}, 2000);

// Imprime otro mensaje
console.log("the");
