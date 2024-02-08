// Requiere el módulo 'trails.js' ubicado en el mismo directorio que este archivo
const trails = require('./trails.js');

// Requiere el módulo 'util' de Node.js, que proporciona funciones de utilidad
const util = require('util');

// Función para simular una llamada a la base de datos para buscar la distancia de un sendero específico
const getTrailDistance = (trail, callback) => {
    // Simula un retardo de 1 segundo para simular una operación asincrónica (como una consulta a la base de datos)
    return setTimeout(() => {
        // Verifica si el sendero existe en el objeto 'trails'
        if (trails.hasOwnProperty(trail)) {
            // Si el sendero existe, obtiene los datos del sendero y llama al callback con null (sin error) y los datos del sendero
            const foundTrail = trails[trail];
            callback(null, foundTrail);
        } else {
            // Si el sendero no existe, llama al callback con un nuevo Error indicando que el sendero no se encontró
            callback(new Error('Trail not found!'));
        }
    }, 1000);
}

// Callback function para manejar los datos del sendero si se encuentra o enviar un error si no se encuentra
function callback(error, trailData) {
    if (error) {
        // Si hay un error, imprime el mensaje de error y sale del proceso con un código de error
        console.error(error.message);
        process.exit(1);
    } else {
        // Si no hay error, obtiene los datos del sendero y los imprime
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`);
    }
}

// Llama a la función getTrailDistance con el nombre del sendero y la función de callback
getTrailDistance('North Country', callback);

// Promisify: convierte la función asincrónica getTrailDistance en una función que devuelve una promesa
const getTrailDistancePromise = util.promisify(getTrailDistance);

// Llama a la versión promisificada de la función getTrailDistance con el nombre del sendero
getTrailDistancePromise('North Country')
    .then((foundTrail) => {
        // Si se resuelve la promesa (el sendero se encuentra), imprime los datos del sendero
        const nickname = foundTrail.nickname;
        const mi = foundTrail.miles;
        console.log(`The ${nickname} is ${mi} miles long!`);
    })
    .catch((error) => {
        // Si se rechaza la promesa (el sendero no se encuentra), imprime un mensaje de error
        console.log(`Trail not found, ${error}`);
    });
