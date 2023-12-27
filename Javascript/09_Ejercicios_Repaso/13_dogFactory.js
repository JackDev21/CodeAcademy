// Definición de la función dogFactory que crea objetos perro con propiedades y métodos
const dogFactory = (name, breed, weight) => {
    return {
        // Propiedades privadas del perro
        _name: name,
        _breed: breed,
        _weight: weight,

        // Getters para obtener los valores de las propiedades
        get name() {
            return this._name;
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },

        // Setters para modificar los valores de las propiedades
        set name(newName) {
            this._name = newName;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },

        // Método que representa el ladrido del perro
        bark() {
            return 'ruff! ruff!';
        },

        // Método que simula al perro comiendo demasiados premios, incrementa el peso en 1
        eatTooManyTreats() {
            this._weight += 1; // Incremento del peso
            return this._weight; // Devuelve el nuevo peso del perro
        }
    };
};

// Creación de un perro usando la función dogFactory y mostrando el resultado en la consola
console.log(dogFactory("Luna", "Chichucho", 6));
