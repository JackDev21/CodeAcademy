/*
La asignación destructiva de JavaScript es una sintaxis abreviada que permite extraer propiedades de un objeto hacia valores de variables específicas.

Utiliza un par de llaves ({}) con nombres de propiedades en el lado izquierdo de una asignación para extraer valores de objetos. El número de variables puede ser menor 
que el total de propiedades de un objeto. */

const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
};
const { possiblePermutations, invented, largestCube } = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'