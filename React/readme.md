## INTRODUCCIÓN A JSX

### ¿Por qué React?

`React.js` es una biblioteca de JavaScript desarrollada por ingenieros en Facebook. Aquí hay algunas razones por las cuales la gente elige programar con React:

- React es rápido. Las aplicaciones creadas en React pueden manejar actualizaciones complejas y aún sentirse rápidas y receptivas.
- React es modular. En lugar de escribir archivos grandes y densos de código, puedes escribir muchos archivos más pequeños y reutilizables. La modularidad de React puede ser una solución excelente a los problemas de mantenimiento de JavaScript.
- React es escalable. Los programas grandes que muestran una gran cantidad de datos cambiantes son donde React se desempeña mejor.
- React es flexible. Puedes utilizar React para proyectos interesantes que no tienen nada que ver con hacer una aplicación web. Las personas aún están descubriendo el potencial de React. Hay espacio para explorar.
- React es popular. Si bien esta razón tiene poco que ver con la calidad de React, la verdad es que comprender React te hará más empleable.

### Explicación del Renderizado de JSX

```javascript
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hola mundo</h1>);
```

Antes de comenzar, es esencial comprender que React depende de dos cosas para renderizar: qué contenido renderizar y dónde ubicar ese contenido.

Con eso en mente, observemos la primera línea:

```javascript
Copy code
const container = document.getElementById('app')
```

- Esta línea:

- Utiliza el objeto document que representa nuestra página web.
- Utiliza el método `getElementById()` de document para obtener el objeto Element que representa el elemento HTML con el id proporcionado (app).
- Almacena el elemento en container.

  En la siguiente línea:

```javascript
Copy code
const root = createRoot(container)
```

- utilizamos `createRoot()` de la librería react-dom/client, la cual crea una raíz de React a partir de container y la almacena en root. root puede usarse para renderizar una expresión de JSX. Esta es la parte de "dónde colocar el contenido" del renderizado de React.

Finalmente, la última línea:

```javascript
Copy code
root.render(<h1>Hola mundo</h1>)
```

- utiliza el método render() de root para renderizar el contenido pasado como argumento. Aquí pasamos un elemento <h1>, que muestra Hola mundo. Esta es la parte de "qué contenido renderizar" del renderizado de React.
