// Guarda la cantidad de memoria utilizada al inicio
let initialMemory = process.memoryUsage().heapUsed;

// Obtiene la palabra pasada como argumento al script
let word = process.argv[2]

// Imprime la palabra proporcionada
console.log(`Your word is ${word}`)

// Crea un nuevo array vacío
let wordArray = [];

// Loop que se ejecuta 1000 veces
for (let i = 0; i < 1000; i++) {
    // Agrega un elemento al array en cada iteración
    wordArray.push(`${word} count: ${i}`)
}

// Imprime la cantidad de memoria al inicio y al final del loop, y la diferencia de memoria utilizada
console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

// node main.js 'JackDev21' (palabra que quieres pasarle al script)
/*Your word is Jackdev21
Starting memory usage: 3452224. 
Current memory usage: 4102824. 
After using the loop to add elements to the array, the process is using 650928 more bytes of memory. */