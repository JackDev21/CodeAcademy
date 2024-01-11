// Define la clase Surgeon
class Surgeon {
    // El constructor es un método especial que se ejecuta al crear una nueva instancia de la clase Surgeon
    constructor(name, department) {
        this.name = name; // Establece la propiedad "name" del objeto con el valor pasado al constructor
        this.department = department; // Establece la propiedad "department" del objeto con el valor pasado al constructor
    }
    // No hay métodos adicionales definidos en esta clase.
}

// Crea una nueva instancia de Surgeon con el nombre 'Francisco Romero' y el departamento 'Cardiovascular'
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// Crea otra instancia de Surgeon con el nombre 'Ruth Jackson' y el departamento 'Orthopedics'
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// Imprime el nombre y el departamento de la instancia 'surgeonRomero' en la consola
console.log(surgeonRomero.name, surgeonRomero.department); // Output: Francisco Romero Cardiovascular

// Imprime el departamento y el nombre de la instancia 'surgeonJackson' en la consola, en orden inverso
console.log(surgeonJackson.department, surgeonJackson.name); // Output: Orthopedics Ruth Jackson