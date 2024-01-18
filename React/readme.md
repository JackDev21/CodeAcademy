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
const container = document.getElementById("app");
```

- Esta línea:

- Utiliza el objeto document que representa nuestra página web.
- Utiliza el método `getElementById()` de document para obtener el objeto Element que representa el elemento HTML con el id proporcionado (app).
- Almacena el elemento en container.

  En la siguiente línea:

```javascript
const root = createRoot(container);
```

- utilizamos `createRoot()` de la librería react-dom/client, la cual crea una raíz de React a partir de container y la almacena en root. root puede usarse para renderizar una expresión de JSX. Esta es la parte de "dónde colocar el contenido" del renderizado de React.

Finalmente, la última línea:

```javascript
root.render(<h1>Hola mundo</h1>);
```

- utiliza el método render() de root para renderizar el contenido pasado como argumento. Aquí pasamos un elemento `<h1>`, que muestra Hola mundo. Esta es la parte de "qué contenido renderizar" del renderizado de React.

### INTRODUCCIÓN A JSX

- React es un marco de trabajo (framework) modular, escalable, flexible y popular para el front-end.
- JSX es una extensión de sintaxis para JavaScript que nos permite tratar HTML como expresiones.
- Pueden ser almacenados en variables, objetos, arrays ¡y más!
- Los elementos JSX pueden tener atributos y ser anidados entre sí, al igual que en HTML.
- JSX debe tener exactamente un elemento externo, y otros elementos pueden estar anidados dentro.
- createRoot() de react-dom/client se puede utilizar para crear una raíz de React en el elemento DOM especificado.
- El método render() de una raíz de React puede ser utilizado para renderizar JSX en la pantalla.
- El método render() de una raíz de React solo actualiza los elementos del DOM que han cambiado utilizando el DOM virtual.

A medida que continúas aprendiendo más sobre React, descubrirás cosas poderosas que puedes hacer con JSX, algunos problemas comunes de JSX y cómo evitarlos.

# Componentes y JSX Avanzado

1. **Componentes de Función y JSX:**

   - Los componentes de función pueden devolver múltiples líneas JSX al anidar los elementos en un elemento principal.
   - Se pueden usar atributos variables dentro de un componente de React mediante inyecciones de JavaScript.

2. **Lógica en Componentes:**

   - Los componentes de React admiten lógica al colocar las declaraciones lógicas antes de las declaraciones de retorno.

3. **Condiciones en Componentes:**

   - Los componentes pueden devolver condicionalmente elementos JSX al poner declaraciones condicionales dentro de los componentes.

4. **Manejo de Eventos:**

   - Los componentes pueden responder a eventos al definir manipuladores de eventos y pasarlos a los elementos JSX.

5. **Componentes de Clase:**

   - Los componentes de clase son los que se utilizan para crear elementos JSX de una manera mucho más sencilla.

6. **Componentes de Clase y JSX:**
   - Los componentes de clase pueden devolver elementos JSX de una manera mucho más sencilla.

### Creando una Aplicación React

Utiliza create-react-app para crear fácilmente una aplicación React en tu propia computadora.

### Introducción

React es un framework de interfaz de usuario desarrollado por Facebook. Tiene una tasa de adopción de desarrolladores que crece rápidamente y fue clasificado como el framework web más querido en la encuesta de desarrolladores de Stack Overflow en 2019. Este artículo te guiará a través de la configuración de tu primera aplicación React y asume que estás familiarizado con editores de texto y navegación por línea de comandos.

Nota: Recomendamos usar create-react-app para centrarte en aprender React. Podrás aplicar lo que aprendas aquí a frameworks de React como Next.js.

Preparándote
Utilizaremos el administrador de paquetes Node (npm), así que necesitarás tener Node instalado en tu computadora. Para verificar si tienes Node instalado, ejecuta este comando en tu terminal:

bash
Copy code
node -v
Si tienes Node instalado, este comando devolverá un número de versión, como v12.18.1.

Si aún no está instalado, sigue los pasos en Configuración de Node Localmente antes de continuar.

Cuando instalas Node, automáticamente obtienes npm instalado en tu computadora también. Sin embargo, npm es un proyecto separado de Node.js y tiende a actualizarse con más frecuencia. Como resultado, incluso si acabas de instalar Node (y por lo tanto npm), es buena idea actualizar npm. ¡Afortunadamente, npm sabe cómo actualizarse a sí mismo!

Para actualizar a la última versión de npm en \*nix (OSX, Linux, etc.), puedes ejecutar este comando en tu terminal:

bash
Copy code
sudo npm install -g npm@latest
Para actualizar en Windows, sigue los pasos que se encuentran en la documentación de npm.

1. Configuración de la Aplicación de Referencia
   Es posible crear manualmente una aplicación React, pero Facebook ha creado un paquete de Node llamado create-react-app para generar una versión de referencia de una aplicación React.

Además de proporcionar algo que funcione de inmediato, tiene el beneficio adicional de proporcionar una estructura consistente para las aplicaciones React que reconocerás a medida que te muevas entre proyectos React. También proporciona un script de construcción y un servidor de desarrollo listos para usar.

Utilizaremos npx, una herramienta de ejecución de paquetes que viene con npm 5.2+ y versiones superiores, para instalar y ejecutar create-react-app. Esto asegurará que se utilice la última versión de create-react-app.

Abre tu terminal.

Si previamente instalaste create-react-app globalmente a través de npm install -g create-react-app, se recomienda que desinstales el paquete primero. En tu terminal, ejecuta estos comandos:

bash
Copy code
npm uninstall -g create-react-app
npx create-react-app myfirstreactapp
Si nunca has instalado create-react-app antes, simplemente ejecuta este comando:

bash
Copy code
npx create-react-app myfirstreactapp
Si tienes Yarn instalado, create-react-app lo utilizará por defecto para crear nuevos proyectos. Si prefieres usar npm, puedes agregar --use-npm al comando de creación. Se verá así:

bash
Copy code
npx create-react-app myfirstreactapp --use-npm
(Siéntete libre de reemplazar myfirstreactapp con el nombre que desees, siempre y cuando no contenga letras mayúsculas :-))

Al completar, recibirás algunos consejos rápidos sobre cómo usar la aplicación:

[Comandos de createReactApp](insertar enlace a la imagen)

Antes de ejecutar la aplicación, echemos un vistazo a la estructura de la aplicación y veamos qué contiene.

![react comands](https://content.codecademy.com/programs/react/creating-a-react-app/npm_react_commands.png)

2. Estructura de la Aplicación React
   Cambia a la carpeta de la aplicación que acabas de crear y ábrela en el editor de texto de tu elección. Deberías ver la siguiente estructura de archivos:

```
myfirstreactapp
├── node_modules
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── src
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── serviceWorker.js
│ └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

create-react-app se ha encargado de configurar la estructura principal de la aplicación, así como algunas configuraciones de desarrollo. La mayor parte de lo que ves no será visible para el visitante de tu aplicación web. React utiliza una herramienta llamada webpack que transforma los directorios y archivos aquí en activos estáticos. A los visitantes de tu sitio se les sirven esos activos estáticos.

No te preocupes si no entiendes demasiado sobre webpack por ahora. Uno de los beneficios de usar create-react-app para configurar nuestra aplicación React es que podemos evitar cualquier tipo de configuración manual para webpack. Si estás interesado en profundizar por tu cuenta, puedes encontrar una descripción general de alto nivel de los conceptos principales de webpack aquí.

.gitignore
Este es el archivo estándar utilizado por la herramienta de control de origen git para determinar qué archivos y directorios ignorar al confirmar el código. Aunque este archivo existe, create-react-app no creó un repositorio git dentro de esta carpeta. Si observas el archivo, se ha encargado de ignorar varios elementos (incluso .DS_Store para usuarios de Mac):

[createReactAppGitIgnore](insertar enlace a la imagen)

## package.json

Este archivo describe todas las configuraciones para la aplicación React.
name es el nombre de tu aplicación.
version es la versión actual.
"private": true es una configuración de seguridad para evitar publicar accidentalmente tu aplicación como un paquete público dentro del ecosistema de npm.
dependencies contiene todos los módulos y versiones de Node requeridos para la aplicación. En la imagen anterior, verás seis dependencias. Las primeras tres, como habrás imaginado, son para fines de prueba. Las dos siguientes permiten el uso de react y react-dom en nuestro JavaScript. Finalmente, react-scripts proporciona un conjunto útil de scripts de desarrollo para trabajar con React. En la captura de pantalla anterior, la versión de react especificada es ^16.13.1. Esto significa que npm instalará la versión principal más reciente que coincida con 16.x.x. En cambio, también puedes ver algo como ~1.2.3 en package.json, que solo instalará la versión menor más reciente que coincida con 1.2.x.
scripts especifica alias que puedes usar para acceder a algunos de los comandos de react-scripts de manera más eficiente. Por ejemplo, ejecutar npm test en tu línea de comandos ejecutará react-scripts test --env=jsdom en segundo plano.
También verás dos atributos más, eslintConfig y browserslist. Ambos son módulos de Node que tienen su propio conjunto de valores. browserslist proporciona información sobre la compatibilidad del navegador de la aplicación, mientras que eslintConfig se encarga del linting del código.
node_modules
Este directorio contiene dependencias y subdependencias de los paquetes utilizados por la aplicación React actual, según lo especificado por package.json. Si observas, es posible que te sorprenda la cantidad.

Ejecutar ls -1 | wc -l dentro del directorio node_modules/ dará como resultado más de 800 subcarpetas. ¡Este directorio se agrega automáticamente a .gitignore por una buena razón! No te preocupes, incluso con todas estas dependencias, la aplicación básica solo tendrá alrededor de 50 KB después de ser minificada y comprimida para producción.

## package-lock.json

Este archivo contiene el árbol exacto de dependencias instalado en node_modules/. Esto proporciona una forma para que los equipos que trabajan en aplicaciones privadas se aseguren de tener la misma versión de dependencias y subdependencias. También contiene un historial de cambios en package.json, por lo que puedes ver rápidamente los cambios en las dependencias.

## public

Este directorio contiene activos que se servirán directamente sin procesamiento adicional por parte de webpack. index.html proporciona el punto de entrada para la aplicación web. También verás un favicon (icono de encabezado) y un manifest.json.

El archivo de manifiesto configura cómo se comportará tu aplicación web si se agrega a la pantalla de inicio de un usuario de Android (los usuarios de Android pueden "acortar" aplicaciones web y cargarlas directamente desde la interfaz de usuario de Android). Puedes leer más sobre esto aquí.

### Explorando la Estructura de tu Aplicación React

Dentro de la carpeta `src`, encontrarás diversos archivos esenciales para tu aplicación. Algunos de los archivos y carpetas clave son:

- **App.js:** Este archivo contiene el componente principal de tu aplicación. Es aquí donde definirás la estructura y el comportamiento de tus componentes React.

- **App.css:** Aquí puedes definir estilos específicos para tu componente principal. Cada componente puede tener su propio archivo de estilos.

- **index.js:** Este archivo es la entrada principal de tu aplicación React. Aquí es donde se renderiza tu componente principal en el contenedor especificado en tu archivo `public/index.html`.

- **index.css:** Similar a `App.css`, este archivo proporciona estilos específicos para tu archivo `index.js`.

- **registerServiceWorker.js:** Este archivo configura un service worker para tu aplicación, permitiendo funcionalidades como el almacenamiento en caché y actualizaciones para mejorar la experiencia del usuario.

### Iniciando el Servidor de Desarrollo

Recuerda que puedes iniciar el servidor de desarrollo ejecutando el siguiente comando en tu terminal dentro de la carpeta de tu aplicación:

```bash
npm start
```

Esto abrirá automáticamente una pestaña en tu navegador apuntando a `http://localhost:3000/`, donde podrás ver tu aplicación en tiempo real. Cualquier cambio que realices en el código se reflejará automáticamente en el navegador.

### Personalizando tu Aplicación

1. **Explora y Modifica:** Abre los archivos en la carpeta `src` y experimenta con el código. Modifica el contenido de `App.js` para personalizar el texto y la estructura de tu aplicación.

2. **Añadiendo Componentes:** Conforme tu aplicación crezca, puedes organizarla mejor dividiendo la lógica y la interfaz en componentes más pequeños. Considera crear una carpeta `components` para almacenar estos componentes y otra carpeta `views` para organizar las vistas principales de tu aplicación.

3. **Estilos y Diseño:** Añade estilos a tu aplicación para mejorar la apariencia. Puedes utilizar CSS puro o explorar bibliotecas como Styled Components o Sass para un enfoque más avanzado.

### Siguientes Pasos

Si deseas aprender más sobre `create-react-app`, consulta la documentación en [el sitio web oficial de create-react-app](https://create-react-app.dev/).

Para configurar tu entorno de desarrollo y facilitar la depuración, considera revisar nuestro artículo sobre [React Developer Tools](https://codecademy.com/articles/react-developer-tools).
