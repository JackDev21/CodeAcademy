# Frameworks de Pruebas

Los frameworks de pruebas son herramientas utilizadas para organizar y automatizar pruebas, proporcionando retroalimentación útil cuando se producen errores.

## Importancia de los Frameworks de Pruebas

Los frameworks de pruebas son esenciales en el desarrollo de software por varias razones:

- **Organización de Pruebas:** Ayudan a estructurar y organizar las pruebas de manera efectiva, facilitando la ejecución y gestión de suites de pruebas.

- **Automatización:** Permiten la automatización de pruebas, lo que ahorra tiempo y recursos al ejecutar pruebas repetitivas de manera rápida y eficiente.

- **Retroalimentación Clara:** Proporcionan resultados claros y comprensibles, indicando qué pruebas han pasado y cuáles han fallado, lo que facilita la identificación y corrección de errores.

- **Integración Continua:** Facilitan la integración de pruebas en procesos de Integración Continua (CI), asegurando que las pruebas se ejecuten automáticamente después de cada cambio en el código.

## Ejemplo de Uso (Mocha como ejemplo):

## Funciones describe() en Mocha

En Mocha, la función `describe()` se utiliza para agrupar pruebas. Acepta una cadena para describir el grupo de pruebas y una función de retorno de llamada que contiene pruebas `it()`. Las llamadas a `describe()` suelen anidarse para que se asemejen a la estructura del código que se está probando.

Ejemplo de uso:

````javascript
describe('grupo de pruebas', () => {
  // Escribe funciones it aquí
});


## Funciones it() en Mocha

En Mocha, la función `it()` se utiliza para ejecutar pruebas individuales. Acepta una cadena para describir la prueba y una función de retorno de llamada para ejecutar afirmaciones. Las llamadas a `it()` suelen anidarse dentro de bloques `describe()`.

Ejemplo de uso:

```javascript
describe('+', () => {
  it('devuelve la suma de sus argumentos', () => {
    // Escribe afirmaciones aquí

  });
});
````

## Fase de Configuración (Setup Phase)

En pruebas, la fase de Configuración es donde se crean objetos, variables y se establecen condiciones en las que las pruebas dependen.

Ejemplo de uso en Mocha:

```javascript
describe(".pop", () => {
	it("devuelve el último elemento en el array [3phase]", () => {
		// Configuración (Setup)
		const knightString = "knight";
		const jediPath = ["padawan", knightString];

		// Ejecución (Exercise)
		const popped = jediPath.pop();

		// Verificación (Verify)
		assert.ok(popped === knightString);
	});
});
```

## Fase de Ejecución (Exercise Phase)

En pruebas, la fase de Ejecución es donde se ejecuta la funcionalidad bajo prueba.

Ejemplo de uso en Mocha:

```javascript
describe(".pop", () => {
	it("devuelve el último elemento en el array [3phase]", () => {
		// Configuración (Setup)
		const knightString = "knight";
		const jediPath = ["padawan", knightString];

		// Ejecución (Exercise)
		const popped = jediPath.pop();

		// Verificación (Verify)
		assert.ok(popped === knightString);
	});
});
```

## Fase de Verificación (Verify Phase)

En pruebas, la fase de Verificación es donde se comprueban las expectativas frente al resultado de la fase de Ejecución. Aquí es donde se utilizaría `assert`.

Ejemplo de uso en Mocha:

```javascript
describe(".pop", () => {
	it("devuelve el último elemento en el array [3phase]", () => {
		// Configuración (Setup)
		const knightString = "knight";
		const jediPath = ["padawan", knightString];

		// Ejecución (Exercise)
		const popped = jediPath.pop();

		// Verificación (Verify)
		assert.ok(popped === knightString);
	});
});
```

## Fase de Desmontaje (Teardown Phase)

En pruebas, la fase de Desmontaje es donde se restablece el entorno antes de que se ejecute la siguiente prueba. La fase de desmontaje asegura que una prueba esté aislada de otras pruebas.

Ejemplo de uso:

```javascript
it("crea un nuevo archivo con una cadena de texto", () => {
	// Configuración (Setup)
	path = "./message.txt";
	str = "";

	// Ejecución: escribir en el archivo
	fs.appendFileSync(path, str);

	// Verificación: comparar el contenido del archivo con la cadena
	const contents = fs.readFileSync(path);
	assert.equal(contents.toString(), str);

	// Desmontaje: restablecer el archivo
	fs.unlinkSync(path);
});
```

## Pruebas en Aislamiento

Las pruebas de un proyecto deben ejecutarse de forma aislada entre sí. Una prueba no debería afectar a otra. Las pruebas deben poder ejecutarse en cualquier orden.

Este principio asegura que cada prueba sea independiente y no dependa del estado o resultado de otras pruebas. La capacidad de ejecutar pruebas en cualquier orden mejora la flexibilidad y la robustez de las pruebas, ya que no hay dependencias entre ellas.

Algunas prácticas para mantener pruebas en aislamiento incluyen:

- **Configuración y Desmontaje (Setup and Teardown):** Asegúrate de configurar y desmontar el entorno de cada prueba de manera adecuada para evitar impactos en otras pruebas.

- **Datos de Prueba Únicos:** Utiliza datos de prueba únicos o restablece el estado después de cada prueba para evitar dependencias en los datos.

- **Mocking y Stubbing:** Si es necesario interactuar con componentes externos (por ejemplo, bases de datos), considera el uso de técnicas como mocking o stubbing para simular estas interacciones sin afectar otros componentes.

Mantener pruebas en aislamiento facilita la identificación y corrección de errores, así como la ejecución de pruebas de manera más eficiente y confiable.
