const subLength = (string, char) => {
    let count = 0; // Inicializar contador de ocurrencias del carácter
    let firstIndex = -1; // Índice de la primera ocurrencia del carácter

    // Iterar a través de la cadena para contar las ocurrencias del carácter y encontrar la primera ocurrencia
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) { // Verificar si el carácter actual coincide con el carácter dado
            count++; // Incrementar el contador de ocurrencias del carácter
            if (firstIndex === -1) {
                firstIndex = i; // Almacenar el índice de la primera ocurrencia del carácter
            }
        }
    }

    // Si el número de ocurrencias es exactamente 2, calcular y retornar la longitud entre las ocurrencias
    if (count === 2) {
        return string.lastIndexOf(char) - firstIndex + 1; // Calcular la longitud entre las ocurrencias, incluyendo los caracteres
    } else {
        return 0; // Si no hay exactamente dos ocurrencias, retornar 0
    }
};

