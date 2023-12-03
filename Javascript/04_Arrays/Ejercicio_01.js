let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Elimina el último elemento de la matriz
secretMessage.pop();

// Imprime la longitud actual de la matriz
console.log(secretMessage.length);

// Agrega dos nuevas cadenas al final de la matriz
secretMessage.push("to", "Program");

// Reemplaza la cadena en la posición 7 por "right"
// secretMessage[7] = "right";
secretMessage.splice(7, 1, "right");

// Elimina el primer elemento de la matriz
secretMessage.shift();

// Agrega la cadena "Programming" al principio de la matriz
secretMessage.unshift("Programming");

// Reemplaza cinco elementos desde la posición 6 con la cadena "know,"
secretMessage.splice(6, 5, "know,");

// Imprime la matriz convertida en una cadena separada por espacios
console.log(secretMessage.join(" "));
