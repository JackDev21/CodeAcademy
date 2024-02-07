## Patrones de Programación en React

Este repositorio contiene un primer patrón de programación para ayudar a organizar tu código en React. Dividiste un componente React complejo en un componente contenedor y un par de componentes de presentación.

Aquí están los pasos que seguimos:

1. Identificamos que el componente original necesitaba ser refactorizado: manejaba cálculos/lógica y presentación/renderizado.
2. Creamos un componente contenedor que contiene toda la lógica con estado.
3. Creamos una función que llama al método setter de estado proporcionado por useState().
4. Creamos y exportamos componentes de presentación que contienen solo JSX.
5. Importamos los componentes de presentación en el componente contenedor.
6. Utilizamos los componentes de presentación en la declaración de retorno del componente contenedor.
7. Pasamos el estado y las funciones utilizadas para cambiar el estado como props a los componentes de presentación renderizados.

En este patrón de programación, el componente contenedor hace el trabajo de determinar qué mostrar utilizando el estado. El componente de presentación hace el trabajo de mostrar realmente el estado a través de props. Si un componente realiza una cantidad significativa de trabajo en ambas áreas, ¡entonces eso es una señal de que deberías usar este patrón!
