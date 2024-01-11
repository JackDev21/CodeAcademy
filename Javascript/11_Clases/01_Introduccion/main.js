// Define una clase Dog
class Dog {
    // El constructor es un método especial que se ejecuta al crear un nuevo objeto de la clase Dog
    constructor(name) {
        this._name = name; // Crea una propiedad "_name" en el objeto con el valor pasado al constructor
        this._behavior = 0; // Crea una propiedad "_behavior" en el objeto y la inicializa con 0
    }

    // Método getter para la propiedad "_name", permite acceder a la propiedad desde fuera de la clase
    get name() {
        return this._name;
    }

    // Método getter para la propiedad "_behavior", permite acceder a la propiedad desde fuera de la clase
    get behavior() {
        return this._behavior;
    }

    // Método que incrementa el valor de la propiedad "_behavior" en 1
    incrementBehavior() {
        this._behavior++;
    }
}

// Crea una nueva instancia de la clase Dog con el nombre 'Halley'
const halley = new Dog('Halley');

// Imprime el valor de la propiedad "name" de la instancia "halley", que será 'Halley'
console.log(halley.name);

// Imprime el valor de la propiedad "behavior" de la instancia "halley", que será 0
console.log(halley.behavior);

// Llama al método "incrementBehavior" en la instancia "halley" que incrementará "_behavior" en 1
halley.incrementBehavior();

// Imprime de nuevo el valor de la propiedad "name" de "halley", seguirá siendo 'Halley'
console.log(halley.name);

// Imprime el valor actualizado de la propiedad "behavior" de "halley", que ahora será 1
console.log(halley.behavior);