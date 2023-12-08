/*La sintaxis de nombre de propiedad abreviada en JavaScript permite crear objetos sin especificar explícitamente los nombres de las propiedades 
(es decir, declarar explícitamente el valor después de la clave). En este proceso, se crea un objeto donde los nombres de las propiedades de ese 
objeto coinciden con variables que ya existen en ese contexto. Los nombres de propiedad abreviados llenan un objeto con una clave que coincide con 
el identificador y un valor que coincide con el valor del identificador. */


const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }