## Revisión: Accesibilidad

La accesibilidad web es fundamental para usuarios con discapacidad visual. Aquí hay algunas prácticas clave:

### Uso de Elementos Semánticos

Elige elementos semánticos de HTML (como `<header>` en lugar de `<div id="header">`) para permitir una navegación más eficiente con lectores de pantalla.

### Atributo `role`

Utiliza el atributo `role` para comunicar la función de elementos específicos. `role="presentation"` permite omitir elementos de marcado sin información útil.

### Propiedades ARIA y `aria-label`

Estas propiedades ofrecen información visual no transmitida por texto. Usa `aria-label` para describir elementos que no tienen texto.

### Atributo `alt`

Añade `alt` a cada imagen y elementos que lo admitan, proporcionando una descripción útil de la imagen.

Estas prácticas mejoran la experiencia para usuarios con discapacidad visual, haciendo tu sitio web más inclusivo.
