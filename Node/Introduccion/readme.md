## Introducción a Node.js

### Ejecutando un Programa con Node

Node fue diseñado con el desarrollo web del lado del servidor en mente y tiene mucha funcionalidad considerada para ese fin. Sin embargo, en su forma más simple, proporciona la capacidad de ejecutar programas JavaScript en nuestras propias computadoras en lugar de solo en la consola del navegador o incrustados en HTML.

En esta lección, exploraremos parte de la funcionalidad y propiedades específicas del entorno Node, pero primero, veamos cómo ejecutar un programa.

Necesitaremos crear un archivo con una extensión .js. Llamaremos al nuestro myProgram.js. Luego, abriremos ese archivo con un editor de texto y agregaremos nuestro código:

```javascript
// Dentro de myProgram.js
console.log("Hola Mundo");
```

````

¡Nuestro código está completo! Ahora queremos ejecutarlo. Abriremos nuestra terminal y navegaremos al directorio que contiene myProgram.js. Finalmente, escribiremos el comando `node myProgram.js` en nuestra terminal.

```bash
$ node myProgram.js
```

Los resultados de nuestro programa se imprimirán en la terminal.

```
Hola Mundo
```

```

Este resumen muestra cómo ejecutar un programa simple en Node.js.
```
````


¡Por supuesto! Aquí tienes una traducción y ampliación de la revisión sobre los conceptos fundamentales de Node.js, incluyendo más información sobre algunos módulos adicionales:

---

# Introducción a Node.js




1. **Node.js** es un entorno de ejecución de JavaScript, que nos permite ejecutar nuestro código JavaScript convirtiéndolo en algo que una computadora puede entender.

2. **REPLs** son procesos que leen, evalúan, imprimen y repiten (loop), y Node.js viene con su propio REPL al que podemos acceder en nuestra terminal con el comando `node`.

3. Ejecutamos programas JavaScript con Node en la terminal escribiendo `node` seguido del nombre del archivo (si estamos en el mismo directorio) o la ruta absoluta del archivo.

4. El código puede organizarse en archivos separados, módulos, y combinarse a través de su requerimiento donde sea necesario usando la función `require()`.

5. Los **módulos centrales** (core modules) están integrados en el entorno de Node.js para realizar eficientemente tareas comunes.

6. El módulo **console** exporta un objeto `console` global que permite que la terminal actúe como una consola de depuración, similar al objeto `console` de JavaScript proporcionado por los navegadores web.

7. El módulo **process** es un módulo global que proporciona acceso a información sobre el entorno de ejecución de Node.js.

8. El módulo **os** proporciona métodos para recuperar información sobre la computadora, el sistema operativo y las interfaces de red.

9. El módulo **util** contiene métodos utilizados para mantener y depurar el código.


Estos son solo algunos ejemplos de los numerosos módulos disponibles en Node.js. Al aprovechar estos módulos, los desarrolladores pueden construir aplicaciones robustas y eficientes en Node.js para una variedad de propósitos.

---

```markdown


# Descripción de globalThis en Node.js

En Node.js, `globalThis` es un objeto global que proporciona acceso al contexto global en todas partes de tu aplicación. Este objeto se introdujo en el estándar ECMAScript 2020 y está disponible tanto en navegadores web como en entornos de Node.js.

Cuando hablamos de "contexto global", nos referimos al ámbito más alto en el que se ejecuta tu código. En Node.js, este contexto global es representado por el objeto `global`. Antes de la introducción de `globalThis`, acceder al contexto global en entornos distintos a los navegadores era un poco inconsistente, ya que cada entorno tenía su propia forma de acceder a este contexto global.

La introducción de `globalThis` en ECMAScript 2020 resolvió esta inconsistencia al proporcionar una forma estándar y consistente de acceder al contexto global, tanto en navegadores como en Node.js. Esto significa que puedes usar `globalThis` para acceder a las propiedades y métodos globales desde cualquier parte de tu aplicación Node.js, sin importar dónde se esté ejecutando el código.

Por ejemplo, puedes usar `globalThis` para acceder a variables globales definidas en tu aplicación o para acceder a funciones globales como `setTimeout` o `setInterval`. Aquí te muestro un ejemplo básico:

```javascript
// Definimos una variable global
globalThis.miVariableGlobal = 'Hola desde el contexto global';

// Accedemos a la variable global desde cualquier parte de la aplicación
console.log(globalThis.miVariableGlobal); // Output: Hola desde el contexto global

globalThis.console.log(globalThis.miVariableGlobal); // Output: Hola desde el contexto global
global.console.log(globalThis.miVariableGlobal); // Output: Hola desde el contexto global

```

Es importante recordar que, si bien `globalThis` proporciona acceso al contexto global, se recomienda evitar su uso excesivo y priorizar el uso de técnicas más seguras y controladas, como la importación y exportación de módulos en Node.js. El uso excesivo de variables y funciones globales puede hacer que tu código sea menos mantenible y más propenso a errores.
```

