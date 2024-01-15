// Definición de la clase HospitalEmployee.
class HospitalEmployee {
    // El constructor se invoca al crear una nueva instancia de HospitalEmployee.
    constructor(name) {
        this._name = name; // Propiedad privada para el nombre del empleado.
        this._remainingVacationDays = 20; // Todos los empleados empiezan con 20 días de vacaciones.
    }

    // Método getter para obtener el nombre del empleado.
    get name() {
        return this._name;
    }

    // Método getter para obtener los días de vacaciones restantes del empleado.
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // Método para registrar días de vacaciones tomados, restando del total de días de vacaciones.
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff; // Se actualiza la cantidad de días de vacaciones restantes.
    }
}


// Crear una instancia de HospitalEmployee.
const nurseOlynyk = new HospitalEmployee('Olynyk');

// Obtener el nombre del empleado.
console.log(nurseOlynyk.name); // Output: Olynyk

// El empleado toma 5 días de vacaciones.
nurseOlynyk.takeVacationDays(5);

// Obtener los días de vacaciones restantes después de tomar los días libres.
console.log(nurseOlynyk.remainingVacationDays); // Output: 15