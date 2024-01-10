## Self-Closing Tags

Otro error común en JSX involucra las etiquetas de autocierre.

¿Qué es una etiqueta de autocierre?

La mayoría de los elementos HTML usan dos etiquetas: una etiqueta de apertura (<div>) y una etiqueta de cierre (</div>). Sin embargo, algunos elementos HTML como <img> y <input> usan solo una etiqueta. La etiqueta que pertenece a un elemento de una sola etiqueta no es una etiqueta de apertura ni una etiqueta de cierre; es una etiqueta de autocierre.

Cuando escribes una etiqueta de autocierre en HTML, es opcional incluir una barra inclinada justo antes del corchete angular final:

// Válido en HTML con una barra inclinada:
<br />

// También válido, sin la barra inclinada:
<br>

Pero, en JSX, debes incluir la barra inclinada. Si escribes una etiqueta de autocierre en JSX y olvidas la barra inclinada, generará un error:

// Válido en JSX:
<br />

// NO VÁLIDO en absoluto en JSX:
<br>
