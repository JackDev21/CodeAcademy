
// Setter & Getter 

const menu = {
    _meal: "",
    _price: 0,

    // Setter para la propiedad _meal
    set meal(mealToCheck) {
        // Verifica si mealToCheck es de tipo string
        if (typeof mealToCheck === 'string') {
            // Asigna el valor de mealToCheck a _meal si es un string
            this._meal = mealToCheck;
        }
    },

    // Setter para la propiedad _price
    set price(priceToCheck) {
        // Verifica si priceToCheck es de tipo number
        if (typeof priceToCheck === 'number') {
            // Asigna el valor de priceToCheck a _price si es un número
            this._price = priceToCheck;
        }
    },

    // Getter para la propiedad todaysSpecial
    get todaysSpecial() {
        // Verifica si tanto _meal como _price tienen valores asignados
        if (this._meal && this._price) {
            // Retorna un string con la información del menú si ambos valores están asignados
            return `Today's meal is ${this._meal} for $${this._price}`;
        } else {
            // Retorna un mensaje de error si uno o ambos valores no están asignados correctamente
            return `Meal or price not set correctly`;
        }
    }
};

// Asigna el valor "Pizza" a la propiedad _meal utilizando el setter meal
menu.meal = "Pizza";

// Asigna el valor 8 a la propiedad _price utilizando el setter price
menu.price = 8;

// Imprime en consola el resultado del getter todaysSpecial
console.log(menu.todaysSpecial); // Output: "Today's meal is Pizza for $8"
