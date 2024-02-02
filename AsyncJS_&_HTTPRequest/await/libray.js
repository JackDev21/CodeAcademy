/*
  Esta es la función brainstormDinner. Es un poco tonta. Devuelve una promesa que utiliza una serie de funciones setTimeout() para simular una acción asíncrona que consume tiempo. Es un buen ejemplo de "callback hell" o "the pyramid of doom", dos formas en las que la gente describe lo confusas que pueden volverse muchas funciones de devolución de llamada anidadas.
*/

// Definimos la función brainstormDinner como una arrow function.
const brainstormDinner = () => {
    // Devolvemos una nueva promesa utilizando la palabra clave 'new Promise'.
    return new Promise((resolve, reject) => {
        console.log(`Tengo que decidir qué cenar...`);

        // Simulamos una acción asíncrona con setTimeout.
        setTimeout(() => {
            console.log("¿Debería hacer una ensalada...?");

            // Otro setTimeout anidado para simular otra acción asíncrona.
            setTimeout(() => {
                console.log("¿Debería hacer ramen...?");

                // Otro setTimeout anidado para simular otra acción asíncrona.
                setTimeout(() => {
                    console.log("¿Debería hacer huevos...?");

                    // Otro setTimeout anidado para simular otra acción asíncrona.
                    setTimeout(() => {
                        console.log("¿Debería hacer pollo...?");

                        // Resolvemos la promesa con la opción final 'beans' después de un segundo.
                        resolve("beans");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    });
};

// Exportamos la función para poder utilizarla en otros archivos.
module.exports = brainstormDinner;
