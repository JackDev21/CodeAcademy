
import './App.css';
import Button from './components/Button'
import logo from './img/logo.png'
import Counter from './components/Counter'
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);



  const setItsClickButton = () => {
    setNumClicks(numClicks + 1)
    console.log('click')
  }

  const restartCounter = () => {
    setNumClicks(0)
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
        <Counter numClicks={numClicks} />
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
