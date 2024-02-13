/*Calcula la Media y la Moda
Crea una función statsFinder() que tome una lista de números y devuelva una lista que contenga la media y la moda, en ese orden. 
Como recordatorio, la media es el promedio de los valores y la moda es el valor que más se repite. Si hay varias modas, devuelve la moda que ocurra primero. 
Asegúrate de escribir tus funciones y encontrar estas respuestas desde cero, sin usar herramientas importadas.

Por ejemplo, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) debería devolver [368.75, 400].*/

function statsFinder(numbers) {
  // Calcular la media
  const mean = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

  // Calcular la moda
  const occurrences = {}; // Objeto para contar las ocurrencias de cada número
  let maxCount = 0; // Contador para la cantidad máxima de ocurrencias
  let mode = null; // Variable para almacenar el valor de la moda
  numbers.forEach(number => {
    // Incrementar el contador de ocurrencias para cada número
    occurrences[number] = (occurrences[number] || 0) + 1;
    // Actualizar el valor de la moda si encontramos una ocurrencia mayor
    if (occurrences[number] > maxCount) {
      maxCount = occurrences[number];
      mode = number;
    }
  });

  // Crear una lista con la media y la moda
  const result = [mean, mode];
  return result;
}

// Ejemplo de uso:
console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300])); // Debería devolver [368.75, 400]


