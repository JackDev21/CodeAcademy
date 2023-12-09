/* Objetos anidados
En el código de la aplicación, Objetos A menudo están anidados: un objeto puede tener otro objeto como propiedad, 
que a su vez podría tener una propiedad que es una matriz de aún más objetos. */

// Definición del objeto spaceship con diferentes propiedades y valores
let spaceship = {
    // array de pasajeros con un objeto que tiene el nombre 'Space Dog'
    passengers: [{ name: 'Space Dog' }],
    // Detalles del telescopio
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    // Detalles de la tripulación, incluyendo el capitán
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            // Método que anima al equipo
            encourageTeam() { console.log('We got this!') },
            // Comida favorita del capitán, un array de alimentos
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    // Detalles del motor de la nave
    engine: {
        model: "Nimbus2000"
    },
    // Detalles de la nanoelectrónica a bordo
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        // Respaldo de la nanoelectrónica, incluyendo detalles de la batería y la capacidad de almacenamiento
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        },
    }
};

// Acceder al primer elemento del array 'passengers' en el objeto 'spaceship'
let firstPassenger = spaceship.passengers[0];

// Acceder al primer alimento favorito del capitán dentro del objeto 'spaceship'
let capFave = spaceship.crew.captain['favorite foods'][0];

// Imprimir el primer pasajero en la consola
console.log(firstPassenger);
