# Introducción a la Validación de Formularios

## Validación del Lado del Cliente: JavaScript

La validación del lado del cliente tiene dos ventajas principales. Primero, es una mejor experiencia para el usuario ser alertado de datos problemáticos de inmediato en lugar de tener que esperar a que esa información regrese del servidor y tener que volver a completar el formulario. En segundo lugar, detectar errores antes en el proceso ahorra tiempo y recursos a la aplicación. Sin embargo, no todos los problemas se pueden manejar con las validaciones HTML integradas.

Para personalizar verdaderamente la validación o realizar validaciones más complejas, podemos incorporar validaciones de formularios con JavaScript. Podemos hacer esto ya sea escribiendo el JavaScript nosotros mismos o incorporando una biblioteca de JavaScript. Si tenemos requisitos únicos para nombres de usuario en nuestro sitio, por ejemplo, tendremos que proporcionar estos sistemas de validación nosotros mismos.

Si estamos creando un sitio web relativamente simple, tiene sentido codificar la validación del formulario nosotros mismos o usar una biblioteca simple de JavaScript, como por ejemplo just-validate. Pero la mayoría de las bibliotecas básicas de validación implicarán acceder o manipular directamente el DOM. Esto puede complicarse al trabajar con un marco de trabajo que depende de un DOM virtual, como React o Vue. En esas situaciones, podría ser mejor incorporar una biblioteca que funcione bien con el marco específico que estás utilizando. Por ejemplo, la biblioteca formik es una biblioteca liviana que simplifica la validación de formularios en una aplicación React.

Instrucciones
Juega un poco con el sitio web que hemos proporcionado. Es un validador de contraseñas con requisitos específicos. Esta validación se realiza completamente en el lado del cliente utilizando JavaScript. Específicamente, utiliza una biblioteca llamada Parsley.js.

https://content.codecademy.com/courses/PHP_FORMS/password_validator/html.html
