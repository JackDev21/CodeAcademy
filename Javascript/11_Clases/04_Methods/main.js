// Define la clase Surgeon.
class Surgeon {
    // El constructor inicializa cada nueva instancia de la clase Surgeon.
    constructor(name, department) {
        this._name = name; // Propiedad privada para almacenar el nombre del cirujano.
        this._department = department; // Propiedad privada para almacenar el departamento del cirujano.
        this._remainingVacationDays = 20; // Todos los cirujanos comienzan con 20 días de vacaciones.
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

    // Método para registrar días de vacaciones tomados, restando del total de días de vacaciones.
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// Crea una nueva instancia de la clase Surgeon para Francisco Romero en el departamento Cardiovascular.
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

// Crea otra nueva instancia de la clase Surgeon para Ruth Jackson en el departamento de Ortopedia.
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// Para usar los métodos de la clase, se podría hacer lo siguiente:
// surgeonRomero.takeVacationDays(3);
// console.log(surgeonRomero.remainingVacationDays); // Esto mostraría 17 en la consola.