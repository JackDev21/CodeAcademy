/* Cuando pasas un objeto a una función, en realidad estás pasando una referencia a la ubicación de memoria donde se almacena ese objeto. 
Esto significa que si la función modifica alguna de las propiedades del objeto, esas modificaciones se reflejan en el objeto original. */



// Creamos un objeto nave espacial con dos propiedades: tipo de combustible y planeta de origen
const naveEspacial = {
    'TipoDeCombustible': 'Turbocombustible', // El tipo de combustible de la nave espacial
    planetaOrigen: 'Tierra' // El planeta de origen de la nave espacial
};

// Creamos funciones para cambiar el tipo de combustible y deshabilitar la nave espacial de forma remota
const combustibleVerde = obj => {
    // Cambiamos el tipo de combustible a aceite de aguacate
    obj['TipoDeCombustible'] = 'aceite de aguacate'; // Usando corchetes para acceder a la propiedad por clave
};

const deshabilitarRemoto = obj => {
    // Establecemos la propiedad deshabilitado a true
    obj.deshabilitado = true; // Usando notación de punto para acceder a la propiedad por nombre
};

// Llamamos a la función combustibleVerde para cambiar el tipo de combustible a aceite de aguacate
combustibleVerde(naveEspacial);

// Llamamos a la función deshabilitarRemoto para deshabilitar la nave espacial de forma remota
deshabilitarRemoto(naveEspacial);

// Imprimimos el objeto nave espacial a la consola
console.log(naveEspacial);
