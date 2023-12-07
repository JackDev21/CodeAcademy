/*El alcance es un concepto que determina dónde se pueden acceder a los valores y funciones.

Varios tipos de alcance incluyen:

- **Alcance global:** Un valor o función con alcance global se puede utilizar en cualquier parte del programa.

- **Alcance de archivo o módulo:** Solo se puede acceder al valor o función desde el archivo o módulo específico en el que se encuentra.

- **Alcance de función:** Los valores o funciones son visibles solo dentro de la función en la que se han definido.

- **Alcance de bloque de código:** Los valores o funciones son visibles únicamente dentro de un bloque de código específico, definido por llaves `{ ... }`.*/

function myFunction() {

    var pizzaName = "Volvo";
    // Code here can use pizzaName

}

// Code here can't use pizzaName