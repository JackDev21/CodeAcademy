# Introducción a la Validación de Formularios

## Validación en el Back-end

Independientemente de lo completa que parezca la validación del lado del cliente de un sitio web o aplicación, las validaciones también deben completarse en el back-end o lado del servidor. Las validaciones del lado del cliente son fáciles de eludir: un usuario malintencionado puede simplemente desactivar JavaScript en su navegador, por ejemplo. También existe el potencial de ataques de intermediarios, en los cuales los datos se cambian después de que el usuario envía la solicitud pero antes de que llegue al servidor. Como regla, el back-end nunca debe confiar en los datos que recibe.

Como desarrollador, una vez que los datos están en el back-end, tenemos control completo sobre ellos, por suerte. La validación en el back-end tiene varias ventajas:

- Nos permite usar código de validación a menudo en máquinas con más capacidad de computación.
- Nos permite escribir código de validación que un usuario no puede ver: si los usuarios malintencionados no pueden ver exactamente cómo validamos los datos, es mucho más difícil para ellos encontrar formas de eludirlo.
- Podemos validar la información con otros datos a los que el lado del cliente no tiene acceso, por ejemplo, podemos verificar en nuestra base de datos si un nombre de usuario dado ya está en uso.

Hay dos formas principales de validar entradas en el lado del servidor. La primera tiene lugar mientras el usuario todavía está ingresando datos en el formulario en el lado del cliente. Podemos realizar solicitudes asincrónicas al servidor con partes de sus datos y enviar comentarios directamente al usuario antes de que los hayan enviado. Esto es más lento que la validación del lado del cliente y puede ser un desafío de diseño desde la perspectiva de la experiencia del usuario.

La segunda es una vez que se ha enviado el formulario. La validación del formulario en el back-end es la última defensa de nuestra aplicación contra datos problemáticos, y es esencial verificar la validez y seguridad de los datos antes de agregarlos a una base de datos. También es una oportunidad para "sanear" los datos: para que nuestra base de datos sea útil, es importante que todos los datos estén formateados de manera consistente. Esto significa que, aunque queramos ser flexibles con el formato que requerimos de un usuario, es probable que queramos transformar las entradas a un formato estricto antes de ingresarlas en la base de datos.
