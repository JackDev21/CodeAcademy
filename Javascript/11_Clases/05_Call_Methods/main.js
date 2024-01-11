// Define la clase Surgeon con un constructor y métodos.
class Surgeon {
    // El constructor inicializa la instancia con un nombre, departamento y una cantidad determinada de días de vacaciones.
    constructor(name, department) {
        this._name = name; // Propiedad privada para el nombre.
        this._department = department; // Propiedad privada para el departamento.
        this._remainingVacationDays = 20; // Propiedad privada para los días de vacaciones restantes, inicializada en 20.
    }

    // Método getter para obtener el nombre del cirujano.
    get name() {
        return this._name;
    }

    // Método getter para obtener el departamento del cirujano.
    get department() {
        return this._department;
    }

    // Método getter para obtener los días de vacaciones restantes del cirujano.
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // Método que reduce los días de vacaciones restantes cuando el cirujano toma días libres.
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// Se crean dos instancias de la clase Surgeon.
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// Se imprime el nombre del cirujano Romero en la consola.
console.log(surgeonRomero.name); // Output: Francisco Romero

// El cirujano Romero toma 3 días de vacaciones.
surgeonRomero.takeVacationDays(3);

// Se imprime los días de vacaciones restantes del cirujano Romero en la consola.
console.log(surgeonRomero.remainingVacationDays); // Output: 17