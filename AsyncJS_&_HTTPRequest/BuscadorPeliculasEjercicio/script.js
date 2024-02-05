// Clave de API y URL base de TMDB
const tmdbKey = "f68f41ea1794638adbfe03f4760dfced";
const tmdbBaseUrl = "https://api.themoviedb.org/3";

// Botón de reproducción en la interfaz
const playBtn = document.getElementById("playBtn");

// Función asincrónica para obtener los géneros de películas desde TMDB
const getGenres = async () => {
    // Endpoint para la lista de géneros
    const genreRequestEndpoint = "/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`;
    const urltoFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        const response = await fetch(urltoFetch);
        if (response.ok) {
            // Parsear la respuesta JSON y obtener la lista de géneros
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            return genres;
        }
    } catch (error) {
        console.log(error);
    }
};

// Función asincrónica para obtener la lista de películas según el género seleccionado
const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = "/discover/movie";
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    const urltoFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urltoFetch);
        if (response.ok) {
            // Parsear la respuesta JSON y obtener la lista de películas
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies;
        }
    } catch (error) {
        console.log(error);
    }
};

// Función asincrónica para obtener información detallada de una película
const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urltoFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urltoFetch);
        if (response.ok) {
            // Parsear la respuesta JSON y obtener la información de la película
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse;
            return movieInfo;
        }
    } catch (error) {
        console.log(error);
    }
};

// Función para mostrar una película aleatoria
const showRandomMovie = async () => {
    const movieInfo = document.getElementById("movieInfo");
    if (movieInfo.childNodes.length > 0) {
        // Limpiar la película actual si ya hay una mostrada
        clearCurrentMovie();
    }
    // Obtener la lista de películas y una película aleatoria
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    // Obtener información detallada de la película aleatoria y mostrarla
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

// Llamar a la función para obtener géneros y luego poblar el menú desplegable
getGenres().then(populateGenreDropdown);

// Asignar la función showRandomMovie al evento clic del botón de reproducción
playBtn.onclick = showRandomMovie;
