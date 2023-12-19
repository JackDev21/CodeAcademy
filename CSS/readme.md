## Flexbox:

- `display: flex` convierte un elemento en un contenedor de nivel de bloque con elementos flex dentro de él.
- `display: inline-flex` permite que múltiples contenedores flex aparezcan en línea entre sí.
- `justify-content` se utiliza para espaciar elementos a lo largo del eje principal.
- `align-items` se utiliza para espaciar elementos a lo largo del eje secundario.
- `flex-grow` se usa para especificar cuánto espacio (y en qué proporciones) absorben los elementos flex a lo largo del eje principal.
- `flex-shrink` se utiliza para especificar cuánto y en qué proporciones se contraen los elementos flex a lo largo del eje principal.
- `flex-basis` se usa para especificar el tamaño inicial de un elemento con `flex-grow` y/o `flex-shrink`.
- `flex` se utiliza para especificar `flex-grow`, `flex-shrink` y `flex-basis` en una sola declaración.
- `flex-wrap` especifica que los elementos deben cambiar de posición a lo largo del eje secundario si el contenedor flex no es lo suficientemente grande.
- `align-content` se utiliza para espaciar filas a lo largo del eje secundario.
- `flex-direction` se usa para especificar los ejes principal y secundario.
- `flex-flow` se utiliza para especificar `flex-wrap` y `flex-direction` en una sola declaración.
- Los contenedores flex se pueden anidar mediante `display: flex` o `display: inline-flex` para los hijos de otros contenedores flex.

# **GRID ESSENTIALS**

Hasta este punto, hemos cubierto una gran variedad de formas diferentes de manipular la cuadrícula y los elementos dentro de ella para crear diseños interesantes.

- `grid-template-columns` define el número y tamaños de las columnas de la cuadrícula.
- `grid-template-rows` define el número y tamaños de las filas de la cuadrícula.
- `grid-template` es una forma abreviada de definir tanto `grid-template-columns` como `grid-template-rows` en una línea.
- `row-gap` coloca espacios en blanco entre las filas de la cuadrícula.
- `column-gap` coloca espacios en blanco entre las columnas de la cuadrícula.
- `gap` es una forma abreviada de definir tanto `row-gap` como `column-gap` en una línea.
- `grid-row-start` y `grid-row-end` hacen que los elementos abarquen ciertas filas de la cuadrícula.
- `grid-column-start` y `grid-column-end` hacen que los elementos abarquen ciertas columnas de la cuadrícula.
- `grid-area` es una forma abreviada de `grid-row-start`, `grid-column-start`, `grid-row-end` y `grid-column-end`, ¡todo en una línea!
