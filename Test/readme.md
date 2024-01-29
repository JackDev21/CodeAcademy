# Importancia de las Pruebas en el Desarrollo de Software

Las pruebas son fundamentales en el desarrollo de software por varias razones, y una de las más importantes es identificar y atrapar problemas en tu código de implementación antes de desplegarlo para los usuarios. Algunas razones clave por las cuales las pruebas son esenciales incluyen:

1. **Detección de Errores:** Las pruebas automatizadas pueden ayudar a identificar errores y problemas en el código antes de que llegue a producción, lo que facilita la corrección de errores antes de que impacten a los usuarios.

2. **Mejora de la Calidad del Código:** Las pruebas permiten mantener un código más limpio y bien estructurado. Al escribir pruebas, los desarrolladores se esfuerzan por hacer que su código sea más modular y fácil de mantener.

3. **Facilita el Mantenimiento:** Las pruebas actúan como una red de seguridad cuando se realizan cambios en el código. Si algo sale mal, las pruebas pueden indicar rápidamente qué parte del código se ha visto afectada.

4. **Aumenta la Confianza en los Cambios:** Cuando se introduce una nueva característica o se realiza una modificación en el código, las pruebas pueden garantizar que las funcionalidades existentes no se vean afectadas.

5. **Ahorro de Tiempo a Largo Plazo:** Aunque escribir pruebas puede llevar tiempo inicialmente, ahorra tiempo a largo plazo al evitar la búsqueda manual de errores y al facilitar la identificación rápida de problemas.

En resumen, las pruebas son una práctica esencial en el desarrollo de software que contribuye a la fiabilidad, mantenibilidad y calidad del código.

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

## assert.ok()

La función `assert.ok()` se utiliza para evaluar una expresión booleana dentro de una prueba. Si la expresión se evalúa como falsa, se lanzará un AssertionError.

Ejemplo de uso en un archivo de prueba:

```javascript
describe("+", () => {
	it("devuelve la suma de sus argumentos", () => {
		// Escribe la afirmación aquí
		assert.ok(3 + 4 === 7);
	});
});
```

## assert.equal()

La función `assert.equal()` verifica una comparación de igualdad flexible (==). Utilizar `assert.equal()` es más expresivo, ya que queda más claro que se está verificando la igualdad en comparación con `assert.ok()`.

Ejemplo de uso:

```javascript
const landAnimals = ["giraffe", "squirrel"];
const waterAnimals = ["shark", "stingray"];

landAnimals.push("frog");
waterAnimals.push("frog");

// Verificar la igualdad de los terceros elementos de los arrays
assert.equal(landAnimals[2], waterAnimals[2]);
```

## assert.strictEqual()

La función `assert.strictEqual()` verifica una comparación de igualdad estricta (===).

Ejemplo de uso:

````javascript
const a = 3;
const b = '3';

// Comparación de igualdad (loose equality)
assert.equal(a, b);

// Comparación de igualdad estricta (strict equality)
assert.strictEqual(a, b);

## assert.deepEqual()

La función `assert.deepEqual()` compara los valores dentro de dos objetos. Realizará la comparación de valores utilizando una igualdad flexible (==).

Ejemplo de uso:

```javascript
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};

// Comparación de igualdad de valores dentro de objetos
assert.deepEqual(a, b);
````

## Hooks before()

En un archivo de prueba, la función `before()` se ejecutará primero, independientemente de su ubicación en el bloque de código. `before()` se utiliza comúnmente para configurar el código, como variables y valores, para que otras funciones los utilicen en su ejecución.

Ejemplo de uso:

```javascript
before(() => {
	path = "./message.txt";
});
```

## Hooks beforeEach()

En un archivo de prueba, la función `beforeEach()` se ejecutará antes de cada prueba. `beforeEach()` se utiliza comúnmente para configurar o reiniciar el código, como variables y valores, para que otras funciones los utilicen en su ejecución.

Ejemplo de uso:

```javascript
beforeEach(() => {
	testCounter++;
});
```

## Hooks after()

En un archivo de prueba, la función `after()` se ejecutará al final, independientemente de su ubicación en el bloque de código. `after()` se utiliza comúnmente para imprimir resultados de las pruebas que se ejecutaron en la suite o para reiniciar variables y valores.

Ejemplo de uso:

```javascript
after(() => {
	console.log("Número de pruebas: " + testCounter);
});
```

## Hooks afterEach()

En un archivo de prueba, la función `afterEach()` se ejecutará después de cada prueba. `afterEach()` se utiliza comúnmente para imprimir resultados de una prueba en particular que se ejecutó en la suite o para reiniciar variables y valores.

Ejemplo de uso:

```javascript
afterEach(() => {
	path = "./message.txt";
});
```
