# PROMESAS EN JAVASCRIPT

¿Qué es una Promesa?
Las promesas son objetos que representan el resultado eventual de una operación asíncrona en JavaScript.
Proporcionan una forma más clara y manejable de trabajar con operaciones asíncronas en comparación con los callbacks.

Un objeto de promesa puede estar en uno de tres estados:

- **Pendiente:** Este es el estado inicial, donde la operación aún no se ha completado.
- **Cumplida:** En este estado, la operación ha finalizado con éxito, y la promesa ahora tiene un valor resuelto. Por ejemplo, la promesa de una solicitud puede resolverse con un objeto JSON como su valor.
- **Rechazada:** Si la operación ha fallado, la promesa tendrá una razón para el fallo. Esta razón suele ser un error de algún tipo.

Nos referimos a una promesa como "resuelta" si ya no está pendiente, es decir, está cumplida o rechazada. Podemos pensar en un lavavajillas para entender los estados de una promesa:

- **Pendiente:** El lavavajillas está funcionando pero aún no ha completado el ciclo de lavado.
- **Cumplida:** El lavavajillas ha completado el ciclo de lavado y está lleno de platos limpios.
- **Rechazada:** El lavavajillas encontró un problema (¡no recibió jabón!) y devuelve platos sucios.

Si nuestra promesa de lavado de platos se cumple, podremos realizar tareas relacionadas, como descargar los platos limpios del lavavajillas. Si se rechaza, podemos tomar medidas alternativas, como ejecutarlo nuevamente con jabón o lavar los platos a mano.

Todas las promesas eventualmente se resuelven, lo que nos permite escribir lógica para qué hacer si la promesa se cumple o si se rechaza.
