// Función que simula cocinar frijoles y devuelve una promesa resuelta con 'beans'.
let cookBeans = () => {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asincrónica con setTimeout.
        setTimeout(() => {
            // Resolvemos la promesa con el ingrediente 'beans'.
            resolve('beans');
        }, 1000);
    });
};

// Función que simula cocinar brócoli al vapor y devuelve una promesa resuelta con 'broccoli'.
let steamBroccoli = () => {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asincrónica con setTimeout.
        setTimeout(() => {
            // Resolvemos la promesa con el ingrediente 'broccoli'.
            resolve('broccoli');
        }, 1000);
    });
};

// Función que simula cocinar arroz y devuelve una promesa resuelta con 'rice'.
let cookRice = () => {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asincrónica con setTimeout.
        setTimeout(() => {
            // Resolvemos la promesa con el ingrediente 'rice'.
            resolve('rice');
        }, 1000);
    });
};

// Función que simula hornear pollo y devuelve una promesa resuelta con 'chicken'.
let bakeChicken = () => {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asincrónica con setTimeout.
        setTimeout(() => {
            // Resolvemos la promesa con el ingrediente 'chicken'.
            resolve('chicken');
        }, 1000);
    });
};

// Exportamos las funciones para poder utilizarlas en otros archivos.
module.exports = { cookBeans, steamBroccoli, cookRice, bakeChicken };
