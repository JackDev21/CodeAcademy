## Revisión

Vamos a repasar.

HTML crea el esqueleto de una página web, pero JavaScript introduce la interactividad.

El elemento `<script>` tiene una etiqueta de apertura y cierre. Puedes incrustar código JavaScript entre las etiquetas de apertura y cierre `<script>`.

Enlazas a archivos JavaScript externos con el atributo `src` en la etiqueta de apertura `<script>`.

Por defecto, los scripts se cargan y ejecutan tan pronto como el analizador HTML los encuentra en el archivo HTML; el analizador HTML espera cargar el script completo antes de continuar con el análisis de los demás elementos de la página.

El atributo `defer` asegura que se haya analizado todo el archivo HTML antes de que se ejecute el script.

El atributo `async` permitirá que el analizador HTML continúe analizando mientras el script se está descargando, pero se ejecutará inmediatamente después de haber sido descargado.

La convención antigua era colocar los scripts justo antes de la etiqueta `</body>` para evitar que el script bloquee el resto del contenido HTML. Ahora, la convención es colocar la etiqueta del script en el elemento `<head>` y usar los atributos `defer` y `async`.
