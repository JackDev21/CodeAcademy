// Definición de la clase base HospitalEmployee
class HospitalEmployee {
    // Constructor que toma el nombre del empleado
    constructor(name) {
        // Inicialización del nombre y días de vacaciones restantes
        this._name = name;
        this._remainingVacationDays = 20;
    }

    // Getter para obtener el nombre del empleado
    get name() {
        return this._name;
    }

    // Getter para obtener los días de vacaciones restantes
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // Método para tomar días de vacaciones
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// Definición de la clase Nurse que hereda de HospitalEmployee
class Nurse extends HospitalEmployee {
    // Constructor que toma el nombre del enfermero y sus certificaciones
    constructor(name, certifications) {
        // Llamada al constructor de la clase base con el nombre
        super(name);
        // Inicialización de las certificaciones del enfermero
        this._certifications = certifications;
    }
}

// Creación de una instancia de la clase Nurse llamada nurseOlynyk
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
