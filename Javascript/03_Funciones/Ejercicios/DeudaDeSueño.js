// Función que devuelve las horas de sueño para un día específico.
const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 8;
        case "tuesday":
            return 7;
        case "wednesday":
            return 9;
        case "thursday":
            return 7;
        case "friday":
            return 8;
        case "saturday":
            return 8;
        case "sunday":
            return 10;
        default:
            return `No se encuentra ese día, ¡error!`; // Mensaje de error si no se encuentra el día.
    }
};

// Función que calcula las horas de sueño totales en una semana.
const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

console.log(getSleepHours("monday")); // Imprime las horas de sueño para el lunes.
console.log(getActualSleepHours()); // Imprime las horas totales de sueño en la semana.

// Función que devuelve las horas ideales de sueño en una semana.
const getIdealSleepHours = () => {
    let idealHours = 8; // Horas ideales de sueño por día.
    return idealHours * 7; // Horas ideales de sueño en una semana.
};

// Función que calcula el déficit de sueño y muestra un mensaje según el caso.
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(); // Horas reales de sueño.
    const idealSleepHours = getIdealSleepHours(); // Horas ideales de sueño.

    if (actualSleepHours === idealSleepHours) {
        console.log("Tienes las horas perfectas de sueño!"); // Si las horas coinciden con lo ideal.
    } else if (actualSleepHours > idealSleepHours) {
        console.log("Tienes más horas de sueño que lo ideal que son " + (idealSleepHours)); // Si se duerme más de lo ideal.
    } else if (actualSleepHours < idealSleepHours) {
        console.log("Necesitas mas horas de sueño al menos " + (idealSleepHours - actualSleepHours)); // Si se necesita más sueño.
    } else {
        console.log("Error!"); // Para cualquier otro caso.
    }
};

calculateSleepDebt(); // Calcula y muestra el déficit de sueño.
