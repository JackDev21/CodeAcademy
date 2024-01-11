// Define la clase Surgeon
class Surgeon {
    // El constructor es un método que se llama automáticamente al crear una nueva instancia de la clase
    constructor(name, department) {
        // "this.name" establece una nueva propiedad "name" en el objeto y le asigna el valor del argumento "name"
        this.name = name;
        // "this.department" establece una nueva propiedad "department" en el objeto y le asigna el valor del argumento "department"
        this.department = department;
    }
    // No hay métodos adicionales definidos en esta clase, pero podrían agregarse si se necesitaran
}

// Ejemplo de cómo crear una instancia de la clase Surgeon:
// const surgeon1 = new Surgeon('Dr. Smith', 'Cardiology');
// Esto crea un nuevo objeto "surgeon1" con la propiedad "name" establecida en 'Dr. Smith' y la propiedad "department" en 'Cardiology'.