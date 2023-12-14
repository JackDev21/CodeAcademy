// Función para calcular el peso en diferentes planetas
const calculateWeight = (earthWeight, planet) => {
    // Evaluación del planeta para determinar el cálculo adecuado
    switch (planet) {
        case "Mercury":
            return `${planet} weight ${earthWeight * 0.378}`; // Peso en Mercurio
        case "Venus":
            return `${planet} weight ${earthWeight * 0.907}`; // Peso en Venus
        case "Mars":
            return `${planet} weight ${earthWeight * 0.377}`; // Peso en Marte
        case "Jupiter":
            return `${planet} weight ${earthWeight * 2.36}`; // Peso en Júpiter
        case "Saturn":
            return `${planet} weight ${earthWeight * 0.916}`; // Peso en Saturno
        default:
            return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."; // Entrada inválida
    }
};

// Llamada a la función para calcular el peso en Mercurio con un peso terrestre de 100 unidades
console.log(calculateWeight(100, "Mercury")); // Imprime el peso en Mercurio basado en un peso terrestre de 100 unidades
