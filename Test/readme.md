# Biblioteca assert

La biblioteca assert se utiliza para realizar afirmaciones. Contiene numerosas funciones que permiten al probador escribir afirmaciones fácilmente legibles y lanzar AssertionErrors dentro de una prueba.

Ejemplo de uso en un archivo de prueba:

```javascript
describe("+", () => {
	it("devuelve la suma de sus argumentos", () => {
		// Escribe la afirmación aquí
		assert.ok(3 + 4 === 7);
	});
});
```
