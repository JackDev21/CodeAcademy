// Definición de la clase base HospitalEmployee
class HospitalEmployee {
    // Constructor que recibe el nombre del empleado
    constructor(name) {
        // Inicialización del nombre y días de vacaciones restantes
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

// Definición de la subclase Nurse que extiende la clase HospitalEmployee
class Nurse extends HospitalEmployee {
    // Constructor que recibe el nombre y las certificaciones de la enfermera
    constructor(name, certifications) {
        // Llamada al constructor de la clase base con el nombre
        super(name);
        // Inicialización de las certificaciones
        this._certifications = certifications;
    }

    // Getter para obtener las certificaciones de la enfermera
    get certifications() {
        return this._certifications;
    }

    // Método para añadir una nueva certificación a la enfermera
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

// Creación de una instancia de Nurse llamada nurseOlynyk con nombre 'Olynyk' y certificaciones ['Trauma','Pediatrics']
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// Llamada al método takeVacationDays para tomar 5 días de vacaciones
nurseOlynyk.takeVacationDays(5);

// Impresión en la consola de los días de vacaciones restantes
console.log(nurseOlynyk.remainingVacationDays);

// Llamada al método addCertification para añadir la certificación 'Genetics'
nurseOlynyk.addCertification('Genetics');

// Impresión en la consola de las certificaciones actualizadas
console.log(nurseOlynyk.certifications);
