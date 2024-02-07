import './App.css';
import Testimonio from './components/Testimonio';
import testimoniosData from './components/testimoniosData';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos en freeCodeCamp</h1>
        {testimoniosData.map((testimonio, index) =>
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        )}
      </div>
    </div>
  );
}

export default App;
