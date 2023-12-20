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

- `grid-template-columns` define el número y tamaños de las columnas de la cuadrícula.
- `grid-template-rows` define el número y tamaños de las filas de la cuadrícula.
- `grid-template` es una forma abreviada de definir tanto `grid-template-columns` como `grid-template-rows` en una línea.
- `row-gap` coloca espacios en blanco entre las filas de la cuadrícula.
- `column-gap` coloca espacios en blanco entre las columnas de la cuadrícula.
- `gap` es una forma abreviada de definir tanto `row-gap` como `column-gap` en una línea.
- `grid-row-start` y `grid-row-end` hacen que los elementos abarquen ciertas filas de la cuadrícula.
- `grid-column-start` y `grid-column-end` hacen que los elementos abarquen ciertas columnas de la cuadrícula.
- `grid-area` es una forma abreviada de `grid-row-start`, `grid-column-start`, `grid-row-end` y `grid-column-end`, ¡todo en una línea!

# Medidas Relativas en Desarrollo Web

- El contenido en un sitio web puede ser dimensionado relativamente respecto a otros elementos en la página usando medidas relativas.
- La unidad `em` ajusta el tamaño de la fuente en relación con el tamaño de la fuente de un elemento padre.
- La unidad `rem` ajusta el tamaño de la fuente en relación con el tamaño de la fuente de un elemento raíz, que en este caso es el elemento `<html>`.
- Los porcentajes son útiles para dimensionar características del modelo de caja, como el ancho, alto, padding o margen de un elemento.
- Al emplear porcentajes para el ancho y alto, los elementos hijos se dimensionan en relación con las dimensiones de su padre (asegúrate de establecer las dimensiones del padre primero).
- Los porcentajes también pueden usarse para establecer padding y margen, ajustándolos horizontal y verticalmente respecto al ancho del elemento padre.
- Puedes definir el ancho mínimo y máximo de los elementos utilizando `min-width` y `max-width`.
- Asimismo, la altura mínima y máxima de los elementos se puede establecer con `min-height` y `max-height`.
- Al fijar la altura de una imagen o vídeo, su ancho puede ajustarse a `auto` para mantener la proporción al escalar. Modificar estas dos propiedades y valores logrará el mismo efecto.
- Una imagen de fondo en un elemento HTML se ajustará proporcionalmente cuando se configure su propiedad `background-size` en `cover`.

# Revisión: Media Queries en Desarrollo Web

- Cuando un sitio web se adapta al tamaño de la pantalla en la que se visualiza, se le denomina un sitio web responsivo.
- Puedes escribir media queries para ayudar con diferentes tamaños de pantalla.
- Agregar la etiqueta `<meta>` de viewport a nuestro código nos permite controlar el ancho y escalado del viewport para que se dimensione y escale correctamente en todos los dispositivos.
- Las media queries requieren características de medios. Estas características son las condiciones que deben cumplirse para aplicar el CSS dentro de una media query.
- Las características de medios pueden detectar muchos aspectos del navegador del usuario, incluyendo el ancho, alto, resolución, orientación de la pantalla, y más.
- El operador `and` requiere que múltiples características de medios sean verdaderas al mismo tiempo.
- Una lista separada por comas de características de medios solo requiere que una característica de medios sea verdadera para que se aplique el código.
- La mejor práctica para identificar dónde deben establecerse las media queries es redimensionando el navegador para determinar dónde el contenido se rompe naturalmente. Los puntos de quiebre naturales se encuentran al cambiar el tamaño del navegador.
