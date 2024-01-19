// Definición de una clase base para empleados de hospital
class HospitalEmployee {
    // Constructor que recibe el nombre del empleado
    constructor(name) {
        // Inicialización de propiedades protegidas
        this._name = name;
        this._remainingVacationDays = 20;
    }

    // Getter para obtener el nombre del empleado
    get name() {
        return this._name;
    }

    // Getter para obtener los días de vacaciones restantes del empleado
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // Método para tomar días de vacaciones, reduce los días restantes
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// Definición de una subclase Nurse que hereda de HospitalEmployee
class Nurse extends HospitalEmployee {
    // Constructor que recibe el nombre y certificaciones de la enfermera
    constructor(name, certifications) {
        // Llamada al constructor de la clase base con el nombre
        super(name);
        // Inicialización de propiedad específica de la subclase
        this._certifications = certifications;
    }
}

// Creación de una instancia de Nurse con nombre 'Olynyk' y certificaciones
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// Uso del método takeVacationDays de la clase base para tomar 5 días de vacaciones
nurseOlynyk.takeVacationDays(5);

// Impresión de los días de vacaciones restantes de la enfermera
console.log(nurseOlynyk.remainingVacationDays);

// Impresión de la instancia de Nurse (incluyendo propiedades heredadas)
console.log(nurseOlynyk);
