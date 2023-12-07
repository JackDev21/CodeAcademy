/* En JavaScript, las funciones son un tipo de dato al igual que las cadenas, números y matrices. Por lo tanto, las funciones pueden asignarse como valores a variables,
pero son diferentes a todos los demás tipos de datos porque pueden ser invocadas. */


let plusFive = (number) => {
    return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked. 
f(9); // 14



/*En JavaScript, las funciones pueden ser asignadas a variables de la misma manera que se asignan cadenas o matrices. También pueden ser pasadas como parámetros a otras funciones o retornadas por ellas.

Una "función de orden superior" es una función que acepta funciones como parámetros y/o devuelve una función.*/