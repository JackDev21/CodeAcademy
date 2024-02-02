````markdown
# Asincronía en JavaScript y Solicitudes HTTP

## Introducción

JavaScript es un lenguaje de programación de un solo hilo de ejecución, lo que significa que realiza una tarea a la vez.
Sin embargo, para manejar operaciones que pueden llevar tiempo, como las solicitudes HTTP, JavaScript utiliza la asincronía.

## Asincronía en JavaScript

La asincronía en JavaScript permite que ciertas operaciones se realicen en segundo plano sin bloquear la ejecución del
código principal. Se logra mediante callbacks, promesas y, más recientemente, async/await.

## Funciones Asincrónicas Comunes

### setTimeout()

La función `setTimeout()` permite programar la ejecución de una función después de un cierto tiempo de espera. Es útil para
introducir retrasos en la ejecución de código.

```javascript
console.log("Inicio del programa");

// Ejecuta la función después de 2000 milisegundos (2 segundos)
setTimeout(() => {
	console.log("Función después de 2 segundos");
}, 2000);

console.log("Fin del programa");
```
````

### setInterval()

La función `setInterval()` inicia un intervalo de tiempo durante el cual una función específica se ejecutará repetidamente a intervalos regulares.

```javascript
let counter = 0;

// Se ejecuta la función cada 1000 milisegundos (1 segundo)
const intervalId = setInterval(() => {
	console.log(`Contador: ${counter}`);
	counter++;

	// Se detiene el intervalo después de 5 iteraciones
	if (counter === 5) {
		clearInterval(intervalId);
		console.log("Intervalo detenido.");
	}
}, 1000);
```

### Ejemplo con Promesas

```javascript
fetch("https://api.example.com/data")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Error:", error));
```

## Solicitudes HTTP

Las solicitudes HTTP son comunes en el desarrollo web para obtener o enviar datos a través de la red. En JavaScript, se utilizan las funciones `fetch` o bibliotecas como `axios` para realizar estas solicitudes.

### Ejemplo con fetch

```javascript
fetch("https://api.example.com/data")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Error:", error));
```

## Recursos Adicionales

- [MDN Web Docs - JavaScript Asíncrono](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Axios - Cliente HTTP para JavaScript](https://axios-http.com/)

```

```

# Async/Await - Revisión

¡Excelente trabajo al familiarizarte con la sintaxis async...await! Vamos a repasar lo que has aprendido:

- **async...await** es azúcar sintáctica construida sobre promesas nativas y generadores de JavaScript.
- Declaramos una función asíncrona con la palabra clave `async`.
- Dentro de una función asíncrona, utilizamos el operador `await` para pausar la ejecución de nuestra función hasta que una acción asíncrona se complete y la promesa esperada ya no esté pendiente.
- `await` devuelve el valor resuelto de la promesa esperada.

- Podemos escribir múltiples declaraciones `await` para producir código que se lee como código síncrono.

- Utilizamos bloques `try...catch` dentro de nuestras funciones asíncronas para manejar errores.

- Aunque utilizamos `async...await` para hacer que el código se lea de manera más síncrona, aún aprovechamos la concurrencia escribiendo funciones asíncronas que permiten que las acciones asíncronas ocurran en paralelo siempre que sea posible.

## Más Información

La utilización de `async...await` es una práctica común en el desarrollo de JavaScript moderno, y ofrece una forma más limpia y legible de manejar operaciones asíncronas. Sin embargo, es fundamental entender que estamos trabajando con promesas subyacentes y que aún debemos aprovechar la concurrencia cuando sea posible.

## Ejemplo de Uso

```javascript
async function exampleAsyncFunction() {
	try {
		let result1 = await someAsyncOperation1();
		let result2 = await someAsyncOperation2();
		// ... más operaciones asíncronas ...

		console.log("Results:", result1, result2);
	} catch (error) {
		console.error("Error:", error);
	}
}

// Llamamos a la función asíncrona
exampleAsyncFunction();
```
