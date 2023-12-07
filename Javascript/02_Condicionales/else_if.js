/*Después de un bloque inicial if, los bloques else if pueden verificar cada uno una condición adicional. Un bloque else opcional puede añadirse después del bloque(s) 
else if para ejecutarse por defecto si ninguno de los condicionales se evalúa como verdadero.*/


const size = 10;

if (size > 100) {
    console.log('Big');
} else if (size > 20) {
    console.log('Medium');
} else if (size > 4) {
    console.log('Small');
} else {
    console.log('Tiny');
}
// Print: Small