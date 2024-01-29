// Inicializa la variable 'counter' con el valor 0.
let counter = 0;

// Se establece un intervalo que ejecutará la función callback cada 1000 milisegundos (1 segundo).
const intervalId = setInterval(() => {
    // Imprime en la consola el valor actual de 'counter'.
    console.log(`Contador: ${counter}`);
    // Incrementa el valor de 'counter' en 1.
    counter++;

    // Verifica si 'counter' ha alcanzado el valor de 5.
    if (counter === 5) {
        // Si 'counter' es 5, detiene el intervalo utilizando 'clearInterval' y pasando el ID del intervalo.
        clearInterval(intervalId);
        // Imprime un mensaje en la consola indicando que el intervalo ha sido detenido.
        console.log("Intervalo detenido.");
    }
}, 1000);

