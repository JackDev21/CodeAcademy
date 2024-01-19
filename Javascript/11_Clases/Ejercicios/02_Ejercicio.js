// Definición de la clase base School
class School {
    // Constructor que recibe el nombre, nivel y número de estudiantes
    constructor(name, level, number) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = number;
    }

    // Getter para obtener el nombre de la escuela
    get name() {
        return this._name;
    }

    // Getter para obtener el nivel de la escuela
    get level() {
        return this._level;
    }

    // Getter para obtener el número de estudiantes
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    // Método para imprimir información rápida sobre la escuela
    quickFacts() {
        console.log(
            `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
        );
    }

    // Método estático para seleccionar un profesor suplente al azar
    static pickSubstituteTeacher(substituteTeachers) {
        const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacher];
    }

    // Setter para establecer el número de estudiantes, con validación de tipo
    set numberOfStudents(value) {
        if (typeof value === 'number') {
            this._numberOfStudents = value;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
}

// Clase hija PrimarySchool que hereda de School
class PrimarySchool extends School {
    // Constructor que recibe el nombre, número de estudiantes y la política de recogida
    constructor(name, numberOfStudents, pickupPolicy) {
        // Llama al constructor de la clase base con el nombre, nivel 'primary' y número de estudiantes
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;  // Establece la política de recogida
    }

    // Getter para obtener la política de recogida
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

// Clase hija HighSchool que hereda de School
class HighSchool extends School {
    // Constructor que recibe el nombre, número de estudiantes y equipos deportivos
    constructor(name, numberOfStudents, sportsTeams) {
        // Llama al constructor de la clase base con el nombre, nivel 'high' y número de estudiantes
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;  // Establece los equipos deportivos
    }

    // Getter para obtener los equipos deportivos
    get sportsTeams() {
        return this._sportsTeams;
    }
}

// Creación de una instancia de PrimarySchool
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
// Llamada al método quickFacts de la instancia de PrimarySchool
lorraineHansbury.quickFacts();

// Creación de un array de profesores suplentes
const subTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginóbili'];
// Llamada al método estático pickSubstituteTeacher de la clase School
console.log(School.pickSubstituteTeacher(subTeachers));

// Creación de una instancia de HighSchool
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
// Acceso al getter sportsTeams de la instancia de HighSchool
console.log(alSmith.sportsTeams);
