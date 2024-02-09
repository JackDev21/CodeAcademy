import './App.css';
import logo from './img/calculator-cartoon.png'
import Button from './components/Button'
import Display from './components/Display';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  };

  const clearInput = () => {
    setInput('')
  };

  const calcResult = () => {
    if (input) {
      const result = evaluate(input)
      setInput(parseFloat(result).toFixed(6))
    } else {
      alert('Por favor ingrese valores')
    }
  };


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Logo Calculadora' />
      </div>
      <div className='contenedor-calculadora'>
        <Display input={input} />
        <div className="fila">
          <Button clickButton={addInput}>7</Button>
          <Button clickButton={addInput}>8</Button>
          <Button clickButton={addInput}>9</Button>
          <Button clickButton={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button clickButton={addInput}>4</Button>
          <Button clickButton={addInput}>5</Button>
          <Button clickButton={addInput}>6</Button>
          <Button clickButton={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button clickButton={addInput}>1</Button>
          <Button clickButton={addInput}>2</Button>
          <Button clickButton={addInput}>3</Button>
          <Button clickButton={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button clickButton={calcResult}>=</Button>
          <Button clickButton={addInput}>0</Button>
          <Button clickButton={addInput}>.</Button>
          <Button clickButton={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton clearInput={clearInput}>Clear</ClearButton>
        </div>

      </div>

    </div>
  );
}

export default App;
