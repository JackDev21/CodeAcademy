# Introducción a la Validación de Formularios

## Introducción

Los sitios web modernos requieren mucha información para funcionar como se espera. Datos como nuestros nombres de usuario, contraseñas, "amigos", "me gusta", información de tarjetas de crédito y pedidos de compra deben ser proporcionados por los usuarios en el frontend y enviados a los servidores de las aplicaciones web para que puedan ser procesados. Esta información se utiliza para crear una experiencia personalizada para el usuario.

La información del usuario se recopila tradicionalmente utilizando formularios HTML. Si alguna vez has ingresado texto en un sitio web, seleccionado opciones en una lista o marcado casillas y luego presionado enter o un botón, ¡probablemente hayas completado y enviado un formulario HTML!

Para que los datos enviados a través de los formularios sean útiles, es esencial que la información sea válida; ¡si se te permitiera enviar accidentalmente tu apellido donde se esperaba tu dirección, tu paquete nunca llegaría!

El proceso de verificar que la información enviada a través de un formulario cumpla con las expectativas se llama validación de formularios. En esta lección, exploraremos las diferentes técnicas para validar entradas de formularios.

## ¿Por qué validar formularios?

La mayoría de los datos, una vez enviados, son almacenados por un sitio web o una aplicación web. Se guardan en una base de datos en el servidor. Hay razones importantes por las cuales debemos asegurarnos de que la información que se almacenará en la base de datos sea precisa.

Queremos que las operaciones que dependen de los datos funcionen: Permitir que un usuario ingrese una dirección de correo electrónico con un formato incorrecto, ya sea a propósito o por accidente, significa que no podremos contactar a ese usuario más adelante. Permitir que un usuario se registre con un nombre de usuario que ya está en uso podría causar numerosos errores más adelante. Asegurarnos de recopilar todos los datos que necesitamos y verificar que los datos estén formateados correctamente puede ahorrarle muchos problemas a una aplicación web y a sus usuarios.

Queremos mantener nuestro sitio seguro: Los datos no protegidos dejan puntos de entrada para actores maliciosos que pueden dañar nuestra aplicación o nuestros usuarios. Permitir que un usuario envíe una contraseña no segura significa que su cuenta no estará protegida. Los formularios no protegidos también pueden permitir que fragmentos de código se inyecten en nuestros servidores. Esto puede dejar expuesta la información sensible de nuestros usuarios. ¡El actor malintencionado incluso podría tomar el control de nuestro sitio o corromper nuestros datos existentes!

# Expresiones Regulares

Los datos enviados a través de formularios se almacenan como cadenas de texto. Las cadenas de texto son un tipo de dato fundamental en la ciencia de la computación que representa una serie de caracteres "concatenados". Como humanos, podemos reconocer intuitivamente patrones dentro de las cadenas de texto, lo que nos permite detectar errores. Intenta notar qué está mal en los siguientes ejemplos:

ABCDEF2GHIJKLMNOPQRSTUVWXYZ
Mi código postal es 9021
El gato meowó

<h1> ¡Hola, Mundo! </h2>

En el primer ejemplo, teníamos las letras del alfabeto presentadas en orden pero interrumpidas por un número 2 fuera de lugar. En el segundo, omitimos el quinto dígito de un código postal famoso. En el tercero, omitimos la "a" de la palabra gato. En el último ejemplo, escribimos HTML con una etiqueta de apertura <h1> pero una etiqueta de cierre </h2> no coincidente. Si notaste estos errores, es porque tu cerebro ha sido entrenado para esperar patrones en ciertos tipos de datos.

A diferencia de los humanos, que pueden recibir este entrenamiento de manera pasiva con el tiempo, las computadoras deben programarse precisamente para reconocer patrones. Para especificar patrones para que la computadora los reconozca, usamos un lenguaje especial llamado expresiones regulares, también conocidas como regex o regexp. Una expresión regular es una secuencia de caracteres que representa un patrón. Podemos usar ese patrón para encontrar coincidencias en una cadena de texto, confirmar que los datos tienen un formato aceptable, o incluso reemplazar partes de las cadenas de texto con diferentes caracteres.
