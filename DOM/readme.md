## El Modelo de Objetos del Documento (DOM)

### ¿Qué es el DOM?

El Modelo de Objetos del Documento, abreviado DOM por sus siglas en inglés, es una estructura poderosa similar a un árbol que permite a los programadores conceptualizar la jerarquía y acceder a los elementos en una página web.

El DOM es uno de los acrónimos mejor nombrados en el campo del desarrollo web. De hecho, una forma útil de entender lo que hace el DOM es descomponiendo el acrónimo, aunque no en el orden correcto:

El DOM es un Modelo lógico similar a un árbol que organiza el Documento HTML de una página web como un Objeto.
El DOM es implementado por los navegadores para permitir que JavaScript acceda, modifique y actualice la estructura de una página web HTML de manera organizada.

Por esta razón, nos gusta pensar en el DOM como el enlace entre una página web HTML y los lenguajes de programación.

### Recursos para seguir aprendiendo

- **MDN Web Docs sobre DOM:** [Document Object Model (DOM)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- **W3Schools DOM Tutorial:** [DOM Tutorial](https://www.w3schools.com/js/js_htmldom.asp)
- **Curso en línea gratuito de JavaScript en Codecademy:** [Curso de JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

## El DOM como una Estructura de Árbol

La modelización en forma de árbol se utiliza en muchos campos, incluyendo la ciencia evolutiva y el análisis de datos. Quizás ya estés familiarizado con el concepto de árboles genealógicos: estos gráficos representan las relaciones familiares entre los descendientes de un apellido dado.

El árbol DOM sigue una lógica similar a la de un árbol genealógico. Un árbol genealógico está compuesto por miembros de la familia y sus relaciones con el apellido familiar. En ciencias de la computación, llamaríamos a cada miembro de la familia un nodo.

Definimos un nodo como un punto de intersección en un árbol que contiene datos.

En el árbol DOM, el nodo más alto se llama nodo raíz y representa el documento HTML. Los descendientes del nodo raíz son las etiquetas HTML en el documento, comenzando con la etiqueta `<html>`, seguida de las etiquetas `<head>` y `<body>` y así sucesivamente.

![DOM](./DOM.svg)

## Revisión

Modelo de Objetos del Documento, o DOM, como una estructura!

Repasemos:

- El DOM es un modelo estructural de una página web que permite que los lenguajes de programación accedan a esa página.
- El sistema de organización en el DOM imita la estructura de anidación de un documento HTML.
- Los elementos anidados dentro de otro se denominan hijos de ese elemento. El elemento en el que están anidados se llama elemento padre de esos elementos.
- El DOM también permite acceder a los atributos de un elemento HTML, como style, id, etc.

## JavaScript y el DOM

### La Palabra Clave Document

El Modelo de Objetos del Documento, abreviado DOM, es una poderosa estructura similar a un árbol que organiza los elementos en una página web y permite a los lenguajes de programación acceder a ellos. Esta lección se centrará en algunos de los métodos y propiedades más útiles de la interfaz del DOM en JavaScript. Esta interfaz está implementada por todos los navegadores modernos.

¡Primero lo primero! El objeto document en JavaScript es la puerta de entrada a la estructura del DOM. El objeto document te permite acceder al nodo raíz del árbol DOM. Antes de poder acceder a un elemento específico en la página, primero debes acceder a la estructura del documento en sí. El objeto document permite a los scripts acceder a los hijos del DOM como propiedades.

Por ejemplo, si quieres acceder al elemento `<body>` desde tu script, puedes hacerlo como una propiedad del objeto document usando `document.body`. Esta propiedad devolverá el elemento body de ese DOM.

De manera similar, podrías acceder al elemento `<title>` con la propiedad `.title`. Aquí tienes una lista completa de todas las propiedades del objeto document: [Document Object Model (DOM)](https://developer.mozilla.org/es/docs/Web/API/Document).

## JavaScript y el DOM

- La palabra clave `document` otorga acceso a la raíz del DOM en JavaScript.
- La interfaz del DOM te permite seleccionar un elemento específico con selectores CSS utilizando el método `.querySelector()`.
- Puedes acceder directamente a un elemento por su ID con el método `.getElementById()`, que devuelve un solo elemento.
- Puedes acceder a una serie de elementos con los métodos `.getElementsByClassName()` y `.getElementsByTagName()`, y luego llamar a un solo elemento haciendo referencia a su posición en la serie.
- Las propiedades `.innerHTML` y `.style` te permiten modificar un elemento cambiando su contenido o estilo, respectivamente.
- Puedes crear, agregar y eliminar elementos usando los métodos `.createElement()`, `.appendChild()` y `.removeChild()` respectivamente.
- La propiedad `.onclick` puede agregar interactividad a un elemento del DOM basada en un evento de clic.
- La propiedad `.children` devuelve una lista de los hijos de un elemento y la propiedad `.parentNode` devuelve el nodo conectado más cercano en dirección a la raíz del elemento.

¡Esto resume las principales funcionalidades y métodos para manipular la estructura y el contenido de una página web utilizando JavaScript y el DOM!
