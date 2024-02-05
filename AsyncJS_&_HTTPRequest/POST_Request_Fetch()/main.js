// Information to reach API
// Declaración de la clave de API y la URL de la API de Rebrandly
const apiKey = "apiKey";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
// Selección de elementos de la página HTML mediante sus ID
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// Asynchronous functions
// Función asincrónica para acortar una URL utilizando la API de Rebrandly
const shortenUrl = () => {
    // Obtiene la URL que se va a acortar desde el campo de entrada
    const urlToShorten = inputField.value;
    // Prepara los datos en formato JSON para enviar en la solicitud POST
    const data = JSON.stringify({ destination: urlToShorten });

    // Realiza una solicitud POST a la API de Rebrandly
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            apikey: apiKey,
        },
        body: data,
    })
        .then(
            // Verifica si la respuesta fue exitosa (código de estado 200)
            (response) => {
                if (response.ok) {
                    // Si es exitosa, devuelve la respuesta en formato JSON
                    return response.json();
                }
                // Si hay algún error en la respuesta, lanza una excepción
                throw new Error("Request failed!");
            },
            // Manejo de errores de red, muestra el mensaje de error en la consola
            (networkError) => {
                console.log(networkError.message);
            }
        )
        .then((jsonResponse) => {
            // Llama a la función para renderizar la respuesta en la página
            renderResponse(jsonResponse);
        });
};

// Clear page and call Asynchronous functions
// Limpia la página y llama a la función asincrónica para acortar la URL
const displayShortUrl = (event) => {
    // Evita el comportamiento predeterminado del formulario al hacer clic en el botón
    event.preventDefault();
    // Elimina cualquier resultado anterior en el campo de respuesta
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    // Llama a la función para acortar la URL
    shortenUrl();
};

// Event listener para el clic en el botón de acortar
shortenButton.addEventListener("click", displayShortUrl);
