import './App.css';
import './styles/logo.css'
import Logo from './components/Logo'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='tareas-list'>
        <h1>LISTA DE TAREAS</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
