import './App.css';
import logo from './img/logo.png'
import Button from './components/button'

function App() {

  const setItsClickButton = () => {
    console.log('click')
  }

  const restartCounter = () => {
    console.log('reiniciar')
  }




  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logo}
          alt='logo de jack' />
      </div>
      <div className='contenedor-principal'>
        <Button
          texto="Click"
          itsClickButton={true}
          setItsClickButton={setItsClickButton} />
        <Button
          texto="Reiniciar"
          itsClickButton={false}
          setItsClickButton={restartCounter} />

      </div>

    </div>
  );
}

export default App;
