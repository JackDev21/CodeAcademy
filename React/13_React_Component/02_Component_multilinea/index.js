// Importa las librerías React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa el componente principal de la aplicación desde './App'
import App from './App';

// Crea un contenedor raíz utilizando createRoot y especifica el elemento DOM con el id 'app'
ReactDOM.createRoot(
    document.getElementById('app')
).render(
    // Renderiza el componente principal 'App' dentro del contenedor raíz
    <App />
);
