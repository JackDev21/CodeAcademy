import './App.css';
import Button from './components/Button'
import logo from './img/logo.png'
import Counter from './components/Counter'



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
        <Counter numClicks={10} />
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
