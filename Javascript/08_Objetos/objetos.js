// Objeto: un tipo de dato incorporado para almacenar pares de clave-valor. Los datos dentro de los objetos no tienen un orden y los valores pueden ser de cualquier tipo.

// Acceder a propiedades no existentes en un objeto JavaScript devuelve undefined de forma predeterminada.
const eleccionesClase = {
    fecha: '12 de enero'
};

console.log(eleccionesClase.lugar); // undefined

// Los objetos en JavaScript son mutables, lo que significa que sus contenidos pueden cambiar, incluso si se declaran como constantes.
const estudiante = {
    nombre: 'Sheldon',
    puntaje: 100,
    grado: 'A',
};

console.log(estudiante);
// { nombre: 'Sheldon', puntaje: 100, grado: 'A' }

delete estudiante.puntaje;
estudiante.grado = 'F';
console.log(estudiante);
// { nombre: 'Sheldon', grado: 'F' }

// Los objetos no pueden ser reasignados si se han declarado como constantes.
// student = {}; // TypeError: Asignación a una variable constante.

// El bucle for...in de JavaScript se utiliza para iterar sobre las claves de un objeto.
let telefono = {
    marca: 'Samsung',
    modelo: 'Galaxy Note 9',
};

for (let clave in telefono) {
    console.log(`${clave}: ${telefono[clave]}`);
}

// Los literales de objetos en JavaScript se encuentran entre llaves {}. Los valores se asignan a claves en el objeto con un colon (:), y los pares de clave-valor se separan por comas.
// Todas las claves son únicas, pero los valores no lo son.
const clase2018 = {
    estudiantes: 38,
    año: 2018,
};

// El operador delete se usa para eliminar propiedades de un objeto en JavaScript.
const persona = {
    nombre: "Matilda",
    edad: 27,
    hobby: "tejer",
    objetivo: "aprender JavaScript",
};

delete persona.hobby;

console.log(persona);
/*
{
  nombre: "Matilda",
  edad: 27,
  objetivo: "aprender JavaScript"
}
*/

// Cuando los objetos JavaScript se pasan como argumentos a funciones o métodos, se pasan por referencia, no por valor.
// Esto significa que el objeto en sí (no una copia) es accesible y mutable dentro de esa función.

const numOriginal = 8;
const objOriginal = { color: 'azul' };

const cambiarValor = (num, obj) => {
    num = 7;
    obj.color = 'rojo';
};

cambiarValor(numOriginal, objOriginal);

// El número original es 8, ya que los enteros se pasan por valor.
console.log(numOriginal);

// El color del objeto original es 'rojo', ya que los objetos se pasan por referencia y, por lo tanto, son mutables.
console.log(objOriginal.color);

// Los objetos JavaScript pueden tener valores de propiedad que son funciones, a los que se les llama métodos de objeto.
// Los métodos pueden definirse utilizando expresiones de función de flecha anónimas o con la sintaxis de método abreviado.
// Los métodos de objeto se invocan con la sintaxis: nombreObjeto.nombreMétodo(argumentos).

const motor = {
    // método abreviado, con un argumento
    arrancar(adverbio) {
        console.log(`El motor arranca ${adverbio}...`);
    },
    // expresión de función de flecha anónima sin argumentos
    carraspear: () => {
        console.log('El motor hace ruidos extraños...');
    },
};

motor.arrancar('ruidosamente');
motor.carraspear();

/* Salida en la consola:
El motor arranca ruidosamente...
El motor hace ruidos extraños...
*/
