// Función que genera un evento aleatorio entre Marathon, Triathlon y Pentathlon.
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2.
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// Función que devuelve la cantidad de días de entrenamiento basados en el evento.
const getTrainingDays = (event) => {
    let days = "";

    // Asigna la cantidad de días según el tipo de evento.
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days; // Devuelve la cantidad de días.
};

const name = 'Nala'; // Nombre del primer atleta.

// Función que registra el evento de un atleta.
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

// Función que registra el tiempo de entrenamiento de un atleta.
const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent(); // Obtiene un evento aleatorio.
const days = getTrainingDays(event); // Obtiene la cantidad de días de entrenamiento para ese evento.
const name2 = 'Warren'; // Nombre del segundo atleta.

logEvent(name, event); // Registra el evento del primer atleta.
logTime(name, days); // Registra la cantidad de días de entrenamiento del primer atleta.

const event2 = getRandEvent(); // Obtiene un segundo evento aleatorio.
const days2 = getTrainingDays(event2); // Obtiene la cantidad de días de entrenamiento para el segundo evento.

logEvent(name2, event2); // Registra el evento del segundo atleta.
logTime(name2, days2); // Registra la cantidad de días de entrenamiento del segundo atleta.
