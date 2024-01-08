## Eventos del DOM con JavaScript

### ¿Qué es un Evento?

Cuando actualizas tu bandeja de entrada de correo electrónico, haces doble clic en una publicación o desplazas un feed de noticias, algo interesante sucede en tu navegador. ¡Estas acciones se conocen como eventos!

Los eventos en la web son interacciones del usuario y manipulaciones del navegador que puedes programar para activar funcionalidades. Algunos otros ejemplos de eventos son:

- Un clic del mouse en un botón.
- La carga de archivos de página web en el navegador.
- Un usuario deslizando hacia la derecha en una imagen.

Cuando un usuario realiza cualquiera de las acciones anteriores, está causando que el evento se active o se desencadene. Por ejemplo, "se activó un evento de clic cuando se hizo clic en el botón". Ser capaz de responder a estos eventos hace que tu sitio web sea interactivo y, por lo tanto, dinámico.

## EVENTOS DEL DOM CON JAVASCRIPT

- Puedes registrar eventos en elementos del DOM utilizando el método `addEventListener()`.
- `addEventListener()` toma dos argumentos: el tipo de evento y una función manejadora de eventos.
- Cuando se desencadena un evento en el objetivo del evento, se ejecuta la función manejadora de eventos registrada.
- Las funciones manejadoras de eventos también pueden registrarse como valores de las propiedades `onevent` de su objetivo de evento.
- Propiedades del objeto de evento como `.target`, `.type` y `.timeStamp` se utilizan para proporcionar información sobre el evento.
- `addEventListener()` se puede usar para agregar múltiples funciones manejadoras de eventos a un solo evento.
- `removeEventListener()` detiene manejadores de eventos específicos de "escuchar" eventos específicos que se están disparando.
