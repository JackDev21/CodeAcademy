// Función para poblar el menú desplegable con todos los géneros disponibles
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres');

    for (const genre of genres) {
        // Crear una opción para cada género y agregarla al menú desplegable
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Función para obtener la selección actual de género del menú desplegable
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Función para mostrar los botones de "Me gusta" y "No me gusta" en la página
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};

// Función para limpiar la película actual de la pantalla
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    // Limpiar el contenido del div del póster y del div del texto de la película
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
};

// Después de dar "Me gusta" a una película, limpia la película actual y obtiene otra película aleatoria
const likeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// Después de no gustar de una película, limpia la película actual y obtiene otra película aleatoria
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// Función para crear el código HTML para el póster de la película
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');

    return posterImg;
};

// Función para crear el código HTML para el título de la película
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;

    return titleHeader;
};

// Función para crear el código HTML para la descripción general de la película
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;

    return overviewParagraph;
};

// Función para obtener una película aleatoria de la primera página de películas
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

// Función que utiliza el DOM para crear HTML y mostrar la película
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');

    // Crear contenido HTML con la información de la película
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);

    // Agregar título, póster y descripción general a la página
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);

    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
};
