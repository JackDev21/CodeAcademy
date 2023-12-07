## Métodos de iteración de Arrays en JavaScript

En JavaScript, los métodos de iteración de Arrays son fundamentales para manipular datos. Aquí hay algunos métodos clave:

### `forEach()`

- **Uso:** Ejecuta un código en cada elemento del Array.
- **Efecto:** No altera el Array original y devuelve `undefined`.

### `map()`

- **Uso:** Ejecuta código en cada elemento del Array y devuelve una nueva matriz con elementos actualizados.
- **Resultado:** Produce una nueva matriz sin modificar la original.

### `filter()`

- **Uso:** Evalúa cada elemento del Array según un criterio y devuelve una nueva matriz con elementos que cumplen ese criterio.
- **Resultado:** Genera una nueva matriz basada en la condición especificada.

### `findIndex()`

- **Uso:** Encuentra el índice del primer elemento que satisface una condición dada.
- **Resultado:** Devuelve el índice del elemento que cumple la condición o `-1` si ninguno lo hace.

### `reduce()`

- **Uso:** Itera sobre una matriz y acumula los valores de los elementos para devolver un único valor.
- **Resultado:** Reduce la matriz a un valor único según la función dada.

Todos estos métodos toman una función de devolución de llamada como argumento, la cual puede ser una función predefinida, una expresión de función o una función de flecha.

---
