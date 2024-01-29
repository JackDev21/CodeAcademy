// Creación de un objeto Rooster
Rooster = {};

// Definición de la función announceDawn en el objeto Rooster
Rooster.announceDawn = () => {
    // Retorna el sonido característico al amanecer
    return 'cock-a-doodle-doo!';
}

// Definición de la función timeAtDawn en el objeto Rooster con un parámetro 'hour'
Rooster.timeAtDawn = (hour) => {
    // Verificación si la hora está fuera del rango válido (0-23)
    if (hour < 0 || hour > 23) {
        // Lanza un error de rango si la hora no es válida
        throw new RangeError;
    } else {
        // Retorna la hora en formato de cadena si es válida
        return hour.toString();
    };
}

// Exporta el objeto Rooster para su uso en otros archivos
module.exports = Rooster;
