// Information to reach API
// Declaración de la constante 'url' que almacena la URL base de la API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
// Selección de elementos HTML mediante sus ID
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
// Función asincrónica para obtener sugerencias de palabras desde la API
const getSuggestions = () => {
    // Obtiene la palabra ingresada por el usuario desde el campo de entrada
    const wordQuery = inputField.value;
    // Construye la URL completa concatenando la URL base con la palabra ingresada
    const endpoint = `${url}${wordQuery}`;

    // Realiza una solicitud a la API utilizando fetch
    fetch(endpoint, { cache: 'no-cache' }).then(response => {
        // Verifica si la respuesta fue exitosa (código de estado 200)
        if (response.ok) {
            // Si es exitosa, devuelve la respuesta en formato JSON
            return response.json();
        }
        // Si hay algún error en la respuesta, lanza una excepción
        throw new Error('Request failed!');
    }, networkError => {
        // Manejo de errores de red, muestra el mensaje de error en la consola
        console.log(networkError.message)
    }).then(jsonResponse => {
        // Llama a la función para renderizar la respuesta en la página
        renderResponse(jsonResponse)
    });
}

// Clears previous results and display results to webpage
// Limpia los resultados anteriores y muestra las nuevas sugerencias en la página web
const displaySuggestions = (event) => {
    // Evita el comportamiento predeterminado del formulario al hacer clic en el botón de envío
    event.preventDefault();
    // Elimina cualquier resultado anterior en el campo de respuesta
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    // Llama a la función para obtener y mostrar las sugerencias
    getSuggestions();
};

// Event listener para el clic en el botón de envío
submit.addEventListener('click', displaySuggestions);
