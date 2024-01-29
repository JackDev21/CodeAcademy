````markdown
# Asincronía en JavaScript y Solicitudes HTTP

## Introducción

JavaScript es un lenguaje de programación de un solo hilo de ejecución, lo que significa que realiza una tarea a la vez.
Sin embargo, para manejar operaciones que pueden llevar tiempo, como las solicitudes HTTP, JavaScript utiliza la asincronía.

## Asincronía en JavaScript

La asincronía en JavaScript permite que ciertas operaciones se realicen en segundo plano sin bloquear la ejecución del
código principal. Se logra mediante callbacks, promesas y, más recientemente, async/await.

### Ejemplo con Promesas

```javascript
fetch("https://api.example.com/data")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Error:", error));
```
````

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
