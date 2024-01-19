// Definición de la clase base Media
class Media {
    // Constructor que inicializa propiedades comunes a Book y Movie
    constructor(title) {
        // Se asigna el título proporcionado al objeto Media
        this._Media = title;
        // Se establece que por defecto el objeto no está prestado y no tiene calificaciones
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // Getter para obtener el título
    get title() {
        return this._title;
    }

    // Getter para obtener el estado de check
    get isCheckedOut() {
        return this._isCheckedOut;
    }

    // Getter para obtener las calificaciones
    get ratings() {
        return this._ratings;
    }

    // Método para cambiar el estado de check
    toggleCheckOutStatus() {
        this._isCheckedOut = !this.isCheckedOut;
    }

    // Método para obtener el promedio de calificaciones
    getAverageRating() {
        // Se utiliza el método reduce para sumar todas las calificaciones
        const sumRating = this._ratings.reduce(
            (accumulator, rating) => accumulator + rating,
            0
        );
        // Se calcula y retorna el promedio
        const averageRating = sumRating / this._ratings.length;
        return averageRating;
    }

    // Setter para cambiar el estado de check
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    // Método para agregar una calificación al array de calificaciones
    addRating(rating) {
        this._ratings.push(rating);
    }
}

// Clase Book que hereda de Media
class Book extends Media {
    // Constructor que inicializa propiedades específicas de Book
    constructor(title, author, pages) {
        // Llama al constructor de la clase padre (Media) con el título
        super(title);
        // Se asignan el autor y la cantidad de páginas proporcionados
        this._author = author;
        this._pages = pages;
    }

    // Getter para obtener el autor
    get author() {
        return this._author;
    }

    // Getter para obtener la cantidad de páginas
    get pages() {
        return this._pages;
    }
}

// Clase Movie que hereda de Media
class Movie extends Media {
    // Constructor que inicializa propiedades específicas de Movie
    constructor(title, director, runTime) {
        // Llama al constructor de la clase padre (Media) con el título
        super(title);
        // Se asignan el director y la duración proporcionados
        this._director = director;
        this._runTime = runTime;
    }

    // Getter para obtener el director
    get director() {
        return this._director;
    }

    // Getter para obtener la duración
    get runTime() {
        return this._runTime;
    }
}

// Creación de una instancia de Book
const historyOfEverything = new Book(
    "A Short History of Nearly Everything",
    "Bill Bryson",
    544
);
// Se cambia el estado de check y se añaden calificaciones
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
// Se muestra el promedio de calificaciones y la información del libro
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

// Creación de una instancia de Movie
const speed = new Movie("Speed", "Jan de Bont", 116);
// Se cambia el estado de check y se añaden calificaciones
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
// Se muestra el promedio de calificaciones y la información de la película
console.log(speed.getAverageRating());
console.log(speed);
