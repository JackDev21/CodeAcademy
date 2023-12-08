/*La palabra clave reservada "this" se refiere al objeto que llama a un método, y puede usarse para acceder a propiedades que pertenecen a ese objeto.

Aquí, se utiliza la palabra clave "this" dentro de la función del objeto para referirse al objeto "cat" y acceder a su propiedad "name". */

const cat = {
    name: 'Pipey',
    age: 8,
    whatName() {
        return this.name
    }
};

console.log(cat.whatName());
// Output: Pipey

/* Cada función o método en JavaScript tiene un contexto llamado `this`. Para una función definida dentro de un objeto, `this` se referirá al objeto en sí mismo. 
 Para una función definida fuera de un objeto, `this` hará referencia al objeto global (window en un navegador, global en Node.js). */


const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
        // this refers to the restaurant object
        // and it's used to access its properties
        return this.seatCapacity - this.numCustomers;
    }
}




/*Las funciones flecha en JavaScript no tienen su propio contexto this, sino que usan el this del contexto léxico que las rodea. Por lo tanto, generalmente son una mala elección para escribir métodos de objetos.

Considera el código de ejemplo:

loggerA es una propiedad que utiliza la notación de flecha para definir la función. Dado que data no existe en el contexto global, acceder a this.data devuelve undefined.

loggerB utiliza la sintaxis de método. Dado que this se refiere al objeto que lo engloba, se accede al valor de la propiedad data como se esperaba, devolviendo "abc".*/


const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
};

myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc'


/*Los métodos getter y setter en JavaScript son útiles en parte porque ofrecen una forma de interceptar el acceso y la asignación de propiedades, permitiendo 
realizar acciones adicionales antes de que estos cambios se hagan efectivos. */

const myCat = {
    _name: 'Snickers',
    get name() {
        return this._name
    },
    set name(newName) {
        //Verify that newName is a non-empty string before setting as name property
        if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("ERROR: name must be a non-empty string");
        }
    }
}