// Information to reach API
// Declaración de la URL base de la API y parámetros de consulta para sugerencias de palabras relacionadas
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_jja=";

// Selecting page elements
// Selección de elementos de la página HTML mediante sus ID
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// Asynchronous function
// Función asincrónica para obtener sugerencias de palabras relacionadas desde la API
const getSuggestions = async () => {
    // Obtiene la palabra ingresada por el usuario desde el campo de entrada
    const wordQuery = inputField.value;
    // Construye la URL completa concatenando la URL base con los parámetros de consulta y la palabra ingresada
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try {
        // Realiza una solicitud a la API utilizando fetch y espera la respuesta
        const response = await fetch(endpoint, { cache: 'no-cache' });

        // Verifica si la respuesta fue exitosa (código de estado 200)
        if (response.ok) {
            // Convierte la respuesta a formato JSON y espera el resultado
            const jsonResponse = await response.json();
            // Llama a la función para renderizar la respuesta en la página
            renderResponse(jsonResponse);
        }
    } catch (error) {
        // Manejo de errores, muestra el mensaje de error en la consola
        console.log(error);
    }
};

// Clear previous results and display results to webpage
// Limpia los resultados anteriores y muestra las nuevas sugerencias en la página web
const displaySuggestions = (event) => {
    // Evita el comportamiento predeterminado del formulario al hacer clic en el botón
    event.preventDefault();
    // Elimina cualquier resultado anterior en el campo de respuesta
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    // Llama a la función para obtener y mostrar las sugerencias
    getSuggestions();
};

// Event listener para el clic en el botón
submit.addEventListener("click", displaySuggestions);
