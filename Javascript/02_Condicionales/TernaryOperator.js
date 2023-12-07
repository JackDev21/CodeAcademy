/*El operador ternario permite una sintaxis compacta en el caso de decisiones binarias (elegir entre dos opciones). 
Acepta una condición seguida de un operador ?, y luego dos expresiones separadas por un :. Si la condición se evalúa como verdadera, 
se ejecuta la primera expresión; de lo contrario, se ejecuta la segunda expresión.*/

let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;